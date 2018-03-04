class PopupComponent {
    constructor(di, $element, $compile, $scope, compileService) {
        di.value("popupService", this);

        this.content = $element.find(".content");
        if(!this.content.length){
            throw new Error(".content was not found");
        }

        this.$compile = $compile;
        this.$scope = $scope;
        this.$element = $element;
        this.compileService = compileService;
        this.hostedElement = null;
        this.hostedScope = null;
    }

    show(tagName){
        this.clean();

        this.tagName = tagName;
        const linkFn = this.compileService.compile(tagName);
        this.hostedScope = this.$scope.$new();
        linkFn(this.hostedScope, (clone) => {
            this.content.append(clone);

            this.hostedElement = clone;
        });

        this.$element.addClass("active");
    }

    close(){
        this.clean();

        this.$element.removeClass("active");
    }

    clean(){
        if(this.hostedScope){
            this.hostedScope.$destroy();
            this.hostedScope = null;
        }

        if(this.hostedElement){
            this.hostedElement.remove();
            this.hostedElement = null;
        }
    }
}

appModule.component("appPopup", {
    controller: PopupComponent,
    templateUrl: "components/popup.component.html",
});

