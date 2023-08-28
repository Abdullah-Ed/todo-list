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
    _UI__WEBPACK_IMPORTED_MODULE_1__.TodoManager.renderTodos();
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


class TodoRenderer {
  static renderTodo(todo, index) {
    return `
      <div class="todo-container">
        <h1>${todo.title}</h1>
        <p>${todo.description}</p>
        <p>${todo.dueDate}</p>
        <p>${todo.priority}</p>
        <img class="edit-icon" data-edit-index="${index}" src="../dist/images/edit.svg" alt="Edit icon">
        <img class="delete-icon" data-delete-index="${index}" src="../dist/images/delete.svg" alt="Delete icon">
      </div>
    `;
  }
}

class TodoManager {
  static content = document.querySelector('.content');
  static currentIndex = null;

  static initialize() {
    this.content.addEventListener('click', (event) => {
      if (event.target.classList.contains('edit-icon')) {
        const index = event.target.getAttribute('data-edit-index');
        this.editTodo(index);
      } else if (event.target.classList.contains('delete-icon')) {
        const index = event.target.getAttribute('data-delete-index');
        this.deleteTodo(index);
      }
    });
  }

  static renderTodos() {
    this.content.innerHTML = _crateTodo__WEBPACK_IMPORTED_MODULE_0__.TodosArrays.allTodosArray.map((todo, index) => {
      return TodoRenderer.renderTodo(todo, index);
    }).join(''); // Join the array to form a single HTML string
  }

  static deleteTodo(index) {
    _crateTodo__WEBPACK_IMPORTED_MODULE_0__.TodosArrays.allTodosArray.splice(index, 1);
    this.renderTodos();
  }

