import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-extensions';

export class SortedGames {
    constructor(
        public lane: string,
        public gameId: number,
        public champion: number,
        public platformId: string,
        public timestamp: number,
        public queue: number,
        public role: string,
        public season: number,
        public totalMinionsKilled: number,
        public wardsPlaced: number,
        public visionScore: number
    ) {}
}

export class Games {
    constructor(
        public lane: string,
        public gameId: number,
        public champion: number,
        public platformId: string,
        public timestamp: number,
        public queue: number,
        public role: string,
        public season: number
    ) {}
}

export class Game {
    constructor(
        public gameDuration: number,
        public gameId: number,
        public gameMode: string,
        public gameType: string,
        public gameVersion: string,
        public mapId: number,
        public participantIdentities: any,
        public participants: any,
        public platformId: string,
        public queueId: number,
        public seasonId: number,
        public teams: any
    ) {}
}

@Injectable()
export class GameService {

    constructor(private http: Http) {}

    getAllGames() {
        return this.http
        .get('https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/1mzgr4FU9Mw3op87GCtWsxdMme_Obp-8xFV76p8IZIqtStq-LsbXIR7x?api_key=RGAPI-d86a25e1-1f81-4e7c-9c54-81ccdd9e55f8')

        .map((response: Response) => {

            const gameDetails = <Games[]>[];
            const games = response.json().matches;
            const gameResults = <Game[]>[];
            const urlList = [];
            const rate = 2000;

            games.forEach(game => {
                urlList.push(`https://na1.api.riotgames.com/lol/match/v4/matches/${game.gameId}?api_key=RGAPI-d86a25e1-1f81-4e7c-9c54-81ccdd9e55f8`);
                gameDetails.push(new Games(
                    game.lane,
                    game.gameId,
                    game.champion,
                    game.platformId,
                    game.timestamp,
                    game.queue,
                    game.role,
                    game.season
                ));
            });

            async function wait(milliseconds) {
                return new Promise(resolve => {
                    setTimeout(resolve, milliseconds);
                });
            }

            async function doRequests(uris) {
                try {
                    for (const uri of uris) {
                        console.warn('getting url..');

                        const response = await fetch(uri);
                        const game = await response.json();
                        console.log(game);
                        console.log('pushing...');
                        gameResults.push(new Game(
                            game.gameDuration,
                            game.gameId,
                            game.gameMode,
                            game.gameType,
                            game.gameVersion,
                            game.mapId,
                            game.participantIdentities,
                            game.participants,
                            game.platformId,
                            game.queueId,
                            game.seasonId,
                            game.teams
                        ));

                        console.warn('waiting 1sec...');
                        await wait(rate);

                    }
                }
                catch (e) {
                    this.handleError(e);
                }
            }
            console.log('right before calling func');
            return doRequests(urlList).then(function () {
                console.log('done', gameResults, gameDetails);
                return {
                    gameDetails: gameDetails,
                    gameResults: gameResults
                };
            });

         })
        .catch(this.handleError);
    }

    getEachGame(gameId: number) {
        return this.http
        .get(`https://na1.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=RGAPI-d86a25e1-1f81-4e7c-9c54-81ccdd9e55f8`)
        .map((response: Response) => <Game[]>response.json())
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        const msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }
}
