import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ListGames } from './list-games';
import { Game } from '../../interfaces/game.interface';

describe('ListGames', () => {
  let component: ListGames;
  let fixture: ComponentFixture<ListGames>;
  let httpMock: HttpTestingController;

  const apiUrl = 'https://www.freetogame.com/api/games';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListGames],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListGames);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne(apiUrl);
    req.flush([]);
    expect(component).toBeTruthy();
  });

  it('debería asignar los juegos recibidos del servicio', () => {
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
    ];

    fixture.detectChanges();
    const req = httpMock.expectOne(apiUrl);
    req.flush(mockGames);

    expect(component.games).toEqual(mockGames);
  });

  it('debería manejar el error cuando falla getAllGames', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    fixture.detectChanges();
    const req = httpMock.expectOne(apiUrl);
    req.error(new ProgressEvent('Network error'));

    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
});