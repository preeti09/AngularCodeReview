import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ShowCemeteryComponent } from './show-cemetery.component';
import { ShowCemeteryRoutingModule } from './show-cemetery-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeComponent }from './filter.pipe';
import { PagerService } from '../home/index';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import {ActivatedRoute, Params,RouterStateSnapshot} from '@angular/router';
@NgModule({
  imports: [
    ShowCemeteryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule  ],
  declarations: [ShowCemeteryComponent, FilterPipeComponent ],
  providers: [
    PagerService
  ]
})
export class ShowCemeteryModule { }
