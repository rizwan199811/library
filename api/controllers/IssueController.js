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
        console.log(admin)
        // console.log(user);
        let role=user?user.role.title :''
        if (role==='staff'||admin) {
            // console.log(params)
            let issue = await Issue.updateOne({id:params.borrow}).set(params);
            // issue=await Issue.updateOne({id:params.borrow}).set({status:params.status});
            // console.log(issue)

            res.status(201).json({
                message: "Book has been successfully issued successfully",
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

