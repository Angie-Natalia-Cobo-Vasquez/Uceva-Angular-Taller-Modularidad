import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGames } from './pages/list-games/list-games';

const routes: Routes = [
  { path: 'list-games', component: ListGames },
  { path: '**', redirectTo: 'list-games' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }