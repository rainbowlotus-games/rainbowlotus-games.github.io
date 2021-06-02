const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

const port = process.env.PORT || 6969;
app.listen(port, () => console.log("Server running on: http://0.0.0.0:" + port));