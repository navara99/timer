const { stdin, stdout } = require("process");

const beep = () => stdout.write('\x07');

const beeper = () => {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  console.log("Welcome to Interactive Timer. Press b to beep now. Press a number from 1-9 to beep after the corresponding number of seconds.")

  stdin.on("data", (input) => {
    options(input);
  });

}

const options = (input)=> {
  switch (input) {
    case "1":

      break;
    case "2":

      break;
    case "3":

      break;
    case "4":

      break;
    case "5":

      break;
    case "6":

      break;
    case "7":

      break;
    case "8":

      break;
    case "9":

      break;
    case "b":
      beep();
      break;
    case "\u0003":
      console.log("Thanks for using me, ciao!")
      process.exit();
    default:
      console.log("Invalid input!");
      break;
  }
}

beeper();
