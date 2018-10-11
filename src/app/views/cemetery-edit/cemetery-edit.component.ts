import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
//import { Cemetery } from '../../Cemetery';
import { Router } from '@angular/router';
import {UserService} from '../../user.service';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";
import {Http} from '@angular/http';

@Component({
  selector: 'app-cemetery-edit',
  templateUrl: './cemetery-edit.component.html',
  styleUrls: ['./cemetery-edit.component.css']
})
export class CemeteryEditComponent implements OnInit {

  userAddForm: FormGroup;
  user: User;
  successMessage: object = {};

  constructor(private userService:UserService , private router: Router, private location: Location,
    private formBuilder: FormBuilder, private http:Http,private route:ActivatedRoute ) { 
}
ngOnInit(): void {
  var userid = sessionStorage.getItem('id');
  if(userid == null){
    this.router.navigate(['/login']);  
  }
  var cmid= this.route.snapshot.params;
  this.userService.getcemetery(cmid).then(res =>{
    this.user = res.json();
    this.buildForm();
  });
 
}

buildForm(): void
{
   this.userAddForm = this.formBuilder.group({
    cemeteryName: ['', Validators.required],
    // fname: ['', Validators.required],
    // lname: ['', Validators.required],
    cemeteryLocation :	['', Validators.required], 
    id :'' 
   });
}

update(): void
{
  let cemeterydata = this.userAddForm.value as User;
  this.userService.updateDataCemetery(cemeterydata)
  .then(res =>{

    if (res) {
      this.successMessage = { status: true, message: 'Cemetery edited successfully.' };
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
