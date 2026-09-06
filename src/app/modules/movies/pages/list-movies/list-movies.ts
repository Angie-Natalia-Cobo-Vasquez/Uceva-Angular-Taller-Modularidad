import { Component, inject, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { Movies } from '../../services/movies';

/**
 * Página principal del módulo de películas.
 *
 * @remarks
 * Obtiene el listado de películas desde {@link Movies} al inicializar el
 * componente y lo delega al componente de tabla (`app-table-movies`) para
 * su renderizado.
 */
@Component({
  selector: 'app-list-movies',
  standalone: false,
  templateUrl: './list-movies.html',
  styleUrl: './list-movies.scss',
})
export class ListMovies implements OnInit {
  /**
   * Listado de películas obtenidas del servicio.
   */
  movies: Movie[] = [];

  /** Instancia inyectada del servicio de películas. */
  private moviesService = inject(Movies);

  /**
   * Solicita el listado de películas al servicio y lo asigna a {@link movies}.
   * Si la petición falla, el error se registra en consola.
   */
  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}