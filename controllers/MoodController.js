const { Song, Playlist , Mood } = require('../models')
const songs = require('../models/moods')

const CreateMood = async (req, res) => {
  try {
    const newMood = await Mood.create({ ...req.body })
    res.send(newMood)
  } catch (error) {
    throw error
  }
}

const DeleteMood = async (req, res) => {
  try {
    await Mood.destroy({ where: { id: req.params.mood_id } })
    res.send({
      msg: 'Mood Deleted',
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateMood,
  DeleteMood
}