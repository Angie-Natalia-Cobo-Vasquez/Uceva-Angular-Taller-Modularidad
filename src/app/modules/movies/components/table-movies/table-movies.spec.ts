import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { Movie } from '../../interfaces/movie.interface';
import { TableMovies } from './table-movies';

describe('TableMovies', () => {
  let component: TableMovies;
  let fixture: ComponentFixture<TableMovies>;

  const mockMovies: Movie[] = [
    {
      id: 1,
      title: 'El Conjuro',
      director: 'James Wan',
      year: 2013,
      genre: 'Terror',
      duration: 112,
    },
    {
      id: 2,
      title: 'Coco',
      director: 'Lee Unkrich',
      year: 2017,
      genre: 'Animacion',
      duration: 105,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableMovies, BadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableMovies);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('debería renderizar una fila por cada película recibida', () => {
    component.movies = mockMovies;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(mockMovies.length);
  });

  it('debería mostrar el título, director, año y duración de cada película', () => {
    component.movies = mockMovies;
    fixture.detectChanges();

    const firstRow = fixture.debugElement.query(By.css('tbody tr'));
    const cellsText = firstRow.nativeElement.textContent;

    expect(cellsText).toContain(mockMovies[0].title);
    expect(cellsText).toContain(mockMovies[0].director);
    expect(cellsText).toContain(String(mockMovies[0].year));
    expect(cellsText).toContain(String(mockMovies[0].duration));
  });

  it('debería retornar el badge correcto para un género conocido', () => {
    expect(component.getGenreBadge('Terror')).toBe('danger');
    expect(component.getGenreBadge('Comedia')).toBe('warning');
    expect(component.getGenreBadge('Drama')).toBe('primary');
    expect(component.getGenreBadge('Accion')).toBe('success');
    expect(component.getGenreBadge('Animacion')).toBe('info');
    expect(component.getGenreBadge('CienciaFiccion')).toBe('secondary');
  });

  it('debería usar "secondary" como fallback para un género desconocido', () => {
    expect(component.getGenreBadge('Inexistente' as any)).toBe('secondary');
  });
});