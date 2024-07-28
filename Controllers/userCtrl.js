const UserModel = require("../Models/userModel")

const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await UserModel.findOne({ email: email })


    //if user not found create a new user
    if (!findUser) {
        const newUser = await UserModel.create(req.body)
        res.json({
            message: "User created successfully",
            success: "true"
        })
    } else {
        res.json({
            message: "User already exists",
            success: "false"
        })
    }

}


const userController = {
    createUser
}

module.exports = userController;