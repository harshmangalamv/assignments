/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve) => {
    resolve();
  }, t);
}

function wait2(t) {
  return new Promise((resolve) => {
    resolve();
  }, t);
}

function wait3(t) {
  return new Promise((resolve) => {
    resolve();
  }, t);
}

function calculateTime(t1, t2, t3) {
  let t11 = new Date();
  let p1 = wait1(t1), p2 = wait2(t2), p3 = wait3(t3);
  while(Date.now() - t11 < Math.max(Math.max(t1, t2), t3)){
    
  }
  Promise.all([p1, p2, p3]).then(() => {
    // console.log(Date.now() - t11);
    return (Date.now() - t11);
  });
}

// console.log(calculateTime(3000, 1000, 2000));
module.exports = calculateTime;
