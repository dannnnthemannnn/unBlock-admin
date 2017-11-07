import * as $protobuf from "protobufjs";

/** Namespace com. */
export namespace com {

    /** Namespace unblock. */
    namespace unblock {

        /** Namespace proto. */
        namespace proto {

            /** Properties of an UpdateAttractionInfoRequest. */
            interface IUpdateAttractionInfoRequest {

                /** UpdateAttractionInfoRequest id */
                id?: string;

                /** UpdateAttractionInfoRequest neighborhoodId */
                neighborhoodId?: string;

                /** UpdateAttractionInfoRequest blockId */
                blockId?: string;

                /** UpdateAttractionInfoRequest name */
                name?: string;
            }

            /** Represents an UpdateAttractionInfoRequest. */
            class UpdateAttractionInfoRequest {

                /**
                 * Constructs a new UpdateAttractionInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateAttractionInfoRequest);

                /** UpdateAttractionInfoRequest id. */
                public id: string;

                /** UpdateAttractionInfoRequest neighborhoodId. */
                public neighborhoodId: string;

                /** UpdateAttractionInfoRequest blockId. */
                public blockId: string;

                /** UpdateAttractionInfoRequest name. */
                public name: string;

                /**
                 * Creates a new UpdateAttractionInfoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateAttractionInfoRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateAttractionInfoRequest): com.unblock.proto.UpdateAttractionInfoRequest;

                /**
                 * Encodes the specified UpdateAttractionInfoRequest message. Does not implicitly {@link com.unblock.proto.UpdateAttractionInfoRequest.verify|verify} messages.
                 * @param message UpdateAttractionInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateAttractionInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateAttractionInfoRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateAttractionInfoRequest.verify|verify} messages.
                 * @param message UpdateAttractionInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateAttractionInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateAttractionInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateAttractionInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateAttractionInfoRequest;

                /**
                 * Decodes an UpdateAttractionInfoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateAttractionInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateAttractionInfoRequest;

                /**
                 * Verifies an UpdateAttractionInfoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateAttractionInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateAttractionInfoRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateAttractionInfoRequest;

                /**
                 * Creates a plain object from an UpdateAttractionInfoRequest message. Also converts values to other types if specified.
                 * @param message UpdateAttractionInfoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateAttractionInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateAttractionInfoRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateAttractionLocationRequest. */
            interface IUpdateAttractionLocationRequest {

                /** UpdateAttractionLocationRequest id */
                id?: string;

                /** UpdateAttractionLocationRequest x */
                x?: number;

                /** UpdateAttractionLocationRequest y */
                y?: number;
            }

            /** Represents an UpdateAttractionLocationRequest. */
            class UpdateAttractionLocationRequest {

                /**
                 * Constructs a new UpdateAttractionLocationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateAttractionLocationRequest);

                /** UpdateAttractionLocationRequest id. */
                public id: string;

                /** UpdateAttractionLocationRequest x. */
                public x: number;

                /** UpdateAttractionLocationRequest y. */
                public y: number;

                /**
                 * Creates a new UpdateAttractionLocationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateAttractionLocationRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateAttractionLocationRequest): com.unblock.proto.UpdateAttractionLocationRequest;

                /**
                 * Encodes the specified UpdateAttractionLocationRequest message. Does not implicitly {@link com.unblock.proto.UpdateAttractionLocationRequest.verify|verify} messages.
                 * @param message UpdateAttractionLocationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateAttractionLocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateAttractionLocationRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateAttractionLocationRequest.verify|verify} messages.
                 * @param message UpdateAttractionLocationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateAttractionLocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateAttractionLocationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateAttractionLocationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateAttractionLocationRequest;

                /**
                 * Decodes an UpdateAttractionLocationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateAttractionLocationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateAttractionLocationRequest;

                /**
                 * Verifies an UpdateAttractionLocationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateAttractionLocationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateAttractionLocationRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateAttractionLocationRequest;

                /**
                 * Creates a plain object from an UpdateAttractionLocationRequest message. Also converts values to other types if specified.
                 * @param message UpdateAttractionLocationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateAttractionLocationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateAttractionLocationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateAttractionRequest. */
            interface ICreateAttractionRequest {

