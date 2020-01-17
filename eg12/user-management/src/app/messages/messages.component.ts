/*
 * @Author: Admin
 * @Date: 2020-01-17 22:18:06
 * @FilePath: \Angular7Study\eg12\user-management\src\app\messages\messages.component.ts
 * @Description: file conten
 */
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageService) { }

  ngOnInit() {
  }

}
