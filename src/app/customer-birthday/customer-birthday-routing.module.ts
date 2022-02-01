import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerBirthdayPage } from './customer-birthday.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerBirthdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerBirthdayPageRoutingModule {}
