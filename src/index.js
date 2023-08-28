import FormHandler from './FormHandel'
import { TodoManager } from './UI';


const addProjectBtn = document.querySelector('.add-project-btn');
addProjectBtn.addEventListener('click', FormHandler.createProject);

TodoManager.initialize();
TodoManager.renderTodos();