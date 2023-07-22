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

/***/ "./src/modules/Header/components/SearchModal/SearchModal.jsx":
/*!*******************************************************************!*\
  !*** ./src/modules/Header/components/SearchModal/SearchModal.jsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SearchModal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchModal.module.scss */ \"./src/modules/Header/components/SearchModal/SearchModal.module.scss\");\n/* harmony import */ var _SearchModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SearchModal_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_Buttons_MainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/Buttons/MainButton */ \"./src/ui/Buttons/MainButton.jsx\");\n/* harmony import */ var _ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/Icon/Icon */ \"./src/ui/Icon/Icon.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchForm = (param)=>{\n    let { action, initialSearch } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialSearch || \"\");\n    const initialValues = {\n        search\n    };\n    const handleChange = (e)=>{\n        setSearch(e.currentTarget.value);\n    };\n    const handleSubmit = ()=>{\n        if (search.trim() === \"\") {\n            router.push(\"/products\");\n            setSearch(\"\");\n            action();\n            return;\n        }\n        router.push(\"/products/?search=\".concat(search));\n        resetForm();\n        action();\n    };\n    const clearFilter = ()=>{\n        setSearch(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n        initialValues: initialValues,\n        onSubmit: handleSubmit,\n        children: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                className: (_SearchModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {\n                        type: \"text\",\n                        name: \"search\",\n                        className: (_SearchModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                        onChange: handleChange,\n                        value: search\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\SearchModal\\\\SearchModal.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: (_SearchModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().clearBtn),\n                        onClick: clearFilter,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                            id: \"close\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\SearchModal\\\\SearchModal.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\SearchModal\\\\SearchModal.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Buttons_MainButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                            id: \"search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\SearchModal\\\\SearchModal.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\SearchModal\\\\SearchModal.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\SearchModal\\\\SearchModal.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\SearchModal\\\\SearchModal.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchForm, \"28+4cKoZTVpGo/osuieLnNT9o/8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SearchForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchForm);\nvar _c;\n$RefreshReg$(_c, \"SearchForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9IZWFkZXIvY29tcG9uZW50cy9TZWFyY2hNb2RhbC9TZWFyY2hNb2RhbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDRjtBQUNMO0FBQ21CO0FBQ1g7QUFDZjtBQUVqQyxNQUFNUSxhQUFhO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxhQUFhLEVBQUU7O0lBQzNDLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUNHLGlCQUFpQjtJQUV0RCxNQUFNSSxnQkFBZ0I7UUFDcEJGO0lBQ0Y7SUFFQSxNQUFNRyxlQUFlQyxDQUFBQTtRQUNuQkgsVUFBVUcsRUFBRUMsYUFBYSxDQUFDQyxLQUFLO0lBQ2pDO0lBRUEsTUFBTUMsZUFBZTtRQUNuQixJQUFJUCxPQUFPUSxJQUFJLE9BQU8sSUFBSTtZQUN4QlQsT0FBT1UsSUFBSSxDQUFDO1lBQ1pSLFVBQVU7WUFDVko7WUFDQTtRQUNGO1FBRUFFLE9BQU9VLElBQUksQ0FBQyxxQkFBNEIsT0FBUFQ7UUFDakNVO1FBQ0FiO0lBQ0Y7SUFFQSxNQUFNYyxjQUFjO1FBQ2xCVixVQUFVO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ1osMENBQU1BO1FBQ0xhLGVBQWVBO1FBQ2ZVLFVBQVVMO2tCQUVULGtCQUNDLDhEQUFDakIsd0NBQUlBO2dCQUFDdUIsV0FBV3pCLHNFQUFXOztrQ0FDMUIsOERBQUNHLHlDQUFLQTt3QkFDSndCLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xILFdBQVd6Qix1RUFBWTt3QkFDdkI4QixVQUFVZjt3QkFDVkcsT0FBT047Ozs7OztrQ0FFVCw4REFBQ21CO3dCQUNDSixNQUFLO3dCQUNMRixXQUFXekIsMEVBQWU7d0JBQzFCaUMsU0FBU1Y7a0NBRVQsNEVBQUNqQiwrQ0FBSUE7NEJBQUM0QixJQUFHOzs7Ozs7Ozs7OztrQ0FFWCw4REFBQzdCLDhEQUFVQTt3QkFBQzRCLFNBQVNkO2tDQUNuQiw0RUFBQ2IsK0NBQUlBOzRCQUFDNEIsSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQjtHQXpETTFCOztRQUNXSixrREFBU0E7OztLQURwQkk7QUEyRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvSGVhZGVyL2NvbXBvbmVudHMvU2VhcmNoTW9kYWwvU2VhcmNoTW9kYWwuanN4PzA0N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaE1vZGFsLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1haW5CdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vdWkvQnV0dG9ucy9NYWluQnV0dG9uJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL0ljb24vSWNvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2VhcmNoRm9ybSA9ICh7IGFjdGlvbiwgaW5pdGlhbFNlYXJjaCB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKGluaXRpYWxTZWFyY2ggfHwgJycpO1xyXG5cclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgc2VhcmNoLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0U2VhcmNoKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHNlYXJjaC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvcHJvZHVjdHMnKTtcclxuICAgICAgc2V0U2VhcmNoKCcnKTtcclxuICAgICAgYWN0aW9uKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3RzLz9zZWFyY2g9JHtzZWFyY2h9YCk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICAgIGFjdGlvbigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoKCcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgPlxyXG4gICAgICB7KCkgPT4gKFxyXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgPjwvRmllbGQ+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGVhckJ0bn1cclxuICAgICAgICAgICAgb25DbGljaz17Y2xlYXJGaWx0ZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uIGlkPVwiY2xvc2VcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8TWFpbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8SWNvbiBpZD1cInNlYXJjaFwiIC8+XHJcbiAgICAgICAgICA8L01haW5CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtaWs+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZvcm07XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJGb3JtaWsiLCJGb3JtIiwiRmllbGQiLCJ1c2VSb3V0ZXIiLCJNYWluQnV0dG9uIiwiSWNvbiIsInVzZVN0YXRlIiwiU2VhcmNoRm9ybSIsImFjdGlvbiIsImluaXRpYWxTZWFyY2giLCJyb3V0ZXIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJpbml0aWFsVmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInRyaW0iLCJwdXNoIiwicmVzZXRGb3JtIiwiY2xlYXJGaWx0ZXIiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImZvcm0iLCJ0eXBlIiwibmFtZSIsImlucHV0Iiwib25DaGFuZ2UiLCJidXR0b24iLCJjbGVhckJ0biIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/Header/components/SearchModal/SearchModal.jsx\n"));

/***/ })

});