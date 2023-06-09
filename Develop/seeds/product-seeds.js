const { Product } = require('../models');

const productData = [
  {
    product_name: 'Nintendo Switch',
    price: 299.99,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'iPhone 14',
    price: 899.99,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: 'Trucker Hat',
    price: 29.99,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Headphones',
    price: 249.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'NoteBook',
    price: 14.99,
    stock: 45,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
