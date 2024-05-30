import {Sequelize} from "sequelize";

const db = new Sequelize("crud_db","root","",{
    host: "localhost",
    dialect: "mysql",
    dialectModule: require('mysql2'),
    port: 3306

})

export default db;