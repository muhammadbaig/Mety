import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { DataService } from 'src/app/_services/data.services';
import Swal from 'sweetalert2';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'app-UserDatabase',
    templateUrl: 'UserDatabase.component.html'
})

export class UserDatabaseComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

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
    length=0;
    pageSize = 20;
    pageSizeOptions: number[] = [5, 10, 25, 100];
  
    // MatPaginator Output
    pageEvent: PageEvent;
  
    setPageSizeOptions(setPageSizeOptionsInput: string) {
      if (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
      }
    }
  
    ngOnInit() {
       this.getdata(1);

    }

    getdata(pageno)
    {
        this.service.get("GetAllUsers?page="+pageno).then(data=>{
        console.log(data);
         this.list=data.userDTOs
         this.length = data.totalUsers;
        })
    }
    onPaginatorChange(page: PageEvent): void
	  {
		this.getdata(page.pageIndex+1);
	  }
    ondelete(id): void 
    {
    let delet={
      "id":id
    }
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
      }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete('DeleteUser?userId='+id).subscribe(data => {
            this.getdata(1);
          
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

    onblock(id): void 
    {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Block this Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Block it!',
      cancelButtonText: 'No, keep it'
      }).then((result) => {
      if (result.isConfirmed) {
        this.service.get('BlockUser?userId='+id).then(data => {
            this.getdata(1);
        Swal.fire(
        'Blocked!',
        'Your Data has been blocked.',
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
