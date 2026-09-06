import { TestBed } from '@angular/core/testing';
import { COURSES } from '../../../core/config/courses.config';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should return courses from the Core configuration', (done) => {
    service.getAllCourses().subscribe(courses => {
      expect(courses).toEqual(COURSES);
      done();
    });
  });
});