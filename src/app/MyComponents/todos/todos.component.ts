import { Component } from '@angular/core';
import { Todo } from "../../Todo";                ////

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent { title = 'Todo list';

  localVar : string;
  todos:Todo[];
  constructor()
  {
    this.localVar = localStorage.getItem("todoList");
    if (this.localVar==null)
      this.todos = [];
    else
      this.todos = JSON.parse(this.localVar);
  }

  deleteTodo(e:Todo)
  {
    //console.log(e);
    const index = this.todos.indexOf(e);
    this.todos.splice(index,1)
    localStorage.setItem("todoList", JSON.stringify(this.todos));
  }

  addTodo(e:Todo)
  {
    //console.log(e);
    this.todos.push(e)
    localStorage.setItem("todoList", JSON.stringify(this.todos));
  }



}
