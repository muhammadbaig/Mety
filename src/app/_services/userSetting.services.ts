import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

import { AppSettings } from '../appSetting'
import { User } from '../_models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserSettingService {
    
    constructor(private http: HttpClient) { }
      clientgetall() : any {
        return this.http.get(`${AppSettings.base_url}client/list`).pipe(map(data=>{
            return data;
        }));
       }

       clientgetbyid(id:number):any {
           return this.http.get(`${AppSettings.base_url}client/get-by-id/${id}`);
       }
 
    userOperationalSettingOAdd(operational) {
        let formData = new FormData();
        console.log(operational);
        var jsonobj = JSON.stringify(operational);

        formData.append('operational', jsonobj);

        let headers = new HttpHeaders();
        headers.append("Content-Type", "multipart/form-data");
        return this.http.post(`${AppSettings.base_url}userSetting/operational`, formData, {
            reportProgress: true,
            observe: 'events', headers: headers
        }).pipe(
            //catchError(this.errorMgmt)
        )
    }
    operationalData() {
        return this.http.get(`${AppSettings.base_url}userSetting/get-operational`);
       
    }
    /////////////////client poartal///////////////////////
    userClientPortalAdd(clientPortal, logo: File) {
        let formData = new FormData();
        formData.append('clientPortal', JSON.stringify(clientPortal));
        formData.append('logo',logo);
        let headers = new HttpHeaders();
        headers.append("Content-Type", "multipart/form-data");
        return this.http.post(`${AppSettings.base_url}userSetting/create/clientPortal`, formData, {
            reportProgress: true,
            observe: 'events', headers: headers
        }).pipe()

    }
    clientPortalData() {
        return this.http.get(`${AppSettings.base_url}userSetting/client-portal`);
       
    }
    //////////////////////////contract Template//////////
    contractDataAdd(contractData) {
        let formData = new FormData();
        formData.append('contractData', JSON.stringify(contractData));
        let headers = new HttpHeaders();
        headers.append("Content-Type", "multipart/form-data");
        return this.http.post(`${AppSettings.base_url}userSetting/create/contractTemplate`, formData, {
            reportProgress: true,
            observe: 'events', headers: headers
        }).pipe()
       
    }
    getContractNameList():any {
        return this.http.get(`${AppSettings.base_url}userSetting/contract/list`).pipe(map(data => {
            return data;
        }));

    }
    contractDelete(id) {

        return this.http.post(`${AppSettings.base_url}userSetting/contractTemplate/delete/${id}`, null)
            .pipe(map(data => {
                return data;
            }));
    }
    contractTempalteGetForEdit(id: number): any {
        return this.http.get(`${AppSettings.base_url}product/get-contract-template-for-edit/${id}`);
    }
    contractUpdatedDataAdd(updated_data) {
        let formData = new FormData();
        formData.append('updated_data', JSON.stringify(updated_data));
        let headers = new HttpHeaders();
        headers.append("Content-Type", "multipart/form-data");
        return this.http.post(`${AppSettings.base_url}userSetting/update/contractTemplate_update`, formData, {
            reportProgress: true,
            observe: 'events', headers: headers
        }).pipe()
    }
    ////////////////////////////////Client billing//////////////////
    clientBillingAdd(billingData) {
       let formData = new FormData();
        formData.append('billingData', JSON.stringify(billingData));
            let headers = new HttpHeaders();
            headers.append("Content-Type", "multipart/form-data");
            return this.http.post(`${AppSettings.base_url}userSetting/create/clientBiliing`, formData, {
                reportProgress: true,
                observe: 'events', headers: headers
            }).pipe()
    }
    getContractDataForEdit(id:number):any {
       
            return this.http.get(`${AppSettings.base_url}userSetting/get-contract-template-for-edit/${id}`);
}

}