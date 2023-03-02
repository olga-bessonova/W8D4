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

  this.seconds = date.getSeconds();
  this.minutes = date.getMinutes();
  this.hour = date.getHours();
  // this.time = `${this.hour}:${this.minutes}:${this.seconds}`
  
};


Clock.prototype.printTime = function() {
  return (`${this.hour}:${this.minutes}:${this.seconds}`);
};

Clock.prototype._tick = function () {
  this.seconds += 1;
  return this.printTime();
}