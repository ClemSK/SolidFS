// interface Trips {
//     location: string,
//     milage: number,
// }

import { pool } from './db/db';

// functions for working with trips we can then convert into API routes or RPC calls
// todo: try using prisma for get request
export function getProducts() {
  const products = pool.query(`SELECT * FROM product;`);
  //   console.log(
  //     'pool.query(`SELECT * FROM product;`)',
  //     pool.query(`SELECT * FROM product;`)
  //   );

  try {
    return products;
  } catch (err) {
    return console.error('Error executing query', err.stack);
  }
}

export function createProduct(newProduct: {
  name: string;
  price: number;
  stock: number;
}) {
  return pool.query(
    `
    INSERT INTO product(name, price, stock) 
    VALUES ('${newProduct.name}',${newProduct.price},${newProduct.stock})
    RETURNING *;
    `
  );
}

// todo: look up SQL way for PUT / PATCH requests
// export function updateTrip(
//   id: number,
//   updatedProduct: { location: string; mileage: number }
// ) {
//   products[id] = updatedProducts;
//   return trips;
// }

// export function deleteTrip(id: number) {
//   trips.splice(id, 1);
//   return trips;
// }
