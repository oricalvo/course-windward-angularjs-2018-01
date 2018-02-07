const child_process = require("child_process");

function exec(command) {
    return new Promise((resolve,reject)=> {
        child_process.exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(new Error("Command: " + command + " failed with error code " + error.code));
                return;
            }

            resolve();
        });
    });
}

function spawn(command, args, options) {
    return new Promise((resolve,reject)=> {
        const handle = child_process.spawn(command, args, {
            stdio: "inherit",
        });

        if(options && options.dontWait) {
            resolve();
            return;
        }

        handle.on("close", function (code) {
            if (code != 0) {
                reject(new Error("Command: " + command + " failed with error code " + code));
                return;
            }

            resolve();
        });
    });
}

exports.exec = exec;
exports.spawn = spawn;
