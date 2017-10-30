//BRON: Alex Settels
var duimpjeOmhoog = document.getElementById("duimpjeOmhoog");
var duimpjeOmlaag = document.getElementById("duimpjeOmlaag");
var likes = document.getElementById("likes");

function zien() {
    duimpjeOmhoog.classList.toggle("weg");
    duimpjeOmlaag.classList.toggle("weg");
    likes.style.display = "block";

}
duimpjeOmhoog.addEventListener("click", zien);
duimpjeOmlaag.addEventListener("click", zien);
