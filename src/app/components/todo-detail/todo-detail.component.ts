import { Component, Input} from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';

@Component({
    selector: 'app-todo-detail',
    templateUrl: './todo-detail.component.html',
    styleUrls: ['./todo-detail.component.scss'],
    standalone: false
})
export class TodoDetailComponent {

  @Input() todoDetail?: Todo;

  constructor(private dataManagerServ: DataManagerService){

  }

  deleteTodo(){
    if (this.todoDetail) {
      this.dataManagerServ.deleteTodo(this.todoDetail);
    }
  }

}
