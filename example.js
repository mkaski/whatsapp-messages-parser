// Example: write data to json file

var fs = require('fs');
var whatsappMessagesParser = require('./');

whatsappMessagesParser('test/log.txt', function(messages, err){

  if (err) {
    return console.log(err);
  }

  // write to json file
  fs.writeFile('output.json', JSON.stringify(messages, null, 2), function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log('File saved');
  });

});