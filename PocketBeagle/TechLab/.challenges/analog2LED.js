#!/usr/bin/env node
var b = require('bonescript');
var pin = 'P1_19';

console.log('Hit ^C to stop');
doAnalogRead();

function printStatus(err, x) {
  if(err) {console.log('Got error: ' + err); return;};
  process.stdout.write(pin + ': ' + (x*100).toFixed(1) +
    '%, ' + (1.8*x).toFixed(3) + 'V   \r');
  setTimeout(doAnalogRead, 100);
  
  if(x > 0.5) {
    b.digitalWrite("USR3", 1);
  } else {
    b.digitalWrite("USR3", 0);
  }
}

function doAnalogRead() {
  b.analogRead(pin, printStatus);
}