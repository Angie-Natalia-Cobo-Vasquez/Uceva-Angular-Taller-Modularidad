import { Component } from '@angular/core';

/** Contenedor de las rutas del modulo de cursos. */
@Component({
  selector: 'app-courses',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class CoursesComponent { }