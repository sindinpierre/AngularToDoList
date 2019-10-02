import { Component, OnInit, Input, Output } from '@angular/core';
import { SaveToDoService } from '../services/save-to-do.service';
import { ToDoInterface } from '../interfaces/to-do-interface'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: ToDoInterface[];
 

  constructor(private todoList: SaveToDoService) {
    function hello() {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          let reponse=confirm("Voulez-vous entrer sur ce site?");
          if (reponse) {
            resolve();
          } else {
            reject()
          }
        }, 1000);
      });
      return promise;
    }
    
    hello().then(() => console.log("Bienvenue"),() => window.location.reload());

   }

  ngOnInit() {
    this.list = this.todoList.getToDo();
  }
  add(text: string) {
    this.todoList.addToDo({ text , isEnd:false});

  }

  remove(item) {
    this.todoList.deleteToDo(item);
    console.log('je veux supprimer')
  }

  update(item, changes) {
    this.todoList.updateToDo(item, changes);
  }
}
