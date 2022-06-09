HTTP Request
    URL
    Mehod Type
    Headers
    Body
        POST has a body
        GET has not a body

HTTP Response 
    Status Code
    Headers
    Body

http_server_proj:
    // command-line static HTTP server
    npm i http-server

    http-server [path] [options]
    [path] defaults to ./public if the folder exists, and ./ otherwise.
    Now you can visit http://localhost:8080 to view your server
    Note: Caching is on by default. Add -c-1 as an option to disable caching.

web_server_proj:
    // http://localhost:8080/

web_socket_proj:
    //VS Code
    // Debug console:
    connection.send("Hello client, it's me, a server!")
    
    // CLIENT SIDE (This goes in the Browser's console)
    let ws  = new WebSocket("ws://localhost:8080")
    ws.onmessage = message => {console.log(`Message received from server: ${message.data}`);}

