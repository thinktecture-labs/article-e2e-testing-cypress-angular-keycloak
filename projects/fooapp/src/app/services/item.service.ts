import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ItemService {
  items = ['first task', 'second task'];
}
