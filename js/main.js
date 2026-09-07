"use strict";

import {Buttons} from "./Buttons.js";

const page = {
    navArea: document.getElementById('nav'),
    menuArea: document.getElementById('menu'),
    frameArea: document.getElementById('frame'),
    toggleMenuButton: document.getElementById('toggleMenuButton'),
    navButtons: document.getElementsByClassName('navButton')
}

page.toggleMenuButton.addEventListener('click', toggleMenu);
page.menuArea.addEventListener('click', toggleMenu);

for (const navButton of page.navButtons) {
    navButton.addEventListener('click', () => {
        page.frameArea.innerHTML = navButton.dataset.content;
    });
}

const buttons = new Buttons();
buttons.createButtons(page.menuArea, page.frameArea);

function toggleMenu() {
    page.menuArea.classList.toggle('open');
}

