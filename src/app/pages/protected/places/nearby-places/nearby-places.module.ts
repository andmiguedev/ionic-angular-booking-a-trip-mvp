import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NearbyPlacesPageRoutingModule } from "./nearby-places-routing.module";

import { NearbyPlacesPage } from "./nearby-places.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyPlacesPageRoutingModule,
  ],
  declarations: [NearbyPlacesPage],
})
export class NearbyPlacesPageModule {}
