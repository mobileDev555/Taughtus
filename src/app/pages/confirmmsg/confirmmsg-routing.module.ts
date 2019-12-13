import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmmsgPage } from './confirmmsg.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmmsgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmmsgPageRoutingModule {}
