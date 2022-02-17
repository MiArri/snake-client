const {connect} = require("./client");

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

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
}
setupInput();
