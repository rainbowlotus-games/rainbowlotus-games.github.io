import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.projectId = params.id;
        this.setTitle("Connect with me");
    }

    async getHtml() {
        return /*html*/ `
            <h1>Connect</h1>
            <p>Message me on any of these things!</p>
        `;
    }
}
