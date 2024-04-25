
import * as mysql from 'mysql'


export async function connect()
{

    let p = new Promise(function (res, rej) {

        var con =  mysql.createConnection({
            host: process.env.mysqlhost,
            user: process.env.mysqluser,
            password: process.env.mysqlpassword,
            database: process.env.mysqldatabase 

          });
    
          con.connect(function(err) {
            if (err) throw err;
        //    console.log("Connected!");
            res(con);
          });
    
          });
    
          return p;

}


export  async function query(query, db)
{

    let p = new Promise(function (res, rej) {
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            res(result);
          });
        });

    return p;
}




export  async function update(query, params, db)
{


    let p = new Promise(function (res, rej) {
        db.query(query, params, function (err, result, fields) {
            if (err) 
            {
              console.log(err);
              res(err);
            }
            res(result);
          });
        });

    return p;
}


