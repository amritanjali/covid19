import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule,  HTTP_INTERCEPTORS} from '@angular/common/http'



import { DashboardComponent } from './dashboard/dashboard.component';
import{HomeRoutingModule} from './home/home-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export function CreateTranslateLoader(http: HttpClient) {
  // console.log("translator orkking")

}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,

    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
