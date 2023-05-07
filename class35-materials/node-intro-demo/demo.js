/*
const http = require('http')
const fs = require('fs')
const { File } = require('buffer')
http.createServer((req, res) => {
  fs.readFile('demofile.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
}).listen(8000);
*/

const http = require("http");
const fs = require("fs");
const {File} = require("buffer");

http.createServer((req,res) => {
  fs.readFile("demofile.html", (err, data) => {
    if (!err) {
      res.writeHead(200,  {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  })
}).listen(8000);

//run node application
//'Hello World' will be displayed on localhost:8000 in browser

//step-1: create server that can listen to port and respond
//step-2: read html file
//step-3: send html file to browser on request

