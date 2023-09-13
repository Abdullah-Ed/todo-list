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
    this.id = Date.now()+ Math.random(); // Using a timestamp as a simple unique identifier
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
    const currentDate = this.getCurrentDate();
    TodosArrays.todayTodoArray = TodosArrays.allTodosArray.filter((todo) => todo.dueDate === currentDate);
  }

  static getStartOfWeek() {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - dayOfWeek);

    return this.formatDate(startOfWeek);
  }

  static addToCurrentWeekArray() {
    const startOfWeek = this.getStartOfWeek();
    const endOfWeek = this.getEndOfWeek();

    TodosArrays.currentWeekTodoArray = TodosArrays.allTodosArray.filter((todo) => {
      return todo.dueDate >= startOfWeek && todo.dueDate <= endOfWeek;
    });
  }

  static getEndOfWeek() {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const endOfWeek = new Date(date);
    endOfWeek.setDate(date.getDate() + (6 - dayOfWeek));

    return this.formatDate(endOfWeek);
  }

  static updateDatesArray(){
    Dates.addToTodayArray();
    console.log(Dates.todayTodoArray);
    Dates.addToCurrentWeekArray();
    console.log(Dates.currentWeekTodoArray);
  }
}

export { TodosArrays, Todos, Dates };

