import {Injectable} from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {UserService} from '../user/user.service';

interface IdentityClaims {
  sub: string;
  preferred_username: string;
}

@Injectable({providedIn: 'root'})
export class SecurityService {
  constructor(private config: AuthConfig,
              private oauthService: OAuthService,
              private userService: UserService,
              private router: Router) {
  }

  runInitialLoginSequence(): void {
    this.oauthService.configure(this.config);
    this.oauthService.loadDiscoveryDocumentAndTryLogin({
      onTokenReceived: info => {
        if (info.state) {
          this.router.navigate([info.state]);
        }
      }
    }).then(() => {
      this.router.initialNavigation();
    });

    this.oauthService.setupAutomaticSilentRefresh();

    this.oauthService.events.pipe(
      filter(({type}) => type === 'token_received'),
    ).subscribe(async _ => {
      this.emitUser(this.oauthService.getIdentityClaims() as IdentityClaims);
    });

    this.emitUser(this.oauthService.getIdentityClaims() as IdentityClaims);
  }

  private emitUser({sub, preferred_username}: IdentityClaims): void {
    this.userService.user$$.next({id: sub, username: preferred_username});
  }
}
