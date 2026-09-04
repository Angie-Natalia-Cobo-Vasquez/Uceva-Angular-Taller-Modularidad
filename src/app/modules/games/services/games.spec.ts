import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Game } from '../interfaces/game.interface';
import { Games } from './games';

describe('Games', () => {
  let service: Games;
  let httpMock: HttpTestingController;

  const apiUrl = 'https://www.freetogame.com/api/games';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(Games);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllGames debería realizar una petición GET a la API de FreeToGame', () => {
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

    service.getAllGames().subscribe(games => {
      expect(games).toEqual(mockGames);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  });

  it('getAllGames debería emitir un error cuando la petición falla', () => {
    let errorReceived: unknown;

    service.getAllGames().subscribe({
      error: (error) => errorReceived = error,
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush('Error del servidor', { status: 500, statusText: 'Server Error' });

    expect(errorReceived).toBeDefined();
  });
});