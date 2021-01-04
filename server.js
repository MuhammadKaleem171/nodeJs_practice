var express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')
var app = express();
const ConnectDB=require('./Connection')
var port = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
require('./routes')(app,{});

// start the server

ConnectDB();
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
// route our app


