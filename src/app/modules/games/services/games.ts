import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GAMES_API_URL } from '../../../core/config/games.config';
import { Game } from '../interfaces/game.interface';

/**
 * Servicio para consumir videojuegos gratuitos desde la API pública FreeToGame.
 *
 * @remarks
 * Este servicio NO lee de un arreglo local de configuración: consulta la
 * información en tiempo real desde la URL centralizada en el Core
 * ({@link GAMES_API_URL}) usando `HttpClient`.
 */
@Injectable({
  providedIn: 'root',
})
export class Games {
  /** Instancia de `HttpClient` para realizar las peticiones HTTP. */
  private http = inject(HttpClient);

  /**
   * URL del endpoint público de FreeToGame que entrega el listado de juegos.
   *
   * @remarks
   * Se consulta mediante una petición `GET` con `HttpClient`. El valor se
   * centraliza en `core/config/games.config.ts` a través de {@link GAMES_API_URL}.
   */
  private readonly apiUrl = GAMES_API_URL;

  /**
   * Obtiene el listado de videojuegos gratuitos desde la API pública.
   * @returns Observable con el arreglo de juegos (`Game[]`).
   */
  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }
}