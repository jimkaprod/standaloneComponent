import { Component, VERSION } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, HelloComponent, UserComponent],
})
export class AppComponent {
  name = 'AngularRr ' + VERSION.major;
}
