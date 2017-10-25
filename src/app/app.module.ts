import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routes';
import { MaterialModule } from './material-module';
import { CovalentLayoutModule } from '@covalent/core';

import { NavComponent } from './nav/nav.component'; 
import { MarketListComponent } from './market-list/market-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoinService } from './coin.service';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsService } from './news.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    CovalentLayoutModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    MarketListComponent,
    DashboardComponent,
    NewsListComponent
  ],
  providers: [
    CoinService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
