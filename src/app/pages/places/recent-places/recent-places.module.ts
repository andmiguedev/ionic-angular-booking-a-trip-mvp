import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentPlacesPageRoutingModule } from './recent-places-routing.module';

import { RecentPlacesPage } from './recent-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentPlacesPageRoutingModule
  ],
  declarations: [RecentPlacesPage]
})
export class RecentPlacesPageModule {}