  static editTodo(index) {
    if (document.querySelector('.edited')) {
      return;
    }
  
    const todo = _crateTodo__WEBPACK_IMPORTED_MODULE_0__.TodosArrays.allTodosArray[index];
    
    this.content.innerHTML += `
      <div class="form-container edited">
        <form id="edit-form">
          <label for="title">Title</label>
          <input type="text" class='title' name="title" id="title" value="${todo.title}" required>
      
          <label for="description">Description</label>
          <textarea class='description' name="description" id="description">${todo.description}</textarea>
      
          <label for="dueDate">Due Date</label>
          <input type="date" class='dueDate' name="dueDate" id="dueDate" value="${todo.dueDate}" required>
      
          <label for="priority">Priority</label>
          <select name="priority" class='priority' id="priority" required>
            <option value="high" ${todo.priority === 'high' ? 'selected' : ''}>High</option>
            <option value="medium" ${todo.priority === 'medium' ? 'selected' : ''}>Medium</option>
            <option value="low" ${todo.priority === 'low' ? 'selected' : ''}>Low</option>
          </select>
          <button type="button" id="save-button">Save</button>
        </form>
      </div>
    `;
    
    const editForm = document.getElementById('edit-form');
    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', () => {
      if (!editForm.checkValidity()) {
        ed.reportValidity();
        return;
      }
      // Handle form submission here and update the TodosArrays
      const updatedTodo = {
        title: document.querySelector('.title').value,
        description: document.querySelector('.description').value,
        dueDate: document.querySelector('.dueDate').value,
        priority: document.querySelector('.priority').value,
      };
      _crateTodo__WEBPACK_IMPORTED_MODULE_0__.TodosArrays.allTodosArray[index] = updatedTodo;
      this.renderTodos();
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

_UI__WEBPACK_IMPORTED_MODULE_1__.TodoManager.initialize();
_UI__WEBPACK_IMPORTED_MODULE_1__.TodoManager.renderTodos();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2pCOzs7QUFHL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0NBQXdDOztBQUVwRCx3QkFBd0IsNkNBQUs7QUFDN0I7QUFDQSxJQUFJLG1EQUFXO0FBQ2YsZ0JBQWdCLG1EQUFXO0FBQzNCLElBQUksNENBQVc7QUFDZjtBQUNBOzs7OztBQUtBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQzNCZ0I7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCLGFBQWEsaUJBQWlCO0FBQzlCLGFBQWEsYUFBYTtBQUMxQixhQUFhLGNBQWM7QUFDM0Isa0RBQWtELE1BQU07QUFDeEQsc0RBQXNELE1BQU07QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsNkJBQTZCLG1EQUFXO0FBQ3hDO0FBQ0EsS0FBSyxZQUFZO0FBQ2pCOztBQUVBO0FBQ0EsSUFBSSxtREFBVztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtREFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLFdBQVc7QUFDdkY7QUFDQTtBQUNBLDhFQUE4RSxpQkFBaUI7QUFDL0Y7QUFDQTtBQUNBLGtGQUFrRixhQUFhO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywyQ0FBMkM7QUFDOUUscUNBQXFDLDZDQUE2QztBQUNsRixrQ0FBa0MsMENBQTBDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFXO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7OztBQU11Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0g7OztBQUduQztBQUNBLHdDQUF3QyxtREFBVzs7QUFFbkQsNENBQVc7QUFDWCw0Q0FBVyxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0Zvcm1IYW5kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvZG9zQXJyYXlzLFRvZG9zIH0gZnJvbSBcIi4vY3JhdGVUb2RvXCI7XG5pbXBvcnR7VG9kb01hbmFnZXJ9IGZyb20gXCIuL1VJXCJcblxuXG5jbGFzcyBGb3JtSGFuZGxlciB7XG4gIHN0YXRpYyBjcmVhdGVQcm9qZWN0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKTsgXG5cbiAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFVzZSBkZXN0cnVjdHVyaW5nIHRvIGV4dHJhY3QgZm9ybSB2YWx1ZXNcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfSA9IGZvcm0uZWxlbWVudHM7XG5cbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG9zKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpO1xuICAgIFxuICAgIFRvZG9zQXJyYXlzLmFkZFRvQXJyYXkobmV3VG9kbyk7XG4gICAgY29uc29sZS5sb2coVG9kb3NBcnJheXMuYWxsVG9kb3NBcnJheSk7XG4gICAgVG9kb01hbmFnZXIucmVuZGVyVG9kb3MoKTtcbiAgfVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBGb3JtSGFuZGxlcjsiLCJpbXBvcnQgeyBUb2Rvc0FycmF5cyB9IGZyb20gXCIuL2NyYXRlVG9kb1wiO1xuXG5jbGFzcyBUb2RvUmVuZGVyZXIge1xuICBzdGF0aWMgcmVuZGVyVG9kbyh0b2RvLCBpbmRleCkge1xuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwidG9kby1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPiR7dG9kby50aXRsZX08L2gxPlxuICAgICAgICA8cD4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8cD4ke3RvZG8uZHVlRGF0ZX08L3A+XG4gICAgICAgIDxwPiR7dG9kby5wcmlvcml0eX08L3A+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJlZGl0LWljb25cIiBkYXRhLWVkaXQtaW5kZXg9XCIke2luZGV4fVwiIHNyYz1cIi4uL2Rpc3QvaW1hZ2VzL2VkaXQuc3ZnXCIgYWx0PVwiRWRpdCBpY29uXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJkZWxldGUtaWNvblwiIGRhdGEtZGVsZXRlLWluZGV4PVwiJHtpbmRleH1cIiBzcmM9XCIuLi9kaXN0L2ltYWdlcy9kZWxldGUuc3ZnXCIgYWx0PVwiRGVsZXRlIGljb25cIj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cblxuY2xhc3MgVG9kb01hbmFnZXIge1xuICBzdGF0aWMgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIHN0YXRpYyBjdXJyZW50SW5kZXggPSBudWxsO1xuXG4gIHN0YXRpYyBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtaWNvbicpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lZGl0LWluZGV4Jyk7XG4gICAgICAgIHRoaXMuZWRpdFRvZG8oaW5kZXgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtaWNvbicpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1kZWxldGUtaW5kZXgnKTtcbiAgICAgICAgdGhpcy5kZWxldGVUb2RvKGluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJUb2RvcygpIHtcbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gVG9kb3NBcnJheXMuYWxsVG9kb3NBcnJheS5tYXAoKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gVG9kb1JlbmRlcmVyLnJlbmRlclRvZG8odG9kbywgaW5kZXgpO1xuICAgIH0pLmpvaW4oJycpOyAvLyBKb2luIHRoZSBhcnJheSB0byBmb3JtIGEgc2luZ2xlIEhUTUwgc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVsZXRlVG9kbyhpbmRleCkge1xuICAgIFRvZG9zQXJyYXlzLmFsbFRvZG9zQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnJlbmRlclRvZG9zKCk7XG4gIH1cblxuICBzdGF0aWMgZWRpdFRvZG8oaW5kZXgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCB0b2RvID0gVG9kb3NBcnJheXMuYWxsVG9kb3NBcnJheVtpbmRleF07XG4gICAgXG4gICAgdGhpcy5jb250ZW50LmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXIgZWRpdGVkXCI+XG4gICAgICAgIDxmb3JtIGlkPVwiZWRpdC1mb3JtXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPSd0aXRsZScgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiJHt0b2RvLnRpdGxlfVwiIHJlcXVpcmVkPlxuICAgICAgXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz0nZGVzY3JpcHRpb24nIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIj4ke3RvZG8uZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cbiAgICAgIFxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWVEYXRlXCI+RHVlIERhdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPSdkdWVEYXRlJyBuYW1lPVwiZHVlRGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIHZhbHVlPVwiJHt0b2RvLmR1ZURhdGV9XCIgcmVxdWlyZWQ+XG4gICAgICBcbiAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBjbGFzcz0ncHJpb3JpdHknIGlkPVwicHJpb3JpdHlcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCIgJHt0b2RvLnByaW9yaXR5ID09PSAnaGlnaCcgPyAnc2VsZWN0ZWQnIDogJyd9PkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiAke3RvZG8ucHJpb3JpdHkgPT09ICdtZWRpdW0nID8gJ3NlbGVjdGVkJyA6ICcnfT5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIiAke3RvZG8ucHJpb3JpdHkgPT09ICdsb3cnID8gJ3NlbGVjdGVkJyA6ICcnfT5Mb3c8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInNhdmUtYnV0dG9uXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIFxuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZm9ybScpO1xuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1idXR0b24nKTtcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFlZGl0Rm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZWQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvbiBoZXJlIGFuZCB1cGRhdGUgdGhlIFRvZG9zQXJyYXlzXG4gICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykudmFsdWUsXG4gICAgICAgIGR1ZURhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJykudmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS52YWx1ZSxcbiAgICAgIH07XG4gICAgICBUb2Rvc0FycmF5cy5hbGxUb2Rvc0FycmF5W2luZGV4XSA9IHVwZGF0ZWRUb2RvO1xuICAgICAgdGhpcy5yZW5kZXJUb2RvcygpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG5cblxuZXhwb3J0IHsgVG9kb01hbmFnZXIgfTtcbiIsImNsYXNzIFRvZG9zQXJyYXlze1xuICBzdGF0aWMgYWxsVG9kb3NBcnJheSA9IFtdO1xuICAgc3RhdGljIGFkZFRvQXJyYXkobmV3T2JqZWN0KXtcbiAgICB0aGlzLmFsbFRvZG9zQXJyYXkudW5zaGlmdChuZXdPYmplY3QpXG4gIH0gXG59XG5cbmNsYXNzIFRvZG9zIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuXG5leHBvcnQge1RvZG9zQXJyYXlzLFRvZG9zfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGb3JtSGFuZGxlciBmcm9tICcuL0Zvcm1IYW5kZWwnXG5pbXBvcnQgeyBUb2RvTWFuYWdlciB9IGZyb20gJy4vVUknO1xuXG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRm9ybUhhbmRsZXIuY3JlYXRlUHJvamVjdCk7XG5cblRvZG9NYW5hZ2VyLmluaXRpYWxpemUoKTtcblRvZG9NYW5hZ2VyLnJlbmRlclRvZG9zKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9