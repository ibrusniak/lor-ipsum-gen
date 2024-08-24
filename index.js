
import express from "express";
import settings from "./settings.js";
import shitGenerator from "./utils/shit-generator.js";

const app = express();

app.get('/', (req, res) => {

    let str = "";
    try {
        const wordsCount = (req.query.words) ? Number(req.query.words) : 10;
        str = shitGenerator(wordsCount)
    } catch (ex) {
        res.send(
            JSON.stringify({ error: ex })
        );
        return;
    }
    res.send(
        JSON.stringify({lorem: str})
    );
});

app.listen(settings.PORT)
