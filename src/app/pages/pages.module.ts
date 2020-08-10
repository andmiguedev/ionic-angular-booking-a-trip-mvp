import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { PagesPage } from "./pages.page";
import { PagesRoutingModule } from "./pages-routing.module";

@NgModule({
  imports: [CommonModule, IonicModule, PagesRoutingModule],
  declarations: [PagesPage],
})
export class PagesPageModule {}
