import { TodosArrays } from "./createTodo";
import { Dates } from "./createTodo";
import format from "date-fns/format";
import FormHandler from "./FormHandel";

class TodoRenderer {
  static renderTodo(todo, index) {
    return `
      <div class="todo-container">
        <h1>${todo.title}</h1>
        <p>${todo.description}</p>
        <p>${format(new Date(todo.dueDate),"dd/MM/yyyy")}</p>
        <p>${todo.priority}</p>
        <img class="edit-icon" data-edit-index="${index}" src="./images/edit.svg" alt="Edit icon">
        <img class="delete-icon" data-delete-index="${index}" src="./images/delete.svg" alt="Delete icon">
      </div>
    `;
  }
}

class TodoManager {
  static content = document.querySelector('.content');
  static currentIndex 

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
    this.content.innerHTML = TodosArrays.allTodosArray.map((todo, index) => {
      return TodoRenderer.renderTodo(todo, index);
    }) 
    Dates.addToTodayArray()
    console.log(Dates.todayTodoArray)
    Dates.addToCurrentWeekArray();
    console.log(Dates.currentWeekTodoArray)
  }

  static deleteTodo(index) {
    TodosArrays.allTodosArray.splice(index, 1);
    this.renderTodos();
  }

  static editTodo(index) {
    if (document.querySelector('.edited')) {
      return;
    }
  
    const todo = TodosArrays.allTodosArray[index];
    
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
      if (!FormHandler.validateForm(editForm)) return;
      // Handle form submission here and update the TodosArrays
      const updatedTodo = {
        title: document.querySelector('.title').value,
        description: document.querySelector('.description').value,
        dueDate: document.querySelector('.dueDate').value,
        priority: document.querySelector('.priority').value,
      };
      TodosArrays.allTodosArray[index] = updatedTodo;
      this.renderTodos();
    });
  }
}

export { TodoManager };
