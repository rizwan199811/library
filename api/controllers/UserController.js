/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */




module.exports = {
    create: async (req, res) => {
        let params = req.allParams();
        
        let admin = await Admin.findOne({ id: params.admin });
        if (admin) {
            let user = await User.create(params).fetch();
            res.status(201).json({
                message: "User created successfully",
                data: user
            });
        }
        else {
            res.status(400).json({
                message: "Something went wrong"
            });
        }
    }

};

