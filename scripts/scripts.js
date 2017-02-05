// Open external links in new Windows
$("[rel=external]").attr("target", "_external");

// Make the copyright date dynamic
$("footer time").html(function() {
    var date = new Date();
    return date.getFullYear();
});
