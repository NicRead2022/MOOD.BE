'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    
    static associate(models) {
      Playlist.hasMany(models.Songs, {
        foreignKey: "playlistId",
        as: "playlist_songs"
      })
      Playlist.belongsTo(models.Moods, {
        foreignKey: "moodId",
      }

      )
  }}

  Playlist.init({
    name: DataTypes.STRING,
    moodId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "moods",
        key: "id"
    }
  }}, {
    sequelize,
    modelName: 'Playlist',
    tableName: 'playlists'
  });
  return Playlist;
};