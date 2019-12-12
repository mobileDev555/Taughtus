import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobtrainingPage } from './jobtraining.page';

const routes: Routes = [
  {
    path: '',
    component: JobtrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobtrainingPageRoutingModule {}
