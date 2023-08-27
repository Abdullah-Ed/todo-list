/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/FormHandel.js":
/*!***************************!*\
  !*** ./src/FormHandel.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crateTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crateTodo */ "./src/crateTodo.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");




class FormHandler {
  static createProject(event) {
    event.preventDefault();
    const form = event.target.closest('form'); 

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Use destructuring to extract form values
    const { title, description, dueDate, priority } = form.elements;

    const newTodo = new _crateTodo__WEBPACK_IMPORTED_MODULE_0__.Todos(title.value, description.value, dueDate.value, priority.value);
    
    _crateTodo__WEBPACK_IMPORTED_MODULE_0__.TodosArrays.addToArray(newTodo);
    console.log(_crateTodo__WEBPACK_IMPORTED_MODULE_0__.TodosArrays.allTodosArray);
    _UI__WEBPACK_IMPORTED_MODULE_1__.UiControl.loadMainTodos();
  }
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormHandler);

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiControl: () => (/* binding */ UiControl)
/* harmony export */ });
/* harmony import */ var _crateTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crateTodo */ "./src/crateTodo.js");


class UiControl{
  static loadMainTodos() {
    const content = document.querySelector('.content');
  
    content.innerHTML = '';
  
    _crateTodo__WEBPACK_IMPORTED_MODULE_0__.TodosArrays.allTodosArray.forEach((todo, index) => {
      content.innerHTML += `
        <div class="todo-container">
          <h1>${todo.title}</h1>
          <p>${todo.description}</p>
          <p>${todo.dueDate}</p>
          <p>${todo.priority}</p>
          <img class="delete-icon" data-index="${index}" src="../dist/images/delete.svg" alt="">
        </div>
      `;
    });
  }

  static deleteTodo(){
    const content = document.querySelector('.content');
    content.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        _crateTodo__WEBPACK_IMPORTED_MODULE_0__.TodosArrays.allTodosArray.splice(index, 1);
        UiControl.loadMainTodos();
    });
  }
}








/***/ }),

/***/ "./src/crateTodo.js":
/*!**************************!*\
  !*** ./src/crateTodo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todos: () => (/* binding */ Todos),
/* harmony export */   TodosArrays: () => (/* binding */ TodosArrays)
/* harmony export */ });
class TodosArrays{
  static allTodosArray = [];
   static addToArray(newObject){
    this.allTodosArray.unshift(newObject)
  } 
}

class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}




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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormHandel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormHandel */ "./src/FormHandel.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");




const addProjectBtn = document.querySelector('.add-project-btn');
addProjectBtn.addEventListener('click', _FormHandel__WEBPACK_IMPORTED_MODULE_0__["default"].createProject);

_UI__WEBPACK_IMPORTED_MODULE_1__.UiControl.deleteTodo()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ25COzs7QUFHN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0NBQXdDOztBQUVwRCx3QkFBd0IsNkNBQUs7QUFDN0I7QUFDQSxJQUFJLG1EQUFXO0FBQ2YsZ0JBQWdCLG1EQUFXO0FBQzNCLElBQUksMENBQVM7QUFDYjtBQUNBOzs7OztBQUtBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQzNCZ0I7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVc7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0IsZUFBZSxpQkFBaUI7QUFDaEMsZUFBZSxhQUFhO0FBQzVCLGVBQWUsY0FBYztBQUM3QixpREFBaUQsTUFBTTtBQUN2RDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBVztBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7QUFNcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNMOzs7QUFHakM7QUFDQSx3Q0FBd0MsbURBQVc7O0FBRW5ELDBDQUFTLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRm9ybUhhbmRlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyYXRlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9kb3NBcnJheXMsVG9kb3MgfSBmcm9tIFwiLi9jcmF0ZVRvZG9cIjtcbmltcG9ydHtVaUNvbnRyb2x9IGZyb20gXCIuL1VJXCJcblxuXG5jbGFzcyBGb3JtSGFuZGxlciB7XG4gIHN0YXRpYyBjcmVhdGVQcm9qZWN0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKTsgXG5cbiAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFVzZSBkZXN0cnVjdHVyaW5nIHRvIGV4dHJhY3QgZm9ybSB2YWx1ZXNcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfSA9IGZvcm0uZWxlbWVudHM7XG5cbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG9zKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpO1xuICAgIFxuICAgIFRvZG9zQXJyYXlzLmFkZFRvQXJyYXkobmV3VG9kbyk7XG4gICAgY29uc29sZS5sb2coVG9kb3NBcnJheXMuYWxsVG9kb3NBcnJheSk7XG4gICAgVWlDb250cm9sLmxvYWRNYWluVG9kb3MoKTtcbiAgfVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBGb3JtSGFuZGxlcjsiLCJpbXBvcnQgeyBUb2Rvc0FycmF5cyB9IGZyb20gXCIuL2NyYXRlVG9kb1wiO1xuXG5jbGFzcyBVaUNvbnRyb2x7XG4gIHN0YXRpYyBsb2FkTWFpblRvZG9zKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBcbiAgICBUb2Rvc0FycmF5cy5hbGxUb2Rvc0FycmF5LmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICBjb250ZW50LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMT4ke3RvZG8udGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxwPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgICA8cD4ke3RvZG8ucHJpb3JpdHl9PC9wPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJkZWxldGUtaWNvblwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiIHNyYz1cIi4uL2Rpc3QvaW1hZ2VzL2RlbGV0ZS5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVRvZG8oKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgICAgICBUb2Rvc0FycmF5cy5hbGxUb2Rvc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIFVpQ29udHJvbC5sb2FkTWFpblRvZG9zKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cblxuXG5leHBvcnQgeyBVaUNvbnRyb2wgfTtcbiIsImNsYXNzIFRvZG9zQXJyYXlze1xuICBzdGF0aWMgYWxsVG9kb3NBcnJheSA9IFtdO1xuICAgc3RhdGljIGFkZFRvQXJyYXkobmV3T2JqZWN0KXtcbiAgICB0aGlzLmFsbFRvZG9zQXJyYXkudW5zaGlmdChuZXdPYmplY3QpXG4gIH0gXG59XG5cbmNsYXNzIFRvZG9zIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuXG5leHBvcnQge1RvZG9zQXJyYXlzLFRvZG9zfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGb3JtSGFuZGxlciBmcm9tICcuL0Zvcm1IYW5kZWwnXG5pbXBvcnQgeyBVaUNvbnRyb2wgfSBmcm9tICcuL1VJJztcblxuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEZvcm1IYW5kbGVyLmNyZWF0ZVByb2plY3QpO1xuXG5VaUNvbnRyb2wuZGVsZXRlVG9kbygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9