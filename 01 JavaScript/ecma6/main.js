main();

function main() {
    waitAndDo(1000).then(run);
}

function run() {
    console.log("run");
}

function waitAndDo(ms) {
    return delay(ms)
        .then(function() {
            return delay(2000);
            //console.log("Do");
        });
}

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();

            //reject(new Error("Ooops"));
        }, ms);
    });
}
