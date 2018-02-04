main();

async function main() {
    try {
        const before = new Date();

        const res = await Promise.all([
            delay(1000),
            delay(2000)
        ]);
        console.log(res);

        const after = new Date();

        run();

        console.log(after - before);
    }
    catch(err) {
        console.log("ERROR: " + err.message);
    }
}

function run() {
    console.log("run");

    throw new Error("Error inside run");
}

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(42);

            reject(new Error("Ooops"));
        }, ms);
    });
}
