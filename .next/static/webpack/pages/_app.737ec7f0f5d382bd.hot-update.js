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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchForm.module.scss */ \"./src/ui/SearchForm/SearchForm.module.scss\");\n/* harmony import */ var _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Buttons_MainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Buttons/MainButton */ \"./src/ui/Buttons/MainButton.jsx\");\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon/Icon */ \"./src/ui/Icon/Icon.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SearchForm = (param)=>{\n    let { action } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const initialValues = {\n        search: router.query.search || \"\"\n    };\n    const handleSubmit = (param, param1)=>{\n        let { search } = param, { resetForm } = param1;\n        if (search.trim() === \"\") {\n            router.push(\"/products\");\n            resetForm();\n            action();\n            return;\n        }\n        router.push(\"/products/?search=\".concat(search));\n        resetForm();\n        action();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n        initialValues: initialValues,\n        onSubmit: handleSubmit,\n        children: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                className: (_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                        type: \"text\",\n                        name: \"search\",\n                        className: (_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().input)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: (_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default().clearBtn),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                            id: \"close\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_MainButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                            id: \"search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchForm, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SearchForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchForm);\nvar _c;\n$RefreshReg$(_c, \"SearchForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvU2VhcmNoRm9ybS9TZWFyY2hGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEM7QUFDRDtBQUNMO0FBQ087QUFDWDtBQUVwQyxNQUFNTyxhQUFhO1FBQUMsRUFBRUMsTUFBTSxFQUFFOztJQUM1QixNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEIsTUFBTU0sZ0JBQWdCO1FBQ3BCQyxRQUFRRixPQUFPRyxLQUFLLENBQUNELE1BQU0sSUFBSTtJQUNqQztJQUVBLE1BQU1FLGVBQWU7WUFBQyxFQUFFRixNQUFNLEVBQUUsVUFBRSxFQUFFRyxTQUFTLEVBQUU7UUFDN0MsSUFBSUgsT0FBT0ksSUFBSSxPQUFPLElBQUk7WUFDeEJOLE9BQU9PLElBQUksQ0FBQztZQUNaRjtZQUNBTjtZQUNBO1FBQ0Y7UUFFQUMsT0FBT08sSUFBSSxDQUFDLHFCQUE0QixPQUFQTDtRQUNqQ0c7UUFDQU47SUFDRjtJQUVBLHFCQUNFLDhEQUFDUCwwQ0FBTUE7UUFDTFMsZUFBZUE7UUFDZk8sVUFBVUo7a0JBRVQsa0JBQ0MsOERBQUNYLHdDQUFJQTtnQkFBQ2dCLFdBQVdsQixxRUFBVzs7a0NBQzFCLDhEQUFDRyx5Q0FBS0E7d0JBQ0ppQixNQUFLO3dCQUNMQyxNQUFLO3dCQUNMSCxXQUFXbEIsc0VBQVk7Ozs7OztrQ0FJekIsOERBQUN1Qjt3QkFDQ0gsTUFBSzt3QkFDTEYsV0FBV2xCLHlFQUFlO2tDQUcxQiw0RUFBQ00sNENBQUlBOzRCQUFDbUIsSUFBRzs7Ozs7Ozs7Ozs7a0NBRVgsOERBQUNwQiwyREFBVUE7d0JBQUNxQixTQUFTYjtrQ0FDbkIsNEVBQUNQLDRDQUFJQTs0QkFBQ21CLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckI7R0FoRE1sQjs7UUFDV0gsa0RBQVNBOzs7S0FEcEJHO0FBa0ROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9TZWFyY2hGb3JtL1NlYXJjaEZvcm0uanN4PzMxMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaEZvcm0ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tICcuLi9CdXR0b25zL01haW5CdXR0b24nO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vSWNvbi9JY29uJztcclxuXHJcbmNvbnN0IFNlYXJjaEZvcm0gPSAoeyBhY3Rpb24gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgc2VhcmNoOiByb3V0ZXIucXVlcnkuc2VhcmNoIHx8ICcnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICh7IHNlYXJjaCB9LCB7IHJlc2V0Rm9ybSB9KSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9wcm9kdWN0cycpO1xyXG4gICAgICByZXNldEZvcm0oKTtcclxuICAgICAgYWN0aW9uKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3RzLz9zZWFyY2g9JHtzZWFyY2h9YCk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICAgIGFjdGlvbigpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XHJcbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICA+XHJcbiAgICAgIHsoKSA9PiAoXHJcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8vIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICA+PC9GaWVsZD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyQnRufVxyXG4gICAgICAgICAgICAvLyBvbkNsaWNrPXtjbGVhckZpbHRlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb24gaWQ9XCJjbG9zZVwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxNYWluQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxJY29uIGlkPVwic2VhcmNoXCIgLz5cclxuICAgICAgICAgIDwvTWFpbkJ1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1paz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybTtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkZvcm1payIsIkZvcm0iLCJGaWVsZCIsInVzZVJvdXRlciIsIk1haW5CdXR0b24iLCJJY29uIiwiU2VhcmNoRm9ybSIsImFjdGlvbiIsInJvdXRlciIsImluaXRpYWxWYWx1ZXMiLCJzZWFyY2giLCJxdWVyeSIsImhhbmRsZVN1Ym1pdCIsInJlc2V0Rm9ybSIsInRyaW0iLCJwdXNoIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJmb3JtIiwidHlwZSIsIm5hbWUiLCJpbnB1dCIsImJ1dHRvbiIsImNsZWFyQnRuIiwiaWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/SearchForm/SearchForm.jsx\n"));

/***/ })

});