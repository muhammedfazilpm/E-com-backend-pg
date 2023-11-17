
require('dotenv').config()
const Pool=require('pg').Pool
console.log(process.env.PASSWORD)
const pool=new Pool({
    host:'localhost',
    user:'postgres',
    port:5432,
    database:'products',
    password:process.env.PASSWORD
})

module.exports=pool