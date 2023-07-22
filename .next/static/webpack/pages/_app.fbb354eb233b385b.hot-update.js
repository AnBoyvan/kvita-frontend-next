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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchForm.module.scss */ \"./src/ui/SearchForm/SearchForm.module.scss\");\n/* harmony import */ var _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Buttons_MainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Buttons/MainButton */ \"./src/ui/Buttons/MainButton.jsx\");\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon/Icon */ \"./src/ui/Icon/Icon.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchForm = (param)=>{\n    let { action, initialSearch } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialSearch || \"\");\n    const initialValues = {\n        search\n    };\n    const handleChange = (e)=>{\n        setSearch(e.currentTarget.value);\n    };\n    const handleSubmit = (_, param)=>{\n        let { resetForm } = param;\n        if (search.trim() === \"\") {\n            router.push(\"/products\");\n            resetForm();\n            action();\n            return;\n        }\n        router.push(\"/products/?search=\".concat(search));\n        resetForm();\n        action();\n    };\n    const clearFilter = ()=>{\n        setSearch(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n        initialValues: initialValues,\n        onSubmit: handleSubmit,\n        children: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                className: (_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                        type: \"text\",\n                        name: \"search\",\n                        className: (_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                        onChange: handleChange,\n                        value: search\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: (_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default().clearBtn),\n                        onClick: clearFilter,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                            id: \"close\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_MainButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                            id: \"search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\ui\\\\SearchForm\\\\SearchForm.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchForm, \"28+4cKoZTVpGo/osuieLnNT9o/8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SearchForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchForm);\nvar _c;\n$RefreshReg$(_c, \"SearchForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvU2VhcmNoRm9ybS9TZWFyY2hGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNEO0FBQ0w7QUFDTztBQUNYO0FBQ0g7QUFFakMsTUFBTVEsYUFBYTtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsYUFBYSxFQUFFOztJQUMzQyxNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDRyxpQkFBaUI7SUFFdEQsTUFBTUksZ0JBQWdCO1FBQ3BCRjtJQUNGO0lBRUEsTUFBTUcsZUFBZUMsQ0FBQUE7UUFDbkJILFVBQVVHLEVBQUVDLGFBQWEsQ0FBQ0MsS0FBSztJQUNqQztJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7WUFBRyxFQUFFQyxTQUFTLEVBQUU7UUFDcEMsSUFBSVQsT0FBT1UsSUFBSSxPQUFPLElBQUk7WUFDeEJYLE9BQU9ZLElBQUksQ0FBQztZQUNaRjtZQUNBWjtZQUNBO1FBQ0Y7UUFFQUUsT0FBT1ksSUFBSSxDQUFDLHFCQUE0QixPQUFQWDtRQUNqQ1M7UUFDQVo7SUFDRjtJQUVBLE1BQU1lLGNBQWM7UUFDbEJYLFVBQVU7SUFDWjtJQUVBLHFCQUNFLDhEQUFDWiwwQ0FBTUE7UUFDTGEsZUFBZUE7UUFDZlcsVUFBVU47a0JBRVQsa0JBQ0MsOERBQUNqQix3Q0FBSUE7Z0JBQUN3QixXQUFXMUIscUVBQVc7O2tDQUMxQiw4REFBQ0cseUNBQUtBO3dCQUNKeUIsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEgsV0FBVzFCLHNFQUFZO3dCQUN2QitCLFVBQVVoQjt3QkFDVkcsT0FBT047Ozs7OztrQ0FFVCw4REFBQ29CO3dCQUNDSixNQUFLO3dCQUNMRixXQUFXMUIseUVBQWU7d0JBQzFCa0MsU0FBU1Y7a0NBRVQsNEVBQUNsQiw0Q0FBSUE7NEJBQUM2QixJQUFHOzs7Ozs7Ozs7OztrQ0FFWCw4REFBQzlCLDJEQUFVQTt3QkFBQzZCLFNBQVNmO2tDQUNuQiw0RUFBQ2IsNENBQUlBOzRCQUFDNkIsSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQjtHQXpETTNCOztRQUNXSixrREFBU0E7OztLQURwQkk7QUEyRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL1NlYXJjaEZvcm0vU2VhcmNoRm9ybS5qc3g/MzEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoRm9ybS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gJy4uL0J1dHRvbnMvTWFpbkJ1dHRvbic7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9JY29uL0ljb24nO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNlYXJjaEZvcm0gPSAoeyBhY3Rpb24sIGluaXRpYWxTZWFyY2ggfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShpbml0aWFsU2VhcmNoIHx8ICcnKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcclxuICAgIHNlYXJjaCxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldFNlYXJjaChlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChfLCB7IHJlc2V0Rm9ybSB9KSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9wcm9kdWN0cycpO1xyXG4gICAgICByZXNldEZvcm0oKTtcclxuICAgICAgYWN0aW9uKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3RzLz9zZWFyY2g9JHtzZWFyY2h9YCk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICAgIGFjdGlvbigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoKCcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgPlxyXG4gICAgICB7KCkgPT4gKFxyXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgPjwvRmllbGQ+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGVhckJ0bn1cclxuICAgICAgICAgICAgb25DbGljaz17Y2xlYXJGaWx0ZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uIGlkPVwiY2xvc2VcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8TWFpbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8SWNvbiBpZD1cInNlYXJjaFwiIC8+XHJcbiAgICAgICAgICA8L01haW5CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtaWs+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZvcm07XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJGb3JtaWsiLCJGb3JtIiwiRmllbGQiLCJ1c2VSb3V0ZXIiLCJNYWluQnV0dG9uIiwiSWNvbiIsInVzZVN0YXRlIiwiU2VhcmNoRm9ybSIsImFjdGlvbiIsImluaXRpYWxTZWFyY2giLCJyb3V0ZXIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJpbml0aWFsVmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsIl8iLCJyZXNldEZvcm0iLCJ0cmltIiwicHVzaCIsImNsZWFyRmlsdGVyIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJmb3JtIiwidHlwZSIsIm5hbWUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwiY2xlYXJCdG4iLCJvbkNsaWNrIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ui/SearchForm/SearchForm.jsx\n"));

/***/ })

});