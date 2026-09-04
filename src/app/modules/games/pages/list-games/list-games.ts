import { Component, inject, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { Games } from '../../services/games';

/**
 * Página principal del módulo de juegos.
 *
 * @remarks
 * Consume el servicio {@link Games} para obtener los videojuegos desde la API
 * pública FreeToGame y delega su renderizado al componente {@link TableGames}
 * mediante el Input `games`.
 *
 * @example
 * ```html
 * <app-list-games></app-list-games>
 * ```
 */
@Component({
  selector: 'app-list-games',
  standalone: false,
  templateUrl: './list-games.html',
  styleUrl: './list-games.scss',
})
export class ListGames implements OnInit {
  /**
   * Listado de videojuegos obtenidos desde la API.
   *
   * @remarks
   * Se asigna en `ngOnInit` cuando la petición HTTP del servicio responde.
   *
   * @type {Game[]}
   */
  games: Game[] = [];

  /**
   * Servicio encargado de consumir la API de juegos.
   *
   * @remarks
   * Se inyecta mediante la función `inject()` de Angular y se inicializa
   * con `providedIn: 'root'`.
   */
  private gamesService = inject(Games);

  /**
   * Inicializa el componente y carga los videojuegos.
   *
   * @remarks
   * Se suscribe al método `getAllGames()` del servicio y asigna los datos
   * recibidos a la propiedad `games`, o registra el error en la consola.
   */
  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe({
      next: (games) => this.games = games,
      error: (error) => console.error(error),
    });
  }
}