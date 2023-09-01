import { Routes } from '@angular/router';
import { UserDatabaseComponent } from './UserDatabase.component';
import { AuthGuard } from '../../_guards';

export const UserDatabaseRoutes: Routes = [
  {
    path: '',
    children: [ 
      {
        path: 'user',
        component: UserDatabaseComponent,
        // canActivate:[AuthGuard]

      }
    ]
  }
];
