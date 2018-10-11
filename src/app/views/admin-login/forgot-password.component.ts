import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import {Http} from '@angular/http';
import { User } from '../../user';
import {UserService} from '../../user.service';
@Component({

	selector: 'forgot-password',
	templateUrl: './forgot-password.Component.html',
	styleUrls: ['./login.component.css']
})

export class ForgotPasswordComponent implements OnInit{

	userAddForm: FormGroup;
	successMessage: object={};
	loader:boolean = false;
	constructor(private router: Router, private location: Location,
             private formBuilder: FormBuilder, private http:Http,private userService:UserService){
		this.buildForm();
	}

	ngOnInit()
	{
	}
   buildForm(): void {
	   this.userAddForm = this.formBuilder.group({
	     email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
   });
 }

 sendemal(): void
 {
	this.loader = true; 
	 var obj = { email:this.userAddForm.value.email, table_name:'cm_super_admin'}

	 this.userService.checkEmail(obj)
	.then(res =>{
	
		if(res==null){
		   this.loader = false;
		   this.successMessage = { status: 500, message: "Email does not exist!!" };
		   setTimeout(() => { this.successMessage = { status: null, message: null }}, 4000);
      }else
      {
		var obj1 = { email: this.userAddForm.value.email, table_name: 'super_admin', name: res[0].name };  
		this.userService.sendEmail(obj1)
		.then(result =>{
			if (result){
			this.loader = false;
			this.successMessage = { status: 200, message: "A link has been sent on your given Email address. Please check your Email." };
            setTimeout (() => {
		    this.successMessage = { status: null, message: null };
			this.router.navigate(['/login']) }, 
			4000);
			}else{
				this.loader = false;
				this.successMessage = { status: 500, message: "Something Went Wrong. Please try again." }; setTimeout(() => {
					this.successMessage = { status: null, message: null };
					//this.router.navigate(['/login'])
				},4000);	
			  }
		})
         
      }
	})
 }

}