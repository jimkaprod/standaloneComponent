import { Route } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages/messages.component';
import { PopupMessageComponent } from './popup-message/popup-message.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inbox',
  },
  {
    path: ':folder',
    children: [
      {
        path: '',
        component: ConversationsComponent,
      },
      {
        path: ':id',
        component: ConversationComponent,
        children: [
          { path: 'messages', component: MessagesComponent },
          { path: 'messages/:id', component: MessageComponent },
        ],
      },
    ],
  },
  {
    path: 'compose',
    component: ComposeComponent,
    outlet: 'popup',
  },
  {
    path: 'message/:id',
    component: PopupMessageComponent,
    outlet: 'popup',
  },
] as Route[];
