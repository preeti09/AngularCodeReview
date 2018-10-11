import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { CemeteryOwnerEditComponent } from './cemetery-owner-edit.component';
import { CemeteryOwnerEditRoutingModule } from './cemetery-owner-edit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CemeteryOwnerEditRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [ CemeteryOwnerEditComponent ]
})
export class CemeteryOwnerEditModule { }
