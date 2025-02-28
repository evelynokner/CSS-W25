// global header & footer
$(document).ready(function(){
    $(function(){
        // loads  header & footer html documents in templates folder
        $("#header").load("./templates/header.html");
        $("#footer").load("./templates/footer.html");
    });
});