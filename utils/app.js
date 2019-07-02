const express = require('express');
const app = express();
const server = require('http').createServer(app);

exports.app = app;
exports.server = server;