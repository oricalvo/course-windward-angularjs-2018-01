function createLogger(name) {
    return {
        log: console.log.bind(console, name + ">"),
    };
}
