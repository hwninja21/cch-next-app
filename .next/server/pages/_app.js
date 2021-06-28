module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/authContext/index.js":
/*!***************************************!*\
  !*** ./contexts/authContext/index.js ***!
  \***************************************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/firebaseClient */ "./firebase/firebaseClient.js");

var _jsxFileName = "C:\\Users\\admin\\Downloads\\cchproject-main 2\\cchproject-main\\contexts\\authContext\\index.js";



const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  user: null
});
function AuthProvider({
  children
}) {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); // handle auth logic here...

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    return _firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_3__["firebaseClient"].auth().onIdTokenChanged(async user => {
      if (!user) {
        setUser(null);
        nookies__WEBPACK_IMPORTED_MODULE_2___default.a.set(undefined, 'token', '', {
          path: '/'
        });
      } else {
        const {
          uid,
          email
        } = user;

        if (email) {
          const token = await user.getIdToken();
          setUser(user);
          nookies__WEBPACK_IMPORTED_MODULE_2___default.a.set(undefined, 'token', token, {
            path: '/'
          });
        } else {
          setUser(null);
          nookies__WEBPACK_IMPORTED_MODULE_2___default.a.set(undefined, 'token', '', {
            path: '/'
          });
        }
      }
    });
  }, []); // force refresh the token every 10 minutes

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const handle = setInterval(async () => {
      const user = _firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_3__["firebaseClient"].auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000); // clean up setInterval

    return () => clearInterval(handle);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      user
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
}
const useAuth = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthContext);
};

/***/ }),

/***/ "./firebase/firebaseClient.js":
/*!************************************!*\
  !*** ./firebase/firebaseClient.js ***!
  \************************************/
/*! exports provided: firebaseClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebaseClient", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);




/*

Copy/paste your *client-side* Firebase credentials below. 

To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.

*/

const CLIENT_CONFIG = {
  apiKey: "AIzaSyBWo2ksPDyYd22P09oZmntQqhEQtchhxGg",
  authDomain: "cachyio.firebaseapp.com",
  projectId: "cachyio",
  storageBucket: "cachyio.appspot.com",
  messagingSenderId: "693562396153",
  appId: "1:693562396153:web:087575ebf854da0f130128",
  measurementId: "G-0FFP7YR9W3"
};

