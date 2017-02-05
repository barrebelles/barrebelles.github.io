// Make the copyright date dynamic
$("footer time").html(function(e) {
    return Date.now().getFullYear();
});
