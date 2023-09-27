// change symbols to an array for easy access  
const characters = ['|', "/", "-", "\\", "|", "/", "-", "|" ]
// set time increment to increase outside of the loop
let time = 100;
// loop through array of characters
for (let symbol of characters) {  
  //set timeout for time delay function
  setTimeout(() => {
    // used in place of console log to display characters over the same space
      process.stdout.write(`\r${symbol}   `);
    }, time);
    // iterate time through each loop
    time += 200;
};

