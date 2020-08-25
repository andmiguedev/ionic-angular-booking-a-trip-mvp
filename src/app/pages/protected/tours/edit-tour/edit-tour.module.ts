import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTourPageRoutingModule } from './edit-tour-routing.module';

import { EditTourPage } from './edit-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTourPageRoutingModule
  ],
  declarations: [EditTourPage]
})
export class EditTourPageModule {}
