const callbackLocal = 'http://localhost:3000/callback';
const callbackLive = 'https://profit.netlify.com/callback';
export const AUTH_CONFIG = {
  domain: 'profitpro.auth0.com',
  clientId: 'CWuOoIu59fC3AzJmk1VwZfaA8JgTB0ve',
  clientSec: 'QTH2ulh2PGqk_sZgfT__NhY65bCbubnI-O63SxlPlbbf7FlE1AO6OGE68ndD5VJU',
  token:'',
  audience :"https://profitpro.auth0.com/api/v2/",
  callbackUrl: window.location.hostname=="localhost" ? callbackLocal :callbackLive,
}

 


 
