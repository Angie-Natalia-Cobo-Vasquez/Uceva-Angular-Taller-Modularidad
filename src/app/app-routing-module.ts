import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Módulo de rutas raíz de la aplicación.
 *
 * @remarks
 * Configura las rutas principales de la aplicación. Los módulos de
 * funcionalidad (`users`, `products` y `games`) se cargan de forma perezosa
 * mediante `loadChildren` (lazy-loading). Cualquier ruta desconocida
 * redirige a la sección de usuarios.
 */
const routes: Routes = [
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
    redirectTo: 'users'
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