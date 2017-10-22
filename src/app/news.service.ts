import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Stories {
  constructor(articles: object) {}
}

@Injectable()
export class NewsService {
    constructor(private http: Http) {}

    getStories() {
        return this.http
        .get('https://newsapi.org/v1/articles?source=fortune&sortBy=top&apiKey=8b1db5f344fa47769427bbccbf2631a7')
        .map((response: Response) => <Stories[]>response.json())
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }
}
