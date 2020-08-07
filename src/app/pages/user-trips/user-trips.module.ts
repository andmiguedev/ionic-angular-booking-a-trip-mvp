import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { UserTripsPageRoutingModule } from "./user-trips-routing.module";

import { UserTripsPage } from "./user-trips.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, UserTripsPageRoutingModule],
  declarations: [UserTripsPage],
})
export class UserTripsPageModule {}
