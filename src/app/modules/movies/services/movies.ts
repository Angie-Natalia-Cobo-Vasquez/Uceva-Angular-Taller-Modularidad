import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES_DATA } from '../../../core/config/movies.config';
import { Movie } from '../interfaces/movie.interface';

/**
 * Servicio para gestionar películas.
 *
 * @remarks
 * Se encarga de proporcionar métodos para obtener las películas de la
 * aplicación. Actualmente devuelve un listado de ejemplo definido en
 * {@link MOVIES_DATA}, centralizado en `core/config/movies.config.ts`.
 *
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede
 * ser inyectado en cualquier componente que necesite acceder a las
 * películas.
 *
 * @example
 * ```ts
 * constructor(private moviesService: Movies) {}
 *
 * ngOnInit() {
 *   this.moviesService.getAllMovies().subscribe(movies => {
 *     console.log(movies);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class Movies {
  /**
   * Obtiene todas las películas disponibles.
   *
   * @returns Observable con el listado de películas (`Movie[]`).
   */
  getAllMovies(): Observable<Movie[]> {
    return of(MOVIES_DATA);
  }
}