// for AWS: zip -r index.zip *

const express = require("express");
const routes = require('./routes.js')

const app = express();
routes(app);

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});