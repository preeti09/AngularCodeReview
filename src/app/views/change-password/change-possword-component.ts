import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import { ActivatedRoute, Params } from '@angular/router';
import {Http} from '@angular/http';
import { User } from '../../user';
import {UserService} from '../../user.service';

@Component({
	selector: 'change-password',
	templateUrl: './change-possword-component.html',
	styleUrls: ['./change-password-component.css']
})

export class ChangePasswordComponent implements OnInit{
	
	userAddForm: FormGroup;
 	action: string;
	param1:string;
	param2:string;
	loader: boolean = false;
	successMessage: object = {};
	conf = {password:"",conpassword:""};	
	constructor(private router: Router, private location: Location,
		private formBuilder: FormBuilder, private http: Http, private userService: UserService, private route: ActivatedRoute){
		this.route.queryParams.subscribe(params => {
			this.param1 = params['JHDFWNSdhdkJUYSWLshdIYSKDJHJDL'];
			this.param2 = params['table_name'];
		});
		console.log(this.param1, this.param2);
		this.buildForm();	
	}

	ngOnInit()
	{
		// var userid = sessionStorage.getItem('id');
		// if(userid == null){
		//   this.router.navigate(['/login']);  
		// }
	}

	buildForm(): void {
	   this.userAddForm = this.formBuilder.group({
	   password: ['', Validators.required],
	   conpassword: ['', Validators.required]  
   });
  }

  sendemail(): void
  {
      this.loader = true;
	  var pass = { password: this.userAddForm.value.conpassword, email: this.param1, table_name: this.param2 }; 
	  this.userService.forgotPasswordAdmin(pass)
		  .then(res =>{
	  
			  if (res.status == 200) {
				  this.loader = false;
				  this.successMessage = { status: 200, message: "Password has been Changed Successfully. Now you can login." };
				  setTimeout(() => {
					  this.successMessage = { status: null, message: null };
					  if (this.param2 == 'super_admin'){
					  this.router.navigate(['/login']);
					  }else{
					  this.router.navigate(['/home']) 
					  }
				  },
					  4000);
			  } else {
				  this.loader = false;
				  this.successMessage = { status: 500, message: "Something Went Wrong. Please try again." }; setTimeout(() => {
					  this.successMessage = { status: null, message: null };
					  //this.router.navigate(['/login'])
				  }, 4000);
			  }	

	  }); 
	
  }
}
