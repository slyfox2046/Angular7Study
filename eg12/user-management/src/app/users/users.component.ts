
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 1,
    name: '老卫',
    isSecret: false
    
  }
 users = USERS;
  constructor() { }

  ngOnInit() {
  }

}
