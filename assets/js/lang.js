function changeLanguage(lang) {

  Cookies.set("lang", lang);
  console.log(lang)

  switch (lang) {
    case "en": en(); break;
    case "es": es(); break;
  }

}