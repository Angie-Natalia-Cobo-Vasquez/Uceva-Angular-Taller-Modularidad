import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableMovies } from '../../components/table-movies/table-movies';
import { Movie } from '../../interfaces/movie.interface';
import { Movies } from '../../services/movies';
import { ListMovies } from './list-movies';

describe('ListMovies', () => {
  let component: ListMovies;
  let fixture: ComponentFixture<ListMovies>;
  let moviesServiceSpy: jasmine.SpyObj<Movies> | { getAllMovies: jest.Mock };

  const mockMovies: Movie[] = [
    {
      id: 1,
      title: 'El Conjuro',
      director: 'James Wan',
      year: 2013,
      genre: 'Terror',
      duration: 112,
    },
  ];

  const configureTestBed = (getAllMoviesImpl: () => any) => {
    moviesServiceSpy = { getAllMovies: jest.fn(getAllMoviesImpl) };

    TestBed.configureTestingModule({
      declarations: [ListMovies, TableMovies, BadgeComponent],
      providers: [{ provide: Movies, useValue: moviesServiceSpy }],
    });

    fixture = TestBed.createComponent(ListMovies);
    component = fixture.componentInstance;
  };

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    configureTestBed(() => of([]));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('debería asignar las películas recibidas del servicio', () => {
    configureTestBed(() => of(mockMovies));
    fixture.detectChanges();

    expect(component.movies).toEqual(mockMovies);
  });

  it('debería pasar las películas recibidas al componente table-movies', () => {
    configureTestBed(() => of(mockMovies));
    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(TableMovies))
      .componentInstance;
    expect(tableComponent.movies).toEqual(mockMovies);
  });

  it('debería manejar el error cuando falla getAllMovies', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    configureTestBed(() => throwError(() => new Error('fallo de red')));

    fixture.detectChanges();

    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
});