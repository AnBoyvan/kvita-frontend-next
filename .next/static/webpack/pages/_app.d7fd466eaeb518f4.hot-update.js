/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/modules/Auth/Auth.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/modules/Auth/Auth.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Auth_light__UyFR2 {\\n  --primary-bg-color: #fdf6fa;\\n  --modal-bg-color: #ffebf6;\\n  --primary-text-color: #3f3038;\\n  --secondary-text-color: #fdf6fa;\\n  --primary-btn-color: #f361af;\\n  --primary-accent-color: #fdaed8;\\n  --dropdown-menu-color: #ffebf6;\\n  --error-color: #ff0000;\\n  --valid-color: #228b22;\\n}\\n\\n.Auth_dark__q2KMQ {\\n  --primary-bg-color: #2e2828;\\n  --modal-bg-color: #333131;\\n  --primary-text-color: #fdf6fa;\\n  --secondary-text-color: #2e2828;\\n  --primary-btn-color: #f65151;\\n  --primary-accent-color: #f361af;\\n  --dropdown-menu-color: #333131;\\n  --error-color: #ff0000;\\n  --valid-color: #228b22;\\n}\\n\\n.Auth_auth__15DUs {\\n  width: 100%;\\n  padding: 32;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/variables.scss\",\"webpack://src/modules/Auth/Auth.module.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,2BAAA;EAEA,yBAAA;EACA,6BAAA;EACA,+BAAA;EACA,4BAAA;EAEA,+BAAA;EAEA,8BAAA;EAEA,sBAAA;EACA,sBAAA;ACLF;;ADSA;EACE,2BAAA;EAEA,yBAAA;EACA,6BAAA;EACA,+BAAA;EACA,4BAAA;EAEA,+BAAA;EAEA,8BAAA;EAEA,sBAAA;EACA,sBAAA;ACVF;;AApBA;EACE,WAAA;EACA,WAAA;AAuBF\",\"sourcesContent\":[\"//----------------------COLORS----------------------//\\r\\n// html[data-theme='light']\\r\\n.light {\\r\\n  --primary-bg-color: #fdf6fa;\\r\\n  // --secondary-bg-color: ;\\r\\n  --modal-bg-color: #ffebf6;\\r\\n  --primary-text-color: #3f3038;\\r\\n  --secondary-text-color: #fdf6fa;\\r\\n  --primary-btn-color: #f361af;\\r\\n  // --secondary-btn-color: ;\\r\\n  --primary-accent-color: #fdaed8;\\r\\n  // --secondary-accent-color: ;\\r\\n  --dropdown-menu-color: #ffebf6;\\r\\n  // --switcher-color: #efefef;\\r\\n  --error-color: #ff0000;\\r\\n  --valid-color: #228b22;\\r\\n}\\r\\n\\r\\n// html[data-theme='dark']\\r\\n.dark {\\r\\n  --primary-bg-color: #2e2828;\\r\\n  // --secondary-bg-color: ;\\r\\n  --modal-bg-color: #333131;\\r\\n  --primary-text-color: #fdf6fa;\\r\\n  --secondary-text-color: #2e2828;\\r\\n  --primary-btn-color: #f65151;\\r\\n  // --secondary-btn-color: ;\\r\\n  --primary-accent-color: #f361af;\\r\\n  // --secondary-accent-color: ;\\r\\n  --dropdown-menu-color: #333131;\\r\\n  // --switcher-color: #efefef;\\r\\n  --error-color: #ff0000;\\r\\n  --valid-color: #228b22;\\r\\n}\\r\\n\\r\\n$primary-bg-color: var(--primary-bg-color);\\r\\n// $secondary-bg-color: var(--secondary-bg-color);\\r\\n$modal-bg-color: var(--modal-bg-color);\\r\\n$primary-text-color: var(--primary-text-color);\\r\\n$secondary-text-color: var(--secondary-text-color);\\r\\n$primary-btn-color: var(--primary-btn-color);\\r\\n// $secondary-btn-color: var(--secondary-btn-color);\\r\\n$primary-accent-color: var(--primary-accent-color);\\r\\n// $secondary-accent-color: var(--secondary-accent-color);\\r\\n$dropdown-menu-color: var(--dropdown-menu-color);\\r\\n// $switcher-color: var(--switcher-color);\\r\\n$error-color: var(--error-color);\\r\\n$valid-color: var(--valid-color);\\r\\n//----------------------/COLORS---------------------//\\r\\n\\r\\n//----------------------MEDIA----------------------//\\r\\n$mobile: 'screen and (max-width: 479px)';\\r\\n$tablet: 'screen and (min-width: 480px)';\\r\\n$laptop: 'screen and (min-width: 768px)';\\r\\n$desktop: 'screen and (min-width: 1024px)';\\r\\n\\r\\n//----------------------/MEDIA---------------------//\\r\\n\\r\\n//-------------------DURATIONS-------------------//\\r\\n$fast: 200ms;\\r\\n$medium: 500ms;\\r\\n$slow: 2000ms;\\r\\n//-------------------/DURATIONS------------------//\\r\\n\\r\\n//-------------------FUNCTIONS-------------------//\\r\\n$primary-func: cubic-bezier(0.4, 0, 0.2, 1);\\r\\n//------------------/FUNCTIONS-------------------//\\r\\n\\r\\n//---------------------FONTS---------------------//\\r\\n$primary-font: 'Roboto', sans-serif;\\r\\n$secondary-font: 'Roboto', sans-serif;\\r\\n$cursive-font: 'Marck Script', cursive;\\r\\n//--------------------/FONTS---------------------//\\r\\n\",\".light {\\n  --primary-bg-color: #fdf6fa;\\n  --modal-bg-color: #ffebf6;\\n  --primary-text-color: #3f3038;\\n  --secondary-text-color: #fdf6fa;\\n  --primary-btn-color: #f361af;\\n  --primary-accent-color: #fdaed8;\\n  --dropdown-menu-color: #ffebf6;\\n  --error-color: #ff0000;\\n  --valid-color: #228b22;\\n}\\n\\n.dark {\\n  --primary-bg-color: #2e2828;\\n  --modal-bg-color: #333131;\\n  --primary-text-color: #fdf6fa;\\n  --secondary-text-color: #2e2828;\\n  --primary-btn-color: #f65151;\\n  --primary-accent-color: #f361af;\\n  --dropdown-menu-color: #333131;\\n  --error-color: #ff0000;\\n  --valid-color: #228b22;\\n}\\n\\n.auth {\\n  width: 100%;\\n  padding: 32;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"light\": \"Auth_light__UyFR2\",\n\t\"dark\": \"Auth_dark__q2KMQ\",\n\t\"auth\": \"Auth_auth__15DUs\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9tb2R1bGVzL0F1dGgvQXV0aC5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0EsOERBQThELGdDQUFnQyw4QkFBOEIsa0NBQWtDLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLG1DQUFtQywyQkFBMkIsMkJBQTJCLEdBQUcsdUJBQXVCLGdDQUFnQyw4QkFBOEIsa0NBQWtDLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLG1DQUFtQywyQkFBMkIsMkJBQTJCLEdBQUcsdUJBQXVCLGdCQUFnQixnQkFBZ0IsR0FBRyxPQUFPLHdJQUF3SSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSwySEFBMkgsa0NBQWtDLGdDQUFnQyxnQ0FBZ0Msb0NBQW9DLHNDQUFzQyxtQ0FBbUMsaUNBQWlDLHNDQUFzQyxvQ0FBb0MscUNBQXFDLG1DQUFtQyw2QkFBNkIsNkJBQTZCLEtBQUssNkNBQTZDLGtDQUFrQyxnQ0FBZ0MsZ0NBQWdDLG9DQUFvQyxzQ0FBc0MsbUNBQW1DLGlDQUFpQyxzQ0FBc0Msb0NBQW9DLHFDQUFxQyxtQ0FBbUMsNkJBQTZCLDZCQUE2QixLQUFLLG1EQUFtRCxzREFBc0QsMkNBQTJDLG1EQUFtRCx1REFBdUQsaURBQWlELHdEQUF3RCx1REFBdUQsOERBQThELHFEQUFxRCw4Q0FBOEMscUNBQXFDLHFDQUFxQyxvS0FBb0ssNkNBQTZDLDZDQUE2QywrQ0FBK0MseUlBQXlJLG1CQUFtQixrQkFBa0Isa0tBQWtLLDBKQUEwSiwwQ0FBMEMsMkNBQTJDLHNFQUFzRSxnQ0FBZ0MsOEJBQThCLGtDQUFrQyxvQ0FBb0MsaUNBQWlDLG9DQUFvQyxtQ0FBbUMsMkJBQTJCLDJCQUEyQixHQUFHLFdBQVcsZ0NBQWdDLDhCQUE4QixrQ0FBa0Msb0NBQW9DLGlDQUFpQyxvQ0FBb0MsbUNBQW1DLDJCQUEyQiwyQkFBMkIsR0FBRyxXQUFXLGdCQUFnQixnQkFBZ0IsR0FBRyxtQkFBbUI7QUFDcDFJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2R1bGVzL0F1dGgvQXV0aC5tb2R1bGUuc2Nzcz80ODZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXV0aF9saWdodF9fVXlGUjIge1xcbiAgLS1wcmltYXJ5LWJnLWNvbG9yOiAjZmRmNmZhO1xcbiAgLS1tb2RhbC1iZy1jb2xvcjogI2ZmZWJmNjtcXG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yOiAjM2YzMDM4O1xcbiAgLS1zZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZkZjZmYTtcXG4gIC0tcHJpbWFyeS1idG4tY29sb3I6ICNmMzYxYWY7XFxuICAtLXByaW1hcnktYWNjZW50LWNvbG9yOiAjZmRhZWQ4O1xcbiAgLS1kcm9wZG93bi1tZW51LWNvbG9yOiAjZmZlYmY2O1xcbiAgLS1lcnJvci1jb2xvcjogI2ZmMDAwMDtcXG4gIC0tdmFsaWQtY29sb3I6ICMyMjhiMjI7XFxufVxcblxcbi5BdXRoX2RhcmtfX3EyS01RIHtcXG4gIC0tcHJpbWFyeS1iZy1jb2xvcjogIzJlMjgyODtcXG4gIC0tbW9kYWwtYmctY29sb3I6ICMzMzMxMzE7XFxuICAtLXByaW1hcnktdGV4dC1jb2xvcjogI2ZkZjZmYTtcXG4gIC0tc2Vjb25kYXJ5LXRleHQtY29sb3I6ICMyZTI4Mjg7XFxuICAtLXByaW1hcnktYnRuLWNvbG9yOiAjZjY1MTUxO1xcbiAgLS1wcmltYXJ5LWFjY2VudC1jb2xvcjogI2YzNjFhZjtcXG4gIC0tZHJvcGRvd24tbWVudS1jb2xvcjogIzMzMzEzMTtcXG4gIC0tZXJyb3ItY29sb3I6ICNmZjAwMDA7XFxuICAtLXZhbGlkLWNvbG9yOiAjMjI4YjIyO1xcbn1cXG5cXG4uQXV0aF9hdXRoX18xNURVcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDMyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9tb2R1bGVzL0F1dGgvQXV0aC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLDJCQUFBO0VBRUEseUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFFQSwrQkFBQTtFQUVBLDhCQUFBO0VBRUEsc0JBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRFNBO0VBQ0UsMkJBQUE7RUFFQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUVBLCtCQUFBO0VBRUEsOEJBQUE7RUFFQSxzQkFBQTtFQUNBLHNCQUFBO0FDVkY7O0FBcEJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUF1QkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ09MT1JTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXFxyXFxuLy8gaHRtbFtkYXRhLXRoZW1lPSdsaWdodCddXFxyXFxuLmxpZ2h0IHtcXHJcXG4gIC0tcHJpbWFyeS1iZy1jb2xvcjogI2ZkZjZmYTtcXHJcXG4gIC8vIC0tc2Vjb25kYXJ5LWJnLWNvbG9yOiA7XFxyXFxuICAtLW1vZGFsLWJnLWNvbG9yOiAjZmZlYmY2O1xcclxcbiAgLS1wcmltYXJ5LXRleHQtY29sb3I6ICMzZjMwMzg7XFxyXFxuICAtLXNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmRmNmZhO1xcclxcbiAgLS1wcmltYXJ5LWJ0bi1jb2xvcjogI2YzNjFhZjtcXHJcXG4gIC8vIC0tc2Vjb25kYXJ5LWJ0bi1jb2xvcjogO1xcclxcbiAgLS1wcmltYXJ5LWFjY2VudC1jb2xvcjogI2ZkYWVkODtcXHJcXG4gIC8vIC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogO1xcclxcbiAgLS1kcm9wZG93bi1tZW51LWNvbG9yOiAjZmZlYmY2O1xcclxcbiAgLy8gLS1zd2l0Y2hlci1jb2xvcjogI2VmZWZlZjtcXHJcXG4gIC0tZXJyb3ItY29sb3I6ICNmZjAwMDA7XFxyXFxuICAtLXZhbGlkLWNvbG9yOiAjMjI4YjIyO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBodG1sW2RhdGEtdGhlbWU9J2RhcmsnXVxcclxcbi5kYXJrIHtcXHJcXG4gIC0tcHJpbWFyeS1iZy1jb2xvcjogIzJlMjgyODtcXHJcXG4gIC8vIC0tc2Vjb25kYXJ5LWJnLWNvbG9yOiA7XFxyXFxuICAtLW1vZGFsLWJnLWNvbG9yOiAjMzMzMTMxO1xcclxcbiAgLS1wcmltYXJ5LXRleHQtY29sb3I6ICNmZGY2ZmE7XFxyXFxuICAtLXNlY29uZGFyeS10ZXh0LWNvbG9yOiAjMmUyODI4O1xcclxcbiAgLS1wcmltYXJ5LWJ0bi1jb2xvcjogI2Y2NTE1MTtcXHJcXG4gIC8vIC0tc2Vjb25kYXJ5LWJ0bi1jb2xvcjogO1xcclxcbiAgLS1wcmltYXJ5LWFjY2VudC1jb2xvcjogI2YzNjFhZjtcXHJcXG4gIC8vIC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogO1xcclxcbiAgLS1kcm9wZG93bi1tZW51LWNvbG9yOiAjMzMzMTMxO1xcclxcbiAgLy8gLS1zd2l0Y2hlci1jb2xvcjogI2VmZWZlZjtcXHJcXG4gIC0tZXJyb3ItY29sb3I6ICNmZjAwMDA7XFxyXFxuICAtLXZhbGlkLWNvbG9yOiAjMjI4YjIyO1xcclxcbn1cXHJcXG5cXHJcXG4kcHJpbWFyeS1iZy1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvcik7XFxyXFxuLy8gJHNlY29uZGFyeS1iZy1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcXHJcXG4kbW9kYWwtYmctY29sb3I6IHZhcigtLW1vZGFsLWJnLWNvbG9yKTtcXHJcXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xcclxcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xcclxcbiRwcmltYXJ5LWJ0bi1jb2xvcjogdmFyKC0tcHJpbWFyeS1idG4tY29sb3IpO1xcclxcbi8vICRzZWNvbmRhcnktYnRuLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYnRuLWNvbG9yKTtcXHJcXG4kcHJpbWFyeS1hY2NlbnQtY29sb3I6IHZhcigtLXByaW1hcnktYWNjZW50LWNvbG9yKTtcXHJcXG4vLyAkc2Vjb25kYXJ5LWFjY2VudC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWFjY2VudC1jb2xvcik7XFxyXFxuJGRyb3Bkb3duLW1lbnUtY29sb3I6IHZhcigtLWRyb3Bkb3duLW1lbnUtY29sb3IpO1xcclxcbi8vICRzd2l0Y2hlci1jb2xvcjogdmFyKC0tc3dpdGNoZXItY29sb3IpO1xcclxcbiRlcnJvci1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiR2YWxpZC1jb2xvcjogdmFyKC0tdmFsaWQtY29sb3IpO1xcclxcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9DT0xPUlMtLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xcclxcblxcclxcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1FRElBLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXFxyXFxuJG1vYmlsZTogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpJztcXHJcXG4kdGFibGV0OiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCknO1xcclxcbiRsYXB0b3A6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSc7XFxyXFxuJGRlc2t0b3A6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknO1xcclxcblxcclxcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9NRURJQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXFxyXFxuXFxyXFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tRFVSQVRJT05TLS0tLS0tLS0tLS0tLS0tLS0tLS8vXFxyXFxuJGZhc3Q6IDIwMG1zO1xcclxcbiRtZWRpdW06IDUwMG1zO1xcclxcbiRzbG93OiAyMDAwbXM7XFxyXFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tL0RVUkFUSU9OUy0tLS0tLS0tLS0tLS0tLS0tLS8vXFxyXFxuXFxyXFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tRlVOQ1RJT05TLS0tLS0tLS0tLS0tLS0tLS0tLS8vXFxyXFxuJHByaW1hcnktZnVuYzogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS9GVU5DVElPTlMtLS0tLS0tLS0tLS0tLS0tLS0tLy9cXHJcXG5cXHJcXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLUZPTlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cXHJcXG4kcHJpbWFyeS1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4kc2Vjb25kYXJ5LWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiRjdXJzaXZlLWZvbnQ6ICdNYXJjayBTY3JpcHQnLCBjdXJzaXZlO1xcclxcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0vRk9OVFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xcclxcblwiLFwiLmxpZ2h0IHtcXG4gIC0tcHJpbWFyeS1iZy1jb2xvcjogI2ZkZjZmYTtcXG4gIC0tbW9kYWwtYmctY29sb3I6ICNmZmViZjY7XFxuICAtLXByaW1hcnktdGV4dC1jb2xvcjogIzNmMzAzODtcXG4gIC0tc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZGY2ZmE7XFxuICAtLXByaW1hcnktYnRuLWNvbG9yOiAjZjM2MWFmO1xcbiAgLS1wcmltYXJ5LWFjY2VudC1jb2xvcjogI2ZkYWVkODtcXG4gIC0tZHJvcGRvd24tbWVudS1jb2xvcjogI2ZmZWJmNjtcXG4gIC0tZXJyb3ItY29sb3I6ICNmZjAwMDA7XFxuICAtLXZhbGlkLWNvbG9yOiAjMjI4YjIyO1xcbn1cXG5cXG4uZGFyayB7XFxuICAtLXByaW1hcnktYmctY29sb3I6ICMyZTI4Mjg7XFxuICAtLW1vZGFsLWJnLWNvbG9yOiAjMzMzMTMxO1xcbiAgLS1wcmltYXJ5LXRleHQtY29sb3I6ICNmZGY2ZmE7XFxuICAtLXNlY29uZGFyeS10ZXh0LWNvbG9yOiAjMmUyODI4O1xcbiAgLS1wcmltYXJ5LWJ0bi1jb2xvcjogI2Y2NTE1MTtcXG4gIC0tcHJpbWFyeS1hY2NlbnQtY29sb3I6ICNmMzYxYWY7XFxuICAtLWRyb3Bkb3duLW1lbnUtY29sb3I6ICMzMzMxMzE7XFxuICAtLWVycm9yLWNvbG9yOiAjZmYwMDAwO1xcbiAgLS12YWxpZC1jb2xvcjogIzIyOGIyMjtcXG59XFxuXFxuLmF1dGgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAzMjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibGlnaHRcIjogXCJBdXRoX2xpZ2h0X19VeUZSMlwiLFxuXHRcImRhcmtcIjogXCJBdXRoX2RhcmtfX3EyS01RXCIsXG5cdFwiYXV0aFwiOiBcIkF1dGhfYXV0aF9fMTVEVXNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/modules/Auth/Auth.module.scss\n"));

/***/ })

});