let currentIndex = 0;

function slide(direction) {
  const container = document.getElementById("instructorsContainer");
  const cards = container.querySelectorAll(".instructor-card");
  const cardWidth = cards[0].offsetWidth; // Width of one card

  currentIndex = (currentIndex + direction + cards.length) % cards.length;

  container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
