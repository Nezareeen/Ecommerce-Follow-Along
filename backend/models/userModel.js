const mongoose = require("mongoose");

const schema = mongoose.schema({
    name:{type:string,required:true},
    email:{type:string,required:true},
    password:{type:string,required:true},
    image:{type:string}
})

const usermodel = mongoose.model("users",schema);

module.exports = {usermodel}