import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabmorePageRoutingModule } from './tabmore-routing.module';

import { TabmorePage } from './tabmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabmorePageRoutingModule
  ],
  declarations: [TabmorePage]
})
export class TabmorePageModule {}
