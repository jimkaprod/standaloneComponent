import { Component, VERSION } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UserComponent],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
