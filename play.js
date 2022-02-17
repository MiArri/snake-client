const {connect} = require("./client");
const { setupInput } = require("./input");

let conn = connect(() => {
  conn.write('Name: ECH', () => {
  //  for (let i = 0; i < 50; i++) {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 100 * i);
  //   }
  });

});
// setup interface to handle user input from stdin



console.log("Connecting ...");
connect();

setupInput();
