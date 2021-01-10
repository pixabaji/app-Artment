import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';
import { ApartmentListComponent } from './apartment/apartment-list/apartment-list.component';
import { ApartmentDetailComponent } from './apartment/apartment-detail/apartment-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component: LandingPageComponent},
  {path: 'apts-list', component: ApartmentListComponent},
  {path: 'apt-detail', component: ApartmentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
