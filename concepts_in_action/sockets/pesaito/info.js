WEB SOCKETS:
- Protocol that allows us to pen a channel between the server and browser 
that allows real time bidirectional communication and data transfer. 

// ws: a Node.js WebSocket library
// https://www.npmjs.com/package/ws
- This module does not work in the browser. 

- clients could use the native WebSocket object:
// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

... but not all the browsers support 'WebSocket' so then...

'socket.io' to the rescue!!!
- Socket.IO enables real-time bidirectional event-based communication.
npm i socket.io

Emit cheatsheet
https://socket.io/docs/v4/emit-cheatsheet/

out of topic: Drawing shapes with canvas
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

