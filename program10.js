var strftime = require('strftime')
var net = require('net')

var server = net.createServer(function(socket){
  data = strftime("%F %R")
  data+="\n"
  socket.end(data)
})

server.listen(process.argv[2])
