const cards = document.querySelectorAll(".card");
const letterBtn = document.getElementById("letterBtn");

let opened = 0;

cards.forEach(card => {

    card.addEventListener("click", () => {

        if (card.classList.contains("flipped")) return;

        card.classList.add("flipped");

        opened++;

        if (opened === cards.length) {
            letterBtn.style.display = "block";
        }

    });

});