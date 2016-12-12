/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(23)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(26)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(24)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.1.4
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
'use strict';

/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val, 10);
  return (n || n === 0) ? n : val
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove$1 (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind$1 (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (
    isObject(a) && isObject(b)
      ? JSON.stringify(a) === JSON.stringify(b)
      : false
  )
  /* eslint-enable eqeqeq */
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: null,

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100
};

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  } else {
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) { cb.call(ctx); }
      if (_resolve) { _resolve(ctx); }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] !== undefined
    };
    Set.prototype.add = function add (key) {
      this.set[key] = 1;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

var warn = noop;
var formatComponentName;

if (false) {
  var hasConsole = typeof console !== 'undefined';

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  formatComponentName = function (vm) {
    if (vm.$root === vm) {
      return 'root instance'
    }
    var name = vm._isVue
      ? vm.$options.name || vm.$options._componentTag
      : vm.name;
    return (
      (name ? ("component <" + name + ">") : "anonymous component") +
      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
    )
  };

  var formatLocation = function (str) {
    if (str === 'anonymous component') {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return ("\n(found in " + str + ")")
  };
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove$1(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stablize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * istanbul ignore next
 */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set$1 (obj, key, val) {
  if (Array.isArray(obj)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return
  }
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return
  }
  if (!ob) {
    obj[key] = val;
    return
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (obj, key) {
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(obj, key)) {
    return
  }
  delete obj[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set$1(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and param attributes are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$2) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  var res = assets[id] ||
    // camelCase ID
    assets[camelize(id)] ||
    // Pascal Case ID
    assets[capitalize(camelize(id))];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isBooleanType(prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (false) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    "production" !== 'production' && warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm[key] !== undefined) {
    return vm[key]
  }
  // call factory function for non-Function types
  return typeof def === 'function' && prop.type !== Function
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1]
}

function isBooleanType (fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === 'Boolean'
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === 'Boolean') {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}



var util = Object.freeze({
	defineReactive: defineReactive$$1,
	_toString: _toString,
	toNumber: toNumber,
	makeMap: makeMap,
	isBuiltInTag: isBuiltInTag,
	remove: remove$1,
	hasOwn: hasOwn,
	isPrimitive: isPrimitive,
	cached: cached,
	camelize: camelize,
	capitalize: capitalize,
	hyphenate: hyphenate,
	bind: bind$1,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	toObject: toObject,
	noop: noop,
	no: no,
	genStaticKeys: genStaticKeys,
	looseEqual: looseEqual,
	looseIndexOf: looseIndexOf,
	isReserved: isReserved,
	def: def,
	parsePath: parsePath,
	hasProto: hasProto,
	inBrowser: inBrowser,
	UA: UA,
	isIE: isIE,
	isIE9: isIE9,
	isEdge: isEdge,
	isAndroid: isAndroid,
	isIOS: isIOS,
	isServerRendering: isServerRendering,
	devtools: devtools,
	nextTick: nextTick,
	get _Set () { return _Set; },
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	get warn () { return warn; },
	get formatComponentName () { return formatComponentName; },
	validateProp: validateProp
});

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */


var queue = [];
var has$1 = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0;
  has$1 = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    var watcher = queue[index];
    var id = watcher.id;
    has$1[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }

  resetSchedulerState();
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has$1[id] == null) {
    has$1[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  if ( options === void 0 ) options = {};

  this.vm = vm;
  vm._watchers.push(this);
  // options
  this.deep = !!options.deep;
  this.user = !!options.user;
  this.lazy = !!options.lazy;
  this.sync = !!options.sync;
  this.expression = expOrFn.toString();
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value = this.getter.call(this.vm, this.vm);
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
      if (
        value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          /* istanbul ignore else */
          if (config.errorHandler) {
            config.errorHandler.call(null, e, this.vm);
          } else {
            "production" !== 'production' && warn(
              ("Error in watcher \"" + (this.expression) + "\""),
              this.vm
            );
            throw e
          }
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      remove$1(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

function initState (vm) {
  vm._watchers = [];
  initProps(vm);
  initMethods(vm);
  initData(vm);
  initComputed(vm);
  initWatch(vm);
}

var isReservedProp = { key: 1, ref: 1, slot: 1 };

function initProps (vm) {
  var props = vm.$options.props;
  if (props) {
    var propsData = vm.$options.propsData || {};
    var keys = vm.$options._propKeys = Object.keys(props);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function ( i ) {
      var key = keys[i];
      /* istanbul ignore else */
      if (false) {
        if (isReservedProp[key]) {
          warn(
            ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
          if (vm.$parent && !observerState.isSettingProps) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      } else {
        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
      }
    };

    for (var i = 0; i < keys.length; i++) loop( i );
    observerState.shouldConvert = true;
  }
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? data.call(vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object.',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "production" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else {
      proxy(vm, keys[i]);
    }
  }
  // observe data
  observe(data);
  data.__ob__ && data.__ob__.vmCount++;
}

var computedSharedDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function initComputed (vm) {
  var computed = vm.$options.computed;
  if (computed) {
    for (var key in computed) {
      var userDef = computed[key];
      if (typeof userDef === 'function') {
        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
        computedSharedDefinition.set = noop;
      } else {
        computedSharedDefinition.get = userDef.get
          ? userDef.cache !== false
            ? makeComputedGetter(userDef.get, vm)
            : bind$1(userDef.get, vm)
          : noop;
        computedSharedDefinition.set = userDef.set
          ? bind$1(userDef.set, vm)
          : noop;
      }
      Object.defineProperty(vm, key, computedSharedDefinition);
    }
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, noop, {
    lazy: true
  });
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate();
    }
    if (Dep.target) {
      watcher.depend();
    }
    return watcher.value
  }
}

function initMethods (vm) {
  var methods = vm.$options.methods;
  if (methods) {
    for (var key in methods) {
      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
      if (false) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
    }
  }
}

function initWatch (vm) {
  var watch = vm.$options.watch;
  if (watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data
  };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);

  Vue.prototype.$set = set$1;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

function proxy (vm, key) {
  if (!isReserved(key)) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return vm._data[key]
      },
      set: function proxySetter (val) {
        vm._data[key] = val;
      }
    });
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  ns,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = ns;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.child = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var emptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.ns,
    vnode.context,
    vnode.componentOptions
  );
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var res = new Array(vnodes.length);
  for (var i = 0; i < vnodes.length; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

function mergeVNodeHook (def, hookKey, hook, key) {
  key = key + hookKey;
  var injectedHash = def.__injected || (def.__injected = {});
  if (!injectedHash[key]) {
    injectedHash[key] = true;
    var oldHook = def[hookKey];
    if (oldHook) {
      def[hookKey] = function () {
        oldHook.apply(this, arguments);
        hook.apply(this, arguments);
      };
    } else {
      def[hookKey] = hook;
    }
  }
}

/*  */

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, fn, event, capture, once;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (!cur) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + name + "\": got " + String(cur),
        vm
      );
    } else if (!old) {
      once = name.charAt(0) === '~'; // Prefixed last, checked first
      event = once ? name.slice(1) : name;
      capture = event.charAt(0) === '!';
      event = capture ? event.slice(1) : event;
      if (Array.isArray(cur)) {
        add(event, (cur.invoker = arrInvoker(cur)), once, capture);
      } else {
        if (!cur.invoker) {
          fn = cur;
          cur = on[name] = {};
          cur.fn = fn;
          cur.invoker = fnInvoker(cur);
        }
        add(event, cur.invoker, once, capture);
      }
    } else if (cur !== old) {
      if (Array.isArray(old)) {
        old.length = cur.length;
        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
        on[name] = old;
      } else {
        old.fn = cur;
        on[name] = old;
      }
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      once = name.charAt(0) === '~'; // Prefixed last, checked first
      event = once ? name.slice(1) : name;
      capture = event.charAt(0) === '!';
      event = capture ? event.slice(1) : event;
      remove$$1(event, oldOn[name].invoker, capture);
    }
  }
}

function arrInvoker (arr) {
  return function (ev) {
    var arguments$1 = arguments;

    var single = arguments.length === 1;
    for (var i = 0; i < arr.length; i++) {
      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
    }
  }
}

function fnInvoker (o) {
  return function (ev) {
    var single = arguments.length === 1;
    single ? o.fn(ev) : o.fn.apply(null, arguments);
  }
}

/*  */

function normalizeChildren (
  children,
  ns,
  nestedIndex
) {
  if (isPrimitive(children)) {
    return [createTextVNode(children)]
  }
  if (Array.isArray(children)) {
    var res = [];
    for (var i = 0, l = children.length; i < l; i++) {
      var c = children[i];
      var last = res[res.length - 1];
      //  nested
      if (Array.isArray(c)) {
        res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + "_" + i)));
      } else if (isPrimitive(c)) {
        if (last && last.text) {
          last.text += String(c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else if (c instanceof VNode) {
        if (c.text && last && last.text) {
          if (!last.isCloned) {
            last.text += c.text;
          }
        } else {
          // inherit parent namespace
          if (ns) {
            applyNS(c, ns);
          }
          // default key for nested array children (likely generated by v-for)
          if (c.tag && c.key == null && nestedIndex != null) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }
}

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

function applyNS (vnode, ns) {
  if (vnode.tag && !vnode.ns) {
    vnode.ns = ns;
    if (vnode.children) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        applyNS(vnode.children[i], ns);
      }
    }
  }
}

/*  */

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._mount = function (
    el,
    hydrating
  ) {
    var vm = this;
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = emptyVNode;
      if (false) {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'option is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');
    vm._watcher = new Watcher(vm, function () {
      vm._update(vm._render(), hydrating);
    }, noop);
    hydrating = false;
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  };

  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    if (vm._isMounted) {
      callHook(vm, 'updated');
    }
  };

  Vue.prototype._updateFromParent = function (
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    var vm = this;
    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;
    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      if (false) {
        observerState.isSettingProps = true;
      }
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      if (false) {
        observerState.isSettingProps = false;
      }
      vm.$options.propsData = propsData;
    }
    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      vm._updateListeners(listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove$1(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
  };
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      handlers[i].call(vm);
    }
  }
  vm.$emit('hook:' + hook);
}

/*  */

