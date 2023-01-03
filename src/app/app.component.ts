import { Component, VERSION } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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

  constructor(private router: Router, readonly route: ActivatedRoute) {}

  goToItems() {
    this.router.navigate(['user'], { relativeTo: this.route });
  }
}
