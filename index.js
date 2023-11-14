const debug = require('debug')('minimal-debug-with-verbosity:index');

const chalk = require('chalk');

console.log(`DEBUG: [${process.env.DEBUG}]`);
console.log(`VERBOSITY: [${process.env.VERBOSITY}]`);

const verbosity = [
 'none',
 'info',
 'debug',
 'silly' 
].indexOf(process.env.VERBOSITY || 'none');

function log(msg, level = 'none', color) {
  const colorized = (typeof color !== 'undefined') ?
    chalk[color](msg) :
    msg;
  if (typeof DEBUG === 'undefined') { 
    console.log(colorized);
  }
  else if (verbosity >= level) { 
    debug(msg); 
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