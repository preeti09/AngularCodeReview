import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User } from '../../user';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import {Http} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  tableCount:any;

  constructor( private userService:UserService, private router: Router, private location: Location,
    private formBuilder: FormBuilder, private http:Http,private cookieService:CookieService) {

};

  ngOnInit() {
    var userid = sessionStorage.getItem('id');
    console.log('returing route');
    if(userid == null){
      this.router.navigate(['/login']);  
    }

    this.userService.dashBoardCountForAdmin().then(res =>{
     this.tableCount= res.json();
    });
  }

}
