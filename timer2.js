const { stdin, stdout } = require("process");

const beep = () => stdout.write('\x07');

const setTimer = (time) => {
  stdout.write(`Setting time for ${time} seconds`)
  setTimeout(() => {
    beep();
  }, time * 1000);
}

const beeper = () => {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  console.log("Welcome to Interactive Timer. Press b to beep now. Press a number from 1-9 to beep after the corresponding number of seconds.")

  stdin.on("data", (input) => {
    options(input);
  });

}

const options = (input) => {
  switch (input) {
    case "1":
      setTimer(1);
      break;
    case "2":
      setTimer(2);
      break;
    case "3":
      setTimer(3);
      break;
    case "4":
      setTimer(4);
      break;
    case "5":
      setTimer(5);
      break;
    case "6":
      setTimer(6);
      break;
    case "7":
      setTimer(7);
      break;
    case "8":
      setTimer(8);
      break;
    case "9":
      setTimer(9);
      break;
    case "b":
      beep();
      break;
    case "\u0003":
      stdout.write("Thanks for using me, ciao!\n")
      process.exit();
    default:
      stdout.write("Invalid input!\n");
      break;
  }
}

beeper();
