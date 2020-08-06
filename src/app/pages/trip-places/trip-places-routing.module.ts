import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripPlacesPage } from './trip-places.page';

const routes: Routes = [
  {
    path: '',
    component: TripPlacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripPlacesPageRoutingModule {}
