import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MybidPage } from './mybid.page';

const routes: Routes = [
  {
    path: '',
    component: MybidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MybidPageRoutingModule {}
