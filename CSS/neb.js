
// popup credits
/*
(document).ready(function() {

	$("#credits").click(function(){

		pop_init( "Questo è solo un esempio di popup!" );

	});

});*/

function pop_init( my_content ) {

	var pop_height = '25%';
	var pop_html = '<div class="pop-bg"></div><div class="pop-wrap"><p class="pop-x">X</p><div class="pop-content"></div></div>';

	$("body").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function(event) {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("body").unbind("click");
}



// document.getElementById("close").onclick = function(e){
//    document.getElementById('pop').style.display="none";}
// chiudi il popup quando clicchi sullo sfondo nero
//document.getElementById('pop').onclick = function(e){ document.getElementById('pop').style.display="none";}

 //document.getElementById("credits").onclick = function(e){
  //  document.getElementById('pop').style.display="block";}
/*
let SCREEN = window.screen.availWidth*window.devicePixelRatio;


if (window.screen.availWidth*window.devicePixelRatio >= "769px") {
   document.body.getElementById("hidden-nav").attr(hidden)
} else {
	console.log('screen >' + SCREEN)
}


 */

 /*         slider
	var slider=document.getElementById("slider");
var number=document.getElementById("number");
slider.oninput=function(){
	number.innerHTML=slider.
	value;
} */


//Get the button
//var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/*

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  // Codice da eseguire nel caso di un dispositivo mobile
  // ...
   if(window.innerHeight < window.innerWidth){ alert("ITALIANO: Per una migliore visualizzazione gira il dispositivo" + "     " + "ENGLISH: For a better user experience turn your device"
); 
} else {
  // Codice da eseguire nel caso di un dispositivo tradizionale
  // ...
 console.log("something");
 
}

   

   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerHeight < window.innerWidth) {
 // Il tuo codice
 alert("ITALIANO: Per una migliore visualizzazione gira il dispositivo" + "     " + "ENGLISH: For a better user experience turn your device"); 
}
*/

   if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerHeight < window.innerWidth) {
 // Il tuo codice
 alert("ITALIANO: Per una migliore visualizzazione gira il dispositivo" + "     " + "ENGLISH: For a better user experience turn your device"); 
}

// elimina video se è mobile
/*function delvideo() {
    document.getElementById("video");
} */

  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerHeight < window.innerWidth) {
 // Il tuo codice
//delvideo.style.cssText = ""
document.getElementById('video').style.display="none";
}