if (false) {}



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/authContext */ "./contexts/authContext/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\admin\\Downloads\\cchproject-main 2\\cchproject-main\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_authContext__WEBPACK_IMPORTED_MODULE_1__["AuthProvider"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dHMvYXV0aENvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UvZmlyZWJhc2VDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2V0VXNlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZWJhc2VDbGllbnQiLCJhdXRoIiwib25JZFRva2VuQ2hhbmdlZCIsIm5vb2tpZXMiLCJzZXQiLCJ1bmRlZmluZWQiLCJwYXRoIiwidWlkIiwiZW1haWwiLCJ0b2tlbiIsImdldElkVG9rZW4iLCJoYW5kbGUiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRVc2VyIiwiY2xlYXJJbnRlcnZhbCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwiQ0xJRU5UX0NPTkZJRyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDO0FBQzlCQyxNQUFJLEVBQUU7QUFEd0IsQ0FBRCxDQUFqQztBQUlPLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUFvQztBQUN2QyxRQUFNO0FBQUEsT0FBQ0YsSUFBRDtBQUFBLE9BQU9HO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsSUFBRCxDQUFoQyxDQUR1QyxDQUd2Qzs7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1osV0FBT0MsdUVBQWMsQ0FBQ0MsSUFBZixHQUFzQkMsZ0JBQXRCLENBQXVDLE1BQU9SLElBQVAsSUFBZ0I7QUFDMUQsVUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUEcsZUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBTSxzREFBTyxDQUFDQyxHQUFSLENBQVlDLFNBQVosRUFBdUIsT0FBdkIsRUFBZ0MsRUFBaEMsRUFBb0M7QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBcEM7QUFDSCxPQUhELE1BR087QUFDSCxjQUFNO0FBQUVDLGFBQUY7QUFBT0M7QUFBUCxZQUFpQmQsSUFBdkI7O0FBRUEsWUFBSWMsS0FBSixFQUFXO0FBQ1AsZ0JBQU1DLEtBQUssR0FBRyxNQUFNZixJQUFJLENBQUNnQixVQUFMLEVBQXBCO0FBQ0FiLGlCQUFPLENBQUNILElBQUQsQ0FBUDtBQUNBUyx3REFBTyxDQUFDQyxHQUFSLENBQVlDLFNBQVosRUFBdUIsT0FBdkIsRUFBZ0NJLEtBQWhDLEVBQXVDO0FBQUVILGdCQUFJLEVBQUU7QUFBUixXQUF2QztBQUNILFNBSkQsTUFJTztBQUNIVCxpQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBTSx3REFBTyxDQUFDQyxHQUFSLENBQVlDLFNBQVosRUFBdUIsT0FBdkIsRUFBZ0MsRUFBaEMsRUFBb0M7QUFBRUMsZ0JBQUksRUFBRTtBQUFSLFdBQXBDO0FBQ0g7QUFDSjtBQUNKLEtBaEJNLENBQVA7QUFpQkgsR0FsQlEsRUFrQk4sRUFsQk0sQ0FBVCxDQUp1QyxDQXdCdkM7O0FBQ0FQLHlEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1ZLE1BQU0sR0FBR0MsV0FBVyxDQUFDLFlBQVk7QUFDbkMsWUFBTWxCLElBQUksR0FBR00sdUVBQWMsQ0FBQ0MsSUFBZixHQUFzQlksV0FBbkM7QUFDQSxVQUFJbkIsSUFBSixFQUFVLE1BQU1BLElBQUksQ0FBQ2dCLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBTjtBQUNiLEtBSHlCLEVBR3ZCLEtBQUssRUFBTCxHQUFVLElBSGEsQ0FBMUIsQ0FEWSxDQU1aOztBQUNBLFdBQU8sTUFBTUksYUFBYSxDQUFDSCxNQUFELENBQTFCO0FBQ0gsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLHNCQUNJLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFakI7QUFBRixLQUE3QjtBQUFBLGNBQXdDRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSDtBQUVNLE1BQU1tQixPQUFPLEdBQUcsTUFBTTtBQUN6QixTQUFPQyx3REFBVSxDQUFDeEIsV0FBRCxDQUFqQjtBQUNILENBRk0sQzs7Ozs7Ozs7Ozs7O0FDaERQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU15QixhQUFhLEdBQUc7QUFDcEJDLFFBQU0sRUFBRSx5Q0FEWTtBQUVwQkMsWUFBVSxFQUFFLHlCQUZRO0FBR3BCQyxXQUFTLEVBQUUsU0FIUztBQUlwQkMsZUFBYSxFQUFFLHFCQUpLO0FBS3BCQyxtQkFBaUIsRUFBRSxjQUxDO0FBTXBCQyxPQUFLLEVBQUUsMkNBTmE7QUFPcEJDLGVBQWEsRUFBRTtBQVBLLENBQXRCOztBQVVBLElBQUksS0FBSixFQUFrRSxFQU1qRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JEO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQU8scUVBQUMsa0VBQUQ7QUFBQSw0QkFDTCxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxlQUVMLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUlEOztBQUVjRixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIjtcbmltcG9ydCB7IGZpcmViYXNlQ2xpZW50IH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlQ2xpZW50XCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gICAgdXNlcjogbnVsbCxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy8gaGFuZGxlIGF1dGggbG9naWMgaGVyZS4uLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBmaXJlYmFzZUNsaWVudC5hdXRoKCkub25JZFRva2VuQ2hhbmdlZChhc3luYyAodXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgICAgICAgICAgICBub29raWVzLnNldCh1bmRlZmluZWQsICd0b2tlbicsICcnLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB1aWQsIGVtYWlsIH0gPSB1c2VyO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVtYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICAgICAgICAgICAgICAgIG5vb2tpZXMuc2V0KHVuZGVmaW5lZCwgJ3Rva2VuJywgdG9rZW4sIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIG5vb2tpZXMuc2V0KHVuZGVmaW5lZCwgJ3Rva2VuJywgJycsIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gZm9yY2UgcmVmcmVzaCB0aGUgdG9rZW4gZXZlcnkgMTAgbWludXRlc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBmaXJlYmFzZUNsaWVudC5hdXRoKCkuY3VycmVudFVzZXI7XG4gICAgICAgICAgICBpZiAodXNlcikgYXdhaXQgdXNlci5nZXRJZFRva2VuKHRydWUpO1xuICAgICAgICB9LCAxMCAqIDYwICogMTAwMCk7XG5cbiAgICAgICAgLy8gY2xlYW4gdXAgc2V0SW50ZXJ2YWxcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciB9fT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59O1xuIiwiaW1wb3J0IGZpcmViYXNlQ2xpZW50IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuLypcblxuQ29weS9wYXN0ZSB5b3VyICpjbGllbnQtc2lkZSogRmlyZWJhc2UgY3JlZGVudGlhbHMgYmVsb3cuIFxuXG5UbyBnZXQgdGhlc2UsIGdvIHRvIHRoZSBGaXJlYmFzZSBDb25zb2xlID4gb3BlbiB5b3VyIHByb2plY3QgPiBHZWFyIEljb24gPlxuUHJvamVjdCBTZXR0aW5ncyA+IEdlbmVyYWwgPiBZb3VyIGFwcHMuIElmIHlvdSBoYXZlbid0IGNyZWF0ZWQgYSB3ZWIgYXBwXG5hbHJlYWR5LCBjbGljayB0aGUgXCI8Lz5cIiBpY29uLCBuYW1lIHlvdXIgYXBwLCBhbmQgY29weS9wYXN0ZSB0aGUgc25pcHBldC5cbk90aGVyd2lzZSwgZ28gdG8gRmlyZWJhc2UgU0RLIFNuaXBwZXQgPiBjbGljayB0aGUgXCJDb25maWdcIiByYWRpbyBidXR0b24gPlxuY29weS9wYXN0ZS5cblxuKi9cbmNvbnN0IENMSUVOVF9DT05GSUcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCV28ya3NQRHlZZDIyUDA5b1ptbnRRcWhFUXRjaGh4R2dcIixcbiAgYXV0aERvbWFpbjogXCJjYWNoeWlvLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiY2FjaHlpb1wiLFxuICBzdG9yYWdlQnVja2V0OiBcImNhY2h5aW8uYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjkzNTYyMzk2MTUzXCIsXG4gIGFwcElkOiBcIjE6NjkzNTYyMzk2MTUzOndlYjowODc1NzVlYmY4NTRkYTBmMTMwMTI4XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy0wRkZQN1lSOVczXCJcbn07XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmICFmaXJlYmFzZUNsaWVudC5hcHBzLmxlbmd0aCkge1xuICBmaXJlYmFzZUNsaWVudC5pbml0aWFsaXplQXBwKENMSUVOVF9DT05GSUcpO1xuICBmaXJlYmFzZUNsaWVudFxuICAgIC5hdXRoKClcbiAgICAuc2V0UGVyc2lzdGVuY2UoZmlyZWJhc2VDbGllbnQuYXV0aC5BdXRoLlBlcnNpc3RlbmNlLkxPQ0FMKTtcbiAgd2luZG93LmZpcmViYXNlID0gZmlyZWJhc2VDbGllbnQ7XG59XG5cbmV4cG9ydCB7IGZpcmViYXNlQ2xpZW50IH07XG4iLCJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9hdXRoQ29udGV4dCc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPEF1dGhQcm92aWRlcj5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gIDwvQXV0aFByb3ZpZGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==