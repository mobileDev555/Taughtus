import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmmsgPageRoutingModule } from './confirmmsg-routing.module';

import { ConfirmmsgPage } from './confirmmsg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmmsgPageRoutingModule
  ],
  declarations: [ConfirmmsgPage]
})
export class ConfirmmsgPageModule {}
