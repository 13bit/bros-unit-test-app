import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {ActivatedRoute} from '@angular/router';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.css']
})
export class TodoShowComponent implements OnInit {
  todo: Todo;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {
  }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.todoService.getOne(id)
      .subscribe((todo) => this.todo = todo);
  }

  getNextTodoId(currentId: number) {
    return ++currentId;
  }
}
