import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,RouterStateSnapshot} from '@angular/router';
import { Location } from '@angular/common';

// import {ActivatedRoute, Params} from '@angular/router';
// import {  FullLayoutComponent} from "./containers/full-layout/full-layout.component";
// import { AppComponent } from "./app.component";
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
@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // route: string;
  constructor(private router:Router, private location:Location,private route:ActivatedRoute) { }

  ngOnInit() {
  
   }
}
