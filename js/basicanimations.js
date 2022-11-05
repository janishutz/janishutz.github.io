$(document).ready(function() {
    $("#ContentToInclude").load("/menu.html");
    $(".linkbutton").mouseenter(function() {
        $(this).animate({"border-radius": "0px", "background-color": "darkblue"}, 200)
    })
    $(".linkbutton").mouseleave(function() {
        $(this).animate({"border-radius": "20px", "background-color": "rgba(0,0,0,0)"}, 200)
    })
    $(".textlink").mouseenter(function() {
        $(this).animate({"color": "darkblue", "font-size": "120%"}, 200)
    })
    $(".textlink").mouseleave(function() {
        $(this).animate({"color": "black", "font-size": "100%"}, 200)
    })
});