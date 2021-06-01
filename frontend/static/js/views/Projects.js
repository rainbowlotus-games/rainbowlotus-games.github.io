import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.workId = params.id;
        this.setTitle("Projects");
    }

    async getHtml() {
        return `
        <div>
            <h1>This is a bit of my work:</h1>
        </div>
        <div>
            <p>Whooops! There is none here yet! omg roflmao</p>
        </div>
        `;
    }
}