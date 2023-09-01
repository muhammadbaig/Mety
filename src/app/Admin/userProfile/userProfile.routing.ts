import { Routes } from '@angular/router';
import { UserProfileComponent } from './userProfile.component';

export const UserProfileRoutes: Routes = [
  {
    path: '',
    children: [ 
      {
        path: 'userProfile',
        component: UserProfileComponent
      }
    ]
  }
];
