import { TodosArrays, Todos, Dates } from "./createTodo";
import { TodoManager, TodoRenderer,TabHandler } from "./UI";


class FormHandler {
  static projectArray = [];

  static createTodo = (event) => {
    event.preventDefault();
    const form = event.target.closest("form");

    if (!this.validateForm(form)) return;

    const newTodo = this.createTodoFromForm(form);

    TodosArrays.addToArray(newTodo);
    console.log(TodosArrays.allTodosArray);
    Dates.updateDatesArray()
    TabHandler.updateCurrentArray()
    TodoManager.renderTodosOnPage(TodoRenderer.currentArray);
  }

  static validateForm(form) {
    if (!form.checkValidity()) {
      form.reportValidity();
      return false;
    }
    return true;
  }

  static createTodoFromForm(form) {
    const { title, description, dueDate, priority } = form.elements;
    return new Todos(title.value, description.value, dueDate.value, priority.value);
  }

  static createProject = (event) => {
    event.preventDefault();
    const form = event.target.closest("form");

    if (!this.validateForm(form)) return;

    const input = document.querySelector('#new-project').value;
    
    if (this.projectArray.includes(input)) {
      alert('Please enter a new project name.');
      return;
    }
  
    this.projectArray.push(input);
    this.addLi();
    
    form.reset();
  }

  static addLi() {
    const projectDiv = document.querySelector('.project-container');
    projectDiv.innerHTML = '';
    this.projectArray.forEach((project,index) =>{
      projectDiv.innerHTML+=`
      <li class="project" data-project-index="${index}">${project}</li>
      `
    })
  }
}

export default FormHandler;


