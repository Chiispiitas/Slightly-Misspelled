function changeLanguage(lang) {

  Cookies.set("lang", lang);

  switch (lang) {
    case "en": en(); break;
    case "es": es(); break;
  }

}