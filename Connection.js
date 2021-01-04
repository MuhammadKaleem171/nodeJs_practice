const mongoose=require('mongoose')

const URI="mongodb+srv://dbUser:dbUser@cluster0.s9ru6.mongodb.net/dbUser?retryWrites=true&w=majority"

const ConnectDB=async()=> {

    await mongoose.connect(URI,{useUnifiedTopology:true,
    useNewUrlParser:true,useFindAndModify:true,
    });
    console.log("db connect ")
};
module.exports=ConnectDB;