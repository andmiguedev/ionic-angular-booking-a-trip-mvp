import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { ProtectedPage } from "./protected.page";
import { PagesRoutingModule } from "./protected-routing.module";

@NgModule({
  imports: [CommonModule, IonicModule, PagesRoutingModule],
  declarations: [ProtectedPage],
})
export class ProtectedPageModule {}
