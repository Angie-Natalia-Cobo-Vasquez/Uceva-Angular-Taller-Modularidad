import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesService } from '../../services/courses.service';
import { ListCoursesComponent } from './list-courses.component';
import { TableCoursesComponent } from '../../components/table-courses/table-courses.component';

describe('ListCoursesComponent', () => {
  let component: ListCoursesComponent;
  let fixture: ComponentFixture<ListCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCoursesComponent, TableCoursesComponent],
      providers: [CoursesService],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load courses from its service', () => {
    expect(component.courses.length).toBeGreaterThan(0);
  });
});