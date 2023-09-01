import FormHandler from './FormHandel'
import { TodoManager } from './UI';


const addProjectBtn = document.querySelector('.add-task-btn');
addProjectBtn.addEventListener('click', FormHandler.createTodo);

TodoManager.initialize();
TodoManager.renderTodos();

const createProjectBtn =document.querySelector('.project-btn');
createProjectBtn.addEventListener('click',FormHandler.createProject)