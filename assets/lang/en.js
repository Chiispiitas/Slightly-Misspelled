(function initializeEN() {

  document.getElementById("en-button").onclick = changeLanguage("en");

  var lang_en = {}
  if (lang_en.size == 0) {
    for (let string in lang_es) {
      lang_en[string] =  document.getElementById(string).innerHTML
    }
  }

  if (Cookies.get("lang") == "en") {
    for (let string in lang_en) {
      document.getElementById(string).innerHTML = lang_en[string]
    }
  }

})()

function en() {

  if (Cookies.get("lang") == "en") {
    for (let string in lang_en) {
      document.getElementById(string).innerHTML = lang_en[string]
    }
  }

}