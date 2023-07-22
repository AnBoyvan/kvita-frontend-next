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

/***/ "./src/modules/Header/components/DropdownMenu/DropdownMenu.jsx":
/*!*********************************************************************!*\
  !*** ./src/modules/Header/components/DropdownMenu/DropdownMenu.jsx ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DropdownMenu_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DropdownMenu.module.scss */ \"./src/modules/Header/components/DropdownMenu/DropdownMenu.module.scss\");\n/* harmony import */ var _DropdownMenu_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_DropdownMenu_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _data_navigation_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/navigation.json */ \"./src/data/navigation.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useModal */ \"./src/hooks/useModal.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_Logo_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/ui/Logo/Logo */ \"./src/ui/Logo/Logo.jsx\");\n/* harmony import */ var _ui_Buttons_CloseModalButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/ui/Buttons/CloseModalButton */ \"./src/ui/Buttons/CloseModalButton.jsx\");\n/* harmony import */ var _ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/ui/Icon/Icon */ \"./src/ui/Icon/Icon.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst DropdownMenu = ()=>{\n    _s();\n    const { closeModal, openModal } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_hooks_useModal__WEBPACK_IMPORTED_MODULE_3__.ModalContext);\n    const links = _data_navigation_json__WEBPACK_IMPORTED_MODULE_1__.map((param, index)=>/*#__PURE__*/ {\n        let { title, link } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: link,\n                onClick: closeModal,\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\DropdownMenu\\\\DropdownMenu.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        }, index, false, {\n            fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\DropdownMenu\\\\DropdownMenu.jsx\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_DropdownMenu_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Logo_Logo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                styles: {\n                    display: \"flex\",\n                    flexDirection: \"row\"\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\DropdownMenu\\\\DropdownMenu.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: closeModal,\n                    className: (_DropdownMenu_module_scss__WEBPACK_IMPORTED_MODULE_8___default().closeBtn),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__.Icon, {\n                        id: \"close\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\DropdownMenu\\\\DropdownMenu.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\DropdownMenu\\\\DropdownMenu.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\DropdownMenu\\\\DropdownMenu.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\modules\\\\Header\\\\components\\\\DropdownMenu\\\\DropdownMenu.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DropdownMenu, \"qQgAbm3VAO4P9JZZ5nSeq/bvgxE=\");\n_c = DropdownMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownMenu);\nvar _c;\n$RefreshReg$(_c, \"DropdownMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9IZWFkZXIvY29tcG9uZW50cy9Ecm9wZG93bk1lbnUvRHJvcGRvd25NZW51LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ0g7QUFDVjtBQUNhO0FBQ25CO0FBQ0s7QUFDMkI7QUFDdkI7QUFFdEMsTUFBTVEsZUFBZTs7SUFDbkIsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRSxHQUM3QlIsaURBQVVBLENBQUNDLHlEQUFZQTtJQUV6QixNQUFNUSxRQUFRVixzREFBVyxDQUFDLFFBQWtCWTtZQUFqQixFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRTtlQUN4Qyw4REFBQ0M7c0JBQ0MsNEVBQUNaLGtEQUFJQTtnQkFBQ2EsTUFBTUY7Z0JBQU1HLFNBQVNUOzBCQUN4Qks7Ozs7OztXQUZJRDs7Ozs7SUFJTDtJQUdOLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXcEIsNEVBQWdCOzswQkFDOUIsOERBQUNLLHFEQUFJQTtnQkFDSEwsUUFBUTtvQkFBRXNCLFNBQVM7b0JBQVFDLGVBQWU7Z0JBQU07Ozs7OzswQkFHbEQsOERBQUNKOzBCQUNDLDRFQUFDSztvQkFDQ0MsTUFBSztvQkFDTFAsU0FBU1Q7b0JBQ1RXLFdBQVdwQiwyRUFBZTs4QkFFMUIsNEVBQUNPLCtDQUFJQTt3QkFBQ29CLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkI7R0E3Qk1uQjtLQUFBQTtBQStCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9kdWxlcy9IZWFkZXIvY29tcG9uZW50cy9Ecm9wZG93bk1lbnUvRHJvcGRvd25NZW51LmpzeD9hODhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ecm9wZG93bk1lbnUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgbmF2TGlzdCBmcm9tICdAL2RhdGEvbmF2aWdhdGlvbi5qc29uJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnQC9ob29rcy91c2VNb2RhbCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ0AvdWkvTG9nby9Mb2dvJztcclxuaW1wb3J0IENsb3NlTW9kYWxCdXR0b24gZnJvbSAnQC91aS9CdXR0b25zL0Nsb3NlTW9kYWxCdXR0b24nO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQC91aS9JY29uL0ljb24nO1xyXG5cclxuY29uc3QgRHJvcGRvd25NZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2xvc2VNb2RhbCwgb3Blbk1vZGFsIH0gPVxyXG4gICAgdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG5cclxuICBjb25zdCBsaW5rcyA9IG5hdkxpc3QubWFwKCh7IHRpdGxlLCBsaW5rIH0sIGluZGV4KSA9PiAoXHJcbiAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPExvZ29cclxuICAgICAgICBzdHlsZXM9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUJ0bn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbiBpZD1cImNsb3NlXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25NZW51O1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwibmF2TGlzdCIsInVzZUNvbnRleHQiLCJNb2RhbENvbnRleHQiLCJMaW5rIiwiTG9nbyIsIkNsb3NlTW9kYWxCdXR0b24iLCJJY29uIiwiRHJvcGRvd25NZW51IiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImxpbmtzIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsImxpbmsiLCJsaSIsImhyZWYiLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJidXR0b24iLCJ0eXBlIiwiY2xvc2VCdG4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/Header/components/DropdownMenu/DropdownMenu.jsx\n"));

/***/ })

});