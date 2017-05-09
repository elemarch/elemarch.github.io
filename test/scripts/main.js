var stock = {
    neutral: 0,
    white: 0,
    blue: 0,
    black: 0,
    red: 0,
    green: 0
};

var space = {
    neutral: 10,
    white: 10,
    blue: 10,
    black: 10,
    red: 10,
    green: 10
};

var mana_prod = {
    white: {
        base_producer: {power: 0.1, qtt: 0}
    },
    blue: {
        base_producer: {power: 0.1, qtt: 0}
    },
    black: {
        base_producer: {power: 0.1, qtt: 0}
    },
    red: {
        base_producer: {power: 0.1, qtt: 0}
    },
    green: {
        base_producer: {power: 0.1, qtt: 0}
    },
    neutral: {
        base_producer: {power: 0.1, qtt: 0}
    }
};

var baseland = {
    
};

setInterval(function(){
    var add;
    for (var mana in mana_prod) {
        add = 0;
        for (var prod in mana_prod[mana]) {
            var obj = mana_prod[mana][prod];
            add += obj.power * obj.qtt;
        }
        increment(mana, add);
    }
}, 1000);

function hasSpace(elmnt, stock) {
    for (var prop in space) {
        if (prop == elmnt)
            return(space[elmnt] - stock);
    }
    return 0;
}

function increment(elmnt, qtt) {
    if (typeof qtt == 'undefined')
        qtt = 1;
    if (stock[elmnt] + qtt < space[elmnt]) {
        stock[elmnt] += qtt;
    }
    else
        stock[elmnt] = space[elmnt];
    var elem = document.getElementById(elmnt);
    elem.innerHTML = Math.floor(stock[elmnt]);
    elem.setAttribute("aria-valuenow", stock[elmnt]);
    elem.style.width = ((stock[elmnt] / space[elmnt]) * 100) + "%";
}
