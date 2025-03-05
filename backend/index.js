const express = require("express");
const app = express();
const connect = require("./mongoDB");

app.get("/",(request,response)=>{
    try{
        response.status(200).send({msg:"E-commerce code along backend"});
    }
    catch (error) {
        response.status(500).send({msg:"Something went wrong"});
    }
})

app.listen(8000,async()=>{
    try{
        await connect();
        console.log("Server connected");
    }
    catch (error) {
        console.log("Server not connected",error);
    }
})