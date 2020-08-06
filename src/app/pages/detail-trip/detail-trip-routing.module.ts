import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTripPage } from './detail-trip.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTripPageRoutingModule {}
