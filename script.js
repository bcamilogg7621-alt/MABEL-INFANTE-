// =========================
// BOTÓN DE ENTRADA
// =========================

const botonEntrar = document.getElementById("botonEntrar");
const entrada = document.getElementById("entrada");
const contenido = document.getElementById("contenido");

botonEntrar.addEventListener("click", () => {

    entrada.classList.add("ocultar");

    setTimeout(() => {
        contenido.classList.remove("oculto");
        window.scrollTo(0, 0);
    }, 900);

});


// =========================
// CORAZONES FLOTANTES
// =========================

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.innerHTML = "♡";

    corazon.style.position = "fixed";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.bottom = "-30px";

    corazon.style.fontSize =
        Math.random() * 18 + 12 + "px";

    corazon.style.opacity =
        Math.random() * 0.5 + 0.2;

    corazon.style.color = "#e5b8c5";

    corazon.style.pointerEvents = "none";
    corazon.style.zIndex = "999";

    document.body.appendChild(corazon);

    const duracion =
        Math.random() * 5000 + 5000;

    corazon.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: corazon.style.opacity
            },
            {
                transform:
                    `translateY(-110vh) rotate(${Math.random() * 180 - 90}deg)`,
                opacity: 0
            }
        ],
        {
            duration: duracion,
            easing: "linear"
        }
    );

    setTimeout(() => {
        corazon.remove();
    }, duracion);
}


// Crear corazones cada cierto tiempo

setInterval(crearCorazon, 700);

// =========================
// ANIMACIÓN DE LOS RECUERDOS
// =========================

const recuerdos = document.querySelectorAll(
    ".recuerdo, .foto-recuerdo"
);

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.2
    }
);

recuerdos.forEach((recuerdo) => {
    observador.observe(recuerdo);
});

// =========================
// CARTA INTERACTIVA
// =========================

const botonCarta = document.getElementById("abrirCarta");
const seccionCarta = document.querySelector(".carta");

botonCarta.addEventListener("click", () => {

    seccionCarta.classList.add("abierta");

});

// =========================
// REPRODUCTOR DE MÚSICA
// =========================

const audio = document.getElementById("audio");
const botonMusica = document.getElementById("botonMusica");
const disco = document.querySelector(".disco");

botonMusica.addEventListener("click", () => {

if (audio.paused) {

    audio.play();

    botonMusica.textContent = "❚❚";

    disco.classList.add("girando");

} else {

    audio.pause();

    botonMusica.textContent = "▶";

    disco.classList.remove("girando");

}

});

// =========================
// SORPRESA FINAL
// =========================

const botonSorpresa = document.getElementById("botonSorpresa");
const finalInicio = document.getElementById("finalInicio");
const sorpresa = document.getElementById("sorpresa");

botonSorpresa.addEventListener("click", () => {

    finalInicio.style.display = "none";

    sorpresa.style.display = "block";

});

// =========================
// DETALLE SECRETO
// =========================

const corazonSecreto = document.getElementById("corazonSecreto");
const mensajeSecreto = document.getElementById("mensajeSecreto");

corazonSecreto.addEventListener("click", () => {

    mensajeSecreto.style.display = "block";

    corazonSecreto.textContent = "♥";

});