import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class ProjectService {

  private api = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.api);
  }

  createProject(data: Project): Observable<Project> {
    return this.http.post<Project>(this.api, data);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
