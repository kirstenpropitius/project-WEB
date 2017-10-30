function zien() {
    document.getElementById("duimpjeOmhoog").style.display = "none"
    document.getElementById("duimpjeOmlaag").style.display = "none"
    document.getElementById("likes").style.display = "block"

}
document.getElementById("duimpjeOmhoog").addEventListener("click", zien);
document.getElementById("duimpjeOmlaag").addEventListener("click", zien);
