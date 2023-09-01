const express = require("express");
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./model/post")

 

app.engine("handlebars", handlebars({defaultLayout:"main"}))
app.set("view engine", "handlebars")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

 
app.get("/", function (req,res){
    res.render("primeira_pagina")
})

 

app.post("/cadastrar", function(req,res){
    post.create({
        nome:req.body.nome
    }).then(function(){
        console.log("Dados gravados")
        res.send("Cadastro feito")
    }).catch(function(erro){
        console.log("Erro" + erro)
    })

})

 

app.listen(8081,function(){
    console.log("Servidor ativo")
})