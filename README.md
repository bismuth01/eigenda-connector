# EigenDA connector

Uses the EigenDA API to connect to the EigenDA server using Free Tier plan.
The API definitions for typescript are generated from the proto files in proto/ which has been taken from the [EigenDA github repository](https://github.com/Layr-Labs/eigenda/tree/master/api/proto).

Blobs have a size limit depending on the EigenDA plan, so make sure the RPC calls are being accepted for a particular string length.

In case of any changes to the API, the proto files should be updated and the typescript files should be regenerated.

To regenerate the typescript definitions from proto files, run the following command:
```bash
npx grpc_tools_node_protoc   --js_out=import_style=commonjs,binary:./src/generated   --grpc_out=grpc_js:./src/generated   --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin   --ts_out=grpc_js:./src/generated   --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts   -I ./proto   ./proto/disperser.proto ./proto/common/common.proto
```

## Installation

Install the required node modules by running the following command:
```bash
npm install
```

Rename .env-local to .env and update the values as required.
The default is set to [EigenDA holesky testnet](https://docs.eigenda.xyz/networks/holesky).

## Usage

The `EigenDAClient` class can be imported through the `EigenDAClient.ts` file for finer control.
`retrieve_blob.ts` and `store_blob.ts` are examples of how to use the `EigenDAClient` class to retrieve and are simple wrapper functions that can be used.

Storing a blob can take a few minutes and can increase for larger blobs so increase the timeout and polling rate as needed.

## Testing

You can test the contents of `retrieve_blob.ts` and `store_blob.ts` by running the following commands: -

For testing blob storing:
```bash
npm run test_store String_You_Want_To_Store #If no string is given uses "Hello, EigenDA!"
```

For testing blob retrieval:
```bash
npm run test_retrieve Batch_Header_Hash Blob_Index #Both arguments must be provided
```
