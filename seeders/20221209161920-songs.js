module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'songs',
      [
        {
          songName: 'When the Partys Over',
          playlistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          songName: 'Someone You Loved',
          playlistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          songName: 'Misery Business',
          playlistId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          songName: 'Mothers Daughter',
          playlistId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          songName: 'Church',
          playlistId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          songName: 'STRUT',
          playlistId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('songs', null, {})
  }
}