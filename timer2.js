const { stdin, stdout } = require("process");

const beep = () => stdout.write('\x07');

const beeper = () => {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  console.log("Welcome to Interactive Timer. Press b to beep now. Press a number from 1-9 to beep after the corresponding number of seconds.")

  stdin.on("data", (input) => {
    
  });



}

beeper();
