import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketListComponent } from './market-list/market-list.component';
import { MarketDetailComponent } from './market-detail/market-detail.component';
import { NewsListComponent } from './news-list/news-list.component';


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'markets', component: MarketListComponent, pathMatch: 'full'},
  { path: 'news', component: NewsListComponent},
  { path: 'detail/:id', component: MarketDetailComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


export const routableComponents = [
  DashboardComponent,
  MarketDetailComponent,
  MarketListComponent,
  NewsListComponent,
];
