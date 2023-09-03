import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdmincuentaPageRoutingModule } from './admincuenta-routing.module';
import { CuentaPage } from './admincuenta.page'; // Asegúrate de que esté importada correctamente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmincuentaPageRoutingModule
  ],
  declarations: [CuentaPage] // Asegúrate de que AdmincuentaPage esté declarada aquí
})
export class AdmincuentaPageModule {}
