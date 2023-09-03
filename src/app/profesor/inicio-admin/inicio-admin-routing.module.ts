import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAdminPage } from './inicio-admin.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAdminPageRoutingModule {}
