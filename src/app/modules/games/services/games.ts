import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';

/**
 * Servicio para consumir videojuegos gratuitos desde la API pública FreeToGame.
 *
 * @remarks
 * Este servicio NO lee de un archivo de configuración local: obtiene la
 * información en tiempo real desde https://www.freetogame.com/api/games.
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
   * Se consulta mediante una petición `GET` con `HttpClient`.
   */
  private readonly apiUrl = 'https://www.freetogame.com/api/games';

  /**
   * Obtiene el listado de videojuegos gratuitos desde la API pública.
   * @returns Observable con el arreglo de juegos (`Game[]`).
   */
  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }
}