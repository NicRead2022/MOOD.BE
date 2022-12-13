const router = require('express').Router()
const controller = require('../controllers/UserController')

router.post('/', controller.CreateNewUser)
router.delete('/:user_id', controller.DeleteUser)

module.exports = router
