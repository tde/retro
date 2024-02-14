const { Console } = require('node:console');

const args = process.argv.slice(2)
let mode = args[0]

const logger = new Console({
    stdout: process.stdout,
    stderr: process.stderr,
});

logger.log()