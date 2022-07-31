const express=require("express");
const { connection } = require("./config/db");
const authRouter=require("./routes/auth")
const postRouter=require("./routes/post")
const otpRouter=require("./routes/otp")
require('dotenv').config()
// console.log(process.env)
const cors=require("cors")
const app=express()

// socket.io
const socket = require("socket.io");





app.use(cors())
app.use(express.json())
app.use("/auth",authRouter)
app.use("/post",postRouter)
app.use("/otp",otpRouter)
app.get("/",(req,res)=>{
    res.send("Welcome")
})
app.listen(process.env.PORT,async()=>{
    await connection;
    console.log(`Server started on ${process.env.PORT}`)
})



// socket.io

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
