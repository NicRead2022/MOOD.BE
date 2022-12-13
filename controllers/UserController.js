
const { User } = require('../models')
const songs = require('../models/user')




const CreateNewUser = async (req, res) => {
  try {
    const newUser = await User.create({ ...req.body })
    res.send(newUser)
  } catch (error) {
    throw error
  }
}


const DeleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.user_id } })
    res.send({
      msg: 'User Deleted',
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateNewUser,
  DeleteUser
}