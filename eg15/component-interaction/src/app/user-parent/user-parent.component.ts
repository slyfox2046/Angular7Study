import { Component, OnInit } from '@angular/core';
import { USERS } from '../user';

@Component({
  selector: 'app-user-parent',
  templateUrl: './user-parent.component.html',
  styleUrls: ['./user-parent.component.css']
})
export class UserParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  users = USERS;
  master = '老卫';
}
