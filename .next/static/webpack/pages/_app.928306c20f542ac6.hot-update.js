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

/***/ "./src/ui/SearchForm/SearchForm.jsx":
/*!******************************************!*\
  !*** ./src/ui/SearchForm/SearchForm.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchForm.module.scss */ \"./src/ui/SearchForm/SearchForm.module.scss\");\n/* harmony import */ var _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst SearchForm = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router.query);\n    const initialValues = {\n        search: \"\"\n    };\n    const handleSubmit = (param, param1)=>{\n        let { search } = param, { resetForm } = param1;\n        if (search.trim() === \"\") {\n            router.push(\"/products\");\n            resetForm();\n            return;\n        }\n        router.push(\"/products/?search=\".concat(search));\n        resetForm();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n        initialValues: initialValues,\n        onSubmit: handleSubmit,\n        children: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                className: (_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                        type: \"text\",\n                        name: \"search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        children: \"clear\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchForm, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SearchForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchForm);\nvar _c;\n$RefreshReg$(_c, \"SearchForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvU2VhcmNoRm9ybS9TZWFyY2hGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBQ0Q7QUFDTDtBQUV4QyxNQUFNSyxhQUFhOztJQUNqQixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEJHLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0csS0FBSztJQUV4QixNQUFNQyxnQkFBZ0I7UUFDcEJDLFFBQVE7SUFDVjtJQUVBLE1BQU1DLGVBQWU7WUFBQyxFQUFFRCxNQUFNLEVBQUUsVUFBRSxFQUFFRSxTQUFTLEVBQUU7UUFDN0MsSUFBSUYsT0FBT0csSUFBSSxPQUFPLElBQUk7WUFDeEJSLE9BQU9TLElBQUksQ0FBQztZQUNaRjtZQUNBO1FBQ0Y7UUFFQVAsT0FBT1MsSUFBSSxDQUFDLHFCQUE0QixPQUFQSjtRQUNqQ0U7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWiwwQ0FBTUE7UUFDTFMsZUFBZUE7UUFDZk0sVUFBVUo7a0JBRVQsa0JBQ0MsOERBQUNWLHdDQUFJQTtnQkFBQ2UsV0FBV2pCLHFFQUFXOztrQ0FDMUIsOERBQUNHLHlDQUFLQTt3QkFDSmdCLE1BQUs7d0JBQ0xDLE1BQUs7Ozs7OztrQ0FLUCw4REFBQ0M7d0JBQ0NGLE1BQUs7a0NBR047Ozs7OztrQ0FHRCw4REFBQ0U7d0JBQ0NGLE1BQUs7a0NBRU47Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FuRE1kOztRQUNXRCxrREFBU0E7OztLQURwQkM7QUFxRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL1NlYXJjaEZvcm0vU2VhcmNoRm9ybS5qc3g/MzEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoRm9ybS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBTZWFyY2hGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xyXG5cclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgc2VhcmNoOiAnJyxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoeyBzZWFyY2ggfSwgeyByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgaWYgKHNlYXJjaC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvcHJvZHVjdHMnKTtcclxuICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3RzLz9zZWFyY2g9JHtzZWFyY2h9YCk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgPlxyXG4gICAgICB7KCkgPT4gKFxyXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvLyB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgPjwvRmllbGQ+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAvLyBjbGFzc05hbWU9e3N0eWxlcy5jbGVhckJ0bn1cclxuICAgICAgICAgICAgLy8gb25DbGljaz17Y2xlYXJGaWx0ZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGNsZWFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdEJ0bn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgc3VibWl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1paz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybTtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkZvcm1payIsIkZvcm0iLCJGaWVsZCIsInVzZVJvdXRlciIsIlNlYXJjaEZvcm0iLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJpbml0aWFsVmFsdWVzIiwic2VhcmNoIiwiaGFuZGxlU3VibWl0IiwicmVzZXRGb3JtIiwidHJpbSIsInB1c2giLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImZvcm0iLCJ0eXBlIiwibmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui/SearchForm/SearchForm.jsx\n"));

/***/ })

});