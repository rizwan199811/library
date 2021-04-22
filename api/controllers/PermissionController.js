/**
 * PermissionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
    create: async (req, res) => {
        let params = req.allParams();
        console.log(params);
        let admin = await Admin.findOne({ id: params.admin });
        if (admin) {
            let permit = await Permission.create(params).fetch();
            await Role.updateOne({ id: permit.role }).set({ permissions: permit.id })
            res.status(201).json({
                message: "Permission created successfully",
                data: permit
            });
        }
        else {
            res.status(400).json({
                message: "Something went wrong"
            });
        }
    },
    get: async (req, res) => {
        let params = req.allParams();
        let permits = await Permission.findOne({ role: params.role }).populate('role')
        let user =await User.findOne({role:permits.role.id})
        console.log(user);
        if (user) {
            res.status(201).json({
                message: "Permission fetched successfully",
                data: permits
            });
        }
        else {
            res.status(400).json({
                message: "Role not found"
            });
        }
    }

};

