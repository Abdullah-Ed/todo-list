import { TodosArrays } from "./crateTodo";

class TodoManager {
  static renderTodo(todo, index) {
    return `
      <div class="todo-container">
        <h1>${todo.title}</h1>
        <p>${todo.description}</p>
        <p>${todo.dueDate}</p>
        <p>${todo.priority}</p>
        <img class="delete-icon" data-index="${index}" src="../dist/images/delete.svg" alt="">
      </div>
    `;
  }

  static loadMainTodos() {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    TodosArrays.allTodosArray.forEach((todo, index) => {
      content.innerHTML += this.renderTodo(todo, index);
    });
  }

  static deleteTodo() {
    const content = document.querySelector('.content');
    content.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      TodosArrays.allTodosArray.splice(index, 1);
      this.loadMainTodos();
    });
  }
}





export { TodoManager };
