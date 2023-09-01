class TodosArrays {
  static allTodosArray = [];
  static todayTodoArray = [];
  static currentWeekTodoArray = [];

  static addToArray(newObject) {
    this.allTodosArray.unshift(newObject);
  }
}

class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Dates extends TodosArrays {
  static formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  static getCurrentDate() {
    const date = new Date();
    return this.formatDate(date);
  }

  static addToTodayArray() {
    this.todayTodoArray = [];
    const currentDate = this.getCurrentDate();
    this.allTodosArray.forEach((todo) => {
      if (todo.dueDate === currentDate) {
        this.todayTodoArray.push(todo);
      }
    });
  }

  static getStartOfWeek() {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - dayOfWeek);

    return this.formatDate(startOfWeek);
  }

  static addToCurrentWeekArray() {
    this.currentWeekTodoArray = [];
    const startOfWeek = this.getStartOfWeek();
    const endOfWeek = this.getEndOfWeek();

    this.allTodosArray.forEach((todo) => {
      if (todo.dueDate >= startOfWeek && todo.dueDate <= endOfWeek) {
        this.currentWeekTodoArray.push(todo);
      }
    });
  }

  static getEndOfWeek() {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const endOfWeek = new Date(date);
    endOfWeek.setDate(date.getDate() + (6 - dayOfWeek));

    return this.formatDate(endOfWeek);
  }
}

export { TodosArrays, Todos, Dates };

