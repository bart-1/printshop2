"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkprintshop2"] = self["webpackChunkprintshop2"] || []).push([["resources_js_Pages_AdminTools_colorHelpers_manageCssStoredData_ts"],{

/***/ "./resources/js/Pages/AdminTools/colorHelpers/manageCssStoredData.ts":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/AdminTools/colorHelpers/manageCssStoredData.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.mergeCssStoredDataWithStyles = exports.addCssDataStringToElementStyles = exports.convertCssDataToString = exports.filterCssDataByActualTheme = void 0;\nvar mainHtmlElement = document.getElementsByTagName(\"html\");\nvar theme = mainHtmlElement[0].attributes[0].value;\nvar themeDataSetElement = document.querySelectorAll(\"[data-theme=\".concat(theme, \"]\"));\n\nfunction filterCssDataByActualTheme(cssStoredData, colorTheme) {\n  if (colorTheme === \"light\" && cssStoredData) {\n    return cssStoredData.filter(function (el) {\n      return el.theme !== \"dark\";\n    });\n  } else if (colorTheme === \"dark\" && cssStoredData) return cssStoredData.filter(function (el) {\n    return el.theme !== \"light\";\n  });else {\n    return cssStoredData;\n  }\n}\n\nexports.filterCssDataByActualTheme = filterCssDataByActualTheme;\n\nfunction convertCssDataToString(cssStoredData) {\n  var cssStoredDataString = \"\";\n  cssStoredData.forEach(function (el) {\n    cssStoredDataString += \"\".concat(el.property, \": \").concat(el.value, \"; \");\n  });\n  return cssStoredDataString;\n}\n\nexports.convertCssDataToString = convertCssDataToString;\n\nfunction addCssDataStringToElementStyles(element, cssStoredDataString) {\n  if (element) element.setAttribute(\"style\", cssStoredDataString);\n}\n\nexports.addCssDataStringToElementStyles = addCssDataStringToElementStyles;\n\nfunction mergeCssStoredDataWithStyles(cssStoredData, colorTheme) {\n  var filterTheme = filterCssDataByActualTheme(cssStoredData, colorTheme);\n  var cssString = convertCssDataToString(filterTheme);\n  addCssDataStringToElementStyles(themeDataSetElement[0], cssString);\n}\n\nexports.mergeCssStoredDataWithStyles = mergeCssStoredDataWithStyles;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW5Ub29scy9jb2xvckhlbHBlcnMvbWFuYWdlQ3NzU3RvcmVkRGF0YS50cy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFDYkEsOENBQTZDO0FBQUVHLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDO0FBQ0FELG9DQUFBLEdBQXVDQSx1Q0FBQSxHQUEwQ0EsOEJBQUEsR0FBaUNBLGtDQUFBLEdBQXFDLEtBQUssQ0FBNUo7QUFDQSxJQUFNTSxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0Msb0JBQVQsUUFBeEI7QUFDQSxJQUFNQyxLQUFLLEdBQUdILGVBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJJLFVBQW5CLENBQThCLENBQTlCLEVBQWlDVCxLQUEvQztBQUNBLElBQU1VLG1CQUFtQixHQUFHSixRQUFRLENBQUNLLGdCQUFULHVCQUF5Q0gsS0FBekMsT0FBNUI7O0FBQ0EsU0FBU0osMEJBQVQsQ0FBb0NRLGFBQXBDLEVBQW1EQyxVQUFuRCxFQUErRDtBQUMzRCxNQUFJQSxVQUFVLEtBQUssT0FBZixJQUEwQkQsYUFBOUIsRUFBNkM7QUFDekMsV0FBT0EsYUFBYSxDQUFDRSxNQUFkLENBQXFCLFVBQUNDLEVBQUQ7QUFBQSxhQUFRQSxFQUFFLENBQUNQLEtBQUgsS0FBYSxNQUFyQjtBQUFBLEtBQXJCLENBQVA7QUFDSCxHQUZELE1BR0ssSUFBSUssVUFBVSxLQUFLLE1BQWYsSUFBeUJELGFBQTdCLEVBQ0QsT0FBT0EsYUFBYSxDQUFDRSxNQUFkLENBQXFCLFVBQUNDLEVBQUQ7QUFBQSxXQUFRQSxFQUFFLENBQUNQLEtBQUgsS0FBYSxPQUFyQjtBQUFBLEdBQXJCLENBQVAsQ0FEQyxLQUVBO0FBQ0QsV0FBT0ksYUFBUDtBQUNIO0FBQ0o7O0FBQ0RiLGtDQUFBLEdBQXFDSywwQkFBckM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NTLGFBQWhDLEVBQStDO0FBQzNDLE1BQUlJLG1CQUFtQixHQUFHLEVBQTFCO0FBQ0FKLEVBQUFBLGFBQWEsQ0FBQ0ssT0FBZCxDQUFzQixVQUFDRixFQUFELEVBQVE7QUFDMUJDLElBQUFBLG1CQUFtQixjQUFPRCxFQUFFLENBQUNHLFFBQVYsZUFBdUJILEVBQUUsQ0FBQ2YsS0FBMUIsT0FBbkI7QUFDSCxHQUZEO0FBR0EsU0FBT2dCLG1CQUFQO0FBQ0g7O0FBQ0RqQiw4QkFBQSxHQUFpQ0ksc0JBQWpDOztBQUNBLFNBQVNELCtCQUFULENBQXlDaUIsT0FBekMsRUFBa0RILG1CQUFsRCxFQUF1RTtBQUNuRSxNQUFJRyxPQUFKLEVBQ0lBLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQixPQUFyQixFQUE4QkosbUJBQTlCO0FBQ1A7O0FBQ0RqQix1Q0FBQSxHQUEwQ0csK0JBQTFDOztBQUNBLFNBQVNELDRCQUFULENBQXNDVyxhQUF0QyxFQUFxREMsVUFBckQsRUFBaUU7QUFDN0QsTUFBTVEsV0FBVyxHQUFHakIsMEJBQTBCLENBQUNRLGFBQUQsRUFBZ0JDLFVBQWhCLENBQTlDO0FBQ0EsTUFBTVMsU0FBUyxHQUFHbkIsc0JBQXNCLENBQUNrQixXQUFELENBQXhDO0FBQ0FuQixFQUFBQSwrQkFBK0IsQ0FBQ1EsbUJBQW1CLENBQUMsQ0FBRCxDQUFwQixFQUF5QlksU0FBekIsQ0FBL0I7QUFDSDs7QUFDRHZCLG9DQUFBLEdBQXVDRSw0QkFBdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmludHNob3AyLy4vcmVzb3VyY2VzL2pzL1BhZ2VzL0FkbWluVG9vbHMvY29sb3JIZWxwZXJzL21hbmFnZUNzc1N0b3JlZERhdGEudHM/OTE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWVyZ2VDc3NTdG9yZWREYXRhV2l0aFN0eWxlcyA9IGV4cG9ydHMuYWRkQ3NzRGF0YVN0cmluZ1RvRWxlbWVudFN0eWxlcyA9IGV4cG9ydHMuY29udmVydENzc0RhdGFUb1N0cmluZyA9IGV4cG9ydHMuZmlsdGVyQ3NzRGF0YUJ5QWN0dWFsVGhlbWUgPSB2b2lkIDA7XG5jb25zdCBtYWluSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShgaHRtbGApO1xuY29uc3QgdGhlbWUgPSBtYWluSHRtbEVsZW1lbnRbMF0uYXR0cmlidXRlc1swXS52YWx1ZTtcbmNvbnN0IHRoZW1lRGF0YVNldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10aGVtZT0ke3RoZW1lfV1gKTtcbmZ1bmN0aW9uIGZpbHRlckNzc0RhdGFCeUFjdHVhbFRoZW1lKGNzc1N0b3JlZERhdGEsIGNvbG9yVGhlbWUpIHtcbiAgICBpZiAoY29sb3JUaGVtZSA9PT0gXCJsaWdodFwiICYmIGNzc1N0b3JlZERhdGEpIHtcbiAgICAgICAgcmV0dXJuIGNzc1N0b3JlZERhdGEuZmlsdGVyKChlbCkgPT4gZWwudGhlbWUgIT09IFwiZGFya1wiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29sb3JUaGVtZSA9PT0gXCJkYXJrXCIgJiYgY3NzU3RvcmVkRGF0YSlcbiAgICAgICAgcmV0dXJuIGNzc1N0b3JlZERhdGEuZmlsdGVyKChlbCkgPT4gZWwudGhlbWUgIT09IFwibGlnaHRcIik7XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjc3NTdG9yZWREYXRhO1xuICAgIH1cbn1cbmV4cG9ydHMuZmlsdGVyQ3NzRGF0YUJ5QWN0dWFsVGhlbWUgPSBmaWx0ZXJDc3NEYXRhQnlBY3R1YWxUaGVtZTtcbmZ1bmN0aW9uIGNvbnZlcnRDc3NEYXRhVG9TdHJpbmcoY3NzU3RvcmVkRGF0YSkge1xuICAgIGxldCBjc3NTdG9yZWREYXRhU3RyaW5nID0gXCJcIjtcbiAgICBjc3NTdG9yZWREYXRhLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGNzc1N0b3JlZERhdGFTdHJpbmcgKz0gYCR7ZWwucHJvcGVydHl9OiAke2VsLnZhbHVlfTsgYDtcbiAgICB9KTtcbiAgICByZXR1cm4gY3NzU3RvcmVkRGF0YVN0cmluZztcbn1cbmV4cG9ydHMuY29udmVydENzc0RhdGFUb1N0cmluZyA9IGNvbnZlcnRDc3NEYXRhVG9TdHJpbmc7XG5mdW5jdGlvbiBhZGRDc3NEYXRhU3RyaW5nVG9FbGVtZW50U3R5bGVzKGVsZW1lbnQsIGNzc1N0b3JlZERhdGFTdHJpbmcpIHtcbiAgICBpZiAoZWxlbWVudClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBjc3NTdG9yZWREYXRhU3RyaW5nKTtcbn1cbmV4cG9ydHMuYWRkQ3NzRGF0YVN0cmluZ1RvRWxlbWVudFN0eWxlcyA9IGFkZENzc0RhdGFTdHJpbmdUb0VsZW1lbnRTdHlsZXM7XG5mdW5jdGlvbiBtZXJnZUNzc1N0b3JlZERhdGFXaXRoU3R5bGVzKGNzc1N0b3JlZERhdGEsIGNvbG9yVGhlbWUpIHtcbiAgICBjb25zdCBmaWx0ZXJUaGVtZSA9IGZpbHRlckNzc0RhdGFCeUFjdHVhbFRoZW1lKGNzc1N0b3JlZERhdGEsIGNvbG9yVGhlbWUpO1xuICAgIGNvbnN0IGNzc1N0cmluZyA9IGNvbnZlcnRDc3NEYXRhVG9TdHJpbmcoZmlsdGVyVGhlbWUpO1xuICAgIGFkZENzc0RhdGFTdHJpbmdUb0VsZW1lbnRTdHlsZXModGhlbWVEYXRhU2V0RWxlbWVudFswXSwgY3NzU3RyaW5nKTtcbn1cbmV4cG9ydHMubWVyZ2VDc3NTdG9yZWREYXRhV2l0aFN0eWxlcyA9IG1lcmdlQ3NzU3RvcmVkRGF0YVdpdGhTdHlsZXM7XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJtZXJnZUNzc1N0b3JlZERhdGFXaXRoU3R5bGVzIiwiYWRkQ3NzRGF0YVN0cmluZ1RvRWxlbWVudFN0eWxlcyIsImNvbnZlcnRDc3NEYXRhVG9TdHJpbmciLCJmaWx0ZXJDc3NEYXRhQnlBY3R1YWxUaGVtZSIsIm1haW5IdG1sRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0aGVtZSIsImF0dHJpYnV0ZXMiLCJ0aGVtZURhdGFTZXRFbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNzc1N0b3JlZERhdGEiLCJjb2xvclRoZW1lIiwiZmlsdGVyIiwiZWwiLCJjc3NTdG9yZWREYXRhU3RyaW5nIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiZWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImZpbHRlclRoZW1lIiwiY3NzU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Pages/AdminTools/colorHelpers/manageCssStoredData.ts\n");

/***/ })

}]);