//check of specific to-do by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");

// alternative
    // //if li is gray
    // if ($(this).css("color") === "rgb(128, 128, 128)") {

    //     //turn it black
    //     $(this).css({
    //         color: "white",
    //         textDecoration: "none",
    //     });
    // }
    // //else
    // else {
    //     //turn is gray
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through",
    //     });
    // }


});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        //grabing new to-do list;
        var todotext = $(this).val();
        $(this).val("");
        //create a new li
        $("ul").append("<li><span><i class='far fa-trash-alt'></i> </span>"+ todotext +"</li>");
    }
});

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
});