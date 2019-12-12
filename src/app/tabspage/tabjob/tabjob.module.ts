import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabjobPageRoutingModule } from './tabjob-routing.module';

import { TabjobPage } from './tabjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabjobPageRoutingModule
  ],
  declarations: [TabjobPage]
})
export class TabjobPageModule {}
