const mysql = require('mysql2');

process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

let urlDB;

if(process.env.NODE_ENV==='dev'){
    urlDB={
        host:'localhost',
        user:'root',
        password:'',
        database:'base_de_datos_backen'
    }
}else{
    urlDB={
        host:'85.10.205.173',
        user:'adsi_kennyandres',
        password:'12345678',
        database:'base_de_backen'
    }
}

const connection=mysql.createConnection(urlDB);

module.exports=connection;