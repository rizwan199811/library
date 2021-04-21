/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create:async(req,res)=>{
        // console.log(req)
        let admin= await Admin.findOne({email:'rizwan.199811@gmail.com'});
        if(admin){
        await Admin.create({...req.body});
        return res.status(201).json({ 
            message:"Admin created successfully" 
        });
        }
        else{
            return res.status(400).json({ 
                message:"Something went wrong" 
            });
        }
    },
    get:async(req,res)=>{
        // console.log(req)
        let admin= await Admin.find({email:'rizwan.199811@gmail.com'}).populate('users');
        if(admin){
        return res.status(201).json({ 
            message:"Admin fetched successfully",
            data:admin 
        });
        }
        else{
            return res.status(400).json({ 
                message:"Something went wrong" 
            });
        }
    },

};

