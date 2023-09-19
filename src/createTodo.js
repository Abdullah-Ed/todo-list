import {isThisWeek,isToday,parseISO } from "date-fns";

class TodosArrays {
  static allTodosArray = [];
  static todayTodoArray = [];
  static currentWeekTodoArray = [];

  static addToArray(newObject) {
    this.allTodosArray.unshift(newObject);
  }
}

class Todos {
  constructor(title, description, dueDate, priority,project) {
    this.id = Date.now()+ Math.random(); // Using a timestamp as a simple unique identifier
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project
  }
}

class Dates extends TodosArrays {
  static addToTodayArray() {
    TodosArrays.todayTodoArray = TodosArrays.allTodosArray.filter((todo) => isToday(parseISO(todo.dueDate)) ==true);
  }

  static addToCurrentWeekArray() {
    TodosArrays.currentWeekTodoArray = TodosArrays.allTodosArray.filter((todo) => {
      return isThisWeek(parseISO(todo.dueDate)) == true ;
    });
  }

  static updateDatesArray(){
    Dates.addToTodayArray();
    console.log(Dates.todayTodoArray);
    Dates.addToCurrentWeekArray();
    console.log(Dates.currentWeekTodoArray);
  }
}

export { TodosArrays, Todos, Dates };

