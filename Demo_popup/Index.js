
function showPopup() {
    var overlay = document.querySelector(".overlay");
    var popup = document.querySelector(".popup");
    overlay.style.display = "block";
    popup.style.display = "block";
}

function closePopup() {
    var overlay = document.querySelector(".overlay");
    var popup = document.querySelector(".popup");
    overlay.style.display = "none";
    popup.style.display = "none";
}