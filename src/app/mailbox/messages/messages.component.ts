import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  standalone: true,
})
export class MessagesComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    route.url.forEach((u: UrlSegment[]) => {
      console.log('ConversationsComponent##Segments>>>>', u);
    });
  }

  ngOnInit() {}
}
