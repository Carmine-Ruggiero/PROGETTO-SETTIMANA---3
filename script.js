// --- Logica per il cambio tema ---
const bottoneTema = document.getElementById('cambia-tema');

bottoneTema.addEventListener('click', () => {
  // Attiva/disattiva la modalità notte sul tag body
  document.body.classList.toggle('dark-mode');

  // Cambia dinamicamente il testo del bottone a seconda dello stato
  if (document.body.classList.contains('dark-mode')) {
    bottoneTema.innerHTML = "☀️ Modalità Giorno";
  } else {
    bottoneTema.innerHTML = "🌙 Modalità Notte";
  }
});


const immaginiData = [
  { id: 1, src: "assets/bus.JPG", alt: "foto1", descrizione:" Londra-2025 £49.90", preferita: true },
  { id: 2, src: "assets/boccaalsignore.jpeg", alt: "foto2 ", descrizione:" Edinburgo-2024 £59.90", preferita: false },
  { id: 3, src: "assets/copenaghen.jpeg", alt: "foto3", descrizione:" Copenaghen-2026 £79.90", preferita: true },
  { id: 4, src: "assets/laplaya.jpeg", alt: "foto4",descrizione:" Santa Pola- 2024 £29.90",preferita: false },
  { id: 5, src: "assets/libri.jpg", alt: "Paesaggio 5", descrizione:" Londra-2022 £19.90", preferita: true },
  { id: 6, src: "assets/naples.jpeg", alt: "Paesaggio 6",descrizione:"Napoli-2022 £35.90", preferita: false },
  { id: 7, src: "assets/cinema.jpeg", alt: "Paesaggio 7",descrizione:"Aberdeen-2023 £27.90", preferita: false },
  { id: 8, src: "assets/colmar.jpeg", alt: "Paesaggio 7",descrizione:"Comar-2024 £39.90", preferita: false },
  { id: 9, src: "assets/street.jpeg", alt: "Paesaggio 7",descrizione:"Parigi-2024 £19.90", preferita: false },


];

/*  Ciclo immagini */
function renderImmagini() {
  const galleria = document.getElementById("galleria");
  
  
  if (!galleria) return; 
  galleria.innerHTML = "";
  immaginiData.forEach((immagine) => {
    // Corretti i tag HTML e rimosso lo spazio vuoto nell'attributo src
    galleria.innerHTML += `
      <div class="card"> 
        <img src="${immagine.src}" alt="${immagine.alt}">
        <h3>${immagine.descrizione}</h3>
      </div>
    `;
  });
}
document.addEventListener("DOMContentLoaded", renderImmagini);











