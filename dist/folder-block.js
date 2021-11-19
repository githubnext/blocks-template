(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
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
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
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
          function Component(props, context, updater) {
            this.props = props;
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
          function PureComponent(props, context, updater) {
            this.props = props;
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
                  } catch (x) {
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
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
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
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              $$typeof: REACT_ELEMENT_TYPE,
              type,
              key,
              ref,
              props,
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
                value: self
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
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
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
              self = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
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
            var props = _assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
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
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
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
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
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
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
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
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
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
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: _assign({}, props, {
                    value: prevLog
                  }),
                  info: _assign({}, props, {
                    value: prevInfo
                  }),
                  warn: _assign({}, props, {
                    value: prevWarn
                  }),
                  error: _assign({}, props, {
                    value: prevError
                  }),
                  group: _assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: _assign({}, props, {
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
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
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
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
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
                  } catch (x) {
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
                  } catch (ex) {
                    error$1 = ex;
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
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
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
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
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
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
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
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
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
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          {
            try {
              var frozenObject = Object.freeze({});
              new Map([[frozenObject, null]]);
              new Set([frozenObject]);
            } catch (e) {
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
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
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
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = _parseStaticImports.default;
      exports.default = _default;
      module.exports = _parseStaticImports.default;
    }
  });

  // node_modules/@githubnext/utils/dist/index.mjs
  var import_react = __toModule(require_react());

  // node_modules/zod/lib/index.mjs
  var extendStatics = function(e, t) {
    return (extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e2, t2) {
      e2.__proto__ = t2;
    } || function(e2, t2) {
      for (var r in t2)
        Object.prototype.hasOwnProperty.call(t2, r) && (e2[r] = t2[r]);
    })(e, t);
  };
  function __extends(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function r() {
      this.constructor = e;
    }
    extendStatics(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  }
  var util;
  var __assign = function() {
    return (__assign = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++)
        for (var a in t = arguments[r])
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      return e;
    }).apply(this, arguments);
  };
  function __awaiter(e, s, i, u) {
    return new (i = i || Promise)(function(r, t) {
      function n(e2) {
        try {
          o(u.next(e2));
        } catch (e3) {
          t(e3);
        }
      }
      function a(e2) {
        try {
          o(u.throw(e2));
        } catch (e3) {
          t(e3);
        }
      }
      function o(e2) {
        var t2;
        e2.done ? r(e2.value) : ((t2 = e2.value) instanceof i ? t2 : new i(function(e3) {
          e3(t2);
        })).then(n, a);
      }
      o((u = u.apply(e, s || [])).next());
    });
  }
  function __generator(r, n) {
    var a, o, s, i = { label: 0, sent: function() {
      if (1 & s[0])
        throw s[1];
      return s[1];
    }, trys: [], ops: [] }, e = { next: t(0), throw: t(1), return: t(2) };
    return typeof Symbol == "function" && (e[Symbol.iterator] = function() {
      return this;
    }), e;
    function t(t2) {
      return function(e2) {
        return function(t3) {
          if (a)
            throw new TypeError("Generator is already executing.");
          for (; i; )
            try {
              if (a = 1, o && (s = 2 & t3[0] ? o.return : t3[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, t3[1])).done)
                return s;
              switch (o = 0, (t3 = s ? [2 & t3[0], s.value] : t3)[0]) {
                case 0:
                case 1:
                  s = t3;
                  break;
                case 4:
                  return i.label++, { value: t3[1], done: false };
                case 5:
                  i.label++, o = t3[1], t3 = [0];
                  continue;
                case 7:
                  t3 = i.ops.pop(), i.trys.pop();
                  continue;
                default:
                  if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (t3[0] === 6 || t3[0] === 2)) {
                    i = 0;
                    continue;
                  }
                  if (t3[0] === 3 && (!s || t3[1] > s[0] && t3[1] < s[3])) {
                    i.label = t3[1];
                    break;
                  }
                  if (t3[0] === 6 && i.label < s[1]) {
                    i.label = s[1], s = t3;
                    break;
                  }
                  if (s && i.label < s[2]) {
                    i.label = s[2], i.ops.push(t3);
                    break;
                  }
                  s[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              t3 = n.call(r, i);
            } catch (e3) {
              t3 = [6, e3], o = 0;
            } finally {
              a = s = 0;
            }
          if (5 & t3[0])
            throw t3[1];
          return { value: t3[0] ? t3[1] : void 0, done: true };
        }([t2, e2]);
      };
    }
  }
  function __values(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
    if (r)
      return r.call(e);
    if (e && typeof e.length == "number")
      return { next: function() {
        return { value: (e = e && n >= e.length ? void 0 : e) && e[n++], done: !e };
      } };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n, a, o = r.call(e), s = [];
    try {
      for (; (t === void 0 || 0 < t--) && !(n = o.next()).done; )
        s.push(n.value);
    } catch (e2) {
      a = { error: e2 };
    } finally {
      try {
        n && !n.done && (r = o.return) && r.call(o);
      } finally {
        if (a)
          throw a.error;
      }
    }
    return s;
  }
  function __spreadArray(e, t, r) {
    if (r || arguments.length === 2)
      for (var n, a = 0, o = t.length; a < o; a++)
        !n && a in t || ((n = n || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
    return e.concat(n || Array.prototype.slice.call(t));
  }
  !function(u) {
    u.assertNever = function(e) {
      throw new Error();
    }, u.arrayToEnum = function(e) {
      var t, r, n = {};
      try {
        for (var a = __values(e), o = a.next(); !o.done; o = a.next()) {
          var s = o.value;
          n[s] = s;
        }
      } catch (e2) {
        t = { error: e2 };
      } finally {
        try {
          o && !o.done && (r = a.return) && r.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return n;
    }, u.getValidEnumValues = function(t) {
      var r, e, n = u.objectKeys(t).filter(function(e2) {
        return typeof t[t[e2]] != "number";
      }), a = {};
      try {
        for (var o = __values(n), s = o.next(); !s.done; s = o.next()) {
          var i = s.value;
          a[i] = t[i];
        }
      } catch (e2) {
        r = { error: e2 };
      } finally {
        try {
          s && !s.done && (e = o.return) && e.call(o);
        } finally {
          if (r)
            throw r.error;
        }
      }
      return u.objectValues(a);
    }, u.objectValues = function(t) {
      return u.objectKeys(t).map(function(e) {
        return t[e];
      });
    }, u.objectKeys = typeof Object.keys == "function" ? function(e) {
      return Object.keys(e);
    } : function(e) {
      var t, r = [];
      for (t in e)
        Object.prototype.hasOwnProperty.call(e, t) && r.push(t);
      return r;
    }, u.find = function(e, t) {
      var r, n;
      try {
        for (var a = __values(e), o = a.next(); !o.done; o = a.next()) {
          var s = o.value;
          if (t(s))
            return s;
        }
      } catch (e2) {
        r = { error: e2 };
      } finally {
        try {
          o && !o.done && (n = a.return) && n.call(a);
        } finally {
          if (r)
            throw r.error;
        }
      }
    }, u.isInteger = typeof Number.isInteger == "function" ? function(e) {
      return Number.isInteger(e);
    } : function(e) {
      return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
    };
  }(util = util || {});
  var ZodIssueCode = util.arrayToEnum(["invalid_type", "custom", "invalid_union", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of"]);
  var quotelessJson = function(e) {
    return JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
  };
  var ZodError = function(r) {
    function t(e) {
      var t2 = this.constructor, u = r.call(this) || this;
      u.issues = [], u.format = function() {
        var p = { _errors: [] }, c = function(e2) {
          var t3, r2;
          try {
            for (var n = __values(e2.issues), a = n.next(); !a.done; a = n.next()) {
              var o = a.value;
              if (o.code === "invalid_union")
                o.unionErrors.map(c);
              else if (o.code === "invalid_return_type")
                c(o.returnTypeError);
              else if (o.code === "invalid_arguments")
                c(o.argumentsError);
              else if (o.path.length === 0)
                p._errors.push(o.message);
              else
                for (var s = p, i = 0; i < o.path.length; ) {
                  var u2, d = o.path[i];
                  i === o.path.length - 1 ? (s[d] = s[d] || { _errors: [] }, s[d]._errors.push(o.message)) : typeof d == "string" ? s[d] = s[d] || { _errors: [] } : typeof d == "number" && ((u2 = [])._errors = [], s[d] = s[d] || u2), s = s[d], i++;
                }
            }
          } catch (e3) {
            t3 = { error: e3 };
          } finally {
            try {
              a && !a.done && (r2 = n.return) && r2.call(n);
            } finally {
              if (t3)
                throw t3.error;
            }
          }
        };
        return c(u), p;
      }, u.addIssue = function(e2) {
        u.issues = __spreadArray(__spreadArray([], __read(u.issues), false), [e2], false);
      }, u.addIssues = function(e2) {
        e2 === void 0 && (e2 = []), u.issues = __spreadArray(__spreadArray([], __read(u.issues), false), __read(e2), false);
      }, u.flatten = function(e2) {
        var t3, r2;
        e2 === void 0 && (e2 = function(e3) {
          return e3.message;
        });
        var n = {}, a = [];
        try {
          for (var o = __values(u.issues), s = o.next(); !s.done; s = o.next()) {
            var i = s.value;
            0 < i.path.length ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(e2(i))) : a.push(e2(i));
          }
        } catch (e3) {
          t3 = { error: e3 };
        } finally {
          try {
            s && !s.done && (r2 = o.return) && r2.call(o);
          } finally {
            if (t3)
              throw t3.error;
          }
        }
        return { formErrors: a, fieldErrors: n };
      };
      t2 = t2.prototype;
      return Object.setPrototypeOf ? Object.setPrototypeOf(u, t2) : u.__proto__ = t2, u.name = "ZodError", u.issues = e, u;
    }
    return __extends(t, r), Object.defineProperty(t.prototype, "errors", { get: function() {
      return this.issues;
    }, enumerable: false, configurable: true }), t.prototype.toString = function() {
      return this.message;
    }, Object.defineProperty(t.prototype, "message", { get: function() {
      return JSON.stringify(this.issues, null, 2);
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isEmpty", { get: function() {
      return this.issues.length === 0;
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "formErrors", { get: function() {
      return this.flatten();
    }, enumerable: false, configurable: true }), t.create = function(e) {
      return new t(e);
    }, t;
  }(Error);
  var defaultErrorMap = function(e, t) {
    var r;
    switch (e.code) {
      case ZodIssueCode.invalid_type:
        r = e.received === "undefined" ? "Required" : "Expected " + e.expected + ", received " + e.received;
        break;
      case ZodIssueCode.unrecognized_keys:
        r = "Unrecognized key(s) in object: " + e.keys.map(function(e2) {
          return "'" + e2 + "'";
        }).join(", ");
        break;
      case ZodIssueCode.invalid_union:
        r = "Invalid input";
        break;
      case ZodIssueCode.invalid_enum_value:
        r = "Invalid enum value. Expected " + e.options.map(function(e2) {
          return typeof e2 == "string" ? "'" + e2 + "'" : e2;
        }).join(" | ") + ", received " + (typeof t.data == "string" ? "'" + t.data + "'" : t.data);
        break;
      case ZodIssueCode.invalid_arguments:
        r = "Invalid function arguments";
        break;
      case ZodIssueCode.invalid_return_type:
        r = "Invalid function return type";
        break;
      case ZodIssueCode.invalid_date:
        r = "Invalid date";
        break;
      case ZodIssueCode.invalid_string:
        r = e.validation !== "regex" ? "Invalid " + e.validation : "Invalid";
        break;
      case ZodIssueCode.too_small:
        r = e.type === "array" ? "Should have " + (e.inclusive ? "at least" : "more than") + " " + e.minimum + " items" : e.type === "string" ? "Should be " + (e.inclusive ? "at least" : "over") + " " + e.minimum + " characters" : e.type === "number" ? "Value should be greater than " + (e.inclusive ? "or equal to " : "") + e.minimum : "Invalid input";
        break;
      case ZodIssueCode.too_big:
        r = e.type === "array" ? "Should have " + (e.inclusive ? "at most" : "less than") + " " + e.maximum + " items" : e.type === "string" ? "Should be " + (e.inclusive ? "at most" : "under") + " " + e.maximum + " characters long" : e.type === "number" ? "Value should be less than " + (e.inclusive ? "or equal to " : "") + e.maximum : "Invalid input";
        break;
      case ZodIssueCode.custom:
        r = "Invalid input";
        break;
      case ZodIssueCode.invalid_intersection_types:
        r = "Intersection results could not be merged";
        break;
      case ZodIssueCode.not_multiple_of:
        r = "Should be multiple of " + e.multipleOf;
        break;
      default:
        r = t.defaultError, util.assertNever(e);
    }
    return { message: r };
  };
  var overrideErrorMap = defaultErrorMap;
  var setErrorMap = function(e) {
    overrideErrorMap = e;
  };
  var ZodParsedType = util.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
  function cacheAndReturn(e, t, r) {
    return r && r.set(e, t), t;
  }
  var getParsedType = function(e, t) {
    if (t && t.has(e))
      return t.get(e);
    switch (typeof e) {
      case "undefined":
        return cacheAndReturn(e, ZodParsedType.undefined, t);
      case "string":
        return cacheAndReturn(e, ZodParsedType.string, t);
      case "number":
        return cacheAndReturn(e, isNaN(e) ? ZodParsedType.nan : ZodParsedType.number, t);
      case "boolean":
        return cacheAndReturn(e, ZodParsedType.boolean, t);
      case "function":
        return cacheAndReturn(e, ZodParsedType.function, t);
      case "bigint":
        return cacheAndReturn(e, ZodParsedType.bigint, t);
      case "object":
        return Array.isArray(e) ? cacheAndReturn(e, ZodParsedType.array, t) : e === null ? cacheAndReturn(e, ZodParsedType.null, t) : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? cacheAndReturn(e, ZodParsedType.promise, t) : e instanceof Map ? cacheAndReturn(e, ZodParsedType.map, t) : e instanceof Set ? cacheAndReturn(e, ZodParsedType.set, t) : e instanceof Date ? cacheAndReturn(e, ZodParsedType.date, t) : cacheAndReturn(e, ZodParsedType.object, t);
      default:
        return cacheAndReturn(e, ZodParsedType.unknown, t);
    }
  };
  var makeIssue = function(e) {
    var t, r, n = e.data, a = e.path, o = e.errorMaps, e = e.issueData, a = __spreadArray(__spreadArray([], __read(a), false), __read(e.path || []), false), s = __assign(__assign({}, e), { path: a }), i = "", o = o.filter(function(e2) {
      return !!e2;
    }).slice().reverse();
    try {
      for (var u = __values(o), d = u.next(); !d.done; d = u.next())
        i = (0, d.value)(s, { data: n, defaultError: i }).message;
    } catch (e2) {
      t = { error: e2 };
    } finally {
      try {
        d && !d.done && (r = u.return) && r.call(u);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return __assign(__assign({}, e), { path: a, message: e.message || i });
  };
  var EMPTY_PATH = [];
  function addIssueToContext(e, t) {
    t = makeIssue({ issueData: t, data: e.data, path: e.path, errorMaps: [e.contextualErrorMap, e.schemaErrorMap, overrideErrorMap, defaultErrorMap].filter(function(e2) {
      return !!e2;
    }) });
    e.issues.push(t);
  }
  var errorUtil;
  var ParseStatus = function() {
    function l() {
      this.value = "valid";
    }
    return l.prototype.dirty = function() {
      this.value === "valid" && (this.value = "dirty");
    }, l.prototype.abort = function() {
      this.value !== "aborted" && (this.value = "aborted");
    }, l.mergeArray = function(e, t) {
      var r, n, a = [];
      try {
        for (var o = __values(t), s = o.next(); !s.done; s = o.next()) {
          var i = s.value;
          if (i.status === "aborted")
            return INVALID;
          i.status === "dirty" && e.dirty(), a.push(i.value);
        }
      } catch (e2) {
        r = { error: e2 };
      } finally {
        try {
          s && !s.done && (n = o.return) && n.call(o);
        } finally {
          if (r)
            throw r.error;
        }
      }
      return { status: e.value, value: a };
    }, l.mergeObjectAsync = function(p, c) {
      return __awaiter(this, void 0, void 0, function() {
        var t, r, n, a, o, s, i, u, d;
        return __generator(this, function(e) {
          switch (e.label) {
            case 0:
              t = [], e.label = 1;
            case 1:
              e.trys.push([1, 7, 8, 9]), r = __values(c), n = r.next(), e.label = 2;
            case 2:
              return n.done ? [3, 6] : (a = n.value, s = (o = t).push, d = {}, [4, a.key]);
            case 3:
              return d.key = e.sent(), [4, a.value];
            case 4:
              s.apply(o, [(d.value = e.sent(), d)]), e.label = 5;
            case 5:
              return n = r.next(), [3, 2];
            case 6:
              return [3, 9];
            case 7:
              return i = e.sent(), i = { error: i }, [3, 9];
            case 8:
              try {
                n && !n.done && (u = r.return) && u.call(r);
              } finally {
                if (i)
                  throw i.error;
              }
              return [7];
            case 9:
              return [2, l.mergeObjectSync(p, t)];
          }
        });
      });
    }, l.mergeObjectSync = function(e, t) {
      var r, n, a = {};
      try {
        for (var o = __values(t), s = o.next(); !s.done; s = o.next()) {
          var i = s.value, u = i.key, d = i.value;
          if (u.status === "aborted")
            return INVALID;
          if (d.status === "aborted")
            return INVALID;
          u.status === "dirty" && e.dirty(), d.status === "dirty" && e.dirty(), d.value === void 0 && !i.alwaysSet || (a[u.value] = d.value);
        }
      } catch (e2) {
        r = { error: e2 };
      } finally {
        try {
          s && !s.done && (n = o.return) && n.call(o);
        } finally {
          if (r)
            throw r.error;
        }
      }
      return { status: e.value, value: a };
    }, l;
  }();
  var INVALID = Object.freeze({ status: "aborted" });
  var DIRTY = function(e) {
    return { status: "dirty", value: e };
  };
  var OK = function(e) {
    return { status: "valid", value: e };
  };
  var isAborted = function(e) {
    return e.status === "aborted";
  };
  var isDirty = function(e) {
    return e.status === "dirty";
  };
  var isValid = function(e) {
    return e.status === "valid";
  };
  var isAsync = function(e) {
    return e instanceof Promise;
  };
  !function(e) {
    e.errToObj = function(e2) {
      return typeof e2 == "string" ? { message: e2 } : e2 || {};
    }, e.toString = function(e2) {
      return typeof e2 == "string" ? e2 : e2 == null ? void 0 : e2.message;
    };
  }(errorUtil = errorUtil || {});
  var handleResult = function(e, t) {
    if (isValid(t))
      return { success: true, data: t.value };
    if (!e.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return { success: false, error: new ZodError(e.issues) };
  };
  function processCreateParams(r) {
    if (!r)
      return {};
    if (r.errorMap && (r.invalid_type_error || r.required_error))
      throw new Error(`Can't use "invalid" or "required" in conjunction with custom error map.`);
    if (r.errorMap)
      return { errorMap: r.errorMap };
    return { errorMap: function(e, t) {
      return e.code !== "invalid_type" ? { message: t.defaultError } : t.data === void 0 && r.required_error ? { message: r.required_error } : r.invalid_type_error ? { message: r.invalid_type_error } : { message: t.defaultError };
    } };
  }
  var objectUtil;
  var ZodType = function() {
    function e(e2) {
      this.spa = this.safeParseAsync, this.superRefine = this._refinement, this._def = e2, this.transform = this.transform.bind(this), this.default = this.default.bind(this);
    }
    return Object.defineProperty(e.prototype, "description", { get: function() {
      return this._def.description;
    }, enumerable: false, configurable: true }), e.prototype._processInputParams = function(e2) {
      return { status: new ParseStatus(), ctx: __assign(__assign({}, e2.parent), { data: e2.data, parsedType: getParsedType(e2.data, e2.parent.typeCache), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent }) };
    }, e.prototype._parseSync = function(e2) {
      e2 = this._parse(e2);
      if (isAsync(e2))
        throw new Error("Synchronous parse encountered promise.");
      return e2;
    }, e.prototype._parseAsync = function(e2) {
      e2 = this._parse(e2);
      return Promise.resolve(e2);
    }, e.prototype.parse = function(e2, t) {
      t = this.safeParse(e2, t);
      if (t.success)
        return t.data;
      throw t.error;
    }, e.prototype.safeParse = function(e2, t) {
      t = { path: (t == null ? void 0 : t.path) || [], issues: [], contextualErrorMap: t == null ? void 0 : t.errorMap, schemaErrorMap: this._def.errorMap, async: (t = t == null ? void 0 : t.async) !== null && t !== void 0 && t, typeCache: new Map(), parent: null, data: e2, parsedType: getParsedType(e2) }, e2 = this._parseSync({ data: e2, path: t.path, parent: t });
      return handleResult(t, e2);
    }, e.prototype.parseAsync = function(r, n) {
      return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(e2) {
          switch (e2.label) {
            case 0:
              return [4, this.safeParseAsync(r, n)];
            case 1:
              if ((t = e2.sent()).success)
                return [2, t.data];
              throw t.error;
          }
        });
      });
    }, e.prototype.safeParseAsync = function(n, a) {
      return __awaiter(this, void 0, void 0, function() {
        var t, r;
        return __generator(this, function(e2) {
          switch (e2.label) {
            case 0:
              return t = { path: (a == null ? void 0 : a.path) || [], issues: [], contextualErrorMap: a == null ? void 0 : a.errorMap, schemaErrorMap: this._def.errorMap, async: true, typeCache: new Map(), parent: null, data: n, parsedType: getParsedType(n) }, r = this._parse({ data: n, path: [], parent: t }), [4, isAsync(r) ? r : Promise.resolve(r)];
            case 1:
              return r = e2.sent(), [2, handleResult(t, r)];
          }
        });
      });
    }, e.prototype.refine = function(a, o) {
      return this._refinement(function(t, r) {
        function n() {
          return r.addIssue(__assign({ code: ZodIssueCode.custom }, (e3 = t, typeof o == "string" || o === void 0 ? { message: o } : typeof o == "function" ? o(e3) : o)));
          var e3;
        }
        var e2 = a(t);
        return e2 instanceof Promise ? e2.then(function(e3) {
          return !!e3 || (n(), false);
        }) : !!e2 || (n(), false);
      });
    }, e.prototype.refinement = function(r, n) {
      return this._refinement(function(e2, t) {
        return !!r(e2) || (t.addIssue(typeof n == "function" ? n(e2, t) : n), false);
      });
    }, e.prototype._refinement = function(e2) {
      return new ZodEffects({ schema: this, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: { type: "refinement", refinement: e2 } });
    }, e.prototype.optional = function() {
      return ZodOptional.create(this);
    }, e.prototype.nullable = function() {
      return ZodNullable.create(this);
    }, e.prototype.nullish = function() {
      return this.optional().nullable();
    }, e.prototype.array = function() {
      return ZodArray.create(this);
    }, e.prototype.promise = function() {
      return ZodPromise.create(this);
    }, e.prototype.or = function(e2) {
      return ZodUnion.create([this, e2]);
    }, e.prototype.and = function(e2) {
      return ZodIntersection.create(this, e2);
    }, e.prototype.transform = function(e2) {
      return new ZodEffects({ schema: this, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: { type: "transform", transform: e2 } });
    }, e.prototype.default = function(e2) {
      return new ZodDefault({ innerType: this, defaultValue: typeof e2 == "function" ? e2 : function() {
        return e2;
      }, typeName: ZodFirstPartyTypeKind.ZodDefault });
    }, e.prototype.describe = function(e2) {
      return new this.constructor(__assign(__assign({}, this._def), { description: e2 }));
    }, e.prototype.isOptional = function() {
      return this.safeParse(void 0).success;
    }, e.prototype.isNullable = function() {
      return this.safeParse(null).success;
    }, e;
  }();
  var cuidRegex = /^c[^\s-]{8,}$/i;
  var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
  var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var ZodString = function(e) {
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n._regex = function(t2, e2, r) {
        return n.refinement(function(e3) {
          return t2.test(e3);
        }, __assign({ validation: e2, code: ZodIssueCode.invalid_string }, errorUtil.errToObj(r)));
      }, n.nonempty = function(e2) {
        return n.min(1, errorUtil.errToObj(e2));
      }, n;
    }
    return __extends(t, e), t.prototype._parse = function(e2) {
      var t2, r, e2 = this._processInputParams(e2), n = e2.status, a = e2.ctx;
      if (a.parsedType !== ZodParsedType.string)
        return addIssueToContext(a, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.string, received: a.parsedType }), INVALID;
      try {
        for (var o = __values(this._def.checks), s = o.next(); !s.done; s = o.next()) {
          var i = s.value;
          if (i.kind === "min")
            a.data.length < i.value && (addIssueToContext(a, { code: ZodIssueCode.too_small, minimum: i.value, type: "string", inclusive: true, message: i.message }), n.dirty());
          else if (i.kind === "max")
            a.data.length > i.value && (addIssueToContext(a, { code: ZodIssueCode.too_big, maximum: i.value, type: "string", inclusive: true, message: i.message }), n.dirty());
          else if (i.kind === "email")
            emailRegex.test(a.data) || (addIssueToContext(a, { validation: "email", code: ZodIssueCode.invalid_string, message: i.message }), n.dirty());
          else if (i.kind === "uuid")
            uuidRegex.test(a.data) || (addIssueToContext(a, { validation: "uuid", code: ZodIssueCode.invalid_string, message: i.message }), n.dirty());
          else if (i.kind === "cuid")
            cuidRegex.test(a.data) || (addIssueToContext(a, { validation: "cuid", code: ZodIssueCode.invalid_string, message: i.message }), n.dirty());
          else if (i.kind === "url")
            try {
              new URL(a.data);
            } catch (e3) {
              addIssueToContext(a, { validation: "url", code: ZodIssueCode.invalid_string, message: i.message }), n.dirty();
            }
          else
            i.kind === "regex" && (i.regex.lastIndex = 0, i.regex.test(a.data) || (addIssueToContext(a, { validation: "regex", code: ZodIssueCode.invalid_string, message: i.message }), n.dirty()));
        }
      } catch (e3) {
        t2 = { error: e3 };
      } finally {
        try {
          s && !s.done && (r = o.return) && r.call(o);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return { status: n.value, value: a.data };
    }, t.prototype._addCheck = function(e2) {
      return new t(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [e2], false) }));
    }, t.prototype.email = function(e2) {
      return this._addCheck(__assign({ kind: "email" }, errorUtil.errToObj(e2)));
    }, t.prototype.url = function(e2) {
      return this._addCheck(__assign({ kind: "url" }, errorUtil.errToObj(e2)));
    }, t.prototype.uuid = function(e2) {
      return this._addCheck(__assign({ kind: "uuid" }, errorUtil.errToObj(e2)));
    }, t.prototype.cuid = function(e2) {
      return this._addCheck(__assign({ kind: "cuid" }, errorUtil.errToObj(e2)));
    }, t.prototype.regex = function(e2, t2) {
      return this._addCheck(__assign({ kind: "regex", regex: e2 }, errorUtil.errToObj(t2)));
    }, t.prototype.min = function(e2, t2) {
      return this._addCheck(__assign({ kind: "min", value: e2 }, errorUtil.errToObj(t2)));
    }, t.prototype.max = function(e2, t2) {
      return this._addCheck(__assign({ kind: "max", value: e2 }, errorUtil.errToObj(t2)));
    }, t.prototype.length = function(e2, t2) {
      return this.min(e2, t2).max(e2, t2);
    }, Object.defineProperty(t.prototype, "isEmail", { get: function() {
      return !!this._def.checks.find(function(e2) {
        return e2.kind === "email";
      });
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isURL", { get: function() {
      return !!this._def.checks.find(function(e2) {
        return e2.kind === "url";
      });
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isUUID", { get: function() {
      return !!this._def.checks.find(function(e2) {
        return e2.kind === "uuid";
      });
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isCUID", { get: function() {
      return !!this._def.checks.find(function(e2) {
        return e2.kind === "cuid";
      });
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "minLength", { get: function() {
      var t2 = -1 / 0;
      return this._def.checks.map(function(e2) {
        e2.kind === "min" && (t2 === null || e2.value > t2) && (t2 = e2.value);
      }), t2;
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "maxLength", { get: function() {
      var t2 = null;
      return this._def.checks.map(function(e2) {
        e2.kind === "max" && (t2 === null || e2.value < t2) && (t2 = e2.value);
      }), t2;
    }, enumerable: false, configurable: true }), t.create = function(e2) {
      return new t(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodString }, processCreateParams(e2)));
    }, t;
  }(ZodType);
  var ZodNumber = function(t) {
    function a() {
      var e = t !== null && t.apply(this, arguments) || this;
      return e.min = e.gte, e.max = e.lte, e.step = e.multipleOf, e;
    }
    return __extends(a, t), a.prototype._parse = function(e) {
      var t2, r, e = this._processInputParams(e), n = e.status, a2 = e.ctx;
      if (a2.parsedType !== ZodParsedType.number)
        return addIssueToContext(a2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.number, received: a2.parsedType }), INVALID;
      try {
        for (var o = __values(this._def.checks), s = o.next(); !s.done; s = o.next()) {
          var i = s.value;
          i.kind === "int" ? util.isInteger(a2.data) || (addIssueToContext(a2, { code: ZodIssueCode.invalid_type, expected: "integer", received: "float", message: i.message }), n.dirty()) : i.kind === "min" ? (i.inclusive ? a2.data < i.value : a2.data <= i.value) && (addIssueToContext(a2, { code: ZodIssueCode.too_small, minimum: i.value, type: "number", inclusive: i.inclusive, message: i.message }), n.dirty()) : i.kind === "max" ? (i.inclusive ? a2.data > i.value : a2.data >= i.value) && (addIssueToContext(a2, { code: ZodIssueCode.too_big, maximum: i.value, type: "number", inclusive: i.inclusive, message: i.message }), n.dirty()) : i.kind === "multipleOf" ? a2.data % i.value != 0 && (addIssueToContext(a2, { code: ZodIssueCode.not_multiple_of, multipleOf: i.value, message: i.message }), n.dirty()) : util.assertNever(i);
        }
      } catch (e2) {
        t2 = { error: e2 };
      } finally {
        try {
          s && !s.done && (r = o.return) && r.call(o);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return { status: n.value, value: a2.data };
    }, a.prototype.gte = function(e, t2) {
      return this.setLimit("min", e, true, errorUtil.toString(t2));
    }, a.prototype.gt = function(e, t2) {
      return this.setLimit("min", e, false, errorUtil.toString(t2));
    }, a.prototype.lte = function(e, t2) {
      return this.setLimit("max", e, true, errorUtil.toString(t2));
    }, a.prototype.lt = function(e, t2) {
      return this.setLimit("max", e, false, errorUtil.toString(t2));
    }, a.prototype.setLimit = function(e, t2, r, n) {
      return new a(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [{ kind: e, value: t2, inclusive: r, message: errorUtil.toString(n) }], false) }));
    }, a.prototype._addCheck = function(e) {
      return new a(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [e], false) }));
    }, a.prototype.int = function(e) {
      return this._addCheck({ kind: "int", message: errorUtil.toString(e) });
    }, a.prototype.positive = function(e) {
      return this._addCheck({ kind: "min", value: 0, inclusive: false, message: errorUtil.toString(e) });
    }, a.prototype.negative = function(e) {
      return this._addCheck({ kind: "max", value: 0, inclusive: false, message: errorUtil.toString(e) });
    }, a.prototype.nonpositive = function(e) {
      return this._addCheck({ kind: "max", value: 0, inclusive: true, message: errorUtil.toString(e) });
    }, a.prototype.nonnegative = function(e) {
      return this._addCheck({ kind: "min", value: 0, inclusive: true, message: errorUtil.toString(e) });
    }, a.prototype.multipleOf = function(e, t2) {
      return this._addCheck({ kind: "multipleOf", value: e, message: errorUtil.toString(t2) });
    }, Object.defineProperty(a.prototype, "minValue", { get: function() {
      var t2, e, r = null;
      try {
        for (var n = __values(this._def.checks), a2 = n.next(); !a2.done; a2 = n.next()) {
          var o = a2.value;
          o.kind === "min" && (r === null || o.value > r) && (r = o.value);
        }
      } catch (e2) {
        t2 = { error: e2 };
      } finally {
        try {
          a2 && !a2.done && (e = n.return) && e.call(n);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return r;
    }, enumerable: false, configurable: true }), Object.defineProperty(a.prototype, "maxValue", { get: function() {
      var t2, e, r = null;
      try {
        for (var n = __values(this._def.checks), a2 = n.next(); !a2.done; a2 = n.next()) {
          var o = a2.value;
          o.kind === "max" && (r === null || o.value < r) && (r = o.value);
        }
      } catch (e2) {
        t2 = { error: e2 };
      } finally {
        try {
          a2 && !a2.done && (e = n.return) && e.call(n);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return r;
    }, enumerable: false, configurable: true }), Object.defineProperty(a.prototype, "isInt", { get: function() {
      return !!this._def.checks.find(function(e) {
        return e.kind === "int";
      });
    }, enumerable: false, configurable: true }), a.create = function(e) {
      return new a(__assign(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodNumber }, processCreateParams(e)), processCreateParams(e)));
    }, a;
  }(ZodType);
  var ZodBigInt = function(e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(t, e), t.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return e2.parsedType !== ZodParsedType.bigint ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.bigint, received: e2.parsedType }), INVALID) : OK(e2.data);
    }, t.create = function(e2) {
      return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodBigInt }, processCreateParams(e2)));
    }, t;
  }(ZodType);
  var ZodBoolean = function(e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(t, e), t.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return e2.parsedType !== ZodParsedType.boolean ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.boolean, received: e2.parsedType }), INVALID) : OK(e2.data);
    }, t.create = function(e2) {
      return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodBoolean }, processCreateParams(e2)));
    }, t;
  }(ZodType);
  var ZodDate = function(e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(t, e), t.prototype._parse = function(e2) {
      var t2 = this._processInputParams(e2), e2 = t2.status, t2 = t2.ctx;
      return t2.parsedType !== ZodParsedType.date ? (addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.date, received: t2.parsedType }), INVALID) : isNaN(t2.data.getTime()) ? (addIssueToContext(t2, { code: ZodIssueCode.invalid_date }), INVALID) : { status: e2.value, value: new Date(t2.data.getTime()) };
    }, t.create = function(e2) {
      return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodDate }, processCreateParams(e2)));
    }, t;
  }(ZodType);
  var ZodUndefined = function(e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(t, e), t.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return e2.parsedType !== ZodParsedType.undefined ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.undefined, received: e2.parsedType }), INVALID) : OK(e2.data);
    }, t.create = function(e2) {
      return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodUndefined }, processCreateParams(e2)));
    }, t;
  }(ZodType);
  var ZodNull = function(e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(t, e), t.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return e2.parsedType !== ZodParsedType.null ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.null, received: e2.parsedType }), INVALID) : OK(e2.data);
    }, t.create = function(e2) {
      return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodNull }, processCreateParams(e2)));
    }, t;
  }(ZodType);
  var ZodAny = function(t) {
    function r() {
      var e = t !== null && t.apply(this, arguments) || this;
      return e._any = true, e;
    }
    return __extends(r, t), r.prototype._parse = function(e) {
      e = this._processInputParams(e).ctx;
      return OK(e.data);
    }, r.create = function(e) {
      return new r(__assign({ typeName: ZodFirstPartyTypeKind.ZodAny }, processCreateParams(e)));
    }, r;
  }(ZodType);
  var ZodUnknown = function(t) {
    function r() {
      var e = t !== null && t.apply(this, arguments) || this;
      return e._unknown = true, e;
    }
    return __extends(r, t), r.prototype._parse = function(e) {
      e = this._processInputParams(e).ctx;
      return OK(e.data);
    }, r.create = function(e) {
      return new r(__assign({ typeName: ZodFirstPartyTypeKind.ZodUnknown }, processCreateParams(e)));
    }, r;
  }(ZodType);
  var ZodNever = function(e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(t, e), t.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.never, received: e2.parsedType }), INVALID;
    }, t.create = function(e2) {
      return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodNever }, processCreateParams(e2)));
    }, t;
  }(ZodType);
  var ZodVoid = function(e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(t, e), t.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return e2.parsedType !== ZodParsedType.undefined ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.void, received: e2.parsedType }), INVALID) : OK(e2.data);
    }, t.create = function(e2) {
      return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodVoid }, processCreateParams(e2)));
    }, t;
  }(ZodType);
  var ZodArray = function(e) {
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(r, e), r.prototype._parse = function(e2) {
      var e2 = this._processInputParams(e2), t = e2.status, r2 = e2.ctx, n = this._def;
      if (r2.parsedType !== ZodParsedType.array)
        return addIssueToContext(r2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.array, received: r2.parsedType }), INVALID;
      if (n.minLength !== null && r2.data.length < n.minLength.value && (addIssueToContext(r2, { code: ZodIssueCode.too_small, minimum: n.minLength.value, type: "array", inclusive: true, message: n.minLength.message }), t.dirty()), n.maxLength !== null && r2.data.length > n.maxLength.value && (addIssueToContext(r2, { code: ZodIssueCode.too_big, maximum: n.maxLength.value, type: "array", inclusive: true, message: n.maxLength.message }), t.dirty()), r2.async)
        return Promise.all(r2.data.map(function(e3, t2) {
          return n.type._parseAsync({ parent: r2, path: __spreadArray(__spreadArray([], __read(r2.path), false), [t2], false), data: e3 });
        })).then(function(e3) {
          return ParseStatus.mergeArray(t, e3);
        });
      e2 = r2.data.map(function(e3, t2) {
        return n.type._parseSync({ parent: r2, path: __spreadArray(__spreadArray([], __read(r2.path), false), [t2], false), data: e3 });
      });
      return ParseStatus.mergeArray(t, e2);
    }, Object.defineProperty(r.prototype, "element", { get: function() {
      return this._def.type;
    }, enumerable: false, configurable: true }), r.prototype.min = function(e2, t) {
      return new r(__assign(__assign({}, this._def), { minLength: { value: e2, message: errorUtil.toString(t) } }));
    }, r.prototype.max = function(e2, t) {
      return new r(__assign(__assign({}, this._def), { maxLength: { value: e2, message: errorUtil.toString(t) } }));
    }, r.prototype.length = function(e2, t) {
      return this.min(e2, t).max(e2, t);
    }, r.prototype.nonempty = function(e2) {
      return this.min(1, e2);
    }, r.create = function(e2, t) {
      return new r(__assign({ type: e2, minLength: null, maxLength: null, typeName: ZodFirstPartyTypeKind.ZodArray }, processCreateParams(t)));
    }, r;
  }(ZodType);
  (objectUtil || (objectUtil = {})).mergeShapes = function(e, t) {
    return __assign(__assign({}, e), t);
  };
  var AugmentFactory = function(t) {
    return function(e) {
      return new ZodObject(__assign(__assign({}, t), { shape: function() {
        return __assign(__assign({}, t.shape()), e);
      } }));
    };
  };
  function deepPartialify(e) {
    if (e instanceof ZodObject) {
      var t, r = {};
      for (t in e.shape) {
        var n = e.shape[t];
        r[t] = ZodOptional.create(deepPartialify(n));
      }
      return new ZodObject(__assign(__assign({}, e._def), { shape: function() {
        return r;
      } }));
    }
    return e instanceof ZodArray ? ZodArray.create(deepPartialify(e.element)) : e instanceof ZodOptional ? ZodOptional.create(deepPartialify(e.unwrap())) : e instanceof ZodNullable ? ZodNullable.create(deepPartialify(e.unwrap())) : e instanceof ZodTuple ? ZodTuple.create(e.items.map(function(e2) {
      return deepPartialify(e2);
    })) : e;
  }
  var ZodObject = function(t) {
    function s() {
      var e = t !== null && t.apply(this, arguments) || this;
      return e._cached = null, e.nonstrict = e.passthrough, e.augment = AugmentFactory(e._def), e.extend = AugmentFactory(e._def), e;
    }
    return __extends(s, t), s.prototype._getCached = function() {
      if (this._cached !== null)
        return this._cached;
      var e = this._def.shape(), t2 = util.objectKeys(e);
      return this._cached = { shape: e, keys: t2 };
    }, s.prototype._parse = function(e) {
      var t2, r, n, a, o, s2 = this, i = this._processInputParams(e), u = i.status, d = i.ctx;
      if (d.parsedType !== ZodParsedType.object)
        return addIssueToContext(d, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.object, received: d.parsedType }), INVALID;
      var e = this._getCached(), p = e.shape, i = e.keys, e = util.objectKeys(d.data).filter(function(e2) {
        return !(e2 in p);
      }), c = [];
      try {
        for (var l = __values(i), y = l.next(); !y.done; y = l.next()) {
          var f = y.value, _ = p[f], h = d.data[f];
          c.push({ key: { status: "valid", value: f }, value: _._parse({ parent: d, data: h, path: __spreadArray(__spreadArray([], __read(d.path), false), [f], false) }), alwaysSet: f in d.data });
        }
      } catch (e2) {
        v = { error: e2 };
      } finally {
        try {
          y && !y.done && (t2 = l.return) && t2.call(l);
        } finally {
          if (v)
            throw v.error;
        }
      }
      if (this._def.catchall instanceof ZodNever) {
        var v = this._def.unknownKeys;
        if (v === "passthrough")
          try {
            for (var m = __values(e), Z = m.next(); !Z.done; Z = m.next()) {
              f = Z.value;
              c.push({ key: { status: "valid", value: f }, value: { status: "valid", value: d.data[f] } });
            }
          } catch (e2) {
            r = { error: e2 };
          } finally {
            try {
              Z && !Z.done && (n = m.return) && n.call(m);
            } finally {
              if (r)
                throw r.error;
            }
          }
        else if (v === "strict")
          0 < e.length && (addIssueToContext(d, { code: ZodIssueCode.unrecognized_keys, keys: e }), u.dirty());
        else if (v !== "strip")
          throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      } else {
        var g = this._def.catchall;
        try {
          for (var T = __values(e), b = T.next(); !b.done; b = T.next()) {
            f = b.value, h = d.data[f];
            c.push({ key: { status: "valid", value: f }, value: g._parse({ parent: d, path: __spreadArray(__spreadArray([], __read(d.path), false), [f], false), data: h }), alwaysSet: f in d.data });
          }
        } catch (e2) {
          a = { error: e2 };
        } finally {
          try {
            b && !b.done && (o = T.return) && o.call(T);
          } finally {
            if (a)
              throw a.error;
          }
        }
      }
      return d.async ? Promise.resolve().then(function() {
        return __awaiter(s2, void 0, void 0, function() {
          var t3, r2, n2, a2, o2, s3, i2, u2, d2;
          return __generator(this, function(e2) {
            switch (e2.label) {
              case 0:
                t3 = [], e2.label = 1;
              case 1:
                e2.trys.push([1, 7, 8, 9]), r2 = __values(c), n2 = r2.next(), e2.label = 2;
              case 2:
                return n2.done ? [3, 6] : [4, (a2 = n2.value).key];
              case 3:
                return d2 = e2.sent(), s3 = (o2 = t3).push, d2 = { key: d2 }, [4, a2.value];
              case 4:
                s3.apply(o2, [(d2.value = e2.sent(), d2.alwaysSet = a2.alwaysSet, d2)]), e2.label = 5;
              case 5:
                return n2 = r2.next(), [3, 2];
              case 6:
                return [3, 9];
              case 7:
                return i2 = e2.sent(), i2 = { error: i2 }, [3, 9];
              case 8:
                try {
                  n2 && !n2.done && (u2 = r2.return) && u2.call(r2);
                } finally {
                  if (i2)
                    throw i2.error;
                }
                return [7];
              case 9:
                return [2, t3];
            }
          });
        });
      }).then(function(e2) {
        return ParseStatus.mergeObjectSync(u, e2);
      }) : ParseStatus.mergeObjectSync(u, c);
    }, Object.defineProperty(s.prototype, "shape", { get: function() {
      return this._def.shape();
    }, enumerable: false, configurable: true }), s.prototype.strict = function(a) {
      var o = this;
      return errorUtil.errToObj, new s(__assign(__assign(__assign({}, this._def), { unknownKeys: "strict" }), a !== void 0 ? { errorMap: function(e, t2) {
        var r, n, t2 = (n = (r = (n = o._def).errorMap) === null || r === void 0 ? void 0 : r.call(n, e, t2).message) !== null && n !== void 0 ? n : t2.defaultError;
        return e.code === "unrecognized_keys" ? { message: (e = errorUtil.errToObj(a).message) !== null && e !== void 0 ? e : t2 } : { message: t2 };
      } } : {}));
    }, s.prototype.strip = function() {
      return new s(__assign(__assign({}, this._def), { unknownKeys: "strip" }));
    }, s.prototype.passthrough = function() {
      return new s(__assign(__assign({}, this._def), { unknownKeys: "passthrough" }));
    }, s.prototype.setKey = function(e, t2) {
      var r;
      return this.augment(((r = {})[e] = t2, r));
    }, s.prototype.merge = function(e) {
      var t2 = objectUtil.mergeShapes(this._def.shape(), e._def.shape());
      return new s({ unknownKeys: e._def.unknownKeys, catchall: e._def.catchall, shape: function() {
        return t2;
      }, typeName: ZodFirstPartyTypeKind.ZodObject });
    }, s.prototype.catchall = function(e) {
      return new s(__assign(__assign({}, this._def), { catchall: e }));
    }, s.prototype.pick = function(e) {
      var t2 = this, r = {};
      return util.objectKeys(e).map(function(e2) {
        r[e2] = t2.shape[e2];
      }), new s(__assign(__assign({}, this._def), { shape: function() {
        return r;
      } }));
    }, s.prototype.omit = function(t2) {
      var r = this, n = {};
      return util.objectKeys(this.shape).map(function(e) {
        util.objectKeys(t2).indexOf(e) === -1 && (n[e] = r.shape[e]);
      }), new s(__assign(__assign({}, this._def), { shape: function() {
        return n;
      } }));
    }, s.prototype.deepPartial = function() {
      return deepPartialify(this);
    }, s.prototype.partial = function(t2) {
      var e, r = this, n = {};
      if (t2)
        return util.objectKeys(this.shape).map(function(e2) {
          util.objectKeys(t2).indexOf(e2) === -1 ? n[e2] = r.shape[e2] : n[e2] = r.shape[e2].optional();
        }), new s(__assign(__assign({}, this._def), { shape: function() {
          return n;
        } }));
      for (e in this.shape) {
        var a = this.shape[e];
        n[e] = a.optional();
      }
      return new s(__assign(__assign({}, this._def), { shape: function() {
        return n;
      } }));
    }, s.prototype.required = function() {
      var e, t2 = {};
      for (e in this.shape) {
        for (var r = this.shape[e]; r instanceof ZodOptional; )
          r = r._def.innerType;
        t2[e] = r;
      }
      return new s(__assign(__assign({}, this._def), { shape: function() {
        return t2;
      } }));
    }, s.create = function(e, t2) {
      return new s(__assign({ shape: function() {
        return e;
      }, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(t2)));
    }, s.strictCreate = function(e, t2) {
      return new s(__assign({ shape: function() {
        return e;
      }, unknownKeys: "strict", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(t2)));
    }, s.lazycreate = function(e, t2) {
      return new s(__assign({ shape: e, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(t2)));
    }, s;
  }(ZodType);
  var ZodUnion = function(e) {
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(r, e), r.prototype._parse = function(e2) {
      var t = this, c = this._processInputParams(e2).ctx, e2 = this._def.options;
      function r2(e3) {
        var t2, r3, n, a, o;
        try {
          for (var s = __values(e3), i = s.next(); !i.done; i = s.next())
            if ((u = i.value).result.status === "valid")
              return u.result;
        } catch (e4) {
          t2 = { error: e4 };
        } finally {
          try {
            i && !i.done && (r3 = s.return) && r3.call(s);
          } finally {
            if (t2)
              throw t2.error;
          }
        }
        try {
          for (var u, d = __values(e3), p = d.next(); !p.done; p = d.next())
            if ((u = p.value).result.status === "dirty")
              return (o = c.issues).push.apply(o, __spreadArray([], __read(u.ctx.issues), false)), u.result;
        } catch (e4) {
          n = { error: e4 };
        } finally {
          try {
            p && !p.done && (a = d.return) && a.call(d);
          } finally {
            if (n)
              throw n.error;
          }
        }
        e3 = e3.map(function(e4) {
          return new ZodError(e4.ctx.issues);
        });
        return addIssueToContext(c, { code: ZodIssueCode.invalid_union, unionErrors: e3 }), INVALID;
      }
      return c.async ? Promise.all(e2.map(function(n) {
        return __awaiter(t, void 0, void 0, function() {
          var t2, r3;
          return __generator(this, function(e3) {
            switch (e3.label) {
              case 0:
                return t2 = __assign(__assign({}, c), { issues: [], parent: null }), r3 = {}, [4, n._parseAsync({ data: c.data, path: c.path, parent: t2 })];
              case 1:
                return [2, (r3.result = e3.sent(), r3.ctx = t2, r3)];
            }
          });
        });
      })).then(r2) : r2(e2.map(function(e3) {
        var t2 = __assign(__assign({}, c), { issues: [], parent: null });
        return { result: e3._parseSync({ data: c.data, path: c.path, parent: t2 }), ctx: t2 };
      }));
    }, Object.defineProperty(r.prototype, "options", { get: function() {
      return this._def.options;
    }, enumerable: false, configurable: true }), r.create = function(e2, t) {
      return new r(__assign({ options: e2, typeName: ZodFirstPartyTypeKind.ZodUnion }, processCreateParams(t)));
    }, r;
  }(ZodType);
  function mergeValues(e, t) {
    var r, n, a = getParsedType(e), o = getParsedType(t);
    if (e === t)
      return { valid: true, data: e };
    if (a === ZodParsedType.object && o === ZodParsedType.object) {
      var s = util.objectKeys(t), i = util.objectKeys(e).filter(function(e2) {
        return s.indexOf(e2) !== -1;
      }), u = __assign(__assign({}, e), t);
      try {
        for (var d = __values(i), p = d.next(); !p.done; p = d.next()) {
          var c = p.value;
          if (!(l = mergeValues(e[c], t[c])).valid)
            return { valid: false };
          u[c] = l.data;
        }
      } catch (e2) {
        r = { error: e2 };
      } finally {
        try {
          p && !p.done && (n = d.return) && n.call(d);
        } finally {
          if (r)
            throw r.error;
        }
      }
      return { valid: true, data: u };
    }
    if (a !== ZodParsedType.array || o !== ZodParsedType.array)
      return { valid: false };
    if (e.length !== t.length)
      return { valid: false };
    for (var l, y = [], f = 0; f < e.length; f++) {
      if (!(l = mergeValues(e[f], t[f])).valid)
        return { valid: false };
      y.push(l.data);
    }
    return { valid: true, data: y };
  }
  var ZodIntersection = function(e) {
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype._parse = function(e2) {
      function r(e3, t) {
        if (isAborted(e3) || isAborted(t))
          return INVALID;
        var r2 = mergeValues(e3.value, t.value);
        return r2.valid ? ((isDirty(e3) || isDirty(t)) && n2.dirty(), { status: n2.value, value: r2.data }) : (addIssueToContext(a, { code: ZodIssueCode.invalid_intersection_types }), INVALID);
      }
      var e2 = this._processInputParams(e2), n2 = e2.status, a = e2.ctx;
      return a.async ? Promise.all([this._def.left._parseAsync({ data: a.data, path: a.path, parent: a }), this._def.right._parseAsync({ data: a.data, path: a.path, parent: a })]).then(function(e3) {
        var t = __read(e3, 2), e3 = t[0], t = t[1];
        return r(e3, t);
      }) : r(this._def.left._parseSync({ data: a.data, path: a.path, parent: a }), this._def.right._parseSync({ data: a.data, path: a.path, parent: a }));
    }, n.create = function(e2, t, r) {
      return new n(__assign({ left: e2, right: t, typeName: ZodFirstPartyTypeKind.ZodIntersection }, processCreateParams(r)));
    }, n;
  }(ZodType);
  var ZodTuple = function(e) {
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(r, e), r.prototype._parse = function(e2) {
      var n = this, e2 = this._processInputParams(e2), t = e2.status, a = e2.ctx;
      if (a.parsedType !== ZodParsedType.array)
        return addIssueToContext(a, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.array, received: a.parsedType }), INVALID;
      if (a.data.length < this._def.items.length)
        return addIssueToContext(a, { code: ZodIssueCode.too_small, minimum: this._def.items.length, inclusive: true, type: "array" }), INVALID;
      !this._def.rest && a.data.length > this._def.items.length && (addIssueToContext(a, { code: ZodIssueCode.too_big, maximum: this._def.items.length, inclusive: true, type: "array" }), t.dirty());
      e2 = a.data.map(function(e3, t2) {
        var r2 = n._def.items[t2] || n._def.rest;
        return r2 ? r2._parse({ data: e3, path: __spreadArray(__spreadArray([], __read(a.path), false), [t2], false), parent: a }) : null;
      }).filter(function(e3) {
        return !!e3;
      });
      return a.async ? Promise.all(e2).then(function(e3) {
        return ParseStatus.mergeArray(t, e3);
      }) : ParseStatus.mergeArray(t, e2);
    }, Object.defineProperty(r.prototype, "items", { get: function() {
      return this._def.items;
    }, enumerable: false, configurable: true }), r.prototype.rest = function(e2) {
      return new r(__assign(__assign({}, this._def), { rest: e2 }));
    }, r.create = function(e2, t) {
      return new r(__assign({ items: e2, typeName: ZodFirstPartyTypeKind.ZodTuple, rest: null }, processCreateParams(t)));
    }, r;
  }(ZodType);
  var ZodRecord = function(e) {
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "keySchema", { get: function() {
      return this._def.keyType;
    }, enumerable: false, configurable: true }), Object.defineProperty(n.prototype, "valueSchema", { get: function() {
      return this._def.valueType;
    }, enumerable: false, configurable: true }), n.prototype._parse = function(e2) {
      var t = this._processInputParams(e2), e2 = t.status, r = t.ctx;
      if (r.parsedType !== ZodParsedType.object)
        return addIssueToContext(r, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.object, received: r.parsedType }), INVALID;
      var n2, a = [], o = this._def.keyType, s = this._def.valueType;
      for (n2 in r.data)
        a.push({ key: o._parse({ data: n2, path: __spreadArray(__spreadArray([], __read(r.path), false), [n2], false), parent: r }), value: s._parse({ data: r.data[n2], path: __spreadArray(__spreadArray([], __read(r.path), false), [n2], false), parent: r }) });
      return r.async ? ParseStatus.mergeObjectAsync(e2, a) : ParseStatus.mergeObjectSync(e2, a);
    }, Object.defineProperty(n.prototype, "element", { get: function() {
      return this._def.valueType;
    }, enumerable: false, configurable: true }), n.create = function(e2, t, r) {
      return new n(t instanceof ZodType ? __assign({ keyType: e2, valueType: t, typeName: ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(r)) : __assign({ keyType: ZodString.create(), valueType: e2, typeName: ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(t)));
    }, n;
  }(ZodType);
  var ZodMap = function(e) {
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype._parse = function(e2) {
      var t, r, n2 = this, e2 = this._processInputParams(e2), u = e2.status, a = e2.ctx;
      if (a.parsedType !== ZodParsedType.map)
        return addIssueToContext(a, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.map, received: a.parsedType }), INVALID;
      var o = this._def.keyType, s = this._def.valueType, d = __spreadArray([], __read(a.data.entries()), false).map(function(e3, t2) {
        var r2 = __read(e3, 2), e3 = r2[0], r2 = r2[1];
        return { key: o._parse({ data: e3, path: __spreadArray(__spreadArray([], __read(a.path), false), [t2, "key"], false), parent: a }), value: s._parse({ data: r2, path: __spreadArray(__spreadArray([], __read(a.path), false), [t2, "value"], false), parent: a }) };
      });
      if (a.async) {
        var p = new Map();
        return Promise.resolve().then(function() {
          return __awaiter(n2, void 0, void 0, function() {
            var t2, r2, n3, a2, o2, s2, i2;
            return __generator(this, function(e3) {
              switch (e3.label) {
                case 0:
                  e3.trys.push([0, 6, 7, 8]), t2 = __values(d), r2 = t2.next(), e3.label = 1;
                case 1:
                  return r2.done ? [3, 5] : [4, (n3 = r2.value).key];
                case 2:
                  return a2 = e3.sent(), [4, n3.value];
                case 3:
                  if (o2 = e3.sent(), a2.status === "aborted" || o2.status === "aborted")
                    return [2, INVALID];
                  a2.status !== "dirty" && o2.status !== "dirty" || u.dirty(), p.set(a2.value, o2.value), e3.label = 4;
                case 4:
                  return r2 = t2.next(), [3, 1];
                case 5:
                  return [3, 8];
                case 6:
                  return s2 = e3.sent(), s2 = { error: s2 }, [3, 8];
                case 7:
                  try {
                    r2 && !r2.done && (i2 = t2.return) && i2.call(t2);
                  } finally {
                    if (s2)
                      throw s2.error;
                  }
                  return [7];
                case 8:
                  return [2, { status: u.value, value: p }];
              }
            });
          });
        });
      }
      var i = new Map();
      try {
        for (var c = __values(d), l = c.next(); !l.done; l = c.next()) {
          var y = l.value, f = y.key, _ = y.value;
          if (f.status === "aborted" || _.status === "aborted")
            return INVALID;
          f.status !== "dirty" && _.status !== "dirty" || u.dirty(), i.set(f.value, _.value);
        }
      } catch (e3) {
        t = { error: e3 };
      } finally {
        try {
          l && !l.done && (r = c.return) && r.call(c);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return { status: u.value, value: i };
    }, n.create = function(e2, t, r) {
      return new n(__assign({ valueType: t, keyType: e2, typeName: ZodFirstPartyTypeKind.ZodMap }, processCreateParams(r)));
    }, n;
  }(ZodType);
  var ZodSet = function(e) {
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(r, e), r.prototype._parse = function(e2) {
      var e2 = this._processInputParams(e2), i = e2.status, r2 = e2.ctx;
      if (r2.parsedType !== ZodParsedType.set)
        return addIssueToContext(r2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.set, received: r2.parsedType }), INVALID;
      var n = this._def.valueType;
      function t(e3) {
        var t2, r3, n2 = new Set();
        try {
          for (var a = __values(e3), o = a.next(); !o.done; o = a.next()) {
            var s = o.value;
            if (s.status === "aborted")
              return INVALID;
            s.status === "dirty" && i.dirty(), n2.add(s.value);
          }
        } catch (e4) {
          t2 = { error: e4 };
        } finally {
          try {
            o && !o.done && (r3 = a.return) && r3.call(a);
          } finally {
            if (t2)
              throw t2.error;
          }
        }
        return { status: i.value, value: n2 };
      }
      e2 = __spreadArray([], __read(r2.data.values()), false).map(function(e3, t2) {
        return n._parse({ data: e3, path: __spreadArray(__spreadArray([], __read(r2.path), false), [t2], false), parent: r2 });
      });
      return r2.async ? Promise.all(e2).then(t) : t(e2);
    }, r.create = function(e2, t) {
      return new r(__assign({ valueType: e2, typeName: ZodFirstPartyTypeKind.ZodSet }, processCreateParams(t)));
    }, r;
  }(ZodType);
  var ZodFunction = function(t) {
    function n() {
      var e = t !== null && t.apply(this, arguments) || this;
      return e.validate = e.implement, e;
    }
    return __extends(n, t), n.prototype._parse = function(e) {
      var o = this, r = this._processInputParams(e).ctx;
      if (r.parsedType !== ZodParsedType.function)
        return addIssueToContext(r, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.function, received: r.parsedType }), INVALID;
      function s(e2, t2) {
        return makeIssue({ data: e2, path: r.path, errorMaps: [r.contextualErrorMap, r.schemaErrorMap, overrideErrorMap, defaultErrorMap].filter(function(e3) {
          return !!e3;
        }), issueData: { code: ZodIssueCode.invalid_arguments, argumentsError: t2 } });
      }
      function i(e2, t2) {
        return makeIssue({ data: e2, path: r.path, errorMaps: [r.contextualErrorMap, r.schemaErrorMap, overrideErrorMap, defaultErrorMap].filter(function(e3) {
          return !!e3;
        }), issueData: { code: ZodIssueCode.invalid_return_type, returnTypeError: t2 } });
      }
      var u = { errorMap: r.contextualErrorMap }, d = r.data;
      return this._def.returns instanceof ZodPromise ? OK(function() {
        for (var a = [], e2 = 0; e2 < arguments.length; e2++)
          a[e2] = arguments[e2];
        return __awaiter(o, void 0, void 0, function() {
          var t2, r2, n2;
          return __generator(this, function(e3) {
            switch (e3.label) {
              case 0:
                return t2 = new ZodError([]), [4, this._def.args.parseAsync(a, u).catch(function(e4) {
                  throw t2.addIssue(s(a, e4)), t2;
                })];
              case 1:
                return r2 = e3.sent(), [4, d.apply(void 0, __spreadArray([], __read(r2), false))];
              case 2:
                return n2 = e3.sent(), [4, this._def.returns._def.type.parseAsync(n2, u).catch(function(e4) {
                  throw t2.addIssue(i(n2, e4)), t2;
                })];
              case 3:
                return [2, e3.sent()];
            }
          });
        });
      }) : OK(function() {
        for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
          e2[t2] = arguments[t2];
        var r2 = o._def.args.safeParse(e2, u);
        if (!r2.success)
          throw new ZodError([s(e2, r2.error)]);
        var n2 = d.apply(void 0, __spreadArray([], __read(r2.data), false)), r2 = o._def.returns.safeParse(n2, u);
        if (!r2.success)
          throw new ZodError([i(n2, r2.error)]);
        return r2.data;
      });
    }, n.prototype.parameters = function() {
      return this._def.args;
    }, n.prototype.returnType = function() {
      return this._def.returns;
    }, n.prototype.args = function() {
      for (var e = [], t2 = 0; t2 < arguments.length; t2++)
        e[t2] = arguments[t2];
      return new n(__assign(__assign({}, this._def), { args: ZodTuple.create(e).rest(ZodUnknown.create()) }));
    }, n.prototype.returns = function(e) {
      return new n(__assign(__assign({}, this._def), { returns: e }));
    }, n.prototype.implement = function(e) {
      return this.parse(e);
    }, n.prototype.strictImplement = function(e) {
      return this.parse(e);
    }, n.create = function(e, t2, r) {
      return new n(__assign({ args: (e || ZodTuple.create([])).rest(ZodUnknown.create()), returns: t2 || ZodUnknown.create(), typeName: ZodFirstPartyTypeKind.ZodFunction }, processCreateParams(r)));
    }, n;
  }(ZodType);
  var ZodLazy = function(e) {
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(r, e), Object.defineProperty(r.prototype, "schema", { get: function() {
      return this._def.getter();
    }, enumerable: false, configurable: true }), r.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return this._def.getter()._parse({ data: e2.data, path: e2.path, parent: e2 });
    }, r.create = function(e2, t) {
      return new r(__assign({ getter: e2, typeName: ZodFirstPartyTypeKind.ZodLazy }, processCreateParams(t)));
    }, r;
  }(ZodType);
  var ZodLiteral = function(e) {
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(r, e), r.prototype._parse = function(e2) {
      var t = this._processInputParams(e2), e2 = t.status, t = t.ctx;
      return t.data !== this._def.value ? (addIssueToContext(t, { code: ZodIssueCode.invalid_type, expected: this._def.value, received: t.data }), INVALID) : { status: e2.value, value: t.data };
    }, Object.defineProperty(r.prototype, "value", { get: function() {
      return this._def.value;
    }, enumerable: false, configurable: true }), r.create = function(e2, t) {
      return new r(__assign({ value: e2, typeName: ZodFirstPartyTypeKind.ZodLiteral }, processCreateParams(t)));
    }, r;
  }(ZodType);
  function createZodEnum(e) {
    return new ZodEnum({ values: e, typeName: ZodFirstPartyTypeKind.ZodEnum });
  }
  var ZodFirstPartyTypeKind;
  var ZodEnum = function(e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(t, e), t.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return this._def.values.indexOf(e2.data) === -1 ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_enum_value, options: this._def.values }), INVALID) : OK(e2.data);
    }, Object.defineProperty(t.prototype, "options", { get: function() {
      return this._def.values;
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "enum", { get: function() {
      var t2, e2, r = {};
      try {
        for (var n = __values(this._def.values), a = n.next(); !a.done; a = n.next()) {
          var o = a.value;
          r[o] = o;
        }
      } catch (e3) {
        t2 = { error: e3 };
      } finally {
        try {
          a && !a.done && (e2 = n.return) && e2.call(n);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return r;
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "Values", { get: function() {
      var t2, e2, r = {};
      try {
        for (var n = __values(this._def.values), a = n.next(); !a.done; a = n.next()) {
          var o = a.value;
          r[o] = o;
        }
      } catch (e3) {
        t2 = { error: e3 };
      } finally {
        try {
          a && !a.done && (e2 = n.return) && e2.call(n);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return r;
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "Enum", { get: function() {
      var t2, e2, r = {};
      try {
        for (var n = __values(this._def.values), a = n.next(); !a.done; a = n.next()) {
          var o = a.value;
          r[o] = o;
        }
      } catch (e3) {
        t2 = { error: e3 };
      } finally {
        try {
          a && !a.done && (e2 = n.return) && e2.call(n);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return r;
    }, enumerable: false, configurable: true }), t.create = createZodEnum, t;
  }(ZodType);
  var ZodNativeEnum = function(e) {
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(r, e), r.prototype._parse = function(e2) {
      var t = this._processInputParams(e2).ctx, e2 = util.getValidEnumValues(this._def.values);
      return e2.indexOf(t.data) === -1 ? (addIssueToContext(t, { code: ZodIssueCode.invalid_enum_value, options: util.objectValues(e2) }), INVALID) : OK(t.data);
    }, r.create = function(e2, t) {
      return new r(__assign({ values: e2, typeName: ZodFirstPartyTypeKind.ZodNativeEnum }, processCreateParams(t)));
    }, r;
  }(ZodType);
  var ZodPromise = function(e) {
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(r, e), r.prototype._parse = function(e2) {
      var t = this, r2 = this._processInputParams(e2).ctx;
      if (r2.parsedType !== ZodParsedType.promise && r2.async === false)
        return addIssueToContext(r2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.promise, received: r2.parsedType }), INVALID;
      e2 = r2.parsedType === ZodParsedType.promise ? r2.data : Promise.resolve(r2.data);
      return OK(e2.then(function(e3) {
        return t._def.type.parseAsync(e3, { path: r2.path, errorMap: r2.contextualErrorMap });
      }));
    }, r.create = function(e2, t) {
      return new r(__assign({ type: e2, typeName: ZodFirstPartyTypeKind.ZodPromise }, processCreateParams(t)));
    }, r;
  }(ZodType);
  var ZodEffects = function(e) {
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.innerType = function() {
      return this._def.schema;
    }, n.prototype._parse = function(e2) {
      var t = this, e2 = this._processInputParams(e2), r = e2.status, n2 = e2.ctx, a = this._def.effect || null;
      if (a.type === "preprocess") {
        e2 = a.transform(n2.data);
        return n2.async ? Promise.resolve(e2).then(function(e3) {
          return t._def.schema._parseAsync({ data: e3, path: n2.path, parent: n2 });
        }) : this._def.schema._parseSync({ data: e2, path: n2.path, parent: n2 });
      }
      if (a.type === "refinement") {
        let s = function(e3) {
          var t2 = a.refinement(e3, o);
          if (n2.async)
            return Promise.resolve(t2);
          if (t2 instanceof Promise)
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          return e3;
        };
        var o = { addIssue: function(e3) {
          addIssueToContext(n2, e3), e3.fatal ? r.abort() : r.dirty();
        }, get path() {
          return n2.path;
        } };
        o.addIssue = o.addIssue.bind(o);
        if (n2.async !== false)
          return this._def.schema._parseAsync({ data: n2.data, path: n2.path, parent: n2 }).then(function(e3) {
            return e3.status === "aborted" ? INVALID : (e3.status === "dirty" && r.dirty(), s(e3.value).then(function() {
              return { status: r.value, value: e3.value };
            }));
          });
        var i = this._def.schema._parseSync({ data: n2.data, path: n2.path, parent: n2 });
        return i.status === "aborted" ? INVALID : (i.status === "dirty" && r.dirty(), s(i.value), { status: r.value, value: i.value });
      }
      if (a.type === "transform") {
        if (n2.async !== false)
          return this._def.schema._parseAsync({ data: n2.data, path: n2.path, parent: n2 }).then(function(e3) {
            return isValid(e3) ? Promise.resolve(a.transform(e3.value)).then(OK) : e3;
          });
        i = this._def.schema._parseSync({ data: n2.data, path: n2.path, parent: n2 });
        if (!isValid(i))
          return i;
        i = a.transform(i.value);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return OK(i);
      }
      util.assertNever(a);
    }, n.create = function(e2, t, r) {
      return new n(__assign({ schema: e2, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: t }, processCreateParams(r)));
    }, n.createWithPreprocess = function(e2, t, r) {
      return new n(__assign({ schema: t, effect: { type: "preprocess", transform: e2 }, typeName: ZodFirstPartyTypeKind.ZodEffects }, processCreateParams(r)));
    }, n;
  }(ZodType);
  var ZodOptional = function(e) {
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(r, e), r.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return e2.parsedType === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse({ data: e2.data, path: e2.path, parent: e2 });
    }, r.prototype.unwrap = function() {
      return this._def.innerType;
    }, r.create = function(e2, t) {
      return new r(__assign({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(t)));
    }, r;
  }(ZodType);
  var ZodNullable = function(e) {
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(r, e), r.prototype._parse = function(e2) {
      e2 = this._processInputParams(e2).ctx;
      return e2.parsedType === ZodParsedType.null ? OK(null) : this._def.innerType._parse({ data: e2.data, path: e2.path, parent: e2 });
    }, r.prototype.unwrap = function() {
      return this._def.innerType;
    }, r.create = function(e2, t) {
      return new r(__assign({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodNullable }, processCreateParams(t)));
    }, r;
  }(ZodType);
  var ZodDefault = function(e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return __extends(t, e), t.prototype._parse = function(e2) {
      var t2 = this._processInputParams(e2).ctx, e2 = t2.data;
      return t2.parsedType === ZodParsedType.undefined && (e2 = this._def.defaultValue()), this._def.innerType._parse({ data: e2, path: t2.path, parent: t2 });
    }, t.prototype.removeDefault = function() {
      return this._def.innerType;
    }, t.create = function(e2, t2) {
      return new ZodOptional(__assign({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(t2)));
    }, t;
  }(ZodType);
  var custom = function(e, t) {
    return e ? ZodAny.create().refine(e, t) : ZodAny.create();
  };
  var late = { object: ZodObject.lazycreate };
  !function(e) {
    e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodPromise = "ZodPromise";
  }(ZodFirstPartyTypeKind = ZodFirstPartyTypeKind || {});
  var instanceOfType = function(t, e) {
    return e === void 0 && (e = { message: "Input not instance of " + t.name }), custom(function(e2) {
      return e2 instanceof t;
    }, e);
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

  // src/blocks/example-folder-block/index.tsx
  function Block(props) {
    useTailwindCdn();
    return /* @__PURE__ */ React.createElement("div", {
      className: "p-8"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "text-sm text-gray-600"
    }, "This is the folder content."), /* @__PURE__ */ React.createElement("div", {
      className: "mt-2 borderborder-gray-200"
    }, /* @__PURE__ */ React.createElement("table", {
      className: "w-full divide-y divide-gray-200"
    }, /* @__PURE__ */ React.createElement("thead", {
      className: "bg-gray-50"
    }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
      className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    }, "Path"), /* @__PURE__ */ React.createElement("th", {
      className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    }, "Size"), /* @__PURE__ */ React.createElement("th", {
      className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    }, "Type"))), /* @__PURE__ */ React.createElement("tbody", null, props.tree.map((item, index) => /* @__PURE__ */ React.createElement("tr", {
      className: "even:bg-gray-50 odd:bg-white",
      key: index
    }, /* @__PURE__ */ React.createElement("td", {
      className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
    }, item.path), /* @__PURE__ */ React.createElement("td", {
      className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
    }, item.size), /* @__PURE__ */ React.createElement("td", {
      className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
    }, item.type)))))));
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
