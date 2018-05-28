const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const path = require('path');
app.use(express.static(path.join(__dirname, './Weather/dist/Weather')));

app.listen(8000, function() {
    console.log("listening on port 8000");
});