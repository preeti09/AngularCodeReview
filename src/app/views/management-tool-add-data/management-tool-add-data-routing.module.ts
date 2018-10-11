import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ManagementToolAddDataComponent } from './management-tool-add-data.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementToolAddDataComponent,
    data: {
      title: 'management-tool-add-data'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementToolAddDataRoutingModule {}
