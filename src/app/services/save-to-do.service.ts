import { Injectable } from '@angular/core';
import { ToDoInterface } from '../interfaces/to-do-interface';


@Injectable({
  providedIn: 'root'
})
export class SaveToDoService {
  private todoList: ToDoInterface[]= [];
  constructor()
  {

  }


  getToDo() {
    return this.todoList;
  }

  addToDo(toDo: ToDoInterface) {
    this.todoList.push(toDo);
  }

  deleteToDo(toDo: ToDoInterface) {
    const toDoIndex = this.todoList.indexOf(toDo);
    this.todoList.splice(toDoIndex,1);
  }

  updateToDo(toDo: ToDoInterface, changes) {
    const index = this.todoList.indexOf(toDo);
    this.todoList[index] = { ...toDo, ...changes };
    console.log(this.todoList[index])
  }
}
