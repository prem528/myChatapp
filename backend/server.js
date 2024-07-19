import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes  from "./routes/user.routes.js"

import connectToMongodb from "./db/connectTomongodb.js";
import { app, server } from "./socket/socket.js";

 
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/" , (req, res) => {
//     res.send("server is ready");
// });
 

server.listen(PORT, () => {
    connectToMongodb();
    console.log(`Listening on port ${PORT}`)
});   