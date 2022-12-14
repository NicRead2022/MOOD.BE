const router = require('express').Router()
const controller = require('../controllers/SongController')

router.get('/all', controller.GetAllSongs)
router.get('/playlist/:playlist_id', controller.GetSongsByPlaylist)
router.get('/:song_id', controller.GetOneSong)
router.post('/all', controller.CreateSong)
router.put('/:song_id', controller.UpdateSong)
router.delete('/:song_id', controller.DeleteSong)

module.exports = router



