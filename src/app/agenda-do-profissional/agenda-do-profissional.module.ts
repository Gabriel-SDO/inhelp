import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaDoProfissionalPageRoutingModule } from './agenda-do-profissional-routing.module';

import { AgendaDoProfissionalPage } from './agenda-do-profissional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaDoProfissionalPageRoutingModule
  ],
  declarations: [AgendaDoProfissionalPage]
})
export class AgendaDoProfissionalPageModule {}
