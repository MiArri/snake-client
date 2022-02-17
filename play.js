const {connect} = require("./client");
const { setupInput } = require("./input");

const conn = connect(() => {
  conn.write('Name: ECH', () => {
  //  for (let i = 0; i < 50; i++) {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 100 * i);
  //   }

  });
});

console.log("Connecting ...");

setupInput(conn);
