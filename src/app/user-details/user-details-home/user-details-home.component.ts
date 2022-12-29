import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details-home',
  templateUrl: './user-details-home.component.html',
  styleUrls: ['./user-details-home.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class UserDetailsHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
