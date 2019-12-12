import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabmsgPageRoutingModule } from './tabmsg-routing.module';

import { TabmsgPage } from './tabmsg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabmsgPageRoutingModule
  ],
  declarations: [TabmsgPage]
})
export class TabmsgPageModule {}
