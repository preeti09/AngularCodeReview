import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ChangePasswordComponent } from './change-possword-component';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent,
    data: {
      title: 'change-password'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangePasswordRoutingModule {}
