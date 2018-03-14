import {appModule} from "../app.module";

export function TooltipDirective(){
    console.log("tooltip");

    return {
        scope: {},
        restrict: "A",
        compile: function(element, attrs) {
            console.log("tooltip.compile");

            console.log(element);

            return function link(scope, element, attrs){
                console.log("tooltip.link", scope, attrs);

                const expr = attrs["tooltip"];

                scope.$watch(expr, function(newValue, oldValue) {
                    console.log("tooltip.value", newValue);
                });

                element.on("click", function(){
                    console.log("click");
                });
            }

            //element.css("border", "solid black 5px");
        }
    };
}

appModule.directive("tooltip", TooltipDirective);
