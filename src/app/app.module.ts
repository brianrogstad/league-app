import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routes';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { GameService } from './game.service';
import { ChampionService } from './champion.service';
import { GamesData } from './gamesData';
import { GameData } from './gameData';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';
import { ChampionsComponent } from './champions/champions.component';
import { SeasonNavComponent } from './season-nav/season-nav.component';
import { GameNavComponent } from './game-nav/game-nav.component';
import { LaneNavComponent } from './lane-nav/lane-nav.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    GameComponent,
    GamesComponent,
    ChampionsComponent,
    SeasonNavComponent,
    GameNavComponent,
    LaneNavComponent,
    LoaderComponent
  ],
  providers: [
    GameService,
    GameData,
    GamesData,
    ChampionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
