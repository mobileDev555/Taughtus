import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paymoney1PageRoutingModule } from './paymoney1-routing.module';

import { Paymoney1Page } from './paymoney1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paymoney1PageRoutingModule
  ],
  declarations: [Paymoney1Page]
})
export class Paymoney1PageModule {}
