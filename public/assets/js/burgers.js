$(function(){

    $(".eat-btn").on("click", function(event){

        console.log("button clicked");
        var id = $(this).data("id");

        var burgerToUpdate = {id: id};

        $.ajax("/api/update/" + id,
            {
                type: "PUT",
                data: burgerToUpdate
            }
        ).then(function(){

            location.reload();
        });
    });

    $(".create-form").on("submit", function(event){

        event.preventDefault();

        console.log("submit clicked");

        var newBurg = {burger_name: $("#burg").val().trim()}

        $.ajax("/api/new", 
            {
                type: "POST",
                data: newBurg
            }
        ).then(function(){
            console.log("Burger added")

            location.reload();
        });
    })
})