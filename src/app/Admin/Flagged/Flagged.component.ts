import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';
import { first } from 'rxjs/operators';
import { DataService } from 'src/app/_services/data.services';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-Flagged',
    templateUrl: 'Flagged.component.html'
})

export class FlaggedComponent implements OnInit {
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    step = 1;
    list:any;
    constructor(

        private service: DataService
    ) {
    }
    ngOnInit() {
        this.getdata();
      
          }
          getdata()
          {
            this.service.get("GetFlaggedMessages").then(data=>{
                console.log(data);
             this.list=data
            })
          }
          ondelete(id): void 
          {
          
          Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
            }).then((result) => {
            if (result.isConfirmed) {
              this.service.delete('DeleteFlaggedMessage?flaggedMessageId='+id).subscribe(data => {
               this.getdata()
              Swal.fire(
              'Deleted!',
              'Your Data has been deleted.',
              'success'
              )})
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
              'Cancelled',
              'Your data is safe :)',
              'error'
              )
            }
            })
          }
}