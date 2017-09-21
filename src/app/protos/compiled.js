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

            proto.Block = (function() {

                /**
                 * Properties of a Block.
                 * @memberof com.unblock.proto
                 * @interface IBlock
                 * @property {string} [id] Block id
                 * @property {string} [name] Block name
                 * @property {com.unblock.proto.Block.IBounds} [bounds] Block bounds
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
                 * @member {(com.unblock.proto.Block.IBounds|null|undefined)}bounds
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
                        $root.com.unblock.proto.Block.Bounds.encode(message.bounds, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                            message.bounds = $root.com.unblock.proto.Block.Bounds.decode(reader, reader.uint32());
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
                        var error = $root.com.unblock.proto.Block.Bounds.verify(message.bounds);
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
                        message.bounds = $root.com.unblock.proto.Block.Bounds.fromObject(object.bounds);
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
                        object.bounds = $root.com.unblock.proto.Block.Bounds.toObject(message.bounds, options);
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

                Block.Bounds = (function() {

                    /**
                     * Properties of a Bounds.
                     * @memberof com.unblock.proto.Block
                     * @interface IBounds
                     * @property {Array.<com.unblock.proto.Block.Bounds.IPoint>} [points] Bounds points
                     */

                    /**
                     * Constructs a new Bounds.
                     * @memberof com.unblock.proto.Block
                     * @classdesc Represents a Bounds.
                     * @constructor
                     * @param {com.unblock.proto.Block.IBounds=} [properties] Properties to set
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
                     * @member {Array.<com.unblock.proto.Block.Bounds.IPoint>}points
                     * @memberof com.unblock.proto.Block.Bounds
                     * @instance
                     */
                    Bounds.prototype.points = $util.emptyArray;

                    /**
                     * Creates a new Bounds instance using the specified properties.
                     * @function create
                     * @memberof com.unblock.proto.Block.Bounds
                     * @static
                     * @param {com.unblock.proto.Block.IBounds=} [properties] Properties to set
                     * @returns {com.unblock.proto.Block.Bounds} Bounds instance
                     */
                    Bounds.create = function create(properties) {
                        return new Bounds(properties);
                    };

                    /**
                     * Encodes the specified Bounds message. Does not implicitly {@link com.unblock.proto.Block.Bounds.verify|verify} messages.
                     * @function encode
                     * @memberof com.unblock.proto.Block.Bounds
                     * @static
                     * @param {com.unblock.proto.Block.IBounds} message Bounds message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Bounds.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.points != null && message.points.length)
                            for (var i = 0; i < message.points.length; ++i)
                                $root.com.unblock.proto.Block.Bounds.Point.encode(message.points[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Bounds message, length delimited. Does not implicitly {@link com.unblock.proto.Block.Bounds.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.unblock.proto.Block.Bounds
                     * @static
                     * @param {com.unblock.proto.Block.IBounds} message Bounds message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Bounds.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Bounds message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.unblock.proto.Block.Bounds
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.unblock.proto.Block.Bounds} Bounds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Bounds.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.Block.Bounds();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.points && message.points.length))
                                    message.points = [];
                                message.points.push($root.com.unblock.proto.Block.Bounds.Point.decode(reader, reader.uint32()));
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
                     * @memberof com.unblock.proto.Block.Bounds
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.unblock.proto.Block.Bounds} Bounds
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
                     * @memberof com.unblock.proto.Block.Bounds
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
                                var error = $root.com.unblock.proto.Block.Bounds.Point.verify(message.points[i]);
                                if (error)
                                    return "points." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Bounds message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.unblock.proto.Block.Bounds
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.unblock.proto.Block.Bounds} Bounds
                     */
                    Bounds.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.unblock.proto.Block.Bounds)
                            return object;
                        var message = new $root.com.unblock.proto.Block.Bounds();
                        if (object.points) {
                            if (!Array.isArray(object.points))
                                throw TypeError(".com.unblock.proto.Block.Bounds.points: array expected");
                            message.points = [];
                            for (var i = 0; i < object.points.length; ++i) {
                                if (typeof object.points[i] !== "object")
                                    throw TypeError(".com.unblock.proto.Block.Bounds.points: object expected");
                                message.points[i] = $root.com.unblock.proto.Block.Bounds.Point.fromObject(object.points[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Bounds message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.unblock.proto.Block.Bounds
                     * @static
                     * @param {com.unblock.proto.Block.Bounds} message Bounds
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
                                object.points[j] = $root.com.unblock.proto.Block.Bounds.Point.toObject(message.points[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Bounds to JSON.
                     * @function toJSON
                     * @memberof com.unblock.proto.Block.Bounds
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Bounds.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    Bounds.Point = (function() {

                        /**
                         * Properties of a Point.
                         * @memberof com.unblock.proto.Block.Bounds
                         * @interface IPoint
                         * @property {number} [x] Point x
                         * @property {number} [y] Point y
                         */

                        /**
                         * Constructs a new Point.
                         * @memberof com.unblock.proto.Block.Bounds
                         * @classdesc Represents a Point.
                         * @constructor
                         * @param {com.unblock.proto.Block.Bounds.IPoint=} [properties] Properties to set
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
                         * @memberof com.unblock.proto.Block.Bounds.Point
                         * @instance
                         */
                        Point.prototype.x = 0;

                        /**
                         * Point y.
                         * @member {number}y
                         * @memberof com.unblock.proto.Block.Bounds.Point
                         * @instance
                         */
                        Point.prototype.y = 0;

                        /**
                         * Creates a new Point instance using the specified properties.
                         * @function create
                         * @memberof com.unblock.proto.Block.Bounds.Point
                         * @static
                         * @param {com.unblock.proto.Block.Bounds.IPoint=} [properties] Properties to set
                         * @returns {com.unblock.proto.Block.Bounds.Point} Point instance
                         */
                        Point.create = function create(properties) {
                            return new Point(properties);
                        };

                        /**
                         * Encodes the specified Point message. Does not implicitly {@link com.unblock.proto.Block.Bounds.Point.verify|verify} messages.
                         * @function encode
                         * @memberof com.unblock.proto.Block.Bounds.Point
                         * @static
                         * @param {com.unblock.proto.Block.Bounds.IPoint} message Point message or plain object to encode
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
                         * Encodes the specified Point message, length delimited. Does not implicitly {@link com.unblock.proto.Block.Bounds.Point.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.unblock.proto.Block.Bounds.Point
                         * @static
                         * @param {com.unblock.proto.Block.Bounds.IPoint} message Point message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Point.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Point message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.unblock.proto.Block.Bounds.Point
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.unblock.proto.Block.Bounds.Point} Point
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Point.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.Block.Bounds.Point();
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
                         * @memberof com.unblock.proto.Block.Bounds.Point
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.unblock.proto.Block.Bounds.Point} Point
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
                         * @memberof com.unblock.proto.Block.Bounds.Point
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
                         * @memberof com.unblock.proto.Block.Bounds.Point
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.unblock.proto.Block.Bounds.Point} Point
                         */
                        Point.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.unblock.proto.Block.Bounds.Point)
                                return object;
                            var message = new $root.com.unblock.proto.Block.Bounds.Point();
                            if (object.x != null)
                                message.x = Number(object.x);
                            if (object.y != null)
                                message.y = Number(object.y);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Point message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.unblock.proto.Block.Bounds.Point
                         * @static
                         * @param {com.unblock.proto.Block.Bounds.Point} message Point
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
                         * @memberof com.unblock.proto.Block.Bounds.Point
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

            proto.GetNeighborhoodRequest = (function() {

                /**
                 * Properties of a GetNeighborhoodRequest.
                 * @memberof com.unblock.proto
                 * @interface IGetNeighborhoodRequest
                 * @property {string} [id] GetNeighborhoodRequest id
                 */

                /**
                 * Constructs a new GetNeighborhoodRequest.
                 * @memberof com.unblock.proto
                 * @classdesc Represents a GetNeighborhoodRequest.
                 * @constructor
                 * @param {com.unblock.proto.IGetNeighborhoodRequest=} [properties] Properties to set
                 */
                function GetNeighborhoodRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetNeighborhoodRequest id.
                 * @member {string}id
                 * @memberof com.unblock.proto.GetNeighborhoodRequest
                 * @instance
                 */
                GetNeighborhoodRequest.prototype.id = "";

                /**
                 * Creates a new GetNeighborhoodRequest instance using the specified properties.
                 * @function create
                 * @memberof com.unblock.proto.GetNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.IGetNeighborhoodRequest=} [properties] Properties to set
                 * @returns {com.unblock.proto.GetNeighborhoodRequest} GetNeighborhoodRequest instance
                 */
                GetNeighborhoodRequest.create = function create(properties) {
                    return new GetNeighborhoodRequest(properties);
                };

                /**
                 * Encodes the specified GetNeighborhoodRequest message. Does not implicitly {@link com.unblock.proto.GetNeighborhoodRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.unblock.proto.GetNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.IGetNeighborhoodRequest} message GetNeighborhoodRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetNeighborhoodRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified GetNeighborhoodRequest message, length delimited. Does not implicitly {@link com.unblock.proto.GetNeighborhoodRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.unblock.proto.GetNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.IGetNeighborhoodRequest} message GetNeighborhoodRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetNeighborhoodRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetNeighborhoodRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.unblock.proto.GetNeighborhoodRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.unblock.proto.GetNeighborhoodRequest} GetNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetNeighborhoodRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.unblock.proto.GetNeighborhoodRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetNeighborhoodRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.unblock.proto.GetNeighborhoodRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.unblock.proto.GetNeighborhoodRequest} GetNeighborhoodRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetNeighborhoodRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetNeighborhoodRequest message.
                 * @function verify
                 * @memberof com.unblock.proto.GetNeighborhoodRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetNeighborhoodRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a GetNeighborhoodRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.unblock.proto.GetNeighborhoodRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.unblock.proto.GetNeighborhoodRequest} GetNeighborhoodRequest
                 */
                GetNeighborhoodRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.unblock.proto.GetNeighborhoodRequest)
                        return object;
                    var message = new $root.com.unblock.proto.GetNeighborhoodRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a GetNeighborhoodRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.unblock.proto.GetNeighborhoodRequest
                 * @static
                 * @param {com.unblock.proto.GetNeighborhoodRequest} message GetNeighborhoodRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetNeighborhoodRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this GetNeighborhoodRequest to JSON.
                 * @function toJSON
                 * @memberof com.unblock.proto.GetNeighborhoodRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetNeighborhoodRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetNeighborhoodRequest;
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
