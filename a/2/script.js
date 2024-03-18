const x = document.getElementById("x");

x.addEventListener("click", function(){
    var newWindow = window.open('https://www.example.com/', '_blank');
    window.onload = newWindow.document.write(`<h1>New Page Opened Successfully</h1>`);
});
