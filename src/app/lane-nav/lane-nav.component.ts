import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lane-nav',
  templateUrl: './lane-nav.component.html',
  styleUrls: ['./lane-nav.component.scss']
})

export class LaneNavComponent implements OnInit {
    public filterRoles: Array<any>;

    @Output() postRole = new EventEmitter()

    constructor() {}

    ngOnInit() {
        this.createRoles();
    }

    createRoles() {

        this.filterRoles = [
            {
              value: 'Support',
              checked: false
            },
            {
              value: 'Jungle',
              checked: false
            },
            {
              value: 'Mid',
              checked: false
            },
            {
              value: 'Top',
              checked: false
            },
            {
              value: 'Bottom',
              checked: false
            }
        ];
    }

    checked(filteredRoles) {
      this.postRole.emit(filteredRoles);
    }

}