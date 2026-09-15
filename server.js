//commonjs
const express = require("express");
const cors = require("cors");

//module
// import express from "express";
// import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// {
//     "nome": "Beren",
//     "curso": "Desenvolvimento de sistemas"
// }

let ALUNOS = [
    { id: 1, nome: "Meel", curso: "Direito" },
    { id: 2, nome: "Matt", curso: "Mecatrônica" },
    { id: 3, nome: "Jack", curso: "Administração" },
    { id: 4, nome: "Luk", curso: "Desenvolvimento de sistemas" },
]

app.get("/", (req, res) => {
    res.json({
        mensagem: "API alunos funcionando!"
    })
})

app.get("/alunos", (req, res) => {
    res.json(ALUNOS);
});

app.get("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);
    const aluno = ALUNOS.find(aluno => aluno.id === id);

if(!aluno){
    return res.status(404).json({
        mensagem: "Aluno não encontrado."
    });
}


app.post("/alunos/cadastrar",(req,res)=>{

});

    res.status(200).json(aluno);
    // console.log(req);
    res.send("Funcionando");
})

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor iniciado com sucesso!`);
    console.log(`http://localhost:${`${PORTA}`}`);
})