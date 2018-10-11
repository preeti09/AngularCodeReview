import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PlotDetailsRoutingModule } from './plot-details-routing.module';
import { PlotDetailsComponent } from './plot-details.component';

@NgModule({
  imports: [
    CommonModule,
    PlotDetailsRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [PlotDetailsComponent]
})
export class PlotDetailsModule { }
