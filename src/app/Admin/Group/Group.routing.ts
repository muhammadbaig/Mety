import { Routes } from '@angular/router';
import { GroupComponent } from './Group.component';
import { AuthGuard } from '../../_guards';

export const GroupRoutes: Routes = [
  {
    path: '',
    children: [ 
      {
        path: 'group',
        component: GroupComponent,
        // canActivate:[AuthGuard]

      }
    ]
  }
];
