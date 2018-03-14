function compile(element, attrs){
    const metadata = {
        columns: [],
    };

    const columns = element.find("column");
    columns.each(function(){
       const column = $(this);

       const title = column.attr("title");
       const template = column.html();

       metadata.columns.push({
           title,
           template,
       })
    });

    element.empty();

    console.log(metadata);

    return function(scope, element, attrs){
        link(scope, element, attrs, metadata);
    }
}

function link(scope, element, attrs, metadata){
    console.log("link", metadata);
}

appModule.directive("grid", function(){
    return {
        restrict: "E",
        compile: compile,
    };
});
