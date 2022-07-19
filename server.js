let http = require('http');
let fs = require('fs');

let handleRequest = (_, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  fs.readFile('./index.html', null, function (error, payload) {
    if (error) {
      response.writeHead(404);
      respone.write(
        'Oooohh noooo, where the heck did I put that index.html file'
      );
    } else {
      response.write(payload);
    }
    response.end();
  });
};

http.createServer(handleRequest).listen(8008);
