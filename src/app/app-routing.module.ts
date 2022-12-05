import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/landing-page/landing-page.module').then((module) => module.LandingPageModule)
          }
        ]
      },
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
