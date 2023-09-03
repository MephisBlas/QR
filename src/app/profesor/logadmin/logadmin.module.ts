import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Agrega ReactiveFormsModule
import { IonicModule } from '@ionic/angular';
import { LogadminPageRoutingModule } from './logadmin-routing.module';
import { LogadminPage } from './logadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogadminPageRoutingModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule aquí
  ],
  declarations: [LogadminPage],
})
export class LogadminPageModule {}
