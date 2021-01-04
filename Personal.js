const mongoose=require('mongoose');

const Personal=new mongoose.Schema({
    Name:{
        type:String
    },
    Comments:{
        type:String
    },
    DateOfBirth:
        { type: Date, default: Date.now 
    }

});

module.exports=User=mongoose.model('Personal',Personal);