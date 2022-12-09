module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'songs',
      [
        {
          songName: 'When the Partys Over',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          songName: 'Someone You Loved',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          songName: 'Misery Business',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          songName: 'Mothers Daughter',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          songName: 'Church',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          songName: 'STRUT',
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