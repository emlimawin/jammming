
//Generate PKCE Token

//Code Verifier:
const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }

const codeVerifier  = generateRandomString(64);
  
//Code Challenge:-to transform (hash) the Code Verifier using the SHA256 algorithm. Using SubtleCrypto: digest() method:
const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
  }

//Implement a function base64encode that returns the base64 representation of the digest we just calculated with the sha256 function:
const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

//Put all the pieces together to implement the code challenge generation:
const hashed = await sha256(codeVerifier)
const codeChallenge = base64encode(hashed);
