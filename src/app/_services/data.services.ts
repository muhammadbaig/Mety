import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';

import { AppSettings } from '../appSetting'
import { User } from '../_models';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable({ providedIn: 'root' })
export class DataService implements OnInit {
    auth_key = '';
    constructor(private http: HttpClient) { }
    ngOnInit() {
        this.auth_key = JSON.parse(localStorage.getItem("currentUser")).auth_key;
    }
    ///////////////////////////////////////User Profile//////////////////////////////////////////

    token = localStorage.getItem('auth_token');

	get(endpoint): Promise<any>
	{	
		console.log(endpoint);
		this.token = localStorage.getItem('auth_token');
        let bearer="Bearer "+this.token ;
		return this.http.get(AppSettings.base_url+ endpoint, { headers: { Authorization:bearer } })
		.toPromise().then((response: any) =>
		{
			
			console.log(response);
		  if (JSON.stringify(response.status)== "401") 
		  {
			 localStorage.clear();
			 window.location.href="/#pages/login";
			}
		  else 
		  {
			return response;
		  }
		},
		  (reason: any) =>
		  {
			if (JSON.stringify(reason.status)== "401") 
			{ 
				  localStorage.clear();
				window.location.href="/#pages/login";
			}
			return reason;
  
		  }).catch(this.handleError);
	}
	

	post(endpoint, body): Promise<any>
	{
		this.token = localStorage.getItem('auth_token');
		let bearer="Bearer "+this.token ;

		 console.log(body);
		return this.http.post(AppSettings.base_url + endpoint, body, { headers: { Authorization:bearer } })
		.toPromise().then((response: any) =>
		{
			if (JSON.stringify(response.status)== "401") 
			{
			   localStorage.clear();
			   window.location.href="/#pages/login";
			  }
		  else 
		  {
			return response;
		  }
		},
		  (reason: any) =>
		  {
			if (JSON.stringify(reason.status)== "401") 
			{
			   localStorage.clear();
			   window.location.href="/#pages/login";
			  }
			return reason;
  
		  }).catch(this.handleError);
	}
	
	
	delete(endpoint): Observable<any>
	{
		this.token = localStorage.getItem('auth_token');
		let bearer="Bearer "+this.token ;

		return this.http.delete(AppSettings.base_url + endpoint, { headers: { Authorization: bearer } });
	}
	put(endpoint): Observable<any>
	{
		this.token = localStorage.getItem('auth_token');
		let bearer="Bearer "+this.token ;
     console.log("check"+endpoint+bearer);
		return this.http.put(AppSettings.base_url + endpoint, { headers: { Authorization: bearer } });
	}
	put1(endpoint): Promise<any>
	{
		this.token = localStorage.getItem('auth_token');
		return this.http.put(AppSettings.base_url + endpoint,  { headers: { Authorization: this.token } })
		.toPromise().then((response: any) =>
		{
			if (JSON.stringify(response.status)== "401") 
			{
			   localStorage.clear();
			   window.location.href="/#pages/login";
			  }
		  else 
		  {
			return response;
		  }
		},
		  (reason: any) =>
		  {
			if (JSON.stringify(reason.status)== "401") 
			{
			   localStorage.clear();
			   window.location.href="/#pages/login";
			  }
			return reason;
  
		  }).catch(this.handleError);
	}
	public handleError(error: any): Promise<any>
	{
	  return error;
	}

}