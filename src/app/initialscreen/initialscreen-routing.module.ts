import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialscreenPage } from './initialscreen.page';

const routes: Routes = [
  {
    path: '',
    component: InitialscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialscreenPageRoutingModule {}
