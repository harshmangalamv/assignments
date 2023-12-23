setInterval(() => {
  console.clear();
  let dt = new Date();
  console.log("NOW: " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());
}, 1000);