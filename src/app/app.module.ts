import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { MaterialModule } from './material-module';
import { NavComponent } from './nav/nav.component';
import { MarketDetailComponent } from './market-detail/market-detail.component';
import { MarketListComponent } from './market-list/market-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoinService } from './coin.service';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsService } from './news.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    MarketDetailComponent,
    MarketListComponent,
    DashboardComponent,
    NewsListComponent,
    NewsDetailComponent
  ],
  providers: [CoinService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
