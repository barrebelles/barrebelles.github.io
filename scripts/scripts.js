// Make the copyright date dynamic
$("footer time").html(function() {
    var date = new Date();
    return date.getFullYear();
});
