const ori = {
    id: 1,
    name: "Ori"
};

var originalJSON = window.JSON;
//if(window.JSON == "undefined") {
    window.JSON = {
        stringify: function() {
            console.log("BEFORE");

            originalJSON.stringify()

            console.log("AFTER");
        }
    }
//}

const str = JSON.stringify(ori);

console.log(str);