import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabhome',
        children: [
          {
            path: '',
            loadChildren: '../tabspage/tabhome/tabhome.module#TabhomePageModule'
          }
        ]
      },
      {
        path: 'tabmsg',
        children: [
          {
            path: '',
            loadChildren: '../tabspage/tabmsg/tabmsg.module#TabmsgPageModule'
          }
        ]
      },
      {
        path: 'tabjob',
        children: [
          {
            path: '',
            loadChildren: '../tabspage/tabjob/tabjob.module#TabjobPageModule'
          }
        ]
      },
      {
        path: 'tabmore',
        children: [
          {
            path: '',
            loadChildren: '../tabspage/tabmore/tabmore.module#TabmorePageModule'
          }
        ]
      },
      {
        path: 'tabtrainer',
        children: [
          {
            path: '',
            loadChildren: '../tabspage/tabtrainer/tabtrainer.module#TabtrainerPageModule'
          }
        ]
      },
      { 
        path: 'myjob', 
        children: [
          {
            path: '',
            loadChildren: '../pages/myjob/myjob.module#MyjobPageModule'
          }
        ]
      }, 
      {
        path: '',
        redirectTo: 'tabs/tabhome',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tabhome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
