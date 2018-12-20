import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoComponent} from './todo.component';
import {TodoShowComponent} from './todo-show/todo-show.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      {
        path: 'list',
        component: TodoListComponent
      },
      {
        path: 'show/:id',
        component: TodoShowComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
