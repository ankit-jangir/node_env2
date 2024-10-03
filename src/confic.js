require('dotenv').config();
const monsooge = require('mongoose')
const url = process.env.mongodb
console.log(url)

const mongodb = ()=>{
    monsooge.connect(url)
    .then(()=>{
        console.log("mongoodb is conneted .....");
        
    })
    .catch((error)=>{
        console.log(error);
        
    })
    
}
mongodb()
module.exports  = {mongodb}
// module.exports  = m