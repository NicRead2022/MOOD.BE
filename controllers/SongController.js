const { Songs, Playlist , Mood } = require('../models')


const GetAllSongs = async (req, res) => {
  try {
    const songs = await Songs.findAll()
    res.send(songs)
  } catch (error) {
    throw error
  }
}

const GetOneSong = async (req, res) => {
  try {
    const aSong = await Songs.findByPk(req.params.song_id, {
      // include: {
      //   model: songs,
      //   as: 'songName',
      //   include: { model: songs, where: { songId: req.params.song_id } }
      // }
    })
    res.send(aSong)
  } catch (error) {
    throw error
  }
}

const CreateSong = async (req, res) => {
  try {
    const newSong = await Songs.create(req.body)
    res.send(newSong)
  } catch (error) {
    throw error
  }
}

const UpdateSong = async (req, res) => {
  try {
    const updateSong = await Songs.update(
      { ...req.body },
      { where: { id: req.params.song_id }, returning: true }
    )
    res.send(updateSong)
  } catch (error) {
    throw error
  }
}

const DeleteSong = async (req, res) => {
  try {
    await Songs.destroy({ where: { id: req.params.song_id } })
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