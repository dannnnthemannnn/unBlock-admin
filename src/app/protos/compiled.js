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

            proto.UpdateAttractionInfoRequest = (function() {

                /**
                 * Properties of an UpdateAttractionInfoRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateAttractionInfoRequest
                 * @property {string} [id] UpdateAttractionInfoRequest id
                 * @property {string} [neighborhoodId] UpdateAttractionInfoRequest neighborhoodId
                 * @property {string} [blockId] UpdateAttractionInfoRequest blockId
                 * @property {string} [name] UpdateAttractionInfoRequest name
                 */

                /**
                 * Constructs a new UpdateAttractionInfoRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateAttractionInfoRequest.
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
                 * @member {string}id
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @instance
                 */
                UpdateAttractionInfoRequest.prototype.id = "";

                /**
                 * UpdateAttractionInfoRequest neighborhoodId.
                 * @member {string}neighborhoodId
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @instance
                 */
                UpdateAttractionInfoRequest.prototype.neighborhoodId = "";

                /**
                 * UpdateAttractionInfoRequest blockId.
                 * @member {string}blockId
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @instance
                 */
                UpdateAttractionInfoRequest.prototype.blockId = "";

                /**
                 * UpdateAttractionInfoRequest name.
                 * @member {string}name
                 * @memberof com.unblock.proto.UpdateAttractionInfoRequest
                 * @instance
                 */
                UpdateAttractionInfoRequest.prototype.name = "";

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
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.neighborhoodId);
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.blockId);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
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
                            message.neighborhoodId = reader.string();
                            break;
                        case 3:
                            message.blockId = reader.string();
                            break;
                        case 4:
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
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        if (!$util.isString(message.neighborhoodId))
                            return "neighborhoodId: string expected";
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        if (!$util.isString(message.blockId))
                            return "blockId: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
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
                    if (object.neighborhoodId != null)
                        message.neighborhoodId = String(object.neighborhoodId);
                    if (object.blockId != null)
                        message.blockId = String(object.blockId);
                    if (object.name != null)
                        message.name = String(object.name);
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
                        object.neighborhoodId = "";
                        object.blockId = "";
                        object.name = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        object.neighborhoodId = message.neighborhoodId;
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        object.blockId = message.blockId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
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

                return UpdateAttractionInfoRequest;
            })();

            proto.UpdateAttractionLocationRequest = (function() {

                /**
                 * Properties of an UpdateAttractionLocationRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateAttractionLocationRequest
                 * @property {string} [id] UpdateAttractionLocationRequest id
                 * @property {number} [x] UpdateAttractionLocationRequest x
                 * @property {number} [y] UpdateAttractionLocationRequest y
                 */

                /**
                 * Constructs a new UpdateAttractionLocationRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateAttractionLocationRequest.
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
                 * @member {string}id
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @instance
                 */
                UpdateAttractionLocationRequest.prototype.id = "";

                /**
                 * UpdateAttractionLocationRequest x.
                 * @member {number}x
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @instance
                 */
                UpdateAttractionLocationRequest.prototype.x = 0;

                /**
                 * UpdateAttractionLocationRequest y.
                 * @member {number}y
                 * @memberof com.unblock.proto.UpdateAttractionLocationRequest
                 * @instance
                 */
                UpdateAttractionLocationRequest.prototype.y = 0;

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
                    if (message.x != null && message.hasOwnProperty("x"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.x);
                    if (message.y != null && message.hasOwnProperty("y"))
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.y);
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
                            message.x = reader.float();
                            break;
                        case 3:
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
                    if (message.x != null && message.hasOwnProperty("x"))
                        if (typeof message.x !== "number")
                            return "x: number expected";
                    if (message.y != null && message.hasOwnProperty("y"))
                        if (typeof message.y !== "number")
                            return "y: number expected";
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
                    if (object.x != null)
                        message.x = Number(object.x);
                    if (object.y != null)
                        message.y = Number(object.y);
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
                        object.x = 0;
                        object.y = 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.x != null && message.hasOwnProperty("x"))
                        object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                    if (message.y != null && message.hasOwnProperty("y"))
                        object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
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

            proto.CreateAttractionRequest = (function() {

                /**
                 * Properties of a CreateAttractionRequest.
                 * @memberof com.unblock.proto
                 * @interface ICreateAttractionRequest
                 * @property {string} [neighborhoodId] CreateAttractionRequest neighborhoodId
                 * @property {string} [blockId] CreateAttractionRequest blockId
                 * @property {string} [name] CreateAttractionRequest name
                 * @property {number} [x] CreateAttractionRequest x
                 * @property {number} [y] CreateAttractionRequest y
                 */

                /**
                 * Constructs a new CreateAttractionRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a CreateAttractionRequest.
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
                 * CreateAttractionRequest neighborhoodId.
                 * @member {string}neighborhoodId
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @instance
                 */
                CreateAttractionRequest.prototype.neighborhoodId = "";

                /**
                 * CreateAttractionRequest blockId.
                 * @member {string}blockId
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @instance
                 */
                CreateAttractionRequest.prototype.blockId = "";

                /**
                 * CreateAttractionRequest name.
                 * @member {string}name
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @instance
                 */
                CreateAttractionRequest.prototype.name = "";

                /**
                 * CreateAttractionRequest x.
                 * @member {number}x
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @instance
                 */
                CreateAttractionRequest.prototype.x = 0;

                /**
                 * CreateAttractionRequest y.
                 * @member {number}y
                 * @memberof com.unblock.proto.CreateAttractionRequest
                 * @instance
                 */
                CreateAttractionRequest.prototype.y = 0;

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
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.neighborhoodId);
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.blockId);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                    if (message.x != null && message.hasOwnProperty("x"))
                        writer.uint32(/* id 4, wireType 5 =*/37).float(message.x);
                    if (message.y != null && message.hasOwnProperty("y"))
                        writer.uint32(/* id 5, wireType 5 =*/45).float(message.y);
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
                            message.neighborhoodId = reader.string();
                            break;
                        case 2:
                            message.blockId = reader.string();
                            break;
                        case 3:
                            message.name = reader.string();
                            break;
                        case 4:
                            message.x = reader.float();
                            break;
                        case 5:
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
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        if (!$util.isString(message.neighborhoodId))
                            return "neighborhoodId: string expected";
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        if (!$util.isString(message.blockId))
                            return "blockId: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.x != null && message.hasOwnProperty("x"))
                        if (typeof message.x !== "number")
                            return "x: number expected";
                    if (message.y != null && message.hasOwnProperty("y"))
                        if (typeof message.y !== "number")
                            return "y: number expected";
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
                    if (object.neighborhoodId != null)
                        message.neighborhoodId = String(object.neighborhoodId);
                    if (object.blockId != null)
                        message.blockId = String(object.blockId);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.x != null)
                        message.x = Number(object.x);
                    if (object.y != null)
                        message.y = Number(object.y);
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
                        object.neighborhoodId = "";
                        object.blockId = "";
                        object.name = "";
                        object.x = 0;
                        object.y = 0;
                    }
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        object.neighborhoodId = message.neighborhoodId;
                    if (message.blockId != null && message.hasOwnProperty("blockId"))
                        object.blockId = message.blockId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.x != null && message.hasOwnProperty("x"))
                        object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                    if (message.y != null && message.hasOwnProperty("y"))
                        object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
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

                return CreateAttractionRequest;
            })();

            proto.Attraction = (function() {

                /**
                 * Properties of an Attraction.
                 * @memberof com.unblock.proto
                 * @interface IAttraction
                 * @property {string} [id] Attraction id
                 * @property {string} [name] Attraction name
                 * @property {number} [x] Attraction x
                 * @property {number} [y] Attraction y
                 */

                /**
                 * Constructs a new Attraction.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an Attraction.
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
                 * @member {string}id
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 */
                Attraction.prototype.id = "";

                /**
                 * Attraction name.
                 * @member {string}name
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 */
                Attraction.prototype.name = "";

                /**
                 * Attraction x.
                 * @member {number}x
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 */
                Attraction.prototype.x = 0;

                /**
                 * Attraction y.
                 * @member {number}y
                 * @memberof com.unblock.proto.Attraction
                 * @instance
                 */
                Attraction.prototype.y = 0;

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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.x != null && message.hasOwnProperty("x"))
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.x);
                    if (message.y != null && message.hasOwnProperty("y"))
                        writer.uint32(/* id 4, wireType 5 =*/37).float(message.y);
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
                            message.name = reader.string();
                            break;
                        case 3:
                            message.x = reader.float();
                            break;
                        case 4:
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
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.x != null && message.hasOwnProperty("x"))
                        if (typeof message.x !== "number")
                            return "x: number expected";
                    if (message.y != null && message.hasOwnProperty("y"))
                        if (typeof message.y !== "number")
                            return "y: number expected";
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
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.x != null)
                        message.x = Number(object.x);
                    if (object.y != null)
                        message.y = Number(object.y);
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
                        object.name = "";
                        object.x = 0;
                        object.y = 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.x != null && message.hasOwnProperty("x"))
                        object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                    if (message.y != null && message.hasOwnProperty("y"))
                        object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
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

            proto.UpdateBlockBoundsRequest = (function() {

                /**
                 * Properties of an UpdateBlockBoundsRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateBlockBoundsRequest
                 * @property {string} [id] UpdateBlockBoundsRequest id
                 * @property {com.unblock.proto.IBounds} [bounds] UpdateBlockBoundsRequest bounds
                 */

                /**
                 * Constructs a new UpdateBlockBoundsRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateBlockBoundsRequest.
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
                 * @member {string}id
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @instance
                 */
                UpdateBlockBoundsRequest.prototype.id = "";

                /**
                 * UpdateBlockBoundsRequest bounds.
                 * @member {(com.unblock.proto.IBounds|null|undefined)}bounds
                 * @memberof com.unblock.proto.UpdateBlockBoundsRequest
                 * @instance
                 */
                UpdateBlockBoundsRequest.prototype.bounds = null;

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
                    if (message.bounds != null && message.hasOwnProperty("bounds"))
                        $root.com.unblock.proto.Bounds.encode(message.bounds, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    if (message.bounds != null && message.hasOwnProperty("bounds")) {
                        var error = $root.com.unblock.proto.Bounds.verify(message.bounds);
                        if (error)
                            return "bounds." + error;
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
                    if (object.bounds != null) {
                        if (typeof object.bounds !== "object")
                            throw TypeError(".com.unblock.proto.UpdateBlockBoundsRequest.bounds: object expected");
                        message.bounds = $root.com.unblock.proto.Bounds.fromObject(object.bounds);
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
                        object.bounds = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.bounds != null && message.hasOwnProperty("bounds"))
                        object.bounds = $root.com.unblock.proto.Bounds.toObject(message.bounds, options);
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

                return UpdateBlockBoundsRequest;
            })();

            proto.UpdateBlockInfoRequest = (function() {

                /**
                 * Properties of an UpdateBlockInfoRequest.
                 * @memberof com.unblock.proto
                 * @interface IUpdateBlockInfoRequest
                 * @property {string} [id] UpdateBlockInfoRequest id
                 * @property {string} [neighborhoodId] UpdateBlockInfoRequest neighborhoodId
                 * @property {string} [name] UpdateBlockInfoRequest name
                 */

                /**
                 * Constructs a new UpdateBlockInfoRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents an UpdateBlockInfoRequest.
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
                 * @member {string}id
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @instance
                 */
                UpdateBlockInfoRequest.prototype.id = "";

                /**
                 * UpdateBlockInfoRequest neighborhoodId.
                 * @member {string}neighborhoodId
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @instance
                 */
                UpdateBlockInfoRequest.prototype.neighborhoodId = "";

                /**
                 * UpdateBlockInfoRequest name.
                 * @member {string}name
                 * @memberof com.unblock.proto.UpdateBlockInfoRequest
                 * @instance
                 */
                UpdateBlockInfoRequest.prototype.name = "";

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
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.neighborhoodId);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
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
                            message.neighborhoodId = reader.string();
                            break;
                        case 3:
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
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        if (!$util.isString(message.neighborhoodId))
                            return "neighborhoodId: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
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
                    if (object.neighborhoodId != null)
                        message.neighborhoodId = String(object.neighborhoodId);
                    if (object.name != null)
                        message.name = String(object.name);
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
                        object.neighborhoodId = "";
                        object.name = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        object.neighborhoodId = message.neighborhoodId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
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

                return UpdateBlockInfoRequest;
            })();

            proto.CreateBlockRequest = (function() {

                /**
                 * Properties of a CreateBlockRequest.
                 * @memberof com.unblock.proto
                 * @interface ICreateBlockRequest
                 * @property {string} [neighborhoodId] CreateBlockRequest neighborhoodId
                 * @property {string} [name] CreateBlockRequest name
                 * @property {com.unblock.proto.IBounds} [bounds] CreateBlockRequest bounds
                 */

                /**
                 * Constructs a new CreateBlockRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a CreateBlockRequest.
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
                 * @member {string}neighborhoodId
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @instance
                 */
                CreateBlockRequest.prototype.neighborhoodId = "";

                /**
                 * CreateBlockRequest name.
                 * @member {string}name
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @instance
                 */
                CreateBlockRequest.prototype.name = "";

                /**
                 * CreateBlockRequest bounds.
                 * @member {(com.unblock.proto.IBounds|null|undefined)}bounds
                 * @memberof com.unblock.proto.CreateBlockRequest
                 * @instance
                 */
                CreateBlockRequest.prototype.bounds = null;

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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.bounds != null && message.hasOwnProperty("bounds"))
                        $root.com.unblock.proto.Bounds.encode(message.bounds, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                            message.name = reader.string();
                            break;
                        case 4:
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
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.bounds != null) {
                        if (typeof object.bounds !== "object")
                            throw TypeError(".com.unblock.proto.CreateBlockRequest.bounds: object expected");
                        message.bounds = $root.com.unblock.proto.Bounds.fromObject(object.bounds);
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
                        object.name = "";
                        object.bounds = null;
                    }
                    if (message.neighborhoodId != null && message.hasOwnProperty("neighborhoodId"))
                        object.neighborhoodId = message.neighborhoodId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.bounds != null && message.hasOwnProperty("bounds"))
                        object.bounds = $root.com.unblock.proto.Bounds.toObject(message.bounds, options);
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

                return CreateBlockRequest;
            })();

            proto.Bounds = (function() {

                /**
                 * Properties of a Bounds.
                 * @memberof com.unblock.proto
                 * @interface IBounds
                 * @property {Array.<com.unblock.proto.Bounds.IPoint>} [points] Bounds points
                 */

                /**
                 * Constructs a new Bounds.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a Bounds.
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
                 * @member {Array.<com.unblock.proto.Bounds.IPoint>}points
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
                     * @property {number} [x] Point x
                     * @property {number} [y] Point y
                     */

                    /**
                     * Constructs a new Point.
                     * @memberof com.unblock.proto.Bounds
                     * @classdesc Represents a Point.
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
                     * @member {number}x
                     * @memberof com.unblock.proto.Bounds.Point
                     * @instance
                     */
                    Point.prototype.x = 0;

                    /**
                     * Point y.
                     * @member {number}y
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

            proto.Block = (function() {

                /**
                 * Properties of a Block.
                 * @memberof com.unblock.proto
                 * @interface IBlock
                 * @property {string} [id] Block id
                 * @property {string} [name] Block name
                 * @property {com.unblock.proto.IBounds} [bounds] Block bounds
                 */

                /**
                 * Constructs a new Block.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a Block.
                 * @constructor
                 * @param {com.unblock.proto.IBlock=} [properties] Properties to set
                 */
                function Block(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Block id.
                 * @member {string}id
                 * @memberof com.unblock.proto.Block
                 * @instance
                 */
                Block.prototype.id = "";

                /**
                 * Block name.
                 * @member {string}name
                 * @memberof com.unblock.proto.Block
                 * @instance
                 */
                Block.prototype.name = "";

                /**
                 * Block bounds.
                 * @member {(com.unblock.proto.IBounds|null|undefined)}bounds
                 * @memberof com.unblock.proto.Block
                 * @instance
                 */
                Block.prototype.bounds = null;

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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.bounds != null && message.hasOwnProperty("bounds"))
                        $root.com.unblock.proto.Bounds.encode(message.bounds, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                            message.name = reader.string();
                            break;
                        case 3:
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
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.bounds != null) {
                        if (typeof object.bounds !== "object")
                            throw TypeError(".com.unblock.proto.Block.bounds: object expected");
                        message.bounds = $root.com.unblock.proto.Bounds.fromObject(object.bounds);
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
                    if (options.defaults) {
                        object.id = "";
                        object.name = "";
                        object.bounds = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.bounds != null && message.hasOwnProperty("bounds"))
                        object.bounds = $root.com.unblock.proto.Bounds.toObject(message.bounds, options);
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

            proto.LoginRequest = (function() {

                /**
                 * Properties of a LoginRequest.
                 * @memberof com.unblock.proto
                 * @interface ILoginRequest
                 * @property {string} [usernameOrEmail] LoginRequest usernameOrEmail
                 * @property {string} [password] LoginRequest password
                 */

                /**
                 * Constructs a new LoginRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a LoginRequest.
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
                 * @member {string}usernameOrEmail
                 * @memberof com.unblock.proto.LoginRequest
                 * @instance
                 */
                LoginRequest.prototype.usernameOrEmail = "";

                /**
                 * LoginRequest password.
                 * @member {string}password
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

            proto.ListNeighborhoodResponse = (function() {

                /**
                 * Properties of a ListNeighborhoodResponse.
                 * @memberof com.unblock.proto
                 * @interface IListNeighborhoodResponse
                 * @property {Array.<com.unblock.proto.INeighborhood>} [neighborhoods] ListNeighborhoodResponse neighborhoods
                 */

                /**
                 * Constructs a new ListNeighborhoodResponse.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a ListNeighborhoodResponse.
                 * @constructor
                 * @param {com.unblock.proto.IListNeighborhoodResponse=} [properties] Properties to set
                 */
                function ListNeighborhoodResponse(properties) {
                    this.neighborhoods = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListNeighborhoodResponse neighborhoods.
                 * @member {Array.<com.unblock.proto.INeighborhood>}neighborhoods
                 * @memberof com.unblock.proto.ListNeighborhoodResponse
                 * @instance
                 */
                ListNeighborhoodResponse.prototype.neighborhoods = $util.emptyArray;

                /**
                 * Creates a new ListNeighborhoodResponse instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.ListNeighborhoodResponse
                 * @static
                 * @param {com.unblock.proto.IListNeighborhoodResponse=} [properties] Properties to set
                 * @returns {com.unblock.proto.ListNeighborhoodResponse} ListNeighborhoodResponse instance
                 */
                ListNeighborhoodResponse.create = function create(properties) {
                    return new ListNeighborhoodResponse(properties);
                };

                /**
                 * Encodes the specified ListNeighborhoodResponse message. Does not implicitly {@link com.unblock.proto.ListNeighborhoodResponse.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.ListNeighborhoodResponse
                 * @static
                 * @param {com.unblock.proto.IListNeighborhoodResponse} message ListNeighborhoodResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListNeighborhoodResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.neighborhoods != null && message.neighborhoods.length)
                        for (var i = 0; i < message.neighborhoods.length; ++i)
                            $root.com.unblock.proto.Neighborhood.encode(message.neighborhoods[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListNeighborhoodResponse message, length delimited. Does not implicitly {@link com.unblock.proto.ListNeighborhoodResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.ListNeighborhoodResponse
                 * @static
                 * @param {com.unblock.proto.IListNeighborhoodResponse} message ListNeighborhoodResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListNeighborhoodResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListNeighborhoodResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.ListNeighborhoodResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.ListNeighborhoodResponse} ListNeighborhoodResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListNeighborhoodResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.ListNeighborhoodResponse();
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
                 * Decodes a ListNeighborhoodResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.ListNeighborhoodResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.ListNeighborhoodResponse} ListNeighborhoodResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListNeighborhoodResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListNeighborhoodResponse message.
                 * @function verify
                 * @memberof com.unblock.proto.ListNeighborhoodResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListNeighborhoodResponse.verify = function verify(message) {
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
                 * Creates a ListNeighborhoodResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.ListNeighborhoodResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.ListNeighborhoodResponse} ListNeighborhoodResponse
                 */
                ListNeighborhoodResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.ListNeighborhoodResponse)
                        return object;
                    var message = new $root.com.unblock.proto.ListNeighborhoodResponse();
                    if (object.neighborhoods) {
                        if (!Array.isArray(object.neighborhoods))
                            throw TypeError(".com.unblock.proto.ListNeighborhoodResponse.neighborhoods: array expected");
                        message.neighborhoods = [];
                        for (var i = 0; i < object.neighborhoods.length; ++i) {
                            if (typeof object.neighborhoods[i] !== "object")
                                throw TypeError(".com.unblock.proto.ListNeighborhoodResponse.neighborhoods: object expected");
                            message.neighborhoods[i] = $root.com.unblock.proto.Neighborhood.fromObject(object.neighborhoods[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListNeighborhoodResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.ListNeighborhoodResponse
                 * @static
                 * @param {com.unblock.proto.ListNeighborhoodResponse} message ListNeighborhoodResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListNeighborhoodResponse.toObject = function toObject(message, options) {
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
                 * Converts this ListNeighborhoodResponse to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.ListNeighborhoodResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListNeighborhoodResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ListNeighborhoodResponse;
            })();

            proto.CreateNeighborhoodRequest = (function() {

                /**
                 * Properties of a CreateNeighborhoodRequest.
                 * @memberof com.unblock.proto
                 * @interface ICreateNeighborhoodRequest
                 * @property {string} [name] CreateNeighborhoodRequest name
                 */

                /**
                 * Constructs a new CreateNeighborhoodRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a CreateNeighborhoodRequest.
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
                 * CreateNeighborhoodRequest name.
                 * @member {string}name
                 * @memberof com.unblock.proto.CreateNeighborhoodRequest
                 * @instance
                 */
                CreateNeighborhoodRequest.prototype.name = "";

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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
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
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
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
                    if (object.name != null)
                        message.name = String(object.name);
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
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
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

                return CreateNeighborhoodRequest;
            })();

            proto.Neighborhood = (function() {

                /**
                 * Properties of a Neighborhood.
                 * @memberof com.unblock.proto
                 * @interface INeighborhood
                 * @property {string} [id] Neighborhood id
                 * @property {string} [name] Neighborhood name
                 * @property {Array.<com.unblock.proto.IBlock>} [blocks] Neighborhood blocks
                 * @property {string} [image] Neighborhood image
                 */

                /**
                 * Constructs a new Neighborhood.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a Neighborhood.
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
                 * @member {string}id
                 * @memberof com.unblock.proto.Neighborhood
                 * @instance
                 */
                Neighborhood.prototype.id = "";

                /**
                 * Neighborhood name.
                 * @member {string}name
                 * @memberof com.unblock.proto.Neighborhood
                 * @instance
                 */
                Neighborhood.prototype.name = "";

                /**
                 * Neighborhood blocks.
                 * @member {Array.<com.unblock.proto.IBlock>}blocks
                 * @memberof com.unblock.proto.Neighborhood
                 * @instance
                 */
                Neighborhood.prototype.blocks = $util.emptyArray;

                /**
                 * Neighborhood image.
                 * @member {string}image
                 * @memberof com.unblock.proto.Neighborhood
                 * @instance
                 */
                Neighborhood.prototype.image = "";

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
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.blocks != null && message.blocks.length)
                        for (var i = 0; i < message.blocks.length; ++i)
                            $root.com.unblock.proto.Block.encode(message.blocks[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.image != null && message.hasOwnProperty("image"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.image);
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
                            message.name = reader.string();
                            break;
                        case 3:
                            if (!(message.blocks && message.blocks.length))
                                message.blocks = [];
                            message.blocks.push($root.com.unblock.proto.Block.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            message.image = reader.string();
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
                    if (message.image != null && message.hasOwnProperty("image"))
                        if (!$util.isString(message.image))
                            return "image: string expected";
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
                    if (object.image != null)
                        message.image = String(object.image);
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
                        object.name = "";
                        object.image = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.blocks && message.blocks.length) {
                        object.blocks = [];
                        for (var j = 0; j < message.blocks.length; ++j)
                            object.blocks[j] = $root.com.unblock.proto.Block.toObject(message.blocks[j], options);
                    }
                    if (message.image != null && message.hasOwnProperty("image"))
                        object.image = message.image;
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

            proto.NewUserRequest = (function() {

                /**
                 * Properties of a NewUserRequest.
                 * @memberof com.unblock.proto
                 * @interface INewUserRequest
                 * @property {string} [username] NewUserRequest username
                 * @property {string} [password] NewUserRequest password
                 * @property {string} [email] NewUserRequest email
                 */

                /**
                 * Constructs a new NewUserRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a NewUserRequest.
                 * @constructor
                 * @param {com.unblock.proto.INewUserRequest=} [properties] Properties to set
                 */
                function NewUserRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NewUserRequest username.
                 * @member {string}username
                 * @memberof com.unblock.proto.NewUserRequest
                 * @instance
                 */
                NewUserRequest.prototype.username = "";

                /**
                 * NewUserRequest password.
                 * @member {string}password
                 * @memberof com.unblock.proto.NewUserRequest
                 * @instance
                 */
                NewUserRequest.prototype.password = "";

                /**
                 * NewUserRequest email.
                 * @member {string}email
                 * @memberof com.unblock.proto.NewUserRequest
                 * @instance
                 */
                NewUserRequest.prototype.email = "";

                /**
                 * Creates a new NewUserRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.NewUserRequest
                 * @static
                 * @param {com.unblock.proto.INewUserRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.NewUserRequest} NewUserRequest instance
                 */
                NewUserRequest.create = function create(properties) {
                    return new NewUserRequest(properties);
                };

                /**
                 * Encodes the specified NewUserRequest message. Does not implicitly {@link com.unblock.proto.NewUserRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.NewUserRequest
                 * @static
                 * @param {com.unblock.proto.INewUserRequest} message NewUserRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NewUserRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.username != null && message.hasOwnProperty("username"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                    if (message.password != null && message.hasOwnProperty("password"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                    if (message.email != null && message.hasOwnProperty("email"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                    return writer;
                };

                /**
                 * Encodes the specified NewUserRequest message, length delimited. Does not implicitly {@link com.unblock.proto.NewUserRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.NewUserRequest
                 * @static
                 * @param {com.unblock.proto.INewUserRequest} message NewUserRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NewUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NewUserRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.NewUserRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.NewUserRequest} NewUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NewUserRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.NewUserRequest();
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
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NewUserRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.NewUserRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.NewUserRequest} NewUserRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NewUserRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NewUserRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.NewUserRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NewUserRequest.verify = function verify(message) {
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
                    return null;
                };

                /**
                 * Creates a NewUserRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.NewUserRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.NewUserRequest} NewUserRequest
                 */
                NewUserRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.NewUserRequest)
                        return object;
                    var message = new $root.com.unblock.proto.NewUserRequest();
                    if (object.username != null)
                        message.username = String(object.username);
                    if (object.password != null)
                        message.password = String(object.password);
                    if (object.email != null)
                        message.email = String(object.email);
                    return message;
                };

                /**
                 * Creates a plain object from a NewUserRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.NewUserRequest
                 * @static
                 * @param {com.unblock.proto.NewUserRequest} message NewUserRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NewUserRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.username = "";
                        object.password = "";
                        object.email = "";
                    }
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    if (message.email != null && message.hasOwnProperty("email"))
                        object.email = message.email;
                    return object;
                };

                /**
                 * Converts this NewUserRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.NewUserRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NewUserRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NewUserRequest;
            })();

            return proto;
        })();

        return unblock;
    })();

    return com;
})();

module.exports = $root;
