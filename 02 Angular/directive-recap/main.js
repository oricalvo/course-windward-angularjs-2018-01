appModule.directive("border", function(){
    return {
        restrict: "A",
        compile: function(element, attrs) {
            console.log("border.compile");

            element.css("border", "solid black 2px");

            return function link(scope, element, attrs){
                console.log("border.link");
            }
        }
    };
});

appModule.directive("layout", function(){
    return {
        restrict: "A",
        compile: function(element, attrs) {
            const layout = attrs.layout;
            element.css("display", "flex");
            element.css("flex-direction", layout);
        }
    };
});

angular.bootstrap(document, [appModule.name]);
