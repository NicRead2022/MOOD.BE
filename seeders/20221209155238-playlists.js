module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Sad Playlist 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sad Playlist 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rage Playlist 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rage Playlist 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Happy Playlist 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Happy Playlist 1',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}