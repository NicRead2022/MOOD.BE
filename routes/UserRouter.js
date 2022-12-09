const router = require('express').Router()
const controller = require('../controllers/UserController')

router.post('/', controller.CreateUser)
router.delete('/:user_id', controller.DeleteUser)

module.exports = router
