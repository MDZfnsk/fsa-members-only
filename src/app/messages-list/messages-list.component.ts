import { Component, Input } from '@angular/core';
import { Message } from '../types';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent {

  @Input() messages: Message[] = [];
 
}
