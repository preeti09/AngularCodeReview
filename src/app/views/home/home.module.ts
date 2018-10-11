import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagerService } from './index';
import { FilterCemeteryPipeComponent }from './filterCemetery.pipe';

@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
    declarations: [ HomeComponent,FilterCemeteryPipeComponent],
    providers: [
    PagerService
  ]
})
export class HomeModule { }
