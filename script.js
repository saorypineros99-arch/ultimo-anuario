const TOTAL_PAGES = 30;
const TEMPLATE = "plantilla.png";
const book = document.getElementById("book");
const select = document.getElementById("pageSelect");
const status = document.getElementById("status");
const STUDENTS = [{"name":"heilyn yireth sanchez dussan","phrase":"ya quisiera yo","memory":"el compartir de la salchipapa","aspirations":"llegar ser una persona exitosa que no necesita ayuda de los demás","thanks":"agradezco a mi familia, amigos , compañeros y profesores por darme enseñanzas , ejemplos y aprendizaje que me ayudaron a formarme como la persona que soy ahora .","photo_url":"https://drive.google.com/uc?export=view&id=12Tii4J_3ZgtwgLNvEnbNpfGyLnpIs7Sz","signature_url":""},{"name":"Mariana García Pérez","phrase":"Falsos","memory":"La vez que hicieron caer a Edwin y de paso a Natalia en el puente de guaunda y quedó cochino","aspirations":"Psicología o licenciatura en lengua castellana","thanks":"Agradezco principalmente a Dios y a mis padres sobre todo a mi hermana Nubia quien ah hecho el papel principal en apoyarme tanto académica como financieramente, los amo.","photo_url":"https://drive.google.com/uc?export=view&id=1_rXuwN0kDITTVxw6ePxjUmOAvFQ94fqY","signature_url":"https://drive.google.com/uc?export=view&id=1NTbYW0xUXR2IAa6DKy6tT6dcD0rnBMpk"},{"name":"Julieth Valentina Mora Esquivel","phrase":"somos la resistencia","memory":"en 7mo cuando jugábamos futbol la mayoría del salón unidos","aspirations":"estudiar lo que me gusta y terminarlo, trabajar en eso y formar una hermosa familia","thanks":"agradezco primeramente a Dios por haberme permitirme estar donde estoy y con vida, y a mis padres por apoyarme en cada momento de mi vida y supliendo cada necesidad q tengo","photo_url":"https://drive.google.com/uc?export=view&id=1EqxH5j63XALoksrbppNzSTxeHmKbYDRb","signature_url":"https://drive.google.com/uc?export=view&id=1jUO3JInobkAUrlmebcsbfF90jS6yUD6k"},{"name":"saory valentina montaña piñeros","phrase":"tengo hambre","memory":"cuando me la pasaba jugando voleibol","aspirations":"salir del colegio y formar una carrera","thanks":"agradecimiento a todos los que me acompañaron en mi formación académica","photo_url":"https://drive.google.com/uc?export=view&id=1NRKmorWYuMnlvDMlhQkCtvTxb8UTHe_W","signature_url":"https://drive.google.com/uc?export=view&id=172aTK0HVy1QYD4oOlxepQkC5UAZL-cwD"},{"name":"Danna Valentina Caviedes Perdomo","phrase":"ay Dios mio","memory":"Mi recuerdo favorito es cuando unos compañeros estaban jugando con una pelota de papel, y accidentalmente le pegaron a una profesora casi dañándole las gafas.","aspirations":"Estudiar psicología, o seguir con el técnico.","thanks":"Les doy las gracias a mis padres por su apoyo emocional, económico, a mis maestros por su paciencia, y todas las enseñanzas que me han dejado.","photo_url":"https://drive.google.com/uc?export=view&id=18uI9sY0pgl0awPkb-AJUyk9YocEH_jZI","signature_url":"https://drive.google.com/uc?export=view&id=1Ck-IuPGAJcg_NJnxECB9U5rnTCrFv6km"},{"name":"Nikoll Lizeth Bocanegra Giraldo","phrase":"En nombre de Dios, todo lo lograre","memory":"Todos los recuerdos de octavo, pero especialmente cuando dañamos un candado para no tener clases con una profesora","aspirations":"Estudiar la carrera de mis sueños","thanks":"Gracias a mi familia por el apoyo","photo_url":"https://drive.google.com/uc?export=view&id=1z53NTeELCuo_n4iFVHHHIoCAUnGw0mt2","signature_url":"https://drive.google.com/uc?export=view&id=1o6RCWXn0QQU-Dji6nyHquBYXT6ed-ZIw"},{"name":"Jesus Fernando Gutierres Diz","phrase":"Los errores ocurren","memory":"Cuando obtuve las 80horas sociales sin hacer practicamente nada.","aspirations":"Convertirme en un Medico o Convertirme en un Medico .","thanks":"Gracias a mis padres, hermano y profesores que me apoyaron en todo para poder salir adelante.","photo_url":"https://drive.google.com/uc?export=view&id=1sfRXUOKSXYskq6o-q2E6FUUv91bJ3Au2","signature_url":"https://drive.google.com/uc?export=view&id=10t7ZC-UdMbHzy3BVwn3Uk7Ngksh6OvZg"},{"name":"Narly Lizeth Amaya Losada","phrase":"No entendí nada","memory":"Mi +´}favorito es conocer a amistades que me ayudaron en el peor momento y me sacaban una sonrisa","aspirations":"1. Seguir estudiando 2. Terminar hasta sacar el tecnólogo 3. Trabajar para conseguir mis cosas","thanks":"A mis padres y a todos los docentes que me acompañaron","photo_url":"https://drive.google.com/uc?export=view&id=1fGMBAenGLS86sfqOlHCNcN9lYbg5jpmL","signature_url":"https://drive.google.com/uc?export=view&id=19-rsYfIzTJYstmzLoP5_3SOlLnSpMgjX"},{"name":"Alex Felipe Ortiz narvaez","phrase":"No mienta","memory":"cuando jugaba micro con mi compañeros","aspirations":"estudiar mi carrera de mis sueños y ser un gran profecional","thanks":"Primero que todo, quiero dar gracias a Dios por haberme permitido vivir esta experiencia escolar con salud y vida. También agradecer a los profesores que se esforzaron por enseñarnos con dedicación, paciencia y esfuerzo todos sus conocimientos y valores que nos puedan servir en nuestra vida cotidiana. Por último, estaré infinitamente agradecido con mis padres por haberme acompañado y apoyado en todos mis proyectos y en mi trayectoria como estudiante a través del tiempo.","photo_url":"https://drive.google.com/uc?export=view&id=1BElPcguZokclbu8LSIFmBHssYehEBLB6","signature_url":"https://drive.google.com/uc?export=view&id=10YoPdJHBt4_EnPQYELcZgV5ZrfCVXzvM"},{"name":"joan sebastian ramirez garcia","phrase":"sapa","memory":"ninguno","aspirations":"ser un gran empresario","thanks":"mi familia","photo_url":"https://drive.google.com/uc?export=view&id=1Apw-0FYsWWQyt0P77iYRjirCVIYNgCwK","signature_url":"https://drive.google.com/uc?export=view&id=1cMGdF6zeFoJ_S6f1ajfVl95hgqg5NqnA"},{"name":"Duvan Felipe Ortiz Sarmiento","phrase":"yo si estudie pero se me olvido todo","memory":"cuando jugué futbol con mis compañeros y nos golearon pero no faltaron las risas","aspirations":"Mis aspiraciones son terminar mis estudios, graduarme del colegio, estudiar lo que me gusta  convertirme en un gran profesional. Sueño con tener un buen trabajo, una casa propia, ayudar económicamente a mi familia, hacer sentir orgullosos a mi mamá y hermano, viajar y conocer nuevos lugares. Aspiro a ser una persona responsable, humilde y respetuosa, cumplir cada uno de mis sueños y construir un futuro lleno de felicidad, éxitos y bendiciones, siempre con la ayuda de Dios.","thanks":"Gracias, Dios, por permitirme vivir esta hermosa etapa de mi vida, por darme la oportunidad de aprender, por cada compañero que puso una sonrisa en mis días y por cada maestro que me enseñó algo más que una lección. Gracias por los momentos felices, por las dificultades que me hicieron más fuerte y por los recuerdos que siempre llevaré en mi corazón. Hoy entiendo que el colegio no solo me dejó conocimientos, sino también amistades, experiencias y enseñanzas que me acompañarán toda la vida.","photo_url":"https://drive.google.com/uc?export=view&id=1iaiZ-2vis8RWQvonJT2TzTX3r7vh2FiG","signature_url":"https://drive.google.com/uc?export=view&id=1gbaKgYNO5AGJZB_nJOIfv_Bn_YUejFil"},{"name":"Nicolas soto calderon","phrase":"yo que me saque un 3 me conformo","memory":"cuando jugamos un partido con mis amigos y nos golearon","aspirations":"tener un trabajo estable, tener un titulo profesional de ingeniero y estar junto a mis padres","thanks":"Primero que todo darle el agradecimiento a mis padres que son los que me han apoyado siempre y en cualquier circunstancia también a mis abuelas que es otro mérito de orgullo saber que tengo una familia unida y que me apoya en todo y gracias a eso es podido con todo y siempre salir adelante afrontando todo","photo_url":"https://drive.google.com/uc?export=view&id=1cXOVlypcZyFssF8mzYwHz0uJrMjJGSaL","signature_url":"https://drive.google.com/uc?export=view&id=1Enyh8QnHeBoJuEmIYkQrKVFcOA0PHXUC"},{"name":"zaidy LICETH CUELLAR CAVIEDES","phrase":"Ay no que pena","memory":"Mi recuerdo favorito de decimo fue compartir risas, locuras y momento inovidables con mis compañeros, creando recuerdos que siempre llevare en mi corazó.","aspirations":"1. Estudiar en el SENA 2. Hacer el orgullosa de mi familia 3. Cumpli mi sueño sin rendirme 4.Crecer como persona y aprender de mis errores","thanks":"Agradezco a mis padres por su amor incondicional, por apoyarme en cada momento y por hacer tantos esfuerzos para darme lo mejor. Gracias por sus consejos, por confiar en mí y por motivarme a seguir adelante, incluso cuando las cosas se ponen difíciles. Ustedes son una parte fundamental de mi vida y una de mis mayores motivaciones para cumplir mis sueños. Todo lo que hacen por mí lo llevo en mi corazón, y espero algún día poder devolverles un poquito de todo lo que me han dado. Los amo mucho y me siento muy afortunada de tenerlos en mi vida.","photo_url":"https://drive.google.com/uc?export=view&id=1Gv5Iq1TnqNBqJaM-5BNUbpgSLDmaeyVu","signature_url":"https://drive.google.com/uc?export=view&id=1WOkskp784Sf-w2qNwVQcMScbgXvZrlMA"},{"name":"Laura sofia","phrase":"uy no atrás satanás","memory":"mi recuerdo favorito es cuando todos fuimos a la casa de el man que me gustaba y ellos se pusieron a de serenata la canción de  la ventana marroncita","aspirations":"- Quiero graduarme feliz junto a mis amigos - Terminar el tecnólogo - Homologar y estudiar diseño - Estudiar mas cursos en el sena - Entrar en la universidad y estudiar biología - Graduarme de la universidad - Ser profesional con lo estudiado","thanks":"gracias a mis amigos: Laura fuentes, Ancizar Triana, Joan Ramírez, Isabella moje, Yuvettslit Yunda... y a todo el salón por ser tan especial para mi y por ser tan unidos a pesar de nuestras diferencias","photo_url":"https://drive.google.com/uc?export=view&id=1xaD5-0lkBCOQ7l_OANPiaPjTm4YsZLHt","signature_url":"https://drive.google.com/uc?export=view&id=1mRmD3oL2RemUl23xSBuKdmDXAUFP0oPO"},{"name":"Yuvettslit Yunda Cortes","phrase":"Life goes on","memory":"mi mamá y yo en la graduación de 9no, por como se veía y sentí su orgullo","aspirations":"ayudar a mi llegar a ser profesional en marketing,amá, viajar, tener un trabajo estable, obtener dinero y especializarme en algo","thanks":"A mi mamá y a mi hermano, por acompañarme durante todo este proceso, por su esfuerzo para conseguir lo que yo necesitaba y, sobre todo por demostrarme su apoyo, amor y orgullo","photo_url":"https://drive.google.com/uc?export=view&id=1nnCBhK8HLKlHwWTWW6npgM1t_qBRPaO4","signature_url":"https://drive.google.com/uc?export=view&id=1KAYVPbtKyzA5Uw4rdCBrgbQiDVcPYzqj"},{"name":"thaliana sofia sanchez rocha","phrase":"vive la vida","memory":"el 2022 con mis amigas","aspirations":"ser feliz","thanks":"agradezco a mdzs , a mis padres, a mis profesores y a los compañeros para ayudarme a lograr mis metas","photo_url":"https://drive.google.com/uc?export=view&id=1Yf0nQMO3T7Qx5qXfuwujg4tkAoNs08TR","signature_url":"https://drive.google.com/uc?export=view&id=1J0jxNV3DfrN8CVZrQDg4dA88P6edZpCU"},{"name":"Hillary Natalia Serrato Acosta","phrase":"\"No todo es para siempre, pero tú sí vas a poder con todo.\"","memory":"Una vez que estaba caminando con mis amigos por el patio del colegio y después nos fuimos para un lado el cual había un río esa vez me lanzaron al río con otro compañero yo no quería culpar ni avisar a la responsable pero ya la habían delatado en coordinación nos llevaron para allá le pusieron observación y nos regañaron","aspirations":"Quiero terminar mi bachillerato con la ayuda de Dios graduarme y estudiar para ser un gran licenciada en educación infantil","thanks":"Quiero terminar mi bachillerato con la ayuda de Dios graduarme y estudiar para ser un gran licenciada en educación infantil","photo_url":"https://drive.google.com/uc?export=view&id=105cQQ4GJrk37KC280fGPFzoot1Mh4SQm","signature_url":"https://drive.google.com/uc?export=view&id=1LuRtGpqdPrLMoLgXrwzmJdQIcJGUj_0f"},{"name":"Cristian Rene Muñoz Quintero","phrase":"amo a angeline","memory":"Cuando fui novio de angeline","aspirations":"hacer un tecnologo en el SENA, ir a la UNI y estudiar lo que me gusta para ganar mucha plata","thanks":"cc","photo_url":"https://drive.google.com/uc?export=view&id=1rhm62Kw6RgOgc05TjKzKwuERA0cXU1m3","signature_url":"https://drive.google.com/uc?export=view&id=1SL19OeUyHtSL6d2y_aObhV_aJdYnUyhY"},{"name":"Nycolt Danihela Barrera Mosquera","phrase":"\" Su Madreeee \"","memory":"Mi recuerdo favorito fue cuando iniciamos nuestro grupito de 4 en septimo con unas amigas","aspirations":"Estudiar en el Sena Hacer orgullosa a mi madre Infante de Marina Infante de Marina Chef","thanks":"Le doy gracias a mi madre por darme u apoyo incondicional en mis etudios y por siempre confiar en mi","photo_url":"https://drive.google.com/uc?export=view&id=1Afics_wPmXbKt6b2k2HJhtzJhwtqH3CQ","signature_url":"https://drive.google.com/uc?export=view&id=1lIuyzfjk_gTg_C7dMygCoYW7qEzw3o2d"},{"name":"Laura Valentina Galindo Diaz","phrase":"Tengo Sueño","memory":"Mi recuerdo favorito es cuando conocí por primera vez a mi mejor amiga Valeria en sexto","aspirations":"Poder especializarme en lo que mas aspiro.","thanks":"Le agradezco a mis padres por darme motivación y fuerzas para lograr mis metas y poder seguir adelante.","photo_url":"https://drive.google.com/uc?export=view&id=11ufYvLxGH21KwTB_1CELVFFOaQ_HOEg7","signature_url":"https://drive.google.com/uc?export=view&id=1xOEPp4iYRi_qSyw_vHDqTloY9BGHDXsB"},{"name":"Francy Fidelina Medina Garcia","phrase":"Todo es mental","memory":"mi recuerdo favorito en general es cuando compartimos","aspirations":"Graduarme, ingresar a la universidad, estudiar Medicina, crecer como persona, ayudar a mi familia, conocer nuevos lugares y cumplir cada uno de mis sueños.","thanks":"Agradezco a mi familia, docentes y compañeros por su apoyo, dedicación y enseñanzas durante esta etapa, que han contribuido a mi formación personal y académica.","photo_url":"https://drive.google.com/uc?export=view&id=1ehy9tYF3NRYSQelvJ5GhRCuWtTw5NCDd","signature_url":"https://drive.google.com/uc?export=view&id=1ks6Xli0UV0blsupAvkBm2pJebN8IAVPT"},{"name":"Isabella Monje Vega","phrase":"Te cuento un chiste amisga","memory":"Cuando estaba en el puente con mis amigos y nos inventamos un caso para un juicio","aspirations":"Tener mi propia empresa y llegar a componer mis propias canciones","thanks":"le agradezco a mi mamá, tío y abuela por nunca dejarme sola y confiar en mi incluso cuando yo no lo podía hacer","photo_url":"https://drive.google.com/uc?export=view&id=198YHO7iwlGUdWOCUxQqHgJbaFc7EadRC","signature_url":"https://drive.google.com/uc?export=view&id=17xfhc6I-iyRS62w0pUB4lDzj_5KjetVU"},{"name":"Laura Fuentes Aranda","phrase":"Estoy siendo victima de Xenofobia por parte de mi compañero Benítez","memory":"Todos los días a partir de 9no (2024) han sido como el mejor de todos. Pero los mejores como Prom fueron las horas lúdicas a la ultima hora de todos los miércoles.","aspirations":"Ser programadora y tener una vida tranquila y digna.","thanks":"Agradezco a cada uno de mis compañeros por haber formado parte de los recuerdos más bonitos de mi último año escolar. Me llevo conmigo las risas, las enseñanzas, los momentos compartidos y la tristeza de saber que una etapa tan especial está llegando a su fin. A Yuvettslit Yunda, por ser mi primera amiga al llegar a la institución, por permitirme verla crecer y por ocupar un lugar en mi corazón que el tiempo nunca podrá borrar. A Julieta Rocha, por ser mi compañía, cómplice, apoyo incondicional y una de las amistades más valiosas de este camino. A Isabella Monje, por tenderme la mano cuando más lo necesité; a Laura Serrato, por los momentos vividos; a Estiven Benítez, por su liderazgo, amistad y por hacerme bullying de vez en cuando ; a Laura Marinez, por tantas risas y su apoyo; a Cristian Muñoz, por su compañía; a Heilyn Sánchez y Saory Montaña, por estar presentes cuando pudieron; a Laura Galindo, por su cariño y confianza; y a Johan Ramírez, por su carisma y honestidad. Gracias a todos por dejar un pedacito de ustedes en esta historia que siempre recordaré con cariño. A mis profesores, especialmente al profe Sebastián Masmelas, gracias por despertar en mí el amor por la programación. A mi padre, Leonardo Fuentes, por su apoyo económico durante mi formación; a mis hermanos mayores, Cristian Galindo y Yonatan Galindo, por tenderme la mano cuando lo necesité; y a Esther Hernández, por acompañarme espiritual y emocionalmente en este proceso. Pero, sobre todo, mi agradecimiento más profundo es para mi mamá, Lina Aranda. Gracias por cada sacrificio, por cada esfuerzo silencioso y por luchar incansablemente para darme un futuro mejor. Gracias por salvarme de la ignorancia, por creer en mí incluso en medio de las dificultades y por dejarlo todo con tal de verme llegar lejos. Si hoy puedo soñar con un futuro lleno de oportunidades, es porque tú has construido el camino con tus propias manos.","photo_url":"https://drive.google.com/uc?export=view&id=14QqznC7cIClQJI3b_LetyBoWnrJehtyC","signature_url":"https://drive.google.com/uc?export=view&id=1hQRvj96ZDvIuxYmWEMlhNXH4aBoVYnCe"},{"name":"Julieta","phrase":"Todo pasa por algo, los planes de Dios son perfectos","memory":"Cuando me cay en un rio con mis amigos y aprovechamos y nos bañamos.","aspirations":"quiero cumplir mis dos sueño que es llegar a ser profesora de pedagogía infantil para mostrar esa amor tan grande que tengo con los niños y a enseñarles las base que les van a servir para el resto de su vida , y también después de cumplir eso estudiar para ser azafata es unos de mis mayores sueños y también después de cumplir eso estudiar para ser azafata es unos de mis mayores sueños","thanks":"A mis papas que han estado en el momento en que naci y me han apollado en todo","photo_url":"https://drive.google.com/uc?export=view&id=1A-kdHoGADSSK0ifUBhS6XBSOg6l7xPoA","signature_url":"https://drive.google.com/uc?export=view&id=1xJmvRGSIdFMgkE-v0dmxD6N3zWXABzhP"},{"name":"Laura Liney Alarcon Cortes","phrase":"El que persevera alcanza","memory":"Haber encontrado una persona realmente leal en mi vida","aspirations":"enfermera, doctora, ingeniera","thanks":"Agradezco a Dios y a mi familia que me acompañaron en esta etapa, por su apoyo, consejos y paciencia.","photo_url":"https://drive.google.com/uc?export=view&id=1Gwy4a1iObBHX734ieWDZN-e-kEWaoGAc","signature_url":"https://drive.google.com/uc?export=view&id=1IPv--clJ5UyswHYTJjTlMi9K1ZtPqRyA"},{"name":"Ancizar Steven Triana Murcia","phrase":"six seven","memory":"El día del compartir en 10°","aspirations":"-Terminar el tecnólogo -Irme del país junto a mi familia -Hacer la Universidad -Tener hijos","thanks":"Agradezco a mis padres por el gran amor que me han dado, a mis hermanos, al profe sebas por ser tan buen docente y a mis amigos por hacer los dias tan divertidos y mas faciles","photo_url":"https://drive.google.com/uc?export=view&id=18NzJ3TYERWqcAsLJ6jMvL-mYRMPS6aIB","signature_url":"https://drive.google.com/uc?export=view&id=1Cv-TT4F97KgUwTNO3nb_1UJP5PnoxZ8J"},{"name":"Andres Felipe Bastidas Lombana","phrase":"Relax que yo remonto","memory":"Mi noviazgo","aspirations":"Odontologo","thanks":"Agradezco a mis padre por todo el esfuerzo  que hicieron todos estos años para que yo pudiera llegar hasta acá MI GRADO DE BACHILLER","photo_url":"https://drive.google.com/uc?export=view&id=1Q_BcZBFbvz2IffUyVuvChQdZh5PIwRjf","signature_url":"https://drive.google.com/uc?export=view&id=1gPg5rH-Mg6t2HjcoHEmtcMcEaEAtzpJH"},{"name":"kewin daniel escobar ramirez","phrase":"ole no","memory":"el dia que jugue un torneo departamental","aspirations":"ser profesional en multimedia debutar como jugador","thanks":"le agradesco a mi familia por apoyarme","photo_url":"https://drive.google.com/uc?export=view&id=1ej6XjqP9CyFix8nZVUa3uNpYwbALRO0r","signature_url":"https://drive.google.com/uc?export=view&id=1nqxymZ5gGT2csSPludqqVY95I_iQcLoB"},{"name":"Estiven Julian Benitez castro","phrase":"Mire a este negro","memory":"Sin duda, mi recuerdo favorito fue el día en que me organizaron una fiesta de cumpleaños sorpresa. Ver reunidos a mis 4 mejores amigos, para celebrar conmigo es un momento que guardo con muchísimo cariño en el corazón.","aspirations":"Mi mayor aspiración es convertirme en doctor y alcanzar todas mis metas profesionales, preparándome con dedicación para proteger la salud de las personas y cumplir con éxito cada objetivo que me proponga en el futuro.","thanks":"Agradezco profundamente a mis compañeros, familiares y profesores por haberme acompañado y guiado en esta etapa. Su apoyo y compañía fueron fundamentales durante todo mi proceso educativo en la secundaria.","photo_url":"https://drive.google.com/uc?export=view&id=19NPaWe31ZieErbXIKnrIL4fTH5w1MJm-","signature_url":"https://drive.google.com/uc?export=view&id=1wh3YCSf83k3EoFq0GOVR_vjlGKgD1vXc"},{"name":"Laura Angeline Marinez Olaya","phrase":"no joda","memory":"Con mis padres de pequeña","aspirations":"Estudiar derecho","thanks":"agradezco a mi familia","photo_url":"https://drive.google.com/uc?export=view&id=1-VsQzhQRQvmCZT4B3xWrRsIFqdZ3regx","signature_url":"https://drive.google.com/uc?export=view&id=15We6yfCRc4oQIAI8ZgdkGyxfmi307jaI"}];
const STORAGE_KEY = "anuario30_promocion2026_completo_v1";
let current = 0;

