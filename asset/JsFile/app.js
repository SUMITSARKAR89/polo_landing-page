const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    });



// ==========project card=============


const projectCard = document.querySelectorAll('.project-card');

projectCard.forEach(card => {
    const icon = card.querySelector('.project-icon');

    card.addEventListener('mousemove', (e) => {
      let rect = card.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      icon.style.left = `${x}px`;
      icon.style.top = `${y}px`;
    });
  });