const { join } = require('path');
const express = require('express');

module.exports = function (app) {
  return app.use(
    '/zoom',
    express.static(join(__dirname, '../node_modules/@zoomus/websdk/dist/lib'))
  );
};
