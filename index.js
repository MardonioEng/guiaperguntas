const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    let exibirMsg = true;
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Dev Marodrigues",
        inscritos: 8001,
        msg: exibirMsg,
    });
});

app.listen(3000, ()=>{console.log("App rodando...")});