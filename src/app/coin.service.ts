import { Injectable } from '@angular/core';

export class Coin {
  constructor(public id: number, public name: string, public side: string) {}
}

@Injectable()
export class CoinService {
    getCoins() {
        return [
            new Coin(10, 'item 1', 'good'),
            new Coin(12, 'item 2', 'bad')
        ];
    }
}