                /** CreateAttractionRequest neighborhoodId */
                neighborhoodId?: string;

                /** CreateAttractionRequest blockId */
                blockId?: string;

                /** CreateAttractionRequest name */
                name?: string;

                /** CreateAttractionRequest x */
                x?: number;

                /** CreateAttractionRequest y */
                y?: number;
            }

            /** Represents a CreateAttractionRequest. */
            class CreateAttractionRequest {

                /**
                 * Constructs a new CreateAttractionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.ICreateAttractionRequest);

                /** CreateAttractionRequest neighborhoodId. */
                public neighborhoodId: string;

                /** CreateAttractionRequest blockId. */
                public blockId: string;

                /** CreateAttractionRequest name. */
                public name: string;

                /** CreateAttractionRequest x. */
                public x: number;

                /** CreateAttractionRequest y. */
                public y: number;

                /**
                 * Creates a new CreateAttractionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAttractionRequest instance
                 */
                public static create(properties?: com.unblock.proto.ICreateAttractionRequest): com.unblock.proto.CreateAttractionRequest;

                /**
                 * Encodes the specified CreateAttractionRequest message. Does not implicitly {@link com.unblock.proto.CreateAttractionRequest.verify|verify} messages.
                 * @param message CreateAttractionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.ICreateAttractionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAttractionRequest message, length delimited. Does not implicitly {@link com.unblock.proto.CreateAttractionRequest.verify|verify} messages.
                 * @param message CreateAttractionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.ICreateAttractionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAttractionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAttractionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.CreateAttractionRequest;

                /**
                 * Decodes a CreateAttractionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAttractionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.CreateAttractionRequest;

                /**
                 * Verifies a CreateAttractionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAttractionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAttractionRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.CreateAttractionRequest;

                /**
                 * Creates a plain object from a CreateAttractionRequest message. Also converts values to other types if specified.
                 * @param message CreateAttractionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.CreateAttractionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAttractionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Attraction. */
            interface IAttraction {

                /** Attraction id */
                id?: string;

                /** Attraction name */
                name?: string;

                /** Attraction x */
                x?: number;

                /** Attraction y */
                y?: number;
            }

            /** Represents an Attraction. */
            class Attraction {

                /**
                 * Constructs a new Attraction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IAttraction);

                /** Attraction id. */
                public id: string;

                /** Attraction name. */
                public name: string;

                /** Attraction x. */
                public x: number;

                /** Attraction y. */
                public y: number;

                /**
                 * Creates a new Attraction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Attraction instance
                 */
                public static create(properties?: com.unblock.proto.IAttraction): com.unblock.proto.Attraction;

                /**
                 * Encodes the specified Attraction message. Does not implicitly {@link com.unblock.proto.Attraction.verify|verify} messages.
                 * @param message Attraction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IAttraction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Attraction message, length delimited. Does not implicitly {@link com.unblock.proto.Attraction.verify|verify} messages.
                 * @param message Attraction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IAttraction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Attraction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Attraction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.Attraction;

                /**
                 * Decodes an Attraction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Attraction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.Attraction;

                /**
                 * Verifies an Attraction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Attraction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Attraction
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.Attraction;

                /**
                 * Creates a plain object from an Attraction message. Also converts values to other types if specified.
                 * @param message Attraction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.Attraction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Attraction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateBlockBoundsRequest. */
            interface IUpdateBlockBoundsRequest {

                /** UpdateBlockBoundsRequest id */
                id?: string;

                /** UpdateBlockBoundsRequest bounds */
                bounds?: com.unblock.proto.IBounds;
            }

            /** Represents an UpdateBlockBoundsRequest. */
            class UpdateBlockBoundsRequest {

                /**
                 * Constructs a new UpdateBlockBoundsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateBlockBoundsRequest);

                /** UpdateBlockBoundsRequest id. */
                public id: string;

