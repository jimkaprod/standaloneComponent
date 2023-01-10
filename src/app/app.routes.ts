import { Routes } from '@angular/router';
import { BooksService } from './books/books.service';
import { PersonnalMessageComponent } from './core/message/personnal-message.component';
import { PoppupComponent } from './core/poppup/poppup.component';
import { HomeComponent } from './home/home.component';
import { ComposeComponent } from './mailbox/compose/compose.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home Page',
    component: HomeComponent,
  },
  // Option 1: Lazy Loading another Routing Config
  {
    path: 'user-details',
    title: 'User Details',
    loadChildren: () => import('./user-details/user-details.routes'),
  },
  {
    path: 'mailbox',
    title: 'Mailbox',
    loadChildren: () => import('./mailbox/mailbox.routes'),
  },
  // Option 2: Directly Lazy Loading a Standalone Component
  {
    path: 'user',
    title: 'User',
    loadComponent: () =>
      import('./user/user.component').then((m) => m.UserComponent),
  },
  {
    path: 'books',
    title: 'Books',
    loadComponent: () =>
      import('./books/books/books.component').then((m) => m.BooksComponent),
    providers: [BooksService],
  },
  {
    path: 'compose',
    component: ComposeComponent,
    outlet: 'popup',
  },
  {
    path: 'message/:id',
    component: PersonnalMessageComponent,
    outlet: 'message',
  },
  {
    path: '**',
    title: 'You are lost man!',
    loadComponent: () =>
      import('./core/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
