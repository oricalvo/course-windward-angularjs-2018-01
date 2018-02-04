export function log(ident, message) {
    let prefix = "";
    for(let i=0; i<ident*2; i++) {
        prefix += " ";
    }

    console.log(prefix + message);
}