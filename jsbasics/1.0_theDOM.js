//alert("HEY HEY HEY");

var hobbiesList = document.getElementById("hobby-list");
console.log(hobbiesList);

var hobbies = document.getElementsByClassName("hobby");
console.log(hobbies[0].innerHTML); //an array
console.log(hobbies[1].innerHTML);

function favoriteSong() {
	document.getElementById("favorite").innerHTML = "Freebird!!!!";
}

favoriteSong();

//TODO write two functions that target id worst and id best and then
//use innerHTML to change it
function worstSong() {
	document.getElementById("worst").innerHTML = "Don't Stop Believin";
}

worstSong();

function bestSong() {
	document.getElementById("best").innerHTML = "Best Song of All Time - Tenacious D";
}

bestSong();