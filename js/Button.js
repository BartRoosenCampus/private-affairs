"use strict";

export class Button {
    caption;
    src;
    style;

    constructor(caption, src, style = "btn btn-outline-dark") {
        this.caption = caption;
        this.src = src;
        this.style = style;
    }

    get caption() {
        return this.caption;
    }

    get src() {
        return this.src;
    }

    get style() {
        return this.style;
    }

    create(frameArea) {
        const newButton = document.createElement("button");
        newButton.innerHTML = this.caption;
        newButton.className = this.style;
        newButton.addEventListener("click", () => {
            frameArea.src = this.src;
        });

        return newButton;
    }
}