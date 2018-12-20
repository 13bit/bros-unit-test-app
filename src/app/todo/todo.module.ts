import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {HttpClientModule} from '@angular/common/http';
import {TodoService} from './todo.service';
import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent} from './todo.component';
import { TodoShowComponent } from './todo-show/todo-show.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TodoRoutingModule,
  ],
  providers: [
    TodoService
  ],
  declarations: [
    TodoListComponent,
    TodoComponent,
    TodoShowComponent
  ]
})
export class TodoModule {
}
