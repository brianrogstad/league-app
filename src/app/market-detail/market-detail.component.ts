import { Component, OnInit, Input } from '@angular/core';
import { Coin, CoinService } from '../coin.service';

@Component({
    selector: 'app-market-detail',
    templateUrl: './market-detail.component.html',
    styleUrls: ['./market-detail.component.scss']
})
export class MarketDetailComponent implements OnInit {

    @Input() coin: Coin;

    ngOnInit() {

    }

}
