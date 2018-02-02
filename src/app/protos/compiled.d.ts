import * as $protobuf from "protobufjs";

/** Namespace com. */
export namespace com {

    /** Namespace unblock. */
    namespace unblock {

        /** Namespace proto. */
        namespace proto {

            /** Properties of an AttractionLocation. */
            interface IAttractionLocation {

                /** AttractionLocation x */
                x?: (number|null);

                /** AttractionLocation y */
                y?: (number|null);
            }

            /** Represents an AttractionLocation. */
            class AttractionLocation implements IAttractionLocation {

                /**
                 * Constructs a new AttractionLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IAttractionLocation);

                /** AttractionLocation x. */
                public x: number;

                /** AttractionLocation y. */
                public y: number;

                /**
                 * Creates a new AttractionLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AttractionLocation instance
                 */
                public static create(properties?: com.unblock.proto.IAttractionLocation): com.unblock.proto.AttractionLocation;

                /**
                 * Encodes the specified AttractionLocation message. Does not implicitly {@link com.unblock.proto.AttractionLocation.verify|verify} messages.
                 * @param message AttractionLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IAttractionLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AttractionLocation message, length delimited. Does not implicitly {@link com.unblock.proto.AttractionLocation.verify|verify} messages.
                 * @param message AttractionLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IAttractionLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AttractionLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AttractionLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.AttractionLocation;

                /**
                 * Decodes an AttractionLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AttractionLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.AttractionLocation;

                /**
                 * Verifies an AttractionLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AttractionLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AttractionLocation
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.AttractionLocation;

                /**
                 * Creates a plain object from an AttractionLocation message. Also converts values to other types if specified.
                 * @param message AttractionLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.AttractionLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AttractionLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateAttractionRequest. */
            interface ICreateAttractionRequest {

                /** CreateAttractionRequest blockId */
                blockId?: (string|null);

                /** CreateAttractionRequest info */
                info?: (com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo|null);
            }

            /** Represents a CreateAttractionRequest. */
            class CreateAttractionRequest implements ICreateAttractionRequest {

                /**
                 * Constructs a new CreateAttractionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.ICreateAttractionRequest);

                /** CreateAttractionRequest blockId. */
                public blockId: string;

                /** CreateAttractionRequest info. */
                public info?: (com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo|null);

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

            namespace CreateAttractionRequest {

                /** Properties of a CreateAttractionInfo. */
                interface ICreateAttractionInfo {

                    /** CreateAttractionInfo name */
                    name?: (string|null);

                    /** CreateAttractionInfo location */
                    location?: (com.unblock.proto.IAttractionLocation|null);

                    /** CreateAttractionInfo description */
                    description?: (string|null);
                }

                /** Represents a CreateAttractionInfo. */
                class CreateAttractionInfo implements ICreateAttractionInfo {

                    /**
                     * Constructs a new CreateAttractionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo);

                    /** CreateAttractionInfo name. */
                    public name: string;

                    /** CreateAttractionInfo location. */
                    public location?: (com.unblock.proto.IAttractionLocation|null);

                    /** CreateAttractionInfo description. */
                    public description: string;

                    /**
                     * Creates a new CreateAttractionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAttractionInfo instance
                     */
                    public static create(properties?: com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo): com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo;

                    /**
                     * Encodes the specified CreateAttractionInfo message. Does not implicitly {@link com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo.verify|verify} messages.
                     * @param message CreateAttractionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAttractionInfo message, length delimited. Does not implicitly {@link com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo.verify|verify} messages.
                     * @param message CreateAttractionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAttractionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAttractionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo;

                    /**
                     * Decodes a CreateAttractionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAttractionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo;

                    /**
                     * Verifies a CreateAttractionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAttractionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAttractionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo;

                    /**
                     * Creates a plain object from a CreateAttractionInfo message. Also converts values to other types if specified.
                     * @param message CreateAttractionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAttractionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an UpdateAttractionInfoRequest. */
            interface IUpdateAttractionInfoRequest {

                /** UpdateAttractionInfoRequest id */
                id?: (string|null);

                /** UpdateAttractionInfoRequest info */
                info?: (com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo|null);
            }

            /** Represents an UpdateAttractionInfoRequest. */
            class UpdateAttractionInfoRequest implements IUpdateAttractionInfoRequest {

                /**
                 * Constructs a new UpdateAttractionInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateAttractionInfoRequest);

                /** UpdateAttractionInfoRequest id. */
                public id: string;

                /** UpdateAttractionInfoRequest info. */
                public info?: (com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo|null);

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

            namespace UpdateAttractionInfoRequest {

                /** Properties of an UpdateAttractionInfo. */
                interface IUpdateAttractionInfo {

                    /** UpdateAttractionInfo name */
                    name?: (string|null);

                    /** UpdateAttractionInfo description */
                    description?: (string|null);
                }

                /** Represents an UpdateAttractionInfo. */
                class UpdateAttractionInfo implements IUpdateAttractionInfo {

                    /**
                     * Constructs a new UpdateAttractionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo);

                    /** UpdateAttractionInfo name. */
                    public name: string;

                    /** UpdateAttractionInfo description. */
                    public description: string;

                    /**
                     * Creates a new UpdateAttractionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAttractionInfo instance
                     */
                    public static create(properties?: com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo): com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo;

                    /**
                     * Encodes the specified UpdateAttractionInfo message. Does not implicitly {@link com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo.verify|verify} messages.
                     * @param message UpdateAttractionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAttractionInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo.verify|verify} messages.
                     * @param message UpdateAttractionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAttractionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAttractionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo;

                    /**
                     * Decodes an UpdateAttractionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAttractionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo;

                    /**
                     * Verifies an UpdateAttractionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAttractionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAttractionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo;

                    /**
                     * Creates a plain object from an UpdateAttractionInfo message. Also converts values to other types if specified.
                     * @param message UpdateAttractionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAttractionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an UpdateAttractionLocationRequest. */
            interface IUpdateAttractionLocationRequest {

                /** UpdateAttractionLocationRequest id */
                id?: (string|null);

                /** UpdateAttractionLocationRequest location */
                location?: (com.unblock.proto.IAttractionLocation|null);
            }

            /** Represents an UpdateAttractionLocationRequest. */
            class UpdateAttractionLocationRequest implements IUpdateAttractionLocationRequest {

                /**
                 * Constructs a new UpdateAttractionLocationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateAttractionLocationRequest);

                /** UpdateAttractionLocationRequest id. */
                public id: string;

                /** UpdateAttractionLocationRequest location. */
                public location?: (com.unblock.proto.IAttractionLocation|null);

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

            /** Properties of an AssignAttractionToBlockRequest. */
            interface IAssignAttractionToBlockRequest {

                /** AssignAttractionToBlockRequest id */
                id?: (string|null);

                /** AssignAttractionToBlockRequest blockId */
                blockId?: (string|null);
            }

            /** Represents an AssignAttractionToBlockRequest. */
            class AssignAttractionToBlockRequest implements IAssignAttractionToBlockRequest {

                /**
                 * Constructs a new AssignAttractionToBlockRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IAssignAttractionToBlockRequest);

                /** AssignAttractionToBlockRequest id. */
                public id: string;

                /** AssignAttractionToBlockRequest blockId. */
                public blockId: string;

                /**
                 * Creates a new AssignAttractionToBlockRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AssignAttractionToBlockRequest instance
                 */
                public static create(properties?: com.unblock.proto.IAssignAttractionToBlockRequest): com.unblock.proto.AssignAttractionToBlockRequest;

                /**
                 * Encodes the specified AssignAttractionToBlockRequest message. Does not implicitly {@link com.unblock.proto.AssignAttractionToBlockRequest.verify|verify} messages.
                 * @param message AssignAttractionToBlockRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IAssignAttractionToBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AssignAttractionToBlockRequest message, length delimited. Does not implicitly {@link com.unblock.proto.AssignAttractionToBlockRequest.verify|verify} messages.
                 * @param message AssignAttractionToBlockRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IAssignAttractionToBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AssignAttractionToBlockRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AssignAttractionToBlockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.AssignAttractionToBlockRequest;

                /**
                 * Decodes an AssignAttractionToBlockRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AssignAttractionToBlockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.AssignAttractionToBlockRequest;

                /**
                 * Verifies an AssignAttractionToBlockRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AssignAttractionToBlockRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AssignAttractionToBlockRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.AssignAttractionToBlockRequest;

                /**
                 * Creates a plain object from an AssignAttractionToBlockRequest message. Also converts values to other types if specified.
                 * @param message AssignAttractionToBlockRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.AssignAttractionToBlockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AssignAttractionToBlockRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** AttractionStatus enum. */
            enum AttractionStatus {
                ATTRACTION_STATUS_UNSPECIFIED = 0,
                ATTRACTION_LIVE = 1,
                ATTRACTION_DISABLED = 2
            }

            /** Properties of an UpdateAttractionStatusRequest. */
            interface IUpdateAttractionStatusRequest {

                /** UpdateAttractionStatusRequest id */
                id?: (string|null);

                /** UpdateAttractionStatusRequest status */
                status?: (com.unblock.proto.AttractionStatus|null);
            }

            /** Represents an UpdateAttractionStatusRequest. */
            class UpdateAttractionStatusRequest implements IUpdateAttractionStatusRequest {

                /**
                 * Constructs a new UpdateAttractionStatusRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateAttractionStatusRequest);

                /** UpdateAttractionStatusRequest id. */
                public id: string;

                /** UpdateAttractionStatusRequest status. */
                public status: com.unblock.proto.AttractionStatus;

                /**
                 * Creates a new UpdateAttractionStatusRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateAttractionStatusRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateAttractionStatusRequest): com.unblock.proto.UpdateAttractionStatusRequest;

                /**
                 * Encodes the specified UpdateAttractionStatusRequest message. Does not implicitly {@link com.unblock.proto.UpdateAttractionStatusRequest.verify|verify} messages.
                 * @param message UpdateAttractionStatusRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateAttractionStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateAttractionStatusRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateAttractionStatusRequest.verify|verify} messages.
                 * @param message UpdateAttractionStatusRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateAttractionStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateAttractionStatusRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateAttractionStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateAttractionStatusRequest;

                /**
                 * Decodes an UpdateAttractionStatusRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateAttractionStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateAttractionStatusRequest;

                /**
                 * Verifies an UpdateAttractionStatusRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateAttractionStatusRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateAttractionStatusRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateAttractionStatusRequest;

                /**
                 * Creates a plain object from an UpdateAttractionStatusRequest message. Also converts values to other types if specified.
                 * @param message UpdateAttractionStatusRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateAttractionStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateAttractionStatusRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Attraction. */
            interface IAttraction {

                /** Attraction id */
                id?: (string|null);

                /** Attraction status */
                status?: (com.unblock.proto.AttractionStatus|null);

                /** Attraction blockId */
                blockId?: (string|null);

                /** Attraction name */
                name?: (string|null);

                /** Attraction description */
                description?: (string|null);

                /** Attraction location */
                location?: (com.unblock.proto.IAttractionLocation|null);
            }

            /** Represents an Attraction. */
            class Attraction implements IAttraction {

                /**
                 * Constructs a new Attraction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IAttraction);

                /** Attraction id. */
                public id: string;

                /** Attraction status. */
                public status: com.unblock.proto.AttractionStatus;

                /** Attraction blockId. */
                public blockId: string;

                /** Attraction name. */
                public name: string;

                /** Attraction description. */
                public description: string;

                /** Attraction location. */
                public location?: (com.unblock.proto.IAttractionLocation|null);

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

            /** Properties of a CreateBlockRequest. */
            interface ICreateBlockRequest {

                /** CreateBlockRequest neighborhoodId */
                neighborhoodId?: (string|null);

                /** CreateBlockRequest info */
                info?: (com.unblock.proto.CreateBlockRequest.ICreateBlockInfo|null);
            }

            /** Represents a CreateBlockRequest. */
            class CreateBlockRequest implements ICreateBlockRequest {

                /**
                 * Constructs a new CreateBlockRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.ICreateBlockRequest);

                /** CreateBlockRequest neighborhoodId. */
                public neighborhoodId: string;

                /** CreateBlockRequest info. */
                public info?: (com.unblock.proto.CreateBlockRequest.ICreateBlockInfo|null);

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

            namespace CreateBlockRequest {

                /** Properties of a CreateBlockInfo. */
                interface ICreateBlockInfo {

                    /** CreateBlockInfo name */
                    name?: (string|null);

                    /** CreateBlockInfo bounds */
                    bounds?: (com.unblock.proto.IBounds|null);
                }

                /** Represents a CreateBlockInfo. */
                class CreateBlockInfo implements ICreateBlockInfo {

                    /**
                     * Constructs a new CreateBlockInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.CreateBlockRequest.ICreateBlockInfo);

                    /** CreateBlockInfo name. */
                    public name: string;

                    /** CreateBlockInfo bounds. */
                    public bounds?: (com.unblock.proto.IBounds|null);

                    /**
                     * Creates a new CreateBlockInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBlockInfo instance
                     */
                    public static create(properties?: com.unblock.proto.CreateBlockRequest.ICreateBlockInfo): com.unblock.proto.CreateBlockRequest.CreateBlockInfo;

                    /**
                     * Encodes the specified CreateBlockInfo message. Does not implicitly {@link com.unblock.proto.CreateBlockRequest.CreateBlockInfo.verify|verify} messages.
                     * @param message CreateBlockInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.CreateBlockRequest.ICreateBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBlockInfo message, length delimited. Does not implicitly {@link com.unblock.proto.CreateBlockRequest.CreateBlockInfo.verify|verify} messages.
                     * @param message CreateBlockInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.CreateBlockRequest.ICreateBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBlockInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBlockInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.CreateBlockRequest.CreateBlockInfo;

                    /**
                     * Decodes a CreateBlockInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBlockInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.CreateBlockRequest.CreateBlockInfo;

                    /**
                     * Verifies a CreateBlockInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBlockInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBlockInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.CreateBlockRequest.CreateBlockInfo;

                    /**
                     * Creates a plain object from a CreateBlockInfo message. Also converts values to other types if specified.
                     * @param message CreateBlockInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.CreateBlockRequest.CreateBlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBlockInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a ListBlocksResponse. */
            interface IListBlocksResponse {

                /** ListBlocksResponse blocks */
                blocks?: (com.unblock.proto.IBlock[]|null);
            }

            /** Represents a ListBlocksResponse. */
            class ListBlocksResponse implements IListBlocksResponse {

                /**
                 * Constructs a new ListBlocksResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IListBlocksResponse);

                /** ListBlocksResponse blocks. */
                public blocks: com.unblock.proto.IBlock[];

                /**
                 * Creates a new ListBlocksResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListBlocksResponse instance
                 */
                public static create(properties?: com.unblock.proto.IListBlocksResponse): com.unblock.proto.ListBlocksResponse;

