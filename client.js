const { Socket } = require("dgram");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  }, () => {
    console.log('connected to server!');
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