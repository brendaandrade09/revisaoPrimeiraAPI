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
    {id: 1, nome: "Meel", curso: "Direito"},
    {id: 2, nome: "Matt", curso: "Mecatrônica"},
    {id: 3, nome: "Jack", curso: "Administração"},
    {id: 4, nome: "Luk", curso: "Desenvolvimento de sistemas"},
]

app.get("/",(req,res)=>{
    res.json({
        mensagem: "API alunos funcionando!"
    })
})

const PORTA = 3000;

app.listen(PORTA,()=>{
    console.log(`Servidor iniciado com sucesso!`);
    console.log(`http://localhost:${`${PORTA}`}`);
})