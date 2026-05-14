import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({ providedIn: 'root' })
export class TaskService {

  private api = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api);
  }

  getByStatus(status: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.api}/status/${status}`);
  }

  createTask(data: Task): Observable<Task> {
    return this.http.post<Task>(this.api, data);
  }

  changeStatus(id: number, status: string): Observable<void> {
    return this.http.patch<void>(`${this.api}/${id}/status`, { status });
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}