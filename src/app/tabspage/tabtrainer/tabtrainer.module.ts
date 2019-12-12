import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabtrainerPageRoutingModule } from './tabtrainer-routing.module';

import { TabtrainerPage } from './tabtrainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabtrainerPageRoutingModule
  ],
  declarations: [TabtrainerPage]
})
export class TabtrainerPageModule {}
