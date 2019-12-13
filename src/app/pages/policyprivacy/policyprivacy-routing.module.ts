import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyprivacyPage } from './policyprivacy.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyprivacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyprivacyPageRoutingModule {}
