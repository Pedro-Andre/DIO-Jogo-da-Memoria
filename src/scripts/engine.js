const emojis = [
  "🐞",
  "🐞",
  "🐤",
  "🐤",
  "🦤",
  "🦤",
  "🐧",
  "🐧",
  "🪼",
  "🪼",
  "🐦‍⬛",
  "🐦‍⬛",
  "🦩",
  "🦩",
  "🐶",
  "🐶",
  "🦎",
  "🦎",
  "🦥",
  "🦥",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

const modal = document.querySelector(".modal-container");
const modalBtn = document.getElementById("modal-btn");

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("open-card");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function openModal() {
  if (document.querySelectorAll(".match-card").length === emojis.length) {
    modal.style.display = "block";
  }
}

function closeModal() {
  modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    window.location.reload();
  });
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("match-card");
    openCards[1].classList.add("match-card");
  } else {
    openCards[0].classList.remove("open-card");
    openCards[1].classList.remove("open-card");
  }

  openCards = [];

  if (document.querySelectorAll(".match-card").length === emojis.length) {
    openModal();
    closeModal();
  }
}

for (let i = 0; i < emojis.length; i++) {
  let card = document.createElement("div");
  card.className = "item";
  card.innerHTML = shuffleEmojis[i];
  card.onclick = handleClick;
  document.querySelector(".game").appendChild(card);
}
