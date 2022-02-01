import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerBirthdayPageRoutingModule } from './customer-birthday-routing.module';

import { CustomerBirthdayPage } from './customer-birthday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerBirthdayPageRoutingModule
  ],
  declarations: [CustomerBirthdayPage]
})
export class CustomerBirthdayPageModule {}
