import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-season-nav',
  templateUrl: './season-nav.component.html',
  styleUrls: ['./season-nav.component.scss']
})
export class SeasonNavComponent implements OnInit {
    public filterSeasons: Array<any>;

    @Output() postSeason = new EventEmitter()

    constructor() {}

    ngOnInit() {
        this.createSeasons();
    }

    createSeasons() {

        this.filterSeasons = [
            {
              value: 'Season 9',
              checked: false
            },
            {
              value: 'Season 8',
              checked: false
            },
            {
              value: 'Season 7',
              checked: false
            },
            {
              value: 'Season 6',
              checked: false
            },
            {
              value: 'Season 5',
              checked: false
            },
            {
              value: 'Season 4',
              checked: false
            },
            {
              value: 'Season 3',
              checked: false
            },
            {
              value: 'Season 2',
              checked: false
            },
            {
              value: 'Season 1',
              checked: false
            }
        ];
    }

    checked(filteredSeasons) {
      this.postSeason.emit(filteredSeasons);
    }

}
