import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() user: User;
  @Input() masterName: string;
}