var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
var hooksToMerge = Object.keys(hooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // extract props
  var propsData = extractProps(data, Ctor);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  var vnode = Ctor.options.render.call(
    null,
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    bind$1(createElement, { _self: Object.create(context) }),
    {
      props: props,
      data: data,
      parent: context,
      children: normalizeChildren(children),
      slots: function () { return resolveSlots(children, context); }
    }
  );
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function init (
  vnode,
  hydrating,
  parentElm,
  refElm
) {
  if (!vnode.child || vnode.child._isDestroyed) {
    var child = vnode.child = createComponentInstanceForVnode(
      vnode,
      activeInstance,
      parentElm,
      refElm
    );
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  } else if (vnode.data.keepAlive) {
    // kept-alive components, treat as a patch
    var mountedNode = vnode; // work around flow
    prepatch(mountedNode, mountedNode);
  }
}

function prepatch (
  oldVnode,
  vnode
) {
  var options = vnode.componentOptions;
  var child = vnode.child = oldVnode.child;
  child._updateFromParent(
    options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
  );
}

function insert (vnode) {
  if (!vnode.child._isMounted) {
    vnode.child._isMounted = true;
    callHook(vnode.child, 'mounted');
  }
  if (vnode.data.keepAlive) {
    vnode.child._inactive = false;
    callHook(vnode.child, 'activated');
  }
}

function destroy$1 (vnode) {
  if (!vnode.child._isDestroyed) {
    if (!vnode.data.keepAlive) {
      vnode.child.$destroy();
    } else {
      vnode.child._inactive = true;
      callHook(vnode.child, 'deactivated');
    }
  }
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function (res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = hooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

/*  */

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  tag,
  data,
  children
) {
  if (data && (Array.isArray(data) || typeof data !== 'object')) {
    children = data;
    data = undefined;
  }
  // make sure to use real instance instead of proxy as context
  return _createElement(this._self, tag, data, children)
}

function _createElement (
  context,
  tag,
  data,
  children
) {
  if (data && data.__ob__) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return emptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
      typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (typeof tag === 'string') {
    var Ctor;
    var ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      return new VNode(
        tag, data, normalizeChildren(children, ns),
        undefined, undefined, ns, context
      )
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      return createComponent(Ctor, data, context, children, tag)
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      var childNs = tag === 'foreignObject' ? 'xhtml' : ns;
      return new VNode(
        tag, data, normalizeChildren(children, childNs),
        undefined, undefined, ns, context
      )
    }
  } else {
    // direct component options / constructor
    return createComponent(tag, data, context, children)
  }
}

/*  */

function initRender (vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = {};
  // bind the public createElement fn to this instance
  // so that we get proper render context inside it.
  vm.$createElement = bind$1(createElement, vm);
  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    if (_parentVnode && _parentVnode.data.scopedSlots) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots;
    }

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      /* istanbul ignore else */
      if (config.errorHandler) {
        config.errorHandler.call(null, e, vm);
      } else {
        if (false) {
          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
        }
        throw e
      }
      // return previous vnode to prevent render error causing blank component
      vnode = vm._vnode;
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = emptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // shorthands used in render functions
  Vue.prototype._h = createElement;
  // toString for mustaches
  Vue.prototype._s = _toString;
  // number conversion
  Vue.prototype._n = toNumber;
  // empty vnode
  Vue.prototype._e = emptyVNode;
  // loose equal
  Vue.prototype._q = looseEqual;
  // loose indexOf
  Vue.prototype._i = looseIndexOf;

  // render static tree by index
  Vue.prototype._m = function renderStatic (
    index,
    isInFor
  ) {
    var tree = this._staticTrees[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree)
        ? cloneVNodes(tree)
        : cloneVNode(tree)
    }
    // otherwise, render a fresh tree.
    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
    markStatic(tree, ("__static__" + index), false);
    return tree
  };

  // mark node as static (v-once)
  Vue.prototype._o = function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  };

  function markStatic (tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  // filter resolution helper
  var identity = function (_) { return _; };
  Vue.prototype._f = function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  };

  // render v-for
  Vue.prototype._l = function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    return ret
  };

  // renderSlot
  Vue.prototype._t = function (
    name,
    fallback,
    props
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    if (scopedSlotFn) { // scoped slot
      return scopedSlotFn(props || {}) || fallback
    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes && "production" !== 'production') {
        slotNodes._rendered && warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
        slotNodes._rendered = true;
      }
      return slotNodes || fallback
    }
  };

  // apply v-bind object
  Vue.prototype._b = function bindProps (
    data,
    tag,
    value,
    asProp
  ) {
    if (value) {
      if (!isObject(value)) {
        "production" !== 'production' && warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        for (var key in value) {
          if (key === 'class' || key === 'style') {
            data[key] = value[key];
          } else {
            var hash = asProp || config.mustUseProp(tag, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
            hash[key] = value[key];
          }
        }
      }
    }
    return data
  };

  // check v-on keyCodes
  Vue.prototype._k = function checkKeyCodes (
    eventKeyCode,
    key,
    builtInAlias
  ) {
    var keyCodes = config.keyCodes[key] || builtInAlias;
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  };
}

function resolveSlots (
  renderChildren,
  context
) {
  var slots = {};
  if (!renderChildren) {
    return slots
  }
  var children = normalizeChildren(renderChildren) || [];
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore single whitespace
  if (defaultSlot.length && !(
    defaultSlot.length === 1 &&
    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
  )) {
    slots.default = defaultSlot;
  }
  return slots
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  var add = function (event, fn, once) {
    once ? vm.$once(event, fn) : vm.$on(event, fn);
  };
  var remove$$1 = bind$1(vm.$off, vm);
  vm._updateListeners = function (listeners, oldListeners) {
    updateListeners(listeners, oldListeners || {}, add, remove$$1, vm);
  };
  if (listeners) {
    vm._updateListeners(listeners);
  }
}

function eventsMixin (Vue) {
  Vue.prototype.$on = function (event, fn) {
    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;
    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    callHook(vm, 'beforeCreate');
    initState(vm);
    callHook(vm, 'created');
    initRender(vm);
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = Ctor.super.options;
    var cachedSuperOptions = Ctor.superOptions;
    var extendOptions = Ctor.extendOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed
      Ctor.superOptions = superOptions;
      extendOptions.render = options.render;
      extendOptions.staticRenderFns = options.staticRenderFns;
      extendOptions._scopeId = options._scopeId;
      options = Ctor.options = mergeOptions(superOptions, extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function Vue$2 (options) {
  if (false) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$2);
stateMixin(Vue$2);
eventsMixin(Vue$2);
lifecycleMixin(Vue$2);
renderMixin(Vue$2);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }
    var name = extendOptions.name || Super.options.name;
    if (false) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characaters and the hyphen.'
        );
      }
    }
    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;
    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else {
    return pattern.test(name)
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes
  },
  created: function created () {
    this.cache = Object.create(null);
  },
  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    if (vnode && vnode.componentOptions) {
      var opts = vnode.componentOptions;
      // check pattern
      var name = opts.Ctor.options.name || opts.tag;
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? opts.Ctor.cid + (opts.tag ? ("::" + (opts.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.child = this.cache[key].child;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  },
  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this.cache) {
      var vnode = this$1.cache[key];
      callHook(vnode.child, 'deactivated');
      vnode.child.$destroy();
    }
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);
  Vue.util = util;
  Vue.set = set$1;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$2);

Object.defineProperty(Vue$2.prototype, '$isServer', {
  get: isServerRendering
});

Vue$2.version = '2.1.4';

/*  */

// attributes that should be using props for binding
var mustUseProp = function (tag, attr) {
  return (
    (attr === 'value' && (tag === 'input' || tag === 'textarea' || tag === 'option')) ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (childNode.child) {
    childNode = childNode.child._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  var res = '';
  if (!value) {
    return res
  }
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if ((stringified = stringifyClass(value[i]))) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML',
  xhtml: 'http://www.w3.org/1999/xhtml'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + selector
      );
      return document.createElement('div')
    }
  }
  return el
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function childNodes (node) {
  return node.childNodes
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	childNodes: childNodes,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.child || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove$1(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

function isUndef (s) {
  return s == null
}

function isDef (s) {
  return s != null
}

function sameVnode (vnode1, vnode2) {
  return (
    vnode1.key === vnode2.key &&
    vnode1.tag === vnode2.tag &&
    vnode1.isComment === vnode2.isComment &&
    !vnode1.data === !vnode2.data
  )
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks$1.length; ++i) {
    cbs[hooks$1[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeElement(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeElement (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html
    if (parent) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        inPre--;
      }
    } else if (vnode.isComment) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.child) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.child)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isReactivated) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.child) {
      innerNode = innerNode.child._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (parent) {
      nodeOps.insertBefore(parent, elm, ref);
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.child) {
      vnode = vnode.child._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (i.create) { i.create(emptyNode, vnode); }
      if (i.insert) { insertedVnodeQueue.push(vnode); }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.child.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          nodeOps.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (rm || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (!rm) {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } else {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeElement(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (false) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (elmToMove.tag !== newStartVnode.tag) {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (vnode.isStatic &&
        oldVnode.isStatic &&
        vnode.key === oldVnode.key &&
        (vnode.isCloned || vnode.isOnce)) {
      vnode.elm = oldVnode.elm;
      vnode.child = oldVnode.child;
      return
    }
    var i;
    var data = vnode.data;
    var hasData = isDef(data);
    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (hasData && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (hasData) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (false) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.child)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        var childNodes = nodeOps.childNodes(elm);
        // empty element, allow client to pick up and populate children
        if (!childNodes.length) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          if (childNodes.length !== children.length) {
            childrenMatch = false;
          } else {
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break
              }
            }
          }
          if (!childrenMatch) {
            if (false) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
      }
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (vnode.tag) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === nodeOps.tagName(node).toLowerCase()
      )
    } else {
      return _toString(vnode.text) === node.data
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (!vnode) {
      if (oldVnode) { invokeDestroyHook(oldVnode); }
      return
    }

    var elm, parent;
    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (!oldVnode) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (hydrating) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        elm = oldVnode.elm;
        parent = nodeOps.parentNode(elm);
        createElm(vnode, insertedVnodeQueue, parent, nodeOps.nextSibling(elm));

        if (vnode.parent) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (parent !== null) {
          removeVnodes(parent, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (
  oldVnode,
  vnode
) {
  if (!oldVnode.data.directives && !vnode.data.directives) {
    return
  }
  var isCreate = oldVnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      dirsWithInsert.forEach(function (dir) {
        callHook$1(dir, 'inserted', vnode, oldVnode);
      });
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      dirsWithPostpatch.forEach(function (dir) {
        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
      });
    }, 'dir-postpatch');
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode);
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

// skip type checking this file because we need to attach private properties
// to elements

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  var add = vnode.elm._v_add || (
    vnode.elm._v_add = function (event, handler, once, capture) {
      if (once) {
        var oldHandler = handler;
        handler = function (ev) {
          remove(event, handler, capture);
          arguments.length === 1
            ? oldHandler(ev)
            : oldHandler.apply(null, arguments);
        };
      }
      vnode.elm.addEventListener(event, handler, capture);
    }
  );
  var remove = vnode.elm._v_remove || (
    vnode.elm._v_remove = function (event, handler, capture) {
      vnode.elm.removeEventListener(event, handler, capture);
    }
  );
  updateListeners(on, oldOn, add, remove, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }
    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur);
      if (elm.value !== strCur && !elm.composing) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.child) {
      childNode = childNode.child._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    el.style[normalize(name)] = val;
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (!data.staticStyle && !data.style &&
      !oldData.staticStyle && !oldData.style) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldVnode.data.staticStyle;
  var oldStyleBinding = oldVnode.data.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  vnode.data.style = style.__ob__ ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (newStyle[name] == null) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !cls.trim()) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !cls.trim()) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove$1(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode) {
  var el = vnode.elm;

  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return
  }

  /* istanbul ignore if */
  if (el._enterCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear ? appearClass : enterClass;
  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl =
    enterHook &&
    // enterHook may be a bound method which exposes
    // the length of original fn as _length
    (enterHook._length || enterHook.length) > 1;

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
          pendingNode.context === vnode.context &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    }, 'transition-insert');
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        whenTransitionEnds(el, type, cb);
      }
    });
  }

  if (vnode.data.show) {
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return rm()
  }

  /* istanbul ignore if */
  if (el._leaveCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl =
    leave &&
    // leave hook may be a bound method which exposes
    // the length of original fn as _length
    (leave._length || leave.length) > 1;

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          whenTransitionEnds(el, type, cb);
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    leaveClass: (name + "-leave"),
    appearClass: (name + "-enter"),
    enterActiveClass: (name + "-enter-active"),
    leaveActiveClass: (name + "-leave-active"),
    appearActiveClass: (name + "-enter-active")
  }
});

