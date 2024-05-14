import {User} from "../models/associations.js"

const userController = {
    async getUserById(req, res) {
        const user = await User.findByPk(1)
        console.log(JSON.stringify(user))
    },
    async getAllUserWithRole(req,res){
        const users = await User.findAll({
            include:"role"
        })
        console.log(JSON.stringify(users))
    }
};
userController.getAllUserWithRole()
export default userController;
