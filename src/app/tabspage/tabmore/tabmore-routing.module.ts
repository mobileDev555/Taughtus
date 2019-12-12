import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabmorePage } from './tabmore.page';

const routes: Routes = [
  {
    path: '',
    component: TabmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmorePageRoutingModule {}
