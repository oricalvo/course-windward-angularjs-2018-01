class CompileService {
    constructor($compile) {
        this.$compile = $compile;
        this.cache = {};
    }

    compile(tagName){
        let compiledElement = this.cache[tagName];
        if(!compiledElement){
            const newElement = document.createElement(tagName);
            compiledElement = this.cache[tagName] = this.$compile(newElement);
        }

        return compiledElement;
    }
}

appModule.service("compileService", CompileService);

