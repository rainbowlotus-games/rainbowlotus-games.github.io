import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.projectId = params.id;
        this.setTitle("Viewing Project " + this.projectId);
    }

    async getHtml() {
        return `
            <h1>Project</h1>
            <p>You are viewing project #${this.projectId}.</p>
        `;
    }
}
