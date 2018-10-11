import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CemeteriesComponent } from './cemeteries.component';

const routes: Routes = [
  {
    path: '',
    component: CemeteriesComponent,
    data: {
      title: 'Cemeteries'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CemeteriesRoutingModule {}
