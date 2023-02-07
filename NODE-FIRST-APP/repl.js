const repl = require('repl');
// a Unix style prompt
// const local = repl.start('$ '); // Asking the REPL session to start with '$' instead of the default '>'
const local = repl.start(); 
local.on('exit', () => {
    console.log('exiting repl');
    process.exit();
});