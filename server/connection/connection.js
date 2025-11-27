const mysql=require("mysql");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"estateflow2"
});



module.exports=connection;