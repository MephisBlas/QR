import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioadmiinPage } from './horarioadmiin.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioadmiinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioadmiinPageRoutingModule {}
