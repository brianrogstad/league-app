import { Component, OnInit } from '@angular/core';
import { Coin, CoinService } from '../coin.service';

@Component({
    selector: 'app-market-list',
    templateUrl: './market-list.component.html',
    styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent implements OnInit {
    errorMessage: string;
    selectedCoin: Coin;
    coins: Coin[];

    constructor(private coinService: CoinService) {}

    getCoins() {
        this.coinService.getCoins()
        .subscribe(
            coins => this.coins = coins,
            error => this.errorMessage = <any>error
        );
    }

    getAllCoins() {
        this.coinService.getAllCoins()
        .subscribe(
            coins => this.coins = coins,
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit() {
        this.getCoins();
    }

    select(coin: Coin) {
        this.selectedCoin = coin;
    }

}
