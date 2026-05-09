// script.js

// YOUR PHRASES
const phrases = [
  "One smile can light up the day It feels like home and you just wanna stay.",
  "Two are better than one all the time So there’ll never be a mountain too hard to climb.",
  "Three times I’ll say you’re the best But a million plus times I’ll show why you exceed the rest",
  "Four stars in unison sing your favorite song Slow, melodious, and soothing; suddenly you belong",
  "Five sunsets might be all I’ve ever seen But you are like 42 sunsets in the horizontal scene",
  "When the pressures of life your tired heart pound In me you have a friend in whom you can count",
  "These small windows of the soul that almost close with a smile Long to observe with awe the gem that makes every moment worthwhile",
  "The sight of a new life introduced, tender and fragile Has given me a teary eye, a softened heart, and a soul so thankful",
  "They sparkle like a pure waterfall in direct sunlight I’d be satisfied just to watch them glow even in the cascading darkness of midnight ",
  "Puede estar todo en caos y en descontrol pero una cosa si se, y es que sos mi cafecito y yo tu atol",
  "Le pregunté a la luna si podía verte desde allá tan lejos ¿Por qué? preguntó, y dije que necesito que me la cuiden cuando no puedo por estar tan lejos",
  "Los mejores amigos vienen en paquete de burbuja Muy delicados que para tocar su mundo y ser parte de él debes también venir en paquete de burbuja",
  "Tu ingenio, tu esencia, tu fuerza y valor No hay duda que para mi tu eres un pan de Dios",
  "El día parece no quererse levantar Solo necesita tus rayos de sol para poderse despertar",
  "La neblina llegó y trató de opacarte Mas sabías como brillar desde el corazón, como obra de arte",
  "Tu, simplemente encierras un gran tesoro Y para quien sabe valorarte, eres como un cofre contenedor de tesoros mas preciosos que el oro",
  "Hoy la luna no quiso brillar y me pregunté por qué no vistió con su resplandor el cielo como suele Es que se intimidó cuando te vio brillar y se escondió tras las cortinas del cielo en su cierre",
  "Los bosques de las amazonas se alegran y se escucha su canto cuando llega la lluvia Así también los bosques de mi planeta cuando llegas y lo rocías desde los montes hasta la bahía",
  "What if I told you that you are like the ocean waters? What if I told you that you are like the clearest skies? The strength I see in you is mighty and never dies And there is always space in your heart and I see it in your eyes",
  "a) Si algún día se me acaban las palabras, no es porque no tenga qué decir Sino que estaría asombrado de como obra Dios al darme alegrías que no soy digno de recibir | b.) Tu corazón lindo es como las hojas a una planta En el está la belleza que llena todo su alrededor como una manta",
  "A sunset can be the most enchanting thing in the whole world But it will never feel complete if you absorb it’s energy alone",
  "I’ve noticed your love and admiration for sunsets Oh I’d love to accompany you in the evening sky with my guitar playing the tune of many sonnets",
  "Tu, esa estrella que brilla mas que la luna La luna, mi guía de viaje, ya no veía Se escondió y me dijo, 'Mira esa estrella' La estrella irradiaba aun mas luz que dos lunas",
  "Las olas pegan en la orilla del mar con su fuerza magnifica Lavan las rocas con cada golpe dejándolas limpias Así es para mi la manera que sobreedificas Así como el hierro con hierro se afila, así también el rostro me afinas (Prov. 27:11)",
  "Tener una amiga que aunque casi no la veas Es demasiado importante para tu vida",
  "Hoy me levanté sintiendo mas que ayer Me volvió a sonreír la vida al saber que te volvería a ver",
  "Sos lo que le hacía falta a mi planeta Como el acorde que le dio color a mi canción",
  "Un jardín de rosas bellas siempre florece Todo depende de como el jardinero las riegue",
  "En tus ojos esta escrita toda una eternidad Y en tu alma habita inmensa profundidad El sol reflejado en tus ojitos achocolatados oscuros Con cariño cuentan historias que derriban mis muros",
  "No siempre es necesario enunciar palabras para hablar A veces los ojos dicen todo lo que en verdad quieren comunicar Ventanas del alma, puertas del corazón Encuentra en ellas leyendas escritas con tinta de la mas linda constelación",
  "Sos los rayitos de sol a mi amanecer y el lindo paisaje a mi atardecer",
];

// Create Phrase Cards
const container = document.getElementById("phrasesContainer");

phrases.forEach((phrase, index) => {
  const card = document.createElement("div");
  card.classList.add("phrase-card");

  card.innerHTML = `
    <div class="icon">❤️</div>
    <p>"${phrase}"</p>
    <div class="day">Pensamiento ${index + 1}</div>
  `;

  container.appendChild(card);
});

// Floating Hearts
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 400);

// Music Button
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    bgMusic.play();
    musicBtn.innerHTML = "⏸ Pausar Musica";
    playing = true;
  } else {
    bgMusic.pause();
    musicBtn.innerHTML = "🎵 Reproducir Musica";
    playing = false;
  }
});

// =========================
// PHOTO LIGHTBOX
// =========================

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryItems.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImage.src = image.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});
