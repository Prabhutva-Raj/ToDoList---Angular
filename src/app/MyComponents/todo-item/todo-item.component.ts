import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';      ////
import { Todo } from 'src/app/Todo';        ////

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {

  @Input() todoInput : Todo;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();

  constructor(){ }

  onClick(A : Todo)
  {
    this.todoDelete.emit(A);
    console.log("on click has been triggered")
  }

}
