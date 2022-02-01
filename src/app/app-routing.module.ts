import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'rewards',
    loadChildren: () => import('./rewards/rewards.module').then( m => m.RewardsPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'customize-stamp',
    loadChildren: () => import('./customize-stamp/customize-stamp.module').then( m => m.CustomizeStampPageModule)
  },
  {
    path: 'customer-birthday',
    loadChildren: () => import('./customer-birthday/customer-birthday.module').then( m => m.CustomerBirthdayPageModule)
  },
  {
    path: 'report-a-problem',
    loadChildren: () => import('./report-a-problem/report-a-problem.module').then( m => m.ReportAProblemPageModule)
  },
  {
    path: 'policy-terms',
    loadChildren: () => import('./policy-terms/policy-terms.module').then( m => m.PolicyTermsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
