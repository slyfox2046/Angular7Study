/*
 * @Author: Admin
 * @Date: 2020-01-10 16:48:23
 * @FilePath: \Angular7Study\eg12\user-management\src\app\users\users.component.ts
 * @Description: file content
 */

import { Component, OnInit } from "@angular/core";
import { USERS } from "../mock-users";
import { User } from "../user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 1,
    name: "老卫",
    isSecret: false
  };
  users = USERS;
  constructor() { }

  ngOnInit() { }

  selectedUser: User;
  onSelect(user: User): void { 
    this.selectedUser = user;
  }
}
