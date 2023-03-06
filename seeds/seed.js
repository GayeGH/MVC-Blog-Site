const sequelize = require('../config/connection');
const { User, Blogposts } = require('../models');

const userData = require('./userData.json');
const blogpostsData = require('./blogpostsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const Blogposts of blogpostsData) {
    await Blogposts.create({
      ...blogposts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();