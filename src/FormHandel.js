import { TodosArrays, Todos, ArraysManager, Storage } from "./createTodo";
import { TodoManager, TodoRenderer, TabHandler, StyleControl } from "./UI";

class FormHandler {
  static createTodo = (event) => {
    event.preventDefault();
    const form = event.target.closest("form");

    if (!this.validateForm(form)) return;

    const newTodo = this.createTodoFromForm(form);

    TodosArrays.addToArray(newTodo);
    ArraysManager.updateArrays();
    StyleControl.changePriorityStyle();
    TabHandler.updateCurrentArray();
    TodoManager.renderTodosOnPage(TodoRenderer.currentArray);
    StyleControl.hideForm(event);
  };

  static validateForm(form) {
    if (!form.checkValidity()) {
      form.reportValidity();
      return false;
    }
    return true;
  }

  static createTodoFromForm(form) {
    const { title, description, dueDate, priority, project } = form.elements;
    return new Todos(
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      project.value,
      false
    );
  }
}

class ProjectHandler {
  static projectArray = ["House", "Sport"];

  static createProject = (event) => {
    event.preventDefault();
    const form = event.target.closest("form");

    if (!FormHandler.validateForm(form)) return;

    const input = document.querySelector("#new-project").value;

    if (this.projectArray.includes(input)) {
      alert("Please enter a new project name.");
      return;
    }

    this.projectArray.push(input);
    this.renderProjects();

    StyleControl.hideProjectForm(event);
    form.reset();
  };

  static renderProjects() {
    const projectDiv = document.querySelector(".projects-container");
    projectDiv.innerHTML = "";
    this.projectArray.forEach((project, index) => {
      projectDiv.innerHTML += `
      <li class="project" >${project} <img class="delete-project-icon" data-project-index="${index}" src="./images/delete.svg" alt="Delete icon"></li>      `;
    });

    this.AddProjectToForm();

    // Automatically select the latest added project
    const projects = TabHandler.getAllLi();
    if (!document.querySelector(".currentProject") && projects.length > 0) {
      projects[projects.length - 1].classList.add("currentProject");
      TabHandler.loadUserProjectTodos();
    }
    if (this.projectArray == 0) {
      TabHandler.loadWeeksTodos();
    }
  }

  static AddProjectToForm() {
    const projectSelect = document.getElementById("project");
    projectSelect.innerHTML = "";
    this.projectArray.forEach((project) => {
      projectSelect.innerHTML += `
      <option value="No-Project">No Project</option>
      <option value="${project}">${project}</option>`;
    });
    TabHandler.liClickEvent();
    TabHandler.AddEventToProject();
    Storage.storeProjects();
  }

  static deleteProject() {
    const projectDiv = document.querySelector(".projects-container");
    projectDiv.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-project-icon")) {
        const imgIndex = event.target.getAttribute("data-project-index");
        this.projectArray.splice(imgIndex, 1);
        this.renderProjects();
      }
    });
    Storage.storeProjects();
  }
}

export { FormHandler, ProjectHandler };
