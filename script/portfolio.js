/*
* 3D Model of House Modal
*/
var houseModal = document.getElementById('Modal-3DModel');
var housePlusSign = document.getElementById('plus-3DModel');
var houseCaptionText = document.getElementById('caption-3DModel');
housePlusSign.onclick = function(){
    houseModal.style.display = "block";
    houseCaptionText.innerHTML = "Used Autodesk Maya to create a 3D model of a House and the surrounding atmosphere";
};
var houseCloseBtn = document.getElementsByClassName('close')[0];
houseCloseBtn.onclick = function() {
    houseModal.style.display = "none"; 
};


/*
* Wahines of the Waves Modal 
*/
var wowModal = document.getElementById('Modal-wowGraphic');
var wowPlusSign= document.getElementById('plus-wow');
// var modalImg = document.getElementById("wowGraphic");
var wowCaptionText = document.getElementById("caption-wow");
wowPlusSign.onclick = function(){
    wowModal.style.display = "block";
    wowCaptionText.innerHTML = "Wahines of the Waves Graphic";
};
var wowCloseBtn = document.getElementsByClassName('close')[1];
wowCloseBtn.onclick = function() { 
    wowModal.style.display = "none";
};

/*
* RE/MAX Hot Air Balloon Ride Modal
*/

var hotAirBalloonModal = document.getElementById("Modal-hotAirBalloon");
var hotAirBalloonPlusSign = document.getElementById('plus-hotAirBalloon');
var hotAirBalloonCaptionText = document.getElementById("caption-hotAirBalloon");
hotAirBalloonPlusSign.onclick = function(){
    hotAirBalloonModal.style.display = "block";
    hotAirBalloonCaptionText.innerHTML = "I filmed and edited a Hot Air Balloon Ride on a RE/MAX balloon, which was used for advertising purposes";
};
var hotAirBalloonCloseBtn = document.getElementsByClassName('close')[2];
hotAirBalloonCloseBtn.onclick = function() {
    hotAirBalloonModal.style.display = "none";
};