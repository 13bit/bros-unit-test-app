import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  getOne(id: number): Observable<any> {
    if (typeof id !== 'number') {
      return throwError(`TodoService.getOne: id should be number`);
    }

    return this.http.get<any>(`${this.API_URL}/todos/${id}`);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any>(`${this.API_URL}/todos`);
  }


}
