import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  UrlSegment,
} from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  standalone: true,
})
export class MessageListComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    // this.conversations = route.data.pipe(map((data) => data?.conversation));
    route.data.pipe().subscribe((conversation) => {
      console.log('ConversationxxComponent$$conversation$$>>>>>', conversation);
    });

    route.url.subscribe((s: UrlSegment[]) => {
      console.log('url', s);
    });

    route.paramMap.pipe(map((p) => p.get('id'))).subscribe((param) => {
      console.log('ConversationComponent$$Params$$>>>>>', param);
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
