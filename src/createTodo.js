import {isThisWeek,isToday,parseISO } from "date-fns";
import { ProjectHandler } from "./FormHandel";

class TodosArrays {
  static allTodosArray = [];
  static todayTodoArray = [];
  static currentWeekTodoArray = [];

  static userProjectsArray = [];
  static addToArray(newObject) {
    this.allTodosArray.unshift(newObject);
    Storage.storeTodos()
  }
}

class Todos {
  constructor(title, description, dueDate, priority,project,status) {
    this.id = Date.now()+ Math.random(); // Using a timestamp as a simple unique identifier
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.status = false; 
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

  static updateArrays(){
    ArraysManager.addToTodayArray();
    console.log(ArraysManager.todayTodoArray);
    ArraysManager.addToCurrentWeekArray();
    console.log(ArraysManager.currentWeekTodoArray);
    ArraysManager.updateProjectArray()
    Storage.storeTodos()
  }

  static getLilInnerText(){
    if(document.querySelector('.currentProject')){const project = document.querySelector('.currentProject').innerText
    console.log(project)
    return project}
  }

  static updateProjectArray(){
    TodosArrays.userProjectsArray = TodosArrays.allTodosArray.filter(
      (todo) => todo.project == this.getLilInnerText());
  }
}

class Storage{
  static storeTodos(){
    localStorage.setItem('todoArray', JSON.stringify(TodosArrays.allTodosArray));
  } 

  static getStoredTodo(){
    TodosArrays.allTodosArray = JSON.parse(localStorage.getItem('todoArray')) || TodosArrays.allTodosArray;
  }

  static storeProjects(){
    localStorage.setItem('projectsArray', JSON.stringify(ProjectHandler.projectArray));
  }

  static getStoredProjects(){
    ProjectHandler.projectArray = JSON.parse(localStorage.getItem('projectsArray')) || ProjectHandler.projectArray;
  }
}

export { TodosArrays, Todos, ArraysManager,Storage };

