import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { CemeteryAddComponent } from './cemetery-add.component';
import { CemeteryRoutingModule } from './cemetery-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CemeteryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [ CemeteryAddComponent ]
})
export class CemeteryModule { }
