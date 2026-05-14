import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TaskService } from '../../services/task.service';
import { ProjectService } from '../../services/project.service';
import { Task } from '../../interfaces/task.interface';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  projects: Project[] = [];
  form!: FormGroup;

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['pending', Validators.required],
      project_id: [null, Validators.required]
    });

    this.loadTasks();
    this.loadProjects();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((res: Task[]) => {
      this.tasks = res;
    });
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe((res: Project[]) => {
      this.projects = res;
    });
  }

  create(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.taskService.createTask(this.form.value)
      .subscribe((created: Task) => {
        this.tasks = [created, ...this.tasks];
        this.form.reset({ status: 'pending' });
      });
  }

  changeStatus(id: number, status: string): void {
    this.taskService.changeStatus(id, status).subscribe(() => {
      this.loadTasks();
    });
  }

  filter(status: string): void {
    this.taskService.getByStatus(status).subscribe((res: Task[]) => {
      this.tasks = res;
    });
  }

  trackById(index: number, task: Task): number {
    return task.id!;
  }
}