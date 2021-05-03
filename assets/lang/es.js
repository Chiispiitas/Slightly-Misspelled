(function initializeES() {

  document.getElementById("es-button").onclick = changeLanguage("es");

  var lang_es = {
    // Header
    "home":"Inicio",
    "services":"Servicios",
    "portfolio":"Portafolio",
    "contact":"Contacto", 
    "language":"Idioma",
    "getstarted":"Comenzar",
  }

  if (Cookies.get("lang") == "es") {
    for (let string in lang_es) {
      document.getElementById(string).innerHTML = lang_es[string]
    }
  }

})()