$(document).ready(function() {
    $("#ContentToInclude").load("/menu.html");
    $(".linkbutton").mouseenter(function() {
        $(this).animate({"border-radius": "0px"}, 200)
    })
    $(".linkbutton").mouseleave(function() {
        $(this).animate({"border-radius": "20px"}, 200)
    })
    $(".textlink").mouseenter(function() {
        $(this).animate({"color": "darkblue", "font-size": "120%"}, 200)
    })
    $(".textlink").mouseleave(function() {
        $(this).animate({"color": "black", "font-size": "100%"}, 200)
    })
});