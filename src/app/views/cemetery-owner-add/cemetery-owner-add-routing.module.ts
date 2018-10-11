import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CemeteryOwnerAddComponent } from './cemetery-owner-add.component';

const routes: Routes = [
  {
    path: '',
    component: CemeteryOwnerAddComponent,
    data: {
      title: 'Cemetery-owner-add'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CemeteryOwnerAddRoutingModule {}
