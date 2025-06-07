# Jammming - Spotify Playlist Manager

## Background

This app was created as part of the Codecademy task Create a Playlist App with the Spotify API. It is built with Create React App, JavaScript, and the Fetch API. The main functionalities involving HTTP requests and responses can be found in App.js and ListWrapper.js. For the authentication flow, I used the Spotify-provided template; my implementation can be found in the auth folder.

## Description

Jammming is a React-based web app that allows users to search Spotify’s music library, create custom playlists, and save them directly to their Spotify accounts. The app uses the Spotify API with PKCE authentication and supports CRUD operations on playlists (adding, naming, deleting tracks).

## Implemented Features:

* Spotify API integration with PKCE authentication flow
* Dynamic search by track title, artist, or both
* Infinite scrolling for large search results
* Create, name, edit, and clear custom playlists
* Save playlists to user’s Spotify account (once saved, editing happens on Spotify)
* Scroll-to-top button and responsive UI elements
* User notifications for empty results or end of list

## Technologies

* React (Create React App)
* JavaScript (ES6+)
* Spotify Web API & Authentication
* Fetch API for HTTP requests

## Future Improvements:

* Allow adding filtered tracks to existing playlists
* Replace alert banners with modals for better UX
* Implement refresh tokens for longer sessions
* Add automated tests

## Getting Started (for Developers):

1. Create a Spotify Developer account at developer.spotify.com.
2. Register your application and get your Client ID.
3. Rename .env.example to .env.
4. Add your Client ID and redirect URI to the .env file.
5. Now you can run the app locally and enjoy building your playlists!
