import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COURSES } from '../../../core/config/courses.config';
import { Course } from '../interfaces/course.interface';

/** Servicio que expone los cursos configurados en Core. */
@Injectable({ providedIn: 'root' })
export class CoursesService {
  /** Obtiene todos los cursos disponibles. */
  getAllCourses(): Observable<Course[]> {
    return of(COURSES);
  }
}