function addOption(value, label) {
  const option = document.createElement("option");
  option.value = String(value);
  option.textContent = label;
  select.appendChild(option);
}

function createCover() {
  const p = document.createElement("section");
  p.className = "page cover active";
  p.dataset.page = "0";
  p.innerHTML = `
    <div class="cover-topline" contenteditable="true">Institución educativa</div>
    <div class="cover-flourish">❧ ✧ ❦ ✧ ❧</div>
    <img class="cover-emblem" alt="Escudo institucional" src="escudo.png">
    <div class="cover-kicker" contenteditable="true">Presenta</div>
    <h1 class="cover-title" contenteditable="true">Anuario escolar<br>Eugenio Ferro Falla</h1>
    <div class="cover-rule"></div>
    <p class="cover-course" contenteditable="true">Curso 11-01</p>
    <p class="cover-year" contenteditable="true">PROMOCIÓN · 2026</p>
    <div class="cover-flourish">❧ ✧ ❦ ✧ ❧</div>
    <div class="cover-motto" contenteditable="true">Ciencia · Virtud · Futuro</div>`;
  book.appendChild(p);
  addOption(0, "Portada");
}

function makeImageUpload(input, onImage) {
  input.type = "file";
  input.accept = "image/*";
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => { onImage(reader.result); markChanged(); };
    reader.readAsDataURL(file);
    input.value = "";
  });
}

