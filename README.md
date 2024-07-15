# Jammming - an App for filtering Spotify, creating and adding new lists to own account

This App was created within the scope of the codecademy-task *Create a Playlist App With the Spotify API*. It is build with Create-React-App, Javascript and the Fetch API. The main functionalities (HTTP Requests and Responses) can be found in App.js and ListWrapper.js. For the Authflow I use the provided [template from Spotify](https://github.com/spotify/web-api-examples/tree/master/authorization/authorization_code_pkce). You can find my implementation in the "auth" folder.

## Description/Purpose:

In this project, you will build a React web application called Jammming. You will use your knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.

## Project Requirements:

* Build a web app using React
* Version control your application with Git and host the repository on GitHub
* Integrate with Spotify or another API
* Deploy your application
* Write a README (using Markdown) that documents your project, including:
    -The purpose of your project
    -Technologies used
    -Features
    -Future work

## Prerequisites:

* HTML
* CSS
* JavaScript
* React
* HTTP Requests and Responses
* Authentication

## Implemented Features:

* Authentification with PKCE-Flow
* browse Spotify-Data by Title, Author or both together
* add favourites to a new list
* option to remove items from that new list or to clear the entire list
* name the new list
* add the new list to a personal account
* infinite scrolling
* scroll-to-top button
* expand and close the lists depending on device size
* notification when no results could be found
* notification if there are no more items in the result-list

## Future Work:

* create the opportunity to add the filtered items to an allready existing list 
* replace alert banner with modals
* implement refresh-token
* write tests!

## How to use this app as a developer:

1. create a Spotify-Account
2. go to [developer.spotify.com](https://developer.spotify.com) and follow the instructions under *Getting started* to list your personal App
3. you will recieve a client-ID which is neccessary to run this App 
4. rename the .env.example file to .env 
5. In the .env file store your client-ID as the value of the provided variable 

Now you should be ready to go!
