import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, map} from 'rxjs/operators';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  getOne(id: number): Observable<Todo> {
    if (typeof id !== 'number') {
      return throwError(`TodoService.getOne: id should be number`);
    }

    return this.http.get<Todo>(`${this.API_URL}/todos/${id}`);
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.API_URL}/todos`)
      .pipe(map((todoList) => todoList.filter(({id}) => id <= 5)));
  }


}
