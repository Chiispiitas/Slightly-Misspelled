(function language() {

  if (Cookies.get("lang") == undefined) {
    let lang = navigator.language || navigator.userLanguage;
    Cookies.set("lang", lang);
  }

  var lang_es = {
    // Header
    "home":"Inicio"
  }

  if ((Cookies.get("lang")).split("-")[0] == "es") {
    for (let string in lang_es) {
      document.getElementById(string).innerHTML = lang_es[string]
    }
  }

  document.getElementById("home").innerHTML = Cookies.get("lang")

})()