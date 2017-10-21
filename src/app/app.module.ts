import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app.routes';

import { MaterialModule } from './material-module';
import { NavComponent } from './nav/nav.component';
import { MarketDetailComponent } from './market-detail/market-detail.component';
import { MarketListComponent } from './market-list/market-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoinService } from './coin.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MarketDetailComponent,
    MarketListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
