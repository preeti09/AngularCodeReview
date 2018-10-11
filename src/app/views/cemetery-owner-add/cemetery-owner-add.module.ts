import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { CemeteryOwnerAddComponent } from './cemetery-owner-add.component';
import { CemeteryOwnerAddRoutingModule } from './cemetery-owner-add-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CemeteryOwnerAddRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [ CemeteryOwnerAddComponent ]
})
export class CemeteryOwnerAddModule { }
