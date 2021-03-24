import {Component} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'labs-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserCompoenent {
  constructor(public userService: UserService) {
  }

}
