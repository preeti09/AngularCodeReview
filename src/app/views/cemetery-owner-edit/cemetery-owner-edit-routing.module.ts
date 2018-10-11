import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CemeteryOwnerEditComponent } from './cemetery-owner-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CemeteryOwnerEditComponent,
    data: {
      title: 'Cemetery-owner-edit'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CemeteryOwnerEditRoutingModule {}
