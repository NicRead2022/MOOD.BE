'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Mood.hasMany(models.Playlist, {
      foreignKey: "moodId"
     })
    }
  }
  Mood.init({
    feelings: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Moods',
    tableName: 'moods'
  });
  return Mood;
};