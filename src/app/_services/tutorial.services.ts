import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

import { AppSettings } from '../appSetting'
import { User } from '../_models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TutorialService {
    
    constructor(private http: HttpClient) { }
     

    tutorialgetall(): any {
        return this.http.get(`${AppSettings.base_url}tutorial/get-all/list`).pipe(map(data => {
            return data;
        }));
    }
      tutorialAdd(tutorailData,_video) {
        let formData = new FormData();
      formData.append('tutorailData', JSON.stringify(tutorailData));
      formData.append('_video',_video);
        let headers = new HttpHeaders();
        headers.append("Content-Type", "multipart/form-data");
     return this.http.post(`${AppSettings.base_url}tutorial/create/tutorial`, formData, {
            reportProgress: true,
            observe: 'events', headers: headers
        }).pipe()

    }
    getVideoToPlay(id: number):any {
        return this.http.get(`${AppSettings.base_url}tutorial/get-video-to_play/list/${id}`);
    }

}