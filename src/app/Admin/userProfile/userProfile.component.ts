import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router'
import { DataService } from 'src/app/_services/data.services';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-userProfile',
    templateUrl: 'userProfile.component.html'
})

export class UserProfileComponent implements OnInit {
    auth_key="";
    message="";
    error="";
   
    list:any=[];
    userform:FormGroup;
    userform1:FormGroup;
   userdata:any;
    constructor(
        private element: ElementRef, 
        private formBuilder: FormBuilder,
        private route:ActivatedRoute,
        private router: Router,
        private service:DataService
        ){

        }
    
    ngOnInit() {
        this.userform=this.formBuilder.group(
            {
                id:[''],
                fullName:[''],
                phone:[''],
                email:[""],
                gender:[""],
                dateOfBirth:[""],
                aboutMe:["about me",""],

            });
        this.service.get("GetAdminDetails").then(data=>{
            console.log(data);
            this.userform.patchValue(data);
        
            this.userform.get('aboutMe').setValue("About me");
        })
       

    }
    get f() {return this.userform.controls;}

    onSubmit(){
        if(this.userform.invalid)
        {
            return;
        }
        let endpoint="EditAdmin?Id="+this.f.id.value+"&FullName="+this.f.fullName.value+"&Gender="+this.f.gender.value+"&DateOfBirth="+this.f.dateOfBirth.value+"&Email="+this.f.email.value+"&Phone="+this.f.phone.value+"&AboutMe="+this.f.aboutMe.value
          this.service.get(endpoint).then(
           data=>{
      this.message="Profile Update successfully"
      console.log(data);
        //  this.router.navigate([this.returnUrl]);
     },
     er=> {
        this.error="Some thing Wrong While Updating Profile"

        //  this.loading=false;
        //  this.handleError(er)
     }
    
    );
    
    }
   
}