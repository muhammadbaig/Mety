
import { Component, OnInit, Injectable } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import {AuthenticationService} from '../../_services';
import { Router } from '@angular/router';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
    forAdmin: boolean;
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
    forAdmin: boolean;
}

//Menu Items
export const ROUTESAdmin: RouteInfo[] = [
               {
                path: '/home',
                title: 'Home',
                type: 'link',
                icontype: 'home',
                forAdmin:true
            }
            ,{
                path: '/user',
                title: 'User Database',
                type: 'link',
                icontype: 'account_box',
                forAdmin:true
            }
            ,{
                path: '/group',
                title: 'Group',
                type: 'link',
                icontype: 'group',
                forAdmin:true
                
            }
            ,{
                path: '/flagged',
                title: 'Flagged Message',
                type: 'link',
                icontype: 'message',
                forAdmin:true
                
            }
];

// export const ROUTESUser: RouteInfo[] = [
//     {
//         path: '/flowchart',
//         title: 'Flow Chart',
//         type: 'sub',
//         collapse: 'district_menu',
//         icontype: 'transform',
//         forAdmin: false,
//         children: [
//             {
//                 path: 'view',
//                 ab: 'visibility',
//                 title: 'View', forAdmin: false,
//             }
//         ]
//     },
//     {
//         path: '/procedure',
//         title: 'Procedures',
//         type: 'sub',
//         collapse: 'procedure_menu',
//         icontype: 'do_not_step',
//         forAdmin: false,
//         children: [
//             {
//                 path: 'view',
//                 ab: 'visibility',
//                 title: 'View', forAdmin: false,
//             }
//         ]
//     },

//     {
//         path: '/help',
//         title: 'Help',
//         type: 'link',
//         icontype: 'contact_support',
//         forAdmin: false,
//     }
// ];


@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    currentUser:any;
    ps: any;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    constructor(private authService:AuthenticationService, private router : Router){

    }

    logout(){
        this.authService.logout();
        this.router.navigate(['/pages/login']);
    }
    ngOnInit() {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // if (this.currentUser.role=='Admin') {
            this.menuItems = ROUTESAdmin.filter(menuItem => menuItem);
        // }
      
        // else  {
        //     this.menuItems = ROUTESUser.filter(menuItem => menuItem)
        // }
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
