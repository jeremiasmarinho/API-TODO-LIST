const mongoose = require("mongoose");

const user = "admin";
const pass = "abcd123456";
const database = "todo_single";
const serverName = "cluster0.1gyyu.mongodb.net";

module.exports ={
  init: () => {
    mongoose 
    .connect(
      `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
    
   )
   .then((res) => console.log(`Connection Succesful ${res}`))
   .catch((err) => console.log(`Error in DB connection ${err}`));
},
};