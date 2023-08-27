import { TodosArrays,Todos } from "./crateTodo";
import{UiControl} from "./UI"


class FormHandler {
  static createProject(event) {
    event.preventDefault();
    const form = event.target.closest('form'); 

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Use destructuring to extract form values
    const { title, description, dueDate, priority } = form.elements;

    const newTodo = new Todos(title.value, description.value, dueDate.value, priority.value);
    
    TodosArrays.addToArray(newTodo);
    console.log(TodosArrays.allTodosArray);
    UiControl.loadMainTodos();
  }
}




export default FormHandler;