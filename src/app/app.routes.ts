import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  // Option 1: Lazy Loading another Routing Config
  {
    path: 'user-details',
    loadChildren: () =>
      import('./user-details/user-details.routes').then(
        (m) => m.USER_DETAILS_ROUTES
      ),
  },

  // Option 2: Directly Lazy Loading a Standalone Component
  {
    path: 'user',
    loadComponent: () =>
      import('./user/user.component').then((m) => m.UserComponent),
  },
];
