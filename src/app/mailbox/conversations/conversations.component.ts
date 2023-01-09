import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
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
    this.conversations = route.data.pipe(pluck('conversations'));
    route.data.pipe().subscribe((conversation) => {
      console.log('$$conversation>>>>>', conversation);
    });
  }

  ngOnInit() {}
}
