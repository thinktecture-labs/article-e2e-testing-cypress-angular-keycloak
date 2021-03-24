import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'labs-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  primaryApps = [{icon: 'add', click: () => this.navigate()}, {value: 42}, {}, {}, {value: 5}];
  apps = new Array(8).fill(0).map(_ => ({value: 0}));

  constructor(private router: Router, public itemService: ItemService) {
  }

  async navigate(): Promise<void> {
    await this.router.navigateByUrl('/form');
  }
}
