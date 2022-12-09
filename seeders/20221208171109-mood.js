module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'moods',
      [
        {
          feelings: 'Happy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          feelings: 'Sad',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          feelings: 'Rage',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('moods', null, {})
  }
}