const { Playlist , Songs } = require('../models')
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
    await Playlist.destroy({ where: { id: req.params.playlist_id } })
    res.send({
      msg: 'Playlist Deleted',
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}
const FindAllPlaylistWithSong = async (req, res) => {
  try {
    const playlist = await Playlist.findAll({ 
      include: [
        {
          model: Songs, 
          as:"playlist_songs"
        }
      ]
    })
    res.send(playlist)
  } catch (error) {
    throw error
  }
}
const GetPlaylistByMood = async (req, res) => {
  try {
    const playlist = await Playlist.findAll({ 
     where:{
      moodId: req.params.mood_id
     }
    })
    res.send(playlist)
  } catch (error) {
    throw error
  }
}


module.exports = {
  CreatePlaylist,
  DeletePlaylist,
  FindAllPlaylistWithSong,
  GetPlaylistByMood
}