const router = require('express').Router()
const controller = require('../controllers/MoodController')
const { route } = require('./UserRouter')

router.post('/', controller.CreateMood)
router.delete('/:mood_id', controller.DeleteMood)
router.get('/', controller.GetMoods)
router.get('/:mood_id', controller.GetMoodById)


module.exports = router
