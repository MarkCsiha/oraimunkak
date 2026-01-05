// globális állandók, változók
let score=items=0;	// pontszám és ölések darabszáma
let myInterval;		// időzítés
let speed=2000;		// időzítéshez ezredmásodperc
const windowWidth=window.innerWidth-50;	// böngésző belső szélessége képpontban
const windowHeight=window.innerHeight-100;	// böngésző belső magassága képpontban
const rabbitWidth=50;		// egy karakter szélessége
const rabbitHeight=100;		// egy karakter magassága
const rabbitMin=2;			// nyuszik minimum darabszáma
const rabbitMax=5;			// nyuszik maximum darabszáma
const sound=new Audio("boing.mp3");

// általános véletlenszám generáló függvény (tól,ig)
function rnd(from,to) {
	return from+Math.floor(Math.random()*(to-from+1));
}

// alapbeállítások új játék indításakor
/*
	ponszám nullázása	
	gomb eltüntetése	
	nyuszi darabszámának generálása
	nyuszi darabszám kiírása
	nyuszik létrehozása - put()
	nyuszik elrendezése - jump()
	időzítés(elrendzésre) indítása
*/
function newGame() {
	score=0;
	game.style.display="none";
	items=rnd(rabbitMin,rabbitMax);
	message.innerHTML="Lőjj le <span id='rabbits'>"+items+"</span> ellenséget!";
	put();
	jump();
	myInterval=setInterval('jump()',speed);
}


// nyuszik létrehozása
/*
	ciklus (i=0-tól, darabszám-1-ig, egyesével)
		egy nyuszikép megadása stílus, id és onclick paraméterrel
*/
function put() {
	playground.innerHTML="";
	for (i=0; i<(items); i++) { 
		playground.innerHTML+="<img style='display:block;' src='fortnite-fortnite-danc.gif' id='"+i+"' onclick='newScore(this)'>";
	}
}

// nyuszik elrendezése
/*
	alapértékek beállítása (mettől meddig lehet arrébb rakni egy nyuszit)
	ciklus (i= 0-tól, darabszám-1-ig, egyesével)
		nyuszi[i] kép beazonosítása
		nyuszi helye balról véletlenszerűen
		nyuszi helye fentről véletlenszerűen
*/
function jump() {
	let rabbitTopFrom=100; // ez a szám függ a képernyő tetején lévő kiírásoktól
	let rabbitTopTo=windowHeight-rabbitHeight;
	let rabbitLeftFrom=0;
	let rabbitLeftTo=windowWidth-rabbitWidth;
	
	for (i=0; i<(items); i++) {
		rabbit=document.getElementById(i);
		rabbit.style.left=rnd(rabbitLeftFrom,rabbitLeftTo)+"px";
		rabbit.style.top=rnd(rabbitTopFrom,rabbitTopTo)+"px";
	}
}

// kattintáskor (elkaptunk egy nyuszit) newscore()
/*
	hang elindítása
	ponszám növelése
	darabszám csökkentése
	adott nyuszi eltüntetése
	ha (darabszám >0)
		új darabszám kiírása
	különben
		játék vége kiírása
		gomb megjelenítése
		időzítés leállítása
*/

function newScore(rabbit) {
	sound.play();
	score++;	
	rabbit.style.display="none";
	if (items-score>0)
		rabbits.innerHTML=items-score;
	else {
		message.innerHTML="Lelőtted mind a(z) "+items+" emoteoló játékost! Victory royale!";
		game.style.display="block";
		clearInterval(myInterval);
	}
}
