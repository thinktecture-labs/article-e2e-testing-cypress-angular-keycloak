import {Injectable} from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {UserService} from '../user/user.service';
import {User} from '../user/user';

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

  logout(): void {
    this.oauthService.logOut();
  }

  private emitUser(claims: IdentityClaims): void {
    let user: User | null = null;
    if (claims) {
      user = {id: claims.sub, username: claims.preferred_username};
    }
    this.userService.user$$.next(user);
  }
}
