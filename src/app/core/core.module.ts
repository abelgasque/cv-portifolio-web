import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { LandingPageModule } from '../modules/landing-page/landing-page.module';
import { LoaderModule } from '../modules/landing-page/components/loader/loader.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { SharedModule } from '../modules/landing-page/components/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CoreComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule,

    LandingPageModule,
    SharedModule,
  ]
})
export class CoreModule { }
