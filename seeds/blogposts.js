const Blogposts  = require('../models/blogposts');

const blogpostsData = [
  {
    title: 'Why MVC Is So Important',
    author: 'Bob Green',
    date_published: 'June 6,2021',
    article: 'MVC allows developers to maintain a true seperation of concerns, devising their code between the Model layer for data, the View layer for design and the Controller layer for application logic.'
  },
  {
    title: 'Authentication vs. Authorization',
    author: 'Kerry Talbot',
    date_published: 'December 3,2019',
    article: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.'
    
  },
  {
    title: 'Object Relational Mapping',
    author: 'Reid Smith',
    date_published: 'April 9, 2020',
    article: 'I have really loved learning about ORMs. It has simplified the way I create queries in SQL!'
    
  },
  
];

const seedBlogposts = () => Blogposts.bulkCreate(blogpostsData);

module.exports = seedBlogposts;
