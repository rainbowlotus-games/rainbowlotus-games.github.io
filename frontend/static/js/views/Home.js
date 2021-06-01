import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <div>
            <h1>Hello, I'm Paul. Stuff about me. Funny joke! Haha.</h1>
        </div>
        <div>
            <p>Take a look at my non-existant socials! Here are some none links, wow.</p>
        </div>
        `;
    }
}