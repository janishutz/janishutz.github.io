$(document).ready(function() {
$("#ContentToInclude").load("/menu.html");
$("#Footer").load("/footer.html");
    $(".linkbutton").mouseenter(function() {
        $(this).stop()
        $(this).animate({"border-radius": "0px", "background-color": "darkblue"}, 200)
    })
    $(".linkbutton").mouseleave(function() {
        $(this).stop()
        $(this).animate({"border-radius": "20px", "background-color": "rgba(0,0,0,0)"}, 200)
    })
    $(".textlink").mouseenter(function() {
        $(this).stop()
        $(this).animate({"color": "darkblue", "font-size": "120%"}, 200)
    })
    $(".textlink").mouseleave(function() {
        $(this).stop()
        $(this).animate({"color": "black", "font-size": "100%"}, 200)
    })
    setTimeout(highlightLocation, 200)
});

function highlightLocation () {
    let pagename = $(location).attr('pathname')
    if (pagename.slice(0, 8) == "/project") {
        $('#projects').css("background-color", "darkblue")
    } else if (pagename.slice(0, 6) == "/about" || pagename == "/privacypolicy.html") {
        $('#about').css("background-color", "darkblue")
    } else if (pagename == "/" || pagename == "/index.html") {
        $('#home').css("background-color", "darkblue")
    } else if (pagename == "/support.html") {
        $('#support').css("background-color", "darkblue")
    }
}