import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';
import { first } from 'rxjs/operators';
import { DataService } from 'src/app/_services/data.services';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-Group',
    templateUrl: 'Group.component.html'
})

export class GroupComponent implements OnInit {
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
        this.getdata(1);
    }
    getdata(pageno)
    {
        this.service.get("GetAllGroups?page="+pageno).then(data=>{
            console.log(data);
         this.list=data.groupDetailDTOs
         this.length = data.totalGroups;

        })
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
        this.service.delete('DeleteGroup?groupId='+id).subscribe(data => {
            this.getdata(1)
        Swal.fire(
        'Deleted!',
        'Your Data has been deleted.',
        'success'
        )})
      
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
    let delet={
      "id":id
    }
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Block this Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Block it!',
      cancelButtonText: 'No, keep it'
      }).then((result) => {
      if (result.isConfirmed) {
        this.service.get('BlockGroup?groupId='+id).then(data => {
        this.getdata(1)
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