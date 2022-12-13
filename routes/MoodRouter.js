const router = require('express').Router()
const controller = require('../controllers/MoodController')
const { route } = require('./UserRouter')

router.post('/', controller.CreateMood)
router.delete('/:mood_id', controller.DeleteMood)
router.get('/', controller.GetMoods)


module.exports = router
