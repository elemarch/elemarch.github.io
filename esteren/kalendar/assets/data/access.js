// Retrieve all events from a day
function loadEvents(day) {
    var event_list = [];

    events.forEach( function (event){
        if (event.date.day === day) {
            event_list.push(event);
        }
    });

    return event_list;
}

//date format shall be string "yyy-mm-dd"
function loadNext(date) {
    var split_date = date.split('-');
    var year  = parseInt(split_date[0]);
    var month = parseInt(split_date[1]);
    var day   = parseInt(split_date[2]);

}