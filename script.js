const x = document.getElementById("x");

x.addEventListener("click", function(){
    var newWindow = window.open('https://www.google.com', '_blank');

    newWindow.onload = function() {
        newWindow.document.write(`<script>alert("hello")</script>`);
    };
});