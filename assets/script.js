//add the function here
//$("document").ready(function()) {
    //add code for the date on the top
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    //savedTasks
    var savedTasks = [];

    //Local Storage
    var checkLS = JSON.parse(localStorage.getItem("schedule"));
    if (checkLS) {
        checkLS.forEach(function(entry) {
            savedTasks.push(entry);
        });
        localStorage.setItem("schedule", JSON.stringify(savedTasks));
    };

    //past, present, future
    

//};