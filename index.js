const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Dev Marodrigues",
        inscritos: 8001
    });
});

app.listen(3000, ()=>{console.log("App rodando...")});