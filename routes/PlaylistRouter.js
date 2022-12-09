const router = require('express').Router()
const controller = require('../controllers/PlaylistController')

router.post('/', controller.CreatePlaylist)
router.delete('/:song_id', controller.DeletePlaylist)

module.exports = router