function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  }
}

function _enter (_, vnode) {
  if (!vnode.data.show) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove (vnode, rm) {
    /* istanbul ignore else */
    if (!vnode.data.show) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model = {
  inserted: function inserted (el, binding, vnode) {
    if (false) {
      if (!modelableTagRE.test(vnode.tag)) {
        warn(
          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
          'If you are working with contenteditable, it\'s recommended to ' +
          'wrap a library dedicated for that purpose inside a custom component.',
          vnode.context
        );
      }
    }
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (
      (vnode.tag === 'textarea' || el.type === 'text') &&
      !binding.modifiers.lazy
    ) {
      if (!isAndroid) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
      }
      /* istanbul ignore if */
      if (isIE9) {
        el.vmodel = true;
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.child && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.child._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (value && transition && !isIE9) {
      enter(vnode);
    }
    var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
    el.style.display = value ? originalDisplay : 'none';
    el.__vOriginalDisplay = originalDisplay;
  },
  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      if (value) {
        enter(vnode);
        el.style.display = el.__vOriginalDisplay;
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  }
};

var platformDirectives = {
  model: model,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1].fn;
  }
  return data
}

function placeholder (h, rawChild) {
  return /\d-keep-alive$/.test(rawChild.tag)
    ? h('keep-alive')
    : null
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    var key = child.key = child.key == null || child.isStatic
      ? ("__v" + (child.tag + this._uid) + "__")
      : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && oldChild.key !== key) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);

      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        }, key);
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave, key);
        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        }, key);
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final disired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts
            ? (opts.Ctor.options.name || opts.tag)
            : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var f = document.body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      addTransitionClass(el, moveClass);
      var info = getTransitionInfo(el);
      removeTransitionClass(el, moveClass);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$2.config.isUnknownElement = isUnknownElement;
Vue$2.config.isReservedTag = isReservedTag;
Vue$2.config.getTagNamespace = getTagNamespace;
Vue$2.config.mustUseProp = mustUseProp;

// install platform runtime directives & components
extend(Vue$2.options.directives, platformDirectives);
extend(Vue$2.options.components, platformComponents);

// install platform patch function
Vue$2.prototype.__patch__ = inBrowser ? patch$1 : noop;

// wrap mount
Vue$2.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return this._mount(el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$2);
    } else if (
      false
    ) {
      console.log(
        'Download the Vue Devtools for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
}, 0);

module.exports = Vue$2;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repos_json__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repos_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__repos_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



let repos = [];
let languages = {
  // language: [list of repos]
  all: []
};

let apis = {
  all: [],
  "Viewer": [],
  "Design Automation": [],
  "Model Derivative": [],
  "Data Management": []
}; // enum list of apis with Autodesk

for (let repo of __WEBPACK_IMPORTED_MODULE_0__repos_json___default.a) {
  // put repos in a list
  repos.push(repo);

  // map language -> repo
  let language = repo.language;
  if (language !== null) {
    if (!languages[language]) {
      languages[language] = [];
    }
    languages[language].push(repo);
  }

  // map api -> repo
  // reg match api with the name of repo
  let viewerreg = /[vV]iewer/g,
      dareg = /[dD]esign.[aA]utomation/g,
      mdreg = /[mM]odel.[dD]erivative/g,
      dmreg = /[dD]ata.[mM]anagement/g;
  // can match multiple apis per repo
  if (repo.name.match(viewerreg)) {
    apis["Viewer"].push(repo);
  }
  if (repo.name.match(dareg)) {
    apis["Design Automation"].push(repo);
  }
  if (repo.name.match(mdreg)) {
    apis["Model Derivative"].push(repo);
  }
  if (repo.name.match(dmreg)) {
    apis["Data Management"].push(repo);
  }
}

languages.all.push(...repos);
apis.all.push(...repos);

/* harmony default export */ exports["default"] = {
  // pass these to the page
  data() {
    return {
      repos: repos,
      languages: languages,
      apis: apis
    };
  },

  methods: {
    sortByPopularity: () => {
      repos.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      });
    },
    sortByAlphabetical: () => {
      repos.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    },
    sortByLastUpdated: () => {
      repos.sort((a, b) => {
        return b.updated_at.localeCompare(a.updated_at);
      });
    },
    filterByLanguage: language => {
      repos.splice(0, repos.length);
      repos.push(...languages[language]);
    },
    filterByAPIUsed: apiName => {
      repos.splice(0, repos.length);
      repos.push(...apis[apiName]);
    }
  }
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background: #e2e1e0;\n  text-align: center;\n  height: 100%;\n}\n.repo-card {\n  color: #404040;\n  background: #fff;\n  border-radius: 2px;\n  display: inline-block;\n  height: 12rem;\n  margin: 1rem;\n  padding: 1rem;\n  position: relative;\n  width: 300px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  vertical-align: top;\n}\n.repo-card:hover {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\nh3 {\n  margin-bottom: 0.5rem;\n}\n", ""]);

