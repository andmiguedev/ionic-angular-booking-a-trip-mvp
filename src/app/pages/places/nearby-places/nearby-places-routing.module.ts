import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NearbyPlacesPage } from "./nearby-places.page";

const routes: Routes = [
  {
    path: "",
    component: NearbyPlacesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyPlacesPageRoutingModule {}
