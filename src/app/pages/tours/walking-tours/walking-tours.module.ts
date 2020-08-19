import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkingToursPageRoutingModule } from './walking-tours-routing.module';

import { WalkingToursPage } from './walking-tours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkingToursPageRoutingModule
  ],
  declarations: [WalkingToursPage]
})
export class WalkingToursPageModule {}
