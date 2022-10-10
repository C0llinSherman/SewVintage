import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DressRentalsComponent } from './dress-rentals/dress-rentals.component';
import { HomeComponent } from './home/home.component';
import { SewingClassesComponent } from './sewing-classes/sewing-classes.component';

const routes: Routes = [
  { path: '*', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sewing-classes', component: SewingClassesComponent },
  { path: 'about', component: AboutComponent},
  { path: 'dress-rentals', component: DressRentalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
