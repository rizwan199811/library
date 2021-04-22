/**
 * IssueController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */





module.exports = {
    create: async (req, res) => {
        let params = req.allParams();
        let user = await User.findOne({ id: params.member }).populate('role')
        let admin =await Admin.findOne({id:params.member});
        let role=user?user.title.role :''
        if (role==='staff'||admin) {
            let issue = await Issue.create(params).fetch();
            res.status(201).json({
                message: "Issue created successfully",
                data: issue
            });
        }
        else {
            res.status(400).json({
                message: "Something went wrong"
            });
        }
    }

};

