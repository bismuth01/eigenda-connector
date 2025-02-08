// package: disperser
// file: disperser.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as disperser_pb from "./disperser_pb";
import * as common_common_pb from "./common/common_pb";

interface IDisperserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    disperseBlob: IDisperserService_IDisperseBlob;
    disperseBlobAuthenticated: IDisperserService_IDisperseBlobAuthenticated;
    getBlobStatus: IDisperserService_IGetBlobStatus;
    retrieveBlob: IDisperserService_IRetrieveBlob;
}

interface IDisperserService_IDisperseBlob extends grpc.MethodDefinition<disperser_pb.DisperseBlobRequest, disperser_pb.DisperseBlobReply> {
    path: "/disperser.Disperser/DisperseBlob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<disperser_pb.DisperseBlobRequest>;
    requestDeserialize: grpc.deserialize<disperser_pb.DisperseBlobRequest>;
    responseSerialize: grpc.serialize<disperser_pb.DisperseBlobReply>;
    responseDeserialize: grpc.deserialize<disperser_pb.DisperseBlobReply>;
}
interface IDisperserService_IDisperseBlobAuthenticated extends grpc.MethodDefinition<disperser_pb.AuthenticatedRequest, disperser_pb.AuthenticatedReply> {
    path: "/disperser.Disperser/DisperseBlobAuthenticated";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<disperser_pb.AuthenticatedRequest>;
    requestDeserialize: grpc.deserialize<disperser_pb.AuthenticatedRequest>;
    responseSerialize: grpc.serialize<disperser_pb.AuthenticatedReply>;
    responseDeserialize: grpc.deserialize<disperser_pb.AuthenticatedReply>;
}
interface IDisperserService_IGetBlobStatus extends grpc.MethodDefinition<disperser_pb.BlobStatusRequest, disperser_pb.BlobStatusReply> {
    path: "/disperser.Disperser/GetBlobStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<disperser_pb.BlobStatusRequest>;
    requestDeserialize: grpc.deserialize<disperser_pb.BlobStatusRequest>;
    responseSerialize: grpc.serialize<disperser_pb.BlobStatusReply>;
    responseDeserialize: grpc.deserialize<disperser_pb.BlobStatusReply>;
}
interface IDisperserService_IRetrieveBlob extends grpc.MethodDefinition<disperser_pb.RetrieveBlobRequest, disperser_pb.RetrieveBlobReply> {
    path: "/disperser.Disperser/RetrieveBlob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<disperser_pb.RetrieveBlobRequest>;
    requestDeserialize: grpc.deserialize<disperser_pb.RetrieveBlobRequest>;
    responseSerialize: grpc.serialize<disperser_pb.RetrieveBlobReply>;
    responseDeserialize: grpc.deserialize<disperser_pb.RetrieveBlobReply>;
}

export const DisperserService: IDisperserService;

export interface IDisperserServer extends grpc.UntypedServiceImplementation {
    disperseBlob: grpc.handleUnaryCall<disperser_pb.DisperseBlobRequest, disperser_pb.DisperseBlobReply>;
    disperseBlobAuthenticated: grpc.handleBidiStreamingCall<disperser_pb.AuthenticatedRequest, disperser_pb.AuthenticatedReply>;
    getBlobStatus: grpc.handleUnaryCall<disperser_pb.BlobStatusRequest, disperser_pb.BlobStatusReply>;
    retrieveBlob: grpc.handleUnaryCall<disperser_pb.RetrieveBlobRequest, disperser_pb.RetrieveBlobReply>;
}

export interface IDisperserClient {
    disperseBlob(request: disperser_pb.DisperseBlobRequest, callback: (error: grpc.ServiceError | null, response: disperser_pb.DisperseBlobReply) => void): grpc.ClientUnaryCall;
    disperseBlob(request: disperser_pb.DisperseBlobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: disperser_pb.DisperseBlobReply) => void): grpc.ClientUnaryCall;
    disperseBlob(request: disperser_pb.DisperseBlobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: disperser_pb.DisperseBlobReply) => void): grpc.ClientUnaryCall;
    disperseBlobAuthenticated(): grpc.ClientDuplexStream<disperser_pb.AuthenticatedRequest, disperser_pb.AuthenticatedReply>;
    disperseBlobAuthenticated(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<disperser_pb.AuthenticatedRequest, disperser_pb.AuthenticatedReply>;
    disperseBlobAuthenticated(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<disperser_pb.AuthenticatedRequest, disperser_pb.AuthenticatedReply>;
    getBlobStatus(request: disperser_pb.BlobStatusRequest, callback: (error: grpc.ServiceError | null, response: disperser_pb.BlobStatusReply) => void): grpc.ClientUnaryCall;
    getBlobStatus(request: disperser_pb.BlobStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: disperser_pb.BlobStatusReply) => void): grpc.ClientUnaryCall;
    getBlobStatus(request: disperser_pb.BlobStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: disperser_pb.BlobStatusReply) => void): grpc.ClientUnaryCall;
    retrieveBlob(request: disperser_pb.RetrieveBlobRequest, callback: (error: grpc.ServiceError | null, response: disperser_pb.RetrieveBlobReply) => void): grpc.ClientUnaryCall;
    retrieveBlob(request: disperser_pb.RetrieveBlobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: disperser_pb.RetrieveBlobReply) => void): grpc.ClientUnaryCall;
    retrieveBlob(request: disperser_pb.RetrieveBlobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: disperser_pb.RetrieveBlobReply) => void): grpc.ClientUnaryCall;
}

export class DisperserClient extends grpc.Client implements IDisperserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public disperseBlob(request: disperser_pb.DisperseBlobRequest, callback: (error: grpc.ServiceError | null, response: disperser_pb.DisperseBlobReply) => void): grpc.ClientUnaryCall;
    public disperseBlob(request: disperser_pb.DisperseBlobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: disperser_pb.DisperseBlobReply) => void): grpc.ClientUnaryCall;
    public disperseBlob(request: disperser_pb.DisperseBlobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: disperser_pb.DisperseBlobReply) => void): grpc.ClientUnaryCall;
    public disperseBlobAuthenticated(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<disperser_pb.AuthenticatedRequest, disperser_pb.AuthenticatedReply>;
    public disperseBlobAuthenticated(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<disperser_pb.AuthenticatedRequest, disperser_pb.AuthenticatedReply>;
    public getBlobStatus(request: disperser_pb.BlobStatusRequest, callback: (error: grpc.ServiceError | null, response: disperser_pb.BlobStatusReply) => void): grpc.ClientUnaryCall;
    public getBlobStatus(request: disperser_pb.BlobStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: disperser_pb.BlobStatusReply) => void): grpc.ClientUnaryCall;
    public getBlobStatus(request: disperser_pb.BlobStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: disperser_pb.BlobStatusReply) => void): grpc.ClientUnaryCall;
    public retrieveBlob(request: disperser_pb.RetrieveBlobRequest, callback: (error: grpc.ServiceError | null, response: disperser_pb.RetrieveBlobReply) => void): grpc.ClientUnaryCall;
    public retrieveBlob(request: disperser_pb.RetrieveBlobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: disperser_pb.RetrieveBlobReply) => void): grpc.ClientUnaryCall;
    public retrieveBlob(request: disperser_pb.RetrieveBlobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: disperser_pb.RetrieveBlobReply) => void): grpc.ClientUnaryCall;
}
