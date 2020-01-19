/*
 * @Author: Admin
 * @Date: 2020-01-17 21:29:10
 * @FilePath: \Angular7Study\eg12\user-management\src\app\user-detail\user-detail.component.ts
 * @Description: file content
 */
import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../user";
import { UserService } from "../user.service";
@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getUser();
  }
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }
  goBack():void { 
    this.location.back();
  }
}
