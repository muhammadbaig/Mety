import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../../_guards';

export const HomeRoutes: Routes = [
  {
    path: '',
    children: [ 
      {
        path: 'home',
        component: HomeComponent,
        // canActivate:[AuthGuard]

      }
    ]
  }
];
