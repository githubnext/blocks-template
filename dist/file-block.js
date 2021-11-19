(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[Object.keys(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i2 = 0; i2 < 10; i2++) {
            test2["_" + String.fromCharCode(i2)] = i2;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
            return test2[n2];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s2 = 1; s2 < arguments.length; s2++) {
          from = Object(arguments[s2]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i2 = 0; i2 < symbols.length; i2++) {
              if (propIsEnumerable.call(from, symbols[i2])) {
                to[symbols[i2]] = from[symbols[i2]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var _assign = require_object_assign();
          var ReactVersion = "17.0.2";
          var REACT_ELEMENT_TYPE = 60103;
          var REACT_PORTAL_TYPE = 60106;
          exports.Fragment = 60107;
          exports.StrictMode = 60108;
          exports.Profiler = 60114;
          var REACT_PROVIDER_TYPE = 60109;
          var REACT_CONTEXT_TYPE = 60110;
          var REACT_FORWARD_REF_TYPE = 60112;
          exports.Suspense = 60113;
          var REACT_SUSPENSE_LIST_TYPE = 60120;
          var REACT_MEMO_TYPE = 60115;
          var REACT_LAZY_TYPE = 60116;
          var REACT_BLOCK_TYPE = 60121;
          var REACT_SERVER_BLOCK_TYPE = 60122;
          var REACT_FUNDAMENTAL_TYPE = 60117;
          var REACT_SCOPE_TYPE = 60119;
          var REACT_OPAQUE_ID_TYPE = 60128;
          var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
          var REACT_OFFSCREEN_TYPE = 60130;
          var REACT_LEGACY_HIDDEN_TYPE = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor("react.element");
            REACT_PORTAL_TYPE = symbolFor("react.portal");
            exports.Fragment = symbolFor("react.fragment");
            exports.StrictMode = symbolFor("react.strict_mode");
            exports.Profiler = symbolFor("react.profiler");
            REACT_PROVIDER_TYPE = symbolFor("react.provider");
            REACT_CONTEXT_TYPE = symbolFor("react.context");
            REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
            exports.Suspense = symbolFor("react.suspense");
            REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
            REACT_MEMO_TYPE = symbolFor("react.memo");
            REACT_LAZY_TYPE = symbolFor("react.lazy");
            REACT_BLOCK_TYPE = symbolFor("react.block");
            REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
            REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
            REACT_SCOPE_TYPE = symbolFor("react.scope");
            REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
            REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
            REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
          }
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: 0
          };
          var ReactCurrentOwner = {
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var IsSomeRendererActing = {
            current: false
          };
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner,
            IsSomeRendererActing,
            assign: _assign
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          }
          function warn(format) {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
          function error(format) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            isMounted: function(publicInstance) {
              return false;
            },
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props2, context, updater) {
            this.props = props2;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
              {
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
              }
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props2, context, updater) {
            this.props = props2;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          _assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentName(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case exports.Fragment:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case exports.Profiler:
                return "Profiler";
              case exports.StrictMode:
                return "StrictMode";
              case exports.Suspense:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentName(init(payload));
                  } catch (x2) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props2, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props2, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props2, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props2, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self2, source, owner, props2) {
            var element = {
              $$typeof: REACT_ELEMENT_TYPE,
              type,
              key,
              ref,
              props: props2,
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props2 = {};
            var key = null;
            var ref = null;
            var self2 = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              self2 = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props2[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props2.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i2 = 0; i2 < childrenLength; i2++) {
                childArray[i2] = arguments[i2 + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props2.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props2[propName] === void 0) {
                  props2[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props2, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props2, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props2);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (!!(element === null || element === void 0)) {
              {
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
              }
            }
            var propName;
            var props2 = _assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self2 = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props2[propName] = defaultProps[propName];
                  } else {
                    props2[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props2.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i2 = 0; i2 < childrenLength; i2++) {
                childArray[i2] = arguments[i2 + 2];
              }
              props2.children = childArray;
            }
            return ReactElement(element.type, key, ref, self2, source, owner, props2);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (Array.isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c2) {
                  return c2;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (Array.isArray(children)) {
              for (var i2 = 0; i2 < children.length; i2++) {
                child = children[i2];
                nextName = nextNamePrefix + getElementKey(child, i2);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = "" + children;
                {
                  {
                    throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                  }
                }
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n2 = 0;
            mapChildren(children, function() {
              n2++;
            });
            return n2;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              {
                throw Error("React.Children.only expected to receive a single React element child.");
              }
            }
            return children;
          }
          function createContext(defaultValue, calculateChangedBits) {
            if (calculateChangedBits === void 0) {
              calculateChangedBits = null;
            } else {
              {
                if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                  error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
                }
              }
            }
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              _calculateChangedBits: calculateChangedBits,
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context,
                _calculateChangedBits: context._calculateChangedBits
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
              thenable.then(function(moduleObject) {
                if (payload._status === Pending) {
                  var defaultExport = moduleObject.default;
                  {
                    if (defaultExport === void 0) {
                      error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                    }
                  }
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = defaultExport;
                }
              }, function(error2) {
                if (payload._status === Pending) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
            }
            if (payload._status === Resolved) {
              return payload._result;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              _status: -1,
              _result: ctor
            };
            var lazyType2 = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType2, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType2, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType2, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType2;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (render.displayName == null) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var enableScopeAPI = false;
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (type.displayName == null) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            if (!(dispatcher !== null)) {
              {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext(Context, unstable_observedBits) {
            var dispatcher = resolveDispatcher();
            {
              if (unstable_observedBits !== void 0) {
                error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
              }
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context, unstable_observedBits);
          }
          function useState2(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect2(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo2(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props2 = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props2,
                  log: props2,
                  warn: props2,
                  error: props2,
                  group: props2,
                  groupCollapsed: props2,
                  groupEnd: props2
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props2 = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: _assign({}, props2, {
                    value: prevLog
                  }),
                  info: _assign({}, props2, {
                    value: prevInfo
                  }),
                  warn: _assign({}, props2, {
                    value: prevWarn
                  }),
                  error: _assign({}, props2, {
                    value: prevError
                  }),
                  group: _assign({}, props2, {
                    value: prevGroup
                  }),
                  groupCollapsed: _assign({}, props2, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: _assign({}, props2, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x2) {
                  var match = x2.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x2) {
                    control = x2;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x2) {
                    control = x2;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x2) {
                  control = x2;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s2 = sampleLines.length - 1;
                var c2 = controlLines.length - 1;
                while (s2 >= 1 && c2 >= 0 && sampleLines[s2] !== controlLines[c2]) {
                  c2--;
                }
                for (; s2 >= 1 && c2 >= 0; s2--, c2--) {
                  if (sampleLines[s2] !== controlLines[c2]) {
                    if (s2 !== 1 || c2 !== 1) {
                      do {
                        s2--;
                        c2--;
                        if (c2 < 0 || sampleLines[s2] !== controlLines[c2]) {
                          var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s2 >= 1 && c2 >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case exports.Suspense:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_BLOCK_TYPE:
                  return describeFunctionComponentFrame(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x2) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(Object.prototype.hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex2) {
                    error$1 = ex2;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentName(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (Array.isArray(node)) {
              for (var i2 = 0; i2 < node.length; i2++) {
                var child = node[i2];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentName(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentName(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i2 = 0; i2 < keys.length; i2++) {
                var key = keys[i2];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props2, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props2);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (Array.isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i2 = 2; i2 < arguments.length; i2++) {
                validateChildKeys(arguments[i2], type);
              }
            }
            if (type === exports.Fragment) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props2, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i2 = 2; i2 < arguments.length; i2++) {
              validateChildKeys(arguments[i2], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          {
            try {
              var frozenObject = Object.freeze({});
              new Map([[frozenObject, null]]);
              new Set([frozenObject]);
            } catch (e2) {
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.PureComponent = PureComponent;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useEffect = useEffect2;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo2;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState2;
          exports.version = ReactVersion;
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/parse-static-imports/dist/parseModuleName.js
  var require_parseModuleName = __commonJS({
    "node_modules/parse-static-imports/dist/parseModuleName.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = parseModuleName;
      function parseModuleName(str = "") {
        const normalized = str.replace(/(\'|\`)+/gm, '"');
        const importIdx = normalized.indexOf("import");
        const startQuoteIdx = normalized.indexOf('"');
        const endQuoteIdx = normalized.indexOf('"', startQuoteIdx + 1);
        if (importIdx < 0 || startQuoteIdx < 0 || endQuoteIdx < 0) {
          return "";
        }
        return normalized.substring(startQuoteIdx, endQuoteIdx).replace(/(\"|\s)+/gm, "");
      }
    }
  });

  // node_modules/parse-static-imports/dist/parseStarImport.js
  var require_parseStarImport = __commonJS({
    "node_modules/parse-static-imports/dist/parseStarImport.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = parseStarImport;
      function parseStarImport(str = "") {
        const starIdx = str.indexOf("*");
        if (starIdx < 0) {
          return "";
        }
        const asIdx = str.indexOf("as");
        const fromIdx = str.indexOf("from");
        return str.substring(asIdx + 2, fromIdx).trim();
      }
    }
  });

  // node_modules/parse-static-imports/dist/parseDefaultImport.js
  var require_parseDefaultImport = __commonJS({
    "node_modules/parse-static-imports/dist/parseDefaultImport.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = parseDefaultImport;
      function parseDefaultImport(str = "") {
        const commaIdx = str.indexOf(",");
        const starIdx = str.indexOf("*");
        const curlyIdx = str.indexOf("{");
        const fromIdx = str.indexOf("from");
        const importIdx = str.indexOf("import");
        const startIdx = importIdx + 6;
        if (fromIdx < 0 || importIdx < 0) {
          return "";
        }
        const hasComma = commaIdx >= 0;
        const hasNamedImports = curlyIdx >= 0;
        const hasStarImport = starIdx >= 0;
        if (hasComma && (hasNamedImports && commaIdx < curlyIdx || hasStarImport && commaIdx < starIdx)) {
          return str.substring(startIdx, commaIdx).replace(/(,|\s)+/gm, "");
        }
        if (hasNamedImports || hasStarImport) {
          return "";
        }
        return str.substring(startIdx, fromIdx).trim();
      }
    }
  });

  // node_modules/parse-static-imports/dist/parseNamedImports.js
  var require_parseNamedImports = __commonJS({
    "node_modules/parse-static-imports/dist/parseNamedImports.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = parseNamedImports;
      function createNamedImport(str = "") {
        const asIdx = str.indexOf(" as ");
        if (asIdx < 0) {
          const name2 = str.trim();
          return {
            name: name2,
            alias: name2
          };
        }
        const alias = str.substring(asIdx + 4).trim();
        const name = str.substring(0, asIdx).trim();
        return {
          name,
          alias
        };
      }
      function parseNamedImports(str = "") {
        const startCurlyIdx = str.indexOf("{");
        const endCurlyIdx = str.indexOf("}");
        if (startCurlyIdx < 0 || endCurlyIdx < 0) {
          return [];
        }
        return str.substring(startCurlyIdx + 1, endCurlyIdx - 1).split(",").filter(Boolean).map(createNamedImport);
      }
    }
  });

  // node_modules/parse-static-imports/dist/isSideEffectOnly.js
  var require_isSideEffectOnly = __commonJS({
    "node_modules/parse-static-imports/dist/isSideEffectOnly.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isSideEffectOnly;
      function isSideEffectOnly(str = "") {
        const importIdx = str.indexOf("import");
        const quoteIdx = str.replace(/(\'|\`)+/gm, '"').indexOf('"');
        const startIdx = importIdx >= 0 ? importIdx + 6 : 0;
        const betweenImportAndQuote = str.substring(startIdx, quoteIdx).trim();
        return importIdx >= 0 && betweenImportAndQuote.length === 0;
      }
    }
  });

  // node_modules/parse-static-imports/dist/removeLineComments.js
  var require_removeLineComments = __commonJS({
    "node_modules/parse-static-imports/dist/removeLineComments.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = removeLineComments;
      function removeLineComments(str = "") {
        const lines = str.split("\n");
        return lines.filter((line) => !line.includes("//")).join("\n");
      }
    }
  });

  // node_modules/parse-static-imports/dist/removeBlockComments.js
  var require_removeBlockComments = __commonJS({
    "node_modules/parse-static-imports/dist/removeBlockComments.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = removeBlockComments;
      function removeBlockComments(str = "") {
        return str.split("/*").map((maybeBlockComment) => {
          const endBlockIdx = maybeBlockComment.indexOf("*/");
          return endBlockIdx >= 0 ? maybeBlockComment.substring(endBlockIdx + 2).trim() : maybeBlockComment;
        }).join("");
      }
    }
  });

  // node_modules/parse-static-imports/dist/parseStaticImports.js
  var require_parseStaticImports = __commonJS({
    "node_modules/parse-static-imports/dist/parseStaticImports.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = parseStaticImports2;
      var _parseModuleName = _interopRequireDefault(require_parseModuleName());
      var _parseStarImport = _interopRequireDefault(require_parseStarImport());
      var _parseDefaultImport = _interopRequireDefault(require_parseDefaultImport());
      var _parseNamedImports = _interopRequireDefault(require_parseNamedImports());
      var _isSideEffectOnly = _interopRequireDefault(require_isSideEffectOnly());
      var _removeLineComments = _interopRequireDefault(require_removeLineComments());
      var _removeBlockComments = _interopRequireDefault(require_removeBlockComments());
      function _interopRequireDefault(obj2) {
        return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
      }
      function preprocess(file = "") {
        const normalizeLineEndings = file.replace(/\r/gm, "").trim();
        if (!file.includes("import ")) {
          return [];
        }
        return normalizeLineEndings.split("import ").filter(Boolean).map((str) => {
          const normalized = str.replace(/(\'|\`)/gm, '"');
          const openImportQuoteIdx = normalized.indexOf('"');
          const closeImportQuoteIdx = normalized.indexOf('"', openImportQuoteIdx + 1);
          const restOfImport = normalized.substring(0, closeImportQuoteIdx + 1).trim();
          return `import ${restOfImport}`;
        }).map(_removeLineComments.default).map(_removeBlockComments.default);
      }
      function parseStaticImports2(file = "") {
        return preprocess(file).reduce((acc, str) => {
          const sideEffectOnly = (0, _isSideEffectOnly.default)(str);
          return [...acc, {
            moduleName: (0, _parseModuleName.default)(str),
            defaultImport: sideEffectOnly ? "" : (0, _parseDefaultImport.default)(str),
            namedImports: sideEffectOnly ? [] : (0, _parseNamedImports.default)(str),
            starImport: sideEffectOnly ? "" : (0, _parseStarImport.default)(str),
            sideEffectOnly
          }];
        }, []);
      }
    }
  });

  // node_modules/parse-static-imports/dist/index.js
  var require_dist = __commonJS({
    "node_modules/parse-static-imports/dist/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _parseStaticImports = _interopRequireDefault(require_parseStaticImports());
      function _interopRequireDefault(obj2) {
        return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
      }
      var _default = _parseStaticImports.default;
      exports.default = _default;
      module.exports = _parseStaticImports.default;
    }
  });

  // node_modules/@githubnext/utils/dist/index.mjs
  var import_react = __toModule(require_react());

  // node_modules/zod/lib/index.mjs
  var extendStatics = function(e2, t2) {
    return (extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
      e3.__proto__ = t3;
    } || function(e3, t3) {
      for (var r4 in t3)
        Object.prototype.hasOwnProperty.call(t3, r4) && (e3[r4] = t3[r4]);
    })(e2, t2);
  };
  function __extends(e2, t2) {
    if (typeof t2 != "function" && t2 !== null)
      throw new TypeError("Class extends value " + String(t2) + " is not a constructor or null");
    function r4() {
      this.constructor = e2;
    }
    extendStatics(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (r4.prototype = t2.prototype, new r4());
  }
  var util;
  var __assign = function() {
    return (__assign = Object.assign || function(e2) {
      for (var t2, r4 = 1, n2 = arguments.length; r4 < n2; r4++)
        for (var a in t2 = arguments[r4])
          Object.prototype.hasOwnProperty.call(t2, a) && (e2[a] = t2[a]);
      return e2;
    }).apply(this, arguments);
  };
  function __awaiter(e2, s2, i2, u) {
    return new (i2 = i2 || Promise)(function(r4, t2) {
      function n2(e3) {
        try {
          o(u.next(e3));
        } catch (e4) {
          t2(e4);
        }
      }
      function a(e3) {
        try {
          o(u.throw(e3));
        } catch (e4) {
          t2(e4);
        }
      }
      function o(e3) {
        var t3;
        e3.done ? r4(e3.value) : ((t3 = e3.value) instanceof i2 ? t3 : new i2(function(e4) {
          e4(t3);
        })).then(n2, a);
      }
      o((u = u.apply(e2, s2 || [])).next());
    });
  }
  function __generator(r4, n2) {
    var a, o, s2, i2 = { label: 0, sent: function() {
      if (1 & s2[0])
        throw s2[1];
      return s2[1];
    }, trys: [], ops: [] }, e2 = { next: t2(0), throw: t2(1), return: t2(2) };
    return typeof Symbol == "function" && (e2[Symbol.iterator] = function() {
      return this;
    }), e2;
    function t2(t3) {
      return function(e3) {
        return function(t4) {
          if (a)
            throw new TypeError("Generator is already executing.");
          for (; i2; )
            try {
              if (a = 1, o && (s2 = 2 & t4[0] ? o.return : t4[0] ? o.throw || ((s2 = o.return) && s2.call(o), 0) : o.next) && !(s2 = s2.call(o, t4[1])).done)
                return s2;
              switch (o = 0, (t4 = s2 ? [2 & t4[0], s2.value] : t4)[0]) {
                case 0:
                case 1:
                  s2 = t4;
                  break;
                case 4:
                  return i2.label++, { value: t4[1], done: false };
                case 5:
                  i2.label++, o = t4[1], t4 = [0];
                  continue;
                case 7:
                  t4 = i2.ops.pop(), i2.trys.pop();
                  continue;
                default:
                  if (!(s2 = 0 < (s2 = i2.trys).length && s2[s2.length - 1]) && (t4[0] === 6 || t4[0] === 2)) {
                    i2 = 0;
                    continue;
                  }
                  if (t4[0] === 3 && (!s2 || t4[1] > s2[0] && t4[1] < s2[3])) {
                    i2.label = t4[1];
                    break;
                  }
                  if (t4[0] === 6 && i2.label < s2[1]) {
                    i2.label = s2[1], s2 = t4;
                    break;
                  }
                  if (s2 && i2.label < s2[2]) {
                    i2.label = s2[2], i2.ops.push(t4);
                    break;
                  }
                  s2[2] && i2.ops.pop(), i2.trys.pop();
                  continue;
              }
              t4 = n2.call(r4, i2);
            } catch (e4) {
              t4 = [6, e4], o = 0;
            } finally {
              a = s2 = 0;
            }
          if (5 & t4[0])
            throw t4[1];
          return { value: t4[0] ? t4[1] : void 0, done: true };
        }([t3, e3]);
      };
    }
  }
  function __values(e2) {
    var t2 = typeof Symbol == "function" && Symbol.iterator, r4 = t2 && e2[t2], n2 = 0;
    if (r4)
      return r4.call(e2);
    if (e2 && typeof e2.length == "number")
      return { next: function() {
        return { value: (e2 = e2 && n2 >= e2.length ? void 0 : e2) && e2[n2++], done: !e2 };
      } };
    throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(e2, t2) {
    var r4 = typeof Symbol == "function" && e2[Symbol.iterator];
    if (!r4)
      return e2;
    var n2, a, o = r4.call(e2), s2 = [];
    try {
      for (; (t2 === void 0 || 0 < t2--) && !(n2 = o.next()).done; )
        s2.push(n2.value);
    } catch (e3) {
      a = { error: e3 };
    } finally {
      try {
        n2 && !n2.done && (r4 = o.return) && r4.call(o);
      } finally {
        if (a)
          throw a.error;
      }
    }
    return s2;
  }
  function __spreadArray(e2, t2, r4) {
    if (r4 || arguments.length === 2)
      for (var n2, a = 0, o = t2.length; a < o; a++)
        !n2 && a in t2 || ((n2 = n2 || Array.prototype.slice.call(t2, 0, a))[a] = t2[a]);
    return e2.concat(n2 || Array.prototype.slice.call(t2));
  }
  !function(u) {
    u.assertNever = function(e2) {
      throw new Error();
    }, u.arrayToEnum = function(e2) {
      var t2, r4, n2 = {};
      try {
        for (var a = __values(e2), o = a.next(); !o.done; o = a.next()) {
          var s2 = o.value;
          n2[s2] = s2;
        }
      } catch (e3) {
        t2 = { error: e3 };
      } finally {
        try {
          o && !o.done && (r4 = a.return) && r4.call(a);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return n2;
    }, u.getValidEnumValues = function(t2) {
      var r4, e2, n2 = u.objectKeys(t2).filter(function(e3) {
        return typeof t2[t2[e3]] != "number";
      }), a = {};
      try {
        for (var o = __values(n2), s2 = o.next(); !s2.done; s2 = o.next()) {
          var i2 = s2.value;
          a[i2] = t2[i2];
        }
      } catch (e3) {
        r4 = { error: e3 };
      } finally {
        try {
          s2 && !s2.done && (e2 = o.return) && e2.call(o);
        } finally {
          if (r4)
            throw r4.error;
        }
      }
      return u.objectValues(a);
    }, u.objectValues = function(t2) {
      return u.objectKeys(t2).map(function(e2) {
        return t2[e2];
      });
    }, u.objectKeys = typeof Object.keys == "function" ? function(e2) {
      return Object.keys(e2);
    } : function(e2) {
      var t2, r4 = [];
      for (t2 in e2)
        Object.prototype.hasOwnProperty.call(e2, t2) && r4.push(t2);
      return r4;
    }, u.find = function(e2, t2) {
      var r4, n2;
      try {
        for (var a = __values(e2), o = a.next(); !o.done; o = a.next()) {
          var s2 = o.value;
          if (t2(s2))
            return s2;
        }
      } catch (e3) {
        r4 = { error: e3 };
      } finally {
        try {
          o && !o.done && (n2 = a.return) && n2.call(a);
        } finally {
          if (r4)
            throw r4.error;
        }
      }
    }, u.isInteger = typeof Number.isInteger == "function" ? function(e2) {
      return Number.isInteger(e2);
    } : function(e2) {
      return typeof e2 == "number" && isFinite(e2) && Math.floor(e2) === e2;
    };
  }(util = util || {});
  var ZodIssueCode = util.arrayToEnum(["invalid_type", "custom", "invalid_union", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of"]);
  var quotelessJson = function(e2) {
    return JSON.stringify(e2, null, 2).replace(/"([^"]+)":/g, "$1:");
  };
  var ZodError = function(r4) {
    function t2(e2) {
      var t3 = this.constructor, u = r4.call(this) || this;
      u.issues = [], u.format = function() {
        var p2 = { _errors: [] }, c2 = function(e3) {
          var t4, r5;
          try {
            for (var n2 = __values(e3.issues), a = n2.next(); !a.done; a = n2.next()) {
              var o = a.value;
              if (o.code === "invalid_union")
                o.unionErrors.map(c2);
              else if (o.code === "invalid_return_type")
                c2(o.returnTypeError);
              else if (o.code === "invalid_arguments")
                c2(o.argumentsError);
              else if (o.path.length === 0)
                p2._errors.push(o.message);
              else
                for (var s2 = p2, i2 = 0; i2 < o.path.length; ) {
                  var u2, d2 = o.path[i2];
                  i2 === o.path.length - 1 ? (s2[d2] = s2[d2] || { _errors: [] }, s2[d2]._errors.push(o.message)) : typeof d2 == "string" ? s2[d2] = s2[d2] || { _errors: [] } : typeof d2 == "number" && ((u2 = [])._errors = [], s2[d2] = s2[d2] || u2), s2 = s2[d2], i2++;
                }
            }
          } catch (e4) {
            t4 = { error: e4 };
          } finally {
            try {
              a && !a.done && (r5 = n2.return) && r5.call(n2);
            } finally {
              if (t4)
                throw t4.error;
            }
          }
        };
        return c2(u), p2;
      }, u.addIssue = function(e3) {
        u.issues = __spreadArray(__spreadArray([], __read(u.issues), false), [e3], false);
      }, u.addIssues = function(e3) {
        e3 === void 0 && (e3 = []), u.issues = __spreadArray(__spreadArray([], __read(u.issues), false), __read(e3), false);
      }, u.flatten = function(e3) {
        var t4, r5;
        e3 === void 0 && (e3 = function(e4) {
          return e4.message;
        });
        var n2 = {}, a = [];
        try {
          for (var o = __values(u.issues), s2 = o.next(); !s2.done; s2 = o.next()) {
            var i2 = s2.value;
            0 < i2.path.length ? (n2[i2.path[0]] = n2[i2.path[0]] || [], n2[i2.path[0]].push(e3(i2))) : a.push(e3(i2));
          }
        } catch (e4) {
          t4 = { error: e4 };
        } finally {
          try {
            s2 && !s2.done && (r5 = o.return) && r5.call(o);
          } finally {
            if (t4)
              throw t4.error;
          }
        }
        return { formErrors: a, fieldErrors: n2 };
      };
      t3 = t3.prototype;
      return Object.setPrototypeOf ? Object.setPrototypeOf(u, t3) : u.__proto__ = t3, u.name = "ZodError", u.issues = e2, u;
    }
    return __extends(t2, r4), Object.defineProperty(t2.prototype, "errors", { get: function() {
      return this.issues;
    }, enumerable: false, configurable: true }), t2.prototype.toString = function() {
      return this.message;
    }, Object.defineProperty(t2.prototype, "message", { get: function() {
      return JSON.stringify(this.issues, null, 2);
    }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isEmpty", { get: function() {
      return this.issues.length === 0;
    }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "formErrors", { get: function() {
      return this.flatten();
    }, enumerable: false, configurable: true }), t2.create = function(e2) {
      return new t2(e2);
    }, t2;
  }(Error);
  var defaultErrorMap = function(e2, t2) {
    var r4;
    switch (e2.code) {
      case ZodIssueCode.invalid_type:
        r4 = e2.received === "undefined" ? "Required" : "Expected " + e2.expected + ", received " + e2.received;
        break;
      case ZodIssueCode.unrecognized_keys:
        r4 = "Unrecognized key(s) in object: " + e2.keys.map(function(e3) {
          return "'" + e3 + "'";
        }).join(", ");
        break;
      case ZodIssueCode.invalid_union:
        r4 = "Invalid input";
        break;
      case ZodIssueCode.invalid_enum_value:
        r4 = "Invalid enum value. Expected " + e2.options.map(function(e3) {
          return typeof e3 == "string" ? "'" + e3 + "'" : e3;
        }).join(" | ") + ", received " + (typeof t2.data == "string" ? "'" + t2.data + "'" : t2.data);
        break;
      case ZodIssueCode.invalid_arguments:
        r4 = "Invalid function arguments";
        break;
      case ZodIssueCode.invalid_return_type:
        r4 = "Invalid function return type";
        break;
      case ZodIssueCode.invalid_date:
        r4 = "Invalid date";
        break;
      case ZodIssueCode.invalid_string:
        r4 = e2.validation !== "regex" ? "Invalid " + e2.validation : "Invalid";
        break;
      case ZodIssueCode.too_small:
        r4 = e2.type === "array" ? "Should have " + (e2.inclusive ? "at least" : "more than") + " " + e2.minimum + " items" : e2.type === "string" ? "Should be " + (e2.inclusive ? "at least" : "over") + " " + e2.minimum + " characters" : e2.type === "number" ? "Value should be greater than " + (e2.inclusive ? "or equal to " : "") + e2.minimum : "Invalid input";
        break;
      case ZodIssueCode.too_big:
        r4 = e2.type === "array" ? "Should have " + (e2.inclusive ? "at most" : "less than") + " " + e2.maximum + " items" : e2.type === "string" ? "Should be " + (e2.inclusive ? "at most" : "under") + " " + e2.maximum + " characters long" : e2.type === "number" ? "Value should be less than " + (e2.inclusive ? "or equal to " : "") + e2.maximum : "Invalid input";
        break;
      case ZodIssueCode.custom:
        r4 = "Invalid input";
        break;
      case ZodIssueCode.invalid_intersection_types:
        r4 = "Intersection results could not be merged";
        break;
      case ZodIssueCode.not_multiple_of:
        r4 = "Should be multiple of " + e2.multipleOf;
        break;
      default:
        r4 = t2.defaultError, util.assertNever(e2);
    }
    return { message: r4 };
  };
  var overrideErrorMap = defaultErrorMap;
  var setErrorMap = function(e2) {
    overrideErrorMap = e2;
  };
  var ZodParsedType = util.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
  function cacheAndReturn(e2, t2, r4) {
    return r4 && r4.set(e2, t2), t2;
  }
  var getParsedType = function(e2, t2) {
    if (t2 && t2.has(e2))
      return t2.get(e2);
    switch (typeof e2) {
      case "undefined":
        return cacheAndReturn(e2, ZodParsedType.undefined, t2);
      case "string":
        return cacheAndReturn(e2, ZodParsedType.string, t2);
      case "number":
        return cacheAndReturn(e2, isNaN(e2) ? ZodParsedType.nan : ZodParsedType.number, t2);
      case "boolean":
        return cacheAndReturn(e2, ZodParsedType.boolean, t2);
      case "function":
        return cacheAndReturn(e2, ZodParsedType.function, t2);
      case "bigint":
        return cacheAndReturn(e2, ZodParsedType.bigint, t2);
      case "object":
        return Array.isArray(e2) ? cacheAndReturn(e2, ZodParsedType.array, t2) : e2 === null ? cacheAndReturn(e2, ZodParsedType.null, t2) : e2.then && typeof e2.then == "function" && e2.catch && typeof e2.catch == "function" ? cacheAndReturn(e2, ZodParsedType.promise, t2) : e2 instanceof Map ? cacheAndReturn(e2, ZodParsedType.map, t2) : e2 instanceof Set ? cacheAndReturn(e2, ZodParsedType.set, t2) : e2 instanceof Date ? cacheAndReturn(e2, ZodParsedType.date, t2) : cacheAndReturn(e2, ZodParsedType.object, t2);
      default:
        return cacheAndReturn(e2, ZodParsedType.unknown, t2);
    }
  };
  var makeIssue = function(e2) {
    var t2, r4, n2 = e2.data, a = e2.path, o = e2.errorMaps, e2 = e2.issueData, a = __spreadArray(__spreadArray([], __read(a), false), __read(e2.path || []), false), s2 = __assign(__assign({}, e2), { path: a }), i2 = "", o = o.filter(function(e3) {
      return !!e3;
    }).slice().reverse();
    try {
      for (var u = __values(o), d2 = u.next(); !d2.done; d2 = u.next())
        i2 = (0, d2.value)(s2, { data: n2, defaultError: i2 }).message;
    } catch (e3) {
      t2 = { error: e3 };
    } finally {
      try {
        d2 && !d2.done && (r4 = u.return) && r4.call(u);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return __assign(__assign({}, e2), { path: a, message: e2.message || i2 });
  };
  var EMPTY_PATH = [];
  function addIssueToContext(e2, t2) {
    t2 = makeIssue({ issueData: t2, data: e2.data, path: e2.path, errorMaps: [e2.contextualErrorMap, e2.schemaErrorMap, overrideErrorMap, defaultErrorMap].filter(function(e3) {
      return !!e3;
    }) });
    e2.issues.push(t2);
  }
  var errorUtil;
  var ParseStatus = function() {
    function l2() {
      this.value = "valid";
    }
    return l2.prototype.dirty = function() {
      this.value === "valid" && (this.value = "dirty");
    }, l2.prototype.abort = function() {
      this.value !== "aborted" && (this.value = "aborted");
    }, l2.mergeArray = function(e2, t2) {
      var r4, n2, a = [];
      try {
        for (var o = __values(t2), s2 = o.next(); !s2.done; s2 = o.next()) {
          var i2 = s2.value;
          if (i2.status === "aborted")
            return INVALID;
          i2.status === "dirty" && e2.dirty(), a.push(i2.value);
        }
      } catch (e3) {
        r4 = { error: e3 };
      } finally {
        try {
          s2 && !s2.done && (n2 = o.return) && n2.call(o);
        } finally {
          if (r4)
            throw r4.error;
        }
      }
      return { status: e2.value, value: a };
    }, l2.mergeObjectAsync = function(p2, c2) {
      return __awaiter(this, void 0, void 0, function() {
        var t2, r4, n2, a, o, s2, i2, u, d2;
        return __generator(this, function(e2) {
          switch (e2.label) {
            case 0:
              t2 = [], e2.label = 1;
            case 1:
              e2.trys.push([1, 7, 8, 9]), r4 = __values(c2), n2 = r4.next(), e2.label = 2;
            case 2:
              return n2.done ? [3, 6] : (a = n2.value, s2 = (o = t2).push, d2 = {}, [4, a.key]);
            case 3:
              return d2.key = e2.sent(), [4, a.value];
            case 4:
              s2.apply(o, [(d2.value = e2.sent(), d2)]), e2.label = 5;
            case 5:
              return n2 = r4.next(), [3, 2];
            case 6:
              return [3, 9];
            case 7:
              return i2 = e2.sent(), i2 = { error: i2 }, [3, 9];
            case 8:
              try {
                n2 && !n2.done && (u = r4.return) && u.call(r4);
              } finally {
                if (i2)
                  throw i2.error;
              }
              return [7];
            case 9:
              return [2, l2.mergeObjectSync(p2, t2)];
          }
        });
      });
    }, l2.mergeObjectSync = function(e2, t2) {
      var r4, n2, a = {};
      try {
        for (var o = __values(t2), s2 = o.next(); !s2.done; s2 = o.next()) {
          var i2 = s2.value, u = i2.key, d2 = i2.value;
          if (u.status === "aborted")
            return INVALID;
          if (d2.status === "aborted")
            return INVALID;
          u.status === "dirty" && e2.dirty(), d2.status === "dirty" && e2.dirty(), d2.value === void 0 && !i2.alwaysSet || (a[u.value] = d2.value);
        }
      } catch (e3) {
        r4 = { error: e3 };
      } finally {
        try {
          s2 && !s2.done && (n2 = o.return) && n2.call(o);
        } finally {
          if (r4)
            throw r4.error;
        }
      }
      return { status: e2.value, value: a };
    }, l2;
  }();
  var INVALID = Object.freeze({ status: "aborted" });
  var DIRTY = function(e2) {
    return { status: "dirty", value: e2 };
  };
  var OK = function(e2) {
    return { status: "valid", value: e2 };
  };
  var isAborted = function(e2) {
    return e2.status === "aborted";
  };
  var isDirty = function(e2) {
    return e2.status === "dirty";
  };
  var isValid = function(e2) {
    return e2.status === "valid";
  };
  var isAsync = function(e2) {
    return e2 instanceof Promise;
  };
  !function(e2) {
    e2.errToObj = function(e3) {
      return typeof e3 == "string" ? { message: e3 } : e3 || {};
    }, e2.toString = function(e3) {
      return typeof e3 == "string" ? e3 : e3 == null ? void 0 : e3.message;
    };
  }(errorUtil = errorUtil || {});
  var handleResult = function(e2, t2) {
    if (isValid(t2))
      return { success: true, data: t2.value };
    if (!e2.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return { success: false, error: new ZodError(e2.issues) };
  };
  function processCreateParams(r4) {
    if (!r4)
      return {};
    if (r4.errorMap && (r4.invalid_type_error || r4.required_error))
      throw new Error(`Can't use "invalid" or "required" in conjunction with custom error map.`);
    if (r4.errorMap)
      return { errorMap: r4.errorMap };
    return { errorMap: function(e2, t2) {
      return e2.code !== "invalid_type" ? { message: t2.defaultError } : t2.data === void 0 && r4.required_error ? { message: r4.required_error } : r4.invalid_type_error ? { message: r4.invalid_type_error } : { message: t2.defaultError };
    } };
  }
  var objectUtil;
  var ZodType = function() {
    function e2(e3) {
      this.spa = this.safeParseAsync, this.superRefine = this._refinement, this._def = e3, this.transform = this.transform.bind(this), this.default = this.default.bind(this);
    }
    return Object.defineProperty(e2.prototype, "description", { get: function() {
      return this._def.description;
    }, enumerable: false, configurable: true }), e2.prototype._processInputParams = function(e3) {
      return { status: new ParseStatus(), ctx: __assign(__assign({}, e3.parent), { data: e3.data, parsedType: getParsedType(e3.data, e3.parent.typeCache), schemaErrorMap: this._def.errorMap, path: e3.path, parent: e3.parent }) };
    }, e2.prototype._parseSync = function(e3) {
      e3 = this._parse(e3);
      if (isAsync(e3))
        throw new Error("Synchronous parse encountered promise.");
      return e3;
    }, e2.prototype._parseAsync = function(e3) {
      e3 = this._parse(e3);
      return Promise.resolve(e3);
    }, e2.prototype.parse = function(e3, t2) {
      t2 = this.safeParse(e3, t2);
      if (t2.success)
        return t2.data;
      throw t2.error;
    }, e2.prototype.safeParse = function(e3, t2) {
      t2 = { path: (t2 == null ? void 0 : t2.path) || [], issues: [], contextualErrorMap: t2 == null ? void 0 : t2.errorMap, schemaErrorMap: this._def.errorMap, async: (t2 = t2 == null ? void 0 : t2.async) !== null && t2 !== void 0 && t2, typeCache: new Map(), parent: null, data: e3, parsedType: getParsedType(e3) }, e3 = this._parseSync({ data: e3, path: t2.path, parent: t2 });
      return handleResult(t2, e3);
    }, e2.prototype.parseAsync = function(r4, n2) {
      return __awaiter(this, void 0, void 0, function() {
        var t2;
        return __generator(this, function(e3) {
          switch (e3.label) {
            case 0:
              return [4, this.safeParseAsync(r4, n2)];
            case 1:
              if ((t2 = e3.sent()).success)
                return [2, t2.data];
              throw t2.error;
          }
        });
      });
    }, e2.prototype.safeParseAsync = function(n2, a) {
      return __awaiter(this, void 0, void 0, function() {
        var t2, r4;
        return __generator(this, function(e3) {
          switch (e3.label) {
            case 0:
              return t2 = { path: (a == null ? void 0 : a.path) || [], issues: [], contextualErrorMap: a == null ? void 0 : a.errorMap, schemaErrorMap: this._def.errorMap, async: true, typeCache: new Map(), parent: null, data: n2, parsedType: getParsedType(n2) }, r4 = this._parse({ data: n2, path: [], parent: t2 }), [4, isAsync(r4) ? r4 : Promise.resolve(r4)];
            case 1:
              return r4 = e3.sent(), [2, handleResult(t2, r4)];
          }
        });
      });
    }, e2.prototype.refine = function(a, o) {
      return this._refinement(function(t2, r4) {
        function n2() {
          return r4.addIssue(__assign({ code: ZodIssueCode.custom }, (e4 = t2, typeof o == "string" || o === void 0 ? { message: o } : typeof o == "function" ? o(e4) : o)));
          var e4;
        }
        var e3 = a(t2);
        return e3 instanceof Promise ? e3.then(function(e4) {
          return !!e4 || (n2(), false);
        }) : !!e3 || (n2(), false);
      });
    }, e2.prototype.refinement = function(r4, n2) {
      return this._refinement(function(e3, t2) {
        return !!r4(e3) || (t2.addIssue(typeof n2 == "function" ? n2(e3, t2) : n2), false);
      });
    }, e2.prototype._refinement = function(e3) {
      return new ZodEffects({ schema: this, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: { type: "refinement", refinement: e3 } });
    }, e2.prototype.optional = function() {
      return ZodOptional.create(this);
    }, e2.prototype.nullable = function() {
      return ZodNullable.create(this);
    }, e2.prototype.nullish = function() {
      return this.optional().nullable();
    }, e2.prototype.array = function() {
      return ZodArray.create(this);
    }, e2.prototype.promise = function() {
      return ZodPromise.create(this);
    }, e2.prototype.or = function(e3) {
      return ZodUnion.create([this, e3]);
    }, e2.prototype.and = function(e3) {
      return ZodIntersection.create(this, e3);
    }, e2.prototype.transform = function(e3) {
      return new ZodEffects({ schema: this, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: { type: "transform", transform: e3 } });
    }, e2.prototype.default = function(e3) {
      return new ZodDefault({ innerType: this, defaultValue: typeof e3 == "function" ? e3 : function() {
        return e3;
      }, typeName: ZodFirstPartyTypeKind.ZodDefault });
    }, e2.prototype.describe = function(e3) {
      return new this.constructor(__assign(__assign({}, this._def), { description: e3 }));
    }, e2.prototype.isOptional = function() {
      return this.safeParse(void 0).success;
    }, e2.prototype.isNullable = function() {
      return this.safeParse(null).success;
    }, e2;
  }();
  var cuidRegex = /^c[^\s-]{8,}$/i;
  var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
  var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var ZodString = function(e2) {
    function t2() {
      var n2 = e2 !== null && e2.apply(this, arguments) || this;
      return n2._regex = function(t3, e3, r4) {
        return n2.refinement(function(e4) {
          return t3.test(e4);
        }, __assign({ validation: e3, code: ZodIssueCode.invalid_string }, errorUtil.errToObj(r4)));
      }, n2.nonempty = function(e3) {
        return n2.min(1, errorUtil.errToObj(e3));
      }, n2;
    }
    return __extends(t2, e2), t2.prototype._parse = function(e3) {
      var t3, r4, e3 = this._processInputParams(e3), n2 = e3.status, a = e3.ctx;
      if (a.parsedType !== ZodParsedType.string)
        return addIssueToContext(a, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.string, received: a.parsedType }), INVALID;
      try {
        for (var o = __values(this._def.checks), s2 = o.next(); !s2.done; s2 = o.next()) {
          var i2 = s2.value;
          if (i2.kind === "min")
            a.data.length < i2.value && (addIssueToContext(a, { code: ZodIssueCode.too_small, minimum: i2.value, type: "string", inclusive: true, message: i2.message }), n2.dirty());
          else if (i2.kind === "max")
            a.data.length > i2.value && (addIssueToContext(a, { code: ZodIssueCode.too_big, maximum: i2.value, type: "string", inclusive: true, message: i2.message }), n2.dirty());
          else if (i2.kind === "email")
            emailRegex.test(a.data) || (addIssueToContext(a, { validation: "email", code: ZodIssueCode.invalid_string, message: i2.message }), n2.dirty());
          else if (i2.kind === "uuid")
            uuidRegex.test(a.data) || (addIssueToContext(a, { validation: "uuid", code: ZodIssueCode.invalid_string, message: i2.message }), n2.dirty());
          else if (i2.kind === "cuid")
            cuidRegex.test(a.data) || (addIssueToContext(a, { validation: "cuid", code: ZodIssueCode.invalid_string, message: i2.message }), n2.dirty());
          else if (i2.kind === "url")
            try {
              new URL(a.data);
            } catch (e4) {
              addIssueToContext(a, { validation: "url", code: ZodIssueCode.invalid_string, message: i2.message }), n2.dirty();
            }
          else
            i2.kind === "regex" && (i2.regex.lastIndex = 0, i2.regex.test(a.data) || (addIssueToContext(a, { validation: "regex", code: ZodIssueCode.invalid_string, message: i2.message }), n2.dirty()));
        }
      } catch (e4) {
        t3 = { error: e4 };
      } finally {
        try {
          s2 && !s2.done && (r4 = o.return) && r4.call(o);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
      return { status: n2.value, value: a.data };
    }, t2.prototype._addCheck = function(e3) {
      return new t2(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [e3], false) }));
    }, t2.prototype.email = function(e3) {
      return this._addCheck(__assign({ kind: "email" }, errorUtil.errToObj(e3)));
    }, t2.prototype.url = function(e3) {
      return this._addCheck(__assign({ kind: "url" }, errorUtil.errToObj(e3)));
    }, t2.prototype.uuid = function(e3) {
      return this._addCheck(__assign({ kind: "uuid" }, errorUtil.errToObj(e3)));
    }, t2.prototype.cuid = function(e3) {
      return this._addCheck(__assign({ kind: "cuid" }, errorUtil.errToObj(e3)));
    }, t2.prototype.regex = function(e3, t3) {
      return this._addCheck(__assign({ kind: "regex", regex: e3 }, errorUtil.errToObj(t3)));
    }, t2.prototype.min = function(e3, t3) {
      return this._addCheck(__assign({ kind: "min", value: e3 }, errorUtil.errToObj(t3)));
    }, t2.prototype.max = function(e3, t3) {
      return this._addCheck(__assign({ kind: "max", value: e3 }, errorUtil.errToObj(t3)));
    }, t2.prototype.length = function(e3, t3) {
      return this.min(e3, t3).max(e3, t3);
    }, Object.defineProperty(t2.prototype, "isEmail", { get: function() {
      return !!this._def.checks.find(function(e3) {
        return e3.kind === "email";
      });
    }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isURL", { get: function() {
      return !!this._def.checks.find(function(e3) {
        return e3.kind === "url";
      });
    }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isUUID", { get: function() {
      return !!this._def.checks.find(function(e3) {
        return e3.kind === "uuid";
      });
    }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isCUID", { get: function() {
      return !!this._def.checks.find(function(e3) {
        return e3.kind === "cuid";
      });
    }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "minLength", { get: function() {
      var t3 = -1 / 0;
      return this._def.checks.map(function(e3) {
        e3.kind === "min" && (t3 === null || e3.value > t3) && (t3 = e3.value);
      }), t3;
    }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "maxLength", { get: function() {
      var t3 = null;
      return this._def.checks.map(function(e3) {
        e3.kind === "max" && (t3 === null || e3.value < t3) && (t3 = e3.value);
      }), t3;
    }, enumerable: false, configurable: true }), t2.create = function(e3) {
      return new t2(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodString }, processCreateParams(e3)));
    }, t2;
  }(ZodType);
  var ZodNumber = function(t2) {
    function a() {
      var e2 = t2 !== null && t2.apply(this, arguments) || this;
      return e2.min = e2.gte, e2.max = e2.lte, e2.step = e2.multipleOf, e2;
    }
    return __extends(a, t2), a.prototype._parse = function(e2) {
      var t3, r4, e2 = this._processInputParams(e2), n2 = e2.status, a2 = e2.ctx;
      if (a2.parsedType !== ZodParsedType.number)
        return addIssueToContext(a2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.number, received: a2.parsedType }), INVALID;
      try {
        for (var o = __values(this._def.checks), s2 = o.next(); !s2.done; s2 = o.next()) {
          var i2 = s2.value;
          i2.kind === "int" ? util.isInteger(a2.data) || (addIssueToContext(a2, { code: ZodIssueCode.invalid_type, expected: "integer", received: "float", message: i2.message }), n2.dirty()) : i2.kind === "min" ? (i2.inclusive ? a2.data < i2.value : a2.data <= i2.value) && (addIssueToContext(a2, { code: ZodIssueCode.too_small, minimum: i2.value, type: "number", inclusive: i2.inclusive, message: i2.message }), n2.dirty()) : i2.kind === "max" ? (i2.inclusive ? a2.data > i2.value : a2.data >= i2.value) && (addIssueToContext(a2, { code: ZodIssueCode.too_big, maximum: i2.value, type: "number", inclusive: i2.inclusive, message: i2.message }), n2.dirty()) : i2.kind === "multipleOf" ? a2.data % i2.value != 0 && (addIssueToContext(a2, { code: ZodIssueCode.not_multiple_of, multipleOf: i2.value, message: i2.message }), n2.dirty()) : util.assertNever(i2);
        }
      } catch (e3) {
        t3 = { error: e3 };
      } finally {
        try {
          s2 && !s2.done && (r4 = o.return) && r4.call(o);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
      return { status: n2.value, value: a2.data };
    }, a.prototype.gte = function(e2, t3) {
      return this.setLimit("min", e2, true, errorUtil.toString(t3));
    }, a.prototype.gt = function(e2, t3) {
      return this.setLimit("min", e2, false, errorUtil.toString(t3));
    }, a.prototype.lte = function(e2, t3) {
      return this.setLimit("max", e2, true, errorUtil.toString(t3));
    }, a.prototype.lt = function(e2, t3) {
      return this.setLimit("max", e2, false, errorUtil.toString(t3));
    }, a.prototype.setLimit = function(e2, t3, r4, n2) {
      return new a(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [{ kind: e2, value: t3, inclusive: r4, message: errorUtil.toString(n2) }], false) }));
    }, a.prototype._addCheck = function(e2) {
      return new a(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [e2], false) }));
    }, a.prototype.int = function(e2) {
      return this._addCheck({ kind: "int", message: errorUtil.toString(e2) });
    }, a.prototype.positive = function(e2) {
      return this._addCheck({ kind: "min", value: 0, inclusive: false, message: errorUtil.toString(e2) });
    }, a.prototype.negative = function(e2) {
      return this._addCheck({ kind: "max", value: 0, inclusive: false, message: errorUtil.toString(e2) });
    }, a.prototype.nonpositive = function(e2) {
      return this._addCheck({ kind: "max", value: 0, inclusive: true, message: errorUtil.toString(e2) });
    }, a.prototype.nonnegative = function(e2) {
      return this._addCheck({ kind: "min", value: 0, inclusive: true, message: errorUtil.toString(e2) });
    }, a.prototype.multipleOf = function(e2, t3) {
      return this._addCheck({ kind: "multipleOf", value: e2, message: errorUtil.toString(t3) });
    }, Object.defineProperty(a.prototype, "minValue", { get: function() {
      var t3, e2, r4 = null;
      try {
        for (var n2 = __values(this._def.checks), a2 = n2.next(); !a2.done; a2 = n2.next()) {
          var o = a2.value;
          o.kind === "min" && (r4 === null || o.value > r4) && (r4 = o.value);
        }
      } catch (e3) {
        t3 = { error: e3 };
      } finally {
        try {
          a2 && !a2.done && (e2 = n2.return) && e2.call(n2);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
      return r4;
    }, enumerable: false, configurable: true }), Object.defineProperty(a.prototype, "maxValue", { get: function() {
      var t3, e2, r4 = null;
      try {
        for (var n2 = __values(this._def.checks), a2 = n2.next(); !a2.done; a2 = n2.next()) {
          var o = a2.value;
          o.kind === "max" && (r4 === null || o.value < r4) && (r4 = o.value);
        }
      } catch (e3) {
        t3 = { error: e3 };
      } finally {
        try {
          a2 && !a2.done && (e2 = n2.return) && e2.call(n2);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
      return r4;
    }, enumerable: false, configurable: true }), Object.defineProperty(a.prototype, "isInt", { get: function() {
      return !!this._def.checks.find(function(e2) {
        return e2.kind === "int";
      });
    }, enumerable: false, configurable: true }), a.create = function(e2) {
      return new a(__assign(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodNumber }, processCreateParams(e2)), processCreateParams(e2)));
    }, a;
  }(ZodType);
  var ZodBigInt = function(e2) {
    function t2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(t2, e2), t2.prototype._parse = function(e3) {
      e3 = this._processInputParams(e3).ctx;
      return e3.parsedType !== ZodParsedType.bigint ? (addIssueToContext(e3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.bigint, received: e3.parsedType }), INVALID) : OK(e3.data);
    }, t2.create = function(e3) {
      return new t2(__assign({ typeName: ZodFirstPartyTypeKind.ZodBigInt }, processCreateParams(e3)));
    }, t2;
  }(ZodType);
  var ZodBoolean = function(e2) {
    function t2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(t2, e2), t2.prototype._parse = function(e3) {
      e3 = this._processInputParams(e3).ctx;
      return e3.parsedType !== ZodParsedType.boolean ? (addIssueToContext(e3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.boolean, received: e3.parsedType }), INVALID) : OK(e3.data);
    }, t2.create = function(e3) {
      return new t2(__assign({ typeName: ZodFirstPartyTypeKind.ZodBoolean }, processCreateParams(e3)));
    }, t2;
  }(ZodType);
  var ZodDate = function(e2) {
    function t2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(t2, e2), t2.prototype._parse = function(e3) {
      var t3 = this._processInputParams(e3), e3 = t3.status, t3 = t3.ctx;
      return t3.parsedType !== ZodParsedType.date ? (addIssueToContext(t3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.date, received: t3.parsedType }), INVALID) : isNaN(t3.data.getTime()) ? (addIssueToContext(t3, { code: ZodIssueCode.invalid_date }), INVALID) : { status: e3.value, value: new Date(t3.data.getTime()) };
    }, t2.create = function(e3) {
      return new t2(__assign({ typeName: ZodFirstPartyTypeKind.ZodDate }, processCreateParams(e3)));
    }, t2;
  }(ZodType);
  var ZodUndefined = function(e2) {
    function t2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(t2, e2), t2.prototype._parse = function(e3) {
      e3 = this._processInputParams(e3).ctx;
      return e3.parsedType !== ZodParsedType.undefined ? (addIssueToContext(e3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.undefined, received: e3.parsedType }), INVALID) : OK(e3.data);
    }, t2.create = function(e3) {
      return new t2(__assign({ typeName: ZodFirstPartyTypeKind.ZodUndefined }, processCreateParams(e3)));
    }, t2;
  }(ZodType);
  var ZodNull = function(e2) {
    function t2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(t2, e2), t2.prototype._parse = function(e3) {
      e3 = this._processInputParams(e3).ctx;
      return e3.parsedType !== ZodParsedType.null ? (addIssueToContext(e3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.null, received: e3.parsedType }), INVALID) : OK(e3.data);
    }, t2.create = function(e3) {
      return new t2(__assign({ typeName: ZodFirstPartyTypeKind.ZodNull }, processCreateParams(e3)));
    }, t2;
  }(ZodType);
  var ZodAny = function(t2) {
    function r4() {
      var e2 = t2 !== null && t2.apply(this, arguments) || this;
      return e2._any = true, e2;
    }
    return __extends(r4, t2), r4.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return OK(e2.data);
    }, r4.create = function(e2) {
      return new r4(__assign({ typeName: ZodFirstPartyTypeKind.ZodAny }, processCreateParams(e2)));
    }, r4;
  }(ZodType);
  var ZodUnknown = function(t2) {
    function r4() {
      var e2 = t2 !== null && t2.apply(this, arguments) || this;
      return e2._unknown = true, e2;
    }
    return __extends(r4, t2), r4.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return OK(e2.data);
    }, r4.create = function(e2) {
      return new r4(__assign({ typeName: ZodFirstPartyTypeKind.ZodUnknown }, processCreateParams(e2)));
    }, r4;
  }(ZodType);
  var ZodNever = function(e2) {
    function t2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(t2, e2), t2.prototype._parse = function(e3) {
      e3 = this._processInputParams(e3).ctx;
      return addIssueToContext(e3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.never, received: e3.parsedType }), INVALID;
    }, t2.create = function(e3) {
      return new t2(__assign({ typeName: ZodFirstPartyTypeKind.ZodNever }, processCreateParams(e3)));
    }, t2;
  }(ZodType);
  var ZodVoid = function(e2) {
    function t2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(t2, e2), t2.prototype._parse = function(e3) {
      e3 = this._processInputParams(e3).ctx;
      return e3.parsedType !== ZodParsedType.undefined ? (addIssueToContext(e3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.void, received: e3.parsedType }), INVALID) : OK(e3.data);
    }, t2.create = function(e3) {
      return new t2(__assign({ typeName: ZodFirstPartyTypeKind.ZodVoid }, processCreateParams(e3)));
    }, t2;
  }(ZodType);
  var ZodArray = function(e2) {
    function r4() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(r4, e2), r4.prototype._parse = function(e3) {
      var e3 = this._processInputParams(e3), t2 = e3.status, r5 = e3.ctx, n2 = this._def;
      if (r5.parsedType !== ZodParsedType.array)
        return addIssueToContext(r5, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.array, received: r5.parsedType }), INVALID;
      if (n2.minLength !== null && r5.data.length < n2.minLength.value && (addIssueToContext(r5, { code: ZodIssueCode.too_small, minimum: n2.minLength.value, type: "array", inclusive: true, message: n2.minLength.message }), t2.dirty()), n2.maxLength !== null && r5.data.length > n2.maxLength.value && (addIssueToContext(r5, { code: ZodIssueCode.too_big, maximum: n2.maxLength.value, type: "array", inclusive: true, message: n2.maxLength.message }), t2.dirty()), r5.async)
        return Promise.all(r5.data.map(function(e4, t3) {
          return n2.type._parseAsync({ parent: r5, path: __spreadArray(__spreadArray([], __read(r5.path), false), [t3], false), data: e4 });
        })).then(function(e4) {
          return ParseStatus.mergeArray(t2, e4);
        });
      e3 = r5.data.map(function(e4, t3) {
        return n2.type._parseSync({ parent: r5, path: __spreadArray(__spreadArray([], __read(r5.path), false), [t3], false), data: e4 });
      });
      return ParseStatus.mergeArray(t2, e3);
    }, Object.defineProperty(r4.prototype, "element", { get: function() {
      return this._def.type;
    }, enumerable: false, configurable: true }), r4.prototype.min = function(e3, t2) {
      return new r4(__assign(__assign({}, this._def), { minLength: { value: e3, message: errorUtil.toString(t2) } }));
    }, r4.prototype.max = function(e3, t2) {
      return new r4(__assign(__assign({}, this._def), { maxLength: { value: e3, message: errorUtil.toString(t2) } }));
    }, r4.prototype.length = function(e3, t2) {
      return this.min(e3, t2).max(e3, t2);
    }, r4.prototype.nonempty = function(e3) {
      return this.min(1, e3);
    }, r4.create = function(e3, t2) {
      return new r4(__assign({ type: e3, minLength: null, maxLength: null, typeName: ZodFirstPartyTypeKind.ZodArray }, processCreateParams(t2)));
    }, r4;
  }(ZodType);
  (objectUtil || (objectUtil = {})).mergeShapes = function(e2, t2) {
    return __assign(__assign({}, e2), t2);
  };
  var AugmentFactory = function(t2) {
    return function(e2) {
      return new ZodObject(__assign(__assign({}, t2), { shape: function() {
        return __assign(__assign({}, t2.shape()), e2);
      } }));
    };
  };
  function deepPartialify(e2) {
    if (e2 instanceof ZodObject) {
      var t2, r4 = {};
      for (t2 in e2.shape) {
        var n2 = e2.shape[t2];
        r4[t2] = ZodOptional.create(deepPartialify(n2));
      }
      return new ZodObject(__assign(__assign({}, e2._def), { shape: function() {
        return r4;
      } }));
    }
    return e2 instanceof ZodArray ? ZodArray.create(deepPartialify(e2.element)) : e2 instanceof ZodOptional ? ZodOptional.create(deepPartialify(e2.unwrap())) : e2 instanceof ZodNullable ? ZodNullable.create(deepPartialify(e2.unwrap())) : e2 instanceof ZodTuple ? ZodTuple.create(e2.items.map(function(e3) {
      return deepPartialify(e3);
    })) : e2;
  }
  var ZodObject = function(t2) {
    function s2() {
      var e2 = t2 !== null && t2.apply(this, arguments) || this;
      return e2._cached = null, e2.nonstrict = e2.passthrough, e2.augment = AugmentFactory(e2._def), e2.extend = AugmentFactory(e2._def), e2;
    }
    return __extends(s2, t2), s2.prototype._getCached = function() {
      if (this._cached !== null)
        return this._cached;
      var e2 = this._def.shape(), t3 = util.objectKeys(e2);
      return this._cached = { shape: e2, keys: t3 };
    }, s2.prototype._parse = function(e2) {
      var t3, r4, n2, a, o, s3 = this, i2 = this._processInputParams(e2), u = i2.status, d2 = i2.ctx;
      if (d2.parsedType !== ZodParsedType.object)
        return addIssueToContext(d2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.object, received: d2.parsedType }), INVALID;
      var e2 = this._getCached(), p2 = e2.shape, i2 = e2.keys, e2 = util.objectKeys(d2.data).filter(function(e3) {
        return !(e3 in p2);
      }), c2 = [];
      try {
        for (var l2 = __values(i2), y2 = l2.next(); !y2.done; y2 = l2.next()) {
          var f2 = y2.value, _10 = p2[f2], h2 = d2.data[f2];
          c2.push({ key: { status: "valid", value: f2 }, value: _10._parse({ parent: d2, data: h2, path: __spreadArray(__spreadArray([], __read(d2.path), false), [f2], false) }), alwaysSet: f2 in d2.data });
        }
      } catch (e3) {
        v2 = { error: e3 };
      } finally {
        try {
          y2 && !y2.done && (t3 = l2.return) && t3.call(l2);
        } finally {
          if (v2)
            throw v2.error;
        }
      }
      if (this._def.catchall instanceof ZodNever) {
        var v2 = this._def.unknownKeys;
        if (v2 === "passthrough")
          try {
            for (var m5 = __values(e2), Z = m5.next(); !Z.done; Z = m5.next()) {
              f2 = Z.value;
              c2.push({ key: { status: "valid", value: f2 }, value: { status: "valid", value: d2.data[f2] } });
            }
          } catch (e3) {
            r4 = { error: e3 };
          } finally {
            try {
              Z && !Z.done && (n2 = m5.return) && n2.call(m5);
            } finally {
              if (r4)
                throw r4.error;
            }
          }
        else if (v2 === "strict")
          0 < e2.length && (addIssueToContext(d2, { code: ZodIssueCode.unrecognized_keys, keys: e2 }), u.dirty());
        else if (v2 !== "strip")
          throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      } else {
        var g2 = this._def.catchall;
        try {
          for (var T = __values(e2), b2 = T.next(); !b2.done; b2 = T.next()) {
            f2 = b2.value, h2 = d2.data[f2];
            c2.push({ key: { status: "valid", value: f2 }, value: g2._parse({ parent: d2, path: __spreadArray(__spreadArray([], __read(d2.path), false), [f2], false), data: h2 }), alwaysSet: f2 in d2.data });
          }
        } catch (e3) {
          a = { error: e3 };
        } finally {
          try {
            b2 && !b2.done && (o = T.return) && o.call(T);
          } finally {
            if (a)
              throw a.error;
          }
        }
      }
      return d2.async ? Promise.resolve().then(function() {
        return __awaiter(s3, void 0, void 0, function() {
          var t4, r5, n3, a2, o2, s4, i4, u2, d3;
          return __generator(this, function(e3) {
            switch (e3.label) {
              case 0:
                t4 = [], e3.label = 1;
              case 1:
                e3.trys.push([1, 7, 8, 9]), r5 = __values(c2), n3 = r5.next(), e3.label = 2;
              case 2:
                return n3.done ? [3, 6] : [4, (a2 = n3.value).key];
              case 3:
                return d3 = e3.sent(), s4 = (o2 = t4).push, d3 = { key: d3 }, [4, a2.value];
              case 4:
                s4.apply(o2, [(d3.value = e3.sent(), d3.alwaysSet = a2.alwaysSet, d3)]), e3.label = 5;
              case 5:
                return n3 = r5.next(), [3, 2];
              case 6:
                return [3, 9];
              case 7:
                return i4 = e3.sent(), i4 = { error: i4 }, [3, 9];
              case 8:
                try {
                  n3 && !n3.done && (u2 = r5.return) && u2.call(r5);
                } finally {
                  if (i4)
                    throw i4.error;
                }
                return [7];
              case 9:
                return [2, t4];
            }
          });
        });
      }).then(function(e3) {
        return ParseStatus.mergeObjectSync(u, e3);
      }) : ParseStatus.mergeObjectSync(u, c2);
    }, Object.defineProperty(s2.prototype, "shape", { get: function() {
      return this._def.shape();
    }, enumerable: false, configurable: true }), s2.prototype.strict = function(a) {
      var o = this;
      return errorUtil.errToObj, new s2(__assign(__assign(__assign({}, this._def), { unknownKeys: "strict" }), a !== void 0 ? { errorMap: function(e2, t3) {
        var r4, n2, t3 = (n2 = (r4 = (n2 = o._def).errorMap) === null || r4 === void 0 ? void 0 : r4.call(n2, e2, t3).message) !== null && n2 !== void 0 ? n2 : t3.defaultError;
        return e2.code === "unrecognized_keys" ? { message: (e2 = errorUtil.errToObj(a).message) !== null && e2 !== void 0 ? e2 : t3 } : { message: t3 };
      } } : {}));
    }, s2.prototype.strip = function() {
      return new s2(__assign(__assign({}, this._def), { unknownKeys: "strip" }));
    }, s2.prototype.passthrough = function() {
      return new s2(__assign(__assign({}, this._def), { unknownKeys: "passthrough" }));
    }, s2.prototype.setKey = function(e2, t3) {
      var r4;
      return this.augment(((r4 = {})[e2] = t3, r4));
    }, s2.prototype.merge = function(e2) {
      var t3 = objectUtil.mergeShapes(this._def.shape(), e2._def.shape());
      return new s2({ unknownKeys: e2._def.unknownKeys, catchall: e2._def.catchall, shape: function() {
        return t3;
      }, typeName: ZodFirstPartyTypeKind.ZodObject });
    }, s2.prototype.catchall = function(e2) {
      return new s2(__assign(__assign({}, this._def), { catchall: e2 }));
    }, s2.prototype.pick = function(e2) {
      var t3 = this, r4 = {};
      return util.objectKeys(e2).map(function(e3) {
        r4[e3] = t3.shape[e3];
      }), new s2(__assign(__assign({}, this._def), { shape: function() {
        return r4;
      } }));
    }, s2.prototype.omit = function(t3) {
      var r4 = this, n2 = {};
      return util.objectKeys(this.shape).map(function(e2) {
        util.objectKeys(t3).indexOf(e2) === -1 && (n2[e2] = r4.shape[e2]);
      }), new s2(__assign(__assign({}, this._def), { shape: function() {
        return n2;
      } }));
    }, s2.prototype.deepPartial = function() {
      return deepPartialify(this);
    }, s2.prototype.partial = function(t3) {
      var e2, r4 = this, n2 = {};
      if (t3)
        return util.objectKeys(this.shape).map(function(e3) {
          util.objectKeys(t3).indexOf(e3) === -1 ? n2[e3] = r4.shape[e3] : n2[e3] = r4.shape[e3].optional();
        }), new s2(__assign(__assign({}, this._def), { shape: function() {
          return n2;
        } }));
      for (e2 in this.shape) {
        var a = this.shape[e2];
        n2[e2] = a.optional();
      }
      return new s2(__assign(__assign({}, this._def), { shape: function() {
        return n2;
      } }));
    }, s2.prototype.required = function() {
      var e2, t3 = {};
      for (e2 in this.shape) {
        for (var r4 = this.shape[e2]; r4 instanceof ZodOptional; )
          r4 = r4._def.innerType;
        t3[e2] = r4;
      }
      return new s2(__assign(__assign({}, this._def), { shape: function() {
        return t3;
      } }));
    }, s2.create = function(e2, t3) {
      return new s2(__assign({ shape: function() {
        return e2;
      }, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(t3)));
    }, s2.strictCreate = function(e2, t3) {
      return new s2(__assign({ shape: function() {
        return e2;
      }, unknownKeys: "strict", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(t3)));
    }, s2.lazycreate = function(e2, t3) {
      return new s2(__assign({ shape: e2, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(t3)));
    }, s2;
  }(ZodType);
  var ZodUnion = function(e2) {
    function r4() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(r4, e2), r4.prototype._parse = function(e3) {
      var t2 = this, c2 = this._processInputParams(e3).ctx, e3 = this._def.options;
      function r5(e4) {
        var t3, r6, n2, a, o;
        try {
          for (var s2 = __values(e4), i2 = s2.next(); !i2.done; i2 = s2.next())
            if ((u = i2.value).result.status === "valid")
              return u.result;
        } catch (e5) {
          t3 = { error: e5 };
        } finally {
          try {
            i2 && !i2.done && (r6 = s2.return) && r6.call(s2);
          } finally {
            if (t3)
              throw t3.error;
          }
        }
        try {
          for (var u, d2 = __values(e4), p2 = d2.next(); !p2.done; p2 = d2.next())
            if ((u = p2.value).result.status === "dirty")
              return (o = c2.issues).push.apply(o, __spreadArray([], __read(u.ctx.issues), false)), u.result;
        } catch (e5) {
          n2 = { error: e5 };
        } finally {
          try {
            p2 && !p2.done && (a = d2.return) && a.call(d2);
          } finally {
            if (n2)
              throw n2.error;
          }
        }
        e4 = e4.map(function(e5) {
          return new ZodError(e5.ctx.issues);
        });
        return addIssueToContext(c2, { code: ZodIssueCode.invalid_union, unionErrors: e4 }), INVALID;
      }
      return c2.async ? Promise.all(e3.map(function(n2) {
        return __awaiter(t2, void 0, void 0, function() {
          var t3, r6;
          return __generator(this, function(e4) {
            switch (e4.label) {
              case 0:
                return t3 = __assign(__assign({}, c2), { issues: [], parent: null }), r6 = {}, [4, n2._parseAsync({ data: c2.data, path: c2.path, parent: t3 })];
              case 1:
                return [2, (r6.result = e4.sent(), r6.ctx = t3, r6)];
            }
          });
        });
      })).then(r5) : r5(e3.map(function(e4) {
        var t3 = __assign(__assign({}, c2), { issues: [], parent: null });
        return { result: e4._parseSync({ data: c2.data, path: c2.path, parent: t3 }), ctx: t3 };
      }));
    }, Object.defineProperty(r4.prototype, "options", { get: function() {
      return this._def.options;
    }, enumerable: false, configurable: true }), r4.create = function(e3, t2) {
      return new r4(__assign({ options: e3, typeName: ZodFirstPartyTypeKind.ZodUnion }, processCreateParams(t2)));
    }, r4;
  }(ZodType);
  function mergeValues(e2, t2) {
    var r4, n2, a = getParsedType(e2), o = getParsedType(t2);
    if (e2 === t2)
      return { valid: true, data: e2 };
    if (a === ZodParsedType.object && o === ZodParsedType.object) {
      var s2 = util.objectKeys(t2), i2 = util.objectKeys(e2).filter(function(e3) {
        return s2.indexOf(e3) !== -1;
      }), u = __assign(__assign({}, e2), t2);
      try {
        for (var d2 = __values(i2), p2 = d2.next(); !p2.done; p2 = d2.next()) {
          var c2 = p2.value;
          if (!(l2 = mergeValues(e2[c2], t2[c2])).valid)
            return { valid: false };
          u[c2] = l2.data;
        }
      } catch (e3) {
        r4 = { error: e3 };
      } finally {
        try {
          p2 && !p2.done && (n2 = d2.return) && n2.call(d2);
        } finally {
          if (r4)
            throw r4.error;
        }
      }
      return { valid: true, data: u };
    }
    if (a !== ZodParsedType.array || o !== ZodParsedType.array)
      return { valid: false };
    if (e2.length !== t2.length)
      return { valid: false };
    for (var l2, y2 = [], f2 = 0; f2 < e2.length; f2++) {
      if (!(l2 = mergeValues(e2[f2], t2[f2])).valid)
        return { valid: false };
      y2.push(l2.data);
    }
    return { valid: true, data: y2 };
  }
  var ZodIntersection = function(e2) {
    function n2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(n2, e2), n2.prototype._parse = function(e3) {
      function r4(e4, t2) {
        if (isAborted(e4) || isAborted(t2))
          return INVALID;
        var r5 = mergeValues(e4.value, t2.value);
        return r5.valid ? ((isDirty(e4) || isDirty(t2)) && n3.dirty(), { status: n3.value, value: r5.data }) : (addIssueToContext(a, { code: ZodIssueCode.invalid_intersection_types }), INVALID);
      }
      var e3 = this._processInputParams(e3), n3 = e3.status, a = e3.ctx;
      return a.async ? Promise.all([this._def.left._parseAsync({ data: a.data, path: a.path, parent: a }), this._def.right._parseAsync({ data: a.data, path: a.path, parent: a })]).then(function(e4) {
        var t2 = __read(e4, 2), e4 = t2[0], t2 = t2[1];
        return r4(e4, t2);
      }) : r4(this._def.left._parseSync({ data: a.data, path: a.path, parent: a }), this._def.right._parseSync({ data: a.data, path: a.path, parent: a }));
    }, n2.create = function(e3, t2, r4) {
      return new n2(__assign({ left: e3, right: t2, typeName: ZodFirstPartyTypeKind.ZodIntersection }, processCreateParams(r4)));
    }, n2;
  }(ZodType);
  var ZodTuple = function(e2) {
    function r4() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(r4, e2), r4.prototype._parse = function(e3) {
      var n2 = this, e3 = this._processInputParams(e3), t2 = e3.status, a = e3.ctx;
      if (a.parsedType !== ZodParsedType.array)
        return addIssueToContext(a, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.array, received: a.parsedType }), INVALID;
      if (a.data.length < this._def.items.length)
        return addIssueToContext(a, { code: ZodIssueCode.too_small, minimum: this._def.items.length, inclusive: true, type: "array" }), INVALID;
      !this._def.rest && a.data.length > this._def.items.length && (addIssueToContext(a, { code: ZodIssueCode.too_big, maximum: this._def.items.length, inclusive: true, type: "array" }), t2.dirty());
      e3 = a.data.map(function(e4, t3) {
        var r5 = n2._def.items[t3] || n2._def.rest;
        return r5 ? r5._parse({ data: e4, path: __spreadArray(__spreadArray([], __read(a.path), false), [t3], false), parent: a }) : null;
      }).filter(function(e4) {
        return !!e4;
      });
      return a.async ? Promise.all(e3).then(function(e4) {
        return ParseStatus.mergeArray(t2, e4);
      }) : ParseStatus.mergeArray(t2, e3);
    }, Object.defineProperty(r4.prototype, "items", { get: function() {
      return this._def.items;
    }, enumerable: false, configurable: true }), r4.prototype.rest = function(e3) {
      return new r4(__assign(__assign({}, this._def), { rest: e3 }));
    }, r4.create = function(e3, t2) {
      return new r4(__assign({ items: e3, typeName: ZodFirstPartyTypeKind.ZodTuple, rest: null }, processCreateParams(t2)));
    }, r4;
  }(ZodType);
  var ZodRecord = function(e2) {
    function n2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(n2, e2), Object.defineProperty(n2.prototype, "keySchema", { get: function() {
      return this._def.keyType;
    }, enumerable: false, configurable: true }), Object.defineProperty(n2.prototype, "valueSchema", { get: function() {
      return this._def.valueType;
    }, enumerable: false, configurable: true }), n2.prototype._parse = function(e3) {
      var t2 = this._processInputParams(e3), e3 = t2.status, r4 = t2.ctx;
      if (r4.parsedType !== ZodParsedType.object)
        return addIssueToContext(r4, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.object, received: r4.parsedType }), INVALID;
      var n3, a = [], o = this._def.keyType, s2 = this._def.valueType;
      for (n3 in r4.data)
        a.push({ key: o._parse({ data: n3, path: __spreadArray(__spreadArray([], __read(r4.path), false), [n3], false), parent: r4 }), value: s2._parse({ data: r4.data[n3], path: __spreadArray(__spreadArray([], __read(r4.path), false), [n3], false), parent: r4 }) });
      return r4.async ? ParseStatus.mergeObjectAsync(e3, a) : ParseStatus.mergeObjectSync(e3, a);
    }, Object.defineProperty(n2.prototype, "element", { get: function() {
      return this._def.valueType;
    }, enumerable: false, configurable: true }), n2.create = function(e3, t2, r4) {
      return new n2(t2 instanceof ZodType ? __assign({ keyType: e3, valueType: t2, typeName: ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(r4)) : __assign({ keyType: ZodString.create(), valueType: e3, typeName: ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(t2)));
    }, n2;
  }(ZodType);
  var ZodMap = function(e2) {
    function n2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(n2, e2), n2.prototype._parse = function(e3) {
      var t2, r4, n3 = this, e3 = this._processInputParams(e3), u = e3.status, a = e3.ctx;
      if (a.parsedType !== ZodParsedType.map)
        return addIssueToContext(a, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.map, received: a.parsedType }), INVALID;
      var o = this._def.keyType, s2 = this._def.valueType, d2 = __spreadArray([], __read(a.data.entries()), false).map(function(e4, t3) {
        var r5 = __read(e4, 2), e4 = r5[0], r5 = r5[1];
        return { key: o._parse({ data: e4, path: __spreadArray(__spreadArray([], __read(a.path), false), [t3, "key"], false), parent: a }), value: s2._parse({ data: r5, path: __spreadArray(__spreadArray([], __read(a.path), false), [t3, "value"], false), parent: a }) };
      });
      if (a.async) {
        var p2 = new Map();
        return Promise.resolve().then(function() {
          return __awaiter(n3, void 0, void 0, function() {
            var t3, r5, n4, a2, o2, s3, i4;
            return __generator(this, function(e4) {
              switch (e4.label) {
                case 0:
                  e4.trys.push([0, 6, 7, 8]), t3 = __values(d2), r5 = t3.next(), e4.label = 1;
                case 1:
                  return r5.done ? [3, 5] : [4, (n4 = r5.value).key];
                case 2:
                  return a2 = e4.sent(), [4, n4.value];
                case 3:
                  if (o2 = e4.sent(), a2.status === "aborted" || o2.status === "aborted")
                    return [2, INVALID];
                  a2.status !== "dirty" && o2.status !== "dirty" || u.dirty(), p2.set(a2.value, o2.value), e4.label = 4;
                case 4:
                  return r5 = t3.next(), [3, 1];
                case 5:
                  return [3, 8];
                case 6:
                  return s3 = e4.sent(), s3 = { error: s3 }, [3, 8];
                case 7:
                  try {
                    r5 && !r5.done && (i4 = t3.return) && i4.call(t3);
                  } finally {
                    if (s3)
                      throw s3.error;
                  }
                  return [7];
                case 8:
                  return [2, { status: u.value, value: p2 }];
              }
            });
          });
        });
      }
      var i2 = new Map();
      try {
        for (var c2 = __values(d2), l2 = c2.next(); !l2.done; l2 = c2.next()) {
          var y2 = l2.value, f2 = y2.key, _10 = y2.value;
          if (f2.status === "aborted" || _10.status === "aborted")
            return INVALID;
          f2.status !== "dirty" && _10.status !== "dirty" || u.dirty(), i2.set(f2.value, _10.value);
        }
      } catch (e4) {
        t2 = { error: e4 };
      } finally {
        try {
          l2 && !l2.done && (r4 = c2.return) && r4.call(c2);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return { status: u.value, value: i2 };
    }, n2.create = function(e3, t2, r4) {
      return new n2(__assign({ valueType: t2, keyType: e3, typeName: ZodFirstPartyTypeKind.ZodMap }, processCreateParams(r4)));
    }, n2;
  }(ZodType);
  var ZodSet = function(e2) {
    function r4() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(r4, e2), r4.prototype._parse = function(e3) {
      var e3 = this._processInputParams(e3), i2 = e3.status, r5 = e3.ctx;
      if (r5.parsedType !== ZodParsedType.set)
        return addIssueToContext(r5, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.set, received: r5.parsedType }), INVALID;
      var n2 = this._def.valueType;
      function t2(e4) {
        var t3, r6, n3 = new Set();
        try {
          for (var a = __values(e4), o = a.next(); !o.done; o = a.next()) {
            var s2 = o.value;
            if (s2.status === "aborted")
              return INVALID;
            s2.status === "dirty" && i2.dirty(), n3.add(s2.value);
          }
        } catch (e5) {
          t3 = { error: e5 };
        } finally {
          try {
            o && !o.done && (r6 = a.return) && r6.call(a);
          } finally {
            if (t3)
              throw t3.error;
          }
        }
        return { status: i2.value, value: n3 };
      }
      e3 = __spreadArray([], __read(r5.data.values()), false).map(function(e4, t3) {
        return n2._parse({ data: e4, path: __spreadArray(__spreadArray([], __read(r5.path), false), [t3], false), parent: r5 });
      });
      return r5.async ? Promise.all(e3).then(t2) : t2(e3);
    }, r4.create = function(e3, t2) {
      return new r4(__assign({ valueType: e3, typeName: ZodFirstPartyTypeKind.ZodSet }, processCreateParams(t2)));
    }, r4;
  }(ZodType);
  var ZodFunction = function(t2) {
    function n2() {
      var e2 = t2 !== null && t2.apply(this, arguments) || this;
      return e2.validate = e2.implement, e2;
    }
    return __extends(n2, t2), n2.prototype._parse = function(e2) {
      var o = this, r4 = this._processInputParams(e2).ctx;
      if (r4.parsedType !== ZodParsedType.function)
        return addIssueToContext(r4, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.function, received: r4.parsedType }), INVALID;
      function s2(e3, t3) {
        return makeIssue({ data: e3, path: r4.path, errorMaps: [r4.contextualErrorMap, r4.schemaErrorMap, overrideErrorMap, defaultErrorMap].filter(function(e4) {
          return !!e4;
        }), issueData: { code: ZodIssueCode.invalid_arguments, argumentsError: t3 } });
      }
      function i2(e3, t3) {
        return makeIssue({ data: e3, path: r4.path, errorMaps: [r4.contextualErrorMap, r4.schemaErrorMap, overrideErrorMap, defaultErrorMap].filter(function(e4) {
          return !!e4;
        }), issueData: { code: ZodIssueCode.invalid_return_type, returnTypeError: t3 } });
      }
      var u = { errorMap: r4.contextualErrorMap }, d2 = r4.data;
      return this._def.returns instanceof ZodPromise ? OK(function() {
        for (var a = [], e3 = 0; e3 < arguments.length; e3++)
          a[e3] = arguments[e3];
        return __awaiter(o, void 0, void 0, function() {
          var t3, r5, n3;
          return __generator(this, function(e4) {
            switch (e4.label) {
              case 0:
                return t3 = new ZodError([]), [4, this._def.args.parseAsync(a, u).catch(function(e5) {
                  throw t3.addIssue(s2(a, e5)), t3;
                })];
              case 1:
                return r5 = e4.sent(), [4, d2.apply(void 0, __spreadArray([], __read(r5), false))];
              case 2:
                return n3 = e4.sent(), [4, this._def.returns._def.type.parseAsync(n3, u).catch(function(e5) {
                  throw t3.addIssue(i2(n3, e5)), t3;
                })];
              case 3:
                return [2, e4.sent()];
            }
          });
        });
      }) : OK(function() {
        for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
          e3[t3] = arguments[t3];
        var r5 = o._def.args.safeParse(e3, u);
        if (!r5.success)
          throw new ZodError([s2(e3, r5.error)]);
        var n3 = d2.apply(void 0, __spreadArray([], __read(r5.data), false)), r5 = o._def.returns.safeParse(n3, u);
        if (!r5.success)
          throw new ZodError([i2(n3, r5.error)]);
        return r5.data;
      });
    }, n2.prototype.parameters = function() {
      return this._def.args;
    }, n2.prototype.returnType = function() {
      return this._def.returns;
    }, n2.prototype.args = function() {
      for (var e2 = [], t3 = 0; t3 < arguments.length; t3++)
        e2[t3] = arguments[t3];
      return new n2(__assign(__assign({}, this._def), { args: ZodTuple.create(e2).rest(ZodUnknown.create()) }));
    }, n2.prototype.returns = function(e2) {
      return new n2(__assign(__assign({}, this._def), { returns: e2 }));
    }, n2.prototype.implement = function(e2) {
      return this.parse(e2);
    }, n2.prototype.strictImplement = function(e2) {
      return this.parse(e2);
    }, n2.create = function(e2, t3, r4) {
      return new n2(__assign({ args: (e2 || ZodTuple.create([])).rest(ZodUnknown.create()), returns: t3 || ZodUnknown.create(), typeName: ZodFirstPartyTypeKind.ZodFunction }, processCreateParams(r4)));
    }, n2;
  }(ZodType);
  var ZodLazy = function(e2) {
    function r4() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(r4, e2), Object.defineProperty(r4.prototype, "schema", { get: function() {
      return this._def.getter();
    }, enumerable: false, configurable: true }), r4.prototype._parse = function(e3) {
      e3 = this._processInputParams(e3).ctx;
      return this._def.getter()._parse({ data: e3.data, path: e3.path, parent: e3 });
    }, r4.create = function(e3, t2) {
      return new r4(__assign({ getter: e3, typeName: ZodFirstPartyTypeKind.ZodLazy }, processCreateParams(t2)));
    }, r4;
  }(ZodType);
  var ZodLiteral = function(e2) {
    function r4() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(r4, e2), r4.prototype._parse = function(e3) {
      var t2 = this._processInputParams(e3), e3 = t2.status, t2 = t2.ctx;
      return t2.data !== this._def.value ? (addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: this._def.value, received: t2.data }), INVALID) : { status: e3.value, value: t2.data };
    }, Object.defineProperty(r4.prototype, "value", { get: function() {
      return this._def.value;
    }, enumerable: false, configurable: true }), r4.create = function(e3, t2) {
      return new r4(__assign({ value: e3, typeName: ZodFirstPartyTypeKind.ZodLiteral }, processCreateParams(t2)));
    }, r4;
  }(ZodType);
  function createZodEnum(e2) {
    return new ZodEnum({ values: e2, typeName: ZodFirstPartyTypeKind.ZodEnum });
  }
  var ZodFirstPartyTypeKind;
  var ZodEnum = function(e2) {
    function t2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(t2, e2), t2.prototype._parse = function(e3) {
      e3 = this._processInputParams(e3).ctx;
      return this._def.values.indexOf(e3.data) === -1 ? (addIssueToContext(e3, { code: ZodIssueCode.invalid_enum_value, options: this._def.values }), INVALID) : OK(e3.data);
    }, Object.defineProperty(t2.prototype, "options", { get: function() {
      return this._def.values;
    }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "enum", { get: function() {
      var t3, e3, r4 = {};
      try {
        for (var n2 = __values(this._def.values), a = n2.next(); !a.done; a = n2.next()) {
          var o = a.value;
          r4[o] = o;
        }
      } catch (e4) {
        t3 = { error: e4 };
      } finally {
        try {
          a && !a.done && (e3 = n2.return) && e3.call(n2);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
      return r4;
    }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "Values", { get: function() {
      var t3, e3, r4 = {};
      try {
        for (var n2 = __values(this._def.values), a = n2.next(); !a.done; a = n2.next()) {
          var o = a.value;
          r4[o] = o;
        }
      } catch (e4) {
        t3 = { error: e4 };
      } finally {
        try {
          a && !a.done && (e3 = n2.return) && e3.call(n2);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
      return r4;
    }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "Enum", { get: function() {
      var t3, e3, r4 = {};
      try {
        for (var n2 = __values(this._def.values), a = n2.next(); !a.done; a = n2.next()) {
          var o = a.value;
          r4[o] = o;
        }
      } catch (e4) {
        t3 = { error: e4 };
      } finally {
        try {
          a && !a.done && (e3 = n2.return) && e3.call(n2);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
      return r4;
    }, enumerable: false, configurable: true }), t2.create = createZodEnum, t2;
  }(ZodType);
  var ZodNativeEnum = function(e2) {
    function r4() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(r4, e2), r4.prototype._parse = function(e3) {
      var t2 = this._processInputParams(e3).ctx, e3 = util.getValidEnumValues(this._def.values);
      return e3.indexOf(t2.data) === -1 ? (addIssueToContext(t2, { code: ZodIssueCode.invalid_enum_value, options: util.objectValues(e3) }), INVALID) : OK(t2.data);
    }, r4.create = function(e3, t2) {
      return new r4(__assign({ values: e3, typeName: ZodFirstPartyTypeKind.ZodNativeEnum }, processCreateParams(t2)));
    }, r4;
  }(ZodType);
  var ZodPromise = function(e2) {
    function r4() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(r4, e2), r4.prototype._parse = function(e3) {
      var t2 = this, r5 = this._processInputParams(e3).ctx;
      if (r5.parsedType !== ZodParsedType.promise && r5.async === false)
        return addIssueToContext(r5, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.promise, received: r5.parsedType }), INVALID;
      e3 = r5.parsedType === ZodParsedType.promise ? r5.data : Promise.resolve(r5.data);
      return OK(e3.then(function(e4) {
        return t2._def.type.parseAsync(e4, { path: r5.path, errorMap: r5.contextualErrorMap });
      }));
    }, r4.create = function(e3, t2) {
      return new r4(__assign({ type: e3, typeName: ZodFirstPartyTypeKind.ZodPromise }, processCreateParams(t2)));
    }, r4;
  }(ZodType);
  var ZodEffects = function(e2) {
    function n2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(n2, e2), n2.prototype.innerType = function() {
      return this._def.schema;
    }, n2.prototype._parse = function(e3) {
      var t2 = this, e3 = this._processInputParams(e3), r4 = e3.status, n3 = e3.ctx, a = this._def.effect || null;
      if (a.type === "preprocess") {
        e3 = a.transform(n3.data);
        return n3.async ? Promise.resolve(e3).then(function(e4) {
          return t2._def.schema._parseAsync({ data: e4, path: n3.path, parent: n3 });
        }) : this._def.schema._parseSync({ data: e3, path: n3.path, parent: n3 });
      }
      if (a.type === "refinement") {
        let s2 = function(e4) {
          var t3 = a.refinement(e4, o);
          if (n3.async)
            return Promise.resolve(t3);
          if (t3 instanceof Promise)
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          return e4;
        };
        var o = { addIssue: function(e4) {
          addIssueToContext(n3, e4), e4.fatal ? r4.abort() : r4.dirty();
        }, get path() {
          return n3.path;
        } };
        o.addIssue = o.addIssue.bind(o);
        if (n3.async !== false)
          return this._def.schema._parseAsync({ data: n3.data, path: n3.path, parent: n3 }).then(function(e4) {
            return e4.status === "aborted" ? INVALID : (e4.status === "dirty" && r4.dirty(), s2(e4.value).then(function() {
              return { status: r4.value, value: e4.value };
            }));
          });
        var i2 = this._def.schema._parseSync({ data: n3.data, path: n3.path, parent: n3 });
        return i2.status === "aborted" ? INVALID : (i2.status === "dirty" && r4.dirty(), s2(i2.value), { status: r4.value, value: i2.value });
      }
      if (a.type === "transform") {
        if (n3.async !== false)
          return this._def.schema._parseAsync({ data: n3.data, path: n3.path, parent: n3 }).then(function(e4) {
            return isValid(e4) ? Promise.resolve(a.transform(e4.value)).then(OK) : e4;
          });
        i2 = this._def.schema._parseSync({ data: n3.data, path: n3.path, parent: n3 });
        if (!isValid(i2))
          return i2;
        i2 = a.transform(i2.value);
        if (i2 instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return OK(i2);
      }
      util.assertNever(a);
    }, n2.create = function(e3, t2, r4) {
      return new n2(__assign({ schema: e3, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: t2 }, processCreateParams(r4)));
    }, n2.createWithPreprocess = function(e3, t2, r4) {
      return new n2(__assign({ schema: t2, effect: { type: "preprocess", transform: e3 }, typeName: ZodFirstPartyTypeKind.ZodEffects }, processCreateParams(r4)));
    }, n2;
  }(ZodType);
  var ZodOptional = function(e2) {
    function r4() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(r4, e2), r4.prototype._parse = function(e3) {
      e3 = this._processInputParams(e3).ctx;
      return e3.parsedType === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse({ data: e3.data, path: e3.path, parent: e3 });
    }, r4.prototype.unwrap = function() {
      return this._def.innerType;
    }, r4.create = function(e3, t2) {
      return new r4(__assign({ innerType: e3, typeName: ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(t2)));
    }, r4;
  }(ZodType);
  var ZodNullable = function(e2) {
    function r4() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(r4, e2), r4.prototype._parse = function(e3) {
      e3 = this._processInputParams(e3).ctx;
      return e3.parsedType === ZodParsedType.null ? OK(null) : this._def.innerType._parse({ data: e3.data, path: e3.path, parent: e3 });
    }, r4.prototype.unwrap = function() {
      return this._def.innerType;
    }, r4.create = function(e3, t2) {
      return new r4(__assign({ innerType: e3, typeName: ZodFirstPartyTypeKind.ZodNullable }, processCreateParams(t2)));
    }, r4;
  }(ZodType);
  var ZodDefault = function(e2) {
    function t2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    return __extends(t2, e2), t2.prototype._parse = function(e3) {
      var t3 = this._processInputParams(e3).ctx, e3 = t3.data;
      return t3.parsedType === ZodParsedType.undefined && (e3 = this._def.defaultValue()), this._def.innerType._parse({ data: e3, path: t3.path, parent: t3 });
    }, t2.prototype.removeDefault = function() {
      return this._def.innerType;
    }, t2.create = function(e3, t3) {
      return new ZodOptional(__assign({ innerType: e3, typeName: ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(t3)));
    }, t2;
  }(ZodType);
  var custom = function(e2, t2) {
    return e2 ? ZodAny.create().refine(e2, t2) : ZodAny.create();
  };
  var late = { object: ZodObject.lazycreate };
  !function(e2) {
    e2.ZodString = "ZodString", e2.ZodNumber = "ZodNumber", e2.ZodBigInt = "ZodBigInt", e2.ZodBoolean = "ZodBoolean", e2.ZodDate = "ZodDate", e2.ZodUndefined = "ZodUndefined", e2.ZodNull = "ZodNull", e2.ZodAny = "ZodAny", e2.ZodUnknown = "ZodUnknown", e2.ZodNever = "ZodNever", e2.ZodVoid = "ZodVoid", e2.ZodArray = "ZodArray", e2.ZodObject = "ZodObject", e2.ZodUnion = "ZodUnion", e2.ZodIntersection = "ZodIntersection", e2.ZodTuple = "ZodTuple", e2.ZodRecord = "ZodRecord", e2.ZodMap = "ZodMap", e2.ZodSet = "ZodSet", e2.ZodFunction = "ZodFunction", e2.ZodLazy = "ZodLazy", e2.ZodLiteral = "ZodLiteral", e2.ZodEnum = "ZodEnum", e2.ZodEffects = "ZodEffects", e2.ZodNativeEnum = "ZodNativeEnum", e2.ZodOptional = "ZodOptional", e2.ZodNullable = "ZodNullable", e2.ZodDefault = "ZodDefault", e2.ZodPromise = "ZodPromise";
  }(ZodFirstPartyTypeKind = ZodFirstPartyTypeKind || {});
  var instanceOfType = function(t2, e2) {
    return e2 === void 0 && (e2 = { message: "Input not instance of " + t2.name }), custom(function(e3) {
      return e3 instanceof t2;
    }, e2);
  };
  var stringType = ZodString.create;
  var numberType = ZodNumber.create;
  var bigIntType = ZodBigInt.create;
  var booleanType = ZodBoolean.create;
  var dateType = ZodDate.create;
  var undefinedType = ZodUndefined.create;
  var nullType = ZodNull.create;
  var anyType = ZodAny.create;
  var unknownType = ZodUnknown.create;
  var neverType = ZodNever.create;
  var voidType = ZodVoid.create;
  var arrayType = ZodArray.create;
  var objectType = ZodObject.create;
  var strictObjectType = ZodObject.strictCreate;
  var unionType = ZodUnion.create;
  var intersectionType = ZodIntersection.create;
  var tupleType = ZodTuple.create;
  var recordType = ZodRecord.create;
  var mapType = ZodMap.create;
  var setType = ZodSet.create;
  var functionType = ZodFunction.create;
  var lazyType = ZodLazy.create;
  var literalType = ZodLiteral.create;
  var enumType = ZodEnum.create;
  var nativeEnumType = ZodNativeEnum.create;
  var promiseType = ZodPromise.create;
  var effectsType = ZodEffects.create;
  var optionalType = ZodOptional.create;
  var nullableType = ZodNullable.create;
  var preprocessType = ZodEffects.createWithPreprocess;
  var ostring = function() {
    return stringType().optional();
  };
  var onumber = function() {
    return numberType().optional();
  };
  var oboolean = function() {
    return booleanType().optional();
  };
  var external = Object.freeze({ __proto__: null, ZodParsedType, getParsedType, makeIssue, EMPTY_PATH, addIssueToContext, ParseStatus, INVALID, DIRTY, OK, isAborted, isDirty, isValid, isAsync, ZodType, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, get objectUtil() {
    return objectUtil;
  }, ZodObject, ZodUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodTransformer: ZodEffects, ZodOptional, ZodNullable, ZodDefault, custom, Schema: ZodType, ZodSchema: ZodType, late, get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  }, any: anyType, array: arrayType, bigint: bigIntType, boolean: booleanType, date: dateType, effect: effectsType, enum: enumType, function: functionType, instanceof: instanceOfType, intersection: intersectionType, lazy: lazyType, literal: literalType, map: mapType, nativeEnum: nativeEnumType, never: neverType, null: nullType, nullable: nullableType, number: numberType, object: objectType, oboolean, onumber, optional: optionalType, ostring, preprocess: preprocessType, promise: promiseType, record: recordType, set: setType, strictObject: strictObjectType, string: stringType, transformer: effectsType, tuple: tupleType, undefined: undefinedType, union: unionType, unknown: unknownType, void: voidType, ZodIssueCode, quotelessJson, ZodError, defaultErrorMap, get overrideErrorMap() {
    return overrideErrorMap;
  }, setErrorMap });

  // node_modules/@githubnext/utils/dist/index.mjs
  var import_react2 = __toModule(require_react());
  var import_parse_static_imports = __toModule(require_dist());
  function useTailwindCdn() {
    const src = "https://cdn-tailwindcss.vercel.app";
    const [status, setStatus] = (0, import_react.useState)("idle");
    (0, import_react.useEffect)(() => {
      let script = document.querySelector(`script[src="${src}"]`);
      if (!script) {
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        document.body.appendChild(script);
        const setAttributeFromEvent = (event) => {
          script.setAttribute("data-status", event.type === "load" ? "ready" : "error");
        };
        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      } else {
        setStatus(script.getAttribute("data-status"));
      }
      const setStateFromEvent = (event) => {
        setStatus(event.type === "load" ? "ready" : "error");
      };
      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    }, []);
    return status;
  }
  var FileContext = objectType({
    file: stringType(),
    path: stringType(),
    repo: stringType(),
    owner: stringType(),
    sha: stringType()
  });
  var FolderContext = objectType({
    folder: stringType(),
    path: stringType(),
    repo: stringType(),
    owner: stringType(),
    sha: stringType()
  });
  var CommonBlockProps = objectType({
    metadata: anyType(),
    onUpdateMetadata: functionType().args(anyType()).returns(voidType()),
    onRequestUpdateContent: functionType().args().returns(voidType())
  });
  var FileData = objectType({
    content: stringType(),
    context: FileContext
  });
  var TreeItem = anyType();
  var FolderData = objectType({
    tree: arrayType(TreeItem),
    context: FolderContext
  });
  var bsl = "1C Enterprise";
  var os = "1C Enterprise";
  var _dm = "4D";
  var abap = "ABAP";
  var asddls = "ABAP CDS";
  var abnf = "ABNF";
  var asc = "Public Key";
  var ash = "AGS Script";
  var aidl = "AIDL";
  var al = "Perl";
  var ampl = "AMPL";
  var mod = "XML";
  var g4 = "ANTLR";
  var apib = "API Blueprint";
  var apl = "APL";
  var dyalog = "APL";
  var asl = "ASL";
  var dsl = "ASL";
  var asn = "ASN.1";
  var asn1 = "ASN.1";
  var asax = "ASP.NET";
  var ascx = "ASP.NET";
  var ashx = "ASP.NET";
  var asmx = "ASP.NET";
  var aspx = "ASP.NET";
  var axd = "ASP.NET";
  var dats = "ATS";
  var hats = "ATS";
  var sats = "ATS";
  var as = "AngelScript";
  var adb = "Ada";
  var ada = "Ada";
  var ads = "Ada";
  var afm = "Adobe Font Metrics";
  var agda = "Agda";
  var als = "Alloy";
  var OutJob = "Altium Designer";
  var PcbDoc = "Altium Designer";
  var PrjPCB = "Altium Designer";
  var SchDoc = "Altium Designer";
  var angelscript = "AngelScript";
  var apacheconf = "ApacheConf";
  var vhost = "Nginx";
  var cls = "VBA";
  var agc = "Apollo Guidance Computer";
  var applescript = "AppleScript";
  var scpt = "AppleScript";
  var arc = "Arc";
  var asciidoc = "AsciiDoc";
  var adoc = "AsciiDoc";
  var aj = "AspectJ";
  var asm = "Motorola 68K Assembly";
  var a51 = "Assembly";
  var i = "SWIG";
  var inc = "SourcePawn";
  var nasm = "Assembly";
  var astro = "Astro";
  var asy = "LTspice Symbol";
  var aug = "Augeas";
  var ahk = "AutoHotkey";
  var ahkl = "AutoHotkey";
  var au3 = "AutoIt";
  var avdl = "Avro IDL";
  var awk = "Awk";
  var auk = "Awk";
  var gawk = "Awk";
  var mawk = "Awk";
  var nawk = "Awk";
  var bas = "VBA";
  var bal = "Ballerina";
  var bat = "Batchfile";
  var cmd = "Batchfile";
  var bf = "HyPhy";
  var befunge = "Befunge";
  var bib = "BibTeX";
  var bibtex = "BibTeX";
  var bicep = "Bicep";
  var bison = "Bison";
  var bb = "BlitzBasic";
  var blade = "Blade";
  var blade_php = "Blade";
  var decls = "BlitzBasic";
  var bmx = "BlitzMax";
  var bsv = "Bluespec";
  var boo = "Boo";
  var bpl = "Boogie";
  var b = "Limbo";
  var brs = "Brightscript";
  var c = "C";
  var cats = "C";
  var h = "Objective-C";
  var idc = "C";
  var cs = "Smalltalk";
  var cake = "CoffeeScript";
  var csx = "C#";
  var linq = "C#";
  var cpp = "C++";
  var c__ = "C++";
  var cc = "C++";
  var cp = "Component Pascal";
  var cxx = "C++";
  var h__ = "C++";
  var hh = "Hack";
  var hpp = "C++";
  var hxx = "C++";
  var inl = "C++";
  var ino = "C++";
  var ipp = "C++";
  var re = "Reason";
  var tcc = "C++";
  var tpp = "C++";
  var c_objdump = "C-ObjDump";
  var chs = "C2hs Haskell";
  var cil = "CIL";
  var clp = "CLIPS";
  var cmake = "CMake";
  var cmake_in = "CMake";
  var cob = "COBOL";
  var cbl = "COBOL";
  var ccp = "COBOL";
  var cobol = "COBOL";
  var cpy = "COBOL";
  var dae = "COLLADA";
  var cson = "CSON";
  var css = "CSS";
  var csv = "CSV";
  var cue = "Cue Sheet";
  var w = "OpenEdge ABL";
  var cabal = "Cabal Config";
  var capnp = "Cap'n Proto";
  var mss = "CartoCSS";
  var ceylon = "Ceylon";
  var chpl = "Chapel";
  var ch = "xBase";
  var ck = "ChucK";
  var cirru = "Cirru";
  var clw = "Clarion";
  var asp = "Classic ASP";
  var icl = "Clean";
  var dcl = "Clean";
  var click = "Click";
  var clj = "Clojure";
  var boot = "Clojure";
  var cl2 = "Clojure";
  var cljc = "Clojure";
  var cljs = "Clojure";
  var cljs_hl = "Clojure";
  var cljscm = "Clojure";
  var cljx = "Clojure";
  var hic = "Clojure";
  var soy = "Closure Templates";
  var conllu = "CoNLL-U";
  var conll = "CoNLL-U";
  var ql = "CodeQL";
  var qll = "CodeQL";
  var coffee = "CoffeeScript";
  var _coffee = "CoffeeScript";
  var cjsx = "CoffeeScript";
  var iced = "CoffeeScript";
  var cfm = "ColdFusion";
  var cfml = "ColdFusion";
  var cfc = "ColdFusion CFC";
  var lisp = "NewLisp";
  var asd = "Common Lisp";
  var cl = "OpenCL";
  var l = "Roff";
  var lsp = "NewLisp";
  var ny = "Common Lisp";
  var podsl = "Common Lisp";
  var sexp = "Common Lisp";
  var cwl = "Common Workflow Language";
  var cps = "Component Pascal";
  var coq = "Coq";
  var v = "Verilog";
  var cppobjdump = "Cpp-ObjDump";
  var c___objdump = "Cpp-ObjDump";
  var c__objdump = "Cpp-ObjDump";
  var cpp_objdump = "Cpp-ObjDump";
  var cxx_objdump = "Cpp-ObjDump";
  var creole = "Creole";
  var cr = "Crystal";
  var orc = "Csound";
  var udo = "Csound";
  var csd = "Csound Document";
  var sco = "Csound Score";
  var cu = "Cuda";
  var cuh = "Cuda";
  var cy = "Cycript";
  var pyx = "Cython";
  var pxd = "Cython";
  var pxi = "Cython";
  var d = "Makefile";
  var di = "D";
  var d_objdump = "D-ObjDump";
  var com = "DIGITAL Command Language";
  var dm = "DM";
  var zone = "DNS Zone";
  var arpa = "DNS Zone";
  var dfy = "Dafny";
  var darcspatch = "Darcs Patch";
  var dpatch = "Darcs Patch";
  var dart = "Dart";
  var dwl = "DataWeave";
  var dhall = "Dhall";
  var diff = "Diff";
  var patch = "Diff";
  var x = "RPC";
  var dockerfile = "Dockerfile";
  var djs = "Dogescript";
  var dylan = "Dylan";
  var dyl = "Dylan";
  var intr = "Dylan";
  var lid = "Dylan";
  var E = "E";
  var eml = "E-mail";
  var mbox = "E-mail";
  var ebnf = "EBNF";
  var ecl = "ECLiPSe";
  var eclxml = "ECL";
  var ejs = "EJS";
  var ect = "EJS";
  var jst = "EJS";
  var eq = "EQ";
  var sch = "XML";
  var brd = "KiCad Legacy Layout";
  var eb = "Easybuild";
  var epj = "Ecere Projects";
  var edc = "Edje Data Collection";
  var e = "Eiffel";
  var ex = "Elixir";
  var exs = "Elixir";
  var elm = "Elm";
  var el = "Emacs Lisp";
  var emacs = "Emacs Lisp";
  var emacs_desktop = "Emacs Lisp";
  var em = "EmberScript";
  var emberscript = "EmberScript";
  var erl = "Erlang";
  var app_src = "Erlang";
  var es = "JavaScript";
  var escript = "Erlang";
  var hrl = "Erlang";
  var xrl = "Erlang";
  var yrl = "Erlang";
  var fs = "GLSL";
  var fsi = "F#";
  var fsx = "F#";
  var fst = "F*";
  var flf = "FIGlet Font";
  var fx = "HLSL";
  var flux = "FLUX";
  var factor = "Factor";
  var fy = "Fancy";
  var fancypack = "Fancy";
  var fan = "Fantom";
  var dsp = "Microsoft Developer Studio Project";
  var fnl = "Fennel";
  var f = "Fortran";
  var ftl = "FreeMarker";
  var for2 = "Fortran";
  var eam_fs = "Formatted";
  var fth = "Forth";
  var _th = "Forth";
  var forth = "Forth";
  var fr = "Text";
  var frt = "Forth";
  var f77 = "Fortran";
  var fpp = "Fortran";
  var f90 = "Fortran Free Form";
  var f03 = "Fortran Free Form";
  var f08 = "Fortran Free Form";
  var f95 = "Fortran Free Form";
  var bi = "FreeBasic";
  var fut = "Futhark";
  var g = "GAP";
  var cnc = "G-code";
  var gco = "G-code";
  var gcode = "G-code";
  var gaml = "GAML";
  var gms = "GAMS";
  var gap = "GAP";
  var gd = "GDScript";
  var gi = "GAP";
  var tst = "Scilab";
  var md = "Markdown";
  var gdb = "GDB";
  var gdbinit = "GDB";
  var ged = "GEDCOM";
  var glsl = "GLSL";
  var fp = "GLSL";
  var frag = "JavaScript";
  var frg = "GLSL";
  var fsh = "GLSL";
  var fshader = "GLSL";
  var geo = "GLSL";
  var geom = "GLSL";
  var glslf = "GLSL";
  var glslv = "GLSL";
  var gs = "JavaScript";
  var gshader = "GLSL";
  var rchit = "GLSL";
  var rmiss = "GLSL";
  var shader = "ShaderLab";
  var tesc = "GLSL";
  var tese = "GLSL";
  var vert = "GLSL";
  var vrx = "GLSL";
  var vsh = "GLSL";
  var vshader = "GLSL";
  var gn = "GN";
  var gni = "GN";
  var gml = "XML";
  var kid = "Genshi";
  var ebuild = "Gentoo Ebuild";
  var eclass = "Gentoo Eclass";
  var gbr = "Gerber Image";
  var cmp = "Gerber Image";
  var gbl = "Gerber Image";
  var gbo = "Gerber Image";
  var gbp = "Gerber Image";
  var gbs = "Gerber Image";
  var gko = "Gerber Image";
  var gpb = "Gerber Image";
  var gpt = "Gerber Image";
  var gtl = "Gerber Image";
  var gto = "Gerber Image";
  var gtp = "Gerber Image";
  var gts = "Gerber Image";
  var ncl = "XML";
  var sol = "Solidity";
  var po = "Gettext Catalog";
  var pot = "Gettext Catalog";
  var feature = "Gherkin";
  var story = "Gherkin";
  var gitconfig = "Git Config";
  var glf = "Glyph";
  var bdf = "Glyph Bitmap Distribution Format";
  var gp = "Gnuplot";
  var gnu = "Gnuplot";
  var gnuplot = "Gnuplot";
  var p = "OpenEdge ABL";
  var plot = "Gnuplot";
  var plt = "Gnuplot";
  var go = "Go";
  var golo = "Golo";
  var gst = "XML";
  var gsx = "Gosu";
  var vark = "Gosu";
  var grace = "Grace";
  var gradle = "Gradle";
  var gf = "Grammatical Framework";
  var graphql = "GraphQL";
  var gql = "GraphQL";
  var graphqls = "GraphQL";
  var dot = "Graphviz (DOT)";
  var gv = "Graphviz (DOT)";
  var groovy = "Groovy";
  var grt = "Groovy";
  var gtpl = "Groovy";
  var gvy = "Groovy";
  var gsp = "Groovy Server Pages";
  var cfg = "INI";
  var hcl = "HCL";
  var nomad = "HCL";
  var tf = "HCL";
  var tfvars = "HCL";
  var workflow = "XML";
  var hlsl = "HLSL";
  var cginc = "HLSL";
  var fxh = "HLSL";
  var hlsli = "HLSL";
  var html = "HTML";
  var hta = "HTML";
  var htm = "HTML";
  var html_hl = "HTML";
  var xht = "HTML";
  var xhtml = "HTML";
  var ecr = "HTML+ECR";
  var eex = "HTML+EEX";
  var html_leex = "HTML+EEX";
  var erb = "HTML+ERB";
  var erb_deface = "HTML+ERB";
  var rhtml = "HTML+ERB";
  var phtml = "HTML+PHP";
  var cshtml = "HTML+Razor";
  var razor = "HTML+Razor";
  var http = "HTTP";
  var hxml = "HXML";
  var hack = "Hack";
  var hhi = "Hack";
  var php = "PHP";
  var haml = "Haml";
  var haml_deface = "Haml";
  var handlebars = "Handlebars";
  var hbs = "Handlebars";
  var hb = "Harbour";
  var hs = "Haskell";
  var hs_boot = "Haskell";
  var hsc = "Haskell";
  var hx = "Haxe";
  var hxsl = "Haxe";
  var q = "q";
  var hql = "HiveQL";
  var hc = "HolyC";
  var hy = "Hy";
  var pro = "QMake";
  var dlm = "IDL";
  var ipf = "IGOR Pro";
  var ini = "INI";
  var dof = "INI";
  var lektorproject = "INI";
  var prefs = "INI";
  var properties = "Java Properties";
  var irclog = "IRC log";
  var weechatlog = "IRC log";
  var idr = "Idris";
  var lidr = "Idris";
  var gitignore = "Ignore List";
  var ijm = "ImageJ Macro";
  var ni = "Inform 7";
  var i7x = "Inform 7";
  var iss = "Inno Setup";
  var isl = "Inno Setup";
  var io = "Io";
  var ik = "Ioke";
  var thy = "Isabelle";
  var ijs = "J";
  var flex = "JFlex";
  var jflex = "JFlex";
  var json = "JSON";
  var avsc = "JSON";
  var geojson = "JSON";
  var gltf = "JSON";
  var har = "JSON";
  var ice = "Slice";
  var JSON_tmLanguage = "JSON";
  var jsonl = "JSON";
  var mcmeta = "JSON";
  var tfstate = "JSON";
  var tfstate_backup = "JSON";
  var topojson = "JSON";
  var webapp = "JSON";
  var webmanifest = "JSON";
  var yy = "Yacc";
  var yyp = "JSON";
  var jsonc = "JSON with Comments";
  var sublime_build = "JSON with Comments";
  var sublime_commands = "JSON with Comments";
  var sublime_completions = "JSON with Comments";
  var sublime_keymap = "JSON with Comments";
  var sublime_macro = "JSON with Comments";
  var sublime_menu = "JSON with Comments";
  var sublime_mousemap = "JSON with Comments";
  var sublime_project = "JSON with Comments";
  var sublime_settings = "JSON with Comments";
  var sublime_theme = "JSON with Comments";
  var sublime_workspace = "JSON with Comments";
  var sublime_metrics = "JSON with Comments";
  var sublime_session = "JSON with Comments";
  var json5 = "JSON5";
  var jsonld = "JSONLD";
  var jq = "jq";
  var j = "Objective-J";
  var java = "Java";
  var jav = "Java";
  var jsp = "Java Server Pages";
  var js = "JavaScript";
  var _js = "JavaScript";
  var bones = "JavaScript";
  var cjs = "JavaScript";
  var es6 = "JavaScript";
  var jake = "JavaScript";
  var javascript = "JavaScript";
  var jsb = "JavaScript";
  var jscad = "JavaScript";
  var jsfl = "JavaScript";
  var jsm = "JavaScript";
  var jss = "JavaScript";
  var jsx = "JavaScript";
  var mjs = "JavaScript";
  var njs = "JavaScript";
  var pac = "JavaScript";
  var sjs = "JavaScript";
  var ssjs = "JavaScript";
  var xsjs = "JavaScript";
  var xsjslib = "JavaScript";
  var js_erb = "JavaScript+ERB";
  var snap = "Jest Snapshot";
  var jinja = "Jinja";
  var j2 = "Jinja";
  var jinja2 = "Jinja";
  var jison = "Jison";
  var jisonlex = "Jison Lex";
  var ol = "Jolie";
  var iol = "Jolie";
  var jsonnet = "Jsonnet";
  var libsonnet = "Jsonnet";
  var jl = "Julia";
  var ipynb = "Jupyter Notebook";
  var krl = "KRL";
  var ksy = "Kaitai Struct";
  var kak = "KakouneScript";
  var kicad_pcb = "KiCad Layout";
  var kicad_mod = "KiCad Layout";
  var kicad_wks = "KiCad Layout";
  var kit = "Kit";
  var kt = "Kotlin";
  var ktm = "Kotlin";
  var kts = "Kotlin";
  var csl = "XML";
  var lfe = "LFE";
  var ll = "LLVM";
  var lol = "LOLCODE";
  var lsl = "LSL";
  var lslp = "LSL";
  var lvproj = "LabVIEW";
  var lvlib = "LabVIEW";
  var lark = "Lark";
  var lasso = "Lasso";
  var las = "Lasso";
  var lasso8 = "Lasso";
  var lasso9 = "Lasso";
  var latte = "Latte";
  var lean = "Lean";
  var hlean = "Lean";
  var less = "Less";
  var lex = "Lex";
  var ly = "LilyPond";
  var ily = "LilyPond";
  var m = "Objective-C";
  var ld = "Linker Script";
  var lds = "Linker Script";
  var liquid = "Liquid";
  var lagda = "Literate Agda";
  var litcoffee = "Literate CoffeeScript";
  var coffee_md = "Literate CoffeeScript";
  var lhs = "Literate Haskell";
  var ls = "LoomScript";
  var _ls = "LiveScript";
  var xm = "Logos";
  var xi = "Logos";
  var lgt = "Logtalk";
  var logtalk = "Logtalk";
  var lookml = "LookML";
  var model_lkml = "LookML";
  var view_lkml = "LookML";
  var lua = "Lua";
  var fcgi = "Shell";
  var nse = "Lua";
  var p8 = "Lua";
  var pd_lua = "Lua";
  var rbxs = "Lua";
  var rockspec = "Lua";
  var wlua = "Lua";
  var mumps = "M";
  var m4 = "M4Sugar";
  var matlab = "MATLAB";
  var ms = "Unix Assembly";
  var mcr = "MAXScript";
  var mlir = "MLIR";
  var mq4 = "MQL4";
  var mqh = "MQL5";
  var mq5 = "MQL5";
  var mtml = "MTML";
  var muf = "MUF";
  var m2 = "Macaulay2";
  var mak = "Makefile";
  var make = "Makefile";
  var makefile = "Makefile";
  var mk = "Makefile";
  var mkfile = "Makefile";
  var mako = "Mako";
  var mao = "Mako";
  var markdown = "Markdown";
  var mdown = "Markdown";
  var mdwn = "Markdown";
  var mdx = "Markdown";
  var mkd = "Markdown";
  var mkdn = "Markdown";
  var mkdown = "Markdown";
  var ronn = "Markdown";
  var scd = "SuperCollider";
  var workbook = "Markdown";
  var marko = "Marko";
  var mask = "Unity3D Asset";
  var mathematica = "Mathematica";
  var cdf = "Mathematica";
  var ma = "Mathematica";
  var mt = "Mathematica";
  var nb = "Text";
  var nbp = "Mathematica";
  var wl = "Mathematica";
  var wlt = "Mathematica";
  var maxpat = "Max";
  var maxhelp = "Max";
  var maxproj = "Max";
  var mxt = "Max";
  var pat = "Max";
  var moo = "Moocode";
  var metal = "Metal";
  var sln = "Microsoft Visual Studio Solution";
  var minid = "MiniD";
  var druby = "Mirah";
  var duby = "Mirah";
  var mirah = "Mirah";
  var mo = "Modelica";
  var i3 = "Modula-3";
  var ig = "Modula-3";
  var m3 = "Modula-3";
  var mg = "Modula-3";
  var mms = "Module Management System";
  var mmk = "Module Management System";
  var monkey = "Monkey";
  var monkey2 = "Monkey";
  var moon = "MoonScript";
  var s = "Unix Assembly";
  var x68 = "Motorola 68K Assembly";
  var muse = "Muse";
  var mustache = "Mustache";
  var myt = "Myghty";
  var nasl = "NASL";
  var neon = "NEON";
  var nl = "NewLisp";
  var nsi = "NSIS";
  var nsh = "NSIS";
  var nss = "NWScript";
  var ne = "Nearley";
  var nearley = "Nearley";
  var n = "Roff";
  var axs = "NetLinx";
  var axi = "NetLinx";
  var axs_erb = "NetLinx+ERB";
  var axi_erb = "NetLinx+ERB";
  var nlogo = "NetLogo";
  var nf = "Nextflow";
  var nginx = "Nginx";
  var nginxconf = "Nginx";
  var nim = "Nim";
  var nim_cfg = "Nim";
  var nimble = "Nim";
  var nimrod = "Nim";
  var nims = "Nim";
  var ninja = "Ninja";
  var nit = "Nit";
  var nix = "Nix";
  var nu = "Nu";
  var numpy = "NumPy";
  var numpyw = "NumPy";
  var numsc = "NumPy";
  var njk = "Nunjucks";
  var ml = "Standard ML";
  var eliom = "OCaml";
  var eliomi = "OCaml";
  var ml4 = "OCaml";
  var mli = "OCaml";
  var mll = "OCaml";
  var mly = "OCaml";
  var objdump = "ObjDump";
  var odin = "Odin";
  var mm = "XML";
  var sj = "Objective-J";
  var omgrofl = "Omgrofl";
  var opa = "Opa";
  var opal = "Opal";
  var rego = "Open Policy Agent";
  var opencl = "OpenCL";
  var qasm = "OpenQASM";
  var scad = "OpenSCAD";
  var plist = "XML Property List";
  var glyphs = "OpenStep Property List";
  var fea = "OpenType Feature File";
  var org = "Org";
  var ox = "Ox";
  var oxh = "Ox";
  var oxo = "Ox";
  var oxygene = "Oxygene";
  var oz = "Oz";
  var p4 = "P4";
  var pegjs = "PEG.js";
  var aw = "PHP";
  var ctp = "PHP";
  var php3 = "PHP";
  var php4 = "PHP";
  var php5 = "PHP";
  var phps = "PHP";
  var phpt = "PHP";
  var pls = "PLSQL";
  var bdy = "PLSQL";
  var ddl = "SQL";
  var fnc = "PLSQL";
  var pck = "PLSQL";
  var pkb = "PLSQL";
  var pks = "PLSQL";
  var plb = "PLSQL";
  var plsql = "PLSQL";
  var prc = "SQL";
  var spc = "PLSQL";
  var sql = "TSQL";
  var tpb = "PLSQL";
  var tps = "PLSQL";
  var trg = "PLSQL";
  var vw = "PLSQL";
  var pgsql = "PLpgSQL";
  var pov = "POV-Ray SDL";
  var pan = "Pan";
  var psc = "Papyrus";
  var parrot = "Parrot";
  var pasm = "Parrot Assembly";
  var pir = "Parrot Internal Representation";
  var pas = "Pascal";
  var dfm = "Pascal";
  var dpr = "Pascal";
  var lpr = "Pascal";
  var pascal = "Pascal";
  var pp = "Puppet";
  var pwn = "Pawn";
  var sma = "Pawn";
  var pep = "Pep8";
  var pl = "Raku";
  var cgi = "Shell";
  var perl = "Perl";
  var ph = "Perl";
  var plx = "Perl";
  var pm = "X PixMap";
  var psgi = "Perl";
  var t = "Turing";
  var pic = "Pic";
  var chem = "Pic";
  var pkl = "Pickle";
  var pig = "PigLatin";
  var pike = "Pike";
  var pmod = "Pike";
  var puml = "PlantUML";
  var iuml = "PlantUML";
  var plantuml = "PlantUML";
  var pod = "Pod 6";
  var pod6 = "Pod 6";
  var pogo = "PogoScript";
  var pony = "Pony";
  var pcss = "PostCSS";
  var postcss = "PostCSS";
  var ps = "PostScript";
  var eps = "PostScript";
  var epsi = "PostScript";
  var pfa = "PostScript";
  var pbt = "PowerBuilder";
  var sra = "PowerBuilder";
  var sru = "PowerBuilder";
  var srw = "PowerBuilder";
  var ps1 = "PowerShell";
  var psd1 = "PowerShell";
  var psm1 = "PowerShell";
  var prisma = "Prisma";
  var pde = "Processing";
  var prolog = "Prolog";
  var yap = "Prolog";
  var spin = "Propeller Spin";
  var proto = "Protocol Buffer";
  var pub = "Public Key";
  var jade = "Pug";
  var pug = "Pug";
  var pd = "Pure Data";
  var pb = "PureBasic";
  var pbi = "PureBasic";
  var purs = "PureScript";
  var py = "Python";
  var gyp = "Python";
  var gypi = "Python";
  var lmi = "Python";
  var py3 = "Python";
  var pyde = "Python";
  var pyi = "Python";
  var pyp = "Python";
  var pyt = "Python";
  var pyw = "Python";
  var rpy = "Ren'Py";
  var smk = "Python";
  var spec = "Ruby";
  var tac = "Python";
  var wsgi = "Python";
  var xpy = "Python";
  var pytb = "Python traceback";
  var qs = "Qt Script";
  var qml = "QML";
  var qbs = "QML";
  var pri = "QMake";
  var r = "Rebol";
  var rd = "R";
  var rsx = "R";
  var raml = "RAML";
  var rdoc = "RDoc";
  var rbbas = "REALbasic";
  var rbfrm = "REALbasic";
  var rbmnu = "REALbasic";
  var rbres = "REALbasic";
  var rbtbar = "REALbasic";
  var rbuistate = "REALbasic";
  var rexx = "REXX";
  var pprx = "REXX";
  var rex = "REXX";
  var rmd = "RMarkdown";
  var rnh = "RUNOFF";
  var rno = "Roff";
  var rkt = "Racket";
  var rktd = "Racket";
  var rktl = "Racket";
  var scrbl = "Racket";
  var rl = "Ragel";
  var _pl = "Raku";
  var _pm = "Raku";
  var nqp = "Raku";
  var p6 = "Raku";
  var p6l = "Raku";
  var p6m = "Raku";
  var pl6 = "Raku";
  var pm6 = "Raku";
  var raku = "Raku";
  var rakumod = "Raku";
  var rsc = "Rascal";
  var raw = "Raw token data";
  var res = "XML";
  var rei = "Reason";
  var reb = "Rebol";
  var r2 = "Rebol";
  var r3 = "Rebol";
  var rebol = "Rebol";
  var red = "Red";
  var reds = "Red";
  var cw = "Redcode";
  var regexp = "Regular Expression";
  var regex = "Regular Expression";
  var rs = "XML";
  var rsh = "RenderScript";
  var rtf = "Rich Text Format";
  var ring = "Ring";
  var riot = "Riot";
  var robot = "RobotFramework";
  var roff = "Roff";
  var _ = "Roff Manpage";
  var _in = "Roff Manpage";
  var _m = "Roff Manpage";
  var _x = "Roff Manpage";
  var _2 = "Roff Manpage";
  var _3 = "Roff Manpage";
  var _in2 = "Roff Manpage";
  var _m2 = "Roff Manpage";
  var _p = "Roff Manpage";
  var _pm2 = "Roff Manpage";
  var _qt = "Roff Manpage";
  var _x2 = "Roff Manpage";
  var _4 = "Roff Manpage";
  var _5 = "Roff Manpage";
  var _6 = "Roff Manpage";
  var _7 = "Roff Manpage";
  var _8 = "Roff Manpage";
  var _9 = "Roff Manpage";
  var man = "Roff Manpage";
  var mdoc = "Roff Manpage";
  var me = "Roff";
  var nr = "Roff";
  var tmac = "Roff";
  var rg = "Rouge";
  var rb = "Ruby";
  var builder = "Ruby";
  var eye = "Ruby";
  var gemspec = "Ruby";
  var god = "Ruby";
  var jbuilder = "Ruby";
  var mspec = "Ruby";
  var pluginspec = "XML";
  var podspec = "Ruby";
  var prawn = "Ruby";
  var rabl = "Ruby";
  var rake = "Ruby";
  var rbi = "Ruby";
  var rbuild = "Ruby";
  var rbw = "Ruby";
  var rbx = "Ruby";
  var ru = "Ruby";
  var ruby = "Ruby";
  var thor = "Ruby";
  var watchr = "Ruby";
  var rs_in = "Rust";
  var sas = "SAS";
  var scss = "SCSS";
  var te = "SELinux Policy";
  var smt2 = "SMT";
  var smt = "SMT";
  var sparql = "SPARQL";
  var rq = "SPARQL";
  var sqf = "SQF";
  var hqf = "SQF";
  var cql = "SQL";
  var mysql = "SQL";
  var tab = "SQL";
  var udf = "SQL";
  var viw = "SQL";
  var db2 = "SQLPL";
  var srt = "SubRip Text";
  var ston = "STON";
  var svg = "SVG";
  var sage = "Sage";
  var sagews = "Sage";
  var sls = "Scheme";
  var sass = "Sass";
  var scala = "Scala";
  var kojo = "Scala";
  var sbt = "Scala";
  var sc = "SuperCollider";
  var scaml = "Scaml";
  var scm = "Scheme";
  var sld = "Scheme";
  var sps = "Scheme";
  var ss = "Scheme";
  var sci = "Scilab";
  var sce = "Scilab";
  var self = "Self";
  var sh = "Shell";
  var bash = "Shell";
  var bats = "Shell";
  var command = "Shell";
  var env = "Shell";
  var ksh = "Shell";
  var sh_in = "Shell";
  var tmux = "Shell";
  var tool = "Shell";
  var zsh = "Shell";
  var sh_session = "ShellSession";
  var shen = "Shen";
  var sieve = "Sieve";
  var sl = "Slash";
  var slim = "Slim";
  var cocci = "SmPL";
  var smali = "Smali";
  var st = "StringTemplate";
  var tpl = "Smarty";
  var sp = "SourcePawn";
  var sfd = "Spline Font Database";
  var nut = "Squirrel";
  var stan = "Stan";
  var fun = "Standard ML";
  var sig = "Standard ML";
  var sml = "Standard ML";
  var bzl = "Starlark";
  var do2 = "Stata";
  var ado = "Stata";
  var doh = "Stata";
  var ihlp = "Stata";
  var mata = "Stata";
  var matah = "Stata";
  var sthlp = "Stata";
  var styl = "Stylus";
  var sss = "SugarSS";
  var svelte = "Svelte";
  var swift = "Swift";
  var sv = "SystemVerilog";
  var svh = "SystemVerilog";
  var vh = "SystemVerilog";
  var _xp = "TI Program";
  var _xk = "TI Program";
  var _xk_txt = "TI Program";
  var _xp_txt = "TI Program";
  var tla = "TLA";
  var toml = "TOML";
  var tsv = "TSV";
  var tsx = "XML";
  var txl = "TXL";
  var tcl = "Tcl";
  var adp = "Tcl";
  var tcl_in = "Tcl";
  var tm = "Tcl";
  var tcsh = "Tcsh";
  var csh = "Tcsh";
  var tex = "TeX";
  var aux = "TeX";
  var bbx = "TeX";
  var cbx = "TeX";
  var dtx = "TeX";
  var ins = "TeX";
  var lbx = "TeX";
  var ltx = "TeX";
  var mkii = "TeX";
  var mkiv = "TeX";
  var mkvi = "TeX";
  var sty = "TeX";
  var toc = "World of Warcraft Addon Data";
  var tea = "Tea";
  var texinfo = "Texinfo";
  var texi = "Texinfo";
  var txi = "Texinfo";
  var txt = "Vim Help File";
  var no = "Text";
  var textile = "Textile";
  var thrift = "Thrift";
  var tu = "Turing";
  var ttl = "Turtle";
  var twig = "Twig";
  var tl = "Type Language";
  var ts = "Typescript";
  var upc = "Unified Parallel C";
  var anim = "Unity3D Asset";
  var asset = "Unity3D Asset";
  var mat = "Unity3D Asset";
  var meta = "Unity3D Asset";
  var prefab = "Unity3D Asset";
  var unity = "Unity3D Asset";
  var uno = "Uno";
  var uc = "UnrealScript";
  var ur = "UrWeb";
  var urs = "UrWeb";
  var frm = "VBA";
  var frx = "VBA";
  var vba = "Vim Script";
  var vbs = "VBScript";
  var vcl = "VCL";
  var vhdl = "VHDL";
  var vhd = "VHDL";
  var vhf = "VHDL";
  var vhi = "VHDL";
  var vho = "VHDL";
  var vhs = "VHDL";
  var vht = "VHDL";
  var vhw = "VHDL";
  var vala = "Vala";
  var vapi = "Vala";
  var vdf = "Valve Data Format";
  var veo = "Verilog";
  var vim = "Vim Script";
  var vmb = "Vim Script";
  var snip = "Vim Snippet";
  var snippet = "Vim Snippet";
  var snippets = "Vim Snippet";
  var vb = "Visual Basic .NET";
  var vbhtml = "Visual Basic .NET";
  var volt = "Volt";
  var vue = "Vue";
  var mtl = "Wavefront Material";
  var obj = "Wavefront Object";
  var owl = "Web Ontology Language";
  var wast = "WebAssembly";
  var wat = "WebAssembly";
  var webidl = "WebIDL";
  var vtt = "WebVTT";
  var mediawiki = "Wikitext";
  var wiki = "Wikitext";
  var wikitext = "Wikitext";
  var reg = "Windows Registry Entries";
  var wlk = "Wollok";
  var xbm = "X BitMap";
  var xpm = "X PixMap";
  var x10 = "X10";
  var xc = "XC";
  var xml = "XML";
  var adml = "XML";
  var admx = "XML";
  var ant = "XML";
  var axml = "XML";
  var builds = "XML";
  var ccproj = "XML";
  var ccxml = "XML";
  var clixml = "XML";
  var cproject = "XML";
  var cscfg = "XML";
  var csdef = "XML";
  var csproj = "XML";
  var ct = "XML";
  var depproj = "XML";
  var dita = "XML";
  var ditamap = "XML";
  var ditaval = "XML";
  var dll_config = "XML";
  var dotsettings = "XML";
  var filters = "XML";
  var fsproj = "XML";
  var fxml = "XML";
  var glade = "XML";
  var gmx = "XML";
  var grxml = "XML";
  var iml = "XML";
  var ivy = "XML";
  var jelly = "XML";
  var jsproj = "XML";
  var kml = "XML";
  var launch = "XML";
  var mdpolicy = "XML";
  var mjml = "XML";
  var mxml = "XML";
  var natvis = "XML";
  var ndproj = "XML";
  var nproj = "XML";
  var nuspec = "XML";
  var odd = "XML";
  var osm = "XML";
  var pkgproj = "XML";
  var proj = "XML";
  var props = "XML";
  var ps1xml = "XML";
  var psc1 = "XML";
  var pt = "XML";
  var rdf = "XML";
  var resx = "XML";
  var rss = "XML";
  var scxml = "XML";
  var sfproj = "XML";
  var shproj = "XML";
  var srdf = "XML";
  var storyboard = "XML";
  var sublime_snippet = "XML";
  var targets = "XML";
  var tml = "XML";
  var ui = "XML";
  var urdf = "XML";
  var ux = "XML";
  var vbproj = "XML";
  var vcxproj = "XML";
  var vsixmanifest = "XML";
  var vssettings = "XML";
  var vstemplate = "XML";
  var vxml = "XML";
  var wixproj = "XML";
  var wsdl = "XML";
  var wsf = "XML";
  var wxi = "XML";
  var wxl = "XML";
  var wxs = "XML";
  var x3d = "XML";
  var xacro = "XML";
  var xaml = "XML";
  var xib = "XML";
  var xlf = "XML";
  var xliff = "XML";
  var xmi = "XML";
  var xml_dist = "XML";
  var xmp = "XML";
  var xproj = "XML";
  var xsd = "XML";
  var xspec = "XML";
  var xul = "XML";
  var zcml = "XML";
  var stTheme = "XML Property List";
  var tmCommand = "XML Property List";
  var tmLanguage = "XML Property List";
  var tmPreferences = "XML Property List";
  var tmSnippet = "XML Property List";
  var tmTheme = "XML Property List";
  var xsp_config = "XPages";
  var xsp_metadata = "XPages";
  var xpl = "XProc";
  var xproc = "XProc";
  var xquery = "XQuery";
  var xq = "XQuery";
  var xql = "XQuery";
  var xqm = "XQuery";
  var xqy = "XQuery";
  var xs = "XS";
  var xslt = "XSLT";
  var xsl = "XSLT";
  var xojo_code = "Xojo";
  var xojo_menu = "Xojo";
  var xojo_report = "Xojo";
  var xojo_script = "Xojo";
  var xojo_toolbar = "Xojo";
  var xojo_window = "Xojo";
  var xsh = "Xonsh";
  var xtend = "Xtend";
  var yml = "YAML";
  var mir = "YAML";
  var reek = "YAML";
  var rviz = "YAML";
  var sublime_syntax = "YAML";
  var syntax = "YAML";
  var yaml = "YAML";
  var yaml_tmlanguage = "YAML";
  var yaml_sed = "YAML";
  var yml_mysql = "YAML";
  var yang = "YANG";
  var yar = "YARA";
  var yara = "YARA";
  var yasnippet = "YASnippet";
  var y = "Yacc";
  var yacc = "Yacc";
  var zap = "ZAP";
  var xzap = "ZAP";
  var zil = "ZIL";
  var mud = "ZIL";
  var zeek = "Zeek";
  var bro = "Zeek";
  var zs = "ZenScript";
  var zep = "Zephir";
  var zig = "Zig";
  var zimpl = "Zimpl";
  var zmpl = "Zimpl";
  var zpl = "Zimpl";
  var desktop = "desktop";
  var desktop_in = "desktop";
  var dircolors = "dircolors";
  var ec = "eC";
  var eh = "eC";
  var edn = "edn";
  var fish = "fish";
  var mrc = "mIRC Script";
  var mcfunction = "mcfunction";
  var mu = "mupad";
  var nanorc = "nanorc";
  var nc = "nesC";
  var ooc = "ooc";
  var rst = "reStructuredText";
  var rest = "reStructuredText";
  var rest_txt = "reStructuredText";
  var rst_txt = "reStructuredText";
  var sed = "sed";
  var wdl = "wdl";
  var wisp = "wisp";
  var prg = "xBase";
  var prw = "xBase";
  var extensionToLanguage_default = {
    bsl,
    os,
    "4dm": _dm,
    abap,
    asddls,
    abnf,
    asc,
    ash,
    aidl,
    al,
    ampl,
    mod,
    g4,
    apib,
    apl,
    dyalog,
    asl,
    dsl,
    asn,
    asn1,
    asax,
    ascx,
    ashx,
    asmx,
    aspx,
    axd,
    dats,
    hats,
    sats,
    as,
    adb,
    ada,
    ads,
    afm,
    agda,
    als,
    OutJob,
    PcbDoc,
    PrjPCB,
    SchDoc,
    angelscript,
    apacheconf,
    vhost,
    cls,
    agc,
    applescript,
    scpt,
    arc,
    asciidoc,
    adoc,
    aj,
    asm,
    a51,
    i,
    inc,
    nasm,
    astro,
    asy,
    aug,
    ahk,
    ahkl,
    au3,
    avdl,
    awk,
    auk,
    gawk,
    mawk,
    nawk,
    bas,
    bal,
    bat,
    cmd,
    bf,
    befunge,
    bib,
    bibtex,
    bicep,
    bison,
    bb,
    blade,
    "blade.php": blade_php,
    decls,
    bmx,
    bsv,
    boo,
    bpl,
    b,
    brs,
    c,
    cats,
    h,
    idc,
    cs,
    cake,
    csx,
    linq,
    cpp,
    "c++": c__,
    cc,
    cp,
    cxx,
    "h++": h__,
    hh,
    hpp,
    hxx,
    inl,
    ino,
    ipp,
    re,
    tcc,
    tpp,
    "c-objdump": c_objdump,
    chs,
    cil,
    clp,
    cmake,
    "cmake.in": cmake_in,
    cob,
    cbl,
    ccp,
    cobol,
    cpy,
    dae,
    cson,
    css,
    csv,
    cue,
    w,
    cabal,
    capnp,
    mss,
    ceylon,
    chpl,
    ch,
    ck,
    cirru,
    clw,
    asp,
    icl,
    dcl,
    click,
    clj,
    boot,
    cl2,
    cljc,
    cljs,
    "cljs.hl": cljs_hl,
    cljscm,
    cljx,
    hic,
    soy,
    conllu,
    conll,
    ql,
    qll,
    coffee,
    _coffee,
    cjsx,
    iced,
    cfm,
    cfml,
    cfc,
    lisp,
    asd,
    cl,
    l,
    lsp,
    ny,
    podsl,
    sexp,
    cwl,
    cps,
    coq,
    v,
    cppobjdump,
    "c++-objdump": c___objdump,
    "c++objdump": c__objdump,
    "cpp-objdump": cpp_objdump,
    "cxx-objdump": cxx_objdump,
    creole,
    cr,
    orc,
    udo,
    csd,
    sco,
    cu,
    cuh,
    cy,
    pyx,
    pxd,
    pxi,
    d,
    di,
    "d-objdump": d_objdump,
    com,
    dm,
    zone,
    arpa,
    dfy,
    darcspatch,
    dpatch,
    dart,
    dwl,
    dhall,
    diff,
    patch,
    x,
    dockerfile,
    djs,
    dylan,
    dyl,
    intr,
    lid,
    E,
    eml,
    mbox,
    ebnf,
    ecl,
    eclxml,
    ejs,
    ect,
    jst,
    eq,
    sch,
    brd,
    eb,
    epj,
    edc,
    e,
    ex,
    exs,
    elm,
    el,
    emacs,
    "emacs.desktop": emacs_desktop,
    em,
    emberscript,
    erl,
    "app.src": app_src,
    es,
    escript,
    hrl,
    xrl,
    yrl,
    fs,
    fsi,
    fsx,
    fst,
    flf,
    fx,
    flux,
    factor,
    fy,
    fancypack,
    fan,
    dsp,
    fnl,
    f,
    ftl,
    for: for2,
    "eam.fs": eam_fs,
    fth,
    "4th": _th,
    forth,
    fr,
    frt,
    f77,
    fpp,
    f90,
    f03,
    f08,
    f95,
    bi,
    fut,
    g,
    cnc,
    gco,
    gcode,
    gaml,
    gms,
    gap,
    gd,
    gi,
    tst,
    md,
    gdb,
    gdbinit,
    ged,
    glsl,
    fp,
    frag,
    frg,
    fsh,
    fshader,
    geo,
    geom,
    glslf,
    glslv,
    gs,
    gshader,
    rchit,
    rmiss,
    shader,
    tesc,
    tese,
    vert,
    vrx,
    vsh,
    vshader,
    gn,
    gni,
    gml,
    kid,
    ebuild,
    eclass,
    gbr,
    cmp,
    gbl,
    gbo,
    gbp,
    gbs,
    gko,
    gpb,
    gpt,
    gtl,
    gto,
    gtp,
    gts,
    ncl,
    sol,
    po,
    pot,
    feature,
    story,
    gitconfig,
    glf,
    bdf,
    gp,
    gnu,
    gnuplot,
    p,
    plot,
    plt,
    go,
    golo,
    gst,
    gsx,
    vark,
    grace,
    gradle,
    gf,
    graphql,
    gql,
    graphqls,
    dot,
    gv,
    groovy,
    grt,
    gtpl,
    gvy,
    gsp,
    cfg,
    hcl,
    nomad,
    tf,
    tfvars,
    workflow,
    hlsl,
    cginc,
    fxh,
    hlsli,
    html,
    hta,
    htm,
    "html.hl": html_hl,
    xht,
    xhtml,
    ecr,
    eex,
    "html.leex": html_leex,
    erb,
    "erb.deface": erb_deface,
    rhtml,
    phtml,
    cshtml,
    razor,
    http,
    hxml,
    hack,
    hhi,
    php,
    haml,
    "haml.deface": haml_deface,
    handlebars,
    hbs,
    hb,
    hs,
    "hs-boot": hs_boot,
    hsc,
    hx,
    hxsl,
    q,
    hql,
    hc,
    hy,
    pro,
    dlm,
    ipf,
    ini,
    dof,
    lektorproject,
    prefs,
    properties,
    irclog,
    weechatlog,
    idr,
    lidr,
    gitignore,
    ijm,
    ni,
    i7x,
    iss,
    isl,
    io,
    ik,
    thy,
    ijs,
    flex,
    jflex,
    json,
    avsc,
    geojson,
    gltf,
    har,
    ice,
    "JSON-tmLanguage": JSON_tmLanguage,
    jsonl,
    mcmeta,
    tfstate,
    "tfstate.backup": tfstate_backup,
    topojson,
    webapp,
    webmanifest,
    yy,
    yyp,
    jsonc,
    "sublime-build": sublime_build,
    "sublime-commands": sublime_commands,
    "sublime-completions": sublime_completions,
    "sublime-keymap": sublime_keymap,
    "sublime-macro": sublime_macro,
    "sublime-menu": sublime_menu,
    "sublime-mousemap": sublime_mousemap,
    "sublime-project": sublime_project,
    "sublime-settings": sublime_settings,
    "sublime-theme": sublime_theme,
    "sublime-workspace": sublime_workspace,
    sublime_metrics,
    sublime_session,
    json5,
    jsonld,
    jq,
    j,
    java,
    jav,
    jsp,
    js,
    _js,
    bones,
    cjs,
    es6,
    jake,
    javascript,
    jsb,
    jscad,
    jsfl,
    jsm,
    jss,
    jsx,
    mjs,
    njs,
    pac,
    sjs,
    ssjs,
    xsjs,
    xsjslib,
    "js.erb": js_erb,
    snap,
    jinja,
    j2,
    jinja2,
    jison,
    jisonlex,
    ol,
    iol,
    jsonnet,
    libsonnet,
    jl,
    ipynb,
    krl,
    ksy,
    kak,
    kicad_pcb,
    kicad_mod,
    kicad_wks,
    kit,
    kt,
    ktm,
    kts,
    csl,
    lfe,
    ll,
    lol,
    lsl,
    lslp,
    lvproj,
    lvlib,
    lark,
    lasso,
    las,
    lasso8,
    lasso9,
    latte,
    lean,
    hlean,
    less,
    lex,
    ly,
    ily,
    m,
    ld,
    lds,
    liquid,
    lagda,
    litcoffee,
    "coffee.md": coffee_md,
    lhs,
    ls,
    _ls,
    xm,
    xi,
    lgt,
    logtalk,
    lookml,
    "model.lkml": model_lkml,
    "view.lkml": view_lkml,
    lua,
    fcgi,
    nse,
    p8,
    pd_lua,
    rbxs,
    rockspec,
    wlua,
    mumps,
    m4,
    matlab,
    ms,
    mcr,
    mlir,
    mq4,
    mqh,
    mq5,
    mtml,
    muf,
    m2,
    mak,
    make,
    makefile,
    mk,
    mkfile,
    mako,
    mao,
    markdown,
    mdown,
    mdwn,
    mdx,
    mkd,
    mkdn,
    mkdown,
    ronn,
    scd,
    workbook,
    marko,
    mask,
    mathematica,
    cdf,
    ma,
    mt,
    nb,
    nbp,
    wl,
    wlt,
    maxpat,
    maxhelp,
    maxproj,
    mxt,
    pat,
    moo,
    metal,
    sln,
    minid,
    druby,
    duby,
    mirah,
    mo,
    i3,
    ig,
    m3,
    mg,
    mms,
    mmk,
    monkey,
    monkey2,
    moon,
    s,
    x68,
    muse,
    mustache,
    myt,
    nasl,
    neon,
    nl,
    nsi,
    nsh,
    nss,
    ne,
    nearley,
    n,
    axs,
    axi,
    "axs.erb": axs_erb,
    "axi.erb": axi_erb,
    nlogo,
    nf,
    nginx,
    nginxconf,
    nim,
    "nim.cfg": nim_cfg,
    nimble,
    nimrod,
    nims,
    ninja,
    nit,
    nix,
    nu,
    numpy,
    numpyw,
    numsc,
    njk,
    ml,
    eliom,
    eliomi,
    ml4,
    mli,
    mll,
    mly,
    objdump,
    odin,
    mm,
    sj,
    omgrofl,
    opa,
    opal,
    rego,
    opencl,
    qasm,
    scad,
    plist,
    glyphs,
    fea,
    org,
    ox,
    oxh,
    oxo,
    oxygene,
    oz,
    p4,
    pegjs,
    aw,
    ctp,
    php3,
    php4,
    php5,
    phps,
    phpt,
    pls,
    bdy,
    ddl,
    fnc,
    pck,
    pkb,
    pks,
    plb,
    plsql,
    prc,
    spc,
    sql,
    tpb,
    tps,
    trg,
    vw,
    pgsql,
    pov,
    pan,
    psc,
    parrot,
    pasm,
    pir,
    pas,
    dfm,
    dpr,
    lpr,
    pascal,
    pp,
    pwn,
    sma,
    pep,
    pl,
    cgi,
    perl,
    ph,
    plx,
    pm,
    psgi,
    t,
    pic,
    chem,
    pkl,
    pig,
    pike,
    pmod,
    puml,
    iuml,
    plantuml,
    pod,
    pod6,
    pogo,
    pony,
    pcss,
    postcss,
    ps,
    eps,
    epsi,
    pfa,
    pbt,
    sra,
    sru,
    srw,
    ps1,
    psd1,
    psm1,
    prisma,
    pde,
    prolog,
    yap,
    spin,
    proto,
    pub,
    jade,
    pug,
    pd,
    pb,
    pbi,
    purs,
    py,
    gyp,
    gypi,
    lmi,
    py3,
    pyde,
    pyi,
    pyp,
    pyt,
    pyw,
    rpy,
    smk,
    spec,
    tac,
    wsgi,
    xpy,
    pytb,
    qs,
    qml,
    qbs,
    pri,
    r,
    rd,
    rsx,
    raml,
    rdoc,
    rbbas,
    rbfrm,
    rbmnu,
    rbres,
    rbtbar,
    rbuistate,
    rexx,
    pprx,
    rex,
    rmd,
    rnh,
    rno,
    rkt,
    rktd,
    rktl,
    scrbl,
    rl,
    "6pl": _pl,
    "6pm": _pm,
    nqp,
    p6,
    p6l,
    p6m,
    pl6,
    pm6,
    raku,
    rakumod,
    rsc,
    raw,
    res,
    rei,
    reb,
    r2,
    r3,
    rebol,
    red,
    reds,
    cw,
    regexp,
    regex,
    rs,
    rsh,
    rtf,
    ring,
    riot,
    robot,
    roff,
    "1": _,
    "1in": _in,
    "1m": _m,
    "1x": _x,
    "2": _2,
    "3": _3,
    "3in": _in2,
    "3m": _m2,
    "3p": _p,
    "3pm": _pm2,
    "3qt": _qt,
    "3x": _x2,
    "4": _4,
    "5": _5,
    "6": _6,
    "7": _7,
    "8": _8,
    "9": _9,
    man,
    mdoc,
    me,
    nr,
    tmac,
    rg,
    rb,
    builder,
    eye,
    gemspec,
    god,
    jbuilder,
    mspec,
    pluginspec,
    podspec,
    prawn,
    rabl,
    rake,
    rbi,
    rbuild,
    rbw,
    rbx,
    ru,
    ruby,
    thor,
    watchr,
    "rs.in": rs_in,
    sas,
    scss,
    te,
    smt2,
    smt,
    sparql,
    rq,
    sqf,
    hqf,
    cql,
    mysql,
    tab,
    udf,
    viw,
    db2,
    srt,
    ston,
    svg,
    sage,
    sagews,
    sls,
    sass,
    scala,
    kojo,
    sbt,
    sc,
    scaml,
    scm,
    sld,
    sps,
    ss,
    sci,
    sce,
    self,
    sh,
    bash,
    bats,
    command,
    env,
    ksh,
    "sh.in": sh_in,
    tmux,
    tool,
    zsh,
    "sh-session": sh_session,
    shen,
    sieve,
    sl,
    slim,
    cocci,
    smali,
    st,
    tpl,
    sp,
    sfd,
    nut,
    stan,
    fun,
    sig,
    sml,
    bzl,
    do: do2,
    ado,
    doh,
    ihlp,
    mata,
    matah,
    sthlp,
    styl,
    sss,
    svelte,
    swift,
    sv,
    svh,
    vh,
    "8xp": _xp,
    "8xk": _xk,
    "8xk.txt": _xk_txt,
    "8xp.txt": _xp_txt,
    tla,
    toml,
    tsv,
    tsx,
    txl,
    tcl,
    adp,
    "tcl.in": tcl_in,
    tm,
    tcsh,
    csh,
    tex,
    aux,
    bbx,
    cbx,
    dtx,
    ins,
    lbx,
    ltx,
    mkii,
    mkiv,
    mkvi,
    sty,
    toc,
    tea,
    texinfo,
    texi,
    txi,
    txt,
    no,
    textile,
    thrift,
    tu,
    ttl,
    twig,
    tl,
    ts,
    upc,
    anim,
    asset,
    mat,
    meta,
    prefab,
    unity,
    uno,
    uc,
    ur,
    urs,
    frm,
    frx,
    vba,
    vbs,
    vcl,
    vhdl,
    vhd,
    vhf,
    vhi,
    vho,
    vhs,
    vht,
    vhw,
    vala,
    vapi,
    vdf,
    veo,
    vim,
    vmb,
    snip,
    snippet,
    snippets,
    vb,
    vbhtml,
    volt,
    vue,
    mtl,
    obj,
    owl,
    wast,
    wat,
    webidl,
    vtt,
    mediawiki,
    wiki,
    wikitext,
    reg,
    wlk,
    xbm,
    xpm,
    x10,
    xc,
    xml,
    adml,
    admx,
    ant,
    axml,
    builds,
    ccproj,
    ccxml,
    clixml,
    cproject,
    cscfg,
    csdef,
    csproj,
    ct,
    depproj,
    dita,
    ditamap,
    ditaval,
    "dll.config": dll_config,
    dotsettings,
    filters,
    fsproj,
    fxml,
    glade,
    gmx,
    grxml,
    iml,
    ivy,
    jelly,
    jsproj,
    kml,
    launch,
    mdpolicy,
    mjml,
    mxml,
    natvis,
    ndproj,
    nproj,
    nuspec,
    odd,
    osm,
    pkgproj,
    proj,
    props,
    ps1xml,
    psc1,
    pt,
    rdf,
    resx,
    rss,
    scxml,
    sfproj,
    shproj,
    srdf,
    storyboard,
    "sublime-snippet": sublime_snippet,
    targets,
    tml,
    ui,
    urdf,
    ux,
    vbproj,
    vcxproj,
    vsixmanifest,
    vssettings,
    vstemplate,
    vxml,
    wixproj,
    wsdl,
    wsf,
    wxi,
    wxl,
    wxs,
    x3d,
    xacro,
    xaml,
    xib,
    xlf,
    xliff,
    xmi,
    "xml.dist": xml_dist,
    xmp,
    xproj,
    xsd,
    xspec,
    xul,
    zcml,
    stTheme,
    tmCommand,
    tmLanguage,
    tmPreferences,
    tmSnippet,
    tmTheme,
    "xsp-config": xsp_config,
    "xsp.metadata": xsp_metadata,
    xpl,
    xproc,
    xquery,
    xq,
    xql,
    xqm,
    xqy,
    xs,
    xslt,
    xsl,
    xojo_code,
    xojo_menu,
    xojo_report,
    xojo_script,
    xojo_toolbar,
    xojo_window,
    xsh,
    xtend,
    yml,
    mir,
    reek,
    rviz,
    "sublime-syntax": sublime_syntax,
    syntax,
    yaml,
    "yaml-tmlanguage": yaml_tmlanguage,
    "yaml.sed": yaml_sed,
    "yml.mysql": yml_mysql,
    yang,
    yar,
    yara,
    yasnippet,
    y,
    yacc,
    zap,
    xzap,
    zil,
    mud,
    zeek,
    bro,
    zs,
    zep,
    zig,
    zimpl,
    zmpl,
    zpl,
    desktop,
    "desktop.in": desktop_in,
    dircolors,
    ec,
    eh,
    edn,
    fish,
    mrc,
    mcfunction,
    mu,
    nanorc,
    nc,
    ooc,
    rst,
    rest,
    "rest.txt": rest_txt,
    "rst.txt": rst_txt,
    sed,
    wdl,
    wisp,
    prg,
    prw
  };
  function getLanguageFromFilename(filename) {
    const extension = filename.split(".").pop();
    if (!extension)
      return "text";
    const match = extensionToLanguage_default[extension];
    return match || "text";
  }

  // src/blocks/example-file-block/index.tsx
  function Block(props2) {
    const { context, content } = props2;
    const language = getLanguageFromFilename(context.file);
    useTailwindCdn();
    return /* @__PURE__ */ React.createElement("div", {
      className: "p-4 code"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "text-sm"
    }, "File: ", context.path, " ", language), /* @__PURE__ */ React.createElement("pre", {
      className: "p-4 text-gray-600"
    }, content));
  }
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
