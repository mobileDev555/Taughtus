import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistersuccessPageRoutingModule } from './registersuccess-routing.module';

import { RegistersuccessPage } from './registersuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistersuccessPageRoutingModule
  ],
  declarations: [RegistersuccessPage]
})
export class RegistersuccessPageModule {}
