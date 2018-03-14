function compile(element, attrs, $compile){
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

    const table = angular.element("<table></table>");
    element.append(table);

    const thead = angular.element("<thead></thead>");
    table.append(thead);

    const tbody = angular.element("<tbody></tbody>");
    table.append(tbody);

    const tr = angular.element("<tr></tr>");
    thead.append(tr);

    for(const column of metadata.columns) {
        const td = angular.element("<td></td>");
        td.text(column.title);
        tr.append(td);

        column.compiledTemplate = $compile(column.template);
    }

    console.log(metadata);

    return function(scope, element, attrs){
        link(scope, element, attrs, metadata);
    }
}

function link(scope, element, attrs, metadata){
    console.log("link", metadata, scope, attrs);

    const tbody = element.find("tbody");
    let gridScope = null;

    let watchId = 0;

    scope.$watch(attrs.data, function(data, oldValue){
        ++watchId;

        if(gridScope) {
            gridScope.$destroy();
        }
        tbody.empty();

        gridScope = scope.$new();

        console.log("watch", data);

        for(let index=0; index<data.length; index++) {
            const row = data[index];

            const tr = angular.element("<tr></tr>");
            tbody.append(tr);

            for(const column of metadata.columns) {
                const td = angular.element("<td></td>");
                tr.append(td);

                const rowScope = gridScope.$new();
                rowScope[attrs.item] = row;
                rowScope.$index = index;
                rowScope.memTag = new MemoryTag(watchId + ".grid.rowScope." + index + "." + column.title);
                column.compiledTemplate(rowScope, function(clone){
                    td.append(clone);
                });
            }
        }
    });
}

class MemoryTag {
    constructor(name){
        this.name = name;
    }
}

appModule.directive("grid", function($compile){
    return {
        restrict: "E",
        compile: function(element, attrs){
            return compile(element, attrs, $compile);
        },
        //terminal: true,
    };
});

appModule.directive("test", function(){
    return {
        compile: function(){
            console.log("test.compile");
        }
    }
})