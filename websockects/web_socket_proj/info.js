//VS Code
// set a break point in 'index.js' on this line:
connection.on("message", (message) => {

// 1. Run and Debug icon (on the left vertical tools bar)
// RUN AND DEBUG > Node JS (click the 'play' icon)

// 2. CLIENT SIDE
// (This goes in the Browser's console)
let ws = new WebSocket("ws://localhost:8080");
ws.onmessage = (message) => {
  console.log(`Message received from server: ${message.data}`);
};

// 3. SEND MESSAGE FROM SERVER
// Debug console: (IN THE BOTTOM)
// DON'T STOP DEBUGGING, DON'T LET THE DEBUG EXECUTION CONTINUE TO THE END OF THE CODE
// OTHERWISE THE VARIABLES WILL BE UNDEFINED
connection.send("Hello client, it's me, a server!");

// 4. SERVER SIDE
// LET THE DEBUG EXECUTION GOES TO THE END OF THE CODE IN THE BACK END
// 5. CLIENT SIDE
ws.send("Dabuti!");
ws.close();

