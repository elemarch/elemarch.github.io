function find(base, slug) {
    return base[slug];
}

function findBy(base, key, value) {
    var values = [];

    for (var i=0, iLen=base.length; i<iLen; i++) {
        if (base[i][key] === value)
            values.push = base[i];
    }

    return values;
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function fillVars(table) {
    var entityName = getParameterByName('get');
    var entity = find(table, entityName);
    var list = document.getElementsByClassName("var");
    for (var i = 0; i < list.length; i++) {
        var element = list[i];
        var varname = element.className.substring(
            element.className.lastIndexOf("var-") + 4,
            element.className.lastIndexOf("%")
        );
        list[i].innerHTML = entity[varname];
    }
}