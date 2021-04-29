import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GameService} from '../game.service';
import { Champion, Champions, SortedChamps, ChampionService } from '../champion.service';
import { GameData, Game} from '../gameData';
import { GamesData, Games, SortedGames } from '../gamesData';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {

    @Input() filterRole: Array<any>;
    @Input() filterSeason: Array<any>;
    @Input() filterGameType: Array<any>;

    errorMessage: string;
    games: Games[];
    game: Game[];
    gameId: number;
    loading = false;
    champion: Champion[];
    champions: Champions[];
    sortedChamps: SortedChamps[];
    sortedGames: SortedGames[];
    appliedFilters: Array<any>;

    constructor(
        private gameService: GameService,
        private championsService: ChampionService,
        gameData: GameData,
        gamesData: GamesData
    ) {}

    getAllGames() {
        // uncomment this block to use real api after refreshing and updating the api key
        // this.gameService.getAllGames().toPromise().then( resp => {
        //     console.log(resp);
        //     this.games = resp.gameDetails;
        //     this.game = resp.gameResults;
        //     this.loading = false;
        // });

        // uncomment this block to use mock data json file
        const allGames = new GamesData().data;
        const eachGame = new GameData().data;

        this.games = allGames;
        this.game = eachGame;

        console.log(allGames);
        console.log(eachGame);

        this.getGameStats(eachGame);
        this.getGameType(allGames);
        this.getGameRoles(allGames);
        this.getKDA(allGames);
        this.loading = false;
    }

    setAppliedFilters(filters) {

    }

    getAppliedFilters() {

    }

    onFilterRole(filteredRoles) {
        this.appliedFilters.concat(filteredRoles);
    }

    onFilterSeason(filteredSeasons) {

    }

    onFilterGameType(filteredGameTypes) {

    }

    ngAfterViewChecked() {
        console.log(this.appliedFilters);
    }

    getGameStats(eachGame) {
        var gamePlayerId;
        var gameStats;

        eachGame.forEach((game, index) => {
            for(var i = 0; game.participantIdentities.length > i; i++) {
                if (game.participantIdentities[i].player.summonerName === 'cryptocoin') {
                    gamePlayerId = game.participantIdentities[i].participantId;
                }
            }

            for(var i = 0; game.participants.length > i; i++) {
                if (game.participants[i].participantId === gamePlayerId) {
                    gameStats = game.participants[i].stats;
                    this.setGameStats(gameStats, index);
                }
            }
        });
    }

    setGameStats(gameStats, index) {
        this.games.forEach((individualGame, individualIndex) => {
            if (index === individualIndex) {
                individualGame.stats = gameStats;
            }
        });
    }

    getKDA (allgames) {
        allgames.forEach((game, index) => {
            let kills = game.stats.kills;
            let deaths = game.stats.deaths;
            let assists = game.stats.assists;

            let kdaTotal = kills + assists;
            let kda = function () {
                if (deaths === 0) {
                    return kdaTotal / 1;
                } else {
                    return kdaTotal / deaths;
                }
            }

            game.kda = Math.max( Math.round(kda() * 10) / 10, 2.8 ).toFixed(1);
        });
    }

    getChampInfo(respData) {
        for (const key in respData) {

            const obj = respData[key];
            if (!respData.hasOwnProperty(key)) {
                continue;
            }

            for (const prop in obj) {
                
                if (prop === 'key') {
                    const characterKey = parseInt(obj[prop]);
                    this.games.forEach((game, index) => {

                        if (characterKey && characterKey === game.champion) {
                            if(respData[key].image.full !== undefined){
                                game.character = (respData[key]);
                            }
                        }
                    });
                }
            }
        }

        this.sortChamps(this.games, this.getAppliedFilters());

    }

    getGameRoles(allgames) {
        allgames.forEach((game, index) => {
            if (game.queue === "ARAM" ) {
                game.role = "None"
            } else {
                switch (game.lane) {
                    case "MID":
                        game.role = "Mid"
                        break;

                    case "TOP":
                        game.role = "Top"
                        break;

                    case "JUNGLE":
                        game.queue = "Jungle"
                        break;

                    case "BOTTOM":
                        if (game.role === "DUO_SUPPORT") {
                            game.role = "Support"
                        } else {
                            game.role = "ADC"
                        }
                        break;

                    default:
                        game.role = "None"
                        break;
                }
            }
        });
    }

    getGameType(allgames) {
        allgames.forEach((game, index) => {
            switch (game.queue) {
                case 450:
                    game.queue = "ARAM"
                    break;

                case 420:
                    game.queue = "Rift Ranked"
                    break;

                case 400:
                    game.queue = "Rift Draft"
                    break;

                case 430:
                    game.queue = "Rift Blind"
                    break;

                case 440:
                    game.queue = "Rift Flex"
                    break;

                case 460:
                    game.queue = "TreeLine Blind"
                    break;

                case 470:
                    game.queue = "TreeLine Flex"
                    break;

                case 800:
                    game.queue = "vs. AI"
                    break;

                case 810:
                    game.queue = "vs. AI"
                    break;

                case 820:
                    game.queue = "vs. AI"
                    break;

                case 830:
                    game.queue = "vs. AI"
                    break;

                case 840:
                    game.queue = "vs. AI"
                    break;

                case 850:
                    game.queue = "vs. AI"
                    break;

                case 0:
                    game.queue = "Custom game"
                    break;
                
                default:
                    game.queue = "Events"
                    break;
            }
        });
    }

    getAllChampions() {
        this.championsService.getAllChampions().toPromise().then( resp => {
            console.warn(resp);
            this.champions = resp;
            this.getChampInfo(this.champions);
            this.loading = false;
        });
    }

    ngOnInit() {
        this.getAllGames();
        this.getAllChampions();
        this.loading = true;
    }

    goToGame(gameId) {
        this.gameService.getEachGame(gameId);
    }

    // TODO: is there a matSortInit to trigger sortData func
    sortData(sort) {
        const data = this.games.slice();

        if (!sort.active || sort.direction === '') {
            this.sortedGames = data;
            return;
        }

        this.sortedGames = data.sort((a, b) => {
            // console.warn(this.sortedGames);
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'timestamp': return compare(a.timestamp, b.timestamp, isAsc);
                case 'queue': return compare(a.queue, b.queue, isAsc);
                case 'role': return compare(a.role, b.role, isAsc);
                case 'totalMinionsKilled': return compare(a.totalMinionsKilled, b.totalMinionsKilled, isAsc);
                case 'wardsPlaced': return compare(a.wardsPlaced, b.wardsPlaced, isAsc);
                case 'visionScore': return compare(a.visionScore, b.visionScore, isAsc);
                default: return 0;
            }
        });


        function compare(a: number | string, b: number | string, isAsc: boolean) {
          return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    }

    sortChamps(data, filters) {
        console.log(filters);
        var champArray = [];

        var Champion = function (name, image, win, loss, winrate, cs, kda, kills, deaths, assists, ward, vs, gamesPlayed) {
            this.name = name;
            this.champImage = image;
            this.win = win;
            this.loss = loss
            this.winrate = winrate;
            this.csTotal = cs;
            this.kdaTotal = kda;
            this.killTotal = kills;
            this.deathTotal = deaths;
            this.assistTotal = assists;
            this.wardTotal = ward;
            this.vsTotal = vs;
            this.gamesPlayed = gamesPlayed;
        };

        data.forEach((game, index) => {
            var totalPlayed = 1;
            var winrate = 0;
            var gamesPlayed = 1;
            var gamesWithoutVision = 0;

            if (game.stats.win === true) {
                game.loss = 0;
                game.win = 1;
            } else {
                game.loss = 1;
                game.win = 0;
            }

            if (!game.stats.wardsPlaced) {
                game.stats.wardsPlaced = 0;
                gamesWithoutVision + 1;
            }

            function calculateWinRate(wins, gamesPlayed) {
                return winrate = wins / gamesPlayed;
            }

            var champ = new Champion (
                game.character.name,
                game.character.image.full,
                game.win,
                game.loss,
                calculateWinRate(game.win, gamesPlayed),
                game.stats.totalMinionsKilled,
                game.kda,
                game.stats.kills,
                game.stats.deaths,
                game.stats.assists,
                game.stats.wardsPlaced,
                game.stats.visionScore,
                gamesPlayed
            );

            // if (filterIsSelected(champArray, this.filteredRoles)) {
            //     console.log('checked');
            // }
            if (containsObject(champ, champArray)) {
                for (var i = 0; i < champArray.length; i++) {
                    if (champArray[i].name === champ.name) {
                        const updatedWins = champArray[i].win + champ.win;
                        const totalGames = champArray[i].gamesPlayed + 1;
                        const winRate = calculateWinRate(updatedWins, totalGames);
                        const killTotal = champArray[i].killTotal + champ.killTotal;
                        const deathTotal = champArray[i].deathTotal + champ.deathTotal;
                        const assistTotal = champArray[i].assistTotal + champ.assistTotal;
                        const kdaTotal = killTotal + assistTotal;
                        const round = (num, grainularity) => Math.round(num / grainularity) * grainularity;

                        const kda = function () {
                            if (deathTotal === 0) {
                                return kdaTotal / 1;
                            } else {
                                return kdaTotal / deathTotal;
                            }
                        }

                        champ.win = updatedWins;
                        champ.loss = champArray[i].loss + champ.loss;
                        champ.winrate = winRate
                        champ.csTotal = champArray[i].csTotal + champ.csTotal / totalGames;
                        champ.kdaTotal = round(kda(), .01);
                        champ.killTotal = killTotal;
                        champ.deathTotal = deathTotal;
                        champ.assistTotal = assistTotal;
                        champ.wardTotal = champArray[i].wardTotal + champ.wardTotal / (totalGames - gamesWithoutVision);
                        champ.vsTotal = champArray[i].vsTotal + champ.vsTotal / (totalGames - gamesWithoutVision);
                        champ.gamesPlayed = totalGames;

                        champArray.splice(i, 1, champ);
                    }
                }

            } else {
                champArray.push(champ);
            }

        });

        function containsObject(obj, list) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].name === obj.name) {
                    return true;
                }
            }

            return false;
        }

        function filterIsSelected(champList, filterList) {
            console.log(filterList);
            return true;
        }

        console.warn(champArray);
        this.sortedChamps = champArray;
    }

}
