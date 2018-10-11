import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators,NgForm} from '@angular/forms';
import {Location} from "@angular/common";
import {Http} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import {UserService} from '../../user.service';
import { PagerService } from './index';
import {FormControl} from '@angular/forms';



@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
	
	constructor(private userService: UserService, private router: Router, private location: Location, private pagerService: PagerService, private cookieService: CookieService) { }
	user: any [];
	action: object = {};
	userName : string;
	logoutButton: boolean = true;
	userforName : boolean = false
	emailcookie: string;
	passwordcookie: string;
	successMessage: object = {};
	check: string;
	loginDetails = {
		email:"",
		password:"",
		remember:false,
	}

	forgot = {
		email: "",
	}

	private allItems: any[];
    pager: any = {};
    pagedItems: any[];
	
	ngOnInit(){
		if(sessionStorage.length >= 3){
			this.logoutButton = false;
		}
		if(sessionStorage['Name'] !== '' && sessionStorage.length == 3 ){
			this.userName = sessionStorage['Name'];
			this.userforName = true;
		}
		
		var email = this.cookieService.get('Email');
		var password = this.cookieService.get('Password');
	
		if (email != '' && password != '') {
			this.emailcookie = this.cookieService.get('Email');
			this.passwordcookie = this.cookieService.get('Password');
			this.loginDetails.remember = true;
		}
		  
		this.getUser();
		}
  
	getUser(): void{
			 this.userService.getCemetery().then(res =>{
			 console.log(res.json());
			    this.allItems = res.json();
                this.setPage(1);
		        //this.user = res.json();
		 });
	}

	setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

	doLogin(obj){
		console.log(obj);
		if (obj.remember == true) {
			if (obj.email != '' && obj.password != '') {
				this.cookieService.set('Email', obj.email);
				this.cookieService.set('Password', obj.password);
				console.log('set cookies');
			}

		}
		this.userService.doLogin(obj).then(res =>{
			
				if(res.json().id == null){
					this.action = {status: false,msg:'Invalid username OR password.'};
					  setTimeout (() => { this.action = {status: null,msg:null}; }, 4000);
			   
				} else {
					sessionStorage.setItem('user_id', res.json().id);
					sessionStorage.setItem('Name', res.json().first_name+' '+res.json().last_name);
					sessionStorage.setItem('cemetery_id', res.json().cemetery_area);
					this.action= {status: true,msg:'Login Successfull ! Redirecting...'};
					setTimeout (() => { location.reload() }, 3000);
			 }
		});
	}

	forgetFun(data){
		var obj = { email: data.email, table_name: 'cm_owner' };
		this.userService.checkEmail(obj)
			.then(res => {
				console.log(res);
				if (res == null) {
					this.successMessage = { status: 500, message: "Email does not exist!!" };
					setTimeout(() => { this.successMessage = { status: null, message: null } }, 4000);
				} else {
					var obj1 = { email: data.email, table_name: 'owner', name: res[0].first_name };
					this.userService.sendEmail(obj1)
						.then(result => {
							console.log(result)
							if (result) {
								this.successMessage = { status: 200, message: "A link has been sent on your given Email address. Please check your Email." };
								setTimeout(() => {
									this.successMessage = { status: null, message: null };
									this.router.navigate(['/home'])
								},
									4000);
							} else {
								this.successMessage = { status: 500, message: "Something Went Wrong. Please try again." }; setTimeout(() => {
									this.successMessage = { status: null, message: null };
									//this.router.navigate(['/login'])
								}, 4000);
							}
						})
				}
			})
     	}

	logoutSession(){
		sessionStorage.clear();
		this.router.navigate(['/home']);
	}
}