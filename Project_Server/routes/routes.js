const express=require('express');
const router =express.Router();
const Model= require("../model/model")
//POST


router.post('/createPost',async(req,res)=>{

    const newPost= new Model({
        title:req.body.title, 
        author:req.body.author,
        content:req.body.content
    })
    try{
        const result=await newPost.save();// waits until is saved... nhi toh aaage nhi bdega
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({message:error.message})

    }
    // res.send("post created");

})

// GET
router.get('/getAllPost', async (req,res)=>{

    const result =await Model.find();
    


    try{
        const result=await Model.find();// waits until is saved... nhi toh aaage nhi bdega
        res.status(200).json(result)
        console.log(result);
    }
    catch(error){
        res.status(500).json({message:error.message})

    }
    // res.send("All Post Data :- ")
})

//  GET Id

router.get('/getPost/:id', async(req,res)=>{
    const id =req.params.id;
    // res.send(`post with id ${id}`);
    try{
       const result= await Model.findById(id)
      
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({message:error.message})

    }
})

// Patch edit post

router.patch('/editPost/:id', async(req,res)=>{

    const id=req.params.id;
    
        try{
            const body=req.body;
            const options={new:true}
            const result= await Model.findByIdAndUpdate(id,body,options)
        
             res.send(result)
         }
         catch(error){
             res.status(400).json({message:error.message})
     
         }
        
   
    
 
  
    
})

// Delete
router.delete('/deletepost/:id', async(req,res)=>{
    
    const {id,noteid} =req.params;
   
    res.send(`delete post with id ${id}`)

    try{
            
        const result= await Model.findByIdAndDelete(id)
         
         res.send.data;
        
     }
     
     catch(error){
         res.status(400).json({message:error.message})
 
     }
})




module.exports =router;
