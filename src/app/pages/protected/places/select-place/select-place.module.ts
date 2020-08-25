import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SelectPlacePageRoutingModule } from "./select-place-routing.module";

import { SelectPlacePage } from "./select-place.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPlacePageRoutingModule,
  ],
  declarations: [SelectPlacePage],
})
export class SelectPlacePageModule {}
