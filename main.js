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
    _UI__WEBPACK_IMPORTED_MODULE_1__.TodoManager.loadMainTodos();
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
/* harmony export */   TodoManager: () => (/* binding */ TodoManager)
/* harmony export */ });
/* harmony import */ var _crateTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crateTodo */ "./src/crateTodo.js");


class TodoManager {
  static renderTodo(todo, index) {
    return `
      <div class="todo-container">
        <h1>${todo.title}</h1>
        <p>${todo.description}</p>
        <p>${todo.dueDate}</p>
        <p>${todo.priority}</p>
        <img class="delete-icon" data-index="${index}" src="../dist/images/delete.svg" alt="">
      </div>
    `;
  }

  static loadMainTodos() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    _crateTodo__WEBPACK_IMPORTED_MODULE_0__.TodosArrays.allTodosArray.forEach((todo, index) => {
      content.innerHTML += this.renderTodo(todo, index);
    });
  }

  static deleteTodo() {
    const content = document.querySelector('.content');
    content.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      _crateTodo__WEBPACK_IMPORTED_MODULE_0__.TodosArrays.allTodosArray.splice(index, 1);
      this.loadMainTodos();
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

_UI__WEBPACK_IMPORTED_MODULE_1__.TodoManager.deleteTodo()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2pCOzs7QUFHL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0NBQXdDOztBQUVwRCx3QkFBd0IsNkNBQUs7QUFDN0I7QUFDQSxJQUFJLG1EQUFXO0FBQ2YsZ0JBQWdCLG1EQUFXO0FBQzNCLElBQUksNENBQVc7QUFDZjtBQUNBOzs7OztBQUtBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQzNCZ0I7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCLGFBQWEsaUJBQWlCO0FBQzlCLGFBQWEsYUFBYTtBQUMxQixhQUFhLGNBQWM7QUFDM0IsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLG1EQUFXO0FBQ2Y7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFXO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7OztBQU11Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0g7OztBQUduQztBQUNBLHdDQUF3QyxtREFBVzs7QUFFbkQsNENBQVcsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Gb3JtSGFuZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JhdGVUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2Rvc0FycmF5cyxUb2RvcyB9IGZyb20gXCIuL2NyYXRlVG9kb1wiO1xuaW1wb3J0e1RvZG9NYW5hZ2VyfSBmcm9tIFwiLi9VSVwiXG5cblxuY2xhc3MgRm9ybUhhbmRsZXIge1xuICBzdGF0aWMgY3JlYXRlUHJvamVjdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdmb3JtJyk7IFxuXG4gICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBVc2UgZGVzdHJ1Y3R1cmluZyB0byBleHRyYWN0IGZvcm0gdmFsdWVzXG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH0gPSBmb3JtLmVsZW1lbnRzO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2Rvcyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKTtcbiAgICBcbiAgICBUb2Rvc0FycmF5cy5hZGRUb0FycmF5KG5ld1RvZG8pO1xuICAgIGNvbnNvbGUubG9nKFRvZG9zQXJyYXlzLmFsbFRvZG9zQXJyYXkpO1xuICAgIFRvZG9NYW5hZ2VyLmxvYWRNYWluVG9kb3MoKTtcbiAgfVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBGb3JtSGFuZGxlcjsiLCJpbXBvcnQgeyBUb2Rvc0FycmF5cyB9IGZyb20gXCIuL2NyYXRlVG9kb1wiO1xuXG5jbGFzcyBUb2RvTWFuYWdlciB7XG4gIHN0YXRpYyByZW5kZXJUb2RvKHRvZG8sIGluZGV4KSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+JHt0b2RvLnRpdGxlfTwvaDE+XG4gICAgICAgIDxwPiR7dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxwPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgPHA+JHt0b2RvLnByaW9yaXR5fTwvcD5cbiAgICAgICAgPGltZyBjbGFzcz1cImRlbGV0ZS1pY29uXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCIgc3JjPVwiLi4vZGlzdC9pbWFnZXMvZGVsZXRlLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkTWFpblRvZG9zKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBUb2Rvc0FycmF5cy5hbGxUb2Rvc0FycmF5LmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICBjb250ZW50LmlubmVySFRNTCArPSB0aGlzLnJlbmRlclRvZG8odG9kbywgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVRvZG8oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICBUb2Rvc0FycmF5cy5hbGxUb2Rvc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLmxvYWRNYWluVG9kb3MoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuXG5cbmV4cG9ydCB7IFRvZG9NYW5hZ2VyIH07XG4iLCJjbGFzcyBUb2Rvc0FycmF5c3tcbiAgc3RhdGljIGFsbFRvZG9zQXJyYXkgPSBbXTtcbiAgIHN0YXRpYyBhZGRUb0FycmF5KG5ld09iamVjdCl7XG4gICAgdGhpcy5hbGxUb2Rvc0FycmF5LnVuc2hpZnQobmV3T2JqZWN0KVxuICB9IFxufVxuXG5jbGFzcyBUb2RvcyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cblxuZXhwb3J0IHtUb2Rvc0FycmF5cyxUb2Rvc307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRm9ybUhhbmRsZXIgZnJvbSAnLi9Gb3JtSGFuZGVsJ1xuaW1wb3J0IHsgVG9kb01hbmFnZXIgfSBmcm9tICcuL1VJJztcblxuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEZvcm1IYW5kbGVyLmNyZWF0ZVByb2plY3QpO1xuXG5Ub2RvTWFuYWdlci5kZWxldGVUb2RvKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=