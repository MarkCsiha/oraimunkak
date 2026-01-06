/*
	kell 5 kép, 1-től 5-ig dobókockával
	az adott kép egyenlő lesz a pontok számával, tehát ha olyan kép van amin 2 pont van, azt egy változóban 2-ként mentjük el, pl. if-el
	ezután bekérjük a felhasználótól, hogy mennyi a dobások összege

*/

const doboMin = 2;
const doboMax = 5;

function newGame() {
    score=0;
    items=rnd(doboMin, doboMax);
    message
}