                /**
                 * Encodes the specified ListBlocksResponse message. Does not implicitly {@link com.unblock.proto.ListBlocksResponse.verify|verify} messages.
                 * @param message ListBlocksResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IListBlocksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListBlocksResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListBlocksResponse.verify|verify} messages.
                 * @param message ListBlocksResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IListBlocksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListBlocksResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListBlocksResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.ListBlocksResponse;

                /**
                 * Decodes a ListBlocksResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListBlocksResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.ListBlocksResponse;

                /**
                 * Verifies a ListBlocksResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListBlocksResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListBlocksResponse
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.ListBlocksResponse;

                /**
                 * Creates a plain object from a ListBlocksResponse message. Also converts values to other types if specified.
                 * @param message ListBlocksResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.ListBlocksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListBlocksResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateBlockInfoRequest. */
            interface IUpdateBlockInfoRequest {

                /** UpdateBlockInfoRequest id */
                id?: (string|null);

                /** UpdateBlockInfoRequest info */
                info?: (com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo|null);
            }

            /** Represents an UpdateBlockInfoRequest. */
            class UpdateBlockInfoRequest implements IUpdateBlockInfoRequest {

                /**
                 * Constructs a new UpdateBlockInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateBlockInfoRequest);

                /** UpdateBlockInfoRequest id. */
                public id: string;

                /** UpdateBlockInfoRequest info. */
                public info?: (com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo|null);

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

            namespace UpdateBlockInfoRequest {

                /** Properties of an UpdateBlockInfo. */
                interface IUpdateBlockInfo {

                    /** UpdateBlockInfo name */
                    name?: (string|null);
                }

                /** Represents an UpdateBlockInfo. */
                class UpdateBlockInfo implements IUpdateBlockInfo {

                    /**
                     * Constructs a new UpdateBlockInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo);

                    /** UpdateBlockInfo name. */
                    public name: string;

                    /**
                     * Creates a new UpdateBlockInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBlockInfo instance
                     */
                    public static create(properties?: com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo): com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo;

                    /**
                     * Encodes the specified UpdateBlockInfo message. Does not implicitly {@link com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo.verify|verify} messages.
                     * @param message UpdateBlockInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBlockInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo.verify|verify} messages.
                     * @param message UpdateBlockInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBlockInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBlockInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo;

                    /**
                     * Decodes an UpdateBlockInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBlockInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo;

                    /**
                     * Verifies an UpdateBlockInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBlockInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBlockInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo;

                    /**
                     * Creates a plain object from an UpdateBlockInfo message. Also converts values to other types if specified.
                     * @param message UpdateBlockInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBlockInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** BlockStatus enum. */
            enum BlockStatus {
                BLOCK_STATUS_UNSPECIFIED = 0,
                BLOCK_LIVE = 1,
                BLOCK_DISABLED = 2
            }

            /** Properties of an UpdateBlockStatusRequest. */
            interface IUpdateBlockStatusRequest {

                /** UpdateBlockStatusRequest id */
                id?: (string|null);

                /** UpdateBlockStatusRequest status */
                status?: (com.unblock.proto.BlockStatus|null);
            }

            /** Represents an UpdateBlockStatusRequest. */
            class UpdateBlockStatusRequest implements IUpdateBlockStatusRequest {

                /**
                 * Constructs a new UpdateBlockStatusRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateBlockStatusRequest);

                /** UpdateBlockStatusRequest id. */
                public id: string;

                /** UpdateBlockStatusRequest status. */
                public status: com.unblock.proto.BlockStatus;

                /**
                 * Creates a new UpdateBlockStatusRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateBlockStatusRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateBlockStatusRequest): com.unblock.proto.UpdateBlockStatusRequest;

                /**
                 * Encodes the specified UpdateBlockStatusRequest message. Does not implicitly {@link com.unblock.proto.UpdateBlockStatusRequest.verify|verify} messages.
                 * @param message UpdateBlockStatusRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateBlockStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateBlockStatusRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateBlockStatusRequest.verify|verify} messages.
                 * @param message UpdateBlockStatusRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateBlockStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateBlockStatusRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateBlockStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateBlockStatusRequest;

                /**
                 * Decodes an UpdateBlockStatusRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateBlockStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateBlockStatusRequest;

                /**
                 * Verifies an UpdateBlockStatusRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateBlockStatusRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateBlockStatusRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateBlockStatusRequest;

                /**
                 * Creates a plain object from an UpdateBlockStatusRequest message. Also converts values to other types if specified.
                 * @param message UpdateBlockStatusRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateBlockStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateBlockStatusRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateBlockBoundsRequest. */
            interface IUpdateBlockBoundsRequest {

                /** UpdateBlockBoundsRequest id */
                id?: (string|null);

                /** UpdateBlockBoundsRequest update */
                update?: (com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds|null);
            }

            /** Represents an UpdateBlockBoundsRequest. */
            class UpdateBlockBoundsRequest implements IUpdateBlockBoundsRequest {

                /**
                 * Constructs a new UpdateBlockBoundsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateBlockBoundsRequest);

                /** UpdateBlockBoundsRequest id. */
                public id: string;

                /** UpdateBlockBoundsRequest update. */
                public update?: (com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds|null);

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

            namespace UpdateBlockBoundsRequest {

                /** Properties of an UpdateBlockBounds. */
                interface IUpdateBlockBounds {

                    /** UpdateBlockBounds bounds */
                    bounds?: (com.unblock.proto.IBounds|null);
                }

                /** Represents an UpdateBlockBounds. */
                class UpdateBlockBounds implements IUpdateBlockBounds {

                    /**
                     * Constructs a new UpdateBlockBounds.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds);

                    /** UpdateBlockBounds bounds. */
                    public bounds?: (com.unblock.proto.IBounds|null);

                    /**
                     * Creates a new UpdateBlockBounds instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBlockBounds instance
                     */
                    public static create(properties?: com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds): com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds;

                    /**
                     * Encodes the specified UpdateBlockBounds message. Does not implicitly {@link com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds.verify|verify} messages.
                     * @param message UpdateBlockBounds message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBlockBounds message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds.verify|verify} messages.
                     * @param message UpdateBlockBounds message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBlockBounds message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBlockBounds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds;

                    /**
                     * Decodes an UpdateBlockBounds message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBlockBounds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds;

                    /**
                     * Verifies an UpdateBlockBounds message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBlockBounds message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBlockBounds
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds;

                    /**
                     * Creates a plain object from an UpdateBlockBounds message. Also converts values to other types if specified.
                     * @param message UpdateBlockBounds
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBlockBounds to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an AssignBlockToNeighborhoodRequest. */
            interface IAssignBlockToNeighborhoodRequest {

                /** AssignBlockToNeighborhoodRequest id */
                id?: (string|null);

                /** AssignBlockToNeighborhoodRequest neighborhoodId */
                neighborhoodId?: (string|null);
            }

            /** Represents an AssignBlockToNeighborhoodRequest. */
            class AssignBlockToNeighborhoodRequest implements IAssignBlockToNeighborhoodRequest {

                /**
                 * Constructs a new AssignBlockToNeighborhoodRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IAssignBlockToNeighborhoodRequest);

                /** AssignBlockToNeighborhoodRequest id. */
                public id: string;

                /** AssignBlockToNeighborhoodRequest neighborhoodId. */
                public neighborhoodId: string;

                /**
                 * Creates a new AssignBlockToNeighborhoodRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AssignBlockToNeighborhoodRequest instance
                 */
                public static create(properties?: com.unblock.proto.IAssignBlockToNeighborhoodRequest): com.unblock.proto.AssignBlockToNeighborhoodRequest;

                /**
                 * Encodes the specified AssignBlockToNeighborhoodRequest message. Does not implicitly {@link com.unblock.proto.AssignBlockToNeighborhoodRequest.verify|verify} messages.
                 * @param message AssignBlockToNeighborhoodRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IAssignBlockToNeighborhoodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AssignBlockToNeighborhoodRequest message, length delimited. Does not implicitly {@link com.unblock.proto.AssignBlockToNeighborhoodRequest.verify|verify} messages.
                 * @param message AssignBlockToNeighborhoodRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IAssignBlockToNeighborhoodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AssignBlockToNeighborhoodRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AssignBlockToNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.AssignBlockToNeighborhoodRequest;

                /**
                 * Decodes an AssignBlockToNeighborhoodRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AssignBlockToNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.AssignBlockToNeighborhoodRequest;

                /**
                 * Verifies an AssignBlockToNeighborhoodRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AssignBlockToNeighborhoodRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AssignBlockToNeighborhoodRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.AssignBlockToNeighborhoodRequest;

                /**
                 * Creates a plain object from an AssignBlockToNeighborhoodRequest message. Also converts values to other types if specified.
                 * @param message AssignBlockToNeighborhoodRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.AssignBlockToNeighborhoodRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AssignBlockToNeighborhoodRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Block. */
            interface IBlock {

                /** Block id */
                id?: (string|null);

                /** Block status */
                status?: (com.unblock.proto.BlockStatus|null);

                /** Block neighborhoodId */
                neighborhoodId?: (string|null);

                /** Block name */
                name?: (string|null);

                /** Block bounds */
                bounds?: (com.unblock.proto.IBounds|null);

                /** Block attractions */
                attractions?: (com.unblock.proto.IAttraction[]|null);
            }

            /** Represents a Block. */
            class Block implements IBlock {

                /**
                 * Constructs a new Block.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IBlock);

                /** Block id. */
                public id: string;

                /** Block status. */
                public status: com.unblock.proto.BlockStatus;

                /** Block neighborhoodId. */
                public neighborhoodId: string;

                /** Block name. */
                public name: string;

                /** Block bounds. */
                public bounds?: (com.unblock.proto.IBounds|null);

                /** Block attractions. */
                public attractions: com.unblock.proto.IAttraction[];

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

            /** Properties of a Bounds. */
            interface IBounds {

                /** Bounds points */
                points?: (com.unblock.proto.Bounds.IPoint[]|null);
            }

            /** Represents a Bounds. */
            class Bounds implements IBounds {

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
                    x?: (number|null);

                    /** Point y */
                    y?: (number|null);
                }

                /** Represents a Point. */
                class Point implements IPoint {

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

            /** Properties of a CreateCityRequest. */
            interface ICreateCityRequest {

                /** CreateCityRequest info */
                info?: (com.unblock.proto.CreateCityRequest.ICreateCityInfo|null);
            }

            /** Represents a CreateCityRequest. */
            class CreateCityRequest implements ICreateCityRequest {

                /**
                 * Constructs a new CreateCityRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.ICreateCityRequest);

                /** CreateCityRequest info. */
                public info?: (com.unblock.proto.CreateCityRequest.ICreateCityInfo|null);

                /**
                 * Creates a new CreateCityRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateCityRequest instance
                 */
                public static create(properties?: com.unblock.proto.ICreateCityRequest): com.unblock.proto.CreateCityRequest;

                /**
                 * Encodes the specified CreateCityRequest message. Does not implicitly {@link com.unblock.proto.CreateCityRequest.verify|verify} messages.
                 * @param message CreateCityRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.ICreateCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateCityRequest message, length delimited. Does not implicitly {@link com.unblock.proto.CreateCityRequest.verify|verify} messages.
                 * @param message CreateCityRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.ICreateCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateCityRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateCityRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.CreateCityRequest;

                /**
                 * Decodes a CreateCityRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateCityRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.CreateCityRequest;

                /**
                 * Verifies a CreateCityRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateCityRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateCityRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.CreateCityRequest;

                /**
                 * Creates a plain object from a CreateCityRequest message. Also converts values to other types if specified.
                 * @param message CreateCityRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.CreateCityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateCityRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace CreateCityRequest {

                /** Properties of a CreateCityInfo. */
                interface ICreateCityInfo {

                    /** CreateCityInfo name */
                    name?: (string|null);
                }

                /** Represents a CreateCityInfo. */
                class CreateCityInfo implements ICreateCityInfo {

                    /**
                     * Constructs a new CreateCityInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.CreateCityRequest.ICreateCityInfo);

                    /** CreateCityInfo name. */
                    public name: string;

                    /**
                     * Creates a new CreateCityInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCityInfo instance
                     */
                    public static create(properties?: com.unblock.proto.CreateCityRequest.ICreateCityInfo): com.unblock.proto.CreateCityRequest.CreateCityInfo;

                    /**
                     * Encodes the specified CreateCityInfo message. Does not implicitly {@link com.unblock.proto.CreateCityRequest.CreateCityInfo.verify|verify} messages.
                     * @param message CreateCityInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.CreateCityRequest.ICreateCityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCityInfo message, length delimited. Does not implicitly {@link com.unblock.proto.CreateCityRequest.CreateCityInfo.verify|verify} messages.
                     * @param message CreateCityInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.CreateCityRequest.ICreateCityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCityInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCityInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.CreateCityRequest.CreateCityInfo;

                    /**
                     * Decodes a CreateCityInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCityInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.CreateCityRequest.CreateCityInfo;

                    /**
                     * Verifies a CreateCityInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCityInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCityInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.CreateCityRequest.CreateCityInfo;

                    /**
                     * Creates a plain object from a CreateCityInfo message. Also converts values to other types if specified.
                     * @param message CreateCityInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.CreateCityRequest.CreateCityInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCityInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a ListCitiesResponse. */
            interface IListCitiesResponse {

                /** ListCitiesResponse cities */
                cities?: (com.unblock.proto.ICity[]|null);
            }

            /** Represents a ListCitiesResponse. */
            class ListCitiesResponse implements IListCitiesResponse {

                /**
                 * Constructs a new ListCitiesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IListCitiesResponse);

                /** ListCitiesResponse cities. */
                public cities: com.unblock.proto.ICity[];

                /**
                 * Creates a new ListCitiesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListCitiesResponse instance
                 */
                public static create(properties?: com.unblock.proto.IListCitiesResponse): com.unblock.proto.ListCitiesResponse;

                /**
                 * Encodes the specified ListCitiesResponse message. Does not implicitly {@link com.unblock.proto.ListCitiesResponse.verify|verify} messages.
                 * @param message ListCitiesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IListCitiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListCitiesResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListCitiesResponse.verify|verify} messages.
                 * @param message ListCitiesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IListCitiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListCitiesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListCitiesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.ListCitiesResponse;

                /**
                 * Decodes a ListCitiesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListCitiesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.ListCitiesResponse;

                /**
                 * Verifies a ListCitiesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListCitiesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListCitiesResponse
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.ListCitiesResponse;

                /**
                 * Creates a plain object from a ListCitiesResponse message. Also converts values to other types if specified.
                 * @param message ListCitiesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.ListCitiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListCitiesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateCityInfoRequest. */
            interface IUpdateCityInfoRequest {

                /** UpdateCityInfoRequest id */
                id?: (string|null);

                /** UpdateCityInfoRequest info */
                info?: (com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo|null);
            }

            /** Represents an UpdateCityInfoRequest. */
            class UpdateCityInfoRequest implements IUpdateCityInfoRequest {

                /**
                 * Constructs a new UpdateCityInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateCityInfoRequest);

                /** UpdateCityInfoRequest id. */
                public id: string;

                /** UpdateCityInfoRequest info. */
                public info?: (com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo|null);

                /**
                 * Creates a new UpdateCityInfoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateCityInfoRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateCityInfoRequest): com.unblock.proto.UpdateCityInfoRequest;

                /**
                 * Encodes the specified UpdateCityInfoRequest message. Does not implicitly {@link com.unblock.proto.UpdateCityInfoRequest.verify|verify} messages.
                 * @param message UpdateCityInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateCityInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateCityInfoRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateCityInfoRequest.verify|verify} messages.
                 * @param message UpdateCityInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateCityInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateCityInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateCityInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateCityInfoRequest;

                /**
                 * Decodes an UpdateCityInfoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateCityInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateCityInfoRequest;

                /**
                 * Verifies an UpdateCityInfoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateCityInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateCityInfoRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateCityInfoRequest;

                /**
                 * Creates a plain object from an UpdateCityInfoRequest message. Also converts values to other types if specified.
                 * @param message UpdateCityInfoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateCityInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateCityInfoRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace UpdateCityInfoRequest {

                /** Properties of an UpdateCityInfo. */
                interface IUpdateCityInfo {

                    /** UpdateCityInfo name */
                    name?: (string|null);
                }

                /** Represents an UpdateCityInfo. */
                class UpdateCityInfo implements IUpdateCityInfo {

                    /**
                     * Constructs a new UpdateCityInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo);

                    /** UpdateCityInfo name. */
                    public name: string;

                    /**
                     * Creates a new UpdateCityInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCityInfo instance
                     */
                    public static create(properties?: com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo): com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo;

                    /**
                     * Encodes the specified UpdateCityInfo message. Does not implicitly {@link com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo.verify|verify} messages.
                     * @param message UpdateCityInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCityInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo.verify|verify} messages.
                     * @param message UpdateCityInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCityInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCityInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo;

                    /**
                     * Decodes an UpdateCityInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCityInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo;

                    /**
                     * Verifies an UpdateCityInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCityInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCityInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo;

                    /**
                     * Creates a plain object from an UpdateCityInfo message. Also converts values to other types if specified.
                     * @param message UpdateCityInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCityInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** CityStatus enum. */
            enum CityStatus {
                CITY_STATUS_UNSPECIFIED = 0,
                CITY_LIVE = 1,
                CITY_DISABLED = 2
            }

            /** Properties of an UpdateCityStatusRequest. */
            interface IUpdateCityStatusRequest {

                /** UpdateCityStatusRequest id */
                id?: (string|null);

                /** UpdateCityStatusRequest status */
                status?: (com.unblock.proto.CityStatus|null);
            }

            /** Represents an UpdateCityStatusRequest. */
            class UpdateCityStatusRequest implements IUpdateCityStatusRequest {

                /**
                 * Constructs a new UpdateCityStatusRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateCityStatusRequest);

                /** UpdateCityStatusRequest id. */
                public id: string;

                /** UpdateCityStatusRequest status. */
                public status: com.unblock.proto.CityStatus;

                /**
                 * Creates a new UpdateCityStatusRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateCityStatusRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateCityStatusRequest): com.unblock.proto.UpdateCityStatusRequest;

                /**
                 * Encodes the specified UpdateCityStatusRequest message. Does not implicitly {@link com.unblock.proto.UpdateCityStatusRequest.verify|verify} messages.
                 * @param message UpdateCityStatusRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateCityStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateCityStatusRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateCityStatusRequest.verify|verify} messages.
                 * @param message UpdateCityStatusRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateCityStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateCityStatusRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateCityStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateCityStatusRequest;

                /**
                 * Decodes an UpdateCityStatusRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateCityStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateCityStatusRequest;

                /**
                 * Verifies an UpdateCityStatusRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateCityStatusRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateCityStatusRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateCityStatusRequest;

                /**
                 * Creates a plain object from an UpdateCityStatusRequest message. Also converts values to other types if specified.
                 * @param message UpdateCityStatusRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateCityStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateCityStatusRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a City. */
            interface ICity {

                /** City id */
                id?: (string|null);

                /** City status */
                status?: (com.unblock.proto.CityStatus|null);

                /** City name */
                name?: (string|null);

                /** City neighborhoods */
                neighborhoods?: (com.unblock.proto.INeighborhood[]|null);
            }

            /** Represents a City. */
            class City implements ICity {

                /**
                 * Constructs a new City.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.ICity);

                /** City id. */
                public id: string;

                /** City status. */
                public status: com.unblock.proto.CityStatus;

                /** City name. */
                public name: string;

                /** City neighborhoods. */
                public neighborhoods: com.unblock.proto.INeighborhood[];

                /**
                 * Creates a new City instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns City instance
                 */
                public static create(properties?: com.unblock.proto.ICity): com.unblock.proto.City;

                /**
                 * Encodes the specified City message. Does not implicitly {@link com.unblock.proto.City.verify|verify} messages.
                 * @param message City message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.ICity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified City message, length delimited. Does not implicitly {@link com.unblock.proto.City.verify|verify} messages.
                 * @param message City message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.ICity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a City message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns City
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.City;

                /**
                 * Decodes a City message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns City
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.City;

                /**
                 * Verifies a City message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a City message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns City
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.City;

                /**
                 * Creates a plain object from a City message. Also converts values to other types if specified.
                 * @param message City
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.City, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this City to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateNeighborhoodRequest. */
            interface ICreateNeighborhoodRequest {

                /** CreateNeighborhoodRequest cityId */
                cityId?: (string|null);

                /** CreateNeighborhoodRequest info */
                info?: (com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo|null);
            }

            /** Represents a CreateNeighborhoodRequest. */
            class CreateNeighborhoodRequest implements ICreateNeighborhoodRequest {

                /**
                 * Constructs a new CreateNeighborhoodRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.ICreateNeighborhoodRequest);

                /** CreateNeighborhoodRequest cityId. */
                public cityId: string;

                /** CreateNeighborhoodRequest info. */
                public info?: (com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo|null);

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

            namespace CreateNeighborhoodRequest {

                /** Properties of a CreateNeighborhoodInfo. */
                interface ICreateNeighborhoodInfo {

                    /** CreateNeighborhoodInfo name */
                    name?: (string|null);
                }

                /** Represents a CreateNeighborhoodInfo. */
                class CreateNeighborhoodInfo implements ICreateNeighborhoodInfo {

                    /**
                     * Constructs a new CreateNeighborhoodInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo);

                    /** CreateNeighborhoodInfo name. */
                    public name: string;

                    /**
                     * Creates a new CreateNeighborhoodInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateNeighborhoodInfo instance
                     */
                    public static create(properties?: com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo): com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo;

                    /**
                     * Encodes the specified CreateNeighborhoodInfo message. Does not implicitly {@link com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo.verify|verify} messages.
                     * @param message CreateNeighborhoodInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateNeighborhoodInfo message, length delimited. Does not implicitly {@link com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo.verify|verify} messages.
                     * @param message CreateNeighborhoodInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateNeighborhoodInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateNeighborhoodInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo;

                    /**
                     * Decodes a CreateNeighborhoodInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateNeighborhoodInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo;

                    /**
                     * Verifies a CreateNeighborhoodInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateNeighborhoodInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateNeighborhoodInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo;

                    /**
                     * Creates a plain object from a CreateNeighborhoodInfo message. Also converts values to other types if specified.
                     * @param message CreateNeighborhoodInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateNeighborhoodInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a ListNeighborhoodsResponse. */
            interface IListNeighborhoodsResponse {

                /** ListNeighborhoodsResponse neighborhoods */
                neighborhoods?: (com.unblock.proto.INeighborhood[]|null);
            }

            /** Represents a ListNeighborhoodsResponse. */
            class ListNeighborhoodsResponse implements IListNeighborhoodsResponse {

                /**
                 * Constructs a new ListNeighborhoodsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IListNeighborhoodsResponse);

                /** ListNeighborhoodsResponse neighborhoods. */
                public neighborhoods: com.unblock.proto.INeighborhood[];

                /**
                 * Creates a new ListNeighborhoodsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListNeighborhoodsResponse instance
                 */
                public static create(properties?: com.unblock.proto.IListNeighborhoodsResponse): com.unblock.proto.ListNeighborhoodsResponse;

                /**
                 * Encodes the specified ListNeighborhoodsResponse message. Does not implicitly {@link com.unblock.proto.ListNeighborhoodsResponse.verify|verify} messages.
                 * @param message ListNeighborhoodsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IListNeighborhoodsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListNeighborhoodsResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListNeighborhoodsResponse.verify|verify} messages.
                 * @param message ListNeighborhoodsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IListNeighborhoodsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListNeighborhoodsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListNeighborhoodsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.ListNeighborhoodsResponse;

                /**
                 * Decodes a ListNeighborhoodsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListNeighborhoodsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.ListNeighborhoodsResponse;

                /**
                 * Verifies a ListNeighborhoodsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListNeighborhoodsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListNeighborhoodsResponse
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.ListNeighborhoodsResponse;

                /**
                 * Creates a plain object from a ListNeighborhoodsResponse message. Also converts values to other types if specified.
                 * @param message ListNeighborhoodsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.ListNeighborhoodsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListNeighborhoodsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateNeighborhoodInfoRequest. */
            interface IUpdateNeighborhoodInfoRequest {

                /** UpdateNeighborhoodInfoRequest id */
                id?: (string|null);

                /** UpdateNeighborhoodInfoRequest info */
                info?: (com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo|null);
            }

            /** Represents an UpdateNeighborhoodInfoRequest. */
            class UpdateNeighborhoodInfoRequest implements IUpdateNeighborhoodInfoRequest {

                /**
                 * Constructs a new UpdateNeighborhoodInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateNeighborhoodInfoRequest);

                /** UpdateNeighborhoodInfoRequest id. */
                public id: string;

                /** UpdateNeighborhoodInfoRequest info. */
                public info?: (com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo|null);

                /**
                 * Creates a new UpdateNeighborhoodInfoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateNeighborhoodInfoRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateNeighborhoodInfoRequest): com.unblock.proto.UpdateNeighborhoodInfoRequest;

                /**
                 * Encodes the specified UpdateNeighborhoodInfoRequest message. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodInfoRequest.verify|verify} messages.
                 * @param message UpdateNeighborhoodInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateNeighborhoodInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateNeighborhoodInfoRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodInfoRequest.verify|verify} messages.
                 * @param message UpdateNeighborhoodInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateNeighborhoodInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateNeighborhoodInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateNeighborhoodInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateNeighborhoodInfoRequest;

                /**
                 * Decodes an UpdateNeighborhoodInfoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateNeighborhoodInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateNeighborhoodInfoRequest;

                /**
                 * Verifies an UpdateNeighborhoodInfoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateNeighborhoodInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateNeighborhoodInfoRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateNeighborhoodInfoRequest;

                /**
                 * Creates a plain object from an UpdateNeighborhoodInfoRequest message. Also converts values to other types if specified.
                 * @param message UpdateNeighborhoodInfoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateNeighborhoodInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateNeighborhoodInfoRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace UpdateNeighborhoodInfoRequest {

                /** Properties of an UpdateNeighborhoodInfo. */
                interface IUpdateNeighborhoodInfo {

                    /** UpdateNeighborhoodInfo name */
                    name?: (string|null);
                }

                /** Represents an UpdateNeighborhoodInfo. */
                class UpdateNeighborhoodInfo implements IUpdateNeighborhoodInfo {

                    /**
                     * Constructs a new UpdateNeighborhoodInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo);

                    /** UpdateNeighborhoodInfo name. */
                    public name: string;

                    /**
                     * Creates a new UpdateNeighborhoodInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateNeighborhoodInfo instance
                     */
                    public static create(properties?: com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo): com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo;

                    /**
                     * Encodes the specified UpdateNeighborhoodInfo message. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo.verify|verify} messages.
                     * @param message UpdateNeighborhoodInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateNeighborhoodInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo.verify|verify} messages.
                     * @param message UpdateNeighborhoodInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateNeighborhoodInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateNeighborhoodInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo;

                    /**
                     * Decodes an UpdateNeighborhoodInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateNeighborhoodInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo;

                    /**
                     * Verifies an UpdateNeighborhoodInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateNeighborhoodInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateNeighborhoodInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo;

                    /**
                     * Creates a plain object from an UpdateNeighborhoodInfo message. Also converts values to other types if specified.
                     * @param message UpdateNeighborhoodInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateNeighborhoodInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** NeighborhoodStatus enum. */
            enum NeighborhoodStatus {
                NEIGHBORHOOD_STATUS_UNSPECIFIED = 0,
                NEIGHBORHOOD_LIVE = 1,
                NEIGHBORHOOD_DISABLED = 2
            }

            /** Properties of an UpdateNeighborhoodStatusRequest. */
            interface IUpdateNeighborhoodStatusRequest {

                /** UpdateNeighborhoodStatusRequest id */
                id?: (string|null);

                /** UpdateNeighborhoodStatusRequest status */
                status?: (com.unblock.proto.NeighborhoodStatus|null);
            }

            /** Represents an UpdateNeighborhoodStatusRequest. */
            class UpdateNeighborhoodStatusRequest implements IUpdateNeighborhoodStatusRequest {

                /**
                 * Constructs a new UpdateNeighborhoodStatusRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateNeighborhoodStatusRequest);

                /** UpdateNeighborhoodStatusRequest id. */
                public id: string;

                /** UpdateNeighborhoodStatusRequest status. */
                public status: com.unblock.proto.NeighborhoodStatus;

                /**
                 * Creates a new UpdateNeighborhoodStatusRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateNeighborhoodStatusRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateNeighborhoodStatusRequest): com.unblock.proto.UpdateNeighborhoodStatusRequest;

                /**
                 * Encodes the specified UpdateNeighborhoodStatusRequest message. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodStatusRequest.verify|verify} messages.
                 * @param message UpdateNeighborhoodStatusRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateNeighborhoodStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateNeighborhoodStatusRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodStatusRequest.verify|verify} messages.
                 * @param message UpdateNeighborhoodStatusRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateNeighborhoodStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateNeighborhoodStatusRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateNeighborhoodStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateNeighborhoodStatusRequest;

                /**
                 * Decodes an UpdateNeighborhoodStatusRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateNeighborhoodStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateNeighborhoodStatusRequest;

                /**
                 * Verifies an UpdateNeighborhoodStatusRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateNeighborhoodStatusRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateNeighborhoodStatusRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateNeighborhoodStatusRequest;

                /**
                 * Creates a plain object from an UpdateNeighborhoodStatusRequest message. Also converts values to other types if specified.
                 * @param message UpdateNeighborhoodStatusRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateNeighborhoodStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateNeighborhoodStatusRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AssignNeighborhoodToCityRequest. */
            interface IAssignNeighborhoodToCityRequest {

