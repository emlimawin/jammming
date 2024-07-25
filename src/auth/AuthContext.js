const clientId = process.env.REACT_APP_CLIENT_ID 
const redirectUrl = process.env.REACT_APP_REDIRECT_URI; 
const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const scope = 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public';

// Data structure that manages the current active token and userdata, caching it in localStorage
export const currentToken = {
  get access_token() { return localStorage.getItem('access_token') || null; },
  get refresh_token() { return localStorage.getItem('refresh_token') || null; },
  get expires_in() { return localStorage.getItem('refresh_in') || null },
  get expires() { return localStorage.getItem('expires') || null },

  save: function (response) {
    console.log("Saving token response:", response);

    const { access_token, refresh_token, expires_in } = response;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('expires_in', expires_in);

    const now = new Date();
    const expiry = new Date(now.getTime() + (expires_in * 1000));
    localStorage.setItem('expires', expiry);

    console.log("Saved access_token:", localStorage.getItem('access_token'));
    console.log("Saved refresh_token:", localStorage.getItem('refresh_token'));
    console.log("Saved expires_in:", localStorage.getItem('expires_in'));
    console.log("Saved expires:", localStorage.getItem('expires'));
  }
};

export const userData = {
  get display_name() { return localStorage.getItem('display_name') || null;},
  get id() { return localStorage.getItem('id') || null;},

  save: function (response) {
    console.log("Saving user data response:", response);

    const {display_name, id} = response;
    localStorage.setItem('display_name', display_name);
    localStorage.setItem('id', id);

    console.log("Saved display_name:", localStorage.getItem('display_name'));
    console.log("Saved id:", localStorage.getItem('id'));
  }
};

// On page load, try to fetch auth code from current browser search URL
const args = new URLSearchParams(window.location.search);
const code = args.get('code');

// If we find a code, we're in a callback, do a token exchange
if (code) {
  try {
    const token = await getToken(code);
      console.log("called getToken() line 47")
      console.log(token)
    currentToken.save(token);
    // Remove code from URL so we can refresh correctly.
    const url = new URL(window.location.href);
    url.searchParams.delete("code");
    const updatedUrl = url.search ? url.href : url.href.replace('?', '');
    window.history.replaceState({}, document.title, updatedUrl);
  } catch (error) {
    console.log(error);
  }
  // If we have a token, we're logged in, so fetch user data save to localstorage
  if (currentToken.access_token !== null) {
    try {
      const fetchedUserData = await getUserData();
        console.log('called getUserData() Line 62');
        console.log(fetchedUserData);
      userData.save(fetchedUserData);
    } catch (error) {
      console.log(error);
      window.location.href = redirectUrl;
      localStorage.clear();
      alert('Something went wrong. Please try again.');
    }
  }
};

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
  console.log('called redirectToSpotify()')
};

// Soptify API Calls
async function getToken(code) {
  const code_verifier = localStorage.getItem('code_verifier');
  console.log("code_verifier: ");
  console.log(code_verifier);

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
  console.log('called getToken');
  return await response.json();
};

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
  console.log('called refreshToken()');
  return await response.json();
}; 

async function getUserData() {
  const response = await fetch("https://api.spotify.com/v1/me", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
  });
  console.log('called getUserData()');
  return await response.json();
};

// Click handlers
export async function loginWithSpotifyClick() {
  await redirectToSpotifyAuthorize();
};

export async function logoutClick() {
  localStorage.clear();
  window.location.href = redirectUrl;
};

export async function refreshTokenClick() {
  const token = await refreshToken();
  currentToken.save(token);
};



