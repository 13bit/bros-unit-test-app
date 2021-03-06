import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {TodoComponent} from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: '**',
    redirectTo: 'todo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
