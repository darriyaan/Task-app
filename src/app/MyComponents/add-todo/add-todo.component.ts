import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  description!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo ={
      serialNo: 5,
      title: this.title,
      description: this.description,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
