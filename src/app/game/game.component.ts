import { Component, OnInit } from '@angular/core';
import { Game, GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    errorMessage: string;
    gameId: number;
    game: Game[];
    title: any;

    constructor(private gameService: GameService) {
        // console.warn(this.game);
        this.title = this.gameId;
    }

    getEachGame(gameId) {
        this.gameService.getEachGame(this.gameId)
        .subscribe(
            game => this.game = game,
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit() {
        this.gameService.getAllGames();
    }

}
