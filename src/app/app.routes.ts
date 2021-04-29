import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';
import { ChampionsComponent } from './champions/champions.component';


export const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent, data: {title: 'Games'}},
  { path: 'champions', component: ChampionsComponent, data: {title: 'News List'}}
  // { path: 'game/:id', component: GameComponent, data: {title: 'Game'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

