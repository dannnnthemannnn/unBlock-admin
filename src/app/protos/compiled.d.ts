import * as $protobuf from "protobufjs";

/** Namespace com. */
export namespace com {

    /** Namespace unblock. */
    namespace unblock {

        /** Namespace proto. */
        namespace proto {

            /** Properties of a Block. */
            interface IBlock {

                /** Block id */
                id?: string;

                /** Block name */
                name?: string;

                /** Block bounds */
                bounds?: com.unblock.proto.Block.IBounds;
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
                public bounds?: (com.unblock.proto.Block.IBounds|null);

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

            namespace Block {

                /** Properties of a Bounds. */
                interface IBounds {

                    /** Bounds points */
                    points?: com.unblock.proto.Block.Bounds.IPoint[];
                }

                /** Represents a Bounds. */
                class Bounds {

                    /**
                     * Constructs a new Bounds.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.unblock.proto.Block.IBounds);

                    /** Bounds points. */
                    public points: com.unblock.proto.Block.Bounds.IPoint[];

                    /**
                     * Creates a new Bounds instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Bounds instance
                     */
                    public static create(properties?: com.unblock.proto.Block.IBounds): com.unblock.proto.Block.Bounds;

                    /**
                     * Encodes the specified Bounds message. Does not implicitly {@link com.unblock.proto.Block.Bounds.verify|verify} messages.
                     * @param message Bounds message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.unblock.proto.Block.IBounds, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Bounds message, length delimited. Does not implicitly {@link com.unblock.proto.Block.Bounds.verify|verify} messages.
                     * @param message Bounds message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.unblock.proto.Block.IBounds, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Bounds message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Bounds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.Block.Bounds;

                    /**
                     * Decodes a Bounds message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Bounds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.Block.Bounds;

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
                    public static fromObject(object: { [k: string]: any }): com.unblock.proto.Block.Bounds;

                    /**
                     * Creates a plain object from a Bounds message. Also converts values to other types if specified.
                     * @param message Bounds
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.unblock.proto.Block.Bounds, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        constructor(properties?: com.unblock.proto.Block.Bounds.IPoint);

                        /** Point x. */
                        public x: number;

                        /** Point y. */
                        public y: number;

                        /**
                         * Creates a new Point instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Point instance
                         */
                        public static create(properties?: com.unblock.proto.Block.Bounds.IPoint): com.unblock.proto.Block.Bounds.Point;

                        /**
                         * Encodes the specified Point message. Does not implicitly {@link com.unblock.proto.Block.Bounds.Point.verify|verify} messages.
                         * @param message Point message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.unblock.proto.Block.Bounds.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Point message, length delimited. Does not implicitly {@link com.unblock.proto.Block.Bounds.Point.verify|verify} messages.
                         * @param message Point message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.unblock.proto.Block.Bounds.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Point message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Point
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.Block.Bounds.Point;

                        /**
                         * Decodes a Point message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Point
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.Block.Bounds.Point;

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
                        public static fromObject(object: { [k: string]: any }): com.unblock.proto.Block.Bounds.Point;

                        /**
                         * Creates a plain object from a Point message. Also converts values to other types if specified.
                         * @param message Point
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.unblock.proto.Block.Bounds.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Point to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
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

            /** Properties of a GetNeighborhoodRequest. */
            interface IGetNeighborhoodRequest {

                /** GetNeighborhoodRequest id */
                id?: string;
            }

            /** Represents a GetNeighborhoodRequest. */
            class GetNeighborhoodRequest {

                /**
                 * Constructs a new GetNeighborhoodRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.unblock.proto.IGetNeighborhoodRequest);

                /** GetNeighborhoodRequest id. */
                public id: string;

                /**
                 * Creates a new GetNeighborhoodRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetNeighborhoodRequest instance
                 */
                public static create(properties?: com.unblock.proto.IGetNeighborhoodRequest): com.unblock.proto.GetNeighborhoodRequest;

                /**
                 * Encodes the specified GetNeighborhoodRequest message. Does not implicitly {@link com.unblock.proto.GetNeighborhoodRequest.verify|verify} messages.
                 * @param message GetNeighborhoodRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.unblock.proto.IGetNeighborhoodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetNeighborhoodRequest message, length delimited. Does not implicitly {@link com.unblock.proto.GetNeighborhoodRequest.verify|verify} messages.
                 * @param message GetNeighborhoodRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.unblock.proto.IGetNeighborhoodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetNeighborhoodRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.unblock.proto.GetNeighborhoodRequest;

                /**
                 * Decodes a GetNeighborhoodRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.unblock.proto.GetNeighborhoodRequest;

                /**
                 * Verifies a GetNeighborhoodRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetNeighborhoodRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetNeighborhoodRequest
                 */
                public static fromObject(object: { [k: string]: any }): com.unblock.proto.GetNeighborhoodRequest;

                /**
                 * Creates a plain object from a GetNeighborhoodRequest message. Also converts values to other types if specified.
                 * @param message GetNeighborhoodRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.unblock.proto.GetNeighborhoodRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetNeighborhoodRequest to JSON.
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
