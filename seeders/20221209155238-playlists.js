module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'playlists',
      [
        {
          name: 'Sad Playlist 1',
          moodId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sad Playlist 2',
          moodId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rage Playlist 1',
          moodId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rage Playlist 2',
          moodId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Happy Playlist 1',
          moodId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Happy Playlist 1',
          moodId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('playlists', null, {})
  }
}