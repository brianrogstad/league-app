import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketListComponent } from './market-list/market-list.component';
import { MarketDetailComponent } from './market-detail/market-detail.component';
import { NewsListComponent } from './news-list/news-list.component';


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} },
  { path: 'markets', component: MarketListComponent, data: {title: 'Market List'}},
  { path: 'news', component: NewsListComponent, data: {title: 'News List'}},
  { path: 'detail/:id', component: MarketDetailComponent, data: {title: 'Market Details'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

