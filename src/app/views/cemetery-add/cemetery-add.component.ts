import { Observable } from 'rxjs/Rx';
import { Component,OnInit } from '@angular/core';
import { User } from '../../user';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import {Http} from '@angular/http';

@Component({
  selector: 'app-cemetery-add',
  templateUrl: './cemetery-add.component.html',
  styleUrls: ['./cemetery-add.component.css']
})
export class CemeteryAddComponent implements OnInit {

  userAddForm: FormGroup;
     // user: new User();
      action: string;
      user: any [];
      successMessage: object = {};
	 constructor( private userService:UserService, private router: Router, private location: Location,
             private formBuilder: FormBuilder, private http:Http) {
   this.buildForm();
 };

  ngOnInit() {
    var userid = sessionStorage.getItem('id');
    if(userid == null){
      this.router.navigate(['/login']);  
    }
     this.userService.getUser().then(res =>{
     this.user = res.json();
    });

  }

  buildForm(): void {
   this.userAddForm = this.formBuilder.group({
     cemeteryLocation: ['', Validators.required],
     cemeteryName: ['', Validators.required],
   });
 }

 addOwner(): void
 {
   let user = this.userAddForm.value;
   this.userService.addOwner(user)
 	.then(res =>{

      if (res) {
        this.successMessage = { status: true, message: 'Data added successfully' };
        setTimeout(() => {
          this.successMessage = { status: null, message: null };
          this.router.navigate(['/cemeteries'])
        }, 3000);
      } else {
        this.successMessage = { status: false, message: 'Something Went Wrong. Plese try again' };
        setTimeout(() => {
          this.successMessage = { status: null, message: null };
          this.router.navigate(['/cemeteries'])
        }, 3000);
      }
 	})
 }

}
