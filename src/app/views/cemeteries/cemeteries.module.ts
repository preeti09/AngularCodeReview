import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { CemeteriesComponent } from './cemeteries.component';
import { CemeteriesRoutingModule } from './cemeteries-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CemeteriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [ CemeteriesComponent ]
})
export class CemeteriesModule { }
