const router = require('express').Router()
const controller = require('../controllers/PlaylistController')

router.post('/', controller.CreatePlaylist)
// router.delete('/:playlist_id', controller.DeletePlaylist)
router.get('/all', controller.FindAllPlaylistWithSong)
router.get('/:mood_id', controller.GetPlaylistByMood)
module.exports = router

