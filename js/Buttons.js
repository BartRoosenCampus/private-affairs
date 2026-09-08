"use strict";

import { Button } from "./button.js";

export class Buttons {
    async fetchButtonsData() {
        try {
            const response = await fetch("buttons.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Failed to load button data:", error);
            return [];
        }
    }

    async createButtons(area, frameArea) {
        const buttonsData = await this.fetchButtonsData();

        const buttonArea = document.createElement("div");
        buttonArea.classList.add("buttonCategory");

        for (const category of buttonsData) {
            const div = document.createElement("div");
            for (const item of category) {
                // Pass caption, src, and optional style if provided in JSON
                const button = new Button(item.caption, item.src, item.style);
                div.appendChild(button.create(frameArea));
            }
            buttonArea.appendChild(div);
        }

        area.appendChild(buttonArea);
    }
}