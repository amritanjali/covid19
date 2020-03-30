
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';

import { DashboardComponent } from './../dashboard/dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: 'covid', pathMatch: 'full' },
  { path: "covid", component: DashboardComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
// export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
