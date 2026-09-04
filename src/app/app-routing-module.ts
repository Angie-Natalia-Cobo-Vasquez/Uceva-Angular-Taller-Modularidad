import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Módulo de rutas raíz de la aplicación.
 *
 * @remarks
 * Configura las rutas principales de la aplicación. La ruta base redirige a
 * la página de inicio `/home`. Los módulos de funcionalidad (`home`, `users`,
 * `products` y `games`) se cargan de forma perezosa mediante `loadChildren`
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
    path: 'users',
    loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products-module').then(m => m.ProductsModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./modules/games/games-module').then(m => m.GamesModule)
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