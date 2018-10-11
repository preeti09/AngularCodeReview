import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CemeteryOwnersComponent } from './cemetery-owners.component';

const routes: Routes = [
  {
    path: '',
    component: CemeteryOwnersComponent,
    data: {
      title: 'CemeteryOwners'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CemeteryOwnersRoutingModule {}
