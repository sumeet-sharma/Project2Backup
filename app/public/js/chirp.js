/* global moment */

// When user clicks add-btn
$("#add-information").on("click", function (event) {
    event.preventDefault();

    // Make a newChirp object
    var newSkill = {
        week: $("#week").val().trim(),
        activity: $("#activity").val().trim(),
        link: $("#link").val().trim(),
        skill: $("#skill").val().trim()
    };

    console.log(newSkill);

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newSkill)
        // On success, run the following code
        .then(function () {

            $("#database-info").prepend("<tr><td>" + newSkill.week + "</td><td>" + newSkill.activity + "</td><td>" +
                newSkill.link + "</td><td>" + newSkill.skill + "</td></tr>");

        });

    // Empty each input box by replacing the value with an empty string
    $("#week").val("");
    $("#activity").val("");
    $("#link").val("");
    $("#skill").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function (data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            $("#database-info").prepend("<tr><td>" + data[i].week + "</td><td>" + data[i].activity + "</td><td>" +
                data[i].link + "</td><td>" + data[i].skill + "</td></tr>");            

        }

    }

});
