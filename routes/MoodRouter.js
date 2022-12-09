const router = require('express').Router()
const controller = require('../controllers/MoodController')

router.post('/', controller.CreateMood)
router.delete('/:mood_id', controller.DeleteMood)

module.exports = router
