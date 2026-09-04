import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing-module';
import { ListGames } from './pages/list-games/list-games';
import { TableGames } from './components/table-games/table-games';
import { SharedModule } from '../shared/shared-module';

/**
 * Módulo de funcionalidad encargado de visualizar videojuegos.
 *
 * @remarks
 * Agrupa la página {@link ListGames}, el componente de tabla {@link TableGames}
 * y las rutas del módulo `games`. Los datos se consumen en tiempo real desde la
 * API pública FreeToGame mediante el servicio {@link Games}.
 */
@NgModule({
  declarations: [
    ListGames,
    TableGames
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ]
})
export class GamesModule { }