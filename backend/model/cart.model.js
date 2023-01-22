const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    title: String,
    
    image: String,
    price:Number,
    userID:String
})

const CartModel=mongoose.model("cart",cartSchema)


module.exports={
    CartModel
}