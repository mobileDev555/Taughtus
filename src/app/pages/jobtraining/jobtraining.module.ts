import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobtrainingPageRoutingModule } from './jobtraining-routing.module';

import { JobtrainingPage } from './jobtraining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobtrainingPageRoutingModule
  ],
  declarations: [JobtrainingPage]
})
export class JobtrainingPageModule {}
