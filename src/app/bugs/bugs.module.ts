import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BugsPageRoutingModule } from './bugs-routing.module';

import { BugsPage } from './bugs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BugsPageRoutingModule
  ],
  declarations: [BugsPage]
})
export class BugsPageModule {}
