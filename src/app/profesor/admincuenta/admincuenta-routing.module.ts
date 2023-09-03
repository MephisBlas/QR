import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuentaPage } from './admincuenta.page'; // Asegúrate de que esté importada correctamente

const routes: Routes = [
  {
    path: '',
    component: CuentaPage // Asegúrate de que AdmincuentaPage esté configurada correctamente aquí
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmincuentaPageRoutingModule {}