// import {
//   setInterval,
// } from 'timers/promises';

// const interval = 100;
// for await (const startTime of setInterval(interval, Date.now())) {
//   const now = Date.now();
//   console.log(now);
//   if ((now - startTime) > 1000)
//     break;
// }
// console.log(Date.now());

function Clock(){
  let date = new Date;
  //date.setTime(result_from_Date_getTime);

  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hour = date.getHours();
  this.time = `${hour}:${minutes}:${seconds}`
  
};


Clock.prototype.printTime = function() {
  console.log(this.time)
};
