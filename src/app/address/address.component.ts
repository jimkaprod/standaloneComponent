import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../../main';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  standalone: true,
  imports: [],
})
export class AddressComponent implements OnInit {
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {}

  ngOnInit() {
    console.log(this.config.title);
  }
}
