import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferPlacesPage } from './offer-places.page';

const routes: Routes = [
  {
    path: '',
    component: OfferPlacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferPlacesPageRoutingModule {}
