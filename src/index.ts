import express from "express";
import http from "http";
const port = 8080;
const app = express();
import { Server } from "socket.io";
import { roomHandler } from "./room";


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['Get', "Post"]
    }
});


io.on("connection", (socket) => {
    roomHandler(socket);
    socket.on("disconnect", () => {
        console.log("user is disconnect")
    })
    console.log("user is connected");
})

server.listen(port, () => {
    console.log(`servrer is staring.....`)
})