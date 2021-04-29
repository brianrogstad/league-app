import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-nav',
  templateUrl: './game-nav.component.html',
  styleUrls: ['./game-nav.component.scss']
})
export class GameNavComponent implements OnInit {
    public gameTypes: Array<any>;

    @Output() postGameType = new EventEmitter()

    constructor() {}

    ngOnInit() {
        this.createGameTypes();
    }

    createGameTypes() {

        this.gameTypes = [
            {
              value: 'Rift Blind',
              checked: false
            },
            {
              value: 'Rift Normal',
              checked: false
            },
            {
              value: 'Rift Ranked',
              checked: false
            },
            {
              value: 'Rift Flex',
              checked: false
            },
            {
              value: 'Treeline Blind',
              checked: false
            },
            {
              value: 'Treeline Flex',
              checked: false
            },
            {
              value: 'ARAM',
              checked: false
            },
            {
              value: 'Events',
              checked: false
            },
            {
              value: 'vs. AI',
              checked: false
            }
        ];
    }

    checked(filteredGameTypes) {
      this.postGameType.emit(filteredGameTypes);
    }

}
