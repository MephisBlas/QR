import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioadmiinPageRoutingModule } from './horarioadmiin-routing.module';

import { HorarioadmiinPage } from './horarioadmiin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioadmiinPageRoutingModule
  ],
  declarations: [HorarioadmiinPage]
})
export class HorarioadmiinPageModule {}
