import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse ,HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import{Router} from '@angular/router';
import 'rxjs/add/operator/catch';
import { AppSettings } from '../appSetting'
import {Observable} from 'rxjs/Rx';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public token:string;

    constructor(private http: HttpClient) { }
//     login(data) {
       
//         var raw = JSON.stringify({
//             "userIdentity": "mateyofficial21@gmail.com",
//             "password": "Hotech66@",
//             "fcmToken": "12345654"
//           });
          
// alert(raw);
//         return this.http.post<any>(`http://umermalik-002-site17.etempurl.com/api/Authenticate/Login`,raw)
//         .catch((error) => {
//             console.log(error.error.message);
//             return error.error.message;
//           });
          

//     }
    
login(username,password) {
    let data={
        "userIdentity":username,
        "password":password,
        "fcmToken":"434"
    }
    return this.http.post<any>(`http://umermalik-002-site17.etempurl.com/api/Authenticate/Login`,data)
        .pipe(map(user => {
            console.log("user info",user)
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('auth_token', user.bearerToken);
                localStorage.setItem('currentUser', user.userDTO);
            }

            return user;
        }));
}
    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

  
}