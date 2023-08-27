import FormHandler from './FormHandel'
import { UiControl } from './UI';


const addProjectBtn = document.querySelector('.add-project-btn');
addProjectBtn.addEventListener('click', FormHandler.createProject);

UiControl.deleteTodo()