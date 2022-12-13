const router = require('express').Router()
const UserRouter = require('./UserRouter')
const MoodRouter = require('./MoodRouter')
const PlaylistRouter = require('./PlaylistRouter')
const SongRouter = require('./SongRouter')
// const AuthRouter = require('./AuthRouter')

router.use('/user', UserRouter)
router.use('/mood', MoodRouter)
router.use('/playlist', PlaylistRouter)
router.use('/song', SongRouter)
// router.use('/auth', AuthRouter)

module.exports = router