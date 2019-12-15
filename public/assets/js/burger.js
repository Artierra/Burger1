//this file makes ajax calls all onclick and submit event

$(function () {
    $(".burgSubmit").on("click", function (event) {
        event.preventDefault();
        console.log("form is being created");

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0,
        };
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("added new burger");
            location.reload();
        });
    });

    $(".eatburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT", //technically this should be PATCH
            data: devouredState
        }).then(function () {
            console.log("Burger has been devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function (event) {
        console.log("button clicked");
        event.preventDefault();
        var id = $(this).data("id");

        //send delete request
        $.ajax({
            url: `/api/burgers/${id}`,
            type: "DELETE",
            // data: devouredState
        }).then(function () {
            console.log("Burger has been deleted");
            (location.reload());
        });

    });
})