import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlotDetailsComponent } from './plot-details.component';


const routes: Routes = [
  {
    path: '',
    component: PlotDetailsComponent,
    data: {
      title: 'Plot Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlotDetailsRoutingModule { }
