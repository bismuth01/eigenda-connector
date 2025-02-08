import { DisperserClient } from "./generated/disperser_grpc_pb";
import {
  DisperseBlobRequest,
  DisperseBlobReply,
  RetrieveBlobRequest,
  RetrieveBlobReply,
  BlobStatusRequest,
  BlobStatusReply,
  BlobStatus,
} from "./generated/disperser_pb";
import * as grpc from "@grpc/grpc-js";
import * as dotenv from "dotenv";

dotenv.config();

interface DisperseResult {
  requestId: string;
  status: string;
}

interface BlobStatusResult {
  status: string;
  batchHeaderHash?: string;
  blobIndex?: number;
}

class EigenDAClient {
  private client: DisperserClient;

  constructor() {
    this.client = new DisperserClient(
      process.env.DISPERSER_RPC || "disperser-holesky.eigenda.xyz:443",
      grpc.credentials.createSsl(),
    );
  }

  /**
   * Prepares the data in a format acceptable to EigenDA
   */
  private prepareData(data: string): Uint8Array {
    const bytes = Buffer.from(data, "utf-8");
    const buffer = Buffer.alloc(32, 0);

    const MAX_LENGTH = 16;
    if (data.length > MAX_LENGTH) {
      console.warn(`Warning: Data will be truncated to ${MAX_LENGTH} bytes`);
    }

    // Copy data bytes, but limit to 16 bytes to ensure the value stays well below the field modulus
    const maxLength = Math.min(bytes.length, 16);
    for (let i = 0; i < maxLength; i++) {
      // Place each byte in the latter half of the buffer
      buffer[16 + i] = bytes[i];
    }

    return buffer;
  }

  async disperseString(data: string): Promise<DisperseResult> {
    return new Promise((resolve, reject) => {
      const request = new DisperseBlobRequest();
      const preparedData = this.prepareData(data);
      request.setData(preparedData);

      this.client.disperseBlob(
        request,
        (error: grpc.ServiceError | null, response?: DisperseBlobReply) => {
          if (error) {
            reject(error);
            return;
          }
          if (!response) {
            reject(new Error("No response received"));
            return;
          }
          resolve({
            requestId: Buffer.from(response.getRequestId_asU8()).toString(
              "hex",
            ),
            status: BlobStatus[response.getResult()],
          });
        },
      );
    });
  }

  async getBlobStatus(requestId: string): Promise<BlobStatusResult> {
    return new Promise((resolve, reject) => {
      const request = new BlobStatusRequest();
      request.setRequestId(Buffer.from(requestId, "hex"));

      this.client.getBlobStatus(
        request,
        (error: grpc.ServiceError | null, response?: BlobStatusReply) => {
          if (error) {
            reject(error);
            return;
          }
          if (!response) {
            reject(new Error("No response received"));
            return;
          }

          const result: BlobStatusResult = {
            status: BlobStatus[response.getStatus()],
          };

          // If blob info is available (for confirmed/finalized blobs)
          const blobInfo = response.getInfo();
          if (blobInfo) {
            const verificationProof = blobInfo.getBlobVerificationProof();
            if (verificationProof) {
              const batchMetadata = verificationProof.getBatchMetadata();
              if (batchMetadata) {
                result.batchHeaderHash = Buffer.from(
                  batchMetadata.getBatchHeaderHash_asU8(),
                ).toString("hex");
              }
              result.blobIndex = verificationProof.getBlobIndex();
            }
          }

          resolve(result);
        },
      );
    });
  }

  /**
   * Retrieves and processes the stored string
   */
  async retrieveString(
    batchHeaderHash: string,
    blobIndex: number,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = new RetrieveBlobRequest();
      request.setBatchHeaderHash(Buffer.from(batchHeaderHash, "hex"));
      request.setBlobIndex(blobIndex);

      this.client.retrieveBlob(
        request,
        (error: grpc.ServiceError | null, response?: RetrieveBlobReply) => {
          if (error) {
            reject(error);
            return;
          }
          if (!response) {
            reject(new Error("No response received"));
            return;
          }
          const data = Buffer.from(response.getData_asU8());
          // Extract the data from the latter half of the buffer
          const text = data.slice(16).toString("utf-8").replace(/\0+$/, "");
          resolve(text);
        },
      );
    });
  }
}

export default EigenDAClient;
