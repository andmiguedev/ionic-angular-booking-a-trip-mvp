import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PlacesPage } from "./places.page";
import { SuccessModalComponent } from "../../../components/modals/success-modal/success-modal.component";

const routes: Routes = [
  {
    path: "",
    component: PlacesPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PlacesPage, SuccessModalComponent],
  entryComponents: [SuccessModalComponent],
})
export class PlacesPageModule {}
