// Open external links in new Windows
$("[rel=external]").attr("target", "_external");

// Open Portfolio images in a light box
$("[rel=portfolio]").each(function(event){
    event.preventDefault();
});


// Make the copyright date dynamic
$("footer time").html(function() {
    var date = new Date();
    return date.getFullYear();
});
