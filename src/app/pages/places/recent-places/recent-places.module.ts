import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecentPlacesPageRoutingModule } from "./recent-places-routing.module";

import { RecentPlacesPage } from "./recent-places.page";
import { SuccessModalComponent } from "../../../components/modals/success-modal/success-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentPlacesPageRoutingModule,
  ],
  declarations: [RecentPlacesPage, SuccessModalComponent],
  entryComponents: [SuccessModalComponent],
})
export class RecentPlacesPageModule {}