                /** UpdateBlockBoundsRequest bounds. */
                public bounds?: (com.unblock.proto.IBounds|null);

                /**
                 * Creates a new UpdateBlockBoundsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateBlockBoundsRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateBlockBoundsRequest): com.unblock.proto.UpdateBlockBoundsRequest;

                /**
                 * Encodes the specified UpdateBlockBoundsRequest message. Does not implicitly {@link com.unblock.proto.UpdateBlockBoundsRequest.verify|verify} messages.
                 * @param message UpdateBlockBoundsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateBlockBoundsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateBlockBoundsRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateBlockBoundsRequest.verify|verify} messages.
                 * @param message UpdateBlockBoundsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateBlockBoundsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateBlockBoundsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateBlockBoundsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateBlockBoundsRequest;

                /**
                 * Decodes an UpdateBlockBoundsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateBlockBoundsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateBlockBoundsRequest;

                /**
                 * Verifies an UpdateBlockBoundsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateBlockBoundsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateBlockBoundsRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateBlockBoundsRequest;

                /**
                 * Creates a plain object from an UpdateBlockBoundsRequest message. Also converts values to other types if specified.
                 * @param message UpdateBlockBoundsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateBlockBoundsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateBlockBoundsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateBlockInfoRequest. */
            interface IUpdateBlockInfoRequest {

                /** UpdateBlockInfoRequest id */
                id?: string;

                /** UpdateBlockInfoRequest neighborhoodId */
                neighborhoodId?: string;

                /** UpdateBlockInfoRequest name */
                name?: string;
            }

            /** Represents an UpdateBlockInfoRequest. */
            class UpdateBlockInfoRequest {

                /**
                 * Constructs a new UpdateBlockInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateBlockInfoRequest);

                /** UpdateBlockInfoRequest id. */
                public id: string;

                /** UpdateBlockInfoRequest neighborhoodId. */
                public neighborhoodId: string;

                /** UpdateBlockInfoRequest name. */
                public name: string;

                /**
                 * Creates a new UpdateBlockInfoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateBlockInfoRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateBlockInfoRequest): com.unblock.proto.UpdateBlockInfoRequest;

                /**
                 * Encodes the specified UpdateBlockInfoRequest message. Does not implicitly {@link com.unblock.proto.UpdateBlockInfoRequest.verify|verify} messages.
                 * @param message UpdateBlockInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateBlockInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateBlockInfoRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateBlockInfoRequest.verify|verify} messages.
                 * @param message UpdateBlockInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateBlockInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateBlockInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateBlockInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateBlockInfoRequest;

                /**
                 * Decodes an UpdateBlockInfoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateBlockInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateBlockInfoRequest;

                /**
                 * Verifies an UpdateBlockInfoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateBlockInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateBlockInfoRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateBlockInfoRequest;

                /**
                 * Creates a plain object from an UpdateBlockInfoRequest message. Also converts values to other types if specified.
                 * @param message UpdateBlockInfoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateBlockInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateBlockInfoRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateBlockRequest. */
            interface ICreateBlockRequest {

                /** CreateBlockRequest neighborhoodId */
                neighborhoodId?: string;

                /** CreateBlockRequest name */
                name?: string;

                /** CreateBlockRequest bounds */
                bounds?: com.unblock.proto.IBounds;
            }

            /** Represents a CreateBlockRequest. */
            class CreateBlockRequest {

                /**
                 * Constructs a new CreateBlockRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.ICreateBlockRequest);

                /** CreateBlockRequest neighborhoodId. */
                public neighborhoodId: string;

                /** CreateBlockRequest name. */
                public name: string;

                /** CreateBlockRequest bounds. */
                public bounds?: (com.unblock.proto.IBounds|null);

                /**
                 * Creates a new CreateBlockRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateBlockRequest instance
                 */
                public static create(properties?: com.unblock.proto.ICreateBlockRequest): com.unblock.proto.CreateBlockRequest;

