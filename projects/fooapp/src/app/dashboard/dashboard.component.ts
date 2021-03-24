import { Component, OnInit } from '@angular/core';
import {UserService} from '@foo/core';

@Component({
  selector: 'labs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
