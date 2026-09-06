import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Movie, MovieGenre } from '../../interfaces/movie.interface';

/**
 * Mapa de género de película a color de badge.
 */
const GENRE_BADGE_MAP: Record<MovieGenre, BadgeType> = {
  Terror: 'danger',
  Comedia: 'warning',
  Drama: 'primary',
  Accion: 'success',
  Animacion: 'info',
  CienciaFiccion: 'secondary',
};

/**
 * Componente de tabla para el listado de películas.
 *
 * @remarks
 * Recibe el arreglo de películas mediante el `@Input` {@link movies} y
 * asigna un color de badge a cada género usando {@link getGenreBadge}.
 */
@Component({
  selector: 'app-table-movies',
  standalone: false,
  templateUrl: './table-movies.html',
  styleUrl: './table-movies.scss',
})
export class TableMovies {
  /** Listado de películas a renderizar. */
  @Input() movies: Movie[] = [];

  /**
   * Obtiene el tipo de badge correspondiente a un género.
   * @param genre Género de la película.
   * @returns El {@link BadgeType} asociado, o `'secondary'` si el género no está mapeado.
   */
  getGenreBadge(genre: MovieGenre): BadgeType {
    return GENRE_BADGE_MAP[genre] ?? 'secondary';
  }
}