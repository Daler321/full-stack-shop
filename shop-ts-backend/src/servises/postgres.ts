import knex from 'knex';

import products from '../mock-data/products.json';
import comments from '../mock-data/comments.json';
import categories from '../mock-data/categories.json';

export const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI,
});

export const insertMockData = async () => {
  await db('products').insert(products);
  await db('comments').insert(comments);
  await db('categories').insert(categories);
};
