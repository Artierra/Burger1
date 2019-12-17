//this file makes ajax calls all onclick and submit event

$(document).ready(function () {
    console.log('doc is ready')
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

        event.preventDefault();
        console.log("button clicked");
        var id = $(this).data("id");

        //send delete request
        $.ajax({
            url: `/api/burgers/${id}`,
            type: "DELETE",

        }).then(function (err, data) {
            location.reload()
            console.log("Burger has been deleted")
            console.log("err", err)
            console.log("data", data)
            // data: devouredState
        });
    });

});



//   $(".trashburger").on("click", function (event) {
//       event.preventDefault();
//       var
//           id = $(this).data("id"); //send delete request $.ajax({ type: "DELETE" , url: "/api/burgers/" + id
//   }).then(location.reload());
// function () {