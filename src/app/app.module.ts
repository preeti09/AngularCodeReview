import { BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing";
import { HttpModule } from '@angular/http';
//import { FilterPipeComponent } from './views/show-cemetery/filter.pipe';
// import { AppComponent } from "./app.component";
import { MapComponent } from './views/map/map.component';
import { LoginComponent } from './views/admin-login/login.component';
//import { ForgotPasswordComponent } from './views/admin-login/forgot-password.component';
import { FullLayoutComponent} from "./containers/full-layout/full-layout.component";
import { SimpleLayoutComponent} from "./containers/simple-layout/simple-layout.component";


import { AppAsideComponent } from './components/app-aside/app-aside.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppLeftSideBarComponent } from './components/app-left-side-bar/app-left-side-bar.component';
import { AppRightSideBarComponent } from './components/app-right-side-bar/app-right-side-bar.component';
import { AppPublicAsideComponent } from './components/app-public-aside/app-public-aside.component';
import { AppPublicHeaderComponent } from './components/app-public-header/app-public-header.component';
import { AppPublicLeftSideBarComponent } from './components/app-public-left-side-bar/app-public-left-side-bar.component';
import { AppPublicRightSideBarComponent } from './components/app-public-right-side-bar/app-public-right-side-bar.component';

import { ShowCemeteryComponent } from './views/show-cemetery/show-cemetery.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CemeteryAddComponent } from './views/cemetery-add/cemetery-add.component';
import { CemeteryEditComponent } from './views/cemetery-edit/cemetery-edit.component';
import { CemeteryOwnerAddComponent } from './views/cemetery-owner-add/cemetery-owner-add.component';
import { CemeteryOwnerEditComponent } from './views/cemetery-owner-edit/cemetery-owner-edit.component';
import { CemeteryOwnersComponent } from './views/cemetery-owners/cemetery-owners.component';
import { CemeteriesComponent } from './views/cemeteries/cemeteries.component';
import { GraveAllocationComponent } from './views/grave-allocation/grave-allocation.component';
import { PlotDetailsComponent} from './views/plot-details/plot-details.component';
import { ManagementToolAddDataComponent } from './views/management-tool-add-data/management-tool-add-data.component';
//import { ManagementToolShowMapDataComponent } from './views/management-tool-show-map-data/management-tool-show-map-data.component';
import { NgSelectModule } from '@ng-select/ng-select';
//import { ChangePasswordComponent } from './views/change-password/change-possword-component';
// user service
import { CookieService } from 'ngx-cookie-service';
import {UserService} from './user.service';
import { FileUploaderComponent } from './views/management-tool-add-data/file-uploader.component';
import { FileUploaderService } from './views/management-tool-add-data/file-uploader.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatRippleModule} from '@angular/material';


const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
 // AppComponent
];

const APP_COMPONENTS = [
  AppAsideComponent,
  AppHeaderComponent,
  AppLeftSideBarComponent,
  AppRightSideBarComponent,
  AppPublicAsideComponent,
  AppPublicHeaderComponent,
  AppPublicLeftSideBarComponent,
  AppPublicRightSideBarComponent
]


@NgModule({
  declarations: [
  AppComponent,
  //ShowCemeteryComponent,
  //ForgotPasswordComponent,
  APP_CONTAINERS,
  APP_COMPONENTS,
  //FilterPipeComponent,
  //ChangePasswordComponent,
  GraveAllocationComponent,
 // PlotDetailsComponent,
 ],
  
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    BsDatepickerModule.forRoot()
  ],
    
    
  
  
  providers: [ CookieService,UserService,FileUploaderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
