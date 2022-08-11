let shots = 1;
let startTime = 0;
// console.log(typeof(startTime));

function start(startTime) {

}

const gun = document.querySelector('#luxe');
gun.addEventListener('click', function(e) {
  // console.log(e);
  // console.log(e.timeStamp);
  
  // console.log(startTime);
  if (startTime > 0 && e.timeStamp < (startTime + 10000)) {
    shots++;
  }
  console.log(shots);
  
  if (startTime === 0) {
    startTime = e.timeStamp;
  } else {return;}
  
});