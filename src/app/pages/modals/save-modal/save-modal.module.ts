import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaveModalPageRoutingModule } from './save-modal-routing.module';

import { SaveModalPage } from './save-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveModalPageRoutingModule
  ],
  declarations: [SaveModalPage]
})
export class SaveModalPageModule {}
