// import { Server } from "socket.io"
// const { createServer } = require('http')
const { Server } = require('socket.io')

// const httpServer = createServer()
const io = new Server(3000, {
    cors: {
        origin:"http://localhost:5173"
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

console.log("Server is running")
