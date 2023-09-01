import { TodosArrays, Todos } from "./createTodo";
import { TodoManager } from "./UI";

class FormHandler {
  static projectArray = [];

  static createTodo = (event) => {
    event.preventDefault();
    const form = event.target.closest("form");

    if (!this.validateForm(form)) return;

    const newTodo = this.createTodoFromForm(form);

    TodosArrays.addToArray(newTodo);
    console.log(TodosArrays.allTodosArray);
    TodoManager.renderTodos();
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
    this.addLi(input);
    
    form.reset();
  }

  static addLi(projectName) {
    const projectDiv = document.querySelector('.project-container');
    const li = document.createElement('li');
    li.textContent = projectName;
    li.classList.add('project')
    projectDiv.appendChild(li);
  }
}

export default FormHandler;

