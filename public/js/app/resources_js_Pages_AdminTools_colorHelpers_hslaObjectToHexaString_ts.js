"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkprintshop2"] = self["webpackChunkprintshop2"] || []).push([["resources_js_Pages_AdminTools_colorHelpers_hslaObjectToHexaString_ts"],{

/***/ "./resources/js/Pages/AdminTools/colorHelpers/hslaObjectToHexaString.ts":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/AdminTools/colorHelpers/hslaObjectToHexaString.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.hslaObjectToHexaString = void 0;\n\nvar hslaObjectToRgbaObject_1 = __webpack_require__(/*! ./hslaObjectToRgbaObject */ \"./resources/js/Pages/AdminTools/colorHelpers/hslaObjectToRgbaObject.ts\");\n\nvar rgbaObjectToHexaString_1 = __webpack_require__(/*! ./rgbaObjectToHexaString */ \"./resources/js/Pages/AdminTools/colorHelpers/rgbaObjectToHexaString.ts\");\n/**\n *@param {objectHsla} colorHsla color as objectHsla\n *@return {string} color as hex string (with alpha)\n *@see /hslaObjectToRgbaObject()\n *@see /rgbaObjectToHexaString()\n */\n\n\nfunction hslaObjectToHexaString(colorHsla) {\n  var rgbaColor = (0, hslaObjectToRgbaObject_1.hslaObjectToRgbaObject)(colorHsla);\n  return (0, rgbaObjectToHexaString_1.rgbaObjectToHexaString)(rgbaColor);\n}\n\nexports.hslaObjectToHexaString = hslaObjectToHexaString;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW5Ub29scy9jb2xvckhlbHBlcnMvaHNsYU9iamVjdFRvSGV4YVN0cmluZy50cy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFDYkEsOENBQTZDO0FBQUVHLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDO0FBQ0FELDhCQUFBLEdBQWlDLEtBQUssQ0FBdEM7O0FBQ0EsSUFBTUcsd0JBQXdCLEdBQUdDLG1CQUFPLENBQUMsd0dBQUQsQ0FBeEM7O0FBQ0EsSUFBTUMsd0JBQXdCLEdBQUdELG1CQUFPLENBQUMsd0dBQUQsQ0FBeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNGLHNCQUFULENBQWdDSSxTQUFoQyxFQUEyQztBQUN2QyxNQUFNQyxTQUFTLEdBQUcsQ0FBQyxHQUFHSix3QkFBd0IsQ0FBQ0ssc0JBQTdCLEVBQXFERixTQUFyRCxDQUFsQjtBQUNBLFNBQU8sQ0FBQyxHQUFHRCx3QkFBd0IsQ0FBQ0ksc0JBQTdCLEVBQXFERixTQUFyRCxDQUFQO0FBQ0g7O0FBQ0RQLDhCQUFBLEdBQWlDRSxzQkFBakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmludHNob3AyLy4vcmVzb3VyY2VzL2pzL1BhZ2VzL0FkbWluVG9vbHMvY29sb3JIZWxwZXJzL2hzbGFPYmplY3RUb0hleGFTdHJpbmcudHM/NzU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaHNsYU9iamVjdFRvSGV4YVN0cmluZyA9IHZvaWQgMDtcbmNvbnN0IGhzbGFPYmplY3RUb1JnYmFPYmplY3RfMSA9IHJlcXVpcmUoXCIuL2hzbGFPYmplY3RUb1JnYmFPYmplY3RcIik7XG5jb25zdCByZ2JhT2JqZWN0VG9IZXhhU3RyaW5nXzEgPSByZXF1aXJlKFwiLi9yZ2JhT2JqZWN0VG9IZXhhU3RyaW5nXCIpO1xuLyoqXG4gKkBwYXJhbSB7b2JqZWN0SHNsYX0gY29sb3JIc2xhIGNvbG9yIGFzIG9iamVjdEhzbGFcbiAqQHJldHVybiB7c3RyaW5nfSBjb2xvciBhcyBoZXggc3RyaW5nICh3aXRoIGFscGhhKVxuICpAc2VlIC9oc2xhT2JqZWN0VG9SZ2JhT2JqZWN0KClcbiAqQHNlZSAvcmdiYU9iamVjdFRvSGV4YVN0cmluZygpXG4gKi9cbmZ1bmN0aW9uIGhzbGFPYmplY3RUb0hleGFTdHJpbmcoY29sb3JIc2xhKSB7XG4gICAgY29uc3QgcmdiYUNvbG9yID0gKDAsIGhzbGFPYmplY3RUb1JnYmFPYmplY3RfMS5oc2xhT2JqZWN0VG9SZ2JhT2JqZWN0KShjb2xvckhzbGEpO1xuICAgIHJldHVybiAoMCwgcmdiYU9iamVjdFRvSGV4YVN0cmluZ18xLnJnYmFPYmplY3RUb0hleGFTdHJpbmcpKHJnYmFDb2xvcik7XG59XG5leHBvcnRzLmhzbGFPYmplY3RUb0hleGFTdHJpbmcgPSBoc2xhT2JqZWN0VG9IZXhhU3RyaW5nO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiaHNsYU9iamVjdFRvSGV4YVN0cmluZyIsImhzbGFPYmplY3RUb1JnYmFPYmplY3RfMSIsInJlcXVpcmUiLCJyZ2JhT2JqZWN0VG9IZXhhU3RyaW5nXzEiLCJjb2xvckhzbGEiLCJyZ2JhQ29sb3IiLCJoc2xhT2JqZWN0VG9SZ2JhT2JqZWN0IiwicmdiYU9iamVjdFRvSGV4YVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Pages/AdminTools/colorHelpers/hslaObjectToHexaString.ts\n");

/***/ }),

/***/ "./resources/js/Pages/AdminTools/colorHelpers/hslaObjectToRgbaObject.ts":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/AdminTools/colorHelpers/hslaObjectToRgbaObject.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.hslaObjectToRgbaObject = void 0;\n\nfunction validateColorParameters(param, min, max) {\n  if (min > param) return param = min;else if (param > max) return param = max;else return param;\n}\n/**\n *\n *@param {objectHsla} colorHsla color as objectHsla\n *@return {objectRgba} color as RGBA object\n */\n\n\nfunction hslaObjectToRgbaObject(colorHsla) {\n  var h = colorHsla.h,\n      s = colorHsla.s,\n      l = colorHsla.l,\n      a = colorHsla.a;\n  if (0 > h || h >= 360) h = Math.abs(h) % 360;\n  s = validateColorParameters(s, 0, 100);\n  l = validateColorParameters(l, 0, 100);\n  a = validateColorParameters(a, 0, 100);\n  var c = (1 - Math.abs(2 * (l / 100) - 1)) * (s / 100);\n  var x = c * (1 - Math.abs(h / 60 % 2 - 1));\n  var m = l / 100 - c / 2;\n\n  function calcFinalRgb(value) {\n    return Math.round((value + m) * 255);\n  }\n\n  var rgbaColor = {\n    r: 0,\n    g: 0,\n    b: 0,\n    a: 0\n  };\n\n  switch (true) {\n    case 0 <= h && h < 60:\n      rgbaColor = {\n        r: calcFinalRgb(c),\n        g: calcFinalRgb(x),\n        b: calcFinalRgb(0),\n        a: a\n      };\n      break;\n\n    case 60 <= h && h < 120:\n      rgbaColor = {\n        r: calcFinalRgb(x),\n        g: calcFinalRgb(c),\n        b: calcFinalRgb(0),\n        a: a\n      };\n      break;\n\n    case 120 <= h && h < 180:\n      rgbaColor = {\n        r: calcFinalRgb(0),\n        g: calcFinalRgb(c),\n        b: calcFinalRgb(x),\n        a: a\n      };\n      break;\n\n    case 180 <= h && h < 240:\n      rgbaColor = {\n        r: calcFinalRgb(0),\n        g: calcFinalRgb(x),\n        b: calcFinalRgb(c),\n        a: a\n      };\n      break;\n\n    case 240 <= h && h < 300:\n      rgbaColor = {\n        r: calcFinalRgb(x),\n        g: calcFinalRgb(0),\n        b: calcFinalRgb(c),\n        a: a\n      };\n      break;\n\n    case 300 <= h && h < 360:\n      rgbaColor = {\n        r: calcFinalRgb(c),\n        g: calcFinalRgb(0),\n        b: calcFinalRgb(x),\n        a: a\n      };\n      break;\n  }\n\n  return rgbaColor;\n}\n\nexports.hslaObjectToRgbaObject = hslaObjectToRgbaObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW5Ub29scy9jb2xvckhlbHBlcnMvaHNsYU9iamVjdFRvUmdiYU9iamVjdC50cy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFDYkEsOENBQTZDO0FBQUVHLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDO0FBQ0FELDhCQUFBLEdBQWlDLEtBQUssQ0FBdEM7O0FBQ0EsU0FBU0csdUJBQVQsQ0FBaUNDLEtBQWpDLEVBQXdDQyxHQUF4QyxFQUE2Q0MsR0FBN0MsRUFBa0Q7QUFDOUMsTUFBSUQsR0FBRyxHQUFHRCxLQUFWLEVBQ0ksT0FBUUEsS0FBSyxHQUFHQyxHQUFoQixDQURKLEtBRUssSUFBSUQsS0FBSyxHQUFHRSxHQUFaLEVBQ0QsT0FBUUYsS0FBSyxHQUFHRSxHQUFoQixDQURDLEtBR0QsT0FBT0YsS0FBUDtBQUNQO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0Ysc0JBQVQsQ0FBZ0NLLFNBQWhDLEVBQTJDO0FBQ3ZDLE1BQU1DLENBQU4sR0FBcUJELFNBQXJCLENBQU1DLENBQU47QUFBQSxNQUFTQyxDQUFULEdBQXFCRixTQUFyQixDQUFTRSxDQUFUO0FBQUEsTUFBWUMsQ0FBWixHQUFxQkgsU0FBckIsQ0FBWUcsQ0FBWjtBQUFBLE1BQWVDLENBQWYsR0FBcUJKLFNBQXJCLENBQWVJLENBQWY7QUFDQSxNQUFJLElBQUlILENBQUosSUFBU0EsQ0FBQyxJQUFJLEdBQWxCLEVBQ0lBLENBQUMsR0FBR0ksSUFBSSxDQUFDQyxHQUFMLENBQVNMLENBQVQsSUFBYyxHQUFsQjtBQUNKQyxFQUFBQSxDQUFDLEdBQUdOLHVCQUF1QixDQUFDTSxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsQ0FBM0I7QUFDQUMsRUFBQUEsQ0FBQyxHQUFHUCx1QkFBdUIsQ0FBQ08sQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBQTNCO0FBQ0FDLEVBQUFBLENBQUMsR0FBR1IsdUJBQXVCLENBQUNRLENBQUQsRUFBSSxDQUFK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LFNBQVMsR0FBRztBQUNSQyxRQUFBQSxDQUFDLEVBQUVILFlBQVksQ0FBQ0gsQ0FBRCxDQURQO0FBRVJPLFFBQUFBLENBQUMsRUFBRUosWUFBWSxDQUFDLENBQUQsQ0FGUDtBQUdSSyxRQUFBQSxDQUFDLEVBQUVMLFlBQVksQ0FBQ0YsQ0FBRCxDQUhQO0FBSVJKLFFBQUFBLENBQUMsRUFBRUE7QUFKSyxPQUFaO0FBTUE7QUFoRFI7O0FBa0RBLFNBQU9RLFNBQVA7QUFDSDs7QUFDRG5CLDhCQUFBLEdBQWlDRSxzQkFBakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmludHNob3AyLy4vcmVzb3VyY2VzL2pzL1BhZ2VzL0FkbWluVG9vbHMvY29sb3JIZWxwZXJzL2hzbGFPYmplY3RUb1JnYmFPYmplY3QudHM/MWY1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaHNsYU9iamVjdFRvUmdiYU9iamVjdCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHZhbGlkYXRlQ29sb3JQYXJhbWV0ZXJzKHBhcmFtLCBtaW4sIG1heCkge1xuICAgIGlmIChtaW4gPiBwYXJhbSlcbiAgICAgICAgcmV0dXJuIChwYXJhbSA9IG1pbik7XG4gICAgZWxzZSBpZiAocGFyYW0gPiBtYXgpXG4gICAgICAgIHJldHVybiAocGFyYW0gPSBtYXgpO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHBhcmFtO1xufVxuLyoqXG4gKlxuICpAcGFyYW0ge29iamVjdEhzbGF9IGNvbG9ySHNsYSBjb2xvciBhcyBvYmplY3RIc2xhXG4gKkByZXR1cm4ge29iamVjdFJnYmF9IGNvbG9yIGFzIFJHQkEgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGhzbGFPYmplY3RUb1JnYmFPYmplY3QoY29sb3JIc2xhKSB7XG4gICAgbGV0IHsgaCwgcywgbCwgYSB9ID0gY29sb3JIc2xhO1xuICAgIGlmICgwID4gaCB8fCBoID49IDM2MClcbiAgICAgICAgaCA9IE1hdGguYWJzKGgpICUgMzYwO1xuICAgIHMgPSB2YWxpZGF0ZUNvbG9yUGFyYW1ldGVycyhzLCAwLCAxMDApO1xuICAgIGwgPSB2YWxpZGF0ZUNvbG9yUGFyYW1ldGVycyhsLCAwLCAxMDApO1xuICAgIGEgPSB2YWxpZGF0ZUNvbG9yUGFyYW1ldGVycyhhLCAwLCAxMDApO1xuICAgIGxldCBjID0gKDEgLSBNYXRoLmFicygyICogKGwgLyAxMDApIC0gMSkpICogKHMgLyAxMDApO1xuICAgIGxldCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKChoIC8gNjApICUgMikgLSAxKSk7XG4gICAgbGV0IG0gPSBsIC8gMTAwIC0gYyAvIDI7XG4gICAgZnVuY3Rpb24gY2FsY0ZpbmFsUmdiKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCh2YWx1ZSArIG0pICogMjU1KTtcbiAgICB9XG4gICAgbGV0IHJnYmFDb2xvciA9IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9O1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIDAgPD0gaCAmJiBoIDwgNjA6XG4gICAgICAgICAgICByZ2JhQ29sb3IgPSB7XG4gICAgICAgICAgICAgICAgcjogY2FsY0ZpbmFsUmdiKGMpLFxuICAgICAgICAgICAgICAgIGc6IGNhbGNGaW5hbFJnYih4KSxcbiAgICAgICAgICAgICAgICBiOiBjYWxjRmluYWxSZ2IoMCksXG4gICAgICAgICAgICAgICAgYTogYSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2MCA8PSBoICYmIGggPCAxMjA6XG4gICAgICAgICAgICByZ2JhQ29sb3IgPSB7XG4gICAgICAgICAgICAgICAgcjogY2FsY0ZpbmFsUmdiKHgpLFxuICAgICAgICAgICAgICAgIGc6IGNhbGNGaW5hbFJnYihjKSxcbiAgICAgICAgICAgICAgICBiOiBjYWxjRmluYWxSZ2IoMCksXG4gICAgICAgICAgICAgICAgYTogYSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjAgPD0gaCAmJiBoIDwgMTgwOlxuICAgICAgICAgICAgcmdiYUNvbG9yID0ge1xuICAgICAgICAgICAgICAgIHI6IGNhbGNGaW5hbFJnYigwKSxcbiAgICAgICAgICAgICAgICBnOiBjYWxjRmluYWxSZ2IoYyksXG4gICAgICAgICAgICAgICAgYjogY2FsY0ZpbmFsUmdiKHgpLFxuICAgICAgICAgICAgICAgIGE6IGEsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTgwIDw9IGggJiYgaCA8IDI0MDpcbiAgICAgICAgICAgIHJnYmFDb2xvciA9IHtcbiAgICAgICAgICAgICAgICByOiBjYWxjRmluYWxSZ2IoMCksXG4gICAgICAgICAgICAgICAgZzogY2FsY0ZpbmFsUmdiKHgpLFxuICAgICAgICAgICAgICAgIGI6IGNhbGNGaW5hbFJnYihjKSxcbiAgICAgICAgICAgICAgICBhOiBhLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI0MCA8PSBoICYmIGggPCAzMDA6XG4gICAgICAgICAgICByZ2JhQ29sb3IgPSB7XG4gICAgICAgICAgICAgICAgcjogY2FsY0ZpbmFsUmdiKHgpLFxuICAgICAgICAgICAgICAgIGc6IGNhbGNGaW5hbFJnYigwKSxcbiAgICAgICAgICAgICAgICBiOiBjYWxjRmluYWxSZ2IoYyksXG4gICAgICAgICAgICAgICAgYTogYSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMDAgPD0gaCAmJiBoIDwgMzYwOlxuICAgICAgICAgICAgcmdiYUNvbG9yID0ge1xuICAgICAgICAgICAgICAgIHI6IGNhbGNGaW5hbFJnYihjKSxcbiAgICAgICAgICAgICAgICBnOiBjYWxjRmluYWxSZ2IoMCksXG4gICAgICAgICAgICAgICAgYjogY2FsY0ZpbmFsUmdiKHgpLFxuICAgICAgICAgICAgICAgIGE6IGEsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZ2JhQ29sb3I7XG59XG5leHBvcnRzLmhzbGFPYmplY3RUb1JnYmFPYmplY3QgPSBoc2xhT2JqZWN0VG9SZ2JhT2JqZWN0O1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiaHNsYU9iamVjdFRvUmdiYU9iamVjdCIsInZhbGlkYXRlQ29sb3JQYXJhbWV0ZXJzIiwicGFyYW0iLCJtaW4iLCJtYXgiLCJjb2xvckhzbGEiLCJoIiwicyIsImwiLCJhIiwiTWF0aCIsImFicyIsImMiLCJ4IiwibSIsImNhbGNGaW5hbFJnYiIsInJvdW5kIiwicmdiYUNvbG9yIiwiciIsImciLCJiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Pages/AdminTools/colorHelpers/hslaObjectToRgbaObject.ts\n");

/***/ }),

