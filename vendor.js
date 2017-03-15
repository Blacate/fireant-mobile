/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(37);
	
	__webpack_require__(39);
	
	__webpack_require__(40);
	
	__webpack_require__(41);
	
	__webpack_require__(43);
	
	__webpack_require__(44);
	
	__webpack_require__(47);
	
	__webpack_require__(49);
	
	__webpack_require__(51);
	
	__webpack_require__(53);
	
	__webpack_require__(55);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * https://github.com/es-shims/es5-shim
	 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
	 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
	 */
	
	// vim: ts=4 sts=4 sw=4 expandtab
	
	
	// UMD (Universal Module Definition)
	// see https://github.com/umdjs/umd/blob/master/returnExports.js
	// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
	;(function (root, factory) {
	    'use strict';
	    /*global define, exports, module */
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like enviroments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.returnExports = factory();
	    }
	}(this, function () {
	
	/**
	 * Brings an environment as close to ECMAScript 5 compliance
	 * as is possible with the facilities of erstwhile engines.
	 *
	 * Annotated ES5: http://es5.github.com/ (specific links below)
	 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
	 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
	 */
	
	// Shortcut to an often accessed properties, in order to avoid multiple
	// dereference that costs universally.
	var ArrayPrototype = Array.prototype;
	var ObjectPrototype = Object.prototype;
	var FunctionPrototype = Function.prototype;
	var StringPrototype = String.prototype;
	var NumberPrototype = Number.prototype;
	var array_slice = ArrayPrototype.slice;
	var array_splice = ArrayPrototype.splice;
	var array_push = ArrayPrototype.push;
	var array_unshift = ArrayPrototype.unshift;
	var call = FunctionPrototype.call;
	
	// Having a toString local variable name breaks in Opera so use to_string.
	var to_string = ObjectPrototype.toString;
	
	var isFunction = function (val) {
	    return to_string.call(val) === '[object Function]';
	};
	var isRegex = function (val) {
	    return to_string.call(val) === '[object RegExp]';
	};
	var isArray = function isArray(obj) {
	    return to_string.call(obj) === '[object Array]';
	};
	var isString = function isString(obj) {
	    return to_string.call(obj) === '[object String]';
	};
	var isArguments = function isArguments(value) {
	    var str = to_string.call(value);
	    var isArgs = str === '[object Arguments]';
	    if (!isArgs) {
	        isArgs = !isArray(value) &&
	          value !== null &&
	          typeof value === 'object' &&
	          typeof value.length === 'number' &&
	          value.length >= 0 &&
	          isFunction(value.callee);
	    }
	    return isArgs;
	};
	
	var supportsDescriptors = Object.defineProperty && (function () {
	    try {
	        Object.defineProperty({}, 'x', {});
	        return true;
	    } catch (e) { /* this is ES3 */
	        return false;
	    }
	}());
	
	// Define configurable, writable and non-enumerable props
	// if they don't exist.
	var defineProperty;
	if (supportsDescriptors) {
	    defineProperty = function (object, name, method, forceAssign) {
	        if (!forceAssign && (name in object)) { return; }
	        Object.defineProperty(object, name, {
	            configurable: true,
	            enumerable: false,
	            writable: true,
	            value: method
	        });
	    };
	} else {
	    defineProperty = function (object, name, method, forceAssign) {
	        if (!forceAssign && (name in object)) { return; }
	        object[name] = method;
	    };
	}
	var defineProperties = function (object, map, forceAssign) {
	    for (var name in map) {
	        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
	          defineProperty(object, name, map[name], forceAssign);
	        }
	    }
	};
	
	//
	// Util
	// ======
	//
	
	// ES5 9.4
	// http://es5.github.com/#x9.4
	// http://jsperf.com/to-integer
	
	function toInteger(num) {
	    var n = +num;
	    if (n !== n) { // isNaN
	        n = 0;
	    } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
	        n = (n > 0 || -1) * Math.floor(Math.abs(n));
	    }
	    return n;
	}
	
	function isPrimitive(input) {
	    var type = typeof input;
	    return input === null ||
	        type === 'undefined' ||
	        type === 'boolean' ||
	        type === 'number' ||
	        type === 'string';
	}
	
	function toPrimitive(input) {
	    var val, valueOf, toStr;
	    if (isPrimitive(input)) {
	        return input;
	    }
	    valueOf = input.valueOf;
	    if (isFunction(valueOf)) {
	        val = valueOf.call(input);
	        if (isPrimitive(val)) {
	            return val;
	        }
	    }
	    toStr = input.toString;
	    if (isFunction(toStr)) {
	        val = toStr.call(input);
	        if (isPrimitive(val)) {
	            return val;
	        }
	    }
	    throw new TypeError();
	}
	
	var ES = {
	    // ES5 9.9
	    // http://es5.github.com/#x9.9
	    ToObject: function (o) {
	        /*jshint eqnull: true */
	        if (o == null) { // this matches both null and undefined
	            throw new TypeError("can't convert " + o + ' to object');
	        }
	        return Object(o);
	    },
	    ToUint32: function ToUint32(x) {
	        return x >>> 0;
	    }
	};
	
	//
	// Function
	// ========
	//
	
	// ES-5 15.3.4.5
	// http://es5.github.com/#x15.3.4.5
	
	var Empty = function Empty() {};
	
	defineProperties(FunctionPrototype, {
	    bind: function bind(that) { // .length is 1
	        // 1. Let Target be the this value.
	        var target = this;
	        // 2. If IsCallable(Target) is false, throw a TypeError exception.
	        if (!isFunction(target)) {
	            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
	        }
	        // 3. Let A be a new (possibly empty) internal list of all of the
	        //   argument values provided after thisArg (arg1, arg2 etc), in order.
	        // XXX slicedArgs will stand in for "A" if used
	        var args = array_slice.call(arguments, 1); // for normal call
	        // 4. Let F be a new native ECMAScript object.
	        // 11. Set the [[Prototype]] internal property of F to the standard
	        //   built-in Function prototype object as specified in 15.3.3.1.
	        // 12. Set the [[Call]] internal property of F as described in
	        //   15.3.4.5.1.
	        // 13. Set the [[Construct]] internal property of F as described in
	        //   15.3.4.5.2.
	        // 14. Set the [[HasInstance]] internal property of F as described in
	        //   15.3.4.5.3.
	        var bound;
	        var binder = function () {
	
	            if (this instanceof bound) {
	                // 15.3.4.5.2 [[Construct]]
	                // When the [[Construct]] internal method of a function object,
	                // F that was created using the bind function is called with a
	                // list of arguments ExtraArgs, the following steps are taken:
	                // 1. Let target be the value of F's [[TargetFunction]]
	                //   internal property.
	                // 2. If target has no [[Construct]] internal method, a
	                //   TypeError exception is thrown.
	                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
	                //   property.
	                // 4. Let args be a new list containing the same values as the
	                //   list boundArgs in the same order followed by the same
	                //   values as the list ExtraArgs in the same order.
	                // 5. Return the result of calling the [[Construct]] internal
	                //   method of target providing args as the arguments.
	
	                var result = target.apply(
	                    this,
	                    args.concat(array_slice.call(arguments))
	                );
	                if (Object(result) === result) {
	                    return result;
	                }
	                return this;
	
	            } else {
	                // 15.3.4.5.1 [[Call]]
	                // When the [[Call]] internal method of a function object, F,
	                // which was created using the bind function is called with a
	                // this value and a list of arguments ExtraArgs, the following
	                // steps are taken:
	                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
	                //   property.
	                // 2. Let boundThis be the value of F's [[BoundThis]] internal
	                //   property.
	                // 3. Let target be the value of F's [[TargetFunction]] internal
	                //   property.
	                // 4. Let args be a new list containing the same values as the
	                //   list boundArgs in the same order followed by the same
	                //   values as the list ExtraArgs in the same order.
	                // 5. Return the result of calling the [[Call]] internal method
	                //   of target providing boundThis as the this value and
	                //   providing args as the arguments.
	
	                // equiv: target.call(this, ...boundArgs, ...args)
	                return target.apply(
	                    that,
	                    args.concat(array_slice.call(arguments))
	                );
	
	            }
	
	        };
	
	        // 15. If the [[Class]] internal property of Target is "Function", then
	        //     a. Let L be the length property of Target minus the length of A.
	        //     b. Set the length own property of F to either 0 or L, whichever is
	        //       larger.
	        // 16. Else set the length own property of F to 0.
	
	        var boundLength = Math.max(0, target.length - args.length);
	
	        // 17. Set the attributes of the length own property of F to the values
	        //   specified in 15.3.5.1.
	        var boundArgs = [];
	        for (var i = 0; i < boundLength; i++) {
	            boundArgs.push('$' + i);
	        }
	
	        // XXX Build a dynamic function with desired amount of arguments is the only
	        // way to set the length property of a function.
	        // In environments where Content Security Policies enabled (Chrome extensions,
	        // for ex.) all use of eval or Function costructor throws an exception.
	        // However in all of these environments Function.prototype.bind exists
	        // and so this code will never be executed.
	        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);
	
	        if (target.prototype) {
	            Empty.prototype = target.prototype;
	            bound.prototype = new Empty();
	            // Clean up dangling references.
	            Empty.prototype = null;
	        }
	
	        // TODO
	        // 18. Set the [[Extensible]] internal property of F to true.
	
	        // TODO
	        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
	        // 20. Call the [[DefineOwnProperty]] internal method of F with
	        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
	        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
	        //   false.
	        // 21. Call the [[DefineOwnProperty]] internal method of F with
	        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
	        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
	        //   and false.
	
	        // TODO
	        // NOTE Function objects created using Function.prototype.bind do not
	        // have a prototype property or the [[Code]], [[FormalParameters]], and
	        // [[Scope]] internal properties.
	        // XXX can't delete prototype in pure-js.
	
	        // 22. Return F.
	        return bound;
	    }
	});
	
	// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
	// us it in defining shortcuts.
	var owns = call.bind(ObjectPrototype.hasOwnProperty);
	
	//
	// Array
	// =====
	//
	
	// ES5 15.4.4.12
	// http://es5.github.com/#x15.4.4.12
	var spliceNoopReturnsEmptyArray = (function () {
	    var a = [1, 2];
	    var result = a.splice();
	    return a.length === 2 && isArray(result) && result.length === 0;
	}());
	defineProperties(ArrayPrototype, {
	    // Safari 5.0 bug where .splice() returns undefined
	    splice: function splice(start, deleteCount) {
	        if (arguments.length === 0) {
	            return [];
	        } else {
	            return array_splice.apply(this, arguments);
	        }
	    }
	}, spliceNoopReturnsEmptyArray);
	
	var spliceWorksWithEmptyObject = (function () {
	    var obj = {};
	    ArrayPrototype.splice.call(obj, 0, 0, 1);
	    return obj.length === 1;
	}());
	defineProperties(ArrayPrototype, {
	    splice: function splice(start, deleteCount) {
	        if (arguments.length === 0) { return []; }
	        var args = arguments;
	        this.length = Math.max(toInteger(this.length), 0);
	        if (arguments.length > 0 && typeof deleteCount !== 'number') {
	            args = array_slice.call(arguments);
	            if (args.length < 2) {
	                args.push(this.length - start);
	            } else {
	                args[1] = toInteger(deleteCount);
	            }
	        }
	        return array_splice.apply(this, args);
	    }
	}, !spliceWorksWithEmptyObject);
	
	// ES5 15.4.4.12
	// http://es5.github.com/#x15.4.4.13
	// Return len+argCount.
	// [bugfix, ielt8]
	// IE < 8 bug: [].unshift(0) === undefined but should be "1"
	var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
	defineProperties(ArrayPrototype, {
	    unshift: function () {
	        array_unshift.apply(this, arguments);
	        return this.length;
	    }
	}, hasUnshiftReturnValueBug);
	
	// ES5 15.4.3.2
	// http://es5.github.com/#x15.4.3.2
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
	defineProperties(Array, { isArray: isArray });
	
	// The IsCallable() check in the Array functions
	// has been replaced with a strict check on the
	// internal class of the object to trap cases where
	// the provided function was actually a regular
	// expression literal, which in V8 and
	// JavaScriptCore is a typeof "function".  Only in
	// V8 are regular expression literals permitted as
	// reduce parameters, so it is desirable in the
	// general case for the shim to match the more
	// strict and common behavior of rejecting regular
	// expressions.
	
	// ES5 15.4.4.18
	// http://es5.github.com/#x15.4.4.18
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach
	
	// Check failure of by-index access of string characters (IE < 9)
	// and failure of `0 in boxedString` (Rhino)
	var boxedString = Object('a');
	var splitString = boxedString[0] !== 'a' || !(0 in boxedString);
	
	var properlyBoxesContext = function properlyBoxed(method) {
	    // Check node 0.6.21 bug where third parameter is not boxed
	    var properlyBoxesNonStrict = true;
	    var properlyBoxesStrict = true;
	    if (method) {
	        method.call('foo', function (_, __, context) {
	            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
	        });
	
	        method.call([1], function () {
	            'use strict';
	            properlyBoxesStrict = typeof this === 'string';
	        }, 'x');
	    }
	    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
	};
	
	defineProperties(ArrayPrototype, {
	    forEach: function forEach(fun /*, thisp*/) {
	        var object = ES.ToObject(this),
	            self = splitString && isString(this) ? this.split('') : object,
	            thisp = arguments[1],
	            i = -1,
	            length = self.length >>> 0;
	
	        // If no callback function or if callback is not a callable function
	        if (!isFunction(fun)) {
	            throw new TypeError(); // TODO message
	        }
	
	        while (++i < length) {
	            if (i in self) {
	                // Invoke the callback function with call, passing arguments:
	                // context, property value, property key, thisArg object
	                // context
	                fun.call(thisp, self[i], i, object);
	            }
	        }
	    }
	}, !properlyBoxesContext(ArrayPrototype.forEach));
	
	// ES5 15.4.4.19
	// http://es5.github.com/#x15.4.4.19
	// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
	defineProperties(ArrayPrototype, {
	    map: function map(fun /*, thisp*/) {
	        var object = ES.ToObject(this),
	            self = splitString && isString(this) ? this.split('') : object,
	            length = self.length >>> 0,
	            result = Array(length),
	            thisp = arguments[1];
	
	        // If no callback function or if callback is not a callable function
	        if (!isFunction(fun)) {
	            throw new TypeError(fun + ' is not a function');
	        }
	
	        for (var i = 0; i < length; i++) {
	            if (i in self) {
	                result[i] = fun.call(thisp, self[i], i, object);
	            }
	        }
	        return result;
	    }
	}, !properlyBoxesContext(ArrayPrototype.map));
	
	// ES5 15.4.4.20
	// http://es5.github.com/#x15.4.4.20
	// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
	defineProperties(ArrayPrototype, {
	    filter: function filter(fun /*, thisp */) {
	        var object = ES.ToObject(this),
	            self = splitString && isString(this) ? this.split('') : object,
	            length = self.length >>> 0,
	            result = [],
	            value,
	            thisp = arguments[1];
	
	        // If no callback function or if callback is not a callable function
	        if (!isFunction(fun)) {
	            throw new TypeError(fun + ' is not a function');
	        }
	
	        for (var i = 0; i < length; i++) {
	            if (i in self) {
	                value = self[i];
	                if (fun.call(thisp, value, i, object)) {
	                    result.push(value);
	                }
	            }
	        }
	        return result;
	    }
	}, !properlyBoxesContext(ArrayPrototype.filter));
	
	// ES5 15.4.4.16
	// http://es5.github.com/#x15.4.4.16
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
	defineProperties(ArrayPrototype, {
	    every: function every(fun /*, thisp */) {
	        var object = ES.ToObject(this),
	            self = splitString && isString(this) ? this.split('') : object,
	            length = self.length >>> 0,
	            thisp = arguments[1];
	
	        // If no callback function or if callback is not a callable function
	        if (!isFunction(fun)) {
	            throw new TypeError(fun + ' is not a function');
	        }
	
	        for (var i = 0; i < length; i++) {
	            if (i in self && !fun.call(thisp, self[i], i, object)) {
	                return false;
	            }
	        }
	        return true;
	    }
	}, !properlyBoxesContext(ArrayPrototype.every));
	
	// ES5 15.4.4.17
	// http://es5.github.com/#x15.4.4.17
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
	defineProperties(ArrayPrototype, {
	    some: function some(fun /*, thisp */) {
	        var object = ES.ToObject(this),
	            self = splitString && isString(this) ? this.split('') : object,
	            length = self.length >>> 0,
	            thisp = arguments[1];
	
	        // If no callback function or if callback is not a callable function
	        if (!isFunction(fun)) {
	            throw new TypeError(fun + ' is not a function');
	        }
	
	        for (var i = 0; i < length; i++) {
	            if (i in self && fun.call(thisp, self[i], i, object)) {
	                return true;
	            }
	        }
	        return false;
	    }
	}, !properlyBoxesContext(ArrayPrototype.some));
	
	// ES5 15.4.4.21
	// http://es5.github.com/#x15.4.4.21
	// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
	var reduceCoercesToObject = false;
	if (ArrayPrototype.reduce) {
	    reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) { return list; }) === 'object';
	}
	defineProperties(ArrayPrototype, {
	    reduce: function reduce(fun /*, initial*/) {
	        var object = ES.ToObject(this),
	            self = splitString && isString(this) ? this.split('') : object,
	            length = self.length >>> 0;
	
	        // If no callback function or if callback is not a callable function
	        if (!isFunction(fun)) {
	            throw new TypeError(fun + ' is not a function');
	        }
	
	        // no value to return if no initial value and an empty array
	        if (!length && arguments.length === 1) {
	            throw new TypeError('reduce of empty array with no initial value');
	        }
	
	        var i = 0;
	        var result;
	        if (arguments.length >= 2) {
	            result = arguments[1];
	        } else {
	            do {
	                if (i in self) {
	                    result = self[i++];
	                    break;
	                }
	
	                // if array contains no values, no initial value to return
	                if (++i >= length) {
	                    throw new TypeError('reduce of empty array with no initial value');
	                }
	            } while (true);
	        }
	
	        for (; i < length; i++) {
	            if (i in self) {
	                result = fun.call(void 0, result, self[i], i, object);
	            }
	        }
	
	        return result;
	    }
	}, !reduceCoercesToObject);
	
	// ES5 15.4.4.22
	// http://es5.github.com/#x15.4.4.22
	// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
	var reduceRightCoercesToObject = false;
	if (ArrayPrototype.reduceRight) {
	    reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) { return list; }) === 'object';
	}
	defineProperties(ArrayPrototype, {
	    reduceRight: function reduceRight(fun /*, initial*/) {
	        var object = ES.ToObject(this),
	            self = splitString && isString(this) ? this.split('') : object,
	            length = self.length >>> 0;
	
	        // If no callback function or if callback is not a callable function
	        if (!isFunction(fun)) {
	            throw new TypeError(fun + ' is not a function');
	        }
	
	        // no value to return if no initial value, empty array
	        if (!length && arguments.length === 1) {
	            throw new TypeError('reduceRight of empty array with no initial value');
	        }
	
	        var result, i = length - 1;
	        if (arguments.length >= 2) {
	            result = arguments[1];
	        } else {
	            do {
	                if (i in self) {
	                    result = self[i--];
	                    break;
	                }
	
	                // if array contains no values, no initial value to return
	                if (--i < 0) {
	                    throw new TypeError('reduceRight of empty array with no initial value');
	                }
	            } while (true);
	        }
	
	        if (i < 0) {
	            return result;
	        }
	
	        do {
	            if (i in self) {
	                result = fun.call(void 0, result, self[i], i, object);
	            }
	        } while (i--);
	
	        return result;
	    }
	}, !reduceRightCoercesToObject);
	
	// ES5 15.4.4.14
	// http://es5.github.com/#x15.4.4.14
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
	var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
	defineProperties(ArrayPrototype, {
	    indexOf: function indexOf(sought /*, fromIndex */) {
	        var self = splitString && isString(this) ? this.split('') : ES.ToObject(this),
	            length = self.length >>> 0;
	
	        if (!length) {
	            return -1;
	        }
	
	        var i = 0;
	        if (arguments.length > 1) {
	            i = toInteger(arguments[1]);
	        }
	
	        // handle negative indices
	        i = i >= 0 ? i : Math.max(0, length + i);
	        for (; i < length; i++) {
	            if (i in self && self[i] === sought) {
	                return i;
	            }
	        }
	        return -1;
	    }
	}, hasFirefox2IndexOfBug);
	
	// ES5 15.4.4.15
	// http://es5.github.com/#x15.4.4.15
	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
	var hasFirefox2LastIndexOfBug = Array.prototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
	defineProperties(ArrayPrototype, {
	    lastIndexOf: function lastIndexOf(sought /*, fromIndex */) {
	        var self = splitString && isString(this) ? this.split('') : ES.ToObject(this),
	            length = self.length >>> 0;
	
	        if (!length) {
	            return -1;
	        }
	        var i = length - 1;
	        if (arguments.length > 1) {
	            i = Math.min(i, toInteger(arguments[1]));
	        }
	        // handle negative indices
	        i = i >= 0 ? i : length - Math.abs(i);
	        for (; i >= 0; i--) {
	            if (i in self && sought === self[i]) {
	                return i;
	            }
	        }
	        return -1;
	    }
	}, hasFirefox2LastIndexOfBug);
	
	//
	// Object
	// ======
	//
	
	// ES5 15.2.3.14
	// http://es5.github.com/#x15.2.3.14
	
	// http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
	var hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString'),
	    hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype'),
	    dontEnums = [
	        'toString',
	        'toLocaleString',
	        'valueOf',
	        'hasOwnProperty',
	        'isPrototypeOf',
	        'propertyIsEnumerable',
	        'constructor'
	    ],
	    dontEnumsLength = dontEnums.length;
	
	defineProperties(Object, {
	    keys: function keys(object) {
	        var isFn = isFunction(object),
	            isArgs = isArguments(object),
	            isObject = object !== null && typeof object === 'object',
	            isStr = isObject && isString(object);
	
	        if (!isObject && !isFn && !isArgs) {
	            throw new TypeError('Object.keys called on a non-object');
	        }
	
	        var theKeys = [];
	        var skipProto = hasProtoEnumBug && isFn;
	        if (isStr || isArgs) {
	            for (var i = 0; i < object.length; ++i) {
	                theKeys.push(String(i));
	            }
	        } else {
	            for (var name in object) {
	                if (!(skipProto && name === 'prototype') && owns(object, name)) {
	                    theKeys.push(String(name));
	                }
	            }
	        }
	
	        if (hasDontEnumBug) {
	            var ctor = object.constructor,
	                skipConstructor = ctor && ctor.prototype === object;
	            for (var j = 0; j < dontEnumsLength; j++) {
	                var dontEnum = dontEnums[j];
	                if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
	                    theKeys.push(dontEnum);
	                }
	            }
	        }
	        return theKeys;
	    }
	});
	
	var keysWorksWithArguments = Object.keys && (function () {
	    // Safari 5.0 bug
	    return Object.keys(arguments).length === 2;
	}(1, 2));
	var originalKeys = Object.keys;
	defineProperties(Object, {
	    keys: function keys(object) {
	        if (isArguments(object)) {
	            return originalKeys(ArrayPrototype.slice.call(object));
	        } else {
	            return originalKeys(object);
	        }
	    }
	}, !keysWorksWithArguments);
	
	//
	// Date
	// ====
	//
	
	// ES5 15.9.5.43
	// http://es5.github.com/#x15.9.5.43
	// This function returns a String value represent the instance in time
	// represented by this Date object. The format of the String is the Date Time
	// string format defined in 15.9.1.15. All fields are present in the String.
	// The time zone is always UTC, denoted by the suffix Z. If the time value of
	// this object is not a finite Number a RangeError exception is thrown.
	var negativeDate = -62198755200000;
	var negativeYearString = '-000001';
	var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
	
	defineProperties(Date.prototype, {
	    toISOString: function toISOString() {
	        var result, length, value, year, month;
	        if (!isFinite(this)) {
	            throw new RangeError('Date.prototype.toISOString called on non-finite value.');
	        }
	
	        year = this.getUTCFullYear();
	
	        month = this.getUTCMonth();
	        // see https://github.com/es-shims/es5-shim/issues/111
	        year += Math.floor(month / 12);
	        month = (month % 12 + 12) % 12;
	
	        // the date time string format is specified in 15.9.1.15.
	        result = [month + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
	        year = (
	            (year < 0 ? '-' : (year > 9999 ? '+' : '')) +
	            ('00000' + Math.abs(year)).slice(0 <= year && year <= 9999 ? -4 : -6)
	        );
	
	        length = result.length;
	        while (length--) {
	            value = result[length];
	            // pad months, days, hours, minutes, and seconds to have two
	            // digits.
	            if (value < 10) {
	                result[length] = '0' + value;
	            }
	        }
	        // pad milliseconds to have three digits.
	        return (
	            year + '-' + result.slice(0, 2).join('-') +
	            'T' + result.slice(2).join(':') + '.' +
	            ('000' + this.getUTCMilliseconds()).slice(-3) + 'Z'
	        );
	    }
	}, hasNegativeDateBug);
	
	
	// ES5 15.9.5.44
	// http://es5.github.com/#x15.9.5.44
	// This function provides a String representation of a Date object for use by
	// JSON.stringify (15.12.3).
	var dateToJSONIsSupported = false;
	try {
	    dateToJSONIsSupported = (
	        Date.prototype.toJSON &&
	        new Date(NaN).toJSON() === null &&
	        new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
	        Date.prototype.toJSON.call({ // generic
	            toISOString: function () {
	                return true;
	            }
	        })
	    );
	} catch (e) {
	}
	if (!dateToJSONIsSupported) {
	    Date.prototype.toJSON = function toJSON(key) {
	        // When the toJSON method is called with argument key, the following
	        // steps are taken:
	
	        // 1.  Let O be the result of calling ToObject, giving it the this
	        // value as its argument.
	        // 2. Let tv be toPrimitive(O, hint Number).
	        var o = Object(this),
	            tv = toPrimitive(o),
	            toISO;
	        // 3. If tv is a Number and is not finite, return null.
	        if (typeof tv === 'number' && !isFinite(tv)) {
	            return null;
	        }
	        // 4. Let toISO be the result of calling the [[Get]] internal method of
	        // O with argument "toISOString".
	        toISO = o.toISOString;
	        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
	        if (typeof toISO !== 'function') {
	            throw new TypeError('toISOString property is not callable');
	        }
	        // 6. Return the result of calling the [[Call]] internal method of
	        //  toISO with O as the this value and an empty argument list.
	        return toISO.call(o);
	
	        // NOTE 1 The argument is ignored.
	
	        // NOTE 2 The toJSON function is intentionally generic; it does not
	        // require that its this value be a Date object. Therefore, it can be
	        // transferred to other kinds of objects for use as a method. However,
	        // it does require that any such object have a toISOString method. An
	        // object is free to use the argument key to filter its
	        // stringification.
	    };
	}
	
	// ES5 15.9.4.2
	// http://es5.github.com/#x15.9.4.2
	// based on work shared by Daniel Friesen (dantman)
	// http://gist.github.com/303249
	var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
	var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z'));
	var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
	if (!Date.parse || doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
	    // XXX global assignment won't work in embeddings that use
	    // an alternate object for the context.
	    /*global Date: true */
	    Date = (function (NativeDate) {
	
	        // Date.length === 7
	        function Date(Y, M, D, h, m, s, ms) {
	            var length = arguments.length;
	            if (this instanceof NativeDate) {
	                var date = length === 1 && String(Y) === Y ? // isString(Y)
	                    // We explicitly pass it through parse:
	                    new NativeDate(Date.parse(Y)) :
	                    // We have to manually make calls depending on argument
	                    // length here
	                    length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) :
	                    length >= 6 ? new NativeDate(Y, M, D, h, m, s) :
	                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
	                    length >= 4 ? new NativeDate(Y, M, D, h) :
	                    length >= 3 ? new NativeDate(Y, M, D) :
	                    length >= 2 ? new NativeDate(Y, M) :
	                    length >= 1 ? new NativeDate(Y) :
	                                  new NativeDate();
	                // Prevent mixups with unfixed Date object
	                date.constructor = Date;
	                return date;
	            }
	            return NativeDate.apply(this, arguments);
	        }
	
	        // 15.9.1.15 Date Time String Format.
	        var isoDateExpression = new RegExp('^' +
	            '(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
	                                      // 6-digit extended year
	            '(?:-(\\d{2})' + // optional month capture
	            '(?:-(\\d{2})' + // optional day capture
	            '(?:' + // capture hours:minutes:seconds.milliseconds
	                'T(\\d{2})' + // hours capture
	                ':(\\d{2})' + // minutes capture
	                '(?:' + // optional :seconds.milliseconds
	                    ':(\\d{2})' + // seconds capture
	                    '(?:(\\.\\d{1,}))?' + // milliseconds capture
	                ')?' +
	            '(' + // capture UTC offset component
	                'Z|' + // UTC capture
	                '(?:' + // offset specifier +/-hours:minutes
	                    '([-+])' + // sign capture
	                    '(\\d{2})' + // hours offset capture
	                    ':(\\d{2})' + // minutes offset capture
	                ')' +
	            ')?)?)?)?' +
	        '$');
	
	        var months = [
	            0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365
	        ];
	
	        function dayFromMonth(year, month) {
	            var t = month > 1 ? 1 : 0;
	            return (
	                months[month] +
	                Math.floor((year - 1969 + t) / 4) -
	                Math.floor((year - 1901 + t) / 100) +
	                Math.floor((year - 1601 + t) / 400) +
	                365 * (year - 1970)
	            );
	        }
	
	        function toUTC(t) {
	            return Number(new NativeDate(1970, 0, 1, 0, 0, 0, t));
	        }
	
	        // Copy any custom methods a 3rd party library may have added
	        for (var key in NativeDate) {
	            Date[key] = NativeDate[key];
	        }
	
	        // Copy "native" methods explicitly; they may be non-enumerable
	        Date.now = NativeDate.now;
	        Date.UTC = NativeDate.UTC;
	        Date.prototype = NativeDate.prototype;
	        Date.prototype.constructor = Date;
	
	        // Upgrade Date.parse to handle simplified ISO 8601 strings
	        Date.parse = function parse(string) {
	            var match = isoDateExpression.exec(string);
	            if (match) {
	                // parse months, days, hours, minutes, seconds, and milliseconds
	                // provide default values if necessary
	                // parse the UTC offset component
	                var year = Number(match[1]),
	                    month = Number(match[2] || 1) - 1,
	                    day = Number(match[3] || 1) - 1,
	                    hour = Number(match[4] || 0),
	                    minute = Number(match[5] || 0),
	                    second = Number(match[6] || 0),
	                    millisecond = Math.floor(Number(match[7] || 0) * 1000),
	                    // When time zone is missed, local offset should be used
	                    // (ES 5.1 bug)
	                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
	                    isLocalTime = Boolean(match[4] && !match[8]),
	                    signOffset = match[9] === '-' ? 1 : -1,
	                    hourOffset = Number(match[10] || 0),
	                    minuteOffset = Number(match[11] || 0),
	                    result;
	                if (
	                    hour < (
	                        minute > 0 || second > 0 || millisecond > 0 ?
	                        24 : 25
	                    ) &&
	                    minute < 60 && second < 60 && millisecond < 1000 &&
	                    month > -1 && month < 12 && hourOffset < 24 &&
	                    minuteOffset < 60 && // detect invalid offsets
	                    day > -1 &&
	                    day < (
	                        dayFromMonth(year, month + 1) -
	                        dayFromMonth(year, month)
	                    )
	                ) {
	                    result = (
	                        (dayFromMonth(year, month) + day) * 24 +
	                        hour +
	                        hourOffset * signOffset
	                    ) * 60;
	                    result = (
	                        (result + minute + minuteOffset * signOffset) * 60 +
	                        second
	                    ) * 1000 + millisecond;
	                    if (isLocalTime) {
	                        result = toUTC(result);
	                    }
	                    if (-8.64e15 <= result && result <= 8.64e15) {
	                        return result;
	                    }
	                }
	                return NaN;
	            }
	            return NativeDate.parse.apply(this, arguments);
	        };
	
	        return Date;
	    }(Date));
	    /*global Date: false */
	}
	
	// ES5 15.9.4.4
	// http://es5.github.com/#x15.9.4.4
	if (!Date.now) {
	    Date.now = function now() {
	        return new Date().getTime();
	    };
	}
	
	
	//
	// Number
	// ======
	//
	
	// ES5.1 15.7.4.5
	// http://es5.github.com/#x15.7.4.5
	var hasToFixedBugs = NumberPrototype.toFixed && (
	  (0.00008).toFixed(3) !== '0.000' ||
	  (0.9).toFixed(0) !== '1' ||
	  (1.255).toFixed(2) !== '1.25' ||
	  (1000000000000000128).toFixed(0) !== '1000000000000000128'
	);
	
	var toFixedHelpers = {
	  base: 1e7,
	  size: 6,
	  data: [0, 0, 0, 0, 0, 0],
	  multiply: function multiply(n, c) {
	      var i = -1;
	      while (++i < toFixedHelpers.size) {
	          c += n * toFixedHelpers.data[i];
	          toFixedHelpers.data[i] = c % toFixedHelpers.base;
	          c = Math.floor(c / toFixedHelpers.base);
	      }
	  },
	  divide: function divide(n) {
	      var i = toFixedHelpers.size, c = 0;
	      while (--i >= 0) {
	          c += toFixedHelpers.data[i];
	          toFixedHelpers.data[i] = Math.floor(c / n);
	          c = (c % n) * toFixedHelpers.base;
	      }
	  },
	  numToString: function numToString() {
	      var i = toFixedHelpers.size;
	      var s = '';
	      while (--i >= 0) {
	          if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
	              var t = String(toFixedHelpers.data[i]);
	              if (s === '') {
	                  s = t;
	              } else {
	                  s += '0000000'.slice(0, 7 - t.length) + t;
	              }
	          }
	      }
	      return s;
	  },
	  pow: function pow(x, n, acc) {
	      return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
	  },
	  log: function log(x) {
	      var n = 0;
	      while (x >= 4096) {
	          n += 12;
	          x /= 4096;
	      }
	      while (x >= 2) {
	          n += 1;
	          x /= 2;
	      }
	      return n;
	  }
	};
	
	defineProperties(NumberPrototype, {
	    toFixed: function toFixed(fractionDigits) {
	        var f, x, s, m, e, z, j, k;
	
	        // Test for NaN and round fractionDigits down
	        f = Number(fractionDigits);
	        f = f !== f ? 0 : Math.floor(f);
	
	        if (f < 0 || f > 20) {
	            throw new RangeError('Number.toFixed called with invalid number of decimals');
	        }
	
	        x = Number(this);
	
	        // Test for NaN
	        if (x !== x) {
	            return 'NaN';
	        }
	
	        // If it is too big or small, return the string value of the number
	        if (x <= -1e21 || x >= 1e21) {
	            return String(x);
	        }
	
	        s = '';
	
	        if (x < 0) {
	            s = '-';
	            x = -x;
	        }
	
	        m = '0';
	
	        if (x > 1e-21) {
	            // 1e-21 < x < 1e21
	            // -70 < log2(x) < 70
	            e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
	            z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
	            z *= 0x10000000000000; // Math.pow(2, 52);
	            e = 52 - e;
	
	            // -18 < e < 122
	            // x = z / 2 ^ e
	            if (e > 0) {
	                toFixedHelpers.multiply(0, z);
	                j = f;
	
	                while (j >= 7) {
	                    toFixedHelpers.multiply(1e7, 0);
	                    j -= 7;
	                }
	
	                toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
	                j = e - 1;
	
	                while (j >= 23) {
	                    toFixedHelpers.divide(1 << 23);
	                    j -= 23;
	                }
	
	                toFixedHelpers.divide(1 << j);
	                toFixedHelpers.multiply(1, 1);
	                toFixedHelpers.divide(2);
	                m = toFixedHelpers.numToString();
	            } else {
	                toFixedHelpers.multiply(0, z);
	                toFixedHelpers.multiply(1 << (-e), 0);
	                m = toFixedHelpers.numToString() + '0.00000000000000000000'.slice(2, 2 + f);
	            }
	        }
	
	        if (f > 0) {
	            k = m.length;
	
	            if (k <= f) {
	                m = s + '0.0000000000000000000'.slice(0, f - k + 2) + m;
	            } else {
	                m = s + m.slice(0, k - f) + '.' + m.slice(k - f);
	            }
	        } else {
	            m = s + m;
	        }
	
	        return m;
	    }
	}, hasToFixedBugs);
	
	
	//
	// String
	// ======
	//
	
	// ES5 15.5.4.14
	// http://es5.github.com/#x15.5.4.14
	
	// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
	// Many browsers do not split properly with regular expressions or they
	// do not perform the split correctly under obscure conditions.
	// See http://blog.stevenlevithan.com/archives/cross-browser-split
	// I've tested in many browsers and this seems to cover the deviant ones:
	//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
	//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
	//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
	//       [undefined, "t", undefined, "e", ...]
	//    ''.split(/.?/) should be [], not [""]
	//    '.'.split(/()()/) should be ["."], not ["", "", "."]
	
	var string_split = StringPrototype.split;
	if (
	    'ab'.split(/(?:ab)*/).length !== 2 ||
	    '.'.split(/(.?)(.?)/).length !== 4 ||
	    'tesst'.split(/(s)*/)[1] === 't' ||
	    'test'.split(/(?:)/, -1).length !== 4 ||
	    ''.split(/.?/).length ||
	    '.'.split(/()()/).length > 1
	) {
	    (function () {
	        var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
	
	        StringPrototype.split = function (separator, limit) {
	            var string = this;
	            if (typeof separator === 'undefined' && limit === 0) {
	                return [];
	            }
	
	            // If `separator` is not a regex, use native split
	            if (to_string.call(separator) !== '[object RegExp]') {
	                return string_split.call(this, separator, limit);
	            }
	
	            var output = [],
	                flags = (separator.ignoreCase ? 'i' : '') +
	                        (separator.multiline ? 'm' : '') +
	                        (separator.extended ? 'x' : '') + // Proposed for ES6
	                        (separator.sticky ? 'y' : ''), // Firefox 3+
	                lastLastIndex = 0,
	                // Make `global` and avoid `lastIndex` issues by working with a copy
	                separator2, match, lastIndex, lastLength;
	            separator = new RegExp(separator.source, flags + 'g');
	            string += ''; // Type-convert
	            if (!compliantExecNpcg) {
	                // Doesn't need flags gy, but they don't hurt
	                separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
	            }
	            /* Values for `limit`, per the spec:
	             * If undefined: 4294967295 // Math.pow(2, 32) - 1
	             * If 0, Infinity, or NaN: 0
	             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	             * If other: Type-convert, then use the above rules
	             */
	            limit = typeof limit === 'undefined' ?
	                -1 >>> 0 : // Math.pow(2, 32) - 1
	                ES.ToUint32(limit);
	            while (match = separator.exec(string)) {
	                // `separator.lastIndex` is not reliable cross-browser
	                lastIndex = match.index + match[0].length;
	                if (lastIndex > lastLastIndex) {
	                    output.push(string.slice(lastLastIndex, match.index));
	                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
	                    // nonparticipating capturing groups
	                    if (!compliantExecNpcg && match.length > 1) {
	                        match[0].replace(separator2, function () {
	                            for (var i = 1; i < arguments.length - 2; i++) {
	                                if (typeof arguments[i] === 'undefined') {
	                                    match[i] = void 0;
	                                }
	                            }
	                        });
	                    }
	                    if (match.length > 1 && match.index < string.length) {
	                        array_push.apply(output, match.slice(1));
	                    }
	                    lastLength = match[0].length;
	                    lastLastIndex = lastIndex;
	                    if (output.length >= limit) {
	                        break;
	                    }
	                }
	                if (separator.lastIndex === match.index) {
	                    separator.lastIndex++; // Avoid an infinite loop
	                }
	            }
	            if (lastLastIndex === string.length) {
	                if (lastLength || !separator.test('')) {
	                    output.push('');
	                }
	            } else {
	                output.push(string.slice(lastLastIndex));
	            }
	            return output.length > limit ? output.slice(0, limit) : output;
	        };
	    }());
	
	// [bugfix, chrome]
	// If separator is undefined, then the result array contains just one String,
	// which is the this value (converted to a String). If limit is not undefined,
	// then the output array is truncated so that it contains no more than limit
	// elements.
	// "0".split(undefined, 0) -> []
	} else if ('0'.split(void 0, 0).length) {
	    StringPrototype.split = function split(separator, limit) {
	        if (typeof separator === 'undefined' && limit === 0) { return []; }
	        return string_split.call(this, separator, limit);
	    };
	}
	
	var str_replace = StringPrototype.replace;
	var replaceReportsGroupsCorrectly = (function () {
	    var groups = [];
	    'x'.replace(/x(.)?/g, function (match, group) {
	        groups.push(group);
	    });
	    return groups.length === 1 && typeof groups[0] === 'undefined';
	}());
	
	if (!replaceReportsGroupsCorrectly) {
	    StringPrototype.replace = function replace(searchValue, replaceValue) {
	        var isFn = isFunction(replaceValue);
	        var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
	        if (!isFn || !hasCapturingGroups) {
	            return str_replace.call(this, searchValue, replaceValue);
	        } else {
	            var wrappedReplaceValue = function (match) {
	                var length = arguments.length;
	                var originalLastIndex = searchValue.lastIndex;
	                searchValue.lastIndex = 0;
	                var args = searchValue.exec(match) || [];
	                searchValue.lastIndex = originalLastIndex;
	                args.push(arguments[length - 2], arguments[length - 1]);
	                return replaceValue.apply(this, args);
	            };
	            return str_replace.call(this, searchValue, wrappedReplaceValue);
	        }
	    };
	}
	
	// ECMA-262, 3rd B.2.3
	// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
	// non-normative section suggesting uniform semantics and it should be
	// normalized across all browsers
	// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
	var string_substr = StringPrototype.substr;
	var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
	defineProperties(StringPrototype, {
	    substr: function substr(start, length) {
	        return string_substr.call(
	            this,
	            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
	            length
	        );
	    }
	}, hasNegativeSubstrBug);
	
	// ES5 15.5.4.20
	// whitespace from: http://es5.github.io/#x15.5.4.20
	var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
	    '\u2029\uFEFF';
	var zeroWidth = '\u200b';
	var wsRegexChars = '[' + ws + ']';
	var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
	var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
	var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
	defineProperties(StringPrototype, {
	    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
	    // http://perfectionkills.com/whitespace-deviations/
	    trim: function trim() {
	        if (typeof this === 'undefined' || this === null) {
	            throw new TypeError("can't convert " + this + ' to object');
	        }
	        return String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
	    }
	}, hasTrimWhitespaceBug);
	
	// ES-5 15.1.2.2
	if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
	    /*global parseInt: true */
	    parseInt = (function (origParseInt) {
	        var hexRegex = /^0[xX]/;
	        return function parseIntES5(str, radix) {
	            str = String(str).trim();
	            if (!Number(radix)) {
	                radix = hexRegex.test(str) ? 16 : 10;
	            }
	            return origParseInt(str, radix);
	        };
	    }(parseInt));
	}
	
	}));


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * https://github.com/es-shims/es5-shim
	 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
	 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
	 */
	
	// vim: ts=4 sts=4 sw=4 expandtab
	
	//Add semicolon to prevent IIFE from being passed as argument to concated code.
	;
	
	// UMD (Universal Module Definition)
	// see https://github.com/umdjs/umd/blob/master/returnExports.js
	(function (root, factory) {
	    'use strict';
	    /*global define, exports, module */
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like enviroments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.returnExports = factory();
	  }
	}(this, function () {
	
	var call = Function.prototype.call;
	var prototypeOfObject = Object.prototype;
	var owns = call.bind(prototypeOfObject.hasOwnProperty);
	
	// If JS engine supports accessors creating shortcuts.
	var defineGetter;
	var defineSetter;
	var lookupGetter;
	var lookupSetter;
	var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
	if (supportsAccessors) {
	    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
	    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
	    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
	    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
	}
	
	// ES5 15.2.3.2
	// http://es5.github.com/#x15.2.3.2
	if (!Object.getPrototypeOf) {
	    // https://github.com/es-shims/es5-shim/issues#issue/2
	    // http://ejohn.org/blog/objectgetprototypeof/
	    // recommended by fschaefer on github
	    //
	    // sure, and webreflection says ^_^
	    // ... this will nerever possibly return null
	    // ... Opera Mini breaks here with infinite loops
	    Object.getPrototypeOf = function getPrototypeOf(object) {
	        var proto = object.__proto__;
	        if (proto || proto === null) {
	            return proto;
	        } else if (object.constructor) {
	            return object.constructor.prototype;
	        } else {
	            return prototypeOfObject;
	        }
	    };
	}
	
	//ES5 15.2.3.3
	//http://es5.github.com/#x15.2.3.3
	
	function doesGetOwnPropertyDescriptorWork(object) {
	    try {
	        object.sentinel = 0;
	        return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;
	    } catch (exception) {
	        // returns falsy
	    }
	}
	
	//check whether getOwnPropertyDescriptor works if it's given. Otherwise,
	//shim partially.
	if (Object.defineProperty) {
	    var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
	    var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined' ||
	    doesGetOwnPropertyDescriptorWork(document.createElement('div'));
	    if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
	        var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
	    }
	}
	
	if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
	    var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';
	
	    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
	        if ((typeof object !== 'object' && typeof object !== 'function') || object === null) {
	            throw new TypeError(ERR_NON_OBJECT + object);
	        }
	
	        // make a valiant attempt to use the real getOwnPropertyDescriptor
	        // for I8's DOM elements.
	        if (getOwnPropertyDescriptorFallback) {
	            try {
	                return getOwnPropertyDescriptorFallback.call(Object, object, property);
	            } catch (exception) {
	                // try the shim if the real one doesn't work
	            }
	        }
	
	        // If object does not owns property return undefined immediately.
	        if (!owns(object, property)) {
	            return;
	        }
	
	        // If object has a property then it's for sure both `enumerable` and
	        // `configurable`.
	        var descriptor = { enumerable: true, configurable: true };
	
	        // If JS engine supports accessor properties then property may be a
	        // getter or setter.
	        if (supportsAccessors) {
	            // Unfortunately `__lookupGetter__` will return a getter even
	            // if object has own non getter property along with a same named
	            // inherited getter. To avoid misbehavior we temporary remove
	            // `__proto__` so that `__lookupGetter__` will return getter only
	            // if it's owned by an object.
	            var prototype = object.__proto__;
	            var notPrototypeOfObject = object !== prototypeOfObject;
	            // avoid recursion problem, breaking in Opera Mini when
	            // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
	            // or any other Object.prototype accessor
	            if (notPrototypeOfObject) {
	                object.__proto__ = prototypeOfObject;
	            }
	
	            var getter = lookupGetter(object, property);
	            var setter = lookupSetter(object, property);
	
	            if (notPrototypeOfObject) {
	                // Once we have getter and setter we can put values back.
	                object.__proto__ = prototype;
	            }
	
	            if (getter || setter) {
	                if (getter) {
	                    descriptor.get = getter;
	                }
	                if (setter) {
	                    descriptor.set = setter;
	                }
	                // If it was accessor property we're done and return here
	                // in order to avoid adding `value` to the descriptor.
	                return descriptor;
	            }
	        }
	
	        // If we got this far we know that object has an own property that is
	        // not an accessor so we set it as a value and return descriptor.
	        descriptor.value = object[property];
	        descriptor.writable = true;
	        return descriptor;
	    };
	}
	
	// ES5 15.2.3.4
	// http://es5.github.com/#x15.2.3.4
	if (!Object.getOwnPropertyNames) {
	    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
	        return Object.keys(object);
	    };
	}
	
	// ES5 15.2.3.5
	// http://es5.github.com/#x15.2.3.5
	if (!Object.create) {
	
	    // Contributed by Brandon Benvie, October, 2012
	    var createEmpty;
	    var supportsProto = !({ __proto__: null } instanceof Object);
	                        // the following produces false positives
	                        // in Opera Mini => not a reliable check
	                        // Object.prototype.__proto__ === null
	    /*global document */
	    if (supportsProto || typeof document === 'undefined') {
	        createEmpty = function () {
	            return { __proto__: null };
	        };
	    } else {
	        // In old IE __proto__ can't be used to manually set `null`, nor does
	        // any other method exist to make an object that inherits from nothing,
	        // aside from Object.prototype itself. Instead, create a new global
	        // object and *steal* its Object.prototype and strip it bare. This is
	        // used as the prototype to create nullary objects.
	        createEmpty = function () {
	            var iframe = document.createElement('iframe');
	            var parent = document.body || document.documentElement;
	            iframe.style.display = 'none';
	            parent.appendChild(iframe);
	            iframe.src = 'javascript:';
	            var empty = iframe.contentWindow.Object.prototype;
	            parent.removeChild(iframe);
	            iframe = null;
	            delete empty.constructor;
	            delete empty.hasOwnProperty;
	            delete empty.propertyIsEnumerable;
	            delete empty.isPrototypeOf;
	            delete empty.toLocaleString;
	            delete empty.toString;
	            delete empty.valueOf;
	            empty.__proto__ = null;
	
	            function Empty() {}
	            Empty.prototype = empty;
	            // short-circuit future calls
	            createEmpty = function () {
	                return new Empty();
	            };
	            return new Empty();
	        };
	    }
	
	    Object.create = function create(prototype, properties) {
	
	        var object;
	        function Type() {}  // An empty constructor.
	
	        if (prototype === null) {
	            object = createEmpty();
	        } else {
	            if (typeof prototype !== 'object' && typeof prototype !== 'function') {
	                // In the native implementation `parent` can be `null`
	                // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
	                // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
	                // like they are in modern browsers. Using `Object.create` on DOM elements
	                // is...err...probably inappropriate, but the native version allows for it.
	                throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
	            }
	            Type.prototype = prototype;
	            object = new Type();
	            // IE has no built-in implementation of `Object.getPrototypeOf`
	            // neither `__proto__`, but this manually setting `__proto__` will
	            // guarantee that `Object.getPrototypeOf` will work as expected with
	            // objects created using `Object.create`
	            object.__proto__ = prototype;
	        }
	
	        if (properties !== void 0) {
	            Object.defineProperties(object, properties);
	        }
	
	        return object;
	    };
	}
	
	// ES5 15.2.3.6
	// http://es5.github.com/#x15.2.3.6
	
	// Patch for WebKit and IE8 standard mode
	// Designed by hax <hax.github.com>
	// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
	// IE8 Reference:
	//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
	//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
	// WebKit Bugs:
	//     https://bugs.webkit.org/show_bug.cgi?id=36423
	
	function doesDefinePropertyWork(object) {
	    try {
	        Object.defineProperty(object, 'sentinel', {});
	        return 'sentinel' in object;
	    } catch (exception) {
	        // returns falsy
	    }
	}
	
	// check whether defineProperty works if it's given. Otherwise,
	// shim partially.
	if (Object.defineProperty) {
	    var definePropertyWorksOnObject = doesDefinePropertyWork({});
	    var definePropertyWorksOnDom = typeof document === 'undefined' ||
	        doesDefinePropertyWork(document.createElement('div'));
	    if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
	        var definePropertyFallback = Object.defineProperty,
	            definePropertiesFallback = Object.defineProperties;
	    }
	}
	
	if (!Object.defineProperty || definePropertyFallback) {
	    var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';
	    var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';
	    var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';
	
	    Object.defineProperty = function defineProperty(object, property, descriptor) {
	        if ((typeof object !== 'object' && typeof object !== 'function') || object === null) {
	            throw new TypeError(ERR_NON_OBJECT_TARGET + object);
	        }
	        if ((typeof descriptor !== 'object' && typeof descriptor !== 'function') || descriptor === null) {
	            throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
	        }
	        // make a valiant attempt to use the real defineProperty
	        // for I8's DOM elements.
	        if (definePropertyFallback) {
	            try {
	                return definePropertyFallback.call(Object, object, property, descriptor);
	            } catch (exception) {
	                // try the shim if the real one doesn't work
	            }
	        }
	
	        // If it's a data property.
	        if (owns(descriptor, 'value')) {
	            // fail silently if 'writable', 'enumerable', or 'configurable'
	            // are requested but not supported
	            /*
	            // alternate approach:
	            if ( // can't implement these features; allow false but not true
	                !(owns(descriptor, 'writable') ? descriptor.writable : true) ||
	                !(owns(descriptor, 'enumerable') ? descriptor.enumerable : true) ||
	                !(owns(descriptor, 'configurable') ? descriptor.configurable : true)
	            )
	                throw new RangeError(
	                    'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
	                );
	            */
	
	            if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
	                // As accessors are supported only on engines implementing
	                // `__proto__` we can safely override `__proto__` while defining
	                // a property to make sure that we don't hit an inherited
	                // accessor.
	                var prototype = object.__proto__;
	                object.__proto__ = prototypeOfObject;
	                // Deleting a property anyway since getter / setter may be
	                // defined on object itself.
	                delete object[property];
	                object[property] = descriptor.value;
	                // Setting original `__proto__` back now.
	                object.__proto__ = prototype;
	            } else {
	                object[property] = descriptor.value;
	            }
	        } else {
	            if (!supportsAccessors) {
	                throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
	            }
	            // If we got that far then getters and setters can be defined !!
	            if (owns(descriptor, 'get')) {
	                defineGetter(object, property, descriptor.get);
	            }
	            if (owns(descriptor, 'set')) {
	                defineSetter(object, property, descriptor.set);
	            }
	        }
	        return object;
	    };
	}
	
	// ES5 15.2.3.7
	// http://es5.github.com/#x15.2.3.7
	if (!Object.defineProperties || definePropertiesFallback) {
	    Object.defineProperties = function defineProperties(object, properties) {
	        // make a valiant attempt to use the real defineProperties
	        if (definePropertiesFallback) {
	            try {
	                return definePropertiesFallback.call(Object, object, properties);
	            } catch (exception) {
	                // try the shim if the real one doesn't work
	            }
	        }
	
	        for (var property in properties) {
	            if (owns(properties, property) && property !== '__proto__') {
	                Object.defineProperty(object, property, properties[property]);
	            }
	        }
	        return object;
	    };
	}
	
	// ES5 15.2.3.8
	// http://es5.github.com/#x15.2.3.8
	if (!Object.seal) {
	    Object.seal = function seal(object) {
	        // this is misleading and breaks feature-detection, but
	        // allows "securable" code to "gracefully" degrade to working
	        // but insecure code.
	        return object;
	    };
	}
	
	// ES5 15.2.3.9
	// http://es5.github.com/#x15.2.3.9
	if (!Object.freeze) {
	    Object.freeze = function freeze(object) {
	        // this is misleading and breaks feature-detection, but
	        // allows "securable" code to "gracefully" degrade to working
	        // but insecure code.
	        return object;
	    };
	}
	
	// detect a Rhino bug and patch it
	try {
	    Object.freeze(function () {});
	} catch (exception) {
	    Object.freeze = (function freeze(freezeObject) {
	        return function freeze(object) {
	            if (typeof object === 'function') {
	                return object;
	            } else {
	                return freezeObject(object);
	            }
	        };
	    }(Object.freeze));
	}
	
	// ES5 15.2.3.10
	// http://es5.github.com/#x15.2.3.10
	if (!Object.preventExtensions) {
	    Object.preventExtensions = function preventExtensions(object) {
	        // this is misleading and breaks feature-detection, but
	        // allows "securable" code to "gracefully" degrade to working
	        // but insecure code.
	        return object;
	    };
	}
	
	// ES5 15.2.3.11
	// http://es5.github.com/#x15.2.3.11
	if (!Object.isSealed) {
	    Object.isSealed = function isSealed(object) {
	        return false;
	    };
	}
	
	// ES5 15.2.3.12
	// http://es5.github.com/#x15.2.3.12
	if (!Object.isFrozen) {
	    Object.isFrozen = function isFrozen(object) {
	        return false;
	    };
	}
	
	// ES5 15.2.3.13
	// http://es5.github.com/#x15.2.3.13
	if (!Object.isExtensible) {
	    Object.isExtensible = function isExtensible(object) {
	        // 1. If Type(O) is not Object throw a TypeError exception.
	        if (Object(object) !== object) {
	            throw new TypeError(); // TODO message
	        }
	        // 2. Return the Boolean value of the [[Extensible]] internal property of O.
	        var name = '';
	        while (owns(object, name)) {
	            name += '?';
	        }
	        object[name] = true;
	        var returnValue = owns(object, name);
	        delete object[name];
	        return returnValue;
	    };
	}
	
	}));


/***/ },
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
	var rAF = window.requestAnimationFrame	||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function (callback) { window.setTimeout(callback, 1000 / 60); };
	
	var utils = (function () {
		var me = {};
	
		var _elementStyle = document.createElement('div').style;
		var _vendor = (function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;
	
			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
			}
	
			return false;
		})();
	
		function _prefixStyle (style) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}
	
		me.getTime = Date.now || function getTime () { return new Date().getTime(); };
	
		me.extend = function (target, obj) {
			for ( var i in obj ) {
				target[i] = obj[i];
			}
		};
	
		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};
	
		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};
	
		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ?
				'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
				pointerEvent;
		};
	
		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;
	
			deceleration = deceleration === undefined ? 0.0006 : deceleration;
	
			destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
			duration = speed / deceleration;
	
			if ( destination < lowerMargin ) {
				destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if ( destination > 0 ) {
				destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}
	
			return {
				destination: Math.round(destination),
				duration: duration
			};
		};
	
		var _transform = _prefixStyle('transform');
	
		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});
	
		/*
		This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		- galaxy S2 is ok
	    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S3 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S4 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S5 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	   - galaxy S6 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	  */
		me.isBadAndroid = (function() {
			var appVersion = window.navigator.appVersion;
			// Android browser is not a chrome browser.
			if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
				var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
				if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
					return parseFloat(safariVersion[1]) < 535.19;
				} else {
					return true;
				}
			} else {
				return false;
			}
		})();
	
		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});
	
		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};
	
		me.addClass = function (e, c) {
			if ( me.hasClass(e, c) ) {
				return;
			}
	
			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};
	
		me.removeClass = function (e, c) {
			if ( !me.hasClass(e, c) ) {
				return;
			}
	
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};
	
		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;
	
			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084
	
			return {
				left: left,
				top: top
			};
		};
	
		me.preventDefaultException = function (el, exceptions) {
			for ( var i in exceptions ) {
				if ( exceptions[i].test(el[i]) ) {
					return true;
				}
			}
	
			return false;
		};
	
		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,
	
			mousedown: 2,
			mousemove: 2,
			mouseup: 2,
	
			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,
	
			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});
	
		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function (k) {
					return k * ( 2 - k );
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt( 1 - ( --k * k ) );
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function (k) {
					var b = 4;
					return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function (k) {
					if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
						return 7.5625 * k * k;
					} else if ( k < ( 2 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
					} else if ( k < ( 2.5 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
					} else {
						return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function (k) {
					var f = 0.22,
						e = 0.4;
	
					if ( k === 0 ) { return 0; }
					if ( k == 1 ) { return 1; }
	
					return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
				}
			}
		});
	
		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};
	
		me.click = function (e) {
			var target = e.target,
				ev;
	
			if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
				ev = document.createEvent('MouseEvents');
				ev.initMouseEvent('click', true, true, e.view, 1,
					target.screenX, target.screenY, target.clientX, target.clientY,
					e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
					0, null);
	
				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};
	
		return me;
	})();
	function IScroll (el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;		// cache style for better performance
	
		this.options = {
	
			zoomMin: 1,
			zoomMax: 4, startZoom: 1,
	
			resizeScrollbars: true,
	
			mouseWheelSpeed: 20,
	
			snapThreshold: 0.334,
	
	// INSERT POINT: OPTIONS
			disablePointer : !utils.hasPointer,
			disableTouch : utils.hasPointer || !utils.hasTouch,
			disableMouse : utils.hasPointer || utils.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,
	
			bounce: true,
			bounceTime: 600,
			bounceEasing: '',
	
			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
	
			HWCompositing: true,
			useTransition: true,
			useTransform: true,
			bindToWrapper: typeof window.onmousedown === "undefined"
		};
	
		for ( var i in options ) {
			this.options[i] = options[i];
		}
	
		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
	
		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;
	
		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
	
		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
	
		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
	
		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
	
		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
	
		if ( this.options.tap === true ) {
			this.options.tap = 'tap';
		}
	
		if ( this.options.shrinkScrollbars == 'scale' ) {
			this.options.useTransition = false;
		}
	
		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
	
	// INSERT POINT: NORMALIZATION
	
		// Some defaults
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};
	
		this.scale = Math.min(Math.max(this.options.startZoom, this.options.zoomMin), this.options.zoomMax);
	
	// INSERT POINT: DEFAULTS
	
		this._init();
		this.refresh();
	
		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}
	
	IScroll.prototype = {
		version: '5.2.0',
	
		_init: function () {
			this._initEvents();
	
			if ( this.options.zoom ) {
				this._initZoom();
			}
	
			if ( this.options.scrollbars || this.options.indicators ) {
				this._initIndicators();
			}
	
			if ( this.options.mouseWheel ) {
				this._initWheel();
			}
	
			if ( this.options.snap ) {
				this._initSnap();
			}
	
			if ( this.options.keyBindings ) {
				this._initKeys();
			}
	
	// INSERT POINT: _init
	
		},
	
		destroy: function () {
			this._initEvents(true);
			clearTimeout(this.resizeTimeout);
	 		this.resizeTimeout = null;
			this._execEvent('destroy');
		},
	
		_transitionEnd: function (e) {
			if ( e.target != this.scroller || !this.isInTransition ) {
				return;
			}
	
			this._transitionTime();
			if ( !this.resetPosition(this.options.bounceTime) ) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},
	
		_start: function (e) {
			// React to left mouse button only
			if ( utils.eventType[e.type] != 1 ) {
			  // for button property
			  // http://unixpapa.com/js/mouse.html
			  var button;
		    if (!e.which) {
		      /* IE case */
		      button = (e.button < 2) ? 0 :
		               ((e.button == 4) ? 1 : 2);
		    } else {
		      /* All others */
		      button = e.button;
		    }
				if ( button !== 0 ) {
					return;
				}
			}
	
			if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
				return;
			}
	
			if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}
	
			var point = e.touches ? e.touches[0] : e,
				pos;
	
			this.initiated	= utils.eventType[e.type];
			this.moved		= false;
			this.distX		= 0;
			this.distY		= 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;
	
			this.startTime = utils.getTime();
	
			if ( this.options.useTransition && this.isInTransition ) {
				this._transitionTime();
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if ( !this.options.useTransition && this.isAnimating ) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}
	
			this.startX    = this.x;
			this.startY    = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX    = point.pageX;
			this.pointY    = point.pageY;
	
			this._execEvent('beforeScrollStart');
		},
	
		_move: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
				e.preventDefault();
			}
	
			var point		= e.touches ? e.touches[0] : e,
				deltaX		= point.pageX - this.pointX,
				deltaY		= point.pageY - this.pointY,
				timestamp	= utils.getTime(),
				newX, newY,
				absDistX, absDistY;
	
			this.pointX		= point.pageX;
			this.pointY		= point.pageY;
	
			this.distX		+= deltaX;
			this.distY		+= deltaY;
			absDistX		= Math.abs(this.distX);
			absDistY		= Math.abs(this.distY);
	
			// We need to move at least 10 pixels for the scrolling to initiate
			if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
				return;
			}
	
			// If you are scrolling in one direction lock the other
			if ( !this.directionLocked && !this.options.freeScroll ) {
				if ( absDistX > absDistY + this.options.directionLockThreshold ) {
					this.directionLocked = 'h';		// lock horizontally
				} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
					this.directionLocked = 'v';		// lock vertically
				} else {
					this.directionLocked = 'n';		// no lock
				}
			}
	
			if ( this.directionLocked == 'h' ) {
				if ( this.options.eventPassthrough == 'vertical' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'horizontal' ) {
					this.initiated = false;
					return;
				}
	
				deltaY = 0;
			} else if ( this.directionLocked == 'v' ) {
				if ( this.options.eventPassthrough == 'horizontal' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'vertical' ) {
					this.initiated = false;
					return;
				}
	
				deltaX = 0;
			}
	
			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;
	
			newX = this.x + deltaX;
			newY = this.y + deltaY;
	
			// Slow down if outside of the boundaries
			if ( newX > 0 || newX < this.maxScrollX ) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if ( newY > 0 || newY < this.maxScrollY ) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}
	
			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
	
			if ( !this.moved ) {
				this._execEvent('scrollStart');
			}
	
			this.moved = true;
	
			this._translate(newX, newY);
	
	/* REPLACE START: _move */
	
			if ( timestamp - this.startTime > 300 ) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
			}
	
	/* REPLACE END: _move */
	
		},
	
		_end: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}
	
			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = '';
	
			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();
	
			// reset if we are outside of the boundaries
			if ( this.resetPosition(this.options.bounceTime) ) {
				return;
			}
	
			this.scrollTo(newX, newY);	// ensures that the last position is rounded
	
			// we scrolled less than 10 pixels
			if ( !this.moved ) {
				if ( this.options.tap ) {
					utils.tap(e, this.options.tap);
				}
	
				if ( this.options.click ) {
					utils.click(e);
				}
	
				this._execEvent('scrollCancel');
				return;
			}
	
			if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
				this._execEvent('flick');
				return;
			}
	
			// start momentum animation if needed
			if ( this.options.momentum && duration < 300 ) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}
	
	
			if ( this.options.snap ) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(newX - snap.x), 1000),
							Math.min(Math.abs(newY - snap.y), 1000)
						), 300);
				newX = snap.x;
				newY = snap.y;
	
				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing;
			}
	
	// INSERT POINT: _end
	
			if ( newX != this.x || newY != this.y ) {
				// change easing function when scroller goes out of the boundaries
				if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
					easing = utils.ease.quadratic;
				}
	
				this.scrollTo(newX, newY, time, easing);
				return;
			}
	
			this._execEvent('scrollEnd');
		},
	
		_resize: function () {
			var that = this;
	
			clearTimeout(this.resizeTimeout);
	
			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},
	
		resetPosition: function (time) {
			var x = this.x,
				y = this.y;
	
			time = time || 0;
	
			if ( !this.hasHorizontalScroll || this.x > 0 ) {
				x = 0;
			} else if ( this.x < this.maxScrollX ) {
				x = this.maxScrollX;
			}
	
			if ( !this.hasVerticalScroll || this.y > 0 ) {
				y = 0;
			} else if ( this.y < this.maxScrollY ) {
				y = this.maxScrollY;
			}
	
			if ( x == this.x && y == this.y ) {
				return false;
			}
	
			this.scrollTo(x, y, time, this.options.bounceEasing);
	
			return true;
		},
	
		disable: function () {
			this.enabled = false;
		},
	
		enable: function () {
			this.enabled = true;
		},
	
		refresh: function () {
			var rf = this.wrapper.offsetHeight;		// Force reflow
	
			this.wrapperWidth	= this.wrapper.clientWidth;
			this.wrapperHeight	= this.wrapper.clientHeight;
	
	/* REPLACE START: refresh */
		this.scrollerWidth	= Math.round(this.scroller.offsetWidth * this.scale);
		this.scrollerHeight	= Math.round(this.scroller.offsetHeight * this.scale);
	
		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;
	/* REPLACE END: refresh */
	
			this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;
	
			if ( !this.hasHorizontalScroll ) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}
	
			if ( !this.hasVerticalScroll ) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}
	
			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;
	
			this.wrapperOffset = utils.offset(this.wrapper);
	
			this._execEvent('refresh');
	
			this.resetPosition();
	
	// INSERT POINT: _refresh
	
		},
	
		on: function (type, fn) {
			if ( !this._events[type] ) {
				this._events[type] = [];
			}
	
			this._events[type].push(fn);
		},
	
		off: function (type, fn) {
			if ( !this._events[type] ) {
				return;
			}
	
			var index = this._events[type].indexOf(fn);
	
			if ( index > -1 ) {
				this._events[type].splice(index, 1);
			}
		},
	
		_execEvent: function (type) {
			if ( !this._events[type] ) {
				return;
			}
	
			var i = 0,
				l = this._events[type].length;
	
			if ( !l ) {
				return;
			}
	
			for ( ; i < l; i++ ) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},
	
		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;
	
			this.scrollTo(x, y, time, easing);
		},
	
		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;
	
			this.isInTransition = this.options.useTransition && time > 0;
			var transitionType = this.options.useTransition && easing.style;
			if ( !time || transitionType ) {
					if(transitionType) {
						this._transitionTimingFunction(easing.style);
						this._transitionTime(time);
					}
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},
	
		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);
	
			if ( !el ) {
				return;
			}
	
			var pos = utils.offset(el);
	
			pos.left -= this.wrapperOffset.left;
			pos.top  -= this.wrapperOffset.top;
	
			// if offsetX/Y are true we center the element to the screen
			if ( offsetX === true ) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if ( offsetY === true ) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}
	
			pos.left -= offsetX || 0;
			pos.top  -= offsetY || 0;
	
			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;
	
			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;
	
			this.scrollTo(pos.left, pos.top, time, easing);
		},
	
		_transitionTime: function (time) {
			time = time || 0;
	
			var durationProp = utils.style.transitionDuration;
			this.scrollerStyle[durationProp] = time + 'ms';
	
			if ( !time && utils.isBadAndroid ) {
				this.scrollerStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.scrollerStyle[durationProp] === '0.0001ms') {
						self.scrollerStyle[durationProp] = '0s';
					}
				});
			}
	
	
			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTime(time);
				}
			}
	
	
	// INSERT POINT: _transitionTime
	
		},
	
		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
	
	
			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTimingFunction(easing);
				}
			}
	
	
	// INSERT POINT: _transitionTimingFunction
	
		},
	
		_translate: function (x, y) {
			if ( this.options.useTransform ) {
	
	/* REPLACE START: _translate */			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ') ' + this.translateZ;/* REPLACE END: _translate */
	
			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}
	
			this.x = x;
			this.y = y;
	
	
		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].updatePosition();
			}
		}
	
	
	// INSERT POINT: _translate
	
		},
	
		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;
	
			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);
	
			if ( this.options.click ) {
				eventType(this.wrapper, 'click', this, true);
			}
	
			if ( !this.options.disableMouse ) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}
	
			if ( utils.hasPointer && !this.options.disablePointer ) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}
	
			if ( utils.hasTouch && !this.options.disableTouch ) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}
	
			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},
	
		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x, y;
	
			if ( this.options.useTransform ) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}
	
			return { x: x, y: y };
		},
		_initIndicators: function () {
			var interactive = this.options.interactiveScrollbars,
				customStyle = typeof this.options.scrollbars != 'string',
				indicators = [],
				indicator;
	
			var that = this;
	
			this.indicators = [];
	
			if ( this.options.scrollbars ) {
				// Vertical scrollbar
				if ( this.options.scrollY ) {
					indicator = {
						el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: false
					};
	
					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
	
				// Horizontal scrollbar
				if ( this.options.scrollX ) {
					indicator = {
						el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: false
					};
	
					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
			}
	
			if ( this.options.indicators ) {
				// TODO: check concat compatibility
				indicators = indicators.concat(this.options.indicators);
			}
	
			for ( var i = indicators.length; i--; ) {
				this.indicators.push( new Indicator(this, indicators[i]) );
			}
	
			// TODO: check if we can use array.map (wide compatibility and performance issues)
			function _indicatorsMap (fn) {
				if (that.indicators) {
					for ( var i = that.indicators.length; i--; ) {
						fn.call(that.indicators[i]);
					}
				}
			}
	
			if ( this.options.fadeScrollbars ) {
				this.on('scrollEnd', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});
	
				this.on('scrollCancel', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});
	
				this.on('scrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1);
					});
				});
	
				this.on('beforeScrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1, true);
					});
				});
			}
	
	
			this.on('refresh', function () {
				_indicatorsMap(function () {
					this.refresh();
				});
			});
	
			this.on('destroy', function () {
				_indicatorsMap(function () {
					this.destroy();
				});
	
				delete this.indicators;
			});
		},
	
		_initZoom: function () {
			this.scrollerStyle[utils.style.transformOrigin] = '0 0';
		},
	
		_zoomStart: function (e) {
			var c1 = Math.abs( e.touches[0].pageX - e.touches[1].pageX ),
				c2 = Math.abs( e.touches[0].pageY - e.touches[1].pageY );
	
			this.touchesDistanceStart = Math.sqrt(c1 * c1 + c2 * c2);
			this.startScale = this.scale;
	
			this.originX = Math.abs(e.touches[0].pageX + e.touches[1].pageX) / 2 + this.wrapperOffset.left - this.x;
			this.originY = Math.abs(e.touches[0].pageY + e.touches[1].pageY) / 2 + this.wrapperOffset.top - this.y;
	
			this._execEvent('zoomStart');
		},
	
		_zoom: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault ) {
				e.preventDefault();
			}
	
			var c1 = Math.abs( e.touches[0].pageX - e.touches[1].pageX ),
				c2 = Math.abs( e.touches[0].pageY - e.touches[1].pageY ),
				distance = Math.sqrt( c1 * c1 + c2 * c2 ),
				scale = 1 / this.touchesDistanceStart * distance * this.startScale,
				lastScale,
				x, y;
	
			this.scaled = true;
	
			if ( scale < this.options.zoomMin ) {
				scale = 0.5 * this.options.zoomMin * Math.pow(2.0, scale / this.options.zoomMin);
			} else if ( scale > this.options.zoomMax ) {
				scale = 2.0 * this.options.zoomMax * Math.pow(0.5, this.options.zoomMax / scale);
			}
	
			lastScale = scale / this.startScale;
			x = this.originX - this.originX * lastScale + this.startX;
			y = this.originY - this.originY * lastScale + this.startY;
	
			this.scale = scale;
	
			this.scrollTo(x, y, 0);
		},
	
		_zoomEnd: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault ) {
				e.preventDefault();
			}
	
			var newX, newY,
				lastScale;
	
			this.isInTransition = 0;
			this.initiated = 0;
	
			if ( this.scale > this.options.zoomMax ) {
				this.scale = this.options.zoomMax;
			} else if ( this.scale < this.options.zoomMin ) {
				this.scale = this.options.zoomMin;
			}
	
			// Update boundaries
			this.refresh();
	
			lastScale = this.scale / this.startScale;
	
			newX = this.originX - this.originX * lastScale + this.startX;
			newY = this.originY - this.originY * lastScale + this.startY;
	
			if ( newX > 0 ) {
				newX = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
			}
	
			if ( newY > 0 ) {
				newY = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
			}
	
			if ( this.x != newX || this.y != newY ) {
				this.scrollTo(newX, newY, this.options.bounceTime);
			}
	
			this.scaled = false;
	
			this._execEvent('zoomEnd');
		},
	
		zoom: function (scale, x, y, time) {
			if ( scale < this.options.zoomMin ) {
				scale = this.options.zoomMin;
			} else if ( scale > this.options.zoomMax ) {
				scale = this.options.zoomMax;
			}
	
			if ( scale == this.scale ) {
				return;
			}
	
			var relScale = scale / this.scale;
	
			x = x === undefined ? this.wrapperWidth / 2 : x;
			y = y === undefined ? this.wrapperHeight / 2 : y;
			time = time === undefined ? 300 : time;
	
			x = x + this.wrapperOffset.left - this.x;
			y = y + this.wrapperOffset.top - this.y;
	
			x = x - x * relScale + this.x;
			y = y - y * relScale + this.y;
	
			this.scale = scale;
	
			this.refresh();		// update boundaries
	
			if ( x > 0 ) {
				x = 0;
			} else if ( x < this.maxScrollX ) {
				x = this.maxScrollX;
			}
	
			if ( y > 0 ) {
				y = 0;
			} else if ( y < this.maxScrollY ) {
				y = this.maxScrollY;
			}
	
			this.scrollTo(x, y, time);
		},
	
		_wheelZoom: function (e) {
			var wheelDeltaY,
				deltaScale,
				that = this;
	
			// Execute the zoomEnd event after 400ms the wheel stopped scrolling
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				that._execEvent('zoomEnd');
			}, 400);
	
			if ( 'deltaX' in e ) {
				wheelDeltaY = -e.deltaY / Math.abs(e.deltaY);
			} else if ('wheelDeltaX' in e) {
				wheelDeltaY = e.wheelDeltaY / Math.abs(e.wheelDeltaY);
			} else if('wheelDelta' in e) {
				wheelDeltaY = e.wheelDelta / Math.abs(e.wheelDelta);
			} else if ('detail' in e) {
				wheelDeltaY = -e.detail / Math.abs(e.wheelDelta);
			} else {
				return;
			}
	
			deltaScale = this.scale + wheelDeltaY / 5;
	
			this.zoom(deltaScale, e.pageX, e.pageY, 0);
		},
	
		_initWheel: function () {
			utils.addEvent(this.wrapper, 'wheel', this);
			utils.addEvent(this.wrapper, 'mousewheel', this);
			utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
	
			this.on('destroy', function () {
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = null;
				utils.removeEvent(this.wrapper, 'wheel', this);
				utils.removeEvent(this.wrapper, 'mousewheel', this);
				utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
			});
		},
	
		_wheel: function (e) {
			if ( !this.enabled ) {
				return;
			}
	
			e.preventDefault();
	
			var wheelDeltaX, wheelDeltaY,
				newX, newY,
				that = this;
	
			if ( this.wheelTimeout === undefined ) {
				that._execEvent('scrollStart');
			}
	
			// Execute the scrollEnd event after 400ms the wheel stopped scrolling
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				if(!that.options.snap) {
					that._execEvent('scrollEnd');
				}
				that.wheelTimeout = undefined;
			}, 400);
	
			if ( 'deltaX' in e ) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY;
				}
			} else if ( 'wheelDeltaX' in e ) {
				wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
				wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
			} else if ( 'wheelDelta' in e ) {
				wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
			} else if ( 'detail' in e ) {
				wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
			} else {
				return;
			}
	
			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;
	
			if ( !this.hasVerticalScroll ) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0;
			}
	
			if ( this.options.snap ) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;
	
				if ( wheelDeltaX > 0 ) {
					newX--;
				} else if ( wheelDeltaX < 0 ) {
					newX++;
				}
	
				if ( wheelDeltaY > 0 ) {
					newY--;
				} else if ( wheelDeltaY < 0 ) {
					newY++;
				}
	
				this.goToPage(newX, newY);
	
				return;
			}
	
			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
	
			this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
			this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;
	
			if ( newX > 0 ) {
				newX = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
			}
	
			if ( newY > 0 ) {
				newY = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
			}
	
			this.scrollTo(newX, newY, 0);
	
	// INSERT POINT: _wheel
		},
	
		_initSnap: function () {
			this.currentPage = {};
	
			if ( typeof this.options.snap == 'string' ) {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap);
			}
	
			this.on('refresh', function () {
				var i = 0, l,
					m = 0, n,
					cx, cy,
					x = 0, y,
					stepX = this.options.snapStepX || this.wrapperWidth,
					stepY = this.options.snapStepY || this.wrapperHeight,
					el;
	
				this.pages = [];
	
				if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
					return;
				}
	
				if ( this.options.snap === true ) {
					cx = Math.round( stepX / 2 );
					cy = Math.round( stepY / 2 );
	
					while ( x > -this.scrollerWidth ) {
						this.pages[i] = [];
						l = 0;
						y = 0;
	
						while ( y > -this.scrollerHeight ) {
							this.pages[i][l] = {
								x: Math.max(x, this.maxScrollX),
								y: Math.max(y, this.maxScrollY),
								width: stepX,
								height: stepY,
								cx: x - cx,
								cy: y - cy
							};
	
							y -= stepY;
							l++;
						}
	
						x -= stepX;
						i++;
					}
				} else {
					el = this.options.snap;
					l = el.length;
					n = -1;
	
					for ( ; i < l; i++ ) {
						if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
							m = 0;
							n++;
						}
	
						if ( !this.pages[m] ) {
							this.pages[m] = [];
						}
	
						x = Math.max(-el[i].offsetLeft, this.maxScrollX);
						y = Math.max(-el[i].offsetTop, this.maxScrollY);
						cx = x - Math.round(el[i].offsetWidth / 2);
						cy = y - Math.round(el[i].offsetHeight / 2);
	
						this.pages[m][n] = {
							x: x,
							y: y,
							width: el[i].offsetWidth,
							height: el[i].offsetHeight,
							cx: cx,
							cy: cy
						};
	
						if ( x > this.maxScrollX ) {
							m++;
						}
					}
				}
	
				this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
	
				// Update snap threshold if needed
				if ( this.options.snapThreshold % 1 === 0 ) {
					this.snapThresholdX = this.options.snapThreshold;
					this.snapThresholdY = this.options.snapThreshold;
				} else {
					this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
					this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
				}
			});
	
			this.on('flick', function () {
				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.x - this.startX), 1000),
							Math.min(Math.abs(this.y - this.startY), 1000)
						), 300);
	
				this.goToPage(
					this.currentPage.pageX + this.directionX,
					this.currentPage.pageY + this.directionY,
					time
				);
			});
		},
	
		_nearestSnap: function (x, y) {
			if ( !this.pages.length ) {
				return { x: 0, y: 0, pageX: 0, pageY: 0 };
			}
	
			var i = 0,
				l = this.pages.length,
				m = 0;
	
			// Check if we exceeded the snap threshold
			if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
				Math.abs(y - this.absStartY) < this.snapThresholdY ) {
				return this.currentPage;
			}
	
			if ( x > 0 ) {
				x = 0;
			} else if ( x < this.maxScrollX ) {
				x = this.maxScrollX;
			}
	
			if ( y > 0 ) {
				y = 0;
			} else if ( y < this.maxScrollY ) {
				y = this.maxScrollY;
			}
	
			for ( ; i < l; i++ ) {
				if ( x >= this.pages[i][0].cx ) {
					x = this.pages[i][0].x;
					break;
				}
			}
	
			l = this.pages[i].length;
	
			for ( ; m < l; m++ ) {
				if ( y >= this.pages[0][m].cy ) {
					y = this.pages[0][m].y;
					break;
				}
			}
	
			if ( i == this.currentPage.pageX ) {
				i += this.directionX;
	
				if ( i < 0 ) {
					i = 0;
				} else if ( i >= this.pages.length ) {
					i = this.pages.length - 1;
				}
	
				x = this.pages[i][0].x;
			}
	
			if ( m == this.currentPage.pageY ) {
				m += this.directionY;
	
				if ( m < 0 ) {
					m = 0;
				} else if ( m >= this.pages[0].length ) {
					m = this.pages[0].length - 1;
				}
	
				y = this.pages[0][m].y;
			}
	
			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m
			};
		},
	
		goToPage: function (x, y, time, easing) {
			easing = easing || this.options.bounceEasing;
	
			if ( x >= this.pages.length ) {
				x = this.pages.length - 1;
			} else if ( x < 0 ) {
				x = 0;
			}
	
			if ( y >= this.pages[x].length ) {
				y = this.pages[x].length - 1;
			} else if ( y < 0 ) {
				y = 0;
			}
	
			var posX = this.pages[x][y].x,
				posY = this.pages[x][y].y;
	
			time = time === undefined ? this.options.snapSpeed || Math.max(
				Math.max(
					Math.min(Math.abs(posX - this.x), 1000),
					Math.min(Math.abs(posY - this.y), 1000)
				), 300) : time;
	
			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y
			};
	
			this.scrollTo(posX, posY, time, easing);
		},
	
		next: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
	
			x++;
	
			if ( x >= this.pages.length && this.hasVerticalScroll ) {
				x = 0;
				y++;
			}
	
			this.goToPage(x, y, time, easing);
		},
	
		prev: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
	
			x--;
	
			if ( x < 0 && this.hasVerticalScroll ) {
				x = 0;
				y--;
			}
	
			this.goToPage(x, y, time, easing);
		},
	
		_initKeys: function (e) {
			// default key bindings
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			var i;
	
			// if you give me characters I give you keycode
			if ( typeof this.options.keyBindings == 'object' ) {
				for ( i in this.options.keyBindings ) {
					if ( typeof this.options.keyBindings[i] == 'string' ) {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
					}
				}
			} else {
				this.options.keyBindings = {};
			}
	
			for ( i in keys ) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
			}
	
			utils.addEvent(window, 'keydown', this);
	
			this.on('destroy', function () {
				utils.removeEvent(window, 'keydown', this);
			});
		},
	
		_key: function (e) {
			if ( !this.enabled ) {
				return;
			}
	
			var snap = this.options.snap,	// we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				newY = snap ? this.currentPage.pageY : this.y,
				now = utils.getTime(),
				prevTime = this.keyTime || 0,
				acceleration = 0.250,
				pos;
	
			if ( this.options.useTransition && this.isInTransition ) {
				pos = this.getComputedPosition();
	
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false;
			}
	
			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
	
			switch ( e.keyCode ) {
				case this.options.keyBindings.pageUp:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX += snap ? 1 : this.wrapperWidth;
					} else {
						newY += snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.pageDown:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX -= snap ? 1 : this.wrapperWidth;
					} else {
						newY -= snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length-1 : this.maxScrollX;
					newY = snap ? this.pages[0].length-1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				default:
					return;
			}
	
			if ( snap ) {
				this.goToPage(newX, newY);
				return;
			}
	
			if ( newX > 0 ) {
				newX = 0;
				this.keyAcceleration = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
				this.keyAcceleration = 0;
			}
	
			if ( newY > 0 ) {
				newY = 0;
				this.keyAcceleration = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
				this.keyAcceleration = 0;
			}
	
			this.scrollTo(newX, newY, 0);
	
			this.keyTime = now;
		},
	
		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;
	
			function step () {
				var now = utils.getTime(),
					newX, newY,
					easing;
	
				if ( now >= destTime ) {
					that.isAnimating = false;
					that._translate(destX, destY);
	
					if ( !that.resetPosition(that.options.bounceTime) ) {
						that._execEvent('scrollEnd');
					}
	
					return;
				}
	
				now = ( now - startTime ) / duration;
				easing = easingFn(now);
				newX = ( destX - startX ) * easing + startX;
				newY = ( destY - startY ) * easing + startY;
				that._translate(newX, newY);
	
				if ( that.isAnimating ) {
					rAF(step);
				}
			}
	
			this.isAnimating = true;
			step();
		},
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
	
					if ( this.options.zoom && e.touches && e.touches.length > 1 ) {
						this._zoomStart(e);
					}
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					if ( this.options.zoom && e.touches && e.touches[1] ) {
						this._zoom(e);
						return;
					}
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					if ( this.scaled ) {
						this._zoomEnd(e);
						return;
					}
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					if ( this.options.wheelAction == 'zoom' ) {
						this._wheelZoom(e);
						return;	
					}
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
			}
		}
	
	};
	function createDefaultScrollbar (direction, interactive, type) {
		var scrollbar = document.createElement('div'),
			indicator = document.createElement('div');
	
		if ( type === true ) {
			scrollbar.style.cssText = 'position:absolute;z-index:9999';
			indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
		}
	
		indicator.className = 'iScrollIndicator';
	
		if ( direction == 'h' ) {
			if ( type === true ) {
				scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
				indicator.style.height = '100%';
			}
			scrollbar.className = 'iScrollHorizontalScrollbar';
		} else {
			if ( type === true ) {
				scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
				indicator.style.width = '100%';
			}
			scrollbar.className = 'iScrollVerticalScrollbar';
		}
	
		scrollbar.style.cssText += ';overflow:hidden';
	
		if ( !interactive ) {
			scrollbar.style.pointerEvents = 'none';
		}
	
		scrollbar.appendChild(indicator);
	
		return scrollbar;
	}
	
	function Indicator (scroller, options) {
		this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;
	
		this.options = {
			listenX: true,
			listenY: true,
			interactive: false,
			resize: true,
			defaultScrollbars: false,
			shrink: false,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0
		};
	
		for ( var i in options ) {
			this.options[i] = options[i];
		}
	
		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;
	
		if ( this.options.interactive ) {
			if ( !this.options.disableTouch ) {
				utils.addEvent(this.indicator, 'touchstart', this);
				utils.addEvent(window, 'touchend', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(this.indicator, 'mousedown', this);
				utils.addEvent(window, 'mouseup', this);
			}
		}
	
		if ( this.options.fade ) {
			this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
			var durationProp = utils.style.transitionDuration;
			this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
			// remove 0.0001ms
			var self = this;
			if(utils.isBadAndroid) {
				rAF(function() {
					if(self.wrapperStyle[durationProp] === '0.0001ms') {
						self.wrapperStyle[durationProp] = '0s';
					}
				});
			}
			this.wrapperStyle.opacity = '0';
		}
	}
	
	Indicator.prototype = {
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
			}
		},
	
		destroy: function () {
			if ( this.options.fadeScrollbars ) {
				clearTimeout(this.fadeTimeout);
				this.fadeTimeout = null;
			}
			if ( this.options.interactive ) {
				utils.removeEvent(this.indicator, 'touchstart', this);
				utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.removeEvent(this.indicator, 'mousedown', this);
	
				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);
	
				utils.removeEvent(window, 'touchend', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
				utils.removeEvent(window, 'mouseup', this);
			}
	
			if ( this.options.defaultScrollbars ) {
				this.wrapper.parentNode.removeChild(this.wrapper);
			}
		},
	
		_start: function (e) {
			var point = e.touches ? e.touches[0] : e;
	
			e.preventDefault();
			e.stopPropagation();
	
			this.transitionTime();
	
			this.initiated = true;
			this.moved = false;
			this.lastPointX	= point.pageX;
			this.lastPointY	= point.pageY;
	
			this.startTime	= utils.getTime();
	
			if ( !this.options.disableTouch ) {
				utils.addEvent(window, 'touchmove', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(window, 'mousemove', this);
			}
	
			this.scroller._execEvent('beforeScrollStart');
		},
	
		_move: function (e) {
			var point = e.touches ? e.touches[0] : e,
				deltaX, deltaY,
				newX, newY,
				timestamp = utils.getTime();
	
			if ( !this.moved ) {
				this.scroller._execEvent('scrollStart');
			}
	
			this.moved = true;
	
			deltaX = point.pageX - this.lastPointX;
			this.lastPointX = point.pageX;
	
			deltaY = point.pageY - this.lastPointY;
			this.lastPointY = point.pageY;
	
			newX = this.x + deltaX;
			newY = this.y + deltaY;
	
			this._pos(newX, newY);
	
	// INSERT POINT: indicator._move
	
			e.preventDefault();
			e.stopPropagation();
		},
	
		_end: function (e) {
			if ( !this.initiated ) {
				return;
			}
	
			this.initiated = false;
	
			e.preventDefault();
			e.stopPropagation();
	
			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);
	
			if ( this.scroller.options.snap ) {
				var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
	
				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.scroller.x - snap.x), 1000),
							Math.min(Math.abs(this.scroller.y - snap.y), 1000)
						), 300);
	
				if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
					this.scroller.directionX = 0;
					this.scroller.directionY = 0;
					this.scroller.currentPage = snap;
					this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
				}
			}
	
			if ( this.moved ) {
				this.scroller._execEvent('scrollEnd');
			}
		},
	
		transitionTime: function (time) {
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			this.indicatorStyle[durationProp] = time + 'ms';
	
			if ( !time && utils.isBadAndroid ) {
				this.indicatorStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.indicatorStyle[durationProp] === '0.0001ms') {
						self.indicatorStyle[durationProp] = '0s';
					}
				});
			}
		},
	
		transitionTimingFunction: function (easing) {
			this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
		},
	
		refresh: function () {
			this.transitionTime();
	
			if ( this.options.listenX && !this.options.listenY ) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
			} else if ( this.options.listenY && !this.options.listenX ) {
				this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
			} else {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
			}
	
			if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
				utils.addClass(this.wrapper, 'iScrollBothScrollbars');
				utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
	
				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '8px';
					} else {
						this.wrapper.style.bottom = '8px';
					}
				}
			} else {
				utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
				utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
	
				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '2px';
					} else {
						this.wrapper.style.bottom = '2px';
					}
				}
			}
	
			var r = this.wrapper.offsetHeight;	// force refresh
	
			if ( this.options.listenX ) {
				this.wrapperWidth = this.wrapper.clientWidth;
				if ( this.options.resize ) {
					this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
					this.indicatorStyle.width = this.indicatorWidth + 'px';
				} else {
					this.indicatorWidth = this.indicator.clientWidth;
				}
	
				this.maxPosX = this.wrapperWidth - this.indicatorWidth;
	
				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryX = -this.indicatorWidth + 8;
					this.maxBoundaryX = this.wrapperWidth - 8;
				} else {
					this.minBoundaryX = 0;
					this.maxBoundaryX = this.maxPosX;
				}
	
				this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
			}
	
			if ( this.options.listenY ) {
				this.wrapperHeight = this.wrapper.clientHeight;
				if ( this.options.resize ) {
					this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
					this.indicatorStyle.height = this.indicatorHeight + 'px';
				} else {
					this.indicatorHeight = this.indicator.clientHeight;
				}
	
				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
	
				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryY = -this.indicatorHeight + 8;
					this.maxBoundaryY = this.wrapperHeight - 8;
				} else {
					this.minBoundaryY = 0;
					this.maxBoundaryY = this.maxPosY;
				}
	
				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
			}
	
			this.updatePosition();
		},
	
		updatePosition: function () {
			var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
	
			if ( !this.options.ignoreBoundaries ) {
				if ( x < this.minBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth + x, 8);
						this.indicatorStyle.width = this.width + 'px';
					}
					x = this.minBoundaryX;
				} else if ( x > this.maxBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
						this.indicatorStyle.width = this.width + 'px';
						x = this.maxPosX + this.indicatorWidth - this.width;
					} else {
						x = this.maxBoundaryX;
					}
				} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
					this.width = this.indicatorWidth;
					this.indicatorStyle.width = this.width + 'px';
				}
	
				if ( y < this.minBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight + y * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
					}
					y = this.minBoundaryY;
				} else if ( y > this.maxBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
						y = this.maxPosY + this.indicatorHeight - this.height;
					} else {
						y = this.maxBoundaryY;
					}
				} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
					this.height = this.indicatorHeight;
					this.indicatorStyle.height = this.height + 'px';
				}
			}
	
			this.x = x;
			this.y = y;
	
			if ( this.scroller.options.useTransform ) {
				this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
			} else {
				this.indicatorStyle.left = x + 'px';
				this.indicatorStyle.top = y + 'px';
			}
		},
	
		_pos: function (x, y) {
			if ( x < 0 ) {
				x = 0;
			} else if ( x > this.maxPosX ) {
				x = this.maxPosX;
			}
	
			if ( y < 0 ) {
				y = 0;
			} else if ( y > this.maxPosY ) {
				y = this.maxPosY;
			}
	
			x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
			y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
	
			this.scroller.scrollTo(x, y);
		},
	
		fade: function (val, hold) {
			if ( hold && !this.visible ) {
				return;
			}
	
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
	
			var time = val ? 250 : 500,
				delay = val ? 0 : 300;
	
			val = val ? '1' : '0';
	
			this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
	
			this.fadeTimeout = setTimeout((function (val) {
				this.wrapperStyle.opacity = val;
				this.visible = +val;
			}).bind(this, val), delay);
		}
	};
	
	IScroll.utils = utils;
	
	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = IScroll;
	} else if ( true ) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return IScroll; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.IScroll = IScroll;
	}
	
	})(window, document, Math);


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45)(__webpack_require__(46))

/***/ },
/* 45 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "/**\n* @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed\n*/\n!function(a,b){function c(a,b){var c=a.createElement(\"p\"),d=a.getElementsByTagName(\"head\")[0]||a.documentElement;return c.innerHTML=\"x<style>\"+b+\"</style>\",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return\"string\"==typeof a?a.split(\" \"):a}function e(a,b){var c=t.elements;\"string\"!=typeof c&&(c=c.join(\" \")),\"string\"!=typeof a&&(a=a.join(\" \")),t.elements=c+\" \"+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function(\"h,f\",\"return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(\"+d().join().replace(/[\\w\\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c(\"'+a+'\")'})+\");return n}\")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,\"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}\")),l||i(a,d),a}var k,l,m=\"3.7.2\",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q=\"_html5shiv\",r=0,s={};!function(){try{var a=b.createElement(\"a\");a.innerHTML=\"<xyz></xyz>\",k=\"hidden\"in a,l=1==a.childNodes.length||function(){b.createElement(\"a\");var a=b.createDocumentFragment();return\"undefined\"==typeof a.cloneNode||\"undefined\"==typeof a.createDocumentFragment||\"undefined\"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||\"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video\",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:\"default\",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b)}(this,document);"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45)(__webpack_require__(48))

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "/*\n AngularJS v1.4.2\n (c) 2010-2015 Google, Inc. http://angularjs.org\n License: MIT\n*/\n(function(O,U,t){'use strict';function J(b){return function(){var a=arguments[0],c;c=\"[\"+(b?b+\":\":\"\")+a+\"] http://errors.angularjs.org/1.4.2/\"+(b?b+\"/\":\"\")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?\"?\":\"&\")+\"p\"+(a-1)+\"=\";var d=encodeURIComponent,e;e=arguments[a];e=\"function\"==typeof e?e.toString().replace(/ \\{[\\s\\S]*$/,\"\"):\"undefined\"==typeof e?\"undefined\":\"string\"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ea(b){if(null==b||Wa(b))return!1;var a=\"length\"in Object(b)&&b.length;\nreturn b.nodeType===qa&&a?!0:L(b)||G(b)||0===a||\"number\"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(z(b))for(d in b)\"prototype\"==d||\"length\"==d||\"name\"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(G(b)||Ea(b)){var f=\"object\"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(nc(b))for(d in b)a.call(c,b[d],d,b);else if(\"function\"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&\na.call(c,b[d],d,b);else for(d in b)Xa.call(b,d)&&a.call(c,b[d],d,b);return b}function oc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function pc(b){return function(a,c){b(c,a)}}function Ud(){return++nb}function qc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Nb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(H(g)||z(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var n=h[l],r=g[n];c&&H(r)?aa(r)?b[n]=new Date(r.valueOf()):(H(b[n])||\n(b[n]=G(r)?[]:{}),Nb(b[n],[r],!0)):b[n]=r}}qc(b,d);return b}function P(b){return Nb(b,za.call(arguments,1),!1)}function Vd(b){return Nb(b,za.call(arguments,1),!0)}function W(b){return parseInt(b,10)}function Ob(b,a){return P(Object.create(b),a)}function v(){}function Ya(b){return b}function ra(b){return function(){return b}}function rc(b){return z(b.toString)&&b.toString!==Object.prototype.toString}function A(b){return\"undefined\"===typeof b}function w(b){return\"undefined\"!==typeof b}function H(b){return null!==\nb&&\"object\"===typeof b}function nc(b){return null!==b&&\"object\"===typeof b&&!sc(b)}function L(b){return\"string\"===typeof b}function V(b){return\"number\"===typeof b}function aa(b){return\"[object Date]\"===sa.call(b)}function z(b){return\"function\"===typeof b}function Za(b){return\"[object RegExp]\"===sa.call(b)}function Wa(b){return b&&b.window===b}function $a(b){return b&&b.$evalAsync&&b.$watch}function ab(b){return\"boolean\"===typeof b}function tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}\nfunction Wd(b){var a={};b=b.split(\",\");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return M(b.nodeName||b[0]&&b[0].nodeName)}function bb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function fa(b,a,c,d){if(Wa(b)||$a(b))throw Fa(\"cpws\");if(uc.test(sa.call(a)))throw Fa(\"cpta\");if(a){if(b===a)throw Fa(\"cpi\");c=c||[];d=d||[];H(b)&&(c.push(b),d.push(a));var e;if(G(b))for(e=a.length=0;e<b.length;e++)a.push(fa(b[e],null,c,d));else{var f=a.$$hashKey;G(a)?a.length=0:m(a,function(b,\nc){delete a[c]});if(nc(b))for(e in b)a[e]=fa(b[e],null,c,d);else if(b&&\"function\"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=fa(b[e],null,c,d));else for(e in b)Xa.call(b,e)&&(a[e]=fa(b[e],null,c,d));qc(a,f)}}else if(a=b,H(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(G(b))return fa(b,[],c,d);if(uc.test(sa.call(b)))a=new b.constructor(b);else if(aa(b))a=new Date(b.getTime());else if(Za(b))a=new RegExp(b.source,b.toString().match(/[^\\/]*$/)[0]),a.lastIndex=b.lastIndex;else return e=\nObject.create(sc(b)),fa(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(G(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(H(b))for(c in a=a||{},b)if(\"$\"!==c.charAt(0)||\"$\"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&\"object\"==c)if(G(b)){if(!G(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(aa(b))return aa(a)?\nka(b.getTime(),a.getTime()):!1;if(Za(b))return Za(a)?b.toString()==a.toString():!1;if($a(b)||$a(a)||Wa(b)||Wa(a)||G(a)||aa(a)||Za(a))return!1;c=ga();for(d in b)if(\"$\"!==d.charAt(0)&&!z(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||\"$\"===d.charAt(0)||a[d]===t||z(a[d])))return!1;return!0}return!1}function cb(b,a,c){return b.concat(za.call(a,c))}function vc(b,a){var c=2<arguments.length?za.call(arguments,2):[];return!z(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?\na.apply(b,cb(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;\"string\"===typeof b&&\"$\"===b.charAt(0)&&\"$\"===b.charAt(1)?c=t:Wa(a)?c=\"$WINDOW\":a&&U===a?c=\"$DOCUMENT\":$a(a)&&(c=\"$SCOPE\");return c}function db(b,a){if(\"undefined\"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function wc(b){return L(b)?JSON.parse(b):b}function xc(b,a){var c=Date.parse(\"Jan 01, 1970 00:00:00 \"+b)/6E4;return isNaN(c)?a:c}function Pb(b,\na,c){c=c?-1:1;var d=xc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ua(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y(\"<div>\").append(b).html();try{return b[0].nodeType===Na?M(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\\w\\-]+)/,function(a,b){return\"<\"+M(b)})}catch(d){return M(c)}}function yc(b){try{return decodeURIComponent(b)}catch(a){}}function zc(b){var a={},c,d;m((b||\"\").split(\"&\"),function(b){b&&(c=b.replace(/\\+/g,\n\"%20\").split(\"=\"),d=yc(c[0]),w(d)&&(b=w(c[1])?yc(c[1]):!0,Xa.call(a,d)?G(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Qb(b){var a=[];m(b,function(b,d){G(b)?m(b,function(b){a.push(ma(d,!0)+(!0===b?\"\":\"=\"+ma(b,!0)))}):a.push(ma(d,!0)+(!0===b?\"\":\"=\"+ma(b,!0)))});return a.length?a.join(\"&\"):\"\"}function ob(b){return ma(b,!0).replace(/%26/gi,\"&\").replace(/%3D/gi,\"=\").replace(/%2B/gi,\"+\")}function ma(b,a){return encodeURIComponent(b).replace(/%40/gi,\"@\").replace(/%3A/gi,\":\").replace(/%24/g,\n\"$\").replace(/%2C/gi,\",\").replace(/%3B/gi,\";\").replace(/%20/g,a?\"%20\":\"+\")}function Yd(b,a){var c,d,e=Oa.length;for(d=0;d<e;++d)if(c=Oa[d]+a,L(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};m(Oa,function(a){a+=\"app\";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Oa,function(a){a+=\"app\";var e;!c&&(e=b.querySelector(\"[\"+a.replace(\":\",\"\\\\:\")+\"]\"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,\"strict-di\"),a(c,d?[d]:[],e))}function Ac(b,a,c){H(c)||\n(c={});c=P({strictDi:!1},c);var d=function(){b=y(b);if(b.injector()){var d=b[0]===U?\"document\":ua(b);throw Fa(\"btstrpd\",d.replace(/</,\"&lt;\").replace(/>/,\"&gt;\"));}a=a||[];a.unshift([\"$provide\",function(a){a.value(\"$rootElement\",b)}]);c.debugInfoEnabled&&a.push([\"$compileProvider\",function(a){a.debugInfoEnabled(!0)}]);a.unshift(\"ng\");d=eb(a,c.strictDi);d.invoke([\"$rootScope\",\"$rootElement\",\"$compile\",\"$injector\",function(a,b,c,d){a.$apply(function(){b.data(\"$injector\",d);c(b)(a)})}]);return d},e=\n/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,\"\"));if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,\"\");ca.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function $d(){O.name=\"NG_ENABLE_DEBUG_INFO!\"+O.name;O.location.reload()}function ae(b){b=ca.element(b).injector();if(!b)throw Fa(\"test\");return b.get(\"$$testability\")}function Bc(b,a){a=a||\n\"_\";return b.replace(be,function(b,d){return(d?a:\"\")+b.toLowerCase()})}function ce(){var b;if(!Cc){var a=pb();la=O.jQuery;w(a)&&(la=null===a?t:O[a]);la&&la.fn.on?(y=la,P(la.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,\"events\"))&&d.$destroy&&la(f).triggerHandler(\"$destroy\");b(a)}):y=Q;ca.element=y;Cc=!0}}function Sb(b,\na,c){if(!b)throw Fa(\"areq\",a||\"?\",c||\"required\");return b}function Qa(b,a,c){c&&G(b)&&(b=b[b.length-1]);Sb(z(b),a,\"not a function, got \"+(b&&\"object\"===typeof b?b.constructor.name||\"Object\":typeof b));return b}function Ra(b,a){if(\"hasOwnProperty\"===b)throw Fa(\"badname\",a);}function Dc(b,a,c){if(!a)return b;a=a.split(\".\");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&z(b)?vc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==\nb);return y(c)}function ga(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=J(\"$injector\"),d=J(\"ng\");b=a(b,\"angular\",Object);b.$$minErr=b.$$minErr||J;return a(b,\"module\",function(){var b={};return function(f,g,h){if(\"hasOwnProperty\"===f)throw d(\"badname\",\"module\");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,c,e,f){f||(f=d);return function(){f[e||\"push\"]([b,c,arguments]);return C}}function b(a,c){return function(b,e){e&&z(e)&&\n(e.$$moduleName=f);d.push([a,c,arguments]);return C}}if(!g)throw c(\"nomod\",f);var d=[],e=[],s=[],x=a(\"$injector\",\"invoke\",\"push\",e),C={_invokeQueue:d,_configBlocks:e,_runBlocks:s,requires:g,name:f,provider:b(\"$provide\",\"provider\"),factory:b(\"$provide\",\"factory\"),service:b(\"$provide\",\"service\"),value:a(\"$provide\",\"value\"),constant:a(\"$provide\",\"constant\",\"unshift\"),decorator:b(\"$provide\",\"decorator\"),animation:b(\"$animateProvider\",\"register\"),filter:b(\"$filterProvider\",\"register\"),controller:b(\"$controllerProvider\",\n\"register\"),directive:b(\"$compileProvider\",\"directive\"),config:x,run:function(a){s.push(a);return this}};h&&x(h);return C})}})}function ee(b){P(b,{bootstrap:Ac,copy:fa,extend:P,merge:Vd,equals:ka,element:y,forEach:m,injector:eb,noop:v,bind:vc,toJson:db,fromJson:wc,identity:Ya,isUndefined:A,isDefined:w,isString:L,isFunction:z,isObject:H,isNumber:V,isElement:tc,isArray:G,version:fe,isDate:aa,lowercase:M,uppercase:rb,callbacks:{counter:0},getTestability:ae,$$minErr:J,$$csp:fb,reloadWithDebugInfo:$d});\ngb=de(O);try{gb(\"ngLocale\")}catch(a){gb(\"ngLocale\",[]).provider(\"$locale\",ge)}gb(\"ng\",[\"ngLocale\"],[\"$provide\",function(a){a.provider({$$sanitizeUri:he});a.provider(\"$compile\",Ec).directive({a:ie,input:Fc,textarea:Fc,form:je,script:ke,select:le,style:me,option:ne,ngBind:oe,ngBindHtml:pe,ngBindTemplate:qe,ngClass:re,ngClassEven:se,ngClassOdd:te,ngCloak:ue,ngController:ve,ngForm:we,ngHide:xe,ngIf:ye,ngInclude:ze,ngInit:Ae,ngNonBindable:Be,ngPluralize:Ce,ngRepeat:De,ngShow:Ee,ngStyle:Fe,ngSwitch:Ge,\nngSwitchWhen:He,ngSwitchDefault:Ie,ngOptions:Je,ngTransclude:Ke,ngModel:Le,ngList:Me,ngChange:Ne,pattern:Gc,ngPattern:Gc,required:Hc,ngRequired:Hc,minlength:Ic,ngMinlength:Ic,maxlength:Jc,ngMaxlength:Jc,ngValue:Oe,ngModelOptions:Pe}).directive({ngInclude:Qe}).directive(sb).directive(Kc);a.provider({$anchorScroll:Re,$animate:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,$filter:Lc,$interpolate:$e,$interval:af,$http:bf,$httpParamSerializer:cf,\n$httpParamSerializerJQLike:df,$httpBackend:ef,$location:ff,$log:gf,$parse:hf,$rootScope:jf,$q:kf,$$q:lf,$sce:mf,$sceDelegate:nf,$sniffer:of,$templateCache:pf,$templateRequest:qf,$$testability:rf,$timeout:sf,$window:tf,$$rAF:uf,$$asyncCallback:vf,$$jqLite:wf,$$HashMap:xf,$$cookieReader:yf})}])}function hb(b){return b.replace(zf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Af,\"Moz$1\")}function Mc(b){b=b.nodeType;return b===qa||!b||9===b}function Nc(b,a){var c,d,e=a.createDocumentFragment(),\nf=[];if(Tb.test(b)){c=c||e.appendChild(a.createElement(\"div\"));d=(Bf.exec(b)||[\"\",\"\"])[1].toLowerCase();d=na[d]||na._default;c.innerHTML=d[1]+b.replace(Cf,\"<$1></$2>\")+d[2];for(d=d[0];d--;)c=c.lastChild;f=cb(f,c.childNodes);c=e.firstChild;c.textContent=\"\"}else f.push(a.createTextNode(b));e.textContent=\"\";e.innerHTML=\"\";m(f,function(a){e.appendChild(a)});return e}function Q(b){if(b instanceof Q)return b;var a;L(b)&&(b=R(b),a=!0);if(!(this instanceof Q)){if(a&&\"<\"!=b.charAt(0))throw Ub(\"nosel\");return new Q(b)}if(a){a=\nU;var c;b=(c=Df.exec(b))?[a.createElement(c[1])]:(c=Nc(b,a))?c.childNodes:[]}Oc(this,b)}function Vb(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll(\"*\"),d=0,e=c.length;d<e;d++)ub(c[d])}function Pc(b,a,c,d){if(w(d))throw Ub(\"offargs\");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(\" \"),function(a){if(w(c)){var d=e[a];bb(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)\"$destroy\"!==a&&b.removeEventListener(a,\nf,!1),delete e[a]}function ub(b,a){var c=b.ng339,d=c&&ib[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},\"$destroy\"),Pc(b)),delete ib[c],b.ng339=t))}function vb(b,a){var c=b.ng339,c=c&&ib[c];a&&!c&&(b.ng339=c=++Ef,c=ib[c]={events:{},data:{},handle:t});return c}function Wb(b,a,c){if(Mc(b)){var d=w(c),e=!d&&a&&!H(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];P(b,a)}}}function wb(b,a){return b.getAttribute?-1<(\" \"+(b.getAttribute(\"class\")||\"\")+\n\" \").replace(/[\\n\\t]/g,\" \").indexOf(\" \"+a+\" \"):!1}function xb(b,a){a&&b.setAttribute&&m(a.split(\" \"),function(a){b.setAttribute(\"class\",R((\" \"+(b.getAttribute(\"class\")||\"\")+\" \").replace(/[\\n\\t]/g,\" \").replace(\" \"+R(a)+\" \",\" \")))})}function yb(b,a){if(a&&b.setAttribute){var c=(\" \"+(b.getAttribute(\"class\")||\"\")+\" \").replace(/[\\n\\t]/g,\" \");m(a.split(\" \"),function(a){a=R(a);-1===c.indexOf(\" \"+a+\" \")&&(c+=a+\" \")});b.setAttribute(\"class\",R(c))}}function Oc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=\na.length;if(\"number\"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Qc(b,a){return zb(b,\"$\"+(a||\"ngController\")+\"Controller\")}function zb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=G(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=y.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Rc(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Xb(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ff(b,\na){a=a||O;if(\"complete\"===a.document.readyState)a.setTimeout(b);else y(a).on(\"load\",b)}function Sc(b,a){var c=Ab[a.toLowerCase()];return c&&Tc[ta(b)]&&c}function Gf(b,a){var c=b.nodeName;return(\"INPUT\"===c||\"TEXTAREA\"===c)&&Uc[a]}function Hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(A(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=\n!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function wf(){this.$get=function(){return P(Q,{hasClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;\nif(c)return\"function\"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c=\"function\"==c||\"object\"==c&&null!==b?b.$$hashKey=c+\":\"+(a||Ud)():c+\":\"+b}function Sa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function If(b){return(b=b.toString().replace(Vc,\"\").match(Wc))?\"function(\"+(b[1]||\"\").replace(/[\\s\\r\\n]+/,\" \")+\")\":\"fn\"}function eb(b,a){function c(a){return function(b,c){if(H(b))m(b,pc(a));else return a(b,c)}}function d(a,b){Ra(a,\"service\");if(z(b)||G(b))b=s.instantiate(b);\nif(!b.$get)throw Ha(\"pget\",a);return r[a+\"Provider\"]=b}function e(a,b){return function(){var c=C.invoke(b,this);if(A(c))throw Ha(\"undef\",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{L(a)?(c=gb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(s.invoke(a)):G(a)?\nb.push(s.invoke(a)):Qa(a,\"module\")}catch(e){throw G(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+\"\\n\"+e.stack),Ha(\"modulerr\",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha(\"cdep\",a+\" <- \"+k.join(\" <- \"));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){\"string\"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(b,\na,g),l,s,n;s=0;for(l=k.length;s<l;s++){n=k[s];if(\"string\"!==typeof n)throw Ha(\"itkn\",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}G(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((G(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return H(a)||z(a)?a:d},get:d,annotate:eb.$$annotate,has:function(a){return r.hasOwnProperty(a+\"Provider\")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new Sa([],!0),r={$provide:{provider:c(d),factory:c(f),service:c(function(a,\nb){return f(a,[\"$injector\",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ra(b),!1)}),constant:c(function(a,b){Ra(a,\"constant\");r[a]=b;x[a]=b}),decorator:function(a,b){var c=s.get(a+\"Provider\"),d=c.$get;c.$get=function(){var a=C.invoke(d,c);return C.invoke(b,null,{$delegate:a})}}}},s=r.$injector=h(r,function(a,b){ca.isString(b)&&k.push(b);throw Ha(\"unpr\",k.join(\" <- \"));}),x={},C=x.$injector=h(x,function(a,b){var c=s.get(a+\"Provider\",b);return C.invoke(c.$get,c,t,a)});m(g(b),\nfunction(a){a&&C.invoke(a)});return C}function Re(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=[\"$window\",\"$location\",\"$rootScope\",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if(\"a\"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():tc(c)?(c=c[0],c=\"fixed\"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,\n0)}function g(a){a=L(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):\"top\"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&\"\"===a||Ff(function(){d.$evalAsync(g)})});return g}]}function jb(b,a){if(!b&&!a)return\"\";if(!b)return a;if(!a)return b;G(b)&&(b=b.join(\" \"));G(a)&&(a=a.join(\" \"));return b+\" \"+a}function Jf(b){L(b)&&(b=b.split(\" \"));var a=ga();m(b,function(b){b.length&&(a[b]=!0)});return a}function Ia(b){return H(b)?\nb:{}}function vf(){this.$get=[\"$$rAF\",\"$timeout\",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Kf(b,a,c,d){function e(a){try{a.apply(null,za.call(arguments,1))}finally{if(C--,0===C)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{u=n.state;break a}catch(a){}u=void 0}u=A(u)?null:u;ka(u,D)&&(u=D);D=u}function h(){if(K!==l.url()||p!==u)K=l.url(),p=u,m(B,function(a){a(l.url(),u)})}var l=this,k=b.location,n=\nb.history,r=b.setTimeout,s=b.clearTimeout,x={};l.isMock=!1;var C=0,F=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=function(){C++};l.notifyWhenNoOutstandingRequests=function(a){0===C?a():F.push(a)};var u,p,K=k.href,q=a.find(\"base\"),I=null;g();p=u;l.url=function(a,c,e){A(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=p===e;if(K===a&&(!d.history||f))return l;var h=K&&Ja(K)===Ja(a);K=a;p=e;if(!d.history||h&&f){if(!h||I)I=a;c?k.replace(a):h?(c=\nk,e=a.indexOf(\"#\"),a=-1===e?\"\":a.substr(e),c.hash=a):k.href=a}else n[c?\"replaceState\":\"pushState\"](e,\"\",a),g(),p=u;return l}return I||k.href.replace(/%27/g,\"'\")};l.state=function(){return u};var B=[],N=!1,D=null;l.onUrlChange=function(a){if(!N){if(d.history)y(b).on(\"popstate\",f);y(b).on(\"hashchange\",f);N=!0}B.push(a);return a};l.$$applicationDestroyed=function(){y(b).off(\"hashchange popstate\",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=q.attr(\"href\");return a?a.replace(/^(https?\\:)?\\/\\/[^\\/]*/,\n\"\"):\"\"};l.defer=function(a,b){var c;C++;c=r(function(){delete x[c];e(a)},b||0);x[c]=!0;return c};l.defer.cancel=function(a){return x[a]?(delete x[a],s(a),e(v),!0):!1}}function Ve(){this.$get=[\"$window\",\"$log\",\"$sniffer\",\"$document\",function(b,a,c,d){return new Kf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=r&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,r),r=a,r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw J(\"$cacheFactory\")(\"iid\",b);var g=0,h=P({},\nd,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},r=null,s=null;return a[b]={put:function(a,b){if(!A(b)){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(s.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==r&&(r=b.p);b==s&&(s=b.n);f(b.n,b.p);delete n[a]}delete l[a];g--},removeAll:function(){l={};g=0;n={};r=s=null},destroy:function(){n=h=\nl=null;delete a[b]},info:function(){return P({},h,{size:g})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function pf(){this.$get=[\"$cacheFactory\",function(b){return b(\"templates\")}]}function Ec(b,a){function c(a,b,c){var d=/^\\s*([@&]|=(\\*?))(\\??)\\s*(\\w*)\\s*$/,e={};m(a,function(a,f){var g=a.match(d);if(!g)throw ea(\"iscp\",b,f,a,c?\"controller bindings definition\":\"isolate scope definition\");e[f]={mode:g[1][0],collection:\"*\"===\ng[2],optional:\"?\"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==M(b))throw ea(\"baddir\",a);if(a!==a.trim())throw ea(\"baddir\",a);}var e={},f=/^\\s*directive\\:\\s*([\\w\\-]+)\\s+(.*)$/,g=/(([\\w\\-]+)(?:\\:([^;]+))?;?)/,h=Wd(\"ngSrc,ngSrcset,src,srcset\"),l=/^(?:(\\^\\^?)?(\\?)?(\\^\\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function s(a,f){Ra(a,\"directive\");L(a)?(d(a),Sb(f,\"directiveFactory\"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+\"Directive\",[\"$injector\",\"$exceptionHandler\",\nfunction(b,d){var f=[];m(e[a],function(e,g){try{var h=b.invoke(e);z(h)?h={compile:ra(h)}:!h.compile&&h.link&&(h.compile=ra(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||\"EA\";var k=h,l=h,s=h.name,n={isolateScope:null,bindToController:null};H(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,s,!0),n.isolateScope={}):n.isolateScope=c(l.scope,s,!1));H(l.bindToController)&&(n.bindToController=c(l.bindToController,\ns,!0));if(H(n.bindToController)){var C=l.controller,$=l.controllerAs;if(!C)throw ea(\"noctrl\",s);var ha;a:if($&&L($))ha=$;else{if(L(C)){var m=Xc.exec(C);if(m){ha=m[3];break a}}ha=void 0}if(!ha)throw ea(\"noident\",s);}var q=k.$$bindings=n;H(q.isolateScope)&&(h.$$isolateBindings=q.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(t){d(t)}});return f}])),e[a].push(f)):m(a,pc(s));return this};this.aHrefSanitizationWhitelist=function(b){return w(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};\nthis.imgSrcSanitizationWhitelist=function(b){return w(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};this.$get=[\"$injector\",\"$interpolate\",\"$exceptionHandler\",\"$templateRequest\",\"$parse\",\"$controller\",\"$rootScope\",\"$document\",\"$sce\",\"$animate\",\"$$sanitizeUri\",function(a,b,c,d,u,p,K,q,I,B,N){function D(a,b){try{a.addClass(b)}catch(c){}}function Z(a,b,c,d,e){a instanceof y||(a=y(a));m(a,function(b,c){b.nodeType==\nNa&&b.nodeValue.match(/\\S+/)&&(a[c]=y(b).wrap(\"<span></span>\").parent()[0])});var f=S(a,b,a,c,d,e);Z.$$addScopeClass(a);var g=null;return function(b,c,d){Sb(b,\"scope\");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?\"foreignobject\"!==ta(d)&&d.toString().match(/SVG/)?\"svg\":\"html\":\"html\");d=\"html\"!==g?y(Yb(g,y(\"<div>\").append(a).html())):c?Pa.clone.call(a):a;if(h)for(var k in h)d.data(\"$\"+k+\"Controller\",\nh[k].instance);Z.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,s,n,B,C;if(p)for(C=Array(c.length),s=0;s<h.length;s+=3)f=h[s],C[f]=c[f];else C=c;s=0;for(n=h.length;s<n;)if(k=C[h[s++]],c=h[s++],f=h[s++],c){if(c.scope){if(l=a.$new(),Z.$$addScopeInfo(y(k),l),B=c.$$destroyBindings)c.$$destroyBindings=null,l.$on(\"$destroyed\",B)}else l=a;B=c.transcludeOnThisElement?$(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?$(a,b):null;c(f,l,k,d,\nB,c)}else f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,s,n,p,B=0;B<a.length;B++){k=new aa;l=ha(a[B],[],k,0===B?d:t,e);(f=l.length?E(l,a[B],k,b,c,null,[],[],f):null)&&f.scope&&Z.$$addScopeClass(k.$$element);k=f&&f.terminal||!(s=a[B].childNodes)||!s.length?null:S(s,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(B,f,k),n=!0,p=p||f;f=null}return n?g:null}function $(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,\ntranscludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case qa:w(b,wa(ta(a)),\"E\",d,e);for(var l,s,n,p=a.attributes,B=0,C=p&&p.length;B<C;B++){var x=!1,S=!1;l=p[B];k=l.name;s=R(l.value);l=wa(k);if(n=ia.test(l))k=k.replace(Zc,\"\").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var F=l.replace(/(Start|End)$/,\"\");A(F)&&l===F+\"Start\"&&(x=k,S=k.substr(0,k.length-5)+\"end\",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());h[l]=k;if(n||!c.hasOwnProperty(l))c[l]=\ns,Sc(a,l)&&(c[l]=!0);V(a,b,s,l,n);w(b,l,\"A\",d,e,x,S)}a=a.className;H(a)&&(a=a.animVal);if(L(a)&&\"\"!==a)for(;k=g.exec(a);)l=wa(k[2]),w(b,l,\"C\",d,e)&&(c[l]=R(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ua)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);xa(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=wa(k[1]),w(b,l,\"M\",d,e)&&(c[l]=R(k[2]))}catch($){}}b.sort(Aa);return b}function va(a,\nb,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea(\"uterdir\",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function Yc(a,b,c){return function(d,e,f,g,h){e=va(e[0],b,c);return a(d,e,f,g,h)}}function E(a,b,d,e,f,g,h,k,s){function n(a,b,c,d){if(a){c&&(a=Yc(a,c,d));a.require=E.require;a.directiveName=w;if(u===E||E.$$isolateScope)a=X(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Yc(b,c,d));b.require=\nE.require;b.directiveName=w;if(u===E||E.$$isolateScope)b=X(b,{isolateScope:!0});k.push(b)}}function B(a,b,c,d){var e;if(L(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f=\"?\"===f[2];\"^^\"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d=\"$\"+b+\"Controller\",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ea(\"ctreq\",b,a);}else if(G(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=B(a,b[g],c,d);return e||null}function x(a,b,c,d,e,f){var g=ga(),h;for(h in d){var k=d[h],l={$scope:k===u||k.$$isolateScope?\ne:f,$element:a,$attrs:b,$transclude:c},s=k.controller;\"@\"==s&&(s=b[k.name]);l=p(s,l,!0,k.controllerAs);g[k.name]=l;q||a.data(\"$\"+k.name+\"Controller\",l.instance)}return g}function S(a,c,e,f,g,l){function s(a,b,c){var d;$a(a)||(c=b,b=a,a=t);q&&(d=m);c||(c=q?ja.parent():ja);return g(a,b,d,c,va)}var n,p,C,F,m,ha,ja;b===e?(f=d,ja=d.$$element):(ja=y(e),f=new aa(ja,d));u&&(F=c.$new(!0));g&&(ha=s,ha.$$boundTransclude=g);N&&(m=x(ja,f,ha,N,F,c));u&&(Z.$$addScopeInfo(ja,F,!0,!(D&&(D===u||D===u.$$originalDirective))),\nZ.$$addScopeClass(ja,!0),F.$$isolateBindings=u.$$isolateBindings,W(c,f,F,F.$$isolateBindings,u,F));if(m){var K=u||$,I;K&&m[K.name]&&(p=K.$$bindings.bindToController,(C=m[K.name])&&C.identifier&&p&&(I=C,l.$$destroyBindings=W(c,f,C.instance,p,K)));for(n in m){C=m[n];var E=C();E!==C.instance&&(C.instance=E,ja.data(\"$\"+n+\"Controller\",E),C===I&&(l.$$destroyBindings(),l.$$destroyBindings=W(c,f,E,p,K)))}}n=0;for(l=h.length;n<l;n++)p=h[n],Y(p,p.isolateScope?F:c,ja,f,p.require&&B(p.directiveName,p.require,\nja,m),ha);var va=c;u&&(u.template||null===u.templateUrl)&&(va=F);a&&a(va,e.childNodes,t,g);for(n=k.length-1;0<=n;n--)p=k[n],Y(p,p.isolateScope?F:c,ja,f,p.require&&B(p.directiveName,p.require,ja,m),ha)}s=s||{};for(var F=-Number.MAX_VALUE,$=s.newScopeDirective,N=s.controllerDirectives,u=s.newIsolateScopeDirective,D=s.templateDirective,m=s.nonTlbTranscludeDirective,K=!1,I=!1,q=s.hasElementTranscludeDirective,ba=d.$$element=y(b),E,w,v,A=e,Aa,xa=0,Ta=a.length;xa<Ta;xa++){E=a[xa];var M=E.$$start,P=E.$$end;\nM&&(ba=va(b,M,P));v=t;if(F>E.priority)break;if(v=E.scope)E.templateUrl||(H(v)?(O(\"new/isolated scope\",u||$,E,ba),u=E):O(\"new/isolated scope\",u,E,ba)),$=$||E;w=E.name;!E.templateUrl&&E.controller&&(v=E.controller,N=N||ga(),O(\"'\"+w+\"' controller\",N[w],E,ba),N[w]=E);if(v=E.transclude)K=!0,E.$$tlb||(O(\"transclusion\",m,E,ba),m=E),\"element\"==v?(q=!0,F=E.priority,v=ba,ba=d.$$element=y(U.createComment(\" \"+w+\": \"+d[w]+\" \")),b=ba[0],T(f,za.call(v,0),b),A=Z(v,e,F,g&&g.name,{nonTlbTranscludeDirective:m})):(v=\ny(Vb(b)).contents(),ba.empty(),A=Z(v,e));if(E.template)if(I=!0,O(\"template\",D,E,ba),D=E,v=z(E.template)?E.template(ba,d):E.template,v=fa(v),E.replace){g=E;v=Tb.test(v)?$c(Yb(E.templateNamespace,R(v))):[];b=v[0];if(1!=v.length||b.nodeType!==qa)throw ea(\"tplrt\",w,\"\");T(f,ba,b);Ta={$attr:{}};v=ha(b,[],Ta);var Q=a.splice(xa+1,a.length-(xa+1));u&&ad(v);a=a.concat(v).concat(Q);J(d,Ta);Ta=a.length}else ba.html(v);if(E.templateUrl)I=!0,O(\"template\",D,E,ba),D=E,E.replace&&(g=E),S=Mf(a.splice(xa,a.length-xa),\nba,d,f,K&&A,h,k,{controllerDirectives:N,newScopeDirective:$!==E&&$,newIsolateScopeDirective:u,templateDirective:D,nonTlbTranscludeDirective:m}),Ta=a.length;else if(E.compile)try{Aa=E.compile(ba,d,A),z(Aa)?n(null,Aa,M,P):Aa&&n(Aa.pre,Aa.post,M,P)}catch(Lf){c(Lf,ua(ba))}E.terminal&&(S.terminal=!0,F=Math.max(F,E.priority))}S.scope=$&&!0===$.scope;S.transcludeOnThisElement=K;S.templateOnThisElement=I;S.transclude=A;s.hasElementTranscludeDirective=q;return S}function ad(a){for(var b=0,c=a.length;b<c;b++)a[b]=\nOb(a[b],{$$isolateScope:!0})}function w(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;d=a.get(d+\"Directive\");for(var p=0,B=d.length;p<B;p++)try{n=d[p],(g===t||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(k&&(n=Ob(n,{$$start:k,$$end:l})),b.push(n),h=n)}catch(x){c(x)}}return h}function A(b){if(e.hasOwnProperty(b))for(var c=a.get(b+\"Directive\"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function J(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,\ne){\"$\"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=(\"style\"===e?\";\":\" \")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){\"class\"==f?(D(e,b),a[\"class\"]=(a[\"class\"]?a[\"class\"]+\" \":\"\")+b):\"style\"==f?(e.attr(\"style\",e.attr(\"style\")+\";\"+b),a.style=(a.style?a.style+\";\":\"\")+b):\"$\"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Mf(a,b,c,e,f,g,h,k){var l=[],s,n,p=b[0],B=a.shift(),C=Ob(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),x=z(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,\nN=B.templateNamespace;b.empty();d(x).then(function(d){var F,u;d=fa(d);if(B.replace){d=Tb.test(d)?$c(Yb(N,R(d))):[];F=d[0];if(1!=d.length||F.nodeType!==qa)throw ea(\"tplrt\",B.name,x);d={$attr:{}};T(e,b,F);var K=ha(F,[],d);H(B.scope)&&ad(K);a=K.concat(a);J(c,d)}else F=p,b.html(d);a.unshift(C);s=E(a,F,c,f,b,B,g,h,k);m(e,function(a,c){a==F&&(e[c]=b[0])});for(n=S(b[0].childNodes,f);l.length;){d=l.shift();u=l.shift();var I=l.shift(),va=l.shift(),K=b[0];if(!d.$$destroyed){if(u!==p){var Z=u.className;k.hasElementTranscludeDirective&&\nB.replace||(K=Vb(F));T(I,y(u),K);D(y(K),Z)}u=s.transcludeOnThisElement?$(d,s.transclude,va):va;s(n,d,K,e,u,s)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(s.transcludeOnThisElement&&(a=$(b,s.transclude,e)),s(n,b,c,d,a,s)))}}function Aa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function O(a,b,c,d){function e(a){return a?\" (module: \"+a+\")\":\"\"}if(b)throw ea(\"multidir\",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),\na,ua(d));}function xa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&Z.$$addBindingClass(a);return function(a,c){var e=c.parent();b||Z.$$addBindingClass(e);Z.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=M(a||\"html\");switch(a){case \"svg\":case \"math\":var c=U.createElement(\"div\");c.innerHTML=\"<\"+a+\">\"+b+\"</\"+a+\">\";return c.childNodes[0].childNodes;default:return b}}function Q(a,b){if(\"srcdoc\"==b)return I.HTML;\nvar c=ta(a);if(\"xlinkHref\"==b||\"form\"==c&&\"action\"==b||\"img\"!=c&&(\"src\"==b||\"ngSrc\"==b))return I.RESOURCE_URL}function V(a,c,d,e,f){var g=Q(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if(\"multiple\"===e&&\"select\"===ta(a))throw ea(\"selmulti\",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea(\"nodomevents\");var s=h[e];s!==d&&(l=s&&b(s,!0,g,f),d=s);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||\na).$watch(l,function(a,b){\"class\"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);y.hasData(d)&&(y(c).data(y(d).data()),la?(Rb=!0,la.cleanData([d])):delete y.cache[d[y.expando]]);d=1;for(e=b.length;d<e;d++)f=\nb[d],y(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function X(a,b){return P(function(){return a.apply(null,arguments)},a,b)}function Y(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function W(a,c,d,e,f,g){var h;m(e,function(e,g){var k=e.attrName,l=e.optional,s=e.mode,n,p,B,C;Xa.call(c,k)||(c[k]=t);switch(s){case \"@\":c[k]||l||(d[g]=t);c.$observe(k,function(a){d[g]=a});c.$$observers[k].$$scope=a;c[k]&&(d[g]=b(c[k])(a));break;case \"=\":if(l&&!c[k])break;p=u(c[k]);C=p.literal?ka:function(a,\nb){return a===b||a!==a&&b!==b};B=p.assign||function(){n=d[g]=p(a);throw ea(\"nonassign\",c[k],f.name);};n=d[g]=p(a);l=function(b){C(b,d[g])||(C(b,n)?B(a,b=d[g]):d[g]=b);return n=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(u(c[k],l),null,p.literal);h=h||[];h.push(l);break;case \"&\":p=u(c[k]);if(p===v&&l)break;d[g]=function(b){return p(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:v;return g&&e!==v?(g.$on(\"$destroy\",e),v):e}var aa=function(a,b){if(b){var c=Object.keys(b),\nd,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};aa.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&B.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&B.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=bd(a,b);c&&c.length&&B.addClass(this.$$element,c);(c=bd(b,a))&&c.length&&B.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Sc(f,a),h=Gf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):\nh&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Bc(a,\"-\"));g=ta(this.$$element);if(\"a\"===g&&\"href\"===a||\"img\"===g&&\"src\"===a)this[a]=b=N(b,\"src\"===a);else if(\"img\"===g&&\"srcset\"===a){for(var g=\"\",h=R(b),k=/(\\s+\\d+x\\s*,|\\s+\\d+w\\s*,|\\s+,|,\\s+)/,k=/\\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var s=2*l,g=g+N(R(h[s]),!0),g=g+(\" \"+R(h[s+1]));h=R(h[2*l]).split(/\\s/);g+=N(R(h[0]),!0);2===h.length&&(g+=\" \"+R(h[1]));this[a]=b=g}!1!==d&&(null===b||\nb===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&m(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){bb(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa=\"{{\"==ca||\"}}\"==da?Ya:function(a){return a.replace(/\\{\\{/g,ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;Z.$$addBindingInfo=n?function(a,b){var c=\na.data(\"$binding\")||[];G(b)?c=c.concat(b):c.push(b);a.data(\"$binding\",c)}:v;Z.$$addBindingClass=n?function(a){D(a,\"ng-binding\")}:v;Z.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?\"$isolateScopeNoTemplate\":\"$isolateScope\":\"$scope\",b)}:v;Z.$$addScopeClass=n?function(a,b){D(a,b?\"ng-isolate-scope\":\"ng-scope\")}:v;return Z}]}function wa(b){return hb(b.replace(Zc,\"\"))}function bd(b,a){var c=\"\",d=b.split(/\\s+/),e=a.split(/\\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;\nc+=(0<c.length?\" \":\"\")+g}return c}function $c(b){b=y(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Nf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ra(a,\"controller\");H(a)?P(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=[\"$injector\",\"$window\",function(c,d){function e(a,b,c,d){if(!a||!H(a.$scope))throw J(\"$controller\")(\"noscp\",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,n,r;h=!0===h;l&&L(l)&&(r=l);if(L(f)){l=f.match(Xc);if(!l)throw Of(\"ctrlfmt\",\nf);n=l[1];r=r||l[3];f=b.hasOwnProperty(n)?b[n]:Dc(g.$scope,n,!0)||(a?Dc(d,n,!0):t);Qa(f,n,!0)}if(h)return h=(G(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),r&&e(g,r,k,n||f.name),P(function(){var a=c.invoke(f,k,g,n);a!==k&&(H(a)||z(a))&&(k=a,r&&e(g,r,k,n||f.name));return k},{instance:k,identifier:r});k=c.instantiate(f,g,n);r&&e(g,r,k,n||f.name);return k}}]}function Ye(){this.$get=[\"$window\",function(b){return y(b.document)}]}function Ze(){this.$get=[\"$log\",function(b){return function(a,c){b.error.apply(b,\narguments)}}]}function Zb(b){return H(b)?aa(b)?b.toISOString():db(b):b}function cf(){this.$get=function(){return function(b){if(!b)return\"\";var a=[];oc(b,function(b,d){null===b||A(b)||(G(b)?m(b,function(b,c){a.push(ma(d)+\"=\"+ma(Zb(b)))}):a.push(ma(d)+\"=\"+ma(Zb(b))))});return a.join(\"&\")}}}function df(){this.$get=function(){return function(b){function a(b,e,f){null===b||A(b)||(G(b)?m(b,function(b){a(b,e+\"[]\")}):H(b)&&!aa(b)?oc(b,function(b,c){a(b,e+(f?\"\":\"[\")+c+(f?\"\":\"]\"))}):c.push(ma(e)+\"=\"+ma(Zb(b))))}\nif(!b)return\"\";var c=[];a(b,\"\",!0);return c.join(\"&\")}}}function $b(b,a){if(L(b)){var c=b.replace(Pf,\"\").trim();if(c){var d=a(\"Content-Type\");(d=d&&0===d.indexOf(cd))||(d=(d=c.match(Qf))&&Rf[d[0]].test(c));d&&(b=wc(c))}}return b}function dd(b){var a=ga(),c;L(b)?m(b.split(\"\\n\"),function(b){c=b.indexOf(\":\");var e=M(R(b.substr(0,c)));b=R(b.substr(c+1));e&&(a[e]=a[e]?a[e]+\", \"+b:b)}):H(b)&&m(b,function(b,c){var f=M(c),g=R(b);f&&(a[f]=a[f]?a[f]+\", \"+g:g)});return a}function ed(b){var a;return function(c){a||\n(a=dd(b));return c?(c=a[M(c)],void 0===c&&(c=null),c):a}}function fd(b,a,c,d){if(z(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function bf(){var b=this.defaults={transformResponse:[$b],transformRequest:[function(a){return H(a)&&\"[object File]\"!==sa.call(a)&&\"[object Blob]\"!==sa.call(a)&&\"[object FormData]\"!==sa.call(a)?db(a):a}],headers:{common:{Accept:\"application/json, text/plain, */*\"},post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:\"XSRF-TOKEN\",xsrfHeaderName:\"X-XSRF-TOKEN\",paramSerializer:\"$httpParamSerializer\"},\na=!1;this.useApplyAsync=function(b){return w(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=[\"$httpBackend\",\"$$cookieReader\",\"$cacheFactory\",\"$rootScope\",\"$q\",\"$injector\",function(d,e,f,g,h,l){function k(a){function c(a){var b=P({},a);b.data=a.data?fd(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,e={};m(a,function(a,d){z(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!ca.isObject(a))throw J(\"$http\")(\"badreq\",\na);var e=P({method:\"get\",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);e.headers=function(a){var c=b.headers,e=P({},a.headers),f,g,h,c=P({},c.common,c[M(a.method)]);a:for(f in c){g=M(f);for(h in e)if(M(h)===g)continue a;e[f]=c[f]}return d(e,ia(a))}(a);e.method=rb(e.method);e.paramSerializer=L(e.paramSerializer)?l.get(e.paramSerializer):e.paramSerializer;var f=[function(a){var d=a.headers,e=fd(a.data,ed(d),t,a.transformRequest);A(e)&&\nm(d,function(a,b){\"content-type\"===M(b)&&delete d[b]});A(a.withCredentials)&&!A(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},t],g=h.when(e);for(m(x,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){Qa(a,\"fn\");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){Qa(a,\n\"fn\");g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){n(c,b,d,e)}N&&(200<=b&&300>b?N.put(S,[b,c,dd(d),e]):N.remove(S));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function n(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?I.resolve:I.reject)({data:a,status:b,headers:ed(d),config:c,statusText:e})}function x(a){n(a.data,a.status,ia(a.headers()),a.statusText)}function m(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,\n1)}var I=h.defer(),B=I.promise,N,D,q=c.headers,S=r(c.url,c.paramSerializer(c.params));k.pendingRequests.push(c);B.then(m,m);!c.cache&&!b.cache||!1===c.cache||\"GET\"!==c.method&&\"JSONP\"!==c.method||(N=H(c.cache)?c.cache:H(b.cache)?b.cache:s);N&&(D=N.get(S),w(D)?D&&z(D.then)?D.then(x,x):G(D)?n(D[1],D[0],ia(D[2]),D[3]):n(D,200,{},\"OK\"):N.put(S,B));A(D)&&((D=gd(c.url)?e()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(q[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,S,f,l,q,c.timeout,c.withCredentials,c.responseType));\nreturn B}function r(a,b){0<b.length&&(a+=(-1==a.indexOf(\"?\")?\"?\":\"&\")+b);return a}var s=f(\"$http\");b.paramSerializer=L(b.paramSerializer)?l.get(b.paramSerializer):b.paramSerializer;var x=[];m(c,function(a){x.unshift(L(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){m(arguments,function(a){k[a]=function(b,c){return k(P({},c||{},{method:a,url:b}))}})})(\"get\",\"delete\",\"head\",\"jsonp\");(function(a){m(arguments,function(a){k[a]=function(b,c,d){return k(P({},d||{},{method:a,url:b,data:c}))}})})(\"post\",\n\"put\",\"patch\");k.defaults=b;return k}]}function Sf(){return new O.XMLHttpRequest}function ef(){this.$get=[\"$browser\",\"$window\",\"$document\",function(b,a,c){return Tf(b,Sf,b.defer,a.angular.callbacks,c[0])}]}function Tf(b,a,c,d,e){function f(a,b,c){var f=e.createElement(\"script\"),n=null;f.type=\"text/javascript\";f.src=a;f.async=!0;n=function(a){f.removeEventListener(\"load\",n,!1);f.removeEventListener(\"error\",n,!1);e.body.removeChild(f);f=null;var g=-1,x=\"unknown\";a&&(\"load\"!==a.type||d[b].called||(a=\n{type:\"error\"}),x=a.type,g=\"error\"===a.type?404:200);c&&c(g,x)};f.addEventListener(\"load\",n,!1);f.addEventListener(\"error\",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,r,s,x){function C(){p&&p();K&&K.abort()}function F(a,d,e,f,g){I!==t&&c.cancel(I);p=K=null;a(d,e,f,g);b.$$completeOutstandingRequest(v)}b.$$incOutstandingRequestCount();h=h||b.url();if(\"jsonp\"==M(e)){var u=\"_\"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var p=f(h.replace(\"JSON_CALLBACK\",\n\"angular.callbacks.\"+u),u,function(a,b){F(k,a,d[u].data,\"\",b);d[u]=v})}else{var K=a();K.open(e,h,!0);m(n,function(a,b){w(a)&&K.setRequestHeader(b,a)});K.onload=function(){var a=K.statusText||\"\",b=\"response\"in K?K.response:K.responseText,c=1223===K.status?204:K.status;0===c&&(c=b?200:\"file\"==Ba(h).protocol?404:0);F(k,c,b,K.getAllResponseHeaders(),a)};e=function(){F(k,-1,null,null,\"\")};K.onerror=e;K.onabort=e;s&&(K.withCredentials=!0);if(x)try{K.responseType=x}catch(q){if(\"json\"!==x)throw q;}K.send(l)}if(0<\nr)var I=c(C,r);else r&&z(r.then)&&r.then(C)}}function $e(){var b=\"{{\",a=\"}}\";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=[\"$parse\",\"$exceptionHandler\",\"$sce\",function(c,d,e){function f(a){return\"\\\\\\\\\\\\\"+a}function g(c){return c.replace(n,b).replace(r,a)}function h(f,h,n,r){function u(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var c;if(r&&!w(a))c=a;else if(null==a)c=\"\";else{switch(typeof a){case \"string\":break;case \"number\":a=\n\"\"+a;break;default:a=db(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}r=!!r;for(var p,m,q=0,I=[],B=[],N=f.length,D=[],t=[];q<N;)if(-1!=(p=f.indexOf(b,q))&&-1!=(m=f.indexOf(a,p+l)))q!==p&&D.push(g(f.substring(q,p))),q=f.substring(p+l,m),I.push(q),B.push(c(q,u)),q=m+k,t.push(D.length),D.push(\"\");else{q!==N&&D.push(g(f.substring(q)));break}n&&1<D.length&&Ka.throwNoconcat(f);if(!h||I.length){var S=function(a){for(var b=0,c=I.length;b<c;b++){if(r&&A(a[b]))return;D[t[b]]=a[b]}return D.join(\"\")};return P(function(a){var b=\n0,c=I.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return S(e)}catch(g){d(Ka.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,b){var c;return a.$watchGroup(B,function(d,e){var f=S(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,n=new RegExp(b.replace(/./g,f),\"g\"),r=new RegExp(a.replace(/./g,f),\"g\");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function af(){this.$get=[\"$rootScope\",\"$window\",\"$q\",\"$$q\",function(b,a,c,d){function e(e,\nh,l,k){var n=4<arguments.length,r=n?za.call(arguments,4):[],s=a.setInterval,x=a.clearInterval,C=0,F=w(k)&&!k,u=(F?d:c).defer(),p=u.promise;l=w(l)?l:0;p.then(null,null,n?function(){e.apply(null,r)}:e);p.$$intervalId=s(function(){u.notify(C++);0<l&&C>=l&&(u.resolve(C),x(p.$$intervalId),delete f[p.$$intervalId]);F||b.$apply()},h);f[p.$$intervalId]=u;return p}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject(\"canceled\"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],\n!0):!1};return e}]}function ge(){this.$get=function(){return{id:\"en-us\",NUMBER_FORMATS:{DECIMAL_SEP:\".\",GROUP_SEP:\",\",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:\"\",posSuf:\"\",negPre:\"-\",negSuf:\"\",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:\"\\u00a4\",posSuf:\"\",negPre:\"(\\u00a4\",negSuf:\")\",gSize:3,lgSize:3}],CURRENCY_SYM:\"$\"},DATETIME_FORMATS:{MONTH:\"January February March April May June July August September October November December\".split(\" \"),SHORTMONTH:\"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec\".split(\" \"),\nDAY:\"Sunday Monday Tuesday Wednesday Thursday Friday Saturday\".split(\" \"),SHORTDAY:\"Sun Mon Tue Wed Thu Fri Sat\".split(\" \"),AMPMS:[\"AM\",\"PM\"],medium:\"MMM d, y h:mm:ss a\",\"short\":\"M/d/yy h:mm a\",fullDate:\"EEEE, MMMM d, y\",longDate:\"MMMM d, y\",mediumDate:\"MMM d, y\",shortDate:\"M/d/yy\",mediumTime:\"h:mm:ss a\",shortTime:\"h:mm a\",ERANAMES:[\"Before Christ\",\"Anno Domini\"],ERAS:[\"BC\",\"AD\"]},pluralCat:function(b){return 1===b?\"one\":\"other\"}}}}function bc(b){b=b.split(\"/\");for(var a=b.length;a--;)b[a]=ob(b[a]);\nreturn b.join(\"/\")}function hd(b,a){var c=Ba(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=W(c.port)||Uf[c.protocol]||null}function id(b,a){var c=\"/\"!==b.charAt(0);c&&(b=\"/\"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&\"/\"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=zc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&\"/\"!=a.$$path.charAt(0)&&(a.$$path=\"/\"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf(\"#\");\nreturn-1==a?b:b.substr(0,a)}function Bb(b){return b.replace(/(#.+)|#$/,\"$1\")}function cc(b){return b.substr(0,Ja(b).lastIndexOf(\"/\")+1)}function dc(b,a){this.$$html5=!0;a=a||\"\";var c=cc(b);hd(b,this);this.$$parse=function(a){var b=ya(c,a);if(!L(b))throw Cb(\"ipthprfx\",a,c);id(b,this);this.$$path||(this.$$path=\"/\");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?\"#\"+ob(this.$$hash):\"\";this.$$url=bc(this.$$path)+(a?\"?\"+a:\"\")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=\nfunction(d,e){if(e&&\"#\"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ya(b,d))!==t?(g=f,g=(f=ya(a,f))!==t?c+(ya(\"/\",f)||f):b+g):(f=ya(c,d))!==t?g=c+f:c==d+\"/\"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);hd(b,this);this.$$parse=function(d){var e=ya(b,d)||ya(c,d),f;A(e)||\"#\"!==e.charAt(0)?this.$$html5?f=e:(f=\"\",A(e)&&(b=d,this.replace())):(f=ya(a,e),A(f)&&(f=e));id(f,this);d=this.$$path;var e=b,g=/^\\/[A-Z]:(\\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,\"\"));g.exec(f)||(d=(f=g.exec(d))?\nf[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?\"#\"+ob(this.$$hash):\"\";this.$$url=bc(this.$$path)+(c?\"?\"+c:\"\")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:\"\")};this.$$parseLinkUrl=function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function jd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&\"#\"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ja(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+\"/\"&&(f=\nc);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?\"#\"+ob(this.$$hash):\"\";this.$$url=bc(this.$$path)+(c?\"?\"+c:\"\")+e;this.$$absUrl=b+a+this.$$url}}function Db(b){return function(){return this[b]}}function kd(b,a){return function(c){if(A(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ff(){var b=\"\",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return w(a)?(b=a,this):b};this.html5Mode=function(b){return ab(b)?\n(a.enabled=b,this):H(b)?(ab(b.enabled)&&(a.enabled=b.enabled),ab(b.requireBase)&&(a.requireBase=b.requireBase),ab(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=[\"$rootScope\",\"$browser\",\"$sniffer\",\"$rootElement\",\"$window\",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast(\"$locationChangeSuccess\",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var r=d.url(),\ns;if(a.enabled){if(!n&&a.requireBase)throw Cb(\"nobase\");s=r.substring(0,r.indexOf(\"/\",r.indexOf(\"//\")+2))+(n||\"/\");n=e.history?dc:jd}else s=Ja(r),n=ec;k=new n(s,\"#\"+b);k.$$parseLinkUrl(r,r);k.$$state=d.state();var x=/^\\s*(javascript|mailto):/i;f.on(\"click\",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=y(b.target);\"a\"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop(\"href\"),l=e.attr(\"href\")||e.attr(\"xlink:href\");H(h)&&\"[object SVGAnimatedString]\"===\nh.toString()&&(h=Ba(h.animVal).href);x.test(h)||!h||e.attr(\"target\")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular[\"ff-684208-preventDefault\"]=!0))}});Bb(k.absUrl())!=Bb(r)&&d.url(k.absUrl(),!0);var C=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast(\"$locationChangeStart\",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(C=\n!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Bb(d.url()),b=Bb(k.absUrl()),f=d.state(),g=k.$$replace,n=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(C||n)C=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast(\"$locationChangeStart\",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(n&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function gf(){var b=!0,a=this;this.debugEnabled=function(a){return w(a)?(b=a,this):b};\nthis.$get=[\"$window\",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?\"Error: \"+a.message+\"\\n\"+a.stack:a.stack:a.sourceURL&&(a=a.message+\"\\n\"+a.sourceURL+\":\"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?\"\":b)}}return{log:e(\"log\"),info:e(\"info\"),warn:e(\"warn\"),error:e(\"error\"),debug:function(){var c=\ne(\"debug\");return function(){b&&c.apply(a,arguments)}}()}}]}function Ca(b,a){if(\"__defineGetter__\"===b||\"__defineSetter__\"===b||\"__lookupGetter__\"===b||\"__lookupSetter__\"===b||\"__proto__\"===b)throw da(\"isecfld\",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw da(\"isecfn\",a);if(b.window===b)throw da(\"isecwindow\",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw da(\"isecdom\",a);if(b===Object)throw da(\"isecobj\",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw da(\"isecfn\",\na);if(b===Vf||b===Wf||b===Xf)throw da(\"isecff\",a);}}function Yf(b,a){return\"undefined\"!==typeof b?b:a}function md(b,a){return\"undefined\"===typeof b?a:\"undefined\"===typeof a?b:b+a}function T(b,a){var c,d;switch(b.type){case q.Program:c=!0;m(b.body,function(b){T(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case q.Literal:b.constant=!0;b.toWatch=[];break;case q.UnaryExpression:T(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case q.BinaryExpression:T(b.left,\na);T(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case q.LogicalExpression:T(b.left,a);T(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case q.ConditionalExpression:T(b.test,a);T(b.alternate,a);T(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case q.Identifier:b.constant=!1;b.toWatch=[b];break;case q.MemberExpression:T(b.object,\na);b.computed&&T(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case q.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){T(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case q.AssignmentExpression:T(b.left,a);T(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case q.ArrayExpression:c=!0;d=[];m(b.elements,\nfunction(b){T(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case q.ObjectExpression:c=!0;d=[];m(b.properties,function(b){T(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case q.ThisExpression:b.constant=!1,b.toWatch=[]}}function nd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:t}}function od(b){return b.type===q.Identifier||b.type===q.MemberExpression}\nfunction pd(b){if(1===b.body.length&&od(b.body[0].expression))return{type:q.AssignmentExpression,left:b.body[0].expression,right:{type:q.NGValueParameter},operator:\"=\"}}function qd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===q.Literal||b.body[0].expression.type===q.ArrayExpression||b.body[0].expression.type===q.ObjectExpression)}function rd(b,a){this.astBuilder=b;this.$filter=a}function sd(b,a){this.astBuilder=b;this.$filter=a}function Eb(b,a,c,d){oa(b,d);a=a.split(\".\");\nfor(var e,f=0;1<a.length;f++){e=Ca(a.shift(),d);var g=oa(b[e],d);g||(g={},b[e]=g);b=g}e=Ca(a.shift(),d);oa(b[e],d);return b[e]=c}function Fb(b){return\"constructor\"==b}function fc(b){return z(b.valueOf)?b.valueOf():Zf.call(b)}function hf(){var b=ga(),a=ga();this.$get=[\"$filter\",\"$sniffer\",function(c,d){function e(a,b){return null==a||null==b?a===b:\"object\"===typeof a&&(a=fc(a),\"object\"===typeof a)?!1:a===b||a!==a&&b!==b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=\ng(a);e(b,k)||(h=d(a,t,t,[b]),k=b&&fc(b));return h},b,c,f)}for(var l=[],n=[],r=0,m=g.length;r<m;r++)l[r]=e,n[r]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c])))n[c]=k,l[c]=k&&fc(k)}b&&(h=d(a,t,t,n));return h},b,c,f)}function g(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);w(a)&&d.$$postDigest(function(){w(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;m(a,function(a){w(a)||\n(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==g?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return w(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==\nf?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:d.csp,expensiveChecks:!1},r={csp:d.csp,expensiveChecks:!0};return function(d,e,C){var m,u,p;switch(typeof d){case \"string\":p=d=d.trim();var q=C?a:b;m=q[p];m||(\":\"===d.charAt(0)&&\":\"===d.charAt(1)&&(u=!0,d=d.substring(2)),C=C?r:n,m=new gc(C),m=(new hc(m,c,C)).parse(d),m.constant?m.$$watchDelegate=l:u?m.$$watchDelegate=m.literal?h:g:m.inputs&&(m.$$watchDelegate=f),q[p]=m);return k(m,\ne);case \"function\":return k(d,e);default:return v}}}]}function kf(){this.$get=[\"$rootScope\",\"$exceptionHandler\",function(b,a){return td(function(a){b.$evalAsync(a)},a)}]}function lf(){this.$get=[\"$browser\",\"$exceptionHandler\",function(b,a){return td(function(a){b.defer(a)},a)}]}function td(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&\nc.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{z(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=J(\"$q\",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||\n[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},\"catch\":function(a){return this.then(null,a)},\"finally\":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h(\"qcycle\",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(H(b)||z(b))d=b&&b.then;z(d)?(this.promise.$$state.status=\n-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(z(b)?\nb(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return l(e,!1)}return d&&z(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function x(a){if(!z(a))throw h(\"norslvr\",a);if(!(this instanceof x))return new x(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};\nr.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=n;r.resolve=n;r.all=function(a){var b=new g,c=0,d=G(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function uf(){this.$get=[\"$window\",\"$timeout\",function(b,a){function c(){for(var a=0;a<n.length;a++){var b=n[a];b&&(n[a]=null,b())}k=n.length=0}function d(a){var b=\nn.length;k++;n.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=n[b]=null,0===--k&&l&&(l(),l=null,n.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,n=[];return d}]}function jf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=\nthis.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=J(\"$rootScope\"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=[\"$injector\",\"$exceptionHandler\",\"$parse\",\"$browser\",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=\nthis.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function r(a){if(p.$$phase)throw c(\"inprog\",p.$$phase);p.$$phase=a}function s(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function x(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function F(){for(;I.length;)try{I.shift()()}catch(a){g(a)}e=null}function u(){null===e&&(e=\nl.defer(function(){p.$apply(F)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on(\"$destroy\",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,k=g.$$watchers,l=\n{fn:b,last:q,get:f,exp:e||a,eq:!!c};d=null;z(b)||(l.fn=v);k||(k=g.$$watchers=[]);k.unshift(l);s(this,1);return function(){0<=bb(k,l)&&s(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,b){var k=g.$watch(a,function(a,\nf){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!A(e)){if(H(e))if(Ea(e))for(f!==r&&(f=r,m=f.length=0,l++),a=e.length,m!==a&&(l++,f.length=m=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==s&&(f=s={},m=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(m++,f[b]=g,l++));if(m>a)for(b in l++,f)e.hasOwnProperty(b)||\n(m--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,n=h(a,c),r=[],s={},p=!0,m=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(k)if(H(e))if(Ea(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Xa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,n,s,m=a,x,u=[],E,I;r(\"$digest\");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),F());d=null;do{s=!1;for(x=this;t.length;){try{I=t.shift(),\nI.scope.$eval(I.expression,I.locals)}catch(v){g(v)}d=null}a:do{if(k=x.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(x))!==(h=b.last)&&!(b.eq?ka(f,h):\"number\"===typeof f&&\"number\"===typeof h&&isNaN(f)&&isNaN(h)))s=!0,d=b,b.last=b.eq?fa(f,null):f,b.fn(f,h===q?f:h,x),5>m&&(E=4-m,u[E]||(u[E]=[]),u[E].push({msg:z(b.exp)?\"fn: \"+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){s=!1;break a}}catch(A){g(A)}if(!(k=x.$$watchersCount&&x.$$childHead||x!==this&&x.$$nextSibling))for(;x!==\nthis&&!(k=x.$$nextSibling);)x=x.$parent}while(x=k);if((s||t.length)&&!m--)throw p.$$phase=null,c(\"infdig\",a,u);}while(s||t.length);for(p.$$phase=null;w.length;)try{w.shift()()}catch(y){g(y)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast(\"$destroy\");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();s(this,-this.$$watchersCount);for(var b in this.$$listenerCount)x(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==\nthis&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},\n$evalAsync:function(a,b){p.$$phase||t.length||l.defer(function(){t.length&&p.$digest()});t.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){w.push(a)},$apply:function(a){try{return r(\"$apply\"),this.$eval(a)}catch(b){g(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&I.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||\n(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,x(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,n;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,n--;if(f)return h.currentScope=\nnull,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=\nc.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new n,t=p.$$asyncQueue=[],w=p.$$postDigestQueue=[],I=p.$$applyAsyncQueue=[];return p}]}function he(){var b=/^\\s*(https?|ftp|mailto|tel|file):/,a=/^\\s*((https?|ftp|file|blob):|data:image\\/)/;this.aHrefSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return\"\"===f||f.match(e)?c:\"unsafe:\"+\nf}}}function $f(b){if(\"self\"===b)return b;if(L(b)){if(-1<b.indexOf(\"***\"))throw Da(\"iwcard\",b);b=ud(b).replace(\"\\\\*\\\\*\",\".*\").replace(\"\\\\*\",\"[^:/.?&;]*\");return new RegExp(\"^\"+b+\"$\")}if(Za(b))return new RegExp(\"^\"+b.source+\"$\");throw Da(\"imatcher\");}function vd(b){var a=[];w(b)&&m(b,function(b){a.push($f(b))});return a}function nf(){this.SCE_CONTEXTS=pa;var b=[\"self\"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=vd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&\n(a=vd(b));return a};this.$get=[\"$injector\",function(c){function d(a,b){return\"self\"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Da(\"unsafe\");};c.has(\"$sanitize\")&&(f=c.get(\"$sanitize\"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=\ne(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Da(\"icontext\",a,b);if(null===b||b===t||\"\"===b)return b;if(\"string\"!==typeof b)throw Da(\"itype\",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||\"\"===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Ba(e.toString()),r,s,m=!1;r=0;for(s=b.length;r<s;r++)if(d(b[r],g)){m=!0;break}if(m)for(r=\n0,s=a.length;r<s;r++)if(d(a[r],g)){m=!1;break}if(m)return e;throw Da(\"insecurl\",e.toString());}if(c===pa.HTML)return f(e);throw Da(\"unsafe\");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function mf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=[\"$parse\",\"$sceDelegate\",function(a,c){if(b&&8>Ua)throw Da(\"iequirks\");var d=ia(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=\nd.getTrusted=function(a,b){return b},d.valueOf=Ya);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;m(pa,function(a,b){var c=M(b);d[hb(\"parse_as_\"+c)]=function(b){return e(a,b)};d[hb(\"get_trusted_\"+c)]=function(b){return f(a,b)};d[hb(\"trust_as_\"+c)]=function(b){return g(a,b)}});return d}]}function of(){this.$get=[\"$window\",\"$document\",function(b,a){var c={},d=W((/android (\\d+)/.exec(M((b.navigator||\n{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var r in l)if(k=h.exec(r)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g=\"WebkitOpacity\"in l&&\"webkit\");k=!!(\"transition\"in l||g+\"Transition\"in l);n=!!(\"animation\"in l||g+\"Animation\"in l);!d||k&&n||(k=L(l.webkitTransition),n=L(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if(\"input\"===\na&&11>=Ua)return!1;if(A(c[a])){var b=f.createElement(\"div\");c[a]=\"on\"+a in b}return c[a]},csp:fb(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function qf(){this.$get=[\"$templateCache\",\"$http\",\"$q\",\"$sce\",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;L(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=a.defaults&&a.defaults.transformResponse;G(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return a.get(f,{cache:b,transformResponse:h})[\"finally\"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,\na.data);return a.data},function(a){if(!g)throw ea(\"tpload\",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function rf(){this.$get=[\"$rootScope\",\"$browser\",\"$location\",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName(\"ng-binding\");var g=[];m(a,function(a){var d=ca.element(a).data(\"$binding\");d&&m(d,function(d){c?(new RegExp(\"(^|\\\\s)\"+ud(b)+\"(\\\\s|\\\\||$)\")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,\nb,c){for(var g=[\"ng-\",\"data-ng-\",\"ng\\\\:\"],h=0;h<g.length;++h){var l=a.querySelectorAll(\"[\"+g[h]+\"model\"+(c?\"=\":\"*=\")+'\"'+b+'\"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function sf(){this.$get=[\"$rootScope\",\"$browser\",\"$q\",\"$$q\",\"$exceptionHandler\",function(b,a,c,d,e){function f(f,l,k){z(f)||(k=l,l=f,f=v);var n=za.call(arguments,3),r=w(k)&&!k,s=(r?d:c).defer(),\nm=s.promise,q;q=a.defer(function(){try{s.resolve(f.apply(null,n))}catch(a){s.reject(a),e(a)}finally{delete g[m.$$timeoutId]}r||b.$apply()},l);m.$$timeoutId=q;g[q]=s;return m}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject(\"canceled\"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ua&&(X.setAttribute(\"href\",b),b=X.href);X.setAttribute(\"href\",b);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,\"\"):\"\",host:X.host,\nsearch:X.search?X.search.replace(/^\\?/,\"\"):\"\",hash:X.hash?X.hash.replace(/^#/,\"\"):\"\",hostname:X.hostname,port:X.port,pathname:\"/\"===X.pathname.charAt(0)?X.pathname:\"/\"+X.pathname}}function gd(b){b=L(b)?Ba(b):b;return b.protocol===wd.protocol&&b.host===wd.host}function tf(){this.$get=ra(O)}function xd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e=\"\";return function(){var b,g,h,l,k;b=c.cookie||\"\";if(b!==e)for(e=b,b=e.split(\"; \"),d={},h=0;h<b.length;h++)g=\nb[h],l=g.indexOf(\"=\"),0<l&&(k=a(g.substring(0,l)),d[k]===t&&(d[k]=a(g.substring(l+1))));return d}}function yf(){this.$get=xd}function Lc(b){function a(c,d){if(H(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+\"Filter\",d)}this.register=a;this.$get=[\"$injector\",function(a){return function(b){return a.get(b+\"Filter\")}}];a(\"currency\",yd);a(\"date\",zd);a(\"filter\",ag);a(\"json\",bg);a(\"limitTo\",cg);a(\"lowercase\",dg);a(\"number\",Ad);a(\"orderBy\",Bd);a(\"uppercase\",eg)}function ag(){return function(b,\na,c){if(!Ea(b)){if(null==b)return b;throw J(\"filter\")(\"notarray\",b);}var d;switch(ic(a)){case \"function\":break;case \"boolean\":case \"null\":case \"number\":case \"string\":d=!0;case \"object\":a=fg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function fg(b,a,c){var d=H(b)&&\"$\"in b;!0===a?a=ka:z(a)||(a=function(a,b){if(A(a))return!1;if(null===a||null===b)return a===b;if(H(b)||H(a)&&!rc(a))return!1;a=M(\"\"+a);b=M(\"\"+b);return-1!==a.indexOf(b)});return function(e){return d&&!H(e)?La(e,\nb.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=ic(b),g=ic(a);if(\"string\"===g&&\"!\"===a.charAt(0))return!La(b,a.substring(1),c,d);if(G(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case \"object\":var h;if(d){for(h in b)if(\"$\"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if(\"object\"===g){for(h in a)if(e=a[h],!z(e)&&!A(e)&&(f=\"$\"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case \"function\":return!1;default:return c(b,a)}}function ic(b){return null===\nb?\"null\":typeof b}function yd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){A(d)&&(d=a.CURRENCY_SYM);A(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Cd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\\u00A4/g,d)}}function Ad(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Cd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Cd(b,a,c,d,e){if(H(b))return\"\";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return\"\";var h=b+\"\",l=\"\",k=!1,n=[];g&&(l=\"\\u221e\");\nif(!g&&-1!==h.indexOf(\"e\")){var r=h.match(/([\\d\\.]+)e(-?)(\\d+)/);r&&\"-\"==r[2]&&r[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Dd)[1]||\"\").length;A(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+\"e\"+e)).toString()+\"e\"+-e);var g=(\"\"+b).split(Dd),h=g[0],g=g[1]||\"\",r=0,s=a.lgSize,m=a.gSize;if(h.length>=s+m)for(r=h.length-s,k=0;k<r;k++)0===(r-k)%m&&0!==k&&(l+=c),l+=h.charAt(k);for(k=r;k<h.length;k++)0===(h.length-k)%s&&0!==k&&\n(l+=c),l+=h.charAt(k);for(;g.length<e;)g+=\"0\";e&&\"0\"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join(\"\")}function Gb(b,a,c){var d=\"\";0>b&&(d=\"-\",b=-b);for(b=\"\"+b;b.length<a;)b=\"0\"+b;c&&(b=b.substr(b.length-a));return d+b}function Y(b,a,c,d){c=c||0;return function(e){e=e[\"get\"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c[\"get\"+b](),f=rb(a?\"SHORT\"+b:b);return d[f][e]}}function Ed(b){var a=\n(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function jc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function zd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=W(b[9]+b[10]),g=W(b[9]+b[11]));h.call(a,W(b[1]),\nW(b[2])-1,W(b[3]));f=W(b[4]||0)-f;g=W(b[5]||0)-g;h=W(b[6]||0);b=Math.round(1E3*parseFloat(\"0.\"+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\\d{4})-?(\\d\\d)-?(\\d\\d)(?:T(\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:\\.(\\d+))?)?)?(Z|([+-])(\\d\\d):?(\\d\\d))?)?$/;return function(c,e,f){var g=\"\",h=[],l,k;e=e||\"mediumDate\";e=b.DATETIME_FORMATS[e]||e;L(c)&&(c=gg.test(c)?W(c):a(c));V(c)&&(c=new Date(c));if(!aa(c)||!isFinite(c.getTime()))return c;for(;e;)(k=hg.exec(e))?(h=cb(h,k,1),e=h.pop()):(h.push(e),e=null);var n=c.getTimezoneOffset();\nf&&(n=xc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));m(h,function(a){l=ig[a];g+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,\"\").replace(/''/g,\"'\")});return g}}function bg(){return function(b,a){A(a)&&(a=2);return db(b,a)}}function cg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):W(a);if(isNaN(a))return b;V(b)&&(b=b.toString());if(!G(b)&&!L(b))return b;c=!c||isNaN(c)?0:W(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,\nc+a),c)}}function Bd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,h=Ya;if(z(a))h=a;else if(L(a)){if(\"+\"==a.charAt(0)||\"-\"==a.charAt(0))d=\"-\"==a.charAt(0)?-1:1,a=a.substring(1);if(\"\"!==a&&(h=b(a),h.constant))var l=h(),h=function(a){return a[l]}}return{get:h,descending:d*c}})}function c(a){switch(typeof a){case \"number\":case \"boolean\":case \"string\":return!0;default:return!1}}return function(b,e,f){if(!Ea(b))return b;G(e)||(e=[e]);0===e.length&&(e=[\"+\"]);var g=a(e,f);b=Array.prototype.map.call(b,\nfunction(a,b){return{value:a,predicateValues:g.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d=\"string\",e=\"null\";else if(\"string\"===d)e=e.toLowerCase();else if(\"object\"===d)a:{if(\"function\"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(rc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});b.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],m=0;c.type===f.type?c.value!==f.value&&(m=c.value<f.value?-1:1):m=c.type<f.type?\n-1:1;if(c=m*g[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Ma(b){z(b)&&(b={link:b});b.restrict=b.restrict||\"AC\";return ra(b)}function Gd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller(\"form\")||Ib;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||\"\")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){m(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=\nfunction(){m(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,\"input\");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,a)});bb(g,a)};Hd({ctrl:this,$element:b,set:function(a,b,\nc){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(bb(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Va);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Va,Jb+\" ng-submitted\");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;m(g,function(a){a.$setPristine()})};f.$setUntouched=function(){m(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,\n\"ng-submitted\");f.$submitted=!0;h.$setSubmitted()}}function kc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function kb(b,a,c,d,e,f){var g=M(a[0].type);if(!e.android){var h=!1;a.on(\"compositionstart\",function(a){h=!0});a.on(\"compositionend\",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;\"password\"===g||c.ngTrim&&\"false\"===c.ngTrim||(e=R(e));(d.$viewValue!==e||\"\"===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};\nif(e.hasEvent(\"input\"))a.on(\"input\",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on(\"keydown\",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent(\"paste\"))a.on(\"paste cut\",n)}a.on(\"change\",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?\"\":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(aa(c))return c;if(L(c)){'\"'==c.charAt(0)&&'\"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));\nif(jg.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function lb(b,a,c,d){return function(e,f,g,h,l,k,n){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)?\naa(a)?a:c(a):t}Id(e,f,g,h);kb(e,f,g,h,l,k);var m=h&&h.$options&&h.$options.timezone,q;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,q),m&&(b=Pb(b,m)),b):t});h.$formatters.push(function(a){if(a&&!aa(a))throw Lb(\"datefmt\",a);if(r(a))return(q=a)&&m&&(q=Pb(q,m,!0)),n(\"date\")(a,d,m);q=null;return\"\"});if(w(g.min)||g.ngMin){var F;h.$validators.min=function(a){return!r(a)||A(F)||c(a)>=F};g.$observe(\"min\",function(a){F=s(a);h.$validate()})}if(w(g.max)||g.ngMax){var u;\nh.$validators.max=function(a){return!r(a)||A(u)||c(a)<=u};g.$observe(\"max\",function(a){u=s(a);h.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=H(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop(\"validity\")||{};return c.badInput&&!c.typeMismatch?t:b})}function Jd(b,a,c,d,e){if(w(d)){b=b(d);if(!b.constant)throw J(\"ngModel\")(\"constexpr\",c,d);return b(a)}return e}function lc(b,a){b=\"ngClass\"+b;return[\"$animate\",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=\na[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return G(a)?(m(a,function(a){b=b.concat(e(a))}),b):L(a)?a.split(\" \"):H(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(\" \")))}),b):a}return{restrict:\"AC\",link:function(f,g,h){function l(a,b){var c=g.data(\"$classCounts\")||ga(),d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data(\"$classCounts\",c);return d.join(\" \")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var m=\nl(k,1);h.$addClass(m)}else if(!ka(b,n)){var q=e(n),m=d(k,q),k=d(q,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(g,m);k&&k.length&&c.removeClass(g,k)}}n=ia(b)}var n;f.$watch(h[b],k,!0);h.$observe(\"class\",function(a){k(f.$eval(h[b]))});\"ngClass\"!==b&&f.$watch(\"$index\",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}\nfunction c(b,c){b=b?\"-\"+Bc(b,\"-\"):\"\";a(mb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Kd]=!(f[mb]=e.hasClass(mb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=t));ab(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=d.$invalid=t,c(\"\",null)):(a(Md,\n!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c(\"\",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var kg=/^\\/(.+)\\/([a-z]*)$/,M=function(b){return L(b)?b.toLowerCase():b},Xa=Object.prototype.hasOwnProperty,rb=function(b){return L(b)?b.toUpperCase():b},Ua,y,la,za=[].slice,Nf=[].splice,lg=[].push,sa=Object.prototype.toString,sc=Object.getPrototypeOf,Fa=J(\"ng\"),ca=\nO.angular||(O.angular={}),gb,nb=0;Ua=U.documentMode;v.$inject=[];Ya.$inject=[];var G=Array.isArray,uc=/^\\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\\]$/,R=function(b){return L(b)?b.trim():b},ud=function(b){return b.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,\"\\\\$1\").replace(/\\x08/g,\"\\\\x08\")},fb=function(){if(w(fb.isActive_))return fb.isActive_;var b=!(!U.querySelector(\"[ng-csp]\")&&!U.querySelector(\"[data-ng-csp]\"));if(!b)try{new Function(\"\")}catch(a){b=!0}return fb.isActive_=\nb},pb=function(){if(w(pb.name_))return pb.name_;var b,a,c=Oa.length,d,e;for(a=0;a<c;++a)if(d=Oa[a],b=U.querySelector(\"[\"+d.replace(\":\",\"\\\\:\")+\"jq]\")){e=b.getAttribute(d+\"jq\");break}return pb.name_=e},Oa=[\"ng-\",\"data-ng-\",\"ng:\",\"x-ng-\"],be=/[A-Z]/g,Cc=!1,Rb,qa=1,Na=3,fe={full:\"1.4.2\",major:1,minor:4,dot:2,codeName:\"nebular-readjustment\"};Q.expando=\"ng339\";var ib=Q.cache={},Ef=1;Q._data=function(b){return this.cache[b[this.expando]]||{}};var zf=/([\\:\\-\\_]+(.))/g,Af=/^moz([A-Z])/,mg={mouseleave:\"mouseout\",\nmouseenter:\"mouseover\"},Ub=J(\"jqLite\"),Df=/^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,Tb=/<|&#?\\w+;/,Bf=/<([\\w:]+)/,Cf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi,na={option:[1,'<select multiple=\"multiple\">',\"</select>\"],thead:[1,\"<table>\",\"</table>\"],col:[2,\"<table><colgroup>\",\"</colgroup></table>\"],tr:[2,\"<table><tbody>\",\"</tbody></table>\"],td:[3,\"<table><tbody><tr>\",\"</tr></tbody></table>\"],_default:[0,\"\",\"\"]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;\nna.th=na.td;var Pa=Q.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;\"complete\"===U.readyState?setTimeout(a):(this.on(\"DOMContentLoaded\",a),Q(O).on(\"load\",a))},toString:function(){var b=[];m(this,function(a){b.push(\"\"+a)});return\"[\"+b.join(\", \")+\"]\"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:lg,sort:[].sort,splice:[].splice},Ab={};m(\"multiple selected checked disabled readOnly required open\".split(\" \"),function(b){Ab[M(b)]=b});var Tc={};m(\"input select option textarea button form details\".split(\" \"),\nfunction(b){Tc[b]=!0});var Uc={ngMinlength:\"minlength\",ngMaxlength:\"maxlength\",ngMin:\"min\",ngMax:\"max\",ngPattern:\"pattern\"};m({data:Wb,removeData:ub,hasData:function(b){for(var a in ib[b.ng339])return!0;return!1}},function(b,a){Q[a]=b});m({data:Wb,inheritedData:zb,scope:function(b){return y.data(b,\"$scope\")||zb(b.parentNode||b,[\"$isolateScope\",\"$scope\"])},isolateScope:function(b){return y.data(b,\"$isolateScope\")||y.data(b,\"$isolateScopeNoTemplate\")},controller:Qc,injector:function(b){return zb(b,\n\"$injector\")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:wb,css:function(b,a,c){a=hb(a);if(w(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Na&&2!==d&&8!==d)if(d=M(a),Ab[d])if(w(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:t;else if(w(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(w(c))b[a]=c;else return b[a]},\ntext:function(){function b(a,b){if(A(b)){var d=a.nodeType;return d===qa||d===Na?a.textContent:\"\"}a.textContent=b}b.$dv=\"\";return b}(),val:function(b,a){if(A(a)){if(b.multiple&&\"select\"===ta(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(A(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Rc},function(b,a){Q.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Rc&&(2==b.length&&b!==wb&&b!==Qc?\na:d)===t){if(H(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});m({removeData:ub,on:function a(c,d,e,f){if(w(f))throw Ub(\"onargs\");if(Mc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Hf(c,f));for(var g=0<=d.indexOf(\" \")?d.split(\" \"):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],\"mouseenter\"===d||\"mouseleave\"===\nd?a(c,mg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):\"$destroy\"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Pc,one:function(a,c,d){a=y(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);m(new Q(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||\na.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new Q(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;m(new Q(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new Q(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,\nd.nextSibling);d=h}},addClass:yb,removeClass:xb,toggleClass:function(a,c,d){c&&m(c.split(\" \"),function(c){var f=d;A(f)&&(f=!wb(a,c));(f?yb:xb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===\nthis.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=P(e,c)),c=ia(h),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){Q.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)A(g)?(g=a(this[h],c,e,f),w(g)&&(g=y(g))):Oc(g,a(this[h],c,e,f));return w(g)?g:this};Q.prototype.bind=\nQ.prototype.on;Q.prototype.unbind=Q.prototype.off});Sa.prototype={put:function(a,c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];return c}};var xf=[function(){this.$get=[function(){return Sa}]}],Wc=/^function\\s*[^\\(]*\\(\\s*([^\\)]*)\\)/m,ng=/,/,og=/^\\s*(_?)(\\S+?)\\1\\s*$/,Vc=/((\\/\\/.*$)|(\\/\\*[\\s\\S]*?\\*\\/))/mg,Ha=J(\"$injector\");eb.$$annotate=function(a,c,d){var e;if(\"function\"===typeof a){if(!(e=a.$inject)){e=\n[];if(a.length){if(c)throw L(d)&&d||(d=a.name||If(a)),Ha(\"strictdi\",d);c=a.toString().replace(Vc,\"\");c=c.match(Wc);m(c[1].split(ng),function(a){a.replace(og,function(a,c,d){e.push(d)})})}a.$inject=e}}else G(a)?(c=a.length-1,Qa(a[c],\"fn\"),e=a.slice(0,c)):Qa(a,\"fn\",!0);return e};var Nd=J(\"$animate\"),Ue=function(){this.$get=[\"$q\",\"$$rAF\",function(a,c){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,\nf)}};return d}]},Te=function(){var a=new Sa,c=[];this.$get=[\"$$AnimateRunner\",\"$rootScope\",function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));f&&m(f.split(\" \"),function(a){a&&(k[a]=!0)});l&&m(l.split(\" \"),function(a){a&&(k[a]=!1)});1<c.length||e.$$postDigest(function(){m(c,function(c){var d=a.get(c);if(d){var e=Jf(c.attr(\"class\")),f=\"\",g=\"\";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?\" \":\"\")+c:g+=(g.length?\" \":\"\")+c)});m(c,function(a){f&&yb(a,f);g&&xb(a,g)});a.remove(c)}});\nc.length=0})}return{enabled:v,on:v,off:v,pin:v,push:function(a,c,e,k){k&&k();e=e||{};e.from&&a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Se=[\"$provide\",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&\".\"!==d.charAt(0))throw Nd(\"notcsel\",d);var f=d+\"-animation\";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=\na instanceof RegExp?a:null)&&/(\\s+|\\/)ng-animate(\\s+|\\/)/.test(this.$$classNameFilter.toString()))throw Nd(\"nongcls\",\"ng-animate\");return this.$$classNameFilter};this.$get=[\"$$animateQueue\",function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=\ng&&y(g);h=h&&y(h);g=g||h.parent();c(f,g,h);return a.push(f,\"enter\",Ia(l))},move:function(f,g,h,l){g=g&&y(g);h=h&&y(h);g=g||h.parent();c(f,g,h);return a.push(f,\"move\",Ia(l))},leave:function(c,e){return a.push(c,\"leave\",Ia(e),function(){c.remove()})},addClass:function(c,e,h){h=Ia(h);h.addClass=jb(h.addclass,e);return a.push(c,\"addClass\",h)},removeClass:function(c,e,h){h=Ia(h);h.removeClass=jb(h.removeClass,e);return a.push(c,\"removeClass\",h)},setClass:function(c,e,h,l){l=Ia(l);l.addClass=jb(l.addClass,\ne);l.removeClass=jb(l.removeClass,h);return a.push(c,\"setClass\",l)},animate:function(c,e,h,l,k){k=Ia(k);k.from=k.from?P(k.from,e):e;k.to=k.to?P(k.to,h):h;k.tempClasses=jb(k.tempClasses,l||\"ng-inline-animate\");return a.push(c,\"animate\",k)}}}]}],ea=J(\"$compile\");Ec.$inject=[\"$provide\",\"$$sanitizeUriProvider\"];var Zc=/^((?:x|data)[\\:\\-_])/i,Of=J(\"$controller\"),Xc=/^(\\S+)(\\s+as\\s+(\\w+))?$/,cd=\"application/json\",ac={\"Content-Type\":cd+\";charset=utf-8\"},Qf=/^\\[|^\\{(?!\\{)/,Rf={\"[\":/]$/,\"{\":/}$/},Pf=/^\\)\\]\\}',?\\n/,\nKa=ca.$interpolateMinErr=J(\"$interpolate\");Ka.throwNoconcat=function(a){throw Ka(\"noconcat\",a);};Ka.interr=function(a,c){return Ka(\"interr\",a,c.toString())};var pg=/^([^\\?#]*)(\\?([^#]*))?(#(.*))?$/,Uf={http:80,https:443,ftp:21},Cb=J(\"$location\"),qg={$$html5:!1,$$replace:!1,absUrl:Db(\"$$absUrl\"),url:function(a){if(A(a))return this.$$url;var c=pg.exec(a);(c[1]||\"\"===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||\"\"===a)&&this.search(c[3]||\"\");this.hash(c[5]||\"\");return this},protocol:Db(\"$$protocol\"),\nhost:Db(\"$$host\"),port:Db(\"$$port\"),path:kd(\"$$path\",function(a){a=null!==a?a.toString():\"\";return\"/\"==a.charAt(0)?a:\"/\"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(L(a)||V(a))a=a.toString(),this.$$search=zc(a);else if(H(a))a=fa(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Cb(\"isrcharg\");break;default:A(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:kd(\"$$hash\",function(a){return null!==\na?a.toString():\"\"}),replace:function(){this.$$replace=!0;return this}};m([jd,ec,dc],function(a){a.prototype=Object.create(qg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Cb(\"nostate\");this.$$state=A(c)?null:c;return this}});var da=J(\"$parse\"),Vf=Function.prototype.call,Wf=Function.prototype.apply,Xf=Function.prototype.bind,Mb=ga();m(\"+ - * / % === !== == != < > <= >= && || ! = |\".split(\" \"),function(a){Mb[a]=!0});var rg={n:\"\\n\",f:\"\\f\",r:\"\\r\",\nt:\"\\t\",v:\"\\v\",\"'\":\"'\",'\"':'\"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'\"'===a||\"'\"===a)this.readString(a);else if(this.isNumber(a)||\".\"===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,\"(){}[].,;:?\"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;\nelse{var c=a+this.peek(),d=c+this.peek(2),e=Mb[c],f=Mb[d];Mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError(\"Unexpected next character \",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return\"0\"<=a&&\"9\">=a&&\"string\"===typeof a},isWhitespace:function(a){return\" \"===a||\"\\r\"===a||\n\"\\t\"===a||\"\\n\"===a||\"\\v\"===a||\"\\u00a0\"===a},isIdent:function(a){return\"a\"<=a&&\"z\">=a||\"A\"<=a&&\"Z\">=a||\"_\"===a||\"$\"===a},isExpOperator:function(a){return\"-\"===a||\"+\"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=w(c)?\"s \"+c+\"-\"+this.index+\" [\"+this.text.substring(c,d)+\"]\":\" \"+d;throw da(\"lexerr\",a,c,this.text);},readNumber:function(){for(var a=\"\",c=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if(\".\"==d||this.isNumber(d))a+=d;else{var e=this.peek();\nif(\"e\"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&\"e\"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||\"e\"!=a.charAt(a.length-1))break;else this.throwError(\"Invalid exponent\")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,\ntext:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d=\"\",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)\"u\"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\\da-f]{4}/i)||this.throwError(\"Invalid unicode escape [\\\\u\"+f+\"]\"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=rg[g]||g,f=!1;else if(\"\\\\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,\nvalue:d});return}d+=g}this.index++}this.throwError(\"Unterminated quote\",c)}};var q=function(a,c){this.lexer=a;this.options=c};q.Program=\"Program\";q.ExpressionStatement=\"ExpressionStatement\";q.AssignmentExpression=\"AssignmentExpression\";q.ConditionalExpression=\"ConditionalExpression\";q.LogicalExpression=\"LogicalExpression\";q.BinaryExpression=\"BinaryExpression\";q.UnaryExpression=\"UnaryExpression\";q.CallExpression=\"CallExpression\";q.MemberExpression=\"MemberExpression\";q.Identifier=\"Identifier\";q.Literal=\n\"Literal\";q.ArrayExpression=\"ArrayExpression\";q.Property=\"Property\";q.ObjectExpression=\"ObjectExpression\";q.ThisExpression=\"ThisExpression\";q.NGValueParameter=\"NGValueParameter\";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError(\"is an unexpected token\",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek(\"}\",\")\",\";\",\"]\")&&a.push(this.expressionStatement()),!this.expect(\";\"))return{type:q.Program,\nbody:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect(\"|\");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect(\"=\")&&(a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:\"=\"});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect(\"?\")&&(c=this.expression(),this.consume(\":\"))?\n(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect(\"||\");)a={type:q.LogicalExpression,operator:\"||\",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect(\"&&\");)a={type:q.LogicalExpression,operator:\"&&\",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect(\"==\",\"!=\",\"===\",\"!==\");)a={type:q.BinaryExpression,\noperator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect(\"<\",\">\",\"<=\",\">=\");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect(\"+\",\"-\");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect(\"*\",\"/\",\"%\");)a={type:q.BinaryExpression,operator:c.text,\nleft:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect(\"+\",\"-\",\"!\"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect(\"(\")?(a=this.filterChain(),this.consume(\")\")):this.expect(\"[\")?a=this.arrayDeclaration():this.expect(\"{\")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=fa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():\nthis.throwError(\"not a primary expression\",this.peek());for(var c;c=this.expect(\"(\",\"[\",\".\");)\"(\"===c.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(\")\")):\"[\"===c.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume(\"]\")):\".\"===c.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError(\"IMPOSSIBLE\");return a},filter:function(a){a=[a];for(var c={type:q.CallExpression,callee:this.identifier(),\narguments:a,filter:!0};this.expect(\":\");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(\")\"!==this.peekToken().text){do a.push(this.expression());while(this.expect(\",\"))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError(\"is not a valid identifier\",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if(\"]\"!==this.peekToken().text){do{if(this.peek(\"]\"))break;\na.push(this.expression())}while(this.expect(\",\"))}this.consume(\"]\");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],c;if(\"}\"!==this.peekToken().text){do{if(this.peek(\"}\"))break;c={type:q.Property,kind:\"init\"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError(\"invalid key\",this.peek());this.consume(\":\");c.value=this.expression();a.push(c)}while(this.expect(\",\"))}this.consume(\"}\");return{type:q.ObjectExpression,properties:a}},\nthrowError:function(a,c){throw da(\"syntax\",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw da(\"ueoe\",this.text);var c=this.expect(a);c||this.throwError(\"is unexpected, expecting [\"+a+\"]\",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw da(\"ueoe\",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];\nvar g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{\"true\":{type:q.Literal,value:!0},\"false\":{type:q.Literal,value:!1},\"null\":{type:q.Literal,value:null},undefined:{type:q.Literal,value:t},\"this\":{type:q.ThisExpression}}};rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],\nbody:[],own:{}},inputs:[]};T(e,d.$filter);var f=\"\",g;this.stage=\"assign\";if(g=pd(e))this.state.computing=\"assign\",f=this.nextId(),this.recurse(g,f),f=\"fn.assign=\"+this.generateFunction(\"assign\",\"s,v,l\");g=nd(e.body);d.stage=\"inputs\";m(g,function(a,c){var e=\"fn\"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing=\"fn\";this.stage=\"main\";this.recurse(e);f='\"'+this.USE+\" \"+this.STRICT+'\";\\n'+this.filterPrefix()+\n\"var fn=\"+this.generateFunction(\"fn\",\"s,l,a,i\")+f+this.watchFns()+\"return fn;\";f=(new Function(\"$filter\",\"ensureSafeMemberName\",\"ensureSafeObject\",\"ensureSafeFunction\",\"ifDefined\",\"plus\",\"text\",f))(this.$filter,Ca,oa,ld,Yf,md,a);this.state=this.stage=t;f.literal=qd(e);f.constant=e.constant;return f},USE:\"use\",STRICT:\"strict\",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push(\"var \"+c+\"=\"+d.generateFunction(c,\"s\"))});c.length&&a.push(\"fn.inputs=[\"+c.join(\",\")+\"];\");return a.join(\"\")},\ngenerateFunction:function(a,c){return\"function(\"+c+\"){\"+this.varsPrefix(a)+this.body(a)+\"};\"},filterPrefix:function(){var a=[],c=this;m(this.state.filters,function(d,e){a.push(d+\"=$filter(\"+c.escape(e)+\")\")});return a.length?\"var \"+a.join(\",\")+\";\":\"\"},varsPrefix:function(a){return this.state[a].vars.length?\"var \"+this.state[a].vars.join(\",\")+\";\":\"\"},body:function(a){return this.state[a].body.join(\"\")},recurse:function(a,c,d,e,f,g){var h,l,k=this,n,r;e=e||v;if(!g&&w(a.watchId))c=c||this.nextId(),this.if_(\"i\",\nthis.lazyAssign(c,this.computedMember(\"i\",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case q.Program:m(a.body,function(c,d){k.recurse(c.expression,t,t,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,\";\"):k.return_(l)});break;case q.Literal:r=this.escape(a.value);this.assign(c,r);e(r);break;case q.UnaryExpression:this.recurse(a.argument,t,t,function(a){l=a});r=a.operator+\"(\"+this.ifDefined(l,0)+\")\";this.assign(c,r);e(r);break;case q.BinaryExpression:this.recurse(a.left,\nt,t,function(a){h=a});this.recurse(a.right,t,t,function(a){l=a});r=\"+\"===a.operator?this.plus(h,l):\"-\"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):\"(\"+h+\")\"+a.operator+\"(\"+l+\")\";this.assign(c,r);e(r);break;case q.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if_(\"&&\"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case q.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);\nbreak;case q.Identifier:c=c||this.nextId();d&&(d.context=\"inputs\"===k.stage?\"s\":this.assign(this.nextId(),this.getHasOwnProperty(\"l\",a.name)+\"?l:s\"),d.computed=!1,d.name=a.name);Ca(a.name);k.if_(\"inputs\"===k.stage||k.not(k.getHasOwnProperty(\"l\",a.name)),function(){k.if_(\"inputs\"===k.stage||\"s\",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember(\"s\",a.name)),k.lazyAssign(k.nonComputedMember(\"s\",a.name),\"{}\"));k.assign(c,k.nonComputedMember(\"s\",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember(\"l\",\na.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case q.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,t,function(){k.if_(k.notNull(h),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),\"{}\")),r=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,r),d&&(d.computed=!0,d.name=l);else{Ca(a.property.name);\nf&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),\"{}\"));r=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))r=k.ensureSafeObject(r);k.assign(c,r);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,\"undefined\")});e(c)},!!f);break;case q.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),r=l+\n\"(\"+n.join(\",\")+\")\",k.assign(c,r),e(c)):(l=k.nextId(),h={},n=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(k.ensureSafeObject(a))})});h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),r=k.member(h.context,h.name,h.computed)+\"(\"+n.join(\",\")+\")\"):r=l+\"(\"+n.join(\",\")+\")\";r=k.ensureSafeObject(r);k.assign(c,r)},function(){k.assign(c,\"undefined\")});e(c)}));break;case q.AssignmentExpression:l=\nthis.nextId();h={};if(!od(a.left))throw da(\"lval\");this.recurse(a.left,t,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));r=k.member(h.context,h.name,h.computed)+a.operator+l;k.assign(c,r);e(c||r)})},1);break;case q.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(a)})});r=\"[\"+n.join(\",\")+\"]\";this.assign(c,r);e(r);break;case q.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,\nk.nextId(),t,function(c){n.push(k.escape(a.key.type===q.Identifier?a.key.name:\"\"+a.key.value)+\":\"+c)})});r=\"{\"+n.join(\",\")+\"}\";this.assign(c,r);e(r);break;case q.ThisExpression:this.assign(c,\"s\");e(\"s\");break;case q.NGValueParameter:this.assign(c,\"v\"),e(\"v\")}},getHasOwnProperty:function(a,c){var d=a+\".\"+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+\"&&(\"+this.escape(c)+\" in \"+a+\")\"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,\"=\",c,\";\"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||\n(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return\"ifDefined(\"+a+\",\"+this.escape(c)+\")\"},plus:function(a,c){return\"plus(\"+a+\",\"+c+\")\"},return_:function(a){this.current().body.push(\"return \",a,\";\")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push(\"if(\",a,\"){\");c();e.push(\"}\");d&&(e.push(\"else{\"),d(),e.push(\"}\"))}},not:function(a){return\"!(\"+a+\")\"},notNull:function(a){return a+\"!=null\"},nonComputedMember:function(a,c){return a+\n\".\"+c},computedMember:function(a,c){return a+\"[\"+c+\"]\"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),\";\")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),\";\")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),\";\")},ensureSafeObject:function(a){return\"ensureSafeObject(\"+a+\",text)\"},ensureSafeMemberName:function(a){return\"ensureSafeMemberName(\"+\na+\",text)\"},ensureSafeFunction:function(a){return\"ensureSafeFunction(\"+a+\",text)\"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return\"\\\\u\"+(\"0000\"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(L(a))return\"'\"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+\"'\";if(V(a))return a.toString();if(!0===a)return\"true\";\nif(!1===a)return\"false\";if(null===a)return\"null\";if(\"undefined\"===typeof a)return\"undefined\";throw da(\"esc\");},nextId:function(a,c){var d=\"v\"+this.state.nextId++;a||this.current().vars.push(d+(c?\"=\"+c:\"\"));return d},current:function(){return this.state[this.state.computing]}};sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;T(e,d.$filter);var f,g;if(f=pd(e))g=this.recurse(f);f=nd(e.body);var h;f&&(h=[],m(f,function(a,c){var e=d.recurse(a);\na.input=e;h.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=h);f.literal=qd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,c);case q.UnaryExpression:return f=\nthis.recurse(a.argument),this[\"unary\"+a.operator](f,c);case q.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this[\"binary\"+a.operator](e,f,c);case q.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this[\"binary\"+a.operator](e,f,c);case q.ConditionalExpression:return this[\"ternary?:\"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case q.Identifier:return Ca(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),\nc,d,g.expression);case q.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Ca(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,g.expensiveChecks,c,d,g.expression);case q.CallExpression:return h=[],m(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var m=\n[],q=0;q<h.length;++q)m.push(h[q](a,d,e,g));a=f.apply(t,m,g);return c?{context:t,name:t,value:a}:a}:function(a,d,e,r){var m=f(a,d,e,r),q;if(null!=m.value){oa(m.context,g.expression);ld(m.value,g.expression);q=[];for(var t=0;t<h.length;++t)q.push(oa(h[t](a,d,e,r),g.expression));q=oa(m.value.apply(m.context,q),g.expression)}return c?{value:q}:q};case q.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,r){var m=e(a,d,h,r);a=f(a,d,h,r);oa(m.value,g.expression);\nm.context[m.name]=a;return c?{value:a}:a};case q.ArrayExpression:return h=[],m(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],m=0;m<h.length;++m)g.push(h[m](a,d,e,f));return c?{value:g}:g};case q.ObjectExpression:return h=[],m(a.properties,function(a){h.push({key:a.key.type===q.Identifier?a.key.name:\"\"+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},m=0;m<h.length;++m)g[h[m].key]=h[m].value(a,d,e,f);return c?{value:g}:g};case q.ThisExpression:return function(a){return c?\n{value:a}:a};case q.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},\"unary+\":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=w(d)?+d:0;return c?{value:d}:d}},\"unary-\":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=w(d)?-d:0;return c?{value:d}:d}},\"unary!\":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},\"binary+\":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=md(l,e);return d?{value:l}:l}},\"binary-\":function(a,c,d){return function(e,\nf,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(w(l)?l:0)-(w(e)?e:0);return d?{value:l}:l}},\"binary*\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},\"binary/\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},\"binary%\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},\"binary===\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},\"binary!==\":function(a,\nc,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},\"binary==\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},\"binary!=\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},\"binary<\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},\"binary>\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},\"binary<=\":function(a,c,d){return function(e,\nf,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},\"binary>=\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},\"binary&&\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},\"binary||\":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},\"ternary?:\":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?\n{context:t,name:t,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:t;c&&oa(h,f);return d?{context:g,name:a,value:h}:h}},computedMember:function(a,c,d,e,f){return function(g,h,l,k){var n=a(g,h,l,k),m,s;null!=n&&(m=c(g,h,l,k),Ca(m,f),e&&1!==e&&n&&!n[m]&&(n[m]={}),s=n[m],oa(s,f));return d?{context:n,name:m,value:s}:s}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,n){h=a(h,l,k,n);f&&1!==f&&h&&!h[c]&&(h[c]={});\nl=null!=h?h[c]:t;(d||Fb(c))&&oa(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var hc=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d;this.ast=new q(this.lexer);this.astCompiler=d.csp?new sd(this.ast,c):new rd(this.ast,c)};hc.prototype={constructor:hc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Zf=Object.prototype.valueOf,Da=J(\"$sce\"),pa={HTML:\"html\",CSS:\"css\",URL:\"url\",\nRESOURCE_URL:\"resourceUrl\",JS:\"js\"},ea=J(\"$compile\"),X=U.createElement(\"a\"),wd=Ba(O.location.href);xd.$inject=[\"$document\"];Lc.$inject=[\"$provide\"];yd.$inject=[\"$locale\"];Ad.$inject=[\"$locale\"];var Dd=\".\",ig={yyyy:Y(\"FullYear\",4),yy:Y(\"FullYear\",2,0,!0),y:Y(\"FullYear\",1),MMMM:Hb(\"Month\"),MMM:Hb(\"Month\",!0),MM:Y(\"Month\",2,1),M:Y(\"Month\",1,1),dd:Y(\"Date\",2),d:Y(\"Date\",1),HH:Y(\"Hours\",2),H:Y(\"Hours\",1),hh:Y(\"Hours\",2,-12),h:Y(\"Hours\",1,-12),mm:Y(\"Minutes\",2),m:Y(\"Minutes\",1),ss:Y(\"Seconds\",2),s:Y(\"Seconds\",\n1),sss:Y(\"Milliseconds\",3),EEEE:Hb(\"Day\"),EEE:Hb(\"Day\",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?\"+\":\"\")+(Gb(Math[0<a?\"floor\":\"ceil\"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},hg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,gg=/^\\-?\\d+$/;zd.$inject=[\"$locale\"];var dg=ra(M),eg=ra(rb);Bd.$inject=\n[\"$parse\"];var ie=ra({restrict:\"E\",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if(\"a\"===c[0].nodeName.toLowerCase()){var f=\"[object SVGAnimatedString]\"===sa.call(c.prop(\"href\"))?\"xlink:href\":\"href\";c.on(\"click\",function(a){c.attr(f)||a.preventDefault()})}}}}),sb={};m(Ab,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if(\"multiple\"!=a){var e=wa(\"ng-\"+c),f=d;\"checked\"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});sb[e]=function(){return{restrict:\"A\",\npriority:100,link:f}}}});m(Uc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if(\"ngPattern\"===c&&\"/\"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(kg))){f.$set(\"ngPattern\",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m([\"src\",\"srcset\",\"href\"],function(a){var c=wa(\"ng-\"+a);sb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;\"href\"===a&&\"[object SVGAnimatedString]\"===sa.call(e.prop(\"href\"))&&(h=\"xlinkHref\",f.$attr[h]=\"xlink:href\",\ng=null);f.$observe(c,function(c){c?(f.$set(h,c),Ua&&g&&e.prop(g,f[h])):\"href\"===a&&f.$set(h,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,c){a.$name=c},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Gd.$inject=[\"$element\",\"$attrs\",\"$scope\",\"$animate\",\"$interpolate\"];var Od=function(a){return[\"$timeout\",function(c){return{name:\"form\",restrict:a?\"EAC\":\"E\",controller:Gd,compile:function(d,e){d.addClass(Va).addClass(mb);var f=e.name?\"name\":a&&e.ngForm?\"ngForm\":\n!1;return{pre:function(a,d,e,k){if(!(\"action\"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener(\"submit\",n,!1);d.on(\"$destroy\",function(){c(function(){d[0].removeEventListener(\"submit\",n,!1)},0,!1)})}var m=k.$$parentForm;f&&(Eb(a,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(Eb(a,k.$name,t,k.$name),m.$$renameControl(k,c),Eb(a,k.$name,k,k.$name))}));d.on(\"$destroy\",function(){m.$removeControl(k);f&&Eb(a,e[f],t,\nk.$name);P(k,Ib)})}}}}}]},je=Od(),we=Od(!0),jg=/\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)/,sg=/^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$/,tg=/^[a-z0-9!#$%&'*+\\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ug=/^\\s*(\\-|\\+)?(\\d+|(\\d*(\\.\\d*)))([eE][+-]?\\d+)?\\s*$/,Pd=/^(\\d{4})-(\\d{2})-(\\d{2})$/,Qd=/^(\\d{4})-(\\d\\d)-(\\d\\d)T(\\d\\d):(\\d\\d)(?::(\\d\\d)(\\.\\d{1,3})?)?$/,mc=/^(\\d{4})-W(\\d\\d)$/,Rd=/^(\\d{4})-(\\d\\d)$/,\nSd=/^(\\d\\d):(\\d\\d)(?::(\\d\\d)(\\.\\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e)},date:lb(\"date\",Pd,Kb(Pd,[\"yyyy\",\"MM\",\"dd\"]),\"yyyy-MM-dd\"),\"datetime-local\":lb(\"datetimelocal\",Qd,Kb(Qd,\"yyyy MM dd HH mm ss sss\".split(\" \")),\"yyyy-MM-ddTHH:mm:ss.sss\"),time:lb(\"time\",Sd,Kb(Sd,[\"HH\",\"mm\",\"ss\",\"sss\"]),\"HH:mm:ss.sss\"),week:lb(\"week\",mc,function(a,c){if(aa(a))return a;if(L(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Ed(e),f=7*(f-1);c&&(d=c.getHours(),g=\nc.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},\"yyyy-Www\"),month:lb(\"month\",Rd,Kb(Rd,[\"yyyy\",\"MM\"]),\"yyyy-MM\"),number:function(a,c,d,e,f,g){Id(a,c,d,e);kb(a,c,d,e,f,g);e.$$parserName=\"number\";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ug.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Lb(\"numfmt\",a);a=a.toString()}return a});if(w(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||\nA(h)||a>=h};d.$observe(\"min\",function(a){w(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(w(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||A(l)||a<=l};d.$observe(\"max\",function(a){w(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e);e.$$parserName=\"url\";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},email:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e);\ne.$$parserName=\"email\";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||tg.test(d)}},radio:function(a,c,d,e){A(d.name)&&c.attr(\"name\",++nb);c.on(\"click\",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe(\"value\",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Jd(l,a,\"ngTrueValue\",d.ngTrueValue,!0),n=Jd(l,a,\"ngFalseValue\",d.ngFalseValue,!1);c.on(\"click\",function(a){e.$setViewValue(c[0].checked,a&&\na.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:v,button:v,submit:v,reset:v,file:v},Fc=[\"$browser\",\"$sniffer\",\"$filter\",\"$parse\",function(a,c,d,e){return{restrict:\"E\",require:[\"?ngModel\"],link:{pre:function(f,g,h,l){l[0]&&(Td[M(h.type)]||Td.text)(f,g,h,l[0],c,a,d,e)}}}}],vg=/^(true|false|\\d+)$/,Oe=function(){return{restrict:\"A\",priority:100,compile:function(a,\nc){return vg.test(c.ngValue)?function(a,c,f){f.$set(\"value\",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set(\"value\",a)})}}}},oe=[\"$compile\",function(a){return{restrict:\"AC\",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?\"\":a})}}}}],qe=[\"$interpolate\",\"$compile\",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));\nc.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe(\"ngBindTemplate\",function(a){f.textContent=a===t?\"\":a})}}}}],pe=[\"$sce\",\"$parse\",\"$compile\",function(a,c,d){return{restrict:\"A\",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||\"\").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||\"\")})}}}}],Ne=ra({restrict:\"A\",require:\"ngModel\",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),\nre=lc(\"\",!0),te=lc(\"Odd\",0),se=lc(\"Even\",1),ue=Ma({compile:function(a,c){c.$set(\"ngCloak\",t);a.removeClass(\"ng-cloak\")}}),ve=[function(){return{restrict:\"A\",scope:!0,controller:\"@\",priority:500}}],Kc={},wg={blur:!0,focus:!0};m(\"click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste\".split(\" \"),function(a){var c=wa(\"ng-\"+a);Kc[c]=[\"$parse\",\"$rootScope\",function(d,e){return{restrict:\"A\",compile:function(f,g){var h=\nd(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};wg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ye=[\"$animate\",function(a){return{multiElement:!0,transclude:\"element\",priority:600,terminal:!0,restrict:\"A\",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=U.createComment(\" end ngIf: \"+e.ngIf+\" \");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=\nqb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ze=[\"$templateRequest\",\"$anchorScroll\",\"$animate\",function(a,c,d){return{restrict:\"ECA\",priority:400,terminal:!0,transclude:\"element\",controller:ca.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||\"\",l=f.autoscroll;return function(e,f,m,s,q){var t=0,F,u,p,v=function(){u&&(u.remove(),u=null);F&&(F.$destroy(),F=null);p&&(d.leave(p).then(function(){u=null}),u=p,p=null)};e.$watch(g,function(g){var m=function(){!w(l)||l&&!e.$eval(l)||\nc()},r=++t;g?(a(g,!0).then(function(a){if(r===t){var c=e.$new();s.template=a;a=q(c,function(a){v();d.enter(a,null,f).then(m)});F=c;p=a;F.$emit(\"$includeContentLoaded\",g);e.$eval(h)}},function(){r===t&&(v(),e.$emit(\"$includeContentError\",g))}),e.$emit(\"$includeContentRequested\",g)):(v(),s.template=null)})}}}}],Qe=[\"$compile\",function(a){return{restrict:\"ECA\",priority:-400,require:\"ngInclude\",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Nc(f.template,U).childNodes)(c,function(a){d.append(a)},\n{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],Ae=Ma({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Me=function(){return{restrict:\"A\",priority:100,require:\"ngModel\",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||\", \",g=\"false\"!==d.ngTrim,h=g?R(f):f;e.$parsers.push(function(a){if(!A(a)){var c=[];a&&m(a.split(h),function(a){a&&c.push(g?R(a):a)});return c}});e.$formatters.push(function(a){return G(a)?a.join(f):t});e.$isEmpty=function(a){return!a||\n!a.length}}}},mb=\"ng-valid\",Kd=\"ng-invalid\",Va=\"ng-pristine\",Jb=\"ng-dirty\",Md=\"ng-pending\",Lb=new J(\"ngModel\"),xg=[\"$scope\",\"$exceptionHandler\",\"$attrs\",\"$element\",\"$parse\",\"$animate\",\"$timeout\",\"$rootScope\",\"$q\",\"$interpolate\",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=\n!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||\"\",!1)(a);var r=f(d.ngModel),s=r.assign,q=r,C=s,F=null,u,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+\"()\"),g=f(d.ngModel+\"($$$p)\");q=function(a){var d=r(a);z(d)&&(d=c(a));return d};C=function(a,c){z(r(a))?g(a,{$$$p:p.$modelValue}):s(a,p.$modelValue)}}else if(!r.assign)throw Lb(\"nonassign\",d.ngModel,ua(e));};this.$render=v;this.$isEmpty=function(a){return A(a)||\n\"\"===a||null===a||a!==a};var K=e.inheritedData(\"$formController\")||Ib,y=0;Hd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:K,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Va)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Va);g.addClass(e,Jb);K.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,\"ng-untouched\",\"ng-touched\")};this.$setTouched=\nfunction(){p.$touched=!0;p.$untouched=!1;g.setClass(e,\"ng-touched\",\"ng-untouched\")};this.$rollbackViewValue=function(){h.cancel(F);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=\nfunction(a,c,d){function e(){var d=!0;m(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(m(p.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!z(k.then))throw Lb(\"$asyncValidators\",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},v):h(!0)}function g(a,c){l===y&&p.$setValidity(a,c)}function h(a){l===y&&d(a)}y++;var l=y;(function(){var a=\np.$$parserName||\"parse\";if(u===t)g(a,null);else return u||(m(p.$validators,function(a,c){g(c,null)}),m(p.$asyncValidators,function(a,c){g(c,null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(F);if(p.$$lastCommittedViewValue!==a||\"\"===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(u=A(c)?t:!0)for(var d=\n0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),A(c)){u=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=q(a));var e=p.$modelValue,f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:t,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){C(a,p.$modelValue);m(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};\nthis.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&w(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e[\"default\"])&&(d=e[\"default\"]));h.cancel(F);d?F=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=q(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=\np.$$rawModelValue=c;u=t;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(c,f,v))}return c})}],Le=[\"$rootScope\",function(a){return{restrict:\"A\",require:[\"ngModel\",\"^?form\",\"^?ngModelOptions\"],controller:xg,priority:1,compile:function(c){c.addClass(Va).addClass(\"ng-untouched\").addClass(mb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe(\"name\",\nfunction(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on(\"$destroy\",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on(\"blur\",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],yg=/(\\s+|^)default(\\s+|$)/,Pe=function(){return{restrict:\"A\",controller:[\"$scope\",\"$attrs\",function(a,c){var d=this;this.$options=fa(a.$eval(c.ngModelOptions));\nthis.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=R(this.$options.updateOn.replace(yg,function(){d.$options.updateOnDefault=!0;return\" \"}))):this.$options.updateOnDefault=!0}]}},Be=Ma({terminal:!0,priority:1E3}),zg=J(\"ngOptions\"),Ag=/^\\s*([\\s\\S]+?)(?:\\s+as\\s+([\\s\\S]+?))?(?:\\s+group\\s+by\\s+([\\s\\S]+?))?(?:\\s+disable\\s+when\\s+([\\s\\S]+?))?\\s+for\\s+(?:([\\$\\w][\\$\\w]*)|(?:\\(\\s*([\\$\\w][\\$\\w]*)\\s*,\\s*([\\$\\w][\\$\\w]*)\\s*\\)))\\s+in\\s+([\\s\\S]+?)(?:\\s+track\\s+by\\s+([\\s\\S]+?))?$/,\nJe=[\"$compile\",\"$parse\",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}function n(a){var c;if(!q&&Ea(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&\"$\"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(Ag);if(!m)throw zg(\"iexp\",a,ua(d));var s=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var t=m[9];d=c(m[2]?m[1]:s);var v=a&&c(a)||d,u=t&&c(t),p=t?function(a,c){return u(e,c)}:function(a){return Ga(a)},w=function(a,\nc){return p(a,z(a,c))},y=c(m[2]||m[1]),A=c(m[3]||\"\"),B=c(m[4]||\"\"),N=c(m[8]),D={},z=q?function(a,c){D[q]=c;D[s]=a;return D}:function(a){D[s]=a;return D};return{trackBy:t,getTrackByValue:w,getWatchables:c(N,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=z(a[h],h),h=p(a[h],k);c.push(h);if(m[2]||m[1])h=y(e,k),c.push(h);m[4]&&(k=B(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=N(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var r=d===g?m:g[m],s=\nz(d[r],r),q=v(e,s),r=p(q,s),u=y(e,s),x=A(e,s),s=B(e,s),q=new f(r,q,u,x,s);a.push(q);c[r]=q}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[w(a)]},getViewValueFromOption:function(a){return t?ca.copy(a.viewValue):a.viewValue}}}}}var e=U.createElement(\"option\"),f=U.createElement(\"optgroup\");return{restrict:\"A\",terminal:!0,require:[\"select\",\"?ngModel\"],link:function(c,h,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==\nc.label&&(c.label=a.label,c.textContent=a.label)}function r(a,c,d,e){c&&M(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function s(a){for(var c;a;)c=a.nextSibling,Xb(a),a=c}function q(a){var c=p&&p[0],d=N&&N[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function t(){var a=D&&u.readValue();D=z.getOptions();var c={},d=h[0].firstChild;B&&h.prepend(p);d=q(d);D.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=r(h[0],d,\"optgroup\",f),d=\ng.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=r(g.groupElement,g.currentOptionElement,\"option\",e),n(a,k),g.currentOptionElement=k.nextSibling):(k=r(h[0],d,\"option\",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){s(c[a].currentOptionElement)});s(d);v.$render();if(!v.$isEmpty(a)){var g=u.readValue();(z.trackBy?ka(a,g):a===g)||(v.$setViewValue(g),v.$render())}}var v=k[1];if(v){var u=k[0];k=l.multiple;for(var p,w=0,A=h.children(),I=A.length;w<\nI;w++)if(\"\"===A[w].value){p=A.eq(w);break}var B=!!p,N=y(e.cloneNode(!1));N.val(\"?\");var D,z=d(l.ngOptions,h,c);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=h.val()||[],c=[];m(a,function(a){a=D.selectValueMap[a];a.disabled||c.push(D.getViewValueFromOption(a))});return c},z.trackBy&&c.$watchCollection(function(){if(G(v.$viewValue))return v.$viewValue.map(function(a){return z.getTrackByValue(a)})},\nfunction(){v.$render()})):(u.writeValue=function(a){var c=D.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&(N.remove(),B||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute(\"selected\",\"selected\")):null===a||B?(N.remove(),B||h.prepend(p),h.val(\"\"),p.prop(\"selected\",!0),p.attr(\"selected\",!0)):(B||p.remove(),h.prepend(N),h.val(\"?\"),N.prop(\"selected\",!0),N.attr(\"selected\",!0))},u.readValue=function(){var a=D.selectValueMap[h.val()];return a&&!a.disabled?\n(B||p.remove(),N.remove(),D.getViewValueFromOption(a)):null},z.trackBy&&c.$watch(function(){return z.getTrackByValue(v.$viewValue)},function(){v.$render()}));B?(p.remove(),a(p)(c),p.removeClass(\"ng-scope\")):p=y(e.cloneNode(!1));t();c.$watchCollection(z.getWatchables,t)}}}}],Ce=[\"$locale\",\"$interpolate\",\"$log\",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||\"\")}var n=l.count,r=l.$attr.when&&h.attr(l.$attr.when),s=l.offset||0,q=g.$eval(r)||{},t=\n{},w=c.startSymbol(),u=c.endSymbol(),p=w+n+\"-\"+s+u,y=ca.noop,z;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?\"-\":\"\")+M(d[2]),q[d]=h.attr(l.$attr[c]))});m(q,function(a,d){t[d]=c(a.replace(e,p))});g.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in q||(e=a.pluralCat(e-s));e===z||f&&V(z)&&isNaN(z)||(y(),f=t[e],A(f)?(null!=c&&d.debug(\"ngPluralize: no rule defined for '\"+e+\"' in \"+r),y=v,k()):y=g.$watch(f,k),z=e)})}}}],De=[\"$parse\",\"$animate\",function(a,c){var d=J(\"ngRepeat\"),e=function(a,c,\nd,e,k,m,r){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===r-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:\"A\",multiElement:!0,transclude:\"element\",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=U.createComment(\" end ngRepeat: \"+h+\" \"),k=h.match(/^\\s*([\\s\\S]+?)\\s+in\\s+([\\s\\S]+?)(?:\\s+as\\s+([\\s\\S]+?))?(?:\\s+track\\s+by\\s+([\\s\\S]+?))?\\s*$/);if(!k)throw d(\"iexp\",h);var n=k[1],r=k[2],s=k[3],q=k[4],k=n.match(/^(?:(\\s*[\\$\\w]+)|\\(\\s*([\\$\\w]+)\\s*,\\s*([\\$\\w]+)\\s*\\))$/);\nif(!k)throw d(\"iidexp\",n);var v=k[3]||k[1],w=k[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\\$index|\\$first|\\$middle|\\$last|\\$even|\\$odd|\\$parent|\\$root|\\$id)$/.test(s)))throw d(\"badident\",s);var u,p,z,A,I={$id:Ga};q?u=a(q):(z=function(a,c){return Ga(c)},A=function(a){return a});return function(a,f,g,k,n){u&&(p=function(c,d,e){w&&(I[w]=c);I[v]=d;I.$index=e;return u(a,I)});var q=ga();a.$watchCollection(r,function(g){var k,r,u=f[0],x,D=ga(),I,H,L,G,M,J,O;s&&(a[s]=g);if(Ea(g))M=\ng,r=p||z;else for(O in r=p||A,M=[],g)g.hasOwnProperty(O)&&\"$\"!==O.charAt(0)&&M.push(O);I=M.length;O=Array(I);for(k=0;k<I;k++)if(H=g===M?k:M[k],L=g[H],G=r(H,L,k),q[G])J=q[G],delete q[G],D[G]=J,O[k]=J;else{if(D[G])throw m(O,function(a){a&&a.scope&&(q[a.id]=a)}),d(\"dupes\",h,G,L);O[k]={id:G,scope:t,clone:t};D[G]=!0}for(x in q){J=q[x];G=qb(J.clone);c.leave(G);if(G[0].parentNode)for(k=0,r=G.length;k<r;k++)G[k].$$NG_REMOVED=!0;J.scope.$destroy()}for(k=0;k<I;k++)if(H=g===M?k:M[k],L=g[H],J=O[k],J.scope){x=\nu;do x=x.nextSibling;while(x&&x.$$NG_REMOVED);J.clone[0]!=x&&c.move(qb(J.clone),null,y(u));u=J.clone[J.clone.length-1];e(J.scope,k,v,L,w,H,I)}else n(function(a,d){J.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,y(u));u=f;J.clone=a;D[J.id]=J;e(J.scope,k,v,L,w,H,I)});q=D})}}}}],Ee=[\"$animate\",function(a){return{restrict:\"A\",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?\"removeClass\":\"addClass\"](d,\"ng-hide\",{tempClasses:\"ng-hide-animate\"})})}}}],xe=[\"$animate\",\nfunction(a){return{restrict:\"A\",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?\"addClass\":\"removeClass\"](d,\"ng-hide\",{tempClasses:\"ng-hide-animate\"})})}}}],Fe=Ma(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,\"\")});a&&c.css(a)},!0)}),Ge=[\"$animate\",function(a){return{require:\"ngSwitch\",controller:[\"$scope\",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||\ne.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var q=qb(h[d].clone);k[d].$destroy();(l[d]=a.leave(q)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases[\"!\"+c]||f.cases[\"?\"])&&m(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=U.createComment(\" end ngSwitchWhen: \");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],He=Ma({transclude:\"element\",priority:1200,require:\"^ngSwitch\",multiElement:!0,link:function(a,c,d,e,\nf){e.cases[\"!\"+d.ngSwitchWhen]=e.cases[\"!\"+d.ngSwitchWhen]||[];e.cases[\"!\"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Ie=Ma({transclude:\"element\",priority:1200,require:\"^ngSwitch\",multiElement:!0,link:function(a,c,d,e,f){e.cases[\"?\"]=e.cases[\"?\"]||[];e.cases[\"?\"].push({transclude:f,element:c})}}),Ke=Ma({restrict:\"EAC\",link:function(a,c,d,e,f){if(!f)throw J(\"ngTransclude\")(\"orphan\",ua(c));f(function(a){c.empty();c.append(a)})}}),ke=[\"$templateCache\",function(a){return{restrict:\"E\",terminal:!0,\ncompile:function(c,d){\"text/ng-template\"==d.type&&a.put(d.id,c[0].text)}}}],Bg={$setViewValue:v,$render:v},Cg=[\"$element\",\"$scope\",\"$attrs\",function(a,c,d){var e=this,f=new Sa;e.ngModelCtrl=Bg;e.unknownOption=y(U.createElement(\"option\"));e.renderUnknownOption=function(c){c=\"? \"+Ga(c)+\" ?\";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on(\"$destroy\",function(){e.renderUnknownOption=v});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=\nfunction(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),\"\"===c&&e.emptyOption.prop(\"selected\",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val(\"\")):e.renderUnknownOption(c)};e.addOption=function(a,c){Ra(a,'\"option value\"');\"\"===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),\"\"===a&&(e.emptyOption=t)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],\nle=function(){return{restrict:\"E\",require:[\"select\",\"?ngModel\"],controller:Cg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on(\"change\",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});if(d.multiple){g.readValue=function(){var a=[];m(c.find(\"option\"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Sa(a);m(c.find(\"option\"),function(a){a.selected=w(d.get(a.value))})};var h,\nl=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},ne=[\"$interpolate\",function(a){function c(a){a[0].hasAttribute(\"selected\")&&(a[0].selected=!0)}return{restrict:\"E\",priority:100,compile:function(d,e){if(A(e.value)){var f=a(d.text(),!0);f||e.$set(\"value\",d.text())}return function(a,d,e){var k=d.parent(),m=k.data(\"$selectController\")||k.parent().data(\"$selectController\");m&&m.ngModelCtrl&&\n(f?a.$watch(f,function(a,f){e.$set(\"value\",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on(\"$destroy\",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],me=ra({restrict:\"E\",terminal:!1}),Hc=function(){return{restrict:\"A\",require:\"?ngModel\",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe(\"required\",function(){e.$validate()}))}}},\nGc=function(){return{restrict:\"A\",require:\"?ngModel\",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe(\"pattern\",function(a){L(a)&&0<a.length&&(a=new RegExp(\"^\"+a+\"$\"));if(a&&!a.test)throw J(\"ngPattern\")(\"noregexp\",g,a,ua(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||A(f)||f.test(a)}}}}},Jc=function(){return{restrict:\"A\",require:\"?ngModel\",link:function(a,c,d,e){if(e){var f=-1;d.$observe(\"maxlength\",function(a){a=W(a);f=isNaN(a)?-1:a;e.$validate()});\ne.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Ic=function(){return{restrict:\"A\",require:\"?ngModel\",link:function(a,c,d,e){if(e){var f=0;d.$observe(\"minlength\",function(a){f=W(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log(\"WARNING: Tried to load angular more than once.\"):(ce(),ee(ca),y(U).ready(function(){Zd(U,Ac)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find(\"head\").prepend('<style type=\"text/css\">@charset \"UTF-8\";[ng\\\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');\n//# sourceMappingURL=angular.min.js.map\n"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45)(__webpack_require__(50))

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "/*\n AngularJS v1.2.0\n (c) 2010-2012 Google, Inc. http://angularjs.org\n License: MIT\n*/\n(function(t,c,B){'use strict';function w(s,r,g,a,h){return{restrict:\"ECA\",terminal:!0,priority:400,transclude:\"element\",compile:function(k,d,A){return function(u,k,d){function v(){l&&(l.$destroy(),l=null);m&&(h.leave(m),m=null)}function x(){var f=s.current&&s.current.locals,y=f&&f.$template;if(y){var z=u.$new();A(z,function(e){e.html(y);h.enter(e,null,m||k,function(){!c.isDefined(n)||n&&!u.$eval(n)||r()});v();var p=g(e.contents()),q=s.current;l=q.scope=z;m=e;if(q.controller){f.$scope=l;var d=a(q.controller,\nf);q.controllerAs&&(l[q.controllerAs]=d);e.data(\"$ngControllerController\",d);e.children().data(\"$ngControllerController\",d)}p(l);l.$emit(\"$viewContentLoaded\");l.$eval(b)})}else v()}var l,m,n=d.autoscroll,b=d.onload||\"\";u.$on(\"$routeChangeSuccess\",x);x()}}}}t=c.module(\"ngRoute\",[\"ng\"]).provider(\"$route\",function(){function s(a,h){return c.extend(new (c.extend(function(){},{prototype:a})),h)}function r(a,c){var k=c.caseInsensitiveMatch,d={originalPath:a,regexp:a},g=d.keys=[];a=a.replace(/([().])/g,\n\"\\\\$1\").replace(/(\\/)?:(\\w+)([\\?|\\*])?/g,function(a,c,h,d){a=\"?\"===d?d:null;d=\"*\"===d?d:null;g.push({name:h,optional:!!a});c=c||\"\";return\"\"+(a?\"\":c)+\"(?:\"+(a?c:\"\")+(d&&\"(.+?)\"||\"([^/]+)\")+(a||\"\")+\")\"+(a||\"\")}).replace(/([\\/$\\*])/g,\"\\\\$1\");d.regexp=RegExp(\"^\"+a+\"$\",k?\"i\":\"\");return d}var g={};this.when=function(a,h){g[a]=c.extend({reloadOnSearch:!0},h,a&&r(a,h));if(a){var k=\"/\"==a[a.length-1]?a.substr(0,a.length-1):a+\"/\";g[k]=c.extend({redirectTo:a},r(k,h))}return this};this.otherwise=function(a){this.when(null,\na);return this};this.$get=[\"$rootScope\",\"$location\",\"$routeParams\",\"$q\",\"$injector\",\"$http\",\"$templateCache\",\"$sce\",function(a,h,k,d,r,u,t,w){function v(){var b=x(),f=n.current;if(b&&f&&b.$$route===f.$$route&&c.equals(b.pathParams,f.pathParams)&&!b.reloadOnSearch&&!m)f.params=b.params,c.copy(f.params,k),a.$broadcast(\"$routeUpdate\",f);else if(b||f)m=!1,a.$broadcast(\"$routeChangeStart\",b,f),(n.current=b)&&b.redirectTo&&(c.isString(b.redirectTo)?h.path(l(b.redirectTo,b.params)).search(b.params).replace():\nh.url(b.redirectTo(b.pathParams,h.path(),h.search())).replace()),d.when(b).then(function(){if(b){var a=c.extend({},b.resolve),f,e;c.forEach(a,function(b,f){a[f]=c.isString(b)?r.get(b):r.invoke(b)});c.isDefined(f=b.template)?c.isFunction(f)&&(f=f(b.params)):c.isDefined(e=b.templateUrl)&&(c.isFunction(e)&&(e=e(b.params)),e=w.getTrustedResourceUrl(e),c.isDefined(e)&&(b.loadedTemplateUrl=e,f=u.get(e,{cache:t}).then(function(b){return b.data})));c.isDefined(f)&&(a.$template=f);return d.all(a)}}).then(function(d){b==\nn.current&&(b&&(b.locals=d,c.copy(b.params,k)),a.$broadcast(\"$routeChangeSuccess\",b,f))},function(c){b==n.current&&a.$broadcast(\"$routeChangeError\",b,f,c)})}function x(){var b,a;c.forEach(g,function(d,l){var e;if(e=!a){var p=h.path();e=d.keys;var q={};if(d.regexp)if(p=d.regexp.exec(p)){for(var g=1,k=p.length;g<k;++g){var m=e[g-1],n=\"string\"==typeof p[g]?decodeURIComponent(p[g]):p[g];m&&n&&(q[m.name]=n)}e=q}else e=null;else e=null;e=b=e}e&&(a=s(d,{params:c.extend({},h.search(),b),pathParams:b}),a.$$route=\nd)});return a||g[null]&&s(g[null],{params:{},pathParams:{}})}function l(a,d){var g=[];c.forEach((a||\"\").split(\":\"),function(a,b){if(0===b)g.push(a);else{var c=a.match(/(\\w+)(.*)/),h=c[1];g.push(d[h]);g.push(c[2]||\"\");delete d[h]}});return g.join(\"\")}var m=!1,n={routes:g,reload:function(){m=!0;a.$evalAsync(v)}};a.$on(\"$locationChangeSuccess\",v);return n}]});t.provider(\"$routeParams\",function(){this.$get=function(){return{}}});t.directive(\"ngView\",w);w.$inject=[\"$route\",\"$anchorScroll\",\"$compile\",\"$controller\",\n\"$animate\"]})(window,window.angular);\n//# sourceMappingURL=angular-route.min.js.map\n"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45)(__webpack_require__(52))

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "/*\n AngularJS v1.6.2\n (c) 2010-2017 Google, Inc. http://angularjs.org\n License: MIT\n*/\n(function(n,c){'use strict';function l(b,a,g){var d=g.baseHref(),k=b[0];return function(b,e,f){var g,h;f=f||{};h=f.expires;g=c.isDefined(f.path)?f.path:d;c.isUndefined(e)&&(h=\"Thu, 01 Jan 1970 00:00:00 GMT\",e=\"\");c.isString(h)&&(h=new Date(h));e=encodeURIComponent(b)+\"=\"+encodeURIComponent(e);e=e+(g?\";path=\"+g:\"\")+(f.domain?\";domain=\"+f.domain:\"\");e+=h?\";expires=\"+h.toUTCString():\"\";e+=f.secure?\";secure\":\"\";f=e.length+1;4096<f&&a.warn(\"Cookie '\"+b+\"' possibly not set or overflowed because it was too large (\"+\nf+\" > 4096 bytes)!\");k.cookie=e}}c.module(\"ngCookies\",[\"ng\"]).provider(\"$cookies\",[function(){var b=this.defaults={};this.$get=[\"$$cookieReader\",\"$$cookieWriter\",function(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:function(){return a()},put:function(d,a,m){g(d,a,m?c.extend({},b,m):b)},putObject:function(d,b,a){this.put(d,c.toJson(b),a)},remove:function(a,k){g(a,void 0,k?c.extend({},b,k):b)}}}]}]);c.module(\"ngCookies\").factory(\"$cookieStore\",\n[\"$cookies\",function(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=[\"$document\",\"$log\",\"$browser\"];c.module(\"ngCookies\").provider(\"$$cookieWriter\",function(){this.$get=l})})(window,window.angular);\n//# sourceMappingURL=angular-cookies.min.js.map\n"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45)(__webpack_require__(54))

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "/*\n AngularJS v1.3.15\n (c) 2010-2014 Google, Inc. http://angularjs.org\n License: MIT\n*/\n(function(I,d,B){'use strict';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||\"$\"===h.charAt(0)&&\"$\"===h.charAt(1)||(q[h]=f[h]);return q}var w=d.$$minErr(\"$resource\"),C=/^(\\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;d.module(\"ngResource\",[\"ng\"]).provider(\"$resource\",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:\"GET\"},save:{method:\"POST\"},query:{method:\"GET\",isArray:!0},remove:{method:\"DELETE\"},\"delete\":{method:\"DELETE\"}}};\nthis.$get=[\"$http\",\"$q\",function(q,h){function t(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function v(x,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){u(a)&&(a=a());var d;if(a&&a.charAt&&\"@\"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||\"\"===e||\"hasOwnProperty\"===e||!C.test(\".\"+e))throw w(\"badmember\",e);for(var e=e.split(\".\"),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||\n{},this)}var G=new t(x,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,y,m,x){var n={},f,l,z;switch(arguments.length){case 4:z=x,l=m;case 3:case 2:if(u(y)){if(u(a)){l=a;z=y;break}l=y;z=m}else{n=a;f=y;l=m;break}case 1:u(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw w(\"badargs\",arguments.length);}var t=this instanceof e,p=t?f:b.isArray?[]:new e(f),\nA={},v=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){\"params\"!=a&&\"isArray\"!=a&&\"interceptor\"!=a&&(A[a]=H(b))});g&&(A.data=f);G.setUrlParams(A,s({},c(f,b.params||{}),n),b.url);n=q(A).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w(\"badcfg\",k,b.isArray?\"array\":\"object\",d.isArray(c)?\"array\":\"object\");b.isArray?(p.length=0,r(c,function(a){\"object\"===typeof a?p.push(new e(a)):p.push(a)})):(D(c,p),p.$promise=\ng)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(z||E)(a);return h.reject(a)});n=n.then(function(a){var b=v(a);(l||E)(b,a.headers);return b},C);return t?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype[\"$\"+k]=function(a,b,c){u(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return v(x,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,u=d.isFunction;t.prototype={setUrlParams:function(f,g,l){var m=this,c=l||m.template,h,\ne,q=m.urlParams={};r(c.split(/\\W/),function(b){if(\"hasOwnProperty\"===b)throw w(\"badname\");!/^\\d+$/.test(b)&&b&&(new RegExp(\"(^|[^\\\\\\\\]):\"+b+\"(\\\\W|$)\")).test(c)&&(q[b]=!0)});c=c.replace(/\\\\:/g,\":\");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,\"@\").replace(/%3A/gi,\":\").replace(/%24/g,\"$\").replace(/%2C/gi,\",\").replace(/%20/g,\"%20\").replace(/%26/gi,\"&\").replace(/%3D/gi,\"=\").replace(/%2B/gi,\"+\"),c=c.replace(new RegExp(\":\"+\nk+\"(\\\\W|$)\",\"g\"),function(b,a){return e+a})):c=c.replace(new RegExp(\"(/?):\"+k+\"(\\\\W|$)\",\"g\"),function(b,a,c){return\"/\"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\\/+$/,\"\")||\"/\");c=c.replace(/\\/\\.(?=\\w+($|\\?))/,\".\");f.url=c.replace(/\\/\\\\\\./,\"/.\");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return v}]})})(window,window.angular);\n//# sourceMappingURL=angular-resource.min.js.map\n"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45)(__webpack_require__(56))

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "!function(e,t,n){\"use strict\";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i=\"function\"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error(\"Cannot find module '\"+s+\"'\");throw u.code=\"MODULE_NOT_FOUND\",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r=\"function\"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{\"default\":e}};Object.defineProperty(r,\"__esModule\",{value:!0});var l,i,u,c,d=o(\"./modules/handle-dom\"),f=o(\"./modules/utils\"),p=o(\"./modules/handle-swal-dom\"),m=o(\"./modules/handle-click\"),v=o(\"./modules/handle-key\"),y=s(v),h=o(\"./modules/default-params\"),b=s(h),g=o(\"./modules/set-params\"),w=s(g);r[\"default\"]=u=c=function(){function o(e){var t=a;return t[e]===n?b[\"default\"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,\"stop-scrolling\"),p.resetInput(),a===n)return f.logStr(\"SweetAlert expects at least 1 attribute!\"),!1;var r=f.extend({},b[\"default\"]);switch(typeof a){case\"string\":r.title=a,r.text=arguments[1]||\"\",r.type=arguments[2]||\"\";break;case\"object\":if(a.title===n)return f.logStr('Missing \"title\" argument!'),!1;r.title=a.title;for(var s in b[\"default\"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?\"Confirm\":b[\"default\"].confirmButtonText,r.confirmButtonText=o(\"confirmButtonText\"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected \"string\" or \"object\", got '+typeof a),!1}w[\"default\"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll(\"button\"),h=[\"onclick\",\"onmouseover\",\"onmouseout\",\"onmousedown\",\"onmouseup\",\"onfocus\"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y[\"default\"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error(\"userParams is required\");if(\"object\"!=typeof e)throw new Error(\"userParams has to be a object\");f.extend(b[\"default\"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,\"showSweetAlert\"),d.addClass(o,\"hideSweetAlert\"),d.removeClass(o,\"visible\");var a=o.querySelector(\".sa-icon.sa-success\");d.removeClass(a,\"animate\"),d.removeClass(a.querySelector(\".sa-tip\"),\"animateSuccessTip\"),d.removeClass(a.querySelector(\".sa-long\"),\"animateSuccessLong\");var r=o.querySelector(\".sa-icon.sa-error\");d.removeClass(r,\"animateErrorIcon\"),d.removeClass(r.querySelector(\".sa-x-mark\"),\"animateXMark\");var s=o.querySelector(\".sa-icon.sa-warning\");return d.removeClass(s,\"pulseWarning\"),d.removeClass(s.querySelector(\".sa-body\"),\"pulseWarningIns\"),d.removeClass(s.querySelector(\".sa-dot\"),\"pulseWarningIns\"),setTimeout(function(){var e=o.getAttribute(\"data-custom-class\");d.removeClass(o,e)},300),d.removeClass(t.body,\"stop-scrolling\"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(\".sa-input-error\");d.addClass(n,\"show\");var o=t.querySelector(\".sa-error-container\");d.addClass(o,\"show\"),o.querySelector(\"p\").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector(\"input\").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(\".sa-input-error\");d.removeClass(n,\"show\");var o=t.querySelector(\".sa-error-container\");d.removeClass(o,\"show\")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector(\"button.confirm\"),n=e.querySelector(\"button.cancel\");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector(\"button.confirm\"),n=e.querySelector(\"button.cancel\");t.disabled=!1,n.disabled=!1},\"undefined\"!=typeof e?e.sweetAlert=e.swal=u:f.logStr(\"SweetAlert is a frontend module!\"),a.exports=r[\"default\"]},{\"./modules/default-params\":2,\"./modules/handle-click\":3,\"./modules/handle-dom\":4,\"./modules/handle-key\":5,\"./modules/handle-swal-dom\":6,\"./modules/set-params\":8,\"./modules/utils\":9}],2:[function(e,t,n){Object.defineProperty(n,\"__esModule\",{value:!0});var o={title:\"\",text:\"\",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:\"OK\",confirmButtonColor:\"#8CD4F5\",cancelButtonText:\"Cancel\",imageUrl:null,imageSize:null,timer:null,customClass:\"\",html:!1,animation:!0,allowEscapeKey:!0,inputType:\"text\",inputPlaceholder:\"\",inputValue:\"\",showLoaderOnConfirm:!1};n[\"default\"]=o,t.exports=n[\"default\"]},{}],3:[function(t,n,o){Object.defineProperty(o,\"__esModule\",{value:!0});var a=t(\"./utils\"),r=(t(\"./handle-swal-dom\"),t(\"./handle-dom\")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf(\"confirm\"),v=-1!==p.className.indexOf(\"sweet-overlay\"),y=r.hasClass(o,\"visible\"),h=n.doneFunction&&\"true\"===o.getAttribute(\"data-has-done-function\");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case\"mouseover\":s(c);break;case\"mouseout\":s(u);break;case\"mousedown\":s(d);break;case\"mouseup\":s(c);break;case\"focus\":var b=o.querySelector(\"button.confirm\"),g=o.querySelector(\"button.cancel\");m?g.style.boxShadow=\"none\":b.style.boxShadow=\"none\";break;case\"click\":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&\"BUTTON\"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,\"show-input\")&&(n=e.querySelector(\"input\").value,n||(n=\"\")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\\s/g,\"\"),o=\"function(\"===n.substring(0,9)&&\")\"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o[\"default\"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o[\"default\"]},{\"./handle-dom\":4,\"./handle-swal-dom\":6,\"./utils\":9}],4:[function(n,o,a){Object.defineProperty(a,\"__esModule\",{value:!0});var r=function(e,t){return new RegExp(\" \"+t+\" \").test(\" \"+e.className+\" \")},s=function(e,t){r(e,t)||(e.className+=\" \"+t)},l=function(e,t){var n=\" \"+e.className.replace(/[\\t\\r\\n]/g,\" \")+\" \";if(r(e,t)){for(;n.indexOf(\" \"+t+\" \")>=0;)n=n.replace(\" \"+t+\" \",\" \");e.className=n.replace(/^\\s+|\\s+$/g,\"\")}},i=function(e){var n=t.createElement(\"div\");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity=\"\",e.style.display=\"block\"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity=\"\",e.style.display=\"none\"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left=\"-9999px\",e.style.display=\"block\";var t,n=e.clientHeight;return t=\"undefined\"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue(\"padding-top\"),10):parseInt(e.currentStyle.padding),e.style.left=\"\",e.style.display=\"none\",\"-\"+parseInt((n+t)/2)+\"px\"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display=\"block\";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display=\"block\"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display=\"none\"});o()},h=function(n){if(\"function\"==typeof MouseEvent){var o=new MouseEvent(\"click\",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent(\"MouseEvents\");a.initEvent(\"click\",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent(\"onclick\"):\"function\"==typeof n.onclick&&n.onclick()},b=function(t){\"function\"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty(\"cancelBubble\")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,\"__esModule\",{value:!0});var r=t(\"./handle-dom\"),s=t(\"./handle-swal-dom\"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector(\"button.confirm\"),c=a.querySelector(\"button.cancel\"),d=a.querySelectorAll(\"button[tabindex]\");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?(\"INPUT\"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a[\"default\"]=l,o.exports=a[\"default\"]},{\"./handle-dom\":4,\"./handle-swal-dom\":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{\"default\":e}};Object.defineProperty(a,\"__esModule\",{value:!0});var s=n(\"./utils\"),l=n(\"./handle-dom\"),i=n(\"./default-params\"),u=r(i),c=n(\"./injected-html\"),d=r(c),f=\".sweet-alert\",p=\".sweet-overlay\",m=function(){var e=t.createElement(\"div\");for(e.innerHTML=d[\"default\"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector(\"input\"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow=\"0 0 2px rgba(\"+n+\", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)\"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,\"showSweetAlert\"),l.removeClass(o,\"hideSweetAlert\"),e.previousActiveElement=t.activeElement;var a=o.querySelector(\"button.confirm\");a.focus(),setTimeout(function(){l.addClass(o,\"visible\")},500);var r=o.getAttribute(\"data-timer\");if(\"null\"!==r&&\"\"!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&\"true\"===o.getAttribute(\"data-has-done-function\");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,\"show-input\"),t.value=u[\"default\"].inputValue,t.setAttribute(\"type\",u[\"default\"].inputType),t.setAttribute(\"placeholder\",u[\"default\"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(\".sa-input-error\");l.removeClass(n,\"show\");var o=t.querySelector(\".sa-error-container\");l.removeClass(o,\"show\")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{\"./default-params\":2,\"./handle-dom\":4,\"./injected-html\":7,\"./utils\":9}],7:[function(e,t,n){Object.defineProperty(n,\"__esModule\",{value:!0});var o='<div class=\"sweet-overlay\" tabIndex=\"-1\"></div><div class=\"sweet-alert\"><div class=\"sa-icon sa-error\">\\n      <span class=\"sa-x-mark\">\\n        <span class=\"sa-line sa-left\"></span>\\n        <span class=\"sa-line sa-right\"></span>\\n      </span>\\n    </div><div class=\"sa-icon sa-warning\">\\n      <span class=\"sa-body\"></span>\\n      <span class=\"sa-dot\"></span>\\n    </div><div class=\"sa-icon sa-info\"></div><div class=\"sa-icon sa-success\">\\n      <span class=\"sa-line sa-tip\"></span>\\n      <span class=\"sa-line sa-long\"></span>\\n\\n      <div class=\"sa-placeholder\"></div>\\n      <div class=\"sa-fix\"></div>\\n    </div><div class=\"sa-icon sa-custom\"></div><h2>Title</h2>\\n    <p>Text</p>\\n    <fieldset>\\n      <input type=\"text\" tabIndex=\"3\" />\\n      <div class=\"sa-input-error\"></div>\\n    </fieldset><div class=\"sa-error-container\">\\n      <div class=\"icon\">!</div>\\n      <p>Not valid!</p>\\n    </div><div class=\"sa-button-container\">\\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\\n      <div class=\"sa-confirm-button-container\">\\n        <button class=\"confirm\" tabIndex=\"1\">OK</button><div class=\"la-ball-fall\">\\n          <div></div>\\n          <div></div>\\n          <div></div>\\n        </div>\\n      </div>\\n    </div></div>';n[\"default\"]=o,t.exports=n[\"default\"]},{}],8:[function(e,t,o){Object.defineProperty(o,\"__esModule\",{value:!0});var a=e(\"./utils\"),r=e(\"./handle-swal-dom\"),s=e(\"./handle-dom\"),l=[\"error\",\"warning\",\"info\",\"success\",\"input\",\"prompt\"],i=function(e){var t=r.getModal(),o=t.querySelector(\"h2\"),i=t.querySelector(\"p\"),u=t.querySelector(\"button.cancel\"),c=t.querySelector(\"button.confirm\");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split(\"\\n\").join(\"<br>\"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||\"\").split(\"\\n\").join(\"<br>\"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute(\"data-custom-class\",e.customClass);else{var d=t.getAttribute(\"data-custom-class\");s.removeClass(t,d),t.setAttribute(\"data-custom-class\",\"\")}if(s.hide(t.querySelectorAll(\".sa-icon\")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr(\"Unknown alert type: \"+e.type),{v:!1};var i=[\"success\",\"error\",\"warning\",\"info\"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(\".sa-icon.sa-\"+e.type),s.show(u));var c=r.getInput();switch(e.type){case\"success\":s.addClass(u,\"animate\"),s.addClass(u.querySelector(\".sa-tip\"),\"animateSuccessTip\"),s.addClass(u.querySelector(\".sa-long\"),\"animateSuccessLong\");break;case\"error\":s.addClass(u,\"animateErrorIcon\"),s.addClass(u.querySelector(\".sa-x-mark\"),\"animateXMark\");break;case\"warning\":s.addClass(u,\"pulseWarning\"),s.addClass(u.querySelector(\".sa-body\"),\"pulseWarningIns\"),s.addClass(u.querySelector(\".sa-dot\"),\"pulseWarningIns\");break;case\"input\":case\"prompt\":c.setAttribute(\"type\",e.inputType),c.value=e.inputValue,c.setAttribute(\"placeholder\",e.inputPlaceholder),s.addClass(t,\"show-input\"),setTimeout(function(){c.focus(),c.addEventListener(\"keyup\",swal.resetInputError)},400)}}();if(\"object\"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(\".sa-icon.sa-custom\");p.style.backgroundImage=\"url(\"+e.imageUrl+\")\",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split(\"x\"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr(\"Parameter imageSize expects value with format WIDTHxHEIGHT, got \"+e.imageSize)}p.setAttribute(\"style\",p.getAttribute(\"style\")+\"width:\"+m+\"px; height:\"+v+\"px\")}t.setAttribute(\"data-has-cancel-button\",e.showCancelButton),e.showCancelButton?u.style.display=\"inline-block\":s.hide(u),t.setAttribute(\"data-has-confirm-button\",e.showConfirmButton),e.showConfirmButton?c.style.display=\"inline-block\":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute(\"data-allow-outside-click\",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute(\"data-has-done-function\",g),e.animation?\"string\"==typeof e.animation?t.setAttribute(\"data-animation\",e.animation):t.setAttribute(\"data-animation\",\"pop\"):t.setAttribute(\"data-animation\",\"none\"),t.setAttribute(\"data-timer\",e.timer)};o[\"default\"]=i,t.exports=o[\"default\"]},{\"./handle-dom\":4,\"./handle-swal-dom\":6,\"./utils\":9}],9:[function(t,n,o){Object.defineProperty(o,\"__esModule\",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+\", \"+parseInt(t[2],16)+\", \"+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log(\"SweetAlert: \"+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,\"\"),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a=\"#\";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=(\"00\"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),\"function\"==typeof define&&define.amd?define(function(){return sweetAlert}):\"undefined\"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWU5OWUzNDRmZjQwMjAwMjE3NjQ/NTdlYSIsIndlYnBhY2s6Ly8vLi9hcHAvdmVuZG9yLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvd2V1aS9kaXN0L3N0eWxlL3dldWkubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2VzNS1zaGltL2VzNS1zaGltLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvZXM1LXNoaW0vZXM1LXNoYW0uanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9zd2VldGFsZXJ0L2Rpc3Qvc3dlZXRhbGVydC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9pc2Nyb2xsL2J1aWxkL2lzY3JvbGwtem9vbS5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2h0bWw1c2hpdi9kaXN0L2h0bWw1c2hpdi5taW4uanM/ZWU5MSIsIndlYnBhY2s6Ly8vLi9+Ly4wLjYuMUBzY3JpcHQtbG9hZGVyL2FkZFNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2h0bWw1c2hpdi9kaXN0L2h0bWw1c2hpdi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyL2FuZ3VsYXIubWluLmpzPzgzZGUiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyL2FuZ3VsYXIubWluLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1yb3V0ZS9hbmd1bGFyLXJvdXRlLm1pbi5qcz83OWI2Iiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1yb3V0ZS9hbmd1bGFyLXJvdXRlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItY29va2llcy9hbmd1bGFyLWNvb2tpZXMubWluLmpzPzg2NGUiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLWNvb2tpZXMvYW5ndWxhci1jb29raWVzLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItcmVzb3VyY2UvYW5ndWxhci1yZXNvdXJjZS5taW4uanM/ZGVlYSIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItcmVzb3VyY2UvYW5ndWxhci1yZXNvdXJjZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9zd2VldGFsZXJ0L2Rpc3Qvc3dlZXRhbGVydC5taW4uanM/MjE1ZiIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3N3ZWV0YWxlcnQvZGlzdC9zd2VldGFsZXJ0Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O3FCQ3RDTyxFQUE4Qjs7cUJBQzlCLEVBQW1COztxQkFDbkIsRUFBbUI7O3FCQUNuQixFQUFnQzs7cUJBQ2hDLEVBQStCOztxQkFDL0IsRUFBcUM7O3FCQUNyQyxFQUE0Qjs7cUJBQzVCLEVBQXdDOztxQkFDeEMsRUFBNEM7O3FCQUM1QyxFQUE4Qzs7cUJBQzlDLEVBQXVDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y5QywwQzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE0RTs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDBCQUEwQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsK0RBQThELFdBQVc7QUFDekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUEsRUFBQzs7Ozs7OztBQzk0Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0ZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxHQUFFOztBQUVGLHlCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQW9CLFVBQVU7QUFDOUIsb0JBQW1CLFVBQVU7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEM7O0FBRTFDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE0Qiw4Q0FBOEM7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQjtBQUMvQixLQUFJO0FBQ0osZ0NBQStCO0FBQy9CLEtBQUk7QUFDSixnQ0FBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxTEFBb0w7QUFDcEwsb0xBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0Esc0NBQXFDOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTLE9BQU87QUFDaEI7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7OztBQUdBO0FBQ0EseUNBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxHQUFFOztBQUVGO0FBQ0E7OztBQUdBO0FBQ0EseUNBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUEsaUtBQWdLOztBQUVoSyxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLHdDQUF1QyxLQUFLO0FBQzVDO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsV0FBVTtBQUNWLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQWtDLEtBQUs7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBeUMsS0FBSztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxLQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQSxJQUFHO0FBQ0gsR0FBRTs7QUFFRjtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWlCOztBQUVqQjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxZQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7O0FBRUY7QUFDQTtBQUNBLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBLFVBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUErQztBQUMvQyw0REFBMkQsMkJBQTJCLHNCQUFzQixrQkFBa0IsMkJBQTJCLHVDQUF1QztBQUNoTTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWdDLFdBQVcsU0FBUyxVQUFVO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLGlDQUFnQyxVQUFVLFdBQVcsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNB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YyxnQkFBZ0Isd0RBQXdELHdHQUF3RyxxRUFBcUUscUJBQXFCLDBwQkFBMHBCLDJCQUEyQixzUUFBc1EsMENBQTBDLEVBQUUseURBQXlELHFCQUFxQix3Q0FBd0MsU0FBUyxFQUFFLG9CQUFvQixnREFBZ0QsU0FBUyxlQUFlLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsYUFBYSxrRkFBa0YsY0FBYywwQ0FBMEMsZUFBZSw2Q0FBNkMsaUJBQWlCLDZGQUE2RixnQkFBZ0IsUUFBUSxJQUFJLDZIQUE2SCxVQUFVLGdFQUFnRSxHQUFHLEVBQUUsR0FBRyxnRUFBZ0Usa0JBQWtCLDRFQUE0RSxrQkFBa0IsQyIsImZpbGUiOiJ2ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVlOTllMzQ0ZmY0MDIwMDIxNzY0IiwiaW1wb3J0ICd3ZXVpL2Rpc3Qvc3R5bGUvd2V1aS5taW4uY3NzJztcbmltcG9ydCAnZXM1LXNoaW0vZXM1LXNoaW0nO1xuaW1wb3J0ICdlczUtc2hpbS9lczUtc2hhbSc7XG5pbXBvcnQgJ3N3ZWV0YWxlcnQvZGlzdC9zd2VldGFsZXJ0LmNzcydcbmltcG9ydCAnaXNjcm9sbC9idWlsZC9pc2Nyb2xsLXpvb20uanMnXG5pbXBvcnQgJ3NjcmlwdCFodG1sNXNoaXYvZGlzdC9odG1sNXNoaXYubWluJztcbmltcG9ydCAnc2NyaXB0IWFuZ3VsYXIvYW5ndWxhci5taW4nO1xuaW1wb3J0ICdzY3JpcHQhYW5ndWxhci1yb3V0ZS9hbmd1bGFyLXJvdXRlLm1pbic7XG5pbXBvcnQgJ3NjcmlwdCFhbmd1bGFyLWNvb2tpZXMvYW5ndWxhci1jb29raWVzLm1pbic7XG5pbXBvcnQgJ3NjcmlwdCFhbmd1bGFyLXJlc291cmNlL2FuZ3VsYXItcmVzb3VyY2UubWluJztcbmltcG9ydCAnc2NyaXB0IXN3ZWV0YWxlcnQvZGlzdC9zd2VldGFsZXJ0Lm1pbic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4wLjZAbmctYW5ub3RhdGUtbG9hZGVyL2xvYWRlci5qcz9hZGQ9dHJ1ZSEuL34vLjEuNi4zQGVzbGludC1sb2FkZXIhLi9hcHAvdmVuZG9yLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvd2V1aS9kaXN0L3N0eWxlL3dldWkubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cbiAqIEBsaWNlbnNlIGVzNS1zaGltIENvcHlyaWdodCAyMDA5LTIwMTQgYnkgY29udHJpYnV0b3JzLCBNSVQgTGljZW5zZVxuICogc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLy8gdmltOiB0cz00IHN0cz00IHN3PTQgZXhwYW5kdGFiXG5cblxuLy8gVU1EIChVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24pXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZC9ibG9iL21hc3Rlci9yZXR1cm5FeHBvcnRzLmpzXG4vLyBBZGQgc2VtaWNvbG9uIHRvIHByZXZlbnQgSUlGRSBmcm9tIGJlaW5nIHBhc3NlZCBhcyBhcmd1bWVudCB0byBjb25jYXRlbmF0ZWQgY29kZS5cbjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgLypnbG9iYWwgZGVmaW5lLCBleHBvcnRzLCBtb2R1bGUgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgICAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIHJvb3QucmV0dXJuRXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuLyoqXG4gKiBCcmluZ3MgYW4gZW52aXJvbm1lbnQgYXMgY2xvc2UgdG8gRUNNQVNjcmlwdCA1IGNvbXBsaWFuY2VcbiAqIGFzIGlzIHBvc3NpYmxlIHdpdGggdGhlIGZhY2lsaXRpZXMgb2YgZXJzdHdoaWxlIGVuZ2luZXMuXG4gKlxuICogQW5ub3RhdGVkIEVTNTogaHR0cDovL2VzNS5naXRodWIuY29tLyAoc3BlY2lmaWMgbGlua3MgYmVsb3cpXG4gKiBFUzUgU3BlYzogaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL3B1YmxpY2F0aW9ucy9maWxlcy9FQ01BLVNUL0VjbWEtMjYyLnBkZlxuICogUmVxdWlyZWQgcmVhZGluZzogaHR0cDovL2phdmFzY3JpcHR3ZWJsb2cud29yZHByZXNzLmNvbS8yMDExLzEyLzA1L2V4dGVuZGluZy1qYXZhc2NyaXB0LW5hdGl2ZXMvXG4gKi9cblxuLy8gU2hvcnRjdXQgdG8gYW4gb2Z0ZW4gYWNjZXNzZWQgcHJvcGVydGllcywgaW4gb3JkZXIgdG8gYXZvaWQgbXVsdGlwbGVcbi8vIGRlcmVmZXJlbmNlIHRoYXQgY29zdHMgdW5pdmVyc2FsbHkuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBTdHJpbmdQcm90b3R5cGUgPSBTdHJpbmcucHJvdG90eXBlO1xudmFyIE51bWJlclByb3RvdHlwZSA9IE51bWJlci5wcm90b3R5cGU7XG52YXIgYXJyYXlfc2xpY2UgPSBBcnJheVByb3RvdHlwZS5zbGljZTtcbnZhciBhcnJheV9zcGxpY2UgPSBBcnJheVByb3RvdHlwZS5zcGxpY2U7XG52YXIgYXJyYXlfcHVzaCA9IEFycmF5UHJvdG90eXBlLnB1c2g7XG52YXIgYXJyYXlfdW5zaGlmdCA9IEFycmF5UHJvdG90eXBlLnVuc2hpZnQ7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG5cbi8vIEhhdmluZyBhIHRvU3RyaW5nIGxvY2FsIHZhcmlhYmxlIG5hbWUgYnJlYWtzIGluIE9wZXJhIHNvIHVzZSB0b19zdHJpbmcuXG52YXIgdG9fc3RyaW5nID0gT2JqZWN0UHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdG9fc3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG52YXIgaXNSZWdleCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdG9fc3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICAgIHJldHVybiB0b19zdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbnZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiB0b19zdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG52YXIgaXNBcmd1bWVudHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAgIHZhciBzdHIgPSB0b19zdHJpbmcuY2FsbCh2YWx1ZSk7XG4gICAgdmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG4gICAgaWYgKCFpc0FyZ3MpIHtcbiAgICAgICAgaXNBcmdzID0gIWlzQXJyYXkodmFsdWUpICYmXG4gICAgICAgICAgdmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICB2YWx1ZS5sZW5ndGggPj0gMCAmJlxuICAgICAgICAgIGlzRnVuY3Rpb24odmFsdWUuY2FsbGVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJncztcbn07XG5cbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIChmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAneCcsIHt9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkgeyAvKiB0aGlzIGlzIEVTMyAqL1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSgpKTtcblxuLy8gRGVmaW5lIGNvbmZpZ3VyYWJsZSwgd3JpdGFibGUgYW5kIG5vbi1lbnVtZXJhYmxlIHByb3BzXG4vLyBpZiB0aGV5IGRvbid0IGV4aXN0LlxudmFyIGRlZmluZVByb3BlcnR5O1xuaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIG1ldGhvZCwgZm9yY2VBc3NpZ24pIHtcbiAgICAgICAgaWYgKCFmb3JjZUFzc2lnbiAmJiAobmFtZSBpbiBvYmplY3QpKSB7IHJldHVybjsgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IG1ldGhvZFxuICAgICAgICB9KTtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIG1ldGhvZCwgZm9yY2VBc3NpZ24pIHtcbiAgICAgICAgaWYgKCFmb3JjZUFzc2lnbiAmJiAobmFtZSBpbiBvYmplY3QpKSB7IHJldHVybjsgfVxuICAgICAgICBvYmplY3RbbmFtZV0gPSBtZXRob2Q7XG4gICAgfTtcbn1cbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iamVjdCwgbWFwLCBmb3JjZUFzc2lnbikge1xuICAgIGZvciAodmFyIG5hbWUgaW4gbWFwKSB7XG4gICAgICAgIGlmIChPYmplY3RQcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtYXAsIG5hbWUpKSB7XG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBtYXBbbmFtZV0sIGZvcmNlQXNzaWduKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vXG4vLyBVdGlsXG4vLyA9PT09PT1cbi8vXG5cbi8vIEVTNSA5LjRcbi8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDkuNFxuLy8gaHR0cDovL2pzcGVyZi5jb20vdG8taW50ZWdlclxuXG5mdW5jdGlvbiB0b0ludGVnZXIobnVtKSB7XG4gICAgdmFyIG4gPSArbnVtO1xuICAgIGlmIChuICE9PSBuKSB7IC8vIGlzTmFOXG4gICAgICAgIG4gPSAwO1xuICAgIH0gZWxzZSBpZiAobiAhPT0gMCAmJiBuICE9PSAoMSAvIDApICYmIG4gIT09IC0oMSAvIDApKSB7XG4gICAgICAgIG4gPSAobiA+IDAgfHwgLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhuKSk7XG4gICAgfVxuICAgIHJldHVybiBuO1xufVxuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShpbnB1dCkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGlucHV0O1xuICAgIHJldHVybiBpbnB1dCA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgdHlwZSA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgdHlwZSA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIHRvUHJpbWl0aXZlKGlucHV0KSB7XG4gICAgdmFyIHZhbCwgdmFsdWVPZiwgdG9TdHI7XG4gICAgaWYgKGlzUHJpbWl0aXZlKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIHZhbHVlT2YgPSBpbnB1dC52YWx1ZU9mO1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlT2YpKSB7XG4gICAgICAgIHZhbCA9IHZhbHVlT2YuY2FsbChpbnB1dCk7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyID0gaW5wdXQudG9TdHJpbmc7XG4gICAgaWYgKGlzRnVuY3Rpb24odG9TdHIpKSB7XG4gICAgICAgIHZhbCA9IHRvU3RyLmNhbGwoaW5wdXQpO1xuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG59XG5cbnZhciBFUyA9IHtcbiAgICAvLyBFUzUgOS45XG4gICAgLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4OS45XG4gICAgVG9PYmplY3Q6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIC8qanNoaW50IGVxbnVsbDogdHJ1ZSAqL1xuICAgICAgICBpZiAobyA9PSBudWxsKSB7IC8vIHRoaXMgbWF0Y2hlcyBib3RoIG51bGwgYW5kIHVuZGVmaW5lZFxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbid0IGNvbnZlcnQgXCIgKyBvICsgJyB0byBvYmplY3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0KG8pO1xuICAgIH0sXG4gICAgVG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcbiAgICAgICAgcmV0dXJuIHggPj4+IDA7XG4gICAgfVxufTtcblxuLy9cbi8vIEZ1bmN0aW9uXG4vLyA9PT09PT09PVxuLy9cblxuLy8gRVMtNSAxNS4zLjQuNVxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuMy40LjVcblxudmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcblxuZGVmaW5lUHJvcGVydGllcyhGdW5jdGlvblByb3RvdHlwZSwge1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQodGhhdCkgeyAvLyAubGVuZ3RoIGlzIDFcbiAgICAgICAgLy8gMS4gTGV0IFRhcmdldCBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgICAgIC8vIDIuIElmIElzQ2FsbGFibGUoVGFyZ2V0KSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24odGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSAnICsgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLiBMZXQgQSBiZSBhIG5ldyAocG9zc2libHkgZW1wdHkpIGludGVybmFsIGxpc3Qgb2YgYWxsIG9mIHRoZVxuICAgICAgICAvLyAgIGFyZ3VtZW50IHZhbHVlcyBwcm92aWRlZCBhZnRlciB0aGlzQXJnIChhcmcxLCBhcmcyIGV0YyksIGluIG9yZGVyLlxuICAgICAgICAvLyBYWFggc2xpY2VkQXJncyB3aWxsIHN0YW5kIGluIGZvciBcIkFcIiBpZiB1c2VkXG4gICAgICAgIHZhciBhcmdzID0gYXJyYXlfc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpOyAvLyBmb3Igbm9ybWFsIGNhbGxcbiAgICAgICAgLy8gNC4gTGV0IEYgYmUgYSBuZXcgbmF0aXZlIEVDTUFTY3JpcHQgb2JqZWN0LlxuICAgICAgICAvLyAxMS4gU2V0IHRoZSBbW1Byb3RvdHlwZV1dIGludGVybmFsIHByb3BlcnR5IG9mIEYgdG8gdGhlIHN0YW5kYXJkXG4gICAgICAgIC8vICAgYnVpbHQtaW4gRnVuY3Rpb24gcHJvdG90eXBlIG9iamVjdCBhcyBzcGVjaWZpZWQgaW4gMTUuMy4zLjEuXG4gICAgICAgIC8vIDEyLiBTZXQgdGhlIFtbQ2FsbF1dIGludGVybmFsIHByb3BlcnR5IG9mIEYgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgIC8vICAgMTUuMy40LjUuMS5cbiAgICAgICAgLy8gMTMuIFNldCB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBGIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICAvLyAgIDE1LjMuNC41LjIuXG4gICAgICAgIC8vIDE0LiBTZXQgdGhlIFtbSGFzSW5zdGFuY2VdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBGIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICAvLyAgIDE1LjMuNC41LjMuXG4gICAgICAgIHZhciBib3VuZDtcbiAgICAgICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgICAgIC8vIDE1LjMuNC41LjIgW1tDb25zdHJ1Y3RdXVxuICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIGEgZnVuY3Rpb24gb2JqZWN0LFxuICAgICAgICAgICAgICAgIC8vIEYgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyB0aGUgYmluZCBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhXG4gICAgICAgICAgICAgICAgLy8gbGlzdCBvZiBhcmd1bWVudHMgRXh0cmFBcmdzLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAgICAgICAgICAgICAgICAvLyAxLiBMZXQgdGFyZ2V0IGJlIHRoZSB2YWx1ZSBvZiBGJ3MgW1tUYXJnZXRGdW5jdGlvbl1dXG4gICAgICAgICAgICAgICAgLy8gICBpbnRlcm5hbCBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAvLyAyLiBJZiB0YXJnZXQgaGFzIG5vIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kLCBhXG4gICAgICAgICAgICAgICAgLy8gICBUeXBlRXJyb3IgZXhjZXB0aW9uIGlzIHRocm93bi5cbiAgICAgICAgICAgICAgICAvLyAzLiBMZXQgYm91bmRBcmdzIGJlIHRoZSB2YWx1ZSBvZiBGJ3MgW1tCb3VuZEFyZ3NdXSBpbnRlcm5hbFxuICAgICAgICAgICAgICAgIC8vICAgcHJvcGVydHkuXG4gICAgICAgICAgICAgICAgLy8gNC4gTGV0IGFyZ3MgYmUgYSBuZXcgbGlzdCBjb250YWluaW5nIHRoZSBzYW1lIHZhbHVlcyBhcyB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGxpc3QgYm91bmRBcmdzIGluIHRoZSBzYW1lIG9yZGVyIGZvbGxvd2VkIGJ5IHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgLy8gICB2YWx1ZXMgYXMgdGhlIGxpc3QgRXh0cmFBcmdzIGluIHRoZSBzYW1lIG9yZGVyLlxuICAgICAgICAgICAgICAgIC8vIDUuIFJldHVybiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWxcbiAgICAgICAgICAgICAgICAvLyAgIG1ldGhvZCBvZiB0YXJnZXQgcHJvdmlkaW5nIGFyZ3MgYXMgdGhlIGFyZ3VtZW50cy5cblxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KGFycmF5X3NsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIDE1LjMuNC41LjEgW1tDYWxsXV1cbiAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBbW0NhbGxdXSBpbnRlcm5hbCBtZXRob2Qgb2YgYSBmdW5jdGlvbiBvYmplY3QsIEYsXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggd2FzIGNyZWF0ZWQgdXNpbmcgdGhlIGJpbmQgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggYVxuICAgICAgICAgICAgICAgIC8vIHRoaXMgdmFsdWUgYW5kIGEgbGlzdCBvZiBhcmd1bWVudHMgRXh0cmFBcmdzLCB0aGUgZm9sbG93aW5nXG4gICAgICAgICAgICAgICAgLy8gc3RlcHMgYXJlIHRha2VuOlxuICAgICAgICAgICAgICAgIC8vIDEuIExldCBib3VuZEFyZ3MgYmUgdGhlIHZhbHVlIG9mIEYncyBbW0JvdW5kQXJnc11dIGludGVybmFsXG4gICAgICAgICAgICAgICAgLy8gICBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAvLyAyLiBMZXQgYm91bmRUaGlzIGJlIHRoZSB2YWx1ZSBvZiBGJ3MgW1tCb3VuZFRoaXNdXSBpbnRlcm5hbFxuICAgICAgICAgICAgICAgIC8vICAgcHJvcGVydHkuXG4gICAgICAgICAgICAgICAgLy8gMy4gTGV0IHRhcmdldCBiZSB0aGUgdmFsdWUgb2YgRidzIFtbVGFyZ2V0RnVuY3Rpb25dXSBpbnRlcm5hbFxuICAgICAgICAgICAgICAgIC8vICAgcHJvcGVydHkuXG4gICAgICAgICAgICAgICAgLy8gNC4gTGV0IGFyZ3MgYmUgYSBuZXcgbGlzdCBjb250YWluaW5nIHRoZSBzYW1lIHZhbHVlcyBhcyB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGxpc3QgYm91bmRBcmdzIGluIHRoZSBzYW1lIG9yZGVyIGZvbGxvd2VkIGJ5IHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgLy8gICB2YWx1ZXMgYXMgdGhlIGxpc3QgRXh0cmFBcmdzIGluIHRoZSBzYW1lIG9yZGVyLlxuICAgICAgICAgICAgICAgIC8vIDUuIFJldHVybiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ2FsbF1dIGludGVybmFsIG1ldGhvZFxuICAgICAgICAgICAgICAgIC8vICAgb2YgdGFyZ2V0IHByb3ZpZGluZyBib3VuZFRoaXMgYXMgdGhlIHRoaXMgdmFsdWUgYW5kXG4gICAgICAgICAgICAgICAgLy8gICBwcm92aWRpbmcgYXJncyBhcyB0aGUgYXJndW1lbnRzLlxuXG4gICAgICAgICAgICAgICAgLy8gZXF1aXY6IHRhcmdldC5jYWxsKHRoaXMsIC4uLmJvdW5kQXJncywgLi4uYXJncylcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChhcnJheV9zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gMTUuIElmIHRoZSBbW0NsYXNzXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgVGFyZ2V0IGlzIFwiRnVuY3Rpb25cIiwgdGhlblxuICAgICAgICAvLyAgICAgYS4gTGV0IEwgYmUgdGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiBUYXJnZXQgbWludXMgdGhlIGxlbmd0aCBvZiBBLlxuICAgICAgICAvLyAgICAgYi4gU2V0IHRoZSBsZW5ndGggb3duIHByb3BlcnR5IG9mIEYgdG8gZWl0aGVyIDAgb3IgTCwgd2hpY2hldmVyIGlzXG4gICAgICAgIC8vICAgICAgIGxhcmdlci5cbiAgICAgICAgLy8gMTYuIEVsc2Ugc2V0IHRoZSBsZW5ndGggb3duIHByb3BlcnR5IG9mIEYgdG8gMC5cblxuICAgICAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuXG4gICAgICAgIC8vIDE3LiBTZXQgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGxlbmd0aCBvd24gcHJvcGVydHkgb2YgRiB0byB0aGUgdmFsdWVzXG4gICAgICAgIC8vICAgc3BlY2lmaWVkIGluIDE1LjMuNS4xLlxuICAgICAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBYWFggQnVpbGQgYSBkeW5hbWljIGZ1bmN0aW9uIHdpdGggZGVzaXJlZCBhbW91bnQgb2YgYXJndW1lbnRzIGlzIHRoZSBvbmx5XG4gICAgICAgIC8vIHdheSB0byBzZXQgdGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiBhIGZ1bmN0aW9uLlxuICAgICAgICAvLyBJbiBlbnZpcm9ubWVudHMgd2hlcmUgQ29udGVudCBTZWN1cml0eSBQb2xpY2llcyBlbmFibGVkIChDaHJvbWUgZXh0ZW5zaW9ucyxcbiAgICAgICAgLy8gZm9yIGV4LikgYWxsIHVzZSBvZiBldmFsIG9yIEZ1bmN0aW9uIGNvc3RydWN0b3IgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgLy8gSG93ZXZlciBpbiBhbGwgb2YgdGhlc2UgZW52aXJvbm1lbnRzIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGV4aXN0c1xuICAgICAgICAvLyBhbmQgc28gdGhpcyBjb2RlIHdpbGwgbmV2ZXIgYmUgZXhlY3V0ZWQuXG4gICAgICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBib3VuZEFyZ3Muam9pbignLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICAgICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgICAgIC8vIENsZWFuIHVwIGRhbmdsaW5nIHJlZmVyZW5jZXMuXG4gICAgICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ET1xuICAgICAgICAvLyAxOC4gU2V0IHRoZSBbW0V4dGVuc2libGVdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBGIHRvIHRydWUuXG5cbiAgICAgICAgLy8gVE9ET1xuICAgICAgICAvLyAxOS4gTGV0IHRocm93ZXIgYmUgdGhlIFtbVGhyb3dUeXBlRXJyb3JdXSBmdW5jdGlvbiBPYmplY3QgKDEzLjIuMykuXG4gICAgICAgIC8vIDIwLiBDYWxsIHRoZSBbW0RlZmluZU93blByb3BlcnR5XV0gaW50ZXJuYWwgbWV0aG9kIG9mIEYgd2l0aFxuICAgICAgICAvLyAgIGFyZ3VtZW50cyBcImNhbGxlclwiLCBQcm9wZXJ0eURlc2NyaXB0b3Ige1tbR2V0XV06IHRocm93ZXIsIFtbU2V0XV06XG4gICAgICAgIC8vICAgdGhyb3dlciwgW1tFbnVtZXJhYmxlXV06IGZhbHNlLCBbW0NvbmZpZ3VyYWJsZV1dOiBmYWxzZX0sIGFuZFxuICAgICAgICAvLyAgIGZhbHNlLlxuICAgICAgICAvLyAyMS4gQ2FsbCB0aGUgW1tEZWZpbmVPd25Qcm9wZXJ0eV1dIGludGVybmFsIG1ldGhvZCBvZiBGIHdpdGhcbiAgICAgICAgLy8gICBhcmd1bWVudHMgXCJhcmd1bWVudHNcIiwgUHJvcGVydHlEZXNjcmlwdG9yIHtbW0dldF1dOiB0aHJvd2VyLFxuICAgICAgICAvLyAgIFtbU2V0XV06IHRocm93ZXIsIFtbRW51bWVyYWJsZV1dOiBmYWxzZSwgW1tDb25maWd1cmFibGVdXTogZmFsc2V9LFxuICAgICAgICAvLyAgIGFuZCBmYWxzZS5cblxuICAgICAgICAvLyBUT0RPXG4gICAgICAgIC8vIE5PVEUgRnVuY3Rpb24gb2JqZWN0cyBjcmVhdGVkIHVzaW5nIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGRvIG5vdFxuICAgICAgICAvLyBoYXZlIGEgcHJvdG90eXBlIHByb3BlcnR5IG9yIHRoZSBbW0NvZGVdXSwgW1tGb3JtYWxQYXJhbWV0ZXJzXV0sIGFuZFxuICAgICAgICAvLyBbW1Njb3BlXV0gaW50ZXJuYWwgcHJvcGVydGllcy5cbiAgICAgICAgLy8gWFhYIGNhbid0IGRlbGV0ZSBwcm90b3R5cGUgaW4gcHVyZS1qcy5cblxuICAgICAgICAvLyAyMi4gUmV0dXJuIEYuXG4gICAgICAgIHJldHVybiBib3VuZDtcbiAgICB9XG59KTtcblxuLy8gX1BsZWFzZSBub3RlOiBTaG9ydGN1dHMgYXJlIGRlZmluZWQgYWZ0ZXIgYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBhcyB3ZVxuLy8gdXMgaXQgaW4gZGVmaW5pbmcgc2hvcnRjdXRzLlxudmFyIG93bnMgPSBjYWxsLmJpbmQoT2JqZWN0UHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuLy9cbi8vIEFycmF5XG4vLyA9PT09PVxuLy9cblxuLy8gRVM1IDE1LjQuNC4xMlxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC40LjEyXG52YXIgc3BsaWNlTm9vcFJldHVybnNFbXB0eUFycmF5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYSA9IFsxLCAyXTtcbiAgICB2YXIgcmVzdWx0ID0gYS5zcGxpY2UoKTtcbiAgICByZXR1cm4gYS5sZW5ndGggPT09IDIgJiYgaXNBcnJheShyZXN1bHQpICYmIHJlc3VsdC5sZW5ndGggPT09IDA7XG59KCkpO1xuZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgIC8vIFNhZmFyaSA1LjAgYnVnIHdoZXJlIC5zcGxpY2UoKSByZXR1cm5zIHVuZGVmaW5lZFxuICAgIHNwbGljZTogZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5X3NwbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxufSwgc3BsaWNlTm9vcFJldHVybnNFbXB0eUFycmF5KTtcblxudmFyIHNwbGljZVdvcmtzV2l0aEVtcHR5T2JqZWN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgQXJyYXlQcm90b3R5cGUuc3BsaWNlLmNhbGwob2JqLCAwLCAwLCAxKTtcbiAgICByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMTtcbn0oKSk7XG5kZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgc3BsaWNlOiBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7IHJldHVybiBbXTsgfVxuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdGhpcy5sZW5ndGggPSBNYXRoLm1heCh0b0ludGVnZXIodGhpcy5sZW5ndGgpLCAwKTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHR5cGVvZiBkZWxldGVDb3VudCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBhcnJheV9zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMubGVuZ3RoIC0gc3RhcnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmdzWzFdID0gdG9JbnRlZ2VyKGRlbGV0ZUNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXlfc3BsaWNlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbn0sICFzcGxpY2VXb3Jrc1dpdGhFbXB0eU9iamVjdCk7XG5cbi8vIEVTNSAxNS40LjQuMTJcbi8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjQuNC4xM1xuLy8gUmV0dXJuIGxlbithcmdDb3VudC5cbi8vIFtidWdmaXgsIGllbHQ4XVxuLy8gSUUgPCA4IGJ1ZzogW10udW5zaGlmdCgwKSA9PT0gdW5kZWZpbmVkIGJ1dCBzaG91bGQgYmUgXCIxXCJcbnZhciBoYXNVbnNoaWZ0UmV0dXJuVmFsdWVCdWcgPSBbXS51bnNoaWZ0KDApICE9PSAxO1xuZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgIHVuc2hpZnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXJyYXlfdW5zaGlmdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxufSwgaGFzVW5zaGlmdFJldHVyblZhbHVlQnVnKTtcblxuLy8gRVM1IDE1LjQuMy4yXG4vLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS40LjMuMlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaXNBcnJheVxuZGVmaW5lUHJvcGVydGllcyhBcnJheSwgeyBpc0FycmF5OiBpc0FycmF5IH0pO1xuXG4vLyBUaGUgSXNDYWxsYWJsZSgpIGNoZWNrIGluIHRoZSBBcnJheSBmdW5jdGlvbnNcbi8vIGhhcyBiZWVuIHJlcGxhY2VkIHdpdGggYSBzdHJpY3QgY2hlY2sgb24gdGhlXG4vLyBpbnRlcm5hbCBjbGFzcyBvZiB0aGUgb2JqZWN0IHRvIHRyYXAgY2FzZXMgd2hlcmVcbi8vIHRoZSBwcm92aWRlZCBmdW5jdGlvbiB3YXMgYWN0dWFsbHkgYSByZWd1bGFyXG4vLyBleHByZXNzaW9uIGxpdGVyYWwsIHdoaWNoIGluIFY4IGFuZFxuLy8gSmF2YVNjcmlwdENvcmUgaXMgYSB0eXBlb2YgXCJmdW5jdGlvblwiLiAgT25seSBpblxuLy8gVjggYXJlIHJlZ3VsYXIgZXhwcmVzc2lvbiBsaXRlcmFscyBwZXJtaXR0ZWQgYXNcbi8vIHJlZHVjZSBwYXJhbWV0ZXJzLCBzbyBpdCBpcyBkZXNpcmFibGUgaW4gdGhlXG4vLyBnZW5lcmFsIGNhc2UgZm9yIHRoZSBzaGltIHRvIG1hdGNoIHRoZSBtb3JlXG4vLyBzdHJpY3QgYW5kIGNvbW1vbiBiZWhhdmlvciBvZiByZWplY3RpbmcgcmVndWxhclxuLy8gZXhwcmVzc2lvbnMuXG5cbi8vIEVTNSAxNS40LjQuMThcbi8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjQuNC4xOFxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvYXJyYXkvZm9yRWFjaFxuXG4vLyBDaGVjayBmYWlsdXJlIG9mIGJ5LWluZGV4IGFjY2VzcyBvZiBzdHJpbmcgY2hhcmFjdGVycyAoSUUgPCA5KVxuLy8gYW5kIGZhaWx1cmUgb2YgYDAgaW4gYm94ZWRTdHJpbmdgIChSaGlubylcbnZhciBib3hlZFN0cmluZyA9IE9iamVjdCgnYScpO1xudmFyIHNwbGl0U3RyaW5nID0gYm94ZWRTdHJpbmdbMF0gIT09ICdhJyB8fCAhKDAgaW4gYm94ZWRTdHJpbmcpO1xuXG52YXIgcHJvcGVybHlCb3hlc0NvbnRleHQgPSBmdW5jdGlvbiBwcm9wZXJseUJveGVkKG1ldGhvZCkge1xuICAgIC8vIENoZWNrIG5vZGUgMC42LjIxIGJ1ZyB3aGVyZSB0aGlyZCBwYXJhbWV0ZXIgaXMgbm90IGJveGVkXG4gICAgdmFyIHByb3Blcmx5Qm94ZXNOb25TdHJpY3QgPSB0cnVlO1xuICAgIHZhciBwcm9wZXJseUJveGVzU3RyaWN0ID0gdHJ1ZTtcbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIG1ldGhvZC5jYWxsKCdmb28nLCBmdW5jdGlvbiAoXywgX18sIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dCAhPT0gJ29iamVjdCcpIHsgcHJvcGVybHlCb3hlc05vblN0cmljdCA9IGZhbHNlOyB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1ldGhvZC5jYWxsKFsxXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgcHJvcGVybHlCb3hlc1N0cmljdCA9IHR5cGVvZiB0aGlzID09PSAnc3RyaW5nJztcbiAgICAgICAgfSwgJ3gnKTtcbiAgICB9XG4gICAgcmV0dXJuICEhbWV0aG9kICYmIHByb3Blcmx5Qm94ZXNOb25TdHJpY3QgJiYgcHJvcGVybHlCb3hlc1N0cmljdDtcbn07XG5cbmRlZmluZVByb3BlcnRpZXMoQXJyYXlQcm90b3R5cGUsIHtcbiAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGZ1biAvKiwgdGhpc3AqLykge1xuICAgICAgICB2YXIgb2JqZWN0ID0gRVMuVG9PYmplY3QodGhpcyksXG4gICAgICAgICAgICBzZWxmID0gc3BsaXRTdHJpbmcgJiYgaXNTdHJpbmcodGhpcykgPyB0aGlzLnNwbGl0KCcnKSA6IG9iamVjdCxcbiAgICAgICAgICAgIHRoaXNwID0gYXJndW1lbnRzWzFdLFxuICAgICAgICAgICAgaSA9IC0xLFxuICAgICAgICAgICAgbGVuZ3RoID0gc2VsZi5sZW5ndGggPj4+IDA7XG5cbiAgICAgICAgLy8gSWYgbm8gY2FsbGJhY2sgZnVuY3Rpb24gb3IgaWYgY2FsbGJhY2sgaXMgbm90IGEgY2FsbGFibGUgZnVuY3Rpb25cbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKGZ1bikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTsgLy8gVE9ETyBtZXNzYWdlXG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoKytpIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiBzZWxmKSB7XG4gICAgICAgICAgICAgICAgLy8gSW52b2tlIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aXRoIGNhbGwsIHBhc3NpbmcgYXJndW1lbnRzOlxuICAgICAgICAgICAgICAgIC8vIGNvbnRleHQsIHByb3BlcnR5IHZhbHVlLCBwcm9wZXJ0eSBrZXksIHRoaXNBcmcgb2JqZWN0XG4gICAgICAgICAgICAgICAgLy8gY29udGV4dFxuICAgICAgICAgICAgICAgIGZ1bi5jYWxsKHRoaXNwLCBzZWxmW2ldLCBpLCBvYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSwgIXByb3Blcmx5Qm94ZXNDb250ZXh0KEFycmF5UHJvdG90eXBlLmZvckVhY2gpKTtcblxuLy8gRVM1IDE1LjQuNC4xOVxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC40LjE5XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9Db3JlX0phdmFTY3JpcHRfMS41X1JlZmVyZW5jZS9PYmplY3RzL0FycmF5L21hcFxuZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgIG1hcDogZnVuY3Rpb24gbWFwKGZ1biAvKiwgdGhpc3AqLykge1xuICAgICAgICB2YXIgb2JqZWN0ID0gRVMuVG9PYmplY3QodGhpcyksXG4gICAgICAgICAgICBzZWxmID0gc3BsaXRTdHJpbmcgJiYgaXNTdHJpbmcodGhpcykgPyB0aGlzLnNwbGl0KCcnKSA6IG9iamVjdCxcbiAgICAgICAgICAgIGxlbmd0aCA9IHNlbGYubGVuZ3RoID4+PiAwLFxuICAgICAgICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgICAgICAgIHRoaXNwID0gYXJndW1lbnRzWzFdO1xuXG4gICAgICAgIC8vIElmIG5vIGNhbGxiYWNrIGZ1bmN0aW9uIG9yIGlmIGNhbGxiYWNrIGlzIG5vdCBhIGNhbGxhYmxlIGZ1bmN0aW9uXG4gICAgICAgIGlmICghaXNGdW5jdGlvbihmdW4pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGZ1biArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIGluIHNlbGYpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSBmdW4uY2FsbCh0aGlzcCwgc2VsZltpXSwgaSwgb2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0sICFwcm9wZXJseUJveGVzQ29udGV4dChBcnJheVByb3RvdHlwZS5tYXApKTtcblxuLy8gRVM1IDE1LjQuNC4yMFxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC40LjIwXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9Db3JlX0phdmFTY3JpcHRfMS41X1JlZmVyZW5jZS9PYmplY3RzL0FycmF5L2ZpbHRlclxuZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGZ1biAvKiwgdGhpc3AgKi8pIHtcbiAgICAgICAgdmFyIG9iamVjdCA9IEVTLlRvT2JqZWN0KHRoaXMpLFxuICAgICAgICAgICAgc2VsZiA9IHNwbGl0U3RyaW5nICYmIGlzU3RyaW5nKHRoaXMpID8gdGhpcy5zcGxpdCgnJykgOiBvYmplY3QsXG4gICAgICAgICAgICBsZW5ndGggPSBzZWxmLmxlbmd0aCA+Pj4gMCxcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB0aGlzcCA9IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICAvLyBJZiBubyBjYWxsYmFjayBmdW5jdGlvbiBvciBpZiBjYWxsYmFjayBpcyBub3QgYSBjYWxsYWJsZSBmdW5jdGlvblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZnVuKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmdW4gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiBzZWxmKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxmW2ldO1xuICAgICAgICAgICAgICAgIGlmIChmdW4uY2FsbCh0aGlzcCwgdmFsdWUsIGksIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0sICFwcm9wZXJseUJveGVzQ29udGV4dChBcnJheVByb3RvdHlwZS5maWx0ZXIpKTtcblxuLy8gRVM1IDE1LjQuNC4xNlxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC40LjE2XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9ldmVyeVxuZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShmdW4gLyosIHRoaXNwICovKSB7XG4gICAgICAgIHZhciBvYmplY3QgPSBFUy5Ub09iamVjdCh0aGlzKSxcbiAgICAgICAgICAgIHNlbGYgPSBzcGxpdFN0cmluZyAmJiBpc1N0cmluZyh0aGlzKSA/IHRoaXMuc3BsaXQoJycpIDogb2JqZWN0LFxuICAgICAgICAgICAgbGVuZ3RoID0gc2VsZi5sZW5ndGggPj4+IDAsXG4gICAgICAgICAgICB0aGlzcCA9IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICAvLyBJZiBubyBjYWxsYmFjayBmdW5jdGlvbiBvciBpZiBjYWxsYmFjayBpcyBub3QgYSBjYWxsYWJsZSBmdW5jdGlvblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZnVuKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmdW4gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiBzZWxmICYmICFmdW4uY2FsbCh0aGlzcCwgc2VsZltpXSwgaSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59LCAhcHJvcGVybHlCb3hlc0NvbnRleHQoQXJyYXlQcm90b3R5cGUuZXZlcnkpKTtcblxuLy8gRVM1IDE1LjQuNC4xN1xuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC40LjE3XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb21lXG5kZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgc29tZTogZnVuY3Rpb24gc29tZShmdW4gLyosIHRoaXNwICovKSB7XG4gICAgICAgIHZhciBvYmplY3QgPSBFUy5Ub09iamVjdCh0aGlzKSxcbiAgICAgICAgICAgIHNlbGYgPSBzcGxpdFN0cmluZyAmJiBpc1N0cmluZyh0aGlzKSA/IHRoaXMuc3BsaXQoJycpIDogb2JqZWN0LFxuICAgICAgICAgICAgbGVuZ3RoID0gc2VsZi5sZW5ndGggPj4+IDAsXG4gICAgICAgICAgICB0aGlzcCA9IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICAvLyBJZiBubyBjYWxsYmFjayBmdW5jdGlvbiBvciBpZiBjYWxsYmFjayBpcyBub3QgYSBjYWxsYWJsZSBmdW5jdGlvblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZnVuKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmdW4gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiBzZWxmICYmIGZ1bi5jYWxsKHRoaXNwLCBzZWxmW2ldLCBpLCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0sICFwcm9wZXJseUJveGVzQ29udGV4dChBcnJheVByb3RvdHlwZS5zb21lKSk7XG5cbi8vIEVTNSAxNS40LjQuMjFcbi8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjQuNC4yMVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vQ29yZV9KYXZhU2NyaXB0XzEuNV9SZWZlcmVuY2UvT2JqZWN0cy9BcnJheS9yZWR1Y2VcbnZhciByZWR1Y2VDb2VyY2VzVG9PYmplY3QgPSBmYWxzZTtcbmlmIChBcnJheVByb3RvdHlwZS5yZWR1Y2UpIHtcbiAgICByZWR1Y2VDb2VyY2VzVG9PYmplY3QgPSB0eXBlb2YgQXJyYXlQcm90b3R5cGUucmVkdWNlLmNhbGwoJ2VzNScsIGZ1bmN0aW9uIChfLCBfXywgX19fLCBsaXN0KSB7IHJldHVybiBsaXN0OyB9KSA9PT0gJ29iamVjdCc7XG59XG5kZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoZnVuIC8qLCBpbml0aWFsKi8pIHtcbiAgICAgICAgdmFyIG9iamVjdCA9IEVTLlRvT2JqZWN0KHRoaXMpLFxuICAgICAgICAgICAgc2VsZiA9IHNwbGl0U3RyaW5nICYmIGlzU3RyaW5nKHRoaXMpID8gdGhpcy5zcGxpdCgnJykgOiBvYmplY3QsXG4gICAgICAgICAgICBsZW5ndGggPSBzZWxmLmxlbmd0aCA+Pj4gMDtcblxuICAgICAgICAvLyBJZiBubyBjYWxsYmFjayBmdW5jdGlvbiBvciBpZiBjYWxsYmFjayBpcyBub3QgYSBjYWxsYWJsZSBmdW5jdGlvblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZnVuKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmdW4gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyB2YWx1ZSB0byByZXR1cm4gaWYgbm8gaW5pdGlhbCB2YWx1ZSBhbmQgYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgaWYgKCFsZW5ndGggJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhcmd1bWVudHNbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGkgaW4gc2VsZikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzZWxmW2krK107XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIGFycmF5IGNvbnRhaW5zIG5vIHZhbHVlcywgbm8gaW5pdGlhbCB2YWx1ZSB0byByZXR1cm5cbiAgICAgICAgICAgICAgICBpZiAoKytpID49IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiBzZWxmKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZnVuLmNhbGwodm9pZCAwLCByZXN1bHQsIHNlbGZbaV0sIGksIG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0sICFyZWR1Y2VDb2VyY2VzVG9PYmplY3QpO1xuXG4vLyBFUzUgMTUuNC40LjIyXG4vLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS40LjQuMjJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0NvcmVfSmF2YVNjcmlwdF8xLjVfUmVmZXJlbmNlL09iamVjdHMvQXJyYXkvcmVkdWNlUmlnaHRcbnZhciByZWR1Y2VSaWdodENvZXJjZXNUb09iamVjdCA9IGZhbHNlO1xuaWYgKEFycmF5UHJvdG90eXBlLnJlZHVjZVJpZ2h0KSB7XG4gICAgcmVkdWNlUmlnaHRDb2VyY2VzVG9PYmplY3QgPSB0eXBlb2YgQXJyYXlQcm90b3R5cGUucmVkdWNlUmlnaHQuY2FsbCgnZXM1JywgZnVuY3Rpb24gKF8sIF9fLCBfX18sIGxpc3QpIHsgcmV0dXJuIGxpc3Q7IH0pID09PSAnb2JqZWN0Jztcbn1cbmRlZmluZVByb3BlcnRpZXMoQXJyYXlQcm90b3R5cGUsIHtcbiAgICByZWR1Y2VSaWdodDogZnVuY3Rpb24gcmVkdWNlUmlnaHQoZnVuIC8qLCBpbml0aWFsKi8pIHtcbiAgICAgICAgdmFyIG9iamVjdCA9IEVTLlRvT2JqZWN0KHRoaXMpLFxuICAgICAgICAgICAgc2VsZiA9IHNwbGl0U3RyaW5nICYmIGlzU3RyaW5nKHRoaXMpID8gdGhpcy5zcGxpdCgnJykgOiBvYmplY3QsXG4gICAgICAgICAgICBsZW5ndGggPSBzZWxmLmxlbmd0aCA+Pj4gMDtcblxuICAgICAgICAvLyBJZiBubyBjYWxsYmFjayBmdW5jdGlvbiBvciBpZiBjYWxsYmFjayBpcyBub3QgYSBjYWxsYWJsZSBmdW5jdGlvblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZnVuKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmdW4gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyB2YWx1ZSB0byByZXR1cm4gaWYgbm8gaW5pdGlhbCB2YWx1ZSwgZW1wdHkgYXJyYXlcbiAgICAgICAgaWYgKCFsZW5ndGggJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVkdWNlUmlnaHQgb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0LCBpID0gbGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChpIGluIHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc2VsZltpLS1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiBhcnJheSBjb250YWlucyBubyB2YWx1ZXMsIG5vIGluaXRpYWwgdmFsdWUgdG8gcmV0dXJuXG4gICAgICAgICAgICAgICAgaWYgKC0taSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVkdWNlUmlnaHQgb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoaSBpbiBzZWxmKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZnVuLmNhbGwodm9pZCAwLCByZXN1bHQsIHNlbGZbaV0sIGksIG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGktLSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59LCAhcmVkdWNlUmlnaHRDb2VyY2VzVG9PYmplY3QpO1xuXG4vLyBFUzUgMTUuNC40LjE0XG4vLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS40LjQuMTRcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2luZGV4T2ZcbnZhciBoYXNGaXJlZm94MkluZGV4T2ZCdWcgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiAmJiBbMCwgMV0uaW5kZXhPZigxLCAyKSAhPT0gLTE7XG5kZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzb3VnaHQgLyosIGZyb21JbmRleCAqLykge1xuICAgICAgICB2YXIgc2VsZiA9IHNwbGl0U3RyaW5nICYmIGlzU3RyaW5nKHRoaXMpID8gdGhpcy5zcGxpdCgnJykgOiBFUy5Ub09iamVjdCh0aGlzKSxcbiAgICAgICAgICAgIGxlbmd0aCA9IHNlbGYubGVuZ3RoID4+PiAwO1xuXG4gICAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgaSA9IHRvSW50ZWdlcihhcmd1bWVudHNbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIG5lZ2F0aXZlIGluZGljZXNcbiAgICAgICAgaSA9IGkgPj0gMCA/IGkgOiBNYXRoLm1heCgwLCBsZW5ndGggKyBpKTtcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgaW4gc2VsZiAmJiBzZWxmW2ldID09PSBzb3VnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufSwgaGFzRmlyZWZveDJJbmRleE9mQnVnKTtcblxuLy8gRVM1IDE1LjQuNC4xNVxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC40LjE1XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9sYXN0SW5kZXhPZlxudmFyIGhhc0ZpcmVmb3gyTGFzdEluZGV4T2ZCdWcgPSBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YgJiYgWzAsIDFdLmxhc3RJbmRleE9mKDAsIC0zKSAhPT0gLTE7XG5kZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uIGxhc3RJbmRleE9mKHNvdWdodCAvKiwgZnJvbUluZGV4ICovKSB7XG4gICAgICAgIHZhciBzZWxmID0gc3BsaXRTdHJpbmcgJiYgaXNTdHJpbmcodGhpcykgPyB0aGlzLnNwbGl0KCcnKSA6IEVTLlRvT2JqZWN0KHRoaXMpLFxuICAgICAgICAgICAgbGVuZ3RoID0gc2VsZi5sZW5ndGggPj4+IDA7XG5cbiAgICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IGxlbmd0aCAtIDE7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgaSA9IE1hdGgubWluKGksIHRvSW50ZWdlcihhcmd1bWVudHNbMV0pKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgbmVnYXRpdmUgaW5kaWNlc1xuICAgICAgICBpID0gaSA+PSAwID8gaSA6IGxlbmd0aCAtIE1hdGguYWJzKGkpO1xuICAgICAgICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmIChpIGluIHNlbGYgJiYgc291Z2h0ID09PSBzZWxmW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn0sIGhhc0ZpcmVmb3gyTGFzdEluZGV4T2ZCdWcpO1xuXG4vL1xuLy8gT2JqZWN0XG4vLyA9PT09PT1cbi8vXG5cbi8vIEVTNSAxNS4yLjMuMTRcbi8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjIuMy4xNFxuXG4vLyBodHRwOi8vd2hhdHRoZWhlYWRzYWlkLmNvbS8yMDEwLzEwL2Etc2FmZXItb2JqZWN0LWtleXMtY29tcGF0aWJpbGl0eS1pbXBsZW1lbnRhdGlvblxudmFyIGhhc0RvbnRFbnVtQnVnID0gISh7J3RvU3RyaW5nJzogbnVsbH0pLnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpLFxuICAgIGhhc1Byb3RvRW51bUJ1ZyA9IGZ1bmN0aW9uICgpIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlKCdwcm90b3R5cGUnKSxcbiAgICBkb250RW51bXMgPSBbXG4gICAgICAgICd0b1N0cmluZycsXG4gICAgICAgICd0b0xvY2FsZVN0cmluZycsXG4gICAgICAgICd2YWx1ZU9mJyxcbiAgICAgICAgJ2hhc093blByb3BlcnR5JyxcbiAgICAgICAgJ2lzUHJvdG90eXBlT2YnLFxuICAgICAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAgICAgICAnY29uc3RydWN0b3InXG4gICAgXSxcbiAgICBkb250RW51bXNMZW5ndGggPSBkb250RW51bXMubGVuZ3RoO1xuXG5kZWZpbmVQcm9wZXJ0aWVzKE9iamVjdCwge1xuICAgIGtleXM6IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gICAgICAgIHZhciBpc0ZuID0gaXNGdW5jdGlvbihvYmplY3QpLFxuICAgICAgICAgICAgaXNBcmdzID0gaXNBcmd1bWVudHMob2JqZWN0KSxcbiAgICAgICAgICAgIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnLFxuICAgICAgICAgICAgaXNTdHIgPSBpc09iamVjdCAmJiBpc1N0cmluZyhvYmplY3QpO1xuXG4gICAgICAgIGlmICghaXNPYmplY3QgJiYgIWlzRm4gJiYgIWlzQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRoZUtleXMgPSBbXTtcbiAgICAgICAgdmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0ZuO1xuICAgICAgICBpZiAoaXNTdHIgfHwgaXNBcmdzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIG93bnMob2JqZWN0LCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGVLZXlzLnB1c2goU3RyaW5nKG5hbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzRG9udEVudW1CdWcpIHtcbiAgICAgICAgICAgIHZhciBjdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgICAgIHNraXBDb25zdHJ1Y3RvciA9IGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG9iamVjdDtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9udEVudW1zTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZG9udEVudW0gPSBkb250RW51bXNbal07XG4gICAgICAgICAgICAgICAgaWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtID09PSAnY29uc3RydWN0b3InKSAmJiBvd25zKG9iamVjdCwgZG9udEVudW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoZUtleXMucHVzaChkb250RW51bSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGVLZXlzO1xuICAgIH1cbn0pO1xuXG52YXIga2V5c1dvcmtzV2l0aEFyZ3VtZW50cyA9IE9iamVjdC5rZXlzICYmIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2FmYXJpIDUuMCBidWdcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXJndW1lbnRzKS5sZW5ndGggPT09IDI7XG59KDEsIDIpKTtcbnZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcbmRlZmluZVByb3BlcnRpZXMoT2JqZWN0LCB7XG4gICAga2V5czogZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgICAgICAgaWYgKGlzQXJndW1lbnRzKG9iamVjdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEtleXMoQXJyYXlQcm90b3R5cGUuc2xpY2UuY2FsbChvYmplY3QpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn0sICFrZXlzV29ya3NXaXRoQXJndW1lbnRzKTtcblxuLy9cbi8vIERhdGVcbi8vID09PT1cbi8vXG5cbi8vIEVTNSAxNS45LjUuNDNcbi8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjkuNS40M1xuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgU3RyaW5nIHZhbHVlIHJlcHJlc2VudCB0aGUgaW5zdGFuY2UgaW4gdGltZVxuLy8gcmVwcmVzZW50ZWQgYnkgdGhpcyBEYXRlIG9iamVjdC4gVGhlIGZvcm1hdCBvZiB0aGUgU3RyaW5nIGlzIHRoZSBEYXRlIFRpbWVcbi8vIHN0cmluZyBmb3JtYXQgZGVmaW5lZCBpbiAxNS45LjEuMTUuIEFsbCBmaWVsZHMgYXJlIHByZXNlbnQgaW4gdGhlIFN0cmluZy5cbi8vIFRoZSB0aW1lIHpvbmUgaXMgYWx3YXlzIFVUQywgZGVub3RlZCBieSB0aGUgc3VmZml4IFouIElmIHRoZSB0aW1lIHZhbHVlIG9mXG4vLyB0aGlzIG9iamVjdCBpcyBub3QgYSBmaW5pdGUgTnVtYmVyIGEgUmFuZ2VFcnJvciBleGNlcHRpb24gaXMgdGhyb3duLlxudmFyIG5lZ2F0aXZlRGF0ZSA9IC02MjE5ODc1NTIwMDAwMDtcbnZhciBuZWdhdGl2ZVllYXJTdHJpbmcgPSAnLTAwMDAwMSc7XG52YXIgaGFzTmVnYXRpdmVEYXRlQnVnID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgJiYgbmV3IERhdGUobmVnYXRpdmVEYXRlKS50b0lTT1N0cmluZygpLmluZGV4T2YobmVnYXRpdmVZZWFyU3RyaW5nKSA9PT0gLTE7XG5cbmRlZmluZVByb3BlcnRpZXMoRGF0ZS5wcm90b3R5cGUsIHtcbiAgICB0b0lTT1N0cmluZzogZnVuY3Rpb24gdG9JU09TdHJpbmcoKSB7XG4gICAgICAgIHZhciByZXN1bHQsIGxlbmd0aCwgdmFsdWUsIHllYXIsIG1vbnRoO1xuICAgICAgICBpZiAoIWlzRmluaXRlKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgY2FsbGVkIG9uIG5vbi1maW5pdGUgdmFsdWUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB5ZWFyID0gdGhpcy5nZXRVVENGdWxsWWVhcigpO1xuXG4gICAgICAgIG1vbnRoID0gdGhpcy5nZXRVVENNb250aCgpO1xuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xMTFcbiAgICAgICAgeWVhciArPSBNYXRoLmZsb29yKG1vbnRoIC8gMTIpO1xuICAgICAgICBtb250aCA9IChtb250aCAlIDEyICsgMTIpICUgMTI7XG5cbiAgICAgICAgLy8gdGhlIGRhdGUgdGltZSBzdHJpbmcgZm9ybWF0IGlzIHNwZWNpZmllZCBpbiAxNS45LjEuMTUuXG4gICAgICAgIHJlc3VsdCA9IFttb250aCArIDEsIHRoaXMuZ2V0VVRDRGF0ZSgpLCB0aGlzLmdldFVUQ0hvdXJzKCksIHRoaXMuZ2V0VVRDTWludXRlcygpLCB0aGlzLmdldFVUQ1NlY29uZHMoKV07XG4gICAgICAgIHllYXIgPSAoXG4gICAgICAgICAgICAoeWVhciA8IDAgPyAnLScgOiAoeWVhciA+IDk5OTkgPyAnKycgOiAnJykpICtcbiAgICAgICAgICAgICgnMDAwMDAnICsgTWF0aC5hYnMoeWVhcikpLnNsaWNlKDAgPD0geWVhciAmJiB5ZWFyIDw9IDk5OTkgPyAtNCA6IC02KVxuICAgICAgICApO1xuXG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAgICAgdmFsdWUgPSByZXN1bHRbbGVuZ3RoXTtcbiAgICAgICAgICAgIC8vIHBhZCBtb250aHMsIGRheXMsIGhvdXJzLCBtaW51dGVzLCBhbmQgc2Vjb25kcyB0byBoYXZlIHR3b1xuICAgICAgICAgICAgLy8gZGlnaXRzLlxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMTApIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbbGVuZ3RoXSA9ICcwJyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHBhZCBtaWxsaXNlY29uZHMgdG8gaGF2ZSB0aHJlZSBkaWdpdHMuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB5ZWFyICsgJy0nICsgcmVzdWx0LnNsaWNlKDAsIDIpLmpvaW4oJy0nKSArXG4gICAgICAgICAgICAnVCcgKyByZXN1bHQuc2xpY2UoMikuam9pbignOicpICsgJy4nICtcbiAgICAgICAgICAgICgnMDAwJyArIHRoaXMuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpLnNsaWNlKC0zKSArICdaJ1xuICAgICAgICApO1xuICAgIH1cbn0sIGhhc05lZ2F0aXZlRGF0ZUJ1Zyk7XG5cblxuLy8gRVM1IDE1LjkuNS40NFxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuOS41LjQ0XG4vLyBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIGEgU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgRGF0ZSBvYmplY3QgZm9yIHVzZSBieVxuLy8gSlNPTi5zdHJpbmdpZnkgKDE1LjEyLjMpLlxudmFyIGRhdGVUb0pTT05Jc1N1cHBvcnRlZCA9IGZhbHNlO1xudHJ5IHtcbiAgICBkYXRlVG9KU09OSXNTdXBwb3J0ZWQgPSAoXG4gICAgICAgIERhdGUucHJvdG90eXBlLnRvSlNPTiAmJlxuICAgICAgICBuZXcgRGF0ZShOYU4pLnRvSlNPTigpID09PSBudWxsICYmXG4gICAgICAgIG5ldyBEYXRlKG5lZ2F0aXZlRGF0ZSkudG9KU09OKCkuaW5kZXhPZihuZWdhdGl2ZVllYXJTdHJpbmcpICE9PSAtMSAmJlxuICAgICAgICBEYXRlLnByb3RvdHlwZS50b0pTT04uY2FsbCh7IC8vIGdlbmVyaWNcbiAgICAgICAgICAgIHRvSVNPU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbn0gY2F0Y2ggKGUpIHtcbn1cbmlmICghZGF0ZVRvSlNPTklzU3VwcG9ydGVkKSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKGtleSkge1xuICAgICAgICAvLyBXaGVuIHRoZSB0b0pTT04gbWV0aG9kIGlzIGNhbGxlZCB3aXRoIGFyZ3VtZW50IGtleSwgdGhlIGZvbGxvd2luZ1xuICAgICAgICAvLyBzdGVwcyBhcmUgdGFrZW46XG5cbiAgICAgICAgLy8gMS4gIExldCBPIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyBUb09iamVjdCwgZ2l2aW5nIGl0IHRoZSB0aGlzXG4gICAgICAgIC8vIHZhbHVlIGFzIGl0cyBhcmd1bWVudC5cbiAgICAgICAgLy8gMi4gTGV0IHR2IGJlIHRvUHJpbWl0aXZlKE8sIGhpbnQgTnVtYmVyKS5cbiAgICAgICAgdmFyIG8gPSBPYmplY3QodGhpcyksXG4gICAgICAgICAgICB0diA9IHRvUHJpbWl0aXZlKG8pLFxuICAgICAgICAgICAgdG9JU087XG4gICAgICAgIC8vIDMuIElmIHR2IGlzIGEgTnVtYmVyIGFuZCBpcyBub3QgZmluaXRlLCByZXR1cm4gbnVsbC5cbiAgICAgICAgaWYgKHR5cGVvZiB0diA9PT0gJ251bWJlcicgJiYgIWlzRmluaXRlKHR2KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNC4gTGV0IHRvSVNPIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgLy8gTyB3aXRoIGFyZ3VtZW50IFwidG9JU09TdHJpbmdcIi5cbiAgICAgICAgdG9JU08gPSBvLnRvSVNPU3RyaW5nO1xuICAgICAgICAvLyA1LiBJZiBJc0NhbGxhYmxlKHRvSVNPKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAodHlwZW9mIHRvSVNPICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0b0lTT1N0cmluZyBwcm9wZXJ0eSBpcyBub3QgY2FsbGFibGUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyA2LiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NhbGxdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgLy8gIHRvSVNPIHdpdGggTyBhcyB0aGUgdGhpcyB2YWx1ZSBhbmQgYW4gZW1wdHkgYXJndW1lbnQgbGlzdC5cbiAgICAgICAgcmV0dXJuIHRvSVNPLmNhbGwobyk7XG5cbiAgICAgICAgLy8gTk9URSAxIFRoZSBhcmd1bWVudCBpcyBpZ25vcmVkLlxuXG4gICAgICAgIC8vIE5PVEUgMiBUaGUgdG9KU09OIGZ1bmN0aW9uIGlzIGludGVudGlvbmFsbHkgZ2VuZXJpYzsgaXQgZG9lcyBub3RcbiAgICAgICAgLy8gcmVxdWlyZSB0aGF0IGl0cyB0aGlzIHZhbHVlIGJlIGEgRGF0ZSBvYmplY3QuIFRoZXJlZm9yZSwgaXQgY2FuIGJlXG4gICAgICAgIC8vIHRyYW5zZmVycmVkIHRvIG90aGVyIGtpbmRzIG9mIG9iamVjdHMgZm9yIHVzZSBhcyBhIG1ldGhvZC4gSG93ZXZlcixcbiAgICAgICAgLy8gaXQgZG9lcyByZXF1aXJlIHRoYXQgYW55IHN1Y2ggb2JqZWN0IGhhdmUgYSB0b0lTT1N0cmluZyBtZXRob2QuIEFuXG4gICAgICAgIC8vIG9iamVjdCBpcyBmcmVlIHRvIHVzZSB0aGUgYXJndW1lbnQga2V5IHRvIGZpbHRlciBpdHNcbiAgICAgICAgLy8gc3RyaW5naWZpY2F0aW9uLlxuICAgIH07XG59XG5cbi8vIEVTNSAxNS45LjQuMlxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuOS40LjJcbi8vIGJhc2VkIG9uIHdvcmsgc2hhcmVkIGJ5IERhbmllbCBGcmllc2VuIChkYW50bWFuKVxuLy8gaHR0cDovL2dpc3QuZ2l0aHViLmNvbS8zMDMyNDlcbnZhciBzdXBwb3J0c0V4dGVuZGVkWWVhcnMgPSBEYXRlLnBhcnNlKCcrMDMzNjU4LTA5LTI3VDAxOjQ2OjQwLjAwMFonKSA9PT0gMWUxNTtcbnZhciBhY2NlcHRzSW52YWxpZERhdGVzID0gIWlzTmFOKERhdGUucGFyc2UoJzIwMTItMDQtMDRUMjQ6MDA6MDAuNTAwWicpKSB8fCAhaXNOYU4oRGF0ZS5wYXJzZSgnMjAxMi0xMS0zMVQyMzo1OTo1OS4wMDBaJykpO1xudmFyIGRvZXNOb3RQYXJzZVkyS05ld1llYXIgPSBpc05hTihEYXRlLnBhcnNlKCcyMDAwLTAxLTAxVDAwOjAwOjAwLjAwMFonKSk7XG5pZiAoIURhdGUucGFyc2UgfHwgZG9lc05vdFBhcnNlWTJLTmV3WWVhciB8fCBhY2NlcHRzSW52YWxpZERhdGVzIHx8ICFzdXBwb3J0c0V4dGVuZGVkWWVhcnMpIHtcbiAgICAvLyBYWFggZ2xvYmFsIGFzc2lnbm1lbnQgd29uJ3Qgd29yayBpbiBlbWJlZGRpbmdzIHRoYXQgdXNlXG4gICAgLy8gYW4gYWx0ZXJuYXRlIG9iamVjdCBmb3IgdGhlIGNvbnRleHQuXG4gICAgLypnbG9iYWwgRGF0ZTogdHJ1ZSAqL1xuICAgIERhdGUgPSAoZnVuY3Rpb24gKE5hdGl2ZURhdGUpIHtcblxuICAgICAgICAvLyBEYXRlLmxlbmd0aCA9PT0gN1xuICAgICAgICBmdW5jdGlvbiBEYXRlKFksIE0sIEQsIGgsIG0sIHMsIG1zKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTmF0aXZlRGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbGVuZ3RoID09PSAxICYmIFN0cmluZyhZKSA9PT0gWSA/IC8vIGlzU3RyaW5nKFkpXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGV4cGxpY2l0bHkgcGFzcyBpdCB0aHJvdWdoIHBhcnNlOlxuICAgICAgICAgICAgICAgICAgICBuZXcgTmF0aXZlRGF0ZShEYXRlLnBhcnNlKFkpKSA6XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gbWFudWFsbHkgbWFrZSBjYWxscyBkZXBlbmRpbmcgb24gYXJndW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVuZ3RoIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID49IDcgPyBuZXcgTmF0aXZlRGF0ZShZLCBNLCBELCBoLCBtLCBzLCBtcykgOlxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPj0gNiA/IG5ldyBOYXRpdmVEYXRlKFksIE0sIEQsIGgsIG0sIHMpIDpcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID49IDUgPyBuZXcgTmF0aXZlRGF0ZShZLCBNLCBELCBoLCBtKSA6XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA+PSA0ID8gbmV3IE5hdGl2ZURhdGUoWSwgTSwgRCwgaCkgOlxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPj0gMyA/IG5ldyBOYXRpdmVEYXRlKFksIE0sIEQpIDpcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID49IDIgPyBuZXcgTmF0aXZlRGF0ZShZLCBNKSA6XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA+PSAxID8gbmV3IE5hdGl2ZURhdGUoWSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOYXRpdmVEYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBtaXh1cHMgd2l0aCB1bmZpeGVkIERhdGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgZGF0ZS5jb25zdHJ1Y3RvciA9IERhdGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTmF0aXZlRGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMTUuOS4xLjE1IERhdGUgVGltZSBTdHJpbmcgRm9ybWF0LlxuICAgICAgICB2YXIgaXNvRGF0ZUV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKCdeJyArXG4gICAgICAgICAgICAnKFxcXFxkezR9fFsrLV1cXFxcZHs2fSknICsgLy8gZm91ci1kaWdpdCB5ZWFyIGNhcHR1cmUgb3Igc2lnbiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDYtZGlnaXQgZXh0ZW5kZWQgeWVhclxuICAgICAgICAgICAgJyg/Oi0oXFxcXGR7Mn0pJyArIC8vIG9wdGlvbmFsIG1vbnRoIGNhcHR1cmVcbiAgICAgICAgICAgICcoPzotKFxcXFxkezJ9KScgKyAvLyBvcHRpb25hbCBkYXkgY2FwdHVyZVxuICAgICAgICAgICAgJyg/OicgKyAvLyBjYXB0dXJlIGhvdXJzOm1pbnV0ZXM6c2Vjb25kcy5taWxsaXNlY29uZHNcbiAgICAgICAgICAgICAgICAnVChcXFxcZHsyfSknICsgLy8gaG91cnMgY2FwdHVyZVxuICAgICAgICAgICAgICAgICc6KFxcXFxkezJ9KScgKyAvLyBtaW51dGVzIGNhcHR1cmVcbiAgICAgICAgICAgICAgICAnKD86JyArIC8vIG9wdGlvbmFsIDpzZWNvbmRzLm1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgICAgICAgICAnOihcXFxcZHsyfSknICsgLy8gc2Vjb25kcyBjYXB0dXJlXG4gICAgICAgICAgICAgICAgICAgICcoPzooXFxcXC5cXFxcZHsxLH0pKT8nICsgLy8gbWlsbGlzZWNvbmRzIGNhcHR1cmVcbiAgICAgICAgICAgICAgICAnKT8nICtcbiAgICAgICAgICAgICcoJyArIC8vIGNhcHR1cmUgVVRDIG9mZnNldCBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAnWnwnICsgLy8gVVRDIGNhcHR1cmVcbiAgICAgICAgICAgICAgICAnKD86JyArIC8vIG9mZnNldCBzcGVjaWZpZXIgKy8taG91cnM6bWludXRlc1xuICAgICAgICAgICAgICAgICAgICAnKFstK10pJyArIC8vIHNpZ24gY2FwdHVyZVxuICAgICAgICAgICAgICAgICAgICAnKFxcXFxkezJ9KScgKyAvLyBob3VycyBvZmZzZXQgY2FwdHVyZVxuICAgICAgICAgICAgICAgICAgICAnOihcXFxcZHsyfSknICsgLy8gbWludXRlcyBvZmZzZXQgY2FwdHVyZVxuICAgICAgICAgICAgICAgICcpJyArXG4gICAgICAgICAgICAnKT8pPyk/KT8nICtcbiAgICAgICAgJyQnKTtcblxuICAgICAgICB2YXIgbW9udGhzID0gW1xuICAgICAgICAgICAgMCwgMzEsIDU5LCA5MCwgMTIwLCAxNTEsIDE4MSwgMjEyLCAyNDMsIDI3MywgMzA0LCAzMzQsIDM2NVxuICAgICAgICBdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRheUZyb21Nb250aCh5ZWFyLCBtb250aCkge1xuICAgICAgICAgICAgdmFyIHQgPSBtb250aCA+IDEgPyAxIDogMDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgbW9udGhzW21vbnRoXSArXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcigoeWVhciAtIDE5NjkgKyB0KSAvIDQpIC1cbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKCh5ZWFyIC0gMTkwMSArIHQpIC8gMTAwKSArXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcigoeWVhciAtIDE2MDEgKyB0KSAvIDQwMCkgK1xuICAgICAgICAgICAgICAgIDM2NSAqICh5ZWFyIC0gMTk3MClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0b1VUQyh0KSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKG5ldyBOYXRpdmVEYXRlKDE5NzAsIDAsIDEsIDAsIDAsIDAsIHQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgYW55IGN1c3RvbSBtZXRob2RzIGEgM3JkIHBhcnR5IGxpYnJhcnkgbWF5IGhhdmUgYWRkZWRcbiAgICAgICAgZm9yICh2YXIga2V5IGluIE5hdGl2ZURhdGUpIHtcbiAgICAgICAgICAgIERhdGVba2V5XSA9IE5hdGl2ZURhdGVba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgXCJuYXRpdmVcIiBtZXRob2RzIGV4cGxpY2l0bHk7IHRoZXkgbWF5IGJlIG5vbi1lbnVtZXJhYmxlXG4gICAgICAgIERhdGUubm93ID0gTmF0aXZlRGF0ZS5ub3c7XG4gICAgICAgIERhdGUuVVRDID0gTmF0aXZlRGF0ZS5VVEM7XG4gICAgICAgIERhdGUucHJvdG90eXBlID0gTmF0aXZlRGF0ZS5wcm90b3R5cGU7XG4gICAgICAgIERhdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRGF0ZTtcblxuICAgICAgICAvLyBVcGdyYWRlIERhdGUucGFyc2UgdG8gaGFuZGxlIHNpbXBsaWZpZWQgSVNPIDg2MDEgc3RyaW5nc1xuICAgICAgICBEYXRlLnBhcnNlID0gZnVuY3Rpb24gcGFyc2Uoc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBpc29EYXRlRXhwcmVzc2lvbi5leGVjKHN0cmluZyk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAvLyBwYXJzZSBtb250aHMsIGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBhbmQgbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICAgICAgLy8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgVVRDIG9mZnNldCBjb21wb25lbnRcbiAgICAgICAgICAgICAgICB2YXIgeWVhciA9IE51bWJlcihtYXRjaFsxXSksXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gTnVtYmVyKG1hdGNoWzJdIHx8IDEpIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgZGF5ID0gTnVtYmVyKG1hdGNoWzNdIHx8IDEpIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IE51bWJlcihtYXRjaFs0XSB8fCAwKSxcbiAgICAgICAgICAgICAgICAgICAgbWludXRlID0gTnVtYmVyKG1hdGNoWzVdIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSBOdW1iZXIobWF0Y2hbNl0gfHwgMCksXG4gICAgICAgICAgICAgICAgICAgIG1pbGxpc2Vjb25kID0gTWF0aC5mbG9vcihOdW1iZXIobWF0Y2hbN10gfHwgMCkgKiAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aW1lIHpvbmUgaXMgbWlzc2VkLCBsb2NhbCBvZmZzZXQgc2hvdWxkIGJlIHVzZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gKEVTIDUuMSBidWcpXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2J1Z3MuZWNtYXNjcmlwdC5vcmcvc2hvd19idWcuY2dpP2lkPTExMlxuICAgICAgICAgICAgICAgICAgICBpc0xvY2FsVGltZSA9IEJvb2xlYW4obWF0Y2hbNF0gJiYgIW1hdGNoWzhdKSxcbiAgICAgICAgICAgICAgICAgICAgc2lnbk9mZnNldCA9IG1hdGNoWzldID09PSAnLScgPyAxIDogLTEsXG4gICAgICAgICAgICAgICAgICAgIGhvdXJPZmZzZXQgPSBOdW1iZXIobWF0Y2hbMTBdIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXQgPSBOdW1iZXIobWF0Y2hbMTFdIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBob3VyIDwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlID4gMCB8fCBzZWNvbmQgPiAwIHx8IG1pbGxpc2Vjb25kID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAyNCA6IDI1XG4gICAgICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAgICAgbWludXRlIDwgNjAgJiYgc2Vjb25kIDwgNjAgJiYgbWlsbGlzZWNvbmQgPCAxMDAwICYmXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID4gLTEgJiYgbW9udGggPCAxMiAmJiBob3VyT2Zmc2V0IDwgMjQgJiZcbiAgICAgICAgICAgICAgICAgICAgbWludXRlT2Zmc2V0IDwgNjAgJiYgLy8gZGV0ZWN0IGludmFsaWQgb2Zmc2V0c1xuICAgICAgICAgICAgICAgICAgICBkYXkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXkgPCAoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlGcm9tTW9udGgoeWVhciwgbW9udGggKyAxKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlGcm9tTW9udGgoeWVhciwgbW9udGgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGRheUZyb21Nb250aCh5ZWFyLCBtb250aCkgKyBkYXkpICogMjQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyT2Zmc2V0ICogc2lnbk9mZnNldFxuICAgICAgICAgICAgICAgICAgICApICogNjA7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQgKyBtaW51dGUgKyBtaW51dGVPZmZzZXQgKiBzaWduT2Zmc2V0KSAqIDYwICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZFxuICAgICAgICAgICAgICAgICAgICApICogMTAwMCArIG1pbGxpc2Vjb25kO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRvVVRDKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKC04LjY0ZTE1IDw9IHJlc3VsdCAmJiByZXN1bHQgPD0gOC42NGUxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZURhdGUucGFyc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gRGF0ZTtcbiAgICB9KERhdGUpKTtcbiAgICAvKmdsb2JhbCBEYXRlOiBmYWxzZSAqL1xufVxuXG4vLyBFUzUgMTUuOS40LjRcbi8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjkuNC40XG5pZiAoIURhdGUubm93KSB7XG4gICAgRGF0ZS5ub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xufVxuXG5cbi8vXG4vLyBOdW1iZXJcbi8vID09PT09PVxuLy9cblxuLy8gRVM1LjEgMTUuNy40LjVcbi8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjcuNC41XG52YXIgaGFzVG9GaXhlZEJ1Z3MgPSBOdW1iZXJQcm90b3R5cGUudG9GaXhlZCAmJiAoXG4gICgwLjAwMDA4KS50b0ZpeGVkKDMpICE9PSAnMC4wMDAnIHx8XG4gICgwLjkpLnRvRml4ZWQoMCkgIT09ICcxJyB8fFxuICAoMS4yNTUpLnRvRml4ZWQoMikgIT09ICcxLjI1JyB8fFxuICAoMTAwMDAwMDAwMDAwMDAwMDEyOCkudG9GaXhlZCgwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnXG4pO1xuXG52YXIgdG9GaXhlZEhlbHBlcnMgPSB7XG4gIGJhc2U6IDFlNyxcbiAgc2l6ZTogNixcbiAgZGF0YTogWzAsIDAsIDAsIDAsIDAsIDBdLFxuICBtdWx0aXBseTogZnVuY3Rpb24gbXVsdGlwbHkobiwgYykge1xuICAgICAgdmFyIGkgPSAtMTtcbiAgICAgIHdoaWxlICgrK2kgPCB0b0ZpeGVkSGVscGVycy5zaXplKSB7XG4gICAgICAgICAgYyArPSBuICogdG9GaXhlZEhlbHBlcnMuZGF0YVtpXTtcbiAgICAgICAgICB0b0ZpeGVkSGVscGVycy5kYXRhW2ldID0gYyAlIHRvRml4ZWRIZWxwZXJzLmJhc2U7XG4gICAgICAgICAgYyA9IE1hdGguZmxvb3IoYyAvIHRvRml4ZWRIZWxwZXJzLmJhc2UpO1xuICAgICAgfVxuICB9LFxuICBkaXZpZGU6IGZ1bmN0aW9uIGRpdmlkZShuKSB7XG4gICAgICB2YXIgaSA9IHRvRml4ZWRIZWxwZXJzLnNpemUsIGMgPSAwO1xuICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgYyArPSB0b0ZpeGVkSGVscGVycy5kYXRhW2ldO1xuICAgICAgICAgIHRvRml4ZWRIZWxwZXJzLmRhdGFbaV0gPSBNYXRoLmZsb29yKGMgLyBuKTtcbiAgICAgICAgICBjID0gKGMgJSBuKSAqIHRvRml4ZWRIZWxwZXJzLmJhc2U7XG4gICAgICB9XG4gIH0sXG4gIG51bVRvU3RyaW5nOiBmdW5jdGlvbiBudW1Ub1N0cmluZygpIHtcbiAgICAgIHZhciBpID0gdG9GaXhlZEhlbHBlcnMuc2l6ZTtcbiAgICAgIHZhciBzID0gJyc7XG4gICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICBpZiAocyAhPT0gJycgfHwgaSA9PT0gMCB8fCB0b0ZpeGVkSGVscGVycy5kYXRhW2ldICE9PSAwKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gU3RyaW5nKHRvRml4ZWRIZWxwZXJzLmRhdGFbaV0pO1xuICAgICAgICAgICAgICBpZiAocyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIHMgPSB0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcyArPSAnMDAwMDAwMCcuc2xpY2UoMCwgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcztcbiAgfSxcbiAgcG93OiBmdW5jdGlvbiBwb3coeCwgbiwgYWNjKSB7XG4gICAgICByZXR1cm4gKG4gPT09IDAgPyBhY2MgOiAobiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKSkpO1xuICB9LFxuICBsb2c6IGZ1bmN0aW9uIGxvZyh4KSB7XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB3aGlsZSAoeCA+PSA0MDk2KSB7XG4gICAgICAgICAgbiArPSAxMjtcbiAgICAgICAgICB4IC89IDQwOTY7XG4gICAgICB9XG4gICAgICB3aGlsZSAoeCA+PSAyKSB7XG4gICAgICAgICAgbiArPSAxO1xuICAgICAgICAgIHggLz0gMjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuO1xuICB9XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzKE51bWJlclByb3RvdHlwZSwge1xuICAgIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcbiAgICAgICAgdmFyIGYsIHgsIHMsIG0sIGUsIHosIGosIGs7XG5cbiAgICAgICAgLy8gVGVzdCBmb3IgTmFOIGFuZCByb3VuZCBmcmFjdGlvbkRpZ2l0cyBkb3duXG4gICAgICAgIGYgPSBOdW1iZXIoZnJhY3Rpb25EaWdpdHMpO1xuICAgICAgICBmID0gZiAhPT0gZiA/IDAgOiBNYXRoLmZsb29yKGYpO1xuXG4gICAgICAgIGlmIChmIDwgMCB8fCBmID4gMjApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdOdW1iZXIudG9GaXhlZCBjYWxsZWQgd2l0aCBpbnZhbGlkIG51bWJlciBvZiBkZWNpbWFscycpO1xuICAgICAgICB9XG5cbiAgICAgICAgeCA9IE51bWJlcih0aGlzKTtcblxuICAgICAgICAvLyBUZXN0IGZvciBOYU5cbiAgICAgICAgaWYgKHggIT09IHgpIHtcbiAgICAgICAgICAgIHJldHVybiAnTmFOJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIHRvbyBiaWcgb3Igc21hbGwsIHJldHVybiB0aGUgc3RyaW5nIHZhbHVlIG9mIHRoZSBudW1iZXJcbiAgICAgICAgaWYgKHggPD0gLTFlMjEgfHwgeCA+PSAxZTIxKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcyA9ICcnO1xuXG4gICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgcyA9ICctJztcbiAgICAgICAgICAgIHggPSAteDtcbiAgICAgICAgfVxuXG4gICAgICAgIG0gPSAnMCc7XG5cbiAgICAgICAgaWYgKHggPiAxZS0yMSkge1xuICAgICAgICAgICAgLy8gMWUtMjEgPCB4IDwgMWUyMVxuICAgICAgICAgICAgLy8gLTcwIDwgbG9nMih4KSA8IDcwXG4gICAgICAgICAgICBlID0gdG9GaXhlZEhlbHBlcnMubG9nKHggKiB0b0ZpeGVkSGVscGVycy5wb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgICAgICAgeiA9IChlIDwgMCA/IHggKiB0b0ZpeGVkSGVscGVycy5wb3coMiwgLWUsIDEpIDogeCAvIHRvRml4ZWRIZWxwZXJzLnBvdygyLCBlLCAxKSk7XG4gICAgICAgICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7IC8vIE1hdGgucG93KDIsIDUyKTtcbiAgICAgICAgICAgIGUgPSA1MiAtIGU7XG5cbiAgICAgICAgICAgIC8vIC0xOCA8IGUgPCAxMjJcbiAgICAgICAgICAgIC8vIHggPSB6IC8gMiBeIGVcbiAgICAgICAgICAgIGlmIChlID4gMCkge1xuICAgICAgICAgICAgICAgIHRvRml4ZWRIZWxwZXJzLm11bHRpcGx5KDAsIHopO1xuICAgICAgICAgICAgICAgIGogPSBmO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgICAgICAgICAgICB0b0ZpeGVkSGVscGVycy5tdWx0aXBseSgxZTcsIDApO1xuICAgICAgICAgICAgICAgICAgICBqIC09IDc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG9GaXhlZEhlbHBlcnMubXVsdGlwbHkodG9GaXhlZEhlbHBlcnMucG93KDEwLCBqLCAxKSwgMCk7XG4gICAgICAgICAgICAgICAgaiA9IGUgLSAxO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGogPj0gMjMpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9GaXhlZEhlbHBlcnMuZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgICAgICAgICAgICBqIC09IDIzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRvRml4ZWRIZWxwZXJzLmRpdmlkZSgxIDw8IGopO1xuICAgICAgICAgICAgICAgIHRvRml4ZWRIZWxwZXJzLm11bHRpcGx5KDEsIDEpO1xuICAgICAgICAgICAgICAgIHRvRml4ZWRIZWxwZXJzLmRpdmlkZSgyKTtcbiAgICAgICAgICAgICAgICBtID0gdG9GaXhlZEhlbHBlcnMubnVtVG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9GaXhlZEhlbHBlcnMubXVsdGlwbHkoMCwgeik7XG4gICAgICAgICAgICAgICAgdG9GaXhlZEhlbHBlcnMubXVsdGlwbHkoMSA8PCAoLWUpLCAwKTtcbiAgICAgICAgICAgICAgICBtID0gdG9GaXhlZEhlbHBlcnMubnVtVG9TdHJpbmcoKSArICcwLjAwMDAwMDAwMDAwMDAwMDAwMDAwJy5zbGljZSgyLCAyICsgZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZiA+IDApIHtcbiAgICAgICAgICAgIGsgPSBtLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGsgPD0gZikge1xuICAgICAgICAgICAgICAgIG0gPSBzICsgJzAuMDAwMDAwMDAwMDAwMDAwMDAwMCcuc2xpY2UoMCwgZiAtIGsgKyAyKSArIG07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG0gPSBzICsgbS5zbGljZSgwLCBrIC0gZikgKyAnLicgKyBtLnNsaWNlKGsgLSBmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG0gPSBzICsgbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cbn0sIGhhc1RvRml4ZWRCdWdzKTtcblxuXG4vL1xuLy8gU3RyaW5nXG4vLyA9PT09PT1cbi8vXG5cbi8vIEVTNSAxNS41LjQuMTRcbi8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjUuNC4xNFxuXG4vLyBbYnVnZml4LCBJRSBsdCA5LCBmaXJlZm94IDQsIEtvbnF1ZXJvciwgT3BlcmEsIG9ic2N1cmUgYnJvd3NlcnNdXG4vLyBNYW55IGJyb3dzZXJzIGRvIG5vdCBzcGxpdCBwcm9wZXJseSB3aXRoIHJlZ3VsYXIgZXhwcmVzc2lvbnMgb3IgdGhleVxuLy8gZG8gbm90IHBlcmZvcm0gdGhlIHNwbGl0IGNvcnJlY3RseSB1bmRlciBvYnNjdXJlIGNvbmRpdGlvbnMuXG4vLyBTZWUgaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL2Nyb3NzLWJyb3dzZXItc3BsaXRcbi8vIEkndmUgdGVzdGVkIGluIG1hbnkgYnJvd3NlcnMgYW5kIHRoaXMgc2VlbXMgdG8gY292ZXIgdGhlIGRldmlhbnQgb25lczpcbi8vICAgICdhYicuc3BsaXQoLyg/OmFiKSovKSBzaG91bGQgYmUgW1wiXCIsIFwiXCJdLCBub3QgW1wiXCJdXG4vLyAgICAnLicuc3BsaXQoLyguPykoLj8pLykgc2hvdWxkIGJlIFtcIlwiLCBcIi5cIiwgXCJcIiwgXCJcIl0sIG5vdCBbXCJcIiwgXCJcIl1cbi8vICAgICd0ZXNzdCcuc3BsaXQoLyhzKSovKSBzaG91bGQgYmUgW1widFwiLCB1bmRlZmluZWQsIFwiZVwiLCBcInNcIiwgXCJ0XCJdLCBub3Rcbi8vICAgICAgIFt1bmRlZmluZWQsIFwidFwiLCB1bmRlZmluZWQsIFwiZVwiLCAuLi5dXG4vLyAgICAnJy5zcGxpdCgvLj8vKSBzaG91bGQgYmUgW10sIG5vdCBbXCJcIl1cbi8vICAgICcuJy5zcGxpdCgvKCkoKS8pIHNob3VsZCBiZSBbXCIuXCJdLCBub3QgW1wiXCIsIFwiXCIsIFwiLlwiXVxuXG52YXIgc3RyaW5nX3NwbGl0ID0gU3RyaW5nUHJvdG90eXBlLnNwbGl0O1xuaWYgKFxuICAgICdhYicuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGggIT09IDIgfHxcbiAgICAnLicuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoICE9PSA0IHx8XG4gICAgJ3Rlc3N0Jy5zcGxpdCgvKHMpKi8pWzFdID09PSAndCcgfHxcbiAgICAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9PSA0IHx8XG4gICAgJycuc3BsaXQoLy4/LykubGVuZ3RoIHx8XG4gICAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMVxuKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbXBsaWFudEV4ZWNOcGNnID0gdHlwZW9mICgvKCk/Py8pLmV4ZWMoJycpWzFdID09PSAndW5kZWZpbmVkJzsgLy8gTlBDRzogbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBcblxuICAgICAgICBTdHJpbmdQcm90b3R5cGUuc3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICAgICAgdmFyIHN0cmluZyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlcGFyYXRvciA9PT0gJ3VuZGVmaW5lZCcgJiYgbGltaXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICAgICAgICBpZiAodG9fc3RyaW5nLmNhbGwoc2VwYXJhdG9yKSAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nX3NwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSBbXSxcbiAgICAgICAgICAgICAgICBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLmV4dGVuZGVkID8gJ3gnIDogJycpICsgLy8gUHJvcG9zZWQgZm9yIEVTNlxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyksIC8vIEZpcmVmb3ggMytcbiAgICAgICAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gMCxcbiAgICAgICAgICAgICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICAgICAgICBzZXBhcmF0b3IgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgICAgICAgIHN0cmluZyArPSAnJzsgLy8gVHlwZS1jb252ZXJ0XG4gICAgICAgICAgICBpZiAoIWNvbXBsaWFudEV4ZWNOcGNnKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yLnNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogVmFsdWVzIGZvciBgbGltaXRgLCBwZXIgdGhlIHNwZWM6XG4gICAgICAgICAgICAgKiBJZiB1bmRlZmluZWQ6IDQyOTQ5NjcyOTUgLy8gTWF0aC5wb3coMiwgMzIpIC0gMVxuICAgICAgICAgICAgICogSWYgMCwgSW5maW5pdHksIG9yIE5hTjogMFxuICAgICAgICAgICAgICogSWYgcG9zaXRpdmUgbnVtYmVyOiBsaW1pdCA9IE1hdGguZmxvb3IobGltaXQpOyBpZiAobGltaXQgPiA0Mjk0OTY3Mjk1KSBsaW1pdCAtPSA0Mjk0OTY3Mjk2O1xuICAgICAgICAgICAgICogSWYgbmVnYXRpdmUgbnVtYmVyOiA0Mjk0OTY3Mjk2IC0gTWF0aC5mbG9vcihNYXRoLmFicyhsaW1pdCkpXG4gICAgICAgICAgICAgKiBJZiBvdGhlcjogVHlwZS1jb252ZXJ0LCB0aGVuIHVzZSB0aGUgYWJvdmUgcnVsZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGltaXQgPSB0eXBlb2YgbGltaXQgPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgICAgICAgICAtMSA+Pj4gMCA6IC8vIE1hdGgucG93KDIsIDMyKSAtIDFcbiAgICAgICAgICAgICAgICBFUy5Ub1VpbnQzMihsaW1pdCk7XG4gICAgICAgICAgICB3aGlsZSAobWF0Y2ggPSBzZXBhcmF0b3IuZXhlYyhzdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgLy8gYHNlcGFyYXRvci5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvclxuICAgICAgICAgICAgICAgICAgICAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wbGlhbnRFeGVjTnBjZyAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFswXS5yZXBsYWNlKHNlcGFyYXRvcjIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbaV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFtpXSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGggPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlfcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlcGFyYXRvci5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvci5sYXN0SW5kZXgrKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvci50ZXN0KCcnKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dC5sZW5ndGggPiBsaW1pdCA/IG91dHB1dC5zbGljZSgwLCBsaW1pdCkgOiBvdXRwdXQ7XG4gICAgICAgIH07XG4gICAgfSgpKTtcblxuLy8gW2J1Z2ZpeCwgY2hyb21lXVxuLy8gSWYgc2VwYXJhdG9yIGlzIHVuZGVmaW5lZCwgdGhlbiB0aGUgcmVzdWx0IGFycmF5IGNvbnRhaW5zIGp1c3Qgb25lIFN0cmluZyxcbi8vIHdoaWNoIGlzIHRoZSB0aGlzIHZhbHVlIChjb252ZXJ0ZWQgdG8gYSBTdHJpbmcpLiBJZiBsaW1pdCBpcyBub3QgdW5kZWZpbmVkLFxuLy8gdGhlbiB0aGUgb3V0cHV0IGFycmF5IGlzIHRydW5jYXRlZCBzbyB0aGF0IGl0IGNvbnRhaW5zIG5vIG1vcmUgdGhhbiBsaW1pdFxuLy8gZWxlbWVudHMuXG4vLyBcIjBcIi5zcGxpdCh1bmRlZmluZWQsIDApIC0+IFtdXG59IGVsc2UgaWYgKCcwJy5zcGxpdCh2b2lkIDAsIDApLmxlbmd0aCkge1xuICAgIFN0cmluZ1Byb3RvdHlwZS5zcGxpdCA9IGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXBhcmF0b3IgPT09ICd1bmRlZmluZWQnICYmIGxpbWl0ID09PSAwKSB7IHJldHVybiBbXTsgfVxuICAgICAgICByZXR1cm4gc3RyaW5nX3NwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbn1cblxudmFyIHN0cl9yZXBsYWNlID0gU3RyaW5nUHJvdG90eXBlLnJlcGxhY2U7XG52YXIgcmVwbGFjZVJlcG9ydHNHcm91cHNDb3JyZWN0bHkgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBncm91cHMgPSBbXTtcbiAgICAneCcucmVwbGFjZSgveCguKT8vZywgZnVuY3Rpb24gKG1hdGNoLCBncm91cCkge1xuICAgICAgICBncm91cHMucHVzaChncm91cCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyb3Vwcy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGdyb3Vwc1swXSA9PT0gJ3VuZGVmaW5lZCc7XG59KCkpO1xuXG5pZiAoIXJlcGxhY2VSZXBvcnRzR3JvdXBzQ29ycmVjdGx5KSB7XG4gICAgU3RyaW5nUHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgdmFyIGlzRm4gPSBpc0Z1bmN0aW9uKHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIHZhciBoYXNDYXB0dXJpbmdHcm91cHMgPSBpc1JlZ2V4KHNlYXJjaFZhbHVlKSAmJiAoL1xcKVsqP10vKS50ZXN0KHNlYXJjaFZhbHVlLnNvdXJjZSk7XG4gICAgICAgIGlmICghaXNGbiB8fCAhaGFzQ2FwdHVyaW5nR3JvdXBzKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyX3JlcGxhY2UuY2FsbCh0aGlzLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVkUmVwbGFjZVZhbHVlID0gZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsTGFzdEluZGV4ID0gc2VhcmNoVmFsdWUubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlLmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBzZWFyY2hWYWx1ZS5leGVjKG1hdGNoKSB8fCBbXTtcbiAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZS5sYXN0SW5kZXggPSBvcmlnaW5hbExhc3RJbmRleDtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2xlbmd0aCAtIDJdLCBhcmd1bWVudHNbbGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlVmFsdWUuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHN0cl9yZXBsYWNlLmNhbGwodGhpcywgc2VhcmNoVmFsdWUsIHdyYXBwZWRSZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gRUNNQS0yNjIsIDNyZCBCLjIuM1xuLy8gTm90IGFuIEVDTUFTY3JpcHQgc3RhbmRhcmQsIGFsdGhvdWdoIEVDTUFTY3JpcHQgM3JkIEVkaXRpb24gaGFzIGFcbi8vIG5vbi1ub3JtYXRpdmUgc2VjdGlvbiBzdWdnZXN0aW5nIHVuaWZvcm0gc2VtYW50aWNzIGFuZCBpdCBzaG91bGQgYmVcbi8vIG5vcm1hbGl6ZWQgYWNyb3NzIGFsbCBicm93c2Vyc1xuLy8gW2J1Z2ZpeCwgSUUgbHQgOV0gSUUgPCA5IHN1YnN0cigpIHdpdGggbmVnYXRpdmUgdmFsdWUgbm90IHdvcmtpbmcgaW4gSUVcbnZhciBzdHJpbmdfc3Vic3RyID0gU3RyaW5nUHJvdG90eXBlLnN1YnN0cjtcbnZhciBoYXNOZWdhdGl2ZVN1YnN0ckJ1ZyA9ICcnLnN1YnN0ciAmJiAnMGInLnN1YnN0cigtMSkgIT09ICdiJztcbmRlZmluZVByb3BlcnRpZXMoU3RyaW5nUHJvdG90eXBlLCB7XG4gICAgc3Vic3RyOiBmdW5jdGlvbiBzdWJzdHIoc3RhcnQsIGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc3RyaW5nX3N1YnN0ci5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHN0YXJ0IDwgMCA/ICgoc3RhcnQgPSB0aGlzLmxlbmd0aCArIHN0YXJ0KSA8IDAgPyAwIDogc3RhcnQpIDogc3RhcnQsXG4gICAgICAgICAgICBsZW5ndGhcbiAgICAgICAgKTtcbiAgICB9XG59LCBoYXNOZWdhdGl2ZVN1YnN0ckJ1Zyk7XG5cbi8vIEVTNSAxNS41LjQuMjBcbi8vIHdoaXRlc3BhY2UgZnJvbTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS41LjQuMjBcbnZhciB3cyA9ICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycgK1xuICAgICdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOCcgK1xuICAgICdcXHUyMDI5XFx1RkVGRic7XG52YXIgemVyb1dpZHRoID0gJ1xcdTIwMGInO1xudmFyIHdzUmVnZXhDaGFycyA9ICdbJyArIHdzICsgJ10nO1xudmFyIHRyaW1CZWdpblJlZ2V4cCA9IG5ldyBSZWdFeHAoJ14nICsgd3NSZWdleENoYXJzICsgd3NSZWdleENoYXJzICsgJyonKTtcbnZhciB0cmltRW5kUmVnZXhwID0gbmV3IFJlZ0V4cCh3c1JlZ2V4Q2hhcnMgKyB3c1JlZ2V4Q2hhcnMgKyAnKiQnKTtcbnZhciBoYXNUcmltV2hpdGVzcGFjZUJ1ZyA9IFN0cmluZ1Byb3RvdHlwZS50cmltICYmICh3cy50cmltKCkgfHwgIXplcm9XaWR0aC50cmltKCkpO1xuZGVmaW5lUHJvcGVydGllcyhTdHJpbmdQcm90b3R5cGUsIHtcbiAgICAvLyBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvZmFzdGVyLXRyaW0tamF2YXNjcmlwdFxuICAgIC8vIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL3doaXRlc3BhY2UtZGV2aWF0aW9ucy9cbiAgICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYW4ndCBjb252ZXJ0IFwiICsgdGhpcyArICcgdG8gb2JqZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzKS5yZXBsYWNlKHRyaW1CZWdpblJlZ2V4cCwgJycpLnJlcGxhY2UodHJpbUVuZFJlZ2V4cCwgJycpO1xuICAgIH1cbn0sIGhhc1RyaW1XaGl0ZXNwYWNlQnVnKTtcblxuLy8gRVMtNSAxNS4xLjIuMlxuaWYgKHBhcnNlSW50KHdzICsgJzA4JykgIT09IDggfHwgcGFyc2VJbnQod3MgKyAnMHgxNicpICE9PSAyMikge1xuICAgIC8qZ2xvYmFsIHBhcnNlSW50OiB0cnVlICovXG4gICAgcGFyc2VJbnQgPSAoZnVuY3Rpb24gKG9yaWdQYXJzZUludCkge1xuICAgICAgICB2YXIgaGV4UmVnZXggPSAvXjBbeFhdLztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBhcnNlSW50RVM1KHN0ciwgcmFkaXgpIHtcbiAgICAgICAgICAgIHN0ciA9IFN0cmluZyhzdHIpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICghTnVtYmVyKHJhZGl4KSkge1xuICAgICAgICAgICAgICAgIHJhZGl4ID0gaGV4UmVnZXgudGVzdChzdHIpID8gMTYgOiAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnUGFyc2VJbnQoc3RyLCByYWRpeCk7XG4gICAgICAgIH07XG4gICAgfShwYXJzZUludCkpO1xufVxuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvZXM1LXNoaW0vZXM1LXNoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG4gKiBAbGljZW5zZSBlczUtc2hpbSBDb3B5cmlnaHQgMjAwOS0yMDE0IGJ5IGNvbnRyaWJ1dG9ycywgTUlUIExpY2Vuc2VcbiAqIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbi8vIHZpbTogdHM9NCBzdHM9NCBzdz00IGV4cGFuZHRhYlxuXG4vL0FkZCBzZW1pY29sb24gdG8gcHJldmVudCBJSUZFIGZyb20gYmVpbmcgcGFzc2VkIGFzIGFyZ3VtZW50IHRvIGNvbmNhdGVkIGNvZGUuXG47XG5cbi8vIFVNRCAoVW5pdmVyc2FsIE1vZHVsZSBEZWZpbml0aW9uKVxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvcmV0dXJuRXhwb3J0cy5qc1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIC8qZ2xvYmFsIGRlZmluZSwgZXhwb3J0cywgbW9kdWxlICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb21lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAgICAgLy8gbGlrZSBOb2RlLlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgICAgICByb290LnJldHVybkV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xudmFyIHByb3RvdHlwZU9mT2JqZWN0ID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBvd25zID0gY2FsbC5iaW5kKHByb3RvdHlwZU9mT2JqZWN0Lmhhc093blByb3BlcnR5KTtcblxuLy8gSWYgSlMgZW5naW5lIHN1cHBvcnRzIGFjY2Vzc29ycyBjcmVhdGluZyBzaG9ydGN1dHMuXG52YXIgZGVmaW5lR2V0dGVyO1xudmFyIGRlZmluZVNldHRlcjtcbnZhciBsb29rdXBHZXR0ZXI7XG52YXIgbG9va3VwU2V0dGVyO1xudmFyIHN1cHBvcnRzQWNjZXNzb3JzID0gb3ducyhwcm90b3R5cGVPZk9iamVjdCwgJ19fZGVmaW5lR2V0dGVyX18nKTtcbmlmIChzdXBwb3J0c0FjY2Vzc29ycykge1xuICAgIGRlZmluZUdldHRlciA9IGNhbGwuYmluZChwcm90b3R5cGVPZk9iamVjdC5fX2RlZmluZUdldHRlcl9fKTtcbiAgICBkZWZpbmVTZXR0ZXIgPSBjYWxsLmJpbmQocHJvdG90eXBlT2ZPYmplY3QuX19kZWZpbmVTZXR0ZXJfXyk7XG4gICAgbG9va3VwR2V0dGVyID0gY2FsbC5iaW5kKHByb3RvdHlwZU9mT2JqZWN0Ll9fbG9va3VwR2V0dGVyX18pO1xuICAgIGxvb2t1cFNldHRlciA9IGNhbGwuYmluZChwcm90b3R5cGVPZk9iamVjdC5fX2xvb2t1cFNldHRlcl9fKTtcbn1cblxuLy8gRVM1IDE1LjIuMy4yXG4vLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuMlxuaWYgKCFPYmplY3QuZ2V0UHJvdG90eXBlT2YpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzI2lzc3VlLzJcbiAgICAvLyBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvb2JqZWN0Z2V0cHJvdG90eXBlb2YvXG4gICAgLy8gcmVjb21tZW5kZWQgYnkgZnNjaGFlZmVyIG9uIGdpdGh1YlxuICAgIC8vXG4gICAgLy8gc3VyZSwgYW5kIHdlYnJlZmxlY3Rpb24gc2F5cyBeX15cbiAgICAvLyAuLi4gdGhpcyB3aWxsIG5lcmV2ZXIgcG9zc2libHkgcmV0dXJuIG51bGxcbiAgICAvLyAuLi4gT3BlcmEgTWluaSBicmVha3MgaGVyZSB3aXRoIGluZmluaXRlIGxvb3BzXG4gICAgT2JqZWN0LmdldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KSB7XG4gICAgICAgIHZhciBwcm90byA9IG9iamVjdC5fX3Byb3RvX187XG4gICAgICAgIGlmIChwcm90byB8fCBwcm90byA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICB9IGVsc2UgaWYgKG9iamVjdC5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG90eXBlT2ZPYmplY3Q7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vL0VTNSAxNS4yLjMuM1xuLy9odHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuM1xuXG5mdW5jdGlvbiBkb2VzR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yV29yayhvYmplY3QpIHtcbiAgICB0cnkge1xuICAgICAgICBvYmplY3Quc2VudGluZWwgPSAwO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsICdzZW50aW5lbCcpLnZhbHVlID09PSAwO1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAvLyByZXR1cm5zIGZhbHN5XG4gICAgfVxufVxuXG4vL2NoZWNrIHdoZXRoZXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIHdvcmtzIGlmIGl0J3MgZ2l2ZW4uIE90aGVyd2lzZSxcbi8vc2hpbSBwYXJ0aWFsbHkuXG5pZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcldvcmtzT25PYmplY3QgPSBkb2VzR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yV29yayh7fSk7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcldvcmtzT25Eb20gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgZG9lc0dldE93blByb3BlcnR5RGVzY3JpcHRvcldvcmsoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIGlmICghZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yV29ya3NPbkRvbSB8fCAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yV29ya3NPbk9iamVjdCkge1xuICAgICAgICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yRmFsbGJhY2sgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgIH1cbn1cblxuaWYgKCFPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIHx8IGdldE93blByb3BlcnR5RGVzY3JpcHRvckZhbGxiYWNrKSB7XG4gICAgdmFyIEVSUl9OT05fT0JKRUNUID0gJ09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgY2FsbGVkIG9uIGEgbm9uLW9iamVjdDogJztcblxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmplY3QgIT09ICdmdW5jdGlvbicpIHx8IG9iamVjdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJfTk9OX09CSkVDVCArIG9iamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYWtlIGEgdmFsaWFudCBhdHRlbXB0IHRvIHVzZSB0aGUgcmVhbCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JcbiAgICAgICAgLy8gZm9yIEk4J3MgRE9NIGVsZW1lbnRzLlxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yRmFsbGJhY2spIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE93blByb3BlcnR5RGVzY3JpcHRvckZhbGxiYWNrLmNhbGwoT2JqZWN0LCBvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIHRyeSB0aGUgc2hpbSBpZiB0aGUgcmVhbCBvbmUgZG9lc24ndCB3b3JrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBvYmplY3QgZG9lcyBub3Qgb3ducyBwcm9wZXJ0eSByZXR1cm4gdW5kZWZpbmVkIGltbWVkaWF0ZWx5LlxuICAgICAgICBpZiAoIW93bnMob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIG9iamVjdCBoYXMgYSBwcm9wZXJ0eSB0aGVuIGl0J3MgZm9yIHN1cmUgYm90aCBgZW51bWVyYWJsZWAgYW5kXG4gICAgICAgIC8vIGBjb25maWd1cmFibGVgLlxuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH07XG5cbiAgICAgICAgLy8gSWYgSlMgZW5naW5lIHN1cHBvcnRzIGFjY2Vzc29yIHByb3BlcnRpZXMgdGhlbiBwcm9wZXJ0eSBtYXkgYmUgYVxuICAgICAgICAvLyBnZXR0ZXIgb3Igc2V0dGVyLlxuICAgICAgICBpZiAoc3VwcG9ydHNBY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgIC8vIFVuZm9ydHVuYXRlbHkgYF9fbG9va3VwR2V0dGVyX19gIHdpbGwgcmV0dXJuIGEgZ2V0dGVyIGV2ZW5cbiAgICAgICAgICAgIC8vIGlmIG9iamVjdCBoYXMgb3duIG5vbiBnZXR0ZXIgcHJvcGVydHkgYWxvbmcgd2l0aCBhIHNhbWUgbmFtZWRcbiAgICAgICAgICAgIC8vIGluaGVyaXRlZCBnZXR0ZXIuIFRvIGF2b2lkIG1pc2JlaGF2aW9yIHdlIHRlbXBvcmFyeSByZW1vdmVcbiAgICAgICAgICAgIC8vIGBfX3Byb3RvX19gIHNvIHRoYXQgYF9fbG9va3VwR2V0dGVyX19gIHdpbGwgcmV0dXJuIGdldHRlciBvbmx5XG4gICAgICAgICAgICAvLyBpZiBpdCdzIG93bmVkIGJ5IGFuIG9iamVjdC5cbiAgICAgICAgICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3QuX19wcm90b19fO1xuICAgICAgICAgICAgdmFyIG5vdFByb3RvdHlwZU9mT2JqZWN0ID0gb2JqZWN0ICE9PSBwcm90b3R5cGVPZk9iamVjdDtcbiAgICAgICAgICAgIC8vIGF2b2lkIHJlY3Vyc2lvbiBwcm9ibGVtLCBicmVha2luZyBpbiBPcGVyYSBNaW5pIHdoZW5cbiAgICAgICAgICAgIC8vIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJylcbiAgICAgICAgICAgIC8vIG9yIGFueSBvdGhlciBPYmplY3QucHJvdG90eXBlIGFjY2Vzc29yXG4gICAgICAgICAgICBpZiAobm90UHJvdG90eXBlT2ZPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBvYmplY3QuX19wcm90b19fID0gcHJvdG90eXBlT2ZPYmplY3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBnZXR0ZXIgPSBsb29rdXBHZXR0ZXIob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICB2YXIgc2V0dGVyID0gbG9va3VwU2V0dGVyKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gICAgICAgICAgICBpZiAobm90UHJvdG90eXBlT2ZPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmNlIHdlIGhhdmUgZ2V0dGVyIGFuZCBzZXR0ZXIgd2UgY2FuIHB1dCB2YWx1ZXMgYmFjay5cbiAgICAgICAgICAgICAgICBvYmplY3QuX19wcm90b19fID0gcHJvdG90eXBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ2V0dGVyIHx8IHNldHRlcikge1xuICAgICAgICAgICAgICAgIGlmIChnZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSBnZXR0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvci5zZXQgPSBzZXR0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIGl0IHdhcyBhY2Nlc3NvciBwcm9wZXJ0eSB3ZSdyZSBkb25lIGFuZCByZXR1cm4gaGVyZVxuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIHRvIGF2b2lkIGFkZGluZyBgdmFsdWVgIHRvIHRoZSBkZXNjcmlwdG9yLlxuICAgICAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgZ290IHRoaXMgZmFyIHdlIGtub3cgdGhhdCBvYmplY3QgaGFzIGFuIG93biBwcm9wZXJ0eSB0aGF0IGlzXG4gICAgICAgIC8vIG5vdCBhbiBhY2Nlc3NvciBzbyB3ZSBzZXQgaXQgYXMgYSB2YWx1ZSBhbmQgcmV0dXJuIGRlc2NyaXB0b3IuXG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgICAgICBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgfTtcbn1cblxuLy8gRVM1IDE1LjIuMy40XG4vLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuNFxuaWYgKCFPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgfTtcbn1cblxuLy8gRVM1IDE1LjIuMy41XG4vLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuNVxuaWYgKCFPYmplY3QuY3JlYXRlKSB7XG5cbiAgICAvLyBDb250cmlidXRlZCBieSBCcmFuZG9uIEJlbnZpZSwgT2N0b2JlciwgMjAxMlxuICAgIHZhciBjcmVhdGVFbXB0eTtcbiAgICB2YXIgc3VwcG9ydHNQcm90byA9ICEoeyBfX3Byb3RvX186IG51bGwgfSBpbnN0YW5jZW9mIE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIHByb2R1Y2VzIGZhbHNlIHBvc2l0aXZlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gT3BlcmEgTWluaSA9PiBub3QgYSByZWxpYWJsZSBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0LnByb3RvdHlwZS5fX3Byb3RvX18gPT09IG51bGxcbiAgICAvKmdsb2JhbCBkb2N1bWVudCAqL1xuICAgIGlmIChzdXBwb3J0c1Byb3RvIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3JlYXRlRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBfX3Byb3RvX186IG51bGwgfTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJbiBvbGQgSUUgX19wcm90b19fIGNhbid0IGJlIHVzZWQgdG8gbWFudWFsbHkgc2V0IGBudWxsYCwgbm9yIGRvZXNcbiAgICAgICAgLy8gYW55IG90aGVyIG1ldGhvZCBleGlzdCB0byBtYWtlIGFuIG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gbm90aGluZyxcbiAgICAgICAgLy8gYXNpZGUgZnJvbSBPYmplY3QucHJvdG90eXBlIGl0c2VsZi4gSW5zdGVhZCwgY3JlYXRlIGEgbmV3IGdsb2JhbFxuICAgICAgICAvLyBvYmplY3QgYW5kICpzdGVhbCogaXRzIE9iamVjdC5wcm90b3R5cGUgYW5kIHN0cmlwIGl0IGJhcmUuIFRoaXMgaXNcbiAgICAgICAgLy8gdXNlZCBhcyB0aGUgcHJvdG90eXBlIHRvIGNyZWF0ZSBudWxsYXJ5IG9iamVjdHMuXG4gICAgICAgIGNyZWF0ZUVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonO1xuICAgICAgICAgICAgdmFyIGVtcHR5ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0LnByb3RvdHlwZTtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgaWZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSBlbXB0eS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGRlbGV0ZSBlbXB0eS5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgICAgICAgIGRlbGV0ZSBlbXB0eS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgICAgICAgICAgIGRlbGV0ZSBlbXB0eS5pc1Byb3RvdHlwZU9mO1xuICAgICAgICAgICAgZGVsZXRlIGVtcHR5LnRvTG9jYWxlU3RyaW5nO1xuICAgICAgICAgICAgZGVsZXRlIGVtcHR5LnRvU3RyaW5nO1xuICAgICAgICAgICAgZGVsZXRlIGVtcHR5LnZhbHVlT2Y7XG4gICAgICAgICAgICBlbXB0eS5fX3Byb3RvX18gPSBudWxsO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBFbXB0eSgpIHt9XG4gICAgICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBlbXB0eTtcbiAgICAgICAgICAgIC8vIHNob3J0LWNpcmN1aXQgZnV0dXJlIGNhbGxzXG4gICAgICAgICAgICBjcmVhdGVFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbXB0eSgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvdG90eXBlLCBwcm9wZXJ0aWVzKSB7XG5cbiAgICAgICAgdmFyIG9iamVjdDtcbiAgICAgICAgZnVuY3Rpb24gVHlwZSgpIHt9ICAvLyBBbiBlbXB0eSBjb25zdHJ1Y3Rvci5cblxuICAgICAgICBpZiAocHJvdG90eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBjcmVhdGVFbXB0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm90b3R5cGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm90b3R5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uIGBwYXJlbnRgIGNhbiBiZSBgbnVsbGBcbiAgICAgICAgICAgICAgICAvLyBPUiAqYW55KiBgaW5zdGFuY2VvZiBPYmplY3RgICAoT2JqZWN0fEZ1bmN0aW9ufEFycmF5fFJlZ0V4cHxldGMpXG4gICAgICAgICAgICAgICAgLy8gVXNlIGB0eXBlb2ZgIHRobywgYi9jIGluIG9sZCBJRSwgRE9NIGVsZW1lbnRzIGFyZSBub3QgYGluc3RhbmNlb2YgT2JqZWN0YFxuICAgICAgICAgICAgICAgIC8vIGxpa2UgdGhleSBhcmUgaW4gbW9kZXJuIGJyb3dzZXJzLiBVc2luZyBgT2JqZWN0LmNyZWF0ZWAgb24gRE9NIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgLy8gaXMuLi5lcnIuLi5wcm9iYWJseSBpbmFwcHJvcHJpYXRlLCBidXQgdGhlIG5hdGl2ZSB2ZXJzaW9uIGFsbG93cyBmb3IgaXQuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0IHByb3RvdHlwZSBtYXkgb25seSBiZSBhbiBPYmplY3Qgb3IgbnVsbCcpOyAvLyBzYW1lIG1zZyBhcyBDaHJvbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICAgICAgICAgICAgb2JqZWN0ID0gbmV3IFR5cGUoKTtcbiAgICAgICAgICAgIC8vIElFIGhhcyBubyBidWlsdC1pbiBpbXBsZW1lbnRhdGlvbiBvZiBgT2JqZWN0LmdldFByb3RvdHlwZU9mYFxuICAgICAgICAgICAgLy8gbmVpdGhlciBgX19wcm90b19fYCwgYnV0IHRoaXMgbWFudWFsbHkgc2V0dGluZyBgX19wcm90b19fYCB3aWxsXG4gICAgICAgICAgICAvLyBndWFyYW50ZWUgdGhhdCBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCB3aWxsIHdvcmsgYXMgZXhwZWN0ZWQgd2l0aFxuICAgICAgICAgICAgLy8gb2JqZWN0cyBjcmVhdGVkIHVzaW5nIGBPYmplY3QuY3JlYXRlYFxuICAgICAgICAgICAgb2JqZWN0Ll9fcHJvdG9fXyA9IHByb3RvdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iamVjdCwgcHJvcGVydGllcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH07XG59XG5cbi8vIEVTNSAxNS4yLjMuNlxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuMi4zLjZcblxuLy8gUGF0Y2ggZm9yIFdlYktpdCBhbmQgSUU4IHN0YW5kYXJkIG1vZGVcbi8vIERlc2lnbmVkIGJ5IGhheCA8aGF4LmdpdGh1Yi5jb20+XG4vLyByZWxhdGVkIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzI2lzc3VlLzVcbi8vIElFOCBSZWZlcmVuY2U6XG4vLyAgICAgaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2RkMjgyOTAwLmFzcHhcbi8vICAgICBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvZGQyMjk5MTYuYXNweFxuLy8gV2ViS2l0IEJ1Z3M6XG4vLyAgICAgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTM2NDIzXG5cbmZ1bmN0aW9uIGRvZXNEZWZpbmVQcm9wZXJ0eVdvcmsob2JqZWN0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgJ3NlbnRpbmVsJywge30pO1xuICAgICAgICByZXR1cm4gJ3NlbnRpbmVsJyBpbiBvYmplY3Q7XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgIC8vIHJldHVybnMgZmFsc3lcbiAgICB9XG59XG5cbi8vIGNoZWNrIHdoZXRoZXIgZGVmaW5lUHJvcGVydHkgd29ya3MgaWYgaXQncyBnaXZlbi4gT3RoZXJ3aXNlLFxuLy8gc2hpbSBwYXJ0aWFsbHkuXG5pZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgdmFyIGRlZmluZVByb3BlcnR5V29ya3NPbk9iamVjdCA9IGRvZXNEZWZpbmVQcm9wZXJ0eVdvcmsoe30pO1xuICAgIHZhciBkZWZpbmVQcm9wZXJ0eVdvcmtzT25Eb20gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIGRvZXNEZWZpbmVQcm9wZXJ0eVdvcmsoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIGlmICghZGVmaW5lUHJvcGVydHlXb3Jrc09uT2JqZWN0IHx8ICFkZWZpbmVQcm9wZXJ0eVdvcmtzT25Eb20pIHtcbiAgICAgICAgdmFyIGRlZmluZVByb3BlcnR5RmFsbGJhY2sgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gICAgICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzRmFsbGJhY2sgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbiAgICB9XG59XG5cbmlmICghT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGRlZmluZVByb3BlcnR5RmFsbGJhY2spIHtcbiAgICB2YXIgRVJSX05PTl9PQkpFQ1RfREVTQ1JJUFRPUiA9ICdQcm9wZXJ0eSBkZXNjcmlwdGlvbiBtdXN0IGJlIGFuIG9iamVjdDogJztcbiAgICB2YXIgRVJSX05PTl9PQkpFQ1RfVEFSR0VUID0gJ09iamVjdC5kZWZpbmVQcm9wZXJ0eSBjYWxsZWQgb24gbm9uLW9iamVjdDogJztcbiAgICB2YXIgRVJSX0FDQ0VTU09SU19OT1RfU1VQUE9SVEVEID0gJ2dldHRlcnMgJiBzZXR0ZXJzIGNhbiBub3QgYmUgZGVmaW5lZCBvbiB0aGlzIGphdmFzY3JpcHQgZW5naW5lJztcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqZWN0ICE9PSAnZnVuY3Rpb24nKSB8fCBvYmplY3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJSX05PTl9PQkpFQ1RfVEFSR0VUICsgb2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHR5cGVvZiBkZXNjcmlwdG9yICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgZGVzY3JpcHRvciAhPT0gJ2Z1bmN0aW9uJykgfHwgZGVzY3JpcHRvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJfTk9OX09CSkVDVF9ERVNDUklQVE9SICsgZGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFrZSBhIHZhbGlhbnQgYXR0ZW1wdCB0byB1c2UgdGhlIHJlYWwgZGVmaW5lUHJvcGVydHlcbiAgICAgICAgLy8gZm9yIEk4J3MgRE9NIGVsZW1lbnRzLlxuICAgICAgICBpZiAoZGVmaW5lUHJvcGVydHlGYWxsYmFjaykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHlGYWxsYmFjay5jYWxsKE9iamVjdCwgb2JqZWN0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAvLyB0cnkgdGhlIHNoaW0gaWYgdGhlIHJlYWwgb25lIGRvZXNuJ3Qgd29ya1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQncyBhIGRhdGEgcHJvcGVydHkuXG4gICAgICAgIGlmIChvd25zKGRlc2NyaXB0b3IsICd2YWx1ZScpKSB7XG4gICAgICAgICAgICAvLyBmYWlsIHNpbGVudGx5IGlmICd3cml0YWJsZScsICdlbnVtZXJhYmxlJywgb3IgJ2NvbmZpZ3VyYWJsZSdcbiAgICAgICAgICAgIC8vIGFyZSByZXF1ZXN0ZWQgYnV0IG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAvLyBhbHRlcm5hdGUgYXBwcm9hY2g6XG4gICAgICAgICAgICBpZiAoIC8vIGNhbid0IGltcGxlbWVudCB0aGVzZSBmZWF0dXJlczsgYWxsb3cgZmFsc2UgYnV0IG5vdCB0cnVlXG4gICAgICAgICAgICAgICAgIShvd25zKGRlc2NyaXB0b3IsICd3cml0YWJsZScpID8gZGVzY3JpcHRvci53cml0YWJsZSA6IHRydWUpIHx8XG4gICAgICAgICAgICAgICAgIShvd25zKGRlc2NyaXB0b3IsICdlbnVtZXJhYmxlJykgPyBkZXNjcmlwdG9yLmVudW1lcmFibGUgOiB0cnVlKSB8fFxuICAgICAgICAgICAgICAgICEob3ducyhkZXNjcmlwdG9yLCAnY29uZmlndXJhYmxlJykgPyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA6IHRydWUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdUaGlzIGltcGxlbWVudGF0aW9uIG9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBkb2VzIG5vdCBzdXBwb3J0IGNvbmZpZ3VyYWJsZSwgZW51bWVyYWJsZSwgb3Igd3JpdGFibGUuJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICBpZiAoc3VwcG9ydHNBY2Nlc3NvcnMgJiYgKGxvb2t1cEdldHRlcihvYmplY3QsIHByb3BlcnR5KSB8fCBsb29rdXBTZXR0ZXIob2JqZWN0LCBwcm9wZXJ0eSkpKSB7XG4gICAgICAgICAgICAgICAgLy8gQXMgYWNjZXNzb3JzIGFyZSBzdXBwb3J0ZWQgb25seSBvbiBlbmdpbmVzIGltcGxlbWVudGluZ1xuICAgICAgICAgICAgICAgIC8vIGBfX3Byb3RvX19gIHdlIGNhbiBzYWZlbHkgb3ZlcnJpZGUgYF9fcHJvdG9fX2Agd2hpbGUgZGVmaW5pbmdcbiAgICAgICAgICAgICAgICAvLyBhIHByb3BlcnR5IHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGRvbid0IGhpdCBhbiBpbmhlcml0ZWRcbiAgICAgICAgICAgICAgICAvLyBhY2Nlc3Nvci5cbiAgICAgICAgICAgICAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0Ll9fcHJvdG9fXztcbiAgICAgICAgICAgICAgICBvYmplY3QuX19wcm90b19fID0gcHJvdG90eXBlT2ZPYmplY3Q7XG4gICAgICAgICAgICAgICAgLy8gRGVsZXRpbmcgYSBwcm9wZXJ0eSBhbnl3YXkgc2luY2UgZ2V0dGVyIC8gc2V0dGVyIG1heSBiZVxuICAgICAgICAgICAgICAgIC8vIGRlZmluZWQgb24gb2JqZWN0IGl0c2VsZi5cbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICBvYmplY3RbcHJvcGVydHldID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAvLyBTZXR0aW5nIG9yaWdpbmFsIGBfX3Byb3RvX19gIGJhY2sgbm93LlxuICAgICAgICAgICAgICAgIG9iamVjdC5fX3Byb3RvX18gPSBwcm90b3R5cGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdFtwcm9wZXJ0eV0gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzdXBwb3J0c0FjY2Vzc29ycykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJSX0FDQ0VTU09SU19OT1RfU1VQUE9SVEVEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlIGdvdCB0aGF0IGZhciB0aGVuIGdldHRlcnMgYW5kIHNldHRlcnMgY2FuIGJlIGRlZmluZWQgISFcbiAgICAgICAgICAgIGlmIChvd25zKGRlc2NyaXB0b3IsICdnZXQnKSkge1xuICAgICAgICAgICAgICAgIGRlZmluZUdldHRlcihvYmplY3QsIHByb3BlcnR5LCBkZXNjcmlwdG9yLmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3ducyhkZXNjcmlwdG9yLCAnc2V0JykpIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVTZXR0ZXIob2JqZWN0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvci5zZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfTtcbn1cblxuLy8gRVM1IDE1LjIuMy43XG4vLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuN1xuaWYgKCFPYmplY3QuZGVmaW5lUHJvcGVydGllcyB8fCBkZWZpbmVQcm9wZXJ0aWVzRmFsbGJhY2spIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMob2JqZWN0LCBwcm9wZXJ0aWVzKSB7XG4gICAgICAgIC8vIG1ha2UgYSB2YWxpYW50IGF0dGVtcHQgdG8gdXNlIHRoZSByZWFsIGRlZmluZVByb3BlcnRpZXNcbiAgICAgICAgaWYgKGRlZmluZVByb3BlcnRpZXNGYWxsYmFjaykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5lUHJvcGVydGllc0ZhbGxiYWNrLmNhbGwoT2JqZWN0LCBvYmplY3QsIHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gdHJ5IHRoZSBzaGltIGlmIHRoZSByZWFsIG9uZSBkb2Vzbid0IHdvcmtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChvd25zKHByb3BlcnRpZXMsIHByb3BlcnR5KSAmJiBwcm9wZXJ0eSAhPT0gJ19fcHJvdG9fXycpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSwgcHJvcGVydGllc1twcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfTtcbn1cblxuLy8gRVM1IDE1LjIuMy44XG4vLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuOFxuaWYgKCFPYmplY3Quc2VhbCkge1xuICAgIE9iamVjdC5zZWFsID0gZnVuY3Rpb24gc2VhbChvYmplY3QpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBtaXNsZWFkaW5nIGFuZCBicmVha3MgZmVhdHVyZS1kZXRlY3Rpb24sIGJ1dFxuICAgICAgICAvLyBhbGxvd3MgXCJzZWN1cmFibGVcIiBjb2RlIHRvIFwiZ3JhY2VmdWxseVwiIGRlZ3JhZGUgdG8gd29ya2luZ1xuICAgICAgICAvLyBidXQgaW5zZWN1cmUgY29kZS5cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9O1xufVxuXG4vLyBFUzUgMTUuMi4zLjlcbi8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjIuMy45XG5pZiAoIU9iamVjdC5mcmVlemUpIHtcbiAgICBPYmplY3QuZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKG9iamVjdCkge1xuICAgICAgICAvLyB0aGlzIGlzIG1pc2xlYWRpbmcgYW5kIGJyZWFrcyBmZWF0dXJlLWRldGVjdGlvbiwgYnV0XG4gICAgICAgIC8vIGFsbG93cyBcInNlY3VyYWJsZVwiIGNvZGUgdG8gXCJncmFjZWZ1bGx5XCIgZGVncmFkZSB0byB3b3JraW5nXG4gICAgICAgIC8vIGJ1dCBpbnNlY3VyZSBjb2RlLlxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH07XG59XG5cbi8vIGRldGVjdCBhIFJoaW5vIGJ1ZyBhbmQgcGF0Y2ggaXRcbnRyeSB7XG4gICAgT2JqZWN0LmZyZWV6ZShmdW5jdGlvbiAoKSB7fSk7XG59IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICBPYmplY3QuZnJlZXplID0gKGZ1bmN0aW9uIGZyZWV6ZShmcmVlemVPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZShvYmplY3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyZWV6ZU9iamVjdChvYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0oT2JqZWN0LmZyZWV6ZSkpO1xufVxuXG4vLyBFUzUgMTUuMi4zLjEwXG4vLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuMTBcbmlmICghT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKSB7XG4gICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zID0gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMob2JqZWN0KSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbWlzbGVhZGluZyBhbmQgYnJlYWtzIGZlYXR1cmUtZGV0ZWN0aW9uLCBidXRcbiAgICAgICAgLy8gYWxsb3dzIFwic2VjdXJhYmxlXCIgY29kZSB0byBcImdyYWNlZnVsbHlcIiBkZWdyYWRlIHRvIHdvcmtpbmdcbiAgICAgICAgLy8gYnV0IGluc2VjdXJlIGNvZGUuXG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfTtcbn1cblxuLy8gRVM1IDE1LjIuMy4xMVxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuMi4zLjExXG5pZiAoIU9iamVjdC5pc1NlYWxlZCkge1xuICAgIE9iamVjdC5pc1NlYWxlZCA9IGZ1bmN0aW9uIGlzU2VhbGVkKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuLy8gRVM1IDE1LjIuMy4xMlxuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuMi4zLjEyXG5pZiAoIU9iamVjdC5pc0Zyb3plbikge1xuICAgIE9iamVjdC5pc0Zyb3plbiA9IGZ1bmN0aW9uIGlzRnJvemVuKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuLy8gRVM1IDE1LjIuMy4xM1xuLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuMi4zLjEzXG5pZiAoIU9iamVjdC5pc0V4dGVuc2libGUpIHtcbiAgICBPYmplY3QuaXNFeHRlbnNpYmxlID0gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKG9iamVjdCkge1xuICAgICAgICAvLyAxLiBJZiBUeXBlKE8pIGlzIG5vdCBPYmplY3QgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICBpZiAoT2JqZWN0KG9iamVjdCkgIT09IG9iamVjdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpOyAvLyBUT0RPIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgICAvLyAyLiBSZXR1cm4gdGhlIEJvb2xlYW4gdmFsdWUgb2YgdGhlIFtbRXh0ZW5zaWJsZV1dIGludGVybmFsIHByb3BlcnR5IG9mIE8uXG4gICAgICAgIHZhciBuYW1lID0gJyc7XG4gICAgICAgIHdoaWxlIChvd25zKG9iamVjdCwgbmFtZSkpIHtcbiAgICAgICAgICAgIG5hbWUgKz0gJz8nO1xuICAgICAgICB9XG4gICAgICAgIG9iamVjdFtuYW1lXSA9IHRydWU7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IG93bnMob2JqZWN0LCBuYW1lKTtcbiAgICAgICAgZGVsZXRlIG9iamVjdFtuYW1lXTtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH07XG59XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYm93ZXJfY29tcG9uZW50cy9lczUtc2hpbS9lczUtc2hhbS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvc3dlZXRhbGVydC9kaXN0L3N3ZWV0YWxlcnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiEgaVNjcm9sbCB2NS4yLjAgfiAoYykgMjAwOC0yMDE2IE1hdHRlbyBTcGluZWxsaSB+IGh0dHA6Ly9jdWJpcS5vcmcvbGljZW5zZSAqL1xuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBNYXRoKSB7XG52YXIgckFGID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVx0fHxcblx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVx0fHxcblx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVx0XHR8fFxuXHR3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZVx0XHR8fFxuXHR3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcdFx0fHxcblx0ZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApOyB9O1xuXG52YXIgdXRpbHMgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgbWUgPSB7fTtcblxuXHR2YXIgX2VsZW1lbnRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuXHR2YXIgX3ZlbmRvciA9IChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHZlbmRvcnMgPSBbJ3QnLCAnd2Via2l0VCcsICdNb3pUJywgJ21zVCcsICdPVCddLFxuXHRcdFx0dHJhbnNmb3JtLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsID0gdmVuZG9ycy5sZW5ndGg7XG5cblx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHR0cmFuc2Zvcm0gPSB2ZW5kb3JzW2ldICsgJ3JhbnNmb3JtJztcblx0XHRcdGlmICggdHJhbnNmb3JtIGluIF9lbGVtZW50U3R5bGUgKSByZXR1cm4gdmVuZG9yc1tpXS5zdWJzdHIoMCwgdmVuZG9yc1tpXS5sZW5ndGgtMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KSgpO1xuXG5cdGZ1bmN0aW9uIF9wcmVmaXhTdHlsZSAoc3R5bGUpIHtcblx0XHRpZiAoIF92ZW5kb3IgPT09IGZhbHNlICkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICggX3ZlbmRvciA9PT0gJycgKSByZXR1cm4gc3R5bGU7XG5cdFx0cmV0dXJuIF92ZW5kb3IgKyBzdHlsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0eWxlLnN1YnN0cigxKTtcblx0fVxuXG5cdG1lLmdldFRpbWUgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbiBnZXRUaW1lICgpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9O1xuXG5cdG1lLmV4dGVuZCA9IGZ1bmN0aW9uICh0YXJnZXQsIG9iaikge1xuXHRcdGZvciAoIHZhciBpIGluIG9iaiApIHtcblx0XHRcdHRhcmdldFtpXSA9IG9ialtpXTtcblx0XHR9XG5cdH07XG5cblx0bWUuYWRkRXZlbnQgPSBmdW5jdGlvbiAoZWwsIHR5cGUsIGZuLCBjYXB0dXJlKSB7XG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgISFjYXB0dXJlKTtcblx0fTtcblxuXHRtZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChlbCwgdHlwZSwgZm4sIGNhcHR1cmUpIHtcblx0XHRlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCAhIWNhcHR1cmUpO1xuXHR9O1xuXG5cdG1lLnByZWZpeFBvaW50ZXJFdmVudCA9IGZ1bmN0aW9uIChwb2ludGVyRXZlbnQpIHtcblx0XHRyZXR1cm4gd2luZG93Lk1TUG9pbnRlckV2ZW50ID9cblx0XHRcdCdNU1BvaW50ZXInICsgcG9pbnRlckV2ZW50LmNoYXJBdCg3KS50b1VwcGVyQ2FzZSgpICsgcG9pbnRlckV2ZW50LnN1YnN0cig4KTpcblx0XHRcdHBvaW50ZXJFdmVudDtcblx0fTtcblxuXHRtZS5tb21lbnR1bSA9IGZ1bmN0aW9uIChjdXJyZW50LCBzdGFydCwgdGltZSwgbG93ZXJNYXJnaW4sIHdyYXBwZXJTaXplLCBkZWNlbGVyYXRpb24pIHtcblx0XHR2YXIgZGlzdGFuY2UgPSBjdXJyZW50IC0gc3RhcnQsXG5cdFx0XHRzcGVlZCA9IE1hdGguYWJzKGRpc3RhbmNlKSAvIHRpbWUsXG5cdFx0XHRkZXN0aW5hdGlvbixcblx0XHRcdGR1cmF0aW9uO1xuXG5cdFx0ZGVjZWxlcmF0aW9uID0gZGVjZWxlcmF0aW9uID09PSB1bmRlZmluZWQgPyAwLjAwMDYgOiBkZWNlbGVyYXRpb247XG5cblx0XHRkZXN0aW5hdGlvbiA9IGN1cnJlbnQgKyAoIHNwZWVkICogc3BlZWQgKSAvICggMiAqIGRlY2VsZXJhdGlvbiApICogKCBkaXN0YW5jZSA8IDAgPyAtMSA6IDEgKTtcblx0XHRkdXJhdGlvbiA9IHNwZWVkIC8gZGVjZWxlcmF0aW9uO1xuXG5cdFx0aWYgKCBkZXN0aW5hdGlvbiA8IGxvd2VyTWFyZ2luICkge1xuXHRcdFx0ZGVzdGluYXRpb24gPSB3cmFwcGVyU2l6ZSA/IGxvd2VyTWFyZ2luIC0gKCB3cmFwcGVyU2l6ZSAvIDIuNSAqICggc3BlZWQgLyA4ICkgKSA6IGxvd2VyTWFyZ2luO1xuXHRcdFx0ZGlzdGFuY2UgPSBNYXRoLmFicyhkZXN0aW5hdGlvbiAtIGN1cnJlbnQpO1xuXHRcdFx0ZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoIGRlc3RpbmF0aW9uID4gMCApIHtcblx0XHRcdGRlc3RpbmF0aW9uID0gd3JhcHBlclNpemUgPyB3cmFwcGVyU2l6ZSAvIDIuNSAqICggc3BlZWQgLyA4ICkgOiAwO1xuXHRcdFx0ZGlzdGFuY2UgPSBNYXRoLmFicyhjdXJyZW50KSArIGRlc3RpbmF0aW9uO1xuXHRcdFx0ZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRkZXN0aW5hdGlvbjogTWF0aC5yb3VuZChkZXN0aW5hdGlvbiksXG5cdFx0XHRkdXJhdGlvbjogZHVyYXRpb25cblx0XHR9O1xuXHR9O1xuXG5cdHZhciBfdHJhbnNmb3JtID0gX3ByZWZpeFN0eWxlKCd0cmFuc2Zvcm0nKTtcblxuXHRtZS5leHRlbmQobWUsIHtcblx0XHRoYXNUcmFuc2Zvcm06IF90cmFuc2Zvcm0gIT09IGZhbHNlLFxuXHRcdGhhc1BlcnNwZWN0aXZlOiBfcHJlZml4U3R5bGUoJ3BlcnNwZWN0aXZlJykgaW4gX2VsZW1lbnRTdHlsZSxcblx0XHRoYXNUb3VjaDogJ29udG91Y2hzdGFydCcgaW4gd2luZG93LFxuXHRcdGhhc1BvaW50ZXI6ICEhKHdpbmRvdy5Qb2ludGVyRXZlbnQgfHwgd2luZG93Lk1TUG9pbnRlckV2ZW50KSwgLy8gSUUxMCBpcyBwcmVmaXhlZFxuXHRcdGhhc1RyYW5zaXRpb246IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvbicpIGluIF9lbGVtZW50U3R5bGVcblx0fSk7XG5cblx0Lypcblx0VGhpcyBzaG91bGQgZmluZCBhbGwgQW5kcm9pZCBicm93c2VycyBsb3dlciB0aGFuIGJ1aWxkIDUzNS4xOSAoYm90aCBzdG9jayBicm93c2VyIGFuZCB3ZWJ2aWV3KVxuXHQtIGdhbGF4eSBTMiBpcyBva1xuICAgIC0gMi4zLjYgOiBgQXBwbGVXZWJLaXQvNTMzLjEgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzMy4xYFxuICAgIC0gNC4wLjQgOiBgQXBwbGVXZWJLaXQvNTM0LjMwIChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi80LjAgTW9iaWxlIFNhZmFyaS81MzQuMzBgXG4gICAtIGdhbGF4eSBTMyBpcyBiYWRBbmRyb2lkIChzdG9jayBicm93ZXIsIHdlYnZpZXcpXG4gICAgIGBBcHBsZVdlYktpdC81MzQuMzAgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzNC4zMGBcbiAgIC0gZ2FsYXh5IFM0IGlzIGJhZEFuZHJvaWQgKHN0b2NrIGJyb3dlciwgd2VidmlldylcbiAgICAgYEFwcGxlV2ViS2l0LzUzNC4zMCAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM0LjMwYFxuICAgLSBnYWxheHkgUzUgaXMgT0tcbiAgICAgYEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2IChDaHJvbWUvKWBcbiAgIC0gZ2FsYXh5IFM2IGlzIE9LXG4gICAgIGBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzQuMCBNb2JpbGUgU2FmYXJpLzUzNy4zNiAoQ2hyb21lLylgXG4gICovXG5cdG1lLmlzQmFkQW5kcm9pZCA9IChmdW5jdGlvbigpIHtcblx0XHR2YXIgYXBwVmVyc2lvbiA9IHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbjtcblx0XHQvLyBBbmRyb2lkIGJyb3dzZXIgaXMgbm90IGEgY2hyb21lIGJyb3dzZXIuXG5cdFx0aWYgKC9BbmRyb2lkLy50ZXN0KGFwcFZlcnNpb24pICYmICEoL0Nocm9tZVxcL1xcZC8udGVzdChhcHBWZXJzaW9uKSkpIHtcblx0XHRcdHZhciBzYWZhcmlWZXJzaW9uID0gYXBwVmVyc2lvbi5tYXRjaCgvU2FmYXJpXFwvKFxcZCsuXFxkKS8pO1xuXHRcdFx0aWYoc2FmYXJpVmVyc2lvbiAmJiB0eXBlb2Ygc2FmYXJpVmVyc2lvbiA9PT0gXCJvYmplY3RcIiAmJiBzYWZhcmlWZXJzaW9uLmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KHNhZmFyaVZlcnNpb25bMV0pIDwgNTM1LjE5O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0pKCk7XG5cblx0bWUuZXh0ZW5kKG1lLnN0eWxlID0ge30sIHtcblx0XHR0cmFuc2Zvcm06IF90cmFuc2Zvcm0sXG5cdFx0dHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBfcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbicpLFxuXHRcdHRyYW5zaXRpb25EdXJhdGlvbjogX3ByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRHVyYXRpb24nKSxcblx0XHR0cmFuc2l0aW9uRGVsYXk6IF9wcmVmaXhTdHlsZSgndHJhbnNpdGlvbkRlbGF5JyksXG5cdFx0dHJhbnNmb3JtT3JpZ2luOiBfcHJlZml4U3R5bGUoJ3RyYW5zZm9ybU9yaWdpbicpXG5cdH0pO1xuXG5cdG1lLmhhc0NsYXNzID0gZnVuY3Rpb24gKGUsIGMpIHtcblx0XHR2YXIgcmUgPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjICsgXCIoXFxcXHN8JClcIik7XG5cdFx0cmV0dXJuIHJlLnRlc3QoZS5jbGFzc05hbWUpO1xuXHR9O1xuXG5cdG1lLmFkZENsYXNzID0gZnVuY3Rpb24gKGUsIGMpIHtcblx0XHRpZiAoIG1lLmhhc0NsYXNzKGUsIGMpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBuZXdjbGFzcyA9IGUuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cdFx0bmV3Y2xhc3MucHVzaChjKTtcblx0XHRlLmNsYXNzTmFtZSA9IG5ld2NsYXNzLmpvaW4oJyAnKTtcblx0fTtcblxuXHRtZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlLCBjKSB7XG5cdFx0aWYgKCAhbWUuaGFzQ2xhc3MoZSwgYykgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHJlID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgYyArIFwiKFxcXFxzfCQpXCIsICdnJyk7XG5cdFx0ZS5jbGFzc05hbWUgPSBlLmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnICcpO1xuXHR9O1xuXG5cdG1lLm9mZnNldCA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdHZhciBsZWZ0ID0gLWVsLm9mZnNldExlZnQsXG5cdFx0XHR0b3AgPSAtZWwub2Zmc2V0VG9wO1xuXG5cdFx0Ly8ganNoaW50IC1XMDg0XG5cdFx0d2hpbGUgKGVsID0gZWwub2Zmc2V0UGFyZW50KSB7XG5cdFx0XHRsZWZ0IC09IGVsLm9mZnNldExlZnQ7XG5cdFx0XHR0b3AgLT0gZWwub2Zmc2V0VG9wO1xuXHRcdH1cblx0XHQvLyBqc2hpbnQgK1cwODRcblxuXHRcdHJldHVybiB7XG5cdFx0XHRsZWZ0OiBsZWZ0LFxuXHRcdFx0dG9wOiB0b3Bcblx0XHR9O1xuXHR9O1xuXG5cdG1lLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uID0gZnVuY3Rpb24gKGVsLCBleGNlcHRpb25zKSB7XG5cdFx0Zm9yICggdmFyIGkgaW4gZXhjZXB0aW9ucyApIHtcblx0XHRcdGlmICggZXhjZXB0aW9uc1tpXS50ZXN0KGVsW2ldKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdG1lLmV4dGVuZChtZS5ldmVudFR5cGUgPSB7fSwge1xuXHRcdHRvdWNoc3RhcnQ6IDEsXG5cdFx0dG91Y2htb3ZlOiAxLFxuXHRcdHRvdWNoZW5kOiAxLFxuXG5cdFx0bW91c2Vkb3duOiAyLFxuXHRcdG1vdXNlbW92ZTogMixcblx0XHRtb3VzZXVwOiAyLFxuXG5cdFx0cG9pbnRlcmRvd246IDMsXG5cdFx0cG9pbnRlcm1vdmU6IDMsXG5cdFx0cG9pbnRlcnVwOiAzLFxuXG5cdFx0TVNQb2ludGVyRG93bjogMyxcblx0XHRNU1BvaW50ZXJNb3ZlOiAzLFxuXHRcdE1TUG9pbnRlclVwOiAzXG5cdH0pO1xuXG5cdG1lLmV4dGVuZChtZS5lYXNlID0ge30sIHtcblx0XHRxdWFkcmF0aWM6IHtcblx0XHRcdHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpJyxcblx0XHRcdGZuOiBmdW5jdGlvbiAoaykge1xuXHRcdFx0XHRyZXR1cm4gayAqICggMiAtIGsgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNpcmN1bGFyOiB7XG5cdFx0XHRzdHlsZTogJ2N1YmljLWJlemllcigwLjEsIDAuNTcsIDAuMSwgMSknLFx0Ly8gTm90IHByb3Blcmx5IFwiY2lyY3VsYXJcIiBidXQgdGhpcyBsb29rcyBiZXR0ZXIsIGl0IHNob3VsZCBiZSAoMC4wNzUsIDAuODIsIDAuMTY1LCAxKVxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdHJldHVybiBNYXRoLnNxcnQoIDEgLSAoIC0tayAqIGsgKSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YmFjazoge1xuXHRcdFx0c3R5bGU6ICdjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSknLFxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdHZhciBiID0gNDtcblx0XHRcdFx0cmV0dXJuICggayA9IGsgLSAxICkgKiBrICogKCAoIGIgKyAxICkgKiBrICsgYiApICsgMTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGJvdW5jZToge1xuXHRcdFx0c3R5bGU6ICcnLFxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdGlmICggKCBrIC89IDEgKSA8ICggMSAvIDIuNzUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogayAqIGs7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIGsgPCAoIDIgLyAyLjc1ICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqICggayAtPSAoIDEuNSAvIDIuNzUgKSApICogayArIDAuNzU7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIGsgPCAoIDIuNSAvIDIuNzUgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMi4yNSAvIDIuNzUgKSApICogayArIDAuOTM3NTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMi42MjUgLyAyLjc1ICkgKSAqIGsgKyAwLjk4NDM3NTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZWxhc3RpYzoge1xuXHRcdFx0c3R5bGU6ICcnLFxuXHRcdFx0Zm46IGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdHZhciBmID0gMC4yMixcblx0XHRcdFx0XHRlID0gMC40O1xuXG5cdFx0XHRcdGlmICggayA9PT0gMCApIHsgcmV0dXJuIDA7IH1cblx0XHRcdFx0aWYgKCBrID09IDEgKSB7IHJldHVybiAxOyB9XG5cblx0XHRcdFx0cmV0dXJuICggZSAqIE1hdGgucG93KCAyLCAtIDEwICogayApICogTWF0aC5zaW4oICggayAtIGYgLyA0ICkgKiAoIDIgKiBNYXRoLlBJICkgLyBmICkgKyAxICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRtZS50YXAgPSBmdW5jdGlvbiAoZSwgZXZlbnROYW1lKSB7XG5cdFx0dmFyIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cdFx0ZXYuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0ZXYucGFnZVggPSBlLnBhZ2VYO1xuXHRcdGV2LnBhZ2VZID0gZS5wYWdlWTtcblx0XHRlLnRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcblx0fTtcblxuXHRtZS5jbGljayA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0LFxuXHRcdFx0ZXY7XG5cblx0XHRpZiAoICEoLyhTRUxFQ1R8SU5QVVR8VEVYVEFSRUEpL2kpLnRlc3QodGFyZ2V0LnRhZ05hbWUpICkge1xuXHRcdFx0ZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcblx0XHRcdGV2LmluaXRNb3VzZUV2ZW50KCdjbGljaycsIHRydWUsIHRydWUsIGUudmlldywgMSxcblx0XHRcdFx0dGFyZ2V0LnNjcmVlblgsIHRhcmdldC5zY3JlZW5ZLCB0YXJnZXQuY2xpZW50WCwgdGFyZ2V0LmNsaWVudFksXG5cdFx0XHRcdGUuY3RybEtleSwgZS5hbHRLZXksIGUuc2hpZnRLZXksIGUubWV0YUtleSxcblx0XHRcdFx0MCwgbnVsbCk7XG5cblx0XHRcdGV2Ll9jb25zdHJ1Y3RlZCA9IHRydWU7XG5cdFx0XHR0YXJnZXQuZGlzcGF0Y2hFdmVudChldik7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBtZTtcbn0pKCk7XG5mdW5jdGlvbiBJU2Nyb2xsIChlbCwgb3B0aW9ucykge1xuXHR0aGlzLndyYXBwZXIgPSB0eXBlb2YgZWwgPT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xuXHR0aGlzLnNjcm9sbGVyID0gdGhpcy53cmFwcGVyLmNoaWxkcmVuWzBdO1xuXHR0aGlzLnNjcm9sbGVyU3R5bGUgPSB0aGlzLnNjcm9sbGVyLnN0eWxlO1x0XHQvLyBjYWNoZSBzdHlsZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG5cblx0dGhpcy5vcHRpb25zID0ge1xuXG5cdFx0em9vbU1pbjogMSxcblx0XHR6b29tTWF4OiA0LCBzdGFydFpvb206IDEsXG5cblx0XHRyZXNpemVTY3JvbGxiYXJzOiB0cnVlLFxuXG5cdFx0bW91c2VXaGVlbFNwZWVkOiAyMCxcblxuXHRcdHNuYXBUaHJlc2hvbGQ6IDAuMzM0LFxuXG4vLyBJTlNFUlQgUE9JTlQ6IE9QVElPTlNcblx0XHRkaXNhYmxlUG9pbnRlciA6ICF1dGlscy5oYXNQb2ludGVyLFxuXHRcdGRpc2FibGVUb3VjaCA6IHV0aWxzLmhhc1BvaW50ZXIgfHwgIXV0aWxzLmhhc1RvdWNoLFxuXHRcdGRpc2FibGVNb3VzZSA6IHV0aWxzLmhhc1BvaW50ZXIgfHwgdXRpbHMuaGFzVG91Y2gsXG5cdFx0c3RhcnRYOiAwLFxuXHRcdHN0YXJ0WTogMCxcblx0XHRzY3JvbGxZOiB0cnVlLFxuXHRcdGRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ6IDUsXG5cdFx0bW9tZW50dW06IHRydWUsXG5cblx0XHRib3VuY2U6IHRydWUsXG5cdFx0Ym91bmNlVGltZTogNjAwLFxuXHRcdGJvdW5jZUVhc2luZzogJycsXG5cblx0XHRwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcblx0XHRwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbjogeyB0YWdOYW1lOiAvXihJTlBVVHxURVhUQVJFQXxCVVRUT058U0VMRUNUKSQvIH0sXG5cblx0XHRIV0NvbXBvc2l0aW5nOiB0cnVlLFxuXHRcdHVzZVRyYW5zaXRpb246IHRydWUsXG5cdFx0dXNlVHJhbnNmb3JtOiB0cnVlLFxuXHRcdGJpbmRUb1dyYXBwZXI6IHR5cGVvZiB3aW5kb3cub25tb3VzZWRvd24gPT09IFwidW5kZWZpbmVkXCJcblx0fTtcblxuXHRmb3IgKCB2YXIgaSBpbiBvcHRpb25zICkge1xuXHRcdHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgb3B0aW9uc1xuXHR0aGlzLnRyYW5zbGF0ZVogPSB0aGlzLm9wdGlvbnMuSFdDb21wb3NpdGluZyAmJiB1dGlscy5oYXNQZXJzcGVjdGl2ZSA/ICcgdHJhbnNsYXRlWigwKScgOiAnJztcblxuXHR0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiA9IHV0aWxzLmhhc1RyYW5zaXRpb24gJiYgdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb247XG5cdHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gPSB1dGlscy5oYXNUcmFuc2Zvcm0gJiYgdGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybTtcblxuXHR0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoO1xuXHR0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgPSAhdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggJiYgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0O1xuXG5cdC8vIElmIHlvdSB3YW50IGV2ZW50UGFzc3Rocm91Z2ggSSBoYXZlIHRvIGxvY2sgb25lIG9mIHRoZSBheGVzXG5cdHRoaXMub3B0aW9ucy5zY3JvbGxZID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyA/IGZhbHNlIDogdGhpcy5vcHRpb25zLnNjcm9sbFk7XG5cdHRoaXMub3B0aW9ucy5zY3JvbGxYID0gdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ2hvcml6b250YWwnID8gZmFsc2UgOiB0aGlzLm9wdGlvbnMuc2Nyb2xsWDtcblxuXHQvLyBXaXRoIGV2ZW50UGFzc3Rocm91Z2ggd2UgYWxzbyBuZWVkIGxvY2tEaXJlY3Rpb24gbWVjaGFuaXNtXG5cdHRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsID0gdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgJiYgIXRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoO1xuXHR0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCA9IHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID8gMCA6IHRoaXMub3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkO1xuXG5cdHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmcgPSB0eXBlb2YgdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyA9PSAnc3RyaW5nJyA/IHV0aWxzLmVhc2VbdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZ10gfHwgdXRpbHMuZWFzZS5jaXJjdWxhciA6IHRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmc7XG5cblx0dGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcgPSB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZyA9PT0gdW5kZWZpbmVkID8gNjAgOiB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZztcblxuXHRpZiAoIHRoaXMub3B0aW9ucy50YXAgPT09IHRydWUgKSB7XG5cdFx0dGhpcy5vcHRpb25zLnRhcCA9ICd0YXAnO1xuXHR9XG5cblx0aWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyA9PSAnc2NhbGUnICkge1xuXHRcdHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uID0gZmFsc2U7XG5cdH1cblxuXHR0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb24gPSB0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb24gPyAtMSA6IDE7XG5cbi8vIElOU0VSVCBQT0lOVDogTk9STUFMSVpBVElPTlxuXG5cdC8vIFNvbWUgZGVmYXVsdHNcblx0dGhpcy54ID0gMDtcblx0dGhpcy55ID0gMDtcblx0dGhpcy5kaXJlY3Rpb25YID0gMDtcblx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblx0dGhpcy5fZXZlbnRzID0ge307XG5cblx0dGhpcy5zY2FsZSA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMub3B0aW9ucy5zdGFydFpvb20sIHRoaXMub3B0aW9ucy56b29tTWluKSwgdGhpcy5vcHRpb25zLnpvb21NYXgpO1xuXG4vLyBJTlNFUlQgUE9JTlQ6IERFRkFVTFRTXG5cblx0dGhpcy5faW5pdCgpO1xuXHR0aGlzLnJlZnJlc2goKTtcblxuXHR0aGlzLnNjcm9sbFRvKHRoaXMub3B0aW9ucy5zdGFydFgsIHRoaXMub3B0aW9ucy5zdGFydFkpO1xuXHR0aGlzLmVuYWJsZSgpO1xufVxuXG5JU2Nyb2xsLnByb3RvdHlwZSA9IHtcblx0dmVyc2lvbjogJzUuMi4wJyxcblxuXHRfaW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuX2luaXRFdmVudHMoKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnpvb20gKSB7XG5cdFx0XHR0aGlzLl9pbml0Wm9vbSgpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMgfHwgdGhpcy5vcHRpb25zLmluZGljYXRvcnMgKSB7XG5cdFx0XHR0aGlzLl9pbml0SW5kaWNhdG9ycygpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLm1vdXNlV2hlZWwgKSB7XG5cdFx0XHR0aGlzLl9pbml0V2hlZWwoKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5zbmFwICkge1xuXHRcdFx0dGhpcy5faW5pdFNuYXAoKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncyApIHtcblx0XHRcdHRoaXMuX2luaXRLZXlzKCk7XG5cdFx0fVxuXG4vLyBJTlNFUlQgUE9JTlQ6IF9pbml0XG5cblx0fSxcblxuXHRkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5faW5pdEV2ZW50cyh0cnVlKTtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcbiBcdFx0dGhpcy5yZXNpemVUaW1lb3V0ID0gbnVsbDtcblx0XHR0aGlzLl9leGVjRXZlbnQoJ2Rlc3Ryb3knKTtcblx0fSxcblxuXHRfdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoIGUudGFyZ2V0ICE9IHRoaXMuc2Nyb2xsZXIgfHwgIXRoaXMuaXNJblRyYW5zaXRpb24gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fdHJhbnNpdGlvblRpbWUoKTtcblx0XHRpZiAoICF0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuXHRcdFx0dGhpcy5pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcblx0XHR9XG5cdH0sXG5cblx0X3N0YXJ0OiBmdW5jdGlvbiAoZSkge1xuXHRcdC8vIFJlYWN0IHRvIGxlZnQgbW91c2UgYnV0dG9uIG9ubHlcblx0XHRpZiAoIHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9IDEgKSB7XG5cdFx0ICAvLyBmb3IgYnV0dG9uIHByb3BlcnR5XG5cdFx0ICAvLyBodHRwOi8vdW5peHBhcGEuY29tL2pzL21vdXNlLmh0bWxcblx0XHQgIHZhciBidXR0b247XG5cdCAgICBpZiAoIWUud2hpY2gpIHtcblx0ICAgICAgLyogSUUgY2FzZSAqL1xuXHQgICAgICBidXR0b24gPSAoZS5idXR0b24gPCAyKSA/IDAgOlxuXHQgICAgICAgICAgICAgICAoKGUuYnV0dG9uID09IDQpID8gMSA6IDIpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLyogQWxsIG90aGVycyAqL1xuXHQgICAgICBidXR0b24gPSBlLmJ1dHRvbjtcblx0ICAgIH1cblx0XHRcdGlmICggYnV0dG9uICE9PSAwICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkIHx8ICh0aGlzLmluaXRpYXRlZCAmJiB1dGlscy5ldmVudFR5cGVbZS50eXBlXSAhPT0gdGhpcy5pbml0aWF0ZWQpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0ICYmICF1dGlscy5pc0JhZEFuZHJvaWQgJiYgIXV0aWxzLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKGUudGFyZ2V0LCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHRFeGNlcHRpb24pICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdHZhciBwb2ludCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGUsXG5cdFx0XHRwb3M7XG5cblx0XHR0aGlzLmluaXRpYXRlZFx0PSB1dGlscy5ldmVudFR5cGVbZS50eXBlXTtcblx0XHR0aGlzLm1vdmVkXHRcdD0gZmFsc2U7XG5cdFx0dGhpcy5kaXN0WFx0XHQ9IDA7XG5cdFx0dGhpcy5kaXN0WVx0XHQ9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25YID0gMDtcblx0XHR0aGlzLmRpcmVjdGlvblkgPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gMDtcblxuXHRcdHRoaXMuc3RhcnRUaW1lID0gdXRpbHMuZ2V0VGltZSgpO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aGlzLmlzSW5UcmFuc2l0aW9uICkge1xuXHRcdFx0dGhpcy5fdHJhbnNpdGlvblRpbWUoKTtcblx0XHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSBmYWxzZTtcblx0XHRcdHBvcyA9IHRoaXMuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xuXHRcdFx0dGhpcy5fdHJhbnNsYXRlKE1hdGgucm91bmQocG9zLngpLCBNYXRoLnJvdW5kKHBvcy55KSk7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHRcdH0gZWxzZSBpZiAoICF0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aGlzLmlzQW5pbWF0aW5nICkge1xuXHRcdFx0dGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXJ0WCAgICA9IHRoaXMueDtcblx0XHR0aGlzLnN0YXJ0WSAgICA9IHRoaXMueTtcblx0XHR0aGlzLmFic1N0YXJ0WCA9IHRoaXMueDtcblx0XHR0aGlzLmFic1N0YXJ0WSA9IHRoaXMueTtcblx0XHR0aGlzLnBvaW50WCAgICA9IHBvaW50LnBhZ2VYO1xuXHRcdHRoaXMucG9pbnRZICAgID0gcG9pbnQucGFnZVk7XG5cblx0XHR0aGlzLl9leGVjRXZlbnQoJ2JlZm9yZVNjcm9sbFN0YXJ0Jyk7XG5cdH0sXG5cblx0X21vdmU6IGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkIHx8IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCApIHtcdC8vIGluY3JlYXNlcyBwZXJmb3JtYW5jZSBvbiBBbmRyb2lkPyBUT0RPOiBjaGVjayFcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHR2YXIgcG9pbnRcdFx0PSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlLFxuXHRcdFx0ZGVsdGFYXHRcdD0gcG9pbnQucGFnZVggLSB0aGlzLnBvaW50WCxcblx0XHRcdGRlbHRhWVx0XHQ9IHBvaW50LnBhZ2VZIC0gdGhpcy5wb2ludFksXG5cdFx0XHR0aW1lc3RhbXBcdD0gdXRpbHMuZ2V0VGltZSgpLFxuXHRcdFx0bmV3WCwgbmV3WSxcblx0XHRcdGFic0Rpc3RYLCBhYnNEaXN0WTtcblxuXHRcdHRoaXMucG9pbnRYXHRcdD0gcG9pbnQucGFnZVg7XG5cdFx0dGhpcy5wb2ludFlcdFx0PSBwb2ludC5wYWdlWTtcblxuXHRcdHRoaXMuZGlzdFhcdFx0Kz0gZGVsdGFYO1xuXHRcdHRoaXMuZGlzdFlcdFx0Kz0gZGVsdGFZO1xuXHRcdGFic0Rpc3RYXHRcdD0gTWF0aC5hYnModGhpcy5kaXN0WCk7XG5cdFx0YWJzRGlzdFlcdFx0PSBNYXRoLmFicyh0aGlzLmRpc3RZKTtcblxuXHRcdC8vIFdlIG5lZWQgdG8gbW92ZSBhdCBsZWFzdCAxMCBwaXhlbHMgZm9yIHRoZSBzY3JvbGxpbmcgdG8gaW5pdGlhdGVcblx0XHRpZiAoIHRpbWVzdGFtcCAtIHRoaXMuZW5kVGltZSA+IDMwMCAmJiAoYWJzRGlzdFggPCAxMCAmJiBhYnNEaXN0WSA8IDEwKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB5b3UgYXJlIHNjcm9sbGluZyBpbiBvbmUgZGlyZWN0aW9uIGxvY2sgdGhlIG90aGVyXG5cdFx0aWYgKCAhdGhpcy5kaXJlY3Rpb25Mb2NrZWQgJiYgIXRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsICkge1xuXHRcdFx0aWYgKCBhYnNEaXN0WCA+IGFic0Rpc3RZICsgdGhpcy5vcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQgKSB7XG5cdFx0XHRcdHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gJ2gnO1x0XHQvLyBsb2NrIGhvcml6b250YWxseVxuXHRcdFx0fSBlbHNlIGlmICggYWJzRGlzdFkgPj0gYWJzRGlzdFggKyB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCApIHtcblx0XHRcdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAndic7XHRcdC8vIGxvY2sgdmVydGljYWxseVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSAnbic7XHRcdC8vIG5vIGxvY2tcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuZGlyZWN0aW9uTG9ja2VkID09ICdoJyApIHtcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ3ZlcnRpY2FsJyApIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2ggPT0gJ2hvcml6b250YWwnICkge1xuXHRcdFx0XHR0aGlzLmluaXRpYXRlZCA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhWSA9IDA7XG5cdFx0fSBlbHNlIGlmICggdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT0gJ3YnICkge1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCA9PSAnaG9yaXpvbnRhbCcgKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoID09ICd2ZXJ0aWNhbCcgKSB7XG5cdFx0XHRcdHRoaXMuaW5pdGlhdGVkID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZGVsdGFYID0gMDtcblx0XHR9XG5cblx0XHRkZWx0YVggPSB0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgPyBkZWx0YVggOiAwO1xuXHRcdGRlbHRhWSA9IHRoaXMuaGFzVmVydGljYWxTY3JvbGwgPyBkZWx0YVkgOiAwO1xuXG5cdFx0bmV3WCA9IHRoaXMueCArIGRlbHRhWDtcblx0XHRuZXdZID0gdGhpcy55ICsgZGVsdGFZO1xuXG5cdFx0Ly8gU2xvdyBkb3duIGlmIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcblx0XHRpZiAoIG5ld1ggPiAwIHx8IG5ld1ggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHRuZXdYID0gdGhpcy5vcHRpb25zLmJvdW5jZSA/IHRoaXMueCArIGRlbHRhWCAvIDMgOiBuZXdYID4gMCA/IDAgOiB0aGlzLm1heFNjcm9sbFg7XG5cdFx0fVxuXHRcdGlmICggbmV3WSA+IDAgfHwgbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdG5ld1kgPSB0aGlzLm9wdGlvbnMuYm91bmNlID8gdGhpcy55ICsgZGVsdGFZIC8gMyA6IG5ld1kgPiAwID8gMCA6IHRoaXMubWF4U2Nyb2xsWTtcblx0XHR9XG5cblx0XHR0aGlzLmRpcmVjdGlvblggPSBkZWx0YVggPiAwID8gLTEgOiBkZWx0YVggPCAwID8gMSA6IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25ZID0gZGVsdGFZID4gMCA/IC0xIDogZGVsdGFZIDwgMCA/IDEgOiAwO1xuXG5cdFx0aWYgKCAhdGhpcy5tb3ZlZCApIHtcblx0XHRcdHRoaXMuX2V4ZWNFdmVudCgnc2Nyb2xsU3RhcnQnKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vdmVkID0gdHJ1ZTtcblxuXHRcdHRoaXMuX3RyYW5zbGF0ZShuZXdYLCBuZXdZKTtcblxuLyogUkVQTEFDRSBTVEFSVDogX21vdmUgKi9cblxuXHRcdGlmICggdGltZXN0YW1wIC0gdGhpcy5zdGFydFRpbWUgPiAzMDAgKSB7XG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcblx0XHRcdHRoaXMuc3RhcnRYID0gdGhpcy54O1xuXHRcdFx0dGhpcy5zdGFydFkgPSB0aGlzLnk7XG5cdFx0fVxuXG4vKiBSRVBMQUNFIEVORDogX21vdmUgKi9cblxuXHR9LFxuXG5cdF9lbmQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkIHx8IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCAmJiAhdXRpbHMucHJldmVudERlZmF1bHRFeGNlcHRpb24oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0dmFyIHBvaW50ID0gZS5jaGFuZ2VkVG91Y2hlcyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlLFxuXHRcdFx0bW9tZW50dW1YLFxuXHRcdFx0bW9tZW50dW1ZLFxuXHRcdFx0ZHVyYXRpb24gPSB1dGlscy5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSxcblx0XHRcdG5ld1ggPSBNYXRoLnJvdW5kKHRoaXMueCksXG5cdFx0XHRuZXdZID0gTWF0aC5yb3VuZCh0aGlzLnkpLFxuXHRcdFx0ZGlzdGFuY2VYID0gTWF0aC5hYnMobmV3WCAtIHRoaXMuc3RhcnRYKSxcblx0XHRcdGRpc3RhbmNlWSA9IE1hdGguYWJzKG5ld1kgLSB0aGlzLnN0YXJ0WSksXG5cdFx0XHR0aW1lID0gMCxcblx0XHRcdGVhc2luZyA9ICcnO1xuXG5cdFx0dGhpcy5pc0luVHJhbnNpdGlvbiA9IDA7XG5cdFx0dGhpcy5pbml0aWF0ZWQgPSAwO1xuXHRcdHRoaXMuZW5kVGltZSA9IHV0aWxzLmdldFRpbWUoKTtcblxuXHRcdC8vIHJlc2V0IGlmIHdlIGFyZSBvdXRzaWRlIG9mIHRoZSBib3VuZGFyaWVzXG5cdFx0aWYgKCB0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmJvdW5jZVRpbWUpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsVG8obmV3WCwgbmV3WSk7XHQvLyBlbnN1cmVzIHRoYXQgdGhlIGxhc3QgcG9zaXRpb24gaXMgcm91bmRlZFxuXG5cdFx0Ly8gd2Ugc2Nyb2xsZWQgbGVzcyB0aGFuIDEwIHBpeGVsc1xuXHRcdGlmICggIXRoaXMubW92ZWQgKSB7XG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy50YXAgKSB7XG5cdFx0XHRcdHV0aWxzLnRhcChlLCB0aGlzLm9wdGlvbnMudGFwKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuY2xpY2sgKSB7XG5cdFx0XHRcdHV0aWxzLmNsaWNrKGUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbENhbmNlbCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fZXZlbnRzLmZsaWNrICYmIGR1cmF0aW9uIDwgMjAwICYmIGRpc3RhbmNlWCA8IDEwMCAmJiBkaXN0YW5jZVkgPCAxMDAgKSB7XG5cdFx0XHR0aGlzLl9leGVjRXZlbnQoJ2ZsaWNrJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gc3RhcnQgbW9tZW50dW0gYW5pbWF0aW9uIGlmIG5lZWRlZFxuXHRcdGlmICggdGhpcy5vcHRpb25zLm1vbWVudHVtICYmIGR1cmF0aW9uIDwgMzAwICkge1xuXHRcdFx0bW9tZW50dW1YID0gdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsID8gdXRpbHMubW9tZW50dW0odGhpcy54LCB0aGlzLnN0YXJ0WCwgZHVyYXRpb24sIHRoaXMubWF4U2Nyb2xsWCwgdGhpcy5vcHRpb25zLmJvdW5jZSA/IHRoaXMud3JhcHBlcldpZHRoIDogMCwgdGhpcy5vcHRpb25zLmRlY2VsZXJhdGlvbikgOiB7IGRlc3RpbmF0aW9uOiBuZXdYLCBkdXJhdGlvbjogMCB9O1xuXHRcdFx0bW9tZW50dW1ZID0gdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCA/IHV0aWxzLm1vbWVudHVtKHRoaXMueSwgdGhpcy5zdGFydFksIGR1cmF0aW9uLCB0aGlzLm1heFNjcm9sbFksIHRoaXMub3B0aW9ucy5ib3VuY2UgPyB0aGlzLndyYXBwZXJIZWlnaHQgOiAwLCB0aGlzLm9wdGlvbnMuZGVjZWxlcmF0aW9uKSA6IHsgZGVzdGluYXRpb246IG5ld1ksIGR1cmF0aW9uOiAwIH07XG5cdFx0XHRuZXdYID0gbW9tZW50dW1YLmRlc3RpbmF0aW9uO1xuXHRcdFx0bmV3WSA9IG1vbWVudHVtWS5kZXN0aW5hdGlvbjtcblx0XHRcdHRpbWUgPSBNYXRoLm1heChtb21lbnR1bVguZHVyYXRpb24sIG1vbWVudHVtWS5kdXJhdGlvbik7XG5cdFx0XHR0aGlzLmlzSW5UcmFuc2l0aW9uID0gMTtcblx0XHR9XG5cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnNuYXAgKSB7XG5cdFx0XHR2YXIgc25hcCA9IHRoaXMuX25lYXJlc3RTbmFwKG5ld1gsIG5ld1kpO1xuXHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHNuYXA7XG5cdFx0XHR0aW1lID0gdGhpcy5vcHRpb25zLnNuYXBTcGVlZCB8fCBNYXRoLm1heChcblx0XHRcdFx0XHRNYXRoLm1heChcblx0XHRcdFx0XHRcdE1hdGgubWluKE1hdGguYWJzKG5ld1ggLSBzbmFwLngpLCAxMDAwKSxcblx0XHRcdFx0XHRcdE1hdGgubWluKE1hdGguYWJzKG5ld1kgLSBzbmFwLnkpLCAxMDAwKVxuXHRcdFx0XHRcdCksIDMwMCk7XG5cdFx0XHRuZXdYID0gc25hcC54O1xuXHRcdFx0bmV3WSA9IHNuYXAueTtcblxuXHRcdFx0dGhpcy5kaXJlY3Rpb25YID0gMDtcblx0XHRcdHRoaXMuZGlyZWN0aW9uWSA9IDA7XG5cdFx0XHRlYXNpbmcgPSB0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nO1xuXHRcdH1cblxuLy8gSU5TRVJUIFBPSU5UOiBfZW5kXG5cblx0XHRpZiAoIG5ld1ggIT0gdGhpcy54IHx8IG5ld1kgIT0gdGhpcy55ICkge1xuXHRcdFx0Ly8gY2hhbmdlIGVhc2luZyBmdW5jdGlvbiB3aGVuIHNjcm9sbGVyIGdvZXMgb3V0IG9mIHRoZSBib3VuZGFyaWVzXG5cdFx0XHRpZiAoIG5ld1ggPiAwIHx8IG5ld1ggPCB0aGlzLm1heFNjcm9sbFggfHwgbmV3WSA+IDAgfHwgbmV3WSA8IHRoaXMubWF4U2Nyb2xsWSApIHtcblx0XHRcdFx0ZWFzaW5nID0gdXRpbHMuZWFzZS5xdWFkcmF0aWM7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2Nyb2xsVG8obmV3WCwgbmV3WSwgdGltZSwgZWFzaW5nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9leGVjRXZlbnQoJ3Njcm9sbEVuZCcpO1xuXHR9LFxuXG5cdF9yZXNpemU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcblxuXHRcdHRoaXMucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhhdC5yZWZyZXNoKCk7XG5cdFx0fSwgdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcpO1xuXHR9LFxuXG5cdHJlc2V0UG9zaXRpb246IGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0dmFyIHggPSB0aGlzLngsXG5cdFx0XHR5ID0gdGhpcy55O1xuXG5cdFx0dGltZSA9IHRpbWUgfHwgMDtcblxuXHRcdGlmICggIXRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCB8fCB0aGlzLnggPiAwICkge1xuXHRcdFx0eCA9IDA7XG5cdFx0fSBlbHNlIGlmICggdGhpcy54IDwgdGhpcy5tYXhTY3JvbGxYICkge1xuXHRcdFx0eCA9IHRoaXMubWF4U2Nyb2xsWDtcblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsIHx8IHRoaXMueSA+IDAgKSB7XG5cdFx0XHR5ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLnkgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG5cdFx0XHR5ID0gdGhpcy5tYXhTY3JvbGxZO1xuXHRcdH1cblxuXHRcdGlmICggeCA9PSB0aGlzLnggJiYgeSA9PSB0aGlzLnkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxUbyh4LCB5LCB0aW1lLCB0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fSxcblxuXHRlbmFibGU6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9LFxuXG5cdHJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmYgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1x0XHQvLyBGb3JjZSByZWZsb3dcblxuXHRcdHRoaXMud3JhcHBlcldpZHRoXHQ9IHRoaXMud3JhcHBlci5jbGllbnRXaWR0aDtcblx0XHR0aGlzLndyYXBwZXJIZWlnaHRcdD0gdGhpcy53cmFwcGVyLmNsaWVudEhlaWdodDtcblxuLyogUkVQTEFDRSBTVEFSVDogcmVmcmVzaCAqL1xuXHR0aGlzLnNjcm9sbGVyV2lkdGhcdD0gTWF0aC5yb3VuZCh0aGlzLnNjcm9sbGVyLm9mZnNldFdpZHRoICogdGhpcy5zY2FsZSk7XG5cdHRoaXMuc2Nyb2xsZXJIZWlnaHRcdD0gTWF0aC5yb3VuZCh0aGlzLnNjcm9sbGVyLm9mZnNldEhlaWdodCAqIHRoaXMuc2NhbGUpO1xuXG5cdHRoaXMubWF4U2Nyb2xsWFx0XHQ9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5zY3JvbGxlcldpZHRoO1xuXHR0aGlzLm1heFNjcm9sbFlcdFx0PSB0aGlzLndyYXBwZXJIZWlnaHQgLSB0aGlzLnNjcm9sbGVySGVpZ2h0O1xuLyogUkVQTEFDRSBFTkQ6IHJlZnJlc2ggKi9cblxuXHRcdHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbFx0PSB0aGlzLm9wdGlvbnMuc2Nyb2xsWCAmJiB0aGlzLm1heFNjcm9sbFggPCAwO1xuXHRcdHRoaXMuaGFzVmVydGljYWxTY3JvbGxcdFx0PSB0aGlzLm9wdGlvbnMuc2Nyb2xsWSAmJiB0aGlzLm1heFNjcm9sbFkgPCAwO1xuXG5cdFx0aWYgKCAhdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsICkge1xuXHRcdFx0dGhpcy5tYXhTY3JvbGxYID0gMDtcblx0XHRcdHRoaXMuc2Nyb2xsZXJXaWR0aCA9IHRoaXMud3JhcHBlcldpZHRoO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR0aGlzLm1heFNjcm9sbFkgPSAwO1xuXHRcdFx0dGhpcy5zY3JvbGxlckhlaWdodCA9IHRoaXMud3JhcHBlckhlaWdodDtcblx0XHR9XG5cblx0XHR0aGlzLmVuZFRpbWUgPSAwO1xuXHRcdHRoaXMuZGlyZWN0aW9uWCA9IDA7XG5cdFx0dGhpcy5kaXJlY3Rpb25ZID0gMDtcblxuXHRcdHRoaXMud3JhcHBlck9mZnNldCA9IHV0aWxzLm9mZnNldCh0aGlzLndyYXBwZXIpO1xuXG5cdFx0dGhpcy5fZXhlY0V2ZW50KCdyZWZyZXNoJyk7XG5cblx0XHR0aGlzLnJlc2V0UG9zaXRpb24oKTtcblxuLy8gSU5TRVJUIFBPSU5UOiBfcmVmcmVzaFxuXG5cdH0sXG5cblx0b246IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcblx0XHRcdHRoaXMuX2V2ZW50c1t0eXBlXSA9IFtdO1xuXHRcdH1cblxuXHRcdHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGZuKTtcblx0fSxcblxuXHRvZmY6IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuXHRcdGlmICggIXRoaXMuX2V2ZW50c1t0eXBlXSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgaW5kZXggPSB0aGlzLl9ldmVudHNbdHlwZV0uaW5kZXhPZihmbik7XG5cblx0XHRpZiAoIGluZGV4ID4gLTEgKSB7XG5cdFx0XHR0aGlzLl9ldmVudHNbdHlwZV0uc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH0sXG5cblx0X2V4ZWNFdmVudDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRpZiAoICF0aGlzLl9ldmVudHNbdHlwZV0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0bCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG5cblx0XHRpZiAoICFsICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdHRoaXMuX2V2ZW50c1t0eXBlXVtpXS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHRcdH1cblx0fSxcblxuXHRzY3JvbGxCeTogZnVuY3Rpb24gKHgsIHksIHRpbWUsIGVhc2luZykge1xuXHRcdHggPSB0aGlzLnggKyB4O1xuXHRcdHkgPSB0aGlzLnkgKyB5O1xuXHRcdHRpbWUgPSB0aW1lIHx8IDA7XG5cblx0XHR0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0c2Nyb2xsVG86IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcpIHtcblx0XHRlYXNpbmcgPSBlYXNpbmcgfHwgdXRpbHMuZWFzZS5jaXJjdWxhcjtcblxuXHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiB0aW1lID4gMDtcblx0XHR2YXIgdHJhbnNpdGlvblR5cGUgPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiAmJiBlYXNpbmcuc3R5bGU7XG5cdFx0aWYgKCAhdGltZSB8fCB0cmFuc2l0aW9uVHlwZSApIHtcblx0XHRcdFx0aWYodHJhbnNpdGlvblR5cGUpIHtcblx0XHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24oZWFzaW5nLnN0eWxlKTtcblx0XHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uVGltZSh0aW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlKHgsIHkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9hbmltYXRlKHgsIHksIHRpbWUsIGVhc2luZy5mbik7XG5cdFx0fVxuXHR9LFxuXG5cdHNjcm9sbFRvRWxlbWVudDogZnVuY3Rpb24gKGVsLCB0aW1lLCBvZmZzZXRYLCBvZmZzZXRZLCBlYXNpbmcpIHtcblx0XHRlbCA9IGVsLm5vZGVUeXBlID8gZWwgOiB0aGlzLnNjcm9sbGVyLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXG5cdFx0aWYgKCAhZWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHBvcyA9IHV0aWxzLm9mZnNldChlbCk7XG5cblx0XHRwb3MubGVmdCAtPSB0aGlzLndyYXBwZXJPZmZzZXQubGVmdDtcblx0XHRwb3MudG9wICAtPSB0aGlzLndyYXBwZXJPZmZzZXQudG9wO1xuXG5cdFx0Ly8gaWYgb2Zmc2V0WC9ZIGFyZSB0cnVlIHdlIGNlbnRlciB0aGUgZWxlbWVudCB0byB0aGUgc2NyZWVuXG5cdFx0aWYgKCBvZmZzZXRYID09PSB0cnVlICkge1xuXHRcdFx0b2Zmc2V0WCA9IE1hdGgucm91bmQoZWwub2Zmc2V0V2lkdGggLyAyIC0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoIC8gMik7XG5cdFx0fVxuXHRcdGlmICggb2Zmc2V0WSA9PT0gdHJ1ZSApIHtcblx0XHRcdG9mZnNldFkgPSBNYXRoLnJvdW5kKGVsLm9mZnNldEhlaWdodCAvIDIgLSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0IC8gMik7XG5cdFx0fVxuXG5cdFx0cG9zLmxlZnQgLT0gb2Zmc2V0WCB8fCAwO1xuXHRcdHBvcy50b3AgIC09IG9mZnNldFkgfHwgMDtcblxuXHRcdHBvcy5sZWZ0ID0gcG9zLmxlZnQgPiAwID8gMCA6IHBvcy5sZWZ0IDwgdGhpcy5tYXhTY3JvbGxYID8gdGhpcy5tYXhTY3JvbGxYIDogcG9zLmxlZnQ7XG5cdFx0cG9zLnRvcCAgPSBwb3MudG9wICA+IDAgPyAwIDogcG9zLnRvcCAgPCB0aGlzLm1heFNjcm9sbFkgPyB0aGlzLm1heFNjcm9sbFkgOiBwb3MudG9wO1xuXG5cdFx0dGltZSA9IHRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aW1lID09PSBudWxsIHx8IHRpbWUgPT09ICdhdXRvJyA/IE1hdGgubWF4KE1hdGguYWJzKHRoaXMueC1wb3MubGVmdCksIE1hdGguYWJzKHRoaXMueS1wb3MudG9wKSkgOiB0aW1lO1xuXG5cdFx0dGhpcy5zY3JvbGxUbyhwb3MubGVmdCwgcG9zLnRvcCwgdGltZSwgZWFzaW5nKTtcblx0fSxcblxuXHRfdHJhbnNpdGlvblRpbWU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0dGltZSA9IHRpbWUgfHwgMDtcblxuXHRcdHZhciBkdXJhdGlvblByb3AgPSB1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb247XG5cdFx0dGhpcy5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSB0aW1lICsgJ21zJztcblxuXHRcdGlmICggIXRpbWUgJiYgdXRpbHMuaXNCYWRBbmRyb2lkICkge1xuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMC4wMDAxbXMnO1xuXHRcdFx0Ly8gcmVtb3ZlIDAuMDAwMW1zXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRyQUYoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHNlbGYuc2Nyb2xsZXJTdHlsZVtkdXJhdGlvblByb3BdID09PSAnMC4wMDAxbXMnKSB7XG5cdFx0XHRcdFx0c2VsZi5zY3JvbGxlclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMHMnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblxuXHRcdGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcnNbaV0udHJhbnNpdGlvblRpbWUodGltZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1lXG5cblx0fSxcblxuXHRfdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBmdW5jdGlvbiAoZWFzaW5nKSB7XG5cdFx0dGhpcy5zY3JvbGxlclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl0gPSBlYXNpbmc7XG5cblxuXHRcdGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuXHRcdFx0Zm9yICggdmFyIGkgPSB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHR0aGlzLmluZGljYXRvcnNbaV0udHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKGVhc2luZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvblxuXG5cdH0sXG5cblx0X3RyYW5zbGF0ZTogZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gKSB7XG5cbi8qIFJFUExBQ0UgU1RBUlQ6IF90cmFuc2xhdGUgKi9cdFx0XHR0aGlzLnNjcm9sbGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNmb3JtXSA9ICd0cmFuc2xhdGUoJyArIHggKyAncHgsJyArIHkgKyAncHgpIHNjYWxlKCcgKyB0aGlzLnNjYWxlICsgJykgJyArIHRoaXMudHJhbnNsYXRlWjsvKiBSRVBMQUNFIEVORDogX3RyYW5zbGF0ZSAqL1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHggPSBNYXRoLnJvdW5kKHgpO1xuXHRcdFx0eSA9IE1hdGgucm91bmQoeSk7XG5cdFx0XHR0aGlzLnNjcm9sbGVyU3R5bGUubGVmdCA9IHggKyAncHgnO1xuXHRcdFx0dGhpcy5zY3JvbGxlclN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXHRcdH1cblxuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblxuXG5cdGlmICggdGhpcy5pbmRpY2F0b3JzICkge1xuXHRcdGZvciAoIHZhciBpID0gdGhpcy5pbmRpY2F0b3JzLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdHRoaXMuaW5kaWNhdG9yc1tpXS51cGRhdGVQb3NpdGlvbigpO1xuXHRcdH1cblx0fVxuXG5cbi8vIElOU0VSVCBQT0lOVDogX3RyYW5zbGF0ZVxuXG5cdH0sXG5cblx0X2luaXRFdmVudHM6IGZ1bmN0aW9uIChyZW1vdmUpIHtcblx0XHR2YXIgZXZlbnRUeXBlID0gcmVtb3ZlID8gdXRpbHMucmVtb3ZlRXZlbnQgOiB1dGlscy5hZGRFdmVudCxcblx0XHRcdHRhcmdldCA9IHRoaXMub3B0aW9ucy5iaW5kVG9XcmFwcGVyID8gdGhpcy53cmFwcGVyIDogd2luZG93O1xuXG5cdFx0ZXZlbnRUeXBlKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcyk7XG5cdFx0ZXZlbnRUeXBlKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMpO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuY2xpY2sgKSB7XG5cdFx0XHRldmVudFR5cGUodGhpcy53cmFwcGVyLCAnY2xpY2snLCB0aGlzLCB0cnVlKTtcblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZU1vdXNlICkge1xuXHRcdFx0ZXZlbnRUeXBlKHRoaXMud3JhcHBlciwgJ21vdXNlZG93bicsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ21vdXNlbW92ZScsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ21vdXNlY2FuY2VsJywgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCAnbW91c2V1cCcsIHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmICggdXRpbHMuaGFzUG9pbnRlciAmJiAhdGhpcy5vcHRpb25zLmRpc2FibGVQb2ludGVyICkge1xuXHRcdFx0ZXZlbnRUeXBlKHRoaXMud3JhcHBlciwgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVyZG93bicpLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcm1vdmUnKSwgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJjYW5jZWwnKSwgdGhpcyk7XG5cdFx0XHRldmVudFR5cGUodGFyZ2V0LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJ1cCcpLCB0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoIHV0aWxzLmhhc1RvdWNoICYmICF0aGlzLm9wdGlvbnMuZGlzYWJsZVRvdWNoICkge1xuXHRcdFx0ZXZlbnRUeXBlKHRoaXMud3JhcHBlciwgJ3RvdWNoc3RhcnQnLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsICd0b3VjaG1vdmUnLCB0aGlzKTtcblx0XHRcdGV2ZW50VHlwZSh0YXJnZXQsICd0b3VjaGNhbmNlbCcsIHRoaXMpO1xuXHRcdFx0ZXZlbnRUeXBlKHRhcmdldCwgJ3RvdWNoZW5kJywgdGhpcyk7XG5cdFx0fVxuXG5cdFx0ZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICd0cmFuc2l0aW9uZW5kJywgdGhpcyk7XG5cdFx0ZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICd3ZWJraXRUcmFuc2l0aW9uRW5kJywgdGhpcyk7XG5cdFx0ZXZlbnRUeXBlKHRoaXMuc2Nyb2xsZXIsICdvVHJhbnNpdGlvbkVuZCcsIHRoaXMpO1xuXHRcdGV2ZW50VHlwZSh0aGlzLnNjcm9sbGVyLCAnTVNUcmFuc2l0aW9uRW5kJywgdGhpcyk7XG5cdH0sXG5cblx0Z2V0Q29tcHV0ZWRQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBtYXRyaXggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnNjcm9sbGVyLCBudWxsKSxcblx0XHRcdHgsIHk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy51c2VUcmFuc2Zvcm0gKSB7XG5cdFx0XHRtYXRyaXggPSBtYXRyaXhbdXRpbHMuc3R5bGUudHJhbnNmb3JtXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsICcpO1xuXHRcdFx0eCA9ICsobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0pO1xuXHRcdFx0eSA9ICsobWF0cml4WzEzXSB8fCBtYXRyaXhbNV0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR4ID0gK21hdHJpeC5sZWZ0LnJlcGxhY2UoL1teLVxcZC5dL2csICcnKTtcblx0XHRcdHkgPSArbWF0cml4LnRvcC5yZXBsYWNlKC9bXi1cXGQuXS9nLCAnJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgeDogeCwgeTogeSB9O1xuXHR9LFxuXHRfaW5pdEluZGljYXRvcnM6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaW50ZXJhY3RpdmUgPSB0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmVTY3JvbGxiYXJzLFxuXHRcdFx0Y3VzdG9tU3R5bGUgPSB0eXBlb2YgdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMgIT0gJ3N0cmluZycsXG5cdFx0XHRpbmRpY2F0b3JzID0gW10sXG5cdFx0XHRpbmRpY2F0b3I7XG5cblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHR0aGlzLmluZGljYXRvcnMgPSBbXTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnNjcm9sbGJhcnMgKSB7XG5cdFx0XHQvLyBWZXJ0aWNhbCBzY3JvbGxiYXJcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLnNjcm9sbFkgKSB7XG5cdFx0XHRcdGluZGljYXRvciA9IHtcblx0XHRcdFx0XHRlbDogY3JlYXRlRGVmYXVsdFNjcm9sbGJhcigndicsIGludGVyYWN0aXZlLCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyksXG5cdFx0XHRcdFx0aW50ZXJhY3RpdmU6IGludGVyYWN0aXZlLFxuXHRcdFx0XHRcdGRlZmF1bHRTY3JvbGxiYXJzOiB0cnVlLFxuXHRcdFx0XHRcdGN1c3RvbVN0eWxlOiBjdXN0b21TdHlsZSxcblx0XHRcdFx0XHRyZXNpemU6IHRoaXMub3B0aW9ucy5yZXNpemVTY3JvbGxiYXJzLFxuXHRcdFx0XHRcdHNocmluazogdGhpcy5vcHRpb25zLnNocmlua1Njcm9sbGJhcnMsXG5cdFx0XHRcdFx0ZmFkZTogdGhpcy5vcHRpb25zLmZhZGVTY3JvbGxiYXJzLFxuXHRcdFx0XHRcdGxpc3Rlblg6IGZhbHNlXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKGluZGljYXRvci5lbCk7XG5cdFx0XHRcdGluZGljYXRvcnMucHVzaChpbmRpY2F0b3IpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIb3Jpem9udGFsIHNjcm9sbGJhclxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2Nyb2xsWCApIHtcblx0XHRcdFx0aW5kaWNhdG9yID0ge1xuXHRcdFx0XHRcdGVsOiBjcmVhdGVEZWZhdWx0U2Nyb2xsYmFyKCdoJywgaW50ZXJhY3RpdmUsIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzKSxcblx0XHRcdFx0XHRpbnRlcmFjdGl2ZTogaW50ZXJhY3RpdmUsXG5cdFx0XHRcdFx0ZGVmYXVsdFNjcm9sbGJhcnM6IHRydWUsXG5cdFx0XHRcdFx0Y3VzdG9tU3R5bGU6IGN1c3RvbVN0eWxlLFxuXHRcdFx0XHRcdHJlc2l6ZTogdGhpcy5vcHRpb25zLnJlc2l6ZVNjcm9sbGJhcnMsXG5cdFx0XHRcdFx0c2hyaW5rOiB0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyxcblx0XHRcdFx0XHRmYWRlOiB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMsXG5cdFx0XHRcdFx0bGlzdGVuWTogZmFsc2Vcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yLmVsKTtcblx0XHRcdFx0aW5kaWNhdG9ycy5wdXNoKGluZGljYXRvcik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycyApIHtcblx0XHRcdC8vIFRPRE86IGNoZWNrIGNvbmNhdCBjb21wYXRpYmlsaXR5XG5cdFx0XHRpbmRpY2F0b3JzID0gaW5kaWNhdG9ycy5jb25jYXQodGhpcy5vcHRpb25zLmluZGljYXRvcnMpO1xuXHRcdH1cblxuXHRcdGZvciAoIHZhciBpID0gaW5kaWNhdG9ycy5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHR0aGlzLmluZGljYXRvcnMucHVzaCggbmV3IEluZGljYXRvcih0aGlzLCBpbmRpY2F0b3JzW2ldKSApO1xuXHRcdH1cblxuXHRcdC8vIFRPRE86IGNoZWNrIGlmIHdlIGNhbiB1c2UgYXJyYXkubWFwICh3aWRlIGNvbXBhdGliaWxpdHkgYW5kIHBlcmZvcm1hbmNlIGlzc3Vlcylcblx0XHRmdW5jdGlvbiBfaW5kaWNhdG9yc01hcCAoZm4pIHtcblx0XHRcdGlmICh0aGF0LmluZGljYXRvcnMpIHtcblx0XHRcdFx0Zm9yICggdmFyIGkgPSB0aGF0LmluZGljYXRvcnMubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdGZuLmNhbGwodGhhdC5pbmRpY2F0b3JzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmZhZGVTY3JvbGxiYXJzICkge1xuXHRcdFx0dGhpcy5vbignc2Nyb2xsRW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRfaW5kaWNhdG9yc01hcChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5mYWRlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMub24oJ3Njcm9sbENhbmNlbCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0X2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHRoaXMuZmFkZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLm9uKCdzY3JvbGxTdGFydCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0X2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHRoaXMuZmFkZSgxKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5vbignYmVmb3JlU2Nyb2xsU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdF9pbmRpY2F0b3JzTWFwKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aGlzLmZhZGUoMSwgdHJ1ZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cblx0XHR0aGlzLm9uKCdyZWZyZXNoJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0X2luZGljYXRvcnNNYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aGlzLnJlZnJlc2goKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdF9pbmRpY2F0b3JzTWFwKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZGVsZXRlIHRoaXMuaW5kaWNhdG9ycztcblx0XHR9KTtcblx0fSxcblxuXHRfaW5pdFpvb206IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnNjcm9sbGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNmb3JtT3JpZ2luXSA9ICcwIDAnO1xuXHR9LFxuXG5cdF96b29tU3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIGMxID0gTWF0aC5hYnMoIGUudG91Y2hlc1swXS5wYWdlWCAtIGUudG91Y2hlc1sxXS5wYWdlWCApLFxuXHRcdFx0YzIgPSBNYXRoLmFicyggZS50b3VjaGVzWzBdLnBhZ2VZIC0gZS50b3VjaGVzWzFdLnBhZ2VZICk7XG5cblx0XHR0aGlzLnRvdWNoZXNEaXN0YW5jZVN0YXJ0ID0gTWF0aC5zcXJ0KGMxICogYzEgKyBjMiAqIGMyKTtcblx0XHR0aGlzLnN0YXJ0U2NhbGUgPSB0aGlzLnNjYWxlO1xuXG5cdFx0dGhpcy5vcmlnaW5YID0gTWF0aC5hYnMoZS50b3VjaGVzWzBdLnBhZ2VYICsgZS50b3VjaGVzWzFdLnBhZ2VYKSAvIDIgKyB0aGlzLndyYXBwZXJPZmZzZXQubGVmdCAtIHRoaXMueDtcblx0XHR0aGlzLm9yaWdpblkgPSBNYXRoLmFicyhlLnRvdWNoZXNbMF0ucGFnZVkgKyBlLnRvdWNoZXNbMV0ucGFnZVkpIC8gMiArIHRoaXMud3JhcHBlck9mZnNldC50b3AgLSB0aGlzLnk7XG5cblx0XHR0aGlzLl9leGVjRXZlbnQoJ3pvb21TdGFydCcpO1xuXHR9LFxuXG5cdF96b29tOiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICggIXRoaXMuZW5hYmxlZCB8fCB1dGlscy5ldmVudFR5cGVbZS50eXBlXSAhPT0gdGhpcy5pbml0aWF0ZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0dmFyIGMxID0gTWF0aC5hYnMoIGUudG91Y2hlc1swXS5wYWdlWCAtIGUudG91Y2hlc1sxXS5wYWdlWCApLFxuXHRcdFx0YzIgPSBNYXRoLmFicyggZS50b3VjaGVzWzBdLnBhZ2VZIC0gZS50b3VjaGVzWzFdLnBhZ2VZICksXG5cdFx0XHRkaXN0YW5jZSA9IE1hdGguc3FydCggYzEgKiBjMSArIGMyICogYzIgKSxcblx0XHRcdHNjYWxlID0gMSAvIHRoaXMudG91Y2hlc0Rpc3RhbmNlU3RhcnQgKiBkaXN0YW5jZSAqIHRoaXMuc3RhcnRTY2FsZSxcblx0XHRcdGxhc3RTY2FsZSxcblx0XHRcdHgsIHk7XG5cblx0XHR0aGlzLnNjYWxlZCA9IHRydWU7XG5cblx0XHRpZiAoIHNjYWxlIDwgdGhpcy5vcHRpb25zLnpvb21NaW4gKSB7XG5cdFx0XHRzY2FsZSA9IDAuNSAqIHRoaXMub3B0aW9ucy56b29tTWluICogTWF0aC5wb3coMi4wLCBzY2FsZSAvIHRoaXMub3B0aW9ucy56b29tTWluKTtcblx0XHR9IGVsc2UgaWYgKCBzY2FsZSA+IHRoaXMub3B0aW9ucy56b29tTWF4ICkge1xuXHRcdFx0c2NhbGUgPSAyLjAgKiB0aGlzLm9wdGlvbnMuem9vbU1heCAqIE1hdGgucG93KDAuNSwgdGhpcy5vcHRpb25zLnpvb21NYXggLyBzY2FsZSk7XG5cdFx0fVxuXG5cdFx0bGFzdFNjYWxlID0gc2NhbGUgLyB0aGlzLnN0YXJ0U2NhbGU7XG5cdFx0eCA9IHRoaXMub3JpZ2luWCAtIHRoaXMub3JpZ2luWCAqIGxhc3RTY2FsZSArIHRoaXMuc3RhcnRYO1xuXHRcdHkgPSB0aGlzLm9yaWdpblkgLSB0aGlzLm9yaWdpblkgKiBsYXN0U2NhbGUgKyB0aGlzLnN0YXJ0WTtcblxuXHRcdHRoaXMuc2NhbGUgPSBzY2FsZTtcblxuXHRcdHRoaXMuc2Nyb2xsVG8oeCwgeSwgMCk7XG5cdH0sXG5cblx0X3pvb21FbmQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkIHx8IHV0aWxzLmV2ZW50VHlwZVtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3WCwgbmV3WSxcblx0XHRcdGxhc3RTY2FsZTtcblxuXHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSAwO1xuXHRcdHRoaXMuaW5pdGlhdGVkID0gMDtcblxuXHRcdGlmICggdGhpcy5zY2FsZSA+IHRoaXMub3B0aW9ucy56b29tTWF4ICkge1xuXHRcdFx0dGhpcy5zY2FsZSA9IHRoaXMub3B0aW9ucy56b29tTWF4O1xuXHRcdH0gZWxzZSBpZiAoIHRoaXMuc2NhbGUgPCB0aGlzLm9wdGlvbnMuem9vbU1pbiApIHtcblx0XHRcdHRoaXMuc2NhbGUgPSB0aGlzLm9wdGlvbnMuem9vbU1pbjtcblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgYm91bmRhcmllc1xuXHRcdHRoaXMucmVmcmVzaCgpO1xuXG5cdFx0bGFzdFNjYWxlID0gdGhpcy5zY2FsZSAvIHRoaXMuc3RhcnRTY2FsZTtcblxuXHRcdG5ld1ggPSB0aGlzLm9yaWdpblggLSB0aGlzLm9yaWdpblggKiBsYXN0U2NhbGUgKyB0aGlzLnN0YXJ0WDtcblx0XHRuZXdZID0gdGhpcy5vcmlnaW5ZIC0gdGhpcy5vcmlnaW5ZICogbGFzdFNjYWxlICsgdGhpcy5zdGFydFk7XG5cblx0XHRpZiAoIG5ld1ggPiAwICkge1xuXHRcdFx0bmV3WCA9IDA7XG5cdFx0fSBlbHNlIGlmICggbmV3WCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcblx0XHRcdG5ld1ggPSB0aGlzLm1heFNjcm9sbFg7XG5cdFx0fVxuXG5cdFx0aWYgKCBuZXdZID4gMCApIHtcblx0XHRcdG5ld1kgPSAwO1xuXHRcdH0gZWxzZSBpZiAoIG5ld1kgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG5cdFx0XHRuZXdZID0gdGhpcy5tYXhTY3JvbGxZO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy54ICE9IG5ld1ggfHwgdGhpcy55ICE9IG5ld1kgKSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRvKG5ld1gsIG5ld1ksIHRoaXMub3B0aW9ucy5ib3VuY2VUaW1lKTtcblx0XHR9XG5cblx0XHR0aGlzLnNjYWxlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fZXhlY0V2ZW50KCd6b29tRW5kJyk7XG5cdH0sXG5cblx0em9vbTogZnVuY3Rpb24gKHNjYWxlLCB4LCB5LCB0aW1lKSB7XG5cdFx0aWYgKCBzY2FsZSA8IHRoaXMub3B0aW9ucy56b29tTWluICkge1xuXHRcdFx0c2NhbGUgPSB0aGlzLm9wdGlvbnMuem9vbU1pbjtcblx0XHR9IGVsc2UgaWYgKCBzY2FsZSA+IHRoaXMub3B0aW9ucy56b29tTWF4ICkge1xuXHRcdFx0c2NhbGUgPSB0aGlzLm9wdGlvbnMuem9vbU1heDtcblx0XHR9XG5cblx0XHRpZiAoIHNjYWxlID09IHRoaXMuc2NhbGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHJlbFNjYWxlID0gc2NhbGUgLyB0aGlzLnNjYWxlO1xuXG5cdFx0eCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMud3JhcHBlcldpZHRoIC8gMiA6IHg7XG5cdFx0eSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMud3JhcHBlckhlaWdodCAvIDIgOiB5O1xuXHRcdHRpbWUgPSB0aW1lID09PSB1bmRlZmluZWQgPyAzMDAgOiB0aW1lO1xuXG5cdFx0eCA9IHggKyB0aGlzLndyYXBwZXJPZmZzZXQubGVmdCAtIHRoaXMueDtcblx0XHR5ID0geSArIHRoaXMud3JhcHBlck9mZnNldC50b3AgLSB0aGlzLnk7XG5cblx0XHR4ID0geCAtIHggKiByZWxTY2FsZSArIHRoaXMueDtcblx0XHR5ID0geSAtIHkgKiByZWxTY2FsZSArIHRoaXMueTtcblxuXHRcdHRoaXMuc2NhbGUgPSBzY2FsZTtcblxuXHRcdHRoaXMucmVmcmVzaCgpO1x0XHQvLyB1cGRhdGUgYm91bmRhcmllc1xuXG5cdFx0aWYgKCB4ID4gMCApIHtcblx0XHRcdHggPSAwO1xuXHRcdH0gZWxzZSBpZiAoIHggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHR4ID0gdGhpcy5tYXhTY3JvbGxYO1xuXHRcdH1cblxuXHRcdGlmICggeSA+IDAgKSB7XG5cdFx0XHR5ID0gMDtcblx0XHR9IGVsc2UgaWYgKCB5IDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0eSA9IHRoaXMubWF4U2Nyb2xsWTtcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFRvKHgsIHksIHRpbWUpO1xuXHR9LFxuXG5cdF93aGVlbFpvb206IGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIHdoZWVsRGVsdGFZLFxuXHRcdFx0ZGVsdGFTY2FsZSxcblx0XHRcdHRoYXQgPSB0aGlzO1xuXG5cdFx0Ly8gRXhlY3V0ZSB0aGUgem9vbUVuZCBldmVudCBhZnRlciA0MDBtcyB0aGUgd2hlZWwgc3RvcHBlZCBzY3JvbGxpbmdcblx0XHRjbGVhclRpbWVvdXQodGhpcy53aGVlbFRpbWVvdXQpO1xuXHRcdHRoaXMud2hlZWxUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGF0Ll9leGVjRXZlbnQoJ3pvb21FbmQnKTtcblx0XHR9LCA0MDApO1xuXG5cdFx0aWYgKCAnZGVsdGFYJyBpbiBlICkge1xuXHRcdFx0d2hlZWxEZWx0YVkgPSAtZS5kZWx0YVkgLyBNYXRoLmFicyhlLmRlbHRhWSk7XG5cdFx0fSBlbHNlIGlmICgnd2hlZWxEZWx0YVgnIGluIGUpIHtcblx0XHRcdHdoZWVsRGVsdGFZID0gZS53aGVlbERlbHRhWSAvIE1hdGguYWJzKGUud2hlZWxEZWx0YVkpO1xuXHRcdH0gZWxzZSBpZignd2hlZWxEZWx0YScgaW4gZSkge1xuXHRcdFx0d2hlZWxEZWx0YVkgPSBlLndoZWVsRGVsdGEgLyBNYXRoLmFicyhlLndoZWVsRGVsdGEpO1xuXHRcdH0gZWxzZSBpZiAoJ2RldGFpbCcgaW4gZSkge1xuXHRcdFx0d2hlZWxEZWx0YVkgPSAtZS5kZXRhaWwgLyBNYXRoLmFicyhlLndoZWVsRGVsdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZGVsdGFTY2FsZSA9IHRoaXMuc2NhbGUgKyB3aGVlbERlbHRhWSAvIDU7XG5cblx0XHR0aGlzLnpvb20oZGVsdGFTY2FsZSwgZS5wYWdlWCwgZS5wYWdlWSwgMCk7XG5cdH0sXG5cblx0X2luaXRXaGVlbDogZnVuY3Rpb24gKCkge1xuXHRcdHV0aWxzLmFkZEV2ZW50KHRoaXMud3JhcHBlciwgJ3doZWVsJywgdGhpcyk7XG5cdFx0dXRpbHMuYWRkRXZlbnQodGhpcy53cmFwcGVyLCAnbW91c2V3aGVlbCcsIHRoaXMpO1xuXHRcdHV0aWxzLmFkZEV2ZW50KHRoaXMud3JhcHBlciwgJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcyk7XG5cblx0XHR0aGlzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMud2hlZWxUaW1lb3V0KTtcblx0XHRcdHRoaXMud2hlZWxUaW1lb3V0ID0gbnVsbDtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHRoaXMud3JhcHBlciwgJ3doZWVsJywgdGhpcyk7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh0aGlzLndyYXBwZXIsICdtb3VzZXdoZWVsJywgdGhpcyk7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh0aGlzLndyYXBwZXIsICdET01Nb3VzZVNjcm9sbCcsIHRoaXMpO1xuXHRcdH0pO1xuXHR9LFxuXG5cdF93aGVlbDogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoICF0aGlzLmVuYWJsZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyIHdoZWVsRGVsdGFYLCB3aGVlbERlbHRhWSxcblx0XHRcdG5ld1gsIG5ld1ksXG5cdFx0XHR0aGF0ID0gdGhpcztcblxuXHRcdGlmICggdGhpcy53aGVlbFRpbWVvdXQgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHRoYXQuX2V4ZWNFdmVudCgnc2Nyb2xsU3RhcnQnKTtcblx0XHR9XG5cblx0XHQvLyBFeGVjdXRlIHRoZSBzY3JvbGxFbmQgZXZlbnQgYWZ0ZXIgNDAwbXMgdGhlIHdoZWVsIHN0b3BwZWQgc2Nyb2xsaW5nXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMud2hlZWxUaW1lb3V0KTtcblx0XHR0aGlzLndoZWVsVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYoIXRoYXQub3B0aW9ucy5zbmFwKSB7XG5cdFx0XHRcdHRoYXQuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGF0LndoZWVsVGltZW91dCA9IHVuZGVmaW5lZDtcblx0XHR9LCA0MDApO1xuXG5cdFx0aWYgKCAnZGVsdGFYJyBpbiBlICkge1xuXHRcdFx0aWYgKGUuZGVsdGFNb2RlID09PSAxKSB7XG5cdFx0XHRcdHdoZWVsRGVsdGFYID0gLWUuZGVsdGFYICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcblx0XHRcdFx0d2hlZWxEZWx0YVkgPSAtZS5kZWx0YVkgKiB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2hlZWxEZWx0YVggPSAtZS5kZWx0YVg7XG5cdFx0XHRcdHdoZWVsRGVsdGFZID0gLWUuZGVsdGFZO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoICd3aGVlbERlbHRhWCcgaW4gZSApIHtcblx0XHRcdHdoZWVsRGVsdGFYID0gZS53aGVlbERlbHRhWCAvIDEyMCAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG5cdFx0XHR3aGVlbERlbHRhWSA9IGUud2hlZWxEZWx0YVkgLyAxMjAgKiB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoICd3aGVlbERlbHRhJyBpbiBlICkge1xuXHRcdFx0d2hlZWxEZWx0YVggPSB3aGVlbERlbHRhWSA9IGUud2hlZWxEZWx0YSAvIDEyMCAqIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7XG5cdFx0fSBlbHNlIGlmICggJ2RldGFpbCcgaW4gZSApIHtcblx0XHRcdHdoZWVsRGVsdGFYID0gd2hlZWxEZWx0YVkgPSAtZS5kZXRhaWwgLyAzICogdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxTcGVlZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdoZWVsRGVsdGFYICo9IHRoaXMub3B0aW9ucy5pbnZlcnRXaGVlbERpcmVjdGlvbjtcblx0XHR3aGVlbERlbHRhWSAqPSB0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb247XG5cblx0XHRpZiAoICF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuXHRcdFx0d2hlZWxEZWx0YVggPSB3aGVlbERlbHRhWTtcblx0XHRcdHdoZWVsRGVsdGFZID0gMDtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5zbmFwICkge1xuXHRcdFx0bmV3WCA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVg7XG5cdFx0XHRuZXdZID0gdGhpcy5jdXJyZW50UGFnZS5wYWdlWTtcblxuXHRcdFx0aWYgKCB3aGVlbERlbHRhWCA+IDAgKSB7XG5cdFx0XHRcdG5ld1gtLTtcblx0XHRcdH0gZWxzZSBpZiAoIHdoZWVsRGVsdGFYIDwgMCApIHtcblx0XHRcdFx0bmV3WCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHdoZWVsRGVsdGFZID4gMCApIHtcblx0XHRcdFx0bmV3WS0tO1xuXHRcdFx0fSBlbHNlIGlmICggd2hlZWxEZWx0YVkgPCAwICkge1xuXHRcdFx0XHRuZXdZKys7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZ29Ub1BhZ2UobmV3WCwgbmV3WSk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRuZXdYID0gdGhpcy54ICsgTWF0aC5yb3VuZCh0aGlzLmhhc0hvcml6b250YWxTY3JvbGwgPyB3aGVlbERlbHRhWCA6IDApO1xuXHRcdG5ld1kgPSB0aGlzLnkgKyBNYXRoLnJvdW5kKHRoaXMuaGFzVmVydGljYWxTY3JvbGwgPyB3aGVlbERlbHRhWSA6IDApO1xuXG5cdFx0dGhpcy5kaXJlY3Rpb25YID0gd2hlZWxEZWx0YVggPiAwID8gLTEgOiB3aGVlbERlbHRhWCA8IDAgPyAxIDogMDtcblx0XHR0aGlzLmRpcmVjdGlvblkgPSB3aGVlbERlbHRhWSA+IDAgPyAtMSA6IHdoZWVsRGVsdGFZIDwgMCA/IDEgOiAwO1xuXG5cdFx0aWYgKCBuZXdYID4gMCApIHtcblx0XHRcdG5ld1ggPSAwO1xuXHRcdH0gZWxzZSBpZiAoIG5ld1ggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHRuZXdYID0gdGhpcy5tYXhTY3JvbGxYO1xuXHRcdH1cblxuXHRcdGlmICggbmV3WSA+IDAgKSB7XG5cdFx0XHRuZXdZID0gMDtcblx0XHR9IGVsc2UgaWYgKCBuZXdZIDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0bmV3WSA9IHRoaXMubWF4U2Nyb2xsWTtcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFRvKG5ld1gsIG5ld1ksIDApO1xuXG4vLyBJTlNFUlQgUE9JTlQ6IF93aGVlbFxuXHR9LFxuXG5cdF9pbml0U25hcDogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY3VycmVudFBhZ2UgPSB7fTtcblxuXHRcdGlmICggdHlwZW9mIHRoaXMub3B0aW9ucy5zbmFwID09ICdzdHJpbmcnICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnNuYXAgPSB0aGlzLnNjcm9sbGVyLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5vcHRpb25zLnNuYXApO1xuXHRcdH1cblxuXHRcdHRoaXMub24oJ3JlZnJlc2gnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgaSA9IDAsIGwsXG5cdFx0XHRcdG0gPSAwLCBuLFxuXHRcdFx0XHRjeCwgY3ksXG5cdFx0XHRcdHggPSAwLCB5LFxuXHRcdFx0XHRzdGVwWCA9IHRoaXMub3B0aW9ucy5zbmFwU3RlcFggfHwgdGhpcy53cmFwcGVyV2lkdGgsXG5cdFx0XHRcdHN0ZXBZID0gdGhpcy5vcHRpb25zLnNuYXBTdGVwWSB8fCB0aGlzLndyYXBwZXJIZWlnaHQsXG5cdFx0XHRcdGVsO1xuXG5cdFx0XHR0aGlzLnBhZ2VzID0gW107XG5cblx0XHRcdGlmICggIXRoaXMud3JhcHBlcldpZHRoIHx8ICF0aGlzLndyYXBwZXJIZWlnaHQgfHwgIXRoaXMuc2Nyb2xsZXJXaWR0aCB8fCAhdGhpcy5zY3JvbGxlckhlaWdodCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zbmFwID09PSB0cnVlICkge1xuXHRcdFx0XHRjeCA9IE1hdGgucm91bmQoIHN0ZXBYIC8gMiApO1xuXHRcdFx0XHRjeSA9IE1hdGgucm91bmQoIHN0ZXBZIC8gMiApO1xuXG5cdFx0XHRcdHdoaWxlICggeCA+IC10aGlzLnNjcm9sbGVyV2lkdGggKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlc1tpXSA9IFtdO1xuXHRcdFx0XHRcdGwgPSAwO1xuXHRcdFx0XHRcdHkgPSAwO1xuXG5cdFx0XHRcdFx0d2hpbGUgKCB5ID4gLXRoaXMuc2Nyb2xsZXJIZWlnaHQgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VzW2ldW2xdID0ge1xuXHRcdFx0XHRcdFx0XHR4OiBNYXRoLm1heCh4LCB0aGlzLm1heFNjcm9sbFgpLFxuXHRcdFx0XHRcdFx0XHR5OiBNYXRoLm1heCh5LCB0aGlzLm1heFNjcm9sbFkpLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogc3RlcFgsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogc3RlcFksXG5cdFx0XHRcdFx0XHRcdGN4OiB4IC0gY3gsXG5cdFx0XHRcdFx0XHRcdGN5OiB5IC0gY3lcblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdHkgLT0gc3RlcFk7XG5cdFx0XHRcdFx0XHRsKys7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0eCAtPSBzdGVwWDtcblx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsID0gdGhpcy5vcHRpb25zLnNuYXA7XG5cdFx0XHRcdGwgPSBlbC5sZW5ndGg7XG5cdFx0XHRcdG4gPSAtMTtcblxuXHRcdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBpID09PSAwIHx8IGVsW2ldLm9mZnNldExlZnQgPD0gZWxbaS0xXS5vZmZzZXRMZWZ0ICkge1xuXHRcdFx0XHRcdFx0bSA9IDA7XG5cdFx0XHRcdFx0XHRuKys7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCAhdGhpcy5wYWdlc1ttXSApIHtcblx0XHRcdFx0XHRcdHRoaXMucGFnZXNbbV0gPSBbXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR4ID0gTWF0aC5tYXgoLWVsW2ldLm9mZnNldExlZnQsIHRoaXMubWF4U2Nyb2xsWCk7XG5cdFx0XHRcdFx0eSA9IE1hdGgubWF4KC1lbFtpXS5vZmZzZXRUb3AsIHRoaXMubWF4U2Nyb2xsWSk7XG5cdFx0XHRcdFx0Y3ggPSB4IC0gTWF0aC5yb3VuZChlbFtpXS5vZmZzZXRXaWR0aCAvIDIpO1xuXHRcdFx0XHRcdGN5ID0geSAtIE1hdGgucm91bmQoZWxbaV0ub2Zmc2V0SGVpZ2h0IC8gMik7XG5cblx0XHRcdFx0XHR0aGlzLnBhZ2VzW21dW25dID0ge1xuXHRcdFx0XHRcdFx0eDogeCxcblx0XHRcdFx0XHRcdHk6IHksXG5cdFx0XHRcdFx0XHR3aWR0aDogZWxbaV0ub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGVsW2ldLm9mZnNldEhlaWdodCxcblx0XHRcdFx0XHRcdGN4OiBjeCxcblx0XHRcdFx0XHRcdGN5OiBjeVxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRpZiAoIHggPiB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHRcdFx0XHRtKys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZS5wYWdlWCB8fCAwLCB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZIHx8IDAsIDApO1xuXG5cdFx0XHQvLyBVcGRhdGUgc25hcCB0aHJlc2hvbGQgaWYgbmVlZGVkXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkICUgMSA9PT0gMCApIHtcblx0XHRcdFx0dGhpcy5zbmFwVGhyZXNob2xkWCA9IHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkO1xuXHRcdFx0XHR0aGlzLnNuYXBUaHJlc2hvbGRZID0gdGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNuYXBUaHJlc2hvbGRYID0gTWF0aC5yb3VuZCh0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2UucGFnZVhdW3RoaXMuY3VycmVudFBhZ2UucGFnZVldLndpZHRoICogdGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQpO1xuXHRcdFx0XHR0aGlzLnNuYXBUaHJlc2hvbGRZID0gTWF0aC5yb3VuZCh0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2UucGFnZVhdW3RoaXMuY3VycmVudFBhZ2UucGFnZVldLmhlaWdodCAqIHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ2ZsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHRpbWUgPSB0aGlzLm9wdGlvbnMuc25hcFNwZWVkIHx8IE1hdGgubWF4KFxuXHRcdFx0XHRcdE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnModGhpcy54IC0gdGhpcy5zdGFydFgpLCAxMDAwKSxcblx0XHRcdFx0XHRcdE1hdGgubWluKE1hdGguYWJzKHRoaXMueSAtIHRoaXMuc3RhcnRZKSwgMTAwMClcblx0XHRcdFx0XHQpLCAzMDApO1xuXG5cdFx0XHR0aGlzLmdvVG9QYWdlKFxuXHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYICsgdGhpcy5kaXJlY3Rpb25YLFxuXHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZICsgdGhpcy5kaXJlY3Rpb25ZLFxuXHRcdFx0XHR0aW1lXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9LFxuXG5cdF9uZWFyZXN0U25hcDogZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRpZiAoICF0aGlzLnBhZ2VzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB7IHg6IDAsIHk6IDAsIHBhZ2VYOiAwLCBwYWdlWTogMCB9O1xuXHRcdH1cblxuXHRcdHZhciBpID0gMCxcblx0XHRcdGwgPSB0aGlzLnBhZ2VzLmxlbmd0aCxcblx0XHRcdG0gPSAwO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UgZXhjZWVkZWQgdGhlIHNuYXAgdGhyZXNob2xkXG5cdFx0aWYgKCBNYXRoLmFicyh4IC0gdGhpcy5hYnNTdGFydFgpIDwgdGhpcy5zbmFwVGhyZXNob2xkWCAmJlxuXHRcdFx0TWF0aC5hYnMoeSAtIHRoaXMuYWJzU3RhcnRZKSA8IHRoaXMuc25hcFRocmVzaG9sZFkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJyZW50UGFnZTtcblx0XHR9XG5cblx0XHRpZiAoIHggPiAwICkge1xuXHRcdFx0eCA9IDA7XG5cdFx0fSBlbHNlIGlmICggeCA8IHRoaXMubWF4U2Nyb2xsWCApIHtcblx0XHRcdHggPSB0aGlzLm1heFNjcm9sbFg7XG5cdFx0fVxuXG5cdFx0aWYgKCB5ID4gMCApIHtcblx0XHRcdHkgPSAwO1xuXHRcdH0gZWxzZSBpZiAoIHkgPCB0aGlzLm1heFNjcm9sbFkgKSB7XG5cdFx0XHR5ID0gdGhpcy5tYXhTY3JvbGxZO1xuXHRcdH1cblxuXHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdGlmICggeCA+PSB0aGlzLnBhZ2VzW2ldWzBdLmN4ICkge1xuXHRcdFx0XHR4ID0gdGhpcy5wYWdlc1tpXVswXS54O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsID0gdGhpcy5wYWdlc1tpXS5sZW5ndGg7XG5cblx0XHRmb3IgKCA7IG0gPCBsOyBtKysgKSB7XG5cdFx0XHRpZiAoIHkgPj0gdGhpcy5wYWdlc1swXVttXS5jeSApIHtcblx0XHRcdFx0eSA9IHRoaXMucGFnZXNbMF1bbV0ueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBpID09IHRoaXMuY3VycmVudFBhZ2UucGFnZVggKSB7XG5cdFx0XHRpICs9IHRoaXMuZGlyZWN0aW9uWDtcblxuXHRcdFx0aWYgKCBpIDwgMCApIHtcblx0XHRcdFx0aSA9IDA7XG5cdFx0XHR9IGVsc2UgaWYgKCBpID49IHRoaXMucGFnZXMubGVuZ3RoICkge1xuXHRcdFx0XHRpID0gdGhpcy5wYWdlcy5sZW5ndGggLSAxO1xuXHRcdFx0fVxuXG5cdFx0XHR4ID0gdGhpcy5wYWdlc1tpXVswXS54O1xuXHRcdH1cblxuXHRcdGlmICggbSA9PSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZICkge1xuXHRcdFx0bSArPSB0aGlzLmRpcmVjdGlvblk7XG5cblx0XHRcdGlmICggbSA8IDAgKSB7XG5cdFx0XHRcdG0gPSAwO1xuXHRcdFx0fSBlbHNlIGlmICggbSA+PSB0aGlzLnBhZ2VzWzBdLmxlbmd0aCApIHtcblx0XHRcdFx0bSA9IHRoaXMucGFnZXNbMF0ubGVuZ3RoIC0gMTtcblx0XHRcdH1cblxuXHRcdFx0eSA9IHRoaXMucGFnZXNbMF1bbV0ueTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0eDogeCxcblx0XHRcdHk6IHksXG5cdFx0XHRwYWdlWDogaSxcblx0XHRcdHBhZ2VZOiBtXG5cdFx0fTtcblx0fSxcblxuXHRnb1RvUGFnZTogZnVuY3Rpb24gKHgsIHksIHRpbWUsIGVhc2luZykge1xuXHRcdGVhc2luZyA9IGVhc2luZyB8fCB0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nO1xuXG5cdFx0aWYgKCB4ID49IHRoaXMucGFnZXMubGVuZ3RoICkge1xuXHRcdFx0eCA9IHRoaXMucGFnZXMubGVuZ3RoIC0gMTtcblx0XHR9IGVsc2UgaWYgKCB4IDwgMCApIHtcblx0XHRcdHggPSAwO1xuXHRcdH1cblxuXHRcdGlmICggeSA+PSB0aGlzLnBhZ2VzW3hdLmxlbmd0aCApIHtcblx0XHRcdHkgPSB0aGlzLnBhZ2VzW3hdLmxlbmd0aCAtIDE7XG5cdFx0fSBlbHNlIGlmICggeSA8IDAgKSB7XG5cdFx0XHR5ID0gMDtcblx0XHR9XG5cblx0XHR2YXIgcG9zWCA9IHRoaXMucGFnZXNbeF1beV0ueCxcblx0XHRcdHBvc1kgPSB0aGlzLnBhZ2VzW3hdW3ldLnk7XG5cblx0XHR0aW1lID0gdGltZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLnNuYXBTcGVlZCB8fCBNYXRoLm1heChcblx0XHRcdE1hdGgubWF4KFxuXHRcdFx0XHRNYXRoLm1pbihNYXRoLmFicyhwb3NYIC0gdGhpcy54KSwgMTAwMCksXG5cdFx0XHRcdE1hdGgubWluKE1hdGguYWJzKHBvc1kgLSB0aGlzLnkpLCAxMDAwKVxuXHRcdFx0KSwgMzAwKSA6IHRpbWU7XG5cblx0XHR0aGlzLmN1cnJlbnRQYWdlID0ge1xuXHRcdFx0eDogcG9zWCxcblx0XHRcdHk6IHBvc1ksXG5cdFx0XHRwYWdlWDogeCxcblx0XHRcdHBhZ2VZOiB5XG5cdFx0fTtcblxuXHRcdHRoaXMuc2Nyb2xsVG8ocG9zWCwgcG9zWSwgdGltZSwgZWFzaW5nKTtcblx0fSxcblxuXHRuZXh0OiBmdW5jdGlvbiAodGltZSwgZWFzaW5nKSB7XG5cdFx0dmFyIHggPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYLFxuXHRcdFx0eSA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVk7XG5cblx0XHR4Kys7XG5cblx0XHRpZiAoIHggPj0gdGhpcy5wYWdlcy5sZW5ndGggJiYgdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCApIHtcblx0XHRcdHggPSAwO1xuXHRcdFx0eSsrO1xuXHRcdH1cblxuXHRcdHRoaXMuZ29Ub1BhZ2UoeCwgeSwgdGltZSwgZWFzaW5nKTtcblx0fSxcblxuXHRwcmV2OiBmdW5jdGlvbiAodGltZSwgZWFzaW5nKSB7XG5cdFx0dmFyIHggPSB0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYLFxuXHRcdFx0eSA9IHRoaXMuY3VycmVudFBhZ2UucGFnZVk7XG5cblx0XHR4LS07XG5cblx0XHRpZiAoIHggPCAwICYmIHRoaXMuaGFzVmVydGljYWxTY3JvbGwgKSB7XG5cdFx0XHR4ID0gMDtcblx0XHRcdHktLTtcblx0XHR9XG5cblx0XHR0aGlzLmdvVG9QYWdlKHgsIHksIHRpbWUsIGVhc2luZyk7XG5cdH0sXG5cblx0X2luaXRLZXlzOiBmdW5jdGlvbiAoZSkge1xuXHRcdC8vIGRlZmF1bHQga2V5IGJpbmRpbmdzXG5cdFx0dmFyIGtleXMgPSB7XG5cdFx0XHRwYWdlVXA6IDMzLFxuXHRcdFx0cGFnZURvd246IDM0LFxuXHRcdFx0ZW5kOiAzNSxcblx0XHRcdGhvbWU6IDM2LFxuXHRcdFx0bGVmdDogMzcsXG5cdFx0XHR1cDogMzgsXG5cdFx0XHRyaWdodDogMzksXG5cdFx0XHRkb3duOiA0MFxuXHRcdH07XG5cdFx0dmFyIGk7XG5cblx0XHQvLyBpZiB5b3UgZ2l2ZSBtZSBjaGFyYWN0ZXJzIEkgZ2l2ZSB5b3Uga2V5Y29kZVxuXHRcdGlmICggdHlwZW9mIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncyA9PSAnb2JqZWN0JyApIHtcblx0XHRcdGZvciAoIGkgaW4gdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzICkge1xuXHRcdFx0XHRpZiAoIHR5cGVvZiB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV0gPT0gJ3N0cmluZycgKSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldID0gdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MgPSB7fTtcblx0XHR9XG5cblx0XHRmb3IgKCBpIGluIGtleXMgKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV0gPSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV0gfHwga2V5c1tpXTtcblx0XHR9XG5cblx0XHR1dGlscy5hZGRFdmVudCh3aW5kb3csICdrZXlkb3duJywgdGhpcyk7XG5cblx0XHR0aGlzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCAna2V5ZG93bicsIHRoaXMpO1xuXHRcdH0pO1xuXHR9LFxuXG5cdF9rZXk6IGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKCAhdGhpcy5lbmFibGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBzbmFwID0gdGhpcy5vcHRpb25zLnNuYXAsXHQvLyB3ZSBhcmUgdXNpbmcgdGhpcyBhbG90LCBiZXR0ZXIgdG8gY2FjaGUgaXRcblx0XHRcdG5ld1ggPSBzbmFwID8gdGhpcy5jdXJyZW50UGFnZS5wYWdlWCA6IHRoaXMueCxcblx0XHRcdG5ld1kgPSBzbmFwID8gdGhpcy5jdXJyZW50UGFnZS5wYWdlWSA6IHRoaXMueSxcblx0XHRcdG5vdyA9IHV0aWxzLmdldFRpbWUoKSxcblx0XHRcdHByZXZUaW1lID0gdGhpcy5rZXlUaW1lIHx8IDAsXG5cdFx0XHRhY2NlbGVyYXRpb24gPSAwLjI1MCxcblx0XHRcdHBvcztcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24gJiYgdGhpcy5pc0luVHJhbnNpdGlvbiApIHtcblx0XHRcdHBvcyA9IHRoaXMuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xuXG5cdFx0XHR0aGlzLl90cmFuc2xhdGUoTWF0aC5yb3VuZChwb3MueCksIE1hdGgucm91bmQocG9zLnkpKTtcblx0XHRcdHRoaXMuaXNJblRyYW5zaXRpb24gPSBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmtleUFjY2VsZXJhdGlvbiA9IG5vdyAtIHByZXZUaW1lIDwgMjAwID8gTWF0aC5taW4odGhpcy5rZXlBY2NlbGVyYXRpb24gKyBhY2NlbGVyYXRpb24sIDUwKSA6IDA7XG5cblx0XHRzd2l0Y2ggKCBlLmtleUNvZGUgKSB7XG5cdFx0XHRjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5wYWdlVXA6XG5cdFx0XHRcdGlmICggdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsICYmICF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuXHRcdFx0XHRcdG5ld1ggKz0gc25hcCA/IDEgOiB0aGlzLndyYXBwZXJXaWR0aDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRuZXdZICs9IHNuYXAgPyAxIDogdGhpcy53cmFwcGVySGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MucGFnZURvd246XG5cdFx0XHRcdGlmICggdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsICYmICF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuXHRcdFx0XHRcdG5ld1ggLT0gc25hcCA/IDEgOiB0aGlzLndyYXBwZXJXaWR0aDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRuZXdZIC09IHNuYXAgPyAxIDogdGhpcy53cmFwcGVySGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MuZW5kOlxuXHRcdFx0XHRuZXdYID0gc25hcCA/IHRoaXMucGFnZXMubGVuZ3RoLTEgOiB0aGlzLm1heFNjcm9sbFg7XG5cdFx0XHRcdG5ld1kgPSBzbmFwID8gdGhpcy5wYWdlc1swXS5sZW5ndGgtMSA6IHRoaXMubWF4U2Nyb2xsWTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5ob21lOlxuXHRcdFx0XHRuZXdYID0gMDtcblx0XHRcdFx0bmV3WSA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MubGVmdDpcblx0XHRcdFx0bmV3WCArPSBzbmFwID8gLTEgOiA1ICsgdGhpcy5rZXlBY2NlbGVyYXRpb24+PjA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MudXA6XG5cdFx0XHRcdG5ld1kgKz0gc25hcCA/IDEgOiA1ICsgdGhpcy5rZXlBY2NlbGVyYXRpb24+PjA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MucmlnaHQ6XG5cdFx0XHRcdG5ld1ggLT0gc25hcCA/IC0xIDogNSArIHRoaXMua2V5QWNjZWxlcmF0aW9uPj4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLmRvd246XG5cdFx0XHRcdG5ld1kgLT0gc25hcCA/IDEgOiA1ICsgdGhpcy5rZXlBY2NlbGVyYXRpb24+PjA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggc25hcCApIHtcblx0XHRcdHRoaXMuZ29Ub1BhZ2UobmV3WCwgbmV3WSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBuZXdYID4gMCApIHtcblx0XHRcdG5ld1ggPSAwO1xuXHRcdFx0dGhpcy5rZXlBY2NlbGVyYXRpb24gPSAwO1xuXHRcdH0gZWxzZSBpZiAoIG5ld1ggPCB0aGlzLm1heFNjcm9sbFggKSB7XG5cdFx0XHRuZXdYID0gdGhpcy5tYXhTY3JvbGxYO1xuXHRcdFx0dGhpcy5rZXlBY2NlbGVyYXRpb24gPSAwO1xuXHRcdH1cblxuXHRcdGlmICggbmV3WSA+IDAgKSB7XG5cdFx0XHRuZXdZID0gMDtcblx0XHRcdHRoaXMua2V5QWNjZWxlcmF0aW9uID0gMDtcblx0XHR9IGVsc2UgaWYgKCBuZXdZIDwgdGhpcy5tYXhTY3JvbGxZICkge1xuXHRcdFx0bmV3WSA9IHRoaXMubWF4U2Nyb2xsWTtcblx0XHRcdHRoaXMua2V5QWNjZWxlcmF0aW9uID0gMDtcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFRvKG5ld1gsIG5ld1ksIDApO1xuXG5cdFx0dGhpcy5rZXlUaW1lID0gbm93O1xuXHR9LFxuXG5cdF9hbmltYXRlOiBmdW5jdGlvbiAoZGVzdFgsIGRlc3RZLCBkdXJhdGlvbiwgZWFzaW5nRm4pIHtcblx0XHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0XHRzdGFydFggPSB0aGlzLngsXG5cdFx0XHRzdGFydFkgPSB0aGlzLnksXG5cdFx0XHRzdGFydFRpbWUgPSB1dGlscy5nZXRUaW1lKCksXG5cdFx0XHRkZXN0VGltZSA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xuXG5cdFx0ZnVuY3Rpb24gc3RlcCAoKSB7XG5cdFx0XHR2YXIgbm93ID0gdXRpbHMuZ2V0VGltZSgpLFxuXHRcdFx0XHRuZXdYLCBuZXdZLFxuXHRcdFx0XHRlYXNpbmc7XG5cblx0XHRcdGlmICggbm93ID49IGRlc3RUaW1lICkge1xuXHRcdFx0XHR0aGF0LmlzQW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoYXQuX3RyYW5zbGF0ZShkZXN0WCwgZGVzdFkpO1xuXG5cdFx0XHRcdGlmICggIXRoYXQucmVzZXRQb3NpdGlvbih0aGF0Lm9wdGlvbnMuYm91bmNlVGltZSkgKSB7XG5cdFx0XHRcdFx0dGhhdC5fZXhlY0V2ZW50KCdzY3JvbGxFbmQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bm93ID0gKCBub3cgLSBzdGFydFRpbWUgKSAvIGR1cmF0aW9uO1xuXHRcdFx0ZWFzaW5nID0gZWFzaW5nRm4obm93KTtcblx0XHRcdG5ld1ggPSAoIGRlc3RYIC0gc3RhcnRYICkgKiBlYXNpbmcgKyBzdGFydFg7XG5cdFx0XHRuZXdZID0gKCBkZXN0WSAtIHN0YXJ0WSApICogZWFzaW5nICsgc3RhcnRZO1xuXHRcdFx0dGhhdC5fdHJhbnNsYXRlKG5ld1gsIG5ld1kpO1xuXG5cdFx0XHRpZiAoIHRoYXQuaXNBbmltYXRpbmcgKSB7XG5cdFx0XHRcdHJBRihzdGVwKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcblx0XHRzdGVwKCk7XG5cdH0sXG5cdGhhbmRsZUV2ZW50OiBmdW5jdGlvbiAoZSkge1xuXHRcdHN3aXRjaCAoIGUudHlwZSApIHtcblx0XHRcdGNhc2UgJ3RvdWNoc3RhcnQnOlxuXHRcdFx0Y2FzZSAncG9pbnRlcmRvd24nOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyRG93bic6XG5cdFx0XHRjYXNlICdtb3VzZWRvd24nOlxuXHRcdFx0XHR0aGlzLl9zdGFydChlKTtcblxuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy56b29tICYmIGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMSApIHtcblx0XHRcdFx0XHR0aGlzLl96b29tU3RhcnQoZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3VjaG1vdmUnOlxuXHRcdFx0Y2FzZSAncG9pbnRlcm1vdmUnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyTW92ZSc6XG5cdFx0XHRjYXNlICdtb3VzZW1vdmUnOlxuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy56b29tICYmIGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMV0gKSB7XG5cdFx0XHRcdFx0dGhpcy5fem9vbShlKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fbW92ZShlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3VjaGVuZCc6XG5cdFx0XHRjYXNlICdwb2ludGVydXAnOlxuXHRcdFx0Y2FzZSAnTVNQb2ludGVyVXAnOlxuXHRcdFx0Y2FzZSAnbW91c2V1cCc6XG5cdFx0XHRjYXNlICd0b3VjaGNhbmNlbCc6XG5cdFx0XHRjYXNlICdwb2ludGVyY2FuY2VsJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlckNhbmNlbCc6XG5cdFx0XHRjYXNlICdtb3VzZWNhbmNlbCc6XG5cdFx0XHRcdGlmICggdGhpcy5zY2FsZWQgKSB7XG5cdFx0XHRcdFx0dGhpcy5fem9vbUVuZChlKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fZW5kKGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29yaWVudGF0aW9uY2hhbmdlJzpcblx0XHRcdGNhc2UgJ3Jlc2l6ZSc6XG5cdFx0XHRcdHRoaXMuX3Jlc2l6ZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RyYW5zaXRpb25lbmQnOlxuXHRcdFx0Y2FzZSAnd2Via2l0VHJhbnNpdGlvbkVuZCc6XG5cdFx0XHRjYXNlICdvVHJhbnNpdGlvbkVuZCc6XG5cdFx0XHRjYXNlICdNU1RyYW5zaXRpb25FbmQnOlxuXHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uRW5kKGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3doZWVsJzpcblx0XHRcdGNhc2UgJ0RPTU1vdXNlU2Nyb2xsJzpcblx0XHRcdGNhc2UgJ21vdXNld2hlZWwnOlxuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy53aGVlbEFjdGlvbiA9PSAnem9vbScgKSB7XG5cdFx0XHRcdFx0dGhpcy5fd2hlZWxab29tKGUpO1xuXHRcdFx0XHRcdHJldHVybjtcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3doZWVsKGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2tleWRvd24nOlxuXHRcdFx0XHR0aGlzLl9rZXkoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG59O1xuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFNjcm9sbGJhciAoZGlyZWN0aW9uLCBpbnRlcmFjdGl2ZSwgdHlwZSkge1xuXHR2YXIgc2Nyb2xsYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0aW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0aWYgKCB0eXBlID09PSB0cnVlICkge1xuXHRcdHNjcm9sbGJhci5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OTk5OSc7XG5cdFx0aW5kaWNhdG9yLnN0eWxlLmNzc1RleHQgPSAnLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjUpO2JvcmRlcjoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjkpO2JvcmRlci1yYWRpdXM6M3B4Jztcblx0fVxuXG5cdGluZGljYXRvci5jbGFzc05hbWUgPSAnaVNjcm9sbEluZGljYXRvcic7XG5cblx0aWYgKCBkaXJlY3Rpb24gPT0gJ2gnICkge1xuXHRcdGlmICggdHlwZSA9PT0gdHJ1ZSApIHtcblx0XHRcdHNjcm9sbGJhci5zdHlsZS5jc3NUZXh0ICs9ICc7aGVpZ2h0OjdweDtsZWZ0OjJweDtyaWdodDoycHg7Ym90dG9tOjAnO1xuXHRcdFx0aW5kaWNhdG9yLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblx0XHR9XG5cdFx0c2Nyb2xsYmFyLmNsYXNzTmFtZSA9ICdpU2Nyb2xsSG9yaXpvbnRhbFNjcm9sbGJhcic7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKCB0eXBlID09PSB0cnVlICkge1xuXHRcdFx0c2Nyb2xsYmFyLnN0eWxlLmNzc1RleHQgKz0gJzt3aWR0aDo3cHg7Ym90dG9tOjJweDt0b3A6MnB4O3JpZ2h0OjFweCc7XG5cdFx0XHRpbmRpY2F0b3Iuc3R5bGUud2lkdGggPSAnMTAwJSc7XG5cdFx0fVxuXHRcdHNjcm9sbGJhci5jbGFzc05hbWUgPSAnaVNjcm9sbFZlcnRpY2FsU2Nyb2xsYmFyJztcblx0fVxuXG5cdHNjcm9sbGJhci5zdHlsZS5jc3NUZXh0ICs9ICc7b3ZlcmZsb3c6aGlkZGVuJztcblxuXHRpZiAoICFpbnRlcmFjdGl2ZSApIHtcblx0XHRzY3JvbGxiYXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblx0fVxuXG5cdHNjcm9sbGJhci5hcHBlbmRDaGlsZChpbmRpY2F0b3IpO1xuXG5cdHJldHVybiBzY3JvbGxiYXI7XG59XG5cbmZ1bmN0aW9uIEluZGljYXRvciAoc2Nyb2xsZXIsIG9wdGlvbnMpIHtcblx0dGhpcy53cmFwcGVyID0gdHlwZW9mIG9wdGlvbnMuZWwgPT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuZWwpIDogb3B0aW9ucy5lbDtcblx0dGhpcy53cmFwcGVyU3R5bGUgPSB0aGlzLndyYXBwZXIuc3R5bGU7XG5cdHRoaXMuaW5kaWNhdG9yID0gdGhpcy53cmFwcGVyLmNoaWxkcmVuWzBdO1xuXHR0aGlzLmluZGljYXRvclN0eWxlID0gdGhpcy5pbmRpY2F0b3Iuc3R5bGU7XG5cdHRoaXMuc2Nyb2xsZXIgPSBzY3JvbGxlcjtcblxuXHR0aGlzLm9wdGlvbnMgPSB7XG5cdFx0bGlzdGVuWDogdHJ1ZSxcblx0XHRsaXN0ZW5ZOiB0cnVlLFxuXHRcdGludGVyYWN0aXZlOiBmYWxzZSxcblx0XHRyZXNpemU6IHRydWUsXG5cdFx0ZGVmYXVsdFNjcm9sbGJhcnM6IGZhbHNlLFxuXHRcdHNocmluazogZmFsc2UsXG5cdFx0ZmFkZTogZmFsc2UsXG5cdFx0c3BlZWRSYXRpb1g6IDAsXG5cdFx0c3BlZWRSYXRpb1k6IDBcblx0fTtcblxuXHRmb3IgKCB2YXIgaSBpbiBvcHRpb25zICkge1xuXHRcdHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG5cdH1cblxuXHR0aGlzLnNpemVSYXRpb1ggPSAxO1xuXHR0aGlzLnNpemVSYXRpb1kgPSAxO1xuXHR0aGlzLm1heFBvc1ggPSAwO1xuXHR0aGlzLm1heFBvc1kgPSAwO1xuXG5cdGlmICggdGhpcy5vcHRpb25zLmludGVyYWN0aXZlICkge1xuXHRcdGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlVG91Y2ggKSB7XG5cdFx0XHR1dGlscy5hZGRFdmVudCh0aGlzLmluZGljYXRvciwgJ3RvdWNoc3RhcnQnLCB0aGlzKTtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ3RvdWNoZW5kJywgdGhpcyk7XG5cdFx0fVxuXHRcdGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlUG9pbnRlciApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHRoaXMuaW5kaWNhdG9yLCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJkb3duJyksIHRoaXMpO1xuXHRcdFx0dXRpbHMuYWRkRXZlbnQod2luZG93LCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJ1cCcpLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVNb3VzZSApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHRoaXMuaW5kaWNhdG9yLCAnbW91c2Vkb3duJywgdGhpcyk7XG5cdFx0XHR1dGlscy5hZGRFdmVudCh3aW5kb3csICdtb3VzZXVwJywgdGhpcyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCB0aGlzLm9wdGlvbnMuZmFkZSApIHtcblx0XHR0aGlzLndyYXBwZXJTdHlsZVt1dGlscy5zdHlsZS50cmFuc2Zvcm1dID0gdGhpcy5zY3JvbGxlci50cmFuc2xhdGVaO1xuXHRcdHZhciBkdXJhdGlvblByb3AgPSB1dGlscy5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb247XG5cdFx0dGhpcy53cmFwcGVyU3R5bGVbZHVyYXRpb25Qcm9wXSA9IHV0aWxzLmlzQmFkQW5kcm9pZCA/ICcwLjAwMDFtcycgOiAnMG1zJztcblx0XHQvLyByZW1vdmUgMC4wMDAxbXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0aWYodXRpbHMuaXNCYWRBbmRyb2lkKSB7XG5cdFx0XHRyQUYoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHNlbGYud3JhcHBlclN0eWxlW2R1cmF0aW9uUHJvcF0gPT09ICcwLjAwMDFtcycpIHtcblx0XHRcdFx0XHRzZWxmLndyYXBwZXJTdHlsZVtkdXJhdGlvblByb3BdID0gJzBzJztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMud3JhcHBlclN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cdH1cbn1cblxuSW5kaWNhdG9yLnByb3RvdHlwZSA9IHtcblx0aGFuZGxlRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0c3dpdGNoICggZS50eXBlICkge1xuXHRcdFx0Y2FzZSAndG91Y2hzdGFydCc6XG5cdFx0XHRjYXNlICdwb2ludGVyZG93bic6XG5cdFx0XHRjYXNlICdNU1BvaW50ZXJEb3duJzpcblx0XHRcdGNhc2UgJ21vdXNlZG93bic6XG5cdFx0XHRcdHRoaXMuX3N0YXJ0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RvdWNobW92ZSc6XG5cdFx0XHRjYXNlICdwb2ludGVybW92ZSc6XG5cdFx0XHRjYXNlICdNU1BvaW50ZXJNb3ZlJzpcblx0XHRcdGNhc2UgJ21vdXNlbW92ZSc6XG5cdFx0XHRcdHRoaXMuX21vdmUoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndG91Y2hlbmQnOlxuXHRcdFx0Y2FzZSAncG9pbnRlcnVwJzpcblx0XHRcdGNhc2UgJ01TUG9pbnRlclVwJzpcblx0XHRcdGNhc2UgJ21vdXNldXAnOlxuXHRcdFx0Y2FzZSAndG91Y2hjYW5jZWwnOlxuXHRcdFx0Y2FzZSAncG9pbnRlcmNhbmNlbCc6XG5cdFx0XHRjYXNlICdNU1BvaW50ZXJDYW5jZWwnOlxuXHRcdFx0Y2FzZSAnbW91c2VjYW5jZWwnOlxuXHRcdFx0XHR0aGlzLl9lbmQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblxuXHRkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMgKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5mYWRlVGltZW91dCk7XG5cdFx0XHR0aGlzLmZhZGVUaW1lb3V0ID0gbnVsbDtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUgKSB7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh0aGlzLmluZGljYXRvciwgJ3RvdWNoc3RhcnQnLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHRoaXMuaW5kaWNhdG9yLCB1dGlscy5wcmVmaXhQb2ludGVyRXZlbnQoJ3BvaW50ZXJkb3duJyksIHRoaXMpO1xuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQodGhpcy5pbmRpY2F0b3IsICdtb3VzZWRvd24nLCB0aGlzKTtcblxuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCAndG91Y2htb3ZlJywgdGhpcyk7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcm1vdmUnKSwgdGhpcyk7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICdtb3VzZW1vdmUnLCB0aGlzKTtcblxuXHRcdFx0dXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCAndG91Y2hlbmQnLCB0aGlzKTtcblx0XHRcdHV0aWxzLnJlbW92ZUV2ZW50KHdpbmRvdywgdXRpbHMucHJlZml4UG9pbnRlckV2ZW50KCdwb2ludGVydXAnKSwgdGhpcyk7XG5cdFx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICdtb3VzZXVwJywgdGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuZGVmYXVsdFNjcm9sbGJhcnMgKSB7XG5cdFx0XHR0aGlzLndyYXBwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLndyYXBwZXIpO1xuXHRcdH1cblx0fSxcblxuXHRfc3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIHBvaW50ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZTtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0dGhpcy50cmFuc2l0aW9uVGltZSgpO1xuXG5cdFx0dGhpcy5pbml0aWF0ZWQgPSB0cnVlO1xuXHRcdHRoaXMubW92ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmxhc3RQb2ludFhcdD0gcG9pbnQucGFnZVg7XG5cdFx0dGhpcy5sYXN0UG9pbnRZXHQ9IHBvaW50LnBhZ2VZO1xuXG5cdFx0dGhpcy5zdGFydFRpbWVcdD0gdXRpbHMuZ2V0VGltZSgpO1xuXG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVUb3VjaCApIHtcblx0XHRcdHV0aWxzLmFkZEV2ZW50KHdpbmRvdywgJ3RvdWNobW92ZScsIHRoaXMpO1xuXHRcdH1cblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuZGlzYWJsZVBvaW50ZXIgKSB7XG5cdFx0XHR1dGlscy5hZGRFdmVudCh3aW5kb3csIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcm1vdmUnKSwgdGhpcyk7XG5cdFx0fVxuXHRcdGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlTW91c2UgKSB7XG5cdFx0XHR1dGlscy5hZGRFdmVudCh3aW5kb3csICdtb3VzZW1vdmUnLCB0aGlzKTtcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbGVyLl9leGVjRXZlbnQoJ2JlZm9yZVNjcm9sbFN0YXJ0Jyk7XG5cdH0sXG5cblx0X21vdmU6IGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIHBvaW50ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSxcblx0XHRcdGRlbHRhWCwgZGVsdGFZLFxuXHRcdFx0bmV3WCwgbmV3WSxcblx0XHRcdHRpbWVzdGFtcCA9IHV0aWxzLmdldFRpbWUoKTtcblxuXHRcdGlmICggIXRoaXMubW92ZWQgKSB7XG5cdFx0XHR0aGlzLnNjcm9sbGVyLl9leGVjRXZlbnQoJ3Njcm9sbFN0YXJ0Jyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb3ZlZCA9IHRydWU7XG5cblx0XHRkZWx0YVggPSBwb2ludC5wYWdlWCAtIHRoaXMubGFzdFBvaW50WDtcblx0XHR0aGlzLmxhc3RQb2ludFggPSBwb2ludC5wYWdlWDtcblxuXHRcdGRlbHRhWSA9IHBvaW50LnBhZ2VZIC0gdGhpcy5sYXN0UG9pbnRZO1xuXHRcdHRoaXMubGFzdFBvaW50WSA9IHBvaW50LnBhZ2VZO1xuXG5cdFx0bmV3WCA9IHRoaXMueCArIGRlbHRhWDtcblx0XHRuZXdZID0gdGhpcy55ICsgZGVsdGFZO1xuXG5cdFx0dGhpcy5fcG9zKG5ld1gsIG5ld1kpO1xuXG4vLyBJTlNFUlQgUE9JTlQ6IGluZGljYXRvci5fbW92ZVxuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH0sXG5cblx0X2VuZDogZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoICF0aGlzLmluaXRpYXRlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmluaXRpYXRlZCA9IGZhbHNlO1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csICd0b3VjaG1vdmUnLCB0aGlzKTtcblx0XHR1dGlscy5yZW1vdmVFdmVudCh3aW5kb3csIHV0aWxzLnByZWZpeFBvaW50ZXJFdmVudCgncG9pbnRlcm1vdmUnKSwgdGhpcyk7XG5cdFx0dXRpbHMucmVtb3ZlRXZlbnQod2luZG93LCAnbW91c2Vtb3ZlJywgdGhpcyk7XG5cblx0XHRpZiAoIHRoaXMuc2Nyb2xsZXIub3B0aW9ucy5zbmFwICkge1xuXHRcdFx0dmFyIHNuYXAgPSB0aGlzLnNjcm9sbGVyLl9uZWFyZXN0U25hcCh0aGlzLnNjcm9sbGVyLngsIHRoaXMuc2Nyb2xsZXIueSk7XG5cblx0XHRcdHZhciB0aW1lID0gdGhpcy5vcHRpb25zLnNuYXBTcGVlZCB8fCBNYXRoLm1heChcblx0XHRcdFx0XHRNYXRoLm1heChcblx0XHRcdFx0XHRcdE1hdGgubWluKE1hdGguYWJzKHRoaXMuc2Nyb2xsZXIueCAtIHNuYXAueCksIDEwMDApLFxuXHRcdFx0XHRcdFx0TWF0aC5taW4oTWF0aC5hYnModGhpcy5zY3JvbGxlci55IC0gc25hcC55KSwgMTAwMClcblx0XHRcdFx0XHQpLCAzMDApO1xuXG5cdFx0XHRpZiAoIHRoaXMuc2Nyb2xsZXIueCAhPSBzbmFwLnggfHwgdGhpcy5zY3JvbGxlci55ICE9IHNuYXAueSApIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxlci5kaXJlY3Rpb25YID0gMDtcblx0XHRcdFx0dGhpcy5zY3JvbGxlci5kaXJlY3Rpb25ZID0gMDtcblx0XHRcdFx0dGhpcy5zY3JvbGxlci5jdXJyZW50UGFnZSA9IHNuYXA7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG8oc25hcC54LCBzbmFwLnksIHRpbWUsIHRoaXMuc2Nyb2xsZXIub3B0aW9ucy5ib3VuY2VFYXNpbmcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5tb3ZlZCApIHtcblx0XHRcdHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudCgnc2Nyb2xsRW5kJyk7XG5cdFx0fVxuXHR9LFxuXG5cdHRyYW5zaXRpb25UaW1lOiBmdW5jdGlvbiAodGltZSkge1xuXHRcdHRpbWUgPSB0aW1lIHx8IDA7XG5cdFx0dmFyIGR1cmF0aW9uUHJvcCA9IHV0aWxzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtcblx0XHR0aGlzLmluZGljYXRvclN0eWxlW2R1cmF0aW9uUHJvcF0gPSB0aW1lICsgJ21zJztcblxuXHRcdGlmICggIXRpbWUgJiYgdXRpbHMuaXNCYWRBbmRyb2lkICkge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZVtkdXJhdGlvblByb3BdID0gJzAuMDAwMW1zJztcblx0XHRcdC8vIHJlbW92ZSAwLjAwMDFtc1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0ckFGKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihzZWxmLmluZGljYXRvclN0eWxlW2R1cmF0aW9uUHJvcF0gPT09ICcwLjAwMDFtcycpIHtcblx0XHRcdFx0XHRzZWxmLmluZGljYXRvclN0eWxlW2R1cmF0aW9uUHJvcF0gPSAnMHMnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0dHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBmdW5jdGlvbiAoZWFzaW5nKSB7XG5cdFx0dGhpcy5pbmRpY2F0b3JTdHlsZVt1dGlscy5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25dID0gZWFzaW5nO1xuXHR9LFxuXG5cdHJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnRyYW5zaXRpb25UaW1lKCk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5saXN0ZW5YICYmICF0aGlzLm9wdGlvbnMubGlzdGVuWSApIHtcblx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUuZGlzcGxheSA9IHRoaXMuc2Nyb2xsZXIuaGFzSG9yaXpvbnRhbFNjcm9sbCA/ICdibG9jaycgOiAnbm9uZSc7XG5cdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmxpc3RlblkgJiYgIXRoaXMub3B0aW9ucy5saXN0ZW5YICkge1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5ID0gdGhpcy5zY3JvbGxlci5oYXNWZXJ0aWNhbFNjcm9sbCA/ICdibG9jaycgOiAnbm9uZSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUuZGlzcGxheSA9IHRoaXMuc2Nyb2xsZXIuaGFzSG9yaXpvbnRhbFNjcm9sbCB8fCB0aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsID8gJ2Jsb2NrJyA6ICdub25lJztcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuc2Nyb2xsZXIuaGFzSG9yaXpvbnRhbFNjcm9sbCAmJiB0aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsICkge1xuXHRcdFx0dXRpbHMuYWRkQ2xhc3ModGhpcy53cmFwcGVyLCAnaVNjcm9sbEJvdGhTY3JvbGxiYXJzJyk7XG5cdFx0XHR1dGlscy5yZW1vdmVDbGFzcyh0aGlzLndyYXBwZXIsICdpU2Nyb2xsTG9uZVNjcm9sbGJhcicpO1xuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyAmJiB0aGlzLm9wdGlvbnMuY3VzdG9tU3R5bGUgKSB7XG5cdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblggKSB7XG5cdFx0XHRcdFx0dGhpcy53cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJzhweCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy53cmFwcGVyLnN0eWxlLmJvdHRvbSA9ICc4cHgnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHV0aWxzLnJlbW92ZUNsYXNzKHRoaXMud3JhcHBlciwgJ2lTY3JvbGxCb3RoU2Nyb2xsYmFycycpO1xuXHRcdFx0dXRpbHMuYWRkQ2xhc3ModGhpcy53cmFwcGVyLCAnaVNjcm9sbExvbmVTY3JvbGxiYXInKTtcblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuZGVmYXVsdFNjcm9sbGJhcnMgJiYgdGhpcy5vcHRpb25zLmN1c3RvbVN0eWxlICkge1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5saXN0ZW5YICkge1xuXHRcdFx0XHRcdHRoaXMud3JhcHBlci5zdHlsZS5yaWdodCA9ICcycHgnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMud3JhcHBlci5zdHlsZS5ib3R0b20gPSAnMnB4Jztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciByID0gdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodDtcdC8vIGZvcmNlIHJlZnJlc2hcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmxpc3RlblggKSB7XG5cdFx0XHR0aGlzLndyYXBwZXJXaWR0aCA9IHRoaXMud3JhcHBlci5jbGllbnRXaWR0aDtcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLnJlc2l6ZSApIHtcblx0XHRcdFx0dGhpcy5pbmRpY2F0b3JXaWR0aCA9IE1hdGgubWF4KE1hdGgucm91bmQodGhpcy53cmFwcGVyV2lkdGggKiB0aGlzLndyYXBwZXJXaWR0aCAvICh0aGlzLnNjcm9sbGVyLnNjcm9sbGVyV2lkdGggfHwgdGhpcy53cmFwcGVyV2lkdGggfHwgMSkpLCA4KTtcblx0XHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS53aWR0aCA9IHRoaXMuaW5kaWNhdG9yV2lkdGggKyAncHgnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbmRpY2F0b3JXaWR0aCA9IHRoaXMuaW5kaWNhdG9yLmNsaWVudFdpZHRoO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm1heFBvc1ggPSB0aGlzLndyYXBwZXJXaWR0aCAtIHRoaXMuaW5kaWNhdG9yV2lkdGg7XG5cblx0XHRcdGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnY2xpcCcgKSB7XG5cdFx0XHRcdHRoaXMubWluQm91bmRhcnlYID0gLXRoaXMuaW5kaWNhdG9yV2lkdGggKyA4O1xuXHRcdFx0XHR0aGlzLm1heEJvdW5kYXJ5WCA9IHRoaXMud3JhcHBlcldpZHRoIC0gODtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWluQm91bmRhcnlYID0gMDtcblx0XHRcdFx0dGhpcy5tYXhCb3VuZGFyeVggPSB0aGlzLm1heFBvc1g7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2l6ZVJhdGlvWCA9IHRoaXMub3B0aW9ucy5zcGVlZFJhdGlvWCB8fCAodGhpcy5zY3JvbGxlci5tYXhTY3JvbGxYICYmICh0aGlzLm1heFBvc1ggLyB0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFgpKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5saXN0ZW5ZICkge1xuXHRcdFx0dGhpcy53cmFwcGVySGVpZ2h0ID0gdGhpcy53cmFwcGVyLmNsaWVudEhlaWdodDtcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLnJlc2l6ZSApIHtcblx0XHRcdFx0dGhpcy5pbmRpY2F0b3JIZWlnaHQgPSBNYXRoLm1heChNYXRoLnJvdW5kKHRoaXMud3JhcHBlckhlaWdodCAqIHRoaXMud3JhcHBlckhlaWdodCAvICh0aGlzLnNjcm9sbGVyLnNjcm9sbGVySGVpZ2h0IHx8IHRoaXMud3JhcHBlckhlaWdodCB8fCAxKSksIDgpO1xuXHRcdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLmhlaWdodCA9IHRoaXMuaW5kaWNhdG9ySGVpZ2h0ICsgJ3B4Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaW5kaWNhdG9ySGVpZ2h0ID0gdGhpcy5pbmRpY2F0b3IuY2xpZW50SGVpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm1heFBvc1kgPSB0aGlzLndyYXBwZXJIZWlnaHQgLSB0aGlzLmluZGljYXRvckhlaWdodDtcblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdjbGlwJyApIHtcblx0XHRcdFx0dGhpcy5taW5Cb3VuZGFyeVkgPSAtdGhpcy5pbmRpY2F0b3JIZWlnaHQgKyA4O1xuXHRcdFx0XHR0aGlzLm1heEJvdW5kYXJ5WSA9IHRoaXMud3JhcHBlckhlaWdodCAtIDg7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1pbkJvdW5kYXJ5WSA9IDA7XG5cdFx0XHRcdHRoaXMubWF4Qm91bmRhcnlZID0gdGhpcy5tYXhQb3NZO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm1heFBvc1kgPSB0aGlzLndyYXBwZXJIZWlnaHQgLSB0aGlzLmluZGljYXRvckhlaWdodDtcblx0XHRcdHRoaXMuc2l6ZVJhdGlvWSA9IHRoaXMub3B0aW9ucy5zcGVlZFJhdGlvWSB8fCAodGhpcy5zY3JvbGxlci5tYXhTY3JvbGxZICYmICh0aGlzLm1heFBvc1kgLyB0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFkpKTtcblx0XHR9XG5cblx0XHR0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG5cdH0sXG5cblx0dXBkYXRlUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgeCA9IHRoaXMub3B0aW9ucy5saXN0ZW5YICYmIE1hdGgucm91bmQodGhpcy5zaXplUmF0aW9YICogdGhpcy5zY3JvbGxlci54KSB8fCAwLFxuXHRcdFx0eSA9IHRoaXMub3B0aW9ucy5saXN0ZW5ZICYmIE1hdGgucm91bmQodGhpcy5zaXplUmF0aW9ZICogdGhpcy5zY3JvbGxlci55KSB8fCAwO1xuXG5cdFx0aWYgKCAhdGhpcy5vcHRpb25zLmlnbm9yZUJvdW5kYXJpZXMgKSB7XG5cdFx0XHRpZiAoIHggPCB0aGlzLm1pbkJvdW5kYXJ5WCApIHtcblx0XHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgKSB7XG5cdFx0XHRcdFx0dGhpcy53aWR0aCA9IE1hdGgubWF4KHRoaXMuaW5kaWNhdG9yV2lkdGggKyB4LCA4KTtcblx0XHRcdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0eCA9IHRoaXMubWluQm91bmRhcnlYO1xuXHRcdFx0fSBlbHNlIGlmICggeCA+IHRoaXMubWF4Qm91bmRhcnlYICkge1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcblx0XHRcdFx0XHR0aGlzLndpZHRoID0gTWF0aC5tYXgodGhpcy5pbmRpY2F0b3JXaWR0aCAtICh4IC0gdGhpcy5tYXhQb3NYKSwgOCk7XG5cdFx0XHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuXHRcdFx0XHRcdHggPSB0aGlzLm1heFBvc1ggKyB0aGlzLmluZGljYXRvcldpZHRoIC0gdGhpcy53aWR0aDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR4ID0gdGhpcy5tYXhCb3VuZGFyeVg7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyAmJiB0aGlzLndpZHRoICE9IHRoaXMuaW5kaWNhdG9yV2lkdGggKSB7XG5cdFx0XHRcdHRoaXMud2lkdGggPSB0aGlzLmluZGljYXRvcldpZHRoO1xuXHRcdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggeSA8IHRoaXMubWluQm91bmRhcnlZICkge1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zaHJpbmsgPT0gJ3NjYWxlJyApIHtcblx0XHRcdFx0XHR0aGlzLmhlaWdodCA9IE1hdGgubWF4KHRoaXMuaW5kaWNhdG9ySGVpZ2h0ICsgeSAqIDMsIDgpO1xuXHRcdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHkgPSB0aGlzLm1pbkJvdW5kYXJ5WTtcblx0XHRcdH0gZWxzZSBpZiAoIHkgPiB0aGlzLm1heEJvdW5kYXJ5WSApIHtcblx0XHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuc2hyaW5rID09ICdzY2FsZScgKSB7XG5cdFx0XHRcdFx0dGhpcy5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLmluZGljYXRvckhlaWdodCAtICh5IC0gdGhpcy5tYXhQb3NZKSAqIDMsIDgpO1xuXHRcdFx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuXHRcdFx0XHRcdHkgPSB0aGlzLm1heFBvc1kgKyB0aGlzLmluZGljYXRvckhlaWdodCAtIHRoaXMuaGVpZ2h0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHkgPSB0aGlzLm1heEJvdW5kYXJ5WTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5vcHRpb25zLnNocmluayA9PSAnc2NhbGUnICYmIHRoaXMuaGVpZ2h0ICE9IHRoaXMuaW5kaWNhdG9ySGVpZ2h0ICkge1xuXHRcdFx0XHR0aGlzLmhlaWdodCA9IHRoaXMuaW5kaWNhdG9ySGVpZ2h0O1xuXHRcdFx0XHR0aGlzLmluZGljYXRvclN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4Jztcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cblx0XHRpZiAoIHRoaXMuc2Nyb2xsZXIub3B0aW9ucy51c2VUcmFuc2Zvcm0gKSB7XG5cdFx0XHR0aGlzLmluZGljYXRvclN0eWxlW3V0aWxzLnN0eWxlLnRyYW5zZm9ybV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJ3B4LCcgKyB5ICsgJ3B4KScgKyB0aGlzLnNjcm9sbGVyLnRyYW5zbGF0ZVo7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaW5kaWNhdG9yU3R5bGUubGVmdCA9IHggKyAncHgnO1xuXHRcdFx0dGhpcy5pbmRpY2F0b3JTdHlsZS50b3AgPSB5ICsgJ3B4Jztcblx0XHR9XG5cdH0sXG5cblx0X3BvczogZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRpZiAoIHggPCAwICkge1xuXHRcdFx0eCA9IDA7XG5cdFx0fSBlbHNlIGlmICggeCA+IHRoaXMubWF4UG9zWCApIHtcblx0XHRcdHggPSB0aGlzLm1heFBvc1g7XG5cdFx0fVxuXG5cdFx0aWYgKCB5IDwgMCApIHtcblx0XHRcdHkgPSAwO1xuXHRcdH0gZWxzZSBpZiAoIHkgPiB0aGlzLm1heFBvc1kgKSB7XG5cdFx0XHR5ID0gdGhpcy5tYXhQb3NZO1xuXHRcdH1cblxuXHRcdHggPSB0aGlzLm9wdGlvbnMubGlzdGVuWCA/IE1hdGgucm91bmQoeCAvIHRoaXMuc2l6ZVJhdGlvWCkgOiB0aGlzLnNjcm9sbGVyLng7XG5cdFx0eSA9IHRoaXMub3B0aW9ucy5saXN0ZW5ZID8gTWF0aC5yb3VuZCh5IC8gdGhpcy5zaXplUmF0aW9ZKSA6IHRoaXMuc2Nyb2xsZXIueTtcblxuXHRcdHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG8oeCwgeSk7XG5cdH0sXG5cblx0ZmFkZTogZnVuY3Rpb24gKHZhbCwgaG9sZCkge1xuXHRcdGlmICggaG9sZCAmJiAhdGhpcy52aXNpYmxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNsZWFyVGltZW91dCh0aGlzLmZhZGVUaW1lb3V0KTtcblx0XHR0aGlzLmZhZGVUaW1lb3V0ID0gbnVsbDtcblxuXHRcdHZhciB0aW1lID0gdmFsID8gMjUwIDogNTAwLFxuXHRcdFx0ZGVsYXkgPSB2YWwgPyAwIDogMzAwO1xuXG5cdFx0dmFsID0gdmFsID8gJzEnIDogJzAnO1xuXG5cdFx0dGhpcy53cmFwcGVyU3R5bGVbdXRpbHMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uXSA9IHRpbWUgKyAnbXMnO1xuXG5cdFx0dGhpcy5mYWRlVGltZW91dCA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHRoaXMud3JhcHBlclN0eWxlLm9wYWNpdHkgPSB2YWw7XG5cdFx0XHR0aGlzLnZpc2libGUgPSArdmFsO1xuXHRcdH0pLmJpbmQodGhpcywgdmFsKSwgZGVsYXkpO1xuXHR9XG59O1xuXG5JU2Nyb2xsLnV0aWxzID0gdXRpbHM7XG5cbmlmICggdHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBJU2Nyb2xsO1xufSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgICAgIGRlZmluZSggZnVuY3Rpb24gKCkgeyByZXR1cm4gSVNjcm9sbDsgfSApO1xufSBlbHNlIHtcblx0d2luZG93LklTY3JvbGwgPSBJU2Nyb2xsO1xufVxuXG59KSh3aW5kb3csIGRvY3VtZW50LCBNYXRoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYm93ZXJfY29tcG9uZW50cy9pc2Nyb2xsL2J1aWxkL2lzY3JvbGwtem9vbS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwicmVxdWlyZShcIiEhL2hvbWUvYmxhY2F0ZS9wcm9qZWN0L2ZpcmVhbnQtbW9iaWxlL25vZGVfbW9kdWxlcy8uMC42LjFAc2NyaXB0LWxvYWRlci9hZGRTY3JpcHQuanNcIikocmVxdWlyZShcIiEhL2hvbWUvYmxhY2F0ZS9wcm9qZWN0L2ZpcmVhbnQtbW9iaWxlL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEvaG9tZS9ibGFjYXRlL3Byb2plY3QvZmlyZWFudC1tb2JpbGUvYm93ZXJfY29tcG9uZW50cy9odG1sNXNoaXYvZGlzdC9odG1sNXNoaXYubWluLmpzXCIpKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC42LjFAc2NyaXB0LWxvYWRlciEuL2Jvd2VyX2NvbXBvbmVudHMvaHRtbDVzaGl2L2Rpc3QvaHRtbDVzaGl2Lm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzcmMpIHtcclxuXHRpZiAodHlwZW9mIGV4ZWNTY3JpcHQgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdGV4ZWNTY3JpcHQoc3JjKTtcclxuXHRlbHNlXHJcblx0XHRldmFsLmNhbGwobnVsbCwgc3JjKTtcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC42LjFAc2NyaXB0LWxvYWRlci9hZGRTY3JpcHQuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCIvKipcXG4qIEBwcmVzZXJ2ZSBIVE1MNSBTaGl2IDMuNy4yIHwgQGFmYXJrYXMgQGpkYWx0b24gQGpvbl9uZWFsIEByZW0gfCBNSVQvR1BMMiBMaWNlbnNlZFxcbiovXFxuIWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhLGIpe3ZhciBjPWEuY3JlYXRlRWxlbWVudChcXFwicFxcXCIpLGQ9YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcXFwiaGVhZFxcXCIpWzBdfHxhLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gYy5pbm5lckhUTUw9XFxcIng8c3R5bGU+XFxcIitiK1xcXCI8L3N0eWxlPlxcXCIsZC5pbnNlcnRCZWZvcmUoYy5sYXN0Q2hpbGQsZC5maXJzdENoaWxkKX1mdW5jdGlvbiBkKCl7dmFyIGE9dC5lbGVtZW50cztyZXR1cm5cXFwic3RyaW5nXFxcIj09dHlwZW9mIGE/YS5zcGxpdChcXFwiIFxcXCIpOmF9ZnVuY3Rpb24gZShhLGIpe3ZhciBjPXQuZWxlbWVudHM7XFxcInN0cmluZ1xcXCIhPXR5cGVvZiBjJiYoYz1jLmpvaW4oXFxcIiBcXFwiKSksXFxcInN0cmluZ1xcXCIhPXR5cGVvZiBhJiYoYT1hLmpvaW4oXFxcIiBcXFwiKSksdC5lbGVtZW50cz1jK1xcXCIgXFxcIithLGooYil9ZnVuY3Rpb24gZihhKXt2YXIgYj1zW2FbcV1dO3JldHVybiBifHwoYj17fSxyKyssYVtxXT1yLHNbcl09YiksYn1mdW5jdGlvbiBnKGEsYyxkKXtpZihjfHwoYz1iKSxsKXJldHVybiBjLmNyZWF0ZUVsZW1lbnQoYSk7ZHx8KGQ9ZihjKSk7dmFyIGU7cmV0dXJuIGU9ZC5jYWNoZVthXT9kLmNhY2hlW2FdLmNsb25lTm9kZSgpOnAudGVzdChhKT8oZC5jYWNoZVthXT1kLmNyZWF0ZUVsZW0oYSkpLmNsb25lTm9kZSgpOmQuY3JlYXRlRWxlbShhKSwhZS5jYW5IYXZlQ2hpbGRyZW58fG8udGVzdChhKXx8ZS50YWdVcm4/ZTpkLmZyYWcuYXBwZW5kQ2hpbGQoZSl9ZnVuY3Rpb24gaChhLGMpe2lmKGF8fChhPWIpLGwpcmV0dXJuIGEuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2M9Y3x8ZihhKTtmb3IodmFyIGU9Yy5mcmFnLmNsb25lTm9kZSgpLGc9MCxoPWQoKSxpPWgubGVuZ3RoO2k+ZztnKyspZS5jcmVhdGVFbGVtZW50KGhbZ10pO3JldHVybiBlfWZ1bmN0aW9uIGkoYSxiKXtiLmNhY2hlfHwoYi5jYWNoZT17fSxiLmNyZWF0ZUVsZW09YS5jcmVhdGVFbGVtZW50LGIuY3JlYXRlRnJhZz1hLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsYi5mcmFnPWIuY3JlYXRlRnJhZygpKSxhLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oYyl7cmV0dXJuIHQuc2hpdk1ldGhvZHM/ZyhjLGEsYik6Yi5jcmVhdGVFbGVtKGMpfSxhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9RnVuY3Rpb24oXFxcImgsZlxcXCIsXFxcInJldHVybiBmdW5jdGlvbigpe3ZhciBuPWYuY2xvbmVOb2RlKCksYz1uLmNyZWF0ZUVsZW1lbnQ7aC5zaGl2TWV0aG9kcyYmKFxcXCIrZCgpLmpvaW4oKS5yZXBsYWNlKC9bXFxcXHdcXFxcLTpdKy9nLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNyZWF0ZUVsZW0oYSksYi5mcmFnLmNyZWF0ZUVsZW1lbnQoYSksJ2MoXFxcIicrYSsnXFxcIiknfSkrXFxcIik7cmV0dXJuIG59XFxcIikodCxiLmZyYWcpfWZ1bmN0aW9uIGooYSl7YXx8KGE9Yik7dmFyIGQ9ZihhKTtyZXR1cm4hdC5zaGl2Q1NTfHxrfHxkLmhhc0NTU3x8KGQuaGFzQ1NTPSEhYyhhLFxcXCJhcnRpY2xlLGFzaWRlLGRpYWxvZyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9bWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9XFxcIikpLGx8fGkoYSxkKSxhfXZhciBrLGwsbT1cXFwiMy43LjJcXFwiLG49YS5odG1sNXx8e30sbz0vXjx8Xig/OmJ1dHRvbnxtYXB8c2VsZWN0fHRleHRhcmVhfG9iamVjdHxpZnJhbWV8b3B0aW9ufG9wdGdyb3VwKSQvaSxwPS9eKD86YXxifGNvZGV8ZGl2fGZpZWxkc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGl8bGFiZWx8bGl8b2x8cHxxfHNwYW58c3Ryb25nfHN0eWxlfHRhYmxlfHRib2R5fHRkfHRofHRyfHVsKSQvaSxxPVxcXCJfaHRtbDVzaGl2XFxcIixyPTAscz17fTshZnVuY3Rpb24oKXt0cnl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFxcXCJhXFxcIik7YS5pbm5lckhUTUw9XFxcIjx4eXo+PC94eXo+XFxcIixrPVxcXCJoaWRkZW5cXFwiaW4gYSxsPTE9PWEuY2hpbGROb2Rlcy5sZW5ndGh8fGZ1bmN0aW9uKCl7Yi5jcmVhdGVFbGVtZW50KFxcXCJhXFxcIik7dmFyIGE9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7cmV0dXJuXFxcInVuZGVmaW5lZFxcXCI9PXR5cGVvZiBhLmNsb25lTm9kZXx8XFxcInVuZGVmaW5lZFxcXCI9PXR5cGVvZiBhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnR8fFxcXCJ1bmRlZmluZWRcXFwiPT10eXBlb2YgYS5jcmVhdGVFbGVtZW50fSgpfWNhdGNoKGMpe2s9ITAsbD0hMH19KCk7dmFyIHQ9e2VsZW1lbnRzOm4uZWxlbWVudHN8fFxcXCJhYmJyIGFydGljbGUgYXNpZGUgYXVkaW8gYmRpIGNhbnZhcyBkYXRhIGRhdGFsaXN0IGRldGFpbHMgZGlhbG9nIGZpZ2NhcHRpb24gZmlndXJlIGZvb3RlciBoZWFkZXIgaGdyb3VwIG1haW4gbWFyayBtZXRlciBuYXYgb3V0cHV0IHBpY3R1cmUgcHJvZ3Jlc3Mgc2VjdGlvbiBzdW1tYXJ5IHRlbXBsYXRlIHRpbWUgdmlkZW9cXFwiLHZlcnNpb246bSxzaGl2Q1NTOm4uc2hpdkNTUyE9PSExLHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzOmwsc2hpdk1ldGhvZHM6bi5zaGl2TWV0aG9kcyE9PSExLHR5cGU6XFxcImRlZmF1bHRcXFwiLHNoaXZEb2N1bWVudDpqLGNyZWF0ZUVsZW1lbnQ6ZyxjcmVhdGVEb2N1bWVudEZyYWdtZW50OmgsYWRkRWxlbWVudHM6ZX07YS5odG1sNT10LGooYil9KHRoaXMsZG9jdW1lbnQpO1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vYm93ZXJfY29tcG9uZW50cy9odG1sNXNoaXYvZGlzdC9odG1sNXNoaXYubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJyZXF1aXJlKFwiISEvaG9tZS9ibGFjYXRlL3Byb2plY3QvZmlyZWFudC1tb2JpbGUvbm9kZV9tb2R1bGVzLy4wLjYuMUBzY3JpcHQtbG9hZGVyL2FkZFNjcmlwdC5qc1wiKShyZXF1aXJlKFwiISEvaG9tZS9ibGFjYXRlL3Byb2plY3QvZmlyZWFudC1tb2JpbGUvbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS9ob21lL2JsYWNhdGUvcHJvamVjdC9maXJlYW50LW1vYmlsZS9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXIvYW5ndWxhci5taW4uanNcIikpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjYuMUBzY3JpcHQtbG9hZGVyIS4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyL2FuZ3VsYXIubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG4gQW5ndWxhckpTIHYxLjQuMlxcbiAoYykgMjAxMC0yMDE1IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xcbiBMaWNlbnNlOiBNSVRcXG4qL1xcbihmdW5jdGlvbihPLFUsdCl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIEooYil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzWzBdLGM7Yz1cXFwiW1xcXCIrKGI/YitcXFwiOlxcXCI6XFxcIlxcXCIpK2ErXFxcIl0gaHR0cDovL2Vycm9ycy5hbmd1bGFyanMub3JnLzEuNC4yL1xcXCIrKGI/YitcXFwiL1xcXCI6XFxcIlxcXCIpK2E7Zm9yKGE9MTthPGFyZ3VtZW50cy5sZW5ndGg7YSsrKXtjPWMrKDE9PWE/XFxcIj9cXFwiOlxcXCImXFxcIikrXFxcInBcXFwiKyhhLTEpK1xcXCI9XFxcIjt2YXIgZD1lbmNvZGVVUklDb21wb25lbnQsZTtlPWFyZ3VtZW50c1thXTtlPVxcXCJmdW5jdGlvblxcXCI9PXR5cGVvZiBlP2UudG9TdHJpbmcoKS5yZXBsYWNlKC8gXFxcXHtbXFxcXHNcXFxcU10qJC8sXFxcIlxcXCIpOlxcXCJ1bmRlZmluZWRcXFwiPT10eXBlb2YgZT9cXFwidW5kZWZpbmVkXFxcIjpcXFwic3RyaW5nXFxcIiE9dHlwZW9mIGU/SlNPTi5zdHJpbmdpZnkoZSk6ZTtjKz1kKGUpfXJldHVybiBFcnJvcihjKX19ZnVuY3Rpb24gRWEoYil7aWYobnVsbD09Ynx8V2EoYikpcmV0dXJuITE7dmFyIGE9XFxcImxlbmd0aFxcXCJpbiBPYmplY3QoYikmJmIubGVuZ3RoO1xcbnJldHVybiBiLm5vZGVUeXBlPT09cWEmJmE/ITA6TChiKXx8RyhiKXx8MD09PWF8fFxcXCJudW1iZXJcXFwiPT09dHlwZW9mIGEmJjA8YSYmYS0xIGluIGJ9ZnVuY3Rpb24gbShiLGEsYyl7dmFyIGQsZTtpZihiKWlmKHooYikpZm9yKGQgaW4gYilcXFwicHJvdG90eXBlXFxcIj09ZHx8XFxcImxlbmd0aFxcXCI9PWR8fFxcXCJuYW1lXFxcIj09ZHx8Yi5oYXNPd25Qcm9wZXJ0eSYmIWIuaGFzT3duUHJvcGVydHkoZCl8fGEuY2FsbChjLGJbZF0sZCxiKTtlbHNlIGlmKEcoYil8fEVhKGIpKXt2YXIgZj1cXFwib2JqZWN0XFxcIiE9PXR5cGVvZiBiO2Q9MDtmb3IoZT1iLmxlbmd0aDtkPGU7ZCsrKShmfHxkIGluIGIpJiZhLmNhbGwoYyxiW2RdLGQsYil9ZWxzZSBpZihiLmZvckVhY2gmJmIuZm9yRWFjaCE9PW0pYi5mb3JFYWNoKGEsYyxiKTtlbHNlIGlmKG5jKGIpKWZvcihkIGluIGIpYS5jYWxsKGMsYltkXSxkLGIpO2Vsc2UgaWYoXFxcImZ1bmN0aW9uXFxcIj09PXR5cGVvZiBiLmhhc093blByb3BlcnR5KWZvcihkIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShkKSYmXFxuYS5jYWxsKGMsYltkXSxkLGIpO2Vsc2UgZm9yKGQgaW4gYilYYS5jYWxsKGIsZCkmJmEuY2FsbChjLGJbZF0sZCxiKTtyZXR1cm4gYn1mdW5jdGlvbiBvYyhiLGEsYyl7Zm9yKHZhciBkPU9iamVjdC5rZXlzKGIpLnNvcnQoKSxlPTA7ZTxkLmxlbmd0aDtlKyspYS5jYWxsKGMsYltkW2VdXSxkW2VdKTtyZXR1cm4gZH1mdW5jdGlvbiBwYyhiKXtyZXR1cm4gZnVuY3Rpb24oYSxjKXtiKGMsYSl9fWZ1bmN0aW9uIFVkKCl7cmV0dXJuKytuYn1mdW5jdGlvbiBxYyhiLGEpe2E/Yi4kJGhhc2hLZXk9YTpkZWxldGUgYi4kJGhhc2hLZXl9ZnVuY3Rpb24gTmIoYixhLGMpe2Zvcih2YXIgZD1iLiQkaGFzaEtleSxlPTAsZj1hLmxlbmd0aDtlPGY7KytlKXt2YXIgZz1hW2VdO2lmKEgoZyl8fHooZykpZm9yKHZhciBoPU9iamVjdC5rZXlzKGcpLGw9MCxrPWgubGVuZ3RoO2w8aztsKyspe3ZhciBuPWhbbF0scj1nW25dO2MmJkgocik/YWEocik/YltuXT1uZXcgRGF0ZShyLnZhbHVlT2YoKSk6KEgoYltuXSl8fFxcbihiW25dPUcocik/W106e30pLE5iKGJbbl0sW3JdLCEwKSk6YltuXT1yfX1xYyhiLGQpO3JldHVybiBifWZ1bmN0aW9uIFAoYil7cmV0dXJuIE5iKGIsemEuY2FsbChhcmd1bWVudHMsMSksITEpfWZ1bmN0aW9uIFZkKGIpe3JldHVybiBOYihiLHphLmNhbGwoYXJndW1lbnRzLDEpLCEwKX1mdW5jdGlvbiBXKGIpe3JldHVybiBwYXJzZUludChiLDEwKX1mdW5jdGlvbiBPYihiLGEpe3JldHVybiBQKE9iamVjdC5jcmVhdGUoYiksYSl9ZnVuY3Rpb24gdigpe31mdW5jdGlvbiBZYShiKXtyZXR1cm4gYn1mdW5jdGlvbiByYShiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYn19ZnVuY3Rpb24gcmMoYil7cmV0dXJuIHooYi50b1N0cmluZykmJmIudG9TdHJpbmchPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nfWZ1bmN0aW9uIEEoYil7cmV0dXJuXFxcInVuZGVmaW5lZFxcXCI9PT10eXBlb2YgYn1mdW5jdGlvbiB3KGIpe3JldHVyblxcXCJ1bmRlZmluZWRcXFwiIT09dHlwZW9mIGJ9ZnVuY3Rpb24gSChiKXtyZXR1cm4gbnVsbCE9PVxcbmImJlxcXCJvYmplY3RcXFwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gbmMoYil7cmV0dXJuIG51bGwhPT1iJiZcXFwib2JqZWN0XFxcIj09PXR5cGVvZiBiJiYhc2MoYil9ZnVuY3Rpb24gTChiKXtyZXR1cm5cXFwic3RyaW5nXFxcIj09PXR5cGVvZiBifWZ1bmN0aW9uIFYoYil7cmV0dXJuXFxcIm51bWJlclxcXCI9PT10eXBlb2YgYn1mdW5jdGlvbiBhYShiKXtyZXR1cm5cXFwiW29iamVjdCBEYXRlXVxcXCI9PT1zYS5jYWxsKGIpfWZ1bmN0aW9uIHooYil7cmV0dXJuXFxcImZ1bmN0aW9uXFxcIj09PXR5cGVvZiBifWZ1bmN0aW9uIFphKGIpe3JldHVyblxcXCJbb2JqZWN0IFJlZ0V4cF1cXFwiPT09c2EuY2FsbChiKX1mdW5jdGlvbiBXYShiKXtyZXR1cm4gYiYmYi53aW5kb3c9PT1ifWZ1bmN0aW9uICRhKGIpe3JldHVybiBiJiZiLiRldmFsQXN5bmMmJmIuJHdhdGNofWZ1bmN0aW9uIGFiKGIpe3JldHVyblxcXCJib29sZWFuXFxcIj09PXR5cGVvZiBifWZ1bmN0aW9uIHRjKGIpe3JldHVybiEoIWJ8fCEoYi5ub2RlTmFtZXx8Yi5wcm9wJiZiLmF0dHImJmIuZmluZCkpfVxcbmZ1bmN0aW9uIFdkKGIpe3ZhciBhPXt9O2I9Yi5zcGxpdChcXFwiLFxcXCIpO3ZhciBjO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspYVtiW2NdXT0hMDtyZXR1cm4gYX1mdW5jdGlvbiB0YShiKXtyZXR1cm4gTShiLm5vZGVOYW1lfHxiWzBdJiZiWzBdLm5vZGVOYW1lKX1mdW5jdGlvbiBiYihiLGEpe3ZhciBjPWIuaW5kZXhPZihhKTswPD1jJiZiLnNwbGljZShjLDEpO3JldHVybiBjfWZ1bmN0aW9uIGZhKGIsYSxjLGQpe2lmKFdhKGIpfHwkYShiKSl0aHJvdyBGYShcXFwiY3B3c1xcXCIpO2lmKHVjLnRlc3Qoc2EuY2FsbChhKSkpdGhyb3cgRmEoXFxcImNwdGFcXFwiKTtpZihhKXtpZihiPT09YSl0aHJvdyBGYShcXFwiY3BpXFxcIik7Yz1jfHxbXTtkPWR8fFtdO0goYikmJihjLnB1c2goYiksZC5wdXNoKGEpKTt2YXIgZTtpZihHKGIpKWZvcihlPWEubGVuZ3RoPTA7ZTxiLmxlbmd0aDtlKyspYS5wdXNoKGZhKGJbZV0sbnVsbCxjLGQpKTtlbHNle3ZhciBmPWEuJCRoYXNoS2V5O0coYSk/YS5sZW5ndGg9MDptKGEsZnVuY3Rpb24oYixcXG5jKXtkZWxldGUgYVtjXX0pO2lmKG5jKGIpKWZvcihlIGluIGIpYVtlXT1mYShiW2VdLG51bGwsYyxkKTtlbHNlIGlmKGImJlxcXCJmdW5jdGlvblxcXCI9PT10eXBlb2YgYi5oYXNPd25Qcm9wZXJ0eSlmb3IoZSBpbiBiKWIuaGFzT3duUHJvcGVydHkoZSkmJihhW2VdPWZhKGJbZV0sbnVsbCxjLGQpKTtlbHNlIGZvcihlIGluIGIpWGEuY2FsbChiLGUpJiYoYVtlXT1mYShiW2VdLG51bGwsYyxkKSk7cWMoYSxmKX19ZWxzZSBpZihhPWIsSChiKSl7aWYoYyYmLTEhPT0oZj1jLmluZGV4T2YoYikpKXJldHVybiBkW2ZdO2lmKEcoYikpcmV0dXJuIGZhKGIsW10sYyxkKTtpZih1Yy50ZXN0KHNhLmNhbGwoYikpKWE9bmV3IGIuY29uc3RydWN0b3IoYik7ZWxzZSBpZihhYShiKSlhPW5ldyBEYXRlKGIuZ2V0VGltZSgpKTtlbHNlIGlmKFphKGIpKWE9bmV3IFJlZ0V4cChiLnNvdXJjZSxiLnRvU3RyaW5nKCkubWF0Y2goL1teXFxcXC9dKiQvKVswXSksYS5sYXN0SW5kZXg9Yi5sYXN0SW5kZXg7ZWxzZSByZXR1cm4gZT1cXG5PYmplY3QuY3JlYXRlKHNjKGIpKSxmYShiLGUsYyxkKTtkJiYoYy5wdXNoKGIpLGQucHVzaChhKSl9cmV0dXJuIGF9ZnVuY3Rpb24gaWEoYixhKXtpZihHKGIpKXthPWF8fFtdO2Zvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7YzxkO2MrKylhW2NdPWJbY119ZWxzZSBpZihIKGIpKWZvcihjIGluIGE9YXx8e30sYilpZihcXFwiJFxcXCIhPT1jLmNoYXJBdCgwKXx8XFxcIiRcXFwiIT09Yy5jaGFyQXQoMSkpYVtjXT1iW2NdO3JldHVybiBhfHxifWZ1bmN0aW9uIGthKGIsYSl7aWYoYj09PWEpcmV0dXJuITA7aWYobnVsbD09PWJ8fG51bGw9PT1hKXJldHVybiExO2lmKGIhPT1iJiZhIT09YSlyZXR1cm4hMDt2YXIgYz10eXBlb2YgYixkO2lmKGM9PXR5cGVvZiBhJiZcXFwib2JqZWN0XFxcIj09YylpZihHKGIpKXtpZighRyhhKSlyZXR1cm4hMTtpZigoYz1iLmxlbmd0aCk9PWEubGVuZ3RoKXtmb3IoZD0wO2Q8YztkKyspaWYoIWthKGJbZF0sYVtkXSkpcmV0dXJuITE7cmV0dXJuITB9fWVsc2V7aWYoYWEoYikpcmV0dXJuIGFhKGEpP1xcbmthKGIuZ2V0VGltZSgpLGEuZ2V0VGltZSgpKTohMTtpZihaYShiKSlyZXR1cm4gWmEoYSk/Yi50b1N0cmluZygpPT1hLnRvU3RyaW5nKCk6ITE7aWYoJGEoYil8fCRhKGEpfHxXYShiKXx8V2EoYSl8fEcoYSl8fGFhKGEpfHxaYShhKSlyZXR1cm4hMTtjPWdhKCk7Zm9yKGQgaW4gYilpZihcXFwiJFxcXCIhPT1kLmNoYXJBdCgwKSYmIXooYltkXSkpe2lmKCFrYShiW2RdLGFbZF0pKXJldHVybiExO2NbZF09ITB9Zm9yKGQgaW4gYSlpZighKGQgaW4gY3x8XFxcIiRcXFwiPT09ZC5jaGFyQXQoMCl8fGFbZF09PT10fHx6KGFbZF0pKSlyZXR1cm4hMTtyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBjYihiLGEsYyl7cmV0dXJuIGIuY29uY2F0KHphLmNhbGwoYSxjKSl9ZnVuY3Rpb24gdmMoYixhKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGg/emEuY2FsbChhcmd1bWVudHMsMik6W107cmV0dXJuIXooYSl8fGEgaW5zdGFuY2VvZiBSZWdFeHA/YTpjLmxlbmd0aD9mdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP1xcbmEuYXBwbHkoYixjYihjLGFyZ3VtZW50cywwKSk6YS5hcHBseShiLGMpfTpmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP2EuYXBwbHkoYixhcmd1bWVudHMpOmEuY2FsbChiKX19ZnVuY3Rpb24gWGQoYixhKXt2YXIgYz1hO1xcXCJzdHJpbmdcXFwiPT09dHlwZW9mIGImJlxcXCIkXFxcIj09PWIuY2hhckF0KDApJiZcXFwiJFxcXCI9PT1iLmNoYXJBdCgxKT9jPXQ6V2EoYSk/Yz1cXFwiJFdJTkRPV1xcXCI6YSYmVT09PWE/Yz1cXFwiJERPQ1VNRU5UXFxcIjokYShhKSYmKGM9XFxcIiRTQ09QRVxcXCIpO3JldHVybiBjfWZ1bmN0aW9uIGRiKGIsYSl7aWYoXFxcInVuZGVmaW5lZFxcXCI9PT10eXBlb2YgYilyZXR1cm4gdDtWKGEpfHwoYT1hPzI6bnVsbCk7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGIsWGQsYSl9ZnVuY3Rpb24gd2MoYil7cmV0dXJuIEwoYik/SlNPTi5wYXJzZShiKTpifWZ1bmN0aW9uIHhjKGIsYSl7dmFyIGM9RGF0ZS5wYXJzZShcXFwiSmFuIDAxLCAxOTcwIDAwOjAwOjAwIFxcXCIrYikvNkU0O3JldHVybiBpc05hTihjKT9hOmN9ZnVuY3Rpb24gUGIoYixcXG5hLGMpe2M9Yz8tMToxO3ZhciBkPXhjKGEsYi5nZXRUaW1lem9uZU9mZnNldCgpKTthPWI7Yj1jKihkLWIuZ2V0VGltZXpvbmVPZmZzZXQoKSk7YT1uZXcgRGF0ZShhLmdldFRpbWUoKSk7YS5zZXRNaW51dGVzKGEuZ2V0TWludXRlcygpK2IpO3JldHVybiBhfWZ1bmN0aW9uIHVhKGIpe2I9eShiKS5jbG9uZSgpO3RyeXtiLmVtcHR5KCl9Y2F0Y2goYSl7fXZhciBjPXkoXFxcIjxkaXY+XFxcIikuYXBwZW5kKGIpLmh0bWwoKTt0cnl7cmV0dXJuIGJbMF0ubm9kZVR5cGU9PT1OYT9NKGMpOmMubWF0Y2goL14oPFtePl0rPikvKVsxXS5yZXBsYWNlKC9ePChbXFxcXHdcXFxcLV0rKS8sZnVuY3Rpb24oYSxiKXtyZXR1cm5cXFwiPFxcXCIrTShiKX0pfWNhdGNoKGQpe3JldHVybiBNKGMpfX1mdW5jdGlvbiB5YyhiKXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChiKX1jYXRjaChhKXt9fWZ1bmN0aW9uIHpjKGIpe3ZhciBhPXt9LGMsZDttKChifHxcXFwiXFxcIikuc3BsaXQoXFxcIiZcXFwiKSxmdW5jdGlvbihiKXtiJiYoYz1iLnJlcGxhY2UoL1xcXFwrL2csXFxuXFxcIiUyMFxcXCIpLnNwbGl0KFxcXCI9XFxcIiksZD15YyhjWzBdKSx3KGQpJiYoYj13KGNbMV0pP3ljKGNbMV0pOiEwLFhhLmNhbGwoYSxkKT9HKGFbZF0pP2FbZF0ucHVzaChiKTphW2RdPVthW2RdLGJdOmFbZF09YikpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gUWIoYil7dmFyIGE9W107bShiLGZ1bmN0aW9uKGIsZCl7RyhiKT9tKGIsZnVuY3Rpb24oYil7YS5wdXNoKG1hKGQsITApKyghMD09PWI/XFxcIlxcXCI6XFxcIj1cXFwiK21hKGIsITApKSl9KTphLnB1c2gobWEoZCwhMCkrKCEwPT09Yj9cXFwiXFxcIjpcXFwiPVxcXCIrbWEoYiwhMCkpKX0pO3JldHVybiBhLmxlbmd0aD9hLmpvaW4oXFxcIiZcXFwiKTpcXFwiXFxcIn1mdW5jdGlvbiBvYihiKXtyZXR1cm4gbWEoYiwhMCkucmVwbGFjZSgvJTI2L2dpLFxcXCImXFxcIikucmVwbGFjZSgvJTNEL2dpLFxcXCI9XFxcIikucmVwbGFjZSgvJTJCL2dpLFxcXCIrXFxcIil9ZnVuY3Rpb24gbWEoYixhKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGIpLnJlcGxhY2UoLyU0MC9naSxcXFwiQFxcXCIpLnJlcGxhY2UoLyUzQS9naSxcXFwiOlxcXCIpLnJlcGxhY2UoLyUyNC9nLFxcblxcXCIkXFxcIikucmVwbGFjZSgvJTJDL2dpLFxcXCIsXFxcIikucmVwbGFjZSgvJTNCL2dpLFxcXCI7XFxcIikucmVwbGFjZSgvJTIwL2csYT9cXFwiJTIwXFxcIjpcXFwiK1xcXCIpfWZ1bmN0aW9uIFlkKGIsYSl7dmFyIGMsZCxlPU9hLmxlbmd0aDtmb3IoZD0wO2Q8ZTsrK2QpaWYoYz1PYVtkXSthLEwoYz1iLmdldEF0dHJpYnV0ZShjKSkpcmV0dXJuIGM7cmV0dXJuIG51bGx9ZnVuY3Rpb24gWmQoYixhKXt2YXIgYyxkLGU9e307bShPYSxmdW5jdGlvbihhKXthKz1cXFwiYXBwXFxcIjshYyYmYi5oYXNBdHRyaWJ1dGUmJmIuaGFzQXR0cmlidXRlKGEpJiYoYz1iLGQ9Yi5nZXRBdHRyaWJ1dGUoYSkpfSk7bShPYSxmdW5jdGlvbihhKXthKz1cXFwiYXBwXFxcIjt2YXIgZTshYyYmKGU9Yi5xdWVyeVNlbGVjdG9yKFxcXCJbXFxcIithLnJlcGxhY2UoXFxcIjpcXFwiLFxcXCJcXFxcXFxcXDpcXFwiKStcXFwiXVxcXCIpKSYmKGM9ZSxkPWUuZ2V0QXR0cmlidXRlKGEpKX0pO2MmJihlLnN0cmljdERpPW51bGwhPT1ZZChjLFxcXCJzdHJpY3QtZGlcXFwiKSxhKGMsZD9bZF06W10sZSkpfWZ1bmN0aW9uIEFjKGIsYSxjKXtIKGMpfHxcXG4oYz17fSk7Yz1QKHtzdHJpY3REaTohMX0sYyk7dmFyIGQ9ZnVuY3Rpb24oKXtiPXkoYik7aWYoYi5pbmplY3RvcigpKXt2YXIgZD1iWzBdPT09VT9cXFwiZG9jdW1lbnRcXFwiOnVhKGIpO3Rocm93IEZhKFxcXCJidHN0cnBkXFxcIixkLnJlcGxhY2UoLzwvLFxcXCImbHQ7XFxcIikucmVwbGFjZSgvPi8sXFxcIiZndDtcXFwiKSk7fWE9YXx8W107YS51bnNoaWZ0KFtcXFwiJHByb3ZpZGVcXFwiLGZ1bmN0aW9uKGEpe2EudmFsdWUoXFxcIiRyb290RWxlbWVudFxcXCIsYil9XSk7Yy5kZWJ1Z0luZm9FbmFibGVkJiZhLnB1c2goW1xcXCIkY29tcGlsZVByb3ZpZGVyXFxcIixmdW5jdGlvbihhKXthLmRlYnVnSW5mb0VuYWJsZWQoITApfV0pO2EudW5zaGlmdChcXFwibmdcXFwiKTtkPWViKGEsYy5zdHJpY3REaSk7ZC5pbnZva2UoW1xcXCIkcm9vdFNjb3BlXFxcIixcXFwiJHJvb3RFbGVtZW50XFxcIixcXFwiJGNvbXBpbGVcXFwiLFxcXCIkaW5qZWN0b3JcXFwiLGZ1bmN0aW9uKGEsYixjLGQpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7Yi5kYXRhKFxcXCIkaW5qZWN0b3JcXFwiLGQpO2MoYikoYSl9KX1dKTtyZXR1cm4gZH0sZT1cXG4vXk5HX0VOQUJMRV9ERUJVR19JTkZPIS8sZj0vXk5HX0RFRkVSX0JPT1RTVFJBUCEvO08mJmUudGVzdChPLm5hbWUpJiYoYy5kZWJ1Z0luZm9FbmFibGVkPSEwLE8ubmFtZT1PLm5hbWUucmVwbGFjZShlLFxcXCJcXFwiKSk7aWYoTyYmIWYudGVzdChPLm5hbWUpKXJldHVybiBkKCk7Ty5uYW1lPU8ubmFtZS5yZXBsYWNlKGYsXFxcIlxcXCIpO2NhLnJlc3VtZUJvb3RzdHJhcD1mdW5jdGlvbihiKXttKGIsZnVuY3Rpb24oYil7YS5wdXNoKGIpfSk7cmV0dXJuIGQoKX07eihjYS5yZXN1bWVEZWZlcnJlZEJvb3RzdHJhcCkmJmNhLnJlc3VtZURlZmVycmVkQm9vdHN0cmFwKCl9ZnVuY3Rpb24gJGQoKXtPLm5hbWU9XFxcIk5HX0VOQUJMRV9ERUJVR19JTkZPIVxcXCIrTy5uYW1lO08ubG9jYXRpb24ucmVsb2FkKCl9ZnVuY3Rpb24gYWUoYil7Yj1jYS5lbGVtZW50KGIpLmluamVjdG9yKCk7aWYoIWIpdGhyb3cgRmEoXFxcInRlc3RcXFwiKTtyZXR1cm4gYi5nZXQoXFxcIiQkdGVzdGFiaWxpdHlcXFwiKX1mdW5jdGlvbiBCYyhiLGEpe2E9YXx8XFxuXFxcIl9cXFwiO3JldHVybiBiLnJlcGxhY2UoYmUsZnVuY3Rpb24oYixkKXtyZXR1cm4oZD9hOlxcXCJcXFwiKStiLnRvTG93ZXJDYXNlKCl9KX1mdW5jdGlvbiBjZSgpe3ZhciBiO2lmKCFDYyl7dmFyIGE9cGIoKTtsYT1PLmpRdWVyeTt3KGEpJiYobGE9bnVsbD09PWE/dDpPW2FdKTtsYSYmbGEuZm4ub24/KHk9bGEsUChsYS5mbix7c2NvcGU6UGEuc2NvcGUsaXNvbGF0ZVNjb3BlOlBhLmlzb2xhdGVTY29wZSxjb250cm9sbGVyOlBhLmNvbnRyb2xsZXIsaW5qZWN0b3I6UGEuaW5qZWN0b3IsaW5oZXJpdGVkRGF0YTpQYS5pbmhlcml0ZWREYXRhfSksYj1sYS5jbGVhbkRhdGEsbGEuY2xlYW5EYXRhPWZ1bmN0aW9uKGEpe3ZhciBkO2lmKFJiKVJiPSExO2Vsc2UgZm9yKHZhciBlPTAsZjtudWxsIT0oZj1hW2VdKTtlKyspKGQ9bGEuX2RhdGEoZixcXFwiZXZlbnRzXFxcIikpJiZkLiRkZXN0cm95JiZsYShmKS50cmlnZ2VySGFuZGxlcihcXFwiJGRlc3Ryb3lcXFwiKTtiKGEpfSk6eT1RO2NhLmVsZW1lbnQ9eTtDYz0hMH19ZnVuY3Rpb24gU2IoYixcXG5hLGMpe2lmKCFiKXRocm93IEZhKFxcXCJhcmVxXFxcIixhfHxcXFwiP1xcXCIsY3x8XFxcInJlcXVpcmVkXFxcIik7cmV0dXJuIGJ9ZnVuY3Rpb24gUWEoYixhLGMpe2MmJkcoYikmJihiPWJbYi5sZW5ndGgtMV0pO1NiKHooYiksYSxcXFwibm90IGEgZnVuY3Rpb24sIGdvdCBcXFwiKyhiJiZcXFwib2JqZWN0XFxcIj09PXR5cGVvZiBiP2IuY29uc3RydWN0b3IubmFtZXx8XFxcIk9iamVjdFxcXCI6dHlwZW9mIGIpKTtyZXR1cm4gYn1mdW5jdGlvbiBSYShiLGEpe2lmKFxcXCJoYXNPd25Qcm9wZXJ0eVxcXCI9PT1iKXRocm93IEZhKFxcXCJiYWRuYW1lXFxcIixhKTt9ZnVuY3Rpb24gRGMoYixhLGMpe2lmKCFhKXJldHVybiBiO2E9YS5zcGxpdChcXFwiLlxcXCIpO2Zvcih2YXIgZCxlPWIsZj1hLmxlbmd0aCxnPTA7ZzxmO2crKylkPWFbZ10sYiYmKGI9KGU9YilbZF0pO3JldHVybiFjJiZ6KGIpP3ZjKGUsYik6Yn1mdW5jdGlvbiBxYihiKXt2YXIgYT1iWzBdO2I9YltiLmxlbmd0aC0xXTt2YXIgYz1bYV07ZG97YT1hLm5leHRTaWJsaW5nO2lmKCFhKWJyZWFrO2MucHVzaChhKX13aGlsZShhIT09XFxuYik7cmV0dXJuIHkoYyl9ZnVuY3Rpb24gZ2EoKXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKX1mdW5jdGlvbiBkZShiKXtmdW5jdGlvbiBhKGEsYixjKXtyZXR1cm4gYVtiXXx8KGFbYl09YygpKX12YXIgYz1KKFxcXCIkaW5qZWN0b3JcXFwiKSxkPUooXFxcIm5nXFxcIik7Yj1hKGIsXFxcImFuZ3VsYXJcXFwiLE9iamVjdCk7Yi4kJG1pbkVycj1iLiQkbWluRXJyfHxKO3JldHVybiBhKGIsXFxcIm1vZHVsZVxcXCIsZnVuY3Rpb24oKXt2YXIgYj17fTtyZXR1cm4gZnVuY3Rpb24oZixnLGgpe2lmKFxcXCJoYXNPd25Qcm9wZXJ0eVxcXCI9PT1mKXRocm93IGQoXFxcImJhZG5hbWVcXFwiLFxcXCJtb2R1bGVcXFwiKTtnJiZiLmhhc093blByb3BlcnR5KGYpJiYoYltmXT1udWxsKTtyZXR1cm4gYShiLGYsZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGIsYyxlLGYpe2Z8fChmPWQpO3JldHVybiBmdW5jdGlvbigpe2ZbZXx8XFxcInB1c2hcXFwiXShbYixjLGFyZ3VtZW50c10pO3JldHVybiBDfX1mdW5jdGlvbiBiKGEsYyl7cmV0dXJuIGZ1bmN0aW9uKGIsZSl7ZSYmeihlKSYmXFxuKGUuJCRtb2R1bGVOYW1lPWYpO2QucHVzaChbYSxjLGFyZ3VtZW50c10pO3JldHVybiBDfX1pZighZyl0aHJvdyBjKFxcXCJub21vZFxcXCIsZik7dmFyIGQ9W10sZT1bXSxzPVtdLHg9YShcXFwiJGluamVjdG9yXFxcIixcXFwiaW52b2tlXFxcIixcXFwicHVzaFxcXCIsZSksQz17X2ludm9rZVF1ZXVlOmQsX2NvbmZpZ0Jsb2NrczplLF9ydW5CbG9ja3M6cyxyZXF1aXJlczpnLG5hbWU6Zixwcm92aWRlcjpiKFxcXCIkcHJvdmlkZVxcXCIsXFxcInByb3ZpZGVyXFxcIiksZmFjdG9yeTpiKFxcXCIkcHJvdmlkZVxcXCIsXFxcImZhY3RvcnlcXFwiKSxzZXJ2aWNlOmIoXFxcIiRwcm92aWRlXFxcIixcXFwic2VydmljZVxcXCIpLHZhbHVlOmEoXFxcIiRwcm92aWRlXFxcIixcXFwidmFsdWVcXFwiKSxjb25zdGFudDphKFxcXCIkcHJvdmlkZVxcXCIsXFxcImNvbnN0YW50XFxcIixcXFwidW5zaGlmdFxcXCIpLGRlY29yYXRvcjpiKFxcXCIkcHJvdmlkZVxcXCIsXFxcImRlY29yYXRvclxcXCIpLGFuaW1hdGlvbjpiKFxcXCIkYW5pbWF0ZVByb3ZpZGVyXFxcIixcXFwicmVnaXN0ZXJcXFwiKSxmaWx0ZXI6YihcXFwiJGZpbHRlclByb3ZpZGVyXFxcIixcXFwicmVnaXN0ZXJcXFwiKSxjb250cm9sbGVyOmIoXFxcIiRjb250cm9sbGVyUHJvdmlkZXJcXFwiLFxcblxcXCJyZWdpc3RlclxcXCIpLGRpcmVjdGl2ZTpiKFxcXCIkY29tcGlsZVByb3ZpZGVyXFxcIixcXFwiZGlyZWN0aXZlXFxcIiksY29uZmlnOngscnVuOmZ1bmN0aW9uKGEpe3MucHVzaChhKTtyZXR1cm4gdGhpc319O2gmJngoaCk7cmV0dXJuIEN9KX19KX1mdW5jdGlvbiBlZShiKXtQKGIse2Jvb3RzdHJhcDpBYyxjb3B5OmZhLGV4dGVuZDpQLG1lcmdlOlZkLGVxdWFsczprYSxlbGVtZW50OnksZm9yRWFjaDptLGluamVjdG9yOmViLG5vb3A6dixiaW5kOnZjLHRvSnNvbjpkYixmcm9tSnNvbjp3YyxpZGVudGl0eTpZYSxpc1VuZGVmaW5lZDpBLGlzRGVmaW5lZDp3LGlzU3RyaW5nOkwsaXNGdW5jdGlvbjp6LGlzT2JqZWN0OkgsaXNOdW1iZXI6Vixpc0VsZW1lbnQ6dGMsaXNBcnJheTpHLHZlcnNpb246ZmUsaXNEYXRlOmFhLGxvd2VyY2FzZTpNLHVwcGVyY2FzZTpyYixjYWxsYmFja3M6e2NvdW50ZXI6MH0sZ2V0VGVzdGFiaWxpdHk6YWUsJCRtaW5FcnI6SiwkJGNzcDpmYixyZWxvYWRXaXRoRGVidWdJbmZvOiRkfSk7XFxuZ2I9ZGUoTyk7dHJ5e2diKFxcXCJuZ0xvY2FsZVxcXCIpfWNhdGNoKGEpe2diKFxcXCJuZ0xvY2FsZVxcXCIsW10pLnByb3ZpZGVyKFxcXCIkbG9jYWxlXFxcIixnZSl9Z2IoXFxcIm5nXFxcIixbXFxcIm5nTG9jYWxlXFxcIl0sW1xcXCIkcHJvdmlkZVxcXCIsZnVuY3Rpb24oYSl7YS5wcm92aWRlcih7JCRzYW5pdGl6ZVVyaTpoZX0pO2EucHJvdmlkZXIoXFxcIiRjb21waWxlXFxcIixFYykuZGlyZWN0aXZlKHthOmllLGlucHV0OkZjLHRleHRhcmVhOkZjLGZvcm06amUsc2NyaXB0OmtlLHNlbGVjdDpsZSxzdHlsZTptZSxvcHRpb246bmUsbmdCaW5kOm9lLG5nQmluZEh0bWw6cGUsbmdCaW5kVGVtcGxhdGU6cWUsbmdDbGFzczpyZSxuZ0NsYXNzRXZlbjpzZSxuZ0NsYXNzT2RkOnRlLG5nQ2xvYWs6dWUsbmdDb250cm9sbGVyOnZlLG5nRm9ybTp3ZSxuZ0hpZGU6eGUsbmdJZjp5ZSxuZ0luY2x1ZGU6emUsbmdJbml0OkFlLG5nTm9uQmluZGFibGU6QmUsbmdQbHVyYWxpemU6Q2UsbmdSZXBlYXQ6RGUsbmdTaG93OkVlLG5nU3R5bGU6RmUsbmdTd2l0Y2g6R2UsXFxubmdTd2l0Y2hXaGVuOkhlLG5nU3dpdGNoRGVmYXVsdDpJZSxuZ09wdGlvbnM6SmUsbmdUcmFuc2NsdWRlOktlLG5nTW9kZWw6TGUsbmdMaXN0Ok1lLG5nQ2hhbmdlOk5lLHBhdHRlcm46R2MsbmdQYXR0ZXJuOkdjLHJlcXVpcmVkOkhjLG5nUmVxdWlyZWQ6SGMsbWlubGVuZ3RoOkljLG5nTWlubGVuZ3RoOkljLG1heGxlbmd0aDpKYyxuZ01heGxlbmd0aDpKYyxuZ1ZhbHVlOk9lLG5nTW9kZWxPcHRpb25zOlBlfSkuZGlyZWN0aXZlKHtuZ0luY2x1ZGU6UWV9KS5kaXJlY3RpdmUoc2IpLmRpcmVjdGl2ZShLYyk7YS5wcm92aWRlcih7JGFuY2hvclNjcm9sbDpSZSwkYW5pbWF0ZTpTZSwkJGFuaW1hdGVRdWV1ZTpUZSwkJEFuaW1hdGVSdW5uZXI6VWUsJGJyb3dzZXI6VmUsJGNhY2hlRmFjdG9yeTpXZSwkY29udHJvbGxlcjpYZSwkZG9jdW1lbnQ6WWUsJGV4Y2VwdGlvbkhhbmRsZXI6WmUsJGZpbHRlcjpMYywkaW50ZXJwb2xhdGU6JGUsJGludGVydmFsOmFmLCRodHRwOmJmLCRodHRwUGFyYW1TZXJpYWxpemVyOmNmLFxcbiRodHRwUGFyYW1TZXJpYWxpemVySlFMaWtlOmRmLCRodHRwQmFja2VuZDplZiwkbG9jYXRpb246ZmYsJGxvZzpnZiwkcGFyc2U6aGYsJHJvb3RTY29wZTpqZiwkcTprZiwkJHE6bGYsJHNjZTptZiwkc2NlRGVsZWdhdGU6bmYsJHNuaWZmZXI6b2YsJHRlbXBsYXRlQ2FjaGU6cGYsJHRlbXBsYXRlUmVxdWVzdDpxZiwkJHRlc3RhYmlsaXR5OnJmLCR0aW1lb3V0OnNmLCR3aW5kb3c6dGYsJCRyQUY6dWYsJCRhc3luY0NhbGxiYWNrOnZmLCQkanFMaXRlOndmLCQkSGFzaE1hcDp4ZiwkJGNvb2tpZVJlYWRlcjp5Zn0pfV0pfWZ1bmN0aW9uIGhiKGIpe3JldHVybiBiLnJlcGxhY2UoemYsZnVuY3Rpb24oYSxiLGQsZSl7cmV0dXJuIGU/ZC50b1VwcGVyQ2FzZSgpOmR9KS5yZXBsYWNlKEFmLFxcXCJNb3okMVxcXCIpfWZ1bmN0aW9uIE1jKGIpe2I9Yi5ub2RlVHlwZTtyZXR1cm4gYj09PXFhfHwhYnx8OT09PWJ9ZnVuY3Rpb24gTmMoYixhKXt2YXIgYyxkLGU9YS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXFxuZj1bXTtpZihUYi50ZXN0KGIpKXtjPWN8fGUuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50KFxcXCJkaXZcXFwiKSk7ZD0oQmYuZXhlYyhiKXx8W1xcXCJcXFwiLFxcXCJcXFwiXSlbMV0udG9Mb3dlckNhc2UoKTtkPW5hW2RdfHxuYS5fZGVmYXVsdDtjLmlubmVySFRNTD1kWzFdK2IucmVwbGFjZShDZixcXFwiPCQxPjwvJDI+XFxcIikrZFsyXTtmb3IoZD1kWzBdO2QtLTspYz1jLmxhc3RDaGlsZDtmPWNiKGYsYy5jaGlsZE5vZGVzKTtjPWUuZmlyc3RDaGlsZDtjLnRleHRDb250ZW50PVxcXCJcXFwifWVsc2UgZi5wdXNoKGEuY3JlYXRlVGV4dE5vZGUoYikpO2UudGV4dENvbnRlbnQ9XFxcIlxcXCI7ZS5pbm5lckhUTUw9XFxcIlxcXCI7bShmLGZ1bmN0aW9uKGEpe2UuYXBwZW5kQ2hpbGQoYSl9KTtyZXR1cm4gZX1mdW5jdGlvbiBRKGIpe2lmKGIgaW5zdGFuY2VvZiBRKXJldHVybiBiO3ZhciBhO0woYikmJihiPVIoYiksYT0hMCk7aWYoISh0aGlzIGluc3RhbmNlb2YgUSkpe2lmKGEmJlxcXCI8XFxcIiE9Yi5jaGFyQXQoMCkpdGhyb3cgVWIoXFxcIm5vc2VsXFxcIik7cmV0dXJuIG5ldyBRKGIpfWlmKGEpe2E9XFxuVTt2YXIgYztiPShjPURmLmV4ZWMoYikpP1thLmNyZWF0ZUVsZW1lbnQoY1sxXSldOihjPU5jKGIsYSkpP2MuY2hpbGROb2RlczpbXX1PYyh0aGlzLGIpfWZ1bmN0aW9uIFZiKGIpe3JldHVybiBiLmNsb25lTm9kZSghMCl9ZnVuY3Rpb24gdGIoYixhKXthfHx1YihiKTtpZihiLnF1ZXJ5U2VsZWN0b3JBbGwpZm9yKHZhciBjPWIucXVlcnlTZWxlY3RvckFsbChcXFwiKlxcXCIpLGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspdWIoY1tkXSl9ZnVuY3Rpb24gUGMoYixhLGMsZCl7aWYodyhkKSl0aHJvdyBVYihcXFwib2ZmYXJnc1xcXCIpO3ZhciBlPShkPXZiKGIpKSYmZC5ldmVudHMsZj1kJiZkLmhhbmRsZTtpZihmKWlmKGEpbShhLnNwbGl0KFxcXCIgXFxcIiksZnVuY3Rpb24oYSl7aWYodyhjKSl7dmFyIGQ9ZVthXTtiYihkfHxbXSxjKTtpZihkJiYwPGQubGVuZ3RoKXJldHVybn1iLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxmLCExKTtkZWxldGUgZVthXX0pO2Vsc2UgZm9yKGEgaW4gZSlcXFwiJGRlc3Ryb3lcXFwiIT09YSYmYi5yZW1vdmVFdmVudExpc3RlbmVyKGEsXFxuZiwhMSksZGVsZXRlIGVbYV19ZnVuY3Rpb24gdWIoYixhKXt2YXIgYz1iLm5nMzM5LGQ9YyYmaWJbY107ZCYmKGE/ZGVsZXRlIGQuZGF0YVthXTooZC5oYW5kbGUmJihkLmV2ZW50cy4kZGVzdHJveSYmZC5oYW5kbGUoe30sXFxcIiRkZXN0cm95XFxcIiksUGMoYikpLGRlbGV0ZSBpYltjXSxiLm5nMzM5PXQpKX1mdW5jdGlvbiB2YihiLGEpe3ZhciBjPWIubmczMzksYz1jJiZpYltjXTthJiYhYyYmKGIubmczMzk9Yz0rK0VmLGM9aWJbY109e2V2ZW50czp7fSxkYXRhOnt9LGhhbmRsZTp0fSk7cmV0dXJuIGN9ZnVuY3Rpb24gV2IoYixhLGMpe2lmKE1jKGIpKXt2YXIgZD13KGMpLGU9IWQmJmEmJiFIKGEpLGY9IWE7Yj0oYj12YihiLCFlKSkmJmIuZGF0YTtpZihkKWJbYV09YztlbHNle2lmKGYpcmV0dXJuIGI7aWYoZSlyZXR1cm4gYiYmYlthXTtQKGIsYSl9fX1mdW5jdGlvbiB3YihiLGEpe3JldHVybiBiLmdldEF0dHJpYnV0ZT8tMTwoXFxcIiBcXFwiKyhiLmdldEF0dHJpYnV0ZShcXFwiY2xhc3NcXFwiKXx8XFxcIlxcXCIpK1xcblxcXCIgXFxcIikucmVwbGFjZSgvW1xcXFxuXFxcXHRdL2csXFxcIiBcXFwiKS5pbmRleE9mKFxcXCIgXFxcIithK1xcXCIgXFxcIik6ITF9ZnVuY3Rpb24geGIoYixhKXthJiZiLnNldEF0dHJpYnV0ZSYmbShhLnNwbGl0KFxcXCIgXFxcIiksZnVuY3Rpb24oYSl7Yi5zZXRBdHRyaWJ1dGUoXFxcImNsYXNzXFxcIixSKChcXFwiIFxcXCIrKGIuZ2V0QXR0cmlidXRlKFxcXCJjbGFzc1xcXCIpfHxcXFwiXFxcIikrXFxcIiBcXFwiKS5yZXBsYWNlKC9bXFxcXG5cXFxcdF0vZyxcXFwiIFxcXCIpLnJlcGxhY2UoXFxcIiBcXFwiK1IoYSkrXFxcIiBcXFwiLFxcXCIgXFxcIikpKX0pfWZ1bmN0aW9uIHliKGIsYSl7aWYoYSYmYi5zZXRBdHRyaWJ1dGUpe3ZhciBjPShcXFwiIFxcXCIrKGIuZ2V0QXR0cmlidXRlKFxcXCJjbGFzc1xcXCIpfHxcXFwiXFxcIikrXFxcIiBcXFwiKS5yZXBsYWNlKC9bXFxcXG5cXFxcdF0vZyxcXFwiIFxcXCIpO20oYS5zcGxpdChcXFwiIFxcXCIpLGZ1bmN0aW9uKGEpe2E9UihhKTstMT09PWMuaW5kZXhPZihcXFwiIFxcXCIrYStcXFwiIFxcXCIpJiYoYys9YStcXFwiIFxcXCIpfSk7Yi5zZXRBdHRyaWJ1dGUoXFxcImNsYXNzXFxcIixSKGMpKX19ZnVuY3Rpb24gT2MoYixhKXtpZihhKWlmKGEubm9kZVR5cGUpYltiLmxlbmd0aCsrXT1hO2Vsc2V7dmFyIGM9XFxuYS5sZW5ndGg7aWYoXFxcIm51bWJlclxcXCI9PT10eXBlb2YgYyYmYS53aW5kb3chPT1hKXtpZihjKWZvcih2YXIgZD0wO2Q8YztkKyspYltiLmxlbmd0aCsrXT1hW2RdfWVsc2UgYltiLmxlbmd0aCsrXT1hfX1mdW5jdGlvbiBRYyhiLGEpe3JldHVybiB6YihiLFxcXCIkXFxcIisoYXx8XFxcIm5nQ29udHJvbGxlclxcXCIpK1xcXCJDb250cm9sbGVyXFxcIil9ZnVuY3Rpb24gemIoYixhLGMpezk9PWIubm9kZVR5cGUmJihiPWIuZG9jdW1lbnRFbGVtZW50KTtmb3IoYT1HKGEpP2E6W2FdO2I7KXtmb3IodmFyIGQ9MCxlPWEubGVuZ3RoO2Q8ZTtkKyspaWYoKGM9eS5kYXRhKGIsYVtkXSkpIT09dClyZXR1cm4gYztiPWIucGFyZW50Tm9kZXx8MTE9PT1iLm5vZGVUeXBlJiZiLmhvc3R9fWZ1bmN0aW9uIFJjKGIpe2Zvcih0YihiLCEwKTtiLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlQ2hpbGQoYi5maXJzdENoaWxkKX1mdW5jdGlvbiBYYihiLGEpe2F8fHRiKGIpO3ZhciBjPWIucGFyZW50Tm9kZTtjJiZjLnJlbW92ZUNoaWxkKGIpfWZ1bmN0aW9uIEZmKGIsXFxuYSl7YT1hfHxPO2lmKFxcXCJjb21wbGV0ZVxcXCI9PT1hLmRvY3VtZW50LnJlYWR5U3RhdGUpYS5zZXRUaW1lb3V0KGIpO2Vsc2UgeShhKS5vbihcXFwibG9hZFxcXCIsYil9ZnVuY3Rpb24gU2MoYixhKXt2YXIgYz1BYlthLnRvTG93ZXJDYXNlKCldO3JldHVybiBjJiZUY1t0YShiKV0mJmN9ZnVuY3Rpb24gR2YoYixhKXt2YXIgYz1iLm5vZGVOYW1lO3JldHVybihcXFwiSU5QVVRcXFwiPT09Y3x8XFxcIlRFWFRBUkVBXFxcIj09PWMpJiZVY1thXX1mdW5jdGlvbiBIZihiLGEpe3ZhciBjPWZ1bmN0aW9uKGMsZSl7Yy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gYy5kZWZhdWx0UHJldmVudGVkfTt2YXIgZj1hW2V8fGMudHlwZV0sZz1mP2YubGVuZ3RoOjA7aWYoZyl7aWYoQShjLmltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCkpe3ZhciBoPWMuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uO2Muc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uPWZ1bmN0aW9uKCl7Yy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9XFxuITA7Yy5zdG9wUHJvcGFnYXRpb24mJmMuc3RvcFByb3BhZ2F0aW9uKCk7aCYmaC5jYWxsKGMpfX1jLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPWZ1bmN0aW9uKCl7cmV0dXJuITA9PT1jLmltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZH07MTxnJiYoZj1pYShmKSk7Zm9yKHZhciBsPTA7bDxnO2wrKyljLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCl8fGZbbF0uY2FsbChiLGMpfX07Yy5lbGVtPWI7cmV0dXJuIGN9ZnVuY3Rpb24gd2YoKXt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gUChRLHtoYXNDbGFzczpmdW5jdGlvbihiLGEpe2IuYXR0ciYmKGI9YlswXSk7cmV0dXJuIHdiKGIsYSl9LGFkZENsYXNzOmZ1bmN0aW9uKGIsYSl7Yi5hdHRyJiYoYj1iWzBdKTtyZXR1cm4geWIoYixhKX0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYixhKXtiLmF0dHImJihiPWJbMF0pO3JldHVybiB4YihiLGEpfX0pfX1mdW5jdGlvbiBHYShiLGEpe3ZhciBjPWImJmIuJCRoYXNoS2V5O1xcbmlmKGMpcmV0dXJuXFxcImZ1bmN0aW9uXFxcIj09PXR5cGVvZiBjJiYoYz1iLiQkaGFzaEtleSgpKSxjO2M9dHlwZW9mIGI7cmV0dXJuIGM9XFxcImZ1bmN0aW9uXFxcIj09Y3x8XFxcIm9iamVjdFxcXCI9PWMmJm51bGwhPT1iP2IuJCRoYXNoS2V5PWMrXFxcIjpcXFwiKyhhfHxVZCkoKTpjK1xcXCI6XFxcIitifWZ1bmN0aW9uIFNhKGIsYSl7aWYoYSl7dmFyIGM9MDt0aGlzLm5leHRVaWQ9ZnVuY3Rpb24oKXtyZXR1cm4rK2N9fW0oYix0aGlzLnB1dCx0aGlzKX1mdW5jdGlvbiBJZihiKXtyZXR1cm4oYj1iLnRvU3RyaW5nKCkucmVwbGFjZShWYyxcXFwiXFxcIikubWF0Y2goV2MpKT9cXFwiZnVuY3Rpb24oXFxcIisoYlsxXXx8XFxcIlxcXCIpLnJlcGxhY2UoL1tcXFxcc1xcXFxyXFxcXG5dKy8sXFxcIiBcXFwiKStcXFwiKVxcXCI6XFxcImZuXFxcIn1mdW5jdGlvbiBlYihiLGEpe2Z1bmN0aW9uIGMoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7aWYoSChiKSltKGIscGMoYSkpO2Vsc2UgcmV0dXJuIGEoYixjKX19ZnVuY3Rpb24gZChhLGIpe1JhKGEsXFxcInNlcnZpY2VcXFwiKTtpZih6KGIpfHxHKGIpKWI9cy5pbnN0YW50aWF0ZShiKTtcXG5pZighYi4kZ2V0KXRocm93IEhhKFxcXCJwZ2V0XFxcIixhKTtyZXR1cm4gclthK1xcXCJQcm92aWRlclxcXCJdPWJ9ZnVuY3Rpb24gZShhLGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUMuaW52b2tlKGIsdGhpcyk7aWYoQShjKSl0aHJvdyBIYShcXFwidW5kZWZcXFwiLGEpO3JldHVybiBjfX1mdW5jdGlvbiBmKGEsYixjKXtyZXR1cm4gZChhLHskZ2V0OiExIT09Yz9lKGEsYik6Yn0pfWZ1bmN0aW9uIGcoYSl7dmFyIGI9W10sYzttKGEsZnVuY3Rpb24oYSl7ZnVuY3Rpb24gZChhKXt2YXIgYixjO2I9MDtmb3IoYz1hLmxlbmd0aDtiPGM7YisrKXt2YXIgZT1hW2JdLGY9cy5nZXQoZVswXSk7ZltlWzFdXS5hcHBseShmLGVbMl0pfX1pZighbi5nZXQoYSkpe24ucHV0KGEsITApO3RyeXtMKGEpPyhjPWdiKGEpLGI9Yi5jb25jYXQoZyhjLnJlcXVpcmVzKSkuY29uY2F0KGMuX3J1bkJsb2NrcyksZChjLl9pbnZva2VRdWV1ZSksZChjLl9jb25maWdCbG9ja3MpKTp6KGEpP2IucHVzaChzLmludm9rZShhKSk6RyhhKT9cXG5iLnB1c2gocy5pbnZva2UoYSkpOlFhKGEsXFxcIm1vZHVsZVxcXCIpfWNhdGNoKGUpe3Rocm93IEcoYSkmJihhPWFbYS5sZW5ndGgtMV0pLGUubWVzc2FnZSYmZS5zdGFjayYmLTE9PWUuc3RhY2suaW5kZXhPZihlLm1lc3NhZ2UpJiYoZT1lLm1lc3NhZ2UrXFxcIlxcXFxuXFxcIitlLnN0YWNrKSxIYShcXFwibW9kdWxlcnJcXFwiLGEsZS5zdGFja3x8ZS5tZXNzYWdlfHxlKTt9fX0pO3JldHVybiBifWZ1bmN0aW9uIGgoYixjKXtmdW5jdGlvbiBkKGEsZSl7aWYoYi5oYXNPd25Qcm9wZXJ0eShhKSl7aWYoYlthXT09PWwpdGhyb3cgSGEoXFxcImNkZXBcXFwiLGErXFxcIiA8LSBcXFwiK2suam9pbihcXFwiIDwtIFxcXCIpKTtyZXR1cm4gYlthXX10cnl7cmV0dXJuIGsudW5zaGlmdChhKSxiW2FdPWwsYlthXT1jKGEsZSl9Y2F0Y2goZil7dGhyb3cgYlthXT09PWwmJmRlbGV0ZSBiW2FdLGY7fWZpbmFsbHl7ay5zaGlmdCgpfX1mdW5jdGlvbiBlKGIsYyxmLGcpe1xcXCJzdHJpbmdcXFwiPT09dHlwZW9mIGYmJihnPWYsZj1udWxsKTt2YXIgaD1bXSxrPWViLiQkYW5ub3RhdGUoYixcXG5hLGcpLGwscyxuO3M9MDtmb3IobD1rLmxlbmd0aDtzPGw7cysrKXtuPWtbc107aWYoXFxcInN0cmluZ1xcXCIhPT10eXBlb2Ygbil0aHJvdyBIYShcXFwiaXRrblxcXCIsbik7aC5wdXNoKGYmJmYuaGFzT3duUHJvcGVydHkobik/ZltuXTpkKG4sZykpfUcoYikmJihiPWJbbF0pO3JldHVybiBiLmFwcGx5KGMsaCl9cmV0dXJue2ludm9rZTplLGluc3RhbnRpYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1PYmplY3QuY3JlYXRlKChHKGEpP2FbYS5sZW5ndGgtMV06YSkucHJvdG90eXBlfHxudWxsKTthPWUoYSxkLGIsYyk7cmV0dXJuIEgoYSl8fHooYSk/YTpkfSxnZXQ6ZCxhbm5vdGF0ZTplYi4kJGFubm90YXRlLGhhczpmdW5jdGlvbihhKXtyZXR1cm4gci5oYXNPd25Qcm9wZXJ0eShhK1xcXCJQcm92aWRlclxcXCIpfHxiLmhhc093blByb3BlcnR5KGEpfX19YT0hMD09PWE7dmFyIGw9e30saz1bXSxuPW5ldyBTYShbXSwhMCkscj17JHByb3ZpZGU6e3Byb3ZpZGVyOmMoZCksZmFjdG9yeTpjKGYpLHNlcnZpY2U6YyhmdW5jdGlvbihhLFxcbmIpe3JldHVybiBmKGEsW1xcXCIkaW5qZWN0b3JcXFwiLGZ1bmN0aW9uKGEpe3JldHVybiBhLmluc3RhbnRpYXRlKGIpfV0pfSksdmFsdWU6YyhmdW5jdGlvbihhLGIpe3JldHVybiBmKGEscmEoYiksITEpfSksY29uc3RhbnQ6YyhmdW5jdGlvbihhLGIpe1JhKGEsXFxcImNvbnN0YW50XFxcIik7clthXT1iO3hbYV09Yn0pLGRlY29yYXRvcjpmdW5jdGlvbihhLGIpe3ZhciBjPXMuZ2V0KGErXFxcIlByb3ZpZGVyXFxcIiksZD1jLiRnZXQ7Yy4kZ2V0PWZ1bmN0aW9uKCl7dmFyIGE9Qy5pbnZva2UoZCxjKTtyZXR1cm4gQy5pbnZva2UoYixudWxsLHskZGVsZWdhdGU6YX0pfX19fSxzPXIuJGluamVjdG9yPWgocixmdW5jdGlvbihhLGIpe2NhLmlzU3RyaW5nKGIpJiZrLnB1c2goYik7dGhyb3cgSGEoXFxcInVucHJcXFwiLGsuam9pbihcXFwiIDwtIFxcXCIpKTt9KSx4PXt9LEM9eC4kaW5qZWN0b3I9aCh4LGZ1bmN0aW9uKGEsYil7dmFyIGM9cy5nZXQoYStcXFwiUHJvdmlkZXJcXFwiLGIpO3JldHVybiBDLmludm9rZShjLiRnZXQsYyx0LGEpfSk7bShnKGIpLFxcbmZ1bmN0aW9uKGEpe2EmJkMuaW52b2tlKGEpfSk7cmV0dXJuIEN9ZnVuY3Rpb24gUmUoKXt2YXIgYj0hMDt0aGlzLmRpc2FibGVBdXRvU2Nyb2xsaW5nPWZ1bmN0aW9uKCl7Yj0hMX07dGhpcy4kZ2V0PVtcXFwiJHdpbmRvd1xcXCIsXFxcIiRsb2NhdGlvblxcXCIsXFxcIiRyb290U2NvcGVcXFwiLGZ1bmN0aW9uKGEsYyxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPW51bGw7QXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChhLGZ1bmN0aW9uKGEpe2lmKFxcXCJhXFxcIj09PXRhKGEpKXJldHVybiBiPWEsITB9KTtyZXR1cm4gYn1mdW5jdGlvbiBmKGIpe2lmKGIpe2Iuc2Nyb2xsSW50b1ZpZXcoKTt2YXIgYztjPWcueU9mZnNldDt6KGMpP2M9YygpOnRjKGMpPyhjPWNbMF0sYz1cXFwiZml4ZWRcXFwiIT09YS5nZXRDb21wdXRlZFN0eWxlKGMpLnBvc2l0aW9uPzA6Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20pOlYoYyl8fChjPTApO2MmJihiPWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLGEuc2Nyb2xsQnkoMCxiLWMpKX1lbHNlIGEuc2Nyb2xsVG8oMCxcXG4wKX1mdW5jdGlvbiBnKGEpe2E9TChhKT9hOmMuaGFzaCgpO3ZhciBiO2E/KGI9aC5nZXRFbGVtZW50QnlJZChhKSk/ZihiKTooYj1lKGguZ2V0RWxlbWVudHNCeU5hbWUoYSkpKT9mKGIpOlxcXCJ0b3BcXFwiPT09YSYmZihudWxsKTpmKG51bGwpfXZhciBoPWEuZG9jdW1lbnQ7YiYmZC4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gYy5oYXNoKCl9LGZ1bmN0aW9uKGEsYil7YT09PWImJlxcXCJcXFwiPT09YXx8RmYoZnVuY3Rpb24oKXtkLiRldmFsQXN5bmMoZyl9KX0pO3JldHVybiBnfV19ZnVuY3Rpb24gamIoYixhKXtpZighYiYmIWEpcmV0dXJuXFxcIlxcXCI7aWYoIWIpcmV0dXJuIGE7aWYoIWEpcmV0dXJuIGI7RyhiKSYmKGI9Yi5qb2luKFxcXCIgXFxcIikpO0coYSkmJihhPWEuam9pbihcXFwiIFxcXCIpKTtyZXR1cm4gYitcXFwiIFxcXCIrYX1mdW5jdGlvbiBKZihiKXtMKGIpJiYoYj1iLnNwbGl0KFxcXCIgXFxcIikpO3ZhciBhPWdhKCk7bShiLGZ1bmN0aW9uKGIpe2IubGVuZ3RoJiYoYVtiXT0hMCl9KTtyZXR1cm4gYX1mdW5jdGlvbiBJYShiKXtyZXR1cm4gSChiKT9cXG5iOnt9fWZ1bmN0aW9uIHZmKCl7dGhpcy4kZ2V0PVtcXFwiJCRyQUZcXFwiLFxcXCIkdGltZW91dFxcXCIsZnVuY3Rpb24oYixhKXtyZXR1cm4gYi5zdXBwb3J0ZWQ/ZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSl9OmZ1bmN0aW9uKGIpe3JldHVybiBhKGIsMCwhMSl9fV19ZnVuY3Rpb24gS2YoYixhLGMsZCl7ZnVuY3Rpb24gZShhKXt0cnl7YS5hcHBseShudWxsLHphLmNhbGwoYXJndW1lbnRzLDEpKX1maW5hbGx5e2lmKEMtLSwwPT09Qylmb3IoO0YubGVuZ3RoOyl0cnl7Ri5wb3AoKSgpfWNhdGNoKGIpe2MuZXJyb3IoYil9fX1mdW5jdGlvbiBmKCl7ZygpO2goKX1mdW5jdGlvbiBnKCl7YTp7dHJ5e3U9bi5zdGF0ZTticmVhayBhfWNhdGNoKGEpe311PXZvaWQgMH11PUEodSk/bnVsbDp1O2thKHUsRCkmJih1PUQpO0Q9dX1mdW5jdGlvbiBoKCl7aWYoSyE9PWwudXJsKCl8fHAhPT11KUs9bC51cmwoKSxwPXUsbShCLGZ1bmN0aW9uKGEpe2EobC51cmwoKSx1KX0pfXZhciBsPXRoaXMsaz1iLmxvY2F0aW9uLG49XFxuYi5oaXN0b3J5LHI9Yi5zZXRUaW1lb3V0LHM9Yi5jbGVhclRpbWVvdXQseD17fTtsLmlzTW9jaz0hMTt2YXIgQz0wLEY9W107bC4kJGNvbXBsZXRlT3V0c3RhbmRpbmdSZXF1ZXN0PWU7bC4kJGluY091dHN0YW5kaW5nUmVxdWVzdENvdW50PWZ1bmN0aW9uKCl7QysrfTtsLm5vdGlmeVdoZW5Ob091dHN0YW5kaW5nUmVxdWVzdHM9ZnVuY3Rpb24oYSl7MD09PUM/YSgpOkYucHVzaChhKX07dmFyIHUscCxLPWsuaHJlZixxPWEuZmluZChcXFwiYmFzZVxcXCIpLEk9bnVsbDtnKCk7cD11O2wudXJsPWZ1bmN0aW9uKGEsYyxlKXtBKGUpJiYoZT1udWxsKTtrIT09Yi5sb2NhdGlvbiYmKGs9Yi5sb2NhdGlvbik7biE9PWIuaGlzdG9yeSYmKG49Yi5oaXN0b3J5KTtpZihhKXt2YXIgZj1wPT09ZTtpZihLPT09YSYmKCFkLmhpc3Rvcnl8fGYpKXJldHVybiBsO3ZhciBoPUsmJkphKEspPT09SmEoYSk7Sz1hO3A9ZTtpZighZC5oaXN0b3J5fHxoJiZmKXtpZighaHx8SSlJPWE7Yz9rLnJlcGxhY2UoYSk6aD8oYz1cXG5rLGU9YS5pbmRleE9mKFxcXCIjXFxcIiksYT0tMT09PWU/XFxcIlxcXCI6YS5zdWJzdHIoZSksYy5oYXNoPWEpOmsuaHJlZj1hfWVsc2UgbltjP1xcXCJyZXBsYWNlU3RhdGVcXFwiOlxcXCJwdXNoU3RhdGVcXFwiXShlLFxcXCJcXFwiLGEpLGcoKSxwPXU7cmV0dXJuIGx9cmV0dXJuIEl8fGsuaHJlZi5yZXBsYWNlKC8lMjcvZyxcXFwiJ1xcXCIpfTtsLnN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHV9O3ZhciBCPVtdLE49ITEsRD1udWxsO2wub25VcmxDaGFuZ2U9ZnVuY3Rpb24oYSl7aWYoIU4pe2lmKGQuaGlzdG9yeSl5KGIpLm9uKFxcXCJwb3BzdGF0ZVxcXCIsZik7eShiKS5vbihcXFwiaGFzaGNoYW5nZVxcXCIsZik7Tj0hMH1CLnB1c2goYSk7cmV0dXJuIGF9O2wuJCRhcHBsaWNhdGlvbkRlc3Ryb3llZD1mdW5jdGlvbigpe3koYikub2ZmKFxcXCJoYXNoY2hhbmdlIHBvcHN0YXRlXFxcIixmKX07bC4kJGNoZWNrVXJsQ2hhbmdlPWg7bC5iYXNlSHJlZj1mdW5jdGlvbigpe3ZhciBhPXEuYXR0cihcXFwiaHJlZlxcXCIpO3JldHVybiBhP2EucmVwbGFjZSgvXihodHRwcz9cXFxcOik/XFxcXC9cXFxcL1teXFxcXC9dKi8sXFxuXFxcIlxcXCIpOlxcXCJcXFwifTtsLmRlZmVyPWZ1bmN0aW9uKGEsYil7dmFyIGM7QysrO2M9cihmdW5jdGlvbigpe2RlbGV0ZSB4W2NdO2UoYSl9LGJ8fDApO3hbY109ITA7cmV0dXJuIGN9O2wuZGVmZXIuY2FuY2VsPWZ1bmN0aW9uKGEpe3JldHVybiB4W2FdPyhkZWxldGUgeFthXSxzKGEpLGUodiksITApOiExfX1mdW5jdGlvbiBWZSgpe3RoaXMuJGdldD1bXFxcIiR3aW5kb3dcXFwiLFxcXCIkbG9nXFxcIixcXFwiJHNuaWZmZXJcXFwiLFxcXCIkZG9jdW1lbnRcXFwiLGZ1bmN0aW9uKGIsYSxjLGQpe3JldHVybiBuZXcgS2YoYixkLGEsYyl9XX1mdW5jdGlvbiBXZSgpe3RoaXMuJGdldD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkKXtmdW5jdGlvbiBlKGEpe2EhPXImJihzP3M9PWEmJihzPWEubik6cz1hLGYoYS5uLGEucCksZihhLHIpLHI9YSxyLm49bnVsbCl9ZnVuY3Rpb24gZihhLGIpe2EhPWImJihhJiYoYS5wPWIpLGImJihiLm49YSkpfWlmKGIgaW4gYSl0aHJvdyBKKFxcXCIkY2FjaGVGYWN0b3J5XFxcIikoXFxcImlpZFxcXCIsYik7dmFyIGc9MCxoPVAoe30sXFxuZCx7aWQ6Yn0pLGw9e30saz1kJiZkLmNhcGFjaXR5fHxOdW1iZXIuTUFYX1ZBTFVFLG49e30scj1udWxsLHM9bnVsbDtyZXR1cm4gYVtiXT17cHV0OmZ1bmN0aW9uKGEsYil7aWYoIUEoYikpe2lmKGs8TnVtYmVyLk1BWF9WQUxVRSl7dmFyIGM9blthXXx8KG5bYV09e2tleTphfSk7ZShjKX1hIGluIGx8fGcrKztsW2FdPWI7Zz5rJiZ0aGlzLnJlbW92ZShzLmtleSk7cmV0dXJuIGJ9fSxnZXQ6ZnVuY3Rpb24oYSl7aWYoazxOdW1iZXIuTUFYX1ZBTFVFKXt2YXIgYj1uW2FdO2lmKCFiKXJldHVybjtlKGIpfXJldHVybiBsW2FdfSxyZW1vdmU6ZnVuY3Rpb24oYSl7aWYoazxOdW1iZXIuTUFYX1ZBTFVFKXt2YXIgYj1uW2FdO2lmKCFiKXJldHVybjtiPT1yJiYocj1iLnApO2I9PXMmJihzPWIubik7ZihiLm4sYi5wKTtkZWxldGUgblthXX1kZWxldGUgbFthXTtnLS19LHJlbW92ZUFsbDpmdW5jdGlvbigpe2w9e307Zz0wO249e307cj1zPW51bGx9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtuPWg9XFxubD1udWxsO2RlbGV0ZSBhW2JdfSxpbmZvOmZ1bmN0aW9uKCl7cmV0dXJuIFAoe30saCx7c2l6ZTpnfSl9fX12YXIgYT17fTtiLmluZm89ZnVuY3Rpb24oKXt2YXIgYj17fTttKGEsZnVuY3Rpb24oYSxlKXtiW2VdPWEuaW5mbygpfSk7cmV0dXJuIGJ9O2IuZ2V0PWZ1bmN0aW9uKGIpe3JldHVybiBhW2JdfTtyZXR1cm4gYn19ZnVuY3Rpb24gcGYoKXt0aGlzLiRnZXQ9W1xcXCIkY2FjaGVGYWN0b3J5XFxcIixmdW5jdGlvbihiKXtyZXR1cm4gYihcXFwidGVtcGxhdGVzXFxcIil9XX1mdW5jdGlvbiBFYyhiLGEpe2Z1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPS9eXFxcXHMqKFtAJl18PShcXFxcKj8pKShcXFxcPz8pXFxcXHMqKFxcXFx3KilcXFxccyokLyxlPXt9O20oYSxmdW5jdGlvbihhLGYpe3ZhciBnPWEubWF0Y2goZCk7aWYoIWcpdGhyb3cgZWEoXFxcImlzY3BcXFwiLGIsZixhLGM/XFxcImNvbnRyb2xsZXIgYmluZGluZ3MgZGVmaW5pdGlvblxcXCI6XFxcImlzb2xhdGUgc2NvcGUgZGVmaW5pdGlvblxcXCIpO2VbZl09e21vZGU6Z1sxXVswXSxjb2xsZWN0aW9uOlxcXCIqXFxcIj09PVxcbmdbMl0sb3B0aW9uYWw6XFxcIj9cXFwiPT09Z1szXSxhdHRyTmFtZTpnWzRdfHxmfX0pO3JldHVybiBlfWZ1bmN0aW9uIGQoYSl7dmFyIGI9YS5jaGFyQXQoMCk7aWYoIWJ8fGIhPT1NKGIpKXRocm93IGVhKFxcXCJiYWRkaXJcXFwiLGEpO2lmKGEhPT1hLnRyaW0oKSl0aHJvdyBlYShcXFwiYmFkZGlyXFxcIixhKTt9dmFyIGU9e30sZj0vXlxcXFxzKmRpcmVjdGl2ZVxcXFw6XFxcXHMqKFtcXFxcd1xcXFwtXSspXFxcXHMrKC4qKSQvLGc9LygoW1xcXFx3XFxcXC1dKykoPzpcXFxcOihbXjtdKykpPzs/KS8saD1XZChcXFwibmdTcmMsbmdTcmNzZXQsc3JjLHNyY3NldFxcXCIpLGw9L14oPzooXFxcXF5cXFxcXj8pPyhcXFxcPyk/KFxcXFxeXFxcXF4/KT8pPy8saz0vXihvblthLXpdK3xmb3JtYWN0aW9uKSQvO3RoaXMuZGlyZWN0aXZlPWZ1bmN0aW9uIHMoYSxmKXtSYShhLFxcXCJkaXJlY3RpdmVcXFwiKTtMKGEpPyhkKGEpLFNiKGYsXFxcImRpcmVjdGl2ZUZhY3RvcnlcXFwiKSxlLmhhc093blByb3BlcnR5KGEpfHwoZVthXT1bXSxiLmZhY3RvcnkoYStcXFwiRGlyZWN0aXZlXFxcIixbXFxcIiRpbmplY3RvclxcXCIsXFxcIiRleGNlcHRpb25IYW5kbGVyXFxcIixcXG5mdW5jdGlvbihiLGQpe3ZhciBmPVtdO20oZVthXSxmdW5jdGlvbihlLGcpe3RyeXt2YXIgaD1iLmludm9rZShlKTt6KGgpP2g9e2NvbXBpbGU6cmEoaCl9OiFoLmNvbXBpbGUmJmgubGluayYmKGguY29tcGlsZT1yYShoLmxpbmspKTtoLnByaW9yaXR5PWgucHJpb3JpdHl8fDA7aC5pbmRleD1nO2gubmFtZT1oLm5hbWV8fGE7aC5yZXF1aXJlPWgucmVxdWlyZXx8aC5jb250cm9sbGVyJiZoLm5hbWU7aC5yZXN0cmljdD1oLnJlc3RyaWN0fHxcXFwiRUFcXFwiO3ZhciBrPWgsbD1oLHM9aC5uYW1lLG49e2lzb2xhdGVTY29wZTpudWxsLGJpbmRUb0NvbnRyb2xsZXI6bnVsbH07SChsLnNjb3BlKSYmKCEwPT09bC5iaW5kVG9Db250cm9sbGVyPyhuLmJpbmRUb0NvbnRyb2xsZXI9YyhsLnNjb3BlLHMsITApLG4uaXNvbGF0ZVNjb3BlPXt9KTpuLmlzb2xhdGVTY29wZT1jKGwuc2NvcGUscywhMSkpO0gobC5iaW5kVG9Db250cm9sbGVyKSYmKG4uYmluZFRvQ29udHJvbGxlcj1jKGwuYmluZFRvQ29udHJvbGxlcixcXG5zLCEwKSk7aWYoSChuLmJpbmRUb0NvbnRyb2xsZXIpKXt2YXIgQz1sLmNvbnRyb2xsZXIsJD1sLmNvbnRyb2xsZXJBcztpZighQyl0aHJvdyBlYShcXFwibm9jdHJsXFxcIixzKTt2YXIgaGE7YTppZigkJiZMKCQpKWhhPSQ7ZWxzZXtpZihMKEMpKXt2YXIgbT1YYy5leGVjKEMpO2lmKG0pe2hhPW1bM107YnJlYWsgYX19aGE9dm9pZCAwfWlmKCFoYSl0aHJvdyBlYShcXFwibm9pZGVudFxcXCIscyk7fXZhciBxPWsuJCRiaW5kaW5ncz1uO0gocS5pc29sYXRlU2NvcGUpJiYoaC4kJGlzb2xhdGVCaW5kaW5ncz1xLmlzb2xhdGVTY29wZSk7aC4kJG1vZHVsZU5hbWU9ZS4kJG1vZHVsZU5hbWU7Zi5wdXNoKGgpfWNhdGNoKHQpe2QodCl9fSk7cmV0dXJuIGZ9XSkpLGVbYV0ucHVzaChmKSk6bShhLHBjKHMpKTtyZXR1cm4gdGhpc307dGhpcy5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihiKXtyZXR1cm4gdyhiKT8oYS5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdChiKSx0aGlzKTphLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KCl9O1xcbnRoaXMuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiB3KGIpPyhhLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdChiKSx0aGlzKTphLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdCgpfTt2YXIgbj0hMDt0aGlzLmRlYnVnSW5mb0VuYWJsZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHcoYSk/KG49YSx0aGlzKTpufTt0aGlzLiRnZXQ9W1xcXCIkaW5qZWN0b3JcXFwiLFxcXCIkaW50ZXJwb2xhdGVcXFwiLFxcXCIkZXhjZXB0aW9uSGFuZGxlclxcXCIsXFxcIiR0ZW1wbGF0ZVJlcXVlc3RcXFwiLFxcXCIkcGFyc2VcXFwiLFxcXCIkY29udHJvbGxlclxcXCIsXFxcIiRyb290U2NvcGVcXFwiLFxcXCIkZG9jdW1lbnRcXFwiLFxcXCIkc2NlXFxcIixcXFwiJGFuaW1hdGVcXFwiLFxcXCIkJHNhbml0aXplVXJpXFxcIixmdW5jdGlvbihhLGIsYyxkLHUscCxLLHEsSSxCLE4pe2Z1bmN0aW9uIEQoYSxiKXt0cnl7YS5hZGRDbGFzcyhiKX1jYXRjaChjKXt9fWZ1bmN0aW9uIFooYSxiLGMsZCxlKXthIGluc3RhbmNlb2YgeXx8KGE9eShhKSk7bShhLGZ1bmN0aW9uKGIsYyl7Yi5ub2RlVHlwZT09XFxuTmEmJmIubm9kZVZhbHVlLm1hdGNoKC9cXFxcUysvKSYmKGFbY109eShiKS53cmFwKFxcXCI8c3Bhbj48L3NwYW4+XFxcIikucGFyZW50KClbMF0pfSk7dmFyIGY9UyhhLGIsYSxjLGQsZSk7Wi4kJGFkZFNjb3BlQ2xhc3MoYSk7dmFyIGc9bnVsbDtyZXR1cm4gZnVuY3Rpb24oYixjLGQpe1NiKGIsXFxcInNjb3BlXFxcIik7ZD1kfHx7fTt2YXIgZT1kLnBhcmVudEJvdW5kVHJhbnNjbHVkZUZuLGg9ZC50cmFuc2NsdWRlQ29udHJvbGxlcnM7ZD1kLmZ1dHVyZVBhcmVudEVsZW1lbnQ7ZSYmZS4kJGJvdW5kVHJhbnNjbHVkZSYmKGU9ZS4kJGJvdW5kVHJhbnNjbHVkZSk7Z3x8KGc9KGQ9ZCYmZFswXSk/XFxcImZvcmVpZ25vYmplY3RcXFwiIT09dGEoZCkmJmQudG9TdHJpbmcoKS5tYXRjaCgvU1ZHLyk/XFxcInN2Z1xcXCI6XFxcImh0bWxcXFwiOlxcXCJodG1sXFxcIik7ZD1cXFwiaHRtbFxcXCIhPT1nP3koWWIoZyx5KFxcXCI8ZGl2PlxcXCIpLmFwcGVuZChhKS5odG1sKCkpKTpjP1BhLmNsb25lLmNhbGwoYSk6YTtpZihoKWZvcih2YXIgayBpbiBoKWQuZGF0YShcXFwiJFxcXCIraytcXFwiQ29udHJvbGxlclxcXCIsXFxuaFtrXS5pbnN0YW5jZSk7Wi4kJGFkZFNjb3BlSW5mbyhkLGIpO2MmJmMoZCxiKTtmJiZmKGIsZCxkLGUpO3JldHVybiBkfX1mdW5jdGlvbiBTKGEsYixjLGQsZSxmKXtmdW5jdGlvbiBnKGEsYyxkLGUpe3ZhciBmLGssbCxzLG4sQixDO2lmKHApZm9yKEM9QXJyYXkoYy5sZW5ndGgpLHM9MDtzPGgubGVuZ3RoO3MrPTMpZj1oW3NdLENbZl09Y1tmXTtlbHNlIEM9YztzPTA7Zm9yKG49aC5sZW5ndGg7czxuOylpZihrPUNbaFtzKytdXSxjPWhbcysrXSxmPWhbcysrXSxjKXtpZihjLnNjb3BlKXtpZihsPWEuJG5ldygpLFouJCRhZGRTY29wZUluZm8oeShrKSxsKSxCPWMuJCRkZXN0cm95QmluZGluZ3MpYy4kJGRlc3Ryb3lCaW5kaW5ncz1udWxsLGwuJG9uKFxcXCIkZGVzdHJveWVkXFxcIixCKX1lbHNlIGw9YTtCPWMudHJhbnNjbHVkZU9uVGhpc0VsZW1lbnQ/JChhLGMudHJhbnNjbHVkZSxlKTohYy50ZW1wbGF0ZU9uVGhpc0VsZW1lbnQmJmU/ZTohZSYmYj8kKGEsYik6bnVsbDtjKGYsbCxrLGQsXFxuQixjKX1lbHNlIGYmJmYoYSxrLmNoaWxkTm9kZXMsdCxlKX1mb3IodmFyIGg9W10sayxsLHMsbixwLEI9MDtCPGEubGVuZ3RoO0IrKyl7az1uZXcgYWE7bD1oYShhW0JdLFtdLGssMD09PUI/ZDp0LGUpOyhmPWwubGVuZ3RoP0UobCxhW0JdLGssYixjLG51bGwsW10sW10sZik6bnVsbCkmJmYuc2NvcGUmJlouJCRhZGRTY29wZUNsYXNzKGsuJCRlbGVtZW50KTtrPWYmJmYudGVybWluYWx8fCEocz1hW0JdLmNoaWxkTm9kZXMpfHwhcy5sZW5ndGg/bnVsbDpTKHMsZj8oZi50cmFuc2NsdWRlT25UaGlzRWxlbWVudHx8IWYudGVtcGxhdGVPblRoaXNFbGVtZW50KSYmZi50cmFuc2NsdWRlOmIpO2lmKGZ8fGspaC5wdXNoKEIsZixrKSxuPSEwLHA9cHx8ZjtmPW51bGx9cmV0dXJuIG4/ZzpudWxsfWZ1bmN0aW9uICQoYSxiLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZixnLGgpe2R8fChkPWEuJG5ldyghMSxoKSxkLiQkdHJhbnNjbHVkZWQ9ITApO3JldHVybiBiKGQsZSx7cGFyZW50Qm91bmRUcmFuc2NsdWRlRm46YyxcXG50cmFuc2NsdWRlQ29udHJvbGxlcnM6ZixmdXR1cmVQYXJlbnRFbGVtZW50Omd9KX19ZnVuY3Rpb24gaGEoYSxiLGMsZCxlKXt2YXIgaD1jLiRhdHRyLGs7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgcWE6dyhiLHdhKHRhKGEpKSxcXFwiRVxcXCIsZCxlKTtmb3IodmFyIGwscyxuLHA9YS5hdHRyaWJ1dGVzLEI9MCxDPXAmJnAubGVuZ3RoO0I8QztCKyspe3ZhciB4PSExLFM9ITE7bD1wW0JdO2s9bC5uYW1lO3M9UihsLnZhbHVlKTtsPXdhKGspO2lmKG49aWEudGVzdChsKSlrPWsucmVwbGFjZShaYyxcXFwiXFxcIikuc3Vic3RyKDgpLnJlcGxhY2UoL18oLikvZyxmdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9KTt2YXIgRj1sLnJlcGxhY2UoLyhTdGFydHxFbmQpJC8sXFxcIlxcXCIpO0EoRikmJmw9PT1GK1xcXCJTdGFydFxcXCImJih4PWssUz1rLnN1YnN0cigwLGsubGVuZ3RoLTUpK1xcXCJlbmRcXFwiLGs9ay5zdWJzdHIoMCxrLmxlbmd0aC02KSk7bD13YShrLnRvTG93ZXJDYXNlKCkpO2hbbF09aztpZihufHwhYy5oYXNPd25Qcm9wZXJ0eShsKSljW2xdPVxcbnMsU2MoYSxsKSYmKGNbbF09ITApO1YoYSxiLHMsbCxuKTt3KGIsbCxcXFwiQVxcXCIsZCxlLHgsUyl9YT1hLmNsYXNzTmFtZTtIKGEpJiYoYT1hLmFuaW1WYWwpO2lmKEwoYSkmJlxcXCJcXFwiIT09YSlmb3IoO2s9Zy5leGVjKGEpOylsPXdhKGtbMl0pLHcoYixsLFxcXCJDXFxcIixkLGUpJiYoY1tsXT1SKGtbM10pKSxhPWEuc3Vic3RyKGsuaW5kZXgra1swXS5sZW5ndGgpO2JyZWFrO2Nhc2UgTmE6aWYoMTE9PT1VYSlmb3IoO2EucGFyZW50Tm9kZSYmYS5uZXh0U2libGluZyYmYS5uZXh0U2libGluZy5ub2RlVHlwZT09PU5hOylhLm5vZGVWYWx1ZSs9YS5uZXh0U2libGluZy5ub2RlVmFsdWUsYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEubmV4dFNpYmxpbmcpO3hhKGIsYS5ub2RlVmFsdWUpO2JyZWFrO2Nhc2UgODp0cnl7aWYoaz1mLmV4ZWMoYS5ub2RlVmFsdWUpKWw9d2Eoa1sxXSksdyhiLGwsXFxcIk1cXFwiLGQsZSkmJihjW2xdPVIoa1syXSkpfWNhdGNoKCQpe319Yi5zb3J0KEFhKTtyZXR1cm4gYn1mdW5jdGlvbiB2YShhLFxcbmIsYyl7dmFyIGQ9W10sZT0wO2lmKGImJmEuaGFzQXR0cmlidXRlJiZhLmhhc0F0dHJpYnV0ZShiKSl7ZG97aWYoIWEpdGhyb3cgZWEoXFxcInV0ZXJkaXJcXFwiLGIsYyk7YS5ub2RlVHlwZT09cWEmJihhLmhhc0F0dHJpYnV0ZShiKSYmZSsrLGEuaGFzQXR0cmlidXRlKGMpJiZlLS0pO2QucHVzaChhKTthPWEubmV4dFNpYmxpbmd9d2hpbGUoMDxlKX1lbHNlIGQucHVzaChhKTtyZXR1cm4geShkKX1mdW5jdGlvbiBZYyhhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQsZSxmLGcsaCl7ZT12YShlWzBdLGIsYyk7cmV0dXJuIGEoZCxlLGYsZyxoKX19ZnVuY3Rpb24gRShhLGIsZCxlLGYsZyxoLGsscyl7ZnVuY3Rpb24gbihhLGIsYyxkKXtpZihhKXtjJiYoYT1ZYyhhLGMsZCkpO2EucmVxdWlyZT1FLnJlcXVpcmU7YS5kaXJlY3RpdmVOYW1lPXc7aWYodT09PUV8fEUuJCRpc29sYXRlU2NvcGUpYT1YKGEse2lzb2xhdGVTY29wZTohMH0pO2gucHVzaChhKX1pZihiKXtjJiYoYj1ZYyhiLGMsZCkpO2IucmVxdWlyZT1cXG5FLnJlcXVpcmU7Yi5kaXJlY3RpdmVOYW1lPXc7aWYodT09PUV8fEUuJCRpc29sYXRlU2NvcGUpYj1YKGIse2lzb2xhdGVTY29wZTohMH0pO2sucHVzaChiKX19ZnVuY3Rpb24gQihhLGIsYyxkKXt2YXIgZTtpZihMKGIpKXt2YXIgZj1iLm1hdGNoKGwpO2I9Yi5zdWJzdHJpbmcoZlswXS5sZW5ndGgpO3ZhciBnPWZbMV18fGZbM10sZj1cXFwiP1xcXCI9PT1mWzJdO1xcXCJeXlxcXCI9PT1nP2M9Yy5wYXJlbnQoKTplPShlPWQmJmRbYl0pJiZlLmluc3RhbmNlO2V8fChkPVxcXCIkXFxcIitiK1xcXCJDb250cm9sbGVyXFxcIixlPWc/Yy5pbmhlcml0ZWREYXRhKGQpOmMuZGF0YShkKSk7aWYoIWUmJiFmKXRocm93IGVhKFxcXCJjdHJlcVxcXCIsYixhKTt9ZWxzZSBpZihHKGIpKWZvcihlPVtdLGc9MCxmPWIubGVuZ3RoO2c8ZjtnKyspZVtnXT1CKGEsYltnXSxjLGQpO3JldHVybiBlfHxudWxsfWZ1bmN0aW9uIHgoYSxiLGMsZCxlLGYpe3ZhciBnPWdhKCksaDtmb3IoaCBpbiBkKXt2YXIgaz1kW2hdLGw9eyRzY29wZTprPT09dXx8ay4kJGlzb2xhdGVTY29wZT9cXG5lOmYsJGVsZW1lbnQ6YSwkYXR0cnM6YiwkdHJhbnNjbHVkZTpjfSxzPWsuY29udHJvbGxlcjtcXFwiQFxcXCI9PXMmJihzPWJbay5uYW1lXSk7bD1wKHMsbCwhMCxrLmNvbnRyb2xsZXJBcyk7Z1trLm5hbWVdPWw7cXx8YS5kYXRhKFxcXCIkXFxcIitrLm5hbWUrXFxcIkNvbnRyb2xsZXJcXFwiLGwuaW5zdGFuY2UpfXJldHVybiBnfWZ1bmN0aW9uIFMoYSxjLGUsZixnLGwpe2Z1bmN0aW9uIHMoYSxiLGMpe3ZhciBkOyRhKGEpfHwoYz1iLGI9YSxhPXQpO3EmJihkPW0pO2N8fChjPXE/amEucGFyZW50KCk6amEpO3JldHVybiBnKGEsYixkLGMsdmEpfXZhciBuLHAsQyxGLG0saGEsamE7Yj09PWU/KGY9ZCxqYT1kLiQkZWxlbWVudCk6KGphPXkoZSksZj1uZXcgYWEoamEsZCkpO3UmJihGPWMuJG5ldyghMCkpO2cmJihoYT1zLGhhLiQkYm91bmRUcmFuc2NsdWRlPWcpO04mJihtPXgoamEsZixoYSxOLEYsYykpO3UmJihaLiQkYWRkU2NvcGVJbmZvKGphLEYsITAsIShEJiYoRD09PXV8fEQ9PT11LiQkb3JpZ2luYWxEaXJlY3RpdmUpKSksXFxuWi4kJGFkZFNjb3BlQ2xhc3MoamEsITApLEYuJCRpc29sYXRlQmluZGluZ3M9dS4kJGlzb2xhdGVCaW5kaW5ncyxXKGMsZixGLEYuJCRpc29sYXRlQmluZGluZ3MsdSxGKSk7aWYobSl7dmFyIEs9dXx8JCxJO0smJm1bSy5uYW1lXSYmKHA9Sy4kJGJpbmRpbmdzLmJpbmRUb0NvbnRyb2xsZXIsKEM9bVtLLm5hbWVdKSYmQy5pZGVudGlmaWVyJiZwJiYoST1DLGwuJCRkZXN0cm95QmluZGluZ3M9VyhjLGYsQy5pbnN0YW5jZSxwLEspKSk7Zm9yKG4gaW4gbSl7Qz1tW25dO3ZhciBFPUMoKTtFIT09Qy5pbnN0YW5jZSYmKEMuaW5zdGFuY2U9RSxqYS5kYXRhKFxcXCIkXFxcIituK1xcXCJDb250cm9sbGVyXFxcIixFKSxDPT09SSYmKGwuJCRkZXN0cm95QmluZGluZ3MoKSxsLiQkZGVzdHJveUJpbmRpbmdzPVcoYyxmLEUscCxLKSkpfX1uPTA7Zm9yKGw9aC5sZW5ndGg7bjxsO24rKylwPWhbbl0sWShwLHAuaXNvbGF0ZVNjb3BlP0Y6YyxqYSxmLHAucmVxdWlyZSYmQihwLmRpcmVjdGl2ZU5hbWUscC5yZXF1aXJlLFxcbmphLG0pLGhhKTt2YXIgdmE9Yzt1JiYodS50ZW1wbGF0ZXx8bnVsbD09PXUudGVtcGxhdGVVcmwpJiYodmE9Rik7YSYmYSh2YSxlLmNoaWxkTm9kZXMsdCxnKTtmb3Iobj1rLmxlbmd0aC0xOzA8PW47bi0tKXA9a1tuXSxZKHAscC5pc29sYXRlU2NvcGU/RjpjLGphLGYscC5yZXF1aXJlJiZCKHAuZGlyZWN0aXZlTmFtZSxwLnJlcXVpcmUsamEsbSksaGEpfXM9c3x8e307Zm9yKHZhciBGPS1OdW1iZXIuTUFYX1ZBTFVFLCQ9cy5uZXdTY29wZURpcmVjdGl2ZSxOPXMuY29udHJvbGxlckRpcmVjdGl2ZXMsdT1zLm5ld0lzb2xhdGVTY29wZURpcmVjdGl2ZSxEPXMudGVtcGxhdGVEaXJlY3RpdmUsbT1zLm5vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmUsSz0hMSxJPSExLHE9cy5oYXNFbGVtZW50VHJhbnNjbHVkZURpcmVjdGl2ZSxiYT1kLiQkZWxlbWVudD15KGIpLEUsdyx2LEE9ZSxBYSx4YT0wLFRhPWEubGVuZ3RoO3hhPFRhO3hhKyspe0U9YVt4YV07dmFyIE09RS4kJHN0YXJ0LFA9RS4kJGVuZDtcXG5NJiYoYmE9dmEoYixNLFApKTt2PXQ7aWYoRj5FLnByaW9yaXR5KWJyZWFrO2lmKHY9RS5zY29wZSlFLnRlbXBsYXRlVXJsfHwoSCh2KT8oTyhcXFwibmV3L2lzb2xhdGVkIHNjb3BlXFxcIix1fHwkLEUsYmEpLHU9RSk6TyhcXFwibmV3L2lzb2xhdGVkIHNjb3BlXFxcIix1LEUsYmEpKSwkPSR8fEU7dz1FLm5hbWU7IUUudGVtcGxhdGVVcmwmJkUuY29udHJvbGxlciYmKHY9RS5jb250cm9sbGVyLE49Tnx8Z2EoKSxPKFxcXCInXFxcIit3K1xcXCInIGNvbnRyb2xsZXJcXFwiLE5bd10sRSxiYSksTlt3XT1FKTtpZih2PUUudHJhbnNjbHVkZSlLPSEwLEUuJCR0bGJ8fChPKFxcXCJ0cmFuc2NsdXNpb25cXFwiLG0sRSxiYSksbT1FKSxcXFwiZWxlbWVudFxcXCI9PXY/KHE9ITAsRj1FLnByaW9yaXR5LHY9YmEsYmE9ZC4kJGVsZW1lbnQ9eShVLmNyZWF0ZUNvbW1lbnQoXFxcIiBcXFwiK3crXFxcIjogXFxcIitkW3ddK1xcXCIgXFxcIikpLGI9YmFbMF0sVChmLHphLmNhbGwodiwwKSxiKSxBPVoodixlLEYsZyYmZy5uYW1lLHtub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlOm19KSk6KHY9XFxueShWYihiKSkuY29udGVudHMoKSxiYS5lbXB0eSgpLEE9Wih2LGUpKTtpZihFLnRlbXBsYXRlKWlmKEk9ITAsTyhcXFwidGVtcGxhdGVcXFwiLEQsRSxiYSksRD1FLHY9eihFLnRlbXBsYXRlKT9FLnRlbXBsYXRlKGJhLGQpOkUudGVtcGxhdGUsdj1mYSh2KSxFLnJlcGxhY2Upe2c9RTt2PVRiLnRlc3Qodik/JGMoWWIoRS50ZW1wbGF0ZU5hbWVzcGFjZSxSKHYpKSk6W107Yj12WzBdO2lmKDEhPXYubGVuZ3RofHxiLm5vZGVUeXBlIT09cWEpdGhyb3cgZWEoXFxcInRwbHJ0XFxcIix3LFxcXCJcXFwiKTtUKGYsYmEsYik7VGE9eyRhdHRyOnt9fTt2PWhhKGIsW10sVGEpO3ZhciBRPWEuc3BsaWNlKHhhKzEsYS5sZW5ndGgtKHhhKzEpKTt1JiZhZCh2KTthPWEuY29uY2F0KHYpLmNvbmNhdChRKTtKKGQsVGEpO1RhPWEubGVuZ3RofWVsc2UgYmEuaHRtbCh2KTtpZihFLnRlbXBsYXRlVXJsKUk9ITAsTyhcXFwidGVtcGxhdGVcXFwiLEQsRSxiYSksRD1FLEUucmVwbGFjZSYmKGc9RSksUz1NZihhLnNwbGljZSh4YSxhLmxlbmd0aC14YSksXFxuYmEsZCxmLEsmJkEsaCxrLHtjb250cm9sbGVyRGlyZWN0aXZlczpOLG5ld1Njb3BlRGlyZWN0aXZlOiQhPT1FJiYkLG5ld0lzb2xhdGVTY29wZURpcmVjdGl2ZTp1LHRlbXBsYXRlRGlyZWN0aXZlOkQsbm9uVGxiVHJhbnNjbHVkZURpcmVjdGl2ZTptfSksVGE9YS5sZW5ndGg7ZWxzZSBpZihFLmNvbXBpbGUpdHJ5e0FhPUUuY29tcGlsZShiYSxkLEEpLHooQWEpP24obnVsbCxBYSxNLFApOkFhJiZuKEFhLnByZSxBYS5wb3N0LE0sUCl9Y2F0Y2goTGYpe2MoTGYsdWEoYmEpKX1FLnRlcm1pbmFsJiYoUy50ZXJtaW5hbD0hMCxGPU1hdGgubWF4KEYsRS5wcmlvcml0eSkpfVMuc2NvcGU9JCYmITA9PT0kLnNjb3BlO1MudHJhbnNjbHVkZU9uVGhpc0VsZW1lbnQ9SztTLnRlbXBsYXRlT25UaGlzRWxlbWVudD1JO1MudHJhbnNjbHVkZT1BO3MuaGFzRWxlbWVudFRyYW5zY2x1ZGVEaXJlY3RpdmU9cTtyZXR1cm4gU31mdW5jdGlvbiBhZChhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoO2I8YztiKyspYVtiXT1cXG5PYihhW2JdLHskJGlzb2xhdGVTY29wZTohMH0pfWZ1bmN0aW9uIHcoYixkLGYsZyxoLGssbCl7aWYoZD09PWgpcmV0dXJuIG51bGw7aD1udWxsO2lmKGUuaGFzT3duUHJvcGVydHkoZCkpe3ZhciBuO2Q9YS5nZXQoZCtcXFwiRGlyZWN0aXZlXFxcIik7Zm9yKHZhciBwPTAsQj1kLmxlbmd0aDtwPEI7cCsrKXRyeXtuPWRbcF0sKGc9PT10fHxnPm4ucHJpb3JpdHkpJiYtMSE9bi5yZXN0cmljdC5pbmRleE9mKGYpJiYoayYmKG49T2Iobix7JCRzdGFydDprLCQkZW5kOmx9KSksYi5wdXNoKG4pLGg9bil9Y2F0Y2goeCl7Yyh4KX19cmV0dXJuIGh9ZnVuY3Rpb24gQShiKXtpZihlLmhhc093blByb3BlcnR5KGIpKWZvcih2YXIgYz1hLmdldChiK1xcXCJEaXJlY3RpdmVcXFwiKSxkPTAsZj1jLmxlbmd0aDtkPGY7ZCsrKWlmKGI9Y1tkXSxiLm11bHRpRWxlbWVudClyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBKKGEsYil7dmFyIGM9Yi4kYXR0cixkPWEuJGF0dHIsZT1hLiQkZWxlbWVudDttKGEsZnVuY3Rpb24oZCxcXG5lKXtcXFwiJFxcXCIhPWUuY2hhckF0KDApJiYoYltlXSYmYltlXSE9PWQmJihkKz0oXFxcInN0eWxlXFxcIj09PWU/XFxcIjtcXFwiOlxcXCIgXFxcIikrYltlXSksYS4kc2V0KGUsZCwhMCxjW2VdKSl9KTttKGIsZnVuY3Rpb24oYixmKXtcXFwiY2xhc3NcXFwiPT1mPyhEKGUsYiksYVtcXFwiY2xhc3NcXFwiXT0oYVtcXFwiY2xhc3NcXFwiXT9hW1xcXCJjbGFzc1xcXCJdK1xcXCIgXFxcIjpcXFwiXFxcIikrYik6XFxcInN0eWxlXFxcIj09Zj8oZS5hdHRyKFxcXCJzdHlsZVxcXCIsZS5hdHRyKFxcXCJzdHlsZVxcXCIpK1xcXCI7XFxcIitiKSxhLnN0eWxlPShhLnN0eWxlP2Euc3R5bGUrXFxcIjtcXFwiOlxcXCJcXFwiKStiKTpcXFwiJFxcXCI9PWYuY2hhckF0KDApfHxhLmhhc093blByb3BlcnR5KGYpfHwoYVtmXT1iLGRbZl09Y1tmXSl9KX1mdW5jdGlvbiBNZihhLGIsYyxlLGYsZyxoLGspe3ZhciBsPVtdLHMsbixwPWJbMF0sQj1hLnNoaWZ0KCksQz1PYihCLHt0ZW1wbGF0ZVVybDpudWxsLHRyYW5zY2x1ZGU6bnVsbCxyZXBsYWNlOm51bGwsJCRvcmlnaW5hbERpcmVjdGl2ZTpCfSkseD16KEIudGVtcGxhdGVVcmwpP0IudGVtcGxhdGVVcmwoYixjKTpCLnRlbXBsYXRlVXJsLFxcbk49Qi50ZW1wbGF0ZU5hbWVzcGFjZTtiLmVtcHR5KCk7ZCh4KS50aGVuKGZ1bmN0aW9uKGQpe3ZhciBGLHU7ZD1mYShkKTtpZihCLnJlcGxhY2Upe2Q9VGIudGVzdChkKT8kYyhZYihOLFIoZCkpKTpbXTtGPWRbMF07aWYoMSE9ZC5sZW5ndGh8fEYubm9kZVR5cGUhPT1xYSl0aHJvdyBlYShcXFwidHBscnRcXFwiLEIubmFtZSx4KTtkPXskYXR0cjp7fX07VChlLGIsRik7dmFyIEs9aGEoRixbXSxkKTtIKEIuc2NvcGUpJiZhZChLKTthPUsuY29uY2F0KGEpO0ooYyxkKX1lbHNlIEY9cCxiLmh0bWwoZCk7YS51bnNoaWZ0KEMpO3M9RShhLEYsYyxmLGIsQixnLGgsayk7bShlLGZ1bmN0aW9uKGEsYyl7YT09RiYmKGVbY109YlswXSl9KTtmb3Iobj1TKGJbMF0uY2hpbGROb2RlcyxmKTtsLmxlbmd0aDspe2Q9bC5zaGlmdCgpO3U9bC5zaGlmdCgpO3ZhciBJPWwuc2hpZnQoKSx2YT1sLnNoaWZ0KCksSz1iWzBdO2lmKCFkLiQkZGVzdHJveWVkKXtpZih1IT09cCl7dmFyIFo9dS5jbGFzc05hbWU7ay5oYXNFbGVtZW50VHJhbnNjbHVkZURpcmVjdGl2ZSYmXFxuQi5yZXBsYWNlfHwoSz1WYihGKSk7VChJLHkodSksSyk7RCh5KEspLFopfXU9cy50cmFuc2NsdWRlT25UaGlzRWxlbWVudD8kKGQscy50cmFuc2NsdWRlLHZhKTp2YTtzKG4sZCxLLGUsdSxzKX19bD1udWxsfSk7cmV0dXJuIGZ1bmN0aW9uKGEsYixjLGQsZSl7YT1lO2IuJCRkZXN0cm95ZWR8fChsP2wucHVzaChiLGMsZCxhKToocy50cmFuc2NsdWRlT25UaGlzRWxlbWVudCYmKGE9JChiLHMudHJhbnNjbHVkZSxlKSkscyhuLGIsYyxkLGEscykpKX19ZnVuY3Rpb24gQWEoYSxiKXt2YXIgYz1iLnByaW9yaXR5LWEucHJpb3JpdHk7cmV0dXJuIDAhPT1jP2M6YS5uYW1lIT09Yi5uYW1lP2EubmFtZTxiLm5hbWU/LTE6MTphLmluZGV4LWIuaW5kZXh9ZnVuY3Rpb24gTyhhLGIsYyxkKXtmdW5jdGlvbiBlKGEpe3JldHVybiBhP1xcXCIgKG1vZHVsZTogXFxcIithK1xcXCIpXFxcIjpcXFwiXFxcIn1pZihiKXRocm93IGVhKFxcXCJtdWx0aWRpclxcXCIsYi5uYW1lLGUoYi4kJG1vZHVsZU5hbWUpLGMubmFtZSxlKGMuJCRtb2R1bGVOYW1lKSxcXG5hLHVhKGQpKTt9ZnVuY3Rpb24geGEoYSxjKXt2YXIgZD1iKGMsITApO2QmJmEucHVzaCh7cHJpb3JpdHk6MCxjb21waWxlOmZ1bmN0aW9uKGEpe2E9YS5wYXJlbnQoKTt2YXIgYj0hIWEubGVuZ3RoO2ImJlouJCRhZGRCaW5kaW5nQ2xhc3MoYSk7cmV0dXJuIGZ1bmN0aW9uKGEsYyl7dmFyIGU9Yy5wYXJlbnQoKTtifHxaLiQkYWRkQmluZGluZ0NsYXNzKGUpO1ouJCRhZGRCaW5kaW5nSW5mbyhlLGQuZXhwcmVzc2lvbnMpO2EuJHdhdGNoKGQsZnVuY3Rpb24oYSl7Y1swXS5ub2RlVmFsdWU9YX0pfX19KX1mdW5jdGlvbiBZYihhLGIpe2E9TShhfHxcXFwiaHRtbFxcXCIpO3N3aXRjaChhKXtjYXNlIFxcXCJzdmdcXFwiOmNhc2UgXFxcIm1hdGhcXFwiOnZhciBjPVUuY3JlYXRlRWxlbWVudChcXFwiZGl2XFxcIik7Yy5pbm5lckhUTUw9XFxcIjxcXFwiK2ErXFxcIj5cXFwiK2IrXFxcIjwvXFxcIithK1xcXCI+XFxcIjtyZXR1cm4gYy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXM7ZGVmYXVsdDpyZXR1cm4gYn19ZnVuY3Rpb24gUShhLGIpe2lmKFxcXCJzcmNkb2NcXFwiPT1iKXJldHVybiBJLkhUTUw7XFxudmFyIGM9dGEoYSk7aWYoXFxcInhsaW5rSHJlZlxcXCI9PWJ8fFxcXCJmb3JtXFxcIj09YyYmXFxcImFjdGlvblxcXCI9PWJ8fFxcXCJpbWdcXFwiIT1jJiYoXFxcInNyY1xcXCI9PWJ8fFxcXCJuZ1NyY1xcXCI9PWIpKXJldHVybiBJLlJFU09VUkNFX1VSTH1mdW5jdGlvbiBWKGEsYyxkLGUsZil7dmFyIGc9UShhLGUpO2Y9aFtlXXx8Zjt2YXIgbD1iKGQsITAsZyxmKTtpZihsKXtpZihcXFwibXVsdGlwbGVcXFwiPT09ZSYmXFxcInNlbGVjdFxcXCI9PT10YShhKSl0aHJvdyBlYShcXFwic2VsbXVsdGlcXFwiLHVhKGEpKTtjLnB1c2goe3ByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihhLGMsaCl7Yz1oLiQkb2JzZXJ2ZXJzfHwoaC4kJG9ic2VydmVycz17fSk7aWYoay50ZXN0KGUpKXRocm93IGVhKFxcXCJub2RvbWV2ZW50c1xcXCIpO3ZhciBzPWhbZV07cyE9PWQmJihsPXMmJmIocywhMCxnLGYpLGQ9cyk7bCYmKGhbZV09bChhKSwoY1tlXXx8KGNbZV09W10pKS4kJGludGVyPSEwLChoLiQkb2JzZXJ2ZXJzJiZoLiQkb2JzZXJ2ZXJzW2VdLiQkc2NvcGV8fFxcbmEpLiR3YXRjaChsLGZ1bmN0aW9uKGEsYil7XFxcImNsYXNzXFxcIj09PWUmJmEhPWI/aC4kdXBkYXRlQ2xhc3MoYSxiKTpoLiRzZXQoZSxhKX0pKX19fX0pfX1mdW5jdGlvbiBUKGEsYixjKXt2YXIgZD1iWzBdLGU9Yi5sZW5ndGgsZj1kLnBhcmVudE5vZGUsZyxoO2lmKGEpZm9yKGc9MCxoPWEubGVuZ3RoO2c8aDtnKyspaWYoYVtnXT09ZCl7YVtnKytdPWM7aD1nK2UtMTtmb3IodmFyIGs9YS5sZW5ndGg7ZzxrO2crKyxoKyspaDxrP2FbZ109YVtoXTpkZWxldGUgYVtnXTthLmxlbmd0aC09ZS0xO2EuY29udGV4dD09PWQmJihhLmNvbnRleHQ9Yyk7YnJlYWt9ZiYmZi5yZXBsYWNlQ2hpbGQoYyxkKTthPVUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2EuYXBwZW5kQ2hpbGQoZCk7eS5oYXNEYXRhKGQpJiYoeShjKS5kYXRhKHkoZCkuZGF0YSgpKSxsYT8oUmI9ITAsbGEuY2xlYW5EYXRhKFtkXSkpOmRlbGV0ZSB5LmNhY2hlW2RbeS5leHBhbmRvXV0pO2Q9MTtmb3IoZT1iLmxlbmd0aDtkPGU7ZCsrKWY9XFxuYltkXSx5KGYpLnJlbW92ZSgpLGEuYXBwZW5kQ2hpbGQoZiksZGVsZXRlIGJbZF07YlswXT1jO2IubGVuZ3RoPTF9ZnVuY3Rpb24gWChhLGIpe3JldHVybiBQKGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkobnVsbCxhcmd1bWVudHMpfSxhLGIpfWZ1bmN0aW9uIFkoYSxiLGQsZSxmLGcpe3RyeXthKGIsZCxlLGYsZyl9Y2F0Y2goaCl7YyhoLHVhKGQpKX19ZnVuY3Rpb24gVyhhLGMsZCxlLGYsZyl7dmFyIGg7bShlLGZ1bmN0aW9uKGUsZyl7dmFyIGs9ZS5hdHRyTmFtZSxsPWUub3B0aW9uYWwscz1lLm1vZGUsbixwLEIsQztYYS5jYWxsKGMsayl8fChjW2tdPXQpO3N3aXRjaChzKXtjYXNlIFxcXCJAXFxcIjpjW2tdfHxsfHwoZFtnXT10KTtjLiRvYnNlcnZlKGssZnVuY3Rpb24oYSl7ZFtnXT1hfSk7Yy4kJG9ic2VydmVyc1trXS4kJHNjb3BlPWE7Y1trXSYmKGRbZ109YihjW2tdKShhKSk7YnJlYWs7Y2FzZSBcXFwiPVxcXCI6aWYobCYmIWNba10pYnJlYWs7cD11KGNba10pO0M9cC5saXRlcmFsP2thOmZ1bmN0aW9uKGEsXFxuYil7cmV0dXJuIGE9PT1ifHxhIT09YSYmYiE9PWJ9O0I9cC5hc3NpZ258fGZ1bmN0aW9uKCl7bj1kW2ddPXAoYSk7dGhyb3cgZWEoXFxcIm5vbmFzc2lnblxcXCIsY1trXSxmLm5hbWUpO307bj1kW2ddPXAoYSk7bD1mdW5jdGlvbihiKXtDKGIsZFtnXSl8fChDKGIsbik/QihhLGI9ZFtnXSk6ZFtnXT1iKTtyZXR1cm4gbj1ifTtsLiRzdGF0ZWZ1bD0hMDtsPWUuY29sbGVjdGlvbj9hLiR3YXRjaENvbGxlY3Rpb24oY1trXSxsKTphLiR3YXRjaCh1KGNba10sbCksbnVsbCxwLmxpdGVyYWwpO2g9aHx8W107aC5wdXNoKGwpO2JyZWFrO2Nhc2UgXFxcIiZcXFwiOnA9dShjW2tdKTtpZihwPT09diYmbClicmVhaztkW2ddPWZ1bmN0aW9uKGIpe3JldHVybiBwKGEsYil9fX0pO2U9aD9mdW5jdGlvbigpe2Zvcih2YXIgYT0wLGI9aC5sZW5ndGg7YTxiOysrYSloW2FdKCl9OnY7cmV0dXJuIGcmJmUhPT12PyhnLiRvbihcXFwiJGRlc3Ryb3lcXFwiLGUpLHYpOmV9dmFyIGFhPWZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9T2JqZWN0LmtleXMoYiksXFxuZCxlLGY7ZD0wO2ZvcihlPWMubGVuZ3RoO2Q8ZTtkKyspZj1jW2RdLHRoaXNbZl09YltmXX1lbHNlIHRoaXMuJGF0dHI9e307dGhpcy4kJGVsZW1lbnQ9YX07YWEucHJvdG90eXBlPXskbm9ybWFsaXplOndhLCRhZGRDbGFzczpmdW5jdGlvbihhKXthJiYwPGEubGVuZ3RoJiZCLmFkZENsYXNzKHRoaXMuJCRlbGVtZW50LGEpfSwkcmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7YSYmMDxhLmxlbmd0aCYmQi5yZW1vdmVDbGFzcyh0aGlzLiQkZWxlbWVudCxhKX0sJHVwZGF0ZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YmQoYSxiKTtjJiZjLmxlbmd0aCYmQi5hZGRDbGFzcyh0aGlzLiQkZWxlbWVudCxjKTsoYz1iZChiLGEpKSYmYy5sZW5ndGgmJkIucmVtb3ZlQ2xhc3ModGhpcy4kJGVsZW1lbnQsYyl9LCRzZXQ6ZnVuY3Rpb24oYSxiLGQsZSl7dmFyIGY9dGhpcy4kJGVsZW1lbnRbMF0sZz1TYyhmLGEpLGg9R2YoZixhKSxmPWE7Zz8odGhpcy4kJGVsZW1lbnQucHJvcChhLGIpLGU9Zyk6XFxuaCYmKHRoaXNbaF09YixmPWgpO3RoaXNbYV09YjtlP3RoaXMuJGF0dHJbYV09ZTooZT10aGlzLiRhdHRyW2FdKXx8KHRoaXMuJGF0dHJbYV09ZT1CYyhhLFxcXCItXFxcIikpO2c9dGEodGhpcy4kJGVsZW1lbnQpO2lmKFxcXCJhXFxcIj09PWcmJlxcXCJocmVmXFxcIj09PWF8fFxcXCJpbWdcXFwiPT09ZyYmXFxcInNyY1xcXCI9PT1hKXRoaXNbYV09Yj1OKGIsXFxcInNyY1xcXCI9PT1hKTtlbHNlIGlmKFxcXCJpbWdcXFwiPT09ZyYmXFxcInNyY3NldFxcXCI9PT1hKXtmb3IodmFyIGc9XFxcIlxcXCIsaD1SKGIpLGs9LyhcXFxccytcXFxcZCt4XFxcXHMqLHxcXFxccytcXFxcZCt3XFxcXHMqLHxcXFxccyssfCxcXFxccyspLyxrPS9cXFxccy8udGVzdChoKT9rOi8oLCkvLGg9aC5zcGxpdChrKSxrPU1hdGguZmxvb3IoaC5sZW5ndGgvMiksbD0wO2w8aztsKyspdmFyIHM9MipsLGc9ZytOKFIoaFtzXSksITApLGc9ZysoXFxcIiBcXFwiK1IoaFtzKzFdKSk7aD1SKGhbMipsXSkuc3BsaXQoL1xcXFxzLyk7Zys9TihSKGhbMF0pLCEwKTsyPT09aC5sZW5ndGgmJihnKz1cXFwiIFxcXCIrUihoWzFdKSk7dGhpc1thXT1iPWd9ITEhPT1kJiYobnVsbD09PWJ8fFxcbmI9PT10P3RoaXMuJCRlbGVtZW50LnJlbW92ZUF0dHIoZSk6dGhpcy4kJGVsZW1lbnQuYXR0cihlLGIpKTsoYT10aGlzLiQkb2JzZXJ2ZXJzKSYmbShhW2ZdLGZ1bmN0aW9uKGEpe3RyeXthKGIpfWNhdGNoKGQpe2MoZCl9fSl9LCRvYnNlcnZlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuJCRvYnNlcnZlcnN8fChjLiQkb2JzZXJ2ZXJzPWdhKCkpLGU9ZFthXXx8KGRbYV09W10pO2UucHVzaChiKTtLLiRldmFsQXN5bmMoZnVuY3Rpb24oKXshZS4kJGludGVyJiZjLmhhc093blByb3BlcnR5KGEpJiZiKGNbYV0pfSk7cmV0dXJuIGZ1bmN0aW9uKCl7YmIoZSxiKX19fTt2YXIgY2E9Yi5zdGFydFN5bWJvbCgpLGRhPWIuZW5kU3ltYm9sKCksZmE9XFxcInt7XFxcIj09Y2F8fFxcXCJ9fVxcXCI9PWRhP1lhOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoL1xcXFx7XFxcXHsvZyxjYSkucmVwbGFjZSgvfX0vZyxkYSl9LGlhPS9ebmdBdHRyW0EtWl0vO1ouJCRhZGRCaW5kaW5nSW5mbz1uP2Z1bmN0aW9uKGEsYil7dmFyIGM9XFxuYS5kYXRhKFxcXCIkYmluZGluZ1xcXCIpfHxbXTtHKGIpP2M9Yy5jb25jYXQoYik6Yy5wdXNoKGIpO2EuZGF0YShcXFwiJGJpbmRpbmdcXFwiLGMpfTp2O1ouJCRhZGRCaW5kaW5nQ2xhc3M9bj9mdW5jdGlvbihhKXtEKGEsXFxcIm5nLWJpbmRpbmdcXFwiKX06djtaLiQkYWRkU2NvcGVJbmZvPW4/ZnVuY3Rpb24oYSxiLGMsZCl7YS5kYXRhKGM/ZD9cXFwiJGlzb2xhdGVTY29wZU5vVGVtcGxhdGVcXFwiOlxcXCIkaXNvbGF0ZVNjb3BlXFxcIjpcXFwiJHNjb3BlXFxcIixiKX06djtaLiQkYWRkU2NvcGVDbGFzcz1uP2Z1bmN0aW9uKGEsYil7RChhLGI/XFxcIm5nLWlzb2xhdGUtc2NvcGVcXFwiOlxcXCJuZy1zY29wZVxcXCIpfTp2O3JldHVybiBafV19ZnVuY3Rpb24gd2EoYil7cmV0dXJuIGhiKGIucmVwbGFjZShaYyxcXFwiXFxcIikpfWZ1bmN0aW9uIGJkKGIsYSl7dmFyIGM9XFxcIlxcXCIsZD1iLnNwbGl0KC9cXFxccysvKSxlPWEuc3BsaXQoL1xcXFxzKy8pLGY9MDthOmZvcig7ZjxkLmxlbmd0aDtmKyspe2Zvcih2YXIgZz1kW2ZdLGg9MDtoPGUubGVuZ3RoO2grKylpZihnPT1lW2hdKWNvbnRpbnVlIGE7XFxuYys9KDA8Yy5sZW5ndGg/XFxcIiBcXFwiOlxcXCJcXFwiKStnfXJldHVybiBjfWZ1bmN0aW9uICRjKGIpe2I9eShiKTt2YXIgYT1iLmxlbmd0aDtpZigxPj1hKXJldHVybiBiO2Zvcig7YS0tOyk4PT09YlthXS5ub2RlVHlwZSYmTmYuY2FsbChiLGEsMSk7cmV0dXJuIGJ9ZnVuY3Rpb24gWGUoKXt2YXIgYj17fSxhPSExO3RoaXMucmVnaXN0ZXI9ZnVuY3Rpb24oYSxkKXtSYShhLFxcXCJjb250cm9sbGVyXFxcIik7SChhKT9QKGIsYSk6YlthXT1kfTt0aGlzLmFsbG93R2xvYmFscz1mdW5jdGlvbigpe2E9ITB9O3RoaXMuJGdldD1bXFxcIiRpbmplY3RvclxcXCIsXFxcIiR3aW5kb3dcXFwiLGZ1bmN0aW9uKGMsZCl7ZnVuY3Rpb24gZShhLGIsYyxkKXtpZighYXx8IUgoYS4kc2NvcGUpKXRocm93IEooXFxcIiRjb250cm9sbGVyXFxcIikoXFxcIm5vc2NwXFxcIixkLGIpO2EuJHNjb3BlW2JdPWN9cmV0dXJuIGZ1bmN0aW9uKGYsZyxoLGwpe3ZhciBrLG4scjtoPSEwPT09aDtsJiZMKGwpJiYocj1sKTtpZihMKGYpKXtsPWYubWF0Y2goWGMpO2lmKCFsKXRocm93IE9mKFxcXCJjdHJsZm10XFxcIixcXG5mKTtuPWxbMV07cj1yfHxsWzNdO2Y9Yi5oYXNPd25Qcm9wZXJ0eShuKT9iW25dOkRjKGcuJHNjb3BlLG4sITApfHwoYT9EYyhkLG4sITApOnQpO1FhKGYsbiwhMCl9aWYoaClyZXR1cm4gaD0oRyhmKT9mW2YubGVuZ3RoLTFdOmYpLnByb3RvdHlwZSxrPU9iamVjdC5jcmVhdGUoaHx8bnVsbCksciYmZShnLHIsayxufHxmLm5hbWUpLFAoZnVuY3Rpb24oKXt2YXIgYT1jLmludm9rZShmLGssZyxuKTthIT09ayYmKEgoYSl8fHooYSkpJiYoaz1hLHImJmUoZyxyLGssbnx8Zi5uYW1lKSk7cmV0dXJuIGt9LHtpbnN0YW5jZTprLGlkZW50aWZpZXI6cn0pO2s9Yy5pbnN0YW50aWF0ZShmLGcsbik7ciYmZShnLHIsayxufHxmLm5hbWUpO3JldHVybiBrfX1dfWZ1bmN0aW9uIFllKCl7dGhpcy4kZ2V0PVtcXFwiJHdpbmRvd1xcXCIsZnVuY3Rpb24oYil7cmV0dXJuIHkoYi5kb2N1bWVudCl9XX1mdW5jdGlvbiBaZSgpe3RoaXMuJGdldD1bXFxcIiRsb2dcXFwiLGZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbihhLGMpe2IuZXJyb3IuYXBwbHkoYixcXG5hcmd1bWVudHMpfX1dfWZ1bmN0aW9uIFpiKGIpe3JldHVybiBIKGIpP2FhKGIpP2IudG9JU09TdHJpbmcoKTpkYihiKTpifWZ1bmN0aW9uIGNmKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGIpe2lmKCFiKXJldHVyblxcXCJcXFwiO3ZhciBhPVtdO29jKGIsZnVuY3Rpb24oYixkKXtudWxsPT09Ynx8QShiKXx8KEcoYik/bShiLGZ1bmN0aW9uKGIsYyl7YS5wdXNoKG1hKGQpK1xcXCI9XFxcIittYShaYihiKSkpfSk6YS5wdXNoKG1hKGQpK1xcXCI9XFxcIittYShaYihiKSkpKX0pO3JldHVybiBhLmpvaW4oXFxcIiZcXFwiKX19fWZ1bmN0aW9uIGRmKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGEoYixlLGYpe251bGw9PT1ifHxBKGIpfHwoRyhiKT9tKGIsZnVuY3Rpb24oYil7YShiLGUrXFxcIltdXFxcIil9KTpIKGIpJiYhYWEoYik/b2MoYixmdW5jdGlvbihiLGMpe2EoYixlKyhmP1xcXCJcXFwiOlxcXCJbXFxcIikrYysoZj9cXFwiXFxcIjpcXFwiXVxcXCIpKX0pOmMucHVzaChtYShlKStcXFwiPVxcXCIrbWEoWmIoYikpKSl9XFxuaWYoIWIpcmV0dXJuXFxcIlxcXCI7dmFyIGM9W107YShiLFxcXCJcXFwiLCEwKTtyZXR1cm4gYy5qb2luKFxcXCImXFxcIil9fX1mdW5jdGlvbiAkYihiLGEpe2lmKEwoYikpe3ZhciBjPWIucmVwbGFjZShQZixcXFwiXFxcIikudHJpbSgpO2lmKGMpe3ZhciBkPWEoXFxcIkNvbnRlbnQtVHlwZVxcXCIpOyhkPWQmJjA9PT1kLmluZGV4T2YoY2QpKXx8KGQ9KGQ9Yy5tYXRjaChRZikpJiZSZltkWzBdXS50ZXN0KGMpKTtkJiYoYj13YyhjKSl9fXJldHVybiBifWZ1bmN0aW9uIGRkKGIpe3ZhciBhPWdhKCksYztMKGIpP20oYi5zcGxpdChcXFwiXFxcXG5cXFwiKSxmdW5jdGlvbihiKXtjPWIuaW5kZXhPZihcXFwiOlxcXCIpO3ZhciBlPU0oUihiLnN1YnN0cigwLGMpKSk7Yj1SKGIuc3Vic3RyKGMrMSkpO2UmJihhW2VdPWFbZV0/YVtlXStcXFwiLCBcXFwiK2I6Yil9KTpIKGIpJiZtKGIsZnVuY3Rpb24oYixjKXt2YXIgZj1NKGMpLGc9UihiKTtmJiYoYVtmXT1hW2ZdP2FbZl0rXFxcIiwgXFxcIitnOmcpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gZWQoYil7dmFyIGE7cmV0dXJuIGZ1bmN0aW9uKGMpe2F8fFxcbihhPWRkKGIpKTtyZXR1cm4gYz8oYz1hW00oYyldLHZvaWQgMD09PWMmJihjPW51bGwpLGMpOmF9fWZ1bmN0aW9uIGZkKGIsYSxjLGQpe2lmKHooZCkpcmV0dXJuIGQoYixhLGMpO20oZCxmdW5jdGlvbihkKXtiPWQoYixhLGMpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gYmYoKXt2YXIgYj10aGlzLmRlZmF1bHRzPXt0cmFuc2Zvcm1SZXNwb25zZTpbJGJdLHRyYW5zZm9ybVJlcXVlc3Q6W2Z1bmN0aW9uKGEpe3JldHVybiBIKGEpJiZcXFwiW29iamVjdCBGaWxlXVxcXCIhPT1zYS5jYWxsKGEpJiZcXFwiW29iamVjdCBCbG9iXVxcXCIhPT1zYS5jYWxsKGEpJiZcXFwiW29iamVjdCBGb3JtRGF0YV1cXFwiIT09c2EuY2FsbChhKT9kYihhKTphfV0saGVhZGVyczp7Y29tbW9uOntBY2NlcHQ6XFxcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlxcXCJ9LHBvc3Q6aWEoYWMpLHB1dDppYShhYykscGF0Y2g6aWEoYWMpfSx4c3JmQ29va2llTmFtZTpcXFwiWFNSRi1UT0tFTlxcXCIseHNyZkhlYWRlck5hbWU6XFxcIlgtWFNSRi1UT0tFTlxcXCIscGFyYW1TZXJpYWxpemVyOlxcXCIkaHR0cFBhcmFtU2VyaWFsaXplclxcXCJ9LFxcbmE9ITE7dGhpcy51c2VBcHBseUFzeW5jPWZ1bmN0aW9uKGIpe3JldHVybiB3KGIpPyhhPSEhYix0aGlzKTphfTt2YXIgYz10aGlzLmludGVyY2VwdG9ycz1bXTt0aGlzLiRnZXQ9W1xcXCIkaHR0cEJhY2tlbmRcXFwiLFxcXCIkJGNvb2tpZVJlYWRlclxcXCIsXFxcIiRjYWNoZUZhY3RvcnlcXFwiLFxcXCIkcm9vdFNjb3BlXFxcIixcXFwiJHFcXFwiLFxcXCIkaW5qZWN0b3JcXFwiLGZ1bmN0aW9uKGQsZSxmLGcsaCxsKXtmdW5jdGlvbiBrKGEpe2Z1bmN0aW9uIGMoYSl7dmFyIGI9UCh7fSxhKTtiLmRhdGE9YS5kYXRhP2ZkKGEuZGF0YSxhLmhlYWRlcnMsYS5zdGF0dXMsZS50cmFuc2Zvcm1SZXNwb25zZSk6YS5kYXRhO2E9YS5zdGF0dXM7cmV0dXJuIDIwMDw9YSYmMzAwPmE/YjpoLnJlamVjdChiKX1mdW5jdGlvbiBkKGEsYil7dmFyIGMsZT17fTttKGEsZnVuY3Rpb24oYSxkKXt6KGEpPyhjPWEoYiksbnVsbCE9YyYmKGVbZF09YykpOmVbZF09YX0pO3JldHVybiBlfWlmKCFjYS5pc09iamVjdChhKSl0aHJvdyBKKFxcXCIkaHR0cFxcXCIpKFxcXCJiYWRyZXFcXFwiLFxcbmEpO3ZhciBlPVAoe21ldGhvZDpcXFwiZ2V0XFxcIix0cmFuc2Zvcm1SZXF1ZXN0OmIudHJhbnNmb3JtUmVxdWVzdCx0cmFuc2Zvcm1SZXNwb25zZTpiLnRyYW5zZm9ybVJlc3BvbnNlLHBhcmFtU2VyaWFsaXplcjpiLnBhcmFtU2VyaWFsaXplcn0sYSk7ZS5oZWFkZXJzPWZ1bmN0aW9uKGEpe3ZhciBjPWIuaGVhZGVycyxlPVAoe30sYS5oZWFkZXJzKSxmLGcsaCxjPVAoe30sYy5jb21tb24sY1tNKGEubWV0aG9kKV0pO2E6Zm9yKGYgaW4gYyl7Zz1NKGYpO2ZvcihoIGluIGUpaWYoTShoKT09PWcpY29udGludWUgYTtlW2ZdPWNbZl19cmV0dXJuIGQoZSxpYShhKSl9KGEpO2UubWV0aG9kPXJiKGUubWV0aG9kKTtlLnBhcmFtU2VyaWFsaXplcj1MKGUucGFyYW1TZXJpYWxpemVyKT9sLmdldChlLnBhcmFtU2VyaWFsaXplcik6ZS5wYXJhbVNlcmlhbGl6ZXI7dmFyIGY9W2Z1bmN0aW9uKGEpe3ZhciBkPWEuaGVhZGVycyxlPWZkKGEuZGF0YSxlZChkKSx0LGEudHJhbnNmb3JtUmVxdWVzdCk7QShlKSYmXFxubShkLGZ1bmN0aW9uKGEsYil7XFxcImNvbnRlbnQtdHlwZVxcXCI9PT1NKGIpJiZkZWxldGUgZFtiXX0pO0EoYS53aXRoQ3JlZGVudGlhbHMpJiYhQShiLndpdGhDcmVkZW50aWFscykmJihhLndpdGhDcmVkZW50aWFscz1iLndpdGhDcmVkZW50aWFscyk7cmV0dXJuIG4oYSxlKS50aGVuKGMsYyl9LHRdLGc9aC53aGVuKGUpO2ZvcihtKHgsZnVuY3Rpb24oYSl7KGEucmVxdWVzdHx8YS5yZXF1ZXN0RXJyb3IpJiZmLnVuc2hpZnQoYS5yZXF1ZXN0LGEucmVxdWVzdEVycm9yKTsoYS5yZXNwb25zZXx8YS5yZXNwb25zZUVycm9yKSYmZi5wdXNoKGEucmVzcG9uc2UsYS5yZXNwb25zZUVycm9yKX0pO2YubGVuZ3RoOyl7YT1mLnNoaWZ0KCk7dmFyIGs9Zi5zaGlmdCgpLGc9Zy50aGVuKGEsayl9Zy5zdWNjZXNzPWZ1bmN0aW9uKGEpe1FhKGEsXFxcImZuXFxcIik7Zy50aGVuKGZ1bmN0aW9uKGIpe2EoYi5kYXRhLGIuc3RhdHVzLGIuaGVhZGVycyxlKX0pO3JldHVybiBnfTtnLmVycm9yPWZ1bmN0aW9uKGEpe1FhKGEsXFxuXFxcImZuXFxcIik7Zy50aGVuKG51bGwsZnVuY3Rpb24oYil7YShiLmRhdGEsYi5zdGF0dXMsYi5oZWFkZXJzLGUpfSk7cmV0dXJuIGd9O3JldHVybiBnfWZ1bmN0aW9uIG4oYyxmKXtmdW5jdGlvbiBsKGIsYyxkLGUpe2Z1bmN0aW9uIGYoKXtuKGMsYixkLGUpfU4mJigyMDA8PWImJjMwMD5iP04ucHV0KFMsW2IsYyxkZChkKSxlXSk6Ti5yZW1vdmUoUykpO2E/Zy4kYXBwbHlBc3luYyhmKTooZigpLGcuJCRwaGFzZXx8Zy4kYXBwbHkoKSl9ZnVuY3Rpb24gbihhLGIsZCxlKXtiPU1hdGgubWF4KGIsMCk7KDIwMDw9YiYmMzAwPmI/SS5yZXNvbHZlOkkucmVqZWN0KSh7ZGF0YTphLHN0YXR1czpiLGhlYWRlcnM6ZWQoZCksY29uZmlnOmMsc3RhdHVzVGV4dDplfSl9ZnVuY3Rpb24geChhKXtuKGEuZGF0YSxhLnN0YXR1cyxpYShhLmhlYWRlcnMoKSksYS5zdGF0dXNUZXh0KX1mdW5jdGlvbiBtKCl7dmFyIGE9ay5wZW5kaW5nUmVxdWVzdHMuaW5kZXhPZihjKTstMSE9PWEmJmsucGVuZGluZ1JlcXVlc3RzLnNwbGljZShhLFxcbjEpfXZhciBJPWguZGVmZXIoKSxCPUkucHJvbWlzZSxOLEQscT1jLmhlYWRlcnMsUz1yKGMudXJsLGMucGFyYW1TZXJpYWxpemVyKGMucGFyYW1zKSk7ay5wZW5kaW5nUmVxdWVzdHMucHVzaChjKTtCLnRoZW4obSxtKTshYy5jYWNoZSYmIWIuY2FjaGV8fCExPT09Yy5jYWNoZXx8XFxcIkdFVFxcXCIhPT1jLm1ldGhvZCYmXFxcIkpTT05QXFxcIiE9PWMubWV0aG9kfHwoTj1IKGMuY2FjaGUpP2MuY2FjaGU6SChiLmNhY2hlKT9iLmNhY2hlOnMpO04mJihEPU4uZ2V0KFMpLHcoRCk/RCYmeihELnRoZW4pP0QudGhlbih4LHgpOkcoRCk/bihEWzFdLERbMF0saWEoRFsyXSksRFszXSk6bihELDIwMCx7fSxcXFwiT0tcXFwiKTpOLnB1dChTLEIpKTtBKEQpJiYoKEQ9Z2QoYy51cmwpP2UoKVtjLnhzcmZDb29raWVOYW1lfHxiLnhzcmZDb29raWVOYW1lXTp0KSYmKHFbYy54c3JmSGVhZGVyTmFtZXx8Yi54c3JmSGVhZGVyTmFtZV09RCksZChjLm1ldGhvZCxTLGYsbCxxLGMudGltZW91dCxjLndpdGhDcmVkZW50aWFscyxjLnJlc3BvbnNlVHlwZSkpO1xcbnJldHVybiBCfWZ1bmN0aW9uIHIoYSxiKXswPGIubGVuZ3RoJiYoYSs9KC0xPT1hLmluZGV4T2YoXFxcIj9cXFwiKT9cXFwiP1xcXCI6XFxcIiZcXFwiKStiKTtyZXR1cm4gYX12YXIgcz1mKFxcXCIkaHR0cFxcXCIpO2IucGFyYW1TZXJpYWxpemVyPUwoYi5wYXJhbVNlcmlhbGl6ZXIpP2wuZ2V0KGIucGFyYW1TZXJpYWxpemVyKTpiLnBhcmFtU2VyaWFsaXplcjt2YXIgeD1bXTttKGMsZnVuY3Rpb24oYSl7eC51bnNoaWZ0KEwoYSk/bC5nZXQoYSk6bC5pbnZva2UoYSkpfSk7ay5wZW5kaW5nUmVxdWVzdHM9W107KGZ1bmN0aW9uKGEpe20oYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2tbYV09ZnVuY3Rpb24oYixjKXtyZXR1cm4gayhQKHt9LGN8fHt9LHttZXRob2Q6YSx1cmw6Yn0pKX19KX0pKFxcXCJnZXRcXFwiLFxcXCJkZWxldGVcXFwiLFxcXCJoZWFkXFxcIixcXFwianNvbnBcXFwiKTsoZnVuY3Rpb24oYSl7bShhcmd1bWVudHMsZnVuY3Rpb24oYSl7a1thXT1mdW5jdGlvbihiLGMsZCl7cmV0dXJuIGsoUCh7fSxkfHx7fSx7bWV0aG9kOmEsdXJsOmIsZGF0YTpjfSkpfX0pfSkoXFxcInBvc3RcXFwiLFxcblxcXCJwdXRcXFwiLFxcXCJwYXRjaFxcXCIpO2suZGVmYXVsdHM9YjtyZXR1cm4ga31dfWZ1bmN0aW9uIFNmKCl7cmV0dXJuIG5ldyBPLlhNTEh0dHBSZXF1ZXN0fWZ1bmN0aW9uIGVmKCl7dGhpcy4kZ2V0PVtcXFwiJGJyb3dzZXJcXFwiLFxcXCIkd2luZG93XFxcIixcXFwiJGRvY3VtZW50XFxcIixmdW5jdGlvbihiLGEsYyl7cmV0dXJuIFRmKGIsU2YsYi5kZWZlcixhLmFuZ3VsYXIuY2FsbGJhY2tzLGNbMF0pfV19ZnVuY3Rpb24gVGYoYixhLGMsZCxlKXtmdW5jdGlvbiBmKGEsYixjKXt2YXIgZj1lLmNyZWF0ZUVsZW1lbnQoXFxcInNjcmlwdFxcXCIpLG49bnVsbDtmLnR5cGU9XFxcInRleHQvamF2YXNjcmlwdFxcXCI7Zi5zcmM9YTtmLmFzeW5jPSEwO249ZnVuY3Rpb24oYSl7Zi5yZW1vdmVFdmVudExpc3RlbmVyKFxcXCJsb2FkXFxcIixuLCExKTtmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXFxcImVycm9yXFxcIixuLCExKTtlLmJvZHkucmVtb3ZlQ2hpbGQoZik7Zj1udWxsO3ZhciBnPS0xLHg9XFxcInVua25vd25cXFwiO2EmJihcXFwibG9hZFxcXCIhPT1hLnR5cGV8fGRbYl0uY2FsbGVkfHwoYT1cXG57dHlwZTpcXFwiZXJyb3JcXFwifSkseD1hLnR5cGUsZz1cXFwiZXJyb3JcXFwiPT09YS50eXBlPzQwNDoyMDApO2MmJmMoZyx4KX07Zi5hZGRFdmVudExpc3RlbmVyKFxcXCJsb2FkXFxcIixuLCExKTtmLmFkZEV2ZW50TGlzdGVuZXIoXFxcImVycm9yXFxcIixuLCExKTtlLmJvZHkuYXBwZW5kQ2hpbGQoZik7cmV0dXJuIG59cmV0dXJuIGZ1bmN0aW9uKGUsaCxsLGssbixyLHMseCl7ZnVuY3Rpb24gQygpe3AmJnAoKTtLJiZLLmFib3J0KCl9ZnVuY3Rpb24gRihhLGQsZSxmLGcpe0khPT10JiZjLmNhbmNlbChJKTtwPUs9bnVsbDthKGQsZSxmLGcpO2IuJCRjb21wbGV0ZU91dHN0YW5kaW5nUmVxdWVzdCh2KX1iLiQkaW5jT3V0c3RhbmRpbmdSZXF1ZXN0Q291bnQoKTtoPWh8fGIudXJsKCk7aWYoXFxcImpzb25wXFxcIj09TShlKSl7dmFyIHU9XFxcIl9cXFwiKyhkLmNvdW50ZXIrKykudG9TdHJpbmcoMzYpO2RbdV09ZnVuY3Rpb24oYSl7ZFt1XS5kYXRhPWE7ZFt1XS5jYWxsZWQ9ITB9O3ZhciBwPWYoaC5yZXBsYWNlKFxcXCJKU09OX0NBTExCQUNLXFxcIixcXG5cXFwiYW5ndWxhci5jYWxsYmFja3MuXFxcIit1KSx1LGZ1bmN0aW9uKGEsYil7RihrLGEsZFt1XS5kYXRhLFxcXCJcXFwiLGIpO2RbdV09dn0pfWVsc2V7dmFyIEs9YSgpO0sub3BlbihlLGgsITApO20obixmdW5jdGlvbihhLGIpe3coYSkmJksuc2V0UmVxdWVzdEhlYWRlcihiLGEpfSk7Sy5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgYT1LLnN0YXR1c1RleHR8fFxcXCJcXFwiLGI9XFxcInJlc3BvbnNlXFxcImluIEs/Sy5yZXNwb25zZTpLLnJlc3BvbnNlVGV4dCxjPTEyMjM9PT1LLnN0YXR1cz8yMDQ6Sy5zdGF0dXM7MD09PWMmJihjPWI/MjAwOlxcXCJmaWxlXFxcIj09QmEoaCkucHJvdG9jb2w/NDA0OjApO0YoayxjLGIsSy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxhKX07ZT1mdW5jdGlvbigpe0YoaywtMSxudWxsLG51bGwsXFxcIlxcXCIpfTtLLm9uZXJyb3I9ZTtLLm9uYWJvcnQ9ZTtzJiYoSy53aXRoQ3JlZGVudGlhbHM9ITApO2lmKHgpdHJ5e0sucmVzcG9uc2VUeXBlPXh9Y2F0Y2gocSl7aWYoXFxcImpzb25cXFwiIT09eCl0aHJvdyBxO31LLnNlbmQobCl9aWYoMDxcXG5yKXZhciBJPWMoQyxyKTtlbHNlIHImJnooci50aGVuKSYmci50aGVuKEMpfX1mdW5jdGlvbiAkZSgpe3ZhciBiPVxcXCJ7e1xcXCIsYT1cXFwifX1cXFwiO3RoaXMuc3RhcnRTeW1ib2w9ZnVuY3Rpb24oYSl7cmV0dXJuIGE/KGI9YSx0aGlzKTpifTt0aGlzLmVuZFN5bWJvbD1mdW5jdGlvbihiKXtyZXR1cm4gYj8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1bXFxcIiRwYXJzZVxcXCIsXFxcIiRleGNlcHRpb25IYW5kbGVyXFxcIixcXFwiJHNjZVxcXCIsZnVuY3Rpb24oYyxkLGUpe2Z1bmN0aW9uIGYoYSl7cmV0dXJuXFxcIlxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCIrYX1mdW5jdGlvbiBnKGMpe3JldHVybiBjLnJlcGxhY2UobixiKS5yZXBsYWNlKHIsYSl9ZnVuY3Rpb24gaChmLGgsbixyKXtmdW5jdGlvbiB1KGEpe3RyeXt2YXIgYj1hO2E9bj9lLmdldFRydXN0ZWQobixiKTplLnZhbHVlT2YoYik7dmFyIGM7aWYociYmIXcoYSkpYz1hO2Vsc2UgaWYobnVsbD09YSljPVxcXCJcXFwiO2Vsc2V7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFxcXCJzdHJpbmdcXFwiOmJyZWFrO2Nhc2UgXFxcIm51bWJlclxcXCI6YT1cXG5cXFwiXFxcIithO2JyZWFrO2RlZmF1bHQ6YT1kYihhKX1jPWF9cmV0dXJuIGN9Y2F0Y2goZyl7ZChLYS5pbnRlcnIoZixnKSl9fXI9ISFyO2Zvcih2YXIgcCxtLHE9MCxJPVtdLEI9W10sTj1mLmxlbmd0aCxEPVtdLHQ9W107cTxOOylpZigtMSE9KHA9Zi5pbmRleE9mKGIscSkpJiYtMSE9KG09Zi5pbmRleE9mKGEscCtsKSkpcSE9PXAmJkQucHVzaChnKGYuc3Vic3RyaW5nKHEscCkpKSxxPWYuc3Vic3RyaW5nKHArbCxtKSxJLnB1c2gocSksQi5wdXNoKGMocSx1KSkscT1tK2ssdC5wdXNoKEQubGVuZ3RoKSxELnB1c2goXFxcIlxcXCIpO2Vsc2V7cSE9PU4mJkQucHVzaChnKGYuc3Vic3RyaW5nKHEpKSk7YnJlYWt9biYmMTxELmxlbmd0aCYmS2EudGhyb3dOb2NvbmNhdChmKTtpZighaHx8SS5sZW5ndGgpe3ZhciBTPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9SS5sZW5ndGg7YjxjO2IrKyl7aWYociYmQShhW2JdKSlyZXR1cm47RFt0W2JdXT1hW2JdfXJldHVybiBELmpvaW4oXFxcIlxcXCIpfTtyZXR1cm4gUChmdW5jdGlvbihhKXt2YXIgYj1cXG4wLGM9SS5sZW5ndGgsZT1BcnJheShjKTt0cnl7Zm9yKDtiPGM7YisrKWVbYl09QltiXShhKTtyZXR1cm4gUyhlKX1jYXRjaChnKXtkKEthLmludGVycihmLGcpKX19LHtleHA6ZixleHByZXNzaW9uczpJLCQkd2F0Y2hEZWxlZ2F0ZTpmdW5jdGlvbihhLGIpe3ZhciBjO3JldHVybiBhLiR3YXRjaEdyb3VwKEIsZnVuY3Rpb24oZCxlKXt2YXIgZj1TKGQpO3ooYikmJmIuY2FsbCh0aGlzLGYsZCE9PWU/YzpmLGEpO2M9Zn0pfX0pfX12YXIgbD1iLmxlbmd0aCxrPWEubGVuZ3RoLG49bmV3IFJlZ0V4cChiLnJlcGxhY2UoLy4vZyxmKSxcXFwiZ1xcXCIpLHI9bmV3IFJlZ0V4cChhLnJlcGxhY2UoLy4vZyxmKSxcXFwiZ1xcXCIpO2guc3RhcnRTeW1ib2w9ZnVuY3Rpb24oKXtyZXR1cm4gYn07aC5lbmRTeW1ib2w9ZnVuY3Rpb24oKXtyZXR1cm4gYX07cmV0dXJuIGh9XX1mdW5jdGlvbiBhZigpe3RoaXMuJGdldD1bXFxcIiRyb290U2NvcGVcXFwiLFxcXCIkd2luZG93XFxcIixcXFwiJHFcXFwiLFxcXCIkJHFcXFwiLGZ1bmN0aW9uKGIsYSxjLGQpe2Z1bmN0aW9uIGUoZSxcXG5oLGwsayl7dmFyIG49NDxhcmd1bWVudHMubGVuZ3RoLHI9bj96YS5jYWxsKGFyZ3VtZW50cyw0KTpbXSxzPWEuc2V0SW50ZXJ2YWwseD1hLmNsZWFySW50ZXJ2YWwsQz0wLEY9dyhrKSYmIWssdT0oRj9kOmMpLmRlZmVyKCkscD11LnByb21pc2U7bD13KGwpP2w6MDtwLnRoZW4obnVsbCxudWxsLG4/ZnVuY3Rpb24oKXtlLmFwcGx5KG51bGwscil9OmUpO3AuJCRpbnRlcnZhbElkPXMoZnVuY3Rpb24oKXt1Lm5vdGlmeShDKyspOzA8bCYmQz49bCYmKHUucmVzb2x2ZShDKSx4KHAuJCRpbnRlcnZhbElkKSxkZWxldGUgZltwLiQkaW50ZXJ2YWxJZF0pO0Z8fGIuJGFwcGx5KCl9LGgpO2ZbcC4kJGludGVydmFsSWRdPXU7cmV0dXJuIHB9dmFyIGY9e307ZS5jYW5jZWw9ZnVuY3Rpb24oYil7cmV0dXJuIGImJmIuJCRpbnRlcnZhbElkIGluIGY/KGZbYi4kJGludGVydmFsSWRdLnJlamVjdChcXFwiY2FuY2VsZWRcXFwiKSxhLmNsZWFySW50ZXJ2YWwoYi4kJGludGVydmFsSWQpLGRlbGV0ZSBmW2IuJCRpbnRlcnZhbElkXSxcXG4hMCk6ITF9O3JldHVybiBlfV19ZnVuY3Rpb24gZ2UoKXt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm57aWQ6XFxcImVuLXVzXFxcIixOVU1CRVJfRk9STUFUUzp7REVDSU1BTF9TRVA6XFxcIi5cXFwiLEdST1VQX1NFUDpcXFwiLFxcXCIsUEFUVEVSTlM6W3ttaW5JbnQ6MSxtaW5GcmFjOjAsbWF4RnJhYzozLHBvc1ByZTpcXFwiXFxcIixwb3NTdWY6XFxcIlxcXCIsbmVnUHJlOlxcXCItXFxcIixuZWdTdWY6XFxcIlxcXCIsZ1NpemU6MyxsZ1NpemU6M30se21pbkludDoxLG1pbkZyYWM6MixtYXhGcmFjOjIscG9zUHJlOlxcXCJcXFxcdTAwYTRcXFwiLHBvc1N1ZjpcXFwiXFxcIixuZWdQcmU6XFxcIihcXFxcdTAwYTRcXFwiLG5lZ1N1ZjpcXFwiKVxcXCIsZ1NpemU6MyxsZ1NpemU6M31dLENVUlJFTkNZX1NZTTpcXFwiJFxcXCJ9LERBVEVUSU1FX0ZPUk1BVFM6e01PTlRIOlxcXCJKYW51YXJ5IEZlYnJ1YXJ5IE1hcmNoIEFwcmlsIE1heSBKdW5lIEp1bHkgQXVndXN0IFNlcHRlbWJlciBPY3RvYmVyIE5vdmVtYmVyIERlY2VtYmVyXFxcIi5zcGxpdChcXFwiIFxcXCIpLFNIT1JUTU9OVEg6XFxcIkphbiBGZWIgTWFyIEFwciBNYXkgSnVuIEp1bCBBdWcgU2VwIE9jdCBOb3YgRGVjXFxcIi5zcGxpdChcXFwiIFxcXCIpLFxcbkRBWTpcXFwiU3VuZGF5IE1vbmRheSBUdWVzZGF5IFdlZG5lc2RheSBUaHVyc2RheSBGcmlkYXkgU2F0dXJkYXlcXFwiLnNwbGl0KFxcXCIgXFxcIiksU0hPUlREQVk6XFxcIlN1biBNb24gVHVlIFdlZCBUaHUgRnJpIFNhdFxcXCIuc3BsaXQoXFxcIiBcXFwiKSxBTVBNUzpbXFxcIkFNXFxcIixcXFwiUE1cXFwiXSxtZWRpdW06XFxcIk1NTSBkLCB5IGg6bW06c3MgYVxcXCIsXFxcInNob3J0XFxcIjpcXFwiTS9kL3l5IGg6bW0gYVxcXCIsZnVsbERhdGU6XFxcIkVFRUUsIE1NTU0gZCwgeVxcXCIsbG9uZ0RhdGU6XFxcIk1NTU0gZCwgeVxcXCIsbWVkaXVtRGF0ZTpcXFwiTU1NIGQsIHlcXFwiLHNob3J0RGF0ZTpcXFwiTS9kL3l5XFxcIixtZWRpdW1UaW1lOlxcXCJoOm1tOnNzIGFcXFwiLHNob3J0VGltZTpcXFwiaDptbSBhXFxcIixFUkFOQU1FUzpbXFxcIkJlZm9yZSBDaHJpc3RcXFwiLFxcXCJBbm5vIERvbWluaVxcXCJdLEVSQVM6W1xcXCJCQ1xcXCIsXFxcIkFEXFxcIl19LHBsdXJhbENhdDpmdW5jdGlvbihiKXtyZXR1cm4gMT09PWI/XFxcIm9uZVxcXCI6XFxcIm90aGVyXFxcIn19fX1mdW5jdGlvbiBiYyhiKXtiPWIuc3BsaXQoXFxcIi9cXFwiKTtmb3IodmFyIGE9Yi5sZW5ndGg7YS0tOyliW2FdPW9iKGJbYV0pO1xcbnJldHVybiBiLmpvaW4oXFxcIi9cXFwiKX1mdW5jdGlvbiBoZChiLGEpe3ZhciBjPUJhKGIpO2EuJCRwcm90b2NvbD1jLnByb3RvY29sO2EuJCRob3N0PWMuaG9zdG5hbWU7YS4kJHBvcnQ9VyhjLnBvcnQpfHxVZltjLnByb3RvY29sXXx8bnVsbH1mdW5jdGlvbiBpZChiLGEpe3ZhciBjPVxcXCIvXFxcIiE9PWIuY2hhckF0KDApO2MmJihiPVxcXCIvXFxcIitiKTt2YXIgZD1CYShiKTthLiQkcGF0aD1kZWNvZGVVUklDb21wb25lbnQoYyYmXFxcIi9cXFwiPT09ZC5wYXRobmFtZS5jaGFyQXQoMCk/ZC5wYXRobmFtZS5zdWJzdHJpbmcoMSk6ZC5wYXRobmFtZSk7YS4kJHNlYXJjaD16YyhkLnNlYXJjaCk7YS4kJGhhc2g9ZGVjb2RlVVJJQ29tcG9uZW50KGQuaGFzaCk7YS4kJHBhdGgmJlxcXCIvXFxcIiE9YS4kJHBhdGguY2hhckF0KDApJiYoYS4kJHBhdGg9XFxcIi9cXFwiK2EuJCRwYXRoKX1mdW5jdGlvbiB5YShiLGEpe2lmKDA9PT1hLmluZGV4T2YoYikpcmV0dXJuIGEuc3Vic3RyKGIubGVuZ3RoKX1mdW5jdGlvbiBKYShiKXt2YXIgYT1iLmluZGV4T2YoXFxcIiNcXFwiKTtcXG5yZXR1cm4tMT09YT9iOmIuc3Vic3RyKDAsYSl9ZnVuY3Rpb24gQmIoYil7cmV0dXJuIGIucmVwbGFjZSgvKCMuKyl8IyQvLFxcXCIkMVxcXCIpfWZ1bmN0aW9uIGNjKGIpe3JldHVybiBiLnN1YnN0cigwLEphKGIpLmxhc3RJbmRleE9mKFxcXCIvXFxcIikrMSl9ZnVuY3Rpb24gZGMoYixhKXt0aGlzLiQkaHRtbDU9ITA7YT1hfHxcXFwiXFxcIjt2YXIgYz1jYyhiKTtoZChiLHRoaXMpO3RoaXMuJCRwYXJzZT1mdW5jdGlvbihhKXt2YXIgYj15YShjLGEpO2lmKCFMKGIpKXRocm93IENiKFxcXCJpcHRocHJmeFxcXCIsYSxjKTtpZChiLHRoaXMpO3RoaXMuJCRwYXRofHwodGhpcy4kJHBhdGg9XFxcIi9cXFwiKTt0aGlzLiQkY29tcG9zZSgpfTt0aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBhPVFiKHRoaXMuJCRzZWFyY2gpLGI9dGhpcy4kJGhhc2g/XFxcIiNcXFwiK29iKHRoaXMuJCRoYXNoKTpcXFwiXFxcIjt0aGlzLiQkdXJsPWJjKHRoaXMuJCRwYXRoKSsoYT9cXFwiP1xcXCIrYTpcXFwiXFxcIikrYjt0aGlzLiQkYWJzVXJsPWMrdGhpcy4kJHVybC5zdWJzdHIoMSl9O3RoaXMuJCRwYXJzZUxpbmtVcmw9XFxuZnVuY3Rpb24oZCxlKXtpZihlJiZcXFwiI1xcXCI9PT1lWzBdKXJldHVybiB0aGlzLmhhc2goZS5zbGljZSgxKSksITA7dmFyIGYsZzsoZj15YShiLGQpKSE9PXQ/KGc9ZixnPShmPXlhKGEsZikpIT09dD9jKyh5YShcXFwiL1xcXCIsZil8fGYpOmIrZyk6KGY9eWEoYyxkKSkhPT10P2c9YytmOmM9PWQrXFxcIi9cXFwiJiYoZz1jKTtnJiZ0aGlzLiQkcGFyc2UoZyk7cmV0dXJuISFnfX1mdW5jdGlvbiBlYyhiLGEpe3ZhciBjPWNjKGIpO2hkKGIsdGhpcyk7dGhpcy4kJHBhcnNlPWZ1bmN0aW9uKGQpe3ZhciBlPXlhKGIsZCl8fHlhKGMsZCksZjtBKGUpfHxcXFwiI1xcXCIhPT1lLmNoYXJBdCgwKT90aGlzLiQkaHRtbDU/Zj1lOihmPVxcXCJcXFwiLEEoZSkmJihiPWQsdGhpcy5yZXBsYWNlKCkpKTooZj15YShhLGUpLEEoZikmJihmPWUpKTtpZChmLHRoaXMpO2Q9dGhpcy4kJHBhdGg7dmFyIGU9YixnPS9eXFxcXC9bQS1aXTooXFxcXC8uKikvOzA9PT1mLmluZGV4T2YoZSkmJihmPWYucmVwbGFjZShlLFxcXCJcXFwiKSk7Zy5leGVjKGYpfHwoZD0oZj1nLmV4ZWMoZCkpP1xcbmZbMV06ZCk7dGhpcy4kJHBhdGg9ZDt0aGlzLiQkY29tcG9zZSgpfTt0aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBjPVFiKHRoaXMuJCRzZWFyY2gpLGU9dGhpcy4kJGhhc2g/XFxcIiNcXFwiK29iKHRoaXMuJCRoYXNoKTpcXFwiXFxcIjt0aGlzLiQkdXJsPWJjKHRoaXMuJCRwYXRoKSsoYz9cXFwiP1xcXCIrYzpcXFwiXFxcIikrZTt0aGlzLiQkYWJzVXJsPWIrKHRoaXMuJCR1cmw/YSt0aGlzLiQkdXJsOlxcXCJcXFwiKX07dGhpcy4kJHBhcnNlTGlua1VybD1mdW5jdGlvbihhLGMpe3JldHVybiBKYShiKT09SmEoYSk/KHRoaXMuJCRwYXJzZShhKSwhMCk6ITF9fWZ1bmN0aW9uIGpkKGIsYSl7dGhpcy4kJGh0bWw1PSEwO2VjLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgYz1jYyhiKTt0aGlzLiQkcGFyc2VMaW5rVXJsPWZ1bmN0aW9uKGQsZSl7aWYoZSYmXFxcIiNcXFwiPT09ZVswXSlyZXR1cm4gdGhpcy5oYXNoKGUuc2xpY2UoMSkpLCEwO3ZhciBmLGc7Yj09SmEoZCk/Zj1kOihnPXlhKGMsZCkpP2Y9YithK2c6Yz09PWQrXFxcIi9cXFwiJiYoZj1cXG5jKTtmJiZ0aGlzLiQkcGFyc2UoZik7cmV0dXJuISFmfTt0aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBjPVFiKHRoaXMuJCRzZWFyY2gpLGU9dGhpcy4kJGhhc2g/XFxcIiNcXFwiK29iKHRoaXMuJCRoYXNoKTpcXFwiXFxcIjt0aGlzLiQkdXJsPWJjKHRoaXMuJCRwYXRoKSsoYz9cXFwiP1xcXCIrYzpcXFwiXFxcIikrZTt0aGlzLiQkYWJzVXJsPWIrYSt0aGlzLiQkdXJsfX1mdW5jdGlvbiBEYihiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tiXX19ZnVuY3Rpb24ga2QoYixhKXtyZXR1cm4gZnVuY3Rpb24oYyl7aWYoQShjKSlyZXR1cm4gdGhpc1tiXTt0aGlzW2JdPWEoYyk7dGhpcy4kJGNvbXBvc2UoKTtyZXR1cm4gdGhpc319ZnVuY3Rpb24gZmYoKXt2YXIgYj1cXFwiXFxcIixhPXtlbmFibGVkOiExLHJlcXVpcmVCYXNlOiEwLHJld3JpdGVMaW5rczohMH07dGhpcy5oYXNoUHJlZml4PWZ1bmN0aW9uKGEpe3JldHVybiB3KGEpPyhiPWEsdGhpcyk6Yn07dGhpcy5odG1sNU1vZGU9ZnVuY3Rpb24oYil7cmV0dXJuIGFiKGIpP1xcbihhLmVuYWJsZWQ9Yix0aGlzKTpIKGIpPyhhYihiLmVuYWJsZWQpJiYoYS5lbmFibGVkPWIuZW5hYmxlZCksYWIoYi5yZXF1aXJlQmFzZSkmJihhLnJlcXVpcmVCYXNlPWIucmVxdWlyZUJhc2UpLGFiKGIucmV3cml0ZUxpbmtzKSYmKGEucmV3cml0ZUxpbmtzPWIucmV3cml0ZUxpbmtzKSx0aGlzKTphfTt0aGlzLiRnZXQ9W1xcXCIkcm9vdFNjb3BlXFxcIixcXFwiJGJyb3dzZXJcXFwiLFxcXCIkc25pZmZlclxcXCIsXFxcIiRyb290RWxlbWVudFxcXCIsXFxcIiR3aW5kb3dcXFwiLGZ1bmN0aW9uKGMsZCxlLGYsZyl7ZnVuY3Rpb24gaChhLGIsYyl7dmFyIGU9ay51cmwoKSxmPWsuJCRzdGF0ZTt0cnl7ZC51cmwoYSxiLGMpLGsuJCRzdGF0ZT1kLnN0YXRlKCl9Y2F0Y2goZyl7dGhyb3cgay51cmwoZSksay4kJHN0YXRlPWYsZzt9fWZ1bmN0aW9uIGwoYSxiKXtjLiRicm9hZGNhc3QoXFxcIiRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NcXFwiLGsuYWJzVXJsKCksYSxrLiQkc3RhdGUsYil9dmFyIGssbjtuPWQuYmFzZUhyZWYoKTt2YXIgcj1kLnVybCgpLFxcbnM7aWYoYS5lbmFibGVkKXtpZighbiYmYS5yZXF1aXJlQmFzZSl0aHJvdyBDYihcXFwibm9iYXNlXFxcIik7cz1yLnN1YnN0cmluZygwLHIuaW5kZXhPZihcXFwiL1xcXCIsci5pbmRleE9mKFxcXCIvL1xcXCIpKzIpKSsobnx8XFxcIi9cXFwiKTtuPWUuaGlzdG9yeT9kYzpqZH1lbHNlIHM9SmEociksbj1lYztrPW5ldyBuKHMsXFxcIiNcXFwiK2IpO2suJCRwYXJzZUxpbmtVcmwocixyKTtrLiQkc3RhdGU9ZC5zdGF0ZSgpO3ZhciB4PS9eXFxcXHMqKGphdmFzY3JpcHR8bWFpbHRvKTovaTtmLm9uKFxcXCJjbGlja1xcXCIsZnVuY3Rpb24oYil7aWYoYS5yZXdyaXRlTGlua3MmJiFiLmN0cmxLZXkmJiFiLm1ldGFLZXkmJiFiLnNoaWZ0S2V5JiYyIT1iLndoaWNoJiYyIT1iLmJ1dHRvbil7Zm9yKHZhciBlPXkoYi50YXJnZXQpO1xcXCJhXFxcIiE9PXRhKGVbMF0pOylpZihlWzBdPT09ZlswXXx8IShlPWUucGFyZW50KCkpWzBdKXJldHVybjt2YXIgaD1lLnByb3AoXFxcImhyZWZcXFwiKSxsPWUuYXR0cihcXFwiaHJlZlxcXCIpfHxlLmF0dHIoXFxcInhsaW5rOmhyZWZcXFwiKTtIKGgpJiZcXFwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cXFwiPT09XFxuaC50b1N0cmluZygpJiYoaD1CYShoLmFuaW1WYWwpLmhyZWYpO3gudGVzdChoKXx8IWh8fGUuYXR0cihcXFwidGFyZ2V0XFxcIil8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fCFrLiQkcGFyc2VMaW5rVXJsKGgsbCl8fChiLnByZXZlbnREZWZhdWx0KCksay5hYnNVcmwoKSE9ZC51cmwoKSYmKGMuJGFwcGx5KCksZy5hbmd1bGFyW1xcXCJmZi02ODQyMDgtcHJldmVudERlZmF1bHRcXFwiXT0hMCkpfX0pO0JiKGsuYWJzVXJsKCkpIT1CYihyKSYmZC51cmwoay5hYnNVcmwoKSwhMCk7dmFyIEM9ITA7ZC5vblVybENoYW5nZShmdW5jdGlvbihhLGIpe2MuJGV2YWxBc3luYyhmdW5jdGlvbigpe3ZhciBkPWsuYWJzVXJsKCksZT1rLiQkc3RhdGUsZjtrLiQkcGFyc2UoYSk7ay4kJHN0YXRlPWI7Zj1jLiRicm9hZGNhc3QoXFxcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XFxcIixhLGQsYixlKS5kZWZhdWx0UHJldmVudGVkO2suYWJzVXJsKCk9PT1hJiYoZj8oay4kJHBhcnNlKGQpLGsuJCRzdGF0ZT1lLGgoZCwhMSxlKSk6KEM9XFxuITEsbChkLGUpKSl9KTtjLiQkcGhhc2V8fGMuJGRpZ2VzdCgpfSk7Yy4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYT1CYihkLnVybCgpKSxiPUJiKGsuYWJzVXJsKCkpLGY9ZC5zdGF0ZSgpLGc9ay4kJHJlcGxhY2Usbj1hIT09Ynx8ay4kJGh0bWw1JiZlLmhpc3RvcnkmJmYhPT1rLiQkc3RhdGU7aWYoQ3x8bilDPSExLGMuJGV2YWxBc3luYyhmdW5jdGlvbigpe3ZhciBiPWsuYWJzVXJsKCksZD1jLiRicm9hZGNhc3QoXFxcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XFxcIixiLGEsay4kJHN0YXRlLGYpLmRlZmF1bHRQcmV2ZW50ZWQ7ay5hYnNVcmwoKT09PWImJihkPyhrLiQkcGFyc2UoYSksay4kJHN0YXRlPWYpOihuJiZoKGIsZyxmPT09ay4kJHN0YXRlP251bGw6ay4kJHN0YXRlKSxsKGEsZikpKX0pO2suJCRyZXBsYWNlPSExfSk7cmV0dXJuIGt9XX1mdW5jdGlvbiBnZigpe3ZhciBiPSEwLGE9dGhpczt0aGlzLmRlYnVnRW5hYmxlZD1mdW5jdGlvbihhKXtyZXR1cm4gdyhhKT8oYj1hLHRoaXMpOmJ9O1xcbnRoaXMuJGdldD1bXFxcIiR3aW5kb3dcXFwiLGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSl7YSBpbnN0YW5jZW9mIEVycm9yJiYoYS5zdGFjaz9hPWEubWVzc2FnZSYmLTE9PT1hLnN0YWNrLmluZGV4T2YoYS5tZXNzYWdlKT9cXFwiRXJyb3I6IFxcXCIrYS5tZXNzYWdlK1xcXCJcXFxcblxcXCIrYS5zdGFjazphLnN0YWNrOmEuc291cmNlVVJMJiYoYT1hLm1lc3NhZ2UrXFxcIlxcXFxuXFxcIithLnNvdXJjZVVSTCtcXFwiOlxcXCIrYS5saW5lKSk7cmV0dXJuIGF9ZnVuY3Rpb24gZShhKXt2YXIgYj1jLmNvbnNvbGV8fHt9LGU9YlthXXx8Yi5sb2d8fHY7YT0hMTt0cnl7YT0hIWUuYXBwbHl9Y2F0Y2gobCl7fXJldHVybiBhP2Z1bmN0aW9uKCl7dmFyIGE9W107bShhcmd1bWVudHMsZnVuY3Rpb24oYil7YS5wdXNoKGQoYikpfSk7cmV0dXJuIGUuYXBwbHkoYixhKX06ZnVuY3Rpb24oYSxiKXtlKGEsbnVsbD09Yj9cXFwiXFxcIjpiKX19cmV0dXJue2xvZzplKFxcXCJsb2dcXFwiKSxpbmZvOmUoXFxcImluZm9cXFwiKSx3YXJuOmUoXFxcIndhcm5cXFwiKSxlcnJvcjplKFxcXCJlcnJvclxcXCIpLGRlYnVnOmZ1bmN0aW9uKCl7dmFyIGM9XFxuZShcXFwiZGVidWdcXFwiKTtyZXR1cm4gZnVuY3Rpb24oKXtiJiZjLmFwcGx5KGEsYXJndW1lbnRzKX19KCl9fV19ZnVuY3Rpb24gQ2EoYixhKXtpZihcXFwiX19kZWZpbmVHZXR0ZXJfX1xcXCI9PT1ifHxcXFwiX19kZWZpbmVTZXR0ZXJfX1xcXCI9PT1ifHxcXFwiX19sb29rdXBHZXR0ZXJfX1xcXCI9PT1ifHxcXFwiX19sb29rdXBTZXR0ZXJfX1xcXCI9PT1ifHxcXFwiX19wcm90b19fXFxcIj09PWIpdGhyb3cgZGEoXFxcImlzZWNmbGRcXFwiLGEpO3JldHVybiBifWZ1bmN0aW9uIG9hKGIsYSl7aWYoYil7aWYoYi5jb25zdHJ1Y3Rvcj09PWIpdGhyb3cgZGEoXFxcImlzZWNmblxcXCIsYSk7aWYoYi53aW5kb3c9PT1iKXRocm93IGRhKFxcXCJpc2Vjd2luZG93XFxcIixhKTtpZihiLmNoaWxkcmVuJiYoYi5ub2RlTmFtZXx8Yi5wcm9wJiZiLmF0dHImJmIuZmluZCkpdGhyb3cgZGEoXFxcImlzZWNkb21cXFwiLGEpO2lmKGI9PT1PYmplY3QpdGhyb3cgZGEoXFxcImlzZWNvYmpcXFwiLGEpO31yZXR1cm4gYn1mdW5jdGlvbiBsZChiLGEpe2lmKGIpe2lmKGIuY29uc3RydWN0b3I9PT1iKXRocm93IGRhKFxcXCJpc2VjZm5cXFwiLFxcbmEpO2lmKGI9PT1WZnx8Yj09PVdmfHxiPT09WGYpdGhyb3cgZGEoXFxcImlzZWNmZlxcXCIsYSk7fX1mdW5jdGlvbiBZZihiLGEpe3JldHVyblxcXCJ1bmRlZmluZWRcXFwiIT09dHlwZW9mIGI/YjphfWZ1bmN0aW9uIG1kKGIsYSl7cmV0dXJuXFxcInVuZGVmaW5lZFxcXCI9PT10eXBlb2YgYj9hOlxcXCJ1bmRlZmluZWRcXFwiPT09dHlwZW9mIGE/YjpiK2F9ZnVuY3Rpb24gVChiLGEpe3ZhciBjLGQ7c3dpdGNoKGIudHlwZSl7Y2FzZSBxLlByb2dyYW06Yz0hMDttKGIuYm9keSxmdW5jdGlvbihiKXtUKGIuZXhwcmVzc2lvbixhKTtjPWMmJmIuZXhwcmVzc2lvbi5jb25zdGFudH0pO2IuY29uc3RhbnQ9YzticmVhaztjYXNlIHEuTGl0ZXJhbDpiLmNvbnN0YW50PSEwO2IudG9XYXRjaD1bXTticmVhaztjYXNlIHEuVW5hcnlFeHByZXNzaW9uOlQoYi5hcmd1bWVudCxhKTtiLmNvbnN0YW50PWIuYXJndW1lbnQuY29uc3RhbnQ7Yi50b1dhdGNoPWIuYXJndW1lbnQudG9XYXRjaDticmVhaztjYXNlIHEuQmluYXJ5RXhwcmVzc2lvbjpUKGIubGVmdCxcXG5hKTtUKGIucmlnaHQsYSk7Yi5jb25zdGFudD1iLmxlZnQuY29uc3RhbnQmJmIucmlnaHQuY29uc3RhbnQ7Yi50b1dhdGNoPWIubGVmdC50b1dhdGNoLmNvbmNhdChiLnJpZ2h0LnRvV2F0Y2gpO2JyZWFrO2Nhc2UgcS5Mb2dpY2FsRXhwcmVzc2lvbjpUKGIubGVmdCxhKTtUKGIucmlnaHQsYSk7Yi5jb25zdGFudD1iLmxlZnQuY29uc3RhbnQmJmIucmlnaHQuY29uc3RhbnQ7Yi50b1dhdGNoPWIuY29uc3RhbnQ/W106W2JdO2JyZWFrO2Nhc2UgcS5Db25kaXRpb25hbEV4cHJlc3Npb246VChiLnRlc3QsYSk7VChiLmFsdGVybmF0ZSxhKTtUKGIuY29uc2VxdWVudCxhKTtiLmNvbnN0YW50PWIudGVzdC5jb25zdGFudCYmYi5hbHRlcm5hdGUuY29uc3RhbnQmJmIuY29uc2VxdWVudC5jb25zdGFudDtiLnRvV2F0Y2g9Yi5jb25zdGFudD9bXTpbYl07YnJlYWs7Y2FzZSBxLklkZW50aWZpZXI6Yi5jb25zdGFudD0hMTtiLnRvV2F0Y2g9W2JdO2JyZWFrO2Nhc2UgcS5NZW1iZXJFeHByZXNzaW9uOlQoYi5vYmplY3QsXFxuYSk7Yi5jb21wdXRlZCYmVChiLnByb3BlcnR5LGEpO2IuY29uc3RhbnQ9Yi5vYmplY3QuY29uc3RhbnQmJighYi5jb21wdXRlZHx8Yi5wcm9wZXJ0eS5jb25zdGFudCk7Yi50b1dhdGNoPVtiXTticmVhaztjYXNlIHEuQ2FsbEV4cHJlc3Npb246Yz1iLmZpbHRlcj8hYShiLmNhbGxlZS5uYW1lKS4kc3RhdGVmdWw6ITE7ZD1bXTttKGIuYXJndW1lbnRzLGZ1bmN0aW9uKGIpe1QoYixhKTtjPWMmJmIuY29uc3RhbnQ7Yi5jb25zdGFudHx8ZC5wdXNoLmFwcGx5KGQsYi50b1dhdGNoKX0pO2IuY29uc3RhbnQ9YztiLnRvV2F0Y2g9Yi5maWx0ZXImJiFhKGIuY2FsbGVlLm5hbWUpLiRzdGF0ZWZ1bD9kOltiXTticmVhaztjYXNlIHEuQXNzaWdubWVudEV4cHJlc3Npb246VChiLmxlZnQsYSk7VChiLnJpZ2h0LGEpO2IuY29uc3RhbnQ9Yi5sZWZ0LmNvbnN0YW50JiZiLnJpZ2h0LmNvbnN0YW50O2IudG9XYXRjaD1bYl07YnJlYWs7Y2FzZSBxLkFycmF5RXhwcmVzc2lvbjpjPSEwO2Q9W107bShiLmVsZW1lbnRzLFxcbmZ1bmN0aW9uKGIpe1QoYixhKTtjPWMmJmIuY29uc3RhbnQ7Yi5jb25zdGFudHx8ZC5wdXNoLmFwcGx5KGQsYi50b1dhdGNoKX0pO2IuY29uc3RhbnQ9YztiLnRvV2F0Y2g9ZDticmVhaztjYXNlIHEuT2JqZWN0RXhwcmVzc2lvbjpjPSEwO2Q9W107bShiLnByb3BlcnRpZXMsZnVuY3Rpb24oYil7VChiLnZhbHVlLGEpO2M9YyYmYi52YWx1ZS5jb25zdGFudDtiLnZhbHVlLmNvbnN0YW50fHxkLnB1c2guYXBwbHkoZCxiLnZhbHVlLnRvV2F0Y2gpfSk7Yi5jb25zdGFudD1jO2IudG9XYXRjaD1kO2JyZWFrO2Nhc2UgcS5UaGlzRXhwcmVzc2lvbjpiLmNvbnN0YW50PSExLGIudG9XYXRjaD1bXX19ZnVuY3Rpb24gbmQoYil7aWYoMT09Yi5sZW5ndGgpe2I9YlswXS5leHByZXNzaW9uO3ZhciBhPWIudG9XYXRjaDtyZXR1cm4gMSE9PWEubGVuZ3RoP2E6YVswXSE9PWI/YTp0fX1mdW5jdGlvbiBvZChiKXtyZXR1cm4gYi50eXBlPT09cS5JZGVudGlmaWVyfHxiLnR5cGU9PT1xLk1lbWJlckV4cHJlc3Npb259XFxuZnVuY3Rpb24gcGQoYil7aWYoMT09PWIuYm9keS5sZW5ndGgmJm9kKGIuYm9keVswXS5leHByZXNzaW9uKSlyZXR1cm57dHlwZTpxLkFzc2lnbm1lbnRFeHByZXNzaW9uLGxlZnQ6Yi5ib2R5WzBdLmV4cHJlc3Npb24scmlnaHQ6e3R5cGU6cS5OR1ZhbHVlUGFyYW1ldGVyfSxvcGVyYXRvcjpcXFwiPVxcXCJ9fWZ1bmN0aW9uIHFkKGIpe3JldHVybiAwPT09Yi5ib2R5Lmxlbmd0aHx8MT09PWIuYm9keS5sZW5ndGgmJihiLmJvZHlbMF0uZXhwcmVzc2lvbi50eXBlPT09cS5MaXRlcmFsfHxiLmJvZHlbMF0uZXhwcmVzc2lvbi50eXBlPT09cS5BcnJheUV4cHJlc3Npb258fGIuYm9keVswXS5leHByZXNzaW9uLnR5cGU9PT1xLk9iamVjdEV4cHJlc3Npb24pfWZ1bmN0aW9uIHJkKGIsYSl7dGhpcy5hc3RCdWlsZGVyPWI7dGhpcy4kZmlsdGVyPWF9ZnVuY3Rpb24gc2QoYixhKXt0aGlzLmFzdEJ1aWxkZXI9Yjt0aGlzLiRmaWx0ZXI9YX1mdW5jdGlvbiBFYihiLGEsYyxkKXtvYShiLGQpO2E9YS5zcGxpdChcXFwiLlxcXCIpO1xcbmZvcih2YXIgZSxmPTA7MTxhLmxlbmd0aDtmKyspe2U9Q2EoYS5zaGlmdCgpLGQpO3ZhciBnPW9hKGJbZV0sZCk7Z3x8KGc9e30sYltlXT1nKTtiPWd9ZT1DYShhLnNoaWZ0KCksZCk7b2EoYltlXSxkKTtyZXR1cm4gYltlXT1jfWZ1bmN0aW9uIEZiKGIpe3JldHVyblxcXCJjb25zdHJ1Y3RvclxcXCI9PWJ9ZnVuY3Rpb24gZmMoYil7cmV0dXJuIHooYi52YWx1ZU9mKT9iLnZhbHVlT2YoKTpaZi5jYWxsKGIpfWZ1bmN0aW9uIGhmKCl7dmFyIGI9Z2EoKSxhPWdhKCk7dGhpcy4kZ2V0PVtcXFwiJGZpbHRlclxcXCIsXFxcIiRzbmlmZmVyXFxcIixmdW5jdGlvbihjLGQpe2Z1bmN0aW9uIGUoYSxiKXtyZXR1cm4gbnVsbD09YXx8bnVsbD09Yj9hPT09YjpcXFwib2JqZWN0XFxcIj09PXR5cGVvZiBhJiYoYT1mYyhhKSxcXFwib2JqZWN0XFxcIj09PXR5cGVvZiBhKT8hMTphPT09Ynx8YSE9PWEmJmIhPT1ifWZ1bmN0aW9uIGYoYSxiLGMsZCxmKXt2YXIgZz1kLmlucHV0cyxoO2lmKDE9PT1nLmxlbmd0aCl7dmFyIGs9ZSxnPWdbMF07cmV0dXJuIGEuJHdhdGNoKGZ1bmN0aW9uKGEpe3ZhciBiPVxcbmcoYSk7ZShiLGspfHwoaD1kKGEsdCx0LFtiXSksaz1iJiZmYyhiKSk7cmV0dXJuIGh9LGIsYyxmKX1mb3IodmFyIGw9W10sbj1bXSxyPTAsbT1nLmxlbmd0aDtyPG07cisrKWxbcl09ZSxuW3JdPW51bGw7cmV0dXJuIGEuJHdhdGNoKGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0hMSxjPTAsZj1nLmxlbmd0aDtjPGY7YysrKXt2YXIgaz1nW2NdKGEpO2lmKGJ8fChiPSFlKGssbFtjXSkpKW5bY109ayxsW2NdPWsmJmZjKGspfWImJihoPWQoYSx0LHQsbikpO3JldHVybiBofSxiLGMsZil9ZnVuY3Rpb24gZyhhLGIsYyxkKXt2YXIgZSxmO3JldHVybiBlPWEuJHdhdGNoKGZ1bmN0aW9uKGEpe3JldHVybiBkKGEpfSxmdW5jdGlvbihhLGMsZCl7Zj1hO3ooYikmJmIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3coYSkmJmQuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7dyhmKSYmZSgpfSl9LGMpfWZ1bmN0aW9uIGgoYSxiLGMsZCl7ZnVuY3Rpb24gZShhKXt2YXIgYj0hMDttKGEsZnVuY3Rpb24oYSl7dyhhKXx8XFxuKGI9ITEpfSk7cmV0dXJuIGJ9dmFyIGYsZztyZXR1cm4gZj1hLiR3YXRjaChmdW5jdGlvbihhKXtyZXR1cm4gZChhKX0sZnVuY3Rpb24oYSxjLGQpe2c9YTt6KGIpJiZiLmNhbGwodGhpcyxhLGMsZCk7ZShhKSYmZC4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtlKGcpJiZmKCl9KX0sYyl9ZnVuY3Rpb24gbChhLGIsYyxkKXt2YXIgZTtyZXR1cm4gZT1hLiR3YXRjaChmdW5jdGlvbihhKXtyZXR1cm4gZChhKX0sZnVuY3Rpb24oYSxjLGQpe3ooYikmJmIuYXBwbHkodGhpcyxhcmd1bWVudHMpO2UoKX0sYyl9ZnVuY3Rpb24gayhhLGIpe2lmKCFiKXJldHVybiBhO3ZhciBjPWEuJCR3YXRjaERlbGVnYXRlLGM9YyE9PWgmJmMhPT1nP2Z1bmN0aW9uKGMsZCxlLGYpe2U9YShjLGQsZSxmKTtyZXR1cm4gYihlLGMsZCl9OmZ1bmN0aW9uKGMsZCxlLGYpe2U9YShjLGQsZSxmKTtjPWIoZSxjLGQpO3JldHVybiB3KGUpP2M6ZX07YS4kJHdhdGNoRGVsZWdhdGUmJmEuJCR3YXRjaERlbGVnYXRlIT09XFxuZj9jLiQkd2F0Y2hEZWxlZ2F0ZT1hLiQkd2F0Y2hEZWxlZ2F0ZTpiLiRzdGF0ZWZ1bHx8KGMuJCR3YXRjaERlbGVnYXRlPWYsYy5pbnB1dHM9YS5pbnB1dHM/YS5pbnB1dHM6W2FdKTtyZXR1cm4gY312YXIgbj17Y3NwOmQuY3NwLGV4cGVuc2l2ZUNoZWNrczohMX0scj17Y3NwOmQuY3NwLGV4cGVuc2l2ZUNoZWNrczohMH07cmV0dXJuIGZ1bmN0aW9uKGQsZSxDKXt2YXIgbSx1LHA7c3dpdGNoKHR5cGVvZiBkKXtjYXNlIFxcXCJzdHJpbmdcXFwiOnA9ZD1kLnRyaW0oKTt2YXIgcT1DP2E6YjttPXFbcF07bXx8KFxcXCI6XFxcIj09PWQuY2hhckF0KDApJiZcXFwiOlxcXCI9PT1kLmNoYXJBdCgxKSYmKHU9ITAsZD1kLnN1YnN0cmluZygyKSksQz1DP3I6bixtPW5ldyBnYyhDKSxtPShuZXcgaGMobSxjLEMpKS5wYXJzZShkKSxtLmNvbnN0YW50P20uJCR3YXRjaERlbGVnYXRlPWw6dT9tLiQkd2F0Y2hEZWxlZ2F0ZT1tLmxpdGVyYWw/aDpnOm0uaW5wdXRzJiYobS4kJHdhdGNoRGVsZWdhdGU9ZikscVtwXT1tKTtyZXR1cm4gayhtLFxcbmUpO2Nhc2UgXFxcImZ1bmN0aW9uXFxcIjpyZXR1cm4gayhkLGUpO2RlZmF1bHQ6cmV0dXJuIHZ9fX1dfWZ1bmN0aW9uIGtmKCl7dGhpcy4kZ2V0PVtcXFwiJHJvb3RTY29wZVxcXCIsXFxcIiRleGNlcHRpb25IYW5kbGVyXFxcIixmdW5jdGlvbihiLGEpe3JldHVybiB0ZChmdW5jdGlvbihhKXtiLiRldmFsQXN5bmMoYSl9LGEpfV19ZnVuY3Rpb24gbGYoKXt0aGlzLiRnZXQ9W1xcXCIkYnJvd3NlclxcXCIsXFxcIiRleGNlcHRpb25IYW5kbGVyXFxcIixmdW5jdGlvbihiLGEpe3JldHVybiB0ZChmdW5jdGlvbihhKXtiLmRlZmVyKGEpfSxhKX1dfWZ1bmN0aW9uIHRkKGIsYSl7ZnVuY3Rpb24gYyhhLGIsYyl7ZnVuY3Rpb24gZChiKXtyZXR1cm4gZnVuY3Rpb24oYyl7ZXx8KGU9ITAsYi5jYWxsKGEsYykpfX12YXIgZT0hMTtyZXR1cm5bZChiKSxkKGMpXX1mdW5jdGlvbiBkKCl7dGhpcy4kJHN0YXRlPXtzdGF0dXM6MH19ZnVuY3Rpb24gZShhLGIpe3JldHVybiBmdW5jdGlvbihjKXtiLmNhbGwoYSxjKX19ZnVuY3Rpb24gZihjKXshYy5wcm9jZXNzU2NoZWR1bGVkJiZcXG5jLnBlbmRpbmcmJihjLnByb2Nlc3NTY2hlZHVsZWQ9ITAsYihmdW5jdGlvbigpe3ZhciBiLGQsZTtlPWMucGVuZGluZztjLnByb2Nlc3NTY2hlZHVsZWQ9ITE7Yy5wZW5kaW5nPXQ7Zm9yKHZhciBmPTAsZz1lLmxlbmd0aDtmPGc7KytmKXtkPWVbZl1bMF07Yj1lW2ZdW2Muc3RhdHVzXTt0cnl7eihiKT9kLnJlc29sdmUoYihjLnZhbHVlKSk6MT09PWMuc3RhdHVzP2QucmVzb2x2ZShjLnZhbHVlKTpkLnJlamVjdChjLnZhbHVlKX1jYXRjaChoKXtkLnJlamVjdChoKSxhKGgpfX19KSl9ZnVuY3Rpb24gZygpe3RoaXMucHJvbWlzZT1uZXcgZDt0aGlzLnJlc29sdmU9ZSh0aGlzLHRoaXMucmVzb2x2ZSk7dGhpcy5yZWplY3Q9ZSh0aGlzLHRoaXMucmVqZWN0KTt0aGlzLm5vdGlmeT1lKHRoaXMsdGhpcy5ub3RpZnkpfXZhciBoPUooXFxcIiRxXFxcIixUeXBlRXJyb3IpO2QucHJvdG90eXBlPXt0aGVuOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1uZXcgZzt0aGlzLiQkc3RhdGUucGVuZGluZz10aGlzLiQkc3RhdGUucGVuZGluZ3x8XFxuW107dGhpcy4kJHN0YXRlLnBlbmRpbmcucHVzaChbZCxhLGIsY10pOzA8dGhpcy4kJHN0YXRlLnN0YXR1cyYmZih0aGlzLiQkc3RhdGUpO3JldHVybiBkLnByb21pc2V9LFxcXCJjYXRjaFxcXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGEpfSxcXFwiZmluYWxseVxcXCI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKGIpe3JldHVybiBrKGIsITAsYSl9LGZ1bmN0aW9uKGIpe3JldHVybiBrKGIsITEsYSl9LGIpfX07Zy5wcm90b3R5cGU9e3Jlc29sdmU6ZnVuY3Rpb24oYSl7dGhpcy5wcm9taXNlLiQkc3RhdGUuc3RhdHVzfHwoYT09PXRoaXMucHJvbWlzZT90aGlzLiQkcmVqZWN0KGgoXFxcInFjeWNsZVxcXCIsYSkpOnRoaXMuJCRyZXNvbHZlKGEpKX0sJCRyZXNvbHZlOmZ1bmN0aW9uKGIpe3ZhciBkLGU7ZT1jKHRoaXMsdGhpcy4kJHJlc29sdmUsdGhpcy4kJHJlamVjdCk7dHJ5e2lmKEgoYil8fHooYikpZD1iJiZiLnRoZW47eihkKT8odGhpcy5wcm9taXNlLiQkc3RhdGUuc3RhdHVzPVxcbi0xLGQuY2FsbChiLGVbMF0sZVsxXSx0aGlzLm5vdGlmeSkpOih0aGlzLnByb21pc2UuJCRzdGF0ZS52YWx1ZT1iLHRoaXMucHJvbWlzZS4kJHN0YXRlLnN0YXR1cz0xLGYodGhpcy5wcm9taXNlLiQkc3RhdGUpKX1jYXRjaChnKXtlWzFdKGcpLGEoZyl9fSxyZWplY3Q6ZnVuY3Rpb24oYSl7dGhpcy5wcm9taXNlLiQkc3RhdGUuc3RhdHVzfHx0aGlzLiQkcmVqZWN0KGEpfSwkJHJlamVjdDpmdW5jdGlvbihhKXt0aGlzLnByb21pc2UuJCRzdGF0ZS52YWx1ZT1hO3RoaXMucHJvbWlzZS4kJHN0YXRlLnN0YXR1cz0yO2YodGhpcy5wcm9taXNlLiQkc3RhdGUpfSxub3RpZnk6ZnVuY3Rpb24oYyl7dmFyIGQ9dGhpcy5wcm9taXNlLiQkc3RhdGUucGVuZGluZzswPj10aGlzLnByb21pc2UuJCRzdGF0ZS5zdGF0dXMmJmQmJmQubGVuZ3RoJiZiKGZ1bmN0aW9uKCl7Zm9yKHZhciBiLGUsZj0wLGc9ZC5sZW5ndGg7ZjxnO2YrKyl7ZT1kW2ZdWzBdO2I9ZFtmXVszXTt0cnl7ZS5ub3RpZnkoeihiKT9cXG5iKGMpOmMpfWNhdGNoKGgpe2EoaCl9fX0pfX07dmFyIGw9ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZXcgZztiP2MucmVzb2x2ZShhKTpjLnJlamVjdChhKTtyZXR1cm4gYy5wcm9taXNlfSxrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1udWxsO3RyeXt6KGMpJiYoZD1jKCkpfWNhdGNoKGUpe3JldHVybiBsKGUsITEpfXJldHVybiBkJiZ6KGQudGhlbik/ZC50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGwoYSxiKX0sZnVuY3Rpb24oYSl7cmV0dXJuIGwoYSwhMSl9KTpsKGEsYil9LG49ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bmV3IGc7ZS5yZXNvbHZlKGEpO3JldHVybiBlLnByb21pc2UudGhlbihiLGMsZCl9LHI9ZnVuY3Rpb24geChhKXtpZigheihhKSl0aHJvdyBoKFxcXCJub3JzbHZyXFxcIixhKTtpZighKHRoaXMgaW5zdGFuY2VvZiB4KSlyZXR1cm4gbmV3IHgoYSk7dmFyIGI9bmV3IGc7YShmdW5jdGlvbihhKXtiLnJlc29sdmUoYSl9LGZ1bmN0aW9uKGEpe2IucmVqZWN0KGEpfSk7cmV0dXJuIGIucHJvbWlzZX07XFxuci5kZWZlcj1mdW5jdGlvbigpe3JldHVybiBuZXcgZ307ci5yZWplY3Q9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IGc7Yi5yZWplY3QoYSk7cmV0dXJuIGIucHJvbWlzZX07ci53aGVuPW47ci5yZXNvbHZlPW47ci5hbGw9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IGcsYz0wLGQ9RyhhKT9bXTp7fTttKGEsZnVuY3Rpb24oYSxlKXtjKys7bihhKS50aGVuKGZ1bmN0aW9uKGEpe2QuaGFzT3duUHJvcGVydHkoZSl8fChkW2VdPWEsLS1jfHxiLnJlc29sdmUoZCkpfSxmdW5jdGlvbihhKXtkLmhhc093blByb3BlcnR5KGUpfHxiLnJlamVjdChhKX0pfSk7MD09PWMmJmIucmVzb2x2ZShkKTtyZXR1cm4gYi5wcm9taXNlfTtyZXR1cm4gcn1mdW5jdGlvbiB1Zigpe3RoaXMuJGdldD1bXFxcIiR3aW5kb3dcXFwiLFxcXCIkdGltZW91dFxcXCIsZnVuY3Rpb24oYixhKXtmdW5jdGlvbiBjKCl7Zm9yKHZhciBhPTA7YTxuLmxlbmd0aDthKyspe3ZhciBiPW5bYV07YiYmKG5bYV09bnVsbCxiKCkpfWs9bi5sZW5ndGg9MH1mdW5jdGlvbiBkKGEpe3ZhciBiPVxcbm4ubGVuZ3RoO2srKztuLnB1c2goYSk7MD09PWImJihsPWgoYykpO3JldHVybiBmdW5jdGlvbigpezA8PWImJihiPW5bYl09bnVsbCwwPT09LS1rJiZsJiYobCgpLGw9bnVsbCxuLmxlbmd0aD0wKSl9fXZhciBlPWIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxiLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSxmPWIuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fGIud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fGIud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lLGc9ISFlLGg9Zz9mdW5jdGlvbihhKXt2YXIgYj1lKGEpO3JldHVybiBmdW5jdGlvbigpe2YoYil9fTpmdW5jdGlvbihiKXt2YXIgYz1hKGIsMTYuNjYsITEpO3JldHVybiBmdW5jdGlvbigpe2EuY2FuY2VsKGMpfX07ZC5zdXBwb3J0ZWQ9Zzt2YXIgbCxrPTAsbj1bXTtyZXR1cm4gZH1dfWZ1bmN0aW9uIGpmKCl7ZnVuY3Rpb24gYihhKXtmdW5jdGlvbiBiKCl7dGhpcy4kJHdhdGNoZXJzPXRoaXMuJCRuZXh0U2libGluZz1cXG50aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9bnVsbDt0aGlzLiQkbGlzdGVuZXJzPXt9O3RoaXMuJCRsaXN0ZW5lckNvdW50PXt9O3RoaXMuJCR3YXRjaGVyc0NvdW50PTA7dGhpcy4kaWQ9KytuYjt0aGlzLiQkQ2hpbGRTY29wZT1udWxsfWIucHJvdG90eXBlPWE7cmV0dXJuIGJ9dmFyIGE9MTAsYz1KKFxcXCIkcm9vdFNjb3BlXFxcIiksZD1udWxsLGU9bnVsbDt0aGlzLmRpZ2VzdFR0bD1mdW5jdGlvbihiKXthcmd1bWVudHMubGVuZ3RoJiYoYT1iKTtyZXR1cm4gYX07dGhpcy4kZ2V0PVtcXFwiJGluamVjdG9yXFxcIixcXFwiJGV4Y2VwdGlvbkhhbmRsZXJcXFwiLFxcXCIkcGFyc2VcXFwiLFxcXCIkYnJvd3NlclxcXCIsZnVuY3Rpb24oZixnLGgsbCl7ZnVuY3Rpb24gayhhKXthLmN1cnJlbnRTY29wZS4kJGRlc3Ryb3llZD0hMH1mdW5jdGlvbiBuKCl7dGhpcy4kaWQ9KytuYjt0aGlzLiQkcGhhc2U9dGhpcy4kcGFyZW50PXRoaXMuJCR3YXRjaGVycz10aGlzLiQkbmV4dFNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZEhlYWQ9XFxudGhpcy4kJGNoaWxkVGFpbD1udWxsO3RoaXMuJHJvb3Q9dGhpczt0aGlzLiQkZGVzdHJveWVkPSExO3RoaXMuJCRsaXN0ZW5lcnM9e307dGhpcy4kJGxpc3RlbmVyQ291bnQ9e307dGhpcy4kJHdhdGNoZXJzQ291bnQ9MDt0aGlzLiQkaXNvbGF0ZUJpbmRpbmdzPW51bGx9ZnVuY3Rpb24gcihhKXtpZihwLiQkcGhhc2UpdGhyb3cgYyhcXFwiaW5wcm9nXFxcIixwLiQkcGhhc2UpO3AuJCRwaGFzZT1hfWZ1bmN0aW9uIHMoYSxiKXtkbyBhLiQkd2F0Y2hlcnNDb3VudCs9Yjt3aGlsZShhPWEuJHBhcmVudCl9ZnVuY3Rpb24geChhLGIsYyl7ZG8gYS4kJGxpc3RlbmVyQ291bnRbY10tPWIsMD09PWEuJCRsaXN0ZW5lckNvdW50W2NdJiZkZWxldGUgYS4kJGxpc3RlbmVyQ291bnRbY107d2hpbGUoYT1hLiRwYXJlbnQpfWZ1bmN0aW9uIHEoKXt9ZnVuY3Rpb24gRigpe2Zvcig7SS5sZW5ndGg7KXRyeXtJLnNoaWZ0KCkoKX1jYXRjaChhKXtnKGEpfWU9bnVsbH1mdW5jdGlvbiB1KCl7bnVsbD09PWUmJihlPVxcbmwuZGVmZXIoZnVuY3Rpb24oKXtwLiRhcHBseShGKX0pKX1uLnByb3RvdHlwZT17Y29uc3RydWN0b3I6biwkbmV3OmZ1bmN0aW9uKGEsYyl7dmFyIGQ7Yz1jfHx0aGlzO2E/KGQ9bmV3IG4sZC4kcm9vdD10aGlzLiRyb290KToodGhpcy4kJENoaWxkU2NvcGV8fCh0aGlzLiQkQ2hpbGRTY29wZT1iKHRoaXMpKSxkPW5ldyB0aGlzLiQkQ2hpbGRTY29wZSk7ZC4kcGFyZW50PWM7ZC4kJHByZXZTaWJsaW5nPWMuJCRjaGlsZFRhaWw7Yy4kJGNoaWxkSGVhZD8oYy4kJGNoaWxkVGFpbC4kJG5leHRTaWJsaW5nPWQsYy4kJGNoaWxkVGFpbD1kKTpjLiQkY2hpbGRIZWFkPWMuJCRjaGlsZFRhaWw9ZDsoYXx8YyE9dGhpcykmJmQuJG9uKFxcXCIkZGVzdHJveVxcXCIsayk7cmV0dXJuIGR9LCR3YXRjaDpmdW5jdGlvbihhLGIsYyxlKXt2YXIgZj1oKGEpO2lmKGYuJCR3YXRjaERlbGVnYXRlKXJldHVybiBmLiQkd2F0Y2hEZWxlZ2F0ZSh0aGlzLGIsYyxmLGEpO3ZhciBnPXRoaXMsaz1nLiQkd2F0Y2hlcnMsbD1cXG57Zm46YixsYXN0OnEsZ2V0OmYsZXhwOmV8fGEsZXE6ISFjfTtkPW51bGw7eihiKXx8KGwuZm49dik7a3x8KGs9Zy4kJHdhdGNoZXJzPVtdKTtrLnVuc2hpZnQobCk7cyh0aGlzLDEpO3JldHVybiBmdW5jdGlvbigpezA8PWJiKGssbCkmJnMoZywtMSk7ZD1udWxsfX0sJHdhdGNoR3JvdXA6ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7aD0hMTtrPyhrPSExLGIoZSxlLGcpKTpiKGUsZCxnKX12YXIgZD1BcnJheShhLmxlbmd0aCksZT1BcnJheShhLmxlbmd0aCksZj1bXSxnPXRoaXMsaD0hMSxrPSEwO2lmKCFhLmxlbmd0aCl7dmFyIGw9ITA7Zy4kZXZhbEFzeW5jKGZ1bmN0aW9uKCl7bCYmYihlLGUsZyl9KTtyZXR1cm4gZnVuY3Rpb24oKXtsPSExfX1pZigxPT09YS5sZW5ndGgpcmV0dXJuIHRoaXMuJHdhdGNoKGFbMF0sZnVuY3Rpb24oYSxjLGYpe2VbMF09YTtkWzBdPWM7YihlLGE9PT1jP2U6ZCxmKX0pO20oYSxmdW5jdGlvbihhLGIpe3ZhciBrPWcuJHdhdGNoKGEsZnVuY3Rpb24oYSxcXG5mKXtlW2JdPWE7ZFtiXT1mO2h8fChoPSEwLGcuJGV2YWxBc3luYyhjKSl9KTtmLnB1c2goayl9KTtyZXR1cm4gZnVuY3Rpb24oKXtmb3IoO2YubGVuZ3RoOylmLnNoaWZ0KCkoKX19LCR3YXRjaENvbGxlY3Rpb246ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe2U9YTt2YXIgYixkLGcsaDtpZighQShlKSl7aWYoSChlKSlpZihFYShlKSlmb3IoZiE9PXImJihmPXIsbT1mLmxlbmd0aD0wLGwrKyksYT1lLmxlbmd0aCxtIT09YSYmKGwrKyxmLmxlbmd0aD1tPWEpLGI9MDtiPGE7YisrKWg9ZltiXSxnPWVbYl0sZD1oIT09aCYmZyE9PWcsZHx8aD09PWd8fChsKyssZltiXT1nKTtlbHNle2YhPT1zJiYoZj1zPXt9LG09MCxsKyspO2E9MDtmb3IoYiBpbiBlKWUuaGFzT3duUHJvcGVydHkoYikmJihhKyssZz1lW2JdLGg9ZltiXSxiIGluIGY/KGQ9aCE9PWgmJmchPT1nLGR8fGg9PT1nfHwobCsrLGZbYl09ZykpOihtKyssZltiXT1nLGwrKykpO2lmKG0+YSlmb3IoYiBpbiBsKyssZillLmhhc093blByb3BlcnR5KGIpfHxcXG4obS0tLGRlbGV0ZSBmW2JdKX1lbHNlIGYhPT1lJiYoZj1lLGwrKyk7cmV0dXJuIGx9fWMuJHN0YXRlZnVsPSEwO3ZhciBkPXRoaXMsZSxmLGcsaz0xPGIubGVuZ3RoLGw9MCxuPWgoYSxjKSxyPVtdLHM9e30scD0hMCxtPTA7cmV0dXJuIHRoaXMuJHdhdGNoKG4sZnVuY3Rpb24oKXtwPyhwPSExLGIoZSxlLGQpKTpiKGUsZyxkKTtpZihrKWlmKEgoZSkpaWYoRWEoZSkpe2c9QXJyYXkoZS5sZW5ndGgpO2Zvcih2YXIgYT0wO2E8ZS5sZW5ndGg7YSsrKWdbYV09ZVthXX1lbHNlIGZvcihhIGluIGc9e30sZSlYYS5jYWxsKGUsYSkmJihnW2FdPWVbYV0pO2Vsc2UgZz1lfSl9LCRkaWdlc3Q6ZnVuY3Rpb24oKXt2YXIgYixmLGgsayxuLHMsbT1hLHgsdT1bXSxFLEk7cihcXFwiJGRpZ2VzdFxcXCIpO2wuJCRjaGVja1VybENoYW5nZSgpO3RoaXM9PT1wJiZudWxsIT09ZSYmKGwuZGVmZXIuY2FuY2VsKGUpLEYoKSk7ZD1udWxsO2Rve3M9ITE7Zm9yKHg9dGhpczt0Lmxlbmd0aDspe3RyeXtJPXQuc2hpZnQoKSxcXG5JLnNjb3BlLiRldmFsKEkuZXhwcmVzc2lvbixJLmxvY2Fscyl9Y2F0Y2godil7Zyh2KX1kPW51bGx9YTpkb3tpZihrPXguJCR3YXRjaGVycylmb3Iobj1rLmxlbmd0aDtuLS07KXRyeXtpZihiPWtbbl0paWYoKGY9Yi5nZXQoeCkpIT09KGg9Yi5sYXN0KSYmIShiLmVxP2thKGYsaCk6XFxcIm51bWJlclxcXCI9PT10eXBlb2YgZiYmXFxcIm51bWJlclxcXCI9PT10eXBlb2YgaCYmaXNOYU4oZikmJmlzTmFOKGgpKSlzPSEwLGQ9YixiLmxhc3Q9Yi5lcT9mYShmLG51bGwpOmYsYi5mbihmLGg9PT1xP2Y6aCx4KSw1Pm0mJihFPTQtbSx1W0VdfHwodVtFXT1bXSksdVtFXS5wdXNoKHttc2c6eihiLmV4cCk/XFxcImZuOiBcXFwiKyhiLmV4cC5uYW1lfHxiLmV4cC50b1N0cmluZygpKTpiLmV4cCxuZXdWYWw6ZixvbGRWYWw6aH0pKTtlbHNlIGlmKGI9PT1kKXtzPSExO2JyZWFrIGF9fWNhdGNoKEEpe2coQSl9aWYoIShrPXguJCR3YXRjaGVyc0NvdW50JiZ4LiQkY2hpbGRIZWFkfHx4IT09dGhpcyYmeC4kJG5leHRTaWJsaW5nKSlmb3IoO3ghPT1cXG50aGlzJiYhKGs9eC4kJG5leHRTaWJsaW5nKTspeD14LiRwYXJlbnR9d2hpbGUoeD1rKTtpZigoc3x8dC5sZW5ndGgpJiYhbS0tKXRocm93IHAuJCRwaGFzZT1udWxsLGMoXFxcImluZmRpZ1xcXCIsYSx1KTt9d2hpbGUoc3x8dC5sZW5ndGgpO2ZvcihwLiQkcGhhc2U9bnVsbDt3Lmxlbmd0aDspdHJ5e3cuc2hpZnQoKSgpfWNhdGNoKHkpe2coeSl9fSwkZGVzdHJveTpmdW5jdGlvbigpe2lmKCF0aGlzLiQkZGVzdHJveWVkKXt2YXIgYT10aGlzLiRwYXJlbnQ7dGhpcy4kYnJvYWRjYXN0KFxcXCIkZGVzdHJveVxcXCIpO3RoaXMuJCRkZXN0cm95ZWQ9ITA7dGhpcz09PXAmJmwuJCRhcHBsaWNhdGlvbkRlc3Ryb3llZCgpO3ModGhpcywtdGhpcy4kJHdhdGNoZXJzQ291bnQpO2Zvcih2YXIgYiBpbiB0aGlzLiQkbGlzdGVuZXJDb3VudCl4KHRoaXMsdGhpcy4kJGxpc3RlbmVyQ291bnRbYl0sYik7YSYmYS4kJGNoaWxkSGVhZD09dGhpcyYmKGEuJCRjaGlsZEhlYWQ9dGhpcy4kJG5leHRTaWJsaW5nKTthJiZhLiQkY2hpbGRUYWlsPT1cXG50aGlzJiYoYS4kJGNoaWxkVGFpbD10aGlzLiQkcHJldlNpYmxpbmcpO3RoaXMuJCRwcmV2U2libGluZyYmKHRoaXMuJCRwcmV2U2libGluZy4kJG5leHRTaWJsaW5nPXRoaXMuJCRuZXh0U2libGluZyk7dGhpcy4kJG5leHRTaWJsaW5nJiYodGhpcy4kJG5leHRTaWJsaW5nLiQkcHJldlNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nKTt0aGlzLiRkZXN0cm95PXRoaXMuJGRpZ2VzdD10aGlzLiRhcHBseT10aGlzLiRldmFsQXN5bmM9dGhpcy4kYXBwbHlBc3luYz12O3RoaXMuJG9uPXRoaXMuJHdhdGNoPXRoaXMuJHdhdGNoR3JvdXA9ZnVuY3Rpb24oKXtyZXR1cm4gdn07dGhpcy4kJGxpc3RlbmVycz17fTt0aGlzLiRwYXJlbnQ9dGhpcy4kJG5leHRTaWJsaW5nPXRoaXMuJCRwcmV2U2libGluZz10aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9dGhpcy4kcm9vdD10aGlzLiQkd2F0Y2hlcnM9bnVsbH19LCRldmFsOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGgoYSkodGhpcyxiKX0sXFxuJGV2YWxBc3luYzpmdW5jdGlvbihhLGIpe3AuJCRwaGFzZXx8dC5sZW5ndGh8fGwuZGVmZXIoZnVuY3Rpb24oKXt0Lmxlbmd0aCYmcC4kZGlnZXN0KCl9KTt0LnB1c2goe3Njb3BlOnRoaXMsZXhwcmVzc2lvbjphLGxvY2FsczpifSl9LCQkcG9zdERpZ2VzdDpmdW5jdGlvbihhKXt3LnB1c2goYSl9LCRhcHBseTpmdW5jdGlvbihhKXt0cnl7cmV0dXJuIHIoXFxcIiRhcHBseVxcXCIpLHRoaXMuJGV2YWwoYSl9Y2F0Y2goYil7ZyhiKX1maW5hbGx5e3AuJCRwaGFzZT1udWxsO3RyeXtwLiRkaWdlc3QoKX1jYXRjaChjKXt0aHJvdyBnKGMpLGM7fX19LCRhcHBseUFzeW5jOmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXtjLiRldmFsKGEpfXZhciBjPXRoaXM7YSYmSS5wdXNoKGIpO3UoKX0sJG9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy4kJGxpc3RlbmVyc1thXTtjfHwodGhpcy4kJGxpc3RlbmVyc1thXT1jPVtdKTtjLnB1c2goYik7dmFyIGQ9dGhpcztkbyBkLiQkbGlzdGVuZXJDb3VudFthXXx8XFxuKGQuJCRsaXN0ZW5lckNvdW50W2FdPTApLGQuJCRsaXN0ZW5lckNvdW50W2FdKys7d2hpbGUoZD1kLiRwYXJlbnQpO3ZhciBlPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGQ9Yy5pbmRleE9mKGIpOy0xIT09ZCYmKGNbZF09bnVsbCx4KGUsMSxhKSl9fSwkZW1pdDpmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQsZT10aGlzLGY9ITEsaD17bmFtZTphLHRhcmdldFNjb3BlOmUsc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7Zj0hMH0scHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXtoLmRlZmF1bHRQcmV2ZW50ZWQ9ITB9LGRlZmF1bHRQcmV2ZW50ZWQ6ITF9LGs9Y2IoW2hdLGFyZ3VtZW50cywxKSxsLG47ZG97ZD1lLiQkbGlzdGVuZXJzW2FdfHxjO2guY3VycmVudFNjb3BlPWU7bD0wO2ZvcihuPWQubGVuZ3RoO2w8bjtsKyspaWYoZFtsXSl0cnl7ZFtsXS5hcHBseShudWxsLGspfWNhdGNoKHIpe2cocil9ZWxzZSBkLnNwbGljZShsLDEpLGwtLSxuLS07aWYoZilyZXR1cm4gaC5jdXJyZW50U2NvcGU9XFxubnVsbCxoO2U9ZS4kcGFyZW50fXdoaWxlKGUpO2guY3VycmVudFNjb3BlPW51bGw7cmV0dXJuIGh9LCRicm9hZGNhc3Q6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9dGhpcyxlPXtuYW1lOmEsdGFyZ2V0U2NvcGU6dGhpcyxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe2UuZGVmYXVsdFByZXZlbnRlZD0hMH0sZGVmYXVsdFByZXZlbnRlZDohMX07aWYoIXRoaXMuJCRsaXN0ZW5lckNvdW50W2FdKXJldHVybiBlO2Zvcih2YXIgZj1jYihbZV0sYXJndW1lbnRzLDEpLGgsaztjPWQ7KXtlLmN1cnJlbnRTY29wZT1jO2Q9Yy4kJGxpc3RlbmVyc1thXXx8W107aD0wO2ZvcihrPWQubGVuZ3RoO2g8aztoKyspaWYoZFtoXSl0cnl7ZFtoXS5hcHBseShudWxsLGYpfWNhdGNoKGwpe2cobCl9ZWxzZSBkLnNwbGljZShoLDEpLGgtLSxrLS07aWYoIShkPWMuJCRsaXN0ZW5lckNvdW50W2FdJiZjLiQkY2hpbGRIZWFkfHxjIT09dGhpcyYmYy4kJG5leHRTaWJsaW5nKSlmb3IoO2MhPT10aGlzJiYhKGQ9XFxuYy4kJG5leHRTaWJsaW5nKTspYz1jLiRwYXJlbnR9ZS5jdXJyZW50U2NvcGU9bnVsbDtyZXR1cm4gZX19O3ZhciBwPW5ldyBuLHQ9cC4kJGFzeW5jUXVldWU9W10sdz1wLiQkcG9zdERpZ2VzdFF1ZXVlPVtdLEk9cC4kJGFwcGx5QXN5bmNRdWV1ZT1bXTtyZXR1cm4gcH1dfWZ1bmN0aW9uIGhlKCl7dmFyIGI9L15cXFxccyooaHR0cHM/fGZ0cHxtYWlsdG98dGVsfGZpbGUpOi8sYT0vXlxcXFxzKigoaHR0cHM/fGZ0cHxmaWxlfGJsb2IpOnxkYXRhOmltYWdlXFxcXC8pLzt0aGlzLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGEpe3JldHVybiB3KGEpPyhiPWEsdGhpcyk6Yn07dGhpcy5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/KGE9Yix0aGlzKTphfTt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXt2YXIgZT1kP2E6YixmO2Y9QmEoYykuaHJlZjtyZXR1cm5cXFwiXFxcIj09PWZ8fGYubWF0Y2goZSk/YzpcXFwidW5zYWZlOlxcXCIrXFxuZn19fWZ1bmN0aW9uICRmKGIpe2lmKFxcXCJzZWxmXFxcIj09PWIpcmV0dXJuIGI7aWYoTChiKSl7aWYoLTE8Yi5pbmRleE9mKFxcXCIqKipcXFwiKSl0aHJvdyBEYShcXFwiaXdjYXJkXFxcIixiKTtiPXVkKGIpLnJlcGxhY2UoXFxcIlxcXFxcXFxcKlxcXFxcXFxcKlxcXCIsXFxcIi4qXFxcIikucmVwbGFjZShcXFwiXFxcXFxcXFwqXFxcIixcXFwiW146Ly4/JjtdKlxcXCIpO3JldHVybiBuZXcgUmVnRXhwKFxcXCJeXFxcIitiK1xcXCIkXFxcIil9aWYoWmEoYikpcmV0dXJuIG5ldyBSZWdFeHAoXFxcIl5cXFwiK2Iuc291cmNlK1xcXCIkXFxcIik7dGhyb3cgRGEoXFxcImltYXRjaGVyXFxcIik7fWZ1bmN0aW9uIHZkKGIpe3ZhciBhPVtdO3coYikmJm0oYixmdW5jdGlvbihiKXthLnB1c2goJGYoYikpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gbmYoKXt0aGlzLlNDRV9DT05URVhUUz1wYTt2YXIgYj1bXFxcInNlbGZcXFwiXSxhPVtdO3RoaXMucmVzb3VyY2VVcmxXaGl0ZWxpc3Q9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9dmQoYSkpO3JldHVybiBifTt0aGlzLnJlc291cmNlVXJsQmxhY2tsaXN0PWZ1bmN0aW9uKGIpe2FyZ3VtZW50cy5sZW5ndGgmJlxcbihhPXZkKGIpKTtyZXR1cm4gYX07dGhpcy4kZ2V0PVtcXFwiJGluamVjdG9yXFxcIixmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGEsYil7cmV0dXJuXFxcInNlbGZcXFwiPT09YT9nZChiKTohIWEuZXhlYyhiLmhyZWYpfWZ1bmN0aW9uIGUoYSl7dmFyIGI9ZnVuY3Rpb24oYSl7dGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBhfX07YSYmKGIucHJvdG90eXBlPW5ldyBhKTtiLnByb3RvdHlwZS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWUoKX07Yi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpLnRvU3RyaW5nKCl9O3JldHVybiBifXZhciBmPWZ1bmN0aW9uKGEpe3Rocm93IERhKFxcXCJ1bnNhZmVcXFwiKTt9O2MuaGFzKFxcXCIkc2FuaXRpemVcXFwiKSYmKGY9Yy5nZXQoXFxcIiRzYW5pdGl6ZVxcXCIpKTt2YXIgZz1lKCksaD17fTtoW3BhLkhUTUxdPWUoZyk7aFtwYS5DU1NdPWUoZyk7aFtwYS5VUkxdPVxcbmUoZyk7aFtwYS5KU109ZShnKTtoW3BhLlJFU09VUkNFX1VSTF09ZShoW3BhLlVSTF0pO3JldHVybnt0cnVzdEFzOmZ1bmN0aW9uKGEsYil7dmFyIGM9aC5oYXNPd25Qcm9wZXJ0eShhKT9oW2FdOm51bGw7aWYoIWMpdGhyb3cgRGEoXFxcImljb250ZXh0XFxcIixhLGIpO2lmKG51bGw9PT1ifHxiPT09dHx8XFxcIlxcXCI9PT1iKXJldHVybiBiO2lmKFxcXCJzdHJpbmdcXFwiIT09dHlwZW9mIGIpdGhyb3cgRGEoXFxcIml0eXBlXFxcIixhKTtyZXR1cm4gbmV3IGMoYil9LGdldFRydXN0ZWQ6ZnVuY3Rpb24oYyxlKXtpZihudWxsPT09ZXx8ZT09PXR8fFxcXCJcXFwiPT09ZSlyZXR1cm4gZTt2YXIgZz1oLmhhc093blByb3BlcnR5KGMpP2hbY106bnVsbDtpZihnJiZlIGluc3RhbmNlb2YgZylyZXR1cm4gZS4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpO2lmKGM9PT1wYS5SRVNPVVJDRV9VUkwpe3ZhciBnPUJhKGUudG9TdHJpbmcoKSkscixzLG09ITE7cj0wO2ZvcihzPWIubGVuZ3RoO3I8cztyKyspaWYoZChiW3JdLGcpKXttPSEwO2JyZWFrfWlmKG0pZm9yKHI9XFxuMCxzPWEubGVuZ3RoO3I8cztyKyspaWYoZChhW3JdLGcpKXttPSExO2JyZWFrfWlmKG0pcmV0dXJuIGU7dGhyb3cgRGEoXFxcImluc2VjdXJsXFxcIixlLnRvU3RyaW5nKCkpO31pZihjPT09cGEuSFRNTClyZXR1cm4gZihlKTt0aHJvdyBEYShcXFwidW5zYWZlXFxcIik7fSx2YWx1ZU9mOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgZz9hLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCk6YX19fV19ZnVuY3Rpb24gbWYoKXt2YXIgYj0hMDt0aGlzLmVuYWJsZWQ9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9ISFhKTtyZXR1cm4gYn07dGhpcy4kZ2V0PVtcXFwiJHBhcnNlXFxcIixcXFwiJHNjZURlbGVnYXRlXFxcIixmdW5jdGlvbihhLGMpe2lmKGImJjg+VWEpdGhyb3cgRGEoXFxcImllcXVpcmtzXFxcIik7dmFyIGQ9aWEocGEpO2QuaXNFbmFibGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9O2QudHJ1c3RBcz1jLnRydXN0QXM7ZC5nZXRUcnVzdGVkPWMuZ2V0VHJ1c3RlZDtkLnZhbHVlT2Y9Yy52YWx1ZU9mO2J8fChkLnRydXN0QXM9XFxuZC5nZXRUcnVzdGVkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGJ9LGQudmFsdWVPZj1ZYSk7ZC5wYXJzZUFzPWZ1bmN0aW9uKGIsYyl7dmFyIGU9YShjKTtyZXR1cm4gZS5saXRlcmFsJiZlLmNvbnN0YW50P2U6YShjLGZ1bmN0aW9uKGEpe3JldHVybiBkLmdldFRydXN0ZWQoYixhKX0pfTt2YXIgZT1kLnBhcnNlQXMsZj1kLmdldFRydXN0ZWQsZz1kLnRydXN0QXM7bShwYSxmdW5jdGlvbihhLGIpe3ZhciBjPU0oYik7ZFtoYihcXFwicGFyc2VfYXNfXFxcIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGUoYSxiKX07ZFtoYihcXFwiZ2V0X3RydXN0ZWRfXFxcIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGYoYSxiKX07ZFtoYihcXFwidHJ1c3RfYXNfXFxcIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGcoYSxiKX19KTtyZXR1cm4gZH1dfWZ1bmN0aW9uIG9mKCl7dGhpcy4kZ2V0PVtcXFwiJHdpbmRvd1xcXCIsXFxcIiRkb2N1bWVudFxcXCIsZnVuY3Rpb24oYixhKXt2YXIgYz17fSxkPVcoKC9hbmRyb2lkIChcXFxcZCspLy5leGVjKE0oKGIubmF2aWdhdG9yfHxcXG57fSkudXNlckFnZW50KSl8fFtdKVsxXSksZT0vQm94ZWUvaS50ZXN0KChiLm5hdmlnYXRvcnx8e30pLnVzZXJBZ2VudCksZj1hWzBdfHx7fSxnLGg9L14oTW96fHdlYmtpdHxtcykoPz1bQS1aXSkvLGw9Zi5ib2R5JiZmLmJvZHkuc3R5bGUsaz0hMSxuPSExO2lmKGwpe2Zvcih2YXIgciBpbiBsKWlmKGs9aC5leGVjKHIpKXtnPWtbMF07Zz1nLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkrZy5zdWJzdHIoMSk7YnJlYWt9Z3x8KGc9XFxcIldlYmtpdE9wYWNpdHlcXFwiaW4gbCYmXFxcIndlYmtpdFxcXCIpO2s9ISEoXFxcInRyYW5zaXRpb25cXFwiaW4gbHx8ZytcXFwiVHJhbnNpdGlvblxcXCJpbiBsKTtuPSEhKFxcXCJhbmltYXRpb25cXFwiaW4gbHx8ZytcXFwiQW5pbWF0aW9uXFxcImluIGwpOyFkfHxrJiZufHwoaz1MKGwud2Via2l0VHJhbnNpdGlvbiksbj1MKGwud2Via2l0QW5pbWF0aW9uKSl9cmV0dXJue2hpc3Rvcnk6ISghYi5oaXN0b3J5fHwhYi5oaXN0b3J5LnB1c2hTdGF0ZXx8ND5kfHxlKSxoYXNFdmVudDpmdW5jdGlvbihhKXtpZihcXFwiaW5wdXRcXFwiPT09XFxuYSYmMTE+PVVhKXJldHVybiExO2lmKEEoY1thXSkpe3ZhciBiPWYuY3JlYXRlRWxlbWVudChcXFwiZGl2XFxcIik7Y1thXT1cXFwib25cXFwiK2EgaW4gYn1yZXR1cm4gY1thXX0sY3NwOmZiKCksdmVuZG9yUHJlZml4OmcsdHJhbnNpdGlvbnM6ayxhbmltYXRpb25zOm4sYW5kcm9pZDpkfX1dfWZ1bmN0aW9uIHFmKCl7dGhpcy4kZ2V0PVtcXFwiJHRlbXBsYXRlQ2FjaGVcXFwiLFxcXCIkaHR0cFxcXCIsXFxcIiRxXFxcIixcXFwiJHNjZVxcXCIsZnVuY3Rpb24oYixhLGMsZCl7ZnVuY3Rpb24gZShmLGcpe2UudG90YWxQZW5kaW5nUmVxdWVzdHMrKztMKGYpJiZiLmdldChmKXx8KGY9ZC5nZXRUcnVzdGVkUmVzb3VyY2VVcmwoZikpO3ZhciBoPWEuZGVmYXVsdHMmJmEuZGVmYXVsdHMudHJhbnNmb3JtUmVzcG9uc2U7RyhoKT9oPWguZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhIT09JGJ9KTpoPT09JGImJihoPW51bGwpO3JldHVybiBhLmdldChmLHtjYWNoZTpiLHRyYW5zZm9ybVJlc3BvbnNlOmh9KVtcXFwiZmluYWxseVxcXCJdKGZ1bmN0aW9uKCl7ZS50b3RhbFBlbmRpbmdSZXF1ZXN0cy0tfSkudGhlbihmdW5jdGlvbihhKXtiLnB1dChmLFxcbmEuZGF0YSk7cmV0dXJuIGEuZGF0YX0sZnVuY3Rpb24oYSl7aWYoIWcpdGhyb3cgZWEoXFxcInRwbG9hZFxcXCIsZixhLnN0YXR1cyxhLnN0YXR1c1RleHQpO3JldHVybiBjLnJlamVjdChhKX0pfWUudG90YWxQZW5kaW5nUmVxdWVzdHM9MDtyZXR1cm4gZX1dfWZ1bmN0aW9uIHJmKCl7dGhpcy4kZ2V0PVtcXFwiJHJvb3RTY29wZVxcXCIsXFxcIiRicm93c2VyXFxcIixcXFwiJGxvY2F0aW9uXFxcIixmdW5jdGlvbihiLGEsYyl7cmV0dXJue2ZpbmRCaW5kaW5nczpmdW5jdGlvbihhLGIsYyl7YT1hLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXFxcIm5nLWJpbmRpbmdcXFwiKTt2YXIgZz1bXTttKGEsZnVuY3Rpb24oYSl7dmFyIGQ9Y2EuZWxlbWVudChhKS5kYXRhKFxcXCIkYmluZGluZ1xcXCIpO2QmJm0oZCxmdW5jdGlvbihkKXtjPyhuZXcgUmVnRXhwKFxcXCIoXnxcXFxcXFxcXHMpXFxcIit1ZChiKStcXFwiKFxcXFxcXFxcc3xcXFxcXFxcXHx8JClcXFwiKSkudGVzdChkKSYmZy5wdXNoKGEpOi0xIT1kLmluZGV4T2YoYikmJmcucHVzaChhKX0pfSk7cmV0dXJuIGd9LGZpbmRNb2RlbHM6ZnVuY3Rpb24oYSxcXG5iLGMpe2Zvcih2YXIgZz1bXFxcIm5nLVxcXCIsXFxcImRhdGEtbmctXFxcIixcXFwibmdcXFxcXFxcXDpcXFwiXSxoPTA7aDxnLmxlbmd0aDsrK2gpe3ZhciBsPWEucXVlcnlTZWxlY3RvckFsbChcXFwiW1xcXCIrZ1toXStcXFwibW9kZWxcXFwiKyhjP1xcXCI9XFxcIjpcXFwiKj1cXFwiKSsnXFxcIicrYisnXFxcIl0nKTtpZihsLmxlbmd0aClyZXR1cm4gbH19LGdldExvY2F0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGMudXJsKCl9LHNldExvY2F0aW9uOmZ1bmN0aW9uKGEpe2EhPT1jLnVybCgpJiYoYy51cmwoYSksYi4kZGlnZXN0KCkpfSx3aGVuU3RhYmxlOmZ1bmN0aW9uKGIpe2Eubm90aWZ5V2hlbk5vT3V0c3RhbmRpbmdSZXF1ZXN0cyhiKX19fV19ZnVuY3Rpb24gc2YoKXt0aGlzLiRnZXQ9W1xcXCIkcm9vdFNjb3BlXFxcIixcXFwiJGJyb3dzZXJcXFwiLFxcXCIkcVxcXCIsXFxcIiQkcVxcXCIsXFxcIiRleGNlcHRpb25IYW5kbGVyXFxcIixmdW5jdGlvbihiLGEsYyxkLGUpe2Z1bmN0aW9uIGYoZixsLGspe3ooZil8fChrPWwsbD1mLGY9dik7dmFyIG49emEuY2FsbChhcmd1bWVudHMsMykscj13KGspJiYhayxzPShyP2Q6YykuZGVmZXIoKSxcXG5tPXMucHJvbWlzZSxxO3E9YS5kZWZlcihmdW5jdGlvbigpe3RyeXtzLnJlc29sdmUoZi5hcHBseShudWxsLG4pKX1jYXRjaChhKXtzLnJlamVjdChhKSxlKGEpfWZpbmFsbHl7ZGVsZXRlIGdbbS4kJHRpbWVvdXRJZF19cnx8Yi4kYXBwbHkoKX0sbCk7bS4kJHRpbWVvdXRJZD1xO2dbcV09cztyZXR1cm4gbX12YXIgZz17fTtmLmNhbmNlbD1mdW5jdGlvbihiKXtyZXR1cm4gYiYmYi4kJHRpbWVvdXRJZCBpbiBnPyhnW2IuJCR0aW1lb3V0SWRdLnJlamVjdChcXFwiY2FuY2VsZWRcXFwiKSxkZWxldGUgZ1tiLiQkdGltZW91dElkXSxhLmRlZmVyLmNhbmNlbChiLiQkdGltZW91dElkKSk6ITF9O3JldHVybiBmfV19ZnVuY3Rpb24gQmEoYil7VWEmJihYLnNldEF0dHJpYnV0ZShcXFwiaHJlZlxcXCIsYiksYj1YLmhyZWYpO1guc2V0QXR0cmlidXRlKFxcXCJocmVmXFxcIixiKTtyZXR1cm57aHJlZjpYLmhyZWYscHJvdG9jb2w6WC5wcm90b2NvbD9YLnByb3RvY29sLnJlcGxhY2UoLzokLyxcXFwiXFxcIik6XFxcIlxcXCIsaG9zdDpYLmhvc3QsXFxuc2VhcmNoOlguc2VhcmNoP1guc2VhcmNoLnJlcGxhY2UoL15cXFxcPy8sXFxcIlxcXCIpOlxcXCJcXFwiLGhhc2g6WC5oYXNoP1guaGFzaC5yZXBsYWNlKC9eIy8sXFxcIlxcXCIpOlxcXCJcXFwiLGhvc3RuYW1lOlguaG9zdG5hbWUscG9ydDpYLnBvcnQscGF0aG5hbWU6XFxcIi9cXFwiPT09WC5wYXRobmFtZS5jaGFyQXQoMCk/WC5wYXRobmFtZTpcXFwiL1xcXCIrWC5wYXRobmFtZX19ZnVuY3Rpb24gZ2QoYil7Yj1MKGIpP0JhKGIpOmI7cmV0dXJuIGIucHJvdG9jb2w9PT13ZC5wcm90b2NvbCYmYi5ob3N0PT09d2QuaG9zdH1mdW5jdGlvbiB0Zigpe3RoaXMuJGdldD1yYShPKX1mdW5jdGlvbiB4ZChiKXtmdW5jdGlvbiBhKGEpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGEpfWNhdGNoKGIpe3JldHVybiBhfX12YXIgYz1iWzBdfHx7fSxkPXt9LGU9XFxcIlxcXCI7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGIsZyxoLGwsaztiPWMuY29va2llfHxcXFwiXFxcIjtpZihiIT09ZSlmb3IoZT1iLGI9ZS5zcGxpdChcXFwiOyBcXFwiKSxkPXt9LGg9MDtoPGIubGVuZ3RoO2grKylnPVxcbmJbaF0sbD1nLmluZGV4T2YoXFxcIj1cXFwiKSwwPGwmJihrPWEoZy5zdWJzdHJpbmcoMCxsKSksZFtrXT09PXQmJihkW2tdPWEoZy5zdWJzdHJpbmcobCsxKSkpKTtyZXR1cm4gZH19ZnVuY3Rpb24geWYoKXt0aGlzLiRnZXQ9eGR9ZnVuY3Rpb24gTGMoYil7ZnVuY3Rpb24gYShjLGQpe2lmKEgoYykpe3ZhciBlPXt9O20oYyxmdW5jdGlvbihiLGMpe2VbY109YShjLGIpfSk7cmV0dXJuIGV9cmV0dXJuIGIuZmFjdG9yeShjK1xcXCJGaWx0ZXJcXFwiLGQpfXRoaXMucmVnaXN0ZXI9YTt0aGlzLiRnZXQ9W1xcXCIkaW5qZWN0b3JcXFwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYS5nZXQoYitcXFwiRmlsdGVyXFxcIil9fV07YShcXFwiY3VycmVuY3lcXFwiLHlkKTthKFxcXCJkYXRlXFxcIix6ZCk7YShcXFwiZmlsdGVyXFxcIixhZyk7YShcXFwianNvblxcXCIsYmcpO2EoXFxcImxpbWl0VG9cXFwiLGNnKTthKFxcXCJsb3dlcmNhc2VcXFwiLGRnKTthKFxcXCJudW1iZXJcXFwiLEFkKTthKFxcXCJvcmRlckJ5XFxcIixCZCk7YShcXFwidXBwZXJjYXNlXFxcIixlZyl9ZnVuY3Rpb24gYWcoKXtyZXR1cm4gZnVuY3Rpb24oYixcXG5hLGMpe2lmKCFFYShiKSl7aWYobnVsbD09YilyZXR1cm4gYjt0aHJvdyBKKFxcXCJmaWx0ZXJcXFwiKShcXFwibm90YXJyYXlcXFwiLGIpO312YXIgZDtzd2l0Y2goaWMoYSkpe2Nhc2UgXFxcImZ1bmN0aW9uXFxcIjpicmVhaztjYXNlIFxcXCJib29sZWFuXFxcIjpjYXNlIFxcXCJudWxsXFxcIjpjYXNlIFxcXCJudW1iZXJcXFwiOmNhc2UgXFxcInN0cmluZ1xcXCI6ZD0hMDtjYXNlIFxcXCJvYmplY3RcXFwiOmE9ZmcoYSxjLGQpO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIGJ9cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChiLGEpfX1mdW5jdGlvbiBmZyhiLGEsYyl7dmFyIGQ9SChiKSYmXFxcIiRcXFwiaW4gYjshMD09PWE/YT1rYTp6KGEpfHwoYT1mdW5jdGlvbihhLGIpe2lmKEEoYSkpcmV0dXJuITE7aWYobnVsbD09PWF8fG51bGw9PT1iKXJldHVybiBhPT09YjtpZihIKGIpfHxIKGEpJiYhcmMoYSkpcmV0dXJuITE7YT1NKFxcXCJcXFwiK2EpO2I9TShcXFwiXFxcIitiKTtyZXR1cm4tMSE9PWEuaW5kZXhPZihiKX0pO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZCYmIUgoZSk/TGEoZSxcXG5iLiQsYSwhMSk6TGEoZSxiLGEsYyl9fWZ1bmN0aW9uIExhKGIsYSxjLGQsZSl7dmFyIGY9aWMoYiksZz1pYyhhKTtpZihcXFwic3RyaW5nXFxcIj09PWcmJlxcXCIhXFxcIj09PWEuY2hhckF0KDApKXJldHVybiFMYShiLGEuc3Vic3RyaW5nKDEpLGMsZCk7aWYoRyhiKSlyZXR1cm4gYi5zb21lKGZ1bmN0aW9uKGIpe3JldHVybiBMYShiLGEsYyxkKX0pO3N3aXRjaChmKXtjYXNlIFxcXCJvYmplY3RcXFwiOnZhciBoO2lmKGQpe2ZvcihoIGluIGIpaWYoXFxcIiRcXFwiIT09aC5jaGFyQXQoMCkmJkxhKGJbaF0sYSxjLCEwKSlyZXR1cm4hMDtyZXR1cm4gZT8hMTpMYShiLGEsYywhMSl9aWYoXFxcIm9iamVjdFxcXCI9PT1nKXtmb3IoaCBpbiBhKWlmKGU9YVtoXSwheihlKSYmIUEoZSkmJihmPVxcXCIkXFxcIj09PWgsIUxhKGY/YjpiW2hdLGUsYyxmLGYpKSlyZXR1cm4hMTtyZXR1cm4hMH1yZXR1cm4gYyhiLGEpO2Nhc2UgXFxcImZ1bmN0aW9uXFxcIjpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiBjKGIsYSl9fWZ1bmN0aW9uIGljKGIpe3JldHVybiBudWxsPT09XFxuYj9cXFwibnVsbFxcXCI6dHlwZW9mIGJ9ZnVuY3Rpb24geWQoYil7dmFyIGE9Yi5OVU1CRVJfRk9STUFUUztyZXR1cm4gZnVuY3Rpb24oYixkLGUpe0EoZCkmJihkPWEuQ1VSUkVOQ1lfU1lNKTtBKGUpJiYoZT1hLlBBVFRFUk5TWzFdLm1heEZyYWMpO3JldHVybiBudWxsPT1iP2I6Q2QoYixhLlBBVFRFUk5TWzFdLGEuR1JPVVBfU0VQLGEuREVDSU1BTF9TRVAsZSkucmVwbGFjZSgvXFxcXHUwMEE0L2csZCl9fWZ1bmN0aW9uIEFkKGIpe3ZhciBhPWIuTlVNQkVSX0ZPUk1BVFM7cmV0dXJuIGZ1bmN0aW9uKGIsZCl7cmV0dXJuIG51bGw9PWI/YjpDZChiLGEuUEFUVEVSTlNbMF0sYS5HUk9VUF9TRVAsYS5ERUNJTUFMX1NFUCxkKX19ZnVuY3Rpb24gQ2QoYixhLGMsZCxlKXtpZihIKGIpKXJldHVyblxcXCJcXFwiO3ZhciBmPTA+YjtiPU1hdGguYWJzKGIpO3ZhciBnPUluZmluaXR5PT09YjtpZighZyYmIWlzRmluaXRlKGIpKXJldHVyblxcXCJcXFwiO3ZhciBoPWIrXFxcIlxcXCIsbD1cXFwiXFxcIixrPSExLG49W107ZyYmKGw9XFxcIlxcXFx1MjIxZVxcXCIpO1xcbmlmKCFnJiYtMSE9PWguaW5kZXhPZihcXFwiZVxcXCIpKXt2YXIgcj1oLm1hdGNoKC8oW1xcXFxkXFxcXC5dKyllKC0/KShcXFxcZCspLyk7ciYmXFxcIi1cXFwiPT1yWzJdJiZyWzNdPmUrMT9iPTA6KGw9aCxrPSEwKX1pZihnfHxrKTA8ZSYmMT5iJiYobD1iLnRvRml4ZWQoZSksYj1wYXJzZUZsb2F0KGwpKTtlbHNle2c9KGguc3BsaXQoRGQpWzFdfHxcXFwiXFxcIikubGVuZ3RoO0EoZSkmJihlPU1hdGgubWluKE1hdGgubWF4KGEubWluRnJhYyxnKSxhLm1heEZyYWMpKTtiPSsoTWF0aC5yb3VuZCgrKGIudG9TdHJpbmcoKStcXFwiZVxcXCIrZSkpLnRvU3RyaW5nKCkrXFxcImVcXFwiKy1lKTt2YXIgZz0oXFxcIlxcXCIrYikuc3BsaXQoRGQpLGg9Z1swXSxnPWdbMV18fFxcXCJcXFwiLHI9MCxzPWEubGdTaXplLG09YS5nU2l6ZTtpZihoLmxlbmd0aD49cyttKWZvcihyPWgubGVuZ3RoLXMsaz0wO2s8cjtrKyspMD09PShyLWspJW0mJjAhPT1rJiYobCs9YyksbCs9aC5jaGFyQXQoayk7Zm9yKGs9cjtrPGgubGVuZ3RoO2srKykwPT09KGgubGVuZ3RoLWspJXMmJjAhPT1rJiZcXG4obCs9YyksbCs9aC5jaGFyQXQoayk7Zm9yKDtnLmxlbmd0aDxlOylnKz1cXFwiMFxcXCI7ZSYmXFxcIjBcXFwiIT09ZSYmKGwrPWQrZy5zdWJzdHIoMCxlKSl9MD09PWImJihmPSExKTtuLnB1c2goZj9hLm5lZ1ByZTphLnBvc1ByZSxsLGY/YS5uZWdTdWY6YS5wb3NTdWYpO3JldHVybiBuLmpvaW4oXFxcIlxcXCIpfWZ1bmN0aW9uIEdiKGIsYSxjKXt2YXIgZD1cXFwiXFxcIjswPmImJihkPVxcXCItXFxcIixiPS1iKTtmb3IoYj1cXFwiXFxcIitiO2IubGVuZ3RoPGE7KWI9XFxcIjBcXFwiK2I7YyYmKGI9Yi5zdWJzdHIoYi5sZW5ndGgtYSkpO3JldHVybiBkK2J9ZnVuY3Rpb24gWShiLGEsYyxkKXtjPWN8fDA7cmV0dXJuIGZ1bmN0aW9uKGUpe2U9ZVtcXFwiZ2V0XFxcIitiXSgpO2lmKDA8Y3x8ZT4tYyllKz1jOzA9PT1lJiYtMTI9PWMmJihlPTEyKTtyZXR1cm4gR2IoZSxhLGQpfX1mdW5jdGlvbiBIYihiLGEpe3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlPWNbXFxcImdldFxcXCIrYl0oKSxmPXJiKGE/XFxcIlNIT1JUXFxcIitiOmIpO3JldHVybiBkW2ZdW2VdfX1mdW5jdGlvbiBFZChiKXt2YXIgYT1cXG4obmV3IERhdGUoYiwwLDEpKS5nZXREYXkoKTtyZXR1cm4gbmV3IERhdGUoYiwwLCg0Pj1hPzU6MTIpLWEpfWZ1bmN0aW9uIEZkKGIpe3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1FZChhLmdldEZ1bGxZZWFyKCkpO2E9K25ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCkrKDQtYS5nZXREYXkoKSkpLStjO2E9MStNYXRoLnJvdW5kKGEvNjA0OEU1KTtyZXR1cm4gR2IoYSxiKX19ZnVuY3Rpb24gamMoYixhKXtyZXR1cm4gMD49Yi5nZXRGdWxsWWVhcigpP2EuRVJBU1swXTphLkVSQVNbMV19ZnVuY3Rpb24gemQoYil7ZnVuY3Rpb24gYShhKXt2YXIgYjtpZihiPWEubWF0Y2goYykpe2E9bmV3IERhdGUoMCk7dmFyIGY9MCxnPTAsaD1iWzhdP2Euc2V0VVRDRnVsbFllYXI6YS5zZXRGdWxsWWVhcixsPWJbOF0/YS5zZXRVVENIb3VyczphLnNldEhvdXJzO2JbOV0mJihmPVcoYls5XStiWzEwXSksZz1XKGJbOV0rYlsxMV0pKTtoLmNhbGwoYSxXKGJbMV0pLFxcblcoYlsyXSktMSxXKGJbM10pKTtmPVcoYls0XXx8MCktZjtnPVcoYls1XXx8MCktZztoPVcoYls2XXx8MCk7Yj1NYXRoLnJvdW5kKDFFMypwYXJzZUZsb2F0KFxcXCIwLlxcXCIrKGJbN118fDApKSk7bC5jYWxsKGEsZixnLGgsYil9cmV0dXJuIGF9dmFyIGM9L14oXFxcXGR7NH0pLT8oXFxcXGRcXFxcZCktPyhcXFxcZFxcXFxkKSg/OlQoXFxcXGRcXFxcZCkoPzo6PyhcXFxcZFxcXFxkKSg/Ojo/KFxcXFxkXFxcXGQpKD86XFxcXC4oXFxcXGQrKSk/KT8pPyhafChbKy1dKShcXFxcZFxcXFxkKTo/KFxcXFxkXFxcXGQpKT8pPyQvO3JldHVybiBmdW5jdGlvbihjLGUsZil7dmFyIGc9XFxcIlxcXCIsaD1bXSxsLGs7ZT1lfHxcXFwibWVkaXVtRGF0ZVxcXCI7ZT1iLkRBVEVUSU1FX0ZPUk1BVFNbZV18fGU7TChjKSYmKGM9Z2cudGVzdChjKT9XKGMpOmEoYykpO1YoYykmJihjPW5ldyBEYXRlKGMpKTtpZighYWEoYyl8fCFpc0Zpbml0ZShjLmdldFRpbWUoKSkpcmV0dXJuIGM7Zm9yKDtlOykoaz1oZy5leGVjKGUpKT8oaD1jYihoLGssMSksZT1oLnBvcCgpKTooaC5wdXNoKGUpLGU9bnVsbCk7dmFyIG49Yy5nZXRUaW1lem9uZU9mZnNldCgpO1xcbmYmJihuPXhjKGYsYy5nZXRUaW1lem9uZU9mZnNldCgpKSxjPVBiKGMsZiwhMCkpO20oaCxmdW5jdGlvbihhKXtsPWlnW2FdO2crPWw/bChjLGIuREFURVRJTUVfRk9STUFUUyxuKTphLnJlcGxhY2UoLyheJ3wnJCkvZyxcXFwiXFxcIikucmVwbGFjZSgvJycvZyxcXFwiJ1xcXCIpfSk7cmV0dXJuIGd9fWZ1bmN0aW9uIGJnKCl7cmV0dXJuIGZ1bmN0aW9uKGIsYSl7QShhKSYmKGE9Mik7cmV0dXJuIGRiKGIsYSl9fWZ1bmN0aW9uIGNnKCl7cmV0dXJuIGZ1bmN0aW9uKGIsYSxjKXthPUluZmluaXR5PT09TWF0aC5hYnMoTnVtYmVyKGEpKT9OdW1iZXIoYSk6VyhhKTtpZihpc05hTihhKSlyZXR1cm4gYjtWKGIpJiYoYj1iLnRvU3RyaW5nKCkpO2lmKCFHKGIpJiYhTChiKSlyZXR1cm4gYjtjPSFjfHxpc05hTihjKT8wOlcoYyk7Yz0wPmMmJmM+PS1iLmxlbmd0aD9iLmxlbmd0aCtjOmM7cmV0dXJuIDA8PWE/Yi5zbGljZShjLGMrYSk6MD09PWM/Yi5zbGljZShhLGIubGVuZ3RoKTpiLnNsaWNlKE1hdGgubWF4KDAsXFxuYythKSxjKX19ZnVuY3Rpb24gQmQoYil7ZnVuY3Rpb24gYShhLGMpe2M9Yz8tMToxO3JldHVybiBhLm1hcChmdW5jdGlvbihhKXt2YXIgZD0xLGg9WWE7aWYoeihhKSloPWE7ZWxzZSBpZihMKGEpKXtpZihcXFwiK1xcXCI9PWEuY2hhckF0KDApfHxcXFwiLVxcXCI9PWEuY2hhckF0KDApKWQ9XFxcIi1cXFwiPT1hLmNoYXJBdCgwKT8tMToxLGE9YS5zdWJzdHJpbmcoMSk7aWYoXFxcIlxcXCIhPT1hJiYoaD1iKGEpLGguY29uc3RhbnQpKXZhciBsPWgoKSxoPWZ1bmN0aW9uKGEpe3JldHVybiBhW2xdfX1yZXR1cm57Z2V0OmgsZGVzY2VuZGluZzpkKmN9fSl9ZnVuY3Rpb24gYyhhKXtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXFxcIm51bWJlclxcXCI6Y2FzZSBcXFwiYm9vbGVhblxcXCI6Y2FzZSBcXFwic3RyaW5nXFxcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1yZXR1cm4gZnVuY3Rpb24oYixlLGYpe2lmKCFFYShiKSlyZXR1cm4gYjtHKGUpfHwoZT1bZV0pOzA9PT1lLmxlbmd0aCYmKGU9W1xcXCIrXFxcIl0pO3ZhciBnPWEoZSxmKTtiPUFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChiLFxcbmZ1bmN0aW9uKGEsYil7cmV0dXJue3ZhbHVlOmEscHJlZGljYXRlVmFsdWVzOmcubWFwKGZ1bmN0aW9uKGQpe3ZhciBlPWQuZ2V0KGEpO2Q9dHlwZW9mIGU7aWYobnVsbD09PWUpZD1cXFwic3RyaW5nXFxcIixlPVxcXCJudWxsXFxcIjtlbHNlIGlmKFxcXCJzdHJpbmdcXFwiPT09ZCllPWUudG9Mb3dlckNhc2UoKTtlbHNlIGlmKFxcXCJvYmplY3RcXFwiPT09ZClhOntpZihcXFwiZnVuY3Rpb25cXFwiPT09dHlwZW9mIGUudmFsdWVPZiYmKGU9ZS52YWx1ZU9mKCksYyhlKSkpYnJlYWsgYTtpZihyYyhlKSYmKGU9ZS50b1N0cmluZygpLGMoZSkpKWJyZWFrIGE7ZT1ifXJldHVybnt2YWx1ZTplLHR5cGU6ZH19KX19KTtiLnNvcnQoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPTAsZT1nLmxlbmd0aDtkPGU7KytkKXt2YXIgYz1hLnByZWRpY2F0ZVZhbHVlc1tkXSxmPWIucHJlZGljYXRlVmFsdWVzW2RdLG09MDtjLnR5cGU9PT1mLnR5cGU/Yy52YWx1ZSE9PWYudmFsdWUmJihtPWMudmFsdWU8Zi52YWx1ZT8tMToxKTptPWMudHlwZTxmLnR5cGU/XFxuLTE6MTtpZihjPW0qZ1tkXS5kZXNjZW5kaW5nKWJyZWFrfXJldHVybiBjfSk7cmV0dXJuIGI9Yi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEudmFsdWV9KX19ZnVuY3Rpb24gTWEoYil7eihiKSYmKGI9e2xpbms6Yn0pO2IucmVzdHJpY3Q9Yi5yZXN0cmljdHx8XFxcIkFDXFxcIjtyZXR1cm4gcmEoYil9ZnVuY3Rpb24gR2QoYixhLGMsZCxlKXt2YXIgZj10aGlzLGc9W10saD1mLiQkcGFyZW50Rm9ybT1iLnBhcmVudCgpLmNvbnRyb2xsZXIoXFxcImZvcm1cXFwiKXx8SWI7Zi4kZXJyb3I9e307Zi4kJHN1Y2Nlc3M9e307Zi4kcGVuZGluZz10O2YuJG5hbWU9ZShhLm5hbWV8fGEubmdGb3JtfHxcXFwiXFxcIikoYyk7Zi4kZGlydHk9ITE7Zi4kcHJpc3RpbmU9ITA7Zi4kdmFsaWQ9ITA7Zi4kaW52YWxpZD0hMTtmLiRzdWJtaXR0ZWQ9ITE7aC4kYWRkQ29udHJvbChmKTtmLiRyb2xsYmFja1ZpZXdWYWx1ZT1mdW5jdGlvbigpe20oZyxmdW5jdGlvbihhKXthLiRyb2xsYmFja1ZpZXdWYWx1ZSgpfSl9O2YuJGNvbW1pdFZpZXdWYWx1ZT1cXG5mdW5jdGlvbigpe20oZyxmdW5jdGlvbihhKXthLiRjb21taXRWaWV3VmFsdWUoKX0pfTtmLiRhZGRDb250cm9sPWZ1bmN0aW9uKGEpe1JhKGEuJG5hbWUsXFxcImlucHV0XFxcIik7Zy5wdXNoKGEpO2EuJG5hbWUmJihmW2EuJG5hbWVdPWEpfTtmLiQkcmVuYW1lQ29udHJvbD1mdW5jdGlvbihhLGIpe3ZhciBjPWEuJG5hbWU7ZltjXT09PWEmJmRlbGV0ZSBmW2NdO2ZbYl09YTthLiRuYW1lPWJ9O2YuJHJlbW92ZUNvbnRyb2w9ZnVuY3Rpb24oYSl7YS4kbmFtZSYmZlthLiRuYW1lXT09PWEmJmRlbGV0ZSBmW2EuJG5hbWVdO20oZi4kcGVuZGluZyxmdW5jdGlvbihiLGMpe2YuJHNldFZhbGlkaXR5KGMsbnVsbCxhKX0pO20oZi4kZXJyb3IsZnVuY3Rpb24oYixjKXtmLiRzZXRWYWxpZGl0eShjLG51bGwsYSl9KTttKGYuJCRzdWNjZXNzLGZ1bmN0aW9uKGIsYyl7Zi4kc2V0VmFsaWRpdHkoYyxudWxsLGEpfSk7YmIoZyxhKX07SGQoe2N0cmw6dGhpcywkZWxlbWVudDpiLHNldDpmdW5jdGlvbihhLGIsXFxuYyl7dmFyIGQ9YVtiXTtkPy0xPT09ZC5pbmRleE9mKGMpJiZkLnB1c2goYyk6YVtiXT1bY119LHVuc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hW2JdO2QmJihiYihkLGMpLDA9PT1kLmxlbmd0aCYmZGVsZXRlIGFbYl0pfSxwYXJlbnRGb3JtOmgsJGFuaW1hdGU6ZH0pO2YuJHNldERpcnR5PWZ1bmN0aW9uKCl7ZC5yZW1vdmVDbGFzcyhiLFZhKTtkLmFkZENsYXNzKGIsSmIpO2YuJGRpcnR5PSEwO2YuJHByaXN0aW5lPSExO2guJHNldERpcnR5KCl9O2YuJHNldFByaXN0aW5lPWZ1bmN0aW9uKCl7ZC5zZXRDbGFzcyhiLFZhLEpiK1xcXCIgbmctc3VibWl0dGVkXFxcIik7Zi4kZGlydHk9ITE7Zi4kcHJpc3RpbmU9ITA7Zi4kc3VibWl0dGVkPSExO20oZyxmdW5jdGlvbihhKXthLiRzZXRQcmlzdGluZSgpfSl9O2YuJHNldFVudG91Y2hlZD1mdW5jdGlvbigpe20oZyxmdW5jdGlvbihhKXthLiRzZXRVbnRvdWNoZWQoKX0pfTtmLiRzZXRTdWJtaXR0ZWQ9ZnVuY3Rpb24oKXtkLmFkZENsYXNzKGIsXFxuXFxcIm5nLXN1Ym1pdHRlZFxcXCIpO2YuJHN1Ym1pdHRlZD0hMDtoLiRzZXRTdWJtaXR0ZWQoKX19ZnVuY3Rpb24ga2MoYil7Yi4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBiLiRpc0VtcHR5KGEpP2E6YS50b1N0cmluZygpfSl9ZnVuY3Rpb24ga2IoYixhLGMsZCxlLGYpe3ZhciBnPU0oYVswXS50eXBlKTtpZighZS5hbmRyb2lkKXt2YXIgaD0hMTthLm9uKFxcXCJjb21wb3NpdGlvbnN0YXJ0XFxcIixmdW5jdGlvbihhKXtoPSEwfSk7YS5vbihcXFwiY29tcG9zaXRpb25lbmRcXFwiLGZ1bmN0aW9uKCl7aD0hMTtsKCl9KX12YXIgbD1mdW5jdGlvbihiKXtrJiYoZi5kZWZlci5jYW5jZWwoayksaz1udWxsKTtpZighaCl7dmFyIGU9YS52YWwoKTtiPWImJmIudHlwZTtcXFwicGFzc3dvcmRcXFwiPT09Z3x8Yy5uZ1RyaW0mJlxcXCJmYWxzZVxcXCI9PT1jLm5nVHJpbXx8KGU9UihlKSk7KGQuJHZpZXdWYWx1ZSE9PWV8fFxcXCJcXFwiPT09ZSYmZC4kJGhhc05hdGl2ZVZhbGlkYXRvcnMpJiZkLiRzZXRWaWV3VmFsdWUoZSxiKX19O1xcbmlmKGUuaGFzRXZlbnQoXFxcImlucHV0XFxcIikpYS5vbihcXFwiaW5wdXRcXFwiLGwpO2Vsc2V7dmFyIGssbj1mdW5jdGlvbihhLGIsYyl7a3x8KGs9Zi5kZWZlcihmdW5jdGlvbigpe2s9bnVsbDtiJiZiLnZhbHVlPT09Y3x8bChhKX0pKX07YS5vbihcXFwia2V5ZG93blxcXCIsZnVuY3Rpb24oYSl7dmFyIGI9YS5rZXlDb2RlOzkxPT09Ynx8MTU8YiYmMTk+Ynx8Mzc8PWImJjQwPj1ifHxuKGEsdGhpcyx0aGlzLnZhbHVlKX0pO2lmKGUuaGFzRXZlbnQoXFxcInBhc3RlXFxcIikpYS5vbihcXFwicGFzdGUgY3V0XFxcIixuKX1hLm9uKFxcXCJjaGFuZ2VcXFwiLGwpO2QuJHJlbmRlcj1mdW5jdGlvbigpe2EudmFsKGQuJGlzRW1wdHkoZC4kdmlld1ZhbHVlKT9cXFwiXFxcIjpkLiR2aWV3VmFsdWUpfX1mdW5jdGlvbiBLYihiLGEpe3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlLGY7aWYoYWEoYykpcmV0dXJuIGM7aWYoTChjKSl7J1xcXCInPT1jLmNoYXJBdCgwKSYmJ1xcXCInPT1jLmNoYXJBdChjLmxlbmd0aC0xKSYmKGM9Yy5zdWJzdHJpbmcoMSxjLmxlbmd0aC0xKSk7XFxuaWYoamcudGVzdChjKSlyZXR1cm4gbmV3IERhdGUoYyk7Yi5sYXN0SW5kZXg9MDtpZihlPWIuZXhlYyhjKSlyZXR1cm4gZS5zaGlmdCgpLGY9ZD97eXl5eTpkLmdldEZ1bGxZZWFyKCksTU06ZC5nZXRNb250aCgpKzEsZGQ6ZC5nZXREYXRlKCksSEg6ZC5nZXRIb3VycygpLG1tOmQuZ2V0TWludXRlcygpLHNzOmQuZ2V0U2Vjb25kcygpLHNzczpkLmdldE1pbGxpc2Vjb25kcygpLzFFM306e3l5eXk6MTk3MCxNTToxLGRkOjEsSEg6MCxtbTowLHNzOjAsc3NzOjB9LG0oZSxmdW5jdGlvbihiLGMpe2M8YS5sZW5ndGgmJihmW2FbY11dPStiKX0pLG5ldyBEYXRlKGYueXl5eSxmLk1NLTEsZi5kZCxmLkhILGYubW0sZi5zc3x8MCwxRTMqZi5zc3N8fDApfXJldHVybiBOYU59fWZ1bmN0aW9uIGxiKGIsYSxjLGQpe3JldHVybiBmdW5jdGlvbihlLGYsZyxoLGwsayxuKXtmdW5jdGlvbiByKGEpe3JldHVybiBhJiYhKGEuZ2V0VGltZSYmYS5nZXRUaW1lKCkhPT1hLmdldFRpbWUoKSl9ZnVuY3Rpb24gcyhhKXtyZXR1cm4gdyhhKT9cXG5hYShhKT9hOmMoYSk6dH1JZChlLGYsZyxoKTtrYihlLGYsZyxoLGwsayk7dmFyIG09aCYmaC4kb3B0aW9ucyYmaC4kb3B0aW9ucy50aW1lem9uZSxxO2guJCRwYXJzZXJOYW1lPWI7aC4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGIpe3JldHVybiBoLiRpc0VtcHR5KGIpP251bGw6YS50ZXN0KGIpPyhiPWMoYixxKSxtJiYoYj1QYihiLG0pKSxiKTp0fSk7aC4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe2lmKGEmJiFhYShhKSl0aHJvdyBMYihcXFwiZGF0ZWZtdFxcXCIsYSk7aWYocihhKSlyZXR1cm4ocT1hKSYmbSYmKHE9UGIocSxtLCEwKSksbihcXFwiZGF0ZVxcXCIpKGEsZCxtKTtxPW51bGw7cmV0dXJuXFxcIlxcXCJ9KTtpZih3KGcubWluKXx8Zy5uZ01pbil7dmFyIEY7aC4kdmFsaWRhdG9ycy5taW49ZnVuY3Rpb24oYSl7cmV0dXJuIXIoYSl8fEEoRil8fGMoYSk+PUZ9O2cuJG9ic2VydmUoXFxcIm1pblxcXCIsZnVuY3Rpb24oYSl7Rj1zKGEpO2guJHZhbGlkYXRlKCl9KX1pZih3KGcubWF4KXx8Zy5uZ01heCl7dmFyIHU7XFxuaC4kdmFsaWRhdG9ycy5tYXg9ZnVuY3Rpb24oYSl7cmV0dXJuIXIoYSl8fEEodSl8fGMoYSk8PXV9O2cuJG9ic2VydmUoXFxcIm1heFxcXCIsZnVuY3Rpb24oYSl7dT1zKGEpO2guJHZhbGlkYXRlKCl9KX19fWZ1bmN0aW9uIElkKGIsYSxjLGQpeyhkLiQkaGFzTmF0aXZlVmFsaWRhdG9ycz1IKGFbMF0udmFsaWRpdHkpKSYmZC4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGIpe3ZhciBjPWEucHJvcChcXFwidmFsaWRpdHlcXFwiKXx8e307cmV0dXJuIGMuYmFkSW5wdXQmJiFjLnR5cGVNaXNtYXRjaD90OmJ9KX1mdW5jdGlvbiBKZChiLGEsYyxkLGUpe2lmKHcoZCkpe2I9YihkKTtpZighYi5jb25zdGFudCl0aHJvdyBKKFxcXCJuZ01vZGVsXFxcIikoXFxcImNvbnN0ZXhwclxcXCIsYyxkKTtyZXR1cm4gYihhKX1yZXR1cm4gZX1mdW5jdGlvbiBsYyhiLGEpe2I9XFxcIm5nQ2xhc3NcXFwiK2I7cmV0dXJuW1xcXCIkYW5pbWF0ZVxcXCIsZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhLGIpe3ZhciBjPVtdLGQ9MDthOmZvcig7ZDxhLmxlbmd0aDtkKyspe2Zvcih2YXIgZT1cXG5hW2RdLG49MDtuPGIubGVuZ3RoO24rKylpZihlPT1iW25dKWNvbnRpbnVlIGE7Yy5wdXNoKGUpfXJldHVybiBjfWZ1bmN0aW9uIGUoYSl7dmFyIGI9W107cmV0dXJuIEcoYSk/KG0oYSxmdW5jdGlvbihhKXtiPWIuY29uY2F0KGUoYSkpfSksYik6TChhKT9hLnNwbGl0KFxcXCIgXFxcIik6SChhKT8obShhLGZ1bmN0aW9uKGEsYyl7YSYmKGI9Yi5jb25jYXQoYy5zcGxpdChcXFwiIFxcXCIpKSl9KSxiKTphfXJldHVybntyZXN0cmljdDpcXFwiQUNcXFwiLGxpbms6ZnVuY3Rpb24oZixnLGgpe2Z1bmN0aW9uIGwoYSxiKXt2YXIgYz1nLmRhdGEoXFxcIiRjbGFzc0NvdW50c1xcXCIpfHxnYSgpLGQ9W107bShhLGZ1bmN0aW9uKGEpe2lmKDA8Ynx8Y1thXSljW2FdPShjW2FdfHwwKStiLGNbYV09PT0rKDA8YikmJmQucHVzaChhKX0pO2cuZGF0YShcXFwiJGNsYXNzQ291bnRzXFxcIixjKTtyZXR1cm4gZC5qb2luKFxcXCIgXFxcIil9ZnVuY3Rpb24gayhiKXtpZighMD09PWF8fGYuJGluZGV4JTI9PT1hKXt2YXIgaz1lKGJ8fFtdKTtpZighbil7dmFyIG09XFxubChrLDEpO2guJGFkZENsYXNzKG0pfWVsc2UgaWYoIWthKGIsbikpe3ZhciBxPWUobiksbT1kKGsscSksaz1kKHEsayksbT1sKG0sMSksaz1sKGssLTEpO20mJm0ubGVuZ3RoJiZjLmFkZENsYXNzKGcsbSk7ayYmay5sZW5ndGgmJmMucmVtb3ZlQ2xhc3MoZyxrKX19bj1pYShiKX12YXIgbjtmLiR3YXRjaChoW2JdLGssITApO2guJG9ic2VydmUoXFxcImNsYXNzXFxcIixmdW5jdGlvbihhKXtrKGYuJGV2YWwoaFtiXSkpfSk7XFxcIm5nQ2xhc3NcXFwiIT09YiYmZi4kd2F0Y2goXFxcIiRpbmRleFxcXCIsZnVuY3Rpb24oYyxkKXt2YXIgZz1jJjE7aWYoZyE9PShkJjEpKXt2YXIgaz1lKGYuJGV2YWwoaFtiXSkpO2c9PT1hPyhnPWwoaywxKSxoLiRhZGRDbGFzcyhnKSk6KGc9bChrLC0xKSxoLiRyZW1vdmVDbGFzcyhnKSl9fSl9fX1dfWZ1bmN0aW9uIEhkKGIpe2Z1bmN0aW9uIGEoYSxiKXtiJiYhZlthXT8oay5hZGRDbGFzcyhlLGEpLGZbYV09ITApOiFiJiZmW2FdJiYoay5yZW1vdmVDbGFzcyhlLGEpLGZbYV09ITEpfVxcbmZ1bmN0aW9uIGMoYixjKXtiPWI/XFxcIi1cXFwiK0JjKGIsXFxcIi1cXFwiKTpcXFwiXFxcIjthKG1iK2IsITA9PT1jKTthKEtkK2IsITE9PT1jKX12YXIgZD1iLmN0cmwsZT1iLiRlbGVtZW50LGY9e30sZz1iLnNldCxoPWIudW5zZXQsbD1iLnBhcmVudEZvcm0saz1iLiRhbmltYXRlO2ZbS2RdPSEoZlttYl09ZS5oYXNDbGFzcyhtYikpO2QuJHNldFZhbGlkaXR5PWZ1bmN0aW9uKGIsZSxmKXtlPT09dD8oZC4kcGVuZGluZ3x8KGQuJHBlbmRpbmc9e30pLGcoZC4kcGVuZGluZyxiLGYpKTooZC4kcGVuZGluZyYmaChkLiRwZW5kaW5nLGIsZiksTGQoZC4kcGVuZGluZykmJihkLiRwZW5kaW5nPXQpKTthYihlKT9lPyhoKGQuJGVycm9yLGIsZiksZyhkLiQkc3VjY2VzcyxiLGYpKTooZyhkLiRlcnJvcixiLGYpLGgoZC4kJHN1Y2Nlc3MsYixmKSk6KGgoZC4kZXJyb3IsYixmKSxoKGQuJCRzdWNjZXNzLGIsZikpO2QuJHBlbmRpbmc/KGEoTWQsITApLGQuJHZhbGlkPWQuJGludmFsaWQ9dCxjKFxcXCJcXFwiLG51bGwpKTooYShNZCxcXG4hMSksZC4kdmFsaWQ9TGQoZC4kZXJyb3IpLGQuJGludmFsaWQ9IWQuJHZhbGlkLGMoXFxcIlxcXCIsZC4kdmFsaWQpKTtlPWQuJHBlbmRpbmcmJmQuJHBlbmRpbmdbYl0/dDpkLiRlcnJvcltiXT8hMTpkLiQkc3VjY2Vzc1tiXT8hMDpudWxsO2MoYixlKTtsLiRzZXRWYWxpZGl0eShiLGUsZCl9fWZ1bmN0aW9uIExkKGIpe2lmKGIpZm9yKHZhciBhIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShhKSlyZXR1cm4hMTtyZXR1cm4hMH12YXIga2c9L15cXFxcLyguKylcXFxcLyhbYS16XSopJC8sTT1mdW5jdGlvbihiKXtyZXR1cm4gTChiKT9iLnRvTG93ZXJDYXNlKCk6Yn0sWGE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxyYj1mdW5jdGlvbihiKXtyZXR1cm4gTChiKT9iLnRvVXBwZXJDYXNlKCk6Yn0sVWEseSxsYSx6YT1bXS5zbGljZSxOZj1bXS5zcGxpY2UsbGc9W10ucHVzaCxzYT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLHNjPU9iamVjdC5nZXRQcm90b3R5cGVPZixGYT1KKFxcXCJuZ1xcXCIpLGNhPVxcbk8uYW5ndWxhcnx8KE8uYW5ndWxhcj17fSksZ2IsbmI9MDtVYT1VLmRvY3VtZW50TW9kZTt2LiRpbmplY3Q9W107WWEuJGluamVjdD1bXTt2YXIgRz1BcnJheS5pc0FycmF5LHVjPS9eXFxcXFtvYmplY3QgKFVpbnQ4KENsYW1wZWQpPyl8KFVpbnQxNil8KFVpbnQzMil8KEludDgpfChJbnQxNil8KEludDMyKXwoRmxvYXQoMzIpfCg2NCkpQXJyYXlcXFxcXSQvLFI9ZnVuY3Rpb24oYil7cmV0dXJuIEwoYik/Yi50cmltKCk6Yn0sdWQ9ZnVuY3Rpb24oYil7cmV0dXJuIGIucmVwbGFjZSgvKFstKClcXFxcW1xcXFxde30rPyouJFxcXFxefCw6IzwhXFxcXFxcXFxdKS9nLFxcXCJcXFxcXFxcXCQxXFxcIikucmVwbGFjZSgvXFxcXHgwOC9nLFxcXCJcXFxcXFxcXHgwOFxcXCIpfSxmYj1mdW5jdGlvbigpe2lmKHcoZmIuaXNBY3RpdmVfKSlyZXR1cm4gZmIuaXNBY3RpdmVfO3ZhciBiPSEoIVUucXVlcnlTZWxlY3RvcihcXFwiW25nLWNzcF1cXFwiKSYmIVUucXVlcnlTZWxlY3RvcihcXFwiW2RhdGEtbmctY3NwXVxcXCIpKTtpZighYil0cnl7bmV3IEZ1bmN0aW9uKFxcXCJcXFwiKX1jYXRjaChhKXtiPSEwfXJldHVybiBmYi5pc0FjdGl2ZV89XFxuYn0scGI9ZnVuY3Rpb24oKXtpZih3KHBiLm5hbWVfKSlyZXR1cm4gcGIubmFtZV87dmFyIGIsYSxjPU9hLmxlbmd0aCxkLGU7Zm9yKGE9MDthPGM7KythKWlmKGQ9T2FbYV0sYj1VLnF1ZXJ5U2VsZWN0b3IoXFxcIltcXFwiK2QucmVwbGFjZShcXFwiOlxcXCIsXFxcIlxcXFxcXFxcOlxcXCIpK1xcXCJqcV1cXFwiKSl7ZT1iLmdldEF0dHJpYnV0ZShkK1xcXCJqcVxcXCIpO2JyZWFrfXJldHVybiBwYi5uYW1lXz1lfSxPYT1bXFxcIm5nLVxcXCIsXFxcImRhdGEtbmctXFxcIixcXFwibmc6XFxcIixcXFwieC1uZy1cXFwiXSxiZT0vW0EtWl0vZyxDYz0hMSxSYixxYT0xLE5hPTMsZmU9e2Z1bGw6XFxcIjEuNC4yXFxcIixtYWpvcjoxLG1pbm9yOjQsZG90OjIsY29kZU5hbWU6XFxcIm5lYnVsYXItcmVhZGp1c3RtZW50XFxcIn07US5leHBhbmRvPVxcXCJuZzMzOVxcXCI7dmFyIGliPVEuY2FjaGU9e30sRWY9MTtRLl9kYXRhPWZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmNhY2hlW2JbdGhpcy5leHBhbmRvXV18fHt9fTt2YXIgemY9LyhbXFxcXDpcXFxcLVxcXFxfXSsoLikpL2csQWY9L15tb3ooW0EtWl0pLyxtZz17bW91c2VsZWF2ZTpcXFwibW91c2VvdXRcXFwiLFxcbm1vdXNlZW50ZXI6XFxcIm1vdXNlb3ZlclxcXCJ9LFViPUooXFxcImpxTGl0ZVxcXCIpLERmPS9ePChcXFxcdyspXFxcXHMqXFxcXC8/Pig/OjxcXFxcL1xcXFwxPnwpJC8sVGI9Lzx8JiM/XFxcXHcrOy8sQmY9LzwoW1xcXFx3Ol0rKS8sQ2Y9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcXFx3Ol0rKVtePl0qKVxcXFwvPi9naSxuYT17b3B0aW9uOlsxLCc8c2VsZWN0IG11bHRpcGxlPVxcXCJtdWx0aXBsZVxcXCI+JyxcXFwiPC9zZWxlY3Q+XFxcIl0sdGhlYWQ6WzEsXFxcIjx0YWJsZT5cXFwiLFxcXCI8L3RhYmxlPlxcXCJdLGNvbDpbMixcXFwiPHRhYmxlPjxjb2xncm91cD5cXFwiLFxcXCI8L2NvbGdyb3VwPjwvdGFibGU+XFxcIl0sdHI6WzIsXFxcIjx0YWJsZT48dGJvZHk+XFxcIixcXFwiPC90Ym9keT48L3RhYmxlPlxcXCJdLHRkOlszLFxcXCI8dGFibGU+PHRib2R5Pjx0cj5cXFwiLFxcXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cXFwiXSxfZGVmYXVsdDpbMCxcXFwiXFxcIixcXFwiXFxcIl19O25hLm9wdGdyb3VwPW5hLm9wdGlvbjtuYS50Ym9keT1uYS50Zm9vdD1uYS5jb2xncm91cD1uYS5jYXB0aW9uPW5hLnRoZWFkO1xcbm5hLnRoPW5hLnRkO3ZhciBQYT1RLnByb3RvdHlwZT17cmVhZHk6ZnVuY3Rpb24oYil7ZnVuY3Rpb24gYSgpe2N8fChjPSEwLGIoKSl9dmFyIGM9ITE7XFxcImNvbXBsZXRlXFxcIj09PVUucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KGEpOih0aGlzLm9uKFxcXCJET01Db250ZW50TG9hZGVkXFxcIixhKSxRKE8pLm9uKFxcXCJsb2FkXFxcIixhKSl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGI9W107bSh0aGlzLGZ1bmN0aW9uKGEpe2IucHVzaChcXFwiXFxcIithKX0pO3JldHVyblxcXCJbXFxcIitiLmpvaW4oXFxcIiwgXFxcIikrXFxcIl1cXFwifSxlcTpmdW5jdGlvbihiKXtyZXR1cm4gMDw9Yj95KHRoaXNbYl0pOnkodGhpc1t0aGlzLmxlbmd0aCtiXSl9LGxlbmd0aDowLHB1c2g6bGcsc29ydDpbXS5zb3J0LHNwbGljZTpbXS5zcGxpY2V9LEFiPXt9O20oXFxcIm11bHRpcGxlIHNlbGVjdGVkIGNoZWNrZWQgZGlzYWJsZWQgcmVhZE9ubHkgcmVxdWlyZWQgb3BlblxcXCIuc3BsaXQoXFxcIiBcXFwiKSxmdW5jdGlvbihiKXtBYltNKGIpXT1ifSk7dmFyIFRjPXt9O20oXFxcImlucHV0IHNlbGVjdCBvcHRpb24gdGV4dGFyZWEgYnV0dG9uIGZvcm0gZGV0YWlsc1xcXCIuc3BsaXQoXFxcIiBcXFwiKSxcXG5mdW5jdGlvbihiKXtUY1tiXT0hMH0pO3ZhciBVYz17bmdNaW5sZW5ndGg6XFxcIm1pbmxlbmd0aFxcXCIsbmdNYXhsZW5ndGg6XFxcIm1heGxlbmd0aFxcXCIsbmdNaW46XFxcIm1pblxcXCIsbmdNYXg6XFxcIm1heFxcXCIsbmdQYXR0ZXJuOlxcXCJwYXR0ZXJuXFxcIn07bSh7ZGF0YTpXYixyZW1vdmVEYXRhOnViLGhhc0RhdGE6ZnVuY3Rpb24oYil7Zm9yKHZhciBhIGluIGliW2IubmczMzldKXJldHVybiEwO3JldHVybiExfX0sZnVuY3Rpb24oYixhKXtRW2FdPWJ9KTttKHtkYXRhOldiLGluaGVyaXRlZERhdGE6emIsc2NvcGU6ZnVuY3Rpb24oYil7cmV0dXJuIHkuZGF0YShiLFxcXCIkc2NvcGVcXFwiKXx8emIoYi5wYXJlbnROb2RlfHxiLFtcXFwiJGlzb2xhdGVTY29wZVxcXCIsXFxcIiRzY29wZVxcXCJdKX0saXNvbGF0ZVNjb3BlOmZ1bmN0aW9uKGIpe3JldHVybiB5LmRhdGEoYixcXFwiJGlzb2xhdGVTY29wZVxcXCIpfHx5LmRhdGEoYixcXFwiJGlzb2xhdGVTY29wZU5vVGVtcGxhdGVcXFwiKX0sY29udHJvbGxlcjpRYyxpbmplY3RvcjpmdW5jdGlvbihiKXtyZXR1cm4gemIoYixcXG5cXFwiJGluamVjdG9yXFxcIil9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYixhKXtiLnJlbW92ZUF0dHJpYnV0ZShhKX0saGFzQ2xhc3M6d2IsY3NzOmZ1bmN0aW9uKGIsYSxjKXthPWhiKGEpO2lmKHcoYykpYi5zdHlsZVthXT1jO2Vsc2UgcmV0dXJuIGIuc3R5bGVbYV19LGF0dHI6ZnVuY3Rpb24oYixhLGMpe3ZhciBkPWIubm9kZVR5cGU7aWYoZCE9PU5hJiYyIT09ZCYmOCE9PWQpaWYoZD1NKGEpLEFiW2RdKWlmKHcoYykpYz8oYlthXT0hMCxiLnNldEF0dHJpYnV0ZShhLGQpKTooYlthXT0hMSxiLnJlbW92ZUF0dHJpYnV0ZShkKSk7ZWxzZSByZXR1cm4gYlthXXx8KGIuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oYSl8fHYpLnNwZWNpZmllZD9kOnQ7ZWxzZSBpZih3KGMpKWIuc2V0QXR0cmlidXRlKGEsYyk7ZWxzZSBpZihiLmdldEF0dHJpYnV0ZSlyZXR1cm4gYj1iLmdldEF0dHJpYnV0ZShhLDIpLG51bGw9PT1iP3Q6Yn0scHJvcDpmdW5jdGlvbihiLGEsYyl7aWYodyhjKSliW2FdPWM7ZWxzZSByZXR1cm4gYlthXX0sXFxudGV4dDpmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxiKXtpZihBKGIpKXt2YXIgZD1hLm5vZGVUeXBlO3JldHVybiBkPT09cWF8fGQ9PT1OYT9hLnRleHRDb250ZW50OlxcXCJcXFwifWEudGV4dENvbnRlbnQ9Yn1iLiRkdj1cXFwiXFxcIjtyZXR1cm4gYn0oKSx2YWw6ZnVuY3Rpb24oYixhKXtpZihBKGEpKXtpZihiLm11bHRpcGxlJiZcXFwic2VsZWN0XFxcIj09PXRhKGIpKXt2YXIgYz1bXTttKGIub3B0aW9ucyxmdW5jdGlvbihhKXthLnNlbGVjdGVkJiZjLnB1c2goYS52YWx1ZXx8YS50ZXh0KX0pO3JldHVybiAwPT09Yy5sZW5ndGg/bnVsbDpjfXJldHVybiBiLnZhbHVlfWIudmFsdWU9YX0saHRtbDpmdW5jdGlvbihiLGEpe2lmKEEoYSkpcmV0dXJuIGIuaW5uZXJIVE1MO3RiKGIsITApO2IuaW5uZXJIVE1MPWF9LGVtcHR5OlJjfSxmdW5jdGlvbihiLGEpe1EucHJvdG90eXBlW2FdPWZ1bmN0aW9uKGEsZCl7dmFyIGUsZixnPXRoaXMubGVuZ3RoO2lmKGIhPT1SYyYmKDI9PWIubGVuZ3RoJiZiIT09d2ImJmIhPT1RYz9cXG5hOmQpPT09dCl7aWYoSChhKSl7Zm9yKGU9MDtlPGc7ZSsrKWlmKGI9PT1XYiliKHRoaXNbZV0sYSk7ZWxzZSBmb3IoZiBpbiBhKWIodGhpc1tlXSxmLGFbZl0pO3JldHVybiB0aGlzfWU9Yi4kZHY7Zz1lPT09dD9NYXRoLm1pbihnLDEpOmc7Zm9yKGY9MDtmPGc7ZisrKXt2YXIgaD1iKHRoaXNbZl0sYSxkKTtlPWU/ZStoOmh9cmV0dXJuIGV9Zm9yKGU9MDtlPGc7ZSsrKWIodGhpc1tlXSxhLGQpO3JldHVybiB0aGlzfX0pO20oe3JlbW92ZURhdGE6dWIsb246ZnVuY3Rpb24gYShjLGQsZSxmKXtpZih3KGYpKXRocm93IFViKFxcXCJvbmFyZ3NcXFwiKTtpZihNYyhjKSl7dmFyIGc9dmIoYywhMCk7Zj1nLmV2ZW50czt2YXIgaD1nLmhhbmRsZTtofHwoaD1nLmhhbmRsZT1IZihjLGYpKTtmb3IodmFyIGc9MDw9ZC5pbmRleE9mKFxcXCIgXFxcIik/ZC5zcGxpdChcXFwiIFxcXCIpOltkXSxsPWcubGVuZ3RoO2wtLTspe2Q9Z1tsXTt2YXIgaz1mW2RdO2t8fChmW2RdPVtdLFxcXCJtb3VzZWVudGVyXFxcIj09PWR8fFxcXCJtb3VzZWxlYXZlXFxcIj09PVxcbmQ/YShjLG1nW2RdLGZ1bmN0aW9uKGEpe3ZhciBjPWEucmVsYXRlZFRhcmdldDtjJiYoYz09PXRoaXN8fHRoaXMuY29udGFpbnMoYykpfHxoKGEsZCl9KTpcXFwiJGRlc3Ryb3lcXFwiIT09ZCYmYy5hZGRFdmVudExpc3RlbmVyKGQsaCwhMSksaz1mW2RdKTtrLnB1c2goZSl9fX0sb2ZmOlBjLG9uZTpmdW5jdGlvbihhLGMsZCl7YT15KGEpO2Eub24oYyxmdW5jdGlvbiBmKCl7YS5vZmYoYyxkKTthLm9mZihjLGYpfSk7YS5vbihjLGQpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbihhLGMpe3ZhciBkLGU9YS5wYXJlbnROb2RlO3RiKGEpO20obmV3IFEoYyksZnVuY3Rpb24oYyl7ZD9lLmluc2VydEJlZm9yZShjLGQubmV4dFNpYmxpbmcpOmUucmVwbGFjZUNoaWxkKGMsYSk7ZD1jfSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3ZhciBjPVtdO20oYS5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpe2Eubm9kZVR5cGU9PT1xYSYmYy5wdXNoKGEpfSk7cmV0dXJuIGN9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8XFxuYS5jaGlsZE5vZGVzfHxbXX0sYXBwZW5kOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9YS5ub2RlVHlwZTtpZihkPT09cWF8fDExPT09ZCl7Yz1uZXcgUShjKTtmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspYS5hcHBlbmRDaGlsZChjW2RdKX19LHByZXBlbmQ6ZnVuY3Rpb24oYSxjKXtpZihhLm5vZGVUeXBlPT09cWEpe3ZhciBkPWEuZmlyc3RDaGlsZDttKG5ldyBRKGMpLGZ1bmN0aW9uKGMpe2EuaW5zZXJ0QmVmb3JlKGMsZCl9KX19LHdyYXA6ZnVuY3Rpb24oYSxjKXtjPXkoYykuZXEoMCkuY2xvbmUoKVswXTt2YXIgZD1hLnBhcmVudE5vZGU7ZCYmZC5yZXBsYWNlQ2hpbGQoYyxhKTtjLmFwcGVuZENoaWxkKGEpfSxyZW1vdmU6WGIsZGV0YWNoOmZ1bmN0aW9uKGEpe1hiKGEsITApfSxhZnRlcjpmdW5jdGlvbihhLGMpe3ZhciBkPWEsZT1hLnBhcmVudE5vZGU7Yz1uZXcgUShjKTtmb3IodmFyIGY9MCxnPWMubGVuZ3RoO2Y8ZztmKyspe3ZhciBoPWNbZl07ZS5pbnNlcnRCZWZvcmUoaCxcXG5kLm5leHRTaWJsaW5nKTtkPWh9fSxhZGRDbGFzczp5YixyZW1vdmVDbGFzczp4Yix0b2dnbGVDbGFzczpmdW5jdGlvbihhLGMsZCl7YyYmbShjLnNwbGl0KFxcXCIgXFxcIiksZnVuY3Rpb24oYyl7dmFyIGY9ZDtBKGYpJiYoZj0hd2IoYSxjKSk7KGY/eWI6eGIpKGEsYyl9KX0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybihhPWEucGFyZW50Tm9kZSkmJjExIT09YS5ub2RlVHlwZT9hOm51bGx9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmV4dEVsZW1lbnRTaWJsaW5nfSxmaW5kOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShjKTpbXX0sY2xvbmU6VmIsdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGYsZz1jLnR5cGV8fGMsaD12YihhKTtpZihoPShoPWgmJmguZXZlbnRzKSYmaFtnXSllPXtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMH0saXNEZWZhdWx0UHJldmVudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITA9PT1cXG50aGlzLmRlZmF1bHRQcmV2ZW50ZWR9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3RoaXMuaW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPSEwfSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpmdW5jdGlvbigpe3JldHVybiEwPT09dGhpcy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWR9LHN0b3BQcm9wYWdhdGlvbjp2LHR5cGU6Zyx0YXJnZXQ6YX0sYy50eXBlJiYoZT1QKGUsYykpLGM9aWEoaCksZj1kP1tlXS5jb25jYXQoZCk6W2VdLG0oYyxmdW5jdGlvbihjKXtlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCl8fGMuYXBwbHkoYSxmKX0pfX0sZnVuY3Rpb24oYSxjKXtRLnByb3RvdHlwZVtjXT1mdW5jdGlvbihjLGUsZil7Zm9yKHZhciBnLGg9MCxsPXRoaXMubGVuZ3RoO2g8bDtoKyspQShnKT8oZz1hKHRoaXNbaF0sYyxlLGYpLHcoZykmJihnPXkoZykpKTpPYyhnLGEodGhpc1toXSxjLGUsZikpO3JldHVybiB3KGcpP2c6dGhpc307US5wcm90b3R5cGUuYmluZD1cXG5RLnByb3RvdHlwZS5vbjtRLnByb3RvdHlwZS51bmJpbmQ9US5wcm90b3R5cGUub2ZmfSk7U2EucHJvdG90eXBlPXtwdXQ6ZnVuY3Rpb24oYSxjKXt0aGlzW0dhKGEsdGhpcy5uZXh0VWlkKV09Y30sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzW0dhKGEsdGhpcy5uZXh0VWlkKV19LHJlbW92ZTpmdW5jdGlvbihhKXt2YXIgYz10aGlzW2E9R2EoYSx0aGlzLm5leHRVaWQpXTtkZWxldGUgdGhpc1thXTtyZXR1cm4gY319O3ZhciB4Zj1bZnVuY3Rpb24oKXt0aGlzLiRnZXQ9W2Z1bmN0aW9uKCl7cmV0dXJuIFNhfV19XSxXYz0vXmZ1bmN0aW9uXFxcXHMqW15cXFxcKF0qXFxcXChcXFxccyooW15cXFxcKV0qKVxcXFwpL20sbmc9LywvLG9nPS9eXFxcXHMqKF8/KShcXFxcUys/KVxcXFwxXFxcXHMqJC8sVmM9LygoXFxcXC9cXFxcLy4qJCl8KFxcXFwvXFxcXCpbXFxcXHNcXFxcU10qP1xcXFwqXFxcXC8pKS9tZyxIYT1KKFxcXCIkaW5qZWN0b3JcXFwiKTtlYi4kJGFubm90YXRlPWZ1bmN0aW9uKGEsYyxkKXt2YXIgZTtpZihcXFwiZnVuY3Rpb25cXFwiPT09dHlwZW9mIGEpe2lmKCEoZT1hLiRpbmplY3QpKXtlPVxcbltdO2lmKGEubGVuZ3RoKXtpZihjKXRocm93IEwoZCkmJmR8fChkPWEubmFtZXx8SWYoYSkpLEhhKFxcXCJzdHJpY3RkaVxcXCIsZCk7Yz1hLnRvU3RyaW5nKCkucmVwbGFjZShWYyxcXFwiXFxcIik7Yz1jLm1hdGNoKFdjKTttKGNbMV0uc3BsaXQobmcpLGZ1bmN0aW9uKGEpe2EucmVwbGFjZShvZyxmdW5jdGlvbihhLGMsZCl7ZS5wdXNoKGQpfSl9KX1hLiRpbmplY3Q9ZX19ZWxzZSBHKGEpPyhjPWEubGVuZ3RoLTEsUWEoYVtjXSxcXFwiZm5cXFwiKSxlPWEuc2xpY2UoMCxjKSk6UWEoYSxcXFwiZm5cXFwiLCEwKTtyZXR1cm4gZX07dmFyIE5kPUooXFxcIiRhbmltYXRlXFxcIiksVWU9ZnVuY3Rpb24oKXt0aGlzLiRnZXQ9W1xcXCIkcVxcXCIsXFxcIiQkckFGXFxcIixmdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGQoKXt9ZC5hbGw9djtkLmNoYWluPXY7ZC5wcm90b3R5cGU9e2VuZDp2LGNhbmNlbDp2LHJlc3VtZTp2LHBhdXNlOnYsY29tcGxldGU6dix0aGVuOmZ1bmN0aW9uKGQsZil7cmV0dXJuIGEoZnVuY3Rpb24oYSl7YyhmdW5jdGlvbigpe2EoKX0pfSkudGhlbihkLFxcbmYpfX07cmV0dXJuIGR9XX0sVGU9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgU2EsYz1bXTt0aGlzLiRnZXQ9W1xcXCIkJEFuaW1hdGVSdW5uZXJcXFwiLFxcXCIkcm9vdFNjb3BlXFxcIixmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGYoZCxmLGwpe3ZhciBrPWEuZ2V0KGQpO2t8fChhLnB1dChkLGs9e30pLGMucHVzaChkKSk7ZiYmbShmLnNwbGl0KFxcXCIgXFxcIiksZnVuY3Rpb24oYSl7YSYmKGtbYV09ITApfSk7bCYmbShsLnNwbGl0KFxcXCIgXFxcIiksZnVuY3Rpb24oYSl7YSYmKGtbYV09ITEpfSk7MTxjLmxlbmd0aHx8ZS4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXttKGMsZnVuY3Rpb24oYyl7dmFyIGQ9YS5nZXQoYyk7aWYoZCl7dmFyIGU9SmYoYy5hdHRyKFxcXCJjbGFzc1xcXCIpKSxmPVxcXCJcXFwiLGc9XFxcIlxcXCI7bShkLGZ1bmN0aW9uKGEsYyl7YSE9PSEhZVtjXSYmKGE/Zis9KGYubGVuZ3RoP1xcXCIgXFxcIjpcXFwiXFxcIikrYzpnKz0oZy5sZW5ndGg/XFxcIiBcXFwiOlxcXCJcXFwiKStjKX0pO20oYyxmdW5jdGlvbihhKXtmJiZ5YihhLGYpO2cmJnhiKGEsZyl9KTthLnJlbW92ZShjKX19KTtcXG5jLmxlbmd0aD0wfSl9cmV0dXJue2VuYWJsZWQ6dixvbjp2LG9mZjp2LHBpbjp2LHB1c2g6ZnVuY3Rpb24oYSxjLGUsayl7ayYmaygpO2U9ZXx8e307ZS5mcm9tJiZhLmNzcyhlLmZyb20pO2UudG8mJmEuY3NzKGUudG8pOyhlLmFkZENsYXNzfHxlLnJlbW92ZUNsYXNzKSYmZihhLGUuYWRkQ2xhc3MsZS5yZW1vdmVDbGFzcyk7cmV0dXJuIG5ldyBkfX19XX0sU2U9W1xcXCIkcHJvdmlkZVxcXCIsZnVuY3Rpb24oYSl7dmFyIGM9dGhpczt0aGlzLiQkcmVnaXN0ZXJlZEFuaW1hdGlvbnM9T2JqZWN0LmNyZWF0ZShudWxsKTt0aGlzLnJlZ2lzdGVyPWZ1bmN0aW9uKGQsZSl7aWYoZCYmXFxcIi5cXFwiIT09ZC5jaGFyQXQoMCkpdGhyb3cgTmQoXFxcIm5vdGNzZWxcXFwiLGQpO3ZhciBmPWQrXFxcIi1hbmltYXRpb25cXFwiO2MuJCRyZWdpc3RlcmVkQW5pbWF0aW9uc1tkLnN1YnN0cigxKV09ZjthLmZhY3RvcnkoZixlKX07dGhpcy5jbGFzc05hbWVGaWx0ZXI9ZnVuY3Rpb24oYSl7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgmJih0aGlzLiQkY2xhc3NOYW1lRmlsdGVyPVxcbmEgaW5zdGFuY2VvZiBSZWdFeHA/YTpudWxsKSYmLyhcXFxccyt8XFxcXC8pbmctYW5pbWF0ZShcXFxccyt8XFxcXC8pLy50ZXN0KHRoaXMuJCRjbGFzc05hbWVGaWx0ZXIudG9TdHJpbmcoKSkpdGhyb3cgTmQoXFxcIm5vbmdjbHNcXFwiLFxcXCJuZy1hbmltYXRlXFxcIik7cmV0dXJuIHRoaXMuJCRjbGFzc05hbWVGaWx0ZXJ9O3RoaXMuJGdldD1bXFxcIiQkYW5pbWF0ZVF1ZXVlXFxcIixmdW5jdGlvbihhKXtmdW5jdGlvbiBjKGEsZCxlKXtpZihlKXt2YXIgbDthOntmb3IobD0wO2w8ZS5sZW5ndGg7bCsrKXt2YXIgaz1lW2xdO2lmKDE9PT1rLm5vZGVUeXBlKXtsPWs7YnJlYWsgYX19bD12b2lkIDB9IWx8fGwucGFyZW50Tm9kZXx8bC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfHwoZT1udWxsKX1lP2UuYWZ0ZXIoYSk6ZC5wcmVwZW5kKGEpfXJldHVybntvbjphLm9uLG9mZjphLm9mZixwaW46YS5waW4sZW5hYmxlZDphLmVuYWJsZWQsY2FuY2VsOmZ1bmN0aW9uKGEpe2EuZW5kJiZhLmVuZCgpfSxlbnRlcjpmdW5jdGlvbihmLGcsaCxsKXtnPVxcbmcmJnkoZyk7aD1oJiZ5KGgpO2c9Z3x8aC5wYXJlbnQoKTtjKGYsZyxoKTtyZXR1cm4gYS5wdXNoKGYsXFxcImVudGVyXFxcIixJYShsKSl9LG1vdmU6ZnVuY3Rpb24oZixnLGgsbCl7Zz1nJiZ5KGcpO2g9aCYmeShoKTtnPWd8fGgucGFyZW50KCk7YyhmLGcsaCk7cmV0dXJuIGEucHVzaChmLFxcXCJtb3ZlXFxcIixJYShsKSl9LGxlYXZlOmZ1bmN0aW9uKGMsZSl7cmV0dXJuIGEucHVzaChjLFxcXCJsZWF2ZVxcXCIsSWEoZSksZnVuY3Rpb24oKXtjLnJlbW92ZSgpfSl9LGFkZENsYXNzOmZ1bmN0aW9uKGMsZSxoKXtoPUlhKGgpO2guYWRkQ2xhc3M9amIoaC5hZGRjbGFzcyxlKTtyZXR1cm4gYS5wdXNoKGMsXFxcImFkZENsYXNzXFxcIixoKX0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYyxlLGgpe2g9SWEoaCk7aC5yZW1vdmVDbGFzcz1qYihoLnJlbW92ZUNsYXNzLGUpO3JldHVybiBhLnB1c2goYyxcXFwicmVtb3ZlQ2xhc3NcXFwiLGgpfSxzZXRDbGFzczpmdW5jdGlvbihjLGUsaCxsKXtsPUlhKGwpO2wuYWRkQ2xhc3M9amIobC5hZGRDbGFzcyxcXG5lKTtsLnJlbW92ZUNsYXNzPWpiKGwucmVtb3ZlQ2xhc3MsaCk7cmV0dXJuIGEucHVzaChjLFxcXCJzZXRDbGFzc1xcXCIsbCl9LGFuaW1hdGU6ZnVuY3Rpb24oYyxlLGgsbCxrKXtrPUlhKGspO2suZnJvbT1rLmZyb20/UChrLmZyb20sZSk6ZTtrLnRvPWsudG8/UChrLnRvLGgpOmg7ay50ZW1wQ2xhc3Nlcz1qYihrLnRlbXBDbGFzc2VzLGx8fFxcXCJuZy1pbmxpbmUtYW5pbWF0ZVxcXCIpO3JldHVybiBhLnB1c2goYyxcXFwiYW5pbWF0ZVxcXCIsayl9fX1dfV0sZWE9SihcXFwiJGNvbXBpbGVcXFwiKTtFYy4kaW5qZWN0PVtcXFwiJHByb3ZpZGVcXFwiLFxcXCIkJHNhbml0aXplVXJpUHJvdmlkZXJcXFwiXTt2YXIgWmM9L14oKD86eHxkYXRhKVtcXFxcOlxcXFwtX10pL2ksT2Y9SihcXFwiJGNvbnRyb2xsZXJcXFwiKSxYYz0vXihcXFxcUyspKFxcXFxzK2FzXFxcXHMrKFxcXFx3KykpPyQvLGNkPVxcXCJhcHBsaWNhdGlvbi9qc29uXFxcIixhYz17XFxcIkNvbnRlbnQtVHlwZVxcXCI6Y2QrXFxcIjtjaGFyc2V0PXV0Zi04XFxcIn0sUWY9L15cXFxcW3xeXFxcXHsoPyFcXFxceykvLFJmPXtcXFwiW1xcXCI6L10kLyxcXFwie1xcXCI6L30kL30sUGY9L15cXFxcKVxcXFxdXFxcXH0nLD9cXFxcbi8sXFxuS2E9Y2EuJGludGVycG9sYXRlTWluRXJyPUooXFxcIiRpbnRlcnBvbGF0ZVxcXCIpO0thLnRocm93Tm9jb25jYXQ9ZnVuY3Rpb24oYSl7dGhyb3cgS2EoXFxcIm5vY29uY2F0XFxcIixhKTt9O0thLmludGVycj1mdW5jdGlvbihhLGMpe3JldHVybiBLYShcXFwiaW50ZXJyXFxcIixhLGMudG9TdHJpbmcoKSl9O3ZhciBwZz0vXihbXlxcXFw/I10qKShcXFxcPyhbXiNdKikpPygjKC4qKSk/JC8sVWY9e2h0dHA6ODAsaHR0cHM6NDQzLGZ0cDoyMX0sQ2I9SihcXFwiJGxvY2F0aW9uXFxcIikscWc9eyQkaHRtbDU6ITEsJCRyZXBsYWNlOiExLGFic1VybDpEYihcXFwiJCRhYnNVcmxcXFwiKSx1cmw6ZnVuY3Rpb24oYSl7aWYoQShhKSlyZXR1cm4gdGhpcy4kJHVybDt2YXIgYz1wZy5leGVjKGEpOyhjWzFdfHxcXFwiXFxcIj09PWEpJiZ0aGlzLnBhdGgoZGVjb2RlVVJJQ29tcG9uZW50KGNbMV0pKTsoY1syXXx8Y1sxXXx8XFxcIlxcXCI9PT1hKSYmdGhpcy5zZWFyY2goY1szXXx8XFxcIlxcXCIpO3RoaXMuaGFzaChjWzVdfHxcXFwiXFxcIik7cmV0dXJuIHRoaXN9LHByb3RvY29sOkRiKFxcXCIkJHByb3RvY29sXFxcIiksXFxuaG9zdDpEYihcXFwiJCRob3N0XFxcIikscG9ydDpEYihcXFwiJCRwb3J0XFxcIikscGF0aDprZChcXFwiJCRwYXRoXFxcIixmdW5jdGlvbihhKXthPW51bGwhPT1hP2EudG9TdHJpbmcoKTpcXFwiXFxcIjtyZXR1cm5cXFwiL1xcXCI9PWEuY2hhckF0KDApP2E6XFxcIi9cXFwiK2F9KSxzZWFyY2g6ZnVuY3Rpb24oYSxjKXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0aGlzLiQkc2VhcmNoO2Nhc2UgMTppZihMKGEpfHxWKGEpKWE9YS50b1N0cmluZygpLHRoaXMuJCRzZWFyY2g9emMoYSk7ZWxzZSBpZihIKGEpKWE9ZmEoYSx7fSksbShhLGZ1bmN0aW9uKGMsZSl7bnVsbD09YyYmZGVsZXRlIGFbZV19KSx0aGlzLiQkc2VhcmNoPWE7ZWxzZSB0aHJvdyBDYihcXFwiaXNyY2hhcmdcXFwiKTticmVhaztkZWZhdWx0OkEoYyl8fG51bGw9PT1jP2RlbGV0ZSB0aGlzLiQkc2VhcmNoW2FdOnRoaXMuJCRzZWFyY2hbYV09Y310aGlzLiQkY29tcG9zZSgpO3JldHVybiB0aGlzfSxoYXNoOmtkKFxcXCIkJGhhc2hcXFwiLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT09XFxuYT9hLnRvU3RyaW5nKCk6XFxcIlxcXCJ9KSxyZXBsYWNlOmZ1bmN0aW9uKCl7dGhpcy4kJHJlcGxhY2U9ITA7cmV0dXJuIHRoaXN9fTttKFtqZCxlYyxkY10sZnVuY3Rpb24oYSl7YS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShxZyk7YS5wcm90b3R5cGUuc3RhdGU9ZnVuY3Rpb24oYyl7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuJCRzdGF0ZTtpZihhIT09ZGN8fCF0aGlzLiQkaHRtbDUpdGhyb3cgQ2IoXFxcIm5vc3RhdGVcXFwiKTt0aGlzLiQkc3RhdGU9QShjKT9udWxsOmM7cmV0dXJuIHRoaXN9fSk7dmFyIGRhPUooXFxcIiRwYXJzZVxcXCIpLFZmPUZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLFdmPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSxYZj1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCxNYj1nYSgpO20oXFxcIisgLSAqIC8gJSA9PT0gIT09ID09ICE9IDwgPiA8PSA+PSAmJiB8fCAhID0gfFxcXCIuc3BsaXQoXFxcIiBcXFwiKSxmdW5jdGlvbihhKXtNYlthXT0hMH0pO3ZhciByZz17bjpcXFwiXFxcXG5cXFwiLGY6XFxcIlxcXFxmXFxcIixyOlxcXCJcXFxcclxcXCIsXFxudDpcXFwiXFxcXHRcXFwiLHY6XFxcIlxcXFx2XFxcIixcXFwiJ1xcXCI6XFxcIidcXFwiLCdcXFwiJzonXFxcIid9LGdjPWZ1bmN0aW9uKGEpe3RoaXMub3B0aW9ucz1hfTtnYy5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmdjLGxleDpmdW5jdGlvbihhKXt0aGlzLnRleHQ9YTt0aGlzLmluZGV4PTA7Zm9yKHRoaXMudG9rZW5zPVtdO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspaWYoYT10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpLCdcXFwiJz09PWF8fFxcXCInXFxcIj09PWEpdGhpcy5yZWFkU3RyaW5nKGEpO2Vsc2UgaWYodGhpcy5pc051bWJlcihhKXx8XFxcIi5cXFwiPT09YSYmdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpdGhpcy5yZWFkTnVtYmVyKCk7ZWxzZSBpZih0aGlzLmlzSWRlbnQoYSkpdGhpcy5yZWFkSWRlbnQoKTtlbHNlIGlmKHRoaXMuaXMoYSxcXFwiKCl7fVtdLiw7Oj9cXFwiKSl0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6YX0pLHRoaXMuaW5kZXgrKztlbHNlIGlmKHRoaXMuaXNXaGl0ZXNwYWNlKGEpKXRoaXMuaW5kZXgrKztcXG5lbHNle3ZhciBjPWErdGhpcy5wZWVrKCksZD1jK3RoaXMucGVlaygyKSxlPU1iW2NdLGY9TWJbZF07TWJbYV18fGV8fGY/KGE9Zj9kOmU/YzphLHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDphLG9wZXJhdG9yOiEwfSksdGhpcy5pbmRleCs9YS5sZW5ndGgpOnRoaXMudGhyb3dFcnJvcihcXFwiVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciBcXFwiLHRoaXMuaW5kZXgsdGhpcy5pbmRleCsxKX1yZXR1cm4gdGhpcy50b2tlbnN9LGlzOmZ1bmN0aW9uKGEsYyl7cmV0dXJuLTEhPT1jLmluZGV4T2YoYSl9LHBlZWs6ZnVuY3Rpb24oYSl7YT1hfHwxO3JldHVybiB0aGlzLmluZGV4K2E8dGhpcy50ZXh0Lmxlbmd0aD90aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgrYSk6ITF9LGlzTnVtYmVyOmZ1bmN0aW9uKGEpe3JldHVyblxcXCIwXFxcIjw9YSYmXFxcIjlcXFwiPj1hJiZcXFwic3RyaW5nXFxcIj09PXR5cGVvZiBhfSxpc1doaXRlc3BhY2U6ZnVuY3Rpb24oYSl7cmV0dXJuXFxcIiBcXFwiPT09YXx8XFxcIlxcXFxyXFxcIj09PWF8fFxcblxcXCJcXFxcdFxcXCI9PT1hfHxcXFwiXFxcXG5cXFwiPT09YXx8XFxcIlxcXFx2XFxcIj09PWF8fFxcXCJcXFxcdTAwYTBcXFwiPT09YX0saXNJZGVudDpmdW5jdGlvbihhKXtyZXR1cm5cXFwiYVxcXCI8PWEmJlxcXCJ6XFxcIj49YXx8XFxcIkFcXFwiPD1hJiZcXFwiWlxcXCI+PWF8fFxcXCJfXFxcIj09PWF8fFxcXCIkXFxcIj09PWF9LGlzRXhwT3BlcmF0b3I6ZnVuY3Rpb24oYSl7cmV0dXJuXFxcIi1cXFwiPT09YXx8XFxcIitcXFwiPT09YXx8dGhpcy5pc051bWJlcihhKX0sdGhyb3dFcnJvcjpmdW5jdGlvbihhLGMsZCl7ZD1kfHx0aGlzLmluZGV4O2M9dyhjKT9cXFwicyBcXFwiK2MrXFxcIi1cXFwiK3RoaXMuaW5kZXgrXFxcIiBbXFxcIit0aGlzLnRleHQuc3Vic3RyaW5nKGMsZCkrXFxcIl1cXFwiOlxcXCIgXFxcIitkO3Rocm93IGRhKFxcXCJsZXhlcnJcXFwiLGEsYyx0aGlzLnRleHQpO30scmVhZE51bWJlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT1cXFwiXFxcIixjPXRoaXMuaW5kZXg7dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7dmFyIGQ9TSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtpZihcXFwiLlxcXCI9PWR8fHRoaXMuaXNOdW1iZXIoZCkpYSs9ZDtlbHNle3ZhciBlPXRoaXMucGVlaygpO1xcbmlmKFxcXCJlXFxcIj09ZCYmdGhpcy5pc0V4cE9wZXJhdG9yKGUpKWErPWQ7ZWxzZSBpZih0aGlzLmlzRXhwT3BlcmF0b3IoZCkmJmUmJnRoaXMuaXNOdW1iZXIoZSkmJlxcXCJlXFxcIj09YS5jaGFyQXQoYS5sZW5ndGgtMSkpYSs9ZDtlbHNlIGlmKCF0aGlzLmlzRXhwT3BlcmF0b3IoZCl8fGUmJnRoaXMuaXNOdW1iZXIoZSl8fFxcXCJlXFxcIiE9YS5jaGFyQXQoYS5sZW5ndGgtMSkpYnJlYWs7ZWxzZSB0aGlzLnRocm93RXJyb3IoXFxcIkludmFsaWQgZXhwb25lbnRcXFwiKX10aGlzLmluZGV4Kyt9dGhpcy50b2tlbnMucHVzaCh7aW5kZXg6Yyx0ZXh0OmEsY29uc3RhbnQ6ITAsdmFsdWU6TnVtYmVyKGEpfSl9LHJlYWRJZGVudDpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmluZGV4O3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3ZhciBjPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7aWYoIXRoaXMuaXNJZGVudChjKSYmIXRoaXMuaXNOdW1iZXIoYykpYnJlYWs7dGhpcy5pbmRleCsrfXRoaXMudG9rZW5zLnB1c2goe2luZGV4OmEsXFxudGV4dDp0aGlzLnRleHQuc2xpY2UoYSx0aGlzLmluZGV4KSxpZGVudGlmaWVyOiEwfSl9LHJlYWRTdHJpbmc6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcy5pbmRleDt0aGlzLmluZGV4Kys7Zm9yKHZhciBkPVxcXCJcXFwiLGU9YSxmPSExO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3ZhciBnPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCksZT1lK2c7aWYoZilcXFwidVxcXCI9PT1nPyhmPXRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCsxLHRoaXMuaW5kZXgrNSksZi5tYXRjaCgvW1xcXFxkYS1mXXs0fS9pKXx8dGhpcy50aHJvd0Vycm9yKFxcXCJJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcXFxcXHVcXFwiK2YrXFxcIl1cXFwiKSx0aGlzLmluZGV4Kz00LGQrPVN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZiwxNikpKTpkKz1yZ1tnXXx8ZyxmPSExO2Vsc2UgaWYoXFxcIlxcXFxcXFxcXFxcIj09PWcpZj0hMDtlbHNle2lmKGc9PT1hKXt0aGlzLmluZGV4Kys7dGhpcy50b2tlbnMucHVzaCh7aW5kZXg6Yyx0ZXh0OmUsY29uc3RhbnQ6ITAsXFxudmFsdWU6ZH0pO3JldHVybn1kKz1nfXRoaXMuaW5kZXgrK310aGlzLnRocm93RXJyb3IoXFxcIlVudGVybWluYXRlZCBxdW90ZVxcXCIsYyl9fTt2YXIgcT1mdW5jdGlvbihhLGMpe3RoaXMubGV4ZXI9YTt0aGlzLm9wdGlvbnM9Y307cS5Qcm9ncmFtPVxcXCJQcm9ncmFtXFxcIjtxLkV4cHJlc3Npb25TdGF0ZW1lbnQ9XFxcIkV4cHJlc3Npb25TdGF0ZW1lbnRcXFwiO3EuQXNzaWdubWVudEV4cHJlc3Npb249XFxcIkFzc2lnbm1lbnRFeHByZXNzaW9uXFxcIjtxLkNvbmRpdGlvbmFsRXhwcmVzc2lvbj1cXFwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXFxcIjtxLkxvZ2ljYWxFeHByZXNzaW9uPVxcXCJMb2dpY2FsRXhwcmVzc2lvblxcXCI7cS5CaW5hcnlFeHByZXNzaW9uPVxcXCJCaW5hcnlFeHByZXNzaW9uXFxcIjtxLlVuYXJ5RXhwcmVzc2lvbj1cXFwiVW5hcnlFeHByZXNzaW9uXFxcIjtxLkNhbGxFeHByZXNzaW9uPVxcXCJDYWxsRXhwcmVzc2lvblxcXCI7cS5NZW1iZXJFeHByZXNzaW9uPVxcXCJNZW1iZXJFeHByZXNzaW9uXFxcIjtxLklkZW50aWZpZXI9XFxcIklkZW50aWZpZXJcXFwiO3EuTGl0ZXJhbD1cXG5cXFwiTGl0ZXJhbFxcXCI7cS5BcnJheUV4cHJlc3Npb249XFxcIkFycmF5RXhwcmVzc2lvblxcXCI7cS5Qcm9wZXJ0eT1cXFwiUHJvcGVydHlcXFwiO3EuT2JqZWN0RXhwcmVzc2lvbj1cXFwiT2JqZWN0RXhwcmVzc2lvblxcXCI7cS5UaGlzRXhwcmVzc2lvbj1cXFwiVGhpc0V4cHJlc3Npb25cXFwiO3EuTkdWYWx1ZVBhcmFtZXRlcj1cXFwiTkdWYWx1ZVBhcmFtZXRlclxcXCI7cS5wcm90b3R5cGU9e2FzdDpmdW5jdGlvbihhKXt0aGlzLnRleHQ9YTt0aGlzLnRva2Vucz10aGlzLmxleGVyLmxleChhKTthPXRoaXMucHJvZ3JhbSgpOzAhPT10aGlzLnRva2Vucy5sZW5ndGgmJnRoaXMudGhyb3dFcnJvcihcXFwiaXMgYW4gdW5leHBlY3RlZCB0b2tlblxcXCIsdGhpcy50b2tlbnNbMF0pO3JldHVybiBhfSxwcm9ncmFtOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdOzspaWYoMDx0aGlzLnRva2Vucy5sZW5ndGgmJiF0aGlzLnBlZWsoXFxcIn1cXFwiLFxcXCIpXFxcIixcXFwiO1xcXCIsXFxcIl1cXFwiKSYmYS5wdXNoKHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpKSwhdGhpcy5leHBlY3QoXFxcIjtcXFwiKSlyZXR1cm57dHlwZTpxLlByb2dyYW0sXFxuYm9keTphfX0sZXhwcmVzc2lvblN0YXRlbWVudDpmdW5jdGlvbigpe3JldHVybnt0eXBlOnEuRXhwcmVzc2lvblN0YXRlbWVudCxleHByZXNzaW9uOnRoaXMuZmlsdGVyQ2hhaW4oKX19LGZpbHRlckNoYWluOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuZXhwcmVzc2lvbigpO3RoaXMuZXhwZWN0KFxcXCJ8XFxcIik7KWE9dGhpcy5maWx0ZXIoYSk7cmV0dXJuIGF9LGV4cHJlc3Npb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hc3NpZ25tZW50KCl9LGFzc2lnbm1lbnQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRlcm5hcnkoKTt0aGlzLmV4cGVjdChcXFwiPVxcXCIpJiYoYT17dHlwZTpxLkFzc2lnbm1lbnRFeHByZXNzaW9uLGxlZnQ6YSxyaWdodDp0aGlzLmFzc2lnbm1lbnQoKSxvcGVyYXRvcjpcXFwiPVxcXCJ9KTtyZXR1cm4gYX0sdGVybmFyeTpmdW5jdGlvbigpe3ZhciBhPXRoaXMubG9naWNhbE9SKCksYyxkO3JldHVybiB0aGlzLmV4cGVjdChcXFwiP1xcXCIpJiYoYz10aGlzLmV4cHJlc3Npb24oKSx0aGlzLmNvbnN1bWUoXFxcIjpcXFwiKSk/XFxuKGQ9dGhpcy5leHByZXNzaW9uKCkse3R5cGU6cS5Db25kaXRpb25hbEV4cHJlc3Npb24sdGVzdDphLGFsdGVybmF0ZTpjLGNvbnNlcXVlbnQ6ZH0pOmF9LGxvZ2ljYWxPUjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmxvZ2ljYWxBTkQoKTt0aGlzLmV4cGVjdChcXFwifHxcXFwiKTspYT17dHlwZTpxLkxvZ2ljYWxFeHByZXNzaW9uLG9wZXJhdG9yOlxcXCJ8fFxcXCIsbGVmdDphLHJpZ2h0OnRoaXMubG9naWNhbEFORCgpfTtyZXR1cm4gYX0sbG9naWNhbEFORDpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmVxdWFsaXR5KCk7dGhpcy5leHBlY3QoXFxcIiYmXFxcIik7KWE9e3R5cGU6cS5Mb2dpY2FsRXhwcmVzc2lvbixvcGVyYXRvcjpcXFwiJiZcXFwiLGxlZnQ6YSxyaWdodDp0aGlzLmVxdWFsaXR5KCl9O3JldHVybiBhfSxlcXVhbGl0eTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLnJlbGF0aW9uYWwoKSxjO2M9dGhpcy5leHBlY3QoXFxcIj09XFxcIixcXFwiIT1cXFwiLFxcXCI9PT1cXFwiLFxcXCIhPT1cXFwiKTspYT17dHlwZTpxLkJpbmFyeUV4cHJlc3Npb24sXFxub3BlcmF0b3I6Yy50ZXh0LGxlZnQ6YSxyaWdodDp0aGlzLnJlbGF0aW9uYWwoKX07cmV0dXJuIGF9LHJlbGF0aW9uYWw6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5hZGRpdGl2ZSgpLGM7Yz10aGlzLmV4cGVjdChcXFwiPFxcXCIsXFxcIj5cXFwiLFxcXCI8PVxcXCIsXFxcIj49XFxcIik7KWE9e3R5cGU6cS5CaW5hcnlFeHByZXNzaW9uLG9wZXJhdG9yOmMudGV4dCxsZWZ0OmEscmlnaHQ6dGhpcy5hZGRpdGl2ZSgpfTtyZXR1cm4gYX0sYWRkaXRpdmU6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5tdWx0aXBsaWNhdGl2ZSgpLGM7Yz10aGlzLmV4cGVjdChcXFwiK1xcXCIsXFxcIi1cXFwiKTspYT17dHlwZTpxLkJpbmFyeUV4cHJlc3Npb24sb3BlcmF0b3I6Yy50ZXh0LGxlZnQ6YSxyaWdodDp0aGlzLm11bHRpcGxpY2F0aXZlKCl9O3JldHVybiBhfSxtdWx0aXBsaWNhdGl2ZTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLnVuYXJ5KCksYztjPXRoaXMuZXhwZWN0KFxcXCIqXFxcIixcXFwiL1xcXCIsXFxcIiVcXFwiKTspYT17dHlwZTpxLkJpbmFyeUV4cHJlc3Npb24sb3BlcmF0b3I6Yy50ZXh0LFxcbmxlZnQ6YSxyaWdodDp0aGlzLnVuYXJ5KCl9O3JldHVybiBhfSx1bmFyeTpmdW5jdGlvbigpe3ZhciBhO3JldHVybihhPXRoaXMuZXhwZWN0KFxcXCIrXFxcIixcXFwiLVxcXCIsXFxcIiFcXFwiKSk/e3R5cGU6cS5VbmFyeUV4cHJlc3Npb24sb3BlcmF0b3I6YS50ZXh0LHByZWZpeDohMCxhcmd1bWVudDp0aGlzLnVuYXJ5KCl9OnRoaXMucHJpbWFyeSgpfSxwcmltYXJ5OmZ1bmN0aW9uKCl7dmFyIGE7dGhpcy5leHBlY3QoXFxcIihcXFwiKT8oYT10aGlzLmZpbHRlckNoYWluKCksdGhpcy5jb25zdW1lKFxcXCIpXFxcIikpOnRoaXMuZXhwZWN0KFxcXCJbXFxcIik/YT10aGlzLmFycmF5RGVjbGFyYXRpb24oKTp0aGlzLmV4cGVjdChcXFwie1xcXCIpP2E9dGhpcy5vYmplY3QoKTp0aGlzLmNvbnN0YW50cy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KT9hPWZhKHRoaXMuY29uc3RhbnRzW3RoaXMuY29uc3VtZSgpLnRleHRdKTp0aGlzLnBlZWsoKS5pZGVudGlmaWVyP2E9dGhpcy5pZGVudGlmaWVyKCk6dGhpcy5wZWVrKCkuY29uc3RhbnQ/YT10aGlzLmNvbnN0YW50KCk6XFxudGhpcy50aHJvd0Vycm9yKFxcXCJub3QgYSBwcmltYXJ5IGV4cHJlc3Npb25cXFwiLHRoaXMucGVlaygpKTtmb3IodmFyIGM7Yz10aGlzLmV4cGVjdChcXFwiKFxcXCIsXFxcIltcXFwiLFxcXCIuXFxcIik7KVxcXCIoXFxcIj09PWMudGV4dD8oYT17dHlwZTpxLkNhbGxFeHByZXNzaW9uLGNhbGxlZTphLGFyZ3VtZW50czp0aGlzLnBhcnNlQXJndW1lbnRzKCl9LHRoaXMuY29uc3VtZShcXFwiKVxcXCIpKTpcXFwiW1xcXCI9PT1jLnRleHQ/KGE9e3R5cGU6cS5NZW1iZXJFeHByZXNzaW9uLG9iamVjdDphLHByb3BlcnR5OnRoaXMuZXhwcmVzc2lvbigpLGNvbXB1dGVkOiEwfSx0aGlzLmNvbnN1bWUoXFxcIl1cXFwiKSk6XFxcIi5cXFwiPT09Yy50ZXh0P2E9e3R5cGU6cS5NZW1iZXJFeHByZXNzaW9uLG9iamVjdDphLHByb3BlcnR5OnRoaXMuaWRlbnRpZmllcigpLGNvbXB1dGVkOiExfTp0aGlzLnRocm93RXJyb3IoXFxcIklNUE9TU0lCTEVcXFwiKTtyZXR1cm4gYX0sZmlsdGVyOmZ1bmN0aW9uKGEpe2E9W2FdO2Zvcih2YXIgYz17dHlwZTpxLkNhbGxFeHByZXNzaW9uLGNhbGxlZTp0aGlzLmlkZW50aWZpZXIoKSxcXG5hcmd1bWVudHM6YSxmaWx0ZXI6ITB9O3RoaXMuZXhwZWN0KFxcXCI6XFxcIik7KWEucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7cmV0dXJuIGN9LHBhcnNlQXJndW1lbnRzOmZ1bmN0aW9uKCl7dmFyIGE9W107aWYoXFxcIilcXFwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkbyBhLnB1c2godGhpcy5leHByZXNzaW9uKCkpO3doaWxlKHRoaXMuZXhwZWN0KFxcXCIsXFxcIikpfXJldHVybiBhfSxpZGVudGlmaWVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jb25zdW1lKCk7YS5pZGVudGlmaWVyfHx0aGlzLnRocm93RXJyb3IoXFxcImlzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXJcXFwiLGEpO3JldHVybnt0eXBlOnEuSWRlbnRpZmllcixuYW1lOmEudGV4dH19LGNvbnN0YW50OmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cS5MaXRlcmFsLHZhbHVlOnRoaXMuY29uc3VtZSgpLnZhbHVlfX0sYXJyYXlEZWNsYXJhdGlvbjpmdW5jdGlvbigpe3ZhciBhPVtdO2lmKFxcXCJdXFxcIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG97aWYodGhpcy5wZWVrKFxcXCJdXFxcIikpYnJlYWs7XFxuYS5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKX13aGlsZSh0aGlzLmV4cGVjdChcXFwiLFxcXCIpKX10aGlzLmNvbnN1bWUoXFxcIl1cXFwiKTtyZXR1cm57dHlwZTpxLkFycmF5RXhwcmVzc2lvbixlbGVtZW50czphfX0sb2JqZWN0OmZ1bmN0aW9uKCl7dmFyIGE9W10sYztpZihcXFwifVxcXCIhPT10aGlzLnBlZWtUb2tlbigpLnRleHQpe2Rve2lmKHRoaXMucGVlayhcXFwifVxcXCIpKWJyZWFrO2M9e3R5cGU6cS5Qcm9wZXJ0eSxraW5kOlxcXCJpbml0XFxcIn07dGhpcy5wZWVrKCkuY29uc3RhbnQ/Yy5rZXk9dGhpcy5jb25zdGFudCgpOnRoaXMucGVlaygpLmlkZW50aWZpZXI/Yy5rZXk9dGhpcy5pZGVudGlmaWVyKCk6dGhpcy50aHJvd0Vycm9yKFxcXCJpbnZhbGlkIGtleVxcXCIsdGhpcy5wZWVrKCkpO3RoaXMuY29uc3VtZShcXFwiOlxcXCIpO2MudmFsdWU9dGhpcy5leHByZXNzaW9uKCk7YS5wdXNoKGMpfXdoaWxlKHRoaXMuZXhwZWN0KFxcXCIsXFxcIikpfXRoaXMuY29uc3VtZShcXFwifVxcXCIpO3JldHVybnt0eXBlOnEuT2JqZWN0RXhwcmVzc2lvbixwcm9wZXJ0aWVzOmF9fSxcXG50aHJvd0Vycm9yOmZ1bmN0aW9uKGEsYyl7dGhyb3cgZGEoXFxcInN5bnRheFxcXCIsYy50ZXh0LGEsYy5pbmRleCsxLHRoaXMudGV4dCx0aGlzLnRleHQuc3Vic3RyaW5nKGMuaW5kZXgpKTt9LGNvbnN1bWU6ZnVuY3Rpb24oYSl7aWYoMD09PXRoaXMudG9rZW5zLmxlbmd0aCl0aHJvdyBkYShcXFwidWVvZVxcXCIsdGhpcy50ZXh0KTt2YXIgYz10aGlzLmV4cGVjdChhKTtjfHx0aGlzLnRocm93RXJyb3IoXFxcImlzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbXFxcIithK1xcXCJdXFxcIix0aGlzLnBlZWsoKSk7cmV0dXJuIGN9LHBlZWtUb2tlbjpmdW5jdGlvbigpe2lmKDA9PT10aGlzLnRva2Vucy5sZW5ndGgpdGhyb3cgZGEoXFxcInVlb2VcXFwiLHRoaXMudGV4dCk7cmV0dXJuIHRoaXMudG9rZW5zWzBdfSxwZWVrOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiB0aGlzLnBlZWtBaGVhZCgwLGEsYyxkLGUpfSxwZWVrQWhlYWQ6ZnVuY3Rpb24oYSxjLGQsZSxmKXtpZih0aGlzLnRva2Vucy5sZW5ndGg+YSl7YT10aGlzLnRva2Vuc1thXTtcXG52YXIgZz1hLnRleHQ7aWYoZz09PWN8fGc9PT1kfHxnPT09ZXx8Zz09PWZ8fCEoY3x8ZHx8ZXx8ZikpcmV0dXJuIGF9cmV0dXJuITF9LGV4cGVjdDpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4oYT10aGlzLnBlZWsoYSxjLGQsZSkpPyh0aGlzLnRva2Vucy5zaGlmdCgpLGEpOiExfSxjb25zdGFudHM6e1xcXCJ0cnVlXFxcIjp7dHlwZTpxLkxpdGVyYWwsdmFsdWU6ITB9LFxcXCJmYWxzZVxcXCI6e3R5cGU6cS5MaXRlcmFsLHZhbHVlOiExfSxcXFwibnVsbFxcXCI6e3R5cGU6cS5MaXRlcmFsLHZhbHVlOm51bGx9LHVuZGVmaW5lZDp7dHlwZTpxLkxpdGVyYWwsdmFsdWU6dH0sXFxcInRoaXNcXFwiOnt0eXBlOnEuVGhpc0V4cHJlc3Npb259fX07cmQucHJvdG90eXBlPXtjb21waWxlOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcyxlPXRoaXMuYXN0QnVpbGRlci5hc3QoYSk7dGhpcy5zdGF0ZT17bmV4dElkOjAsZmlsdGVyczp7fSxleHBlbnNpdmVDaGVja3M6Yyxmbjp7dmFyczpbXSxib2R5OltdLG93bjp7fX0sYXNzaWduOnt2YXJzOltdLFxcbmJvZHk6W10sb3duOnt9fSxpbnB1dHM6W119O1QoZSxkLiRmaWx0ZXIpO3ZhciBmPVxcXCJcXFwiLGc7dGhpcy5zdGFnZT1cXFwiYXNzaWduXFxcIjtpZihnPXBkKGUpKXRoaXMuc3RhdGUuY29tcHV0aW5nPVxcXCJhc3NpZ25cXFwiLGY9dGhpcy5uZXh0SWQoKSx0aGlzLnJlY3Vyc2UoZyxmKSxmPVxcXCJmbi5hc3NpZ249XFxcIit0aGlzLmdlbmVyYXRlRnVuY3Rpb24oXFxcImFzc2lnblxcXCIsXFxcInMsdixsXFxcIik7Zz1uZChlLmJvZHkpO2Quc3RhZ2U9XFxcImlucHV0c1xcXCI7bShnLGZ1bmN0aW9uKGEsYyl7dmFyIGU9XFxcImZuXFxcIitjO2Quc3RhdGVbZV09e3ZhcnM6W10sYm9keTpbXSxvd246e319O2Quc3RhdGUuY29tcHV0aW5nPWU7dmFyIGY9ZC5uZXh0SWQoKTtkLnJlY3Vyc2UoYSxmKTtkLnJldHVybl8oZik7ZC5zdGF0ZS5pbnB1dHMucHVzaChlKTthLndhdGNoSWQ9Y30pO3RoaXMuc3RhdGUuY29tcHV0aW5nPVxcXCJmblxcXCI7dGhpcy5zdGFnZT1cXFwibWFpblxcXCI7dGhpcy5yZWN1cnNlKGUpO2Y9J1xcXCInK3RoaXMuVVNFK1xcXCIgXFxcIit0aGlzLlNUUklDVCsnXFxcIjtcXFxcbicrdGhpcy5maWx0ZXJQcmVmaXgoKStcXG5cXFwidmFyIGZuPVxcXCIrdGhpcy5nZW5lcmF0ZUZ1bmN0aW9uKFxcXCJmblxcXCIsXFxcInMsbCxhLGlcXFwiKStmK3RoaXMud2F0Y2hGbnMoKStcXFwicmV0dXJuIGZuO1xcXCI7Zj0obmV3IEZ1bmN0aW9uKFxcXCIkZmlsdGVyXFxcIixcXFwiZW5zdXJlU2FmZU1lbWJlck5hbWVcXFwiLFxcXCJlbnN1cmVTYWZlT2JqZWN0XFxcIixcXFwiZW5zdXJlU2FmZUZ1bmN0aW9uXFxcIixcXFwiaWZEZWZpbmVkXFxcIixcXFwicGx1c1xcXCIsXFxcInRleHRcXFwiLGYpKSh0aGlzLiRmaWx0ZXIsQ2Esb2EsbGQsWWYsbWQsYSk7dGhpcy5zdGF0ZT10aGlzLnN0YWdlPXQ7Zi5saXRlcmFsPXFkKGUpO2YuY29uc3RhbnQ9ZS5jb25zdGFudDtyZXR1cm4gZn0sVVNFOlxcXCJ1c2VcXFwiLFNUUklDVDpcXFwic3RyaWN0XFxcIix3YXRjaEZuczpmdW5jdGlvbigpe3ZhciBhPVtdLGM9dGhpcy5zdGF0ZS5pbnB1dHMsZD10aGlzO20oYyxmdW5jdGlvbihjKXthLnB1c2goXFxcInZhciBcXFwiK2MrXFxcIj1cXFwiK2QuZ2VuZXJhdGVGdW5jdGlvbihjLFxcXCJzXFxcIikpfSk7Yy5sZW5ndGgmJmEucHVzaChcXFwiZm4uaW5wdXRzPVtcXFwiK2Muam9pbihcXFwiLFxcXCIpK1xcXCJdO1xcXCIpO3JldHVybiBhLmpvaW4oXFxcIlxcXCIpfSxcXG5nZW5lcmF0ZUZ1bmN0aW9uOmZ1bmN0aW9uKGEsYyl7cmV0dXJuXFxcImZ1bmN0aW9uKFxcXCIrYytcXFwiKXtcXFwiK3RoaXMudmFyc1ByZWZpeChhKSt0aGlzLmJvZHkoYSkrXFxcIn07XFxcIn0sZmlsdGVyUHJlZml4OmZ1bmN0aW9uKCl7dmFyIGE9W10sYz10aGlzO20odGhpcy5zdGF0ZS5maWx0ZXJzLGZ1bmN0aW9uKGQsZSl7YS5wdXNoKGQrXFxcIj0kZmlsdGVyKFxcXCIrYy5lc2NhcGUoZSkrXFxcIilcXFwiKX0pO3JldHVybiBhLmxlbmd0aD9cXFwidmFyIFxcXCIrYS5qb2luKFxcXCIsXFxcIikrXFxcIjtcXFwiOlxcXCJcXFwifSx2YXJzUHJlZml4OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnN0YXRlW2FdLnZhcnMubGVuZ3RoP1xcXCJ2YXIgXFxcIit0aGlzLnN0YXRlW2FdLnZhcnMuam9pbihcXFwiLFxcXCIpK1xcXCI7XFxcIjpcXFwiXFxcIn0sYm9keTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zdGF0ZVthXS5ib2R5LmpvaW4oXFxcIlxcXCIpfSxyZWN1cnNlOmZ1bmN0aW9uKGEsYyxkLGUsZixnKXt2YXIgaCxsLGs9dGhpcyxuLHI7ZT1lfHx2O2lmKCFnJiZ3KGEud2F0Y2hJZCkpYz1jfHx0aGlzLm5leHRJZCgpLHRoaXMuaWZfKFxcXCJpXFxcIixcXG50aGlzLmxhenlBc3NpZ24oYyx0aGlzLmNvbXB1dGVkTWVtYmVyKFxcXCJpXFxcIixhLndhdGNoSWQpKSx0aGlzLmxhenlSZWN1cnNlKGEsYyxkLGUsZiwhMCkpO2Vsc2Ugc3dpdGNoKGEudHlwZSl7Y2FzZSBxLlByb2dyYW06bShhLmJvZHksZnVuY3Rpb24oYyxkKXtrLnJlY3Vyc2UoYy5leHByZXNzaW9uLHQsdCxmdW5jdGlvbihhKXtsPWF9KTtkIT09YS5ib2R5Lmxlbmd0aC0xP2suY3VycmVudCgpLmJvZHkucHVzaChsLFxcXCI7XFxcIik6ay5yZXR1cm5fKGwpfSk7YnJlYWs7Y2FzZSBxLkxpdGVyYWw6cj10aGlzLmVzY2FwZShhLnZhbHVlKTt0aGlzLmFzc2lnbihjLHIpO2Uocik7YnJlYWs7Y2FzZSBxLlVuYXJ5RXhwcmVzc2lvbjp0aGlzLnJlY3Vyc2UoYS5hcmd1bWVudCx0LHQsZnVuY3Rpb24oYSl7bD1hfSk7cj1hLm9wZXJhdG9yK1xcXCIoXFxcIit0aGlzLmlmRGVmaW5lZChsLDApK1xcXCIpXFxcIjt0aGlzLmFzc2lnbihjLHIpO2Uocik7YnJlYWs7Y2FzZSBxLkJpbmFyeUV4cHJlc3Npb246dGhpcy5yZWN1cnNlKGEubGVmdCxcXG50LHQsZnVuY3Rpb24oYSl7aD1hfSk7dGhpcy5yZWN1cnNlKGEucmlnaHQsdCx0LGZ1bmN0aW9uKGEpe2w9YX0pO3I9XFxcIitcXFwiPT09YS5vcGVyYXRvcj90aGlzLnBsdXMoaCxsKTpcXFwiLVxcXCI9PT1hLm9wZXJhdG9yP3RoaXMuaWZEZWZpbmVkKGgsMCkrYS5vcGVyYXRvcit0aGlzLmlmRGVmaW5lZChsLDApOlxcXCIoXFxcIitoK1xcXCIpXFxcIithLm9wZXJhdG9yK1xcXCIoXFxcIitsK1xcXCIpXFxcIjt0aGlzLmFzc2lnbihjLHIpO2Uocik7YnJlYWs7Y2FzZSBxLkxvZ2ljYWxFeHByZXNzaW9uOmM9Y3x8dGhpcy5uZXh0SWQoKTtrLnJlY3Vyc2UoYS5sZWZ0LGMpO2suaWZfKFxcXCImJlxcXCI9PT1hLm9wZXJhdG9yP2M6ay5ub3QoYyksay5sYXp5UmVjdXJzZShhLnJpZ2h0LGMpKTtlKGMpO2JyZWFrO2Nhc2UgcS5Db25kaXRpb25hbEV4cHJlc3Npb246Yz1jfHx0aGlzLm5leHRJZCgpO2sucmVjdXJzZShhLnRlc3QsYyk7ay5pZl8oYyxrLmxhenlSZWN1cnNlKGEuYWx0ZXJuYXRlLGMpLGsubGF6eVJlY3Vyc2UoYS5jb25zZXF1ZW50LGMpKTtlKGMpO1xcbmJyZWFrO2Nhc2UgcS5JZGVudGlmaWVyOmM9Y3x8dGhpcy5uZXh0SWQoKTtkJiYoZC5jb250ZXh0PVxcXCJpbnB1dHNcXFwiPT09ay5zdGFnZT9cXFwic1xcXCI6dGhpcy5hc3NpZ24odGhpcy5uZXh0SWQoKSx0aGlzLmdldEhhc093blByb3BlcnR5KFxcXCJsXFxcIixhLm5hbWUpK1xcXCI/bDpzXFxcIiksZC5jb21wdXRlZD0hMSxkLm5hbWU9YS5uYW1lKTtDYShhLm5hbWUpO2suaWZfKFxcXCJpbnB1dHNcXFwiPT09ay5zdGFnZXx8ay5ub3Qoay5nZXRIYXNPd25Qcm9wZXJ0eShcXFwibFxcXCIsYS5uYW1lKSksZnVuY3Rpb24oKXtrLmlmXyhcXFwiaW5wdXRzXFxcIj09PWsuc3RhZ2V8fFxcXCJzXFxcIixmdW5jdGlvbigpe2YmJjEhPT1mJiZrLmlmXyhrLm5vdChrLm5vbkNvbXB1dGVkTWVtYmVyKFxcXCJzXFxcIixhLm5hbWUpKSxrLmxhenlBc3NpZ24oay5ub25Db21wdXRlZE1lbWJlcihcXFwic1xcXCIsYS5uYW1lKSxcXFwie31cXFwiKSk7ay5hc3NpZ24oYyxrLm5vbkNvbXB1dGVkTWVtYmVyKFxcXCJzXFxcIixhLm5hbWUpKX0pfSxjJiZrLmxhenlBc3NpZ24oYyxrLm5vbkNvbXB1dGVkTWVtYmVyKFxcXCJsXFxcIixcXG5hLm5hbWUpKSk7KGsuc3RhdGUuZXhwZW5zaXZlQ2hlY2tzfHxGYihhLm5hbWUpKSYmay5hZGRFbnN1cmVTYWZlT2JqZWN0KGMpO2UoYyk7YnJlYWs7Y2FzZSBxLk1lbWJlckV4cHJlc3Npb246aD1kJiYoZC5jb250ZXh0PXRoaXMubmV4dElkKCkpfHx0aGlzLm5leHRJZCgpO2M9Y3x8dGhpcy5uZXh0SWQoKTtrLnJlY3Vyc2UoYS5vYmplY3QsaCx0LGZ1bmN0aW9uKCl7ay5pZl8oay5ub3ROdWxsKGgpLGZ1bmN0aW9uKCl7aWYoYS5jb21wdXRlZClsPWsubmV4dElkKCksay5yZWN1cnNlKGEucHJvcGVydHksbCksay5hZGRFbnN1cmVTYWZlTWVtYmVyTmFtZShsKSxmJiYxIT09ZiYmay5pZl8oay5ub3Qoay5jb21wdXRlZE1lbWJlcihoLGwpKSxrLmxhenlBc3NpZ24oay5jb21wdXRlZE1lbWJlcihoLGwpLFxcXCJ7fVxcXCIpKSxyPWsuZW5zdXJlU2FmZU9iamVjdChrLmNvbXB1dGVkTWVtYmVyKGgsbCkpLGsuYXNzaWduKGMsciksZCYmKGQuY29tcHV0ZWQ9ITAsZC5uYW1lPWwpO2Vsc2V7Q2EoYS5wcm9wZXJ0eS5uYW1lKTtcXG5mJiYxIT09ZiYmay5pZl8oay5ub3Qoay5ub25Db21wdXRlZE1lbWJlcihoLGEucHJvcGVydHkubmFtZSkpLGsubGF6eUFzc2lnbihrLm5vbkNvbXB1dGVkTWVtYmVyKGgsYS5wcm9wZXJ0eS5uYW1lKSxcXFwie31cXFwiKSk7cj1rLm5vbkNvbXB1dGVkTWVtYmVyKGgsYS5wcm9wZXJ0eS5uYW1lKTtpZihrLnN0YXRlLmV4cGVuc2l2ZUNoZWNrc3x8RmIoYS5wcm9wZXJ0eS5uYW1lKSlyPWsuZW5zdXJlU2FmZU9iamVjdChyKTtrLmFzc2lnbihjLHIpO2QmJihkLmNvbXB1dGVkPSExLGQubmFtZT1hLnByb3BlcnR5Lm5hbWUpfX0sZnVuY3Rpb24oKXtrLmFzc2lnbihjLFxcXCJ1bmRlZmluZWRcXFwiKX0pO2UoYyl9LCEhZik7YnJlYWs7Y2FzZSBxLkNhbGxFeHByZXNzaW9uOmM9Y3x8dGhpcy5uZXh0SWQoKTthLmZpbHRlcj8obD1rLmZpbHRlcihhLmNhbGxlZS5uYW1lKSxuPVtdLG0oYS5hcmd1bWVudHMsZnVuY3Rpb24oYSl7dmFyIGM9ay5uZXh0SWQoKTtrLnJlY3Vyc2UoYSxjKTtuLnB1c2goYyl9KSxyPWwrXFxuXFxcIihcXFwiK24uam9pbihcXFwiLFxcXCIpK1xcXCIpXFxcIixrLmFzc2lnbihjLHIpLGUoYykpOihsPWsubmV4dElkKCksaD17fSxuPVtdLGsucmVjdXJzZShhLmNhbGxlZSxsLGgsZnVuY3Rpb24oKXtrLmlmXyhrLm5vdE51bGwobCksZnVuY3Rpb24oKXtrLmFkZEVuc3VyZVNhZmVGdW5jdGlvbihsKTttKGEuYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2sucmVjdXJzZShhLGsubmV4dElkKCksdCxmdW5jdGlvbihhKXtuLnB1c2goay5lbnN1cmVTYWZlT2JqZWN0KGEpKX0pfSk7aC5uYW1lPyhrLnN0YXRlLmV4cGVuc2l2ZUNoZWNrc3x8ay5hZGRFbnN1cmVTYWZlT2JqZWN0KGguY29udGV4dCkscj1rLm1lbWJlcihoLmNvbnRleHQsaC5uYW1lLGguY29tcHV0ZWQpK1xcXCIoXFxcIituLmpvaW4oXFxcIixcXFwiKStcXFwiKVxcXCIpOnI9bCtcXFwiKFxcXCIrbi5qb2luKFxcXCIsXFxcIikrXFxcIilcXFwiO3I9ay5lbnN1cmVTYWZlT2JqZWN0KHIpO2suYXNzaWduKGMscil9LGZ1bmN0aW9uKCl7ay5hc3NpZ24oYyxcXFwidW5kZWZpbmVkXFxcIil9KTtlKGMpfSkpO2JyZWFrO2Nhc2UgcS5Bc3NpZ25tZW50RXhwcmVzc2lvbjpsPVxcbnRoaXMubmV4dElkKCk7aD17fTtpZighb2QoYS5sZWZ0KSl0aHJvdyBkYShcXFwibHZhbFxcXCIpO3RoaXMucmVjdXJzZShhLmxlZnQsdCxoLGZ1bmN0aW9uKCl7ay5pZl8oay5ub3ROdWxsKGguY29udGV4dCksZnVuY3Rpb24oKXtrLnJlY3Vyc2UoYS5yaWdodCxsKTtrLmFkZEVuc3VyZVNhZmVPYmplY3Qoay5tZW1iZXIoaC5jb250ZXh0LGgubmFtZSxoLmNvbXB1dGVkKSk7cj1rLm1lbWJlcihoLmNvbnRleHQsaC5uYW1lLGguY29tcHV0ZWQpK2Eub3BlcmF0b3IrbDtrLmFzc2lnbihjLHIpO2UoY3x8cil9KX0sMSk7YnJlYWs7Y2FzZSBxLkFycmF5RXhwcmVzc2lvbjpuPVtdO20oYS5lbGVtZW50cyxmdW5jdGlvbihhKXtrLnJlY3Vyc2UoYSxrLm5leHRJZCgpLHQsZnVuY3Rpb24oYSl7bi5wdXNoKGEpfSl9KTtyPVxcXCJbXFxcIituLmpvaW4oXFxcIixcXFwiKStcXFwiXVxcXCI7dGhpcy5hc3NpZ24oYyxyKTtlKHIpO2JyZWFrO2Nhc2UgcS5PYmplY3RFeHByZXNzaW9uOm49W107bShhLnByb3BlcnRpZXMsZnVuY3Rpb24oYSl7ay5yZWN1cnNlKGEudmFsdWUsXFxuay5uZXh0SWQoKSx0LGZ1bmN0aW9uKGMpe24ucHVzaChrLmVzY2FwZShhLmtleS50eXBlPT09cS5JZGVudGlmaWVyP2Eua2V5Lm5hbWU6XFxcIlxcXCIrYS5rZXkudmFsdWUpK1xcXCI6XFxcIitjKX0pfSk7cj1cXFwie1xcXCIrbi5qb2luKFxcXCIsXFxcIikrXFxcIn1cXFwiO3RoaXMuYXNzaWduKGMscik7ZShyKTticmVhaztjYXNlIHEuVGhpc0V4cHJlc3Npb246dGhpcy5hc3NpZ24oYyxcXFwic1xcXCIpO2UoXFxcInNcXFwiKTticmVhaztjYXNlIHEuTkdWYWx1ZVBhcmFtZXRlcjp0aGlzLmFzc2lnbihjLFxcXCJ2XFxcIiksZShcXFwidlxcXCIpfX0sZ2V0SGFzT3duUHJvcGVydHk6ZnVuY3Rpb24oYSxjKXt2YXIgZD1hK1xcXCIuXFxcIitjLGU9dGhpcy5jdXJyZW50KCkub3duO2UuaGFzT3duUHJvcGVydHkoZCl8fChlW2RdPXRoaXMubmV4dElkKCExLGErXFxcIiYmKFxcXCIrdGhpcy5lc2NhcGUoYykrXFxcIiBpbiBcXFwiK2ErXFxcIilcXFwiKSk7cmV0dXJuIGVbZF19LGFzc2lnbjpmdW5jdGlvbihhLGMpe2lmKGEpcmV0dXJuIHRoaXMuY3VycmVudCgpLmJvZHkucHVzaChhLFxcXCI9XFxcIixjLFxcXCI7XFxcIiksYX0sZmlsdGVyOmZ1bmN0aW9uKGEpe3RoaXMuc3RhdGUuZmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhKXx8XFxuKHRoaXMuc3RhdGUuZmlsdGVyc1thXT10aGlzLm5leHRJZCghMCkpO3JldHVybiB0aGlzLnN0YXRlLmZpbHRlcnNbYV19LGlmRGVmaW5lZDpmdW5jdGlvbihhLGMpe3JldHVyblxcXCJpZkRlZmluZWQoXFxcIithK1xcXCIsXFxcIit0aGlzLmVzY2FwZShjKStcXFwiKVxcXCJ9LHBsdXM6ZnVuY3Rpb24oYSxjKXtyZXR1cm5cXFwicGx1cyhcXFwiK2ErXFxcIixcXFwiK2MrXFxcIilcXFwifSxyZXR1cm5fOmZ1bmN0aW9uKGEpe3RoaXMuY3VycmVudCgpLmJvZHkucHVzaChcXFwicmV0dXJuIFxcXCIsYSxcXFwiO1xcXCIpfSxpZl86ZnVuY3Rpb24oYSxjLGQpe2lmKCEwPT09YSljKCk7ZWxzZXt2YXIgZT10aGlzLmN1cnJlbnQoKS5ib2R5O2UucHVzaChcXFwiaWYoXFxcIixhLFxcXCIpe1xcXCIpO2MoKTtlLnB1c2goXFxcIn1cXFwiKTtkJiYoZS5wdXNoKFxcXCJlbHNle1xcXCIpLGQoKSxlLnB1c2goXFxcIn1cXFwiKSl9fSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuXFxcIiEoXFxcIithK1xcXCIpXFxcIn0sbm90TnVsbDpmdW5jdGlvbihhKXtyZXR1cm4gYStcXFwiIT1udWxsXFxcIn0sbm9uQ29tcHV0ZWRNZW1iZXI6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYStcXG5cXFwiLlxcXCIrY30sY29tcHV0ZWRNZW1iZXI6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYStcXFwiW1xcXCIrYytcXFwiXVxcXCJ9LG1lbWJlcjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGQ/dGhpcy5jb21wdXRlZE1lbWJlcihhLGMpOnRoaXMubm9uQ29tcHV0ZWRNZW1iZXIoYSxjKX0sYWRkRW5zdXJlU2FmZU9iamVjdDpmdW5jdGlvbihhKXt0aGlzLmN1cnJlbnQoKS5ib2R5LnB1c2godGhpcy5lbnN1cmVTYWZlT2JqZWN0KGEpLFxcXCI7XFxcIil9LGFkZEVuc3VyZVNhZmVNZW1iZXJOYW1lOmZ1bmN0aW9uKGEpe3RoaXMuY3VycmVudCgpLmJvZHkucHVzaCh0aGlzLmVuc3VyZVNhZmVNZW1iZXJOYW1lKGEpLFxcXCI7XFxcIil9LGFkZEVuc3VyZVNhZmVGdW5jdGlvbjpmdW5jdGlvbihhKXt0aGlzLmN1cnJlbnQoKS5ib2R5LnB1c2godGhpcy5lbnN1cmVTYWZlRnVuY3Rpb24oYSksXFxcIjtcXFwiKX0sZW5zdXJlU2FmZU9iamVjdDpmdW5jdGlvbihhKXtyZXR1cm5cXFwiZW5zdXJlU2FmZU9iamVjdChcXFwiK2ErXFxcIix0ZXh0KVxcXCJ9LGVuc3VyZVNhZmVNZW1iZXJOYW1lOmZ1bmN0aW9uKGEpe3JldHVyblxcXCJlbnN1cmVTYWZlTWVtYmVyTmFtZShcXFwiK1xcbmErXFxcIix0ZXh0KVxcXCJ9LGVuc3VyZVNhZmVGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cXFwiZW5zdXJlU2FmZUZ1bmN0aW9uKFxcXCIrYStcXFwiLHRleHQpXFxcIn0sbGF6eVJlY3Vyc2U6ZnVuY3Rpb24oYSxjLGQsZSxmLGcpe3ZhciBoPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKCl7aC5yZWN1cnNlKGEsYyxkLGUsZixnKX19LGxhenlBc3NpZ246ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzO3JldHVybiBmdW5jdGlvbigpe2QuYXNzaWduKGEsYyl9fSxzdHJpbmdFc2NhcGVSZWdleDovW14gYS16QS1aMC05XS9nLHN0cmluZ0VzY2FwZUZuOmZ1bmN0aW9uKGEpe3JldHVyblxcXCJcXFxcXFxcXHVcXFwiKyhcXFwiMDAwMFxcXCIrYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpfSxlc2NhcGU6ZnVuY3Rpb24oYSl7aWYoTChhKSlyZXR1cm5cXFwiJ1xcXCIrYS5yZXBsYWNlKHRoaXMuc3RyaW5nRXNjYXBlUmVnZXgsdGhpcy5zdHJpbmdFc2NhcGVGbikrXFxcIidcXFwiO2lmKFYoYSkpcmV0dXJuIGEudG9TdHJpbmcoKTtpZighMD09PWEpcmV0dXJuXFxcInRydWVcXFwiO1xcbmlmKCExPT09YSlyZXR1cm5cXFwiZmFsc2VcXFwiO2lmKG51bGw9PT1hKXJldHVyblxcXCJudWxsXFxcIjtpZihcXFwidW5kZWZpbmVkXFxcIj09PXR5cGVvZiBhKXJldHVyblxcXCJ1bmRlZmluZWRcXFwiO3Rocm93IGRhKFxcXCJlc2NcXFwiKTt9LG5leHRJZDpmdW5jdGlvbihhLGMpe3ZhciBkPVxcXCJ2XFxcIit0aGlzLnN0YXRlLm5leHRJZCsrO2F8fHRoaXMuY3VycmVudCgpLnZhcnMucHVzaChkKyhjP1xcXCI9XFxcIitjOlxcXCJcXFwiKSk7cmV0dXJuIGR9LGN1cnJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdGF0ZVt0aGlzLnN0YXRlLmNvbXB1dGluZ119fTtzZC5wcm90b3R5cGU9e2NvbXBpbGU6ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9dGhpcy5hc3RCdWlsZGVyLmFzdChhKTt0aGlzLmV4cHJlc3Npb249YTt0aGlzLmV4cGVuc2l2ZUNoZWNrcz1jO1QoZSxkLiRmaWx0ZXIpO3ZhciBmLGc7aWYoZj1wZChlKSlnPXRoaXMucmVjdXJzZShmKTtmPW5kKGUuYm9keSk7dmFyIGg7ZiYmKGg9W10sbShmLGZ1bmN0aW9uKGEsYyl7dmFyIGU9ZC5yZWN1cnNlKGEpO1xcbmEuaW5wdXQ9ZTtoLnB1c2goZSk7YS53YXRjaElkPWN9KSk7dmFyIGw9W107bShlLmJvZHksZnVuY3Rpb24oYSl7bC5wdXNoKGQucmVjdXJzZShhLmV4cHJlc3Npb24pKX0pO2Y9MD09PWUuYm9keS5sZW5ndGg/ZnVuY3Rpb24oKXt9OjE9PT1lLmJvZHkubGVuZ3RoP2xbMF06ZnVuY3Rpb24oYSxjKXt2YXIgZDttKGwsZnVuY3Rpb24oZSl7ZD1lKGEsYyl9KTtyZXR1cm4gZH07ZyYmKGYuYXNzaWduPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gZyhhLGQsYyl9KTtoJiYoZi5pbnB1dHM9aCk7Zi5saXRlcmFsPXFkKGUpO2YuY29uc3RhbnQ9ZS5jb25zdGFudDtyZXR1cm4gZn0scmVjdXJzZTpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZixnPXRoaXMsaDtpZihhLmlucHV0KXJldHVybiB0aGlzLmlucHV0cyhhLmlucHV0LGEud2F0Y2hJZCk7c3dpdGNoKGEudHlwZSl7Y2FzZSBxLkxpdGVyYWw6cmV0dXJuIHRoaXMudmFsdWUoYS52YWx1ZSxjKTtjYXNlIHEuVW5hcnlFeHByZXNzaW9uOnJldHVybiBmPVxcbnRoaXMucmVjdXJzZShhLmFyZ3VtZW50KSx0aGlzW1xcXCJ1bmFyeVxcXCIrYS5vcGVyYXRvcl0oZixjKTtjYXNlIHEuQmluYXJ5RXhwcmVzc2lvbjpyZXR1cm4gZT10aGlzLnJlY3Vyc2UoYS5sZWZ0KSxmPXRoaXMucmVjdXJzZShhLnJpZ2h0KSx0aGlzW1xcXCJiaW5hcnlcXFwiK2Eub3BlcmF0b3JdKGUsZixjKTtjYXNlIHEuTG9naWNhbEV4cHJlc3Npb246cmV0dXJuIGU9dGhpcy5yZWN1cnNlKGEubGVmdCksZj10aGlzLnJlY3Vyc2UoYS5yaWdodCksdGhpc1tcXFwiYmluYXJ5XFxcIithLm9wZXJhdG9yXShlLGYsYyk7Y2FzZSBxLkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpyZXR1cm4gdGhpc1tcXFwidGVybmFyeT86XFxcIl0odGhpcy5yZWN1cnNlKGEudGVzdCksdGhpcy5yZWN1cnNlKGEuYWx0ZXJuYXRlKSx0aGlzLnJlY3Vyc2UoYS5jb25zZXF1ZW50KSxjKTtjYXNlIHEuSWRlbnRpZmllcjpyZXR1cm4gQ2EoYS5uYW1lLGcuZXhwcmVzc2lvbiksZy5pZGVudGlmaWVyKGEubmFtZSxnLmV4cGVuc2l2ZUNoZWNrc3x8RmIoYS5uYW1lKSxcXG5jLGQsZy5leHByZXNzaW9uKTtjYXNlIHEuTWVtYmVyRXhwcmVzc2lvbjpyZXR1cm4gZT10aGlzLnJlY3Vyc2UoYS5vYmplY3QsITEsISFkKSxhLmNvbXB1dGVkfHwoQ2EoYS5wcm9wZXJ0eS5uYW1lLGcuZXhwcmVzc2lvbiksZj1hLnByb3BlcnR5Lm5hbWUpLGEuY29tcHV0ZWQmJihmPXRoaXMucmVjdXJzZShhLnByb3BlcnR5KSksYS5jb21wdXRlZD90aGlzLmNvbXB1dGVkTWVtYmVyKGUsZixjLGQsZy5leHByZXNzaW9uKTp0aGlzLm5vbkNvbXB1dGVkTWVtYmVyKGUsZixnLmV4cGVuc2l2ZUNoZWNrcyxjLGQsZy5leHByZXNzaW9uKTtjYXNlIHEuQ2FsbEV4cHJlc3Npb246cmV0dXJuIGg9W10sbShhLmFyZ3VtZW50cyxmdW5jdGlvbihhKXtoLnB1c2goZy5yZWN1cnNlKGEpKX0pLGEuZmlsdGVyJiYoZj10aGlzLiRmaWx0ZXIoYS5jYWxsZWUubmFtZSkpLGEuZmlsdGVyfHwoZj10aGlzLnJlY3Vyc2UoYS5jYWxsZWUsITApKSxhLmZpbHRlcj9mdW5jdGlvbihhLGQsZSxnKXtmb3IodmFyIG09XFxuW10scT0wO3E8aC5sZW5ndGg7KytxKW0ucHVzaChoW3FdKGEsZCxlLGcpKTthPWYuYXBwbHkodCxtLGcpO3JldHVybiBjP3tjb250ZXh0OnQsbmFtZTp0LHZhbHVlOmF9OmF9OmZ1bmN0aW9uKGEsZCxlLHIpe3ZhciBtPWYoYSxkLGUscikscTtpZihudWxsIT1tLnZhbHVlKXtvYShtLmNvbnRleHQsZy5leHByZXNzaW9uKTtsZChtLnZhbHVlLGcuZXhwcmVzc2lvbik7cT1bXTtmb3IodmFyIHQ9MDt0PGgubGVuZ3RoOysrdClxLnB1c2gob2EoaFt0XShhLGQsZSxyKSxnLmV4cHJlc3Npb24pKTtxPW9hKG0udmFsdWUuYXBwbHkobS5jb250ZXh0LHEpLGcuZXhwcmVzc2lvbil9cmV0dXJuIGM/e3ZhbHVlOnF9OnF9O2Nhc2UgcS5Bc3NpZ25tZW50RXhwcmVzc2lvbjpyZXR1cm4gZT10aGlzLnJlY3Vyc2UoYS5sZWZ0LCEwLDEpLGY9dGhpcy5yZWN1cnNlKGEucmlnaHQpLGZ1bmN0aW9uKGEsZCxoLHIpe3ZhciBtPWUoYSxkLGgscik7YT1mKGEsZCxoLHIpO29hKG0udmFsdWUsZy5leHByZXNzaW9uKTtcXG5tLmNvbnRleHRbbS5uYW1lXT1hO3JldHVybiBjP3t2YWx1ZTphfTphfTtjYXNlIHEuQXJyYXlFeHByZXNzaW9uOnJldHVybiBoPVtdLG0oYS5lbGVtZW50cyxmdW5jdGlvbihhKXtoLnB1c2goZy5yZWN1cnNlKGEpKX0pLGZ1bmN0aW9uKGEsZCxlLGYpe2Zvcih2YXIgZz1bXSxtPTA7bTxoLmxlbmd0aDsrK20pZy5wdXNoKGhbbV0oYSxkLGUsZikpO3JldHVybiBjP3t2YWx1ZTpnfTpnfTtjYXNlIHEuT2JqZWN0RXhwcmVzc2lvbjpyZXR1cm4gaD1bXSxtKGEucHJvcGVydGllcyxmdW5jdGlvbihhKXtoLnB1c2goe2tleTphLmtleS50eXBlPT09cS5JZGVudGlmaWVyP2Eua2V5Lm5hbWU6XFxcIlxcXCIrYS5rZXkudmFsdWUsdmFsdWU6Zy5yZWN1cnNlKGEudmFsdWUpfSl9KSxmdW5jdGlvbihhLGQsZSxmKXtmb3IodmFyIGc9e30sbT0wO208aC5sZW5ndGg7KyttKWdbaFttXS5rZXldPWhbbV0udmFsdWUoYSxkLGUsZik7cmV0dXJuIGM/e3ZhbHVlOmd9Omd9O2Nhc2UgcS5UaGlzRXhwcmVzc2lvbjpyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGM/XFxue3ZhbHVlOmF9OmF9O2Nhc2UgcS5OR1ZhbHVlUGFyYW1ldGVyOnJldHVybiBmdW5jdGlvbihhLGQsZSxmKXtyZXR1cm4gYz97dmFsdWU6ZX06ZX19fSxcXFwidW5hcnkrXFxcIjpmdW5jdGlvbihhLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZixnKXtkPWEoZCxlLGYsZyk7ZD13KGQpPytkOjA7cmV0dXJuIGM/e3ZhbHVlOmR9OmR9fSxcXFwidW5hcnktXFxcIjpmdW5jdGlvbihhLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZixnKXtkPWEoZCxlLGYsZyk7ZD13KGQpPy1kOjA7cmV0dXJuIGM/e3ZhbHVlOmR9OmR9fSxcXFwidW5hcnkhXFxcIjpmdW5jdGlvbihhLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZixnKXtkPSFhKGQsZSxmLGcpO3JldHVybiBjP3t2YWx1ZTpkfTpkfX0sXFxcImJpbmFyeStcXFwiOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxmLGcsaCl7dmFyIGw9YShlLGYsZyxoKTtlPWMoZSxmLGcsaCk7bD1tZChsLGUpO3JldHVybiBkP3t2YWx1ZTpsfTpsfX0sXFxcImJpbmFyeS1cXFwiOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxcXG5mLGcsaCl7dmFyIGw9YShlLGYsZyxoKTtlPWMoZSxmLGcsaCk7bD0odyhsKT9sOjApLSh3KGUpP2U6MCk7cmV0dXJuIGQ/e3ZhbHVlOmx9Omx9fSxcXFwiYmluYXJ5KlxcXCI6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBmdW5jdGlvbihlLGYsZyxoKXtlPWEoZSxmLGcsaCkqYyhlLGYsZyxoKTtyZXR1cm4gZD97dmFsdWU6ZX06ZX19LFxcXCJiaW5hcnkvXFxcIjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGZ1bmN0aW9uKGUsZixnLGgpe2U9YShlLGYsZyxoKS9jKGUsZixnLGgpO3JldHVybiBkP3t2YWx1ZTplfTplfX0sXFxcImJpbmFyeSVcXFwiOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxmLGcsaCl7ZT1hKGUsZixnLGgpJWMoZSxmLGcsaCk7cmV0dXJuIGQ/e3ZhbHVlOmV9OmV9fSxcXFwiYmluYXJ5PT09XFxcIjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGZ1bmN0aW9uKGUsZixnLGgpe2U9YShlLGYsZyxoKT09PWMoZSxmLGcsaCk7cmV0dXJuIGQ/e3ZhbHVlOmV9OmV9fSxcXFwiYmluYXJ5IT09XFxcIjpmdW5jdGlvbihhLFxcbmMsZCl7cmV0dXJuIGZ1bmN0aW9uKGUsZixnLGgpe2U9YShlLGYsZyxoKSE9PWMoZSxmLGcsaCk7cmV0dXJuIGQ/e3ZhbHVlOmV9OmV9fSxcXFwiYmluYXJ5PT1cXFwiOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxmLGcsaCl7ZT1hKGUsZixnLGgpPT1jKGUsZixnLGgpO3JldHVybiBkP3t2YWx1ZTplfTplfX0sXFxcImJpbmFyeSE9XFxcIjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGZ1bmN0aW9uKGUsZixnLGgpe2U9YShlLGYsZyxoKSE9YyhlLGYsZyxoKTtyZXR1cm4gZD97dmFsdWU6ZX06ZX19LFxcXCJiaW5hcnk8XFxcIjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGZ1bmN0aW9uKGUsZixnLGgpe2U9YShlLGYsZyxoKTxjKGUsZixnLGgpO3JldHVybiBkP3t2YWx1ZTplfTplfX0sXFxcImJpbmFyeT5cXFwiOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxmLGcsaCl7ZT1hKGUsZixnLGgpPmMoZSxmLGcsaCk7cmV0dXJuIGQ/e3ZhbHVlOmV9OmV9fSxcXFwiYmluYXJ5PD1cXFwiOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxcXG5mLGcsaCl7ZT1hKGUsZixnLGgpPD1jKGUsZixnLGgpO3JldHVybiBkP3t2YWx1ZTplfTplfX0sXFxcImJpbmFyeT49XFxcIjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGZ1bmN0aW9uKGUsZixnLGgpe2U9YShlLGYsZyxoKT49YyhlLGYsZyxoKTtyZXR1cm4gZD97dmFsdWU6ZX06ZX19LFxcXCJiaW5hcnkmJlxcXCI6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBmdW5jdGlvbihlLGYsZyxoKXtlPWEoZSxmLGcsaCkmJmMoZSxmLGcsaCk7cmV0dXJuIGQ/e3ZhbHVlOmV9OmV9fSxcXFwiYmluYXJ5fHxcXFwiOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxmLGcsaCl7ZT1hKGUsZixnLGgpfHxjKGUsZixnLGgpO3JldHVybiBkP3t2YWx1ZTplfTplfX0sXFxcInRlcm5hcnk/OlxcXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGZ1bmN0aW9uKGYsZyxoLGwpe2Y9YShmLGcsaCxsKT9jKGYsZyxoLGwpOmQoZixnLGgsbCk7cmV0dXJuIGU/e3ZhbHVlOmZ9OmZ9fSx2YWx1ZTpmdW5jdGlvbihhLGMpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBjP1xcbntjb250ZXh0OnQsbmFtZTp0LHZhbHVlOmF9OmF9fSxpZGVudGlmaWVyOmZ1bmN0aW9uKGEsYyxkLGUsZil7cmV0dXJuIGZ1bmN0aW9uKGcsaCxsLGspe2c9aCYmYSBpbiBoP2g6ZztlJiYxIT09ZSYmZyYmIWdbYV0mJihnW2FdPXt9KTtoPWc/Z1thXTp0O2MmJm9hKGgsZik7cmV0dXJuIGQ/e2NvbnRleHQ6ZyxuYW1lOmEsdmFsdWU6aH06aH19LGNvbXB1dGVkTWVtYmVyOmZ1bmN0aW9uKGEsYyxkLGUsZil7cmV0dXJuIGZ1bmN0aW9uKGcsaCxsLGspe3ZhciBuPWEoZyxoLGwsayksbSxzO251bGwhPW4mJihtPWMoZyxoLGwsayksQ2EobSxmKSxlJiYxIT09ZSYmbiYmIW5bbV0mJihuW21dPXt9KSxzPW5bbV0sb2EocyxmKSk7cmV0dXJuIGQ/e2NvbnRleHQ6bixuYW1lOm0sdmFsdWU6c306c319LG5vbkNvbXB1dGVkTWVtYmVyOmZ1bmN0aW9uKGEsYyxkLGUsZixnKXtyZXR1cm4gZnVuY3Rpb24oaCxsLGssbil7aD1hKGgsbCxrLG4pO2YmJjEhPT1mJiZoJiYhaFtjXSYmKGhbY109e30pO1xcbmw9bnVsbCE9aD9oW2NdOnQ7KGR8fEZiKGMpKSYmb2EobCxnKTtyZXR1cm4gZT97Y29udGV4dDpoLG5hbWU6Yyx2YWx1ZTpsfTpsfX0saW5wdXRzOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGZ1bmN0aW9uKGQsZSxmLGcpe3JldHVybiBnP2dbY106YShkLGUsZil9fX07dmFyIGhjPWZ1bmN0aW9uKGEsYyxkKXt0aGlzLmxleGVyPWE7dGhpcy4kZmlsdGVyPWM7dGhpcy5vcHRpb25zPWQ7dGhpcy5hc3Q9bmV3IHEodGhpcy5sZXhlcik7dGhpcy5hc3RDb21waWxlcj1kLmNzcD9uZXcgc2QodGhpcy5hc3QsYyk6bmV3IHJkKHRoaXMuYXN0LGMpfTtoYy5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmhjLHBhcnNlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFzdENvbXBpbGVyLmNvbXBpbGUoYSx0aGlzLm9wdGlvbnMuZXhwZW5zaXZlQ2hlY2tzKX19O2dhKCk7Z2EoKTt2YXIgWmY9T2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLERhPUooXFxcIiRzY2VcXFwiKSxwYT17SFRNTDpcXFwiaHRtbFxcXCIsQ1NTOlxcXCJjc3NcXFwiLFVSTDpcXFwidXJsXFxcIixcXG5SRVNPVVJDRV9VUkw6XFxcInJlc291cmNlVXJsXFxcIixKUzpcXFwianNcXFwifSxlYT1KKFxcXCIkY29tcGlsZVxcXCIpLFg9VS5jcmVhdGVFbGVtZW50KFxcXCJhXFxcIiksd2Q9QmEoTy5sb2NhdGlvbi5ocmVmKTt4ZC4kaW5qZWN0PVtcXFwiJGRvY3VtZW50XFxcIl07TGMuJGluamVjdD1bXFxcIiRwcm92aWRlXFxcIl07eWQuJGluamVjdD1bXFxcIiRsb2NhbGVcXFwiXTtBZC4kaW5qZWN0PVtcXFwiJGxvY2FsZVxcXCJdO3ZhciBEZD1cXFwiLlxcXCIsaWc9e3l5eXk6WShcXFwiRnVsbFllYXJcXFwiLDQpLHl5OlkoXFxcIkZ1bGxZZWFyXFxcIiwyLDAsITApLHk6WShcXFwiRnVsbFllYXJcXFwiLDEpLE1NTU06SGIoXFxcIk1vbnRoXFxcIiksTU1NOkhiKFxcXCJNb250aFxcXCIsITApLE1NOlkoXFxcIk1vbnRoXFxcIiwyLDEpLE06WShcXFwiTW9udGhcXFwiLDEsMSksZGQ6WShcXFwiRGF0ZVxcXCIsMiksZDpZKFxcXCJEYXRlXFxcIiwxKSxISDpZKFxcXCJIb3Vyc1xcXCIsMiksSDpZKFxcXCJIb3Vyc1xcXCIsMSksaGg6WShcXFwiSG91cnNcXFwiLDIsLTEyKSxoOlkoXFxcIkhvdXJzXFxcIiwxLC0xMiksbW06WShcXFwiTWludXRlc1xcXCIsMiksbTpZKFxcXCJNaW51dGVzXFxcIiwxKSxzczpZKFxcXCJTZWNvbmRzXFxcIiwyKSxzOlkoXFxcIlNlY29uZHNcXFwiLFxcbjEpLHNzczpZKFxcXCJNaWxsaXNlY29uZHNcXFwiLDMpLEVFRUU6SGIoXFxcIkRheVxcXCIpLEVFRTpIYihcXFwiRGF5XFxcIiwhMCksYTpmdW5jdGlvbihhLGMpe3JldHVybiAxMj5hLmdldEhvdXJzKCk/Yy5BTVBNU1swXTpjLkFNUE1TWzFdfSxaOmZ1bmN0aW9uKGEsYyxkKXthPS0xKmQ7cmV0dXJuIGE9KDA8PWE/XFxcIitcXFwiOlxcXCJcXFwiKSsoR2IoTWF0aFswPGE/XFxcImZsb29yXFxcIjpcXFwiY2VpbFxcXCJdKGEvNjApLDIpK0diKE1hdGguYWJzKGElNjApLDIpKX0sd3c6RmQoMiksdzpGZCgxKSxHOmpjLEdHOmpjLEdHRzpqYyxHR0dHOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIDA+PWEuZ2V0RnVsbFllYXIoKT9jLkVSQU5BTUVTWzBdOmMuRVJBTkFNRVNbMV19fSxoZz0vKCg/OlteeU1kSGhtc2FaRXdHJ10rKXwoPzonKD86W14nXXwnJykqJyl8KD86RSt8eSt8TSt8ZCt8SCt8aCt8bSt8cyt8YXxafEcrfHcrKSkoLiopLyxnZz0vXlxcXFwtP1xcXFxkKyQvO3pkLiRpbmplY3Q9W1xcXCIkbG9jYWxlXFxcIl07dmFyIGRnPXJhKE0pLGVnPXJhKHJiKTtCZC4kaW5qZWN0PVxcbltcXFwiJHBhcnNlXFxcIl07dmFyIGllPXJhKHtyZXN0cmljdDpcXFwiRVxcXCIsY29tcGlsZTpmdW5jdGlvbihhLGMpe2lmKCFjLmhyZWYmJiFjLnhsaW5rSHJlZilyZXR1cm4gZnVuY3Rpb24oYSxjKXtpZihcXFwiYVxcXCI9PT1jWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe3ZhciBmPVxcXCJbb2JqZWN0IFNWR0FuaW1hdGVkU3RyaW5nXVxcXCI9PT1zYS5jYWxsKGMucHJvcChcXFwiaHJlZlxcXCIpKT9cXFwieGxpbms6aHJlZlxcXCI6XFxcImhyZWZcXFwiO2Mub24oXFxcImNsaWNrXFxcIixmdW5jdGlvbihhKXtjLmF0dHIoZil8fGEucHJldmVudERlZmF1bHQoKX0pfX19fSksc2I9e307bShBYixmdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGQoYSxkLGYpe2EuJHdhdGNoKGZbZV0sZnVuY3Rpb24oYSl7Zi4kc2V0KGMsISFhKX0pfWlmKFxcXCJtdWx0aXBsZVxcXCIhPWEpe3ZhciBlPXdhKFxcXCJuZy1cXFwiK2MpLGY9ZDtcXFwiY2hlY2tlZFxcXCI9PT1hJiYoZj1mdW5jdGlvbihhLGMsZil7Zi5uZ01vZGVsIT09ZltlXSYmZChhLGMsZil9KTtzYltlXT1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcXFwiQVxcXCIsXFxucHJpb3JpdHk6MTAwLGxpbms6Zn19fX0pO20oVWMsZnVuY3Rpb24oYSxjKXtzYltjXT1mdW5jdGlvbigpe3JldHVybntwcmlvcml0eToxMDAsbGluazpmdW5jdGlvbihhLGUsZil7aWYoXFxcIm5nUGF0dGVyblxcXCI9PT1jJiZcXFwiL1xcXCI9PWYubmdQYXR0ZXJuLmNoYXJBdCgwKSYmKGU9Zi5uZ1BhdHRlcm4ubWF0Y2goa2cpKSl7Zi4kc2V0KFxcXCJuZ1BhdHRlcm5cXFwiLG5ldyBSZWdFeHAoZVsxXSxlWzJdKSk7cmV0dXJufWEuJHdhdGNoKGZbY10sZnVuY3Rpb24oYSl7Zi4kc2V0KGMsYSl9KX19fX0pO20oW1xcXCJzcmNcXFwiLFxcXCJzcmNzZXRcXFwiLFxcXCJocmVmXFxcIl0sZnVuY3Rpb24oYSl7dmFyIGM9d2EoXFxcIm5nLVxcXCIrYSk7c2JbY109ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6OTksbGluazpmdW5jdGlvbihkLGUsZil7dmFyIGc9YSxoPWE7XFxcImhyZWZcXFwiPT09YSYmXFxcIltvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddXFxcIj09PXNhLmNhbGwoZS5wcm9wKFxcXCJocmVmXFxcIikpJiYoaD1cXFwieGxpbmtIcmVmXFxcIixmLiRhdHRyW2hdPVxcXCJ4bGluazpocmVmXFxcIixcXG5nPW51bGwpO2YuJG9ic2VydmUoYyxmdW5jdGlvbihjKXtjPyhmLiRzZXQoaCxjKSxVYSYmZyYmZS5wcm9wKGcsZltoXSkpOlxcXCJocmVmXFxcIj09PWEmJmYuJHNldChoLG51bGwpfSl9fX19KTt2YXIgSWI9eyRhZGRDb250cm9sOnYsJCRyZW5hbWVDb250cm9sOmZ1bmN0aW9uKGEsYyl7YS4kbmFtZT1jfSwkcmVtb3ZlQ29udHJvbDp2LCRzZXRWYWxpZGl0eTp2LCRzZXREaXJ0eTp2LCRzZXRQcmlzdGluZTp2LCRzZXRTdWJtaXR0ZWQ6dn07R2QuJGluamVjdD1bXFxcIiRlbGVtZW50XFxcIixcXFwiJGF0dHJzXFxcIixcXFwiJHNjb3BlXFxcIixcXFwiJGFuaW1hdGVcXFwiLFxcXCIkaW50ZXJwb2xhdGVcXFwiXTt2YXIgT2Q9ZnVuY3Rpb24oYSl7cmV0dXJuW1xcXCIkdGltZW91dFxcXCIsZnVuY3Rpb24oYyl7cmV0dXJue25hbWU6XFxcImZvcm1cXFwiLHJlc3RyaWN0OmE/XFxcIkVBQ1xcXCI6XFxcIkVcXFwiLGNvbnRyb2xsZXI6R2QsY29tcGlsZTpmdW5jdGlvbihkLGUpe2QuYWRkQ2xhc3MoVmEpLmFkZENsYXNzKG1iKTt2YXIgZj1lLm5hbWU/XFxcIm5hbWVcXFwiOmEmJmUubmdGb3JtP1xcXCJuZ0Zvcm1cXFwiOlxcbiExO3JldHVybntwcmU6ZnVuY3Rpb24oYSxkLGUsayl7aWYoIShcXFwiYWN0aW9uXFxcImluIGUpKXt2YXIgbj1mdW5jdGlvbihjKXthLiRhcHBseShmdW5jdGlvbigpe2suJGNvbW1pdFZpZXdWYWx1ZSgpO2suJHNldFN1Ym1pdHRlZCgpfSk7Yy5wcmV2ZW50RGVmYXVsdCgpfTtkWzBdLmFkZEV2ZW50TGlzdGVuZXIoXFxcInN1Ym1pdFxcXCIsbiwhMSk7ZC5vbihcXFwiJGRlc3Ryb3lcXFwiLGZ1bmN0aW9uKCl7YyhmdW5jdGlvbigpe2RbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcXFwic3VibWl0XFxcIixuLCExKX0sMCwhMSl9KX12YXIgbT1rLiQkcGFyZW50Rm9ybTtmJiYoRWIoYSxrLiRuYW1lLGssay4kbmFtZSksZS4kb2JzZXJ2ZShmLGZ1bmN0aW9uKGMpe2suJG5hbWUhPT1jJiYoRWIoYSxrLiRuYW1lLHQsay4kbmFtZSksbS4kJHJlbmFtZUNvbnRyb2woayxjKSxFYihhLGsuJG5hbWUsayxrLiRuYW1lKSl9KSk7ZC5vbihcXFwiJGRlc3Ryb3lcXFwiLGZ1bmN0aW9uKCl7bS4kcmVtb3ZlQ29udHJvbChrKTtmJiZFYihhLGVbZl0sdCxcXG5rLiRuYW1lKTtQKGssSWIpfSl9fX19fV19LGplPU9kKCksd2U9T2QoITApLGpnPS9cXFxcZHs0fS1bMDFdXFxcXGQtWzAtM11cXFxcZFRbMC0yXVxcXFxkOlswLTVdXFxcXGQ6WzAtNV1cXFxcZFxcXFwuXFxcXGQrKFsrLV1bMC0yXVxcXFxkOlswLTVdXFxcXGR8WikvLHNnPS9eKGZ0cHxodHRwfGh0dHBzKTpcXFxcL1xcXFwvKFxcXFx3Kzp7MCwxfVxcXFx3KkApPyhcXFxcUyspKDpbMC05XSspPyhcXFxcL3xcXFxcLyhbXFxcXHcjITouPys9JiVAIVxcXFwtXFxcXC9dKSk/JC8sdGc9L15bYS16MC05ISMkJSYnKitcXFxcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFxcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pLHVnPS9eXFxcXHMqKFxcXFwtfFxcXFwrKT8oXFxcXGQrfChcXFxcZCooXFxcXC5cXFxcZCopKSkoW2VFXVsrLV0/XFxcXGQrKT9cXFxccyokLyxQZD0vXihcXFxcZHs0fSktKFxcXFxkezJ9KS0oXFxcXGR7Mn0pJC8sUWQ9L14oXFxcXGR7NH0pLShcXFxcZFxcXFxkKS0oXFxcXGRcXFxcZClUKFxcXFxkXFxcXGQpOihcXFxcZFxcXFxkKSg/OjooXFxcXGRcXFxcZCkoXFxcXC5cXFxcZHsxLDN9KT8pPyQvLG1jPS9eKFxcXFxkezR9KS1XKFxcXFxkXFxcXGQpJC8sUmQ9L14oXFxcXGR7NH0pLShcXFxcZFxcXFxkKSQvLFxcblNkPS9eKFxcXFxkXFxcXGQpOihcXFxcZFxcXFxkKSg/OjooXFxcXGRcXFxcZCkoXFxcXC5cXFxcZHsxLDN9KT8pPyQvLFRkPXt0ZXh0OmZ1bmN0aW9uKGEsYyxkLGUsZixnKXtrYihhLGMsZCxlLGYsZyk7a2MoZSl9LGRhdGU6bGIoXFxcImRhdGVcXFwiLFBkLEtiKFBkLFtcXFwieXl5eVxcXCIsXFxcIk1NXFxcIixcXFwiZGRcXFwiXSksXFxcInl5eXktTU0tZGRcXFwiKSxcXFwiZGF0ZXRpbWUtbG9jYWxcXFwiOmxiKFxcXCJkYXRldGltZWxvY2FsXFxcIixRZCxLYihRZCxcXFwieXl5eSBNTSBkZCBISCBtbSBzcyBzc3NcXFwiLnNwbGl0KFxcXCIgXFxcIikpLFxcXCJ5eXl5LU1NLWRkVEhIOm1tOnNzLnNzc1xcXCIpLHRpbWU6bGIoXFxcInRpbWVcXFwiLFNkLEtiKFNkLFtcXFwiSEhcXFwiLFxcXCJtbVxcXCIsXFxcInNzXFxcIixcXFwic3NzXFxcIl0pLFxcXCJISDptbTpzcy5zc3NcXFwiKSx3ZWVrOmxiKFxcXCJ3ZWVrXFxcIixtYyxmdW5jdGlvbihhLGMpe2lmKGFhKGEpKXJldHVybiBhO2lmKEwoYSkpe21jLmxhc3RJbmRleD0wO3ZhciBkPW1jLmV4ZWMoYSk7aWYoZCl7dmFyIGU9K2RbMV0sZj0rZFsyXSxnPWQ9MCxoPTAsbD0wLGs9RWQoZSksZj03KihmLTEpO2MmJihkPWMuZ2V0SG91cnMoKSxnPVxcbmMuZ2V0TWludXRlcygpLGg9Yy5nZXRTZWNvbmRzKCksbD1jLmdldE1pbGxpc2Vjb25kcygpKTtyZXR1cm4gbmV3IERhdGUoZSwwLGsuZ2V0RGF0ZSgpK2YsZCxnLGgsbCl9fXJldHVybiBOYU59LFxcXCJ5eXl5LVd3d1xcXCIpLG1vbnRoOmxiKFxcXCJtb250aFxcXCIsUmQsS2IoUmQsW1xcXCJ5eXl5XFxcIixcXFwiTU1cXFwiXSksXFxcInl5eXktTU1cXFwiKSxudW1iZXI6ZnVuY3Rpb24oYSxjLGQsZSxmLGcpe0lkKGEsYyxkLGUpO2tiKGEsYyxkLGUsZixnKTtlLiQkcGFyc2VyTmFtZT1cXFwibnVtYmVyXFxcIjtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIGUuJGlzRW1wdHkoYSk/bnVsbDp1Zy50ZXN0KGEpP3BhcnNlRmxvYXQoYSk6dH0pO2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtpZighZS4kaXNFbXB0eShhKSl7aWYoIVYoYSkpdGhyb3cgTGIoXFxcIm51bWZtdFxcXCIsYSk7YT1hLnRvU3RyaW5nKCl9cmV0dXJuIGF9KTtpZih3KGQubWluKXx8ZC5uZ01pbil7dmFyIGg7ZS4kdmFsaWRhdG9ycy5taW49ZnVuY3Rpb24oYSl7cmV0dXJuIGUuJGlzRW1wdHkoYSl8fFxcbkEoaCl8fGE+PWh9O2QuJG9ic2VydmUoXFxcIm1pblxcXCIsZnVuY3Rpb24oYSl7dyhhKSYmIVYoYSkmJihhPXBhcnNlRmxvYXQoYSwxMCkpO2g9VihhKSYmIWlzTmFOKGEpP2E6dDtlLiR2YWxpZGF0ZSgpfSl9aWYodyhkLm1heCl8fGQubmdNYXgpe3ZhciBsO2UuJHZhbGlkYXRvcnMubWF4PWZ1bmN0aW9uKGEpe3JldHVybiBlLiRpc0VtcHR5KGEpfHxBKGwpfHxhPD1sfTtkLiRvYnNlcnZlKFxcXCJtYXhcXFwiLGZ1bmN0aW9uKGEpe3coYSkmJiFWKGEpJiYoYT1wYXJzZUZsb2F0KGEsMTApKTtsPVYoYSkmJiFpc05hTihhKT9hOnQ7ZS4kdmFsaWRhdGUoKX0pfX0sdXJsOmZ1bmN0aW9uKGEsYyxkLGUsZixnKXtrYihhLGMsZCxlLGYsZyk7a2MoZSk7ZS4kJHBhcnNlck5hbWU9XFxcInVybFxcXCI7ZS4kdmFsaWRhdG9ycy51cmw9ZnVuY3Rpb24oYSxjKXt2YXIgZD1hfHxjO3JldHVybiBlLiRpc0VtcHR5KGQpfHxzZy50ZXN0KGQpfX0sZW1haWw6ZnVuY3Rpb24oYSxjLGQsZSxmLGcpe2tiKGEsYyxkLGUsZixnKTtrYyhlKTtcXG5lLiQkcGFyc2VyTmFtZT1cXFwiZW1haWxcXFwiO2UuJHZhbGlkYXRvcnMuZW1haWw9ZnVuY3Rpb24oYSxjKXt2YXIgZD1hfHxjO3JldHVybiBlLiRpc0VtcHR5KGQpfHx0Zy50ZXN0KGQpfX0scmFkaW86ZnVuY3Rpb24oYSxjLGQsZSl7QShkLm5hbWUpJiZjLmF0dHIoXFxcIm5hbWVcXFwiLCsrbmIpO2Mub24oXFxcImNsaWNrXFxcIixmdW5jdGlvbihhKXtjWzBdLmNoZWNrZWQmJmUuJHNldFZpZXdWYWx1ZShkLnZhbHVlLGEmJmEudHlwZSl9KTtlLiRyZW5kZXI9ZnVuY3Rpb24oKXtjWzBdLmNoZWNrZWQ9ZC52YWx1ZT09ZS4kdmlld1ZhbHVlfTtkLiRvYnNlcnZlKFxcXCJ2YWx1ZVxcXCIsZS4kcmVuZGVyKX0sY2hlY2tib3g6ZnVuY3Rpb24oYSxjLGQsZSxmLGcsaCxsKXt2YXIgaz1KZChsLGEsXFxcIm5nVHJ1ZVZhbHVlXFxcIixkLm5nVHJ1ZVZhbHVlLCEwKSxuPUpkKGwsYSxcXFwibmdGYWxzZVZhbHVlXFxcIixkLm5nRmFsc2VWYWx1ZSwhMSk7Yy5vbihcXFwiY2xpY2tcXFwiLGZ1bmN0aW9uKGEpe2UuJHNldFZpZXdWYWx1ZShjWzBdLmNoZWNrZWQsYSYmXFxuYS50eXBlKX0pO2UuJHJlbmRlcj1mdW5jdGlvbigpe2NbMF0uY2hlY2tlZD1lLiR2aWV3VmFsdWV9O2UuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuITE9PT1hfTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIGthKGEsayl9KTtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIGE/azpufSl9LGhpZGRlbjp2LGJ1dHRvbjp2LHN1Ym1pdDp2LHJlc2V0OnYsZmlsZTp2fSxGYz1bXFxcIiRicm93c2VyXFxcIixcXFwiJHNuaWZmZXJcXFwiLFxcXCIkZmlsdGVyXFxcIixcXFwiJHBhcnNlXFxcIixmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm57cmVzdHJpY3Q6XFxcIkVcXFwiLHJlcXVpcmU6W1xcXCI/bmdNb2RlbFxcXCJdLGxpbms6e3ByZTpmdW5jdGlvbihmLGcsaCxsKXtsWzBdJiYoVGRbTShoLnR5cGUpXXx8VGQudGV4dCkoZixnLGgsbFswXSxjLGEsZCxlKX19fX1dLHZnPS9eKHRydWV8ZmFsc2V8XFxcXGQrKSQvLE9lPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlxcXCJBXFxcIixwcmlvcml0eToxMDAsY29tcGlsZTpmdW5jdGlvbihhLFxcbmMpe3JldHVybiB2Zy50ZXN0KGMubmdWYWx1ZSk/ZnVuY3Rpb24oYSxjLGYpe2YuJHNldChcXFwidmFsdWVcXFwiLGEuJGV2YWwoZi5uZ1ZhbHVlKSl9OmZ1bmN0aW9uKGEsYyxmKXthLiR3YXRjaChmLm5nVmFsdWUsZnVuY3Rpb24oYSl7Zi4kc2V0KFxcXCJ2YWx1ZVxcXCIsYSl9KX19fX0sb2U9W1xcXCIkY29tcGlsZVxcXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlxcXCJBQ1xcXCIsY29tcGlsZTpmdW5jdGlvbihjKXthLiQkYWRkQmluZGluZ0NsYXNzKGMpO3JldHVybiBmdW5jdGlvbihjLGUsZil7YS4kJGFkZEJpbmRpbmdJbmZvKGUsZi5uZ0JpbmQpO2U9ZVswXTtjLiR3YXRjaChmLm5nQmluZCxmdW5jdGlvbihhKXtlLnRleHRDb250ZW50PWE9PT10P1xcXCJcXFwiOmF9KX19fX1dLHFlPVtcXFwiJGludGVycG9sYXRlXFxcIixcXFwiJGNvbXBpbGVcXFwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJue2NvbXBpbGU6ZnVuY3Rpb24oZCl7Yy4kJGFkZEJpbmRpbmdDbGFzcyhkKTtyZXR1cm4gZnVuY3Rpb24oZCxmLGcpe2Q9YShmLmF0dHIoZy4kYXR0ci5uZ0JpbmRUZW1wbGF0ZSkpO1xcbmMuJCRhZGRCaW5kaW5nSW5mbyhmLGQuZXhwcmVzc2lvbnMpO2Y9ZlswXTtnLiRvYnNlcnZlKFxcXCJuZ0JpbmRUZW1wbGF0ZVxcXCIsZnVuY3Rpb24oYSl7Zi50ZXh0Q29udGVudD1hPT09dD9cXFwiXFxcIjphfSl9fX19XSxwZT1bXFxcIiRzY2VcXFwiLFxcXCIkcGFyc2VcXFwiLFxcXCIkY29tcGlsZVxcXCIsZnVuY3Rpb24oYSxjLGQpe3JldHVybntyZXN0cmljdDpcXFwiQVxcXCIsY29tcGlsZTpmdW5jdGlvbihlLGYpe3ZhciBnPWMoZi5uZ0JpbmRIdG1sKSxoPWMoZi5uZ0JpbmRIdG1sLGZ1bmN0aW9uKGEpe3JldHVybihhfHxcXFwiXFxcIikudG9TdHJpbmcoKX0pO2QuJCRhZGRCaW5kaW5nQ2xhc3MoZSk7cmV0dXJuIGZ1bmN0aW9uKGMsZSxmKXtkLiQkYWRkQmluZGluZ0luZm8oZSxmLm5nQmluZEh0bWwpO2MuJHdhdGNoKGgsZnVuY3Rpb24oKXtlLmh0bWwoYS5nZXRUcnVzdGVkSHRtbChnKGMpKXx8XFxcIlxcXCIpfSl9fX19XSxOZT1yYSh7cmVzdHJpY3Q6XFxcIkFcXFwiLHJlcXVpcmU6XFxcIm5nTW9kZWxcXFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7ZS4kdmlld0NoYW5nZUxpc3RlbmVycy5wdXNoKGZ1bmN0aW9uKCl7YS4kZXZhbChkLm5nQ2hhbmdlKX0pfX0pLFxcbnJlPWxjKFxcXCJcXFwiLCEwKSx0ZT1sYyhcXFwiT2RkXFxcIiwwKSxzZT1sYyhcXFwiRXZlblxcXCIsMSksdWU9TWEoe2NvbXBpbGU6ZnVuY3Rpb24oYSxjKXtjLiRzZXQoXFxcIm5nQ2xvYWtcXFwiLHQpO2EucmVtb3ZlQ2xhc3MoXFxcIm5nLWNsb2FrXFxcIil9fSksdmU9W2Z1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlxcXCJBXFxcIixzY29wZTohMCxjb250cm9sbGVyOlxcXCJAXFxcIixwcmlvcml0eTo1MDB9fV0sS2M9e30sd2c9e2JsdXI6ITAsZm9jdXM6ITB9O20oXFxcImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgbW91c2VlbnRlciBtb3VzZWxlYXZlIGtleWRvd24ga2V5dXAga2V5cHJlc3Mgc3VibWl0IGZvY3VzIGJsdXIgY29weSBjdXQgcGFzdGVcXFwiLnNwbGl0KFxcXCIgXFxcIiksZnVuY3Rpb24oYSl7dmFyIGM9d2EoXFxcIm5nLVxcXCIrYSk7S2NbY109W1xcXCIkcGFyc2VcXFwiLFxcXCIkcm9vdFNjb3BlXFxcIixmdW5jdGlvbihkLGUpe3JldHVybntyZXN0cmljdDpcXFwiQVxcXCIsY29tcGlsZTpmdW5jdGlvbihmLGcpe3ZhciBoPVxcbmQoZ1tjXSxudWxsLCEwKTtyZXR1cm4gZnVuY3Rpb24oYyxkKXtkLm9uKGEsZnVuY3Rpb24oZCl7dmFyIGY9ZnVuY3Rpb24oKXtoKGMseyRldmVudDpkfSl9O3dnW2FdJiZlLiQkcGhhc2U/Yy4kZXZhbEFzeW5jKGYpOmMuJGFwcGx5KGYpfSl9fX19XX0pO3ZhciB5ZT1bXFxcIiRhbmltYXRlXFxcIixmdW5jdGlvbihhKXtyZXR1cm57bXVsdGlFbGVtZW50OiEwLHRyYW5zY2x1ZGU6XFxcImVsZW1lbnRcXFwiLHByaW9yaXR5OjYwMCx0ZXJtaW5hbDohMCxyZXN0cmljdDpcXFwiQVxcXCIsJCR0bGI6ITAsbGluazpmdW5jdGlvbihjLGQsZSxmLGcpe3ZhciBoLGwsaztjLiR3YXRjaChlLm5nSWYsZnVuY3Rpb24oYyl7Yz9sfHxnKGZ1bmN0aW9uKGMsZil7bD1mO2NbYy5sZW5ndGgrK109VS5jcmVhdGVDb21tZW50KFxcXCIgZW5kIG5nSWY6IFxcXCIrZS5uZ0lmK1xcXCIgXFxcIik7aD17Y2xvbmU6Y307YS5lbnRlcihjLGQucGFyZW50KCksZCl9KTooayYmKGsucmVtb3ZlKCksaz1udWxsKSxsJiYobC4kZGVzdHJveSgpLGw9bnVsbCksaCYmKGs9XFxucWIoaC5jbG9uZSksYS5sZWF2ZShrKS50aGVuKGZ1bmN0aW9uKCl7az1udWxsfSksaD1udWxsKSl9KX19fV0semU9W1xcXCIkdGVtcGxhdGVSZXF1ZXN0XFxcIixcXFwiJGFuY2hvclNjcm9sbFxcXCIsXFxcIiRhbmltYXRlXFxcIixmdW5jdGlvbihhLGMsZCl7cmV0dXJue3Jlc3RyaWN0OlxcXCJFQ0FcXFwiLHByaW9yaXR5OjQwMCx0ZXJtaW5hbDohMCx0cmFuc2NsdWRlOlxcXCJlbGVtZW50XFxcIixjb250cm9sbGVyOmNhLm5vb3AsY29tcGlsZTpmdW5jdGlvbihlLGYpe3ZhciBnPWYubmdJbmNsdWRlfHxmLnNyYyxoPWYub25sb2FkfHxcXFwiXFxcIixsPWYuYXV0b3Njcm9sbDtyZXR1cm4gZnVuY3Rpb24oZSxmLG0scyxxKXt2YXIgdD0wLEYsdSxwLHY9ZnVuY3Rpb24oKXt1JiYodS5yZW1vdmUoKSx1PW51bGwpO0YmJihGLiRkZXN0cm95KCksRj1udWxsKTtwJiYoZC5sZWF2ZShwKS50aGVuKGZ1bmN0aW9uKCl7dT1udWxsfSksdT1wLHA9bnVsbCl9O2UuJHdhdGNoKGcsZnVuY3Rpb24oZyl7dmFyIG09ZnVuY3Rpb24oKXshdyhsKXx8bCYmIWUuJGV2YWwobCl8fFxcbmMoKX0scj0rK3Q7Zz8oYShnLCEwKS50aGVuKGZ1bmN0aW9uKGEpe2lmKHI9PT10KXt2YXIgYz1lLiRuZXcoKTtzLnRlbXBsYXRlPWE7YT1xKGMsZnVuY3Rpb24oYSl7digpO2QuZW50ZXIoYSxudWxsLGYpLnRoZW4obSl9KTtGPWM7cD1hO0YuJGVtaXQoXFxcIiRpbmNsdWRlQ29udGVudExvYWRlZFxcXCIsZyk7ZS4kZXZhbChoKX19LGZ1bmN0aW9uKCl7cj09PXQmJih2KCksZS4kZW1pdChcXFwiJGluY2x1ZGVDb250ZW50RXJyb3JcXFwiLGcpKX0pLGUuJGVtaXQoXFxcIiRpbmNsdWRlQ29udGVudFJlcXVlc3RlZFxcXCIsZykpOih2KCkscy50ZW1wbGF0ZT1udWxsKX0pfX19fV0sUWU9W1xcXCIkY29tcGlsZVxcXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlxcXCJFQ0FcXFwiLHByaW9yaXR5Oi00MDAscmVxdWlyZTpcXFwibmdJbmNsdWRlXFxcIixsaW5rOmZ1bmN0aW9uKGMsZCxlLGYpey9TVkcvLnRlc3QoZFswXS50b1N0cmluZygpKT8oZC5lbXB0eSgpLGEoTmMoZi50ZW1wbGF0ZSxVKS5jaGlsZE5vZGVzKShjLGZ1bmN0aW9uKGEpe2QuYXBwZW5kKGEpfSxcXG57ZnV0dXJlUGFyZW50RWxlbWVudDpkfSkpOihkLmh0bWwoZi50ZW1wbGF0ZSksYShkLmNvbnRlbnRzKCkpKGMpKX19fV0sQWU9TWEoe3ByaW9yaXR5OjQ1MCxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihhLGMsZCl7YS4kZXZhbChkLm5nSW5pdCl9fX19KSxNZT1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcXFwiQVxcXCIscHJpb3JpdHk6MTAwLHJlcXVpcmU6XFxcIm5nTW9kZWxcXFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGY9Yy5hdHRyKGQuJGF0dHIubmdMaXN0KXx8XFxcIiwgXFxcIixnPVxcXCJmYWxzZVxcXCIhPT1kLm5nVHJpbSxoPWc/UihmKTpmO2UuJHBhcnNlcnMucHVzaChmdW5jdGlvbihhKXtpZighQShhKSl7dmFyIGM9W107YSYmbShhLnNwbGl0KGgpLGZ1bmN0aW9uKGEpe2EmJmMucHVzaChnP1IoYSk6YSl9KTtyZXR1cm4gY319KTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIEcoYSk/YS5qb2luKGYpOnR9KTtlLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiFhfHxcXG4hYS5sZW5ndGh9fX19LG1iPVxcXCJuZy12YWxpZFxcXCIsS2Q9XFxcIm5nLWludmFsaWRcXFwiLFZhPVxcXCJuZy1wcmlzdGluZVxcXCIsSmI9XFxcIm5nLWRpcnR5XFxcIixNZD1cXFwibmctcGVuZGluZ1xcXCIsTGI9bmV3IEooXFxcIm5nTW9kZWxcXFwiKSx4Zz1bXFxcIiRzY29wZVxcXCIsXFxcIiRleGNlcHRpb25IYW5kbGVyXFxcIixcXFwiJGF0dHJzXFxcIixcXFwiJGVsZW1lbnRcXFwiLFxcXCIkcGFyc2VcXFwiLFxcXCIkYW5pbWF0ZVxcXCIsXFxcIiR0aW1lb3V0XFxcIixcXFwiJHJvb3RTY29wZVxcXCIsXFxcIiRxXFxcIixcXFwiJGludGVycG9sYXRlXFxcIixmdW5jdGlvbihhLGMsZCxlLGYsZyxoLGwsayxuKXt0aGlzLiRtb2RlbFZhbHVlPXRoaXMuJHZpZXdWYWx1ZT1OdW1iZXIuTmFOO3RoaXMuJCRyYXdNb2RlbFZhbHVlPXQ7dGhpcy4kdmFsaWRhdG9ycz17fTt0aGlzLiRhc3luY1ZhbGlkYXRvcnM9e307dGhpcy4kcGFyc2Vycz1bXTt0aGlzLiRmb3JtYXR0ZXJzPVtdO3RoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnM9W107dGhpcy4kdW50b3VjaGVkPSEwO3RoaXMuJHRvdWNoZWQ9ITE7dGhpcy4kcHJpc3RpbmU9ITA7dGhpcy4kZGlydHk9XFxuITE7dGhpcy4kdmFsaWQ9ITA7dGhpcy4kaW52YWxpZD0hMTt0aGlzLiRlcnJvcj17fTt0aGlzLiQkc3VjY2Vzcz17fTt0aGlzLiRwZW5kaW5nPXQ7dGhpcy4kbmFtZT1uKGQubmFtZXx8XFxcIlxcXCIsITEpKGEpO3ZhciByPWYoZC5uZ01vZGVsKSxzPXIuYXNzaWduLHE9cixDPXMsRj1udWxsLHUscD10aGlzO3RoaXMuJCRzZXRPcHRpb25zPWZ1bmN0aW9uKGEpe2lmKChwLiRvcHRpb25zPWEpJiZhLmdldHRlclNldHRlcil7dmFyIGM9ZihkLm5nTW9kZWwrXFxcIigpXFxcIiksZz1mKGQubmdNb2RlbCtcXFwiKCQkJHApXFxcIik7cT1mdW5jdGlvbihhKXt2YXIgZD1yKGEpO3ooZCkmJihkPWMoYSkpO3JldHVybiBkfTtDPWZ1bmN0aW9uKGEsYyl7eihyKGEpKT9nKGEseyQkJHA6cC4kbW9kZWxWYWx1ZX0pOnMoYSxwLiRtb2RlbFZhbHVlKX19ZWxzZSBpZighci5hc3NpZ24pdGhyb3cgTGIoXFxcIm5vbmFzc2lnblxcXCIsZC5uZ01vZGVsLHVhKGUpKTt9O3RoaXMuJHJlbmRlcj12O3RoaXMuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIEEoYSl8fFxcblxcXCJcXFwiPT09YXx8bnVsbD09PWF8fGEhPT1hfTt2YXIgSz1lLmluaGVyaXRlZERhdGEoXFxcIiRmb3JtQ29udHJvbGxlclxcXCIpfHxJYix5PTA7SGQoe2N0cmw6dGhpcywkZWxlbWVudDplLHNldDpmdW5jdGlvbihhLGMpe2FbY109ITB9LHVuc2V0OmZ1bmN0aW9uKGEsYyl7ZGVsZXRlIGFbY119LHBhcmVudEZvcm06SywkYW5pbWF0ZTpnfSk7dGhpcy4kc2V0UHJpc3RpbmU9ZnVuY3Rpb24oKXtwLiRkaXJ0eT0hMTtwLiRwcmlzdGluZT0hMDtnLnJlbW92ZUNsYXNzKGUsSmIpO2cuYWRkQ2xhc3MoZSxWYSl9O3RoaXMuJHNldERpcnR5PWZ1bmN0aW9uKCl7cC4kZGlydHk9ITA7cC4kcHJpc3RpbmU9ITE7Zy5yZW1vdmVDbGFzcyhlLFZhKTtnLmFkZENsYXNzKGUsSmIpO0suJHNldERpcnR5KCl9O3RoaXMuJHNldFVudG91Y2hlZD1mdW5jdGlvbigpe3AuJHRvdWNoZWQ9ITE7cC4kdW50b3VjaGVkPSEwO2cuc2V0Q2xhc3MoZSxcXFwibmctdW50b3VjaGVkXFxcIixcXFwibmctdG91Y2hlZFxcXCIpfTt0aGlzLiRzZXRUb3VjaGVkPVxcbmZ1bmN0aW9uKCl7cC4kdG91Y2hlZD0hMDtwLiR1bnRvdWNoZWQ9ITE7Zy5zZXRDbGFzcyhlLFxcXCJuZy10b3VjaGVkXFxcIixcXFwibmctdW50b3VjaGVkXFxcIil9O3RoaXMuJHJvbGxiYWNrVmlld1ZhbHVlPWZ1bmN0aW9uKCl7aC5jYW5jZWwoRik7cC4kdmlld1ZhbHVlPXAuJCRsYXN0Q29tbWl0dGVkVmlld1ZhbHVlO3AuJHJlbmRlcigpfTt0aGlzLiR2YWxpZGF0ZT1mdW5jdGlvbigpe2lmKCFWKHAuJG1vZGVsVmFsdWUpfHwhaXNOYU4ocC4kbW9kZWxWYWx1ZSkpe3ZhciBhPXAuJCRyYXdNb2RlbFZhbHVlLGM9cC4kdmFsaWQsZD1wLiRtb2RlbFZhbHVlLGU9cC4kb3B0aW9ucyYmcC4kb3B0aW9ucy5hbGxvd0ludmFsaWQ7cC4kJHJ1blZhbGlkYXRvcnMoYSxwLiQkbGFzdENvbW1pdHRlZFZpZXdWYWx1ZSxmdW5jdGlvbihmKXtlfHxjPT09Znx8KHAuJG1vZGVsVmFsdWU9Zj9hOnQscC4kbW9kZWxWYWx1ZSE9PWQmJnAuJCR3cml0ZU1vZGVsVG9TY29wZSgpKX0pfX07dGhpcy4kJHJ1blZhbGlkYXRvcnM9XFxuZnVuY3Rpb24oYSxjLGQpe2Z1bmN0aW9uIGUoKXt2YXIgZD0hMDttKHAuJHZhbGlkYXRvcnMsZnVuY3Rpb24oZSxmKXt2YXIgaD1lKGEsYyk7ZD1kJiZoO2coZixoKX0pO3JldHVybiBkPyEwOihtKHAuJGFzeW5jVmFsaWRhdG9ycyxmdW5jdGlvbihhLGMpe2coYyxudWxsKX0pLCExKX1mdW5jdGlvbiBmKCl7dmFyIGQ9W10sZT0hMDttKHAuJGFzeW5jVmFsaWRhdG9ycyxmdW5jdGlvbihmLGgpe3ZhciBrPWYoYSxjKTtpZigha3x8IXooay50aGVuKSl0aHJvdyBMYihcXFwiJGFzeW5jVmFsaWRhdG9yc1xcXCIsayk7ZyhoLHQpO2QucHVzaChrLnRoZW4oZnVuY3Rpb24oKXtnKGgsITApfSxmdW5jdGlvbihhKXtlPSExO2coaCwhMSl9KSl9KTtkLmxlbmd0aD9rLmFsbChkKS50aGVuKGZ1bmN0aW9uKCl7aChlKX0sdik6aCghMCl9ZnVuY3Rpb24gZyhhLGMpe2w9PT15JiZwLiRzZXRWYWxpZGl0eShhLGMpfWZ1bmN0aW9uIGgoYSl7bD09PXkmJmQoYSl9eSsrO3ZhciBsPXk7KGZ1bmN0aW9uKCl7dmFyIGE9XFxucC4kJHBhcnNlck5hbWV8fFxcXCJwYXJzZVxcXCI7aWYodT09PXQpZyhhLG51bGwpO2Vsc2UgcmV0dXJuIHV8fChtKHAuJHZhbGlkYXRvcnMsZnVuY3Rpb24oYSxjKXtnKGMsbnVsbCl9KSxtKHAuJGFzeW5jVmFsaWRhdG9ycyxmdW5jdGlvbihhLGMpe2coYyxudWxsKX0pKSxnKGEsdSksdTtyZXR1cm4hMH0pKCk/ZSgpP2YoKTpoKCExKTpoKCExKX07dGhpcy4kY29tbWl0Vmlld1ZhbHVlPWZ1bmN0aW9uKCl7dmFyIGE9cC4kdmlld1ZhbHVlO2guY2FuY2VsKEYpO2lmKHAuJCRsYXN0Q29tbWl0dGVkVmlld1ZhbHVlIT09YXx8XFxcIlxcXCI9PT1hJiZwLiQkaGFzTmF0aXZlVmFsaWRhdG9ycylwLiQkbGFzdENvbW1pdHRlZFZpZXdWYWx1ZT1hLHAuJHByaXN0aW5lJiZ0aGlzLiRzZXREaXJ0eSgpLHRoaXMuJCRwYXJzZUFuZFZhbGlkYXRlKCl9O3RoaXMuJCRwYXJzZUFuZFZhbGlkYXRlPWZ1bmN0aW9uKCl7dmFyIGM9cC4kJGxhc3RDb21taXR0ZWRWaWV3VmFsdWU7aWYodT1BKGMpP3Q6ITApZm9yKHZhciBkPVxcbjA7ZDxwLiRwYXJzZXJzLmxlbmd0aDtkKyspaWYoYz1wLiRwYXJzZXJzW2RdKGMpLEEoYykpe3U9ITE7YnJlYWt9VihwLiRtb2RlbFZhbHVlKSYmaXNOYU4ocC4kbW9kZWxWYWx1ZSkmJihwLiRtb2RlbFZhbHVlPXEoYSkpO3ZhciBlPXAuJG1vZGVsVmFsdWUsZj1wLiRvcHRpb25zJiZwLiRvcHRpb25zLmFsbG93SW52YWxpZDtwLiQkcmF3TW9kZWxWYWx1ZT1jO2YmJihwLiRtb2RlbFZhbHVlPWMscC4kbW9kZWxWYWx1ZSE9PWUmJnAuJCR3cml0ZU1vZGVsVG9TY29wZSgpKTtwLiQkcnVuVmFsaWRhdG9ycyhjLHAuJCRsYXN0Q29tbWl0dGVkVmlld1ZhbHVlLGZ1bmN0aW9uKGEpe2Z8fChwLiRtb2RlbFZhbHVlPWE/Yzp0LHAuJG1vZGVsVmFsdWUhPT1lJiZwLiQkd3JpdGVNb2RlbFRvU2NvcGUoKSl9KX07dGhpcy4kJHdyaXRlTW9kZWxUb1Njb3BlPWZ1bmN0aW9uKCl7QyhhLHAuJG1vZGVsVmFsdWUpO20ocC4kdmlld0NoYW5nZUxpc3RlbmVycyxmdW5jdGlvbihhKXt0cnl7YSgpfWNhdGNoKGQpe2MoZCl9fSl9O1xcbnRoaXMuJHNldFZpZXdWYWx1ZT1mdW5jdGlvbihhLGMpe3AuJHZpZXdWYWx1ZT1hO3AuJG9wdGlvbnMmJiFwLiRvcHRpb25zLnVwZGF0ZU9uRGVmYXVsdHx8cC4kJGRlYm91bmNlVmlld1ZhbHVlQ29tbWl0KGMpfTt0aGlzLiQkZGVib3VuY2VWaWV3VmFsdWVDb21taXQ9ZnVuY3Rpb24oYyl7dmFyIGQ9MCxlPXAuJG9wdGlvbnM7ZSYmdyhlLmRlYm91bmNlKSYmKGU9ZS5kZWJvdW5jZSxWKGUpP2Q9ZTpWKGVbY10pP2Q9ZVtjXTpWKGVbXFxcImRlZmF1bHRcXFwiXSkmJihkPWVbXFxcImRlZmF1bHRcXFwiXSkpO2guY2FuY2VsKEYpO2Q/Rj1oKGZ1bmN0aW9uKCl7cC4kY29tbWl0Vmlld1ZhbHVlKCl9LGQpOmwuJCRwaGFzZT9wLiRjb21taXRWaWV3VmFsdWUoKTphLiRhcHBseShmdW5jdGlvbigpe3AuJGNvbW1pdFZpZXdWYWx1ZSgpfSl9O2EuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGM9cShhKTtpZihjIT09cC4kbW9kZWxWYWx1ZSYmKHAuJG1vZGVsVmFsdWU9PT1wLiRtb2RlbFZhbHVlfHxjPT09Yykpe3AuJG1vZGVsVmFsdWU9XFxucC4kJHJhd01vZGVsVmFsdWU9Yzt1PXQ7Zm9yKHZhciBkPXAuJGZvcm1hdHRlcnMsZT1kLmxlbmd0aCxmPWM7ZS0tOylmPWRbZV0oZik7cC4kdmlld1ZhbHVlIT09ZiYmKHAuJHZpZXdWYWx1ZT1wLiQkbGFzdENvbW1pdHRlZFZpZXdWYWx1ZT1mLHAuJHJlbmRlcigpLHAuJCRydW5WYWxpZGF0b3JzKGMsZix2KSl9cmV0dXJuIGN9KX1dLExlPVtcXFwiJHJvb3RTY29wZVxcXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlxcXCJBXFxcIixyZXF1aXJlOltcXFwibmdNb2RlbFxcXCIsXFxcIl4/Zm9ybVxcXCIsXFxcIl4/bmdNb2RlbE9wdGlvbnNcXFwiXSxjb250cm9sbGVyOnhnLHByaW9yaXR5OjEsY29tcGlsZTpmdW5jdGlvbihjKXtjLmFkZENsYXNzKFZhKS5hZGRDbGFzcyhcXFwibmctdW50b3VjaGVkXFxcIikuYWRkQ2xhc3MobWIpO3JldHVybntwcmU6ZnVuY3Rpb24oYSxjLGYsZyl7dmFyIGg9Z1swXSxsPWdbMV18fEliO2guJCRzZXRPcHRpb25zKGdbMl0mJmdbMl0uJG9wdGlvbnMpO2wuJGFkZENvbnRyb2woaCk7Zi4kb2JzZXJ2ZShcXFwibmFtZVxcXCIsXFxuZnVuY3Rpb24oYSl7aC4kbmFtZSE9PWEmJmwuJCRyZW5hbWVDb250cm9sKGgsYSl9KTthLiRvbihcXFwiJGRlc3Ryb3lcXFwiLGZ1bmN0aW9uKCl7bC4kcmVtb3ZlQ29udHJvbChoKX0pfSxwb3N0OmZ1bmN0aW9uKGMsZSxmLGcpe3ZhciBoPWdbMF07aWYoaC4kb3B0aW9ucyYmaC4kb3B0aW9ucy51cGRhdGVPbillLm9uKGguJG9wdGlvbnMudXBkYXRlT24sZnVuY3Rpb24oYSl7aC4kJGRlYm91bmNlVmlld1ZhbHVlQ29tbWl0KGEmJmEudHlwZSl9KTtlLm9uKFxcXCJibHVyXFxcIixmdW5jdGlvbihlKXtoLiR0b3VjaGVkfHwoYS4kJHBoYXNlP2MuJGV2YWxBc3luYyhoLiRzZXRUb3VjaGVkKTpjLiRhcHBseShoLiRzZXRUb3VjaGVkKSl9KX19fX19XSx5Zz0vKFxcXFxzK3xeKWRlZmF1bHQoXFxcXHMrfCQpLyxQZT1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcXFwiQVxcXCIsY29udHJvbGxlcjpbXFxcIiRzY29wZVxcXCIsXFxcIiRhdHRyc1xcXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzO3RoaXMuJG9wdGlvbnM9ZmEoYS4kZXZhbChjLm5nTW9kZWxPcHRpb25zKSk7XFxudGhpcy4kb3B0aW9ucy51cGRhdGVPbiE9PXQ/KHRoaXMuJG9wdGlvbnMudXBkYXRlT25EZWZhdWx0PSExLHRoaXMuJG9wdGlvbnMudXBkYXRlT249Uih0aGlzLiRvcHRpb25zLnVwZGF0ZU9uLnJlcGxhY2UoeWcsZnVuY3Rpb24oKXtkLiRvcHRpb25zLnVwZGF0ZU9uRGVmYXVsdD0hMDtyZXR1cm5cXFwiIFxcXCJ9KSkpOnRoaXMuJG9wdGlvbnMudXBkYXRlT25EZWZhdWx0PSEwfV19fSxCZT1NYSh7dGVybWluYWw6ITAscHJpb3JpdHk6MUUzfSksemc9SihcXFwibmdPcHRpb25zXFxcIiksQWc9L15cXFxccyooW1xcXFxzXFxcXFNdKz8pKD86XFxcXHMrYXNcXFxccysoW1xcXFxzXFxcXFNdKz8pKT8oPzpcXFxccytncm91cFxcXFxzK2J5XFxcXHMrKFtcXFxcc1xcXFxTXSs/KSk/KD86XFxcXHMrZGlzYWJsZVxcXFxzK3doZW5cXFxccysoW1xcXFxzXFxcXFNdKz8pKT9cXFxccytmb3JcXFxccysoPzooW1xcXFwkXFxcXHddW1xcXFwkXFxcXHddKil8KD86XFxcXChcXFxccyooW1xcXFwkXFxcXHddW1xcXFwkXFxcXHddKilcXFxccyosXFxcXHMqKFtcXFxcJFxcXFx3XVtcXFxcJFxcXFx3XSopXFxcXHMqXFxcXCkpKVxcXFxzK2luXFxcXHMrKFtcXFxcc1xcXFxTXSs/KSg/OlxcXFxzK3RyYWNrXFxcXHMrYnlcXFxccysoW1xcXFxzXFxcXFNdKz8pKT8kLyxcXG5KZT1bXFxcIiRjb21waWxlXFxcIixcXFwiJHBhcnNlXFxcIixmdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGQoYSxkLGUpe2Z1bmN0aW9uIGYoYSxjLGQsZSxnKXt0aGlzLnNlbGVjdFZhbHVlPWE7dGhpcy52aWV3VmFsdWU9Yzt0aGlzLmxhYmVsPWQ7dGhpcy5ncm91cD1lO3RoaXMuZGlzYWJsZWQ9Z31mdW5jdGlvbiBuKGEpe3ZhciBjO2lmKCFxJiZFYShhKSljPWE7ZWxzZXtjPVtdO2Zvcih2YXIgZCBpbiBhKWEuaGFzT3duUHJvcGVydHkoZCkmJlxcXCIkXFxcIiE9PWQuY2hhckF0KDApJiZjLnB1c2goZCl9cmV0dXJuIGN9dmFyIG09YS5tYXRjaChBZyk7aWYoIW0pdGhyb3cgemcoXFxcImlleHBcXFwiLGEsdWEoZCkpO3ZhciBzPW1bNV18fG1bN10scT1tWzZdO2E9LyBhcyAvLnRlc3QobVswXSkmJm1bMV07dmFyIHQ9bVs5XTtkPWMobVsyXT9tWzFdOnMpO3ZhciB2PWEmJmMoYSl8fGQsdT10JiZjKHQpLHA9dD9mdW5jdGlvbihhLGMpe3JldHVybiB1KGUsYyl9OmZ1bmN0aW9uKGEpe3JldHVybiBHYShhKX0sdz1mdW5jdGlvbihhLFxcbmMpe3JldHVybiBwKGEseihhLGMpKX0seT1jKG1bMl18fG1bMV0pLEE9YyhtWzNdfHxcXFwiXFxcIiksQj1jKG1bNF18fFxcXCJcXFwiKSxOPWMobVs4XSksRD17fSx6PXE/ZnVuY3Rpb24oYSxjKXtEW3FdPWM7RFtzXT1hO3JldHVybiBEfTpmdW5jdGlvbihhKXtEW3NdPWE7cmV0dXJuIER9O3JldHVybnt0cmFja0J5OnQsZ2V0VHJhY2tCeVZhbHVlOncsZ2V0V2F0Y2hhYmxlczpjKE4sZnVuY3Rpb24oYSl7dmFyIGM9W107YT1hfHxbXTtmb3IodmFyIGQ9bihhKSxmPWQubGVuZ3RoLGc9MDtnPGY7ZysrKXt2YXIgaD1hPT09ZD9nOmRbZ10saz16KGFbaF0saCksaD1wKGFbaF0sayk7Yy5wdXNoKGgpO2lmKG1bMl18fG1bMV0paD15KGUsayksYy5wdXNoKGgpO21bNF0mJihrPUIoZSxrKSxjLnB1c2goaykpfXJldHVybiBjfSksZ2V0T3B0aW9uczpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxjPXt9LGQ9TihlKXx8W10sZz1uKGQpLGg9Zy5sZW5ndGgsbT0wO208aDttKyspe3ZhciByPWQ9PT1nP206Z1ttXSxzPVxcbnooZFtyXSxyKSxxPXYoZSxzKSxyPXAocSxzKSx1PXkoZSxzKSx4PUEoZSxzKSxzPUIoZSxzKSxxPW5ldyBmKHIscSx1LHgscyk7YS5wdXNoKHEpO2Nbcl09cX1yZXR1cm57aXRlbXM6YSxzZWxlY3RWYWx1ZU1hcDpjLGdldE9wdGlvbkZyb21WaWV3VmFsdWU6ZnVuY3Rpb24oYSl7cmV0dXJuIGNbdyhhKV19LGdldFZpZXdWYWx1ZUZyb21PcHRpb246ZnVuY3Rpb24oYSl7cmV0dXJuIHQ/Y2EuY29weShhLnZpZXdWYWx1ZSk6YS52aWV3VmFsdWV9fX19fXZhciBlPVUuY3JlYXRlRWxlbWVudChcXFwib3B0aW9uXFxcIiksZj1VLmNyZWF0ZUVsZW1lbnQoXFxcIm9wdGdyb3VwXFxcIik7cmV0dXJue3Jlc3RyaWN0OlxcXCJBXFxcIix0ZXJtaW5hbDohMCxyZXF1aXJlOltcXFwic2VsZWN0XFxcIixcXFwiP25nTW9kZWxcXFwiXSxsaW5rOmZ1bmN0aW9uKGMsaCxsLGspe2Z1bmN0aW9uIG4oYSxjKXthLmVsZW1lbnQ9YztjLmRpc2FibGVkPWEuZGlzYWJsZWQ7YS52YWx1ZSE9PWMudmFsdWUmJihjLnZhbHVlPWEuc2VsZWN0VmFsdWUpO2EubGFiZWwhPT1cXG5jLmxhYmVsJiYoYy5sYWJlbD1hLmxhYmVsLGMudGV4dENvbnRlbnQ9YS5sYWJlbCl9ZnVuY3Rpb24gcihhLGMsZCxlKXtjJiZNKGMubm9kZU5hbWUpPT09ZD9kPWM6KGQ9ZS5jbG9uZU5vZGUoITEpLGM/YS5pbnNlcnRCZWZvcmUoZCxjKTphLmFwcGVuZENoaWxkKGQpKTtyZXR1cm4gZH1mdW5jdGlvbiBzKGEpe2Zvcih2YXIgYzthOyljPWEubmV4dFNpYmxpbmcsWGIoYSksYT1jfWZ1bmN0aW9uIHEoYSl7dmFyIGM9cCYmcFswXSxkPU4mJk5bMF07aWYoY3x8ZClmb3IoO2EmJihhPT09Y3x8YT09PWQpOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9ZnVuY3Rpb24gdCgpe3ZhciBhPUQmJnUucmVhZFZhbHVlKCk7RD16LmdldE9wdGlvbnMoKTt2YXIgYz17fSxkPWhbMF0uZmlyc3RDaGlsZDtCJiZoLnByZXBlbmQocCk7ZD1xKGQpO0QuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgZyxrO2EuZ3JvdXA/KGc9Y1thLmdyb3VwXSxnfHwoZz1yKGhbMF0sZCxcXFwib3B0Z3JvdXBcXFwiLGYpLGQ9XFxuZy5uZXh0U2libGluZyxnLmxhYmVsPWEuZ3JvdXAsZz1jW2EuZ3JvdXBdPXtncm91cEVsZW1lbnQ6ZyxjdXJyZW50T3B0aW9uRWxlbWVudDpnLmZpcnN0Q2hpbGR9KSxrPXIoZy5ncm91cEVsZW1lbnQsZy5jdXJyZW50T3B0aW9uRWxlbWVudCxcXFwib3B0aW9uXFxcIixlKSxuKGEsayksZy5jdXJyZW50T3B0aW9uRWxlbWVudD1rLm5leHRTaWJsaW5nKTooaz1yKGhbMF0sZCxcXFwib3B0aW9uXFxcIixlKSxuKGEsayksZD1rLm5leHRTaWJsaW5nKX0pO09iamVjdC5rZXlzKGMpLmZvckVhY2goZnVuY3Rpb24oYSl7cyhjW2FdLmN1cnJlbnRPcHRpb25FbGVtZW50KX0pO3MoZCk7di4kcmVuZGVyKCk7aWYoIXYuJGlzRW1wdHkoYSkpe3ZhciBnPXUucmVhZFZhbHVlKCk7KHoudHJhY2tCeT9rYShhLGcpOmE9PT1nKXx8KHYuJHNldFZpZXdWYWx1ZShnKSx2LiRyZW5kZXIoKSl9fXZhciB2PWtbMV07aWYodil7dmFyIHU9a1swXTtrPWwubXVsdGlwbGU7Zm9yKHZhciBwLHc9MCxBPWguY2hpbGRyZW4oKSxJPUEubGVuZ3RoO3c8XFxuSTt3KyspaWYoXFxcIlxcXCI9PT1BW3ddLnZhbHVlKXtwPUEuZXEodyk7YnJlYWt9dmFyIEI9ISFwLE49eShlLmNsb25lTm9kZSghMSkpO04udmFsKFxcXCI/XFxcIik7dmFyIEQsej1kKGwubmdPcHRpb25zLGgsYyk7az8odi4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4hYXx8MD09PWEubGVuZ3RofSx1LndyaXRlVmFsdWU9ZnVuY3Rpb24oYSl7RC5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuZWxlbWVudC5zZWxlY3RlZD0hMX0pO2EmJmEuZm9yRWFjaChmdW5jdGlvbihhKXsoYT1ELmdldE9wdGlvbkZyb21WaWV3VmFsdWUoYSkpJiYhYS5kaXNhYmxlZCYmKGEuZWxlbWVudC5zZWxlY3RlZD0hMCl9KX0sdS5yZWFkVmFsdWU9ZnVuY3Rpb24oKXt2YXIgYT1oLnZhbCgpfHxbXSxjPVtdO20oYSxmdW5jdGlvbihhKXthPUQuc2VsZWN0VmFsdWVNYXBbYV07YS5kaXNhYmxlZHx8Yy5wdXNoKEQuZ2V0Vmlld1ZhbHVlRnJvbU9wdGlvbihhKSl9KTtyZXR1cm4gY30sei50cmFja0J5JiZjLiR3YXRjaENvbGxlY3Rpb24oZnVuY3Rpb24oKXtpZihHKHYuJHZpZXdWYWx1ZSkpcmV0dXJuIHYuJHZpZXdWYWx1ZS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHouZ2V0VHJhY2tCeVZhbHVlKGEpfSl9LFxcbmZ1bmN0aW9uKCl7di4kcmVuZGVyKCl9KSk6KHUud3JpdGVWYWx1ZT1mdW5jdGlvbihhKXt2YXIgYz1ELmdldE9wdGlvbkZyb21WaWV3VmFsdWUoYSk7YyYmIWMuZGlzYWJsZWQ/aFswXS52YWx1ZSE9PWMuc2VsZWN0VmFsdWUmJihOLnJlbW92ZSgpLEJ8fHAucmVtb3ZlKCksaFswXS52YWx1ZT1jLnNlbGVjdFZhbHVlLGMuZWxlbWVudC5zZWxlY3RlZD0hMCxjLmVsZW1lbnQuc2V0QXR0cmlidXRlKFxcXCJzZWxlY3RlZFxcXCIsXFxcInNlbGVjdGVkXFxcIikpOm51bGw9PT1hfHxCPyhOLnJlbW92ZSgpLEJ8fGgucHJlcGVuZChwKSxoLnZhbChcXFwiXFxcIikscC5wcm9wKFxcXCJzZWxlY3RlZFxcXCIsITApLHAuYXR0cihcXFwic2VsZWN0ZWRcXFwiLCEwKSk6KEJ8fHAucmVtb3ZlKCksaC5wcmVwZW5kKE4pLGgudmFsKFxcXCI/XFxcIiksTi5wcm9wKFxcXCJzZWxlY3RlZFxcXCIsITApLE4uYXR0cihcXFwic2VsZWN0ZWRcXFwiLCEwKSl9LHUucmVhZFZhbHVlPWZ1bmN0aW9uKCl7dmFyIGE9RC5zZWxlY3RWYWx1ZU1hcFtoLnZhbCgpXTtyZXR1cm4gYSYmIWEuZGlzYWJsZWQ/XFxuKEJ8fHAucmVtb3ZlKCksTi5yZW1vdmUoKSxELmdldFZpZXdWYWx1ZUZyb21PcHRpb24oYSkpOm51bGx9LHoudHJhY2tCeSYmYy4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gei5nZXRUcmFja0J5VmFsdWUodi4kdmlld1ZhbHVlKX0sZnVuY3Rpb24oKXt2LiRyZW5kZXIoKX0pKTtCPyhwLnJlbW92ZSgpLGEocCkoYykscC5yZW1vdmVDbGFzcyhcXFwibmctc2NvcGVcXFwiKSk6cD15KGUuY2xvbmVOb2RlKCExKSk7dCgpO2MuJHdhdGNoQ29sbGVjdGlvbih6LmdldFdhdGNoYWJsZXMsdCl9fX19XSxDZT1bXFxcIiRsb2NhbGVcXFwiLFxcXCIkaW50ZXJwb2xhdGVcXFwiLFxcXCIkbG9nXFxcIixmdW5jdGlvbihhLGMsZCl7dmFyIGU9L3t9L2csZj0vXndoZW4oTWludXMpPyguKykkLztyZXR1cm57bGluazpmdW5jdGlvbihnLGgsbCl7ZnVuY3Rpb24gayhhKXtoLnRleHQoYXx8XFxcIlxcXCIpfXZhciBuPWwuY291bnQscj1sLiRhdHRyLndoZW4mJmguYXR0cihsLiRhdHRyLndoZW4pLHM9bC5vZmZzZXR8fDAscT1nLiRldmFsKHIpfHx7fSx0PVxcbnt9LHc9Yy5zdGFydFN5bWJvbCgpLHU9Yy5lbmRTeW1ib2woKSxwPXcrbitcXFwiLVxcXCIrcyt1LHk9Y2Eubm9vcCx6O20obCxmdW5jdGlvbihhLGMpe3ZhciBkPWYuZXhlYyhjKTtkJiYoZD0oZFsxXT9cXFwiLVxcXCI6XFxcIlxcXCIpK00oZFsyXSkscVtkXT1oLmF0dHIobC4kYXR0cltjXSkpfSk7bShxLGZ1bmN0aW9uKGEsZCl7dFtkXT1jKGEucmVwbGFjZShlLHApKX0pO2cuJHdhdGNoKG4sZnVuY3Rpb24oYyl7dmFyIGU9cGFyc2VGbG9hdChjKSxmPWlzTmFOKGUpO2Z8fGUgaW4gcXx8KGU9YS5wbHVyYWxDYXQoZS1zKSk7ZT09PXp8fGYmJlYoeikmJmlzTmFOKHopfHwoeSgpLGY9dFtlXSxBKGYpPyhudWxsIT1jJiZkLmRlYnVnKFxcXCJuZ1BsdXJhbGl6ZTogbm8gcnVsZSBkZWZpbmVkIGZvciAnXFxcIitlK1xcXCInIGluIFxcXCIrcikseT12LGsoKSk6eT1nLiR3YXRjaChmLGspLHo9ZSl9KX19fV0sRGU9W1xcXCIkcGFyc2VcXFwiLFxcXCIkYW5pbWF0ZVxcXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD1KKFxcXCJuZ1JlcGVhdFxcXCIpLGU9ZnVuY3Rpb24oYSxjLFxcbmQsZSxrLG0scil7YVtkXT1lO2smJihhW2tdPW0pO2EuJGluZGV4PWM7YS4kZmlyc3Q9MD09PWM7YS4kbGFzdD1jPT09ci0xO2EuJG1pZGRsZT0hKGEuJGZpcnN0fHxhLiRsYXN0KTthLiRvZGQ9IShhLiRldmVuPTA9PT0oYyYxKSl9O3JldHVybntyZXN0cmljdDpcXFwiQVxcXCIsbXVsdGlFbGVtZW50OiEwLHRyYW5zY2x1ZGU6XFxcImVsZW1lbnRcXFwiLHByaW9yaXR5OjFFMyx0ZXJtaW5hbDohMCwkJHRsYjohMCxjb21waWxlOmZ1bmN0aW9uKGYsZyl7dmFyIGg9Zy5uZ1JlcGVhdCxsPVUuY3JlYXRlQ29tbWVudChcXFwiIGVuZCBuZ1JlcGVhdDogXFxcIitoK1xcXCIgXFxcIiksaz1oLm1hdGNoKC9eXFxcXHMqKFtcXFxcc1xcXFxTXSs/KVxcXFxzK2luXFxcXHMrKFtcXFxcc1xcXFxTXSs/KSg/OlxcXFxzK2FzXFxcXHMrKFtcXFxcc1xcXFxTXSs/KSk/KD86XFxcXHMrdHJhY2tcXFxccytieVxcXFxzKyhbXFxcXHNcXFxcU10rPykpP1xcXFxzKiQvKTtpZighayl0aHJvdyBkKFxcXCJpZXhwXFxcIixoKTt2YXIgbj1rWzFdLHI9a1syXSxzPWtbM10scT1rWzRdLGs9bi5tYXRjaCgvXig/OihcXFxccypbXFxcXCRcXFxcd10rKXxcXFxcKFxcXFxzKihbXFxcXCRcXFxcd10rKVxcXFxzKixcXFxccyooW1xcXFwkXFxcXHddKylcXFxccypcXFxcKSkkLyk7XFxuaWYoIWspdGhyb3cgZChcXFwiaWlkZXhwXFxcIixuKTt2YXIgdj1rWzNdfHxrWzFdLHc9a1syXTtpZihzJiYoIS9eWyRhLXpBLVpfXVskYS16QS1aMC05X10qJC8udGVzdChzKXx8L14obnVsbHx1bmRlZmluZWR8dGhpc3xcXFxcJGluZGV4fFxcXFwkZmlyc3R8XFxcXCRtaWRkbGV8XFxcXCRsYXN0fFxcXFwkZXZlbnxcXFxcJG9kZHxcXFxcJHBhcmVudHxcXFxcJHJvb3R8XFxcXCRpZCkkLy50ZXN0KHMpKSl0aHJvdyBkKFxcXCJiYWRpZGVudFxcXCIscyk7dmFyIHUscCx6LEEsST17JGlkOkdhfTtxP3U9YShxKTooej1mdW5jdGlvbihhLGMpe3JldHVybiBHYShjKX0sQT1mdW5jdGlvbihhKXtyZXR1cm4gYX0pO3JldHVybiBmdW5jdGlvbihhLGYsZyxrLG4pe3UmJihwPWZ1bmN0aW9uKGMsZCxlKXt3JiYoSVt3XT1jKTtJW3ZdPWQ7SS4kaW5kZXg9ZTtyZXR1cm4gdShhLEkpfSk7dmFyIHE9Z2EoKTthLiR3YXRjaENvbGxlY3Rpb24ocixmdW5jdGlvbihnKXt2YXIgayxyLHU9ZlswXSx4LEQ9Z2EoKSxJLEgsTCxHLE0sSixPO3MmJihhW3NdPWcpO2lmKEVhKGcpKU09XFxuZyxyPXB8fHo7ZWxzZSBmb3IoTyBpbiByPXB8fEEsTT1bXSxnKWcuaGFzT3duUHJvcGVydHkoTykmJlxcXCIkXFxcIiE9PU8uY2hhckF0KDApJiZNLnB1c2goTyk7ST1NLmxlbmd0aDtPPUFycmF5KEkpO2ZvcihrPTA7azxJO2srKylpZihIPWc9PT1NP2s6TVtrXSxMPWdbSF0sRz1yKEgsTCxrKSxxW0ddKUo9cVtHXSxkZWxldGUgcVtHXSxEW0ddPUosT1trXT1KO2Vsc2V7aWYoRFtHXSl0aHJvdyBtKE8sZnVuY3Rpb24oYSl7YSYmYS5zY29wZSYmKHFbYS5pZF09YSl9KSxkKFxcXCJkdXBlc1xcXCIsaCxHLEwpO09ba109e2lkOkcsc2NvcGU6dCxjbG9uZTp0fTtEW0ddPSEwfWZvcih4IGluIHEpe0o9cVt4XTtHPXFiKEouY2xvbmUpO2MubGVhdmUoRyk7aWYoR1swXS5wYXJlbnROb2RlKWZvcihrPTAscj1HLmxlbmd0aDtrPHI7aysrKUdba10uJCROR19SRU1PVkVEPSEwO0ouc2NvcGUuJGRlc3Ryb3koKX1mb3Ioaz0wO2s8STtrKyspaWYoSD1nPT09TT9rOk1ba10sTD1nW0hdLEo9T1trXSxKLnNjb3BlKXt4PVxcbnU7ZG8geD14Lm5leHRTaWJsaW5nO3doaWxlKHgmJnguJCROR19SRU1PVkVEKTtKLmNsb25lWzBdIT14JiZjLm1vdmUocWIoSi5jbG9uZSksbnVsbCx5KHUpKTt1PUouY2xvbmVbSi5jbG9uZS5sZW5ndGgtMV07ZShKLnNjb3BlLGssdixMLHcsSCxJKX1lbHNlIG4oZnVuY3Rpb24oYSxkKXtKLnNjb3BlPWQ7dmFyIGY9bC5jbG9uZU5vZGUoITEpO2FbYS5sZW5ndGgrK109ZjtjLmVudGVyKGEsbnVsbCx5KHUpKTt1PWY7Si5jbG9uZT1hO0RbSi5pZF09SjtlKEouc2NvcGUsayx2LEwsdyxILEkpfSk7cT1EfSl9fX19XSxFZT1bXFxcIiRhbmltYXRlXFxcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XFxcIkFcXFwiLG11bHRpRWxlbWVudDohMCxsaW5rOmZ1bmN0aW9uKGMsZCxlKXtjLiR3YXRjaChlLm5nU2hvdyxmdW5jdGlvbihjKXthW2M/XFxcInJlbW92ZUNsYXNzXFxcIjpcXFwiYWRkQ2xhc3NcXFwiXShkLFxcXCJuZy1oaWRlXFxcIix7dGVtcENsYXNzZXM6XFxcIm5nLWhpZGUtYW5pbWF0ZVxcXCJ9KX0pfX19XSx4ZT1bXFxcIiRhbmltYXRlXFxcIixcXG5mdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XFxcIkFcXFwiLG11bHRpRWxlbWVudDohMCxsaW5rOmZ1bmN0aW9uKGMsZCxlKXtjLiR3YXRjaChlLm5nSGlkZSxmdW5jdGlvbihjKXthW2M/XFxcImFkZENsYXNzXFxcIjpcXFwicmVtb3ZlQ2xhc3NcXFwiXShkLFxcXCJuZy1oaWRlXFxcIix7dGVtcENsYXNzZXM6XFxcIm5nLWhpZGUtYW5pbWF0ZVxcXCJ9KX0pfX19XSxGZT1NYShmdW5jdGlvbihhLGMsZCl7YS4kd2F0Y2goZC5uZ1N0eWxlLGZ1bmN0aW9uKGEsZCl7ZCYmYSE9PWQmJm0oZCxmdW5jdGlvbihhLGQpe2MuY3NzKGQsXFxcIlxcXCIpfSk7YSYmYy5jc3MoYSl9LCEwKX0pLEdlPVtcXFwiJGFuaW1hdGVcXFwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXF1aXJlOlxcXCJuZ1N3aXRjaFxcXCIsY29udHJvbGxlcjpbXFxcIiRzY29wZVxcXCIsZnVuY3Rpb24oKXt0aGlzLmNhc2VzPXt9fV0sbGluazpmdW5jdGlvbihjLGQsZSxmKXt2YXIgZz1bXSxoPVtdLGw9W10saz1bXSxuPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGZ1bmN0aW9uKCl7YS5zcGxpY2UoYywxKX19O2MuJHdhdGNoKGUubmdTd2l0Y2h8fFxcbmUub24sZnVuY3Rpb24oYyl7dmFyIGQsZTtkPTA7Zm9yKGU9bC5sZW5ndGg7ZDxlOysrZClhLmNhbmNlbChsW2RdKTtkPWwubGVuZ3RoPTA7Zm9yKGU9ay5sZW5ndGg7ZDxlOysrZCl7dmFyIHE9cWIoaFtkXS5jbG9uZSk7a1tkXS4kZGVzdHJveSgpOyhsW2RdPWEubGVhdmUocSkpLnRoZW4obihsLGQpKX1oLmxlbmd0aD0wO2subGVuZ3RoPTA7KGc9Zi5jYXNlc1tcXFwiIVxcXCIrY118fGYuY2FzZXNbXFxcIj9cXFwiXSkmJm0oZyxmdW5jdGlvbihjKXtjLnRyYW5zY2x1ZGUoZnVuY3Rpb24oZCxlKXtrLnB1c2goZSk7dmFyIGY9Yy5lbGVtZW50O2RbZC5sZW5ndGgrK109VS5jcmVhdGVDb21tZW50KFxcXCIgZW5kIG5nU3dpdGNoV2hlbjogXFxcIik7aC5wdXNoKHtjbG9uZTpkfSk7YS5lbnRlcihkLGYucGFyZW50KCksZil9KX0pfSl9fX1dLEhlPU1hKHt0cmFuc2NsdWRlOlxcXCJlbGVtZW50XFxcIixwcmlvcml0eToxMjAwLHJlcXVpcmU6XFxcIl5uZ1N3aXRjaFxcXCIsbXVsdGlFbGVtZW50OiEwLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxcXG5mKXtlLmNhc2VzW1xcXCIhXFxcIitkLm5nU3dpdGNoV2hlbl09ZS5jYXNlc1tcXFwiIVxcXCIrZC5uZ1N3aXRjaFdoZW5dfHxbXTtlLmNhc2VzW1xcXCIhXFxcIitkLm5nU3dpdGNoV2hlbl0ucHVzaCh7dHJhbnNjbHVkZTpmLGVsZW1lbnQ6Y30pfX0pLEllPU1hKHt0cmFuc2NsdWRlOlxcXCJlbGVtZW50XFxcIixwcmlvcml0eToxMjAwLHJlcXVpcmU6XFxcIl5uZ1N3aXRjaFxcXCIsbXVsdGlFbGVtZW50OiEwLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxmKXtlLmNhc2VzW1xcXCI/XFxcIl09ZS5jYXNlc1tcXFwiP1xcXCJdfHxbXTtlLmNhc2VzW1xcXCI/XFxcIl0ucHVzaCh7dHJhbnNjbHVkZTpmLGVsZW1lbnQ6Y30pfX0pLEtlPU1hKHtyZXN0cmljdDpcXFwiRUFDXFxcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUsZil7aWYoIWYpdGhyb3cgSihcXFwibmdUcmFuc2NsdWRlXFxcIikoXFxcIm9ycGhhblxcXCIsdWEoYykpO2YoZnVuY3Rpb24oYSl7Yy5lbXB0eSgpO2MuYXBwZW5kKGEpfSl9fSksa2U9W1xcXCIkdGVtcGxhdGVDYWNoZVxcXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlxcXCJFXFxcIix0ZXJtaW5hbDohMCxcXG5jb21waWxlOmZ1bmN0aW9uKGMsZCl7XFxcInRleHQvbmctdGVtcGxhdGVcXFwiPT1kLnR5cGUmJmEucHV0KGQuaWQsY1swXS50ZXh0KX19fV0sQmc9eyRzZXRWaWV3VmFsdWU6diwkcmVuZGVyOnZ9LENnPVtcXFwiJGVsZW1lbnRcXFwiLFxcXCIkc2NvcGVcXFwiLFxcXCIkYXR0cnNcXFwiLGZ1bmN0aW9uKGEsYyxkKXt2YXIgZT10aGlzLGY9bmV3IFNhO2UubmdNb2RlbEN0cmw9Qmc7ZS51bmtub3duT3B0aW9uPXkoVS5jcmVhdGVFbGVtZW50KFxcXCJvcHRpb25cXFwiKSk7ZS5yZW5kZXJVbmtub3duT3B0aW9uPWZ1bmN0aW9uKGMpe2M9XFxcIj8gXFxcIitHYShjKStcXFwiID9cXFwiO2UudW5rbm93bk9wdGlvbi52YWwoYyk7YS5wcmVwZW5kKGUudW5rbm93bk9wdGlvbik7YS52YWwoYyl9O2MuJG9uKFxcXCIkZGVzdHJveVxcXCIsZnVuY3Rpb24oKXtlLnJlbmRlclVua25vd25PcHRpb249dn0pO2UucmVtb3ZlVW5rbm93bk9wdGlvbj1mdW5jdGlvbigpe2UudW5rbm93bk9wdGlvbi5wYXJlbnQoKSYmZS51bmtub3duT3B0aW9uLnJlbW92ZSgpfTtlLnJlYWRWYWx1ZT1cXG5mdW5jdGlvbigpe2UucmVtb3ZlVW5rbm93bk9wdGlvbigpO3JldHVybiBhLnZhbCgpfTtlLndyaXRlVmFsdWU9ZnVuY3Rpb24oYyl7ZS5oYXNPcHRpb24oYyk/KGUucmVtb3ZlVW5rbm93bk9wdGlvbigpLGEudmFsKGMpLFxcXCJcXFwiPT09YyYmZS5lbXB0eU9wdGlvbi5wcm9wKFxcXCJzZWxlY3RlZFxcXCIsITApKTpudWxsPT1jJiZlLmVtcHR5T3B0aW9uPyhlLnJlbW92ZVVua25vd25PcHRpb24oKSxhLnZhbChcXFwiXFxcIikpOmUucmVuZGVyVW5rbm93bk9wdGlvbihjKX07ZS5hZGRPcHRpb249ZnVuY3Rpb24oYSxjKXtSYShhLCdcXFwib3B0aW9uIHZhbHVlXFxcIicpO1xcXCJcXFwiPT09YSYmKGUuZW1wdHlPcHRpb249Yyk7dmFyIGQ9Zi5nZXQoYSl8fDA7Zi5wdXQoYSxkKzEpfTtlLnJlbW92ZU9wdGlvbj1mdW5jdGlvbihhKXt2YXIgYz1mLmdldChhKTtjJiYoMT09PWM/KGYucmVtb3ZlKGEpLFxcXCJcXFwiPT09YSYmKGUuZW1wdHlPcHRpb249dCkpOmYucHV0KGEsYy0xKSl9O2UuaGFzT3B0aW9uPWZ1bmN0aW9uKGEpe3JldHVybiEhZi5nZXQoYSl9fV0sXFxubGU9ZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XFxcIkVcXFwiLHJlcXVpcmU6W1xcXCJzZWxlY3RcXFwiLFxcXCI/bmdNb2RlbFxcXCJdLGNvbnRyb2xsZXI6Q2csbGluazpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZj1lWzFdO2lmKGYpe3ZhciBnPWVbMF07Zy5uZ01vZGVsQ3RybD1mO2YuJHJlbmRlcj1mdW5jdGlvbigpe2cud3JpdGVWYWx1ZShmLiR2aWV3VmFsdWUpfTtjLm9uKFxcXCJjaGFuZ2VcXFwiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXtmLiRzZXRWaWV3VmFsdWUoZy5yZWFkVmFsdWUoKSl9KX0pO2lmKGQubXVsdGlwbGUpe2cucmVhZFZhbHVlPWZ1bmN0aW9uKCl7dmFyIGE9W107bShjLmZpbmQoXFxcIm9wdGlvblxcXCIpLGZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQmJmEucHVzaChjLnZhbHVlKX0pO3JldHVybiBhfTtnLndyaXRlVmFsdWU9ZnVuY3Rpb24oYSl7dmFyIGQ9bmV3IFNhKGEpO20oYy5maW5kKFxcXCJvcHRpb25cXFwiKSxmdW5jdGlvbihhKXthLnNlbGVjdGVkPXcoZC5nZXQoYS52YWx1ZSkpfSl9O3ZhciBoLFxcbmw9TmFOO2EuJHdhdGNoKGZ1bmN0aW9uKCl7bCE9PWYuJHZpZXdWYWx1ZXx8a2EoaCxmLiR2aWV3VmFsdWUpfHwoaD1pYShmLiR2aWV3VmFsdWUpLGYuJHJlbmRlcigpKTtsPWYuJHZpZXdWYWx1ZX0pO2YuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIWF8fDA9PT1hLmxlbmd0aH19fX19fSxuZT1bXFxcIiRpbnRlcnBvbGF0ZVxcXCIsZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYyhhKXthWzBdLmhhc0F0dHJpYnV0ZShcXFwic2VsZWN0ZWRcXFwiKSYmKGFbMF0uc2VsZWN0ZWQ9ITApfXJldHVybntyZXN0cmljdDpcXFwiRVxcXCIscHJpb3JpdHk6MTAwLGNvbXBpbGU6ZnVuY3Rpb24oZCxlKXtpZihBKGUudmFsdWUpKXt2YXIgZj1hKGQudGV4dCgpLCEwKTtmfHxlLiRzZXQoXFxcInZhbHVlXFxcIixkLnRleHQoKSl9cmV0dXJuIGZ1bmN0aW9uKGEsZCxlKXt2YXIgaz1kLnBhcmVudCgpLG09ay5kYXRhKFxcXCIkc2VsZWN0Q29udHJvbGxlclxcXCIpfHxrLnBhcmVudCgpLmRhdGEoXFxcIiRzZWxlY3RDb250cm9sbGVyXFxcIik7bSYmbS5uZ01vZGVsQ3RybCYmXFxuKGY/YS4kd2F0Y2goZixmdW5jdGlvbihhLGYpe2UuJHNldChcXFwidmFsdWVcXFwiLGEpO2YhPT1hJiZtLnJlbW92ZU9wdGlvbihmKTttLmFkZE9wdGlvbihhLGQpO20ubmdNb2RlbEN0cmwuJHJlbmRlcigpO2MoZCl9KToobS5hZGRPcHRpb24oZS52YWx1ZSxkKSxtLm5nTW9kZWxDdHJsLiRyZW5kZXIoKSxjKGQpKSxkLm9uKFxcXCIkZGVzdHJveVxcXCIsZnVuY3Rpb24oKXttLnJlbW92ZU9wdGlvbihlLnZhbHVlKTttLm5nTW9kZWxDdHJsLiRyZW5kZXIoKX0pKX19fX1dLG1lPXJhKHtyZXN0cmljdDpcXFwiRVxcXCIsdGVybWluYWw6ITF9KSxIYz1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcXFwiQVxcXCIscmVxdWlyZTpcXFwiP25nTW9kZWxcXFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7ZSYmKGQucmVxdWlyZWQ9ITAsZS4kdmFsaWRhdG9ycy5yZXF1aXJlZD1mdW5jdGlvbihhLGMpe3JldHVybiFkLnJlcXVpcmVkfHwhZS4kaXNFbXB0eShjKX0sZC4kb2JzZXJ2ZShcXFwicmVxdWlyZWRcXFwiLGZ1bmN0aW9uKCl7ZS4kdmFsaWRhdGUoKX0pKX19fSxcXG5HYz1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcXFwiQVxcXCIscmVxdWlyZTpcXFwiP25nTW9kZWxcXFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoZSl7dmFyIGYsZz1kLm5nUGF0dGVybnx8ZC5wYXR0ZXJuO2QuJG9ic2VydmUoXFxcInBhdHRlcm5cXFwiLGZ1bmN0aW9uKGEpe0woYSkmJjA8YS5sZW5ndGgmJihhPW5ldyBSZWdFeHAoXFxcIl5cXFwiK2ErXFxcIiRcXFwiKSk7aWYoYSYmIWEudGVzdCl0aHJvdyBKKFxcXCJuZ1BhdHRlcm5cXFwiKShcXFwibm9yZWdleHBcXFwiLGcsYSx1YShjKSk7Zj1hfHx0O2UuJHZhbGlkYXRlKCl9KTtlLiR2YWxpZGF0b3JzLnBhdHRlcm49ZnVuY3Rpb24oYSl7cmV0dXJuIGUuJGlzRW1wdHkoYSl8fEEoZil8fGYudGVzdChhKX19fX19LEpjPWZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlxcXCJBXFxcIixyZXF1aXJlOlxcXCI/bmdNb2RlbFxcXCIsbGluazpmdW5jdGlvbihhLGMsZCxlKXtpZihlKXt2YXIgZj0tMTtkLiRvYnNlcnZlKFxcXCJtYXhsZW5ndGhcXFwiLGZ1bmN0aW9uKGEpe2E9VyhhKTtmPWlzTmFOKGEpPy0xOmE7ZS4kdmFsaWRhdGUoKX0pO1xcbmUuJHZhbGlkYXRvcnMubWF4bGVuZ3RoPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIDA+Znx8ZS4kaXNFbXB0eShjKXx8Yy5sZW5ndGg8PWZ9fX19fSxJYz1mdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcXFwiQVxcXCIscmVxdWlyZTpcXFwiP25nTW9kZWxcXFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoZSl7dmFyIGY9MDtkLiRvYnNlcnZlKFxcXCJtaW5sZW5ndGhcXFwiLGZ1bmN0aW9uKGEpe2Y9VyhhKXx8MDtlLiR2YWxpZGF0ZSgpfSk7ZS4kdmFsaWRhdG9ycy5taW5sZW5ndGg9ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZS4kaXNFbXB0eShjKXx8Yy5sZW5ndGg+PWZ9fX19fTtPLmFuZ3VsYXIuYm9vdHN0cmFwP2NvbnNvbGUubG9nKFxcXCJXQVJOSU5HOiBUcmllZCB0byBsb2FkIGFuZ3VsYXIgbW9yZSB0aGFuIG9uY2UuXFxcIik6KGNlKCksZWUoY2EpLHkoVSkucmVhZHkoZnVuY3Rpb24oKXtaZChVLEFjKX0pKX0pKHdpbmRvdyxkb2N1bWVudCk7IXdpbmRvdy5hbmd1bGFyLiQkY3NwKCkmJndpbmRvdy5hbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLmZpbmQoXFxcImhlYWRcXFwiKS5wcmVwZW5kKCc8c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7W25nXFxcXFxcXFw6Y2xvYWtdLFtuZy1jbG9ha10sW2RhdGEtbmctY2xvYWtdLFt4LW5nLWNsb2FrXSwubmctY2xvYWssLngtbmctY2xvYWssLm5nLWhpZGU6bm90KC5uZy1oaWRlLWFuaW1hdGUpe2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O31uZ1xcXFxcXFxcOmZvcm17ZGlzcGxheTpibG9jazt9Lm5nLWFuaW1hdGUtc2hpbXt2aXNpYmlsaXR5OmhpZGRlbjt9Lm5nLWFuY2hvcntwb3NpdGlvbjphYnNvbHV0ZTt9PC9zdHlsZT4nKTtcXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLm1pbi5qcy5tYXBcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci9hbmd1bGFyLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwicmVxdWlyZShcIiEhL2hvbWUvYmxhY2F0ZS9wcm9qZWN0L2ZpcmVhbnQtbW9iaWxlL25vZGVfbW9kdWxlcy8uMC42LjFAc2NyaXB0LWxvYWRlci9hZGRTY3JpcHQuanNcIikocmVxdWlyZShcIiEhL2hvbWUvYmxhY2F0ZS9wcm9qZWN0L2ZpcmVhbnQtbW9iaWxlL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEvaG9tZS9ibGFjYXRlL3Byb2plY3QvZmlyZWFudC1tb2JpbGUvYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXJvdXRlL2FuZ3VsYXItcm91dGUubWluLmpzXCIpKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC42LjFAc2NyaXB0LWxvYWRlciEuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1yb3V0ZS9hbmd1bGFyLXJvdXRlLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuIEFuZ3VsYXJKUyB2MS4yLjBcXG4gKGMpIDIwMTAtMjAxMiBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcXG4gTGljZW5zZTogTUlUXFxuKi9cXG4oZnVuY3Rpb24odCxjLEIpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB3KHMscixnLGEsaCl7cmV0dXJue3Jlc3RyaWN0OlxcXCJFQ0FcXFwiLHRlcm1pbmFsOiEwLHByaW9yaXR5OjQwMCx0cmFuc2NsdWRlOlxcXCJlbGVtZW50XFxcIixjb21waWxlOmZ1bmN0aW9uKGssZCxBKXtyZXR1cm4gZnVuY3Rpb24odSxrLGQpe2Z1bmN0aW9uIHYoKXtsJiYobC4kZGVzdHJveSgpLGw9bnVsbCk7bSYmKGgubGVhdmUobSksbT1udWxsKX1mdW5jdGlvbiB4KCl7dmFyIGY9cy5jdXJyZW50JiZzLmN1cnJlbnQubG9jYWxzLHk9ZiYmZi4kdGVtcGxhdGU7aWYoeSl7dmFyIHo9dS4kbmV3KCk7QSh6LGZ1bmN0aW9uKGUpe2UuaHRtbCh5KTtoLmVudGVyKGUsbnVsbCxtfHxrLGZ1bmN0aW9uKCl7IWMuaXNEZWZpbmVkKG4pfHxuJiYhdS4kZXZhbChuKXx8cigpfSk7digpO3ZhciBwPWcoZS5jb250ZW50cygpKSxxPXMuY3VycmVudDtsPXEuc2NvcGU9ejttPWU7aWYocS5jb250cm9sbGVyKXtmLiRzY29wZT1sO3ZhciBkPWEocS5jb250cm9sbGVyLFxcbmYpO3EuY29udHJvbGxlckFzJiYobFtxLmNvbnRyb2xsZXJBc109ZCk7ZS5kYXRhKFxcXCIkbmdDb250cm9sbGVyQ29udHJvbGxlclxcXCIsZCk7ZS5jaGlsZHJlbigpLmRhdGEoXFxcIiRuZ0NvbnRyb2xsZXJDb250cm9sbGVyXFxcIixkKX1wKGwpO2wuJGVtaXQoXFxcIiR2aWV3Q29udGVudExvYWRlZFxcXCIpO2wuJGV2YWwoYil9KX1lbHNlIHYoKX12YXIgbCxtLG49ZC5hdXRvc2Nyb2xsLGI9ZC5vbmxvYWR8fFxcXCJcXFwiO3UuJG9uKFxcXCIkcm91dGVDaGFuZ2VTdWNjZXNzXFxcIix4KTt4KCl9fX19dD1jLm1vZHVsZShcXFwibmdSb3V0ZVxcXCIsW1xcXCJuZ1xcXCJdKS5wcm92aWRlcihcXFwiJHJvdXRlXFxcIixmdW5jdGlvbigpe2Z1bmN0aW9uIHMoYSxoKXtyZXR1cm4gYy5leHRlbmQobmV3IChjLmV4dGVuZChmdW5jdGlvbigpe30se3Byb3RvdHlwZTphfSkpLGgpfWZ1bmN0aW9uIHIoYSxjKXt2YXIgaz1jLmNhc2VJbnNlbnNpdGl2ZU1hdGNoLGQ9e29yaWdpbmFsUGF0aDphLHJlZ2V4cDphfSxnPWQua2V5cz1bXTthPWEucmVwbGFjZSgvKFsoKS5dKS9nLFxcblxcXCJcXFxcXFxcXCQxXFxcIikucmVwbGFjZSgvKFxcXFwvKT86KFxcXFx3KykoW1xcXFw/fFxcXFwqXSk/L2csZnVuY3Rpb24oYSxjLGgsZCl7YT1cXFwiP1xcXCI9PT1kP2Q6bnVsbDtkPVxcXCIqXFxcIj09PWQ/ZDpudWxsO2cucHVzaCh7bmFtZTpoLG9wdGlvbmFsOiEhYX0pO2M9Y3x8XFxcIlxcXCI7cmV0dXJuXFxcIlxcXCIrKGE/XFxcIlxcXCI6YykrXFxcIig/OlxcXCIrKGE/YzpcXFwiXFxcIikrKGQmJlxcXCIoLis/KVxcXCJ8fFxcXCIoW14vXSspXFxcIikrKGF8fFxcXCJcXFwiKStcXFwiKVxcXCIrKGF8fFxcXCJcXFwiKX0pLnJlcGxhY2UoLyhbXFxcXC8kXFxcXCpdKS9nLFxcXCJcXFxcXFxcXCQxXFxcIik7ZC5yZWdleHA9UmVnRXhwKFxcXCJeXFxcIithK1xcXCIkXFxcIixrP1xcXCJpXFxcIjpcXFwiXFxcIik7cmV0dXJuIGR9dmFyIGc9e307dGhpcy53aGVuPWZ1bmN0aW9uKGEsaCl7Z1thXT1jLmV4dGVuZCh7cmVsb2FkT25TZWFyY2g6ITB9LGgsYSYmcihhLGgpKTtpZihhKXt2YXIgaz1cXFwiL1xcXCI9PWFbYS5sZW5ndGgtMV0/YS5zdWJzdHIoMCxhLmxlbmd0aC0xKTphK1xcXCIvXFxcIjtnW2tdPWMuZXh0ZW5kKHtyZWRpcmVjdFRvOmF9LHIoayxoKSl9cmV0dXJuIHRoaXN9O3RoaXMub3RoZXJ3aXNlPWZ1bmN0aW9uKGEpe3RoaXMud2hlbihudWxsLFxcbmEpO3JldHVybiB0aGlzfTt0aGlzLiRnZXQ9W1xcXCIkcm9vdFNjb3BlXFxcIixcXFwiJGxvY2F0aW9uXFxcIixcXFwiJHJvdXRlUGFyYW1zXFxcIixcXFwiJHFcXFwiLFxcXCIkaW5qZWN0b3JcXFwiLFxcXCIkaHR0cFxcXCIsXFxcIiR0ZW1wbGF0ZUNhY2hlXFxcIixcXFwiJHNjZVxcXCIsZnVuY3Rpb24oYSxoLGssZCxyLHUsdCx3KXtmdW5jdGlvbiB2KCl7dmFyIGI9eCgpLGY9bi5jdXJyZW50O2lmKGImJmYmJmIuJCRyb3V0ZT09PWYuJCRyb3V0ZSYmYy5lcXVhbHMoYi5wYXRoUGFyYW1zLGYucGF0aFBhcmFtcykmJiFiLnJlbG9hZE9uU2VhcmNoJiYhbSlmLnBhcmFtcz1iLnBhcmFtcyxjLmNvcHkoZi5wYXJhbXMsayksYS4kYnJvYWRjYXN0KFxcXCIkcm91dGVVcGRhdGVcXFwiLGYpO2Vsc2UgaWYoYnx8ZiltPSExLGEuJGJyb2FkY2FzdChcXFwiJHJvdXRlQ2hhbmdlU3RhcnRcXFwiLGIsZiksKG4uY3VycmVudD1iKSYmYi5yZWRpcmVjdFRvJiYoYy5pc1N0cmluZyhiLnJlZGlyZWN0VG8pP2gucGF0aChsKGIucmVkaXJlY3RUbyxiLnBhcmFtcykpLnNlYXJjaChiLnBhcmFtcykucmVwbGFjZSgpOlxcbmgudXJsKGIucmVkaXJlY3RUbyhiLnBhdGhQYXJhbXMsaC5wYXRoKCksaC5zZWFyY2goKSkpLnJlcGxhY2UoKSksZC53aGVuKGIpLnRoZW4oZnVuY3Rpb24oKXtpZihiKXt2YXIgYT1jLmV4dGVuZCh7fSxiLnJlc29sdmUpLGYsZTtjLmZvckVhY2goYSxmdW5jdGlvbihiLGYpe2FbZl09Yy5pc1N0cmluZyhiKT9yLmdldChiKTpyLmludm9rZShiKX0pO2MuaXNEZWZpbmVkKGY9Yi50ZW1wbGF0ZSk/Yy5pc0Z1bmN0aW9uKGYpJiYoZj1mKGIucGFyYW1zKSk6Yy5pc0RlZmluZWQoZT1iLnRlbXBsYXRlVXJsKSYmKGMuaXNGdW5jdGlvbihlKSYmKGU9ZShiLnBhcmFtcykpLGU9dy5nZXRUcnVzdGVkUmVzb3VyY2VVcmwoZSksYy5pc0RlZmluZWQoZSkmJihiLmxvYWRlZFRlbXBsYXRlVXJsPWUsZj11LmdldChlLHtjYWNoZTp0fSkudGhlbihmdW5jdGlvbihiKXtyZXR1cm4gYi5kYXRhfSkpKTtjLmlzRGVmaW5lZChmKSYmKGEuJHRlbXBsYXRlPWYpO3JldHVybiBkLmFsbChhKX19KS50aGVuKGZ1bmN0aW9uKGQpe2I9PVxcbm4uY3VycmVudCYmKGImJihiLmxvY2Fscz1kLGMuY29weShiLnBhcmFtcyxrKSksYS4kYnJvYWRjYXN0KFxcXCIkcm91dGVDaGFuZ2VTdWNjZXNzXFxcIixiLGYpKX0sZnVuY3Rpb24oYyl7Yj09bi5jdXJyZW50JiZhLiRicm9hZGNhc3QoXFxcIiRyb3V0ZUNoYW5nZUVycm9yXFxcIixiLGYsYyl9KX1mdW5jdGlvbiB4KCl7dmFyIGIsYTtjLmZvckVhY2goZyxmdW5jdGlvbihkLGwpe3ZhciBlO2lmKGU9IWEpe3ZhciBwPWgucGF0aCgpO2U9ZC5rZXlzO3ZhciBxPXt9O2lmKGQucmVnZXhwKWlmKHA9ZC5yZWdleHAuZXhlYyhwKSl7Zm9yKHZhciBnPTEsaz1wLmxlbmd0aDtnPGs7KytnKXt2YXIgbT1lW2ctMV0sbj1cXFwic3RyaW5nXFxcIj09dHlwZW9mIHBbZ10/ZGVjb2RlVVJJQ29tcG9uZW50KHBbZ10pOnBbZ107bSYmbiYmKHFbbS5uYW1lXT1uKX1lPXF9ZWxzZSBlPW51bGw7ZWxzZSBlPW51bGw7ZT1iPWV9ZSYmKGE9cyhkLHtwYXJhbXM6Yy5leHRlbmQoe30saC5zZWFyY2goKSxiKSxwYXRoUGFyYW1zOmJ9KSxhLiQkcm91dGU9XFxuZCl9KTtyZXR1cm4gYXx8Z1tudWxsXSYmcyhnW251bGxdLHtwYXJhbXM6e30scGF0aFBhcmFtczp7fX0pfWZ1bmN0aW9uIGwoYSxkKXt2YXIgZz1bXTtjLmZvckVhY2goKGF8fFxcXCJcXFwiKS5zcGxpdChcXFwiOlxcXCIpLGZ1bmN0aW9uKGEsYil7aWYoMD09PWIpZy5wdXNoKGEpO2Vsc2V7dmFyIGM9YS5tYXRjaCgvKFxcXFx3KykoLiopLyksaD1jWzFdO2cucHVzaChkW2hdKTtnLnB1c2goY1syXXx8XFxcIlxcXCIpO2RlbGV0ZSBkW2hdfX0pO3JldHVybiBnLmpvaW4oXFxcIlxcXCIpfXZhciBtPSExLG49e3JvdXRlczpnLHJlbG9hZDpmdW5jdGlvbigpe209ITA7YS4kZXZhbEFzeW5jKHYpfX07YS4kb24oXFxcIiRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NcXFwiLHYpO3JldHVybiBufV19KTt0LnByb3ZpZGVyKFxcXCIkcm91dGVQYXJhbXNcXFwiLGZ1bmN0aW9uKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJue319fSk7dC5kaXJlY3RpdmUoXFxcIm5nVmlld1xcXCIsdyk7dy4kaW5qZWN0PVtcXFwiJHJvdXRlXFxcIixcXFwiJGFuY2hvclNjcm9sbFxcXCIsXFxcIiRjb21waWxlXFxcIixcXFwiJGNvbnRyb2xsZXJcXFwiLFxcblxcXCIkYW5pbWF0ZVxcXCJdfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXJvdXRlLm1pbi5qcy5tYXBcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1yb3V0ZS9hbmd1bGFyLXJvdXRlLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwicmVxdWlyZShcIiEhL2hvbWUvYmxhY2F0ZS9wcm9qZWN0L2ZpcmVhbnQtbW9iaWxlL25vZGVfbW9kdWxlcy8uMC42LjFAc2NyaXB0LWxvYWRlci9hZGRTY3JpcHQuanNcIikocmVxdWlyZShcIiEhL2hvbWUvYmxhY2F0ZS9wcm9qZWN0L2ZpcmVhbnQtbW9iaWxlL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEvaG9tZS9ibGFjYXRlL3Byb2plY3QvZmlyZWFudC1tb2JpbGUvYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLWNvb2tpZXMvYW5ndWxhci1jb29raWVzLm1pbi5qc1wiKSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNi4xQHNjcmlwdC1sb2FkZXIhLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItY29va2llcy9hbmd1bGFyLWNvb2tpZXMubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLypcXG4gQW5ndWxhckpTIHYxLjYuMlxcbiAoYykgMjAxMC0yMDE3IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xcbiBMaWNlbnNlOiBNSVRcXG4qL1xcbihmdW5jdGlvbihuLGMpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBsKGIsYSxnKXt2YXIgZD1nLmJhc2VIcmVmKCksaz1iWzBdO3JldHVybiBmdW5jdGlvbihiLGUsZil7dmFyIGcsaDtmPWZ8fHt9O2g9Zi5leHBpcmVzO2c9Yy5pc0RlZmluZWQoZi5wYXRoKT9mLnBhdGg6ZDtjLmlzVW5kZWZpbmVkKGUpJiYoaD1cXFwiVGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcXFwiLGU9XFxcIlxcXCIpO2MuaXNTdHJpbmcoaCkmJihoPW5ldyBEYXRlKGgpKTtlPWVuY29kZVVSSUNvbXBvbmVudChiKStcXFwiPVxcXCIrZW5jb2RlVVJJQ29tcG9uZW50KGUpO2U9ZSsoZz9cXFwiO3BhdGg9XFxcIitnOlxcXCJcXFwiKSsoZi5kb21haW4/XFxcIjtkb21haW49XFxcIitmLmRvbWFpbjpcXFwiXFxcIik7ZSs9aD9cXFwiO2V4cGlyZXM9XFxcIitoLnRvVVRDU3RyaW5nKCk6XFxcIlxcXCI7ZSs9Zi5zZWN1cmU/XFxcIjtzZWN1cmVcXFwiOlxcXCJcXFwiO2Y9ZS5sZW5ndGgrMTs0MDk2PGYmJmEud2FybihcXFwiQ29va2llICdcXFwiK2IrXFxcIicgcG9zc2libHkgbm90IHNldCBvciBvdmVyZmxvd2VkIGJlY2F1c2UgaXQgd2FzIHRvbyBsYXJnZSAoXFxcIitcXG5mK1xcXCIgPiA0MDk2IGJ5dGVzKSFcXFwiKTtrLmNvb2tpZT1lfX1jLm1vZHVsZShcXFwibmdDb29raWVzXFxcIixbXFxcIm5nXFxcIl0pLnByb3ZpZGVyKFxcXCIkY29va2llc1xcXCIsW2Z1bmN0aW9uKCl7dmFyIGI9dGhpcy5kZWZhdWx0cz17fTt0aGlzLiRnZXQ9W1xcXCIkJGNvb2tpZVJlYWRlclxcXCIsXFxcIiQkY29va2llV3JpdGVyXFxcIixmdW5jdGlvbihhLGcpe3JldHVybntnZXQ6ZnVuY3Rpb24oZCl7cmV0dXJuIGEoKVtkXX0sZ2V0T2JqZWN0OmZ1bmN0aW9uKGQpe3JldHVybihkPXRoaXMuZ2V0KGQpKT9jLmZyb21Kc29uKGQpOmR9LGdldEFsbDpmdW5jdGlvbigpe3JldHVybiBhKCl9LHB1dDpmdW5jdGlvbihkLGEsbSl7ZyhkLGEsbT9jLmV4dGVuZCh7fSxiLG0pOmIpfSxwdXRPYmplY3Q6ZnVuY3Rpb24oZCxiLGEpe3RoaXMucHV0KGQsYy50b0pzb24oYiksYSl9LHJlbW92ZTpmdW5jdGlvbihhLGspe2coYSx2b2lkIDAsaz9jLmV4dGVuZCh7fSxiLGspOmIpfX19XX1dKTtjLm1vZHVsZShcXFwibmdDb29raWVzXFxcIikuZmFjdG9yeShcXFwiJGNvb2tpZVN0b3JlXFxcIixcXG5bXFxcIiRjb29raWVzXFxcIixmdW5jdGlvbihiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiBiLmdldE9iamVjdChhKX0scHV0OmZ1bmN0aW9uKGEsYyl7Yi5wdXRPYmplY3QoYSxjKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe2IucmVtb3ZlKGEpfX19XSk7bC4kaW5qZWN0PVtcXFwiJGRvY3VtZW50XFxcIixcXFwiJGxvZ1xcXCIsXFxcIiRicm93c2VyXFxcIl07Yy5tb2R1bGUoXFxcIm5nQ29va2llc1xcXCIpLnByb3ZpZGVyKFxcXCIkJGNvb2tpZVdyaXRlclxcXCIsZnVuY3Rpb24oKXt0aGlzLiRnZXQ9bH0pfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLWNvb2tpZXMubWluLmpzLm1hcFxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLWNvb2tpZXMvYW5ndWxhci1jb29raWVzLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwicmVxdWlyZShcIiEhL2hvbWUvYmxhY2F0ZS9wcm9qZWN0L2ZpcmVhbnQtbW9iaWxlL25vZGVfbW9kdWxlcy8uMC42LjFAc2NyaXB0LWxvYWRlci9hZGRTY3JpcHQuanNcIikocmVxdWlyZShcIiEhL2hvbWUvYmxhY2F0ZS9wcm9qZWN0L2ZpcmVhbnQtbW9iaWxlL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEvaG9tZS9ibGFjYXRlL3Byb2plY3QvZmlyZWFudC1tb2JpbGUvYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXJlc291cmNlL2FuZ3VsYXItcmVzb3VyY2UubWluLmpzXCIpKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC42LjFAc2NyaXB0LWxvYWRlciEuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1yZXNvdXJjZS9hbmd1bGFyLXJlc291cmNlLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxuIEFuZ3VsYXJKUyB2MS4zLjE1XFxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXFxuIExpY2Vuc2U6IE1JVFxcbiovXFxuKGZ1bmN0aW9uKEksZCxCKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gRChmLHEpe3E9cXx8e307ZC5mb3JFYWNoKHEsZnVuY3Rpb24oZCxoKXtkZWxldGUgcVtoXX0pO2Zvcih2YXIgaCBpbiBmKSFmLmhhc093blByb3BlcnR5KGgpfHxcXFwiJFxcXCI9PT1oLmNoYXJBdCgwKSYmXFxcIiRcXFwiPT09aC5jaGFyQXQoMSl8fChxW2hdPWZbaF0pO3JldHVybiBxfXZhciB3PWQuJCRtaW5FcnIoXFxcIiRyZXNvdXJjZVxcXCIpLEM9L14oXFxcXC5bYS16QS1aXyRdWzAtOWEtekEtWl8kXSopKyQvO2QubW9kdWxlKFxcXCJuZ1Jlc291cmNlXFxcIixbXFxcIm5nXFxcIl0pLnByb3ZpZGVyKFxcXCIkcmVzb3VyY2VcXFwiLGZ1bmN0aW9uKCl7dmFyIGY9dGhpczt0aGlzLmRlZmF1bHRzPXtzdHJpcFRyYWlsaW5nU2xhc2hlczohMCxhY3Rpb25zOntnZXQ6e21ldGhvZDpcXFwiR0VUXFxcIn0sc2F2ZTp7bWV0aG9kOlxcXCJQT1NUXFxcIn0scXVlcnk6e21ldGhvZDpcXFwiR0VUXFxcIixpc0FycmF5OiEwfSxyZW1vdmU6e21ldGhvZDpcXFwiREVMRVRFXFxcIn0sXFxcImRlbGV0ZVxcXCI6e21ldGhvZDpcXFwiREVMRVRFXFxcIn19fTtcXG50aGlzLiRnZXQ9W1xcXCIkaHR0cFxcXCIsXFxcIiRxXFxcIixmdW5jdGlvbihxLGgpe2Z1bmN0aW9uIHQoZCxnKXt0aGlzLnRlbXBsYXRlPWQ7dGhpcy5kZWZhdWx0cz1zKHt9LGYuZGVmYXVsdHMsZyk7dGhpcy51cmxQYXJhbXM9e319ZnVuY3Rpb24gdih4LGcsbCxtKXtmdW5jdGlvbiBjKGIsayl7dmFyIGM9e307az1zKHt9LGcsayk7cihrLGZ1bmN0aW9uKGEsayl7dShhKSYmKGE9YSgpKTt2YXIgZDtpZihhJiZhLmNoYXJBdCYmXFxcIkBcXFwiPT1hLmNoYXJBdCgwKSl7ZD1iO3ZhciBlPWEuc3Vic3RyKDEpO2lmKG51bGw9PWV8fFxcXCJcXFwiPT09ZXx8XFxcImhhc093blByb3BlcnR5XFxcIj09PWV8fCFDLnRlc3QoXFxcIi5cXFwiK2UpKXRocm93IHcoXFxcImJhZG1lbWJlclxcXCIsZSk7Zm9yKHZhciBlPWUuc3BsaXQoXFxcIi5cXFwiKSxuPTAsZz1lLmxlbmd0aDtuPGcmJmQhPT1CO24rKyl7dmFyIGg9ZVtuXTtkPW51bGwhPT1kP2RbaF06Qn19ZWxzZSBkPWE7Y1trXT1kfSk7cmV0dXJuIGN9ZnVuY3Rpb24gRihiKXtyZXR1cm4gYi5yZXNvdXJjZX1mdW5jdGlvbiBlKGIpe0QoYnx8XFxue30sdGhpcyl9dmFyIEc9bmV3IHQoeCxtKTtsPXMoe30sZi5kZWZhdWx0cy5hY3Rpb25zLGwpO2UucHJvdG90eXBlLnRvSlNPTj1mdW5jdGlvbigpe3ZhciBiPXMoe30sdGhpcyk7ZGVsZXRlIGIuJHByb21pc2U7ZGVsZXRlIGIuJHJlc29sdmVkO3JldHVybiBifTtyKGwsZnVuY3Rpb24oYixrKXt2YXIgZz0vXihQT1NUfFBVVHxQQVRDSCkkL2kudGVzdChiLm1ldGhvZCk7ZVtrXT1mdW5jdGlvbihhLHksbSx4KXt2YXIgbj17fSxmLGwsejtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSA0Ono9eCxsPW07Y2FzZSAzOmNhc2UgMjppZih1KHkpKXtpZih1KGEpKXtsPWE7ej15O2JyZWFrfWw9eTt6PW19ZWxzZXtuPWE7Zj15O2w9bTticmVha31jYXNlIDE6dShhKT9sPWE6Zz9mPWE6bj1hO2JyZWFrO2Nhc2UgMDpicmVhaztkZWZhdWx0OnRocm93IHcoXFxcImJhZGFyZ3NcXFwiLGFyZ3VtZW50cy5sZW5ndGgpO312YXIgdD10aGlzIGluc3RhbmNlb2YgZSxwPXQ/ZjpiLmlzQXJyYXk/W106bmV3IGUoZiksXFxuQT17fSx2PWIuaW50ZXJjZXB0b3ImJmIuaW50ZXJjZXB0b3IucmVzcG9uc2V8fEYsQz1iLmludGVyY2VwdG9yJiZiLmludGVyY2VwdG9yLnJlc3BvbnNlRXJyb3J8fEI7cihiLGZ1bmN0aW9uKGIsYSl7XFxcInBhcmFtc1xcXCIhPWEmJlxcXCJpc0FycmF5XFxcIiE9YSYmXFxcImludGVyY2VwdG9yXFxcIiE9YSYmKEFbYV09SChiKSl9KTtnJiYoQS5kYXRhPWYpO0cuc2V0VXJsUGFyYW1zKEEscyh7fSxjKGYsYi5wYXJhbXN8fHt9KSxuKSxiLnVybCk7bj1xKEEpLnRoZW4oZnVuY3Rpb24oYSl7dmFyIGM9YS5kYXRhLGc9cC4kcHJvbWlzZTtpZihjKXtpZihkLmlzQXJyYXkoYykhPT0hIWIuaXNBcnJheSl0aHJvdyB3KFxcXCJiYWRjZmdcXFwiLGssYi5pc0FycmF5P1xcXCJhcnJheVxcXCI6XFxcIm9iamVjdFxcXCIsZC5pc0FycmF5KGMpP1xcXCJhcnJheVxcXCI6XFxcIm9iamVjdFxcXCIpO2IuaXNBcnJheT8ocC5sZW5ndGg9MCxyKGMsZnVuY3Rpb24oYSl7XFxcIm9iamVjdFxcXCI9PT10eXBlb2YgYT9wLnB1c2gobmV3IGUoYSkpOnAucHVzaChhKX0pKTooRChjLHApLHAuJHByb21pc2U9XFxuZyl9cC4kcmVzb2x2ZWQ9ITA7YS5yZXNvdXJjZT1wO3JldHVybiBhfSxmdW5jdGlvbihhKXtwLiRyZXNvbHZlZD0hMDsoenx8RSkoYSk7cmV0dXJuIGgucmVqZWN0KGEpfSk7bj1uLnRoZW4oZnVuY3Rpb24oYSl7dmFyIGI9dihhKTsobHx8RSkoYixhLmhlYWRlcnMpO3JldHVybiBifSxDKTtyZXR1cm4gdD9uOihwLiRwcm9taXNlPW4scC4kcmVzb2x2ZWQ9ITEscCl9O2UucHJvdG90eXBlW1xcXCIkXFxcIitrXT1mdW5jdGlvbihhLGIsYyl7dShhKSYmKGM9YixiPWEsYT17fSk7YT1lW2tdLmNhbGwodGhpcyxhLHRoaXMsYixjKTtyZXR1cm4gYS4kcHJvbWlzZXx8YX19KTtlLmJpbmQ9ZnVuY3Rpb24oYil7cmV0dXJuIHYoeCxzKHt9LGcsYiksbCl9O3JldHVybiBlfXZhciBFPWQubm9vcCxyPWQuZm9yRWFjaCxzPWQuZXh0ZW5kLEg9ZC5jb3B5LHU9ZC5pc0Z1bmN0aW9uO3QucHJvdG90eXBlPXtzZXRVcmxQYXJhbXM6ZnVuY3Rpb24oZixnLGwpe3ZhciBtPXRoaXMsYz1sfHxtLnRlbXBsYXRlLGgsXFxuZSxxPW0udXJsUGFyYW1zPXt9O3IoYy5zcGxpdCgvXFxcXFcvKSxmdW5jdGlvbihiKXtpZihcXFwiaGFzT3duUHJvcGVydHlcXFwiPT09Yil0aHJvdyB3KFxcXCJiYWRuYW1lXFxcIik7IS9eXFxcXGQrJC8udGVzdChiKSYmYiYmKG5ldyBSZWdFeHAoXFxcIihefFteXFxcXFxcXFxcXFxcXFxcXF0pOlxcXCIrYitcXFwiKFxcXFxcXFxcV3wkKVxcXCIpKS50ZXN0KGMpJiYocVtiXT0hMCl9KTtjPWMucmVwbGFjZSgvXFxcXFxcXFw6L2csXFxcIjpcXFwiKTtnPWd8fHt9O3IobS51cmxQYXJhbXMsZnVuY3Rpb24oYixrKXtoPWcuaGFzT3duUHJvcGVydHkoayk/Z1trXTptLmRlZmF1bHRzW2tdO2QuaXNEZWZpbmVkKGgpJiZudWxsIT09aD8oZT1lbmNvZGVVUklDb21wb25lbnQoaCkucmVwbGFjZSgvJTQwL2dpLFxcXCJAXFxcIikucmVwbGFjZSgvJTNBL2dpLFxcXCI6XFxcIikucmVwbGFjZSgvJTI0L2csXFxcIiRcXFwiKS5yZXBsYWNlKC8lMkMvZ2ksXFxcIixcXFwiKS5yZXBsYWNlKC8lMjAvZyxcXFwiJTIwXFxcIikucmVwbGFjZSgvJTI2L2dpLFxcXCImXFxcIikucmVwbGFjZSgvJTNEL2dpLFxcXCI9XFxcIikucmVwbGFjZSgvJTJCL2dpLFxcXCIrXFxcIiksYz1jLnJlcGxhY2UobmV3IFJlZ0V4cChcXFwiOlxcXCIrXFxuaytcXFwiKFxcXFxcXFxcV3wkKVxcXCIsXFxcImdcXFwiKSxmdW5jdGlvbihiLGEpe3JldHVybiBlK2F9KSk6Yz1jLnJlcGxhY2UobmV3IFJlZ0V4cChcXFwiKC8/KTpcXFwiK2srXFxcIihcXFxcXFxcXFd8JClcXFwiLFxcXCJnXFxcIiksZnVuY3Rpb24oYixhLGMpe3JldHVyblxcXCIvXFxcIj09Yy5jaGFyQXQoMCk/YzphK2N9KX0pO20uZGVmYXVsdHMuc3RyaXBUcmFpbGluZ1NsYXNoZXMmJihjPWMucmVwbGFjZSgvXFxcXC8rJC8sXFxcIlxcXCIpfHxcXFwiL1xcXCIpO2M9Yy5yZXBsYWNlKC9cXFxcL1xcXFwuKD89XFxcXHcrKCR8XFxcXD8pKS8sXFxcIi5cXFwiKTtmLnVybD1jLnJlcGxhY2UoL1xcXFwvXFxcXFxcXFxcXFxcLi8sXFxcIi8uXFxcIik7cihnLGZ1bmN0aW9uKGIsYyl7bS51cmxQYXJhbXNbY118fChmLnBhcmFtcz1mLnBhcmFtc3x8e30sZi5wYXJhbXNbY109Yil9KX19O3JldHVybiB2fV19KX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci1yZXNvdXJjZS5taW4uanMubWFwXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItcmVzb3VyY2UvYW5ndWxhci1yZXNvdXJjZS5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInJlcXVpcmUoXCIhIS9ob21lL2JsYWNhdGUvcHJvamVjdC9maXJlYW50LW1vYmlsZS9ub2RlX21vZHVsZXMvLjAuNi4xQHNjcmlwdC1sb2FkZXIvYWRkU2NyaXB0LmpzXCIpKHJlcXVpcmUoXCIhIS9ob21lL2JsYWNhdGUvcHJvamVjdC9maXJlYW50LW1vYmlsZS9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhL2hvbWUvYmxhY2F0ZS9wcm9qZWN0L2ZpcmVhbnQtbW9iaWxlL2Jvd2VyX2NvbXBvbmVudHMvc3dlZXRhbGVydC9kaXN0L3N3ZWV0YWxlcnQubWluLmpzXCIpKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC42LjFAc2NyaXB0LWxvYWRlciEuL2Jvd2VyX2NvbXBvbmVudHMvc3dlZXRhbGVydC9kaXN0L3N3ZWV0YWxlcnQubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIWZ1bmN0aW9uKGUsdCxuKXtcXFwidXNlIHN0cmljdFxcXCI7IWZ1bmN0aW9uIG8oZSx0LG4pe2Z1bmN0aW9uIGEocyxsKXtpZighdFtzXSl7aWYoIWVbc10pe3ZhciBpPVxcXCJmdW5jdGlvblxcXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFsJiZpKXJldHVybiBpKHMsITApO2lmKHIpcmV0dXJuIHIocywhMCk7dmFyIHU9bmV3IEVycm9yKFxcXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1xcXCIrcytcXFwiJ1xcXCIpO3Rocm93IHUuY29kZT1cXFwiTU9EVUxFX05PVF9GT1VORFxcXCIsdX12YXIgYz10W3NdPXtleHBvcnRzOnt9fTtlW3NdWzBdLmNhbGwoYy5leHBvcnRzLGZ1bmN0aW9uKHQpe3ZhciBuPWVbc11bMV1bdF07cmV0dXJuIGEobj9uOnQpfSxjLGMuZXhwb3J0cyxvLGUsdCxuKX1yZXR1cm4gdFtzXS5leHBvcnRzfWZvcih2YXIgcj1cXFwiZnVuY3Rpb25cXFwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxzPTA7czxuLmxlbmd0aDtzKyspYShuW3NdKTtyZXR1cm4gYX0oezE6W2Z1bmN0aW9uKG8sYSxyKXt2YXIgcz1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1xcXCJkZWZhdWx0XFxcIjplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXFxcIl9fZXNNb2R1bGVcXFwiLHt2YWx1ZTohMH0pO3ZhciBsLGksdSxjLGQ9byhcXFwiLi9tb2R1bGVzL2hhbmRsZS1kb21cXFwiKSxmPW8oXFxcIi4vbW9kdWxlcy91dGlsc1xcXCIpLHA9byhcXFwiLi9tb2R1bGVzL2hhbmRsZS1zd2FsLWRvbVxcXCIpLG09byhcXFwiLi9tb2R1bGVzL2hhbmRsZS1jbGlja1xcXCIpLHY9byhcXFwiLi9tb2R1bGVzL2hhbmRsZS1rZXlcXFwiKSx5PXModiksaD1vKFxcXCIuL21vZHVsZXMvZGVmYXVsdC1wYXJhbXNcXFwiKSxiPXMoaCksZz1vKFxcXCIuL21vZHVsZXMvc2V0LXBhcmFtc1xcXCIpLHc9cyhnKTtyW1xcXCJkZWZhdWx0XFxcIl09dT1jPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbyhlKXt2YXIgdD1hO3JldHVybiB0W2VdPT09bj9iW1xcXCJkZWZhdWx0XFxcIl1bZV06dFtlXX12YXIgYT1hcmd1bWVudHNbMF07aWYoZC5hZGRDbGFzcyh0LmJvZHksXFxcInN0b3Atc2Nyb2xsaW5nXFxcIikscC5yZXNldElucHV0KCksYT09PW4pcmV0dXJuIGYubG9nU3RyKFxcXCJTd2VldEFsZXJ0IGV4cGVjdHMgYXQgbGVhc3QgMSBhdHRyaWJ1dGUhXFxcIiksITE7dmFyIHI9Zi5leHRlbmQoe30sYltcXFwiZGVmYXVsdFxcXCJdKTtzd2l0Y2godHlwZW9mIGEpe2Nhc2VcXFwic3RyaW5nXFxcIjpyLnRpdGxlPWEsci50ZXh0PWFyZ3VtZW50c1sxXXx8XFxcIlxcXCIsci50eXBlPWFyZ3VtZW50c1syXXx8XFxcIlxcXCI7YnJlYWs7Y2FzZVxcXCJvYmplY3RcXFwiOmlmKGEudGl0bGU9PT1uKXJldHVybiBmLmxvZ1N0cignTWlzc2luZyBcXFwidGl0bGVcXFwiIGFyZ3VtZW50IScpLCExO3IudGl0bGU9YS50aXRsZTtmb3IodmFyIHMgaW4gYltcXFwiZGVmYXVsdFxcXCJdKXJbc109byhzKTtyLmNvbmZpcm1CdXR0b25UZXh0PXIuc2hvd0NhbmNlbEJ1dHRvbj9cXFwiQ29uZmlybVxcXCI6YltcXFwiZGVmYXVsdFxcXCJdLmNvbmZpcm1CdXR0b25UZXh0LHIuY29uZmlybUJ1dHRvblRleHQ9byhcXFwiY29uZmlybUJ1dHRvblRleHRcXFwiKSxyLmRvbmVGdW5jdGlvbj1hcmd1bWVudHNbMV18fG51bGw7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gZi5sb2dTdHIoJ1VuZXhwZWN0ZWQgdHlwZSBvZiBhcmd1bWVudCEgRXhwZWN0ZWQgXFxcInN0cmluZ1xcXCIgb3IgXFxcIm9iamVjdFxcXCIsIGdvdCAnK3R5cGVvZiBhKSwhMX13W1xcXCJkZWZhdWx0XFxcIl0ocikscC5maXhWZXJ0aWNhbFBvc2l0aW9uKCkscC5vcGVuTW9kYWwoYXJndW1lbnRzWzFdKTtmb3IodmFyIHU9cC5nZXRNb2RhbCgpLHY9dS5xdWVyeVNlbGVjdG9yQWxsKFxcXCJidXR0b25cXFwiKSxoPVtcXFwib25jbGlja1xcXCIsXFxcIm9ubW91c2VvdmVyXFxcIixcXFwib25tb3VzZW91dFxcXCIsXFxcIm9ubW91c2Vkb3duXFxcIixcXFwib25tb3VzZXVwXFxcIixcXFwib25mb2N1c1xcXCJdLGc9ZnVuY3Rpb24oZSl7cmV0dXJuIG0uaGFuZGxlQnV0dG9uKGUscix1KX0sQz0wO0M8di5sZW5ndGg7QysrKWZvcih2YXIgUz0wO1M8aC5sZW5ndGg7UysrKXt2YXIgeD1oW1NdO3ZbQ11beF09Z31wLmdldE92ZXJsYXkoKS5vbmNsaWNrPWcsbD1lLm9ua2V5ZG93bjt2YXIgaz1mdW5jdGlvbihlKXtyZXR1cm4geVtcXFwiZGVmYXVsdFxcXCJdKGUscix1KX07ZS5vbmtleWRvd249ayxlLm9uZm9jdXM9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aSE9PW4mJihpLmZvY3VzKCksaT1uKX0sMCl9LGMuZW5hYmxlQnV0dG9ucygpfSx1LnNldERlZmF1bHRzPWMuc2V0RGVmYXVsdHM9ZnVuY3Rpb24oZSl7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFxcXCJ1c2VyUGFyYW1zIGlzIHJlcXVpcmVkXFxcIik7aWYoXFxcIm9iamVjdFxcXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihcXFwidXNlclBhcmFtcyBoYXMgdG8gYmUgYSBvYmplY3RcXFwiKTtmLmV4dGVuZChiW1xcXCJkZWZhdWx0XFxcIl0sZSl9LHUuY2xvc2U9Yy5jbG9zZT1mdW5jdGlvbigpe3ZhciBvPXAuZ2V0TW9kYWwoKTtkLmZhZGVPdXQocC5nZXRPdmVybGF5KCksNSksZC5mYWRlT3V0KG8sNSksZC5yZW1vdmVDbGFzcyhvLFxcXCJzaG93U3dlZXRBbGVydFxcXCIpLGQuYWRkQ2xhc3MobyxcXFwiaGlkZVN3ZWV0QWxlcnRcXFwiKSxkLnJlbW92ZUNsYXNzKG8sXFxcInZpc2libGVcXFwiKTt2YXIgYT1vLnF1ZXJ5U2VsZWN0b3IoXFxcIi5zYS1pY29uLnNhLXN1Y2Nlc3NcXFwiKTtkLnJlbW92ZUNsYXNzKGEsXFxcImFuaW1hdGVcXFwiKSxkLnJlbW92ZUNsYXNzKGEucXVlcnlTZWxlY3RvcihcXFwiLnNhLXRpcFxcXCIpLFxcXCJhbmltYXRlU3VjY2Vzc1RpcFxcXCIpLGQucmVtb3ZlQ2xhc3MoYS5xdWVyeVNlbGVjdG9yKFxcXCIuc2EtbG9uZ1xcXCIpLFxcXCJhbmltYXRlU3VjY2Vzc0xvbmdcXFwiKTt2YXIgcj1vLnF1ZXJ5U2VsZWN0b3IoXFxcIi5zYS1pY29uLnNhLWVycm9yXFxcIik7ZC5yZW1vdmVDbGFzcyhyLFxcXCJhbmltYXRlRXJyb3JJY29uXFxcIiksZC5yZW1vdmVDbGFzcyhyLnF1ZXJ5U2VsZWN0b3IoXFxcIi5zYS14LW1hcmtcXFwiKSxcXFwiYW5pbWF0ZVhNYXJrXFxcIik7dmFyIHM9by5xdWVyeVNlbGVjdG9yKFxcXCIuc2EtaWNvbi5zYS13YXJuaW5nXFxcIik7cmV0dXJuIGQucmVtb3ZlQ2xhc3MocyxcXFwicHVsc2VXYXJuaW5nXFxcIiksZC5yZW1vdmVDbGFzcyhzLnF1ZXJ5U2VsZWN0b3IoXFxcIi5zYS1ib2R5XFxcIiksXFxcInB1bHNlV2FybmluZ0luc1xcXCIpLGQucmVtb3ZlQ2xhc3Mocy5xdWVyeVNlbGVjdG9yKFxcXCIuc2EtZG90XFxcIiksXFxcInB1bHNlV2FybmluZ0luc1xcXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZT1vLmdldEF0dHJpYnV0ZShcXFwiZGF0YS1jdXN0b20tY2xhc3NcXFwiKTtkLnJlbW92ZUNsYXNzKG8sZSl9LDMwMCksZC5yZW1vdmVDbGFzcyh0LmJvZHksXFxcInN0b3Atc2Nyb2xsaW5nXFxcIiksZS5vbmtleWRvd249bCxlLnByZXZpb3VzQWN0aXZlRWxlbWVudCYmZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKSxpPW4sY2xlYXJUaW1lb3V0KG8udGltZW91dCksITB9LHUuc2hvd0lucHV0RXJyb3I9Yy5zaG93SW5wdXRFcnJvcj1mdW5jdGlvbihlKXt2YXIgdD1wLmdldE1vZGFsKCksbj10LnF1ZXJ5U2VsZWN0b3IoXFxcIi5zYS1pbnB1dC1lcnJvclxcXCIpO2QuYWRkQ2xhc3MobixcXFwic2hvd1xcXCIpO3ZhciBvPXQucXVlcnlTZWxlY3RvcihcXFwiLnNhLWVycm9yLWNvbnRhaW5lclxcXCIpO2QuYWRkQ2xhc3MobyxcXFwic2hvd1xcXCIpLG8ucXVlcnlTZWxlY3RvcihcXFwicFxcXCIpLmlubmVySFRNTD1lLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt1LmVuYWJsZUJ1dHRvbnMoKX0sMSksdC5xdWVyeVNlbGVjdG9yKFxcXCJpbnB1dFxcXCIpLmZvY3VzKCl9LHUucmVzZXRJbnB1dEVycm9yPWMucmVzZXRJbnB1dEVycm9yPWZ1bmN0aW9uKGUpe2lmKGUmJjEzPT09ZS5rZXlDb2RlKXJldHVybiExO3ZhciB0PXAuZ2V0TW9kYWwoKSxuPXQucXVlcnlTZWxlY3RvcihcXFwiLnNhLWlucHV0LWVycm9yXFxcIik7ZC5yZW1vdmVDbGFzcyhuLFxcXCJzaG93XFxcIik7dmFyIG89dC5xdWVyeVNlbGVjdG9yKFxcXCIuc2EtZXJyb3ItY29udGFpbmVyXFxcIik7ZC5yZW1vdmVDbGFzcyhvLFxcXCJzaG93XFxcIil9LHUuZGlzYWJsZUJ1dHRvbnM9Yy5kaXNhYmxlQnV0dG9ucz1mdW5jdGlvbigpe3ZhciBlPXAuZ2V0TW9kYWwoKSx0PWUucXVlcnlTZWxlY3RvcihcXFwiYnV0dG9uLmNvbmZpcm1cXFwiKSxuPWUucXVlcnlTZWxlY3RvcihcXFwiYnV0dG9uLmNhbmNlbFxcXCIpO3QuZGlzYWJsZWQ9ITAsbi5kaXNhYmxlZD0hMH0sdS5lbmFibGVCdXR0b25zPWMuZW5hYmxlQnV0dG9ucz1mdW5jdGlvbigpe3ZhciBlPXAuZ2V0TW9kYWwoKSx0PWUucXVlcnlTZWxlY3RvcihcXFwiYnV0dG9uLmNvbmZpcm1cXFwiKSxuPWUucXVlcnlTZWxlY3RvcihcXFwiYnV0dG9uLmNhbmNlbFxcXCIpO3QuZGlzYWJsZWQ9ITEsbi5kaXNhYmxlZD0hMX0sXFxcInVuZGVmaW5lZFxcXCIhPXR5cGVvZiBlP2Uuc3dlZXRBbGVydD1lLnN3YWw9dTpmLmxvZ1N0cihcXFwiU3dlZXRBbGVydCBpcyBhIGZyb250ZW5kIG1vZHVsZSFcXFwiKSxhLmV4cG9ydHM9cltcXFwiZGVmYXVsdFxcXCJdfSx7XFxcIi4vbW9kdWxlcy9kZWZhdWx0LXBhcmFtc1xcXCI6MixcXFwiLi9tb2R1bGVzL2hhbmRsZS1jbGlja1xcXCI6MyxcXFwiLi9tb2R1bGVzL2hhbmRsZS1kb21cXFwiOjQsXFxcIi4vbW9kdWxlcy9oYW5kbGUta2V5XFxcIjo1LFxcXCIuL21vZHVsZXMvaGFuZGxlLXN3YWwtZG9tXFxcIjo2LFxcXCIuL21vZHVsZXMvc2V0LXBhcmFtc1xcXCI6OCxcXFwiLi9tb2R1bGVzL3V0aWxzXFxcIjo5fV0sMjpbZnVuY3Rpb24oZSx0LG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFxcXCJfX2VzTW9kdWxlXFxcIix7dmFsdWU6ITB9KTt2YXIgbz17dGl0bGU6XFxcIlxcXCIsdGV4dDpcXFwiXFxcIix0eXBlOm51bGwsYWxsb3dPdXRzaWRlQ2xpY2s6ITEsc2hvd0NvbmZpcm1CdXR0b246ITAsc2hvd0NhbmNlbEJ1dHRvbjohMSxjbG9zZU9uQ29uZmlybTohMCxjbG9zZU9uQ2FuY2VsOiEwLGNvbmZpcm1CdXR0b25UZXh0OlxcXCJPS1xcXCIsY29uZmlybUJ1dHRvbkNvbG9yOlxcXCIjOENENEY1XFxcIixjYW5jZWxCdXR0b25UZXh0OlxcXCJDYW5jZWxcXFwiLGltYWdlVXJsOm51bGwsaW1hZ2VTaXplOm51bGwsdGltZXI6bnVsbCxjdXN0b21DbGFzczpcXFwiXFxcIixodG1sOiExLGFuaW1hdGlvbjohMCxhbGxvd0VzY2FwZUtleTohMCxpbnB1dFR5cGU6XFxcInRleHRcXFwiLGlucHV0UGxhY2Vob2xkZXI6XFxcIlxcXCIsaW5wdXRWYWx1ZTpcXFwiXFxcIixzaG93TG9hZGVyT25Db25maXJtOiExfTtuW1xcXCJkZWZhdWx0XFxcIl09byx0LmV4cG9ydHM9bltcXFwiZGVmYXVsdFxcXCJdfSx7fV0sMzpbZnVuY3Rpb24odCxuLG8pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFxcXCJfX2VzTW9kdWxlXFxcIix7dmFsdWU6ITB9KTt2YXIgYT10KFxcXCIuL3V0aWxzXFxcIikscj0odChcXFwiLi9oYW5kbGUtc3dhbC1kb21cXFwiKSx0KFxcXCIuL2hhbmRsZS1kb21cXFwiKSkscz1mdW5jdGlvbih0LG4sbyl7ZnVuY3Rpb24gcyhlKXttJiZuLmNvbmZpcm1CdXR0b25Db2xvciYmKHAuc3R5bGUuYmFja2dyb3VuZENvbG9yPWUpfXZhciB1LGMsZCxmPXR8fGUuZXZlbnQscD1mLnRhcmdldHx8Zi5zcmNFbGVtZW50LG09LTEhPT1wLmNsYXNzTmFtZS5pbmRleE9mKFxcXCJjb25maXJtXFxcIiksdj0tMSE9PXAuY2xhc3NOYW1lLmluZGV4T2YoXFxcInN3ZWV0LW92ZXJsYXlcXFwiKSx5PXIuaGFzQ2xhc3MobyxcXFwidmlzaWJsZVxcXCIpLGg9bi5kb25lRnVuY3Rpb24mJlxcXCJ0cnVlXFxcIj09PW8uZ2V0QXR0cmlidXRlKFxcXCJkYXRhLWhhcy1kb25lLWZ1bmN0aW9uXFxcIik7c3dpdGNoKG0mJm4uY29uZmlybUJ1dHRvbkNvbG9yJiYodT1uLmNvbmZpcm1CdXR0b25Db2xvcixjPWEuY29sb3JMdW1pbmFuY2UodSwtLjA0KSxkPWEuY29sb3JMdW1pbmFuY2UodSwtLjE0KSksZi50eXBlKXtjYXNlXFxcIm1vdXNlb3ZlclxcXCI6cyhjKTticmVhaztjYXNlXFxcIm1vdXNlb3V0XFxcIjpzKHUpO2JyZWFrO2Nhc2VcXFwibW91c2Vkb3duXFxcIjpzKGQpO2JyZWFrO2Nhc2VcXFwibW91c2V1cFxcXCI6cyhjKTticmVhaztjYXNlXFxcImZvY3VzXFxcIjp2YXIgYj1vLnF1ZXJ5U2VsZWN0b3IoXFxcImJ1dHRvbi5jb25maXJtXFxcIiksZz1vLnF1ZXJ5U2VsZWN0b3IoXFxcImJ1dHRvbi5jYW5jZWxcXFwiKTttP2cuc3R5bGUuYm94U2hhZG93PVxcXCJub25lXFxcIjpiLnN0eWxlLmJveFNoYWRvdz1cXFwibm9uZVxcXCI7YnJlYWs7Y2FzZVxcXCJjbGlja1xcXCI6dmFyIHc9bz09PXAsQz1yLmlzRGVzY2VuZGFudChvLHApO2lmKCF3JiYhQyYmeSYmIW4uYWxsb3dPdXRzaWRlQ2xpY2spYnJlYWs7bSYmaCYmeT9sKG8sbik6aCYmeXx8dj9pKG8sbik6ci5pc0Rlc2NlbmRhbnQobyxwKSYmXFxcIkJVVFRPTlxcXCI9PT1wLnRhZ05hbWUmJnN3ZWV0QWxlcnQuY2xvc2UoKX19LGw9ZnVuY3Rpb24oZSx0KXt2YXIgbj0hMDtyLmhhc0NsYXNzKGUsXFxcInNob3ctaW5wdXRcXFwiKSYmKG49ZS5xdWVyeVNlbGVjdG9yKFxcXCJpbnB1dFxcXCIpLnZhbHVlLG58fChuPVxcXCJcXFwiKSksdC5kb25lRnVuY3Rpb24obiksdC5jbG9zZU9uQ29uZmlybSYmc3dlZXRBbGVydC5jbG9zZSgpLHQuc2hvd0xvYWRlck9uQ29uZmlybSYmc3dlZXRBbGVydC5kaXNhYmxlQnV0dG9ucygpfSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49U3RyaW5nKHQuZG9uZUZ1bmN0aW9uKS5yZXBsYWNlKC9cXFxccy9nLFxcXCJcXFwiKSxvPVxcXCJmdW5jdGlvbihcXFwiPT09bi5zdWJzdHJpbmcoMCw5KSYmXFxcIilcXFwiIT09bi5zdWJzdHJpbmcoOSwxMCk7byYmdC5kb25lRnVuY3Rpb24oITEpLHQuY2xvc2VPbkNhbmNlbCYmc3dlZXRBbGVydC5jbG9zZSgpfTtvW1xcXCJkZWZhdWx0XFxcIl09e2hhbmRsZUJ1dHRvbjpzLGhhbmRsZUNvbmZpcm06bCxoYW5kbGVDYW5jZWw6aX0sbi5leHBvcnRzPW9bXFxcImRlZmF1bHRcXFwiXX0se1xcXCIuL2hhbmRsZS1kb21cXFwiOjQsXFxcIi4vaGFuZGxlLXN3YWwtZG9tXFxcIjo2LFxcXCIuL3V0aWxzXFxcIjo5fV0sNDpbZnVuY3Rpb24obixvLGEpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFxcXCJfX2VzTW9kdWxlXFxcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUmVnRXhwKFxcXCIgXFxcIit0K1xcXCIgXFxcIikudGVzdChcXFwiIFxcXCIrZS5jbGFzc05hbWUrXFxcIiBcXFwiKX0scz1mdW5jdGlvbihlLHQpe3IoZSx0KXx8KGUuY2xhc3NOYW1lKz1cXFwiIFxcXCIrdCl9LGw9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cXFwiIFxcXCIrZS5jbGFzc05hbWUucmVwbGFjZSgvW1xcXFx0XFxcXHJcXFxcbl0vZyxcXFwiIFxcXCIpK1xcXCIgXFxcIjtpZihyKGUsdCkpe2Zvcig7bi5pbmRleE9mKFxcXCIgXFxcIit0K1xcXCIgXFxcIik+PTA7KW49bi5yZXBsYWNlKFxcXCIgXFxcIit0K1xcXCIgXFxcIixcXFwiIFxcXCIpO2UuY2xhc3NOYW1lPW4ucmVwbGFjZSgvXlxcXFxzK3xcXFxccyskL2csXFxcIlxcXCIpfX0saT1mdW5jdGlvbihlKXt2YXIgbj10LmNyZWF0ZUVsZW1lbnQoXFxcImRpdlxcXCIpO3JldHVybiBuLmFwcGVuZENoaWxkKHQuY3JlYXRlVGV4dE5vZGUoZSkpLG4uaW5uZXJIVE1MfSx1PWZ1bmN0aW9uKGUpe2Uuc3R5bGUub3BhY2l0eT1cXFwiXFxcIixlLnN0eWxlLmRpc3BsYXk9XFxcImJsb2NrXFxcIn0sYz1mdW5jdGlvbihlKXtpZihlJiYhZS5sZW5ndGgpcmV0dXJuIHUoZSk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDsrK3QpdShlW3RdKX0sZD1mdW5jdGlvbihlKXtlLnN0eWxlLm9wYWNpdHk9XFxcIlxcXCIsZS5zdHlsZS5kaXNwbGF5PVxcXCJub25lXFxcIn0sZj1mdW5jdGlvbihlKXtpZihlJiYhZS5sZW5ndGgpcmV0dXJuIGQoZSk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDsrK3QpZChlW3RdKX0scD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10LnBhcmVudE5vZGU7bnVsbCE9PW47KXtpZihuPT09ZSlyZXR1cm4hMDtuPW4ucGFyZW50Tm9kZX1yZXR1cm4hMX0sbT1mdW5jdGlvbihlKXtlLnN0eWxlLmxlZnQ9XFxcIi05OTk5cHhcXFwiLGUuc3R5bGUuZGlzcGxheT1cXFwiYmxvY2tcXFwiO3ZhciB0LG49ZS5jbGllbnRIZWlnaHQ7cmV0dXJuIHQ9XFxcInVuZGVmaW5lZFxcXCIhPXR5cGVvZiBnZXRDb21wdXRlZFN0eWxlP3BhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZSkuZ2V0UHJvcGVydHlWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiKSwxMCk6cGFyc2VJbnQoZS5jdXJyZW50U3R5bGUucGFkZGluZyksZS5zdHlsZS5sZWZ0PVxcXCJcXFwiLGUuc3R5bGUuZGlzcGxheT1cXFwibm9uZVxcXCIsXFxcIi1cXFwiK3BhcnNlSW50KChuK3QpLzIpK1xcXCJweFxcXCJ9LHY9ZnVuY3Rpb24oZSx0KXtpZigrZS5zdHlsZS5vcGFjaXR5PDEpe3Q9dHx8MTYsZS5zdHlsZS5vcGFjaXR5PTAsZS5zdHlsZS5kaXNwbGF5PVxcXCJibG9ja1xcXCI7dmFyIG49K25ldyBEYXRlLG89ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3JldHVybiBlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gdC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBlLnRvU3RyaW5nKCl9LHR9KGZ1bmN0aW9uKCl7ZS5zdHlsZS5vcGFjaXR5PStlLnN0eWxlLm9wYWNpdHkrKG5ldyBEYXRlLW4pLzEwMCxuPStuZXcgRGF0ZSwrZS5zdHlsZS5vcGFjaXR5PDEmJnNldFRpbWVvdXQobyx0KX0pO28oKX1lLnN0eWxlLmRpc3BsYXk9XFxcImJsb2NrXFxcIn0seT1mdW5jdGlvbihlLHQpe3Q9dHx8MTYsZS5zdHlsZS5vcGFjaXR5PTE7dmFyIG49K25ldyBEYXRlLG89ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3JldHVybiBlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gdC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBlLnRvU3RyaW5nKCl9LHR9KGZ1bmN0aW9uKCl7ZS5zdHlsZS5vcGFjaXR5PStlLnN0eWxlLm9wYWNpdHktKG5ldyBEYXRlLW4pLzEwMCxuPStuZXcgRGF0ZSwrZS5zdHlsZS5vcGFjaXR5PjA/c2V0VGltZW91dChvLHQpOmUuc3R5bGUuZGlzcGxheT1cXFwibm9uZVxcXCJ9KTtvKCl9LGg9ZnVuY3Rpb24obil7aWYoXFxcImZ1bmN0aW9uXFxcIj09dHlwZW9mIE1vdXNlRXZlbnQpe3ZhciBvPW5ldyBNb3VzZUV2ZW50KFxcXCJjbGlja1xcXCIse3ZpZXc6ZSxidWJibGVzOiExLGNhbmNlbGFibGU6ITB9KTtuLmRpc3BhdGNoRXZlbnQobyl9ZWxzZSBpZih0LmNyZWF0ZUV2ZW50KXt2YXIgYT10LmNyZWF0ZUV2ZW50KFxcXCJNb3VzZUV2ZW50c1xcXCIpO2EuaW5pdEV2ZW50KFxcXCJjbGlja1xcXCIsITEsITEpLG4uZGlzcGF0Y2hFdmVudChhKX1lbHNlIHQuY3JlYXRlRXZlbnRPYmplY3Q/bi5maXJlRXZlbnQoXFxcIm9uY2xpY2tcXFwiKTpcXFwiZnVuY3Rpb25cXFwiPT10eXBlb2Ygbi5vbmNsaWNrJiZuLm9uY2xpY2soKX0sYj1mdW5jdGlvbih0KXtcXFwiZnVuY3Rpb25cXFwiPT10eXBlb2YgdC5zdG9wUHJvcGFnYXRpb24/KHQuc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpKTplLmV2ZW50JiZlLmV2ZW50Lmhhc093blByb3BlcnR5KFxcXCJjYW5jZWxCdWJibGVcXFwiKSYmKGUuZXZlbnQuY2FuY2VsQnViYmxlPSEwKX07YS5oYXNDbGFzcz1yLGEuYWRkQ2xhc3M9cyxhLnJlbW92ZUNsYXNzPWwsYS5lc2NhcGVIdG1sPWksYS5fc2hvdz11LGEuc2hvdz1jLGEuX2hpZGU9ZCxhLmhpZGU9ZixhLmlzRGVzY2VuZGFudD1wLGEuZ2V0VG9wTWFyZ2luPW0sYS5mYWRlSW49dixhLmZhZGVPdXQ9eSxhLmZpcmVDbGljaz1oLGEuc3RvcEV2ZW50UHJvcGFnYXRpb249Yn0se31dLDU6W2Z1bmN0aW9uKHQsbyxhKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcXFwiX19lc01vZHVsZVxcXCIse3ZhbHVlOiEwfSk7dmFyIHI9dChcXFwiLi9oYW5kbGUtZG9tXFxcIikscz10KFxcXCIuL2hhbmRsZS1zd2FsLWRvbVxcXCIpLGw9ZnVuY3Rpb24odCxvLGEpe3ZhciBsPXR8fGUuZXZlbnQsaT1sLmtleUNvZGV8fGwud2hpY2gsdT1hLnF1ZXJ5U2VsZWN0b3IoXFxcImJ1dHRvbi5jb25maXJtXFxcIiksYz1hLnF1ZXJ5U2VsZWN0b3IoXFxcImJ1dHRvbi5jYW5jZWxcXFwiKSxkPWEucXVlcnlTZWxlY3RvckFsbChcXFwiYnV0dG9uW3RhYmluZGV4XVxcXCIpO2lmKC0xIT09WzksMTMsMzIsMjddLmluZGV4T2YoaSkpe2Zvcih2YXIgZj1sLnRhcmdldHx8bC5zcmNFbGVtZW50LHA9LTEsbT0wO208ZC5sZW5ndGg7bSsrKWlmKGY9PT1kW21dKXtwPW07YnJlYWt9OT09PWk/KGY9LTE9PT1wP3U6cD09PWQubGVuZ3RoLTE/ZFswXTpkW3ArMV0sci5zdG9wRXZlbnRQcm9wYWdhdGlvbihsKSxmLmZvY3VzKCksby5jb25maXJtQnV0dG9uQ29sb3ImJnMuc2V0Rm9jdXNTdHlsZShmLG8uY29uZmlybUJ1dHRvbkNvbG9yKSk6MTM9PT1pPyhcXFwiSU5QVVRcXFwiPT09Zi50YWdOYW1lJiYoZj11LHUuZm9jdXMoKSksZj0tMT09PXA/dTpuKToyNz09PWkmJm8uYWxsb3dFc2NhcGVLZXk9PT0hMD8oZj1jLHIuZmlyZUNsaWNrKGYsbCkpOmY9bn19O2FbXFxcImRlZmF1bHRcXFwiXT1sLG8uZXhwb3J0cz1hW1xcXCJkZWZhdWx0XFxcIl19LHtcXFwiLi9oYW5kbGUtZG9tXFxcIjo0LFxcXCIuL2hhbmRsZS1zd2FsLWRvbVxcXCI6Nn1dLDY6W2Z1bmN0aW9uKG4sbyxhKXt2YXIgcj1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1xcXCJkZWZhdWx0XFxcIjplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXFxcIl9fZXNNb2R1bGVcXFwiLHt2YWx1ZTohMH0pO3ZhciBzPW4oXFxcIi4vdXRpbHNcXFwiKSxsPW4oXFxcIi4vaGFuZGxlLWRvbVxcXCIpLGk9bihcXFwiLi9kZWZhdWx0LXBhcmFtc1xcXCIpLHU9cihpKSxjPW4oXFxcIi4vaW5qZWN0ZWQtaHRtbFxcXCIpLGQ9cihjKSxmPVxcXCIuc3dlZXQtYWxlcnRcXFwiLHA9XFxcIi5zd2VldC1vdmVybGF5XFxcIixtPWZ1bmN0aW9uKCl7dmFyIGU9dC5jcmVhdGVFbGVtZW50KFxcXCJkaXZcXFwiKTtmb3IoZS5pbm5lckhUTUw9ZFtcXFwiZGVmYXVsdFxcXCJdO2UuZmlyc3RDaGlsZDspdC5ib2R5LmFwcGVuZENoaWxkKGUuZmlyc3RDaGlsZCl9LHY9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3JldHVybiBlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gdC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBlLnRvU3RyaW5nKCl9LHR9KGZ1bmN0aW9uKCl7dmFyIGU9dC5xdWVyeVNlbGVjdG9yKGYpO3JldHVybiBlfHwobSgpLGU9digpKSxlfSkseT1mdW5jdGlvbigpe3ZhciBlPXYoKTtyZXR1cm4gZT9lLnF1ZXJ5U2VsZWN0b3IoXFxcImlucHV0XFxcIik6dm9pZCAwfSxoPWZ1bmN0aW9uKCl7cmV0dXJuIHQucXVlcnlTZWxlY3RvcihwKX0sYj1mdW5jdGlvbihlLHQpe3ZhciBuPXMuaGV4VG9SZ2IodCk7ZS5zdHlsZS5ib3hTaGFkb3c9XFxcIjAgMCAycHggcmdiYShcXFwiK24rXFxcIiwgMC44KSwgaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSlcXFwifSxnPWZ1bmN0aW9uKG4pe3ZhciBvPXYoKTtsLmZhZGVJbihoKCksMTApLGwuc2hvdyhvKSxsLmFkZENsYXNzKG8sXFxcInNob3dTd2VldEFsZXJ0XFxcIiksbC5yZW1vdmVDbGFzcyhvLFxcXCJoaWRlU3dlZXRBbGVydFxcXCIpLGUucHJldmlvdXNBY3RpdmVFbGVtZW50PXQuYWN0aXZlRWxlbWVudDt2YXIgYT1vLnF1ZXJ5U2VsZWN0b3IoXFxcImJ1dHRvbi5jb25maXJtXFxcIik7YS5mb2N1cygpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLmFkZENsYXNzKG8sXFxcInZpc2libGVcXFwiKX0sNTAwKTt2YXIgcj1vLmdldEF0dHJpYnV0ZShcXFwiZGF0YS10aW1lclxcXCIpO2lmKFxcXCJudWxsXFxcIiE9PXImJlxcXCJcXFwiIT09cil7dmFyIHM9bjtvLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPShzfHxudWxsKSYmXFxcInRydWVcXFwiPT09by5nZXRBdHRyaWJ1dGUoXFxcImRhdGEtaGFzLWRvbmUtZnVuY3Rpb25cXFwiKTtlP3MobnVsbCk6c3dlZXRBbGVydC5jbG9zZSgpfSxyKX19LHc9ZnVuY3Rpb24oKXt2YXIgZT12KCksdD15KCk7bC5yZW1vdmVDbGFzcyhlLFxcXCJzaG93LWlucHV0XFxcIiksdC52YWx1ZT11W1xcXCJkZWZhdWx0XFxcIl0uaW5wdXRWYWx1ZSx0LnNldEF0dHJpYnV0ZShcXFwidHlwZVxcXCIsdVtcXFwiZGVmYXVsdFxcXCJdLmlucHV0VHlwZSksdC5zZXRBdHRyaWJ1dGUoXFxcInBsYWNlaG9sZGVyXFxcIix1W1xcXCJkZWZhdWx0XFxcIl0uaW5wdXRQbGFjZWhvbGRlciksQygpfSxDPWZ1bmN0aW9uKGUpe2lmKGUmJjEzPT09ZS5rZXlDb2RlKXJldHVybiExO3ZhciB0PXYoKSxuPXQucXVlcnlTZWxlY3RvcihcXFwiLnNhLWlucHV0LWVycm9yXFxcIik7bC5yZW1vdmVDbGFzcyhuLFxcXCJzaG93XFxcIik7dmFyIG89dC5xdWVyeVNlbGVjdG9yKFxcXCIuc2EtZXJyb3ItY29udGFpbmVyXFxcIik7bC5yZW1vdmVDbGFzcyhvLFxcXCJzaG93XFxcIil9LFM9ZnVuY3Rpb24oKXt2YXIgZT12KCk7ZS5zdHlsZS5tYXJnaW5Ub3A9bC5nZXRUb3BNYXJnaW4odigpKX07YS5zd2VldEFsZXJ0SW5pdGlhbGl6ZT1tLGEuZ2V0TW9kYWw9dixhLmdldE92ZXJsYXk9aCxhLmdldElucHV0PXksYS5zZXRGb2N1c1N0eWxlPWIsYS5vcGVuTW9kYWw9ZyxhLnJlc2V0SW5wdXQ9dyxhLnJlc2V0SW5wdXRFcnJvcj1DLGEuZml4VmVydGljYWxQb3NpdGlvbj1TfSx7XFxcIi4vZGVmYXVsdC1wYXJhbXNcXFwiOjIsXFxcIi4vaGFuZGxlLWRvbVxcXCI6NCxcXFwiLi9pbmplY3RlZC1odG1sXFxcIjo3LFxcXCIuL3V0aWxzXFxcIjo5fV0sNzpbZnVuY3Rpb24oZSx0LG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFxcXCJfX2VzTW9kdWxlXFxcIix7dmFsdWU6ITB9KTt2YXIgbz0nPGRpdiBjbGFzcz1cXFwic3dlZXQtb3ZlcmxheVxcXCIgdGFiSW5kZXg9XFxcIi0xXFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJzd2VldC1hbGVydFxcXCI+PGRpdiBjbGFzcz1cXFwic2EtaWNvbiBzYS1lcnJvclxcXCI+XFxcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwic2EteC1tYXJrXFxcIj5cXFxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNhLWxpbmUgc2EtbGVmdFxcXCI+PC9zcGFuPlxcXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2EtbGluZSBzYS1yaWdodFxcXCI+PC9zcGFuPlxcXFxuICAgICAgPC9zcGFuPlxcXFxuICAgIDwvZGl2PjxkaXYgY2xhc3M9XFxcInNhLWljb24gc2Etd2FybmluZ1xcXCI+XFxcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwic2EtYm9keVxcXCI+PC9zcGFuPlxcXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInNhLWRvdFxcXCI+PC9zcGFuPlxcXFxuICAgIDwvZGl2PjxkaXYgY2xhc3M9XFxcInNhLWljb24gc2EtaW5mb1xcXCI+PC9kaXY+PGRpdiBjbGFzcz1cXFwic2EtaWNvbiBzYS1zdWNjZXNzXFxcIj5cXFxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYS1saW5lIHNhLXRpcFxcXCI+PC9zcGFuPlxcXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInNhLWxpbmUgc2EtbG9uZ1xcXCI+PC9zcGFuPlxcXFxuXFxcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzYS1wbGFjZWhvbGRlclxcXCI+PC9kaXY+XFxcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzYS1maXhcXFwiPjwvZGl2PlxcXFxuICAgIDwvZGl2PjxkaXYgY2xhc3M9XFxcInNhLWljb24gc2EtY3VzdG9tXFxcIj48L2Rpdj48aDI+VGl0bGU8L2gyPlxcXFxuICAgIDxwPlRleHQ8L3A+XFxcXG4gICAgPGZpZWxkc2V0PlxcXFxuICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHRhYkluZGV4PVxcXCIzXFxcIiAvPlxcXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2EtaW5wdXQtZXJyb3JcXFwiPjwvZGl2PlxcXFxuICAgIDwvZmllbGRzZXQ+PGRpdiBjbGFzcz1cXFwic2EtZXJyb3ItY29udGFpbmVyXFxcIj5cXFxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPiE8L2Rpdj5cXFxcbiAgICAgIDxwPk5vdCB2YWxpZCE8L3A+XFxcXG4gICAgPC9kaXY+PGRpdiBjbGFzcz1cXFwic2EtYnV0dG9uLWNvbnRhaW5lclxcXCI+XFxcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYW5jZWxcXFwiIHRhYkluZGV4PVxcXCIyXFxcIj5DYW5jZWw8L2J1dHRvbj5cXFxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNhLWNvbmZpcm0tYnV0dG9uLWNvbnRhaW5lclxcXCI+XFxcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNvbmZpcm1cXFwiIHRhYkluZGV4PVxcXCIxXFxcIj5PSzwvYnV0dG9uPjxkaXYgY2xhc3M9XFxcImxhLWJhbGwtZmFsbFxcXCI+XFxcXG4gICAgICAgICAgPGRpdj48L2Rpdj5cXFxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcXFxuICAgICAgICAgIDxkaXY+PC9kaXY+XFxcXG4gICAgICAgIDwvZGl2PlxcXFxuICAgICAgPC9kaXY+XFxcXG4gICAgPC9kaXY+PC9kaXY+JztuW1xcXCJkZWZhdWx0XFxcIl09byx0LmV4cG9ydHM9bltcXFwiZGVmYXVsdFxcXCJdfSx7fV0sODpbZnVuY3Rpb24oZSx0LG8pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFxcXCJfX2VzTW9kdWxlXFxcIix7dmFsdWU6ITB9KTt2YXIgYT1lKFxcXCIuL3V0aWxzXFxcIikscj1lKFxcXCIuL2hhbmRsZS1zd2FsLWRvbVxcXCIpLHM9ZShcXFwiLi9oYW5kbGUtZG9tXFxcIiksbD1bXFxcImVycm9yXFxcIixcXFwid2FybmluZ1xcXCIsXFxcImluZm9cXFwiLFxcXCJzdWNjZXNzXFxcIixcXFwiaW5wdXRcXFwiLFxcXCJwcm9tcHRcXFwiXSxpPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZ2V0TW9kYWwoKSxvPXQucXVlcnlTZWxlY3RvcihcXFwiaDJcXFwiKSxpPXQucXVlcnlTZWxlY3RvcihcXFwicFxcXCIpLHU9dC5xdWVyeVNlbGVjdG9yKFxcXCJidXR0b24uY2FuY2VsXFxcIiksYz10LnF1ZXJ5U2VsZWN0b3IoXFxcImJ1dHRvbi5jb25maXJtXFxcIik7aWYoby5pbm5lckhUTUw9ZS5odG1sP2UudGl0bGU6cy5lc2NhcGVIdG1sKGUudGl0bGUpLnNwbGl0KFxcXCJcXFxcblxcXCIpLmpvaW4oXFxcIjxicj5cXFwiKSxpLmlubmVySFRNTD1lLmh0bWw/ZS50ZXh0OnMuZXNjYXBlSHRtbChlLnRleHR8fFxcXCJcXFwiKS5zcGxpdChcXFwiXFxcXG5cXFwiKS5qb2luKFxcXCI8YnI+XFxcIiksZS50ZXh0JiZzLnNob3coaSksZS5jdXN0b21DbGFzcylzLmFkZENsYXNzKHQsZS5jdXN0b21DbGFzcyksdC5zZXRBdHRyaWJ1dGUoXFxcImRhdGEtY3VzdG9tLWNsYXNzXFxcIixlLmN1c3RvbUNsYXNzKTtlbHNle3ZhciBkPXQuZ2V0QXR0cmlidXRlKFxcXCJkYXRhLWN1c3RvbS1jbGFzc1xcXCIpO3MucmVtb3ZlQ2xhc3ModCxkKSx0LnNldEF0dHJpYnV0ZShcXFwiZGF0YS1jdXN0b20tY2xhc3NcXFwiLFxcXCJcXFwiKX1pZihzLmhpZGUodC5xdWVyeVNlbGVjdG9yQWxsKFxcXCIuc2EtaWNvblxcXCIpKSxlLnR5cGUmJiFhLmlzSUU4KCkpe3ZhciBmPWZ1bmN0aW9uKCl7Zm9yKHZhciBvPSExLGE9MDthPGwubGVuZ3RoO2ErKylpZihlLnR5cGU9PT1sW2FdKXtvPSEwO2JyZWFrfWlmKCFvKXJldHVybiBsb2dTdHIoXFxcIlVua25vd24gYWxlcnQgdHlwZTogXFxcIitlLnR5cGUpLHt2OiExfTt2YXIgaT1bXFxcInN1Y2Nlc3NcXFwiLFxcXCJlcnJvclxcXCIsXFxcIndhcm5pbmdcXFwiLFxcXCJpbmZvXFxcIl0sdT1uOy0xIT09aS5pbmRleE9mKGUudHlwZSkmJih1PXQucXVlcnlTZWxlY3RvcihcXFwiLnNhLWljb24uc2EtXFxcIitlLnR5cGUpLHMuc2hvdyh1KSk7dmFyIGM9ci5nZXRJbnB1dCgpO3N3aXRjaChlLnR5cGUpe2Nhc2VcXFwic3VjY2Vzc1xcXCI6cy5hZGRDbGFzcyh1LFxcXCJhbmltYXRlXFxcIikscy5hZGRDbGFzcyh1LnF1ZXJ5U2VsZWN0b3IoXFxcIi5zYS10aXBcXFwiKSxcXFwiYW5pbWF0ZVN1Y2Nlc3NUaXBcXFwiKSxzLmFkZENsYXNzKHUucXVlcnlTZWxlY3RvcihcXFwiLnNhLWxvbmdcXFwiKSxcXFwiYW5pbWF0ZVN1Y2Nlc3NMb25nXFxcIik7YnJlYWs7Y2FzZVxcXCJlcnJvclxcXCI6cy5hZGRDbGFzcyh1LFxcXCJhbmltYXRlRXJyb3JJY29uXFxcIikscy5hZGRDbGFzcyh1LnF1ZXJ5U2VsZWN0b3IoXFxcIi5zYS14LW1hcmtcXFwiKSxcXFwiYW5pbWF0ZVhNYXJrXFxcIik7YnJlYWs7Y2FzZVxcXCJ3YXJuaW5nXFxcIjpzLmFkZENsYXNzKHUsXFxcInB1bHNlV2FybmluZ1xcXCIpLHMuYWRkQ2xhc3ModS5xdWVyeVNlbGVjdG9yKFxcXCIuc2EtYm9keVxcXCIpLFxcXCJwdWxzZVdhcm5pbmdJbnNcXFwiKSxzLmFkZENsYXNzKHUucXVlcnlTZWxlY3RvcihcXFwiLnNhLWRvdFxcXCIpLFxcXCJwdWxzZVdhcm5pbmdJbnNcXFwiKTticmVhaztjYXNlXFxcImlucHV0XFxcIjpjYXNlXFxcInByb21wdFxcXCI6Yy5zZXRBdHRyaWJ1dGUoXFxcInR5cGVcXFwiLGUuaW5wdXRUeXBlKSxjLnZhbHVlPWUuaW5wdXRWYWx1ZSxjLnNldEF0dHJpYnV0ZShcXFwicGxhY2Vob2xkZXJcXFwiLGUuaW5wdXRQbGFjZWhvbGRlcikscy5hZGRDbGFzcyh0LFxcXCJzaG93LWlucHV0XFxcIiksc2V0VGltZW91dChmdW5jdGlvbigpe2MuZm9jdXMoKSxjLmFkZEV2ZW50TGlzdGVuZXIoXFxcImtleXVwXFxcIixzd2FsLnJlc2V0SW5wdXRFcnJvcil9LDQwMCl9fSgpO2lmKFxcXCJvYmplY3RcXFwiPT10eXBlb2YgZilyZXR1cm4gZi52fWlmKGUuaW1hZ2VVcmwpe3ZhciBwPXQucXVlcnlTZWxlY3RvcihcXFwiLnNhLWljb24uc2EtY3VzdG9tXFxcIik7cC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XFxcInVybChcXFwiK2UuaW1hZ2VVcmwrXFxcIilcXFwiLHMuc2hvdyhwKTt2YXIgbT04MCx2PTgwO2lmKGUuaW1hZ2VTaXplKXt2YXIgeT1lLmltYWdlU2l6ZS50b1N0cmluZygpLnNwbGl0KFxcXCJ4XFxcIiksaD15WzBdLGI9eVsxXTtoJiZiPyhtPWgsdj1iKTpsb2dTdHIoXFxcIlBhcmFtZXRlciBpbWFnZVNpemUgZXhwZWN0cyB2YWx1ZSB3aXRoIGZvcm1hdCBXSURUSHhIRUlHSFQsIGdvdCBcXFwiK2UuaW1hZ2VTaXplKX1wLnNldEF0dHJpYnV0ZShcXFwic3R5bGVcXFwiLHAuZ2V0QXR0cmlidXRlKFxcXCJzdHlsZVxcXCIpK1xcXCJ3aWR0aDpcXFwiK20rXFxcInB4OyBoZWlnaHQ6XFxcIit2K1xcXCJweFxcXCIpfXQuc2V0QXR0cmlidXRlKFxcXCJkYXRhLWhhcy1jYW5jZWwtYnV0dG9uXFxcIixlLnNob3dDYW5jZWxCdXR0b24pLGUuc2hvd0NhbmNlbEJ1dHRvbj91LnN0eWxlLmRpc3BsYXk9XFxcImlubGluZS1ibG9ja1xcXCI6cy5oaWRlKHUpLHQuc2V0QXR0cmlidXRlKFxcXCJkYXRhLWhhcy1jb25maXJtLWJ1dHRvblxcXCIsZS5zaG93Q29uZmlybUJ1dHRvbiksZS5zaG93Q29uZmlybUJ1dHRvbj9jLnN0eWxlLmRpc3BsYXk9XFxcImlubGluZS1ibG9ja1xcXCI6cy5oaWRlKGMpLGUuY2FuY2VsQnV0dG9uVGV4dCYmKHUuaW5uZXJIVE1MPXMuZXNjYXBlSHRtbChlLmNhbmNlbEJ1dHRvblRleHQpKSxlLmNvbmZpcm1CdXR0b25UZXh0JiYoYy5pbm5lckhUTUw9cy5lc2NhcGVIdG1sKGUuY29uZmlybUJ1dHRvblRleHQpKSxlLmNvbmZpcm1CdXR0b25Db2xvciYmKGMuc3R5bGUuYmFja2dyb3VuZENvbG9yPWUuY29uZmlybUJ1dHRvbkNvbG9yLGMuc3R5bGUuYm9yZGVyTGVmdENvbG9yPWUuY29uZmlybUxvYWRpbmdCdXR0b25Db2xvcixjLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3I9ZS5jb25maXJtTG9hZGluZ0J1dHRvbkNvbG9yLHIuc2V0Rm9jdXNTdHlsZShjLGUuY29uZmlybUJ1dHRvbkNvbG9yKSksdC5zZXRBdHRyaWJ1dGUoXFxcImRhdGEtYWxsb3ctb3V0c2lkZS1jbGlja1xcXCIsZS5hbGxvd091dHNpZGVDbGljayk7dmFyIGc9ZS5kb25lRnVuY3Rpb24/ITA6ITE7dC5zZXRBdHRyaWJ1dGUoXFxcImRhdGEtaGFzLWRvbmUtZnVuY3Rpb25cXFwiLGcpLGUuYW5pbWF0aW9uP1xcXCJzdHJpbmdcXFwiPT10eXBlb2YgZS5hbmltYXRpb24/dC5zZXRBdHRyaWJ1dGUoXFxcImRhdGEtYW5pbWF0aW9uXFxcIixlLmFuaW1hdGlvbik6dC5zZXRBdHRyaWJ1dGUoXFxcImRhdGEtYW5pbWF0aW9uXFxcIixcXFwicG9wXFxcIik6dC5zZXRBdHRyaWJ1dGUoXFxcImRhdGEtYW5pbWF0aW9uXFxcIixcXFwibm9uZVxcXCIpLHQuc2V0QXR0cmlidXRlKFxcXCJkYXRhLXRpbWVyXFxcIixlLnRpbWVyKX07b1tcXFwiZGVmYXVsdFxcXCJdPWksdC5leHBvcnRzPW9bXFxcImRlZmF1bHRcXFwiXX0se1xcXCIuL2hhbmRsZS1kb21cXFwiOjQsXFxcIi4vaGFuZGxlLXN3YWwtZG9tXFxcIjo2LFxcXCIuL3V0aWxzXFxcIjo5fV0sOTpbZnVuY3Rpb24odCxuLG8pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFxcXCJfX2VzTW9kdWxlXFxcIix7dmFsdWU6ITB9KTt2YXIgYT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KXQuaGFzT3duUHJvcGVydHkobikmJihlW25dPXRbbl0pO3JldHVybiBlfSxyPWZ1bmN0aW9uKGUpe3ZhciB0PS9eIz8oW2EtZlxcXFxkXXsyfSkoW2EtZlxcXFxkXXsyfSkoW2EtZlxcXFxkXXsyfSkkL2kuZXhlYyhlKTtyZXR1cm4gdD9wYXJzZUludCh0WzFdLDE2KStcXFwiLCBcXFwiK3BhcnNlSW50KHRbMl0sMTYpK1xcXCIsIFxcXCIrcGFyc2VJbnQodFszXSwxNik6bnVsbH0scz1mdW5jdGlvbigpe3JldHVybiBlLmF0dGFjaEV2ZW50JiYhZS5hZGRFdmVudExpc3RlbmVyfSxsPWZ1bmN0aW9uKHQpe2UuY29uc29sZSYmZS5jb25zb2xlLmxvZyhcXFwiU3dlZXRBbGVydDogXFxcIit0KX0saT1mdW5jdGlvbihlLHQpe2U9U3RyaW5nKGUpLnJlcGxhY2UoL1teMC05YS1mXS9naSxcXFwiXFxcIiksZS5sZW5ndGg8NiYmKGU9ZVswXStlWzBdK2VbMV0rZVsxXStlWzJdK2VbMl0pLHQ9dHx8MDt2YXIgbixvLGE9XFxcIiNcXFwiO2ZvcihvPTA7Mz5vO28rKyluPXBhcnNlSW50KGUuc3Vic3RyKDIqbywyKSwxNiksbj1NYXRoLnJvdW5kKE1hdGgubWluKE1hdGgubWF4KDAsbituKnQpLDI1NSkpLnRvU3RyaW5nKDE2KSxhKz0oXFxcIjAwXFxcIituKS5zdWJzdHIobi5sZW5ndGgpO3JldHVybiBhfTtvLmV4dGVuZD1hLG8uaGV4VG9SZ2I9cixvLmlzSUU4PXMsby5sb2dTdHI9bCxvLmNvbG9yTHVtaW5hbmNlPWl9LHt9XX0se30sWzFdKSxcXFwiZnVuY3Rpb25cXFwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBzd2VldEFsZXJ0fSk6XFxcInVuZGVmaW5lZFxcXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzJiYobW9kdWxlLmV4cG9ydHM9c3dlZXRBbGVydCl9KHdpbmRvdyxkb2N1bWVudCk7XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9ib3dlcl9jb21wb25lbnRzL3N3ZWV0YWxlcnQvZGlzdC9zd2VldGFsZXJ0Lm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==