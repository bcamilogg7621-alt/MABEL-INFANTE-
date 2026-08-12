const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const title = document.getElementById('title');

// Función para que el botón NO esquive el cursor/tap
function dodge() {
  noBtn.style.position = 'absolute';
  
  // Calcula posiciones aleatorias dentro del área asignada
  const randomX = Math.floor(Math.random() * 160) - 80; // Movimiento horizontal
  const randomY = Math.floor(Math.random() * 80) - 40;  // Movimiento vertical
  
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Eventos para esquivar tanto en PC (mouseover) como en Móvil (touchstart/click)
noBtn.addEventListener('mouseover', dodge);
noBtn.addEventListener('click', dodge);

// Acción al presionar SÍ
yesBtn.addEventListener('click', () => {
  title.textContent = 'EPA EPA FOTO PENEEEEE!!!! ❤️';
  
 
  noBtn.style.display = 'none';
  yesBtn.style.position = 'static';
  
  // Lluvia de corazones opcional
  createHearts();
});

// Función para animar corazones flotantes
function createHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animation = `floatUp ${Math.random() * 2 + 2}s linear forwards`;
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 4000);
  }
}

// Estilo de animación para los corazones agregados dinámicamente
const style = document.createElement('style');
style.innerHTML = `
  @keyframes floatUp {
    to {
      transform: translateY(-110vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);