import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing-module';
import { ListMovies } from './pages/list-movies/list-movies';
import { TableMovies } from './components/table-movies/table-movies';
import { SharedModule } from '../shared/shared-module';

/**
 * Módulo de funcionalidad de películas.
 *
 * @remarks
 * Agrupa la página principal ({@link ListMovies}) y el componente de tabla
 * ({@link TableMovies}) del módulo. Los datos se obtienen desde una fuente
 * de configuración estática en el Core (`movies.config.ts`), a diferencia
 * del módulo `games`, que consume una API real mediante `HttpClient`.
 */
@NgModule({
  declarations: [
    ListMovies,
    TableMovies
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }