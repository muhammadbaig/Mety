

import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../_services';
import { first } from 'rxjs/operators';
import { isArray } from 'util';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    private nativeElement: Node;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    step=1;
    constructor(
        private element: ElementRef, 
        private formBuilder: FormBuilder,
        private route:ActivatedRoute,
        private router: Router,
        private authService: AuthenticationService
        )
         {
        this.nativeElement = element.nativeElement;
    }

    Login():Observable<any>
    {
    //this.http.post('https://localhost:44337/api/Users/authenticate');
        return null;
    }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement;
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card-login')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 300);
    this.loginForm=this.formBuilder.group(
    {
        username:['',Validators.required],
        password:['', Validators.required],
    });
  
    this.authService.logout();
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/home';

    }
   
get f() {return this.loginForm.controls;}

onSubmit(){

    this.submitted=true;
    if(this.loginForm.invalid)
    {
        return;
    }
this.loading=true;

 this.authService.login(this.f.username.value,this.f.password.value)
 .pipe(first()).subscribe(
 data=>{
     this.error=null;
   
      this.router.navigate([this.returnUrl]);
 },
 er=> {
     this.loading=false;
     this.error=er;
     console.log(this.error);

    //  this.handleError(er.tostring())
 }

);

}


handleError(error)
    {
        this.loading=false;
         
        this.error=error;
    }

    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }
}


