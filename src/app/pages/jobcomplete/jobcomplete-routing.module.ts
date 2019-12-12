import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobcompletePage } from './jobcomplete.page';

const routes: Routes = [
  {
    path: '',
    component: JobcompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobcompletePageRoutingModule {}
