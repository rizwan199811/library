/**
 * RoleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    get: async (req, res) => {
            let roles = await Role.find().populate('permissions')
            res.status(201).json({
                message: "Roles fetched successfully",
                data: roles
            });
        
    },
};

