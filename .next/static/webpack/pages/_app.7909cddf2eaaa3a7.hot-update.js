"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/modules/Header/Header.jsx":
/*!***************************************!*\
  !*** ./src/modules/Header/Header.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/ui/Logo/Logo */ \"./src/ui/Logo/Logo.jsx\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.scss */ \"./src/modules/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/Icon/Icon */ \"./src/ui/Icon/Icon.jsx\");\n/* harmony import */ var _components_Navigation_HeaderNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navigation/HeaderNav */ \"./src/modules/Header/components/Navigation/HeaderNav.jsx\");\n\n\n\n\n\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                styles: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    alignItems: \"center\"\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\Header.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().burger),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                    id: \"burger\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\Header.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\Header.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation_HeaderNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\Header.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\Header.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9IZWFkZXIvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0M7QUFDUTtBQUNKO0FBQ29CO0FBRTFELE1BQU1JLFNBQVM7SUFDYixxQkFDRSw4REFBQ0M7UUFBT0MsV0FBV0wsc0VBQWdCOzswQkFDakMsOERBQUNELHFEQUFJQTtnQkFDSEMsUUFBUTtvQkFDTk8sU0FBUztvQkFDVEMsZUFBZTtvQkFDZkMsWUFBWTtnQkFDZDs7Ozs7OzBCQUVGLDhEQUFDQztnQkFBT0MsTUFBSztnQkFBU04sV0FBV0wsbUVBQWE7MEJBQzVDLDRFQUFDQywrQ0FBSUE7b0JBQUNZLElBQUc7Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDWCx3RUFBU0E7Ozs7Ozs7Ozs7O0FBSWhCO0tBbEJNQztBQW9CTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9kdWxlcy9IZWFkZXIvSGVhZGVyLmpzeD82MmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJ0AvdWkvTG9nby9Mb2dvJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdAL3VpL0ljb24vSWNvbic7XHJcbmltcG9ydCBIZWFkZXJOYXYgZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb24vSGVhZGVyTmF2JztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8TG9nb1xyXG4gICAgICAgIHN0eWxlcz17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJ9PlxyXG4gICAgICAgIDxJY29uIGlkPVwiYnVyZ2VyXCIgLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25CYXJ9PiAqL31cclxuICAgICAgPEhlYWRlck5hdiAvPlxyXG4gICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkxvZ28iLCJzdHlsZXMiLCJJY29uIiwiSGVhZGVyTmF2IiwiSGVhZGVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiYnV0dG9uIiwidHlwZSIsImJ1cmdlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Header/Header.jsx\n"));

/***/ })

});