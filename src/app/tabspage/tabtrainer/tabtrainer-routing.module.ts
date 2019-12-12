import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabtrainerPage } from './tabtrainer.page';

const routes: Routes = [
  {
    path: '',
    component: TabtrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabtrainerPageRoutingModule {}
