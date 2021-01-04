
const mongoose=require('mongoose');

const itemSchema = mongoose.Schema({
    id: Number,
    name: String,
    imageUrl: String,
    price:Number
 },
 {timestamps: true});


const product=new mongoose.Schema({
    id:{
        type:Number
    },
    title:{
        type:String
    },
    routeName:{
        type:String
    },

    items:[itemSchema],
});

module.exports=Product=mongoose.model('product',product);