// exports


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url(" + __webpack_require__(10) + ");src:url(" + __webpack_require__(9) + "?#iefix&v=4.7.0) format('embedded-opentype'),url(" + __webpack_require__(12) + ") format('woff2'),url(" + __webpack_require__(13) + ") format('woff'),url(" + __webpack_require__(11) + ") format('truetype'),url(" + __webpack_require__(8) + "#fontawesomeregular) format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\F000\"}.fa-music:before{content:\"\\F001\"}.fa-search:before{content:\"\\F002\"}.fa-envelope-o:before{content:\"\\F003\"}.fa-heart:before{content:\"\\F004\"}.fa-star:before{content:\"\\F005\"}.fa-star-o:before{content:\"\\F006\"}.fa-user:before{content:\"\\F007\"}.fa-film:before{content:\"\\F008\"}.fa-th-large:before{content:\"\\F009\"}.fa-th:before{content:\"\\F00A\"}.fa-th-list:before{content:\"\\F00B\"}.fa-check:before{content:\"\\F00C\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\F00D\"}.fa-search-plus:before{content:\"\\F00E\"}.fa-search-minus:before{content:\"\\F010\"}.fa-power-off:before{content:\"\\F011\"}.fa-signal:before{content:\"\\F012\"}.fa-gear:before,.fa-cog:before{content:\"\\F013\"}.fa-trash-o:before{content:\"\\F014\"}.fa-home:before{content:\"\\F015\"}.fa-file-o:before{content:\"\\F016\"}.fa-clock-o:before{content:\"\\F017\"}.fa-road:before{content:\"\\F018\"}.fa-download:before{content:\"\\F019\"}.fa-arrow-circle-o-down:before{content:\"\\F01A\"}.fa-arrow-circle-o-up:before{content:\"\\F01B\"}.fa-inbox:before{content:\"\\F01C\"}.fa-play-circle-o:before{content:\"\\F01D\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\F01E\"}.fa-refresh:before{content:\"\\F021\"}.fa-list-alt:before{content:\"\\F022\"}.fa-lock:before{content:\"\\F023\"}.fa-flag:before{content:\"\\F024\"}.fa-headphones:before{content:\"\\F025\"}.fa-volume-off:before{content:\"\\F026\"}.fa-volume-down:before{content:\"\\F027\"}.fa-volume-up:before{content:\"\\F028\"}.fa-qrcode:before{content:\"\\F029\"}.fa-barcode:before{content:\"\\F02A\"}.fa-tag:before{content:\"\\F02B\"}.fa-tags:before{content:\"\\F02C\"}.fa-book:before{content:\"\\F02D\"}.fa-bookmark:before{content:\"\\F02E\"}.fa-print:before{content:\"\\F02F\"}.fa-camera:before{content:\"\\F030\"}.fa-font:before{content:\"\\F031\"}.fa-bold:before{content:\"\\F032\"}.fa-italic:before{content:\"\\F033\"}.fa-text-height:before{content:\"\\F034\"}.fa-text-width:before{content:\"\\F035\"}.fa-align-left:before{content:\"\\F036\"}.fa-align-center:before{content:\"\\F037\"}.fa-align-right:before{content:\"\\F038\"}.fa-align-justify:before{content:\"\\F039\"}.fa-list:before{content:\"\\F03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\\F03B\"}.fa-indent:before{content:\"\\F03C\"}.fa-video-camera:before{content:\"\\F03D\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\F03E\"}.fa-pencil:before{content:\"\\F040\"}.fa-map-marker:before{content:\"\\F041\"}.fa-adjust:before{content:\"\\F042\"}.fa-tint:before{content:\"\\F043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\F044\"}.fa-share-square-o:before{content:\"\\F045\"}.fa-check-square-o:before{content:\"\\F046\"}.fa-arrows:before{content:\"\\F047\"}.fa-step-backward:before{content:\"\\F048\"}.fa-fast-backward:before{content:\"\\F049\"}.fa-backward:before{content:\"\\F04A\"}.fa-play:before{content:\"\\F04B\"}.fa-pause:before{content:\"\\F04C\"}.fa-stop:before{content:\"\\F04D\"}.fa-forward:before{content:\"\\F04E\"}.fa-fast-forward:before{content:\"\\F050\"}.fa-step-forward:before{content:\"\\F051\"}.fa-eject:before{content:\"\\F052\"}.fa-chevron-left:before{content:\"\\F053\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-plus-circle:before{content:\"\\F055\"}.fa-minus-circle:before{content:\"\\F056\"}.fa-times-circle:before{content:\"\\F057\"}.fa-check-circle:before{content:\"\\F058\"}.fa-question-circle:before{content:\"\\F059\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-crosshairs:before{content:\"\\F05B\"}.fa-times-circle-o:before{content:\"\\F05C\"}.fa-check-circle-o:before{content:\"\\F05D\"}.fa-ban:before{content:\"\\F05E\"}.fa-arrow-left:before{content:\"\\F060\"}.fa-arrow-right:before{content:\"\\F061\"}.fa-arrow-up:before{content:\"\\F062\"}.fa-arrow-down:before{content:\"\\F063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\F064\"}.fa-expand:before{content:\"\\F065\"}.fa-compress:before{content:\"\\F066\"}.fa-plus:before{content:\"\\F067\"}.fa-minus:before{content:\"\\F068\"}.fa-asterisk:before{content:\"\\F069\"}.fa-exclamation-circle:before{content:\"\\F06A\"}.fa-gift:before{content:\"\\F06B\"}.fa-leaf:before{content:\"\\F06C\"}.fa-fire:before{content:\"\\F06D\"}.fa-eye:before{content:\"\\F06E\"}.fa-eye-slash:before{content:\"\\F070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\F071\"}.fa-plane:before{content:\"\\F072\"}.fa-calendar:before{content:\"\\F073\"}.fa-random:before{content:\"\\F074\"}.fa-comment:before{content:\"\\F075\"}.fa-magnet:before{content:\"\\F076\"}.fa-chevron-up:before{content:\"\\F077\"}.fa-chevron-down:before{content:\"\\F078\"}.fa-retweet:before{content:\"\\F079\"}.fa-shopping-cart:before{content:\"\\F07A\"}.fa-folder:before{content:\"\\F07B\"}.fa-folder-open:before{content:\"\\F07C\"}.fa-arrows-v:before{content:\"\\F07D\"}.fa-arrows-h:before{content:\"\\F07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\F080\"}.fa-twitter-square:before{content:\"\\F081\"}.fa-facebook-square:before{content:\"\\F082\"}.fa-camera-retro:before{content:\"\\F083\"}.fa-key:before{content:\"\\F084\"}.fa-gears:before,.fa-cogs:before{content:\"\\F085\"}.fa-comments:before{content:\"\\F086\"}.fa-thumbs-o-up:before{content:\"\\F087\"}.fa-thumbs-o-down:before{content:\"\\F088\"}.fa-star-half:before{content:\"\\F089\"}.fa-heart-o:before{content:\"\\F08A\"}.fa-sign-out:before{content:\"\\F08B\"}.fa-linkedin-square:before{content:\"\\F08C\"}.fa-thumb-tack:before{content:\"\\F08D\"}.fa-external-link:before{content:\"\\F08E\"}.fa-sign-in:before{content:\"\\F090\"}.fa-trophy:before{content:\"\\F091\"}.fa-github-square:before{content:\"\\F092\"}.fa-upload:before{content:\"\\F093\"}.fa-lemon-o:before{content:\"\\F094\"}.fa-phone:before{content:\"\\F095\"}.fa-square-o:before{content:\"\\F096\"}.fa-bookmark-o:before{content:\"\\F097\"}.fa-phone-square:before{content:\"\\F098\"}.fa-twitter:before{content:\"\\F099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\F09A\"}.fa-github:before{content:\"\\F09B\"}.fa-unlock:before{content:\"\\F09C\"}.fa-credit-card:before{content:\"\\F09D\"}.fa-feed:before,.fa-rss:before{content:\"\\F09E\"}.fa-hdd-o:before{content:\"\\F0A0\"}.fa-bullhorn:before{content:\"\\F0A1\"}.fa-bell:before{content:\"\\F0F3\"}.fa-certificate:before{content:\"\\F0A3\"}.fa-hand-o-right:before{content:\"\\F0A4\"}.fa-hand-o-left:before{content:\"\\F0A5\"}.fa-hand-o-up:before{content:\"\\F0A6\"}.fa-hand-o-down:before{content:\"\\F0A7\"}.fa-arrow-circle-left:before{content:\"\\F0A8\"}.fa-arrow-circle-right:before{content:\"\\F0A9\"}.fa-arrow-circle-up:before{content:\"\\F0AA\"}.fa-arrow-circle-down:before{content:\"\\F0AB\"}.fa-globe:before{content:\"\\F0AC\"}.fa-wrench:before{content:\"\\F0AD\"}.fa-tasks:before{content:\"\\F0AE\"}.fa-filter:before{content:\"\\F0B0\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-arrows-alt:before{content:\"\\F0B2\"}.fa-group:before,.fa-users:before{content:\"\\F0C0\"}.fa-chain:before,.fa-link:before{content:\"\\F0C1\"}.fa-cloud:before{content:\"\\F0C2\"}.fa-flask:before{content:\"\\F0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\\F0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\\F0C5\"}.fa-paperclip:before{content:\"\\F0C6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\F0C7\"}.fa-square:before{content:\"\\F0C8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\F0C9\"}.fa-list-ul:before{content:\"\\F0CA\"}.fa-list-ol:before{content:\"\\F0CB\"}.fa-strikethrough:before{content:\"\\F0CC\"}.fa-underline:before{content:\"\\F0CD\"}.fa-table:before{content:\"\\F0CE\"}.fa-magic:before{content:\"\\F0D0\"}.fa-truck:before{content:\"\\F0D1\"}.fa-pinterest:before{content:\"\\F0D2\"}.fa-pinterest-square:before{content:\"\\F0D3\"}.fa-google-plus-square:before{content:\"\\F0D4\"}.fa-google-plus:before{content:\"\\F0D5\"}.fa-money:before{content:\"\\F0D6\"}.fa-caret-down:before{content:\"\\F0D7\"}.fa-caret-up:before{content:\"\\F0D8\"}.fa-caret-left:before{content:\"\\F0D9\"}.fa-caret-right:before{content:\"\\F0DA\"}.fa-columns:before{content:\"\\F0DB\"}.fa-unsorted:before,.fa-sort:before{content:\"\\F0DC\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\F0DD\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\F0DE\"}.fa-envelope:before{content:\"\\F0E0\"}.fa-linkedin:before{content:\"\\F0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\F0E2\"}.fa-legal:before,.fa-gavel:before{content:\"\\F0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\F0E4\"}.fa-comment-o:before{content:\"\\F0E5\"}.fa-comments-o:before{content:\"\\F0E6\"}.fa-flash:before,.fa-bolt:before{content:\"\\F0E7\"}.fa-sitemap:before{content:\"\\F0E8\"}.fa-umbrella:before{content:\"\\F0E9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\F0EA\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-exchange:before{content:\"\\F0EC\"}.fa-cloud-download:before{content:\"\\F0ED\"}.fa-cloud-upload:before{content:\"\\F0EE\"}.fa-user-md:before{content:\"\\F0F0\"}.fa-stethoscope:before{content:\"\\F0F1\"}.fa-suitcase:before{content:\"\\F0F2\"}.fa-bell-o:before{content:\"\\F0A2\"}.fa-coffee:before{content:\"\\F0F4\"}.fa-cutlery:before{content:\"\\F0F5\"}.fa-file-text-o:before{content:\"\\F0F6\"}.fa-building-o:before{content:\"\\F0F7\"}.fa-hospital-o:before{content:\"\\F0F8\"}.fa-ambulance:before{content:\"\\F0F9\"}.fa-medkit:before{content:\"\\F0FA\"}.fa-fighter-jet:before{content:\"\\F0FB\"}.fa-beer:before{content:\"\\F0FC\"}.fa-h-square:before{content:\"\\F0FD\"}.fa-plus-square:before{content:\"\\F0FE\"}.fa-angle-double-left:before{content:\"\\F100\"}.fa-angle-double-right:before{content:\"\\F101\"}.fa-angle-double-up:before{content:\"\\F102\"}.fa-angle-double-down:before{content:\"\\F103\"}.fa-angle-left:before{content:\"\\F104\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angle-down:before{content:\"\\F107\"}.fa-desktop:before{content:\"\\F108\"}.fa-laptop:before{content:\"\\F109\"}.fa-tablet:before{content:\"\\F10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\F10B\"}.fa-circle-o:before{content:\"\\F10C\"}.fa-quote-left:before{content:\"\\F10D\"}.fa-quote-right:before{content:\"\\F10E\"}.fa-spinner:before{content:\"\\F110\"}.fa-circle:before{content:\"\\F111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\F112\"}.fa-github-alt:before{content:\"\\F113\"}.fa-folder-o:before{content:\"\\F114\"}.fa-folder-open-o:before{content:\"\\F115\"}.fa-smile-o:before{content:\"\\F118\"}.fa-frown-o:before{content:\"\\F119\"}.fa-meh-o:before{content:\"\\F11A\"}.fa-gamepad:before{content:\"\\F11B\"}.fa-keyboard-o:before{content:\"\\F11C\"}.fa-flag-o:before{content:\"\\F11D\"}.fa-flag-checkered:before{content:\"\\F11E\"}.fa-terminal:before{content:\"\\F120\"}.fa-code:before{content:\"\\F121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\F122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\F123\"}.fa-location-arrow:before{content:\"\\F124\"}.fa-crop:before{content:\"\\F125\"}.fa-code-fork:before{content:\"\\F126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\F127\"}.fa-question:before{content:\"\\F128\"}.fa-info:before{content:\"\\F129\"}.fa-exclamation:before{content:\"\\F12A\"}.fa-superscript:before{content:\"\\F12B\"}.fa-subscript:before{content:\"\\F12C\"}.fa-eraser:before{content:\"\\F12D\"}.fa-puzzle-piece:before{content:\"\\F12E\"}.fa-microphone:before{content:\"\\F130\"}.fa-microphone-slash:before{content:\"\\F131\"}.fa-shield:before{content:\"\\F132\"}.fa-calendar-o:before{content:\"\\F133\"}.fa-fire-extinguisher:before{content:\"\\F134\"}.fa-rocket:before{content:\"\\F135\"}.fa-maxcdn:before{content:\"\\F136\"}.fa-chevron-circle-left:before{content:\"\\F137\"}.fa-chevron-circle-right:before{content:\"\\F138\"}.fa-chevron-circle-up:before{content:\"\\F139\"}.fa-chevron-circle-down:before{content:\"\\F13A\"}.fa-html5:before{content:\"\\F13B\"}.fa-css3:before{content:\"\\F13C\"}.fa-anchor:before{content:\"\\F13D\"}.fa-unlock-alt:before{content:\"\\F13E\"}.fa-bullseye:before{content:\"\\F140\"}.fa-ellipsis-h:before{content:\"\\F141\"}.fa-ellipsis-v:before{content:\"\\F142\"}.fa-rss-square:before{content:\"\\F143\"}.fa-play-circle:before{content:\"\\F144\"}.fa-ticket:before{content:\"\\F145\"}.fa-minus-square:before{content:\"\\F146\"}.fa-minus-square-o:before{content:\"\\F147\"}.fa-level-up:before{content:\"\\F148\"}.fa-level-down:before{content:\"\\F149\"}.fa-check-square:before{content:\"\\F14A\"}.fa-pencil-square:before{content:\"\\F14B\"}.fa-external-link-square:before{content:\"\\F14C\"}.fa-share-square:before{content:\"\\F14D\"}.fa-compass:before{content:\"\\F14E\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\F150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\F151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\F152\"}.fa-euro:before,.fa-eur:before{content:\"\\F153\"}.fa-gbp:before{content:\"\\F154\"}.fa-dollar:before,.fa-usd:before{content:\"\\F155\"}.fa-rupee:before,.fa-inr:before{content:\"\\F156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\F157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\F158\"}.fa-won:before,.fa-krw:before{content:\"\\F159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\F15A\"}.fa-file:before{content:\"\\F15B\"}.fa-file-text:before{content:\"\\F15C\"}.fa-sort-alpha-asc:before{content:\"\\F15D\"}.fa-sort-alpha-desc:before{content:\"\\F15E\"}.fa-sort-amount-asc:before{content:\"\\F160\"}.fa-sort-amount-desc:before{content:\"\\F161\"}.fa-sort-numeric-asc:before{content:\"\\F162\"}.fa-sort-numeric-desc:before{content:\"\\F163\"}.fa-thumbs-up:before{content:\"\\F164\"}.fa-thumbs-down:before{content:\"\\F165\"}.fa-youtube-square:before{content:\"\\F166\"}.fa-youtube:before{content:\"\\F167\"}.fa-xing:before{content:\"\\F168\"}.fa-xing-square:before{content:\"\\F169\"}.fa-youtube-play:before{content:\"\\F16A\"}.fa-dropbox:before{content:\"\\F16B\"}.fa-stack-overflow:before{content:\"\\F16C\"}.fa-instagram:before{content:\"\\F16D\"}.fa-flickr:before{content:\"\\F16E\"}.fa-adn:before{content:\"\\F170\"}.fa-bitbucket:before{content:\"\\F171\"}.fa-bitbucket-square:before{content:\"\\F172\"}.fa-tumblr:before{content:\"\\F173\"}.fa-tumblr-square:before{content:\"\\F174\"}.fa-long-arrow-down:before{content:\"\\F175\"}.fa-long-arrow-up:before{content:\"\\F176\"}.fa-long-arrow-left:before{content:\"\\F177\"}.fa-long-arrow-right:before{content:\"\\F178\"}.fa-apple:before{content:\"\\F179\"}.fa-windows:before{content:\"\\F17A\"}.fa-android:before{content:\"\\F17B\"}.fa-linux:before{content:\"\\F17C\"}.fa-dribbble:before{content:\"\\F17D\"}.fa-skype:before{content:\"\\F17E\"}.fa-foursquare:before{content:\"\\F180\"}.fa-trello:before{content:\"\\F181\"}.fa-female:before{content:\"\\F182\"}.fa-male:before{content:\"\\F183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\F184\"}.fa-sun-o:before{content:\"\\F185\"}.fa-moon-o:before{content:\"\\F186\"}.fa-archive:before{content:\"\\F187\"}.fa-bug:before{content:\"\\F188\"}.fa-vk:before{content:\"\\F189\"}.fa-weibo:before{content:\"\\F18A\"}.fa-renren:before{content:\"\\F18B\"}.fa-pagelines:before{content:\"\\F18C\"}.fa-stack-exchange:before{content:\"\\F18D\"}.fa-arrow-circle-o-right:before{content:\"\\F18E\"}.fa-arrow-circle-o-left:before{content:\"\\F190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\F191\"}.fa-dot-circle-o:before{content:\"\\F192\"}.fa-wheelchair:before{content:\"\\F193\"}.fa-vimeo-square:before{content:\"\\F194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\F195\"}.fa-plus-square-o:before{content:\"\\F196\"}.fa-space-shuttle:before{content:\"\\F197\"}.fa-slack:before{content:\"\\F198\"}.fa-envelope-square:before{content:\"\\F199\"}.fa-wordpress:before{content:\"\\F19A\"}.fa-openid:before{content:\"\\F19B\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\F19C\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\F19D\"}.fa-yahoo:before{content:\"\\F19E\"}.fa-google:before{content:\"\\F1A0\"}.fa-reddit:before{content:\"\\F1A1\"}.fa-reddit-square:before{content:\"\\F1A2\"}.fa-stumbleupon-circle:before{content:\"\\F1A3\"}.fa-stumbleupon:before{content:\"\\F1A4\"}.fa-delicious:before{content:\"\\F1A5\"}.fa-digg:before{content:\"\\F1A6\"}.fa-pied-piper-pp:before{content:\"\\F1A7\"}.fa-pied-piper-alt:before{content:\"\\F1A8\"}.fa-drupal:before{content:\"\\F1A9\"}.fa-joomla:before{content:\"\\F1AA\"}.fa-language:before{content:\"\\F1AB\"}.fa-fax:before{content:\"\\F1AC\"}.fa-building:before{content:\"\\F1AD\"}.fa-child:before{content:\"\\F1AE\"}.fa-paw:before{content:\"\\F1B0\"}.fa-spoon:before{content:\"\\F1B1\"}.fa-cube:before{content:\"\\F1B2\"}.fa-cubes:before{content:\"\\F1B3\"}.fa-behance:before{content:\"\\F1B4\"}.fa-behance-square:before{content:\"\\F1B5\"}.fa-steam:before{content:\"\\F1B6\"}.fa-steam-square:before{content:\"\\F1B7\"}.fa-recycle:before{content:\"\\F1B8\"}.fa-automobile:before,.fa-car:before{content:\"\\F1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\\F1BA\"}.fa-tree:before{content:\"\\F1BB\"}.fa-spotify:before{content:\"\\F1BC\"}.fa-deviantart:before{content:\"\\F1BD\"}.fa-soundcloud:before{content:\"\\F1BE\"}.fa-database:before{content:\"\\F1C0\"}.fa-file-pdf-o:before{content:\"\\F1C1\"}.fa-file-word-o:before{content:\"\\F1C2\"}.fa-file-excel-o:before{content:\"\\F1C3\"}.fa-file-powerpoint-o:before{content:\"\\F1C4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\F1C5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\F1C6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\F1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\F1C8\"}.fa-file-code-o:before{content:\"\\F1C9\"}.fa-vine:before{content:\"\\F1CA\"}.fa-codepen:before{content:\"\\F1CB\"}.fa-jsfiddle:before{content:\"\\F1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\F1CD\"}.fa-circle-o-notch:before{content:\"\\F1CE\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\F1D0\"}.fa-ge:before,.fa-empire:before{content:\"\\F1D1\"}.fa-git-square:before{content:\"\\F1D2\"}.fa-git:before{content:\"\\F1D3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\F1D4\"}.fa-tencent-weibo:before{content:\"\\F1D5\"}.fa-qq:before{content:\"\\F1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\F1D7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\F1D8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\F1D9\"}.fa-history:before{content:\"\\F1DA\"}.fa-circle-thin:before{content:\"\\F1DB\"}.fa-header:before{content:\"\\F1DC\"}.fa-paragraph:before{content:\"\\F1DD\"}.fa-sliders:before{content:\"\\F1DE\"}.fa-share-alt:before{content:\"\\F1E0\"}.fa-share-alt-square:before{content:\"\\F1E1\"}.fa-bomb:before{content:\"\\F1E2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\F1E3\"}.fa-tty:before{content:\"\\F1E4\"}.fa-binoculars:before{content:\"\\F1E5\"}.fa-plug:before{content:\"\\F1E6\"}.fa-slideshare:before{content:\"\\F1E7\"}.fa-twitch:before{content:\"\\F1E8\"}.fa-yelp:before{content:\"\\F1E9\"}.fa-newspaper-o:before{content:\"\\F1EA\"}.fa-wifi:before{content:\"\\F1EB\"}.fa-calculator:before{content:\"\\F1EC\"}.fa-paypal:before{content:\"\\F1ED\"}.fa-google-wallet:before{content:\"\\F1EE\"}.fa-cc-visa:before{content:\"\\F1F0\"}.fa-cc-mastercard:before{content:\"\\F1F1\"}.fa-cc-discover:before{content:\"\\F1F2\"}.fa-cc-amex:before{content:\"\\F1F3\"}.fa-cc-paypal:before{content:\"\\F1F4\"}.fa-cc-stripe:before{content:\"\\F1F5\"}.fa-bell-slash:before{content:\"\\F1F6\"}.fa-bell-slash-o:before{content:\"\\F1F7\"}.fa-trash:before{content:\"\\F1F8\"}.fa-copyright:before{content:\"\\F1F9\"}.fa-at:before{content:\"\\F1FA\"}.fa-eyedropper:before{content:\"\\F1FB\"}.fa-paint-brush:before{content:\"\\F1FC\"}.fa-birthday-cake:before{content:\"\\F1FD\"}.fa-area-chart:before{content:\"\\F1FE\"}.fa-pie-chart:before{content:\"\\F200\"}.fa-line-chart:before{content:\"\\F201\"}.fa-lastfm:before{content:\"\\F202\"}.fa-lastfm-square:before{content:\"\\F203\"}.fa-toggle-off:before{content:\"\\F204\"}.fa-toggle-on:before{content:\"\\F205\"}.fa-bicycle:before{content:\"\\F206\"}.fa-bus:before{content:\"\\F207\"}.fa-ioxhost:before{content:\"\\F208\"}.fa-angellist:before{content:\"\\F209\"}.fa-cc:before{content:\"\\F20A\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\F20B\"}.fa-meanpath:before{content:\"\\F20C\"}.fa-buysellads:before{content:\"\\F20D\"}.fa-connectdevelop:before{content:\"\\F20E\"}.fa-dashcube:before{content:\"\\F210\"}.fa-forumbee:before{content:\"\\F211\"}.fa-leanpub:before{content:\"\\F212\"}.fa-sellsy:before{content:\"\\F213\"}.fa-shirtsinbulk:before{content:\"\\F214\"}.fa-simplybuilt:before{content:\"\\F215\"}.fa-skyatlas:before{content:\"\\F216\"}.fa-cart-plus:before{content:\"\\F217\"}.fa-cart-arrow-down:before{content:\"\\F218\"}.fa-diamond:before{content:\"\\F219\"}.fa-ship:before{content:\"\\F21A\"}.fa-user-secret:before{content:\"\\F21B\"}.fa-motorcycle:before{content:\"\\F21C\"}.fa-street-view:before{content:\"\\F21D\"}.fa-heartbeat:before{content:\"\\F21E\"}.fa-venus:before{content:\"\\F221\"}.fa-mars:before{content:\"\\F222\"}.fa-mercury:before{content:\"\\F223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\F224\"}.fa-transgender-alt:before{content:\"\\F225\"}.fa-venus-double:before{content:\"\\F226\"}.fa-mars-double:before{content:\"\\F227\"}.fa-venus-mars:before{content:\"\\F228\"}.fa-mars-stroke:before{content:\"\\F229\"}.fa-mars-stroke-v:before{content:\"\\F22A\"}.fa-mars-stroke-h:before{content:\"\\F22B\"}.fa-neuter:before{content:\"\\F22C\"}.fa-genderless:before{content:\"\\F22D\"}.fa-facebook-official:before{content:\"\\F230\"}.fa-pinterest-p:before{content:\"\\F231\"}.fa-whatsapp:before{content:\"\\F232\"}.fa-server:before{content:\"\\F233\"}.fa-user-plus:before{content:\"\\F234\"}.fa-user-times:before{content:\"\\F235\"}.fa-hotel:before,.fa-bed:before{content:\"\\F236\"}.fa-viacoin:before{content:\"\\F237\"}.fa-train:before{content:\"\\F238\"}.fa-subway:before{content:\"\\F239\"}.fa-medium:before{content:\"\\F23A\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\F23B\"}.fa-optin-monster:before{content:\"\\F23C\"}.fa-opencart:before{content:\"\\F23D\"}.fa-expeditedssl:before{content:\"\\F23E\"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:\"\\F240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\F241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\F242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\F243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\F244\"}.fa-mouse-pointer:before{content:\"\\F245\"}.fa-i-cursor:before{content:\"\\F246\"}.fa-object-group:before{content:\"\\F247\"}.fa-object-ungroup:before{content:\"\\F248\"}.fa-sticky-note:before{content:\"\\F249\"}.fa-sticky-note-o:before{content:\"\\F24A\"}.fa-cc-jcb:before{content:\"\\F24B\"}.fa-cc-diners-club:before{content:\"\\F24C\"}.fa-clone:before{content:\"\\F24D\"}.fa-balance-scale:before{content:\"\\F24E\"}.fa-hourglass-o:before{content:\"\\F250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\F251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\F252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\F253\"}.fa-hourglass:before{content:\"\\F254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\F255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\F256\"}.fa-hand-scissors-o:before{content:\"\\F257\"}.fa-hand-lizard-o:before{content:\"\\F258\"}.fa-hand-spock-o:before{content:\"\\F259\"}.fa-hand-pointer-o:before{content:\"\\F25A\"}.fa-hand-peace-o:before{content:\"\\F25B\"}.fa-trademark:before{content:\"\\F25C\"}.fa-registered:before{content:\"\\F25D\"}.fa-creative-commons:before{content:\"\\F25E\"}.fa-gg:before{content:\"\\F260\"}.fa-gg-circle:before{content:\"\\F261\"}.fa-tripadvisor:before{content:\"\\F262\"}.fa-odnoklassniki:before{content:\"\\F263\"}.fa-odnoklassniki-square:before{content:\"\\F264\"}.fa-get-pocket:before{content:\"\\F265\"}.fa-wikipedia-w:before{content:\"\\F266\"}.fa-safari:before{content:\"\\F267\"}.fa-chrome:before{content:\"\\F268\"}.fa-firefox:before{content:\"\\F269\"}.fa-opera:before{content:\"\\F26A\"}.fa-internet-explorer:before{content:\"\\F26B\"}.fa-tv:before,.fa-television:before{content:\"\\F26C\"}.fa-contao:before{content:\"\\F26D\"}.fa-500px:before{content:\"\\F26E\"}.fa-amazon:before{content:\"\\F270\"}.fa-calendar-plus-o:before{content:\"\\F271\"}.fa-calendar-minus-o:before{content:\"\\F272\"}.fa-calendar-times-o:before{content:\"\\F273\"}.fa-calendar-check-o:before{content:\"\\F274\"}.fa-industry:before{content:\"\\F275\"}.fa-map-pin:before{content:\"\\F276\"}.fa-map-signs:before{content:\"\\F277\"}.fa-map-o:before{content:\"\\F278\"}.fa-map:before{content:\"\\F279\"}.fa-commenting:before{content:\"\\F27A\"}.fa-commenting-o:before{content:\"\\F27B\"}.fa-houzz:before{content:\"\\F27C\"}.fa-vimeo:before{content:\"\\F27D\"}.fa-black-tie:before{content:\"\\F27E\"}.fa-fonticons:before{content:\"\\F280\"}.fa-reddit-alien:before{content:\"\\F281\"}.fa-edge:before{content:\"\\F282\"}.fa-credit-card-alt:before{content:\"\\F283\"}.fa-codiepie:before{content:\"\\F284\"}.fa-modx:before{content:\"\\F285\"}.fa-fort-awesome:before{content:\"\\F286\"}.fa-usb:before{content:\"\\F287\"}.fa-product-hunt:before{content:\"\\F288\"}.fa-mixcloud:before{content:\"\\F289\"}.fa-scribd:before{content:\"\\F28A\"}.fa-pause-circle:before{content:\"\\F28B\"}.fa-pause-circle-o:before{content:\"\\F28C\"}.fa-stop-circle:before{content:\"\\F28D\"}.fa-stop-circle-o:before{content:\"\\F28E\"}.fa-shopping-bag:before{content:\"\\F290\"}.fa-shopping-basket:before{content:\"\\F291\"}.fa-hashtag:before{content:\"\\F292\"}.fa-bluetooth:before{content:\"\\F293\"}.fa-bluetooth-b:before{content:\"\\F294\"}.fa-percent:before{content:\"\\F295\"}.fa-gitlab:before{content:\"\\F296\"}.fa-wpbeginner:before{content:\"\\F297\"}.fa-wpforms:before{content:\"\\F298\"}.fa-envira:before{content:\"\\F299\"}.fa-universal-access:before{content:\"\\F29A\"}.fa-wheelchair-alt:before{content:\"\\F29B\"}.fa-question-circle-o:before{content:\"\\F29C\"}.fa-blind:before{content:\"\\F29D\"}.fa-audio-description:before{content:\"\\F29E\"}.fa-volume-control-phone:before{content:\"\\F2A0\"}.fa-braille:before{content:\"\\F2A1\"}.fa-assistive-listening-systems:before{content:\"\\F2A2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\F2A3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\F2A4\"}.fa-glide:before{content:\"\\F2A5\"}.fa-glide-g:before{content:\"\\F2A6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\F2A7\"}.fa-low-vision:before{content:\"\\F2A8\"}.fa-viadeo:before{content:\"\\F2A9\"}.fa-viadeo-square:before{content:\"\\F2AA\"}.fa-snapchat:before{content:\"\\F2AB\"}.fa-snapchat-ghost:before{content:\"\\F2AC\"}.fa-snapchat-square:before{content:\"\\F2AD\"}.fa-pied-piper:before{content:\"\\F2AE\"}.fa-first-order:before{content:\"\\F2B0\"}.fa-yoast:before{content:\"\\F2B1\"}.fa-themeisle:before{content:\"\\F2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\F2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\F2B4\"}.fa-handshake-o:before{content:\"\\F2B5\"}.fa-envelope-open:before{content:\"\\F2B6\"}.fa-envelope-open-o:before{content:\"\\F2B7\"}.fa-linode:before{content:\"\\F2B8\"}.fa-address-book:before{content:\"\\F2B9\"}.fa-address-book-o:before{content:\"\\F2BA\"}.fa-vcard:before,.fa-address-card:before{content:\"\\F2BB\"}.fa-vcard-o:before,.fa-address-card-o:before{content:\"\\F2BC\"}.fa-user-circle:before{content:\"\\F2BD\"}.fa-user-circle-o:before{content:\"\\F2BE\"}.fa-user-o:before{content:\"\\F2C0\"}.fa-id-badge:before{content:\"\\F2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\F2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\F2C3\"}.fa-quora:before{content:\"\\F2C4\"}.fa-free-code-camp:before{content:\"\\F2C5\"}.fa-telegram:before{content:\"\\F2C6\"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:\"\\F2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\F2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\F2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\F2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\F2CB\"}.fa-shower:before{content:\"\\F2CC\"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:\"\\F2CD\"}.fa-podcast:before{content:\"\\F2CE\"}.fa-window-maximize:before{content:\"\\F2D0\"}.fa-window-minimize:before{content:\"\\F2D1\"}.fa-window-restore:before{content:\"\\F2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\F2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\F2D4\"}.fa-bandcamp:before{content:\"\\F2D5\"}.fa-grav:before{content:\"\\F2D6\"}.fa-etsy:before{content:\"\\F2D7\"}.fa-imdb:before{content:\"\\F2D8\"}.fa-ravelry:before{content:\"\\F2D9\"}.fa-eercast:before{content:\"\\F2DA\"}.fa-microchip:before{content:\"\\F2DB\"}.fa-snowflake-o:before{content:\"\\F2DC\"}.fa-superpowers:before{content:\"\\F2DD\"}.fa-wpexplorer:before{content:\"\\F2DE\"}.fa-meetup:before{content:\"\\F2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}", ""]);

// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports
exports.i(__webpack_require__(6), "");

// module
exports.push([module.i, "@font-face {\n  font-family: 'Artifakt Element';\n  src:  url(" + __webpack_require__(14) + ") format('eot'),\n        url(" + __webpack_require__(15) + ") format('ttf'),\n        url(" + __webpack_require__(16) + ") format('woff'),\n        url(" + __webpack_require__(17) + ") format('woff2');\n}\n@font-face {\n  font-family: 'Artifakt Legend';\n  src:  url(" + __webpack_require__(18) + ") format('eot'),\n        url(" + __webpack_require__(19) + ") format('ttf'),\n        url(" + __webpack_require__(20) + ") format('woff'),\n        url(" + __webpack_require__(21) + ") format('woff2');\n}\nbody {\n    font-family: \"Artifakt Element\", fallback, sans-serif;\n}\na {\n  text-decoration: none;\n  color: black;\n}\na:hover {\n    color: #EE8822;\n}\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #fff;\n}\nli {\n    float: left;\n}\nli a {\n    display: block;\n    color: black;\n    text-align: center;\n    padding: 24px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #D17920;\n    color: white;\n}", ""]);

// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b67134b4df53afdfcd5565f5bb031c9f.svg";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b06871f281fee6b241d60582ae9369b9.ttf";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af7ae505a9eed503f8b8e6982036873e.woff2";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fee66e712a8a08eef5805a46892932ad.woff";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b55ce0300eb05115229e39fd1efbd249.eot";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "987567cc24dd1d57a195aa5f883b9b6c.ttf";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5df10b32745d362e4c96bf4495aa0506.woff";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b0c983bbda990a72e5d84ffc5ed4cd85.woff2";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "081c9df7e40389dd9d8ff2b4bd4f74a0.eot";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d41a989609413d1591f33a88383e87ff.ttf";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f50fe0e10a846115dea27179ae287eec.woff";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4adbc570eca5a2c295c8318589f42bd1.woff2";

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = [
	{
		"id": 21898898,
		"name": "forge.commandline-curl",
		"full_name": "Autodesk-Forge/forge.commandline-curl",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge.commandline-curl",
		"description": "curl commands demonstrating the Forge OAuth authorisation and Model Derivatives API ",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-curl/deployments",
		"created_at": "2014-07-16T11:58:57Z",
		"updated_at": "2016-10-07T05:34:44Z",
		"pushed_at": "2016-09-01T13:08:05Z",
		"git_url": "git://github.com/Autodesk-Forge/forge.commandline-curl.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge.commandline-curl.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge.commandline-curl.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge.commandline-curl",
		"homepage": "http://developer-autodesk.github.io/",
		"size": 111,
		"stargazers_count": 6,
		"watchers_count": 6,
		"language": "Shell",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 2,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 2,
		"open_issues": 0,
		"watchers": 6,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 21914619,
		"name": "viewer-steampunked-morgan",
		"full_name": "Autodesk-Forge/viewer-steampunked-morgan",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/viewer-steampunked-morgan",
		"description": "A Node.js server using the Forge Viewer to display the Morgan 3 Wheeler",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/viewer-steampunked-morgan/deployments",
		"created_at": "2014-07-16T19:44:54Z",
		"updated_at": "2016-10-07T05:35:03Z",
		"pushed_at": "2016-06-09T06:45:26Z",
		"git_url": "git://github.com/Autodesk-Forge/viewer-steampunked-morgan.git",
		"ssh_url": "git@github.com:Autodesk-Forge/viewer-steampunked-morgan.git",
		"clone_url": "https://github.com/Autodesk-Forge/viewer-steampunked-morgan.git",
		"svn_url": "https://github.com/Autodesk-Forge/viewer-steampunked-morgan",
		"homepage": "http://autode.sk/m3w",
		"size": 2528,
		"stargazers_count": 4,
		"watchers_count": 4,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 2,
		"mirror_url": null,
		"open_issues_count": 1,
		"forks": 2,
		"open_issues": 1,
		"watchers": 4,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 29182409,
		"name": "viewer-android-sample",
		"full_name": "Autodesk-Forge/viewer-android-sample",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/viewer-android-sample",
		"description": "An Andoid sample demonstrating the Forge OAuth authorisation and Model Derivatives API",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/viewer-android-sample/deployments",
		"created_at": "2015-01-13T09:22:00Z",
		"updated_at": "2016-11-11T08:49:45Z",
		"pushed_at": "2016-06-07T13:01:58Z",
		"git_url": "git://github.com/Autodesk-Forge/viewer-android-sample.git",
		"ssh_url": "git@github.com:Autodesk-Forge/viewer-android-sample.git",
		"clone_url": "https://github.com/Autodesk-Forge/viewer-android-sample.git",
		"svn_url": "https://github.com/Autodesk-Forge/viewer-android-sample",
		"homepage": "http://developer-autodesk.github.io/",
		"size": 3285,
		"stargazers_count": 6,
		"watchers_count": 6,
		"language": "Java",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 1,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 1,
		"open_issues": 0,
		"watchers": 6,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 64939693,
		"name": "forge.oauth2-js",
		"full_name": "Autodesk-Forge/forge.oauth2-js",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge.oauth2-js",
		"description": "Asynchronous Node.js library for the Autodesk Forge oAuth2 implementation",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge.oauth2-js/deployments",
		"created_at": "2016-08-04T14:05:24Z",
		"updated_at": "2016-08-04T14:07:26Z",
		"pushed_at": "2016-09-01T10:23:50Z",
		"git_url": "git://github.com/Autodesk-Forge/forge.oauth2-js.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge.oauth2-js.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge.oauth2-js.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge.oauth2-js",
		"homepage": null,
		"size": 35,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 0,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 0,
		"open_issues": 0,
		"watchers": 0,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 64940145,
		"name": "forge.oss-js",
		"full_name": "Autodesk-Forge/forge.oss-js",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge.oss-js",
		"description": "Asynchronous Javascript/Node.js library for the Autodesk Forge OSS API",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge.oss-js/deployments",
		"created_at": "2016-08-04T14:11:23Z",
		"updated_at": "2016-09-23T20:51:26Z",
		"pushed_at": "2016-09-01T10:24:28Z",
		"git_url": "git://github.com/Autodesk-Forge/forge.oss-js.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge.oss-js.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge.oss-js.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge.oss-js",
		"homepage": null,
		"size": 63,
		"stargazers_count": 1,
		"watchers_count": 1,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 0,
		"mirror_url": null,
		"open_issues_count": 1,
		"forks": 0,
		"open_issues": 1,
		"watchers": 1,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 64940256,
		"name": "forge.data.management-js",
		"full_name": "Autodesk-Forge/forge.data.management-js",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge.data.management-js",
		"description": "Asynchronous Javascript/Node.js library for the Autodesk Forge Data Management API",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge.data.management-js/deployments",
		"created_at": "2016-08-04T14:13:09Z",
		"updated_at": "2016-10-20T09:00:10Z",
		"pushed_at": "2016-09-01T10:25:39Z",
		"git_url": "git://github.com/Autodesk-Forge/forge.data.management-js.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge.data.management-js.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge.data.management-js.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge.data.management-js",
		"homepage": null,
		"size": 119,
		"stargazers_count": 1,
		"watchers_count": 1,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 0,
		"mirror_url": null,
		"open_issues_count": 1,
		"forks": 0,
		"open_issues": 1,
		"watchers": 1,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 64940535,
		"name": "forge.model.derivative-js",
		"full_name": "Autodesk-Forge/forge.model.derivative-js",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge.model.derivative-js",
		"description": "Asynchronous Javascript/Node.js library for the Autodesk Forge Model Derivative API",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge.model.derivative-js/deployments",
		"created_at": "2016-08-04T14:17:01Z",
		"updated_at": "2016-11-21T15:02:53Z",
		"pushed_at": "2016-10-31T09:11:51Z",
		"git_url": "git://github.com/Autodesk-Forge/forge.model.derivative-js.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge.model.derivative-js.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge.model.derivative-js.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge.model.derivative-js",
		"homepage": null,
		"size": 82,
		"stargazers_count": 2,
		"watchers_count": 2,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 2,
		"mirror_url": null,
		"open_issues_count": 1,
		"forks": 2,
		"open_issues": 1,
		"watchers": 2,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 64959137,
		"name": "forge.commandline-nodejs",
		"full_name": "Autodesk-Forge/forge.commandline-nodejs",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge.commandline-nodejs",
		"description": "Node.js command line tool demonstrating the Forge API",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge.commandline-nodejs/deployments",
		"created_at": "2016-08-04T18:46:17Z",
		"updated_at": "2016-10-25T15:14:13Z",
		"pushed_at": "2016-10-26T10:03:38Z",
		"git_url": "git://github.com/Autodesk-Forge/forge.commandline-nodejs.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge.commandline-nodejs.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge.commandline-nodejs.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge.commandline-nodejs",
		"homepage": null,
		"size": 141,
		"stargazers_count": 2,
		"watchers_count": 2,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 2,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 2,
		"open_issues": 0,
		"watchers": 2,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 67513960,
		"name": "forge-api-nodejs-client",
		"full_name": "Autodesk-Forge/forge-api-nodejs-client",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge-api-nodejs-client",
		"description": "Easily integrate Forge REST APIs into your application",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-nodejs-client/deployments",
		"created_at": "2016-09-06T14:09:11Z",
		"updated_at": "2016-12-09T02:05:33Z",
		"pushed_at": "2016-12-11T08:12:58Z",
		"git_url": "git://github.com/Autodesk-Forge/forge-api-nodejs-client.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge-api-nodejs-client.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge-api-nodejs-client.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge-api-nodejs-client",
		"homepage": "",
		"size": 449,
		"stargazers_count": 9,
		"watchers_count": 9,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 3,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 3,
		"open_issues": 0,
		"watchers": 9,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 67623548,
		"name": "forge-boilers.nodejs",
		"full_name": "Autodesk-Forge/forge-boilers.nodejs",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge-boilers.nodejs",
		"description": "A collection of node.js-based boiler projects for the Autodesk Forge Web Services APIs - ",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge-boilers.nodejs/deployments",
		"created_at": "2016-09-07T16:14:51Z",
		"updated_at": "2016-12-08T11:17:24Z",
		"pushed_at": "2016-12-09T09:53:38Z",
		"git_url": "git://github.com/Autodesk-Forge/forge-boilers.nodejs.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge-boilers.nodejs.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge-boilers.nodejs.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge-boilers.nodejs",
		"homepage": "http://forge.autodesk.com",
		"size": 28625,
		"stargazers_count": 17,
		"watchers_count": 17,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": true,
		"forks_count": 14,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 14,
		"open_issues": 0,
		"watchers": 17,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 69402229,
		"name": "forge-rcdb.nodejs",
		"full_name": "Autodesk-Forge/forge-rcdb.nodejs",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge-rcdb.nodejs",
		"description": "Forge Responsive Connected Database: A responsive React-based web application that showcases the use of Autodesk Forge Viewer and Forge web services ...",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge-rcdb.nodejs/deployments",
		"created_at": "2016-09-27T21:58:45Z",
		"updated_at": "2016-12-06T14:36:09Z",
		"pushed_at": "2016-12-08T13:19:01Z",
		"git_url": "git://github.com/Autodesk-Forge/forge-rcdb.nodejs.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge-rcdb.nodejs.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge-rcdb.nodejs.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge-rcdb.nodejs",
		"homepage": null,
		"size": 16007,
		"stargazers_count": 7,
		"watchers_count": 7,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 3,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 3,
		"open_issues": 0,
		"watchers": 7,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 69567132,
		"name": "forge-api-java-client",
		"full_name": "Autodesk-Forge/forge-api-java-client",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge-api-java-client",
		"description": "Easily integrate Forge REST APIs into your application",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client/deployments",
		"created_at": "2016-09-29T12:52:47Z",
		"updated_at": "2016-12-06T09:25:47Z",
		"pushed_at": "2016-12-06T09:44:53Z",
		"git_url": "git://github.com/Autodesk-Forge/forge-api-java-client.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge-api-java-client.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge-api-java-client.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge-api-java-client",
		"homepage": null,
		"size": 294,
		"stargazers_count": 4,
		"watchers_count": 4,
		"language": "Java",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 1,
		"mirror_url": null,
		"open_issues_count": 1,
		"forks": 1,
		"open_issues": 1,
		"watchers": 4,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 69567571,
		"name": "forge-api-java-client-jars",
		"full_name": "Autodesk-Forge/forge-api-java-client-jars",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/forge-api-java-client-jars",
		"description": "Easily integrate Forge REST APIs into your application",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/forge-api-java-client-jars/deployments",
		"created_at": "2016-09-29T12:58:26Z",
		"updated_at": "2016-09-29T12:58:26Z",
		"pushed_at": "2016-12-06T09:48:20Z",
		"git_url": "git://github.com/Autodesk-Forge/forge-api-java-client-jars.git",
		"ssh_url": "git@github.com:Autodesk-Forge/forge-api-java-client-jars.git",
		"clone_url": "https://github.com/Autodesk-Forge/forge-api-java-client-jars.git",
		"svn_url": "https://github.com/Autodesk-Forge/forge-api-java-client-jars",
		"homepage": null,
		"size": 12309,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": null,
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 1,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 1,
		"open_issues": 0,
		"watchers": 0,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 73214266,
		"name": "model.derivative-swift-sample",
		"full_name": "Autodesk-Forge/model.derivative-swift-sample",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/model.derivative-swift-sample",
		"description": "Shows how to use the Forge API's including the Model Derivative API from a Swift application",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-swift-sample/deployments",
		"created_at": "2016-11-08T18:20:11Z",
		"updated_at": "2016-11-14T18:30:56Z",
		"pushed_at": "2016-11-08T23:46:57Z",
		"git_url": "git://github.com/Autodesk-Forge/model.derivative-swift-sample.git",
		"ssh_url": "git@github.com:Autodesk-Forge/model.derivative-swift-sample.git",
		"clone_url": "https://github.com/Autodesk-Forge/model.derivative-swift-sample.git",
		"svn_url": "https://github.com/Autodesk-Forge/model.derivative-swift-sample",
		"homepage": null,
		"size": 177,
		"stargazers_count": 1,
		"watchers_count": 1,
		"language": "Swift",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 0,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 0,
		"open_issues": 0,
		"watchers": 1,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 73215307,
		"name": "model.derivative-nodejs-sample",
		"full_name": "Autodesk-Forge/model.derivative-nodejs-sample",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/model.derivative-nodejs-sample",
		"description": "Shows how to use the Forge API's including the Model Derivative API from Node.js",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-sample/deployments",
		"created_at": "2016-11-08T18:32:21Z",
		"updated_at": "2016-12-06T16:56:56Z",
		"pushed_at": "2016-11-12T22:49:53Z",
		"git_url": "git://github.com/Autodesk-Forge/model.derivative-nodejs-sample.git",
		"ssh_url": "git@github.com:Autodesk-Forge/model.derivative-nodejs-sample.git",
		"clone_url": "https://github.com/Autodesk-Forge/model.derivative-nodejs-sample.git",
		"svn_url": "https://github.com/Autodesk-Forge/model.derivative-nodejs-sample",
		"homepage": "https://derivatives.autodesk.io/",
		"size": 2014,
		"stargazers_count": 1,
		"watchers_count": 1,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 0,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 0,
		"open_issues": 0,
		"watchers": 1,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 73496523,
		"name": "data.management-nodejs-integration.box",
		"full_name": "Autodesk-Forge/data.management-nodejs-integration.box",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/data.management-nodejs-integration.box",
		"description": "Basic integration between Data Management API & Box ",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/data.management-nodejs-integration.box/deployments",
		"created_at": "2016-11-11T17:13:14Z",
		"updated_at": "2016-12-06T16:57:47Z",
		"pushed_at": "2016-11-11T17:25:47Z",
		"git_url": "git://github.com/Autodesk-Forge/data.management-nodejs-integration.box.git",
		"ssh_url": "git@github.com:Autodesk-Forge/data.management-nodejs-integration.box.git",
		"clone_url": "https://github.com/Autodesk-Forge/data.management-nodejs-integration.box.git",
		"svn_url": "https://github.com/Autodesk-Forge/data.management-nodejs-integration.box",
		"homepage": "https://forgedmboxintegration.herokuapp.com",
		"size": 242,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 0,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 0,
		"open_issues": 0,
		"watchers": 0,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 73496831,
		"name": "model.derivative-nodejs-google.drive.viewer",
		"full_name": "Autodesk-Forge/model.derivative-nodejs-google.drive.viewer",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer",
		"description": "Transparent use of Model Derivative to view Google Drive compatible files",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer/deployments",
		"created_at": "2016-11-11T17:17:44Z",
		"updated_at": "2016-12-06T16:57:28Z",
		"pushed_at": "2016-11-11T17:25:59Z",
		"git_url": "git://github.com/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer.git",
		"ssh_url": "git@github.com:Autodesk-Forge/model.derivative-nodejs-google.drive.viewer.git",
		"clone_url": "https://github.com/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer.git",
		"svn_url": "https://github.com/Autodesk-Forge/model.derivative-nodejs-google.drive.viewer",
		"homepage": "http://forgegoogledriveviewer.herokuapp.com/",
		"size": 240,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 1,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 1,
		"open_issues": 0,
		"watchers": 0,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 73497109,
		"name": "model.derivative-nodejs-box.viewer",
		"full_name": "Autodesk-Forge/model.derivative-nodejs-box.viewer",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/model.derivative-nodejs-box.viewer",
		"description": "Transparent use of Model Derivative to view Box compatible files",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/model.derivative-nodejs-box.viewer/deployments",
		"created_at": "2016-11-11T17:21:28Z",
		"updated_at": "2016-12-06T16:58:07Z",
		"pushed_at": "2016-11-11T17:25:55Z",
		"git_url": "git://github.com/Autodesk-Forge/model.derivative-nodejs-box.viewer.git",
		"ssh_url": "git@github.com:Autodesk-Forge/model.derivative-nodejs-box.viewer.git",
		"clone_url": "https://github.com/Autodesk-Forge/model.derivative-nodejs-box.viewer.git",
		"svn_url": "https://github.com/Autodesk-Forge/model.derivative-nodejs-box.viewer",
		"homepage": "http://forgeboxviewer.herokuapp.com/",
		"size": 228,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 0,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 0,
		"open_issues": 0,
		"watchers": 0,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 73499502,
		"name": "viewer-meteor-sample",
		"full_name": "Autodesk-Forge/viewer-meteor-sample",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/viewer-meteor-sample",
		"description": "Demonstrate Meteor with Viewer",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/viewer-meteor-sample/deployments",
		"created_at": "2016-11-11T17:56:50Z",
		"updated_at": "2016-11-11T17:59:18Z",
		"pushed_at": "2016-11-11T17:59:17Z",
		"git_url": "git://github.com/Autodesk-Forge/viewer-meteor-sample.git",
		"ssh_url": "git@github.com:Autodesk-Forge/viewer-meteor-sample.git",
		"clone_url": "https://github.com/Autodesk-Forge/viewer-meteor-sample.git",
		"svn_url": "https://github.com/Autodesk-Forge/viewer-meteor-sample",
		"homepage": null,
		"size": 9,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 0,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 0,
		"open_issues": 0,
		"watchers": 0,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 73500303,
		"name": "design.automation-java-simple.sample",
		"full_name": "Autodesk-Forge/design.automation-java-simple.sample",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/design.automation-java-simple.sample",
		"description": "The simplest Design Automation API Java sample ",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/design.automation-java-simple.sample/deployments",
		"created_at": "2016-11-11T18:08:51Z",
		"updated_at": "2016-11-11T18:10:47Z",
		"pushed_at": "2016-11-11T18:10:46Z",
		"git_url": "git://github.com/Autodesk-Forge/design.automation-java-simple.sample.git",
		"ssh_url": "git@github.com:Autodesk-Forge/design.automation-java-simple.sample.git",
		"clone_url": "https://github.com/Autodesk-Forge/design.automation-java-simple.sample.git",
		"svn_url": "https://github.com/Autodesk-Forge/design.automation-java-simple.sample",
		"homepage": null,
		"size": 5,
		"stargazers_count": 0,
		"watchers_count": 0,
		"language": "Java",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 0,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 0,
		"open_issues": 0,
		"watchers": 0,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	},
	{
		"id": 75750936,
		"name": "viewer-navigation.sample",
		"full_name": "Autodesk-Forge/viewer-navigation.sample",
		"owner": {
			"login": "Autodesk-Forge",
			"id": 16883010,
			"avatar_url": "https://avatars.githubusercontent.com/u/16883010?v=3",
			"gravatar_id": "",
			"url": "https://api.github.com/users/Autodesk-Forge",
			"html_url": "https://github.com/Autodesk-Forge",
			"followers_url": "https://api.github.com/users/Autodesk-Forge/followers",
			"following_url": "https://api.github.com/users/Autodesk-Forge/following{/other_user}",
			"gists_url": "https://api.github.com/users/Autodesk-Forge/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/Autodesk-Forge/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/Autodesk-Forge/subscriptions",
			"organizations_url": "https://api.github.com/users/Autodesk-Forge/orgs",
			"repos_url": "https://api.github.com/users/Autodesk-Forge/repos",
			"events_url": "https://api.github.com/users/Autodesk-Forge/events{/privacy}",
			"received_events_url": "https://api.github.com/users/Autodesk-Forge/received_events",
			"type": "Organization",
			"site_admin": false
		},
		"private": false,
		"html_url": "https://github.com/Autodesk-Forge/viewer-navigation.sample",
		"description": "Viewer 2D/3D Viewer Location Navigation",
		"fork": false,
		"url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample",
		"forks_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/forks",
		"keys_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/keys{/key_id}",
		"collaborators_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/collaborators{/collaborator}",
		"teams_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/teams",
		"hooks_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/hooks",
		"issue_events_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/issues/events{/number}",
		"events_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/events",
		"assignees_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/assignees{/user}",
		"branches_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/branches{/branch}",
		"tags_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/tags",
		"blobs_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/git/blobs{/sha}",
		"git_tags_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/git/tags{/sha}",
		"git_refs_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/git/refs{/sha}",
		"trees_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/git/trees{/sha}",
		"statuses_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/statuses/{sha}",
		"languages_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/languages",
		"stargazers_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/stargazers",
		"contributors_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/contributors",
		"subscribers_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/subscribers",
		"subscription_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/subscription",
		"commits_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/commits{/sha}",
		"git_commits_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/git/commits{/sha}",
		"comments_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/comments{/number}",
		"issue_comment_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/issues/comments{/number}",
		"contents_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/contents/{+path}",
		"compare_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/compare/{base}...{head}",
		"merges_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/merges",
		"archive_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/{archive_format}{/ref}",
		"downloads_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/downloads",
		"issues_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/issues{/number}",
		"pulls_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/pulls{/number}",
		"milestones_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/milestones{/number}",
		"notifications_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/notifications{?since,all,participating}",
		"labels_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/labels{/name}",
		"releases_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/releases{/id}",
		"deployments_url": "https://api.github.com/repos/Autodesk-Forge/viewer-navigation.sample/deployments",
		"created_at": "2016-12-06T16:40:59Z",
		"updated_at": "2016-12-10T17:56:52Z",
		"pushed_at": "2016-12-06T16:46:10Z",
		"git_url": "git://github.com/Autodesk-Forge/viewer-navigation.sample.git",
		"ssh_url": "git@github.com:Autodesk-Forge/viewer-navigation.sample.git",
		"clone_url": "https://github.com/Autodesk-Forge/viewer-navigation.sample.git",
		"svn_url": "https://github.com/Autodesk-Forge/viewer-navigation.sample",
		"homepage": "http://viewernavigation.herokuapp.com",
		"size": 30892,
		"stargazers_count": 1,
		"watchers_count": 1,
		"language": "JavaScript",
		"has_issues": true,
		"has_downloads": true,
		"has_wiki": true,
		"has_pages": false,
		"forks_count": 1,
		"mirror_url": null,
		"open_issues_count": 0,
		"forks": 1,
		"open_issues": 0,
		"watchers": 1,
		"default_branch": "master",
		"permissions": {
			"admin": false,
			"push": false,
			"pull": true
		}
	}
];

/***/ },
/* 23 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    attrs: {
      "id": "cards"
    }
  }, [_h('div', {
    staticClass: "repo-card"
  }, [_h('p', ["There are " + _vm._s(_vm.repos.length) + " repos."]), " ", _vm._m(0), " ", _h('p', [_h('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.sortByPopularity
    }
  }, ["Most Popular"])]), " ", _h('p', [_h('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.sortByAlphabetical
    }
  }, ["Alphabetical"])]), " ", _h('p', [_h('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.sortByLastUpdated
    }
  }, ["Last Updated"])])]), " ", _h('div', {
    staticClass: "repo-card"
  }, [_h('p', ["Filter by Language: "]), " ", _h('p', [_vm._l((_vm.languages), function(repo, language) {
    return _h('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          _vm.filterByLanguage(language)
        }
      }
    }, [_vm._s(language) + " "])
  })]), " ", _h('br'), " ", _h('p', ["Filter by API Used: "]), " ", _h('p', [_vm._l((_vm.apis), function(repo, api) {
    return _h('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          _vm.filterByAPIUsed(api)
        }
      }
    }, [_vm._s(api) + " "])
  })])]), " ", _vm._l((_vm.repos), function(repo) {
    return _h('a', {
      attrs: {
        "href": repo.html_url
      }
    }, [_h('div', {
      staticClass: "repo-card"
    }, [_h('h3', [_vm._s(repo.name)]), " ", _h('p', [_vm._s(repo.description)]), " ", _h('p', [_h('span', [_h('a', {
      attrs: {
        "href": repo.html_url
      }
    }, [_h('i', {
      staticClass: "fa fa-github",
      attrs: {
        "aria-hidden": "true"
      }
    }), " Source Code"])]), " ", _h('span', [_h('i', {
      staticClass: "fa fa-star",
      attrs: {
        "aria-hidden": "true"
      }
    }), " " + _vm._s(repo.stargazers_count)]), " ", _h('span', [_h('a', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (repo.homepage),
        expression: "repo.homepage"
      }],
      attrs: {
        "href": repo.homepage
      }
    }, [_h('i', {
      staticClass: "fa fa-desktop",
      attrs: {
        "aria-hidden": "true"
      }
    }), " Demo"])])])])])
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _h('p', [_h('br'), "Sort: "])
}]}

/***/ },
/* 25 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if (media) {
		styleElement.setAttribute("media", media);
	}

	if (sourceMap) {
		// https://developer.chrome.com/devtools/docs/javascript-debugging
		// this makes source maps inside style tags work properly in Chrome
		css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(25)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6cf85cf4!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cards.vue", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6cf85cf4!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cards.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 27 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cards_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cards_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Cards_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_main_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_main_css__);




new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#cards',
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__Cards_vue___default.a)
});

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map