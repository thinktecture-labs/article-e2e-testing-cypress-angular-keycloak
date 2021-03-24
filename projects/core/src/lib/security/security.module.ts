import {ModuleWithProviders, NgModule} from '@angular/core';
import {AuthConfig} from 'angular-oauth2-oidc';
import {SecurityConfig} from './security.config';

@NgModule({})
export class SecurityModule {

  static forRoot({security}: SecurityConfig): ModuleWithProviders<SecurityModule> {
    return {
      ngModule: SecurityModule,
      providers: [
        {provide: AuthConfig, useFactory: () => security}
      ]
    };
  }
}
