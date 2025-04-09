// global header & footer
$(document).ready(function(){
    $(function(){
        // loads header & footer html documents in templates folder
        $("#header").load("./templates/header.html");
        $("#footer").load("./templates/footer.html");
    });
});
/* 
TO-DO: 
- implement a header that stays at top of page when scrolling down
- on individual product pages, be able to select one of the small images below the main image, and display the selected image as the main image
*/