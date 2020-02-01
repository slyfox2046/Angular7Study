/*
 * @Author: Admin
 * @Date: 2020-01-21 10:37:26
 * @FilePath: \Angular7Study\eg12\user-management\src\app\user-search\user-search.component.ts
 * @Description: file content
 */
import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { User } from "../user";
import { UserService } from "../user.service";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: "app-user-search",
  templateUrl: "./user-search.component.html",
  styleUrls: ["./user-search.component.scss"]
})
export class UserSearchComponent implements OnInit {
  users$: Observable<User[]>;
  private searchTerms = new Subject<string>();
  constructor(private userService: UserService) {}

  search(term: string): void { 
    this.searchTerms.next(term); 
  }
  ngOnInit() {
    this.users$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=>this.userService.searchUsers(term)),
    )
  }
}
