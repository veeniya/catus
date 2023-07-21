/* // import { Server } from "socket.io"
// const { createServer } = require('http')
const { Server } = require('socket.io')

// const httpServer = createServer()
const io = new Server(3001, {
    cors: {
        origin: "http://localhost:5173"
    }
})

io.on("connection", (socket) => {
    //   send a message to the client
    socket.emit("hello", "world")

    // receie a message from the client
    socket.on("howdy", (arg) => {
        console.log(arg)   //prints "stranger"
        socket.emit("answer", `You just send "${arg}"`)
    })
})

console.log("Server is running") */

// import { Server } from "socket.io"
// const { createServer } = require('http')
const { Server } = require('socket.io')
const { createServer } = require('http');

// const httpServer = createServer()
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin:"*",
        credentials: true,
    }
})

io.on("connection", (socket) => {
//   send a message to the client
    socket.emit("hello", "world")
    
    // receie a message from the client
    socket.on("howdy", (arg) => {
        console.log(arg)   //prints "stranger"
        socket.emit("answer",`You just send "${arg}"`)
    })
})

console.log('server is runing on port 2333');
httpServer.listen(2333);
