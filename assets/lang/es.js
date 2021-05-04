// Lang Strings.
var langES = {
  // Header
  "home":"Inicio",
  "services":"Servicios",
  "portfolio":"Portafolio",
  "contact":"Contacto", 
  "language":"Idioma",
  "getstarted":"Comenzar",
};

// Initialize (IIFE).
(function initializeES() {

  document.getElementById("es-button").onclick = es;

  if (Cookies.get("lang") == "es") {
    for (let string in langES) {
      document.getElementById(string).innerHTML = langES[string]
    }
  }

})()

// Change to ES.
function es() {

  Cookies.set("lang", "es");

  for (let string in langES) {
    document.getElementById(string).innerHTML = langES[string]
  }

}