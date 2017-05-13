/**
 * Created by ben.kl on 4/22/2017.
 */

var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8080;

app.use(express.static(path.join(__dirname,"public")));

io.on('connection',function(socket){

 console.log('new connection made');

 socket.emit("message-from-server",{
  greeting: "Hello from Server",
  msg: "please b-have"
 });

 socket.on('message-from-client', function(msg){
   console.log(msg.greeting);
 });

});

server.listen(port,function(){
 console.log("Listing on port " + port);
});