function makePhotoTools(photo, frame, upload) {
  const tools = document.createElement("div");
  tools.className = "photo-tools";
  tools.innerHTML = `
    <button type="button" class="photo-replace">Cambiar foto</button>
    <button type="button" class="photo-remove">Borrar foto</button>
    <label>Zoom <input class="photo-zoom" type="range" min="50" max="500" step="5" value="100"></label>
    <label>Horizontal <input class="photo-x" type="range" min="-100" max="100" step="1" value="0"></label>
    <label>Vertical <input class="photo-y" type="range" min="-100" max="100" step="1" value="0"></label>
    <button type="button" class="photo-reset">Centrar imagen</button>
    <small>También puedes arrastrar la foto directamente dentro del marco.</small>`;
  const zoom = tools.querySelector(".photo-zoom");
  const x = tools.querySelector(".photo-x");
  const y = tools.querySelector(".photo-y");

  function update() {
    photo.style.transform =
      `translate(${x.value}%, ${y.value}%) scale(${Number(zoom.value) / 100})`;
    markChanged();
  }
  [zoom, x, y].forEach(el => el.addEventListener("input", update));

  tools.querySelector(".photo-replace").addEventListener("click", event => {
    event.stopPropagation();
    upload.click();
  });
  tools.querySelector(".photo-reset").addEventListener("click", event => {
    event.stopPropagation();
    zoom.value = 100; x.value = 0; y.value = 0;
    update();
  });
  tools.querySelector(".photo-remove").addEventListener("click", event => {
    event.stopPropagation();
    photo.removeAttribute("src");
    photo.style.transform = "";
    frame.classList.remove("has-photo");
    zoom.value = 100; x.value = 0; y.value = 0;
    upload.value = "";
    markChanged();
  });

  // Arrastrar la imagen con el ratón o con el dedo para cambiar su encuadre.
  let dragging = false;
  let startX = 0, startY = 0, originX = 0, originY = 0;
  function readTransform() {
    return {
      x: Number(x.value) || 0,
      y: Number(y.value) || 0
    };
  }
  photo.addEventListener("pointerdown", event => {
    if (!frame.classList.contains("has-photo")) return;
    dragging = true;
    photo.setPointerCapture(event.pointerId);
    const origin = readTransform();
    startX = event.clientX;
    startY = event.clientY;
    originX = origin.x;
    originY = origin.y;
    event.preventDefault();
  });
  photo.addEventListener("pointermove", event => {
    if (!dragging) return;
    const rect = frame.getBoundingClientRect();
    const dx = ((event.clientX - startX) / rect.width) * 100;
    const dy = ((event.clientY - startY) / rect.height) * 100;
    x.value = String(Math.max(-100, Math.min(100, originX + dx)));
    y.value = String(Math.max(-100, Math.min(100, originY + dy)));
    update();
  });
  function stopDrag() { dragging = false; }
  photo.addEventListener("pointerup", stopDrag);
  photo.addEventListener("pointercancel", stopDrag);
  frame.appendChild(tools);
  return tools;
}

function makeTextBlock(label, left, top, width, height, initialCount) {
  const wrap = document.createElement("div");
  wrap.className = "lines";
  wrap.dataset.label = label;
  Object.assign(wrap.style, {
    left: `${left}%`, top: `${top}%`, width: `${width}%`,
    height: `${height}%`
  });

  const inputs = document.createElement("div");
  inputs.className = "line-inputs";
  wrap.appendChild(inputs);

  const controls = document.createElement("div");
  controls.className = "line-controls";
  controls.innerHTML = `
    <button type="button" class="line-add" title="Añadir una línea">＋</button>
    <button type="button" class="line-remove" title="Quitar la última línea">−</button>`;
  wrap.appendChild(controls);

  function addLine(value = "") {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = label;
    input.setAttribute("aria-label", `${label}`);
    input.value = value;
    inputs.appendChild(input);
    markChanged();
  }
  controls.querySelector(".line-add").addEventListener("click", addLine);
  controls.querySelector(".line-remove").addEventListener("click", () => {
    if (inputs.lastElementChild) {
      inputs.lastElementChild.remove();
      markChanged();
    }
  });
  for (let i = 0; i < initialCount; i++) addLine();
  return wrap;
}

function makeSignatureArea() {
  const area = document.createElement("div");
  area.className = "signature-area";
  area.title = "Haz clic para insertar una imagen o pega una imagen copiada";
  area.setAttribute("aria-label", "Espacio para insertar imagen de firma");
  const hint = document.createElement("span");
  hint.className = "signature-hint";
  hint.textContent = "Pegar o insertar imagen";
  const img = document.createElement("img");
  img.className = "signature-image";
  img.alt = "Imagen de firma";
  area.append(hint, img);

  const file = document.createElement("input");
  file.type = "file";
  file.accept = "image/*";
  file.className = "signature-file";
  file.setAttribute("aria-label", "Seleccionar imagen para la firma");
  makeImageUpload(file, data => {
    img.src = data;
    area.classList.add("has-image");
  });
  area.appendChild(file);

  area.addEventListener("click", event => {
    if (event.target === file || event.target.closest(".signature-tools")) return;
    file.click();
  });
  area.addEventListener("paste", event => {
    const items = [...(event.clipboardData?.items || [])];
    const imageItem = items.find(item => item.type.startsWith("image/"));
    if (!imageItem) return;
    event.preventDefault();
    const blob = imageItem.getAsFile();
    if (!blob) return;
    const reader = new FileReader();
    reader.onload = () => {
      img.src = reader.result;
      area.classList.add("has-image");
      markChanged();
    };
    reader.readAsDataURL(blob);
  });
  area.tabIndex = 0;

  const tools = document.createElement("div");
  tools.className = "signature-tools";
  tools.innerHTML = `
    <label>Tamaño <input type="range" min="30" max="220" step="5" value="100"></label>
    <button type="button" class="signature-remove">Quitar imagen</button>`;
  tools.querySelector("input").addEventListener("input", event => {
    img.style.width = `${event.target.value}%`;
    img.style.height = `${event.target.value}%`;
    markChanged();
  });
  tools.querySelector("button").addEventListener("click", event => {
    event.stopPropagation();
    img.removeAttribute("src");
    img.style.width = ""; img.style.height = "";
    area.classList.remove("has-image");
    markChanged();
  });
  area.appendChild(tools);
  return area;
}


function wrapWords(text, maxChars, maxLines) {
  const words = String(text || "").trim().split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return { lines: lines.slice(0, maxLines), overflow: lines.length > maxLines };
}

function showFullText(label, value) {
  const modal = document.getElementById("readModal");
  modal.querySelector(".read-modal-title").textContent = label;
  modal.querySelector(".read-modal-content").textContent = value || "";
  if (typeof modal.showModal === "function") modal.showModal();
}

function fillTextBlock(block, value, maxChars) {
  const fullText = String(value || "").trim();
  block.dataset.fullText = fullText;
  const inputs = [...block.querySelectorAll(".line-inputs input")];
  const result = wrapWords(fullText, maxChars, inputs.length);
  inputs.forEach((input, i) => {
    input.value = (result.lines[i] || "").toLocaleUpperCase("es-CO");
  });
  let more = block.querySelector(".read-more");
  if (result.overflow) {
    if (!more) {
      more = document.createElement("button");
      more.type = "button";
      more.className = "read-more";
      more.textContent = "Leer completo";
      block.appendChild(more);
    }
    more.onclick = event => {
      event.stopPropagation();
      showFullText(block.dataset.label, block.dataset.fullText);
    };
  } else if (more) {
    more.remove();
  }
}

function populateStudentPage(page, student) {
  if (!student) return;
  const blocks = [...page.querySelectorAll(".lines")];
  const values = [
    [student.phrase, 30],
    [student.memory, 31],
    [student.name, 21],
    [student.aspirations, 32],
    [student.thanks, 54]
  ];
  blocks.forEach((block, index) => {
    const [value, maxChars] = values[index] || ["", 30];
    fillTextBlock(block, value, maxChars);
  });

  const photo = page.querySelector(".photo");
  const frame = page.querySelector(".photo-frame");
  if (student.photo_url && photo && frame) {
    photo.src = student.photo_url;
    photo.style.transform = "translate(0%, 0%) scale(1)";
    frame.classList.add("has-photo");
  }

  if (student.signature_url) {
    const signature = page.querySelector(".signature-image");
    const area = page.querySelector(".signature-area");
    if (signature && area) {
      signature.src = student.signature_url;
      area.classList.add("has-image");
    }
  }
}

function createPage(n) {
  const p = document.createElement("section");
  p.className = "page";
  p.dataset.page = String(n);
  p.style.backgroundImage = `url("${TEMPLATE}")`;

  const photoFrame = document.createElement("div");
  photoFrame.className = "photo-frame";
  const photo = document.createElement("img");
  photo.className = "photo";
  photo.alt = "Fotografía de la página";
  photoFrame.appendChild(photo);

  const upload = document.createElement("input");
  upload.className = "upload";
  upload.title = "Seleccionar fotografía";
  upload.setAttribute("aria-label", "Seleccionar fotografía");
  upload.hidden = true;
  makeImageUpload(upload, data => {
    photo.src = data;
    photo.style.transform = "translate(0%, 0%) scale(1)";
    photoFrame.classList.add("has-photo");
    photoFrame.querySelector(".photo-zoom").value = 100;
    photoFrame.querySelector(".photo-x").value = 0;
    photoFrame.querySelector(".photo-y").value = 0;
    markChanged();
  });

  const addPhoto = document.createElement("button");
  addPhoto.type = "button";
  addPhoto.className = "photo-add";
  addPhoto.textContent = "+ Agregar foto";
  addPhoto.setAttribute("aria-label", "Agregar fotografía al cuadro grande");
  addPhoto.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    upload.click();
  });

  // El cuadro completo también permite volver a elegir una fotografía.
  photoFrame.addEventListener("click", event => {
    if (event.target === photoFrame && !photoFrame.classList.contains("has-photo")) {
      upload.click();
    }
  });

  photoFrame.append(upload, addPhoto);
  makePhotoTools(photo, photoFrame, upload);
  p.appendChild(photoFrame);

  p.appendChild(makeTextBlock("Frase favorita", 35.2, 37.1, 22.3, 12.5, 4));
  p.appendChild(makeTextBlock("Recuerdo favorito", 63.2, 37.1, 22.5, 12.5, 4));
  p.appendChild(makeTextBlock("Nombre completo", 9.1, 68.9, 20.2, 7.5, 3));
  p.appendChild(makeTextBlock("Lista de aspiraciones", 38.2, 68.9, 19.5, 7.5, 3));
  p.appendChild(makeTextBlock("Agradecimientos", 64.3, 68.9, 21.2, 7.5, 2));
  p.appendChild(makeSignatureArea());

  const counter = document.createElement("span");
  counter.className = "page-count";
  counter.textContent = `${String(n).padStart(2, "0")} / ${TOTAL_PAGES}`;
  p.appendChild(counter);
  populateStudentPage(p, STUDENTS[n - 1]);
  book.appendChild(p);
  addOption(n, `Página ${n} · ${STUDENTS[n - 1]?.name || "Estudiante"}`);
}

function pages() { return [...book.querySelectorAll(".page")]; }

function show(n) {
  current = Math.max(0, Math.min(TOTAL_PAGES, n));
  pages().forEach(p => p.classList.toggle("active", Number(p.dataset.page) === current));
  select.value = String(current);
  status.textContent = current === 0
    ? "Portada · diseño original conservado"
    : `Página ${current} de ${TOTAL_PAGES} · foto ajustable, líneas editables e imagen de firma`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function markChanged() {
  status.textContent = "Hay cambios sin guardar · pulsa «Guardar cambios»";
}

function capture() {
  return pages().map(p => ({
    textBlocks: [...p.querySelectorAll(".lines")].map(block => ({
      values: [...block.querySelectorAll(".line-inputs input")].map(input => input.value),
      fullText: block.dataset.fullText || ""
    })),
    editable: [...p.querySelectorAll("[contenteditable='true']")].map(el => el.innerHTML),
    photo: p.querySelector(".photo")?.getAttribute("src") || "",
    photoTransform: p.querySelector(".photo")?.style.transform || "",
    photoZoom: p.querySelector(".photo-zoom")?.value || "100",
    photoX: p.querySelector(".photo-x")?.value || "0",
    photoY: p.querySelector(".photo-y")?.value || "0",
    signature: p.querySelector(".signature-image")?.getAttribute("src") || "",
    signatureWidth: p.querySelector(".signature-image")?.style.width || "",
    signatureHeight: p.querySelector(".signature-image")?.style.height || ""
  }));
}

function applyState(p, row) {
  if (!row) return;
  const blocks = [...p.querySelectorAll(".lines")];
  blocks.forEach((block, i) => {
    const values = row.textBlocks?.[i]?.values || [];
    if (row.textBlocks?.[i]?.fullText !== undefined) {
      block.dataset.fullText = row.textBlocks[i].fullText;
      const more = block.querySelector(".read-more");
      if (more) more.onclick = event => {
        event.stopPropagation();
        showFullText(block.dataset.label, block.dataset.fullText);
      };
    }
    const inputBox = block.querySelector(".line-inputs");
    inputBox.innerHTML = "";
    values.forEach(value => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = value;
      input.placeholder = block.dataset.label;
      input.setAttribute("aria-label", block.dataset.label);
      inputBox.appendChild(input);
    });
  });
  [...p.querySelectorAll(".lines")].forEach(block => {
    const more = block.querySelector(".read-more");
    if (more) more.onclick = event => {
      event.stopPropagation();
      showFullText(block.dataset.label, block.dataset.fullText);
    };
  });
  [...p.querySelectorAll("[contenteditable='true']")].forEach((el, i) => {
    if (row.editable?.[i] !== undefined) el.innerHTML = row.editable[i];
  });
  const photo = p.querySelector(".photo");
  if (row.photo) {
    photo.src = row.photo;
    photo.style.transform = row.photoTransform || "translate(0%, 0%) scale(1)";
    p.querySelector(".photo-frame")?.classList.add("has-photo");
    p.querySelector(".photo-zoom").value = row.photoZoom || 100;
    p.querySelector(".photo-x").value = row.photoX || 0;
    p.querySelector(".photo-y").value = row.photoY || 0;
  }
  const signature = p.querySelector(".signature-image");
  if (row.signature) {
    signature.src = row.signature;
    signature.style.width = row.signatureWidth || "";
    signature.style.height = row.signatureHeight || "";
    p.querySelector(".signature-area")?.classList.add("has-image");
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(capture()));
    status.textContent = "Cambios guardados en este navegador.";
  } catch {
    status.textContent = "No se pudo guardar todo. Descarga el libro HTML para conservar las imágenes.";
  }
}

