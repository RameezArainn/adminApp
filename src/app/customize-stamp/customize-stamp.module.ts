import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomizeStampPageRoutingModule } from './customize-stamp-routing.module';

import { CustomizeStampPage } from './customize-stamp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomizeStampPageRoutingModule
  ],
  declarations: [CustomizeStampPage]
})
export class CustomizeStampPageModule {}
