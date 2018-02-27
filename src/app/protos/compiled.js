/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.unblock = (function() {

        /**
         * Namespace unblock.
         * @memberof com
         * @namespace
         */
        var unblock = {};

        unblock.proto = (function() {

            /**
             * Namespace proto.
             * @memberof com.unblock
             * @namespace
             */
            var proto = {};

            proto.AttractionLocation = (function() {

                /**
                 * Properties of an AttractionLocation.
                 * @memberof com.unblock.proto
                 * @interface IAttractionLocation
                 * @property {number|null} [x] AttractionLocation x
                 * @property {number|null} [y] AttractionLocation y
                 */

                /**
                 * Constructs a new AttractionLocation.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an AttractionLocation.
                 * @implements IAttractionLocation
                 * @constructor
                 * @param {com.unblock.proto.IAttractionLocation=} [properties] Properties to set
                 */
                function AttractionLocation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AttractionLocation x.
                 * @member {number} x
                 * @memberof com.unblock.proto.AttractionLocation
                 * @instance
                 */
                AttractionLocation.prototype.x = 0;

                /**
                 * AttractionLocation y.
                 * @member {number} y
                 * @memberof com.unblock.proto.AttractionLocation
                 * @instance
                 */
                AttractionLocation.prototype.y = 0;

                /**
                 * Creates a new AttractionLocation instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.AttractionLocation
                 * @static
                 * @param {com.unblock.proto.IAttractionLocation=} [properties] Properties to set
                 * @returns {com.unblock.proto.AttractionLocation} AttractionLocation instance
                 */
                AttractionLocation.create = function create(properties) {
                    return new AttractionLocation(properties);
                };

                /**
                 * Encodes the specified AttractionLocation message. Does not implicitly {@link com.unblock.proto.AttractionLocation.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.AttractionLocation
                 * @static
                 * @param {com.unblock.proto.IAttractionLocation} message AttractionLocation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AttractionLocation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.x != null && message.hasOwnProperty("x"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
                    if (message.y != null && message.hasOwnProperty("y"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
                    return writer;
                };

                /**
                 * Encodes the specified AttractionLocation message, length delimited. Does not implicitly {@link com.unblock.proto.AttractionLocation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.AttractionLocation
                 * @static
                 * @param {com.unblock.proto.IAttractionLocation} message AttractionLocation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AttractionLocation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AttractionLocation message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.AttractionLocation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.AttractionLocation} AttractionLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AttractionLocation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.AttractionLocation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.x = reader.float();
                            break;
                        case 2:
                            message.y = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AttractionLocation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.AttractionLocation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.AttractionLocation} AttractionLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AttractionLocation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AttractionLocation message.
                 * @function verify
                 * @memberof com.unblock.proto.AttractionLocation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AttractionLocation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.x != null && message.hasOwnProperty("x"))
                        if (typeof message.x !== "number")
                            return "x: number expected";
                    if (message.y != null && message.hasOwnProperty("y"))
                        if (typeof message.y !== "number")
                            return "y: number expected";
                    return null;
                };

                /**
                 * Creates an AttractionLocation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.AttractionLocation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.AttractionLocation} AttractionLocation
                 */
                AttractionLocation.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.AttractionLocation)
                        return object;
                    var message = new $root.com.unblock.proto.AttractionLocation();
                    if (object.x != null)
                        message.x = Number(object.x);
                    if (object.y != null)
                        message.y = Number(object.y);
                    return message;
                };

                /**
                 * Creates a plain object from an AttractionLocation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.AttractionLocation
                 * @static
                 * @param {com.unblock.proto.AttractionLocation} message AttractionLocation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AttractionLocation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.x = 0;
                        object.y = 0;
                    }
                    if (message.x != null && message.hasOwnProperty("x"))
                        object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                    if (message.y != null && message.hasOwnProperty("y"))
                        object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                    return object;
                };

                /**
                 * Converts this AttractionLocation to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.AttractionLocation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AttractionLocation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AttractionLocation;
            })();

            proto.CreateAttractionRequest = (function() {

                /**
                 * Properties of a CreateAttractionRequest.
                 * @memberof com.unblock.proto
                 * @interface ICreateAttractionRequest
                 * @property {string|null} [blockId] CreateAttractionRequest blockId
                 * @property {com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo|null} [info] CreateAttractionRequest info
                 */

                /**
                 * Constructs a new CreateAttractionRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a CreateAttractionRequest.
                 * @implements ICreateAttractionRequest
                 * @constructor
                 * @param {com.unblock.proto.ICreateAttractionRequest=} [properties] Properties to set
                 */
                function CreateAttractionRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateAttractionRequest blockId.
                 * @member {string} blockId
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @instance
                 */
                CreateAttractionRequest.prototype.blockId = "";

                /**
                 * CreateAttractionRequest info.
                 * @member {com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo|null|undefined} info
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @instance
                 */
                CreateAttractionRequest.prototype.info = null;

                /**
                 * Creates a new CreateAttractionRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @static
                 * @param {com.unblock.proto.ICreateAttractionRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.CreateAttractionRequest} CreateAttractionRequest instance
                 */
                CreateAttractionRequest.create = function create(properties) {
                    return new CreateAttractionRequest(properties);
                };

                /**
                 * Encodes the specified CreateAttractionRequest message. Does not implicitly {@link com.unblock.proto.CreateAttractionRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @static
                 * @param {com.unblock.proto.ICreateAttractionRequest} message CreateAttractionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAttractionRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.blockId);
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateAttractionRequest message, length delimited. Does not implicitly {@link com.unblock.proto.CreateAttractionRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @static
                 * @param {com.unblock.proto.ICreateAttractionRequest} message CreateAttractionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAttractionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateAttractionRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.CreateAttractionRequest} CreateAttractionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAttractionRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.CreateAttractionRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.blockId = reader.string();
                            break;
                        case 2:
                            message.info = $root.com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CreateAttractionRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.CreateAttractionRequest} CreateAttractionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAttractionRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateAttractionRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateAttractionRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        if (!$util.isString(message.blockId))
                            return "blockId: string expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateAttractionRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.CreateAttractionRequest} CreateAttractionRequest
                 */
                CreateAttractionRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.CreateAttractionRequest)
                        return object;
                    var message = new $root.com.unblock.proto.CreateAttractionRequest();
                    if (object.blockId != null)
                        message.blockId = String(object.blockId);
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.CreateAttractionRequest.info: object expected");
                        message.info = $root.com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateAttractionRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @static
                 * @param {com.unblock.proto.CreateAttractionRequest} message CreateAttractionRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateAttractionRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.blockId = "";
                        object.info = null;
                    }
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        object.blockId = message.blockId;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this CreateAttractionRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateAttractionRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                CreateAttractionRequest.CreateAttractionInfo = (function() {

                    /**
                     * Properties of a CreateAttractionInfo.
                     * @memberof com.unblock.proto.CreateAttractionRequest
                     * @interface ICreateAttractionInfo
                     * @property {string|null} [name] CreateAttractionInfo name
                     * @property {com.unblock.proto.IAttractionLocation|null} [location] CreateAttractionInfo location
                     * @property {string|null} [description] CreateAttractionInfo description
                     */

                    /**
                     * Constructs a new CreateAttractionInfo.
                     * @memberof com.unblock.proto.CreateAttractionRequest
                     * @classdesc Represents a CreateAttractionInfo.
                     * @implements ICreateAttractionInfo
                     * @constructor
                     * @param {com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo=} [properties] Properties to set
                     */
                    function CreateAttractionInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateAttractionInfo name.
                     * @member {string} name
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @instance
                     */
                    CreateAttractionInfo.prototype.name = "";

                    /**
                     * CreateAttractionInfo location.
                     * @member {com.unblock.proto.IAttractionLocation|null|undefined} location
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @instance
                     */
                    CreateAttractionInfo.prototype.location = null;

                    /**
                     * CreateAttractionInfo description.
                     * @member {string} description
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @instance
                     */
                    CreateAttractionInfo.prototype.description = "";

                    /**
                     * Creates a new CreateAttractionInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @static
                     * @param {com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo} CreateAttractionInfo instance
                     */
                    CreateAttractionInfo.create = function create(properties) {
                        return new CreateAttractionInfo(properties);
                    };

                    /**
                     * Encodes the specified CreateAttractionInfo message. Does not implicitly {@link com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @static
                     * @param {com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo} message CreateAttractionInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateAttractionInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.location != null && message.hasOwnProperty("location"))
                            $root.com.unblock.proto.AttractionLocation.encode(message.location, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.description != null && message.hasOwnProperty("description"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateAttractionInfo message, length delimited. Does not implicitly {@link com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @static
                     * @param {com.unblock.proto.CreateAttractionRequest.ICreateAttractionInfo} message CreateAttractionInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateAttractionInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateAttractionInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo} CreateAttractionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateAttractionInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.location = $root.com.unblock.proto.AttractionLocation.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.description = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateAttractionInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo} CreateAttractionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateAttractionInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateAttractionInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateAttractionInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.location != null && message.hasOwnProperty("location")) {
                            var error = $root.com.unblock.proto.AttractionLocation.verify(message.location);
                            if (error)
                                return "location." + error;
                        }
                        if (message.description != null && message.hasOwnProperty("description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        return null;
                    };

                    /**
                     * Creates a CreateAttractionInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo} CreateAttractionInfo
                     */
                    CreateAttractionInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo)
                            return object;
                        var message = new $root.com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.location != null) {
                            if (typeof object.location !== "object")
                                throw TypeError(".com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo.location: object expected");
                            message.location = $root.com.unblock.proto.AttractionLocation.fromObject(object.location);
                        }
                        if (object.description != null)
                            message.description = String(object.description);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateAttractionInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @static
                     * @param {com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo} message CreateAttractionInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateAttractionInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name = "";
                            object.location = null;
                            object.description = "";
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.location != null && message.hasOwnProperty("location"))
                            object.location = $root.com.unblock.proto.AttractionLocation.toObject(message.location, options);
                        if (message.description != null && message.hasOwnProperty("description"))
                            object.description = message.description;
                        return object;
                    };

                    /**
                     * Converts this CreateAttractionInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.CreateAttractionRequest.CreateAttractionInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateAttractionInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateAttractionInfo;
                })();

                return CreateAttractionRequest;
            })();

            proto.ListAttractionsResponse = (function() {

                /**
                 * Properties of a ListAttractionsResponse.
                 * @memberof com.unblock.proto
                 * @interface IListAttractionsResponse
                 * @property {Array.<com.unblock.proto.IAttraction>|null} [attractions] ListAttractionsResponse attractions
                 */

                /**
                 * Constructs a new ListAttractionsResponse.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a ListAttractionsResponse.
                 * @implements IListAttractionsResponse
                 * @constructor
                 * @param {com.unblock.proto.IListAttractionsResponse=} [properties] Properties to set
                 */
                function ListAttractionsResponse(properties) {
                    this.attractions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListAttractionsResponse attractions.
                 * @member {Array.<com.unblock.proto.IAttraction>} attractions
                 * @memberof com.unblock.proto.ListAttractionsResponse
                 * @instance
                 */
                ListAttractionsResponse.prototype.attractions = $util.emptyArray;

                /**
                 * Creates a new ListAttractionsResponse instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.ListAttractionsResponse
                 * @static
                 * @param {com.unblock.proto.IListAttractionsResponse=} [properties] Properties to set
                 * @returns {com.unblock.proto.ListAttractionsResponse} ListAttractionsResponse instance
                 */
                ListAttractionsResponse.create = function create(properties) {
                    return new ListAttractionsResponse(properties);
                };

                /**
                 * Encodes the specified ListAttractionsResponse message. Does not implicitly {@link com.unblock.proto.ListAttractionsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.ListAttractionsResponse
                 * @static
                 * @param {com.unblock.proto.IListAttractionsResponse} message ListAttractionsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListAttractionsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.attractions != null && message.attractions.length)
                        for (var i = 0; i < message.attractions.length; ++i)
                            $root.com.unblock.proto.Attraction.encode(message.attractions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListAttractionsResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListAttractionsResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.ListAttractionsResponse
                 * @static
                 * @param {com.unblock.proto.IListAttractionsResponse} message ListAttractionsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListAttractionsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListAttractionsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.ListAttractionsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.ListAttractionsResponse} ListAttractionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListAttractionsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.ListAttractionsResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.attractions && message.attractions.length))
                                message.attractions = [];
                            message.attractions.push($root.com.unblock.proto.Attraction.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ListAttractionsResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.ListAttractionsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.ListAttractionsResponse} ListAttractionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListAttractionsResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListAttractionsResponse message.
                 * @function verify
                 * @memberof com.unblock.proto.ListAttractionsResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListAttractionsResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.attractions != null && message.hasOwnProperty("attractions")) {
                        if (!Array.isArray(message.attractions))
                            return "attractions: array expected";
                        for (var i = 0; i < message.attractions.length; ++i) {
                            var error = $root.com.unblock.proto.Attraction.verify(message.attractions[i]);
                            if (error)
                                return "attractions." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListAttractionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.ListAttractionsResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.ListAttractionsResponse} ListAttractionsResponse
                 */
                ListAttractionsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.ListAttractionsResponse)
                        return object;
                    var message = new $root.com.unblock.proto.ListAttractionsResponse();
                    if (object.attractions) {
                        if (!Array.isArray(object.attractions))
                            throw TypeError(".com.unblock.proto.ListAttractionsResponse.attractions: array expected");
                        message.attractions = [];
                        for (var i = 0; i < object.attractions.length; ++i) {
                            if (typeof object.attractions[i] !== "object")
                                throw TypeError(".com.unblock.proto.ListAttractionsResponse.attractions: object expected");
                            message.attractions[i] = $root.com.unblock.proto.Attraction.fromObject(object.attractions[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListAttractionsResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.ListAttractionsResponse
                 * @static
                 * @param {com.unblock.proto.ListAttractionsResponse} message ListAttractionsResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListAttractionsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.attractions = [];
                    if (message.attractions && message.attractions.length) {
                        object.attractions = [];
                        for (var j = 0; j < message.attractions.length; ++j)
                            object.attractions[j] = $root.com.unblock.proto.Attraction.toObject(message.attractions[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListAttractionsResponse to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.ListAttractionsResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListAttractionsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ListAttractionsResponse;
            })();

            proto.UpdateAttractionInfoRequest = (function() {

                /**
                 * Properties of an UpdateAttractionInfoRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateAttractionInfoRequest
                 * @property {string|null} [id] UpdateAttractionInfoRequest id
                 * @property {com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo|null} [info] UpdateAttractionInfoRequest info
                 */

                /**
                 * Constructs a new UpdateAttractionInfoRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateAttractionInfoRequest.
                 * @implements IUpdateAttractionInfoRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateAttractionInfoRequest=} [properties] Properties to set
                 */
                function UpdateAttractionInfoRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateAttractionInfoRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @instance
                 */
                UpdateAttractionInfoRequest.prototype.id = "";

                /**
                 * UpdateAttractionInfoRequest info.
                 * @member {com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo|null|undefined} info
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @instance
                 */
                UpdateAttractionInfoRequest.prototype.info = null;

                /**
                 * Creates a new UpdateAttractionInfoRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateAttractionInfoRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateAttractionInfoRequest} UpdateAttractionInfoRequest instance
                 */
                UpdateAttractionInfoRequest.create = function create(properties) {
                    return new UpdateAttractionInfoRequest(properties);
                };

                /**
                 * Encodes the specified UpdateAttractionInfoRequest message. Does not implicitly {@link com.unblock.proto.UpdateAttractionInfoRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateAttractionInfoRequest} message UpdateAttractionInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateAttractionInfoRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UpdateAttractionInfoRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateAttractionInfoRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateAttractionInfoRequest} message UpdateAttractionInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateAttractionInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateAttractionInfoRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateAttractionInfoRequest} UpdateAttractionInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateAttractionInfoRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateAttractionInfoRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.info = $root.com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateAttractionInfoRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateAttractionInfoRequest} UpdateAttractionInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateAttractionInfoRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateAttractionInfoRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateAttractionInfoRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates an UpdateAttractionInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateAttractionInfoRequest} UpdateAttractionInfoRequest
                 */
                UpdateAttractionInfoRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateAttractionInfoRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateAttractionInfoRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.UpdateAttractionInfoRequest.info: object expected");
                        message.info = $root.com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateAttractionInfoRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @static
                 * @param {com.unblock.proto.UpdateAttractionInfoRequest} message UpdateAttractionInfoRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateAttractionInfoRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.info = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this UpdateAttractionInfoRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateAttractionInfoRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                UpdateAttractionInfoRequest.UpdateAttractionInfo = (function() {

                    /**
                     * Properties of an UpdateAttractionInfo.
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                     * @interface IUpdateAttractionInfo
                     * @property {string|null} [name] UpdateAttractionInfo name
                     * @property {string|null} [description] UpdateAttractionInfo description
                     */

                    /**
                     * Constructs a new UpdateAttractionInfo.
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                     * @classdesc Represents an UpdateAttractionInfo.
                     * @implements IUpdateAttractionInfo
                     * @constructor
                     * @param {com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo=} [properties] Properties to set
                     */
                    function UpdateAttractionInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateAttractionInfo name.
                     * @member {string} name
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @instance
                     */
                    UpdateAttractionInfo.prototype.name = "";

                    /**
                     * UpdateAttractionInfo description.
                     * @member {string} description
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @instance
                     */
                    UpdateAttractionInfo.prototype.description = "";

                    /**
                     * Creates a new UpdateAttractionInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @static
                     * @param {com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo} UpdateAttractionInfo instance
                     */
                    UpdateAttractionInfo.create = function create(properties) {
                        return new UpdateAttractionInfo(properties);
                    };

                    /**
                     * Encodes the specified UpdateAttractionInfo message. Does not implicitly {@link com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @static
                     * @param {com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo} message UpdateAttractionInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateAttractionInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.description != null && message.hasOwnProperty("description"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateAttractionInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @static
                     * @param {com.unblock.proto.UpdateAttractionInfoRequest.IUpdateAttractionInfo} message UpdateAttractionInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateAttractionInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateAttractionInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo} UpdateAttractionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateAttractionInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.description = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateAttractionInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo} UpdateAttractionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateAttractionInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateAttractionInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateAttractionInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.description != null && message.hasOwnProperty("description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateAttractionInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo} UpdateAttractionInfo
                     */
                    UpdateAttractionInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo)
                            return object;
                        var message = new $root.com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.description != null)
                            message.description = String(object.description);
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateAttractionInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @static
                     * @param {com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo} message UpdateAttractionInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateAttractionInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name = "";
                            object.description = "";
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.description != null && message.hasOwnProperty("description"))
                            object.description = message.description;
                        return object;
                    };

                    /**
                     * Converts this UpdateAttractionInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.UpdateAttractionInfoRequest.UpdateAttractionInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateAttractionInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateAttractionInfo;
                })();

                return UpdateAttractionInfoRequest;
            })();

            proto.UpdateAttractionLocationRequest = (function() {

                /**
                 * Properties of an UpdateAttractionLocationRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateAttractionLocationRequest
                 * @property {string|null} [id] UpdateAttractionLocationRequest id
                 * @property {com.unblock.proto.IAttractionLocation|null} [location] UpdateAttractionLocationRequest location
                 */

                /**
                 * Constructs a new UpdateAttractionLocationRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateAttractionLocationRequest.
                 * @implements IUpdateAttractionLocationRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateAttractionLocationRequest=} [properties] Properties to set
                 */
                function UpdateAttractionLocationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateAttractionLocationRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @instance
                 */
                UpdateAttractionLocationRequest.prototype.id = "";

                /**
                 * UpdateAttractionLocationRequest location.
                 * @member {com.unblock.proto.IAttractionLocation|null|undefined} location
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @instance
                 */
                UpdateAttractionLocationRequest.prototype.location = null;

                /**
                 * Creates a new UpdateAttractionLocationRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateAttractionLocationRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateAttractionLocationRequest} UpdateAttractionLocationRequest instance
                 */
                UpdateAttractionLocationRequest.create = function create(properties) {
                    return new UpdateAttractionLocationRequest(properties);
                };

                /**
                 * Encodes the specified UpdateAttractionLocationRequest message. Does not implicitly {@link com.unblock.proto.UpdateAttractionLocationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateAttractionLocationRequest} message UpdateAttractionLocationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateAttractionLocationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.location != null && message.hasOwnProperty("location"))
                        $root.com.unblock.proto.AttractionLocation.encode(message.location, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UpdateAttractionLocationRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateAttractionLocationRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateAttractionLocationRequest} message UpdateAttractionLocationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateAttractionLocationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateAttractionLocationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateAttractionLocationRequest} UpdateAttractionLocationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateAttractionLocationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateAttractionLocationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.location = $root.com.unblock.proto.AttractionLocation.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateAttractionLocationRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateAttractionLocationRequest} UpdateAttractionLocationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateAttractionLocationRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateAttractionLocationRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateAttractionLocationRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        var error = $root.com.unblock.proto.AttractionLocation.verify(message.location);
                        if (error)
                            return "location." + error;
                    }
                    return null;
                };

                /**
                 * Creates an UpdateAttractionLocationRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateAttractionLocationRequest} UpdateAttractionLocationRequest
                 */
                UpdateAttractionLocationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateAttractionLocationRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateAttractionLocationRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.location != null) {
                        if (typeof object.location !== "object")
                            throw TypeError(".com.unblock.proto.UpdateAttractionLocationRequest.location: object expected");
                        message.location = $root.com.unblock.proto.AttractionLocation.fromObject(object.location);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateAttractionLocationRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @static
                 * @param {com.unblock.proto.UpdateAttractionLocationRequest} message UpdateAttractionLocationRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateAttractionLocationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.location = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.location != null && message.hasOwnProperty("location"))
                        object.location = $root.com.unblock.proto.AttractionLocation.toObject(message.location, options);
                    return object;
                };

                /**
                 * Converts this UpdateAttractionLocationRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateAttractionLocationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateAttractionLocationRequest;
            })();

            proto.AssignAttractionToBlockRequest = (function() {

                /**
                 * Properties of an AssignAttractionToBlockRequest.
                 * @memberof com.unblock.proto
                 * @interface IAssignAttractionToBlockRequest
                 * @property {string|null} [id] AssignAttractionToBlockRequest id
                 * @property {string|null} [blockId] AssignAttractionToBlockRequest blockId
                 */

                /**
                 * Constructs a new AssignAttractionToBlockRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an AssignAttractionToBlockRequest.
                 * @implements IAssignAttractionToBlockRequest
                 * @constructor
                 * @param {com.unblock.proto.IAssignAttractionToBlockRequest=} [properties] Properties to set
                 */
                function AssignAttractionToBlockRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AssignAttractionToBlockRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @instance
                 */
                AssignAttractionToBlockRequest.prototype.id = "";

                /**
                 * AssignAttractionToBlockRequest blockId.
                 * @member {string} blockId
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @instance
                 */
                AssignAttractionToBlockRequest.prototype.blockId = "";

                /**
                 * Creates a new AssignAttractionToBlockRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @static
                 * @param {com.unblock.proto.IAssignAttractionToBlockRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.AssignAttractionToBlockRequest} AssignAttractionToBlockRequest instance
                 */
                AssignAttractionToBlockRequest.create = function create(properties) {
                    return new AssignAttractionToBlockRequest(properties);
                };

                /**
                 * Encodes the specified AssignAttractionToBlockRequest message. Does not implicitly {@link com.unblock.proto.AssignAttractionToBlockRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @static
                 * @param {com.unblock.proto.IAssignAttractionToBlockRequest} message AssignAttractionToBlockRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AssignAttractionToBlockRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.blockId);
                    return writer;
                };

                /**
                 * Encodes the specified AssignAttractionToBlockRequest message, length delimited. Does not implicitly {@link com.unblock.proto.AssignAttractionToBlockRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @static
                 * @param {com.unblock.proto.IAssignAttractionToBlockRequest} message AssignAttractionToBlockRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AssignAttractionToBlockRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AssignAttractionToBlockRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.AssignAttractionToBlockRequest} AssignAttractionToBlockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AssignAttractionToBlockRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.AssignAttractionToBlockRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.blockId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AssignAttractionToBlockRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.AssignAttractionToBlockRequest} AssignAttractionToBlockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AssignAttractionToBlockRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AssignAttractionToBlockRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AssignAttractionToBlockRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        if (!$util.isString(message.blockId))
                            return "blockId: string expected";
                    return null;
                };

                /**
                 * Creates an AssignAttractionToBlockRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.AssignAttractionToBlockRequest} AssignAttractionToBlockRequest
                 */
                AssignAttractionToBlockRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.AssignAttractionToBlockRequest)
                        return object;
                    var message = new $root.com.unblock.proto.AssignAttractionToBlockRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.blockId != null)
                        message.blockId = String(object.blockId);
                    return message;
                };

                /**
                 * Creates a plain object from an AssignAttractionToBlockRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @static
                 * @param {com.unblock.proto.AssignAttractionToBlockRequest} message AssignAttractionToBlockRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AssignAttractionToBlockRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.blockId = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        object.blockId = message.blockId;
                    return object;
                };

                /**
                 * Converts this AssignAttractionToBlockRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.AssignAttractionToBlockRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AssignAttractionToBlockRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AssignAttractionToBlockRequest;
            })();

            /**
             * AttractionStatus enum.
             * @name com.unblock.proto.AttractionStatus
             * @enum {string}
             * @property {number} ATTRACTION_STATUS_UNSPECIFIED=0 ATTRACTION_STATUS_UNSPECIFIED value
             * @property {number} ATTRACTION_LIVE=1 ATTRACTION_LIVE value
             * @property {number} ATTRACTION_DISABLED=2 ATTRACTION_DISABLED value
             */
            proto.AttractionStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ATTRACTION_STATUS_UNSPECIFIED"] = 0;
                values[valuesById[1] = "ATTRACTION_LIVE"] = 1;
                values[valuesById[2] = "ATTRACTION_DISABLED"] = 2;
                return values;
            })();

            proto.UpdateAttractionStatusRequest = (function() {

                /**
                 * Properties of an UpdateAttractionStatusRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateAttractionStatusRequest
                 * @property {string|null} [id] UpdateAttractionStatusRequest id
                 * @property {com.unblock.proto.AttractionStatus|null} [status] UpdateAttractionStatusRequest status
                 */

                /**
                 * Constructs a new UpdateAttractionStatusRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateAttractionStatusRequest.
                 * @implements IUpdateAttractionStatusRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateAttractionStatusRequest=} [properties] Properties to set
                 */
                function UpdateAttractionStatusRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateAttractionStatusRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @instance
                 */
                UpdateAttractionStatusRequest.prototype.id = "";

                /**
                 * UpdateAttractionStatusRequest status.
                 * @member {com.unblock.proto.AttractionStatus} status
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @instance
                 */
                UpdateAttractionStatusRequest.prototype.status = 0;

                /**
                 * Creates a new UpdateAttractionStatusRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateAttractionStatusRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateAttractionStatusRequest} UpdateAttractionStatusRequest instance
                 */
                UpdateAttractionStatusRequest.create = function create(properties) {
                    return new UpdateAttractionStatusRequest(properties);
                };

                /**
                 * Encodes the specified UpdateAttractionStatusRequest message. Does not implicitly {@link com.unblock.proto.UpdateAttractionStatusRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateAttractionStatusRequest} message UpdateAttractionStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateAttractionStatusRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified UpdateAttractionStatusRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateAttractionStatusRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateAttractionStatusRequest} message UpdateAttractionStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateAttractionStatusRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateAttractionStatusRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateAttractionStatusRequest} UpdateAttractionStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateAttractionStatusRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateAttractionStatusRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.status = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateAttractionStatusRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateAttractionStatusRequest} UpdateAttractionStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateAttractionStatusRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateAttractionStatusRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateAttractionStatusRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates an UpdateAttractionStatusRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateAttractionStatusRequest} UpdateAttractionStatusRequest
                 */
                UpdateAttractionStatusRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateAttractionStatusRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateAttractionStatusRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    switch (object.status) {
                    case "ATTRACTION_STATUS_UNSPECIFIED":
                    case 0:
                        message.status = 0;
                        break;
                    case "ATTRACTION_LIVE":
                    case 1:
                        message.status = 1;
                        break;
                    case "ATTRACTION_DISABLED":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateAttractionStatusRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @static
                 * @param {com.unblock.proto.UpdateAttractionStatusRequest} message UpdateAttractionStatusRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateAttractionStatusRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.status = options.enums === String ? "ATTRACTION_STATUS_UNSPECIFIED" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.com.unblock.proto.AttractionStatus[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this UpdateAttractionStatusRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateAttractionStatusRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateAttractionStatusRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateAttractionStatusRequest;
            })();

            proto.Attraction = (function() {

                /**
                 * Properties of an Attraction.
                 * @memberof com.unblock.proto
                 * @interface IAttraction
                 * @property {string|null} [id] Attraction id
                 * @property {com.unblock.proto.AttractionStatus|null} [status] Attraction status
                 * @property {string|null} [blockId] Attraction blockId
                 * @property {string|null} [name] Attraction name
                 * @property {string|null} [description] Attraction description
                 * @property {com.unblock.proto.IAttractionLocation|null} [location] Attraction location
                 */

                /**
                 * Constructs a new Attraction.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an Attraction.
                 * @implements IAttraction
                 * @constructor
                 * @param {com.unblock.proto.IAttraction=} [properties] Properties to set
                 */
                function Attraction(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Attraction id.
                 * @member {string} id
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 */
                Attraction.prototype.id = "";

                /**
                 * Attraction status.
                 * @member {com.unblock.proto.AttractionStatus} status
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 */
                Attraction.prototype.status = 0;

                /**
                 * Attraction blockId.
                 * @member {string} blockId
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 */
                Attraction.prototype.blockId = "";

                /**
                 * Attraction name.
                 * @member {string} name
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 */
                Attraction.prototype.name = "";

                /**
                 * Attraction description.
                 * @member {string} description
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 */
                Attraction.prototype.description = "";

                /**
                 * Attraction location.
                 * @member {com.unblock.proto.IAttractionLocation|null|undefined} location
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 */
                Attraction.prototype.location = null;

                /**
                 * Creates a new Attraction instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.Attraction
                 * @static
                 * @param {com.unblock.proto.IAttraction=} [properties] Properties to set
                 * @returns {com.unblock.proto.Attraction} Attraction instance
                 */
                Attraction.create = function create(properties) {
                    return new Attraction(properties);
                };

                /**
                 * Encodes the specified Attraction message. Does not implicitly {@link com.unblock.proto.Attraction.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.Attraction
                 * @static
                 * @param {com.unblock.proto.IAttraction} message Attraction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Attraction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.blockId);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
                    if (message.location != null && message.hasOwnProperty("location"))
                        $root.com.unblock.proto.AttractionLocation.encode(message.location, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Attraction message, length delimited. Does not implicitly {@link com.unblock.proto.Attraction.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.Attraction
                 * @static
                 * @param {com.unblock.proto.IAttraction} message Attraction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Attraction.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Attraction message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.Attraction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.Attraction} Attraction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Attraction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.Attraction();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.status = reader.int32();
                            break;
                        case 3:
                            message.blockId = reader.string();
                            break;
                        case 4:
                            message.name = reader.string();
                            break;
                        case 5:
                            message.description = reader.string();
                            break;
                        case 6:
                            message.location = $root.com.unblock.proto.AttractionLocation.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Attraction message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.Attraction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.Attraction} Attraction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Attraction.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Attraction message.
                 * @function verify
                 * @memberof com.unblock.proto.Attraction
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Attraction.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        if (!$util.isString(message.blockId))
                            return "blockId: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        var error = $root.com.unblock.proto.AttractionLocation.verify(message.location);
                        if (error)
                            return "location." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Attraction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.Attraction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.Attraction} Attraction
                 */
                Attraction.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.Attraction)
                        return object;
                    var message = new $root.com.unblock.proto.Attraction();
                    if (object.id != null)
                        message.id = String(object.id);
                    switch (object.status) {
                    case "ATTRACTION_STATUS_UNSPECIFIED":
                    case 0:
                        message.status = 0;
                        break;
                    case "ATTRACTION_LIVE":
                    case 1:
                        message.status = 1;
                        break;
                    case "ATTRACTION_DISABLED":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    if (object.blockId != null)
                        message.blockId = String(object.blockId);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.location != null) {
                        if (typeof object.location !== "object")
                            throw TypeError(".com.unblock.proto.Attraction.location: object expected");
                        message.location = $root.com.unblock.proto.AttractionLocation.fromObject(object.location);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Attraction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.Attraction
                 * @static
                 * @param {com.unblock.proto.Attraction} message Attraction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Attraction.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.status = options.enums === String ? "ATTRACTION_STATUS_UNSPECIFIED" : 0;
                        object.blockId = "";
                        object.name = "";
                        object.description = "";
                        object.location = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.com.unblock.proto.AttractionStatus[message.status] : message.status;
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        object.blockId = message.blockId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.location != null && message.hasOwnProperty("location"))
                        object.location = $root.com.unblock.proto.AttractionLocation.toObject(message.location, options);
                    return object;
                };

                /**
                 * Converts this Attraction to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Attraction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Attraction;
            })();

            proto.CreateBlockRequest = (function() {

                /**
                 * Properties of a CreateBlockRequest.
                 * @memberof com.unblock.proto
                 * @interface ICreateBlockRequest
                 * @property {string|null} [neighborhoodId] CreateBlockRequest neighborhoodId
                 * @property {com.unblock.proto.CreateBlockRequest.ICreateBlockInfo|null} [info] CreateBlockRequest info
                 */

                /**
                 * Constructs a new CreateBlockRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a CreateBlockRequest.
                 * @implements ICreateBlockRequest
                 * @constructor
                 * @param {com.unblock.proto.ICreateBlockRequest=} [properties] Properties to set
                 */
                function CreateBlockRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateBlockRequest neighborhoodId.
                 * @member {string} neighborhoodId
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @instance
                 */
                CreateBlockRequest.prototype.neighborhoodId = "";

                /**
                 * CreateBlockRequest info.
                 * @member {com.unblock.proto.CreateBlockRequest.ICreateBlockInfo|null|undefined} info
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @instance
                 */
                CreateBlockRequest.prototype.info = null;

                /**
                 * Creates a new CreateBlockRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @static
                 * @param {com.unblock.proto.ICreateBlockRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.CreateBlockRequest} CreateBlockRequest instance
                 */
                CreateBlockRequest.create = function create(properties) {
                    return new CreateBlockRequest(properties);
                };

                /**
                 * Encodes the specified CreateBlockRequest message. Does not implicitly {@link com.unblock.proto.CreateBlockRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @static
                 * @param {com.unblock.proto.ICreateBlockRequest} message CreateBlockRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateBlockRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.neighborhoodId);
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.CreateBlockRequest.CreateBlockInfo.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateBlockRequest message, length delimited. Does not implicitly {@link com.unblock.proto.CreateBlockRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @static
                 * @param {com.unblock.proto.ICreateBlockRequest} message CreateBlockRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateBlockRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateBlockRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.CreateBlockRequest} CreateBlockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateBlockRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.CreateBlockRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.neighborhoodId = reader.string();
                            break;
                        case 2:
                            message.info = $root.com.unblock.proto.CreateBlockRequest.CreateBlockInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CreateBlockRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.CreateBlockRequest} CreateBlockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateBlockRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateBlockRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateBlockRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        if (!$util.isString(message.neighborhoodId))
                            return "neighborhoodId: string expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.CreateBlockRequest.CreateBlockInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateBlockRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.CreateBlockRequest} CreateBlockRequest
                 */
                CreateBlockRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.CreateBlockRequest)
                        return object;
                    var message = new $root.com.unblock.proto.CreateBlockRequest();
                    if (object.neighborhoodId != null)
                        message.neighborhoodId = String(object.neighborhoodId);
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.CreateBlockRequest.info: object expected");
                        message.info = $root.com.unblock.proto.CreateBlockRequest.CreateBlockInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateBlockRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @static
                 * @param {com.unblock.proto.CreateBlockRequest} message CreateBlockRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateBlockRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.neighborhoodId = "";
                        object.info = null;
                    }
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        object.neighborhoodId = message.neighborhoodId;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.CreateBlockRequest.CreateBlockInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this CreateBlockRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateBlockRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                CreateBlockRequest.CreateBlockInfo = (function() {

                    /**
                     * Properties of a CreateBlockInfo.
                     * @memberof com.unblock.proto.CreateBlockRequest
                     * @interface ICreateBlockInfo
                     * @property {string|null} [name] CreateBlockInfo name
                     * @property {com.unblock.proto.IBounds|null} [bounds] CreateBlockInfo bounds
                     */

                    /**
                     * Constructs a new CreateBlockInfo.
                     * @memberof com.unblock.proto.CreateBlockRequest
                     * @classdesc Represents a CreateBlockInfo.
                     * @implements ICreateBlockInfo
                     * @constructor
                     * @param {com.unblock.proto.CreateBlockRequest.ICreateBlockInfo=} [properties] Properties to set
                     */
                    function CreateBlockInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateBlockInfo name.
                     * @member {string} name
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @instance
                     */
                    CreateBlockInfo.prototype.name = "";

                    /**
                     * CreateBlockInfo bounds.
                     * @member {com.unblock.proto.IBounds|null|undefined} bounds
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @instance
                     */
                    CreateBlockInfo.prototype.bounds = null;

                    /**
                     * Creates a new CreateBlockInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @static
                     * @param {com.unblock.proto.CreateBlockRequest.ICreateBlockInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.CreateBlockRequest.CreateBlockInfo} CreateBlockInfo instance
                     */
                    CreateBlockInfo.create = function create(properties) {
                        return new CreateBlockInfo(properties);
                    };

                    /**
                     * Encodes the specified CreateBlockInfo message. Does not implicitly {@link com.unblock.proto.CreateBlockRequest.CreateBlockInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @static
                     * @param {com.unblock.proto.CreateBlockRequest.ICreateBlockInfo} message CreateBlockInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateBlockInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.bounds != null && message.hasOwnProperty("bounds"))
                            $root.com.unblock.proto.Bounds.encode(message.bounds, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateBlockInfo message, length delimited. Does not implicitly {@link com.unblock.proto.CreateBlockRequest.CreateBlockInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @static
                     * @param {com.unblock.proto.CreateBlockRequest.ICreateBlockInfo} message CreateBlockInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateBlockInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateBlockInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.CreateBlockRequest.CreateBlockInfo} CreateBlockInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateBlockInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.CreateBlockRequest.CreateBlockInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.bounds = $root.com.unblock.proto.Bounds.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateBlockInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.CreateBlockRequest.CreateBlockInfo} CreateBlockInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateBlockInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateBlockInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateBlockInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.bounds != null && message.hasOwnProperty("bounds")) {
                            var error = $root.com.unblock.proto.Bounds.verify(message.bounds);
                            if (error)
                                return "bounds." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a CreateBlockInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.CreateBlockRequest.CreateBlockInfo} CreateBlockInfo
                     */
                    CreateBlockInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.CreateBlockRequest.CreateBlockInfo)
                            return object;
                        var message = new $root.com.unblock.proto.CreateBlockRequest.CreateBlockInfo();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.bounds != null) {
                            if (typeof object.bounds !== "object")
                                throw TypeError(".com.unblock.proto.CreateBlockRequest.CreateBlockInfo.bounds: object expected");
                            message.bounds = $root.com.unblock.proto.Bounds.fromObject(object.bounds);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateBlockInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @static
                     * @param {com.unblock.proto.CreateBlockRequest.CreateBlockInfo} message CreateBlockInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateBlockInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name = "";
                            object.bounds = null;
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.bounds != null && message.hasOwnProperty("bounds"))
                            object.bounds = $root.com.unblock.proto.Bounds.toObject(message.bounds, options);
                        return object;
                    };

                    /**
                     * Converts this CreateBlockInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.CreateBlockRequest.CreateBlockInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateBlockInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateBlockInfo;
                })();

                return CreateBlockRequest;
            })();

            proto.ListBlocksResponse = (function() {

                /**
                 * Properties of a ListBlocksResponse.
                 * @memberof com.unblock.proto
                 * @interface IListBlocksResponse
                 * @property {Array.<com.unblock.proto.IBlock>|null} [blocks] ListBlocksResponse blocks
                 */

                /**
                 * Constructs a new ListBlocksResponse.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a ListBlocksResponse.
                 * @implements IListBlocksResponse
                 * @constructor
                 * @param {com.unblock.proto.IListBlocksResponse=} [properties] Properties to set
                 */
                function ListBlocksResponse(properties) {
                    this.blocks = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListBlocksResponse blocks.
                 * @member {Array.<com.unblock.proto.IBlock>} blocks
                 * @memberof com.unblock.proto.ListBlocksResponse
                 * @instance
                 */
                ListBlocksResponse.prototype.blocks = $util.emptyArray;

                /**
                 * Creates a new ListBlocksResponse instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.ListBlocksResponse
                 * @static
                 * @param {com.unblock.proto.IListBlocksResponse=} [properties] Properties to set
                 * @returns {com.unblock.proto.ListBlocksResponse} ListBlocksResponse instance
                 */
                ListBlocksResponse.create = function create(properties) {
                    return new ListBlocksResponse(properties);
                };

                /**
                 * Encodes the specified ListBlocksResponse message. Does not implicitly {@link com.unblock.proto.ListBlocksResponse.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.ListBlocksResponse
                 * @static
                 * @param {com.unblock.proto.IListBlocksResponse} message ListBlocksResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListBlocksResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.blocks != null && message.blocks.length)
                        for (var i = 0; i < message.blocks.length; ++i)
                            $root.com.unblock.proto.Block.encode(message.blocks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListBlocksResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListBlocksResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.ListBlocksResponse
                 * @static
                 * @param {com.unblock.proto.IListBlocksResponse} message ListBlocksResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListBlocksResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListBlocksResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.ListBlocksResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.ListBlocksResponse} ListBlocksResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListBlocksResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.ListBlocksResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.blocks && message.blocks.length))
                                message.blocks = [];
                            message.blocks.push($root.com.unblock.proto.Block.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ListBlocksResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.ListBlocksResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.ListBlocksResponse} ListBlocksResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListBlocksResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListBlocksResponse message.
                 * @function verify
                 * @memberof com.unblock.proto.ListBlocksResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListBlocksResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.blocks != null && message.hasOwnProperty("blocks")) {
                        if (!Array.isArray(message.blocks))
                            return "blocks: array expected";
                        for (var i = 0; i < message.blocks.length; ++i) {
                            var error = $root.com.unblock.proto.Block.verify(message.blocks[i]);
                            if (error)
                                return "blocks." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListBlocksResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.ListBlocksResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.ListBlocksResponse} ListBlocksResponse
                 */
                ListBlocksResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.ListBlocksResponse)
                        return object;
                    var message = new $root.com.unblock.proto.ListBlocksResponse();
                    if (object.blocks) {
                        if (!Array.isArray(object.blocks))
                            throw TypeError(".com.unblock.proto.ListBlocksResponse.blocks: array expected");
                        message.blocks = [];
                        for (var i = 0; i < object.blocks.length; ++i) {
                            if (typeof object.blocks[i] !== "object")
                                throw TypeError(".com.unblock.proto.ListBlocksResponse.blocks: object expected");
                            message.blocks[i] = $root.com.unblock.proto.Block.fromObject(object.blocks[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListBlocksResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.ListBlocksResponse
                 * @static
                 * @param {com.unblock.proto.ListBlocksResponse} message ListBlocksResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListBlocksResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.blocks = [];
                    if (message.blocks && message.blocks.length) {
                        object.blocks = [];
                        for (var j = 0; j < message.blocks.length; ++j)
                            object.blocks[j] = $root.com.unblock.proto.Block.toObject(message.blocks[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListBlocksResponse to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.ListBlocksResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListBlocksResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ListBlocksResponse;
            })();

            proto.UpdateBlockInfoRequest = (function() {

                /**
                 * Properties of an UpdateBlockInfoRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateBlockInfoRequest
                 * @property {string|null} [id] UpdateBlockInfoRequest id
                 * @property {com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo|null} [info] UpdateBlockInfoRequest info
                 */

                /**
                 * Constructs a new UpdateBlockInfoRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateBlockInfoRequest.
                 * @implements IUpdateBlockInfoRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateBlockInfoRequest=} [properties] Properties to set
                 */
                function UpdateBlockInfoRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateBlockInfoRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @instance
                 */
                UpdateBlockInfoRequest.prototype.id = "";

                /**
                 * UpdateBlockInfoRequest info.
                 * @member {com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo|null|undefined} info
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @instance
                 */
                UpdateBlockInfoRequest.prototype.info = null;

                /**
                 * Creates a new UpdateBlockInfoRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateBlockInfoRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateBlockInfoRequest} UpdateBlockInfoRequest instance
                 */
                UpdateBlockInfoRequest.create = function create(properties) {
                    return new UpdateBlockInfoRequest(properties);
                };

                /**
                 * Encodes the specified UpdateBlockInfoRequest message. Does not implicitly {@link com.unblock.proto.UpdateBlockInfoRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateBlockInfoRequest} message UpdateBlockInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateBlockInfoRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UpdateBlockInfoRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateBlockInfoRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateBlockInfoRequest} message UpdateBlockInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateBlockInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateBlockInfoRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateBlockInfoRequest} UpdateBlockInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateBlockInfoRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateBlockInfoRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.info = $root.com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateBlockInfoRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateBlockInfoRequest} UpdateBlockInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateBlockInfoRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateBlockInfoRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateBlockInfoRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates an UpdateBlockInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateBlockInfoRequest} UpdateBlockInfoRequest
                 */
                UpdateBlockInfoRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateBlockInfoRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateBlockInfoRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.UpdateBlockInfoRequest.info: object expected");
                        message.info = $root.com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateBlockInfoRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @static
                 * @param {com.unblock.proto.UpdateBlockInfoRequest} message UpdateBlockInfoRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateBlockInfoRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.info = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this UpdateBlockInfoRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateBlockInfoRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                UpdateBlockInfoRequest.UpdateBlockInfo = (function() {

                    /**
                     * Properties of an UpdateBlockInfo.
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest
                     * @interface IUpdateBlockInfo
                     * @property {string|null} [name] UpdateBlockInfo name
                     */

                    /**
                     * Constructs a new UpdateBlockInfo.
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest
                     * @classdesc Represents an UpdateBlockInfo.
                     * @implements IUpdateBlockInfo
                     * @constructor
                     * @param {com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo=} [properties] Properties to set
                     */
                    function UpdateBlockInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateBlockInfo name.
                     * @member {string} name
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo
                     * @instance
                     */
                    UpdateBlockInfo.prototype.name = "";

                    /**
                     * Creates a new UpdateBlockInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo
                     * @static
                     * @param {com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo} UpdateBlockInfo instance
                     */
                    UpdateBlockInfo.create = function create(properties) {
                        return new UpdateBlockInfo(properties);
                    };

                    /**
                     * Encodes the specified UpdateBlockInfo message. Does not implicitly {@link com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo
                     * @static
                     * @param {com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo} message UpdateBlockInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateBlockInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateBlockInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo
                     * @static
                     * @param {com.unblock.proto.UpdateBlockInfoRequest.IUpdateBlockInfo} message UpdateBlockInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateBlockInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateBlockInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo} UpdateBlockInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateBlockInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateBlockInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo} UpdateBlockInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateBlockInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateBlockInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateBlockInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateBlockInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo} UpdateBlockInfo
                     */
                    UpdateBlockInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo)
                            return object;
                        var message = new $root.com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo();
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateBlockInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo
                     * @static
                     * @param {com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo} message UpdateBlockInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateBlockInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.name = "";
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };

                    /**
                     * Converts this UpdateBlockInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.UpdateBlockInfoRequest.UpdateBlockInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateBlockInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateBlockInfo;
                })();

                return UpdateBlockInfoRequest;
            })();

            /**
             * BlockStatus enum.
             * @name com.unblock.proto.BlockStatus
             * @enum {string}
             * @property {number} BLOCK_STATUS_UNSPECIFIED=0 BLOCK_STATUS_UNSPECIFIED value
             * @property {number} BLOCK_LIVE=1 BLOCK_LIVE value
             * @property {number} BLOCK_DISABLED=2 BLOCK_DISABLED value
             */
            proto.BlockStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "BLOCK_STATUS_UNSPECIFIED"] = 0;
                values[valuesById[1] = "BLOCK_LIVE"] = 1;
                values[valuesById[2] = "BLOCK_DISABLED"] = 2;
                return values;
            })();

            proto.UpdateBlockStatusRequest = (function() {

                /**
                 * Properties of an UpdateBlockStatusRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateBlockStatusRequest
                 * @property {string|null} [id] UpdateBlockStatusRequest id
                 * @property {com.unblock.proto.BlockStatus|null} [status] UpdateBlockStatusRequest status
                 */

                /**
                 * Constructs a new UpdateBlockStatusRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateBlockStatusRequest.
                 * @implements IUpdateBlockStatusRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateBlockStatusRequest=} [properties] Properties to set
                 */
                function UpdateBlockStatusRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateBlockStatusRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @instance
                 */
                UpdateBlockStatusRequest.prototype.id = "";

                /**
                 * UpdateBlockStatusRequest status.
                 * @member {com.unblock.proto.BlockStatus} status
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @instance
                 */
                UpdateBlockStatusRequest.prototype.status = 0;

                /**
                 * Creates a new UpdateBlockStatusRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateBlockStatusRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateBlockStatusRequest} UpdateBlockStatusRequest instance
                 */
                UpdateBlockStatusRequest.create = function create(properties) {
                    return new UpdateBlockStatusRequest(properties);
                };

                /**
                 * Encodes the specified UpdateBlockStatusRequest message. Does not implicitly {@link com.unblock.proto.UpdateBlockStatusRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateBlockStatusRequest} message UpdateBlockStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateBlockStatusRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified UpdateBlockStatusRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateBlockStatusRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateBlockStatusRequest} message UpdateBlockStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateBlockStatusRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateBlockStatusRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateBlockStatusRequest} UpdateBlockStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateBlockStatusRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateBlockStatusRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.status = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateBlockStatusRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateBlockStatusRequest} UpdateBlockStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateBlockStatusRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateBlockStatusRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateBlockStatusRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates an UpdateBlockStatusRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateBlockStatusRequest} UpdateBlockStatusRequest
                 */
                UpdateBlockStatusRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateBlockStatusRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateBlockStatusRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    switch (object.status) {
                    case "BLOCK_STATUS_UNSPECIFIED":
                    case 0:
                        message.status = 0;
                        break;
                    case "BLOCK_LIVE":
                    case 1:
                        message.status = 1;
                        break;
                    case "BLOCK_DISABLED":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateBlockStatusRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @static
                 * @param {com.unblock.proto.UpdateBlockStatusRequest} message UpdateBlockStatusRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateBlockStatusRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.status = options.enums === String ? "BLOCK_STATUS_UNSPECIFIED" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.com.unblock.proto.BlockStatus[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this UpdateBlockStatusRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateBlockStatusRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateBlockStatusRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateBlockStatusRequest;
            })();

            proto.UpdateBlockBoundsRequest = (function() {

                /**
                 * Properties of an UpdateBlockBoundsRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateBlockBoundsRequest
                 * @property {string|null} [id] UpdateBlockBoundsRequest id
                 * @property {com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds|null} [update] UpdateBlockBoundsRequest update
                 */

                /**
                 * Constructs a new UpdateBlockBoundsRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateBlockBoundsRequest.
                 * @implements IUpdateBlockBoundsRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateBlockBoundsRequest=} [properties] Properties to set
                 */
                function UpdateBlockBoundsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateBlockBoundsRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @instance
                 */
                UpdateBlockBoundsRequest.prototype.id = "";

                /**
                 * UpdateBlockBoundsRequest update.
                 * @member {com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds|null|undefined} update
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @instance
                 */
                UpdateBlockBoundsRequest.prototype.update = null;

                /**
                 * Creates a new UpdateBlockBoundsRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateBlockBoundsRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateBlockBoundsRequest} UpdateBlockBoundsRequest instance
                 */
                UpdateBlockBoundsRequest.create = function create(properties) {
                    return new UpdateBlockBoundsRequest(properties);
                };

                /**
                 * Encodes the specified UpdateBlockBoundsRequest message. Does not implicitly {@link com.unblock.proto.UpdateBlockBoundsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateBlockBoundsRequest} message UpdateBlockBoundsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateBlockBoundsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.update != null && message.hasOwnProperty("update"))
                        $root.com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds.encode(message.update, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UpdateBlockBoundsRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateBlockBoundsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateBlockBoundsRequest} message UpdateBlockBoundsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateBlockBoundsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateBlockBoundsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateBlockBoundsRequest} UpdateBlockBoundsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateBlockBoundsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateBlockBoundsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.update = $root.com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateBlockBoundsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateBlockBoundsRequest} UpdateBlockBoundsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateBlockBoundsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateBlockBoundsRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateBlockBoundsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.update != null && message.hasOwnProperty("update")) {
                        var error = $root.com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds.verify(message.update);
                        if (error)
                            return "update." + error;
                    }
                    return null;
                };

                /**
                 * Creates an UpdateBlockBoundsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateBlockBoundsRequest} UpdateBlockBoundsRequest
                 */
                UpdateBlockBoundsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateBlockBoundsRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateBlockBoundsRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.update != null) {
                        if (typeof object.update !== "object")
                            throw TypeError(".com.unblock.proto.UpdateBlockBoundsRequest.update: object expected");
                        message.update = $root.com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds.fromObject(object.update);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateBlockBoundsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @static
                 * @param {com.unblock.proto.UpdateBlockBoundsRequest} message UpdateBlockBoundsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateBlockBoundsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.update = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.update != null && message.hasOwnProperty("update"))
                        object.update = $root.com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds.toObject(message.update, options);
                    return object;
                };

                /**
                 * Converts this UpdateBlockBoundsRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateBlockBoundsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                UpdateBlockBoundsRequest.UpdateBlockBounds = (function() {

                    /**
                     * Properties of an UpdateBlockBounds.
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                     * @interface IUpdateBlockBounds
                     * @property {com.unblock.proto.IBounds|null} [bounds] UpdateBlockBounds bounds
                     */

                    /**
                     * Constructs a new UpdateBlockBounds.
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                     * @classdesc Represents an UpdateBlockBounds.
                     * @implements IUpdateBlockBounds
                     * @constructor
                     * @param {com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds=} [properties] Properties to set
                     */
                    function UpdateBlockBounds(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateBlockBounds bounds.
                     * @member {com.unblock.proto.IBounds|null|undefined} bounds
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds
                     * @instance
                     */
                    UpdateBlockBounds.prototype.bounds = null;

                    /**
                     * Creates a new UpdateBlockBounds instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds
                     * @static
                     * @param {com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds=} [properties] Properties to set
                     * @returns {com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds} UpdateBlockBounds instance
                     */
                    UpdateBlockBounds.create = function create(properties) {
                        return new UpdateBlockBounds(properties);
                    };

                    /**
                     * Encodes the specified UpdateBlockBounds message. Does not implicitly {@link com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds
                     * @static
                     * @param {com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds} message UpdateBlockBounds message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateBlockBounds.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.bounds != null && message.hasOwnProperty("bounds"))
                            $root.com.unblock.proto.Bounds.encode(message.bounds, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateBlockBounds message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds
                     * @static
                     * @param {com.unblock.proto.UpdateBlockBoundsRequest.IUpdateBlockBounds} message UpdateBlockBounds message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateBlockBounds.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateBlockBounds message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds} UpdateBlockBounds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateBlockBounds.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.bounds = $root.com.unblock.proto.Bounds.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateBlockBounds message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds} UpdateBlockBounds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateBlockBounds.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateBlockBounds message.
                     * @function verify
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateBlockBounds.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.bounds != null && message.hasOwnProperty("bounds")) {
                            var error = $root.com.unblock.proto.Bounds.verify(message.bounds);
                            if (error)
                                return "bounds." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an UpdateBlockBounds message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds} UpdateBlockBounds
                     */
                    UpdateBlockBounds.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds)
                            return object;
                        var message = new $root.com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds();
                        if (object.bounds != null) {
                            if (typeof object.bounds !== "object")
                                throw TypeError(".com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds.bounds: object expected");
                            message.bounds = $root.com.unblock.proto.Bounds.fromObject(object.bounds);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateBlockBounds message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds
                     * @static
                     * @param {com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds} message UpdateBlockBounds
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateBlockBounds.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.bounds = null;
                        if (message.bounds != null && message.hasOwnProperty("bounds"))
                            object.bounds = $root.com.unblock.proto.Bounds.toObject(message.bounds, options);
                        return object;
                    };

                    /**
                     * Converts this UpdateBlockBounds to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateBlockBounds.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateBlockBounds;
                })();

                return UpdateBlockBoundsRequest;
            })();

            proto.AssignBlockToNeighborhoodRequest = (function() {

                /**
                 * Properties of an AssignBlockToNeighborhoodRequest.
                 * @memberof com.unblock.proto
                 * @interface IAssignBlockToNeighborhoodRequest
                 * @property {string|null} [id] AssignBlockToNeighborhoodRequest id
                 * @property {string|null} [neighborhoodId] AssignBlockToNeighborhoodRequest neighborhoodId
                 */

                /**
                 * Constructs a new AssignBlockToNeighborhoodRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an AssignBlockToNeighborhoodRequest.
                 * @implements IAssignBlockToNeighborhoodRequest
                 * @constructor
                 * @param {com.unblock.proto.IAssignBlockToNeighborhoodRequest=} [properties] Properties to set
                 */
                function AssignBlockToNeighborhoodRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AssignBlockToNeighborhoodRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @instance
                 */
                AssignBlockToNeighborhoodRequest.prototype.id = "";

                /**
                 * AssignBlockToNeighborhoodRequest neighborhoodId.
                 * @member {string} neighborhoodId
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @instance
                 */
                AssignBlockToNeighborhoodRequest.prototype.neighborhoodId = "";

                /**
                 * Creates a new AssignBlockToNeighborhoodRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.IAssignBlockToNeighborhoodRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.AssignBlockToNeighborhoodRequest} AssignBlockToNeighborhoodRequest instance
                 */
                AssignBlockToNeighborhoodRequest.create = function create(properties) {
                    return new AssignBlockToNeighborhoodRequest(properties);
                };

                /**
                 * Encodes the specified AssignBlockToNeighborhoodRequest message. Does not implicitly {@link com.unblock.proto.AssignBlockToNeighborhoodRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.IAssignBlockToNeighborhoodRequest} message AssignBlockToNeighborhoodRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AssignBlockToNeighborhoodRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.neighborhoodId);
                    return writer;
                };

                /**
                 * Encodes the specified AssignBlockToNeighborhoodRequest message, length delimited. Does not implicitly {@link com.unblock.proto.AssignBlockToNeighborhoodRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.IAssignBlockToNeighborhoodRequest} message AssignBlockToNeighborhoodRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AssignBlockToNeighborhoodRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AssignBlockToNeighborhoodRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.AssignBlockToNeighborhoodRequest} AssignBlockToNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AssignBlockToNeighborhoodRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.AssignBlockToNeighborhoodRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.neighborhoodId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AssignBlockToNeighborhoodRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.AssignBlockToNeighborhoodRequest} AssignBlockToNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AssignBlockToNeighborhoodRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AssignBlockToNeighborhoodRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AssignBlockToNeighborhoodRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        if (!$util.isString(message.neighborhoodId))
                            return "neighborhoodId: string expected";
                    return null;
                };

                /**
                 * Creates an AssignBlockToNeighborhoodRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.AssignBlockToNeighborhoodRequest} AssignBlockToNeighborhoodRequest
                 */
                AssignBlockToNeighborhoodRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.AssignBlockToNeighborhoodRequest)
                        return object;
                    var message = new $root.com.unblock.proto.AssignBlockToNeighborhoodRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.neighborhoodId != null)
                        message.neighborhoodId = String(object.neighborhoodId);
                    return message;
                };

                /**
                 * Creates a plain object from an AssignBlockToNeighborhoodRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.AssignBlockToNeighborhoodRequest} message AssignBlockToNeighborhoodRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AssignBlockToNeighborhoodRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.neighborhoodId = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        object.neighborhoodId = message.neighborhoodId;
                    return object;
                };

                /**
                 * Converts this AssignBlockToNeighborhoodRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.AssignBlockToNeighborhoodRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AssignBlockToNeighborhoodRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AssignBlockToNeighborhoodRequest;
            })();

            proto.Block = (function() {

                /**
                 * Properties of a Block.
                 * @memberof com.unblock.proto
                 * @interface IBlock
                 * @property {string|null} [id] Block id
                 * @property {com.unblock.proto.BlockStatus|null} [status] Block status
                 * @property {string|null} [neighborhoodId] Block neighborhoodId
                 * @property {string|null} [name] Block name
                 * @property {com.unblock.proto.IBounds|null} [bounds] Block bounds
                 * @property {Array.<com.unblock.proto.IAttraction>|null} [attractions] Block attractions
                 */

                /**
                 * Constructs a new Block.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a Block.
                 * @implements IBlock
                 * @constructor
                 * @param {com.unblock.proto.IBlock=} [properties] Properties to set
                 */
                function Block(properties) {
                    this.attractions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Block id.
                 * @member {string} id
                 * @memberof com.unblock.proto.Block
                 * @instance
                 */
                Block.prototype.id = "";

                /**
                 * Block status.
                 * @member {com.unblock.proto.BlockStatus} status
                 * @memberof com.unblock.proto.Block
                 * @instance
                 */
                Block.prototype.status = 0;

                /**
                 * Block neighborhoodId.
                 * @member {string} neighborhoodId
                 * @memberof com.unblock.proto.Block
                 * @instance
                 */
                Block.prototype.neighborhoodId = "";

                /**
                 * Block name.
                 * @member {string} name
                 * @memberof com.unblock.proto.Block
                 * @instance
                 */
                Block.prototype.name = "";

                /**
                 * Block bounds.
                 * @member {com.unblock.proto.IBounds|null|undefined} bounds
                 * @memberof com.unblock.proto.Block
                 * @instance
                 */
                Block.prototype.bounds = null;

                /**
                 * Block attractions.
                 * @member {Array.<com.unblock.proto.IAttraction>} attractions
                 * @memberof com.unblock.proto.Block
                 * @instance
                 */
                Block.prototype.attractions = $util.emptyArray;

                /**
                 * Creates a new Block instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.Block
                 * @static
                 * @param {com.unblock.proto.IBlock=} [properties] Properties to set
                 * @returns {com.unblock.proto.Block} Block instance
                 */
                Block.create = function create(properties) {
                    return new Block(properties);
                };

                /**
                 * Encodes the specified Block message. Does not implicitly {@link com.unblock.proto.Block.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.Block
                 * @static
                 * @param {com.unblock.proto.IBlock} message Block message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Block.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.neighborhoodId);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                    if (message.bounds != null && message.hasOwnProperty("bounds"))
                        $root.com.unblock.proto.Bounds.encode(message.bounds, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.attractions != null && message.attractions.length)
                        for (var i = 0; i < message.attractions.length; ++i)
                            $root.com.unblock.proto.Attraction.encode(message.attractions[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Block message, length delimited. Does not implicitly {@link com.unblock.proto.Block.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.Block
                 * @static
                 * @param {com.unblock.proto.IBlock} message Block message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Block.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Block message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.Block
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.Block} Block
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Block.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.Block();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.status = reader.int32();
                            break;
                        case 3:
                            message.neighborhoodId = reader.string();
                            break;
                        case 4:
                            message.name = reader.string();
                            break;
                        case 5:
                            message.bounds = $root.com.unblock.proto.Bounds.decode(reader, reader.uint32());
                            break;
                        case 6:
                            if (!(message.attractions && message.attractions.length))
                                message.attractions = [];
                            message.attractions.push($root.com.unblock.proto.Attraction.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Block message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.Block
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.Block} Block
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Block.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Block message.
                 * @function verify
                 * @memberof com.unblock.proto.Block
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Block.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        if (!$util.isString(message.neighborhoodId))
                            return "neighborhoodId: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.bounds != null && message.hasOwnProperty("bounds")) {
                        var error = $root.com.unblock.proto.Bounds.verify(message.bounds);
                        if (error)
                            return "bounds." + error;
                    }
                    if (message.attractions != null && message.hasOwnProperty("attractions")) {
                        if (!Array.isArray(message.attractions))
                            return "attractions: array expected";
                        for (var i = 0; i < message.attractions.length; ++i) {
                            var error = $root.com.unblock.proto.Attraction.verify(message.attractions[i]);
                            if (error)
                                return "attractions." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Block message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.Block
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.Block} Block
                 */
                Block.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.Block)
                        return object;
                    var message = new $root.com.unblock.proto.Block();
                    if (object.id != null)
                        message.id = String(object.id);
                    switch (object.status) {
                    case "BLOCK_STATUS_UNSPECIFIED":
                    case 0:
                        message.status = 0;
                        break;
                    case "BLOCK_LIVE":
                    case 1:
                        message.status = 1;
                        break;
                    case "BLOCK_DISABLED":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    if (object.neighborhoodId != null)
                        message.neighborhoodId = String(object.neighborhoodId);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.bounds != null) {
                        if (typeof object.bounds !== "object")
                            throw TypeError(".com.unblock.proto.Block.bounds: object expected");
                        message.bounds = $root.com.unblock.proto.Bounds.fromObject(object.bounds);
                    }
                    if (object.attractions) {
                        if (!Array.isArray(object.attractions))
                            throw TypeError(".com.unblock.proto.Block.attractions: array expected");
                        message.attractions = [];
                        for (var i = 0; i < object.attractions.length; ++i) {
                            if (typeof object.attractions[i] !== "object")
                                throw TypeError(".com.unblock.proto.Block.attractions: object expected");
                            message.attractions[i] = $root.com.unblock.proto.Attraction.fromObject(object.attractions[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Block message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.Block
                 * @static
                 * @param {com.unblock.proto.Block} message Block
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Block.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.attractions = [];
                    if (options.defaults) {
                        object.id = "";
                        object.status = options.enums === String ? "BLOCK_STATUS_UNSPECIFIED" : 0;
                        object.neighborhoodId = "";
                        object.name = "";
                        object.bounds = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.com.unblock.proto.BlockStatus[message.status] : message.status;
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        object.neighborhoodId = message.neighborhoodId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.bounds != null && message.hasOwnProperty("bounds"))
                        object.bounds = $root.com.unblock.proto.Bounds.toObject(message.bounds, options);
                    if (message.attractions && message.attractions.length) {
                        object.attractions = [];
                        for (var j = 0; j < message.attractions.length; ++j)
                            object.attractions[j] = $root.com.unblock.proto.Attraction.toObject(message.attractions[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Block to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.Block
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Block.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Block;
            })();

            proto.Bounds = (function() {

                /**
                 * Properties of a Bounds.
                 * @memberof com.unblock.proto
                 * @interface IBounds
                 * @property {Array.<com.unblock.proto.Bounds.IPoint>|null} [points] Bounds points
                 */

                /**
                 * Constructs a new Bounds.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a Bounds.
                 * @implements IBounds
                 * @constructor
                 * @param {com.unblock.proto.IBounds=} [properties] Properties to set
                 */
                function Bounds(properties) {
                    this.points = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Bounds points.
                 * @member {Array.<com.unblock.proto.Bounds.IPoint>} points
                 * @memberof com.unblock.proto.Bounds
                 * @instance
                 */
                Bounds.prototype.points = $util.emptyArray;

                /**
                 * Creates a new Bounds instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.Bounds
                 * @static
                 * @param {com.unblock.proto.IBounds=} [properties] Properties to set
                 * @returns {com.unblock.proto.Bounds} Bounds instance
                 */
                Bounds.create = function create(properties) {
                    return new Bounds(properties);
                };

                /**
                 * Encodes the specified Bounds message. Does not implicitly {@link com.unblock.proto.Bounds.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.Bounds
                 * @static
                 * @param {com.unblock.proto.IBounds} message Bounds message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Bounds.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.points != null && message.points.length)
                        for (var i = 0; i < message.points.length; ++i)
                            $root.com.unblock.proto.Bounds.Point.encode(message.points[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Bounds message, length delimited. Does not implicitly {@link com.unblock.proto.Bounds.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.Bounds
                 * @static
                 * @param {com.unblock.proto.IBounds} message Bounds message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Bounds.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Bounds message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.Bounds
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.Bounds} Bounds
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Bounds.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.Bounds();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.points && message.points.length))
                                message.points = [];
                            message.points.push($root.com.unblock.proto.Bounds.Point.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Bounds message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.Bounds
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.Bounds} Bounds
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Bounds.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Bounds message.
                 * @function verify
                 * @memberof com.unblock.proto.Bounds
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Bounds.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.points != null && message.hasOwnProperty("points")) {
                        if (!Array.isArray(message.points))
                            return "points: array expected";
                        for (var i = 0; i < message.points.length; ++i) {
                            var error = $root.com.unblock.proto.Bounds.Point.verify(message.points[i]);
                            if (error)
                                return "points." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Bounds message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.Bounds
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.Bounds} Bounds
                 */
                Bounds.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.Bounds)
                        return object;
                    var message = new $root.com.unblock.proto.Bounds();
                    if (object.points) {
                        if (!Array.isArray(object.points))
                            throw TypeError(".com.unblock.proto.Bounds.points: array expected");
                        message.points = [];
                        for (var i = 0; i < object.points.length; ++i) {
                            if (typeof object.points[i] !== "object")
                                throw TypeError(".com.unblock.proto.Bounds.points: object expected");
                            message.points[i] = $root.com.unblock.proto.Bounds.Point.fromObject(object.points[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Bounds message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.Bounds
                 * @static
                 * @param {com.unblock.proto.Bounds} message Bounds
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Bounds.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.points = [];
                    if (message.points && message.points.length) {
                        object.points = [];
                        for (var j = 0; j < message.points.length; ++j)
                            object.points[j] = $root.com.unblock.proto.Bounds.Point.toObject(message.points[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Bounds to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.Bounds
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Bounds.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Bounds.Point = (function() {

                    /**
                     * Properties of a Point.
                     * @memberof com.unblock.proto.Bounds
                     * @interface IPoint
                     * @property {number|null} [x] Point x
                     * @property {number|null} [y] Point y
                     */

                    /**
                     * Constructs a new Point.
                     * @memberof com.unblock.proto.Bounds
                     * @classdesc Represents a Point.
                     * @implements IPoint
                     * @constructor
                     * @param {com.unblock.proto.Bounds.IPoint=} [properties] Properties to set
                     */
                    function Point(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Point x.
                     * @member {number} x
                     * @memberof com.unblock.proto.Bounds.Point
                     * @instance
                     */
                    Point.prototype.x = 0;

                    /**
                     * Point y.
                     * @member {number} y
                     * @memberof com.unblock.proto.Bounds.Point
                     * @instance
                     */
                    Point.prototype.y = 0;

                    /**
                     * Creates a new Point instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.Bounds.Point
                     * @static
                     * @param {com.unblock.proto.Bounds.IPoint=} [properties] Properties to set
                     * @returns {com.unblock.proto.Bounds.Point} Point instance
                     */
                    Point.create = function create(properties) {
                        return new Point(properties);
                    };

                    /**
                     * Encodes the specified Point message. Does not implicitly {@link com.unblock.proto.Bounds.Point.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.Bounds.Point
                     * @static
                     * @param {com.unblock.proto.Bounds.IPoint} message Point message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Point.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.x != null && message.hasOwnProperty("x"))
                            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
                        if (message.y != null && message.hasOwnProperty("y"))
                            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
                        return writer;
                    };

                    /**
                     * Encodes the specified Point message, length delimited. Does not implicitly {@link com.unblock.proto.Bounds.Point.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.Bounds.Point
                     * @static
                     * @param {com.unblock.proto.Bounds.IPoint} message Point message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Point.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Point message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.Bounds.Point
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.Bounds.Point} Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Point.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.Bounds.Point();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.x = reader.float();
                                break;
                            case 2:
                                message.y = reader.float();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Point message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.Bounds.Point
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.Bounds.Point} Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Point.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Point message.
                     * @function verify
                     * @memberof com.unblock.proto.Bounds.Point
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Point.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.x != null && message.hasOwnProperty("x"))
                            if (typeof message.x !== "number")
                                return "x: number expected";
                        if (message.y != null && message.hasOwnProperty("y"))
                            if (typeof message.y !== "number")
                                return "y: number expected";
                        return null;
                    };

                    /**
                     * Creates a Point message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.Bounds.Point
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.Bounds.Point} Point
                     */
                    Point.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.Bounds.Point)
                            return object;
                        var message = new $root.com.unblock.proto.Bounds.Point();
                        if (object.x != null)
                            message.x = Number(object.x);
                        if (object.y != null)
                            message.y = Number(object.y);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Point message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.Bounds.Point
                     * @static
                     * @param {com.unblock.proto.Bounds.Point} message Point
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Point.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.x = 0;
                            object.y = 0;
                        }
                        if (message.x != null && message.hasOwnProperty("x"))
                            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                        if (message.y != null && message.hasOwnProperty("y"))
                            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                        return object;
                    };

                    /**
                     * Converts this Point to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.Bounds.Point
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Point.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Point;
                })();

                return Bounds;
            })();

            proto.CreateCityRequest = (function() {

                /**
                 * Properties of a CreateCityRequest.
                 * @memberof com.unblock.proto
                 * @interface ICreateCityRequest
                 * @property {com.unblock.proto.CreateCityRequest.ICreateCityInfo|null} [info] CreateCityRequest info
                 */

                /**
                 * Constructs a new CreateCityRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a CreateCityRequest.
                 * @implements ICreateCityRequest
                 * @constructor
                 * @param {com.unblock.proto.ICreateCityRequest=} [properties] Properties to set
                 */
                function CreateCityRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateCityRequest info.
                 * @member {com.unblock.proto.CreateCityRequest.ICreateCityInfo|null|undefined} info
                 * @memberof com.unblock.proto.CreateCityRequest
                 * @instance
                 */
                CreateCityRequest.prototype.info = null;

                /**
                 * Creates a new CreateCityRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.CreateCityRequest
                 * @static
                 * @param {com.unblock.proto.ICreateCityRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.CreateCityRequest} CreateCityRequest instance
                 */
                CreateCityRequest.create = function create(properties) {
                    return new CreateCityRequest(properties);
                };

                /**
                 * Encodes the specified CreateCityRequest message. Does not implicitly {@link com.unblock.proto.CreateCityRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.CreateCityRequest
                 * @static
                 * @param {com.unblock.proto.ICreateCityRequest} message CreateCityRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateCityRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.CreateCityRequest.CreateCityInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateCityRequest message, length delimited. Does not implicitly {@link com.unblock.proto.CreateCityRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.CreateCityRequest
                 * @static
                 * @param {com.unblock.proto.ICreateCityRequest} message CreateCityRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateCityRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateCityRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.CreateCityRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.CreateCityRequest} CreateCityRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateCityRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.CreateCityRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.info = $root.com.unblock.proto.CreateCityRequest.CreateCityInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CreateCityRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.CreateCityRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.CreateCityRequest} CreateCityRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateCityRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateCityRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.CreateCityRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateCityRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.CreateCityRequest.CreateCityInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateCityRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.CreateCityRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.CreateCityRequest} CreateCityRequest
                 */
                CreateCityRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.CreateCityRequest)
                        return object;
                    var message = new $root.com.unblock.proto.CreateCityRequest();
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.CreateCityRequest.info: object expected");
                        message.info = $root.com.unblock.proto.CreateCityRequest.CreateCityInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateCityRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.CreateCityRequest
                 * @static
                 * @param {com.unblock.proto.CreateCityRequest} message CreateCityRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateCityRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.info = null;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.CreateCityRequest.CreateCityInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this CreateCityRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.CreateCityRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateCityRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                CreateCityRequest.CreateCityInfo = (function() {

                    /**
                     * Properties of a CreateCityInfo.
                     * @memberof com.unblock.proto.CreateCityRequest
                     * @interface ICreateCityInfo
                     * @property {string|null} [name] CreateCityInfo name
                     */

                    /**
                     * Constructs a new CreateCityInfo.
                     * @memberof com.unblock.proto.CreateCityRequest
                     * @classdesc Represents a CreateCityInfo.
                     * @implements ICreateCityInfo
                     * @constructor
                     * @param {com.unblock.proto.CreateCityRequest.ICreateCityInfo=} [properties] Properties to set
                     */
                    function CreateCityInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateCityInfo name.
                     * @member {string} name
                     * @memberof com.unblock.proto.CreateCityRequest.CreateCityInfo
                     * @instance
                     */
                    CreateCityInfo.prototype.name = "";

                    /**
                     * Creates a new CreateCityInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.CreateCityRequest.CreateCityInfo
                     * @static
                     * @param {com.unblock.proto.CreateCityRequest.ICreateCityInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.CreateCityRequest.CreateCityInfo} CreateCityInfo instance
                     */
                    CreateCityInfo.create = function create(properties) {
                        return new CreateCityInfo(properties);
                    };

                    /**
                     * Encodes the specified CreateCityInfo message. Does not implicitly {@link com.unblock.proto.CreateCityRequest.CreateCityInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.CreateCityRequest.CreateCityInfo
                     * @static
                     * @param {com.unblock.proto.CreateCityRequest.ICreateCityInfo} message CreateCityInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateCityInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateCityInfo message, length delimited. Does not implicitly {@link com.unblock.proto.CreateCityRequest.CreateCityInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.CreateCityRequest.CreateCityInfo
                     * @static
                     * @param {com.unblock.proto.CreateCityRequest.ICreateCityInfo} message CreateCityInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateCityInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateCityInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.CreateCityRequest.CreateCityInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.CreateCityRequest.CreateCityInfo} CreateCityInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateCityInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.CreateCityRequest.CreateCityInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateCityInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.CreateCityRequest.CreateCityInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.CreateCityRequest.CreateCityInfo} CreateCityInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateCityInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateCityInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.CreateCityRequest.CreateCityInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateCityInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };

                    /**
                     * Creates a CreateCityInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.CreateCityRequest.CreateCityInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.CreateCityRequest.CreateCityInfo} CreateCityInfo
                     */
                    CreateCityInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.CreateCityRequest.CreateCityInfo)
                            return object;
                        var message = new $root.com.unblock.proto.CreateCityRequest.CreateCityInfo();
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateCityInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.CreateCityRequest.CreateCityInfo
                     * @static
                     * @param {com.unblock.proto.CreateCityRequest.CreateCityInfo} message CreateCityInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateCityInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.name = "";
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };

                    /**
                     * Converts this CreateCityInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.CreateCityRequest.CreateCityInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateCityInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateCityInfo;
                })();

                return CreateCityRequest;
            })();

            proto.ListCitiesResponse = (function() {

                /**
                 * Properties of a ListCitiesResponse.
                 * @memberof com.unblock.proto
                 * @interface IListCitiesResponse
                 * @property {Array.<com.unblock.proto.ICity>|null} [cities] ListCitiesResponse cities
                 */

                /**
                 * Constructs a new ListCitiesResponse.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a ListCitiesResponse.
                 * @implements IListCitiesResponse
                 * @constructor
                 * @param {com.unblock.proto.IListCitiesResponse=} [properties] Properties to set
                 */
                function ListCitiesResponse(properties) {
                    this.cities = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListCitiesResponse cities.
                 * @member {Array.<com.unblock.proto.ICity>} cities
                 * @memberof com.unblock.proto.ListCitiesResponse
                 * @instance
                 */
                ListCitiesResponse.prototype.cities = $util.emptyArray;

                /**
                 * Creates a new ListCitiesResponse instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.ListCitiesResponse
                 * @static
                 * @param {com.unblock.proto.IListCitiesResponse=} [properties] Properties to set
                 * @returns {com.unblock.proto.ListCitiesResponse} ListCitiesResponse instance
                 */
                ListCitiesResponse.create = function create(properties) {
                    return new ListCitiesResponse(properties);
                };

                /**
                 * Encodes the specified ListCitiesResponse message. Does not implicitly {@link com.unblock.proto.ListCitiesResponse.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.ListCitiesResponse
                 * @static
                 * @param {com.unblock.proto.IListCitiesResponse} message ListCitiesResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListCitiesResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cities != null && message.cities.length)
                        for (var i = 0; i < message.cities.length; ++i)
                            $root.com.unblock.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListCitiesResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListCitiesResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.ListCitiesResponse
                 * @static
                 * @param {com.unblock.proto.IListCitiesResponse} message ListCitiesResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListCitiesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListCitiesResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.ListCitiesResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.ListCitiesResponse} ListCitiesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListCitiesResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.ListCitiesResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.cities && message.cities.length))
                                message.cities = [];
                            message.cities.push($root.com.unblock.proto.City.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ListCitiesResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.ListCitiesResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.ListCitiesResponse} ListCitiesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListCitiesResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListCitiesResponse message.
                 * @function verify
                 * @memberof com.unblock.proto.ListCitiesResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListCitiesResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cities != null && message.hasOwnProperty("cities")) {
                        if (!Array.isArray(message.cities))
                            return "cities: array expected";
                        for (var i = 0; i < message.cities.length; ++i) {
                            var error = $root.com.unblock.proto.City.verify(message.cities[i]);
                            if (error)
                                return "cities." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListCitiesResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.ListCitiesResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.ListCitiesResponse} ListCitiesResponse
                 */
                ListCitiesResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.ListCitiesResponse)
                        return object;
                    var message = new $root.com.unblock.proto.ListCitiesResponse();
                    if (object.cities) {
                        if (!Array.isArray(object.cities))
                            throw TypeError(".com.unblock.proto.ListCitiesResponse.cities: array expected");
                        message.cities = [];
                        for (var i = 0; i < object.cities.length; ++i) {
                            if (typeof object.cities[i] !== "object")
                                throw TypeError(".com.unblock.proto.ListCitiesResponse.cities: object expected");
                            message.cities[i] = $root.com.unblock.proto.City.fromObject(object.cities[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListCitiesResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.ListCitiesResponse
                 * @static
                 * @param {com.unblock.proto.ListCitiesResponse} message ListCitiesResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListCitiesResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.cities = [];
                    if (message.cities && message.cities.length) {
                        object.cities = [];
                        for (var j = 0; j < message.cities.length; ++j)
                            object.cities[j] = $root.com.unblock.proto.City.toObject(message.cities[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListCitiesResponse to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.ListCitiesResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListCitiesResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ListCitiesResponse;
            })();

            proto.UpdateCityInfoRequest = (function() {

                /**
                 * Properties of an UpdateCityInfoRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateCityInfoRequest
                 * @property {string|null} [id] UpdateCityInfoRequest id
                 * @property {com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo|null} [info] UpdateCityInfoRequest info
                 */

                /**
                 * Constructs a new UpdateCityInfoRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateCityInfoRequest.
                 * @implements IUpdateCityInfoRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateCityInfoRequest=} [properties] Properties to set
                 */
                function UpdateCityInfoRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateCityInfoRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @instance
                 */
                UpdateCityInfoRequest.prototype.id = "";

                /**
                 * UpdateCityInfoRequest info.
                 * @member {com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo|null|undefined} info
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @instance
                 */
                UpdateCityInfoRequest.prototype.info = null;

                /**
                 * Creates a new UpdateCityInfoRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateCityInfoRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateCityInfoRequest} UpdateCityInfoRequest instance
                 */
                UpdateCityInfoRequest.create = function create(properties) {
                    return new UpdateCityInfoRequest(properties);
                };

                /**
                 * Encodes the specified UpdateCityInfoRequest message. Does not implicitly {@link com.unblock.proto.UpdateCityInfoRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateCityInfoRequest} message UpdateCityInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateCityInfoRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UpdateCityInfoRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateCityInfoRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateCityInfoRequest} message UpdateCityInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateCityInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateCityInfoRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateCityInfoRequest} UpdateCityInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateCityInfoRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateCityInfoRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.info = $root.com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateCityInfoRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateCityInfoRequest} UpdateCityInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateCityInfoRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateCityInfoRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateCityInfoRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates an UpdateCityInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateCityInfoRequest} UpdateCityInfoRequest
                 */
                UpdateCityInfoRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateCityInfoRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateCityInfoRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.UpdateCityInfoRequest.info: object expected");
                        message.info = $root.com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateCityInfoRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @static
                 * @param {com.unblock.proto.UpdateCityInfoRequest} message UpdateCityInfoRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateCityInfoRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.info = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this UpdateCityInfoRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateCityInfoRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateCityInfoRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                UpdateCityInfoRequest.UpdateCityInfo = (function() {

                    /**
                     * Properties of an UpdateCityInfo.
                     * @memberof com.unblock.proto.UpdateCityInfoRequest
                     * @interface IUpdateCityInfo
                     * @property {string|null} [name] UpdateCityInfo name
                     */

                    /**
                     * Constructs a new UpdateCityInfo.
                     * @memberof com.unblock.proto.UpdateCityInfoRequest
                     * @classdesc Represents an UpdateCityInfo.
                     * @implements IUpdateCityInfo
                     * @constructor
                     * @param {com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo=} [properties] Properties to set
                     */
                    function UpdateCityInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateCityInfo name.
                     * @member {string} name
                     * @memberof com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo
                     * @instance
                     */
                    UpdateCityInfo.prototype.name = "";

                    /**
                     * Creates a new UpdateCityInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo
                     * @static
                     * @param {com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo} UpdateCityInfo instance
                     */
                    UpdateCityInfo.create = function create(properties) {
                        return new UpdateCityInfo(properties);
                    };

                    /**
                     * Encodes the specified UpdateCityInfo message. Does not implicitly {@link com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo
                     * @static
                     * @param {com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo} message UpdateCityInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateCityInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateCityInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo
                     * @static
                     * @param {com.unblock.proto.UpdateCityInfoRequest.IUpdateCityInfo} message UpdateCityInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateCityInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateCityInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo} UpdateCityInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateCityInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateCityInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo} UpdateCityInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateCityInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateCityInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateCityInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateCityInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo} UpdateCityInfo
                     */
                    UpdateCityInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo)
                            return object;
                        var message = new $root.com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo();
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateCityInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo
                     * @static
                     * @param {com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo} message UpdateCityInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateCityInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.name = "";
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };

                    /**
                     * Converts this UpdateCityInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.UpdateCityInfoRequest.UpdateCityInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateCityInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateCityInfo;
                })();

                return UpdateCityInfoRequest;
            })();

            /**
             * CityStatus enum.
             * @name com.unblock.proto.CityStatus
             * @enum {string}
             * @property {number} CITY_STATUS_UNSPECIFIED=0 CITY_STATUS_UNSPECIFIED value
             * @property {number} CITY_LIVE=1 CITY_LIVE value
             * @property {number} CITY_DISABLED=2 CITY_DISABLED value
             */
            proto.CityStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CITY_STATUS_UNSPECIFIED"] = 0;
                values[valuesById[1] = "CITY_LIVE"] = 1;
                values[valuesById[2] = "CITY_DISABLED"] = 2;
                return values;
            })();

            proto.UpdateCityStatusRequest = (function() {

                /**
                 * Properties of an UpdateCityStatusRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateCityStatusRequest
                 * @property {string|null} [id] UpdateCityStatusRequest id
                 * @property {com.unblock.proto.CityStatus|null} [status] UpdateCityStatusRequest status
                 */

                /**
                 * Constructs a new UpdateCityStatusRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateCityStatusRequest.
                 * @implements IUpdateCityStatusRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateCityStatusRequest=} [properties] Properties to set
                 */
                function UpdateCityStatusRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateCityStatusRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @instance
                 */
                UpdateCityStatusRequest.prototype.id = "";

                /**
                 * UpdateCityStatusRequest status.
                 * @member {com.unblock.proto.CityStatus} status
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @instance
                 */
                UpdateCityStatusRequest.prototype.status = 0;

                /**
                 * Creates a new UpdateCityStatusRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateCityStatusRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateCityStatusRequest} UpdateCityStatusRequest instance
                 */
                UpdateCityStatusRequest.create = function create(properties) {
                    return new UpdateCityStatusRequest(properties);
                };

                /**
                 * Encodes the specified UpdateCityStatusRequest message. Does not implicitly {@link com.unblock.proto.UpdateCityStatusRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateCityStatusRequest} message UpdateCityStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateCityStatusRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified UpdateCityStatusRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateCityStatusRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateCityStatusRequest} message UpdateCityStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateCityStatusRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateCityStatusRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateCityStatusRequest} UpdateCityStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateCityStatusRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateCityStatusRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.status = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateCityStatusRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateCityStatusRequest} UpdateCityStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateCityStatusRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateCityStatusRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateCityStatusRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates an UpdateCityStatusRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateCityStatusRequest} UpdateCityStatusRequest
                 */
                UpdateCityStatusRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateCityStatusRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateCityStatusRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    switch (object.status) {
                    case "CITY_STATUS_UNSPECIFIED":
                    case 0:
                        message.status = 0;
                        break;
                    case "CITY_LIVE":
                    case 1:
                        message.status = 1;
                        break;
                    case "CITY_DISABLED":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateCityStatusRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @static
                 * @param {com.unblock.proto.UpdateCityStatusRequest} message UpdateCityStatusRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateCityStatusRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.status = options.enums === String ? "CITY_STATUS_UNSPECIFIED" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.com.unblock.proto.CityStatus[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this UpdateCityStatusRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateCityStatusRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateCityStatusRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateCityStatusRequest;
            })();

            proto.City = (function() {

                /**
                 * Properties of a City.
                 * @memberof com.unblock.proto
                 * @interface ICity
                 * @property {string|null} [id] City id
                 * @property {com.unblock.proto.CityStatus|null} [status] City status
                 * @property {string|null} [name] City name
                 * @property {Array.<com.unblock.proto.INeighborhood>|null} [neighborhoods] City neighborhoods
                 */

                /**
                 * Constructs a new City.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a City.
                 * @implements ICity
                 * @constructor
                 * @param {com.unblock.proto.ICity=} [properties] Properties to set
                 */
                function City(properties) {
                    this.neighborhoods = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * City id.
                 * @member {string} id
                 * @memberof com.unblock.proto.City
                 * @instance
                 */
                City.prototype.id = "";

                /**
                 * City status.
                 * @member {com.unblock.proto.CityStatus} status
                 * @memberof com.unblock.proto.City
                 * @instance
                 */
                City.prototype.status = 0;

                /**
                 * City name.
                 * @member {string} name
                 * @memberof com.unblock.proto.City
                 * @instance
                 */
                City.prototype.name = "";

                /**
                 * City neighborhoods.
                 * @member {Array.<com.unblock.proto.INeighborhood>} neighborhoods
                 * @memberof com.unblock.proto.City
                 * @instance
                 */
                City.prototype.neighborhoods = $util.emptyArray;

                /**
                 * Creates a new City instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.City
                 * @static
                 * @param {com.unblock.proto.ICity=} [properties] Properties to set
                 * @returns {com.unblock.proto.City} City instance
                 */
                City.create = function create(properties) {
                    return new City(properties);
                };

                /**
                 * Encodes the specified City message. Does not implicitly {@link com.unblock.proto.City.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.City
                 * @static
                 * @param {com.unblock.proto.ICity} message City message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                City.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                    if (message.neighborhoods != null && message.neighborhoods.length)
                        for (var i = 0; i < message.neighborhoods.length; ++i)
                            $root.com.unblock.proto.Neighborhood.encode(message.neighborhoods[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified City message, length delimited. Does not implicitly {@link com.unblock.proto.City.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.City
                 * @static
                 * @param {com.unblock.proto.ICity} message City message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                City.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a City message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.City
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.City} City
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                City.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.City();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.status = reader.int32();
                            break;
                        case 3:
                            message.name = reader.string();
                            break;
                        case 4:
                            if (!(message.neighborhoods && message.neighborhoods.length))
                                message.neighborhoods = [];
                            message.neighborhoods.push($root.com.unblock.proto.Neighborhood.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a City message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.City
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.City} City
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                City.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a City message.
                 * @function verify
                 * @memberof com.unblock.proto.City
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                City.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.neighborhoods != null && message.hasOwnProperty("neighborhoods")) {
                        if (!Array.isArray(message.neighborhoods))
                            return "neighborhoods: array expected";
                        for (var i = 0; i < message.neighborhoods.length; ++i) {
                            var error = $root.com.unblock.proto.Neighborhood.verify(message.neighborhoods[i]);
                            if (error)
                                return "neighborhoods." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a City message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.City
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.City} City
                 */
                City.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.City)
                        return object;
                    var message = new $root.com.unblock.proto.City();
                    if (object.id != null)
                        message.id = String(object.id);
                    switch (object.status) {
                    case "CITY_STATUS_UNSPECIFIED":
                    case 0:
                        message.status = 0;
                        break;
                    case "CITY_LIVE":
                    case 1:
                        message.status = 1;
                        break;
                    case "CITY_DISABLED":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.neighborhoods) {
                        if (!Array.isArray(object.neighborhoods))
                            throw TypeError(".com.unblock.proto.City.neighborhoods: array expected");
                        message.neighborhoods = [];
                        for (var i = 0; i < object.neighborhoods.length; ++i) {
                            if (typeof object.neighborhoods[i] !== "object")
                                throw TypeError(".com.unblock.proto.City.neighborhoods: object expected");
                            message.neighborhoods[i] = $root.com.unblock.proto.Neighborhood.fromObject(object.neighborhoods[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a City message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.City
                 * @static
                 * @param {com.unblock.proto.City} message City
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                City.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.neighborhoods = [];
                    if (options.defaults) {
                        object.id = "";
                        object.status = options.enums === String ? "CITY_STATUS_UNSPECIFIED" : 0;
                        object.name = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.com.unblock.proto.CityStatus[message.status] : message.status;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.neighborhoods && message.neighborhoods.length) {
                        object.neighborhoods = [];
                        for (var j = 0; j < message.neighborhoods.length; ++j)
                            object.neighborhoods[j] = $root.com.unblock.proto.Neighborhood.toObject(message.neighborhoods[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this City to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.City
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                City.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return City;
            })();

            proto.CreateNeighborhoodRequest = (function() {

                /**
                 * Properties of a CreateNeighborhoodRequest.
                 * @memberof com.unblock.proto
                 * @interface ICreateNeighborhoodRequest
                 * @property {string|null} [cityId] CreateNeighborhoodRequest cityId
                 * @property {com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo|null} [info] CreateNeighborhoodRequest info
                 */

                /**
                 * Constructs a new CreateNeighborhoodRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a CreateNeighborhoodRequest.
                 * @implements ICreateNeighborhoodRequest
                 * @constructor
                 * @param {com.unblock.proto.ICreateNeighborhoodRequest=} [properties] Properties to set
                 */
                function CreateNeighborhoodRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateNeighborhoodRequest cityId.
                 * @member {string} cityId
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @instance
                 */
                CreateNeighborhoodRequest.prototype.cityId = "";

                /**
                 * CreateNeighborhoodRequest info.
                 * @member {com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo|null|undefined} info
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @instance
                 */
                CreateNeighborhoodRequest.prototype.info = null;

                /**
                 * Creates a new CreateNeighborhoodRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.ICreateNeighborhoodRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.CreateNeighborhoodRequest} CreateNeighborhoodRequest instance
                 */
                CreateNeighborhoodRequest.create = function create(properties) {
                    return new CreateNeighborhoodRequest(properties);
                };

                /**
                 * Encodes the specified CreateNeighborhoodRequest message. Does not implicitly {@link com.unblock.proto.CreateNeighborhoodRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.ICreateNeighborhoodRequest} message CreateNeighborhoodRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateNeighborhoodRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cityId != null && message.hasOwnProperty("cityId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.cityId);
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateNeighborhoodRequest message, length delimited. Does not implicitly {@link com.unblock.proto.CreateNeighborhoodRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.ICreateNeighborhoodRequest} message CreateNeighborhoodRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateNeighborhoodRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateNeighborhoodRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.CreateNeighborhoodRequest} CreateNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateNeighborhoodRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.CreateNeighborhoodRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.cityId = reader.string();
                            break;
                        case 2:
                            message.info = $root.com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CreateNeighborhoodRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.CreateNeighborhoodRequest} CreateNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateNeighborhoodRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateNeighborhoodRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateNeighborhoodRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cityId != null && message.hasOwnProperty("cityId"))
                        if (!$util.isString(message.cityId))
                            return "cityId: string expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateNeighborhoodRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.CreateNeighborhoodRequest} CreateNeighborhoodRequest
                 */
                CreateNeighborhoodRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.CreateNeighborhoodRequest)
                        return object;
                    var message = new $root.com.unblock.proto.CreateNeighborhoodRequest();
                    if (object.cityId != null)
                        message.cityId = String(object.cityId);
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.CreateNeighborhoodRequest.info: object expected");
                        message.info = $root.com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateNeighborhoodRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.CreateNeighborhoodRequest} message CreateNeighborhoodRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateNeighborhoodRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.cityId = "";
                        object.info = null;
                    }
                    if (message.cityId != null && message.hasOwnProperty("cityId"))
                        object.cityId = message.cityId;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this CreateNeighborhoodRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateNeighborhoodRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                CreateNeighborhoodRequest.CreateNeighborhoodInfo = (function() {

                    /**
                     * Properties of a CreateNeighborhoodInfo.
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest
                     * @interface ICreateNeighborhoodInfo
                     * @property {string|null} [name] CreateNeighborhoodInfo name
                     */

                    /**
                     * Constructs a new CreateNeighborhoodInfo.
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest
                     * @classdesc Represents a CreateNeighborhoodInfo.
                     * @implements ICreateNeighborhoodInfo
                     * @constructor
                     * @param {com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo=} [properties] Properties to set
                     */
                    function CreateNeighborhoodInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateNeighborhoodInfo name.
                     * @member {string} name
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo
                     * @instance
                     */
                    CreateNeighborhoodInfo.prototype.name = "";

                    /**
                     * Creates a new CreateNeighborhoodInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo
                     * @static
                     * @param {com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo} CreateNeighborhoodInfo instance
                     */
                    CreateNeighborhoodInfo.create = function create(properties) {
                        return new CreateNeighborhoodInfo(properties);
                    };

                    /**
                     * Encodes the specified CreateNeighborhoodInfo message. Does not implicitly {@link com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo
                     * @static
                     * @param {com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo} message CreateNeighborhoodInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateNeighborhoodInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateNeighborhoodInfo message, length delimited. Does not implicitly {@link com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo
                     * @static
                     * @param {com.unblock.proto.CreateNeighborhoodRequest.ICreateNeighborhoodInfo} message CreateNeighborhoodInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateNeighborhoodInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateNeighborhoodInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo} CreateNeighborhoodInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateNeighborhoodInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateNeighborhoodInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo} CreateNeighborhoodInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateNeighborhoodInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateNeighborhoodInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateNeighborhoodInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };

                    /**
                     * Creates a CreateNeighborhoodInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo} CreateNeighborhoodInfo
                     */
                    CreateNeighborhoodInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo)
                            return object;
                        var message = new $root.com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo();
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateNeighborhoodInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo
                     * @static
                     * @param {com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo} message CreateNeighborhoodInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateNeighborhoodInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.name = "";
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };

                    /**
                     * Converts this CreateNeighborhoodInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.CreateNeighborhoodRequest.CreateNeighborhoodInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateNeighborhoodInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateNeighborhoodInfo;
                })();

                return CreateNeighborhoodRequest;
            })();

            proto.ListNeighborhoodsResponse = (function() {

                /**
                 * Properties of a ListNeighborhoodsResponse.
                 * @memberof com.unblock.proto
                 * @interface IListNeighborhoodsResponse
                 * @property {Array.<com.unblock.proto.INeighborhood>|null} [neighborhoods] ListNeighborhoodsResponse neighborhoods
                 */

                /**
                 * Constructs a new ListNeighborhoodsResponse.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a ListNeighborhoodsResponse.
                 * @implements IListNeighborhoodsResponse
                 * @constructor
                 * @param {com.unblock.proto.IListNeighborhoodsResponse=} [properties] Properties to set
                 */
                function ListNeighborhoodsResponse(properties) {
                    this.neighborhoods = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListNeighborhoodsResponse neighborhoods.
                 * @member {Array.<com.unblock.proto.INeighborhood>} neighborhoods
                 * @memberof com.unblock.proto.ListNeighborhoodsResponse
                 * @instance
                 */
                ListNeighborhoodsResponse.prototype.neighborhoods = $util.emptyArray;

                /**
                 * Creates a new ListNeighborhoodsResponse instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.ListNeighborhoodsResponse
                 * @static
                 * @param {com.unblock.proto.IListNeighborhoodsResponse=} [properties] Properties to set
                 * @returns {com.unblock.proto.ListNeighborhoodsResponse} ListNeighborhoodsResponse instance
                 */
                ListNeighborhoodsResponse.create = function create(properties) {
                    return new ListNeighborhoodsResponse(properties);
                };

                /**
                 * Encodes the specified ListNeighborhoodsResponse message. Does not implicitly {@link com.unblock.proto.ListNeighborhoodsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.ListNeighborhoodsResponse
                 * @static
                 * @param {com.unblock.proto.IListNeighborhoodsResponse} message ListNeighborhoodsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListNeighborhoodsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.neighborhoods != null && message.neighborhoods.length)
                        for (var i = 0; i < message.neighborhoods.length; ++i)
                            $root.com.unblock.proto.Neighborhood.encode(message.neighborhoods[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListNeighborhoodsResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListNeighborhoodsResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.ListNeighborhoodsResponse
                 * @static
                 * @param {com.unblock.proto.IListNeighborhoodsResponse} message ListNeighborhoodsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListNeighborhoodsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListNeighborhoodsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.ListNeighborhoodsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.ListNeighborhoodsResponse} ListNeighborhoodsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListNeighborhoodsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.ListNeighborhoodsResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.neighborhoods && message.neighborhoods.length))
                                message.neighborhoods = [];
                            message.neighborhoods.push($root.com.unblock.proto.Neighborhood.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ListNeighborhoodsResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.ListNeighborhoodsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.ListNeighborhoodsResponse} ListNeighborhoodsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListNeighborhoodsResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListNeighborhoodsResponse message.
                 * @function verify
                 * @memberof com.unblock.proto.ListNeighborhoodsResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListNeighborhoodsResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.neighborhoods != null && message.hasOwnProperty("neighborhoods")) {
                        if (!Array.isArray(message.neighborhoods))
                            return "neighborhoods: array expected";
                        for (var i = 0; i < message.neighborhoods.length; ++i) {
                            var error = $root.com.unblock.proto.Neighborhood.verify(message.neighborhoods[i]);
                            if (error)
                                return "neighborhoods." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListNeighborhoodsResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.ListNeighborhoodsResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.ListNeighborhoodsResponse} ListNeighborhoodsResponse
                 */
                ListNeighborhoodsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.ListNeighborhoodsResponse)
                        return object;
                    var message = new $root.com.unblock.proto.ListNeighborhoodsResponse();
                    if (object.neighborhoods) {
                        if (!Array.isArray(object.neighborhoods))
                            throw TypeError(".com.unblock.proto.ListNeighborhoodsResponse.neighborhoods: array expected");
                        message.neighborhoods = [];
                        for (var i = 0; i < object.neighborhoods.length; ++i) {
                            if (typeof object.neighborhoods[i] !== "object")
                                throw TypeError(".com.unblock.proto.ListNeighborhoodsResponse.neighborhoods: object expected");
                            message.neighborhoods[i] = $root.com.unblock.proto.Neighborhood.fromObject(object.neighborhoods[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListNeighborhoodsResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.ListNeighborhoodsResponse
                 * @static
                 * @param {com.unblock.proto.ListNeighborhoodsResponse} message ListNeighborhoodsResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListNeighborhoodsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.neighborhoods = [];
                    if (message.neighborhoods && message.neighborhoods.length) {
                        object.neighborhoods = [];
                        for (var j = 0; j < message.neighborhoods.length; ++j)
                            object.neighborhoods[j] = $root.com.unblock.proto.Neighborhood.toObject(message.neighborhoods[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListNeighborhoodsResponse to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.ListNeighborhoodsResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListNeighborhoodsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ListNeighborhoodsResponse;
            })();

            proto.UpdateNeighborhoodInfoRequest = (function() {

                /**
                 * Properties of an UpdateNeighborhoodInfoRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateNeighborhoodInfoRequest
                 * @property {string|null} [id] UpdateNeighborhoodInfoRequest id
                 * @property {com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo|null} [info] UpdateNeighborhoodInfoRequest info
                 */

                /**
                 * Constructs a new UpdateNeighborhoodInfoRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateNeighborhoodInfoRequest.
                 * @implements IUpdateNeighborhoodInfoRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateNeighborhoodInfoRequest=} [properties] Properties to set
                 */
                function UpdateNeighborhoodInfoRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateNeighborhoodInfoRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @instance
                 */
                UpdateNeighborhoodInfoRequest.prototype.id = "";

                /**
                 * UpdateNeighborhoodInfoRequest info.
                 * @member {com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo|null|undefined} info
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @instance
                 */
                UpdateNeighborhoodInfoRequest.prototype.info = null;

                /**
                 * Creates a new UpdateNeighborhoodInfoRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateNeighborhoodInfoRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateNeighborhoodInfoRequest} UpdateNeighborhoodInfoRequest instance
                 */
                UpdateNeighborhoodInfoRequest.create = function create(properties) {
                    return new UpdateNeighborhoodInfoRequest(properties);
                };

                /**
                 * Encodes the specified UpdateNeighborhoodInfoRequest message. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodInfoRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateNeighborhoodInfoRequest} message UpdateNeighborhoodInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateNeighborhoodInfoRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UpdateNeighborhoodInfoRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodInfoRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateNeighborhoodInfoRequest} message UpdateNeighborhoodInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateNeighborhoodInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateNeighborhoodInfoRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateNeighborhoodInfoRequest} UpdateNeighborhoodInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateNeighborhoodInfoRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateNeighborhoodInfoRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.info = $root.com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateNeighborhoodInfoRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateNeighborhoodInfoRequest} UpdateNeighborhoodInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateNeighborhoodInfoRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateNeighborhoodInfoRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateNeighborhoodInfoRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates an UpdateNeighborhoodInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateNeighborhoodInfoRequest} UpdateNeighborhoodInfoRequest
                 */
                UpdateNeighborhoodInfoRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateNeighborhoodInfoRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateNeighborhoodInfoRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.UpdateNeighborhoodInfoRequest.info: object expected");
                        message.info = $root.com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateNeighborhoodInfoRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @static
                 * @param {com.unblock.proto.UpdateNeighborhoodInfoRequest} message UpdateNeighborhoodInfoRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateNeighborhoodInfoRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.info = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this UpdateNeighborhoodInfoRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateNeighborhoodInfoRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo = (function() {

                    /**
                     * Properties of an UpdateNeighborhoodInfo.
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                     * @interface IUpdateNeighborhoodInfo
                     * @property {string|null} [name] UpdateNeighborhoodInfo name
                     */

                    /**
                     * Constructs a new UpdateNeighborhoodInfo.
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest
                     * @classdesc Represents an UpdateNeighborhoodInfo.
                     * @implements IUpdateNeighborhoodInfo
                     * @constructor
                     * @param {com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo=} [properties] Properties to set
                     */
                    function UpdateNeighborhoodInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateNeighborhoodInfo name.
                     * @member {string} name
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo
                     * @instance
                     */
                    UpdateNeighborhoodInfo.prototype.name = "";

                    /**
                     * Creates a new UpdateNeighborhoodInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo
                     * @static
                     * @param {com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo} UpdateNeighborhoodInfo instance
                     */
                    UpdateNeighborhoodInfo.create = function create(properties) {
                        return new UpdateNeighborhoodInfo(properties);
                    };

                    /**
                     * Encodes the specified UpdateNeighborhoodInfo message. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo
                     * @static
                     * @param {com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo} message UpdateNeighborhoodInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateNeighborhoodInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateNeighborhoodInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo
                     * @static
                     * @param {com.unblock.proto.UpdateNeighborhoodInfoRequest.IUpdateNeighborhoodInfo} message UpdateNeighborhoodInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateNeighborhoodInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateNeighborhoodInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo} UpdateNeighborhoodInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateNeighborhoodInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateNeighborhoodInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo} UpdateNeighborhoodInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateNeighborhoodInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateNeighborhoodInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateNeighborhoodInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateNeighborhoodInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo} UpdateNeighborhoodInfo
                     */
                    UpdateNeighborhoodInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo)
                            return object;
                        var message = new $root.com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo();
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateNeighborhoodInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo
                     * @static
                     * @param {com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo} message UpdateNeighborhoodInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateNeighborhoodInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.name = "";
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };

                    /**
                     * Converts this UpdateNeighborhoodInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.UpdateNeighborhoodInfoRequest.UpdateNeighborhoodInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateNeighborhoodInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateNeighborhoodInfo;
                })();

                return UpdateNeighborhoodInfoRequest;
            })();

            /**
             * NeighborhoodStatus enum.
             * @name com.unblock.proto.NeighborhoodStatus
             * @enum {string}
             * @property {number} NEIGHBORHOOD_STATUS_UNSPECIFIED=0 NEIGHBORHOOD_STATUS_UNSPECIFIED value
             * @property {number} NEIGHBORHOOD_LIVE=1 NEIGHBORHOOD_LIVE value
             * @property {number} NEIGHBORHOOD_DISABLED=2 NEIGHBORHOOD_DISABLED value
             */
            proto.NeighborhoodStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NEIGHBORHOOD_STATUS_UNSPECIFIED"] = 0;
                values[valuesById[1] = "NEIGHBORHOOD_LIVE"] = 1;
                values[valuesById[2] = "NEIGHBORHOOD_DISABLED"] = 2;
                return values;
            })();

            proto.UpdateNeighborhoodStatusRequest = (function() {

                /**
                 * Properties of an UpdateNeighborhoodStatusRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateNeighborhoodStatusRequest
                 * @property {string|null} [id] UpdateNeighborhoodStatusRequest id
                 * @property {com.unblock.proto.NeighborhoodStatus|null} [status] UpdateNeighborhoodStatusRequest status
                 */

                /**
                 * Constructs a new UpdateNeighborhoodStatusRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateNeighborhoodStatusRequest.
                 * @implements IUpdateNeighborhoodStatusRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateNeighborhoodStatusRequest=} [properties] Properties to set
                 */
                function UpdateNeighborhoodStatusRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateNeighborhoodStatusRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @instance
                 */
                UpdateNeighborhoodStatusRequest.prototype.id = "";

                /**
                 * UpdateNeighborhoodStatusRequest status.
                 * @member {com.unblock.proto.NeighborhoodStatus} status
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @instance
                 */
                UpdateNeighborhoodStatusRequest.prototype.status = 0;

                /**
                 * Creates a new UpdateNeighborhoodStatusRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateNeighborhoodStatusRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateNeighborhoodStatusRequest} UpdateNeighborhoodStatusRequest instance
                 */
                UpdateNeighborhoodStatusRequest.create = function create(properties) {
                    return new UpdateNeighborhoodStatusRequest(properties);
                };

                /**
                 * Encodes the specified UpdateNeighborhoodStatusRequest message. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodStatusRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateNeighborhoodStatusRequest} message UpdateNeighborhoodStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateNeighborhoodStatusRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified UpdateNeighborhoodStatusRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateNeighborhoodStatusRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateNeighborhoodStatusRequest} message UpdateNeighborhoodStatusRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateNeighborhoodStatusRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateNeighborhoodStatusRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateNeighborhoodStatusRequest} UpdateNeighborhoodStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateNeighborhoodStatusRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateNeighborhoodStatusRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.status = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateNeighborhoodStatusRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateNeighborhoodStatusRequest} UpdateNeighborhoodStatusRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateNeighborhoodStatusRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateNeighborhoodStatusRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateNeighborhoodStatusRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates an UpdateNeighborhoodStatusRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateNeighborhoodStatusRequest} UpdateNeighborhoodStatusRequest
                 */
                UpdateNeighborhoodStatusRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateNeighborhoodStatusRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateNeighborhoodStatusRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    switch (object.status) {
                    case "NEIGHBORHOOD_STATUS_UNSPECIFIED":
                    case 0:
                        message.status = 0;
                        break;
                    case "NEIGHBORHOOD_LIVE":
                    case 1:
                        message.status = 1;
                        break;
                    case "NEIGHBORHOOD_DISABLED":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateNeighborhoodStatusRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @static
                 * @param {com.unblock.proto.UpdateNeighborhoodStatusRequest} message UpdateNeighborhoodStatusRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateNeighborhoodStatusRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.status = options.enums === String ? "NEIGHBORHOOD_STATUS_UNSPECIFIED" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.com.unblock.proto.NeighborhoodStatus[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this UpdateNeighborhoodStatusRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateNeighborhoodStatusRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateNeighborhoodStatusRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateNeighborhoodStatusRequest;
            })();

            proto.AssignNeighborhoodToCityRequest = (function() {

                /**
                 * Properties of an AssignNeighborhoodToCityRequest.
                 * @memberof com.unblock.proto
                 * @interface IAssignNeighborhoodToCityRequest
                 * @property {string|null} [id] AssignNeighborhoodToCityRequest id
                 * @property {string|null} [cityId] AssignNeighborhoodToCityRequest cityId
                 */

                /**
                 * Constructs a new AssignNeighborhoodToCityRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an AssignNeighborhoodToCityRequest.
                 * @implements IAssignNeighborhoodToCityRequest
                 * @constructor
                 * @param {com.unblock.proto.IAssignNeighborhoodToCityRequest=} [properties] Properties to set
                 */
                function AssignNeighborhoodToCityRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AssignNeighborhoodToCityRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @instance
                 */
                AssignNeighborhoodToCityRequest.prototype.id = "";

                /**
                 * AssignNeighborhoodToCityRequest cityId.
                 * @member {string} cityId
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @instance
                 */
                AssignNeighborhoodToCityRequest.prototype.cityId = "";

                /**
                 * Creates a new AssignNeighborhoodToCityRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @static
                 * @param {com.unblock.proto.IAssignNeighborhoodToCityRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.AssignNeighborhoodToCityRequest} AssignNeighborhoodToCityRequest instance
                 */
                AssignNeighborhoodToCityRequest.create = function create(properties) {
                    return new AssignNeighborhoodToCityRequest(properties);
                };

                /**
                 * Encodes the specified AssignNeighborhoodToCityRequest message. Does not implicitly {@link com.unblock.proto.AssignNeighborhoodToCityRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @static
                 * @param {com.unblock.proto.IAssignNeighborhoodToCityRequest} message AssignNeighborhoodToCityRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AssignNeighborhoodToCityRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.cityId != null && message.hasOwnProperty("cityId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.cityId);
                    return writer;
                };

                /**
                 * Encodes the specified AssignNeighborhoodToCityRequest message, length delimited. Does not implicitly {@link com.unblock.proto.AssignNeighborhoodToCityRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @static
                 * @param {com.unblock.proto.IAssignNeighborhoodToCityRequest} message AssignNeighborhoodToCityRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AssignNeighborhoodToCityRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AssignNeighborhoodToCityRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.AssignNeighborhoodToCityRequest} AssignNeighborhoodToCityRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AssignNeighborhoodToCityRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.AssignNeighborhoodToCityRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.cityId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AssignNeighborhoodToCityRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.AssignNeighborhoodToCityRequest} AssignNeighborhoodToCityRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AssignNeighborhoodToCityRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AssignNeighborhoodToCityRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AssignNeighborhoodToCityRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.cityId != null && message.hasOwnProperty("cityId"))
                        if (!$util.isString(message.cityId))
                            return "cityId: string expected";
                    return null;
                };

                /**
                 * Creates an AssignNeighborhoodToCityRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.AssignNeighborhoodToCityRequest} AssignNeighborhoodToCityRequest
                 */
                AssignNeighborhoodToCityRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.AssignNeighborhoodToCityRequest)
                        return object;
                    var message = new $root.com.unblock.proto.AssignNeighborhoodToCityRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.cityId != null)
                        message.cityId = String(object.cityId);
                    return message;
                };

                /**
                 * Creates a plain object from an AssignNeighborhoodToCityRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @static
                 * @param {com.unblock.proto.AssignNeighborhoodToCityRequest} message AssignNeighborhoodToCityRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AssignNeighborhoodToCityRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.cityId = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.cityId != null && message.hasOwnProperty("cityId"))
                        object.cityId = message.cityId;
                    return object;
                };

                /**
                 * Converts this AssignNeighborhoodToCityRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.AssignNeighborhoodToCityRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AssignNeighborhoodToCityRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AssignNeighborhoodToCityRequest;
            })();

            proto.Neighborhood = (function() {

                /**
                 * Properties of a Neighborhood.
                 * @memberof com.unblock.proto
                 * @interface INeighborhood
                 * @property {string|null} [id] Neighborhood id
                 * @property {com.unblock.proto.NeighborhoodStatus|null} [status] Neighborhood status
                 * @property {string|null} [cityId] Neighborhood cityId
                 * @property {string|null} [name] Neighborhood name
                 * @property {Array.<com.unblock.proto.IBlock>|null} [blocks] Neighborhood blocks
                 */

                /**
                 * Constructs a new Neighborhood.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a Neighborhood.
                 * @implements INeighborhood
                 * @constructor
                 * @param {com.unblock.proto.INeighborhood=} [properties] Properties to set
                 */
                function Neighborhood(properties) {
                    this.blocks = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Neighborhood id.
                 * @member {string} id
                 * @memberof com.unblock.proto.Neighborhood
                 * @instance
                 */
                Neighborhood.prototype.id = "";

                /**
                 * Neighborhood status.
                 * @member {com.unblock.proto.NeighborhoodStatus} status
                 * @memberof com.unblock.proto.Neighborhood
                 * @instance
                 */
                Neighborhood.prototype.status = 0;

                /**
                 * Neighborhood cityId.
                 * @member {string} cityId
                 * @memberof com.unblock.proto.Neighborhood
                 * @instance
                 */
                Neighborhood.prototype.cityId = "";

                /**
                 * Neighborhood name.
                 * @member {string} name
                 * @memberof com.unblock.proto.Neighborhood
                 * @instance
                 */
                Neighborhood.prototype.name = "";

                /**
                 * Neighborhood blocks.
                 * @member {Array.<com.unblock.proto.IBlock>} blocks
                 * @memberof com.unblock.proto.Neighborhood
                 * @instance
                 */
                Neighborhood.prototype.blocks = $util.emptyArray;

                /**
                 * Creates a new Neighborhood instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.Neighborhood
                 * @static
                 * @param {com.unblock.proto.INeighborhood=} [properties] Properties to set
                 * @returns {com.unblock.proto.Neighborhood} Neighborhood instance
                 */
                Neighborhood.create = function create(properties) {
                    return new Neighborhood(properties);
                };

                /**
                 * Encodes the specified Neighborhood message. Does not implicitly {@link com.unblock.proto.Neighborhood.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.Neighborhood
                 * @static
                 * @param {com.unblock.proto.INeighborhood} message Neighborhood message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Neighborhood.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                    if (message.cityId != null && message.hasOwnProperty("cityId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.cityId);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                    if (message.blocks != null && message.blocks.length)
                        for (var i = 0; i < message.blocks.length; ++i)
                            $root.com.unblock.proto.Block.encode(message.blocks[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Neighborhood message, length delimited. Does not implicitly {@link com.unblock.proto.Neighborhood.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.Neighborhood
                 * @static
                 * @param {com.unblock.proto.INeighborhood} message Neighborhood message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Neighborhood.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Neighborhood message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.Neighborhood
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.Neighborhood} Neighborhood
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Neighborhood.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.Neighborhood();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.status = reader.int32();
                            break;
                        case 3:
                            message.cityId = reader.string();
                            break;
                        case 4:
                            message.name = reader.string();
                            break;
                        case 5:
                            if (!(message.blocks && message.blocks.length))
                                message.blocks = [];
                            message.blocks.push($root.com.unblock.proto.Block.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Neighborhood message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.Neighborhood
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.Neighborhood} Neighborhood
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Neighborhood.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Neighborhood message.
                 * @function verify
                 * @memberof com.unblock.proto.Neighborhood
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Neighborhood.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.cityId != null && message.hasOwnProperty("cityId"))
                        if (!$util.isString(message.cityId))
                            return "cityId: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.blocks != null && message.hasOwnProperty("blocks")) {
                        if (!Array.isArray(message.blocks))
                            return "blocks: array expected";
                        for (var i = 0; i < message.blocks.length; ++i) {
                            var error = $root.com.unblock.proto.Block.verify(message.blocks[i]);
                            if (error)
                                return "blocks." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Neighborhood message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.Neighborhood
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.Neighborhood} Neighborhood
                 */
                Neighborhood.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.Neighborhood)
                        return object;
                    var message = new $root.com.unblock.proto.Neighborhood();
                    if (object.id != null)
                        message.id = String(object.id);
                    switch (object.status) {
                    case "NEIGHBORHOOD_STATUS_UNSPECIFIED":
                    case 0:
                        message.status = 0;
                        break;
                    case "NEIGHBORHOOD_LIVE":
                    case 1:
                        message.status = 1;
                        break;
                    case "NEIGHBORHOOD_DISABLED":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    if (object.cityId != null)
                        message.cityId = String(object.cityId);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.blocks) {
                        if (!Array.isArray(object.blocks))
                            throw TypeError(".com.unblock.proto.Neighborhood.blocks: array expected");
                        message.blocks = [];
                        for (var i = 0; i < object.blocks.length; ++i) {
                            if (typeof object.blocks[i] !== "object")
                                throw TypeError(".com.unblock.proto.Neighborhood.blocks: object expected");
                            message.blocks[i] = $root.com.unblock.proto.Block.fromObject(object.blocks[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Neighborhood message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.Neighborhood
                 * @static
                 * @param {com.unblock.proto.Neighborhood} message Neighborhood
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Neighborhood.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.blocks = [];
                    if (options.defaults) {
                        object.id = "";
                        object.status = options.enums === String ? "NEIGHBORHOOD_STATUS_UNSPECIFIED" : 0;
                        object.cityId = "";
                        object.name = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.com.unblock.proto.NeighborhoodStatus[message.status] : message.status;
                    if (message.cityId != null && message.hasOwnProperty("cityId"))
                        object.cityId = message.cityId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.blocks && message.blocks.length) {
                        object.blocks = [];
                        for (var j = 0; j < message.blocks.length; ++j)
                            object.blocks[j] = $root.com.unblock.proto.Block.toObject(message.blocks[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Neighborhood to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.Neighborhood
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Neighborhood.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Neighborhood;
            })();

            proto.LoginRequest = (function() {

                /**
                 * Properties of a LoginRequest.
                 * @memberof com.unblock.proto
                 * @interface ILoginRequest
                 * @property {string|null} [usernameOrEmail] LoginRequest usernameOrEmail
                 * @property {string|null} [password] LoginRequest password
                 */

                /**
                 * Constructs a new LoginRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a LoginRequest.
                 * @implements ILoginRequest
                 * @constructor
                 * @param {com.unblock.proto.ILoginRequest=} [properties] Properties to set
                 */
                function LoginRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * LoginRequest usernameOrEmail.
                 * @member {string} usernameOrEmail
                 * @memberof com.unblock.proto.LoginRequest
                 * @instance
                 */
                LoginRequest.prototype.usernameOrEmail = "";

                /**
                 * LoginRequest password.
                 * @member {string} password
                 * @memberof com.unblock.proto.LoginRequest
                 * @instance
                 */
                LoginRequest.prototype.password = "";

                /**
                 * Creates a new LoginRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.LoginRequest
                 * @static
                 * @param {com.unblock.proto.ILoginRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.LoginRequest} LoginRequest instance
                 */
                LoginRequest.create = function create(properties) {
                    return new LoginRequest(properties);
                };

                /**
                 * Encodes the specified LoginRequest message. Does not implicitly {@link com.unblock.proto.LoginRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.LoginRequest
                 * @static
                 * @param {com.unblock.proto.ILoginRequest} message LoginRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LoginRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.usernameOrEmail != null && message.hasOwnProperty("usernameOrEmail"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.usernameOrEmail);
                    if (message.password != null && message.hasOwnProperty("password"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                    return writer;
                };

                /**
                 * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link com.unblock.proto.LoginRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.LoginRequest
                 * @static
                 * @param {com.unblock.proto.ILoginRequest} message LoginRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a LoginRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.LoginRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.LoginRequest} LoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LoginRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.LoginRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.usernameOrEmail = reader.string();
                            break;
                        case 2:
                            message.password = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.LoginRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.LoginRequest} LoginRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LoginRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LoginRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.LoginRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LoginRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.usernameOrEmail != null && message.hasOwnProperty("usernameOrEmail"))
                        if (!$util.isString(message.usernameOrEmail))
                            return "usernameOrEmail: string expected";
                    if (message.password != null && message.hasOwnProperty("password"))
                        if (!$util.isString(message.password))
                            return "password: string expected";
                    return null;
                };

                /**
                 * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.LoginRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.LoginRequest} LoginRequest
                 */
                LoginRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.LoginRequest)
                        return object;
                    var message = new $root.com.unblock.proto.LoginRequest();
                    if (object.usernameOrEmail != null)
                        message.usernameOrEmail = String(object.usernameOrEmail);
                    if (object.password != null)
                        message.password = String(object.password);
                    return message;
                };

                /**
                 * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.LoginRequest
                 * @static
                 * @param {com.unblock.proto.LoginRequest} message LoginRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LoginRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.usernameOrEmail = "";
                        object.password = "";
                    }
                    if (message.usernameOrEmail != null && message.hasOwnProperty("usernameOrEmail"))
                        object.usernameOrEmail = message.usernameOrEmail;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    return object;
                };

                /**
                 * Converts this LoginRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.LoginRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LoginRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return LoginRequest;
            })();

            proto.CreateUserRequest = (function() {

                /**
                 * Properties of a CreateUserRequest.
                 * @memberof com.unblock.proto
                 * @interface ICreateUserRequest
                 * @property {com.unblock.proto.CreateUserRequest.ICreateUserInfo|null} [info] CreateUserRequest info
                 */

                /**
                 * Constructs a new CreateUserRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a CreateUserRequest.
                 * @implements ICreateUserRequest
                 * @constructor
                 * @param {com.unblock.proto.ICreateUserRequest=} [properties] Properties to set
                 */
                function CreateUserRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateUserRequest info.
                 * @member {com.unblock.proto.CreateUserRequest.ICreateUserInfo|null|undefined} info
                 * @memberof com.unblock.proto.CreateUserRequest
                 * @instance
                 */
                CreateUserRequest.prototype.info = null;

                /**
                 * Creates a new CreateUserRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.CreateUserRequest
                 * @static
                 * @param {com.unblock.proto.ICreateUserRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.CreateUserRequest} CreateUserRequest instance
                 */
                CreateUserRequest.create = function create(properties) {
                    return new CreateUserRequest(properties);
                };

                /**
                 * Encodes the specified CreateUserRequest message. Does not implicitly {@link com.unblock.proto.CreateUserRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.CreateUserRequest
                 * @static
                 * @param {com.unblock.proto.ICreateUserRequest} message CreateUserRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateUserRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.CreateUserRequest.CreateUserInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link com.unblock.proto.CreateUserRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.CreateUserRequest
                 * @static
                 * @param {com.unblock.proto.ICreateUserRequest} message CreateUserRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateUserRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.CreateUserRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.CreateUserRequest} CreateUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateUserRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.CreateUserRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.info = $root.com.unblock.proto.CreateUserRequest.CreateUserInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.CreateUserRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.CreateUserRequest} CreateUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateUserRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateUserRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.CreateUserRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateUserRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.CreateUserRequest.CreateUserInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.CreateUserRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.CreateUserRequest} CreateUserRequest
                 */
                CreateUserRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.CreateUserRequest)
                        return object;
                    var message = new $root.com.unblock.proto.CreateUserRequest();
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.CreateUserRequest.info: object expected");
                        message.info = $root.com.unblock.proto.CreateUserRequest.CreateUserInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.CreateUserRequest
                 * @static
                 * @param {com.unblock.proto.CreateUserRequest} message CreateUserRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateUserRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.info = null;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.CreateUserRequest.CreateUserInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this CreateUserRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.CreateUserRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateUserRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                CreateUserRequest.CreateUserInfo = (function() {

                    /**
                     * Properties of a CreateUserInfo.
                     * @memberof com.unblock.proto.CreateUserRequest
                     * @interface ICreateUserInfo
                     * @property {string|null} [username] CreateUserInfo username
                     * @property {string|null} [password] CreateUserInfo password
                     * @property {string|null} [email] CreateUserInfo email
                     * @property {com.unblock.proto.Level|null} [level] CreateUserInfo level
                     */

                    /**
                     * Constructs a new CreateUserInfo.
                     * @memberof com.unblock.proto.CreateUserRequest
                     * @classdesc Represents a CreateUserInfo.
                     * @implements ICreateUserInfo
                     * @constructor
                     * @param {com.unblock.proto.CreateUserRequest.ICreateUserInfo=} [properties] Properties to set
                     */
                    function CreateUserInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateUserInfo username.
                     * @member {string} username
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @instance
                     */
                    CreateUserInfo.prototype.username = "";

                    /**
                     * CreateUserInfo password.
                     * @member {string} password
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @instance
                     */
                    CreateUserInfo.prototype.password = "";

                    /**
                     * CreateUserInfo email.
                     * @member {string} email
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @instance
                     */
                    CreateUserInfo.prototype.email = "";

                    /**
                     * CreateUserInfo level.
                     * @member {com.unblock.proto.Level} level
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @instance
                     */
                    CreateUserInfo.prototype.level = 0;

                    /**
                     * Creates a new CreateUserInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @static
                     * @param {com.unblock.proto.CreateUserRequest.ICreateUserInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.CreateUserRequest.CreateUserInfo} CreateUserInfo instance
                     */
                    CreateUserInfo.create = function create(properties) {
                        return new CreateUserInfo(properties);
                    };

                    /**
                     * Encodes the specified CreateUserInfo message. Does not implicitly {@link com.unblock.proto.CreateUserRequest.CreateUserInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @static
                     * @param {com.unblock.proto.CreateUserRequest.ICreateUserInfo} message CreateUserInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateUserInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.username != null && message.hasOwnProperty("username"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                        if (message.password != null && message.hasOwnProperty("password"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                        if (message.email != null && message.hasOwnProperty("email"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                        if (message.level != null && message.hasOwnProperty("level"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateUserInfo message, length delimited. Does not implicitly {@link com.unblock.proto.CreateUserRequest.CreateUserInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @static
                     * @param {com.unblock.proto.CreateUserRequest.ICreateUserInfo} message CreateUserInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateUserInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.CreateUserRequest.CreateUserInfo} CreateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateUserInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.CreateUserRequest.CreateUserInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.username = reader.string();
                                break;
                            case 2:
                                message.password = reader.string();
                                break;
                            case 3:
                                message.email = reader.string();
                                break;
                            case 4:
                                message.level = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateUserInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.CreateUserRequest.CreateUserInfo} CreateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateUserInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateUserInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateUserInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.username != null && message.hasOwnProperty("username"))
                            if (!$util.isString(message.username))
                                return "username: string expected";
                        if (message.password != null && message.hasOwnProperty("password"))
                            if (!$util.isString(message.password))
                                return "password: string expected";
                        if (message.email != null && message.hasOwnProperty("email"))
                            if (!$util.isString(message.email))
                                return "email: string expected";
                        if (message.level != null && message.hasOwnProperty("level"))
                            switch (message.level) {
                            default:
                                return "level: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a CreateUserInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.CreateUserRequest.CreateUserInfo} CreateUserInfo
                     */
                    CreateUserInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.CreateUserRequest.CreateUserInfo)
                            return object;
                        var message = new $root.com.unblock.proto.CreateUserRequest.CreateUserInfo();
                        if (object.username != null)
                            message.username = String(object.username);
                        if (object.password != null)
                            message.password = String(object.password);
                        if (object.email != null)
                            message.email = String(object.email);
                        switch (object.level) {
                        case "LEVEL_UNSPECIFIED":
                        case 0:
                            message.level = 0;
                            break;
                        case "DEFAULT":
                        case 1:
                            message.level = 1;
                            break;
                        case "ADMIN":
                        case 2:
                            message.level = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateUserInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @static
                     * @param {com.unblock.proto.CreateUserRequest.CreateUserInfo} message CreateUserInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateUserInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.username = "";
                            object.password = "";
                            object.email = "";
                            object.level = options.enums === String ? "LEVEL_UNSPECIFIED" : 0;
                        }
                        if (message.username != null && message.hasOwnProperty("username"))
                            object.username = message.username;
                        if (message.password != null && message.hasOwnProperty("password"))
                            object.password = message.password;
                        if (message.email != null && message.hasOwnProperty("email"))
                            object.email = message.email;
                        if (message.level != null && message.hasOwnProperty("level"))
                            object.level = options.enums === String ? $root.com.unblock.proto.Level[message.level] : message.level;
                        return object;
                    };

                    /**
                     * Converts this CreateUserInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.CreateUserRequest.CreateUserInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateUserInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateUserInfo;
                })();

                return CreateUserRequest;
            })();

            proto.ListUsersResponse = (function() {

                /**
                 * Properties of a ListUsersResponse.
                 * @memberof com.unblock.proto
                 * @interface IListUsersResponse
                 * @property {Array.<com.unblock.proto.IUser>|null} [users] ListUsersResponse users
                 */

                /**
                 * Constructs a new ListUsersResponse.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a ListUsersResponse.
                 * @implements IListUsersResponse
                 * @constructor
                 * @param {com.unblock.proto.IListUsersResponse=} [properties] Properties to set
                 */
                function ListUsersResponse(properties) {
                    this.users = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListUsersResponse users.
                 * @member {Array.<com.unblock.proto.IUser>} users
                 * @memberof com.unblock.proto.ListUsersResponse
                 * @instance
                 */
                ListUsersResponse.prototype.users = $util.emptyArray;

                /**
                 * Creates a new ListUsersResponse instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.ListUsersResponse
                 * @static
                 * @param {com.unblock.proto.IListUsersResponse=} [properties] Properties to set
                 * @returns {com.unblock.proto.ListUsersResponse} ListUsersResponse instance
                 */
                ListUsersResponse.create = function create(properties) {
                    return new ListUsersResponse(properties);
                };

                /**
                 * Encodes the specified ListUsersResponse message. Does not implicitly {@link com.unblock.proto.ListUsersResponse.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.ListUsersResponse
                 * @static
                 * @param {com.unblock.proto.IListUsersResponse} message ListUsersResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListUsersResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.users != null && message.users.length)
                        for (var i = 0; i < message.users.length; ++i)
                            $root.com.unblock.proto.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListUsersResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListUsersResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.ListUsersResponse
                 * @static
                 * @param {com.unblock.proto.IListUsersResponse} message ListUsersResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListUsersResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListUsersResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.ListUsersResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.ListUsersResponse} ListUsersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListUsersResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.ListUsersResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.users && message.users.length))
                                message.users = [];
                            message.users.push($root.com.unblock.proto.User.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ListUsersResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.ListUsersResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.ListUsersResponse} ListUsersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListUsersResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListUsersResponse message.
                 * @function verify
                 * @memberof com.unblock.proto.ListUsersResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListUsersResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.users != null && message.hasOwnProperty("users")) {
                        if (!Array.isArray(message.users))
                            return "users: array expected";
                        for (var i = 0; i < message.users.length; ++i) {
                            var error = $root.com.unblock.proto.User.verify(message.users[i]);
                            if (error)
                                return "users." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListUsersResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.ListUsersResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.ListUsersResponse} ListUsersResponse
                 */
                ListUsersResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.ListUsersResponse)
                        return object;
                    var message = new $root.com.unblock.proto.ListUsersResponse();
                    if (object.users) {
                        if (!Array.isArray(object.users))
                            throw TypeError(".com.unblock.proto.ListUsersResponse.users: array expected");
                        message.users = [];
                        for (var i = 0; i < object.users.length; ++i) {
                            if (typeof object.users[i] !== "object")
                                throw TypeError(".com.unblock.proto.ListUsersResponse.users: object expected");
                            message.users[i] = $root.com.unblock.proto.User.fromObject(object.users[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListUsersResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.ListUsersResponse
                 * @static
                 * @param {com.unblock.proto.ListUsersResponse} message ListUsersResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListUsersResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.users = [];
                    if (message.users && message.users.length) {
                        object.users = [];
                        for (var j = 0; j < message.users.length; ++j)
                            object.users[j] = $root.com.unblock.proto.User.toObject(message.users[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListUsersResponse to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.ListUsersResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListUsersResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ListUsersResponse;
            })();

            proto.UpdateUserInfoRequest = (function() {

                /**
                 * Properties of an UpdateUserInfoRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateUserInfoRequest
                 * @property {string|null} [id] UpdateUserInfoRequest id
                 * @property {com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo|null} [info] UpdateUserInfoRequest info
                 */

                /**
                 * Constructs a new UpdateUserInfoRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateUserInfoRequest.
                 * @implements IUpdateUserInfoRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateUserInfoRequest=} [properties] Properties to set
                 */
                function UpdateUserInfoRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateUserInfoRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @instance
                 */
                UpdateUserInfoRequest.prototype.id = "";

                /**
                 * UpdateUserInfoRequest info.
                 * @member {com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo|null|undefined} info
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @instance
                 */
                UpdateUserInfoRequest.prototype.info = null;

                /**
                 * Creates a new UpdateUserInfoRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateUserInfoRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateUserInfoRequest} UpdateUserInfoRequest instance
                 */
                UpdateUserInfoRequest.create = function create(properties) {
                    return new UpdateUserInfoRequest(properties);
                };

                /**
                 * Encodes the specified UpdateUserInfoRequest message. Does not implicitly {@link com.unblock.proto.UpdateUserInfoRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateUserInfoRequest} message UpdateUserInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateUserInfoRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UpdateUserInfoRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateUserInfoRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateUserInfoRequest} message UpdateUserInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateUserInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateUserInfoRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateUserInfoRequest} UpdateUserInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateUserInfoRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateUserInfoRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.info = $root.com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateUserInfoRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateUserInfoRequest} UpdateUserInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateUserInfoRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateUserInfoRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateUserInfoRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates an UpdateUserInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateUserInfoRequest} UpdateUserInfoRequest
                 */
                UpdateUserInfoRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateUserInfoRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateUserInfoRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.UpdateUserInfoRequest.info: object expected");
                        message.info = $root.com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateUserInfoRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @static
                 * @param {com.unblock.proto.UpdateUserInfoRequest} message UpdateUserInfoRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateUserInfoRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.info = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this UpdateUserInfoRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateUserInfoRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateUserInfoRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                UpdateUserInfoRequest.UpdateUserInfo = (function() {

                    /**
                     * Properties of an UpdateUserInfo.
                     * @memberof com.unblock.proto.UpdateUserInfoRequest
                     * @interface IUpdateUserInfo
                     * @property {string|null} [username] UpdateUserInfo username
                     * @property {string|null} [email] UpdateUserInfo email
                     * @property {com.unblock.proto.Level|null} [level] UpdateUserInfo level
                     */

                    /**
                     * Constructs a new UpdateUserInfo.
                     * @memberof com.unblock.proto.UpdateUserInfoRequest
                     * @classdesc Represents an UpdateUserInfo.
                     * @implements IUpdateUserInfo
                     * @constructor
                     * @param {com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo=} [properties] Properties to set
                     */
                    function UpdateUserInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateUserInfo username.
                     * @member {string} username
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @instance
                     */
                    UpdateUserInfo.prototype.username = "";

                    /**
                     * UpdateUserInfo email.
                     * @member {string} email
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @instance
                     */
                    UpdateUserInfo.prototype.email = "";

                    /**
                     * UpdateUserInfo level.
                     * @member {com.unblock.proto.Level} level
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @instance
                     */
                    UpdateUserInfo.prototype.level = 0;

                    /**
                     * Creates a new UpdateUserInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @static
                     * @param {com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo} UpdateUserInfo instance
                     */
                    UpdateUserInfo.create = function create(properties) {
                        return new UpdateUserInfo(properties);
                    };

                    /**
                     * Encodes the specified UpdateUserInfo message. Does not implicitly {@link com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @static
                     * @param {com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo} message UpdateUserInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateUserInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.username != null && message.hasOwnProperty("username"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                        if (message.email != null && message.hasOwnProperty("email"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
                        if (message.level != null && message.hasOwnProperty("level"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateUserInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @static
                     * @param {com.unblock.proto.UpdateUserInfoRequest.IUpdateUserInfo} message UpdateUserInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateUserInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo} UpdateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateUserInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.username = reader.string();
                                break;
                            case 2:
                                message.email = reader.string();
                                break;
                            case 3:
                                message.level = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateUserInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo} UpdateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateUserInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateUserInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateUserInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.username != null && message.hasOwnProperty("username"))
                            if (!$util.isString(message.username))
                                return "username: string expected";
                        if (message.email != null && message.hasOwnProperty("email"))
                            if (!$util.isString(message.email))
                                return "email: string expected";
                        if (message.level != null && message.hasOwnProperty("level"))
                            switch (message.level) {
                            default:
                                return "level: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates an UpdateUserInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo} UpdateUserInfo
                     */
                    UpdateUserInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo)
                            return object;
                        var message = new $root.com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo();
                        if (object.username != null)
                            message.username = String(object.username);
                        if (object.email != null)
                            message.email = String(object.email);
                        switch (object.level) {
                        case "LEVEL_UNSPECIFIED":
                        case 0:
                            message.level = 0;
                            break;
                        case "DEFAULT":
                        case 1:
                            message.level = 1;
                            break;
                        case "ADMIN":
                        case 2:
                            message.level = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateUserInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @static
                     * @param {com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo} message UpdateUserInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateUserInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.username = "";
                            object.email = "";
                            object.level = options.enums === String ? "LEVEL_UNSPECIFIED" : 0;
                        }
                        if (message.username != null && message.hasOwnProperty("username"))
                            object.username = message.username;
                        if (message.email != null && message.hasOwnProperty("email"))
                            object.email = message.email;
                        if (message.level != null && message.hasOwnProperty("level"))
                            object.level = options.enums === String ? $root.com.unblock.proto.Level[message.level] : message.level;
                        return object;
                    };

                    /**
                     * Converts this UpdateUserInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.UpdateUserInfoRequest.UpdateUserInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateUserInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateUserInfo;
                })();

                return UpdateUserInfoRequest;
            })();

            proto.UpdateUserPasswordRequest = (function() {

                /**
                 * Properties of an UpdateUserPasswordRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateUserPasswordRequest
                 * @property {string|null} [id] UpdateUserPasswordRequest id
                 * @property {com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo|null} [info] UpdateUserPasswordRequest info
                 */

                /**
                 * Constructs a new UpdateUserPasswordRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateUserPasswordRequest.
                 * @implements IUpdateUserPasswordRequest
                 * @constructor
                 * @param {com.unblock.proto.IUpdateUserPasswordRequest=} [properties] Properties to set
                 */
                function UpdateUserPasswordRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateUserPasswordRequest id.
                 * @member {string} id
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @instance
                 */
                UpdateUserPasswordRequest.prototype.id = "";

                /**
                 * UpdateUserPasswordRequest info.
                 * @member {com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo|null|undefined} info
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @instance
                 */
                UpdateUserPasswordRequest.prototype.info = null;

                /**
                 * Creates a new UpdateUserPasswordRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateUserPasswordRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.UpdateUserPasswordRequest} UpdateUserPasswordRequest instance
                 */
                UpdateUserPasswordRequest.create = function create(properties) {
                    return new UpdateUserPasswordRequest(properties);
                };

                /**
                 * Encodes the specified UpdateUserPasswordRequest message. Does not implicitly {@link com.unblock.proto.UpdateUserPasswordRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateUserPasswordRequest} message UpdateUserPasswordRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateUserPasswordRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.info != null && message.hasOwnProperty("info"))
                        $root.com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UpdateUserPasswordRequest message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateUserPasswordRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @static
                 * @param {com.unblock.proto.IUpdateUserPasswordRequest} message UpdateUserPasswordRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateUserPasswordRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateUserPasswordRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.UpdateUserPasswordRequest} UpdateUserPasswordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateUserPasswordRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateUserPasswordRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.info = $root.com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateUserPasswordRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.UpdateUserPasswordRequest} UpdateUserPasswordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateUserPasswordRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateUserPasswordRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateUserPasswordRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates an UpdateUserPasswordRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.UpdateUserPasswordRequest} UpdateUserPasswordRequest
                 */
                UpdateUserPasswordRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.UpdateUserPasswordRequest)
                        return object;
                    var message = new $root.com.unblock.proto.UpdateUserPasswordRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".com.unblock.proto.UpdateUserPasswordRequest.info: object expected");
                        message.info = $root.com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateUserPasswordRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @static
                 * @param {com.unblock.proto.UpdateUserPasswordRequest} message UpdateUserPasswordRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateUserPasswordRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.info = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this UpdateUserPasswordRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.UpdateUserPasswordRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateUserPasswordRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                UpdateUserPasswordRequest.UpdateUserInfo = (function() {

                    /**
                     * Properties of an UpdateUserInfo.
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest
                     * @interface IUpdateUserInfo
                     * @property {string|null} [password] UpdateUserInfo password
                     */

                    /**
                     * Constructs a new UpdateUserInfo.
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest
                     * @classdesc Represents an UpdateUserInfo.
                     * @implements IUpdateUserInfo
                     * @constructor
                     * @param {com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo=} [properties] Properties to set
                     */
                    function UpdateUserInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateUserInfo password.
                     * @member {string} password
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo
                     * @instance
                     */
                    UpdateUserInfo.prototype.password = "";

                    /**
                     * Creates a new UpdateUserInfo instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo
                     * @static
                     * @param {com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo=} [properties] Properties to set
                     * @returns {com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo} UpdateUserInfo instance
                     */
                    UpdateUserInfo.create = function create(properties) {
                        return new UpdateUserInfo(properties);
                    };

                    /**
                     * Encodes the specified UpdateUserInfo message. Does not implicitly {@link com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo
                     * @static
                     * @param {com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo} message UpdateUserInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateUserInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.password != null && message.hasOwnProperty("password"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.password);
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateUserInfo message, length delimited. Does not implicitly {@link com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo
                     * @static
                     * @param {com.unblock.proto.UpdateUserPasswordRequest.IUpdateUserInfo} message UpdateUserInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateUserInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo} UpdateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateUserInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.password = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateUserInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo} UpdateUserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateUserInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateUserInfo message.
                     * @function verify
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateUserInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.password != null && message.hasOwnProperty("password"))
                            if (!$util.isString(message.password))
                                return "password: string expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateUserInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo} UpdateUserInfo
                     */
                    UpdateUserInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo)
                            return object;
                        var message = new $root.com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo();
                        if (object.password != null)
                            message.password = String(object.password);
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateUserInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo
                     * @static
                     * @param {com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo} message UpdateUserInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateUserInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.password = "";
                        if (message.password != null && message.hasOwnProperty("password"))
                            object.password = message.password;
                        return object;
                    };

                    /**
                     * Converts this UpdateUserInfo to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.UpdateUserPasswordRequest.UpdateUserInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateUserInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateUserInfo;
                })();

                return UpdateUserPasswordRequest;
            })();

            /**
             * Level enum.
             * @name com.unblock.proto.Level
             * @enum {string}
             * @property {number} LEVEL_UNSPECIFIED=0 LEVEL_UNSPECIFIED value
             * @property {number} DEFAULT=1 DEFAULT value
             * @property {number} ADMIN=2 ADMIN value
             */
            proto.Level = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "LEVEL_UNSPECIFIED"] = 0;
                values[valuesById[1] = "DEFAULT"] = 1;
                values[valuesById[2] = "ADMIN"] = 2;
                return values;
            })();

            proto.User = (function() {

                /**
                 * Properties of a User.
                 * @memberof com.unblock.proto
                 * @interface IUser
                 * @property {string|null} [id] User id
                 * @property {string|null} [username] User username
                 * @property {string|null} [email] User email
                 * @property {com.unblock.proto.Level|null} [level] User level
                 */

                /**
                 * Constructs a new User.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a User.
                 * @implements IUser
                 * @constructor
                 * @param {com.unblock.proto.IUser=} [properties] Properties to set
                 */
                function User(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * User id.
                 * @member {string} id
                 * @memberof com.unblock.proto.User
                 * @instance
                 */
                User.prototype.id = "";

                /**
                 * User username.
                 * @member {string} username
                 * @memberof com.unblock.proto.User
                 * @instance
                 */
                User.prototype.username = "";

                /**
                 * User email.
                 * @member {string} email
                 * @memberof com.unblock.proto.User
                 * @instance
                 */
                User.prototype.email = "";

                /**
                 * User level.
                 * @member {com.unblock.proto.Level} level
                 * @memberof com.unblock.proto.User
                 * @instance
                 */
                User.prototype.level = 0;

                /**
                 * Creates a new User instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.User
                 * @static
                 * @param {com.unblock.proto.IUser=} [properties] Properties to set
                 * @returns {com.unblock.proto.User} User instance
                 */
                User.create = function create(properties) {
                    return new User(properties);
                };

                /**
                 * Encodes the specified User message. Does not implicitly {@link com.unblock.proto.User.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.User
                 * @static
                 * @param {com.unblock.proto.IUser} message User message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                User.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.username != null && message.hasOwnProperty("username"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                    if (message.email != null && message.hasOwnProperty("email"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                    if (message.level != null && message.hasOwnProperty("level"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
                    return writer;
                };

                /**
                 * Encodes the specified User message, length delimited. Does not implicitly {@link com.unblock.proto.User.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.User
                 * @static
                 * @param {com.unblock.proto.IUser} message User message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                User.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a User message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.User
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.User} User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                User.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.User();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.username = reader.string();
                            break;
                        case 3:
                            message.email = reader.string();
                            break;
                        case 4:
                            message.level = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a User message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.User
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.User} User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                User.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a User message.
                 * @function verify
                 * @memberof com.unblock.proto.User
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                User.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.username != null && message.hasOwnProperty("username"))
                        if (!$util.isString(message.username))
                            return "username: string expected";
                    if (message.email != null && message.hasOwnProperty("email"))
                        if (!$util.isString(message.email))
                            return "email: string expected";
                    if (message.level != null && message.hasOwnProperty("level"))
                        switch (message.level) {
                        default:
                            return "level: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a User message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.User
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.User} User
                 */
                User.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.User)
                        return object;
                    var message = new $root.com.unblock.proto.User();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.username != null)
                        message.username = String(object.username);
                    if (object.email != null)
                        message.email = String(object.email);
                    switch (object.level) {
                    case "LEVEL_UNSPECIFIED":
                    case 0:
                        message.level = 0;
                        break;
                    case "DEFAULT":
                    case 1:
                        message.level = 1;
                        break;
                    case "ADMIN":
                    case 2:
                        message.level = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a User message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.User
                 * @static
                 * @param {com.unblock.proto.User} message User
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                User.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.username = "";
                        object.email = "";
                        object.level = options.enums === String ? "LEVEL_UNSPECIFIED" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.email != null && message.hasOwnProperty("email"))
                        object.email = message.email;
                    if (message.level != null && message.hasOwnProperty("level"))
                        object.level = options.enums === String ? $root.com.unblock.proto.Level[message.level] : message.level;
                    return object;
                };

                /**
                 * Converts this User to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.User
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                User.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return User;
            })();

            return proto;
        })();

        return unblock;
    })();

    return com;
})();

module.exports = $root;
