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

/***/ "./src/hooks/useModal.js":
/*!*******************************!*\
  !*** ./src/hooks/useModal.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalContext: function() { return /* binding */ ModalContext; },\n/* harmony export */   ModalProvider: function() { return /* binding */ ModalProvider; },\n/* harmony export */   useModal: function() { return /* binding */ useModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useModal = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [modalContent, setModalContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleEscButton = (e)=>{\n            if (e.code === \"Escape\") {\n                onClose();\n            }\n        };\n        const body = document.querySelector(\"body\");\n        if (isOpen) {\n            body.style.overflow = \"hidden\";\n        } else {\n            body.style.overflow = \"auto\";\n        }\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleEscButton);\n            body.style.overflow = \"auto\";\n        };\n    }, [\n        isOpen\n    ]);\n    const openModal = (content)=>{\n        setIsOpen(true);\n        setModalContent(content);\n        document.querySelector(\"body\").style.overflow = \"hidden\";\n    };\n    const closeModal = ()=>{\n        setIsOpen(false);\n        setModalContent(null);\n        document.querySelector(\"body\").style.overflow = \"auto\";\n    };\n    return {\n        isOpen,\n        modalContent,\n        openModal,\n        closeModal\n    };\n};\n_s(useModal, \"37ccP6H/eyRW7dN3a6I0RrzMjNM=\");\nconst ModalProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const modal = useModal();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContext.Provider, {\n        value: modal,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\KViTa\\\\kvita-frontend-next\\\\src\\\\hooks\\\\useModal.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ModalProvider, \"hDyDP9waVoSwitriRQZZW/zZCNw=\", false, function() {\n    return [\n        useModal\n    ];\n});\n_c = ModalProvider;\nvar _c;\n$RefreshReg$(_c, \"ModalProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTW9kYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJEO0FBRXBELE1BQU1HLDZCQUFlRixvREFBYUEsR0FBRztBQUVyQyxNQUFNRyxXQUFXOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7SUFFakRFLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sa0JBQWtCQyxDQUFBQTtZQUN0QixJQUFJQSxFQUFFQyxJQUFJLEtBQUssVUFBVTtnQkFDdkJDO1lBQ0Y7UUFDRjtRQUVBLE1BQU1DLE9BQU9DLFNBQVNDLGFBQWEsQ0FBQztRQUNwQyxJQUFJVixRQUFRO1lBQ1ZRLEtBQUtHLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO1FBQ3hCLE9BQU87WUFDTEosS0FBS0csS0FBSyxDQUFDQyxRQUFRLEdBQUc7UUFDeEI7UUFFQSxPQUFPO1lBQ0xDLE9BQU9DLG1CQUFtQixDQUN4QixXQUNBVjtZQUVGSSxLQUFLRyxLQUFLLENBQUNDLFFBQVEsR0FBRztRQUN4QjtJQUNGLEdBQUc7UUFBQ1o7S0FBTztJQUVYLE1BQU1lLFlBQVlDLENBQUFBO1FBQ2hCZixVQUFVO1FBQ1ZFLGdCQUFnQmE7UUFDaEJQLFNBQVNDLGFBQWEsQ0FBQyxRQUFRQyxLQUFLLENBQUNDLFFBQVEsR0FDM0M7SUFDSjtJQUVBLE1BQU1LLGFBQWE7UUFDakJoQixVQUFVO1FBQ1ZFLGdCQUFnQjtRQUNoQk0sU0FBU0MsYUFBYSxDQUFDLFFBQVFDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO0lBQ2xEO0lBRUEsT0FBTztRQUFFWjtRQUFRRTtRQUFjYTtRQUFXRTtJQUFXO0FBQ3ZELEVBQUU7R0F6Q1dsQjtBQTJDTixNQUFNbUIsZ0JBQWdCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN4QyxNQUFNQyxRQUFRckI7SUFFZCxxQkFDRSw4REFBQ0QsYUFBYXVCLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQzNCRDs7Ozs7O0FBR1AsRUFBRTtJQVJXRDs7UUFDR25COzs7S0FESG1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VNb2RhbC5qcz82NzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsQ29udGVudCwgc2V0TW9kYWxDb250ZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRXNjQnV0dG9uID0gZSA9PiB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgJ2tleWRvd24nLFxyXG4gICAgICAgIGhhbmRsZUVzY0J1dHRvblxyXG4gICAgICApO1xyXG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgfTtcclxuICB9LCBbaXNPcGVuXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IGNvbnRlbnQgPT4ge1xyXG4gICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgc2V0TW9kYWxDb250ZW50KGNvbnRlbnQpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID1cclxuICAgICAgJ2hpZGRlbic7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICBzZXRNb2RhbENvbnRlbnQobnVsbCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgaXNPcGVuLCBtb2RhbENvbnRlbnQsIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZGFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgbW9kYWwgPSB1c2VNb2RhbCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bW9kYWx9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiTW9kYWxDb250ZXh0IiwidXNlTW9kYWwiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb2RhbENvbnRlbnQiLCJzZXRNb2RhbENvbnRlbnQiLCJoYW5kbGVFc2NCdXR0b24iLCJlIiwiY29kZSIsIm9uQ2xvc2UiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJvdmVyZmxvdyIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvcGVuTW9kYWwiLCJjb250ZW50IiwiY2xvc2VNb2RhbCIsIk1vZGFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsIm1vZGFsIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useModal.js\n"));

/***/ })

});