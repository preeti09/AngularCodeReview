//import 'rxjs/add/operator/switchMap';
import { test1 } from '../../../assets/js/map'; 
import { Observable } from 'rxjs/Rx';
import { Component,OnInit } from '@angular/core';
import { User } from '../../user';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import {Http} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit{

	         constructor( private userService:UserService, private router: Router, private location: Location,
             private formBuilder: FormBuilder, private http:Http,private cookieService:CookieService) {
};

	ngOnInit()
	{
		test1();

		var userid = sessionStorage.getItem('id');
		if(userid == null){
		  this.router.navigate(['/login']);  
		}
    }


}