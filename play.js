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
