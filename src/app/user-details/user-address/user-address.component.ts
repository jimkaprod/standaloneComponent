import { Component, Inject, OnInit } from '@angular/core';
import {
  UserDetailsConfigModel,
  USER_API_CONFIG,
} from '../user-details.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css'],
  standalone: true,
})
export class UserAddressComponent implements OnInit {
  constructor(
    @Inject(USER_API_CONFIG) private userApiConfig: UserDetailsConfigModel
  ) {}

  ngOnInit() {
    console.log(this.userApiConfig);
  }
}
