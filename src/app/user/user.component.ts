import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports: [RouterModule, AddressComponent],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
