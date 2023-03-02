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
  this.printTime();
  let bindTick = this._tick.bind(this);
  window.setInterval(
    // call your function here
    bindTick, 1000);
};


Clock.prototype.printTime = function() {
  //return (`${this.hour}:${this.minutes}:${this.seconds}`);
  // console.log(`${this.hour % 24}:${this.minutes % 60}:${this.seconds % 60}`);
  console.log(`${this.hour}:${this.minutes}:${this.seconds}`);
  
};

Clock.prototype._tick = function () {
  // debugger
  this.seconds += 1;
  if (this.seconds === 60) {
    this.minutes++;
    this.seconds = 0;    
  };
  if (this.minutes === 60) {
    this.hour++;
    this.minutes = 0;
  };
  if (this.hour === 24) {
    this.hour = 0;
  };
  //return this.printTime();
  this.printTime();

};

const clock = new Clock();