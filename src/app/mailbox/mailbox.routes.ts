import { Route } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages/messages.component';
import { PopupMessageComponent } from './popup-message/popup-message.component';
import { ConversationsResolver } from './conversations/conversations.resolver';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailsComponent } from './message-details/message-details.component';

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
        resolve: {
          conversations: ConversationsResolver,
        },
      },
      {
        path: ':id',
        component: ConversationComponent,
        children: [
          {
            path: 'messages',
            component: MessagesComponent,
          },
          {
            path: 'messages/:id',
            children: [
              {
                path: '',
                component: MessageListComponent,
              },
              {
                path: '',
                component: MessageDetailsComponent,
                outlet: 'details',
              },
            ],
          },
        ],
      },
    ],
  },
] as Route[];
