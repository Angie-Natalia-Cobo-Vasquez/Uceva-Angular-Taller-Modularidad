import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovies } from './pages/list-movies/list-movies';

/**
 * Módulo de rutas del módulo de películas.
 *
 * @remarks
 * Define las rutas hijas disponibles bajo `/movies`. La ruta por defecto
 * de la sección redirige a la página {@link ListMovies}.
 */
const routes: Routes = [
  { path: 'list-movies', component: ListMovies },
  { path: '**', redirectTo: 'list-movies' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }