import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  form!: FormGroup;

  constructor(
    private service: ProjectService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      description: ['']
    });

    this.loadProjects();
  }

  loadProjects(): void {
    this.service.getProjects().subscribe((res: Project[]) => {
      this.projects = res;
    });
  }

  create(): void {
    if (this.form.invalid) return;

    this.service.createProject(this.form.value)
      .subscribe((created: Project) => {
        this.projects = [created, ...this.projects];
        this.form.reset();
      });
  }

  onDelete(event: Event, id: number): void {
    event.preventDefault();
    event.stopPropagation();

    this.projects = this.projects.filter(p => p.id !== id);

    this.service.deleteProject(id).subscribe({
      error: () => {
        this.loadProjects();
      }
    });
  }

  trackById(index: number, project: Project): number {
    return project.id!;
  }
}