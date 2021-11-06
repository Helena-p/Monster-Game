import { monsters } from "./monsters.js";
import { shuffle, cleanHTML } from "./helpers.js";

const app = document.querySelector("#app");
const playAgainButton = document.querySelector(".replay-button");
const imgURL =
    "https://gist.githubusercontent.com/cferdinandi/d40f6a589c60eeb7fa10de9cca212cec/raw/29eaac94f4201691cf31d76787c6f867838d63f0/";
let counter = 0;

const winLose = (monster) => {
    if (monster.name === "sock") window.location.href = "src/pages/lose.html";
    if (counter === 11) window.location.href = "src/pages/win.html";
};

const getImage = (monster, door) => {
    const img = document.createElement("img");
    img.src = `${imgURL}${monster.name}.svg`;
    img.alt = `${monster.alt}`;
    img.classList.remove("cursor");

    winLose(monster);

    door.replaceWith(img);
    document.querySelector(
        "[data-counter]"
    ).textContent = `Monsters found: ${++counter}`;
};

const getMonsters = () => {
    app.innerHTML = cleanHTML(
        shuffle(monsters)
            .map((_, index) => {
                return `<div class="grid" aria-live="polite">
        <button data-monster="${index}"><img class="cursor" alt="Door number ${
                    index + 1
                }" src="${imgURL}door.svg"/></button>
      </div>`;
            })
            .join("")
    );
};

const clickHandler = (event) => {
    let door = event.target.closest("[data-monster]");
    if (!door) return;
    let monster = monsters[door.getAttribute("data-monster")];
    if (!monster) return;

    getImage(monster, door);
};

const init = () => {
    document.querySelector("[data-counter]").innerHTML = " ";
    counter = 0;
    getMonsters();
};

document.addEventListener("click", clickHandler);

if (playAgainButton) {
    playAgainButton.addEventListener(
        "click",
        () => (window.location.href = "../../index.html")
    );
}
init();
