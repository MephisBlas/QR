import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogadminPage } from './logadmin.page';

const routes: Routes = [
  {
    path: '',
    component: LogadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogadminPageRoutingModule {}