function loadSaved() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (data) pages().forEach((p, i) => applyState(p, data[i]));
  } catch (error) { console.warn("No se pudieron recuperar los cambios.", error); }
}

createCover();
for (let n = 1; n <= TOTAL_PAGES; n++) createPage(n);

document.getElementById("prev").addEventListener("click", () => show(current - 1));
document.getElementById("next").addEventListener("click", () => show(current + 1));
select.addEventListener("change", () => show(Number(select.value)));
document.getElementById("save").addEventListener("click", save);
document.getElementById("pdf").addEventListener("click", () => window.print());

book.addEventListener("input", event => {
  if (event.target.matches("input:not([type=file]), textarea, [contenteditable=true]")) markChanged();
});

document.getElementById("export").addEventListener("click", () => {
  const state = capture();
  const clone = document.documentElement.cloneNode(true);
  const cloneBook = clone.querySelector("#book");
  cloneBook.querySelectorAll(".page").forEach((p, i) => {
    const row = state[i];
    p.classList.add("active");
    applyState(p, row);
    p.querySelectorAll('input[type="file"], .photo-tools, .line-controls, .signature-tools')
      .forEach(el => el.remove());
    p.querySelectorAll(".line-inputs input").forEach(el => {
      el.setAttribute("value", el.value);
    });
  });
  clone.querySelector(".toolbar")?.remove();
  const blob = new Blob(["<!DOCTYPE html>\n" + clone.outerHTML], {
    type: "text/html;charset=utf-8"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "anuario-30-plantillas-editado.html";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
});

loadSaved();
show(0);
