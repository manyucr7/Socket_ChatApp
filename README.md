# Socket Chat App

A real time chat application built with Node.js, Express, and Socket.IO.

## Features

- Real time messaging between connected users
- Username based chat messages
- Live typing indicator
- Disconnect notification
- Automatic client reconnection attempts
- Simple browser based chat interface

## Tech Stack

- Node.js
- Express
- Socket.IO
- JavaScript
- HTML
- CSS

## How It Works

The app uses an Express server to serve the frontend from the `public` folder and Socket.IO to manage live, event based communication between clients and the server.

Users can:
- enter a username
- type and send messages
- see other users’ messages instantly
- see when another user is typing
- receive a notification when a user disconnects

## Project Structure

- `index.js` → server setup, socket connection handling, chat events, typing events, disconnect events
- `public/index.html` → chat UI
- `public/app.js` → client side socket logic
- `public/styles.css` → chat styling

## Installation

```bash
npm install
