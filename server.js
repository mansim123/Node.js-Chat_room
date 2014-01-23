var io = require('socket.io'),
  connect = require('connect'),
  chatter = require('chatter');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chatter.set_sockets(chat_room.sockets);

chat_room.sockets.on('connection', function (socket) {

randomNumber = Math.floor((Math.random()*100)+1);

  chatter.connect_chatter({
    socket: socket,
    username: randomNumber
  });
  
  
});