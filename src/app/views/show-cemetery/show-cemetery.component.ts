import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import { CookieService } from 'ngx-cookie-service';
import {UserService} from '../../user.service';
import { test1, test2, dropdown } from '../../../assets/js/map'; 
import {ActivatedRoute, Params} from '@angular/router';
import { MdAutocomplete } from 'md-autocomplete';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {Http} from '@angular/http';
import { PagerService } from '../home/index';
import { $ } from '../../../../node_modules/protractor';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'show-cemetery',
	templateUrl: './show-cemetery.component.html',
	styleUrls: ['./show-cemetery.component.css']
})


export class ShowCemeteryComponent implements OnInit{

param1: string;
param2: string;
action: object = {};
logoutButton: boolean = true;
emailcookie: string;
passwordcookie: string;
successMessage: object = {};
check: string;
searchTerm: FormControl = new FormControl();
checkParam: FormControl = new FormControl();
grave: any[];
user: any[];
placeHolder:any;

private allItems: number;
pager: any = {};
pagedItems: any[];

loginDetails = {
email: "",
password: "",
remember: false,
}

rule = {
mode: 'Surname'
}


forgot = {
email: "",
}
userName: string;
cemname: string;
userforName: boolean = false;
searchTooltip:boolean = false;
dropDownView:boolean = false; 
type:string;
title:string;
loaderBefore:boolean = false;
		
	constructor(private userService: UserService, private router: Router, private location: Location, private http: Http, private route: ActivatedRoute, private cookieService: CookieService, private pagerService: PagerService, private titleService: Title) {
		this.route.queryParams.subscribe(params => {
			this.param1 = params['id'];
			this.param2 = params['location'];
		});
		this.getCemetery_name(this.param1);
		/* this.searchTerm.valueChanges
			.debounceTime(400)
			.subscribe(data => {
				if (this.checkParam.value == '' || this.checkParam.value == null) {
					this.searchTooltip = true;
				} else {
					this.searchTooltip = false;
					this.dropDownView = false;
					if (data != undefined && data.length >= 3 && this.checkParam.value !== null) {
						
						this.grave = [];
						this.type = (this.checkParam.value == 'Plot Id') ? 'plot_id' : (this.checkParam.value == 'First Name') ? 'first_name' : (this.checkParam.value == 'Date of Death') ? 'dod' : (this.checkParam.value == 'Date of Birth') ? 'dob' : 'surname';
						var start = 0;
						var end = 10;
						this.loaderBefore = true;
						this.userService.graveData(this.param1, data, this.type,start,end,true).then(res => {
							
							if(res){
							this.loaderBefore = false;
							this.grave = res.json().result;
							this.allItems = res.json().count[0].count;
							this.setPage(1,'first');
							}
						});
					}
				}
			}); */
	}

	
	ngOnInit(){

	 
		if(sessionStorage['Name'] !== '' && sessionStorage.length >= 3 ){
			this.userName=sessionStorage["Name"];
		    this.userforName =  true;
		}
	
		if(sessionStorage.length >= 3){
			this.logoutButton = false;
		}

		var email = this.cookieService.get('Email');
		var password = this.cookieService.get('Password');

		if (email != '' && password != '') {
			this.emailcookie = this.cookieService.get('Email');
			this.passwordcookie = this.cookieService.get('Password');
			this.loginDetails.remember = true;
		}

			test1();
			dropdown();
			this.changePlaceholder();
		}

		getCemetery_name(cemid){
			this.userService.getCemeteryName(cemid).then(res => {
			 console.log(res.json());
			 this.cemname = res.json().name;
			 this.setTitle(this.cemname);  
			});	
		}

		setTitle(newTitle: string) {
			this.titleService.setTitle(newTitle + '- Chronicle');
		}
	
		clicked(plotid,id){
			test2(plotid,id);
		}
    
	 
	// getUser(): void{
	// 		 this.userService.getCemetery().then(res =>{
	// 		 this.user = res.json();
	// 			 console.log('user',this.user);
	// 	 });
	// }

	changePlaceholder(){
		this.searchTerm.setValue('');
		this.placeHolder = (this.checkParam.value == 'Plot Id') ? 'LD A 1' : (this.checkParam.value == 'First Name') ? 'George' : (this.checkParam.value == 'Date of Death') ? '2018' : (this.checkParam.value == 'Date of Birth') ? 'DD/MM/YYYY' : 'Smith';
	}

	setPage(page: number,chance:string) {
		// get pager object from service
		
		this.pager = this.pagerService.getPager(this.allItems, page);
		if (chance == '') {
		this.loaderBefore = true;
		var start = (page - 1) * 10;
		var end = 10;
		var data = this.searchTerm.value;
		if (this.checkParam.value == '' || this.checkParam.value == null) {
			this.searchTooltip = true;
		} else {
			this.dropDownView = true;
			if (data != undefined && data.length >= 3 && this.checkParam.value !== null) {
				this.grave = [];
				
				this.type = (this.checkParam.value == 'Plot Id') ? 'plot_id' : (this.checkParam.value == 'First Name') ? 'first_name' : (this.checkParam.value == 'Date of Death') ? 'dod' : (this.checkParam.value == 'Date of Birth') ? 'dob' : 'surname';
				this.userService.graveData(this.param1, data, this.type, start, end,false).then(res => {
					
					if(res){
					this.loaderBefore = false;	
					this.grave = res.json().result;
					}
				});
			}
		}
	}
}

	clear(){
		this.grave = [];
		this.dropDownView = true;
		var data = this.searchTerm.value; 
		if (data != undefined && data.length >= 3 && this.checkParam.value !== null) {

			this.grave = [];
			this.type = (this.checkParam.value == 'Plot Id') ? 'plot_id' : (this.checkParam.value == 'First Name') ? 'first_name' : (this.checkParam.value == 'Date of Death') ? 'dod' : (this.checkParam.value == 'Date of Birth') ? 'dob' : 'surname';
			var start = 0;
			var end = 10;
			this.loaderBefore = true;
			this.userService.graveData(this.param1, data, this.type, start, end, true).then(res => {

				if (res) {
					this.loaderBefore = false;
					this.grave = res.json().result;
					this.allItems = res.json().count[0].count;
					this.setPage(1, 'first');
				}
			});
		}
	  }
	
	doLogin(obj) {
		if (obj.remember == true) {
			if (obj.email != '' && obj.password != '') {
				this.cookieService.set('Email', obj.email);
				this.cookieService.set('Password', obj.password);
			}

		}
		this.userService.doLogin(obj).then(res => {
			console.log(res.json());
			if (res.json().id == null) {
				this.action = { status: false, msg: res.json().msg };
				setTimeout(() => { this.action = { status: null, msg: null }; }, 4000);

			} else {
				sessionStorage.setItem('user_id', res.json().id);
				sessionStorage.setItem('Name', res.json().first_name + ' ' + res.json().last_name);
				sessionStorage.setItem('cemetery_id', res.json().cemetery_area);
				this.action = { status: true, msg: res.json().msg };
				setTimeout(() => { location.reload() }, 3000);
			}
		});
	}

	forgetFun(data) {
		var obj = { email: data.email, table_name: 'cm_owner' };
		this.userService.checkEmail(obj)
			.then(res => {
				if (res == null) {
					this.successMessage = { status: 500, message: "Email does not exist!!" };
					setTimeout(() => { this.successMessage = { status: null, message: null } }, 4000);
				} else {
					var obj1 = { email: data.email, table_name: 'owner', name: res[0].first_name };
					this.userService.sendEmail(obj1)
						.then(result => {
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
