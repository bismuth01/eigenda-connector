import EigenDAClient from "./eigen";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface BlobResult {
  requestId: string;
  status: string;
  batchHeaderHash?: string;
  blobIndex?: number;
}

async function storeBlob(
  data: string,
  noOfAttempts?: number,
  timeBetweenAttempts: number = 10000,
) {
  try {
    const client = new EigenDAClient();

    console.log("Storing data:", data);

    // Store the blob
    const disperseResult = await client.disperseString(data);
    console.log("\nInitial Result:");
    console.log("Request ID:", disperseResult.requestId);
    console.log("Status:", disperseResult.status);

    // Poll until we get both batch header hash and blob index
    console.log("\nWaiting for blob to be processed...");
    let statusResult;
    let attempts = 0;
    const maxAttempts = noOfAttempts || 30; // Maximum number of attempts

    do {
      await sleep(timeBetweenAttempts);
      attempts++;
      console.log(`Checking status (attempt ${attempts})...`);

      statusResult = await client.getBlobStatus(disperseResult.requestId);

      if (attempts >= maxAttempts) {
        throw new Error("Timeout waiting for blob to be processed");
      }
    } while (
      !statusResult.batchHeaderHash ||
      typeof statusResult.blobIndex === "undefined"
    );

    console.log("\nBlob Information:");
    console.log("Batch Header Hash:", statusResult.batchHeaderHash);
    console.log("Blob Index:", statusResult.blobIndex);

    return {
      ...disperseResult,
      ...statusResult,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error("\nError:", error.message);
      if ("details" in error) {
        console.error("Details:", (error as any).details);
      }
    } else {
      console.error("\nUnknown error occurred");
    }
    throw error;
  }
}

// Example usage
if (require.main === module) {
  const textToStore = process.argv[2] || "Hello, EigenDA!";
  console.log("\nStoring text:", textToStore);
  storeBlob(textToStore).catch(() => process.exit(1));
}

export { storeBlob };
