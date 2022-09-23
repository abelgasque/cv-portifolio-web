import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing-page/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'landing-page',
        component: LandingPageComponent,
        children: [
          {
            path: 'home',
            loadChildren: () => import('./modules/landing-page/landing-page.module').then((module) => module.LandingPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
