"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _today = _interopRequireDefault(require("../cmds/today.js"));

var error = require('./utils/error');

var minimist = require('minimist');

var args = minimist(process.argv.slice(2));
var cmd = args._[0] || 'help';

if (args.version || args.v) {
  cmd = 'version';
}

if (args.help || args.h) {
  cmd = 'help';
}

switch (cmd) {
  case 'today':
    (0, _today["default"])(args);
    break;

  case 'version':
    require('../cmds/version')(args);

    break;

  case 'help':
    require('../cmds/help')(args);

    break;

  case 'forecast':
    require('../cmds/forecast')(args);

    break;

  default:
    error("\"".concat(cmd, "\" is not a valid command!"), true);
}

