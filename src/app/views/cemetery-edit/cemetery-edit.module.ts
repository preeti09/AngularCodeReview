import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { CemeteryEditComponent } from './cemetery-edit.component';
import { CemeteryRoutingModule } from './cemetery-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CemeteryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [ CemeteryEditComponent ]
})
export class CemeteryModule { }
