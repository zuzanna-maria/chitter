const db = require('./models')

const seedDatabase = async () => {
  console.log('seeding database')
    await db.Cheep.create({
    text: 'a test cheep',
    createdAt: new Date('2021', '4', '10', '10', '30'),
    updatedAt: new Date('2021', '4', '10', '10', '30'),
    username: 'random_user_1',

  }, {
    include: [{
      association: db.Cheep.User
    }]
  });
  //console.log(Cheep)
}

module.exports = seedDatabase
