import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { Game } from '../../interfaces/game.interface';
import { TableGames } from './table-games';

describe('TableGames', () => {
  let component: TableGames;
  let fixture: ComponentFixture<TableGames>;

  const mockGames: Game[] = [
    {
      id: 540,
      title: 'Overwatch 2',
      thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      short_description: 'A hero-focused shooter.',
      game_url: 'https://www.freetogame.com/open/overwatch-2',
      genre: 'Shooter',
      platform: 'PC (Windows)',
      publisher: 'Blizzard Entertainment',
      developer: 'Blizzard Entertainment',
      release_date: '2022-10-04',
      freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
    },
    {
      id: 521,
      title: 'Diablo Immortal',
      thumbnail: 'https://www.freetogame.com/g/521/thumbnail.jpg',
      short_description: 'Built for mobile and also released on PC.',
      game_url: 'https://www.freetogame.com/open/diablo-immortal',
      genre: 'Genérico-de-prueba',
      platform: 'PC (Windows)',
      publisher: 'Blizzard Entertainment',
      developer: 'Blizzard Entertainment',
      release_date: '2022-06-02',
      freetogame_profile_url: 'https://www.freetogame.com/diablo-immortal',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableGames, BadgeComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TableGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una fila por cada juego recibido', () => {
    component.games = mockGames;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(mockGames.length);
  });

  it('debería mostrar el título, la plataforma y el desarrollador de cada juego', () => {
    component.games = mockGames;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('td'));
      const game = mockGames[index];

      expect(columns[1].nativeElement.textContent.trim()).toBe(game.title);
      expect(columns[2].nativeElement.textContent.trim()).toBe(game.platform);
      expect(columns[3].nativeElement.textContent.trim()).toBe(game.developer);
    });
  });

  it('debería renderizar la imagen de cada juego con su miniatura', () => {
    component.games = mockGames;
    fixture.detectChanges();

    const images = fixture.debugElement.queryAll(By.css('tbody tr td img'));
    images.forEach((image, index) => {
      expect(image.nativeElement.src).toBe(mockGames[index].thumbnail);
    });
  });

  it('debería asignar el badge correcto para un género conocido', () => {
    component.games = [mockGames[0]];
    fixture.detectChanges();

    const badge = fixture.debugElement.query(By.directive(BadgeComponent)).componentInstance;
    expect(badge.type).toBe(component.getGenreBadge('Shooter'));
    expect(badge.type).toBe('danger');
  });

  it('debería usar "secondary" como badge para un género desconocido', () => {
    component.games = [mockGames[1]];
    fixture.detectChanges();

    const badge = fixture.debugElement.query(By.directive(BadgeComponent)).componentInstance;
    expect(badge.type).toBe('secondary');
  });

  it('debería retornar el badge correcto para un género conocido', () => {
    expect(component.getGenreBadge('Shooter')).toBe('danger');
    expect(component.getGenreBadge('MMORPG')).toBe('primary');
  });

  it('debería retornar "secondary" como fallback para un género desconocido', () => {
    expect(component.getGenreBadge('GéneroInventado')).toBe('secondary');
  });
});