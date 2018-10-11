import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ChangePasswordComponent } from './change-possword-component';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, RouterStateSnapshot } from '@angular/router';

@NgModule({
  imports: [
    ChangePasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [ChangePasswordComponent ]
})
export class ChangePasswordModule {}
