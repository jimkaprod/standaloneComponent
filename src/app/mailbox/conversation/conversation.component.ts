import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterModule,
} from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class ConversationComponent implements OnInit {
  conversations: Observable<string[]>;

  constructor(route: ActivatedRoute) {
    this.conversations = route.data.pipe(map((data) => data?.conversation));
    route.data.pipe().subscribe((conversation) => {
      console.log('ConversationComponent$$conversation$$>>>>>', conversation);
    });

    route.paramMap.pipe(map((p) => p.get('id'))).subscribe((param) => {
      console.log('ConversationComponent$$Params$$>>>>>', param);
    });
  }

  ngOnInit() {}
}
