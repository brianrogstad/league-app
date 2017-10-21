import { Component, OnInit } from '@angular/core';

import { Coin, CoinService } from '../coin.service';

@Component({
    moduleId: module.id,
    selector: 'app-market-list',
    templateUrl: './market-list.component.html',
    styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent implements OnInit {
    coins: Array<Coin>;
    messages: string[] = [];
    selectedCoin: Coin;

    constructor(private coinService: CoinService) {
        this.coins = this.coinService.getCoins();
    }

    select(coin: Coin) {
        this.selectedCoin = coin;
    }

    ngOnInit() {
    }

}
