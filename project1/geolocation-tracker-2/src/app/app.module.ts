import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { HomeService } from './home.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { DarkModeToggle } from './dark/dark-mode-toggle.component';
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotfoundComponent,
    DashboardComponent,
    MapComponent,
    LeafletMapComponent,
    TermsAndConditionComponent,
    DarkModeToggle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HomeService,
  //   {
  //     provide: DARK_MODE_OPTIONS,
  //     useValue: {
  //         darkModeClass: 'my-dark-mode',
  //         lightModeClass: 'my-light-mode'
  //     }
  // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
