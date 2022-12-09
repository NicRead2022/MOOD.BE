const { Song, Playlist , Mood } = require('../models')
const songs = require('../models/songs')

const GetAllSongs = async (req, res) => {
  try {
    const songs = await Song.findAll()
    res.send(songs)
  } catch (error) {
    throw error
  }
}

const GetOneSong = async (req, res) => {
  try {
    const aSong = await Song.findByPk(req.params.song_id, {
      include: {
        model: songs,
        as: 'songName',
        include: { model: songs, where: { songId: req.params.song_id } }
      }
    })
    res.send(aSong)
  } catch (error) {
    throw error
  }
}

const CreateSong = async (req, res) => {
  try {
    const newSong = await Song.create({ ...req.body })
    res.send(newSong)
  } catch (error) {
    throw error
  }
}

const UpdateSong = async (req, res) => {
  try {
    const UpdateSong = await Song.update(
      { ...req.body },
      { where: { id: req.params.song_id }, returning: true }
    )
    res.send(updateASong)
  } catch (error) {
    throw error
  }
}

const DeleteSong = async (req, res) => {
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
  GetAllSongs,
  GetOneSong,
  CreateSong,
  UpdateSong,
  DeleteSong
}