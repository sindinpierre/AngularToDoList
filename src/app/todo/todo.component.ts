import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ToDoInterface } from '../interfaces/to-do-interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() text: ToDoInterface;
  @Output() removeToDo: EventEmitter<ToDoInterface> = new EventEmitter();
  @Output() updateToDo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  removeItem() {
    this.removeToDo.emit(this.text);
  }

  completeItem() {
    this.updateToDo.emit({
      text: this.text.text,
      changes: { completed: !this.text.isEnd }
    });
    this.text.isEnd=!this.text.isEnd;
  }
}
