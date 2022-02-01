import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomizeStampPage } from './customize-stamp.page';

const routes: Routes = [
  {
    path: '',
    component: CustomizeStampPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizeStampPageRoutingModule {}
