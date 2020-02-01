/*
 * @Author: Admin
 * @Date: 2020-01-19 17:06:05
 * @FilePath: \Angular7Study\eg12\user-management\src\app\dashboard\dashboard.component.ts
 * @Description: file content
 */
import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"]
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users =>this.users = users.slice(1, 5));
  }
}
