import { TodosArrays } from "./createTodo";
import { ArraysManager } from "./createTodo";
import format from "date-fns/format";
import {FormHandler} from "./FormHandel";

class TodoRenderer {
  static currentArray = TodosArrays.allTodosArray;

  static renderTodo(todo) {
    return `
      <div class="todo-container">
        <h1>${todo.title}</h1>
        <p>${todo.description}</p>
        <p>${format(new Date(todo.dueDate),"dd/MM/yyyy")}</p>
        <p>${todo.priority}</p>
        <img class="edit-icon" data-edit-id="${todo.id}" src="./images/edit.svg" alt="Edit icon">
        <img class="delete-icon" data-delete-id="${todo.id}" src="./images/delete.svg" alt="Delete icon">
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
        const id = event.target.getAttribute('data-edit-id');
        this.editTodo(id);
      } else if (event.target.classList.contains('delete-icon')) {
        const id = event.target.getAttribute('data-delete-id');
        this.deleteTodo(id);
      }
    });
  }

  static renderTodosOnPage(currentArray) {
    this.content.innerHTML = currentArray.map((todo, index) => {
      return TodoRenderer.renderTodo(todo, index);
    }) 
  }

  static deleteTodo(id) {
    let indexInAllTodos = 0;
    TodosArrays.allTodosArray.forEach((todo, currentIndex)=> {
        if(todo.id == id){
            indexInAllTodos = currentIndex
            console.log(currentIndex)
            TodosArrays.allTodosArray.splice(indexInAllTodos, 1);

            ArraysManager.updateDatesArray()
            TabHandler.updateCurrentArray()
            
            this.renderTodosOnPage(TodoRenderer.currentArray)
        }
    })
}

static editTodo(id) {
  if (document.querySelector('.edited')) {
    return;
  }

  const indexInAllTodos = TodosArrays.allTodosArray.findIndex(todo => todo.id == id);
  const todo = TodosArrays.allTodosArray[indexInAllTodos];
  
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
    const updatedTodo = {
      id: id, // Retain the same ID
      title: document.querySelector('.title').value,
      description: document.querySelector('.description').value,
      dueDate: document.querySelector('.dueDate').value,
      priority: document.querySelector('.priority').value,
      project: todo.project,
    };
    TodosArrays.allTodosArray[indexInAllTodos] = updatedTodo;
    ArraysManager.updateDatesArray()
    TabHandler.updateCurrentArray()
    this.renderTodosOnPage(TodoRenderer.currentArray);
  });
}
}


class TabHandler {
  static emptyContent() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
  }

  static loadHomeTodos() {
    TabHandler.emptyContent();
    TodoRenderer.currentArray = TodosArrays.allTodosArray;
    TodoManager.renderTodosOnPage(TodoRenderer.currentArray);
  }

  static loadTodayTodos() {
    TabHandler.emptyContent();
    TodoRenderer.currentArray = TodosArrays.todayTodoArray;
    TodoManager.renderTodosOnPage(TodoRenderer.currentArray);
  }

  static loadWeeksTodos() {
    TabHandler.emptyContent();
    TodoRenderer.currentArray = TodosArrays.currentWeekTodoArray;
    TodoManager.renderTodosOnPage(TodoRenderer.currentArray);
  }

  static loadUserProjectTodos(){
    TabHandler.emptyContent();
    ArraysManager.updateProjectArray()
    TodoRenderer.currentArray = TodosArrays.userProjectsArray;
    TodoManager.renderTodosOnPage(TodoRenderer.currentArray);
  }

  static AddEventToProject(){
   const projects = document.querySelectorAll('.project')
   projects.forEach((project) =>{
    project.addEventListener('click',this.loadUserProjectTodos.bind(this))
   });
    
  }

  static updateCurrentArray(){
    const currentTab = document.querySelector('.currentProject'); 
    if(!currentTab) return;
    switch (currentTab.textContent) { 
        case 'Home':
            TodoRenderer.currentArray = TodosArrays.allTodosArray;
            break;
        case 'Today':
            TodoRenderer.currentArray = TodosArrays.todayTodoArray;
            break;
        case 'This Week':
            TodoRenderer.currentArray = TodosArrays.currentWeekTodoArray;
            break;
        default:
            TodoRenderer.currentArray = TodosArrays.userProjectsArray; 
            break;
    }
  }

  static getAllLi() {
    return document.querySelectorAll('li');
  }

  static addClass(event) {
    const projects = this.getAllLi(); 
    projects.forEach(project => project.classList.remove('currentProject'));
    event.target.classList.add('currentProject');
  }

  static liClickEvent() {
    const projects = this.getAllLi(); 
    projects.forEach(project => project.addEventListener('click', this.addClass.bind(this))); 
  }

}



export { TodoManager, TodoRenderer, TabHandler };
