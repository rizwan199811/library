/**
* BookController
*
* @description :: Server-side actions for handling incoming requests.
* @help        :: See https://sailsjs.com/docs/concepts/actions
*/


module.exports = {
    create:async(req,res)=>{
        let params = req.allParams();
        let user = await User.findOne({ id: params.user }).populate('role');
        let role=user?user.title.role :''
        let admin =await Admin.findOne({id:params.user});
        
        if(role==='staff'||admin){
            // let data=[];
            // let title=[];
            
            // for(let i=0;i<10000;i++) {
                
            //     title[i] = `Book ${i}`
                
            //     data.push({'title':title[i]})
                
            //     await Book.create(data[i]).fetch();
                
            // }
            let book=await Book.create(params).fetch();
            return res.status(201).json({ 
                message:"Book added successfully",
                data:book 
            });
        }
        else{
            return res.status(400).json({ 
                message:"Something went wrong" 
            });
        }
    },
    borrow:async(req,res)=>{
        let params = req.allParams();
        console.log(params);
        let user = await User.findOne({ id: params.member }).populate('role');
        let role=user?user.role.title :''
        if(role==='member'){   
            let borrowBook=await Issue.create(params).fetch();
            return res.status(201).json({ 
                message:"Book borrowed request submit successfully",
                data:borrowBook 
            });
        }
        else{
            return res.status(400).json({ 
                message:"Something went wrong" 
            });
        }
    },
};

