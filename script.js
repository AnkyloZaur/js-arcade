document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("game-list");

  fetch("games.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error when loaded games!");
      }
      return response.json();
    })
    .then(data => {
      data.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
          <h2>${game.name}</h2>
          <p>${game.description}</p>
          <p><strong>Author:</strong> ${game.author}</p>
          <a href="${game.url}" target="_blank">Play</a>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      container.innerHTML = `<p class="error">${error.message}</p>`;
      console.error("Error, when loading games:", error);
    });
});
