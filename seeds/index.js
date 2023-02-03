const sequelize = require('../config/connection');
const seedBlogposts = require('./blogposts');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogposts();

  process.exit(0);
};

seedAll();
