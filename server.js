let http = require('http');
let fs = require('fs');

const server = (request, response) => {
  let filePath = `.${request.url}`;
  //this is either '/' or '/css/styles.css'...will need to update for images later;
  console.log(request.url);

  if (request.url === '/' || request.url === '/index.html') {
    filePath = './index.html';

    fs.readFile(filePath, null, (error, payload) => {
      response.setHeader('Content-Type', 'text/html');

      if (error) {
        response.writeHead(404);
        respone.write('Oooohh noooo, where the heck did I put that file');
      }

      response.end(payload, 'utf-8');
    });
  } else if (request.url === '/css/styles.css') {
    filePath = './css/styles.css';

    fs.readFile(filePath, null, (error, payload) => {
      response.setHeader('Content-Type', 'text/css');

      if (error) {
        response.writeHead(404);
        respone.write('Oooohh noooo, where the heck did I put that file');
      }

      response.end(payload, 'utf-8');
    });
  }
};

http.createServer(server).listen(8008);
