import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingHeaderComponent } from './landing-page/landing-header/landing-header.component';
import { ApartmentListComponent } from './apartment/apartment-list/apartment-list.component';
import { ApartmentDetailComponent } from './apartment/apartment-detail/apartment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingHeaderComponent,
    ApartmentListComponent,
    ApartmentDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
