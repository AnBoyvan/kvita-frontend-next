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

/***/ "./src/modules/Header/components/Navigation/Navigation.jsx":
/*!*****************************************************************!*\
  !*** ./src/modules/Header/components/Navigation/Navigation.jsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation.module.scss */ \"./src/modules/Header/components/Navigation/Navigation.module.scss\");\n/* harmony import */ var _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_navigation_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/navigation.json */ \"./src/data/navigation.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const links = _data_navigation_json__WEBPACK_IMPORTED_MODULE_1__.map((param, index)=>/*#__PURE__*/ {\n        let { title, link } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: link,\n                className: pathname === link ? \"\".concat((_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navLink), \" active\") : (_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navLink),\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\Navigation\\\\Navigation.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        }, index, false, {\n            fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\Navigation\\\\Navigation.jsx\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navList),\n        children: links\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\Navigation\\\\Navigation.jsx\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Navigation, \"QpP2vYJstxsDz0K+Qwttl8PPVoY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9IZWFkZXIvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNEO0FBQ2hCO0FBQ1c7QUFFeEMsTUFBTUksYUFBYTs7SUFDakIsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0Ysc0RBQVNBO0lBRTlCLE1BQU1HLFFBQVFMLHNEQUFXLENBQUMsUUFBa0JPO1lBQWpCLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO2VBQ3hDLDhEQUFDQztzQkFDQyw0RUFBQ1Qsa0RBQUlBO2dCQUNIVSxNQUFNRjtnQkFDTkcsV0FDRVIsYUFBYUssT0FDVCxHQUFrQixPQUFmVix3RUFBYyxFQUFDLGFBQ2xCQSx3RUFBYzswQkFHbkJTOzs7Ozs7V0FUSUQ7Ozs7O0lBV0w7SUFFTixxQkFBTyw4REFBQ087UUFBR0YsV0FBV2Isd0VBQWM7a0JBQUdNOzs7Ozs7QUFDekM7R0FsQk1GOztRQUNpQkQsa0RBQVNBOzs7S0FEMUJDO0FBb0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2R1bGVzL0hlYWRlci9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qc3g/ZTRiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2aWdhdGlvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBuYXZMaXN0IGZyb20gJ0AvZGF0YS9uYXZpZ2F0aW9uLmpzb24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBsaW5rcyA9IG5hdkxpc3QubWFwKCh7IHRpdGxlLCBsaW5rIH0sIGluZGV4KSA9PiAoXHJcbiAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgaHJlZj17bGlua31cclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgcGF0aG5hbWUgPT09IGxpbmtcclxuICAgICAgICAgICAgPyBgJHtzdHlsZXMubmF2TGlua30gYWN0aXZlYFxyXG4gICAgICAgICAgICA6IHN0eWxlcy5uYXZMaW5rXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICkpO1xyXG4gIHJldHVybiA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlzdH0+e2xpbmtzfTwvdWw+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIm5hdkxpc3QiLCJMaW5rIiwidXNlUm91dGVyIiwiTmF2aWdhdGlvbiIsInBhdGhuYW1lIiwibGlua3MiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwibGluayIsImxpIiwiaHJlZiIsImNsYXNzTmFtZSIsIm5hdkxpbmsiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/Header/components/Navigation/Navigation.jsx\n"));

/***/ })

});