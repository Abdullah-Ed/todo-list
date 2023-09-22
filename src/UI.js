import { TodosArrays } from "./createTodo";
import { ArraysManager } from "./createTodo";
import format from "date-fns/format";
import {FormHandler} from "./FormHandel";

class TodoRenderer {
  static currentArray = TodosArrays.allTodosArray;

static renderTodo(todo) {
  const titleId = todo.status ? 'completed' : 'title';
  return `
    <div class="todo-container">
      <h1 class="title" id="${titleId}" data-status-id="${todo.id}">${todo.title}</h1>
      <p class="details">${todo.description}</p>
      <p>${format(new Date(todo.dueDate),"dd/MM/yyyy")}</p>
      <p class="priority-color">${todo.priority}</p>
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
      }else if (event.target.classList.contains('title')) {
        const id = event.target.getAttribute('data-status-id');
        this.changeStatus(id)
      }
    });
  }

  static renderTodosOnPage(currentArray) {
    this.content.innerHTML = currentArray.map((todo, index) => {
      return TodoRenderer.renderTodo(todo, index)
    }) 
    StyleControl.changePriorityStyle();
  }

  static changeStatus(id){
    let indexInAllTodos = 0; 
    TodosArrays.allTodosArray.forEach((todo, currentIndex)=> {
      if(todo.id == id){
        indexInAllTodos = currentIndex;
        console.log('Current Status:', todo.status);
        todo.status = !todo.status; // Toggle the status
        console.log('New Status:', todo.status);
  
          ArraysManager.updateDatesArray();
          TabHandler.updateCurrentArray();
          
          this.renderTodosOnPage(TodoRenderer.currentArray);
       }
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

static cancelEdit(event){
  event.preventDefault();
  document.querySelector('.edited').remove();
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
        <input type="text" class='title-input' name="title" id="title" value="${todo.title}" required>
    
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
        <button id="save-button">Save</button>
        <button class="cancel-edit-form">Cancel</button>
      </form>
    </div>
  `;
  const cancelEditBtn = document.querySelector('.cancel-edit-form');
  cancelEditBtn.addEventListener('click', this.cancelEdit.bind(this));

  const editForm = document.getElementById('edit-form');
  const saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', () => {
    if (!FormHandler.validateForm(editForm)) return;
    const updatedTodo = {
      id: id, // Retain the same ID
      title: document.querySelector('.title-input').value,
      description: document.querySelector('.description').value,
      dueDate: document.querySelector('.dueDate').value,
      priority: document.querySelector('.priority').value,
      project: todo.project,
      status: todo.status,
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
    TabHandler.changTabHeader();
  }

  static loadTodayTodos() {
    TabHandler.emptyContent();
    TodoRenderer.currentArray = TodosArrays.todayTodoArray;
    TodoManager.renderTodosOnPage(TodoRenderer.currentArray);
    TabHandler.changTabHeader();
  }

  static loadWeeksTodos() {
    TabHandler.emptyContent();
    TodoRenderer.currentArray = TodosArrays.currentWeekTodoArray;
    TodoManager.renderTodosOnPage(TodoRenderer.currentArray);
    TabHandler.changTabHeader();
  }

  static loadUserProjectTodos(){
    TabHandler.emptyContent();
    ArraysManager.updateProjectArray()
    TodoRenderer.currentArray = TodosArrays.userProjectsArray;
    TodoManager.renderTodosOnPage(TodoRenderer.currentArray);
    TabHandler.changTabHeader();
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

  static changTabHeader(){
    const currentTab = document.querySelector('.currentProject');
    const tabHeader = document.querySelector('.current-tab-header');

    tabHeader.textContent = currentTab.textContent;
  }

}

class StyleControl{
  static projectFormContainer = document.querySelector('.project-form-container');
  static formContainer = document.querySelector('#form-container');

  static showProjectForm(event){
    event.preventDefault();
    this.projectFormContainer.style.display="block";
  }

  static hideProjectForm(event){
      event.preventDefault();
      this.projectFormContainer.style.display="none"
  }

  static showForm(event){
    event.preventDefault();
    this.formContainer.style.display="block";
  }

  static hideForm(event){
    event.preventDefault();
    this.formContainer.style.display="none";
  }

  static changePriorityStyle(){
    const priories = document.querySelectorAll('.priority-color');
    priories.forEach((priority) =>{
      if(priority.textContent == 'high'){
        priority.style.color="red"
      }else if (priority.textContent == 'medium'){
        priority.style.color="yellow"
      }else if(priority.textContent == 'low'){
        priority.style.color="green"
      }
    })
  }

  static changeDisplayStyle(){
    const showProjectBtn = document.querySelector('.show-project-form');
    const hideProjectBtn = document.querySelector('.cancel-project-form');
    const showFromBtn = document.querySelector('.show-form');
    const hideFromBtn = document.querySelector('.cancel');

    showProjectBtn.addEventListener('click',this.showProjectForm.bind(this));
    hideProjectBtn.addEventListener('click',this.hideProjectForm.bind(this));
    showFromBtn.addEventListener('click',this.showForm.bind(this));
    hideFromBtn.addEventListener('click',this.hideForm.bind(this));
  }
} 


export { TodoManager, TodoRenderer, TabHandler,StyleControl };
