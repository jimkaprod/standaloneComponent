import { Route } from '@angular/router';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserPhoneComponent } from './user-phone/user-phone.component';

export const USER_DETAILS_ROUTES: Route[] = [
  { path: '/user-details/address', component: UserAddressComponent },
  { path: '/user-details/phone', component: UserPhoneComponent },
];
