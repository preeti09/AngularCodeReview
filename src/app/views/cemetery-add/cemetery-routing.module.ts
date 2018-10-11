import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CemeteryAddComponent } from './cemetery-add.component';

const routes: Routes = [
  {
    path: '',
    component: CemeteryAddComponent,
    data: {
      title: 'Cemetery'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CemeteryRoutingModule {}
