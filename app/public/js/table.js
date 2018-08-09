$("#update-information").on("click", function (event) {
    event.preventDefault();

    // Make a newChirp object
    var updatedSkill = {
        week: $("#updated-week").val().trim(),
        activity: $("#updated-activity").val().trim(),
        link: $("#updated-link").val().trim(),
        skill: $("#updated-skill").val().trim()
    };

    console.log(newSkill);

    $.ajax({
        method: "PUT",
        url: "/api/skills",
        data: skill
    }).then(function () {
        window.location.href = "/index";

    });

    // Empty each input box by replacing the value with an empty string
    $("#updated-week").val("");
    $("#updated-activity").val("");
    $("#updated-link").val("");
    $("#updated-skill").val("");
});




