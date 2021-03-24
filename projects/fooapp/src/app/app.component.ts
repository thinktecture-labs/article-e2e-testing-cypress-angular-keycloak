import {Component} from '@angular/core';
import {SecurityService} from '@foo/core';

@Component({
  selector: 'labs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fooapp';

  constructor(private securityService: SecurityService) {
    securityService.runInitialLoginSequence();
  }

  logout(): void {
    this.securityService.logout();
  }
}
