import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {TodoComponent} from './todo.component';

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
        path: 'edit',
        component: TodoEditComponent
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
