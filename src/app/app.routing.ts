import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './Admin/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './Admin/layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'pages/login',
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      children: [{
          path: '',
          loadChildren: './Admin/Group/Group.module#GroupModule'
        },
        {
          path: '',
          loadChildren: './Admin/UserDatabase/UserDatabase.module#UserDatabaseModule'
        },
        {
            path: '',
            loadChildren: './Admin/home/home.module#HomeModule'
        },{
            path: '',
                loadChildren: './Admin/userProfile/userProfile.module#UserProfileModule'
        }
        ,{
          path: '',
          loadChildren: './Admin/Flagged/Flagged.module#FlaggedModule'
      }, 
      ]
    }, {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
