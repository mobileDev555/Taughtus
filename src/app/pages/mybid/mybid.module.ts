import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MybidPageRoutingModule } from './mybid-routing.module';

import { MybidPage } from './mybid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MybidPageRoutingModule
  ],
  declarations: [MybidPage]
})
export class MybidPageModule {}
