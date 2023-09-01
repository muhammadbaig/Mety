import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';
import { first } from 'rxjs/operators';
import { DataService } from 'src/app/_services/data.services';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    step = 1;
    data: any;
    constructor(

        private authService: AuthenticationService,
        private service: DataService
    ) {
    }
    ngOnInit() {
        this.loading = true;

        this.service.get("GetDashboard").then(data => {
            this.data = data;
            console.log(data);
        })
    }
}