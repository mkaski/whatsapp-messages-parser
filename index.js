'use strict';

var fs = require('fs');
var readline = require('readline');

function parseFile(filename, callback){

  var instream = fs.createReadStream(filename);

  var lines = [];

  instream.on('error', function (error){
    if (error.code === 'ENOENT'){
      error.message = 'Error: file doesn\'t exist.';
    }
    return callback(null, error);
  });

  var rl = readline.createInterface({
    input: instream,
    terminal: false
  });

  // regex for a valid message line
  var messageRegex = /:+.*- .*/g;

  rl.on('line', function(line){

    // if line has no sender data (message continues after line break) append it to the last message with a \n
    if (!line.match(messageRegex)) {
      lines[lines.length-1].message += "\n" + line;
    }
    else {
      lines.push(parseLine(line));
    }
  });

  rl.on('close', function(){
    callback(lines);
  });
}

// Split each line into an object containing time, sender and message
function parseLine(line) {

  // Remove empty lines
  if(!line || !line.length) {
    return;
  }

  // Substring details based on separators
  var date = line.substr(0,line.indexOf(' -'));
  var sender, message;

  // If there is no sender, label message sender as system
  if (line.indexOf(': ') === -1) {
    sender = 'system';
    message = line.substr(line.indexOf('- ')+2);
  }
  // Else substring sender and message
  else {
    sender = line.substr(line.indexOf('- ')+2, line.indexOf(': ')-line.indexOf('- ')-2);
    message = line.substr(line.indexOf(': ')+2);
  }

  return {
    date: date,
    sender: sender,
    message: message
  };

}

module.exports = function(filename){
  return parseFile.apply(this, arguments);
};
