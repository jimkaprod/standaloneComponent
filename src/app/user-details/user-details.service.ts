import { Injectable, InjectionToken } from '@angular/core';

export interface UserDetailsConfigModel {
  apiKey: string;
}

export const USER_API_CONFIG = new InjectionToken<UserDetailsConfigModel>(
  'user-details.config'
);

@Injectable()
export class UserDetailsService {
  userDetailsConfig: UserDetailsConfigModel = {
    apiKey: '007',
  };

  constructor() {}
}
