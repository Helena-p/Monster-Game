import { monsters } from "./monsters.js";
import { shuffle, cleanHTML } from "./helpers.js";

const app = document.querySelector("#app");
const playAgainButton = document.querySelector(".replay-button");
const imgURL =
    "https://gist.githubusercontent.com/cferdinandi/d40f6a589c60eeb7fa10de9cca212cec/raw/29eaac94f4201691cf31d76787c6f867838d63f0/";
let counter = 0;

const gridToggler = () => app.classList.toggle("row");

const getImage = (monster, door) => {
    const img = document.createElement("img");
    img.src = `${imgURL}${monster.name}.svg`;
    img.alt = `${monster.alt}`;
    img.classList.remove("cursor");
    door.replaceWith(img);
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

const winLose = (monster) => {
    if (monster.name === "sock") {
        gridToggler();
        window.location.href = "../pages/lose.html";
        return;
    } else if (counter === 11) {
        gridToggler();
        window.location.href = "../pages/win.html";
        return;
    } else {
        document.querySelector(
            "[data-counter]"
        ).textContent = `Monsters found: ${++counter}`;
    }
};

const clickHandler = (event) => {
    let door = event.target.closest("[data-monster]");
    if (!door) return;
    let monster = monsters[door.getAttribute("data-monster")];
    if (!monster) return;

    getImage(monster, door);
    winLose(monster);
};

const init = (event) => {
    window.location.href = "../../index.html";
    document.querySelector("[data-counter]").innerHTML = `<p>&nbsp;</p>`;
    counter = 0;

    gridToggler();
    getMonsters();
};

document.addEventListener("click", clickHandler);
playAgainButton.addEventListener("click", init);
init();
