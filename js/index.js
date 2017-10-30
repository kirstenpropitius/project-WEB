var toev = document.querySelector('main img');
var eentje = document.querySelector('.boek');


function show() {
    toev.classList.toggle('toevoegen');
    eentje.classList.toggle('toegevoegd');

}

toev.addEventListener('click', show);
eentje.addEventListener('click', show);



//var duimpjeOmhoog = document.getElementById("duimpjeOmhoog");


var balk = document.getElementById("balk");
var vink = document.getElementById("vink");


function balkje() {
    balk.classList.toggle("weg");
    vink.style.display = "block";

}

balk.addEventListener('click', balkje);
vink.addEventListener('click', balkje);
