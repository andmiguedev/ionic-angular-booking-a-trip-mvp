import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripPlacesPageRoutingModule } from './trip-places-routing.module';

import { TripPlacesPage } from './trip-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripPlacesPageRoutingModule
  ],
  declarations: [TripPlacesPage]
})
export class TripPlacesPageModule {}
