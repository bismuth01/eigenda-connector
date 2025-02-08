import EigenDAClient from "./eigen";

async function retrieveBlob(batchHeaderHash: string, blobIndex: number) {
  try {
    const client = new EigenDAClient();

    console.log("\nRetrieving blob data...");
    console.log("Batch Header Hash:", batchHeaderHash);
    console.log("Blob Index:", blobIndex);

    const retrievedText = await client.retrieveString(
      batchHeaderHash,
      blobIndex,
    );
    console.log("\nRetrieved data:", retrievedText);

    return retrievedText;
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

// Example usage with command line arguments
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error(
      "Usage: npx ts-node retrieve_blob.ts <batch_header_hash> <blob_index>",
    );
    console.error(
      "Example: npx ts-node retrieve_blob.ts 7e1b0585f9a3e4746802fdf355da7910aa44158f7ad041d0c69485b01f108aed 99",
    );
    process.exit(1);
  }

  const [batchHeaderHash, blobIndexStr] = args;
  const blobIndex = parseInt(blobIndexStr, 10);

  if (isNaN(blobIndex)) {
    console.error("Error: blob_index must be a number");
    process.exit(1);
  }

  retrieveBlob(batchHeaderHash, blobIndex).catch(() => process.exit(1));
}

export { retrieveBlob };
