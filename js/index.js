var toev = document.querySelector('main img');
var eentje = document.querySelector('.boek');


function show() {
    toev.classList.toggle('toevoegen');
    eentje.classList.toggle('toegevoegd');

}

toev.addEventListener('click', show);
eentje.addEventListener('click', show);

//
//var toevoegen = document.querySelector('div img');
//var likes = document.querySelector('.like');
//
//function zien() {
//    toevoegen.classList.toggle('toevoegen');
//   likes.classList.toggle('show');
//}

//toevoegen.addEventListener('click', zien);

//
//var verdwijn = document.getElementById('likes');
//var show = document.querySelector('.foto');
//
//
//function zien() {
//    verdwijn.classList.toggle('weg');
//    show.classList.toggle('show');
//
//}
//
//verdwijn.addEventListener('click', zien);
//show.addEventListener('click', zien);