                /**
                 * Encodes the specified CreateBlockRequest message. Does not implicitly {@link com.unblock.proto.CreateBlockRequest.verify|verify} messages.
                 * @param message CreateBlockRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.ICreateBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateBlockRequest message, length delimited. Does not implicitly {@link com.unblock.proto.CreateBlockRequest.verify|verify} messages.
                 * @param message CreateBlockRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.ICreateBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateBlockRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateBlockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.CreateBlockRequest;

                /**
                 * Decodes a CreateBlockRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateBlockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.CreateBlockRequest;

                /**
                 * Verifies a CreateBlockRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateBlockRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateBlockRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.CreateBlockRequest;

                /**
                 * Creates a plain object from a CreateBlockRequest message. Also converts values to other types if specified.
                 * @param message CreateBlockRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.CreateBlockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateBlockRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Bounds. */
            interface IBounds {

                /** Bounds points */
                points?: com.unblock.proto.Bounds.IPoint[];
            }

            /** Represents a Bounds. */
            class Bounds {

                /**
                 * Constructs a new Bounds.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IBounds);

                /** Bounds points. */
                public points: com.unblock.proto.Bounds.IPoint[];

                /**
                 * Creates a new Bounds instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Bounds instance
                 */
                public static create(properties?: com.unblock.proto.IBounds): com.unblock.proto.Bounds;

                /**
                 * Encodes the specified Bounds message. Does not implicitly {@link com.unblock.proto.Bounds.verify|verify} messages.
                 * @param message Bounds message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IBounds, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Bounds message, length delimited. Does not implicitly {@link com.unblock.proto.Bounds.verify|verify} messages.
                 * @param message Bounds message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IBounds, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Bounds message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Bounds
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.Bounds;

                /**
                 * Decodes a Bounds message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Bounds
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.Bounds;

                /**
                 * Verifies a Bounds message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Bounds message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Bounds
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.Bounds;

                /**
                 * Creates a plain object from a Bounds message. Also converts values to other types if specified.
                 * @param message Bounds
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.Bounds, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Bounds to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Bounds {

                /** Properties of a Point. */
                interface IPoint {

                    /** Point x */
                    x?: number;

                    /** Point y */
                    y?: number;
                }

                /** Represents a Point. */
                class Point {

                    /**
                     * Constructs a new Point.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.Bounds.IPoint);

                    /** Point x. */
                    public x: number;

                    /** Point y. */
                    public y: number;

                    /**
                     * Creates a new Point instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Point instance
                     */
                    public static create(properties?: com.unblock.proto.Bounds.IPoint): com.unblock.proto.Bounds.Point;

                    /**
                     * Encodes the specified Point message. Does not implicitly {@link com.unblock.proto.Bounds.Point.verify|verify} messages.
                     * @param message Point message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.Bounds.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Point message, length delimited. Does not implicitly {@link com.unblock.proto.Bounds.Point.verify|verify} messages.
                     * @param message Point message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.Bounds.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Point message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.Bounds.Point;

                    /**
                     * Decodes a Point message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.Bounds.Point;

                    /**
                     * Verifies a Point message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Point message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Point
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.Bounds.Point;

                    /**
                     * Creates a plain object from a Point message. Also converts values to other types if specified.
                     * @param message Point
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.Bounds.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Point to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Block. */
            interface IBlock {

                /** Block id */
                id?: string;

                /** Block name */
                name?: string;

                /** Block bounds */
                bounds?: com.unblock.proto.IBounds;
            }

            /** Represents a Block. */
            class Block {

                /**
                 * Constructs a new Block.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IBlock);

                /** Block id. */
                public id: string;

                /** Block name. */
                public name: string;

                /** Block bounds. */
                public bounds?: (com.unblock.proto.IBounds|null);

                /**
                 * Creates a new Block instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Block instance
                 */
                public static create(properties?: com.unblock.proto.IBlock): com.unblock.proto.Block;

