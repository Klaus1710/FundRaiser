"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\nfunction CampaignIndex(param) {\n    var campaigns = param.campaigns;\n    var _this = this;\n    var items = campaigns.map(function(item) {\n        return {\n            header: item,\n            description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: \"View Campaign\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Fund Raiser\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 20\n            }, _this),\n            fluid: true\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"  \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                async: true,\n                rel: \"stylesheet\",\n                href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Fund Raiser\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Group, {\n                items: items\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Fund Raiser\\\\pages\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\Fund Raiser\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = CampaignIndex;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\nvar _c;\n$RefreshReg$(_c, \"CampaignIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBeUM7QUFHekMsU0FBU0MsYUFBYSxDQUFDLEtBQWEsRUFBRTtRQUFmLFNBQVcsR0FBWCxLQUFhLENBQVhDLFNBQVM7O0lBQ2hDLElBQU1DLEtBQUssR0FBR0QsU0FBUyxDQUFDRSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO1FBQ3BDLE9BQU87WUFDTEMsTUFBTSxFQUFFRCxJQUFJO1lBQ1pFLFdBQVcsZ0JBQUUsOERBQUNDLEdBQUM7MEJBQUMsZUFBYTs7Ozs7cUJBQUk7WUFDakNDLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLHFCQUNFLDhEQUFDQyxLQUFHOztZQUFDLElBQUU7MEJBQUEsOERBQUNDLE1BQUk7Z0JBQ1pDLEtBQUs7Z0JBQ0xDLEdBQUcsRUFBQyxZQUFZO2dCQUNoQkMsSUFBSSxFQUFDLGtFQUFrRTs7Ozs7b0JBQ3ZFOzBCQUNFLDhEQUFDZCx5REFBVTtnQkFBQ0csS0FBSyxFQUFFQSxLQUFLOzs7OztvQkFBSTs7Ozs7O1lBQ3hCLENBQ047QUFDSixDQUFDO0FBbEJRRixLQUFBQSxhQUFhOztBQTBCdEIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuXHJcbmZ1bmN0aW9uIENhbXBhaWduSW5kZXgoeyBjYW1wYWlnbnMgfSkge1xyXG4gIGNvbnN0IGl0ZW1zID0gY2FtcGFpZ25zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGVhZGVyOiBpdGVtLFxyXG4gICAgICBkZXNjcmlwdGlvbjogPGE+VmlldyBDYW1wYWlnbjwvYT4sXHJcbiAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+ICA8bGlua1xyXG4gICAgYXN5bmNcclxuICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxyXG4gIC8+XHJcbiAgICAgIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBjYW1wYWlnbnMgfSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xyXG4iXSwibmFtZXMiOlsiQ2FyZCIsIkNhbXBhaWduSW5kZXgiLCJjYW1wYWlnbnMiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImEiLCJmbHVpZCIsImRpdiIsImxpbmsiLCJhc3luYyIsInJlbCIsImhyZWYiLCJHcm91cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});