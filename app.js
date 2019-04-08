const debug = require('debug')('app');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

debug('bootstrapping application');

const config = require('./src/config');
const logger = require('./src/config/logger');
const routes = require('./src/routes');

const app = express();

app.use(morgan(config.env.HTTP_LOG_CONFIG, { stream: logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

module.exports = app;
