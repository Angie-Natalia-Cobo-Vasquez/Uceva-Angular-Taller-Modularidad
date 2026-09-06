import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

/** Tabla presentacional de cursos. */
@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  standalone: false,
})
export class TableCoursesComponent {
  /** Cursos que se muestran en la tabla. */
  @Input() courses: Course[] = [];
}