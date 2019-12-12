import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabhomePageModule } from './../tabspage/tabhome/tabhome.module';
import { TabjobPageModule } from './../tabspage/tabjob/tabjob.module';
import { TabmsgPageModule } from './../tabspage/tabmsg/tabmsg.module';
import { TabtrainerPageModule } from './../tabspage/tabtrainer/tabtrainer.module';
import { TabmorePageModule } from './../tabspage/tabmore/tabmore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    TabhomePageModule,
    TabjobPageModule,
    TabmsgPageModule,
    TabmorePageModule,
    TabtrainerPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
