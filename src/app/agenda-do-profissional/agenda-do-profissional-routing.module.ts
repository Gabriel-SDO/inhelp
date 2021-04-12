import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaDoProfissionalPage } from './agenda-do-profissional.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaDoProfissionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaDoProfissionalPageRoutingModule {}
