class TodosArrays{
  static allTodosArray = [];
   static addToArray(newObject){
    this.allTodosArray.unshift(newObject)
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


export {TodosArrays,Todos};