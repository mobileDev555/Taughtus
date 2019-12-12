import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobcompletePageRoutingModule } from './jobcomplete-routing.module';

import { JobcompletePage } from './jobcomplete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobcompletePageRoutingModule
  ],
  declarations: [JobcompletePage]
})
export class JobcompletePageModule {}
