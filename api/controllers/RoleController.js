/**
 * RoleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async (req, res) => {
        let params = req.allParams();
        let user = await User.findOne({ id: params.user });
        if (user) {
            let roles = await User.create(params).fetch();
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

