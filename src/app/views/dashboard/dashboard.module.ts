import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
