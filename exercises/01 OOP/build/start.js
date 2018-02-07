const {spawn} = require("./helpers");
const open = require("open");

main();

async function main() {
    try {
        await spawn("node", ["node_modules/webpack/bin/webpack.js"]);

        await spawn("node", ["node_modules/http-server/bin/http-server", "-p", "3000"], {
            dontWait: true
        });

        open("http://localhost:3000/index.html");
    }
    catch(err) {
        console.log(err);
    }
}




