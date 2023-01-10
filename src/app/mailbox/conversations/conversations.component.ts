import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { ConversationComponent } from '../conversation/conversation.component';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
  standalone: true,
  imports: [CommonModule, ConversationComponent],
})
export class ConversationsComponent implements OnInit {
  conversations: Observable<string[]>;

  constructor(route: ActivatedRoute) {
    this.conversations = route.data.pipe(map((data) => data?.conversation));
    route.data.pipe().subscribe((conversation) => {
      console.log('ConversationsComponent$$conversation$$>>>>>', conversation);
    });

    const s: ActivatedRouteSnapshot = route.snapshot;
    console.log(
      'ConversationsComponent000$$ActivatedRouteSnapshot$$>>>>>',
      s.data
    );
    console.log(
      'ConversationsComponent$$ActivatedRouteSnapshot$$>>>>>',
      s.data['conversations']
    );

    route.url.forEach((u: UrlSegment[]) => {
      console.log('ConversationsComponent##Segments>>>>', u);
    });

    route.paramMap.pipe(map((p) => p.get('id'))).subscribe((param) => {
      console.log('ConversationsComponent$$Params$$>>>>>', param);
    });

    //?token=123
    route.queryParamMap.forEach((p) => {
      const token = p.get('token');
      console.log('QueryParams>>>', p, token);
    });

    //#token
    route.fragment.forEach((f) => {
      console.log('Fragment>>>', f);
    });
  }

  ngOnInit() {}
}
