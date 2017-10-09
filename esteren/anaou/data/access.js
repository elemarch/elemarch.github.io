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

function generateFacts(slug) {
    var factList = "";
    var i = 0;
    facts.forEach(function (fact) {
        if (fact.characters.includes(slug) || fact.places.includes(slug)) {
			var hash = i.toString(16);
            factList += "<li>";
			factList += '<span type="button" ' +
                'class="btn btn-default btn-xs" ' +
                'data-toggle="collapse" ' +
                'data-target="#' + hash + '">' +
                '<i class="fa fa-plus" aria-hidden="true"></i>' +
                '</span>';
			factList += '<span>'+ fact.title + '</span>';
			factList += '<div id="' + hash + '" class="collapse fact"><p>' + fact.body + '</p>';
			factList += '<ul class="tag_list">';
			fact.characters.forEach(function (c) {
				var chara = find(characters, c);
				factList += '<a href="index.html?t=characters&get=' + c.toString() + '"><li>' + chara.name + '</li></a>';
			});
			fact.places.forEach(function (p) {
				var place = find(places, p);
				factList += '<a href="index.html?t=places&get=' + p.toString() + '"><li>' + place.name + '</li></a>';
			});
            factList += '</ul></div>';
			factList += "</li>";
			i++;
        }
	});
    return factList;
}

function cascadePlace(slug) {
    var place;
    var place_cascade = [];
    while (slug) {
        place = find(places, slug);
        slug = place.is_in;

    }
}