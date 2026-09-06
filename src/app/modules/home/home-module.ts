import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';
import { HomeRoutingModule } from './home-routing-module';
import { HomePageComponent } from './pages/home-page/home-page.component';

/**
 * Módulo de la página de inicio de la aplicación.
 *
 * @remarks
 * Agrupa la página {@link HomePageComponent} y sus rutas. Es la pantalla
 * inicial de la aplicación y brinda acceso directo a los módulos `games` y
 * `courses`.
 */
@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }