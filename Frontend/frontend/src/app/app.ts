import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>TaskFlow</h1>

    <nav>
      <a routerLink="/projects">Proyectos</a>
      <a routerLink="/tasks">Tareas</a>
    </nav>

    <section>
      <router-outlet></router-outlet>
    </section>
  `
})
export class AppComponent {}