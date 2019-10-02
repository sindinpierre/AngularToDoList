import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() send: EventEmitter<string> = new EventEmitter();

  text=``;

  constructor() { }

  ngOnInit() {
  }
  changeValue(newText: string) {
    console.log("changeValue: "+newText);
    this.send.emit(newText);
    
  }
}
