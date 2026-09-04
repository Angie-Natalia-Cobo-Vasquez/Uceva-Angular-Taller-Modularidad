import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './pages/list-users/list-users.component';

/**
 * Módulo de rutas del módulo de usuarios.
 *
 * @remarks
 * Define las rutas hijas disponibles bajo `/users`. La ruta por defecto
 * de la sección redirige a la página {@link ListUsersComponent}.
 */
const routes: Routes = [
  {
    path: 'list-users',
    component: ListUsersComponent
  },
  {
    path: '**',
    redirectTo: 'list-users'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
