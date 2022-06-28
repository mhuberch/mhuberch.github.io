/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/GraphAlgorithms.ts":
/*!***********************************!*\
  !*** ./src/js/GraphAlgorithms.ts ***!
  \***********************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (108:34)\nFile was processed with these loaders:\n * ./node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n|     }\n|     return false;\n>     return { false: color, null:  };\n| };\n| GraphAlgorithms.connectedComponents = (G = graphState_1.default.graph) => {");

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/js/workers/GraphAlgorithmWorker.ts":
/*!**********************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js!./src/js/workers/GraphAlgorithmWorker.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const GraphAlgorithms_1 = __webpack_require__(/*! ../GraphAlgorithms */ "./src/js/GraphAlgorithms.ts");
const ctx = self;
let myID;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
ctx.addEventListener("message", (e) => __awaiter(void 0, void 0, void 0, function* () {
    if (e.data.type === "id") {
        myID = e.data.id;
        return;
    }
    const args = e.data.args;
    if (e.data.type === "test") {
        yield sleep(e.data.waitTime);
        ctx.postMessage({ id: myID, data: "DONE" });
        return;
    }
    if ("convertToGraphImmut" in e.data && e.data.convertToGraphImmut) {
        args.push(GraphAlgorithms_1.default.graphPlainToGraphImmut(e.data.graph));
        ctx.postMessage({ id: myID, data: GraphAlgorithms_1.default[e.data.type].apply(null, args) });
    }
    else {
        ctx.postMessage({ id: myID, data: GraphAlgorithms_1.default[e.data.type].apply(null, args) });
    }
}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/ts-loader/index.js!./src/js/workers/GraphAlgorithmWorker.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=GraphAlgorithmWorker-fc498fe456977dd69bd4.min.worker.js.map