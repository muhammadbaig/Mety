import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppSettings } from '../appSetting'
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${AppSettings.base_url}/users`);
    }
    myProfile()
    {
        return this.http.get<User[]>(`${AppSettings.base_url}/users/my-profile`);
    }
    editProfile(firstName,lastName,userName, email) : any
    {
        
       var formData = new FormData();
       formData.append("firstName",firstName);
       formData.append("lastName",lastName);
       formData.append("userName",userName);
       formData.append("email",email);
       
       
       var headers = new HttpHeaders();
       headers.append("Content-Type", "multipart/form-data");
       return this.http.post(`${AppSettings.base_url}/users/edit-profile`, formData, {
          reportProgress: true,
          observe: 'events', headers: headers
      }).pipe(
          //catchError(this.errorMgmt)
      )

    }
    changeProfilePic(picture:File)
    {
        var formData = new FormData();
       formData.append("picture",picture);
       
       
       var headers = new HttpHeaders();
       headers.append("Content-Type", "multipart/form-data");
       return this.http.post(`${AppSettings.base_url}/users/change-profile`, formData, {
          reportProgress: true,
          observe: 'events', headers: headers
      }).pipe(
          //catchError(this.errorMgmt)
      )
    }
}