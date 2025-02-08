// package: common
// file: common/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class G1Commitment extends jspb.Message { 
    getX(): Uint8Array | string;
    getX_asU8(): Uint8Array;
    getX_asB64(): string;
    setX(value: Uint8Array | string): G1Commitment;
    getY(): Uint8Array | string;
    getY_asU8(): Uint8Array;
    getY_asB64(): string;
    setY(value: Uint8Array | string): G1Commitment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): G1Commitment.AsObject;
    static toObject(includeInstance: boolean, msg: G1Commitment): G1Commitment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: G1Commitment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): G1Commitment;
    static deserializeBinaryFromReader(message: G1Commitment, reader: jspb.BinaryReader): G1Commitment;
}

export namespace G1Commitment {
    export type AsObject = {
        x: Uint8Array | string,
        y: Uint8Array | string,
    }
}

export class BlobCommitment extends jspb.Message { 
    getCommitment(): Uint8Array | string;
    getCommitment_asU8(): Uint8Array;
    getCommitment_asB64(): string;
    setCommitment(value: Uint8Array | string): BlobCommitment;
    getLengthCommitment(): Uint8Array | string;
    getLengthCommitment_asU8(): Uint8Array;
    getLengthCommitment_asB64(): string;
    setLengthCommitment(value: Uint8Array | string): BlobCommitment;
    getLengthProof(): Uint8Array | string;
    getLengthProof_asU8(): Uint8Array;
    getLengthProof_asB64(): string;
    setLengthProof(value: Uint8Array | string): BlobCommitment;
    getLength(): number;
    setLength(value: number): BlobCommitment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlobCommitment.AsObject;
    static toObject(includeInstance: boolean, msg: BlobCommitment): BlobCommitment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlobCommitment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlobCommitment;
    static deserializeBinaryFromReader(message: BlobCommitment, reader: jspb.BinaryReader): BlobCommitment;
}

export namespace BlobCommitment {
    export type AsObject = {
        commitment: Uint8Array | string,
        lengthCommitment: Uint8Array | string,
        lengthProof: Uint8Array | string,
        length: number,
    }
}