                /** AssignNeighborhoodToCityRequest id */
                id?: (string|null);

                /** AssignNeighborhoodToCityRequest cityId */
                cityId?: (string|null);
            }

            /** Represents an AssignNeighborhoodToCityRequest. */
            class AssignNeighborhoodToCityRequest implements IAssignNeighborhoodToCityRequest {

                /**
                 * Constructs a new AssignNeighborhoodToCityRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IAssignNeighborhoodToCityRequest);

                /** AssignNeighborhoodToCityRequest id. */
                public id: string;

                /** AssignNeighborhoodToCityRequest cityId. */
                public cityId: string;

                /**
                 * Creates a new AssignNeighborhoodToCityRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AssignNeighborhoodToCityRequest instance
                 */
                public static create(properties?: com.unblock.proto.IAssignNeighborhoodToCityRequest): com.unblock.proto.AssignNeighborhoodToCityRequest;

                /**
                 * Encodes the specified AssignNeighborhoodToCityRequest message. Does not implicitly {@link com.unblock.proto.AssignNeighborhoodToCityRequest.verify|verify} messages.
                 * @param message AssignNeighborhoodToCityRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IAssignNeighborhoodToCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AssignNeighborhoodToCityRequest message, length delimited. Does not implicitly {@link com.unblock.proto.AssignNeighborhoodToCityRequest.verify|verify} messages.
                 * @param message AssignNeighborhoodToCityRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IAssignNeighborhoodToCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AssignNeighborhoodToCityRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AssignNeighborhoodToCityRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.AssignNeighborhoodToCityRequest;

                /**
                 * Decodes an AssignNeighborhoodToCityRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AssignNeighborhoodToCityRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.AssignNeighborhoodToCityRequest;

                /**
                 * Verifies an AssignNeighborhoodToCityRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AssignNeighborhoodToCityRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AssignNeighborhoodToCityRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.AssignNeighborhoodToCityRequest;

                /**
                 * Creates a plain object from an AssignNeighborhoodToCityRequest message. Also converts values to other types if specified.
                 * @param message AssignNeighborhoodToCityRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.AssignNeighborhoodToCityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AssignNeighborhoodToCityRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Neighborhood. */
            interface INeighborhood {

                /** Neighborhood id */
                id?: (string|null);

                /** Neighborhood status */
                status?: (com.unblock.proto.NeighborhoodStatus|null);

                /** Neighborhood cityId */
                cityId?: (string|null);

                /** Neighborhood name */
                name?: (string|null);

                /** Neighborhood blocks */
                blocks?: (com.unblock.proto.IBlock[]|null);
            }

            /** Represents a Neighborhood. */
            class Neighborhood implements INeighborhood {

                /**
                 * Constructs a new Neighborhood.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.INeighborhood);

                /** Neighborhood id. */
                public id: string;

                /** Neighborhood status. */
                public status: com.unblock.proto.NeighborhoodStatus;

                /** Neighborhood cityId. */
                public cityId: string;

                /** Neighborhood name. */
                public name: string;

                /** Neighborhood blocks. */
                public blocks: com.unblock.proto.IBlock[];

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

            /** Properties of a LoginRequest. */
            interface ILoginRequest {

                /** LoginRequest usernameOrEmail */
                usernameOrEmail?: (string|null);

                /** LoginRequest password */
                password?: (string|null);
            }

            /** Represents a LoginRequest. */
            class LoginRequest implements ILoginRequest {

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

            /** Properties of a CreateUserRequest. */
            interface ICreateUserRequest {

                /** CreateUserRequest info */
                info?: (com.unblock.proto.CreateUserRequest.ICreateUserInfo|null);
            }

            /** Represents a CreateUserRequest. */
            class CreateUserRequest implements ICreateUserRequest {

                /**
                 * Constructs a new CreateUserRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.ICreateUserRequest);

                /** CreateUserRequest info. */
                public info?: (com.unblock.proto.CreateUserRequest.ICreateUserInfo|null);

                /**
                 * Creates a new CreateUserRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateUserRequest instance
                 */
                public static create(properties?: com.unblock.proto.ICreateUserRequest): com.unblock.proto.CreateUserRequest;

                /**
                 * Encodes the specified CreateUserRequest message. Does not implicitly {@link com.unblock.proto.CreateUserRequest.verify|verify} messages.
                 * @param message CreateUserRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link com.unblock.proto.CreateUserRequest.verify|verify} messages.
                 * @param message CreateUserRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateUserRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.CreateUserRequest;

                /**
                 * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.CreateUserRequest;

                /**
                 * Verifies a CreateUserRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateUserRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.CreateUserRequest;

                /**
                 * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
                 * @param message CreateUserRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.CreateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateUserRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace CreateUserRequest {

                /** Properties of a CreateUserInfo. */
                interface ICreateUserInfo {

                    /** CreateUserInfo username */
                    username?: (string|null);

                    /** CreateUserInfo password */
                    password?: (string|null);

                    /** CreateUserInfo email */
                    email?: (string|null);
                }

                /** Represents a CreateUserInfo. */
                class CreateUserInfo implements ICreateUserInfo {

                    /**
                     * Constructs a new CreateUserInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.CreateUserRequest.ICreateUserInfo);

                    /** CreateUserInfo username. */
                    public username: string;

                    /** CreateUserInfo password. */
                    public password: string;

                    /** CreateUserInfo email. */
                    public email: string;

                    /**
                     * Creates a new CreateUserInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateUserInfo instance
                     */
                    public static create(properties?: com.unblock.proto.CreateUserRequest.ICreateUserInfo): com.unblock.proto.CreateUserRequest.CreateUserInfo;

                    /**
                     * Encodes the specified CreateUserInfo message. Does not implicitly {@link com.unblock.proto.CreateUserRequest.CreateUserInfo.verify|verify} messages.
                     * @param message CreateUserInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.CreateUserRequest.ICreateUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateUserInfo message, length delimited. Does not implicitly {@link com.unblock.proto.CreateUserRequest.CreateUserInfo.verify|verify} messages.
                     * @param message CreateUserInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.CreateUserRequest.ICreateUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateUserInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.CreateUserRequest.CreateUserInfo;

                    /**
                     * Decodes a CreateUserInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.CreateUserRequest.CreateUserInfo;

                    /**
                     * Verifies a CreateUserInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateUserInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateUserInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.CreateUserRequest.CreateUserInfo;

                    /**
                     * Creates a plain object from a CreateUserInfo message. Also converts values to other types if specified.
                     * @param message CreateUserInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.CreateUserRequest.CreateUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateUserInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a ListUsersResponse. */
            interface IListUsersResponse {

                /** ListUsersResponse users */
                users?: (com.unblock.proto.IUser[]|null);
            }

            /** Represents a ListUsersResponse. */
            class ListUsersResponse implements IListUsersResponse {

                /**
                 * Constructs a new ListUsersResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IListUsersResponse);

                /** ListUsersResponse users. */
                public users: com.unblock.proto.IUser[];

                /**
                 * Creates a new ListUsersResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListUsersResponse instance
                 */
                public static create(properties?: com.unblock.proto.IListUsersResponse): com.unblock.proto.ListUsersResponse;

