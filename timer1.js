const timeArr = process.argv.splice(2);

const beeper = (timeArr) => {
  if (timeArr.length === 0) return;
  const validArr = timeArr
    .map((elem) => {
      return Number(elem);
    })
    .filter((elem) => {
      if (typeof elem === "number" && elem > 0) return true;
      return false;
    });

  validArr.forEach((time) => {
    const msTime = time * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, msTime);
  });

};

beeper(timeArr);