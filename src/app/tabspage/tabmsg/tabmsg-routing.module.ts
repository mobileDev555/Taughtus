import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabmsgPage } from './tabmsg.page';

const routes: Routes = [
  {
    path: '',
    component: TabmsgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmsgPageRoutingModule {}
