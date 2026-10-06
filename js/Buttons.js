"use strict";

export class Buttons {
    buttons = [
        [
            {
                caption: "Bezoekschema 2026",
                src: "https://docs.google.com/spreadsheets/d/1a2_cVVDIomOeFYkNDGKFvnw_vgDts2E3QRl1bkC4kHo/edit?gid=1101797348#gid=1101797348",
                class: "btn btn-outline-dark",
            },
        ],
        [
            {
                caption: "Toogdienst Klup",
                src: "https://docs.google.com/spreadsheets/d/1nc-tDv5lfuBQ_TIoT6terHGrxwVp7RNfeWfSFBSNcHs/edit?fbclid=IwY2xjawQsfY5leHRuA2FlbQIxMABzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeJh5yTXUbhhvyMDt5pyv6Kp4JMNq6AtE2F0zgZ0WxkO6lHWQsWIc8HWt2dBs_aem_fibgaIhYIHwklzau3wWN1g&gid=0#gid=0",
                class: "btn btn-outline-dark",
            },
        ],
        [
            {
                caption: "Facturen overzicht",
                src: "https://docs.google.com/spreadsheets/d/1zpvDQfY2cFlueKjPPVI6R3sbvnztoyaY4s205nJrNrQ/edit?gid=0#gid=0",
                class: "btn btn-outline-dark",
            },
            {
                caption: "Gemeenschappelijke kosten",
                src: "https://docs.google.com/spreadsheets/d/1l3H3adVdlAXLorO-eOIsMOKM9mMRxwGkQ6BALM8HrXE/edit?gid=306406443#gid=306406443",
                class: "btn btn-outline-dark",
            },
            {
                caption: "Lening Jean",
                src: "https://docs.google.com/spreadsheets/d/1hrrxmz9rdRAX64JKhOga46nYVB0fecHmR0Md85w5vsM/edit?gid=0#gid=0",
                class: "btn btn-outline-dark",
            },
            {
                caption: "Verbouwing",
                src: "https://docs.google.com/spreadsheets/d/1mYYyDWjkaQuP2076mpusDJ_IIldsN1vlXRbLosPN6Zw/edit?gid=0#gid=0",
                class: "btn btn-outline-dark",
            },
        ],
        [
            {
                caption: "Health & excersise",
                src: "https://docs.google.com/spreadsheets/d/1isfAgHKr52Mrb2ftTqcW2tEpaqn965W_mYrUlsAPzXs/edit?gid=0#gid=0",
                class: "btn btn-outline-dark",
            },
        ],
        [
            {
                caption: "DHP Leden",
                src: "https://docs.google.com/spreadsheets/d/1SFTuvDYIK9Sr3HfxNutxKY9mBdDEuOieHom0LCT89qg/edit?usp=drive_link",
                class: "btn btn-outline-dark",
            },
            {
                caption: "DHP Wedstrijdkalender",
                src: "https://docs.google.com/spreadsheets/d/1iXVj8Xv2dkjBSMzRtyEfATDNnNZO_7NQK346uV7orQ8/edit?usp=drive_link",
                class: "btn btn-outline-dark",
            },
            {
                caption: "DHP Vervoersonkosten",
                src: "https://docs.google.com/spreadsheets/d/1eANVL50nrgh5tRluM3cYs9JOLt_UG_ClxioV1-of-Nw/edit?usp=drive_link",
                class: "btn btn-outline-dark",
            },
        ],
    ];

    createButtons(area, frameArea) {
        let buttonArea = document.createElement("div");
        buttonArea.classList.add("buttonCategory");
        for (const category of this.buttons) {
            const div = document.createElement("div");
            for (const button of category) {
                const newButton = document.createElement("button");
                newButton.innerHTML = button.caption;
                newButton.className = button.class;
                newButton.addEventListener("click", () => {
                    frameArea.src = button.src;
                });
                // newButton.dataset.link = button.src;
                div.appendChild(newButton);
            }
            buttonArea.appendChild(div);
        }

        area.appendChild(buttonArea);
    }
}