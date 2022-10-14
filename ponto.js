const Sequelize = require ('sequelize');
const database = require ('./db');

const db = database.define('pontos',{
    dataPonto:{
        type: Sequelize.DATE,
        defaultValue: new Date()
    },
    ponto_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    tipo_ponto: {
        type: Sequelize.STRING,
        allowNull:false
    },
    observacao: {
        type: Sequelize.STRING,
        allowNull:true
    }
  })
  module.exports = db;