const { Socket } = require("dgram");
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function (callback) {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  }, () => {
    console.log('Successfully connected to game server!');
    callback();
  });

  conn.on('data', (messageFromTheServer) => {
    console.log('Message from the server:', messageFromTheServer);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};