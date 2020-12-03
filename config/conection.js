const mysql= require('mysql2');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'base_de_datos_backen'
})
module.exports=connection;