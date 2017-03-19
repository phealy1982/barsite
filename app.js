function popUpHello(){
    alert("hello");
}

function countIncrease(){
console.log("increasing count");
var currentCount=document.getElementById("current-count").innerText;
currentCount = Number(currentCount) + 1;
document.getElementById("current-count").innerText=currentCount;
}

function countDecrease(){
console.log("decreasing count");
var currentCount=document.getElementById("current-count").innerText;
currentCount = Number(currentCount) -1;
document.getElementById("current-count").innerText=currentCount;
}

function getRandom(){
    document.getElementById("current-count").innerText= getRandomInt(0, 10000);
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSpotifyInfo(){

var spotifyApi="https://api.spotify.com";
}

function getInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.spotify.com/v1/artists/6Ghvu1VvMGScGpOUJBAHNH/albums", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    document.getElementById("info").innerText= xhttp.responseText;
}
