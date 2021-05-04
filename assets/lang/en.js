// Lang Strings (Populate with default HTML values, using "lang_es" keys as base).
var langEN = {};
var classLang = document.getElementsByClassName("lang");

for (let i = 0; i < classLang.length; i++) {
  let id = classLang[i].id;
  langEN[id] = document.getElementById(id).innerHTML;
}

// Initialize (IIFE).
(function initializeEN() {

  document.getElementById("en-button").onclick = en;

  if (Cookies.get("lang") == "en") {
    for (let string in langEN) {
      document.getElementById(string).innerHTML = langEN[string];
    }
  }

})()

// Change to EN.
function en() {

  Cookies.set("lang", "en");

  for (let string in langEN) {
    document.getElementById(string).innerHTML = langEN[string];
  }

}