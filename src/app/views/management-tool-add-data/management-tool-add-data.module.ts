import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpClientModule } from '@angular/common/http'; 
import { ManagementToolAddDataComponent } from './management-tool-add-data.component';
import { FileUploaderComponent } from './file-uploader.component';
import { ManagementToolAddDataRoutingModule } from './management-tool-add-data-routing.module';
import { FileUploaderRoutingModule } from './file-uploader.routing.module';
import { FileUploaderService } from './file-uploader.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports: [
    ManagementToolAddDataRoutingModule,
    FileUploaderRoutingModule,
    FormsModule,
    //BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
],
declarations: [ ManagementToolAddDataComponent,FileUploaderComponent],
providers: [FileUploaderService]
})

export class ManagementToolAddDataModule { }






