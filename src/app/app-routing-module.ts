import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Módulo de rutas raíz de la aplicación.
 *
 * @remarks
 * Configura las rutas principales de la aplicación. La ruta base redirige a
 * la página de inicio `/home`. Los módulos de funcionalidad (`home`, `games` y
 * `courses`) se cargan de forma perezosa mediante `loadChildren`
 * (lazy-loading). Cualquier ruta desconocida redirige a `/home`.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home-module').then(m => m.HomeModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./modules/games/games-module').then(m => m.GamesModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses-module').then(m => m.CoursesModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./modules/movies/movies-module').then(m => m.MoviesModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

/**
 * Módulo raíz de enrutamiento, registrado en {@link AppModule}.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }