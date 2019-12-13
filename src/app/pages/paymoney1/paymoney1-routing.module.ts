import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paymoney1Page } from './paymoney1.page';

const routes: Routes = [
  {
    path: '',
    component: Paymoney1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paymoney1PageRoutingModule {}
