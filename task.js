const fs = require("fs");
const chalk = require('chalk'); // Terminal string styling done right
const log = console.log;

const watchOptions = {
    persistent: true,
    recursive: true,
    encoding: 'utf-8'
};

const folder = './test';

// make checking directory as a promise object
const checkDir = () => {
    return new Promise(function (resolve, reject) {
        fs.stat(folder, (err, stats) => {
            if (err) {
                log(chalk.red(err));
                log(chalk.yellow("Event: Create directory"));

                fs.mkdirSync(folder);

                resolve(stats);
            } else {
                log(chalk.green('Event: Read directory'));

                resolve(stats);
            }
        })
    });
}

const watchDir = () => {
    return new Promise(function (resolve, reject) {
        fs.watch(folder, watchOptions, (event, fileName) => {
            log(chalk.yellow("Event: " + event));
            log(chalk.green(fileName + "\n"));

            resolve(event);
        });
    });
}

// Begin promise chain
checkDir()
.then(watchDir)
.catch(function (reason) {
    log(reason);
});
