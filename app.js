const express = require('express')
const bodyParser = require('body-parser')
const socketio = require('socket.io')
const mongoose = require('mongoose')
const http = require('http')


const app = express()
const server = http.createServer(app)        //server for app
const io = socketio(server)                 // server for socket.io

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);    

mongoose.connect("mongodb://localhost/Private_chats",()=>{
    console.log("connected")                                    //connecting mongodb database
});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.get('/',(req,res)=>{
    res.render("home")
})

//Auth routes
app.get('/signin',(req,res)=>{
    res.render("signin")
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/addFriend',(req,res)=>{
    res.render("add_friend")
})


//Server configuration 
PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})