const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Console',
  },
  {
    category_name: 'Books',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Cell Phones',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
