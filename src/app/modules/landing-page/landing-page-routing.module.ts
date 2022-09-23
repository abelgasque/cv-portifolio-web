import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageHomeComponent } from './landing-page-home/landing-page-home.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
