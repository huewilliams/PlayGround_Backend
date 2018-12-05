const mysql = require('mysql');

module.exports = () => {
    return {
        init : ()=>{
            return mysql.createConnection({
                host : '13.59.174.126',
                user : 'root',
                password : '1234',
                port : '3306',
                database : 'playground'
            })
        },

        open : (con) => {
            con.connect((err)=>{
                if (err) {
                    console.error('mysql connection error');
                } else {
                    console.info('mysql is connected successfully');
                }
            })
        }
    }
};
