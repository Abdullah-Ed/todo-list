import {isThisWeek,isToday,parseISO } from "date-fns";


class TodosArrays {
  static allTodosArray = [];
  static todayTodoArray = [];
  static currentWeekTodoArray = [];

  static userProjectsArray = [];
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
    this.project = project;
  }
}

class ArraysManager extends TodosArrays {
  static addToTodayArray() {
    TodosArrays.todayTodoArray = TodosArrays.allTodosArray.filter((todo) => isToday(parseISO(todo.dueDate)) ==true);
  }

  static addToCurrentWeekArray() {
    TodosArrays.currentWeekTodoArray = TodosArrays.allTodosArray.filter((todo) => {
      return isThisWeek(parseISO(todo.dueDate)) == true ;
    });
  }

  static updateDatesArray(){
    ArraysManager.addToTodayArray();
    console.log(ArraysManager.todayTodoArray);
    ArraysManager.addToCurrentWeekArray();
    console.log(ArraysManager.currentWeekTodoArray);
    ArraysManager.updateProjectArray()
    console.log(ArraysManager.userProjectsArray)
  }

  static getLilInnerText(){
    if(document.querySelector('.currentProject')){const project = document.querySelector('.currentProject').innerText
    console.log(project)
    return project}
  }

  static updateProjectArray(){
    TodosArrays.userProjectsArray = TodosArrays.allTodosArray.filter(
      (todo) => todo.project == this.getLilInnerText())
  }
}

export { TodosArrays, Todos, ArraysManager };

