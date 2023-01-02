import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  // Option 1: Lazy Loading another Routing Config
  { path: 'user-details', loadChildren: () => import('./user-details/user-details.routes')},
  // Option 2: Directly Lazy Loading a Standalone Component
  {
    path: 'user',
    loadComponent: () =>
      import('./user/user.component').then((m) => m.UserComponent),
  },
];
