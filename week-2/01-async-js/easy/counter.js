// let i = 1;
// setInterval(() => {
//   console.clear();
//   console.log('Time elapsed: ' + i+' seconds.'); 
//   i++;
// }, 1000);

// const intervalId = setInterval(function () {
//   console.log("Executing this function every 2 seconds.");
// }, 2000);

// // Stop the interval after 10 seconds (10000 milliseconds)
// setTimeout(function () {
//   clearInterval(intervalId);
//   console.log("Interval stopped after 10 seconds.");
// }, 10000);


// clearTimeout(setInterval(function () {
//   console.log("This message appears every 2 seconds.");
// }, 2000));

 
setInterval(() => {
  console.clear();
  let dt = new Date();
  console.log("NOW: " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());
}, 1000);