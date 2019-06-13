'use strict'

let controller = require('./controller.js');

module.exports = function (app) {
  app.route("/node/:node/time/:time")
    .get(controller.nodeAndTime)
}
