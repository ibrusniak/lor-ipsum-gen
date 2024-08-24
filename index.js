
import express from "express";
import settings from "./settings.js";
import shitGenerator from "./utils/shit-generator.js";

const app = express();

app.get('/', (req, res) => {
    res.send(shitGenerator())
});

app.listen(settings.PORT)

