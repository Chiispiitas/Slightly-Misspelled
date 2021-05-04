// Lang Strings.
var langES = {
  /********************************* HOME *********************************/
  // Header
  "home":"Inicio",
  "services":"Servicios",
  "portfolio":"Portafolio",
  "contact":"Contacto", 
  "language":"Idioma",
  "getstarted":"Comenzar",
  // Hero
  "slogan":"Haciéndote <font color=#3498db>global</font>.",
  "subslogan":"Traducción, interpretación y mucho más...",
  "getstarted-2":"Comenzar",
  // About
  "aboutus":"<h2>Sobre nosotros</h2>",
  "about-1":"<font color=#3498db><b>Slightly Misspelled</b></font> es un servicio traído a ti por David Santana, un freelancer especializado en idiomas y docencia, con numerosas cualificaciones:",
  "about-2":"<i class=" + "ri-check-double-line" + "></i> Certificado Cambridge B2 (Upper-Intermediate) en inglés.",
  "about-3":"<i class=" + "ri-check-double-line" + "></i> Certificado SETEC en traducción e interpretación.",
  "about-4":"<i class=" + "ri-check-double-line" + "></i> Certificado en coaching de la Academia Internacional de Coaching.",
  "about-5":"<i class=" + "ri-check-double-line" + "></i> Certificaciones de ProFuturo en técnicas didácticas modernas.",
  "about-6":"Ya sea una traducción, interpretación o clase de idiomas; el producto final será de una excelente calidad, respaldada por años de experiencia y múltiples reseñas positivas de clientes satisfechos.<br><br>¿A qué estás esperando? ¡Hazte global ahora!",
  "learnmore":"Aprender Más",
  // Counts
  "happyclients":"¡<strong>Clientes</strong> que han quedado encantados con nuestro trabajo!",
  "projects":"¡<strong>Proyectos Terminados</strong> incluyendo traducciones, interpretaciones y clases de idioma!",
  "experience":"<strong>Años de Experiencia</strong> proporcionando servicios de idiomas formalmente.",
  "capacitations":"<strong>Capacitaciones</strong> adquiridas para brindarte el mejor servicio posible.",
  // F.A.Q
  "f.a.q":"Preguntas Frecuentes",
  "f.a.q-q1":"¿Solo realizan traducciones desde inglés y español?",
  "f.a.q-a1":"¡Claro que no! Podemos hacer uso de un software de traducción, para luego corregirlo mediante <b>técnicas de proofreading</b>. Sin embargo, el lenguaje de destino <b>sí</b> tiene que ser inglés o español.",
  "f.a.q-q2":"¿Cuál es su política de viajes respecto a interpretaciones?",
  "f.a.q-a2":"Las interpretaciones solo serán realizadas estrictamente dentro de Ecuador, sin posibilidad de viaje a otros países. Adicionalmente, como parte del precio final se incluirán los costos de viaje interprovincial, bajo el concepto de honorarios (hasta $50 por día).<br><br>Quizás quieras considerar nuestro plan de <b>intérprete virtual</b> para un servicio internacional.",
  "f.a.q-q3":"¿Los pagos se realizan por adelantado o después del servicio?",
  "f.a.q-a3":"Todo tipo de pago siempre será realizado por adelantado. Sin embargo, en caso de que estemos ocupados con otros proyectos, no tendrás que pagar hasta que sea tu turno.",
  // Footer
  "copyright":"&copy; Creado por <strong>David Santana</strong>. Derechos reservados.",
  "home-2":"Inicio",
  "privacy":"Política de Privacidad",
  "tos":"Términos de Servicio",
  /********************************* BREADCRUMBS  *********************************/
  "home-3":"Inicio",
  "services-3":"Servicios",
  "services-4":"Servicios",
  /********************************* SERVICES  *********************************/
  "services-2":"Servicios",
  "translation-h":"Traducción",
  "translation-p":"Traduciremos cualquier texto estático a inglés o español, ¡sin limitaciones con respecto al idioma de origen!",
  "translation-r":"<i class=" + "bi-arrow-right" + "></i> Leer más",
  "interpretation-h":"Interpretación",
  "interpretation-p":"Realizaremos una traducción continua de una conversación en inglés o español. Esto puede realizarse de forma presencial o virtual.",
  "interpretation-r":"<i class=" + "bi-arrow-right" + "></i> Leer más",
  "lessons-h":"Clases de Idioma",
  "lessons-p":"Impartiremos una clase de inglés o español abordando temas como: gramática, pronunciación y fluidez. Esto puede realizarse de forma presencial o virtual.",
  "lessons-r":"<i class=" + "bi-arrow-right" + "></i> Leer más",
  "materials-h":"Diseño de Material Didáctico",
  "materials-p":"Diseñaremos todo tipo de material didáctico, incluyendo: pruebas, rompecabezas, presentaciones de diapositivas y videojuegos.",
  "materials-r":"<i class=" + "bi-arrow-right" + "></i> Leer más",
};

// Initialize (IIFE).
(function initializeES() {

  document.getElementById("es-button").onclick = es;

  if (Cookies.get("lang") == "es") {
    for (let string in langES) {
      if (document.getElementById(string) == null) { continue; }
      document.getElementById(string).innerHTML = langES[string]
    }
  }

})()

// Change to ES.
function es() {

  Cookies.set("lang", "es");

  for (let string in langES) {
    if (document.getElementById(string) == null) { continue; }
    document.getElementById(string).innerHTML = langES[string]
  }

}