                /**
                 * Encodes the specified Block message. Does not implicitly {@link com.unblock.proto.Block.verify|verify} messages.
                 * @param message Block message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Block message, length delimited. Does not implicitly {@link com.unblock.proto.Block.verify|verify} messages.
                 * @param message Block message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Block message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Block
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.Block;

                /**
                 * Decodes a Block message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Block
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.Block;

                /**
                 * Verifies a Block message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Block message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Block
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.Block;

                /**
                 * Creates a plain object from a Block message. Also converts values to other types if specified.
                 * @param message Block
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Block to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LoginRequest. */
            interface ILoginRequest {

                /** LoginRequest usernameOrEmail */
                usernameOrEmail?: string;

                /** LoginRequest password */
                password?: string;
            }

            /** Represents a LoginRequest. */
            class LoginRequest {

                /**
                 * Constructs a new LoginRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.ILoginRequest);

                /** LoginRequest usernameOrEmail. */
                public usernameOrEmail: string;

                /** LoginRequest password. */
                public password: string;

                /**
                 * Creates a new LoginRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoginRequest instance
                 */
                public static create(properties?: com.unblock.proto.ILoginRequest): com.unblock.proto.LoginRequest;

                /**
                 * Encodes the specified LoginRequest message. Does not implicitly {@link com.unblock.proto.LoginRequest.verify|verify} messages.
                 * @param message LoginRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link com.unblock.proto.LoginRequest.verify|verify} messages.
                 * @param message LoginRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LoginRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.LoginRequest;

                /**
                 * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.LoginRequest;

                /**
                 * Verifies a LoginRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LoginRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.LoginRequest;

                /**
                 * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
                 * @param message LoginRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LoginRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListNeighborhoodResponse. */
            interface IListNeighborhoodResponse {

                /** ListNeighborhoodResponse neighborhoods */
                neighborhoods?: com.unblock.proto.INeighborhood[];
            }

            /** Represents a ListNeighborhoodResponse. */
            class ListNeighborhoodResponse {

                /**
                 * Constructs a new ListNeighborhoodResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IListNeighborhoodResponse);

                /** ListNeighborhoodResponse neighborhoods. */
                public neighborhoods: com.unblock.proto.INeighborhood[];

                /**
                 * Creates a new ListNeighborhoodResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListNeighborhoodResponse instance
                 */
                public static create(properties?: com.unblock.proto.IListNeighborhoodResponse): com.unblock.proto.ListNeighborhoodResponse;

                /**
                 * Encodes the specified ListNeighborhoodResponse message. Does not implicitly {@link com.unblock.proto.ListNeighborhoodResponse.verify|verify} messages.
                 * @param message ListNeighborhoodResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IListNeighborhoodResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListNeighborhoodResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListNeighborhoodResponse.verify|verify} messages.
                 * @param message ListNeighborhoodResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IListNeighborhoodResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListNeighborhoodResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListNeighborhoodResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.ListNeighborhoodResponse;

                /**
                 * Decodes a ListNeighborhoodResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListNeighborhoodResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.ListNeighborhoodResponse;

                /**
                 * Verifies a ListNeighborhoodResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListNeighborhoodResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListNeighborhoodResponse
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.ListNeighborhoodResponse;

                /**
                 * Creates a plain object from a ListNeighborhoodResponse message. Also converts values to other types if specified.
                 * @param message ListNeighborhoodResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.ListNeighborhoodResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListNeighborhoodResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateNeighborhoodRequest. */
            interface ICreateNeighborhoodRequest {

                /** CreateNeighborhoodRequest name */
                name?: string;
            }

            /** Represents a CreateNeighborhoodRequest. */
            class CreateNeighborhoodRequest {

                /**
                 * Constructs a new CreateNeighborhoodRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.ICreateNeighborhoodRequest);

                /** CreateNeighborhoodRequest name. */
                public name: string;

                /**
                 * Creates a new CreateNeighborhoodRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateNeighborhoodRequest instance
                 */
                public static create(properties?: com.unblock.proto.ICreateNeighborhoodRequest): com.unblock.proto.CreateNeighborhoodRequest;

