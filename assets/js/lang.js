function changeLanguage() {

  var lang = (window.location.hash).substring(1);
  Cookies.set("lang", lang);

  switch (lang) {
    case "en": en(); break;
    case "es": es(); break;
  }

}