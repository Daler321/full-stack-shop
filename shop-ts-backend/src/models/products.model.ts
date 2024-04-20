import { db } from '../servises/postgres';

import {
  ICategory,
  IProduct,
  IReturnPrducts,
  IReturnSingleItem,
} from '../types/products.types';

import { productsReturnFn } from '../utils/products.utils';
// ________________________________________________________________________________________

export async function getProducts(
  skip: number,
  limit: number
): Promise<IReturnPrducts> {
  const total: { count: string }[] = await db('products').count('id');

  if (!limit)
    return productsReturnFn(
      await db('products'),
      limit,
      skip,
      Number(total[0].count)
    );

  return productsReturnFn(
    await db('products').limit(limit).offset(skip),
    limit,
    skip,
    Number(total[0].count)
  );
}
// ________________________________________________________________________________________

// await db.schema.createTable('products', function (table) {
//   table.increments('id').unique();
//   table.string('title');
//   table.text('description');
//   table.integer('price');
//   table.float('discountPercentage');
//   table.float('rating');
//   table.integer('stock');
//   table.string('brand');
//   table.string('category');
//   table.specificType('images', 'VARCHAR(255)[]');
// });
// ________________________________________________________________________________________

export async function getCatigories(): Promise<ICategory[]> {
  return await db('categories');
}
// ________________________________________________________________________________________

export async function getCategoryItems(
  category: string,
  skip: number,
  limit: number
): Promise<IReturnPrducts> {
  const total: { count: string }[] = await db('products')
    .where('category', category)
    .count('id');

  if (!limit)
    return productsReturnFn(
      await db('products').where('category', category),
      limit,
      skip,
      Number(total[0].count)
    );

  return productsReturnFn(
    await db('products').where('category', category).limit(limit).offset(skip),
    limit,
    skip,
    Number(total[0].count)
  );
}
// ________________________________________________________________________________________

export async function getFiltredItems(
  query: string,
  skip: number,
  limit: number
): Promise<IReturnPrducts> {
  const filtredProducts = await db('products')
    .whereILike('title', `%${query}%`)
    .orWhereILike('description', `%${query}%`)
    .orWhereILike('category', `%${query}%`);

  if (!limit)
    return productsReturnFn(
      filtredProducts,
      limit,
      skip,
      filtredProducts.length
    );

  return productsReturnFn(
    filtredProducts.slice(skip, skip + limit),
    limit,
    skip,
    filtredProducts.length
  );
}
// ________________________________________________________________________________________

export async function getSingleItem(id: number): Promise<IReturnSingleItem> {
  const item = await db('products').where('id', id);
  return {
    item: item[0],
    comments: await db('comments').where('productid', id),
  };
}
// ________________________________________________________________________________________

export async function getArrayItems(itemsId: number[]): Promise<IProduct[]> {
  return await db('products').whereIn('id', itemsId);
}
// ________________________________________________________________________________________
