import {Injectable} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {User} from './user';

@Injectable({providedIn: 'root'})
export class UserService {
  user$$ = new ReplaySubject<User | null>(1);
  user$ = this.user$$.asObservable();
  logout$$ = new Subject<void>();
  logout$ = this.logout$$.asObservable();
}
