"use strict";

export class Button {
    caption;
    src;
    style;

    constructor(caption, src, style) {
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
}