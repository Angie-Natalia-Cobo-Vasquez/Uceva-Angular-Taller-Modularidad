import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

/**
 * Módulo de rutas del módulo de inicio.
 *
 * @remarks
 * Define la ruta base (vacía) de la sección `/home`, que renderiza la página
 * {@link HomePageComponent} con el acceso directo a los módulos del taller.
 */
const routes: Routes = [
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }