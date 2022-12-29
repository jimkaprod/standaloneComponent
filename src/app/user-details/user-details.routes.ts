import { Route } from '@angular/router';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserDetailsHomeComponent } from './user-details-home/user-details-home.component';
import { UserPhoneComponent } from './user-phone/user-phone.component';

export const USER_DETAILS_ROUTES: Route[] = [
  {
    path: '',
    component: UserDetailsHomeComponent,
    children: [
      {
        path: 'address',
        component: UserAddressComponent,
        // outlet: 'userDetails',
      },
      {
        path: 'phone',
        component: UserPhoneComponent,
        // outlet: 'userDetails',
      },
    ],
  },
];
