import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WalkingToursPage } from "./walking-tours.page";

const routes: Routes = [
  {
    path: "",
    component: WalkingToursPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkingToursPageRoutingModule {}
