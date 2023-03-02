const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  debugger
  if (numsLeft === 0) {
    completionCallback(sum);
    rl.close();
  } else {
    rl.question('Enter a number: ', function(answer) {
      sum += parseInt(answer);
      console.log(`Partial sum = ${sum}`);
      addNumbers(sum, --numsLeft, completionCallback);
    });
  };
  return sum;
};

addNumbers(0, 2, sum => console.log(`Total Sum: ${sum}`));