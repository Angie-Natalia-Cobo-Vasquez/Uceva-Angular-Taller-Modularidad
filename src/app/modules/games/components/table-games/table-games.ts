import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Game } from '../../interfaces/game.interface';

/**
 * Mapa de géneros de videojuegos a tipos de Badge.
 *
 * @remarks
 * Permite asignar un color específico a cada género conocido de la API de
 * FreeToGame. Si llega un género no contemplado, el componente usa
 * `secondary` como valor por defecto (ver {@link TableGames.getGenreBadge}).
 *
 * @type {Record<string, BadgeType>}
 */
const GENRE_BADGE_MAP: Record<string, BadgeType> = {
  Shooter: 'danger',
  MMORPG: 'primary',
  Strategy: 'warning',
  MOBA: 'info',
  'Card Game': 'success',
  Fighting: 'secondary',
};

/**
 * Componente de tabla de videojuegos.
 *
 * @remarks
 * Muestra el listado de juegos consumido desde la API pública FreeToGame.
 * Recibe la información mediante el Input {@link TableGames.games} y renderiza
 * una fila por cada juego, incluida una imagen en miniatura y un badge de
 * color según su género.
 *
 * Forma parte de la capa de presentación del módulo `games`.
 *
 * @example
 * ```html
 * <app-table-games [games]="gamesList"></app-table-games>
 * ```
 */
@Component({
  selector: 'app-table-games',
  standalone: false,
  templateUrl: './table-games.html',
  styleUrl: './table-games.scss',
})
export class TableGames {
  /**
   * Listado de videojuegos que se muestran en la tabla.
   *
   * @remarks
   * Lo provee normalmente `ListGames` después de consumir el servicio
   * {@link Games}. Cada elemento debe cumplir la interfaz {@link Game}.
   *
   * @type {Game[]}
   */
  @Input() games: Game[] = [];

  /**
   * Devuelve el tipo de badge para el género de un videojuego.
   *
   * @param genre - Género del juego (por ejemplo: `Shooter`, `MMORPG`).
   * @returns Tipo de badge, con `secondary` como valor por defecto si el
   * género no está registrado en {@link GENRE_BADGE_MAP}.
   *
   * @example
   * ```ts
   * this.getGenreBadge('Shooter'); // 'danger'
   * ```
   */
  getGenreBadge(genre: string): BadgeType {
    return GENRE_BADGE_MAP[genre] ?? 'secondary';
  }
}