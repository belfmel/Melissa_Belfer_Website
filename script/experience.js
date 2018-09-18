/*
* American Express
*/

var amexLogo = document.getElementById('experience_amex');
var amexCaption = document.getElementById('amex_caption');
// amexLogo.onmouseover = function(){
//     amexCaption.style.display = "block";
// };

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 1300){
        amexCaption.style.display = "block";
    }else if(window.pageYOffset < 1100){
        amexCaption.style.display = "none";
    }
    
});

/*
* IDTech
*/
var idTechLogo = document.getElementById('experience_idTech');
var idTechCaption = document.getElementById('idTech_caption');
// idTechLogo.onmouseover = function(){
//     idTechCaption.style.display = "block";
// };

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 1500){
        idTechCaption.style.display = "block";
    }else if(window.pageYOffset < 1400){
        idTechCaption.style.display = "none";
    }
    
});

