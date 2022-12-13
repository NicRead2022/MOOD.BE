'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Songs.belongsTo(models.Playlist, {foreignKey: "playlistId"})
    }
  }
  Songs.init({
    songName: DataTypes.STRING,
    playlistId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "playlists",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Songs',
    tableName: 'songs'
  });
  return Songs;
};