                /**
                 * Encodes the specified CreateNeighborhoodRequest message. Does not implicitly {@link com.unblock.proto.CreateNeighborhoodRequest.verify|verify} messages.
                 * @param message CreateNeighborhoodRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.ICreateNeighborhoodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateNeighborhoodRequest message, length delimited. Does not implicitly {@link com.unblock.proto.CreateNeighborhoodRequest.verify|verify} messages.
                 * @param message CreateNeighborhoodRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.ICreateNeighborhoodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateNeighborhoodRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.CreateNeighborhoodRequest;

                /**
                 * Decodes a CreateNeighborhoodRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.CreateNeighborhoodRequest;

                /**
                 * Verifies a CreateNeighborhoodRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateNeighborhoodRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateNeighborhoodRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.CreateNeighborhoodRequest;

                /**
                 * Creates a plain object from a CreateNeighborhoodRequest message. Also converts values to other types if specified.
                 * @param message CreateNeighborhoodRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.CreateNeighborhoodRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateNeighborhoodRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Neighborhood. */
            interface INeighborhood {

                /** Neighborhood id */
                id?: string;

                /** Neighborhood name */
                name?: string;

                /** Neighborhood blocks */
                blocks?: com.unblock.proto.IBlock[];

                /** Neighborhood image */
                image?: string;
            }

            /** Represents a Neighborhood. */
            class Neighborhood {

                /**
                 * Constructs a new Neighborhood.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.INeighborhood);

                /** Neighborhood id. */
                public id: string;

                /** Neighborhood name. */
                public name: string;

                /** Neighborhood blocks. */
                public blocks: com.unblock.proto.IBlock[];

                /** Neighborhood image. */
                public image: string;

                /**
                 * Creates a new Neighborhood instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Neighborhood instance
                 */
                public static create(properties?: com.unblock.proto.INeighborhood): com.unblock.proto.Neighborhood;

                /**
                 * Encodes the specified Neighborhood message. Does not implicitly {@link com.unblock.proto.Neighborhood.verify|verify} messages.
                 * @param message Neighborhood message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.INeighborhood, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Neighborhood message, length delimited. Does not implicitly {@link com.unblock.proto.Neighborhood.verify|verify} messages.
                 * @param message Neighborhood message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.INeighborhood, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Neighborhood message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Neighborhood
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.Neighborhood;

                /**
                 * Decodes a Neighborhood message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Neighborhood
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.Neighborhood;

                /**
                 * Verifies a Neighborhood message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Neighborhood message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Neighborhood
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.Neighborhood;

                /**
                 * Creates a plain object from a Neighborhood message. Also converts values to other types if specified.
                 * @param message Neighborhood
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.Neighborhood, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Neighborhood to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NewUserRequest. */
            interface INewUserRequest {

                /** NewUserRequest username */
                username?: string;

                /** NewUserRequest password */
                password?: string;

                /** NewUserRequest email */
                email?: string;
            }

            /** Represents a NewUserRequest. */
            class NewUserRequest {

                /**
                 * Constructs a new NewUserRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.INewUserRequest);

                /** NewUserRequest username. */
                public username: string;

                /** NewUserRequest password. */
                public password: string;

                /** NewUserRequest email. */
                public email: string;

                /**
                 * Creates a new NewUserRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NewUserRequest instance
                 */
                public static create(properties?: com.unblock.proto.INewUserRequest): com.unblock.proto.NewUserRequest;

                /**
                 * Encodes the specified NewUserRequest message. Does not implicitly {@link com.unblock.proto.NewUserRequest.verify|verify} messages.
                 * @param message NewUserRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.INewUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NewUserRequest message, length delimited. Does not implicitly {@link com.unblock.proto.NewUserRequest.verify|verify} messages.
                 * @param message NewUserRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.INewUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NewUserRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NewUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.NewUserRequest;

                /**
                 * Decodes a NewUserRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NewUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.NewUserRequest;

                /**
                 * Verifies a NewUserRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NewUserRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NewUserRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.NewUserRequest;

                /**
                 * Creates a plain object from a NewUserRequest message. Also converts values to other types if specified.
                 * @param message NewUserRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.NewUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NewUserRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
