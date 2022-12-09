const { Playlist , } = require('../models')
const songs = require('../models/playlist')



const CreatePlaylist = async (req, res) => {
  try {
    const newPlaylist = await Playlist.create({ ...req.body })
    res.send(newPlaylist)
  } catch (error) {
    throw error
  }
}



const DeletePlaylist = async (req, res) => {
  try {
    await Song.destroy({ where: { id: req.params.song_id } })
    res.send({
      msg: 'Song Deleted',
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreatePlaylist,
  DeletePlaylist
}