let http = require('http');
let fs = require('fs');

const determineContentType = (contentType, resp, filePath) => {
  fs.readFile(filePath, null, (error, payload, filePath) => {
    resp.setHeader('Content-Type', contentType);

    if (error) {
      resp.writeHead(404);
      resp.write('Oooohh noooo, where the heck did I put that file');
    }

    resp.end(payload, 'utf-8');
  });
};

const server = (request, response) => {
  //this is either '/' or '/css/styles.css'...will need to update for images later;
  if (request.url === '/' || request.url === '/index.html') {
    determineContentType('text/html', response, './index.html');
  } else if (request.url === '/css/styles.css') {
    determineContentType('text/css', response, '/css/styles.css');
  }
};

http.createServer(server).listen(8008);
