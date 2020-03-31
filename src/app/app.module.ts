import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule,  HTTP_INTERCEPTORS} from '@angular/common/http'
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { DashboardComponent } from './dashboard/dashboard.component';
import{HomeRoutingModule} from './home/home-routing.module';

// import { ViewUserComponent } from './user-managment/view-user/view-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

export function CreateTranslateLoader(http: HttpClient) {
  // console.log("translator orkking")
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
    // BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot() // ToastrModule added
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'top-right',
      preventDuplicates: true,
 
    }),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
