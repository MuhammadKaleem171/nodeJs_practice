const mongoose=require('mongoose');
const User=require('./User')

const Personal=require('../Personal')
const Book=require('../Model/Books')
const Publisher =require('../Model/Publisher')
var express = require('express');
const Product = require('../Model/Product');

module.exports=function(app,db){

app.post('/book',(req,res)=>{
    console.log(req)
    Book.create(req.body)


res.json(req.body)
});
app.post('/addPublisher', async (req, res) => {
    try {
       const publisher = new Publisher(req.body);
       await publisher.save();
       res.status(201).json({success:true, data: publisher });
 
    } catch (err) {
       res.status(400).json({success: false, message:err.message});
    }
 });
// ///////////////////////////////////////////////////////////////
// app.post('/addBo/:pp', async (req, res)=>{ 
//     console.log(req.params.pp)
//     try {
// const aa=await user.find({_id:req.params.pp})
//  console.log(aa)
//      User.findByIdAndUpdate({_id:req.params.pp}
//         ,{
//             $push:{
                
//             }});
//        res.status(200).json({success:true, data: book })
 
//     } catch (err) {
//        res.status(400).json({success: false, message:err.message})
//     }
//  })


///////////////////////////////////////////////////////////////
    app.post('/personal', async(req,res)=>{
        const personal=new Personal({
            Name:req.body.Name,
            Comments:req.body.Comments
        });
        await personal.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })


    })


    //
    app.get('/personal/:pp',async(req,res)=>{
        try{
            const per= await Personal.find({"Name":req.params.pp})
            res.json(per)
        }
        catch(err){
            res.json({message:err})
        }
      
    })
    ////////////////////

    
app.get('/users',async (req,res)=>{
    try{
        const u=await User.find();
        res.json(u)
    }
catch(err){
    res.json({message:err})
}
})

app.get('/:pp',async(req,res)=>{
    try{
        const user= await User.find({_id:req.params.pp})

        const user1 =await User.find({"book.publishYear":2020})
        
        if(user!=null){
        console.log(user)
        console.log(" hhhh",user1.book.name)
        }
        res.json(user);
    }
    catch(err){
        res.json({message:err})
    }
  
})

app.post('/add/:pp', async (req, res)=>{ 
    try {
        const user = await User.find({_id:req.params.pp})
        console.log(user)
     await User.findOneAndUpdate({_id:req.params.pp}
        ,{
            $push: {
                book: { name:req.body.name,
                    publishYear:req.body.publishYear,
                    author:req.body.author,

                }
            }});
       res.status(200).json({success:true, data:User})
 
    } catch (err) {
       res.status(400).json({success: false, message:err.message})
    }
 });
///////////////////////////////////////
 app.post('/addFriend/:pp', async (req, res)=>{ 
    console.log(req.params.pp)
const n="kaeemm"
    try {
        const user = await User.find({_id:req.params.pp})
        console.log(user)
     await User.findOneAndUpdate({_id:req.params.pp}
        ,{
            $push: {
                friend:req.body,
                }
            });
       res.status(200).json({success:true, data:User})
 
    } catch (err) {
       res.status(400).json({success: false, message:err.message})
    }
 })

    app.post('/users', async (req,res)=>{
        const user=new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName
        });
       await user.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
    });
///////////////////////////////////////////////////////////////////////////////////
//Products schema

app.get('/',async (req,res)=>{
    console.log('jeee')
    try{
        const u=await Product.find();
        res.json(u)
    }
catch(err){
    res.json({message:err})
}
})

///////////////////////////////////////////////////////////////
    app.post('/product',async(req,res)=>{
        const product=new Product({
            id:req.body.id,
            title:req.body.title,
            routeName:req.body.routeName
        });
        await product.save().then(
            data=>{
                res.json(data)
            }).catch(err=>{
                res.json(err)
            })
    });
    ///////////////////////////////////////////////////////
////Add items in Product
    app.post('/addItem/:pp', async (req, res)=>{
        console.log(req.body)
        try {
            const user = await Product.find({title:req.params.pp})
         await Product.findOneAndUpdate({title:req.params.pp}
            ,{
                $push: {
                    items: { id:req.body.id,
                        name:req.body.name,
                        imageUrl:req.body.imageUrl,
                        price:req.body.price
                    }
                }},
                { new: true, useFindAndModify: false }
                );
           res.status(200).json({success:true, data:User})
     
        } catch (err) {
           res.status(400).json({success: false, message:err.message})
        }
     });


    app.post('/check',  (req,res)=>{
       console.log(req.body)
      res.json(req.body)
    })

    app.post('/check/:pp',  (req,res)=>{
        console.log(req.body)
        console.log(req.params.pp)
       res.json(req.body)
     })


}