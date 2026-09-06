import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableCoursesComponent } from './components/table-courses/table-courses.component';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing-module';
import { ListCoursesComponent } from './pages/list-courses/list-courses.component';

/** Modulo funcional independiente de cursos. */
@NgModule({
  declarations: [CoursesComponent, ListCoursesComponent, TableCoursesComponent],
  imports: [CommonModule, SharedModule, CoursesRoutingModule],
})
export class CoursesModule { }