import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private oauth: OAuthService,private router: Router) {}

  login()  { 
    const state = encodeURIComponent(this.router.url || '/');
    this.oauth.initLoginFlow(state); 
}
  logout() { this.oauth.logOut(); } // Keycloak end_session da çağrılır

  get accessToken(): string | null {
    return this.oauth.getAccessToken() || null;
  }

  get isLoggedIn(): boolean {
    return this.oauth.hasValidAccessToken();
  }

  get claims(): any {
    return this.oauth.getIdentityClaims();
  }
}
