const logger = require('morgan');

require('dotenv').config();
// connect to the database with AFTER the config vars are processed
require('./config/database');