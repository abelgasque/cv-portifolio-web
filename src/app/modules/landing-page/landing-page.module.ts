import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickOutsideModule } from 'ng-click-outside';

import { SharedModule } from './components/shared/shared.module';
import { LoaderModule } from './components/loader/loader.module';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageHomeComponent } from './landing-page-home/landing-page-home.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    LandingPageHomeComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    LoaderModule,
    LandingPageRoutingModule,
    SharedModule
  ]
})
export class LandingPageModule { }
