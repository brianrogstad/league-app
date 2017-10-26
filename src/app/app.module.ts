import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routes';
import { MaterialModule } from './material-module';
import { CovalentLayoutModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from './nav/nav.component';
import { MarketListComponent } from './market-list/market-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoinService } from './coin.service';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsService } from './news.service';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    CovalentLayoutModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    MarketListComponent,
    DashboardComponent,
    NewsListComponent,
    ChartComponent
  ],
  providers: [
    CoinService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