                /**
                 * Encodes the specified ListUsersResponse message. Does not implicitly {@link com.unblock.proto.ListUsersResponse.verify|verify} messages.
                 * @param message ListUsersResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IListUsersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListUsersResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListUsersResponse.verify|verify} messages.
                 * @param message ListUsersResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IListUsersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListUsersResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListUsersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.ListUsersResponse;

                /**
                 * Decodes a ListUsersResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListUsersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.ListUsersResponse;

                /**
                 * Verifies a ListUsersResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListUsersResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListUsersResponse
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.ListUsersResponse;

                /**
                 * Creates a plain object from a ListUsersResponse message. Also converts values to other types if specified.
                 * @param message ListUsersResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.ListUsersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListUsersResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateUserInfoRequest. */
            interface IUpdateUserInfoRequest {

                /** UpdateUserInfoRequest id */
                id?: (string|null);

                /** UpdateUserInfoRequest info */
                info?: (com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo|null);
            }

            /** Represents an UpdateUserInfoRequest. */
            class UpdateUserInfoRequest implements IUpdateUserInfoRequest {

                /**
                 * Constructs a new UpdateUserInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateUserInfoRequest);

                /** UpdateUserInfoRequest id. */
                public id: string;

                /** UpdateUserInfoRequest info. */
                public info?: (com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo|null);

                /**
                 * Creates a new UpdateUserInfoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateUserInfoRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateUserInfoRequest): com.unblock.proto.UpdateUserInfoRequest;

                /**
                 * Encodes the specified UpdateUserInfoRequest message. Does not implicitly {@link com.unblock.proto.UpdateUserInfoRequest.verify|verify} messages.
                 * @param message UpdateUserInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateUserInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateUserInfoRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateUserInfoRequest.verify|verify} messages.
                 * @param message UpdateUserInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateUserInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateUserInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateUserInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateUserInfoRequest;

                /**
                 * Decodes an UpdateUserInfoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateUserInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateUserInfoRequest;

                /**
                 * Verifies an UpdateUserInfoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateUserInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateUserInfoRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateUserInfoRequest;

                /**
                 * Creates a plain object from an UpdateUserInfoRequest message. Also converts values to other types if specified.
                 * @param message UpdateUserInfoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateUserInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateUserInfoRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace UpdateUserInfoRequest {

                /** Properties of an UpdateUserInfo. */
                interface IUpdateUserInfo {

                    /** UpdateUserInfo username */
                    username?: (string|null);

                    /** UpdateUserInfo email */
                    email?: (string|null);
                }

                /** Represents an UpdateUserInfo. */
                class UpdateUserInfo implements IUpdateUserInfo {

                    /**
                     * Constructs a new UpdateUserInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo);

                    /** UpdateUserInfo username. */
                    public username: string;

                    /** UpdateUserInfo email. */
                    public email: string;

                    /**
                     * Creates a new UpdateUserInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateUserInfo instance
                     */
                    public static create(properties?: com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo): com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo;

                    /**
                     * Encodes the specified UpdateUserInfo message. Does not implicitly {@link com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo.verify|verify} messages.
                     * @param message UpdateUserInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateUserInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo.verify|verify} messages.
                     * @param message UpdateUserInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateUserInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo;

                    /**
                     * Decodes an UpdateUserInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo;

                    /**
                     * Verifies an UpdateUserInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateUserInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateUserInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo;

                    /**
                     * Creates a plain object from an UpdateUserInfo message. Also converts values to other types if specified.
                     * @param message UpdateUserInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateUserInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an UpdateUserPasswordRequest. */
            interface IUpdateUserPasswordRequest {

                /** UpdateUserPasswordRequest id */
                id?: (string|null);

                /** UpdateUserPasswordRequest info */
                info?: (com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo|null);
            }

            /** Represents an UpdateUserPasswordRequest. */
            class UpdateUserPasswordRequest implements IUpdateUserPasswordRequest {

                /**
                 * Constructs a new UpdateUserPasswordRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUpdateUserPasswordRequest);

                /** UpdateUserPasswordRequest id. */
                public id: string;

                /** UpdateUserPasswordRequest info. */
                public info?: (com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo|null);

                /**
                 * Creates a new UpdateUserPasswordRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateUserPasswordRequest instance
                 */
                public static create(properties?: com.unblock.proto.IUpdateUserPasswordRequest): com.unblock.proto.UpdateUserPasswordRequest;

                /**
                 * Encodes the specified UpdateUserPasswordRequest message. Does not implicitly {@link com.unblock.proto.UpdateUserPasswordRequest.verify|verify} messages.
                 * @param message UpdateUserPasswordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUpdateUserPasswordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateUserPasswordRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateUserPasswordRequest.verify|verify} messages.
                 * @param message UpdateUserPasswordRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUpdateUserPasswordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateUserPasswordRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateUserPasswordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateUserPasswordRequest;

                /**
                 * Decodes an UpdateUserPasswordRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateUserPasswordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateUserPasswordRequest;

                /**
                 * Verifies an UpdateUserPasswordRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateUserPasswordRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateUserPasswordRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateUserPasswordRequest;

                /**
                 * Creates a plain object from an UpdateUserPasswordRequest message. Also converts values to other types if specified.
                 * @param message UpdateUserPasswordRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.UpdateUserPasswordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateUserPasswordRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace UpdateUserPasswordRequest {

                /** Properties of an UpdateUserInfo. */
                interface IUpdateUserInfo {

                    /** UpdateUserInfo password */
                    password?: (string|null);
                }

                /** Represents an UpdateUserInfo. */
                class UpdateUserInfo implements IUpdateUserInfo {

                    /**
                     * Constructs a new UpdateUserInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo);

                    /** UpdateUserInfo password. */
                    public password: string;

                    /**
                     * Creates a new UpdateUserInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateUserInfo instance
                     */
                    public static create(properties?: com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo): com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo;

                    /**
                     * Encodes the specified UpdateUserInfo message. Does not implicitly {@link com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo.verify|verify} messages.
                     * @param message UpdateUserInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateUserInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo.verify|verify} messages.
                     * @param message UpdateUserInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateUserInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo;

                    /**
                     * Decodes an UpdateUserInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo;

                    /**
                     * Verifies an UpdateUserInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateUserInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateUserInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo;

                    /**
                     * Creates a plain object from an UpdateUserInfo message. Also converts values to other types if specified.
                     * @param message UpdateUserInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateUserInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a User. */
            interface IUser {

                /** User id */
                id?: (string|null);

                /** User username */
                username?: (string|null);

                /** User email */
                email?: (string|null);
            }

            /** Represents a User. */
            class User implements IUser {

                /**
                 * Constructs a new User.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IUser);

                /** User id. */
                public id: string;

                /** User username. */
                public username: string;

                /** User email. */
                public email: string;

                /**
                 * Creates a new User instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns User instance
                 */
                public static create(properties?: com.unblock.proto.IUser): com.unblock.proto.User;

                /**
                 * Encodes the specified User message. Does not implicitly {@link com.unblock.proto.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified User message, length delimited. Does not implicitly {@link com.unblock.proto.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a User message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.User;

                /**
                 * Decodes a User message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.User;

                /**
                 * Verifies a User message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a User message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns User
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.User;

                /**
                 * Creates a plain object from a User message. Also converts values to other types if specified.
                 * @param message User
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this User to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
