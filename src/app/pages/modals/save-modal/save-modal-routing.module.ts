import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveModalPage } from './save-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SaveModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveModalPageRoutingModule {}
