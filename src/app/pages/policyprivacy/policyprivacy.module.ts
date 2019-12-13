import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicyprivacyPageRoutingModule } from './policyprivacy-routing.module';

import { PolicyprivacyPage } from './policyprivacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyprivacyPageRoutingModule
  ],
  declarations: [PolicyprivacyPage]
})
export class PolicyprivacyPageModule {}
