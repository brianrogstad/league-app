import { Component, OnInit } from '@angular/core';
import { Stories, NewsService } from '../news.service';

@Component({
    moduleId: module.id,
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
    errorMessage: string;
    selectedStories: Stories;
    stories: Stories[];

    constructor(private storiesService: NewsService) {}

    getStories() {
        this.storiesService.getStories()
        .subscribe(
            stories => this.stories = stories,
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit() {
        this.getStories();
    }

    select(stories: Stories) {
        this.selectedStories = stories;
    }

}
