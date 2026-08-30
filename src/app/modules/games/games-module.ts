import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing-module';
import { ListGames } from './pages/list-games/list-games';
import { TableGames } from './components/table-games/table-games';
import { SharedModule } from '../shared/shared-module';

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