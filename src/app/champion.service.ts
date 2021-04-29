import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-extensions';

export class Champions {
    constructor(
        public type: string,
        public format: string,
        public version: string,
        public data: object
    ) {}
}

export class Champion {
    constructor(
        public version: string,
        public id: string,
        public key: string,
        public name: string,
        public title: string,
        public blurb: string,
        public info: object,
        public image: object,
        public tags: object,
        public partype: string,
        public stats: object
    ) {}
}

export class SortedChamps {
    constructor(
        public version: string,
        public id: string,
        public key: string,
        public name: string,
        public title: string,
        public blurb: string,
        public info: object,
        public image: object,
        public tags: object,
        public partype: string,
        public stats: object
    ) {}
}

@Injectable()
export class ChampionService {

    constructor(private http: Http) {}

    getAllChampions() {
        return this.http
        .get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`)
        .map((response: Response) => <Champions[]>response.json().data)
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    getSpecificChampion(champId: number) {
        return this.http
        .get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${champId}.json`)
        .map((response: Response) => <Champion[]>response.json())
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        const msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }

}
