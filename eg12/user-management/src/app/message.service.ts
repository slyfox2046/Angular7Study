/*
 * @Author: Admin
 * @Date: 2020-01-17 22:19:49
 * @FilePath: \Angular7Study\eg12\user-management\src\app\message.service.ts
 * @Description: file content
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages: string[] = [];
  add(message: string) { 
    this.messages.push(message);
  }
  clear() { 
    this.messages = [];
  }

}
