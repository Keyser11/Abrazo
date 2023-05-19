function CambiaMsj() {
    document.getElementById("loading-msj").innerText = "Enviado con Exito ✅"
}

setTimeout(CambiaMsj,6000)

setTimeout(function() {
    alert(" Keyser Te Ha Enviado Un Abrazo❤️") 
}, 7200)

setTimeout(function() {
    alert("Un Abrazo No Es Suficiente🙈😊")
}, 7200)

setTimeout(function() {
    alert("🕗...")
}, 7200)

setTimeout(function() {
    alert("Recibiste Un Segundo Abrazo 🙈😚❤️")
}, 7200)


setTimeout(function() {
    document.getElementById("BtnClick").style.display = "flex";
}, 8000);


var musica = document.getElementById("musica");
var muteButton = document.getElementById("muteButton");


function toggleMute() {

  if (musica.muted) {
    musica.muted = false;
    muteButton.classList.remove("muted");
    muteButton.classList.add("ummuted");
  } 
  
  else {
    musica.muted= true;
    muteButton.classList.remove("ummuted");
    muteButton.classList.add("muted");
  }
}
