function toggleCards() {
  const cards = document.querySelectorAll(".desc");
  const button = document.getElementById("toggleButton");
  if (button.innerText === "Tampilkan Semua Informasi") {
    cards.forEach((card, index) => {
      if (index >= 3) {
        card.classList.remove("d-none");
      }
    });
    button.innerText = "Sembunyikan Semua";
  } else {
    cards.forEach((card, index) => {
      if (index >= 3) {
        card.classList.add("d-none");
      }
    });
    button.innerText = "Tampilkan Semua Informasi";
  }
}
