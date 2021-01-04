const mongoose=require('mongoose');

const bookSchema = mongoose.Schema({
    name: String,
    publishYear: Number,
    author: String,
 },
 {timestamps: true});


const user=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    friend:[],

    book:[bookSchema],
});

module.exports=User=mongoose.model('user',user);