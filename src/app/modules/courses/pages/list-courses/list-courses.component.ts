import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';

/** Pagina principal que carga y presenta los cursos. */
@Component({
  selector: 'app-list-courses',
  template: `<app-table-courses [courses]="courses"></app-table-courses>`,
  standalone: false,
})
export class ListCoursesComponent implements OnInit {
  /** Cursos obtenidos desde el servicio. */
  courses: Course[] = [];
  /** Servicio que obtiene los cursos desde Core. */
  private coursesService = inject(CoursesService);

  /** Carga los cursos al iniciar la pagina. */
  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe({
      next: (courses) => this.courses = courses,
      error: (error) => console.error(error),
    });
  }
}