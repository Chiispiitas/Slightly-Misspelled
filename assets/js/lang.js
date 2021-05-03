function changeLanguage(lang) {

  Cookies.set("lang", lang);

  switch (lang) {
    case "en": en();
    case "es": es();
  }

}