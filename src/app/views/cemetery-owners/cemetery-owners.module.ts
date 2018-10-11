import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { CemeteryOwnersComponent } from './cemetery-owners.component';
import { CemeteryOwnersRoutingModule } from './cemetery-owners-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CemeteryOwnersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [ CemeteryOwnersComponent ]
})
export class CemeteryOwnersModule { }
