///check off specific todos by clicking
///more lines of code
//$("li").click(function(){
//    $(this).css("color", "grey");
//    $(this).css("text-decoration", "line-through");


$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});


///click on X to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    ///validate "Enter" key pressed
    if (event.which === 13) {
        //        console.log("The 'Enter' Key Was Pressed!");
        /// grabbing new todo text input
        var todoText = $(this).val();
        $(this).val("");
        /// create a new li and create new ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});
