import { Route } from '@angular/router';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserDetailsHomeComponent } from './user-details-home/user-details-home.component';
import { UserDetailsService, USER_API_CONFIG } from './user-details.service';
import { UserPhoneComponent } from './user-phone/user-phone.component';

export default [
  {
    path: '',
    component: UserDetailsHomeComponent,
    providers: [
      UserDetailsService,
      { provide: USER_API_CONFIG, useValue: '12345' },
    ],
    //On accès aux providers
    children: [
      {
        path: 'address',
        component: UserAddressComponent,
      },
      {
        path: 'phone',
        component: UserPhoneComponent,
      },
    ],
  },
] as Route[];
