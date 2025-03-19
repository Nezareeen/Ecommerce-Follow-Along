const express = require("express");

const productRouter = express.Router();

const productModel = require("../models/productModel")

productRouter.post("/addproduct",async(request,response)=>{
    try {
        const {title,description,price} = request.body;
        if(!title || !description || !price){
        return response.status(404).send({msg:"Please add all fields"});
        }
    } catch (error) {
        return response.status(500).send({msg:"Something went wrong",error});
    }
})