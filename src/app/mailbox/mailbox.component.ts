import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class MailboxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
