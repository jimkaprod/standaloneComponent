import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class ConversationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
