const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('ponto','root','',{dialect:'mysql',host:'localhost'});

sequelize.authenticate()
.then (function(){
    console.log('conectado com o BD');
})
.catch (function(){
    console.log ('Erro de conexão');
}

)

module.exports = sequelize;