/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code with PKCE oAuth2 flow to authenticate 
 * against the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
 */
const clientId = process.env.REACT_APP_CLIENT_ID // your clientId
const redirectUrl = process.env.REACT_APP_REDIRECT_URI; // your redirect URL - must be localhost URL and/or HTTPS

const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const scope = 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public';

// Data structure that manages the current active token, caching it in localStorage
export const currentToken = {
  get access_token() { return localStorage.getItem('access_token') || null; },
  get refresh_token() { return localStorage.getItem('refresh_token') || null; },
  get expires_in() { return localStorage.getItem('refresh_in') || null },
  get expires() { return localStorage.getItem('expires') || null },

  save: function (response) {
    const { access_token, refresh_token, expires_in } = response;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('expires_in', expires_in);

    const now = new Date();
    const expiry = new Date(now.getTime() + (expires_in * 1000));
    localStorage.setItem('expires', expiry);
  }
};

// On page load, try to fetch auth code from current browser search URL
const args = new URLSearchParams(window.location.search);
const code = args.get('code');

export let loggedIn = false; /*---------------------------------------------------------my code */
export let userToken = ""; /*-----------------------------------------------------------my code */
export let user;  /*-------------------------------------------------------------------my code */
export let userId;

// If we find a code, we're in a callback, do a token exchange
if (code) {
  const token = await getToken(code);
  console.log("called getToken() line 47")/*----------------------------- */
  currentToken.save(token);
//console.log(token)
  // Remove code from URL so we can refresh correctly.
  const url = new URL(window.location.href);
  url.searchParams.delete("code");

  const updatedUrl = url.search ? url.href : url.href.replace('?', '');
  window.history.replaceState({}, document.title, updatedUrl);
  userToken = token.access_token /*----------------------------------------------------my code */
}
console.log(currentToken.access_token)

// If we have a token, we're logged in, so fetch user data and render loggedin template

/* if (currentToken.access_token !== null) {
  const userData = await getUserData();
  console.log('called getUserData() Line 62')
  console.log(userData)
  user = await userData.display_name;
  userId = userData.id
  loggedIn = true;
};
console.log(user);
console.log(loggedIn); */

if (currentToken.access_token !== null) {
  try {
    const userData = await getUserData();
    console.log('called getUserData() Line 62')/*----------------------------- */
    console.log(userData)/*----------------------------- */
    user = await userData.display_name;
    userId = userData.id
    loggedIn = true;
  } catch (error) {
    console.log(error);
    localStorage.clear();
    userToken = ""; /*-----------------------------------------------------------my code */
    user = null;  /*--------------------------------------------------------------------my code */
    userId = null;/*--------------------------------------------------------------------my code */
    window.location.href = redirectUrl;
    alert('Something went wrong. Please try again.')
  }

};
console.log(user);
console.log(loggedIn);


// Otherwise we're not logged in, so render the login template
async function redirectToSpotifyAuthorize() {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomValues = crypto.getRandomValues(new Uint8Array(64));
  const randomString = randomValues.reduce((acc, x) => acc + possible[x % possible.length], "");

  const code_verifier = randomString;
  const data = new TextEncoder().encode(code_verifier);
  const hashed = await crypto.subtle.digest('SHA-256', data);

  const code_challenge_base64 = btoa(String.fromCharCode(...new Uint8Array(hashed)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  window.localStorage.setItem('code_verifier', code_verifier);

  const authUrl = new URL(authorizationEndpoint)
  const params = {
    response_type: 'code',
    client_id: clientId,
    scope: scope, //I changed it from initial scope: scope to the new sopes to make it possible to create new Lists
    code_challenge_method: 'S256',
    code_challenge: code_challenge_base64,
    redirect_uri: redirectUrl,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString(); // Redirect the user to the authorization server for login
  console.log('called redirectToSpotify()')/*----------------------------- */
}

// Soptify API Calls
async function getToken(code) {
  const code_verifier = localStorage.getItem('code_verifier');

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUrl,
      code_verifier: code_verifier,
    }),
  });
  console.log('called getToken')/*----------------------------- */
  return await response.json();
}

 async function refreshToken() {
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'refresh_token',
      refresh_token: currentToken.refresh_token
    }),
  });
  console.log('called refreshToken()')/*----------------------------- */
  return await response.json();
} 

async function getUserData() {
  const response = await fetch("https://api.spotify.com/v1/me", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
  });
  console.log('called getUserData()')/*----------------------------- */
  return await response.json();
}

// Click handlers
export async function loginWithSpotifyClick() {
  await redirectToSpotifyAuthorize();
}

export async function logoutClick() {
  localStorage.clear();
  userToken = ""; /*-----------------------------------------------------------my code */
  user = null;  /*--------------------------------------------------------------------my code */
  userId = null;/*--------------------------------------------------------------------my code */
  window.location.href = redirectUrl;
}

export async function refreshTokenClick() {
  const token = await refreshToken();
  currentToken.save(token);

}

window.addEventListener('beforeunload', () => {
  loggedIn = true
});

