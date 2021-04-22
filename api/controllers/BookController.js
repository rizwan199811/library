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

};

