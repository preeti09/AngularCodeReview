import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ForgotPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [ForgotPasswordComponent ]
})
export class ForgotPasswordModule {}
