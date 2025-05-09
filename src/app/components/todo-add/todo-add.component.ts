import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.scss'],
    standalone: false
})
export class TodoAddComponent {

  newTodo: Todo = {title:'', priority:1, description: ''}

  constructor(private dataMangerServ: DataManagerService){}

  saveTodo(){
    this.dataMangerServ.addTodo({...this.newTodo})
  }

}
