//BRON: Alex Settels, www.w3schools.com/js/

//Eentje bij de download button//
var vergroten = document.querySelector('main img');
var eentje = document.querySelector('.boek');


function show() {
    vergroten.classList.toggle('toevoegen');
    eentje.classList.toggle('toegevoegd');

}

vergroten.addEventListener('click', show);
eentje.addEventListener('click', show);



//Laadbalkje in de dropdown//
var balk = document.getElementById("balk");
var vink = document.getElementById("vink");


function balkje() {
    balk.classList.toggle("weg");
    vink.style.display = "block";

}

balk.addEventListener('click', balkje);
vink.addEventListener('click', balkje);
