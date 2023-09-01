import { Routes } from '@angular/router';
import { FlaggedComponent } from './Flagged.component';
import { AuthGuard } from '../../_guards';

export const FlaggedRoutes: Routes = [
  {
    path: '',
    children: [ 
      {
        path: 'flagged',
        component: FlaggedComponent,
        // canActivate:[AuthGuard]

      }
    ]
  }
];
