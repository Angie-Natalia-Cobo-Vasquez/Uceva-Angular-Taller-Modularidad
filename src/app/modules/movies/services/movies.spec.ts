import { TestBed } from '@angular/core/testing';
import { MOVIES_DATA } from '../../../core/config/movies.config';
import { Movies } from './movies';

describe('Movies', () => {
  let service: Movies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Movies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllMovies debería retornar un observable con las películas', (done) => {
    service.getAllMovies().subscribe(movies => {
      expect(movies).toEqual(MOVIES_DATA);
      expect(movies.length).toBe(MOVIES_DATA.length);
      done();
    });
  });
});
