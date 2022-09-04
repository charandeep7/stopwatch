"use strict";

var select = document.querySelectorAll('select');
var btn = document.querySelectorAll('button');
var h3 = document.querySelector('.image-card').querySelector('h3');
console.log(h3);

function createOptions() {
  for (var i = 0; i < 60; i++) {
    var minute = document.createElement('option');
    minute.innerText = i < 10 ? "0".concat(i) : i;
    select[1].appendChild(minute);
    var second = minute.cloneNode(true);
    select[2].appendChild(second);
    if (i < 24) select[0].appendChild(minute.cloneNode(true));
  }
}

createOptions();

function readTime() {
  var hour = +select[0].value * 60 * 60;
  var minute = +select[1].value * 60;
  var second = +select[2].value;
  var totalSecond = hour + minute + second;
  return totalSecond;
}

btn[0].addEventListener('click', function () {
  var totalSecond = readTime();
  var id;

  if (isNaN(totalSecond)) {
    var time = new Date().getTime();
    id = setInterval(function () {
      var newTime = new Date().getTime();
      ;
    }, 0);
  } else {
    console.log(totalSecond);
  }
});