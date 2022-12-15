const { Song, Playlist , Moods } = require('../models')
const songs = require('../models/mood')


const GetMoods = async (req, res) => {
  try {
    const moods = await Moods.findAll()
    res.send(moods)
  } catch (error) {
    throw error
  }
}
const CreateMood = async (req, res) => {
  try {
    const newMood = await Moods.create({ ...req.body })
    res.send(newMood)
  } catch (error) {
    throw error
  }
}

const DeleteMood = async (req, res) => {
  try {
    await Moods.destroy({ where: { id: req.params.mood_id } })
    res.send({
      msg: 'Mood Deleted',
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}
const GetMoodById = async (req, res) => {
  try {
    const moods = await Moods.findAll({ where: { id: req.params.mood_id } })
    res.send(moods)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateMood,
  DeleteMood,
  GetMoods,
  GetMoodById
}