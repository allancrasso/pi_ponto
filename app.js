const express = require ('express'); //instanciando a classe do Express
const app = express(); // atribuindo uma variável para utilização nos métodos
const Sequelize = require('sequelize'); //instanciando a classe do Sequelize
const db = require ('./ponto'); //instanciando a classe do ponto que possui as querys
const sequelize = require('./db'); //instanciando a classe de conexão com BD



// método de análise de arquivos JSON e passadas para arquivos req.body

app.use (express.json()); 

// Rota do tipo GET - Página Inicial

app.get ('/', async (req, res)=>{
    res.send('Essa rota chamará seu Front!! Essa é a deixa para o intervalo');
});

// Rotas do tipo POST 
app.post('/cadastrar',async(req,res)=>{
    console.log (req.body);

    await db.create(req.body);

    res.send ("Cadastro Realizado com sucesso");
  })



app.listen(3000, ()=>{
    console.log('Servidor iniciado')
});