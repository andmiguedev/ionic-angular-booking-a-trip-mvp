import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DetailTripPageRoutingModule } from "./detail-trip-routing.module";

import { DetailTripPage } from "./detail-trip.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTripPageRoutingModule,
  ],
  declarations: [DetailTripPage],
})
export class DetailTripPageModule {}
