import { Component, OnInit, Input } from '@angular/core';
import { Stories, NewsService } from '../news.service';

@Component({
    moduleId: module.id,
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  @Input() story: Stories;

  ngOnInit() {
  }

}
