import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialscreenPageRoutingModule } from './initialscreen-routing.module';

import { InitialscreenPage } from './initialscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitialscreenPageRoutingModule
  ],
  declarations: [InitialscreenPage]
})
export class InitialscreenPageModule {}
