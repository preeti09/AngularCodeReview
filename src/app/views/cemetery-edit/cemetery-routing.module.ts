import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CemeteryEditComponent } from './cemetery-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CemeteryEditComponent,
    data: {
      title: 'Cemetery-edit'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CemeteryRoutingModule {}
