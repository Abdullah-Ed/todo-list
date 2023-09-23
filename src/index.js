import { FormHandler, ProjectHandler } from "./FormHandel";
import { TodoManager, TodoRenderer, TabHandler, StyleControl } from "./UI";
import { ArraysManager, Storage } from "./createTodo";

Storage.getStoredProjects();
Storage.getStoredTodo();
ArraysManager.updateArrays();

TabHandler.loadHomeTodos();
const addProjectBtn = document.querySelector(".add-task-btn");
addProjectBtn.addEventListener("click", FormHandler.createTodo);

TodoManager.initialize();
TodoManager.renderTodosOnPage(TodoRenderer.currentArray);

const createProjectBtn = document.querySelector(".project-btn");
createProjectBtn.addEventListener("click", ProjectHandler.createProject);

ProjectHandler.renderProjects();

const homeTab = document.querySelector(".home-tab");
homeTab.addEventListener("click", TabHandler.loadHomeTodos);

const todayTab = document.querySelector(".today-tab");
todayTab.addEventListener("click", TabHandler.loadTodayTodos);

const weekTab = document.querySelector(".week-tab");
weekTab.addEventListener("click", TabHandler.loadWeeksTodos);

TabHandler.AddEventToProject();

ProjectHandler.deleteProject();
TabHandler.liClickEvent();
StyleControl.changeDisplayStyle();
