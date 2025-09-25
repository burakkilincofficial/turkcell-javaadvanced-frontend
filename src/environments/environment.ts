export const environment = {
  production: false,
  auth: {
    issuer: 'http://localhost:8003/realms/turkcell-ecommerce-dev',
    clientId: 'ecommerce',
    redirectUri: window.location.origin,        // http://localhost:4200
    scope: 'openid profile email',               // id_token claim'leri
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  }
};
