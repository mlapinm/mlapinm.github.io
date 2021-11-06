let objs02 = [
 {
  "name": "1 Meet the Node console",
  "code": [
   "myApp.js",
   "var express = require('express');",
   "var app = express();",
   "",
   "console.log(\"Hello World!\")",
   ""
  ]
 },
 {
  "name": "2 Start a Working Express Server",
  "code": [
   "var express = require('express');",
   "var app = express();",
   "",
   "app.get('/', (req, res) => {",
   "  // console.log(\"Hello Express\")",
   "  res.send(\"Hello Express\")",
   "})",
   ""
  ]
 },
 {
  "name": "3 Serve an HTML File",
  "code": [
   "var express = require('express');",
   "var app = express();",
   "",
   "app.get('/', (req, res) => {",
   "  res.sendFile(__dirname + \"/views/index.html\")",
   "})",
   ""
  ]
 },
 {
  "name": "4 Serve Static Assets",
  "code": [
   "<link rel=\"stylesheet\" href=\"/public/style.css\">",
   "",
   "var express = require('express');",
   "var app = express();",
   "",
   "",
   "app.use(\"/public\", express.static(__dirname + \"/public\"))",
   "",
   "",
   "app.get('/', (req, res) => {",
   "  res.sendFile(__dirname + \"/views/index.html\")",
   "})",
   ""
  ]
 },
 {
  "name": "5 Serve JSON on a Specific Route",
  "code": [
   "app.get('/json', (req, res) => {",
   "  res.json({\"message\": \"Hello json\"})",
   "  console.log(\"json\")",
   "})",
   ""
  ]
 },
 {
  "name": "6 Use the .env File",
  "code": [
   "app.get('/json', (req, res) => {",
   "  if(process.env.MESSAGE_STYLE == 'uppercase' ){",
   "    res.json({\"message\": \"HELLO JSON\"})",
   "  }else{",
   "    res.json({\"message\": \"Hello json\"})",
   "  }",
   "})",
   ""
  ]
 },
 {
  "name": "7 Implement a Root-Level Request Logger Middleware",
  "code": [
   "> node server.js",
   "",
   "Node is listening on port 3000...",
   "*",
   "GET / - 35.191.15.221",
   "*",
   "*",
   "GET / - 35.191.15.221",
   "*",
   "*",
   "GET /json - 35.191.15.160",
   "https://www.freecodecamp.org",
   "*",
   "GET /json - 35.191.19.114",
   "",
   "app.use('/', (req, res , next) => {",
   "  console.log(req.method + ' ' ",
   "  +  req.path + ' - '",
   "  + req.ip )",
   "  next()",
   "})",
   "",
   ""
  ]
 },
 {
  "name": "8 Chain Middleware to Create a Time Server",
  "code": [
   "app.get('/now', (req, res, next) => {",
   "  let time = Date().toString()",
   "  req.time = time",
   "  next()",
   "}, (req, res) => {",
   "  res.json({\"time\": req.time})",
   "})",
   ""
  ]
 },
 {
  "name": "9 Get Route Parameter Input from the Client",
  "code": [
   "https://boilerplate-express.mikhaillapin.repl.co/word/echo",
   "{\"echo\":\"word\"}",
   "",
   "app.get('/:word/echo', (req, res) => {",
   "  let word = req.params.word",
   "  res.json({\"echo\": word})",
   "})",
   "",
   ""
  ]
 },
 {
  "name": "10 Get Query Parameter Input from the Client",
  "code": [
   "route_path: '/name'",
   "actual_request_URL: '/name?first=John&last=Smith'",
   "req.query: {first: 'John', last: 'Smith'}",
   "",
   "https://boilerplate-express.mikhaillapin.repl.co/name?first=John&last=Smith",
   "",
   "{\"name\":\"John Smith\"}",
   "",
   "",
   "app.route('/name')",
   ".get((req, res) => {",
   "  let firstname = req.query.first",
   "  let lastname = req.query.last",
   "  res.json({\"name\": firstname + ' ' + lastname})",
   "}).post((req, res) => {",
   "",
   "})",
   "",
   ""
  ]
 },
 {
  "name": "11 Use body-parser to Parse POST Requests",
  "code": [
   "var bodyParser = require('body-parser');",
   "",
   "app.use(bodyParser.urlencoded({extend: false}))",
   "",
   "app.route('/name')",
   ".post(bodyParser({extended: false}), (req, res)=> {",
   "  console.log(req.body)",
   "})",
   ""
  ]
 },
 {
  "name": "12 Get Data from POST Requests",
  "code": [
   "",
   "Node is listening on port 3000...",
   "*",
   "GET / - 35.191.8.15",
   "*",
   "https://d3d782f3-d098-4dbf-b605-1c10ff65a706.id.repl.co",
   "{ first: 'John', last: 'Doe' }",
   "https://www.freecodecamp.org",
   "{ first: 'Mick', last: 'Jagger' }",
   "https://www.freecodecamp.org",
   "{ first: 'Keith', last: 'Richards' }",
   "",
   "",
   "app.route('/name')",
   ".post(bodyParser({extended: false}), (req, res)=> {",
   "  console.log(req.body)",
   "  let o = req.body",
   "  res.json({\"name\": o.first + ' ' + o.last})",
   "})",
   "",
   "",
   "",
   ""
  ]
 }
]

