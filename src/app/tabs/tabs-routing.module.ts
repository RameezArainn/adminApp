import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {

        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {

        path: 'rewards',
        loadChildren: () => import('../rewards/rewards.module').then(m => m.RewardsPageModule)
      },
      {

        path: 'offers',
        loadChildren: () => import('../offers/offers.module').then(m => m.OffersPageModule)
      },
      {

        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },

    ]
  },
         {
    path: '',
    redirectTo: 'tabs/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
