/*
 * @Author: Admin
 * @Date: 2020-01-17 21:42:51
 * @FilePath: \Angular7Study\eg12\user-management\src\app\user.service.ts
 * @Description: file content
 */
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { USERS } from "./mock-users";
import { User } from "./user";
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private messageService: MessageService) {}

  getUsers(): Observable<User[]> {
    this.messageService.add("UserService:已经获取到用户列表！");
    return of(USERS);
  }
  getUser(id: number): Observable<User> {
    // console.log(id);
    this.messageService.add(`UserService:已经获取到用户 id=${id}`);
    return of(USERS.find(user => user.id === id));
  }
}
