import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ShowCemeteryComponent } from './show-cemetery.component';

const routes: Routes = [
  {
    path: '',
    component: ShowCemeteryComponent,
    data: {
      title: 'ShowCemetery'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowCemeteryRoutingModule {}
