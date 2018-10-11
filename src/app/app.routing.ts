import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { MapComponent } from './views/map/map.component';
import { LoginComponent } from './views/admin-login/login.component';
import { ForgotPasswordComponent } from './views/admin-login/forgot-password.component';

import { HomeComponent } from './views/home/home.component';
import { ShowCemeteryComponent } from './views/show-cemetery/show-cemetery.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CemeteriesComponent } from './views/cemeteries/cemeteries.component';
import { CemeteryAddComponent } from './views/cemetery-add/cemetery-add.component';
import { CemeteryEditComponent } from './views/cemetery-edit/cemetery-edit.component';
import { CemeteryOwnersComponent } from './views/cemetery-owners/cemetery-owners.component';
import { CemeteryOwnerAddComponent } from './views/cemetery-owner-add/cemetery-owner-add.component';
import { CemeteryOwnerEditComponent } from './views/cemetery-owner-edit/cemetery-owner-edit.component';
import { GraveAllocationComponent } from './views/grave-allocation/grave-allocation.component';
import { ManagementToolAddDataComponent } from './views/management-tool-add-data/management-tool-add-data.component';
import { PlotDetailsComponent} from './views/plot-details/plot-details.component';
//import { ManagementToolShowMapDataComponent } from './views/management-tool-show-map-data/management-tool-show-map-data.component';
import { ChangePasswordComponent } from './views/change-password/change-possword-component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { FullLayoutComponent} from "./containers/full-layout/full-layout.component";


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: 'Index'
    },
    children: [
      {
        path: 'login',
        loadChildren: './views/admin-login/login.module#LoginModule',
      },
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule',
      },
      {
        path: 'show-cemetery',
        loadChildren: './views/show-cemetery/show-cemetery.module#ShowCemeteryModule',
      },
      {
        path: 'plot-details',
        loadChildren: './views/plot-details/plot-details.module#PlotDetailsModule',
      },
      {
        path: 'forgot-password',
        loadChildren: './views/admin-login/forgot-password.module#ForgotPasswordModule',
      },
      {
        path: 'change-password',
        loadChildren: './views/change-password/change-password.module#ChangePasswordModule',
      },
    
    ]
  },
  
  
  
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'cemeteries',
        loadChildren: './views/cemeteries/cemeteries.module#CemeteriesModule',
      },
      {
        path: 'cemetery-add',
        loadChildren: './views/cemetery-add/cemetery-add.module#CemeteryModule',
      },
      {
        path: 'cemetery-edit/:id',
        loadChildren: './views/cemetery-edit/cemetery-edit.module#CemeteryModule',
      },
      {
        path: 'cemetery-owner-add',
        loadChildren: './views/cemetery-owner-add/cemetery-owner-add.module#CemeteryOwnerAddModule',
      },
      {
        path: 'cemetery-owners',
        loadChildren: './views/cemetery-owners/cemetery-owners.module#CemeteryOwnersModule',
      },
      {
        path: 'cemetery-owner-edit/:id',
        loadChildren: './views/cemetery-owner-edit/cemetery-owner-edit.module#CemeteryOwnerEditModule',
      },

      {
          path: "cemetery-management-tool",
          loadChildren: './views/management-tool-add-data/management-tool-add-data.module#ManagementToolAddDataModule',
         },
         {
          path: "map",
          loadChildren: './views/map/map.module#MapModule',
         },   
    ]
    }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
