webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main/ArtistForm.js":
/*!***************************************!*\
  !*** ./components/main/ArtistForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _contexts_authContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/authContext */ "./contexts/authContext/index.js");
/* harmony import */ var _firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase/firebaseClient */ "./firebase/firebaseClient.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config */ "./config/index.js");






var _jsxFileName = "C:\\Users\\admin\\Downloads\\cchproject-main 2\\cchproject-main\\components\\main\\ArtistForm.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var ArtistForm = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(_c = _s(function (_ref, ref) {
  _s();

  var card = _ref.card,
      openModal = _ref.openModal;
  var id = card.id,
      title = card.title,
      genres = card.genres,
      poster = card.poster,
      price = card.price,
      covers = card.covers,
      flowplayerurl = card.flowplayerurl,
      mainImage = card.mainImage;

  var _useAuth = Object(_contexts_authContext__WEBPACK_IMPORTED_MODULE_8__["useAuth"])(),
      user = _useAuth.user;

  var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_7__["loadStripe"])(_config__WEBPACK_IMPORTED_MODULE_10__["STRIPE_API_KEY"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    userEmail: '',
    forwhom: '',
    from: '',
    to: '',
    song: '',
    occasion: '',
    instructions: ''
  }),
      state = _useState[0],
      setState = _useState[1]; // console.log(card, '== this is card')


  var getMyCachy = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
      var userEmail, forwhom, from, to, song, occasion, instructions, modalStat, reg, signinMethod;
      return C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              userEmail = state.userEmail, forwhom = state.forwhom, from = state.from, to = state.to, song = state.song, occasion = state.occasion, instructions = state.instructions;

              if (!(!forwhom || !from || !to || !song || !occasion)) {
                _context.next = 5;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].warn("Please fill required fields!");
              return _context.abrupt("return");

            case 5:
              if (user) {
                _context.next = 21;
                break;
              }

              modalStat = 'login'; // check if userEmail exists

              if (userEmail) {
                _context.next = 10;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].warn("Enter Email address!");
              return _context.abrupt("return");

            case 10:
              reg = /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

              if (reg.test(userEmail)) {
                _context.next = 14;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].warn("Invalid Email format!");
              return _context.abrupt("return");

            case 14:
              _context.next = 16;
              return _firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_9__["firebaseClient"].auth().fetchSignInMethodsForEmail(userEmail);

            case 16:
              signinMethod = _context.sent;

              if (signinMethod.length === 0) {
                modalStat = 'signup';
              } // open login modal send userEmail to login modal


              openModal(modalStat, ref, userEmail); // tracking login reqeust
              // const login = await checkLogin();

              _context.next = 22;
              break;

            case 21:
              ref.current.makePayment();

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getMyCachy(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useImperativeHandle"])(ref, function () {
    return {
      makePayment: function () {
        var _makePayment = Object(C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
          var userEmail, forwhom, from, to, song, occasion, instructions, email, uid, stripe, response, session, result;
          return C_Users_admin_Downloads_cchproject_main_2_cchproject_main_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  userEmail = state.userEmail, forwhom = state.forwhom, from = state.from, to = state.to, song = state.song, occasion = state.occasion, instructions = state.instructions;
                  email = user.email, uid = user.uid;
                  _context2.next = 4;
                  return stripePromise;

                case 4:
                  stripe = _context2.sent;
                  _context2.next = 7;
                  return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_10__["apiURL"], "/checkout"), {
                    cancel_url: "".concat(_config__WEBPACK_IMPORTED_MODULE_10__["homeURL"], "?canceld=true"),
                    mode: 'payment',
                    payment_method_types: ['card'],
                    success_url: "".concat(_config__WEBPACK_IMPORTED_MODULE_10__["homeURL"], "/profile?success=true"),
                    customer_email: email,
                    metadata: {
                      uid: uid,
                      title: title,
                      forwhom: forwhom,
                      from: from,
                      to: to,
                      song: song,
                      occasion: occasion,
                      instructions: instructions,
                      price: price,
                      orderImage: poster.url
                    },
                    line_items: [{
                      price_data: {
                        currency: 'eur',
                        product_data: {
                          name: title,
                          images: [poster.url]
                        },
                        unit_amount: price * 100
                      },
                      quantity: 1
                    }]
                  });

                case 7:
                  response = _context2.sent;
                  session = response.data;
                  localStorage.setItem('sessionid', session.id); // When the customer clicks on the button, redirect them to Checkout.

                  _context2.next = 12;
                  return stripe.redirectToCheckout({
                    sessionId: session.id
                  });

                case 12:
                  result = _context2.sent;

                  if (result.error) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error(result.error.message);
                  }

                case 14:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function makePayment() {
          return _makePayment.apply(this, arguments);
        }

        return makePayment;
      }()
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "artist-form__container container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "title",
      children: card.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "artist-form",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "forwhom",
              children: "Who is this for*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              name: "",
              id: "forwhom",
              onChange: function onChange(e) {
                return setState(_objectSpread(_objectSpread({}, state), {}, {
                  forwhom: e.target.value
                }));
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "",
                children: "-- Select --"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Myself"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Someone else"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "from",
              children: "From*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              id: "from",
              onChange: function onChange(e) {
                return setState(_objectSpread(_objectSpread({}, state), {}, {
                  from: e.target.value
                }));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "choosesong",
              children: "Choose a song*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              name: "",
              id: "choosesong",
              onChange: function onChange(e) {
                return setState(_objectSpread(_objectSpread({}, state), {}, {
                  song: e.target.value
                }));
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "",
                children: "-- Select a song --"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, _this), card.covers && card.covers.length > 0 && card.covers.map(function (song, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  children: song
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 52
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "Which songs can I choose?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "to",
              children: "To*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              id: "to",
              onChange: function onChange(e) {
                return setState(_objectSpread(_objectSpread({}, state), {}, {
                  to: e.target.value
                }));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [!user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "email",
                children: "Your Email*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "email",
                style: {
                  marginBottom: 10
                },
                onChange: function onChange(e) {
                  return setState(_objectSpread(_objectSpread({}, state), {}, {
                    userEmail: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 19
              }, _this)]
            }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "email",
              children: "Select an occasion*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              name: "",
              id: "occasion",
              className: "form-control",
              onChange: function onChange(e) {
                return setState(_objectSpread(_objectSpread({}, state), {}, {
                  occasion: e.target.value
                }));
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "",
                children: "-- Select a occasion --"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Birthday"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Wedding"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Gift"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Anniversary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Give Thanks"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Another"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "instructions",
              children: "Provide Instructions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              name: "",
              id: "instructions",
              rows: "6",
              onChange: function onChange(e) {
                return setState(_objectSpread(_objectSpread({}, state), {}, {
                  instructions: e.target.value
                }));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "button-wrapper",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "artist-form-homepage-btn-form",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "main-btn centralized",
                type: "button",
                onClick: function onClick(e) {
                  return getMyCachy(e);
                },
                children: ["Get My Cachy", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: "20",
                  height: "27",
                  viewBox: "0 0 20 27",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M17.561 10.0492C17.2904 10.0652 17.0625 10.1775 16.8765 10.386C16.6906 10.595 16.6058 10.8343 16.6218 11.1035L16.74 13.0945C16.8539 15.0129 16.2674 16.6944 14.9812 18.1388C13.6946 19.5831 12.0895 20.3624 10.166 20.4766C8.24216 20.5908 6.55603 20.0069 5.10793 18.7249C3.65954 17.4429 2.87854 15.8426 2.76464 13.9241L2.64646 11.9335C2.63048 11.6643 2.51768 11.437 2.30864 11.2511C2.09937 11.0661 1.8594 10.9816 1.58912 10.9977C1.31856 11.0137 1.09027 11.126 0.90469 11.3345C0.718762 11.5435 0.633991 11.7828 0.649973 12.052L0.768152 14.0427C0.904193 16.3342 1.78899 18.2817 3.42377 19.8856C5.05796 21.4901 7.0109 22.3497 9.28215 22.4639L9.40405 24.5172L5.41112 24.7542C5.14055 24.7703 4.91223 24.882 4.72664 25.091C4.54072 25.2995 4.4559 25.5387 4.47192 25.8085C4.4879 26.0777 4.60042 26.3049 4.80974 26.4908C5.01873 26.6759 5.25865 26.7604 5.52926 26.7443L15.5117 26.1517C15.782 26.1356 16.0102 26.0234 16.1961 25.8149C16.3817 25.6059 16.4668 25.3665 16.4508 25.0973C16.4348 24.8276 16.322 24.6003 16.113 24.415C15.9037 24.2294 15.6638 24.1455 15.3935 24.1616L11.4006 24.3986L11.2787 22.3454C13.5202 21.9629 15.3573 20.8784 16.7909 19.092C18.2238 17.306 18.8726 15.2675 18.7365 12.9759L18.6183 10.9853C18.6024 10.7161 18.4895 10.4888 18.2805 10.3029C18.071 10.1179 17.8313 10.0331 17.561 10.0492Z",
                    fill: "white"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M7.20685 10.3988L4.56822 10.5555L4.67658 12.3808L7.31521 12.2242C7.71831 12.2002 8.06425 12.5065 8.08811 12.9084C8.11197 13.3103 7.8047 13.6554 7.4016 13.6793L4.76445 13.8359C4.85221 15.1908 5.40865 16.3236 6.43596 17.2332C7.47107 18.1501 8.67536 18.5669 10.0478 18.4854C11.4203 18.4039 12.5665 17.8476 13.4861 16.8146C14.3983 15.7899 14.8171 14.5992 14.7439 13.2434L12.1987 13.3945C11.7956 13.4185 11.4496 13.1122 11.4258 12.7103C11.4019 12.3083 11.7092 11.9633 12.1123 11.9394L14.659 11.7882L14.5506 9.96286L12.004 10.114C11.6008 10.138 11.2549 9.83167 11.231 9.42979C11.2072 9.02791 11.5144 8.68282 11.9176 8.65888L14.4642 8.5077L14.349 6.56768L11.8024 6.71886C11.3993 6.7428 11.0533 6.43649 11.0295 6.03461C11.0056 5.63273 11.3129 5.28764 11.716 5.2637L14.2566 5.11288C14.1468 3.80605 13.5959 2.70817 12.5964 1.82238C11.561 0.906077 10.357 0.488647 8.98449 0.570127C7.61179 0.65162 6.46559 1.20858 5.5462 2.24093C4.65817 3.23873 4.24139 4.39405 4.28699 5.70474L6.91947 5.54846C7.32257 5.52453 7.66851 5.83079 7.69237 6.23272C7.71623 6.63465 7.40896 6.97969 7.00586 7.00362L4.36723 7.16027L4.4824 9.10029L7.12103 8.94364C7.52414 8.91971 7.87007 9.22597 7.89393 9.6279C7.91779 10.0298 7.60995 10.3749 7.20685 10.3988Z",
                    fill: "white"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "artist-form-homepage-btn-form-price",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: ["For ", price, " USD"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["By clicking the \xABSubmit\xBB button, I agree to the ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "personal data processing policy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 64
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, _this);
}, "b/RIxcCpXeumGOSw5ScpYPHfgUw=", false, function () {
  return [_contexts_authContext__WEBPACK_IMPORTED_MODULE_8__["useAuth"], react__WEBPACK_IMPORTED_MODULE_4__["useImperativeHandle"]];
}));
_c2 = ArtistForm;
/* harmony default export */ __webpack_exports__["default"] = (ArtistForm);

var _c, _c2;

$RefreshReg$(_c, "ArtistForm$forwardRef");
$RefreshReg$(_c2, "ArtistForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL0FydGlzdEZvcm0uanMiXSwibmFtZXMiOlsiQXJ0aXN0Rm9ybSIsImZvcndhcmRSZWYiLCJyZWYiLCJjYXJkIiwib3Blbk1vZGFsIiwiaWQiLCJ0aXRsZSIsImdlbnJlcyIsInBvc3RlciIsInByaWNlIiwiY292ZXJzIiwiZmxvd3BsYXllcnVybCIsIm1haW5JbWFnZSIsInVzZUF1dGgiLCJ1c2VyIiwic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJTVFJJUEVfQVBJX0tFWSIsInVzZVN0YXRlIiwidXNlckVtYWlsIiwiZm9yd2hvbSIsImZyb20iLCJ0byIsInNvbmciLCJvY2Nhc2lvbiIsImluc3RydWN0aW9ucyIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRNeUNhY2h5IiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9hc3QiLCJ3YXJuIiwibW9kYWxTdGF0IiwicmVnIiwidGVzdCIsImZpcmViYXNlQ2xpZW50IiwiYXV0aCIsImZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsIiwic2lnbmluTWV0aG9kIiwibGVuZ3RoIiwiY3VycmVudCIsIm1ha2VQYXltZW50IiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsImVtYWlsIiwidWlkIiwic3RyaXBlIiwiYXhpb3MiLCJwb3N0IiwiYXBpVVJMIiwiY2FuY2VsX3VybCIsImhvbWVVUkwiLCJtb2RlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJzdWNjZXNzX3VybCIsImN1c3RvbWVyX2VtYWlsIiwibWV0YWRhdGEiLCJvcmRlckltYWdlIiwidXJsIiwibGluZV9pdGVtcyIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJpbWFnZXMiLCJ1bml0X2Ftb3VudCIsInF1YW50aXR5IiwicmVzcG9uc2UiLCJzZXNzaW9uIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJzZXNzaW9uSWQiLCJyZXN1bHQiLCJlcnJvciIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLGdCQUFHQyx3REFBVSxTQUFDLGdCQUFzQkMsR0FBdEIsRUFBOEI7QUFBQTs7QUFBQSxNQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJDLFNBQXFCLFFBQXJCQSxTQUFxQjtBQUFBLE1BQ2xEQyxFQURrRCxHQUNxQkYsSUFEckIsQ0FDbERFLEVBRGtEO0FBQUEsTUFDOUNDLEtBRDhDLEdBQ3FCSCxJQURyQixDQUM5Q0csS0FEOEM7QUFBQSxNQUN2Q0MsTUFEdUMsR0FDcUJKLElBRHJCLENBQ3ZDSSxNQUR1QztBQUFBLE1BQy9CQyxNQUQrQixHQUNxQkwsSUFEckIsQ0FDL0JLLE1BRCtCO0FBQUEsTUFDdkJDLEtBRHVCLEdBQ3FCTixJQURyQixDQUN2Qk0sS0FEdUI7QUFBQSxNQUNoQkMsTUFEZ0IsR0FDcUJQLElBRHJCLENBQ2hCTyxNQURnQjtBQUFBLE1BQ1JDLGFBRFEsR0FDcUJSLElBRHJCLENBQ1JRLGFBRFE7QUFBQSxNQUNPQyxTQURQLEdBQ3FCVCxJQURyQixDQUNPUyxTQURQOztBQUFBLGlCQUV6Q0MscUVBQU8sRUFGa0M7QUFBQSxNQUVsREMsSUFGa0QsWUFFbERBLElBRmtEOztBQUcxRCxNQUFNQyxhQUFhLEdBQUdDLG9FQUFVLENBQUNDLHVEQUFELENBQWhDOztBQUgwRCxrQkFLaENDLHNEQUFRLENBQUM7QUFDakNDLGFBQVMsRUFBRSxFQURzQjtBQUVqQ0MsV0FBTyxFQUFFLEVBRndCO0FBR2pDQyxRQUFJLEVBQUUsRUFIMkI7QUFJakNDLE1BQUUsRUFBRSxFQUo2QjtBQUtqQ0MsUUFBSSxFQUFFLEVBTDJCO0FBTWpDQyxZQUFRLEVBQUUsRUFO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QUFBQSxtQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtGRCxDQXRNNEI7QUFBQSxVQUVWSSw2REFGVSxFQTREM0I4Qix5REE1RDJCO0FBQUEsR0FBN0I7TUFBTTNDLFU7QUF3TVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgwYjM0NzVmYjUwYjkyYTc3NmE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgZm9yd2FyZFJlZiwgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2F1dGhDb250ZXh0JztcbmltcG9ydCB7IGZpcmViYXNlQ2xpZW50IH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2VDbGllbnQnO1xuaW1wb3J0IHsgaG9tZVVSTCwgYXBpVVJMLCBTVFJJUEVfQVBJX0tFWSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmNvbnN0IEFydGlzdEZvcm0gPSBmb3J3YXJkUmVmKCh7IGNhcmQsIG9wZW5Nb2RhbCB9LCByZWYpID0+IHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIGdlbnJlcywgcG9zdGVyLCBwcmljZSwgY292ZXJzLCBmbG93cGxheWVydXJsLCBtYWluSW1hZ2UgfSA9IGNhcmQ7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShTVFJJUEVfQVBJX0tFWSk7XG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgdXNlckVtYWlsOiAnJyxcbiAgICBmb3J3aG9tOiAnJyxcbiAgICBmcm9tOiAnJyxcbiAgICB0bzogJycsXG4gICAgc29uZzogJycsXG4gICAgb2NjYXNpb246ICcnLFxuICAgIGluc3RydWN0aW9uczogJycsXG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKGNhcmQsICc9PSB0aGlzIGlzIGNhcmQnKVxuXG4gIGNvbnN0IGdldE15Q2FjaHkgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB7IHVzZXJFbWFpbCwgZm9yd2hvbSwgZnJvbSwgdG8sIHNvbmcsIG9jY2FzaW9uLCBpbnN0cnVjdGlvbnMgfSA9IHN0YXRlO1xuXG4gICAgaWYgKCFmb3J3aG9tIHx8ICFmcm9tIHx8ICF0byB8fCAhc29uZyB8fCAhb2NjYXNpb24pIHtcbiAgICAgIHRvYXN0Lndhcm4oXCJQbGVhc2UgZmlsbCByZXF1aXJlZCBmaWVsZHMhXCIpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBsZXQgbW9kYWxTdGF0ID0gJ2xvZ2luJztcbiAgICAgIC8vIGNoZWNrIGlmIHVzZXJFbWFpbCBleGlzdHNcbiAgICAgIGlmICghdXNlckVtYWlsKSB7XG4gICAgICAgIHRvYXN0Lndhcm4oXCJFbnRlciBFbWFpbCBhZGRyZXNzIVwiKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlZyA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyguW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICBpZiAoIXJlZy50ZXN0KHVzZXJFbWFpbCkpIHtcbiAgICAgICAgdG9hc3Qud2FybihcIkludmFsaWQgRW1haWwgZm9ybWF0IVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiB1c2VyRW1haWwgYWxyZWFkeSByZWdpc3RlcmVkLlxuICAgICAgY29uc3Qgc2lnbmluTWV0aG9kID0gYXdhaXQgZmlyZWJhc2VDbGllbnQuYXV0aCgpLmZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsKHVzZXJFbWFpbCk7XG5cbiAgICAgIGlmIChzaWduaW5NZXRob2QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1vZGFsU3RhdCA9ICdzaWdudXAnXG4gICAgICB9XG5cbiAgICAgIC8vIG9wZW4gbG9naW4gbW9kYWwgc2VuZCB1c2VyRW1haWwgdG8gbG9naW4gbW9kYWxcbiAgICAgIG9wZW5Nb2RhbChtb2RhbFN0YXQsIHJlZiwgdXNlckVtYWlsKTtcblxuICAgICAgLy8gdHJhY2tpbmcgbG9naW4gcmVxZXVzdFxuICAgICAgLy8gY29uc3QgbG9naW4gPSBhd2FpdCBjaGVja0xvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZi5jdXJyZW50Lm1ha2VQYXltZW50KClcbiAgICB9XG4gIH1cblxuXG5cbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgbWFrZVBheW1lbnQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHsgdXNlckVtYWlsLCBmb3J3aG9tLCBmcm9tLCB0bywgc29uZywgb2NjYXNpb24sIGluc3RydWN0aW9ucyB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7IGVtYWlsLCB1aWQgfSA9IHVzZXI7XG4gICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBzdHJpcGVQcm9taXNlO1xuXG4gICAgICAvLyBpbXBsZW1lbnQgc3RyaXBlIHBheW1lbnQgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpVVJMfS9jaGVja291dGAsIHtcbiAgICAgICAgY2FuY2VsX3VybDogYCR7aG9tZVVSTH0/Y2FuY2VsZD10cnVlYCxcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXG4gICAgICAgIHN1Y2Nlc3NfdXJsOiBgJHtob21lVVJMfS9wcm9maWxlP3N1Y2Nlc3M9dHJ1ZWAsXG4gICAgICAgIGN1c3RvbWVyX2VtYWlsOiBlbWFpbCxcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICB1aWQsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZm9yd2hvbSxcbiAgICAgICAgICBmcm9tLFxuICAgICAgICAgIHRvLFxuICAgICAgICAgIHNvbmcsXG4gICAgICAgICAgb2NjYXNpb24sXG4gICAgICAgICAgaW5zdHJ1Y3Rpb25zLFxuICAgICAgICAgIHByaWNlLFxuICAgICAgICAgIG9yZGVySW1hZ2U6IHBvc3Rlci51cmxcbiAgICAgICAgfSxcbiAgICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByaWNlX2RhdGE6IHtcbiAgICAgICAgICAgICAgY3VycmVuY3k6ICdldXInLFxuICAgICAgICAgICAgICBwcm9kdWN0X2RhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aXRsZSxcbiAgICAgICAgICAgICAgICBpbWFnZXM6IFtwb3N0ZXIudXJsXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdW5pdF9hbW91bnQ6IHByaWNlICogMTAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXNzaW9uaWQnLCBzZXNzaW9uLmlkKTtcblxuICAgICAgLy8gV2hlbiB0aGUgY3VzdG9tZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sIHJlZGlyZWN0IHRoZW0gdG8gQ2hlY2tvdXQuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHtcbiAgICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uLmlkLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgdG9hc3QuZXJyb3IocmVzdWx0LmVycm9yLm1lc3NhZ2UpXG4gICAgICB9XG4gICAgfVxuXG4gIH0pKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LWZvcm1fX2NvbnRhaW5lciBjb250YWluZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICB7Y2FyZC50aXRsZX1cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1mb3JtXCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb3J3aG9tXCI+V2hvIGlzIHRoaXMgZm9yKjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiZm9yd2hvbVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgZm9yd2hvbTogZS50YXJnZXQudmFsdWUgfSl9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBTZWxlY3QgLS08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPk15c2VsZjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+U29tZW9uZSBlbHNlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmcm9tXCI+RnJvbSo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZyb21cIiBvbkNoYW5nZT17KGUpID0+IHNldFN0YXRlKHsgLi4uc3RhdGUsIGZyb206IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNob29zZXNvbmdcIj5DaG9vc2UgYSBzb25nKjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiY2hvb3Nlc29uZ1wiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgc29uZzogZS50YXJnZXQudmFsdWUgfSl9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBTZWxlY3QgYSBzb25nIC0tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAge2NhcmQuY292ZXJzICYmIGNhcmQuY292ZXJzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIGNhcmQuY292ZXJzLm1hcCgoc29uZywgaW5kZXgpID0+IDxvcHRpb24ga2V5PXtpbmRleH0+e3Nvbmd9PC9vcHRpb24+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+V2hpY2ggc29uZ3MgY2FuIEkgY2hvb3NlPzwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9cIj5Ubyo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRvXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0ZSh7IC4uLnN0YXRlLCB0bzogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAhdXNlciAmJlxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8IGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgRW1haWwqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgdXNlckVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+U2VsZWN0IGFuIG9jY2FzaW9uKjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwib2NjYXNpb25cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGUpID0+IHNldFN0YXRlKHsgLi4uc3RhdGUsIG9jY2FzaW9uOiBlLnRhcmdldC52YWx1ZSB9KX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIFNlbGVjdCBhIG9jY2FzaW9uIC0tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5CaXJ0aGRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+V2VkZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+R2lmdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+QW5uaXZlcnNhcnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkdpdmUgVGhhbmtzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Bbm90aGVyPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnN0cnVjdGlvbnNcIj5Qcm92aWRlIEluc3RydWN0aW9uczwvbGFiZWw+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiXCIgaWQ9XCJpbnN0cnVjdGlvbnNcIiByb3dzPVwiNlwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgaW5zdHJ1Y3Rpb25zOiBlLnRhcmdldC52YWx1ZSB9KX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0LWZvcm0taG9tZXBhZ2UtYnRuLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1haW4tYnRuIGNlbnRyYWxpemVkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2UgPT4gZ2V0TXlDYWNoeShlKX0+R2V0IE15IENhY2h5XG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyN1wiIHZpZXdCb3g9XCIwIDAgMjAgMjdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNy41NjEgMTAuMDQ5MkMxNy4yOTA0IDEwLjA2NTIgMTcuMDYyNSAxMC4xNzc1IDE2Ljg3NjUgMTAuMzg2QzE2LjY5MDYgMTAuNTk1IDE2LjYwNTggMTAuODM0MyAxNi42MjE4IDExLjEwMzVMMTYuNzQgMTMuMDk0NUMxNi44NTM5IDE1LjAxMjkgMTYuMjY3NCAxNi42OTQ0IDE0Ljk4MTIgMTguMTM4OEMxMy42OTQ2IDE5LjU4MzEgMTIuMDg5NSAyMC4zNjI0IDEwLjE2NiAyMC40NzY2QzguMjQyMTYgMjAuNTkwOCA2LjU1NjAzIDIwLjAwNjkgNS4xMDc5MyAxOC43MjQ5QzMuNjU5NTQgMTcuNDQyOSAyLjg3ODU0IDE1Ljg0MjYgMi43NjQ2NCAxMy45MjQxTDIuNjQ2NDYgMTEuOTMzNUMyLjYzMDQ4IDExLjY2NDMgMi41MTc2OCAxMS40MzcgMi4zMDg2NCAxMS4yNTExQzIuMDk5MzcgMTEuMDY2MSAxLjg1OTQgMTAuOTgxNiAxLjU4OTEyIDEwLjk5NzdDMS4zMTg1NiAxMS4wMTM3IDEuMDkwMjcgMTEuMTI2IDAuOTA0NjkgMTEuMzM0NUMwLjcxODc2MiAxMS41NDM1IDAuNjMzOTkxIDExLjc4MjggMC42NDk5NzMgMTIuMDUyTDAuNzY4MTUyIDE0LjA0MjdDMC45MDQxOTMgMTYuMzM0MiAxLjc4ODk5IDE4LjI4MTcgMy40MjM3NyAxOS44ODU2QzUuMDU3OTYgMjEuNDkwMSA3LjAxMDkgMjIuMzQ5NyA5LjI4MjE1IDIyLjQ2MzlMOS40MDQwNSAyNC41MTcyTDUuNDExMTIgMjQuNzU0MkM1LjE0MDU1IDI0Ljc3MDMgNC45MTIyMyAyNC44ODIgNC43MjY2NCAyNS4wOTFDNC41NDA3MiAyNS4yOTk1IDQuNDU1OSAyNS41Mzg3IDQuNDcxOTIgMjUuODA4NUM0LjQ4NzkgMjYuMDc3NyA0LjYwMDQyIDI2LjMwNDkgNC44MDk3NCAyNi40OTA4QzUuMDE4NzMgMjYuNjc1OSA1LjI1ODY1IDI2Ljc2MDQgNS41MjkyNiAyNi43NDQzTDE1LjUxMTcgMjYuMTUxN0MxNS43ODIgMjYuMTM1NiAxNi4wMTAyIDI2LjAyMzQgMTYuMTk2MSAyNS44MTQ5QzE2LjM4MTcgMjUuNjA1OSAxNi40NjY4IDI1LjM2NjUgMTYuNDUwOCAyNS4wOTczQzE2LjQzNDggMjQuODI3NiAxNi4zMjIgMjQuNjAwMyAxNi4xMTMgMjQuNDE1QzE1LjkwMzcgMjQuMjI5NCAxNS42NjM4IDI0LjE0NTUgMTUuMzkzNSAyNC4xNjE2TDExLjQwMDYgMjQuMzk4NkwxMS4yNzg3IDIyLjM0NTRDMTMuNTIwMiAyMS45NjI5IDE1LjM1NzMgMjAuODc4NCAxNi43OTA5IDE5LjA5MkMxOC4yMjM4IDE3LjMwNiAxOC44NzI2IDE1LjI2NzUgMTguNzM2NSAxMi45NzU5TDE4LjYxODMgMTAuOTg1M0MxOC42MDI0IDEwLjcxNjEgMTguNDg5NSAxMC40ODg4IDE4LjI4MDUgMTAuMzAyOUMxOC4wNzEgMTAuMTE3OSAxNy44MzEzIDEwLjAzMzEgMTcuNTYxIDEwLjA0OTJaXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03LjIwNjg1IDEwLjM5ODhMNC41NjgyMiAxMC41NTU1TDQuNjc2NTggMTIuMzgwOEw3LjMxNTIxIDEyLjIyNDJDNy43MTgzMSAxMi4yMDAyIDguMDY0MjUgMTIuNTA2NSA4LjA4ODExIDEyLjkwODRDOC4xMTE5NyAxMy4zMTAzIDcuODA0NyAxMy42NTU0IDcuNDAxNiAxMy42NzkzTDQuNzY0NDUgMTMuODM1OUM0Ljg1MjIxIDE1LjE5MDggNS40MDg2NSAxNi4zMjM2IDYuNDM1OTYgMTcuMjMzMkM3LjQ3MTA3IDE4LjE1MDEgOC42NzUzNiAxOC41NjY5IDEwLjA0NzggMTguNDg1NEMxMS40MjAzIDE4LjQwMzkgMTIuNTY2NSAxNy44NDc2IDEzLjQ4NjEgMTYuODE0NkMxNC4zOTgzIDE1Ljc4OTkgMTQuODE3MSAxNC41OTkyIDE0Ljc0MzkgMTMuMjQzNEwxMi4xOTg3IDEzLjM5NDVDMTEuNzk1NiAxMy40MTg1IDExLjQ0OTYgMTMuMTEyMiAxMS40MjU4IDEyLjcxMDNDMTEuNDAxOSAxMi4zMDgzIDExLjcwOTIgMTEuOTYzMyAxMi4xMTIzIDExLjkzOTRMMTQuNjU5IDExLjc4ODJMMTQuNTUwNiA5Ljk2Mjg2TDEyLjAwNCAxMC4xMTRDMTEuNjAwOCAxMC4xMzggMTEuMjU0OSA5LjgzMTY3IDExLjIzMSA5LjQyOTc5QzExLjIwNzIgOS4wMjc5MSAxMS41MTQ0IDguNjgyODIgMTEuOTE3NiA4LjY1ODg4TDE0LjQ2NDIgOC41MDc3TDE0LjM0OSA2LjU2NzY4TDExLjgwMjQgNi43MTg4NkMxMS4zOTkzIDYuNzQyOCAxMS4wNTMzIDYuNDM2NDkgMTEuMDI5NSA2LjAzNDYxQzExLjAwNTYgNS42MzI3MyAxMS4zMTI5IDUuMjg3NjQgMTEuNzE2IDUuMjYzN0wxNC4yNTY2IDUuMTEyODhDMTQuMTQ2OCAzLjgwNjA1IDEzLjU5NTkgMi43MDgxNyAxMi41OTY0IDEuODIyMzhDMTEuNTYxIDAuOTA2MDc3IDEwLjM1NyAwLjQ4ODY0NyA4Ljk4NDQ5IDAuNTcwMTI3QzcuNjExNzkgMC42NTE2MiA2LjQ2NTU5IDEuMjA4NTggNS41NDYyIDIuMjQwOTNDNC42NTgxNyAzLjIzODczIDQuMjQxMzkgNC4zOTQwNSA0LjI4Njk5IDUuNzA0NzRMNi45MTk0NyA1LjU0ODQ2QzcuMzIyNTcgNS41MjQ1MyA3LjY2ODUxIDUuODMwNzkgNy42OTIzNyA2LjIzMjcyQzcuNzE2MjMgNi42MzQ2NSA3LjQwODk2IDYuOTc5NjkgNy4wMDU4NiA3LjAwMzYyTDQuMzY3MjMgNy4xNjAyN0w0LjQ4MjQgOS4xMDAyOUw3LjEyMTAzIDguOTQzNjRDNy41MjQxNCA4LjkxOTcxIDcuODcwMDcgOS4yMjU5NyA3Ljg5MzkzIDkuNjI3OUM3LjkxNzc5IDEwLjAyOTggNy42MDk5NSAxMC4zNzQ5IDcuMjA2ODUgMTAuMzk4OFpcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1mb3JtLWhvbWVwYWdlLWJ0bi1mb3JtLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgPGgzPkZvciB7cHJpY2V9IFVTRDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD5CeSBjbGlja2luZyB0aGUgwqtTdWJtaXTCuyBidXR0b24sIEkgYWdyZWUgdG8gdGhlIDxhPnBlcnNvbmFsIGRhdGEgcHJvY2Vzc2luZyBwb2xpY3k8L2E+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2RpdiA+XG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9