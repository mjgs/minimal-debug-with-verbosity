const debug = require('debug')('minimal-debug-with-verbosity:index');

const chalk = require('chalk');

console.log(`DEBUG: [${process.env.DEBUG}]`);
console.log(`VERBOSITY: [${process.env.VERBOSITY}]`);

function log(msg, level = 'none', color) {
  const verbosities = ['none','info','debug','silly'];
  const verbosity = verbosities.indexOf(level || 'none');
  const colorized = (typeof color !== 'undefined') ?
    chalk[color](msg) :
    msg;
  if (typeof DEBUG === 'string') { 
    if (verbosity >= level) {
      debug(msg);
    } 
  }
  else{
    console.log(colorized);
  }
}

log('hello');
log('hello 1', 'none');
log('hello 2', 'info');
log('hello 3', 'debug');
log('hello 4', 'silly');

log('hello');
log('hello 1', 'none', 'cyan');
log('hello 2', 'info', 'yellow');
log('hello 3', 'debug', 'blue');
log('hello 4', 'silly', 'red');