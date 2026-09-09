/* =========================================================
   INICIO
========================================================= */

const introScreen = document.getElementById("introScreen");
const startBtn = document.getElementById("startBtn");
const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", () => {

    introScreen.classList.add("hide");

    setTimeout(() => {

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

});


/* =========================================================
   CORAZONES FLOTANTES
========================================================= */

const floatingContainer =
    document.querySelector(".floating-hearts");

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    const symbols = [
        "♡",
        "♥",
        "❤",
        "✦"
    ];

    heart.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (8 + Math.random() * 10) + "s";

    heart.style.animationDelay =
        Math.random() * 4 + "s";

    floatingContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 19000);

}

setInterval(
    createFloatingHeart,
    700
);


/* =========================================================
   CARTA
========================================================= */

const envelope =
    document.getElementById("envelope");

const openLetterBtn =
    document.getElementById("openLetterBtn");

openLetterBtn.addEventListener(
    "click",
    () => {

        envelope.classList.toggle("open");

        if (envelope.classList.contains("open")) {

            openLetterBtn.textContent =
                "Cerrar carta 💌";

        } else {

            openLetterBtn.textContent =
                "Abrir mi carta 💌";

        }

    }
);


/* =========================================================
   100 RAZONES
========================================================= */

const reasons = [

    "Porque simplemente eres tú. ❤️",

    "Porque tu sonrisa puede cambiar mi día.",

    "Porque tus ojos tienen algo que me encanta.",

    "Porque eres una persona increíble.",

    "Porque contigo puedo ser yo mismo.",

    "Porque haces que los días normales sean especiales.",

    "Porque me haces sonreír sin darme cuenta.",

    "Porque me encanta escucharte.",

    "Porque me encanta pasar tiempo contigo.",

    "Porque siempre consigues ocupar un lugar especial en mi corazón.",

    "Porque me gusta cómo eres.",

    "Porque admiro tu forma de ser.",

    "Porque tienes un corazón muy bonito.",

    "Porque me haces sentir querido.",

    "Porque contigo puedo crear recuerdos increíbles.",

    "Porque me encanta cuando te ríes.",

    "Porque me encanta tu manera de mirar.",

    "Porque tienes una personalidad única.",

    "Porque eres especial para mí.",

    "Porque me gusta cada pequeño detalle de ti.",

    "Porque haces que quiera ser mejor.",

    "Porque contigo aprendí cosas nuevas.",

    "Porque me encanta hablar contigo.",

    "Porque nuestras conversaciones pueden durar horas.",

    "Porque me encanta escucharte contar tus cosas.",

    "Porque tus abrazos se sienten diferentes.",

    "Porque me gusta estar cerca de ti.",

    "Porque contigo el tiempo pasa demasiado rápido.",

    "Porque me haces sentir tranquilidad.",

    "Porque también sabes hacerme reír.",

    "Porque tienes una forma muy bonita de demostrar cariño.",

    "Porque me encanta verte feliz.",

    "Porque tu felicidad también me importa.",

    "Porque quiero seguir conociéndote cada día.",

    "Porque cada momento contigo tiene algo especial.",

    "Porque nuestra historia apenas está comenzando.",

    "Porque ya tenemos recuerdos que nunca voy a olvidar.",

    "Porque nuestra primera cita siempre será especial.",

    "Porque aquel parque de diversiones fue el comienzo de algo hermoso.",

    "Porque los dos estábamos nerviosos.",

    "Porque ahora puedo mirar atrás y sonreír.",

    "Porque me gusta recordar nuestros primeros momentos.",

    "Porque hemos cambiado juntos durante estos meses.",

    "Porque hemos vivido cosas bonitas.",

    "Porque quiero vivir muchas más contigo.",

    "Porque me gusta imaginar nuestro futuro.",

    "Porque quiero seguir creando historias contigo.",

    "Porque eres parte de mis mejores recuerdos.",

    "Porque haces que mi corazón se sienta diferente.",

    "Porque me importas muchísimo.",

    "Porque me gusta cuidar de ti.",

    "Porque quiero verte cumplir tus sueños.",

    "Porque quiero estar ahí para apoyarte.",

    "Porque me encanta verte lograr cosas.",

    "Porque confío en ti.",

    "Porque puedo contar contigo.",

    "Porque me gusta nuestra forma de querernos.",

    "Porque me gusta lo que estamos construyendo.",

    "Porque estos siete meses significan mucho para mí.",

    "Porque cada mes contigo ha dejado un recuerdo.",

    "Porque cada día aprendo algo nuevo de ti.",

    "Porque nunca eres aburrida.",

    "Porque siempre tienes algo que decir.",

    "Porque me gusta tu forma de pensar.",

    "Porque me gusta tu forma de ver las cosas.",

    "Porque tienes una esencia que no se puede copiar.",

    "Porque nadie es como tú.",

    "Porque eres única.",

    "Porque eres mi gorda. ❤️",

    "Porque me encanta llamarte así.",

    "Porque me encanta cuando me llamas.",

    "Porque me gusta saber cómo estuvo tu día.",

    "Porque me importa cómo te sientes.",

    "Porque quiero que siempre puedas contar conmigo.",

    "Porque quiero hacerte feliz.",

    "Porque me encanta compartir mis cosas contigo.",

    "Porque me gusta que formes parte de mi vida.",

    "Porque tú también haces parte de mis planes.",

    "Porque contigo puedo imaginar muchas aventuras.",

    "Porque quiero viajar y conocer lugares contigo.",

    "Porque quiero tener más primeras veces contigo.",

    "Porque quiero seguir celebrando fechas a tu lado.",

    "Porque quiero seguir sorprendiéndote.",

    "Porque quiero seguir viendo esa sonrisa.",

    "Porque quiero seguir mirando esos ojos.",

    "Porque quiero seguir conociendo a esa increíble persona.",

    "Porque cada día encuentro una nueva razón.",

    "Porque siete meses parecen poco cuando estoy contigo.",

    "Porque quiero que sean muchos más.",

    "Porque me haces sentir afortunado.",

    "Porque agradezco haberte conocido.",

    "Porque nuestra historia llegó a mi vida en el momento indicado.",

    "Porque eres una parte muy bonita de mi vida.",

    "Porque contigo tengo recuerdos que valen oro.",

    "Porque me haces querer guardar cada momento.",

    "Porque todavía tenemos muchísimo por vivir.",

    "Porque todavía nos quedan miles de historias.",

    "Porque quiero descubrirlas contigo.",

    "Porque te quiero muchísimo. ❤️"

];

let currentReason = 0;

const reasonText =
    document.getElementById("reasonText");

const reasonNumber =
    document.getElementById("reasonNumber");

const nextReasonBtn =
    document.getElementById("nextReasonBtn");


function showReason() {

    reasonText.style.opacity = "0";

    reasonText.style.transform =
        "translateY(10px)";

    setTimeout(() => {

        reasonText.textContent =
            reasons[currentReason];

        reasonNumber.textContent =
            String(currentReason + 1)
                .padStart(2, "0");

        reasonText.style.opacity = "1";

        reasonText.style.transform =
            "translateY(0)";

    }, 250);

}


nextReasonBtn.addEventListener(
    "click",
    () => {

        currentReason++;

        if (
            currentReason >=
            reasons.length
        ) {

            currentReason = 0;

        }

        showReason();

    }
);


/* =========================================================
   REPRODUCTOR
========================================================= */

const audioPlayer =
    document.getElementById("audioPlayer");

const musicPlayer =
    document.querySelector(".music-player");

audioPlayer.addEventListener(
    "play",
    () => {

        musicPlayer.classList.add(
            "playing"
        );

    }
);

audioPlayer.addEventListener(
    "pause",
    () => {

        musicPlayer.classList.remove(
            "playing"
        );

    }
);

audioPlayer.addEventListener(
    "ended",
    () => {

        musicPlayer.classList.remove(
            "playing"
        );

    }
);


/* =========================================================
   MODAL SORPRESA
========================================================= */

const surpriseBtn =
    document.getElementById("surpriseBtn");

const surpriseModal =
    document.getElementById("surpriseModal");

const closeModal =
    document.getElementById("closeModal");

const modalOverlay =
    document.querySelector(".modal-overlay");


surpriseBtn.addEventListener(
    "click",
    () => {

        surpriseModal.classList.add(
            "show"
        );

        createHeartExplosion();

    }
);


function closeSurprise() {

    surpriseModal.classList.remove(
        "show"
    );

}


closeModal.addEventListener(
    "click",
    closeSurprise
);


modalOverlay.addEventListener(
    "click",
    closeSurprise
);


/* =========================================================
   EXPLOSIÓN DE CORAZONES
========================================================= */

function createHeartExplosion() {

    const amount = 60;

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement("div");

        heart.className =
            "explosion-heart";

        const symbols = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💞",
            "♡"
        ];

        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.setProperty(
            "--x",
            ((Math.random() - .5) * 1000) +
            "px"
        );

        heart.style.setProperty(
            "--y",
            ((Math.random() - .5) * 800) +
            "px"
        );

        heart.style.setProperty(
            "--r",
            ((Math.random() - .5) * 720) +
            "deg"
        );

        heart.style.animationDelay =
            Math.random() * .4 + "s";

        document.body.appendChild(
            heart
        );

        setTimeout(() => {

            heart.remove();

        }, 2500);

    }

}


/* =========================================================
   CORAZONES AL HACER CLICK
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            event.target.closest("button") ||
            event.target.closest(".envelope") ||
            event.target.closest("audio")
        ) {

            return;

        }

        const heart =
            document.createElement("div");

        heart.className =
            "click-heart";

        heart.textContent = "♥";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.setProperty(
            "--x",
            ((Math.random() - .5) * 100) +
            "px"
        );

        heart.style.setProperty(
            "--y",
            (-50 - Math.random() * 100) +
            "px"
        );

        document.body.appendChild(
            heart
        );

        setTimeout(() => {

            heart.remove();

        }, 1000);

    }
);


/* =========================================================
   EFECTO AL CARGAR
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);