/***/ "./resources/js/Pages/AdminTools/colorHelpers/rgbaObjectToHexaString.ts":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/AdminTools/colorHelpers/rgbaObjectToHexaString.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.rgbaObjectToHexaString = void 0;\n/**\n *@param {objectRgba} colorRgba color as objectRgba\n *@return {string} color as hex string (with alpha)\n */\n\nfunction rgbaObjectToHexaString(colorRgba) {\n  var r = colorRgba.r,\n      g = colorRgba.g,\n      b = colorRgba.b,\n      a = colorRgba.a;\n\n  function prepareHex(n) {\n    return n.toString(16).padStart(2, \"0\").toUpperCase();\n  }\n\n  return \"#\".concat(prepareHex(r)).concat(prepareHex(g)).concat(prepareHex(b)).concat(prepareHex(Math.round(a * 255 / 100)));\n}\n\nexports.rgbaObjectToHexaString = rgbaObjectToHexaString;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW5Ub29scy9jb2xvckhlbHBlcnMvcmdiYU9iamVjdFRvSGV4YVN0cmluZy50cy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFDYkEsOENBQTZDO0FBQUVHLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDO0FBQ0FELDhCQUFBLEdBQWlDLEtBQUssQ0FBdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTRSxzQkFBVCxDQUFnQ0MsU0FBaEMsRUFBMkM7QUFDdkMsTUFBUUMsQ0FBUixHQUF1QkQsU0FBdkIsQ0FBUUMsQ0FBUjtBQUFBLE1BQVdDLENBQVgsR0FBdUJGLFNBQXZCLENBQVdFLENBQVg7QUFBQSxNQUFjQyxDQUFkLEdBQXVCSCxTQUF2QixDQUFjRyxDQUFkO0FBQUEsTUFBaUJDLENBQWpCLEdBQXVCSixTQUF2QixDQUFpQkksQ0FBakI7O0FBQ0EsV0FBU0MsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFDbkIsV0FBT0EsQ0FBQyxDQUFDQyxRQUFGLENBQVcsRUFBWCxFQUFlQyxRQUFmLENBQXdCLENBQXhCLEVBQTJCLEdBQTNCLEVBQWdDQyxXQUFoQyxFQUFQO0FBQ0g7O0FBQ0Qsb0JBQVdKLFVBQVUsQ0FBQ0osQ0FBRCxDQUFyQixTQUEyQkksVUFBVSxDQUFDSCxDQUFELENBQXJDLFNBQTJDRyxVQUFVLENBQUNGLENBQUQsQ0FBckQsU0FBMkRFLFVBQVUsQ0FBQ0ssSUFBSSxDQUFDQyxLQUFMLENBQVlQLENBQUMsR0FBRyxHQUFMLEdBQVksR0FBdkIsQ0FBRCxDQUFyRTtBQUNIOztBQUNEUCw4QkFBQSxHQUFpQ0Usc0JBQWpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJpbnRzaG9wMi8uL3Jlc291cmNlcy9qcy9QYWdlcy9BZG1pblRvb2xzL2NvbG9ySGVscGVycy9yZ2JhT2JqZWN0VG9IZXhhU3RyaW5nLnRzPzFhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJnYmFPYmplY3RUb0hleGFTdHJpbmcgPSB2b2lkIDA7XG4vKipcbiAqQHBhcmFtIHtvYmplY3RSZ2JhfSBjb2xvclJnYmEgY29sb3IgYXMgb2JqZWN0UmdiYVxuICpAcmV0dXJuIHtzdHJpbmd9IGNvbG9yIGFzIGhleCBzdHJpbmcgKHdpdGggYWxwaGEpXG4gKi9cbmZ1bmN0aW9uIHJnYmFPYmplY3RUb0hleGFTdHJpbmcoY29sb3JSZ2JhKSB7XG4gICAgY29uc3QgeyByLCBnLCBiLCBhIH0gPSBjb2xvclJnYmE7XG4gICAgZnVuY3Rpb24gcHJlcGFyZUhleChuKSB7XG4gICAgICAgIHJldHVybiBuLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIikudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGAjJHtwcmVwYXJlSGV4KHIpfSR7cHJlcGFyZUhleChnKX0ke3ByZXBhcmVIZXgoYil9JHtwcmVwYXJlSGV4KE1hdGgucm91bmQoKGEgKiAyNTUpIC8gMTAwKSl9YDtcbn1cbmV4cG9ydHMucmdiYU9iamVjdFRvSGV4YVN0cmluZyA9IHJnYmFPYmplY3RUb0hleGFTdHJpbmc7XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJyZ2JhT2JqZWN0VG9IZXhhU3RyaW5nIiwiY29sb3JSZ2JhIiwiciIsImciLCJiIiwiYSIsInByZXBhcmVIZXgiLCJuIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInRvVXBwZXJDYXNlIiwiTWF0aCIsInJvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Pages/AdminTools/colorHelpers/rgbaObjectToHexaString.ts\n");

/***/ })

}]);